import {
  AGENT_CLASSES,
  DEFAULT_VULNERABILITY_WEIGHTS,
  ELECTRICITY_ZONES,
  REGIONS,
  TECHNOLOGY_ASSUMPTIONS
} from "./calibration/defaults";
import { parseScenario } from "./scenarioSchema";
import { createRng, type Rng } from "./rng";
import { makeTimeline, formatTickLabel } from "./scheduler";
import { clearElectricityMarkets } from "./markets/electricityMarket";
import {
  buildPriceDecomposition,
  clearTokenMarket,
  demandAtPrice
} from "./markets/tokenMarket";
import { computeCapacityLayers } from "./markets/gridConnectionMarket";
import {
  activatePipeline,
  planInvestment,
  type PipelineProject
} from "./markets/investmentMarket";
import { computePueFactor } from "./agents/dataCentres";
import { gridGapRatio } from "./agents/gridOperators";
import { localRequirementShare } from "./agents/regulators";
import { retailMarkupFromServiceLevel } from "./agents/tokenProviders";
import { computeVulnerabilityIndex, sumPriceDecomposition } from "./metrics";
import type {
  AgentClass,
  AgentMetric,
  DemandSlice,
  ElectricityZoneCalibration,
  PriceDecomposition,
  ScenarioInput,
  SimulationResult,
  TickMetrics,
  ZoneMetric
} from "./types";

