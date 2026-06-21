export type TimeStep = "month" | "quarter" | "year";
export type RegulationScope =
  | "none"
  | "public_only"
  | "regulated_and_public"
  | "all_eu";
export type ForeignComputeAccess = "global" | "allied" | "eu_only";
export type AgentKind = "consumer" | "firm" | "public" | "provider";

export interface ScenarioInput {
  id: string;
  name: string;
  description: string;
  timeline: {
    startYear: number;
    endYear: number;
    step: TimeStep;
  };
  regulation: {
    euOnlyComputeStartYear: number | null;
    scope: RegulationScope;
    foreignComputeAccess: ForeignComputeAccess;
    publicSectorPriority: boolean;
    tokenPriceCap: number | null;
    dataCentreSubsidyPerMW: number;
    carbonConstraint: number;
  };
  demand: {
    consumerAdoptionGrowth: number;
    firmAdoptionGrowth: number;
    publicSectorAdoptionGrowth: number;
    aiProviderInternalGrowth: number;
    firmTokenIntensity: number;
    publicSectorAiDependence: number;
    agenticWorkflowMultiplier2030: number;
  };
  technology: {
    tokensPerMWhImprovementAnnual: number;
    pueImprovementAnnual: number;
    gpuSupplyGrowthAnnual: number;
  };
  electricity: {
    basePriceShock: number;
    gridExpansionSpeedMultiplier: number;
    priceConvexity: number;
    scarcityShock: number;
    weatherVolatility: number;
    weatherPersistence: number;
    weatherPriceSensitivity: number;
  };
  dataCentres: {
    buildTimeYears: number;
    gridConnectionDelayYears: number;
    permittingDelayYears: number;
    investmentSensitivity: number;
    moratoriumSeverity: number;
  };
  vulnerabilityWeights?: VulnerabilityWeights;
  seed?: string;
}

export interface VulnerabilityWeights {
  foreignComputeDependency: number;
  unmetCriticalDemand: number;
  gridConnectionGap: number;
  tokenPriceShock: number;
  publicSectorExposure: number;
}

export interface AgentClass {
  id: string;
  label: string;
  kind: AgentKind;
  baseDemand: number;
  elasticity: number;
  criticalShare: number;
  regulatedShare: number;
  productivityMultiplier: number;
  sovereigntyRequirement: number;
}

export interface RegionCalibration {
  id: string;
  name: string;
  zone: string;
  lat: number;
  lon: number;
  demandWeight: number;
  regulatedFirmShare: number;
  publicExposure: number;
}

export interface ElectricityZoneCalibration {
  zone: string;
  basePriceIndex: number;
  referenceLoadIndex: number;
  gridHeadroomMW: number;
  dataCentreLoadMW: number;
  congestionFactor: number;
}

export interface TechnologyAssumptions {
  baselineTokensPerMWhIndex: number;
  baselinePue: number;
  baselineEuLocalTokenCapacity: number;
  baselineGlobalTokenCapacity: number;
  baselineAlliedTokenCapacity: number;
  baselineGpuCapacity: number;
  baselineDataCentreCapacity: number;
  baselineGridConnectionCapacity: number;
  baselineElectricityMWhPerTokenIndex: number;
  amortizedGpuCostIndex: number;
  amortizedDataCentreCostIndex: number;
  operationsCostIndex: number;
  complianceCostIndex: number;
  providerMarkupRate: number;
  referenceTokenPriceIndex: number;
}

export interface PriceDecomposition {
  electricity: number;
  gpuCapex: number;
  dataCentreCapex: number;
  operations: number;
  compliance: number;
  providerMarkup: number;
  gridScarcityRent: number;
  gpuScarcityRent: number;
  dataCentreScarcityRent: number;
  regulationWedge: number;
}

export interface CapacityMetrics {
  gpu: number;
  dataCentre: number;
  grid: number;
  euLocalTokenCapacity: number;
  effectiveCertifiedCapacity: number;
  globalTokenCapacity: number;
  alliedTokenCapacity: number;
}

export interface AgentMetric {
  id: string;
  label: string;
  kind: AgentKind;
  demand: number;
  served: number;
  unmet: number;
  criticalUnmet: number;
  pricePaid: number;
  productivityLoss: number;
  publicServiceLoss: number;
}

export interface ZoneMetric {
  zone: string;
  name: string;
  electricityPriceIndex: number;
  weatherStressIndex: number;
  weatherPriceComponent: number;
  dataCentreLoadIndex: number;
  gridHeadroomIndex: number;
  congestionMarkup: number;
  unmetCriticalDemand: number;
  lat: number;
  lon: number;
}

export interface TickMetrics {
  tick: number;
  year: number;
  label: string;
  euTokenPriceIndex: number;
  electricityPriceIndex: number;
  electricityBaseComponent: number;
  electricityEndogenousLoadComponent: number;
  electricityCongestionComponent: number;
  electricityExogenousShockComponent: number;
  electricityWeatherComponent: number;
  weatherStressIndex: number;
  tokenElectricityPassThrough: number;
  localComputeAdequacyRatio: number;
  shareDemandServedInsideEu: number;
  foreignComputeDependencyRatio: number;
  gridConstrainedDataCentreLoad: number;
  unmetTokenDemand: number;
  criticalUnmetTokenDemand: number;
  firmProductivityLoss: number;
  publicServiceDegradationIndex: number;
  consumerSurplusLoss: number;
  dataCentreInvestmentGap: number;
  newOperationalDataCentreMW: number;
  averageTimeToPower: number;
  dataCentreElectricityConsumption: number;
  emissionsProxy: number;
  welfareLoss: number;
  scarcityRentShare: number;
  sovereignVulnerabilityIndex: number;
  electricityMWhPerTokenIndex: number;
  localDemand: number;
  localSupply: number;
  flexibleDemand: number;
  flexibleSupply: number;
  priceDecomposition: PriceDecomposition;
  capacity: CapacityMetrics;
  agents: AgentMetric[];
  zones: ZoneMetric[];
}

export interface SimulationResult {
  scenarioId: string;
  scenarioName: string;
  generatedAt: string;
  timeline: TickMetrics[];
  summary: TickMetrics;
}

export interface DemandSlice {
  agent: AgentClass;
  rawDemand: number;
  localDemand: number;
  flexibleDemand: number;
  criticalDemand: number;
  elasticity: number;
}