function yearsSinceStart(year: number, startYear: number): number {
  return Math.max(0, year - startYear);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function advanceWeatherStress(params: {
  zones: ElectricityZoneCalibration[];
  previousStress: Map<string, number>;
  rng: Rng;
  volatility: number;
  persistence: number;
}): Record<string, number> {
  const crossZoneCorrelation = 0.6;
  const idiosyncraticWeight = Math.sqrt(1 - crossZoneCorrelation ** 2);
  const commonInnovation = params.rng.normal();

  return Object.fromEntries(
    params.zones.map((zone) => {
      const previous = params.previousStress.get(zone.zone) ?? 0;
      const innovation =
        crossZoneCorrelation * commonInnovation +
        idiosyncraticWeight * params.rng.normal();
      const nextStress = clamp(
        params.persistence * previous + params.volatility * innovation,
        -2.5,
        2.5
      );
      params.previousStress.set(zone.zone, nextStress);
      return [zone.zone, nextStress];
    })
  );
}

function adoptionGrowthForAgent(agent: AgentClass, scenario: ScenarioInput): number {
  if (agent.kind === "consumer") {
    return scenario.demand.consumerAdoptionGrowth;
  }
  if (agent.kind === "public") {
    return scenario.demand.publicSectorAdoptionGrowth;
  }
  if (agent.kind === "provider") {
    return scenario.demand.aiProviderInternalGrowth;
  }
  return scenario.demand.firmAdoptionGrowth;
}

function demandMultiplierForAgent(
  agent: AgentClass,
  scenario: ScenarioInput,
  year: number
): number {
  const elapsed = yearsSinceStart(year, scenario.timeline.startYear);
  const adoption = Math.pow(1 + adoptionGrowthForAgent(agent, scenario), elapsed);
  const workflowRamp = Math.min(
    1,
    Math.max(0, (year - scenario.timeline.startYear) / (2030 - scenario.timeline.startYear))
  );
  const workflow =
    1 + (scenario.demand.agenticWorkflowMultiplier2030 - 1) * workflowRamp;
  const firmIntensity =
    agent.kind === "firm" ? scenario.demand.firmTokenIntensity : 1;
  const publicDependence =
    agent.kind === "public" ? scenario.demand.publicSectorAiDependence : 1;
  const providerBatching = agent.kind === "provider" ? 1.04 : 1;

  return adoption * workflow * firmIntensity * publicDependence * providerBatching;
}

function isShockActive(scenario: ScenarioInput, year: number): boolean {
  return (
    scenario.regulation.euOnlyComputeStartYear !== null &&
    year >= scenario.regulation.euOnlyComputeStartYear
  );
}

function buildDemandSlices(scenario: ScenarioInput, year: number): DemandSlice[] {
  const shockActive = isShockActive(scenario, year);
  const scope = shockActive ? scenario.regulation.scope : "none";

  return AGENT_CLASSES.map((agent) => {
    const rawDemand =
      agent.baseDemand * demandMultiplierForAgent(agent, scenario, year);
    const localShare = localRequirementShare(agent, scope);
    const localDemand = rawDemand * localShare;
    return {
      agent,
      rawDemand,
      localDemand,
      flexibleDemand: Math.max(0, rawDemand - localDemand),
      criticalDemand: rawDemand * agent.criticalShare,
      elasticity: agent.elasticity
    };
  });
}

function weightedElasticity(slices: DemandSlice[], field: "localDemand" | "flexibleDemand") {
  const total = slices.reduce((sum, slice) => sum + slice[field], 0);
  if (total <= 0) {
    return 0.5;
  }
  return (
    slices.reduce((sum, slice) => sum + slice[field] * slice.elasticity, 0) / total
  );
}

function allocateAgents(params: {
  slices: DemandSlice[];
  localPrice: number;
  flexiblePrice: number;
  localSupplied: number;
  flexibleSupplied: number;
  publicPriority: boolean;
}): AgentMetric[] {
  const localDemand = params.slices.reduce((sum, slice) => sum + slice.localDemand, 0);
  const flexibleDemand = params.slices.reduce(
    (sum, slice) => sum + slice.flexibleDemand,
    0
  );
  const flexibleServedRatio =
    flexibleDemand > 0 ? Math.min(1, params.flexibleSupplied / flexibleDemand) : 1;

  const sorted = params.publicPriority
    ? [...params.slices].sort((a, b) => {
        const publicRank =
          (b.agent.kind === "public" ? 2 : b.agent.criticalShare) -
          (a.agent.kind === "public" ? 2 : a.agent.criticalShare);
        return publicRank;
      })
    : [...params.slices];

  const localAllocations = new Map<string, number>();
  let remainingLocal = params.localSupplied;
  for (const slice of sorted) {
    const proportional =
      localDemand > 0 ? (slice.localDemand / localDemand) * params.localSupplied : 0;
    const allocation = params.publicPriority
      ? Math.min(slice.localDemand, Math.max(0, remainingLocal))
      : proportional;
    localAllocations.set(slice.agent.id, allocation);
    remainingLocal -= allocation;
  }

  return params.slices.map((slice) => {
    const localServed = localAllocations.get(slice.agent.id) ?? 0;
    const flexibleServed = slice.flexibleDemand * flexibleServedRatio;
    const served = localServed + flexibleServed;
    const unmet = Math.max(0, slice.rawDemand - served);
    const criticalUnmet = Math.max(0, slice.criticalDemand - served);
    const pricePaid =
      served > 0
        ? (localServed * params.localPrice + flexibleServed * params.flexiblePrice) / served
        : params.localPrice;

    return {
      id: slice.agent.id,
      label: slice.agent.label,
      kind: slice.agent.kind,
      demand: slice.rawDemand,
      served,
      unmet,
      criticalUnmet,
      pricePaid,
      productivityLoss:
        slice.agent.kind === "firm" || slice.agent.kind === "provider"
          ? criticalUnmet * slice.agent.productivityMultiplier
          : 0,
      publicServiceLoss:
        slice.agent.kind === "public" ? criticalUnmet * slice.agent.productivityMultiplier : 0
    };
  });
}

function buildZoneMetrics(params: {
  electricityMarket: ReturnType<typeof clearElectricityMarkets>;
  criticalUnmet: number;
  localDemand: number;
}): ZoneMetric[] {
  return ELECTRICITY_ZONES.map((zone) => {
    const region = REGIONS.find((candidate) => candidate.zone === zone.zone);
    const price = params.electricityMarket.zonePrices.find(
      (candidate) => candidate.zone === zone.zone
    );
    const demandWeight = region?.demandWeight ?? 0.1;
    return {
      zone: zone.zone,
      name: region?.name ?? zone.zone,
      electricityPriceIndex: price?.electricityPriceIndex ?? zone.basePriceIndex,
      weatherStressIndex: price?.weatherStressIndex ?? 0,
      weatherPriceComponent: price?.weatherShockComponent ?? 0,
      dataCentreLoadIndex: price?.dataCentreLoadIndex ?? 0,
      gridHeadroomIndex: price?.gridHeadroomIndex ?? 0,
      congestionMarkup: price?.congestionMarkup ?? 0,
      unmetCriticalDemand:
        params.localDemand > 0 ? params.criticalUnmet * demandWeight : 0,
      lat: region?.lat ?? 50,
      lon: region?.lon ?? 12
    };
  });
}

function mergeDecomposition(base: PriceDecomposition, additions: Partial<PriceDecomposition>) {
  return {
    ...base,
    ...Object.fromEntries(
      Object.entries(additions).map(([key, value]) => [key, value ?? 0])
    )
  } as PriceDecomposition;
}

export function runSimulation(input: ScenarioInput): SimulationResult {
  const scenario = parseScenario(input);
  const rng = createRng(scenario.seed ?? scenario.id);
  const timeline = makeTimeline(
    scenario.timeline.startYear,
    scenario.timeline.endYear,
    scenario.timeline.step
  );
  const weights = scenario.vulnerabilityWeights ?? DEFAULT_VULNERABILITY_WEIGHTS;
  const tech = TECHNOLOGY_ASSUMPTIONS;
  let pipeline: PipelineProject[] = [];
  let operationalCapacityBonus = 0;
  const weatherStressState = new Map(
    ELECTRICITY_ZONES.map((zone) => [zone.zone, 0])
  );
  const metrics: TickMetrics[] = [];

  for (let tick = 0; tick < timeline.length; tick += 1) {
    const year = timeline[tick];
    const elapsed = yearsSinceStart(year, scenario.timeline.startYear);
    const activated = activatePipeline(pipeline, year);
    pipeline = activated.remaining;
    operationalCapacityBonus += activated.activatedCapacity;

    const tokensPerMWhFactor = Math.pow(
      1 + scenario.technology.tokensPerMWhImprovementAnnual,
      elapsed
    );
    const pueFactor = computePueFactor(
      tech.baselinePue,
      scenario.technology.pueImprovementAnnual,
      elapsed
    );
    const electricityMWhPerTokenIndex =
      (tech.baselineElectricityMWhPerTokenIndex * pueFactor) / tokensPerMWhFactor;

    const capacityLayers = computeCapacityLayers({
      yearsElapsed: elapsed,
      baselineGpuCapacity: tech.baselineGpuCapacity,
      baselineDataCentreCapacity: tech.baselineDataCentreCapacity,
      baselineGridConnectionCapacity: tech.baselineGridConnectionCapacity,
      baselineGlobalTokenCapacity: tech.baselineGlobalTokenCapacity,
      baselineAlliedTokenCapacity: tech.baselineAlliedTokenCapacity,
      gpuSupplyGrowthAnnual: scenario.technology.gpuSupplyGrowthAnnual,
      gridExpansionSpeedMultiplier: scenario.electricity.gridExpansionSpeedMultiplier,
      tokensPerMWhFactor,
      operationalCapacityBonus,
      moratoriumSeverity: scenario.dataCentres.moratoriumSeverity
    });

    const slices = buildDemandSlices(scenario, year);
    const totalDemand = slices.reduce((sum, slice) => sum + slice.rawDemand, 0);
    const localDemand = slices.reduce((sum, slice) => sum + slice.localDemand, 0);
    const flexibleDemand = slices.reduce((sum, slice) => sum + slice.flexibleDemand, 0);
    const criticalDemand = slices.reduce(
      (sum, slice) => sum + slice.criticalDemand * (slice.localDemand / Math.max(slice.rawDemand, 1)),
      0
    );
    const localElasticity = weightedElasticity(slices, "localDemand");
    const flexibleElasticity = weightedElasticity(slices, "flexibleDemand");
    const shockActive = isShockActive(scenario, year);
    const alliedCertifiedCapacity =
      shockActive && scenario.regulation.foreignComputeAccess === "allied"
        ? capacityLayers.alliedTokenCapacity * 0.55
        : 0;
    const effectiveCertifiedCapacity =
      capacityLayers.euLocalTokenCapacity + alliedCertifiedCapacity;

    const provisionalEuServed = Math.min(localDemand, capacityLayers.euLocalTokenCapacity);
    const weatherStressByZone = advanceWeatherStress({
      zones: ELECTRICITY_ZONES,
      previousStress: weatherStressState,
      rng,
      volatility: scenario.electricity.weatherVolatility,
      persistence: scenario.electricity.weatherPersistence
    });
    const electricityMarket = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: provisionalEuServed * (electricityMWhPerTokenIndex / 100),
      gridExpansionSpeedMultiplier: scenario.electricity.gridExpansionSpeedMultiplier,
      priceConvexity: scenario.electricity.priceConvexity,
      basePriceShock: scenario.electricity.basePriceShock,
      scarcityShock: scenario.electricity.scarcityShock,
      weatherStressByZone,
      weatherPriceSensitivity: scenario.electricity.weatherPriceSensitivity
    });

    const electricityCost = 28 * (electricityMarket.euAveragePriceIndex / 100) * (electricityMWhPerTokenIndex / 100);
    const gpuCost =
      tech.amortizedGpuCostIndex *
      Math.pow(tech.baselineGpuCapacity / Math.max(capacityLayers.gpu, 1), 0.18);
    const dataCentreCost =
      tech.amortizedDataCentreCostIndex *
      Math.pow(tech.baselineDataCentreCapacity / Math.max(capacityLayers.dataCentre, 1), 0.14);
    const operationsCost = tech.operationsCostIndex * pueFactor;
    const complianceCost =
      tech.complianceCostIndex + scenario.regulation.carbonConstraint * 18;
    const regulationWedge =
      shockActive && scenario.regulation.scope !== "none"
        ? scenario.regulation.foreignComputeAccess === "eu_only"
          ? 6
          : 2.5
        : 0;
    const localMarginalCost =
      electricityCost +
      gpuCost +
      dataCentreCost +
      operationsCost +
      complianceCost +
      regulationWedge;

    const gridGap = Math.max(
      0,
      localDemand - capacityLayers.grid * tokensPerMWhFactor
    );
    const gpuGap = Math.max(0, localDemand - capacityLayers.gpu * tokensPerMWhFactor);
    const dataCentreGap = Math.max(
      0,
      localDemand - capacityLayers.dataCentre * tokensPerMWhFactor
    );
    const localMarket = clearTokenMarket({
      demandAtReferencePrice: localDemand,
      criticalDemandAtReferencePrice: criticalDemand,
      elasticity: localElasticity,
      capacity: effectiveCertifiedCapacity,
      marginalCost: localMarginalCost,
      markupRate: retailMarkupFromServiceLevel(
        tech.providerMarkupRate,
        gridGapRatio(localDemand, capacityLayers.grid * tokensPerMWhFactor)
      ),
      maxWillingnessToPay: 380,
      priceCap: scenario.regulation.tokenPriceCap,
      scarcityWeights: {
        grid: gridGap,
        gpu: gpuGap,
        dataCentre: dataCentreGap
      }
    });

    const providerMarkup = localMarket.normalPrice - localMarginalCost;
    const localDecomposition = buildPriceDecomposition({
      electricityCost,
      gpuCost,
      dataCentreCost,
      operationsCost,
      complianceCost,
      markup: providerMarkup,
      scarcityRent: localMarket.scarcityRent,
      regulationWedge,
      scarcityWeights: {
        grid: gridGap,
        gpu: gpuGap,
        dataCentre: dataCentreGap
      }
    });

    const flexibleCapacity =
      scenario.regulation.foreignComputeAccess === "eu_only" && scenario.regulation.scope === "all_eu"
        ? 0
        : scenario.regulation.foreignComputeAccess === "allied"
          ? capacityLayers.alliedTokenCapacity * 0.45 + capacityLayers.globalTokenCapacity * 0.22
          : capacityLayers.globalTokenCapacity;
    const flexibleMarginalCost = 82 + 3 * scenario.electricity.basePriceShock;
    const flexibleMarket = clearTokenMarket({
      demandAtReferencePrice: flexibleDemand,
      criticalDemandAtReferencePrice: flexibleDemand * 0.28,
      elasticity: flexibleElasticity,
      capacity: flexibleCapacity,
      marginalCost: flexibleMarginalCost,
      markupRate: 0.1,
      maxWillingnessToPay: 220,
      priceCap: null,
      scarcityWeights: {
        grid: 0,
        gpu: Math.max(0, flexibleDemand - flexibleCapacity),
        dataCentre: 0
      }
    });

    const insideEuServed = Math.min(localMarket.supplied, capacityLayers.euLocalTokenCapacity);
    const certifiedForeignServed = Math.max(0, localMarket.supplied - insideEuServed);
    const globalForeignServed = flexibleMarket.supplied;
    const totalServed = localMarket.supplied + flexibleMarket.supplied;
    const blendedTokenPrice =
      totalServed > 0
        ? (localMarket.price * localMarket.supplied +
            flexibleMarket.price * flexibleMarket.supplied) /
          totalServed
        : localMarket.price;

    const euTokenPriceIndex =
      (blendedTokenPrice / tech.referenceTokenPriceIndex) * 100;
    const electricityPriceIndex = electricityMarket.euAveragePriceIndex;

    const agentMetrics = allocateAgents({
      slices,
      localPrice: localMarket.price,
      flexiblePrice: flexibleMarket.price,
      localSupplied: localMarket.supplied,
      flexibleSupplied: flexibleMarket.supplied,
      publicPriority: scenario.regulation.publicSectorPriority
    });

    const unmetTokenDemand = Math.max(0, totalDemand - totalServed);
    const criticalUnmetTokenDemand = agentMetrics.reduce(
      (sum, agent) => sum + agent.criticalUnmet,
      0
    );
    const firmProductivityLoss = agentMetrics.reduce(
      (sum, agent) => sum + agent.productivityLoss,
      0
    );
    const publicServiceLoss = agentMetrics.reduce(
      (sum, agent) => sum + agent.publicServiceLoss,
      0
    );
    const consumerSurplusLoss =
      (agentMetrics.find((agent) => agent.id === "consumers")?.unmet ?? 0) *
      Math.max(0, euTokenPriceIndex - 90) /
      100;

    const shareDemandServedInsideEu = totalServed > 0 ? insideEuServed / totalServed : 0;
    const foreignComputeDependencyRatio =
      totalServed > 0
        ? (certifiedForeignServed + globalForeignServed) / totalServed
        : 0;
    const localComputeAdequacyRatio =
      localDemand > 0 ? capacityLayers.euLocalTokenCapacity / localDemand : 1;
    const gridConnectionGap = gridGapRatio(
      localDemand,
      capacityLayers.grid * tokensPerMWhFactor
    );
    const tokenPriceShockRatio = Math.max(0, euTokenPriceIndex - 100) / 100;
    const criticalUnmetRatio =
      criticalDemand > 0 ? criticalUnmetTokenDemand / criticalDemand : 0;
    const publicServiceDegradationIndex =
      publicServiceLoss /
      Math.max(
        1,
        agentMetrics.find((agent) => agent.id === "public_sector")?.demand ?? 1
      );

    const scarcityRentShare =
      sumPriceDecomposition(localDecomposition) > 0
        ? (localDecomposition.gridScarcityRent +
            localDecomposition.gpuScarcityRent +
            localDecomposition.dataCentreScarcityRent) /
          sumPriceDecomposition(localDecomposition)
        : 0;
    const dataCentreElectricityConsumption =
      insideEuServed * (electricityMWhPerTokenIndex / 100) * tech.baselinePue;
    const emissionsProxy =
      dataCentreElectricityConsumption *
      (0.34 - Math.min(0.08, elapsed * 0.008)) *
      (1 + scenario.regulation.carbonConstraint);
    const welfareLoss =
      firmProductivityLoss + publicServiceLoss + consumerSurplusLoss + unmetTokenDemand * 0.08;
    const dataCentreInvestmentGap = Math.max(
      0,
      localDemand - capacityLayers.euLocalTokenCapacity
    );
    const vulnerabilityIndex = computeVulnerabilityIndex({
      weights,
      foreignComputeDependencyRatio,
      criticalUnmetRatio,
      gridConnectionGapRatio: gridConnectionGap,
      tokenPriceShockRatio,
      publicServiceExposureRatio: publicServiceDegradationIndex
    });

    const project = planInvestment({
      year,
      tokenPriceIndex: euTokenPriceIndex,
      localAdequacyRatio: localComputeAdequacyRatio,
      investmentSensitivity: scenario.dataCentres.investmentSensitivity * (0.96 + rng.between(0, 0.08)),
      buildTimeYears: scenario.dataCentres.buildTimeYears,
      gridConnectionDelayYears: scenario.dataCentres.gridConnectionDelayYears,
      permittingDelayYears: scenario.dataCentres.permittingDelayYears,
      subsidyPerMW: scenario.regulation.dataCentreSubsidyPerMW
    });
    if (project) {
      pipeline.push(project);
    }

    const zones = buildZoneMetrics({
      electricityMarket,
      criticalUnmet: criticalUnmetTokenDemand,
      localDemand
    });

    const priceDecomposition = mergeDecomposition(localDecomposition, {});

    metrics.push({
      tick,
      year,
      label: formatTickLabel(year),
      euTokenPriceIndex,
      electricityPriceIndex,
      electricityBaseComponent: electricityMarket.euBaseComponent,
      electricityEndogenousLoadComponent:
        electricityMarket.euEndogenousLoadComponent,
      electricityCongestionComponent: electricityMarket.euCongestionComponent,
      electricityExogenousShockComponent:
        electricityMarket.euExogenousShockComponent,
      electricityWeatherComponent: electricityMarket.euWeatherComponent,
      weatherStressIndex: electricityMarket.euWeatherStressIndex,
      tokenElectricityPassThrough:
        Math.abs(electricityPriceIndex - 100) > 0.1
          ? (euTokenPriceIndex - 100) / (electricityPriceIndex - 100)
          : 0,
      localComputeAdequacyRatio,
      shareDemandServedInsideEu,
      foreignComputeDependencyRatio,
      gridConstrainedDataCentreLoad: gridConnectionGap * 100,
      unmetTokenDemand,
      criticalUnmetTokenDemand,
      firmProductivityLoss,
      publicServiceDegradationIndex: publicServiceDegradationIndex * 100,
      consumerSurplusLoss,
      dataCentreInvestmentGap,
      newOperationalDataCentreMW: activated.activatedCapacity * 20,
      averageTimeToPower: activated.averageTimeToPower,
      dataCentreElectricityConsumption,
      emissionsProxy,
      welfareLoss,
      scarcityRentShare,
      sovereignVulnerabilityIndex: vulnerabilityIndex,
      electricityMWhPerTokenIndex,
      localDemand,
      localSupply: localMarket.supplied,
      flexibleDemand,
      flexibleSupply: flexibleMarket.supplied,
      priceDecomposition,
      capacity: {
        gpu: capacityLayers.gpu,
        dataCentre: capacityLayers.dataCentre,
        grid: capacityLayers.grid,
        euLocalTokenCapacity: capacityLayers.euLocalTokenCapacity,
        effectiveCertifiedCapacity,
        globalTokenCapacity: capacityLayers.globalTokenCapacity,
        alliedTokenCapacity: capacityLayers.alliedTokenCapacity
      },
      agents: agentMetrics,
      zones
    });
  }

  const summary = metrics[metrics.length - 1];
  return {
    scenarioId: scenario.id,
    scenarioName: scenario.name,
    generatedAt: new Date(0).toISOString(),
    timeline: metrics,
    summary
  };
}
