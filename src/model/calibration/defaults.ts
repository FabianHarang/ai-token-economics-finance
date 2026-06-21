import type {
  AgentClass,
  ElectricityZoneCalibration,
  RegionCalibration,
  ScenarioInput,
  TechnologyAssumptions,
  VulnerabilityWeights
} from "../types";

export const DEFAULT_VULNERABILITY_WEIGHTS: VulnerabilityWeights = {
  foreignComputeDependency: 0.28,
  unmetCriticalDemand: 0.25,
  gridConnectionGap: 0.2,
  tokenPriceShock: 0.17,
  publicSectorExposure: 0.1
};

export const TECHNOLOGY_ASSUMPTIONS: TechnologyAssumptions = {
  baselineTokensPerMWhIndex: 100,
  baselinePue: 1.21,
  baselineEuLocalTokenCapacity: 86,
  baselineGlobalTokenCapacity: 310,
  baselineAlliedTokenCapacity: 150,
  baselineGpuCapacity: 91,
  baselineDataCentreCapacity: 104,
  baselineGridConnectionCapacity: 82,
  baselineElectricityMWhPerTokenIndex: 100,
  amortizedGpuCostIndex: 28,
  amortizedDataCentreCostIndex: 18,
  operationsCostIndex: 10,
  complianceCostIndex: 5,
  providerMarkupRate: 0.12,
  referenceTokenPriceIndex: 100
};

export const AGENT_CLASSES: AgentClass[] = [
  {
    id: "consumers",
    label: "Consumers",
    kind: "consumer",
    baseDemand: 32,
    elasticity: 0.95,
    criticalShare: 0.1,
    regulatedShare: 0,
    productivityMultiplier: 0.25,
    sovereigntyRequirement: 0.05
  },
  {
    id: "regulated_firms",
    label: "Regulated firms",
    kind: "firm",
    baseDemand: 46,
    elasticity: 0.42,
    criticalShare: 0.48,
    regulatedShare: 1,
    productivityMultiplier: 1.2,
    sovereigntyRequirement: 0.8
  },
  {
    id: "unregulated_firms",
    label: "Unregulated firms and SMEs",
    kind: "firm",
    baseDemand: 38,
    elasticity: 0.62,
    criticalShare: 0.32,
    regulatedShare: 0,
    productivityMultiplier: 0.85,
    sovereigntyRequirement: 0.15
  },
  {
    id: "public_sector",
    label: "Public sector",
    kind: "public",
    baseDemand: 24,
    elasticity: 0.28,
    criticalShare: 0.72,
    regulatedShare: 1,
    productivityMultiplier: 1.5,
    sovereigntyRequirement: 1
  },
  {
    id: "ai_providers",
    label: "AI-provider internal compute",
    kind: "provider",
    baseDemand: 20,
    elasticity: 0.5,
    criticalShare: 0.38,
    regulatedShare: 0.35,
    productivityMultiplier: 0.95,
    sovereigntyRequirement: 0.25
  }
];

export const REGIONS: RegionCalibration[] = [
  {
    id: "de",
    name: "Germany",
    zone: "DE-LU",
    lat: 51.17,
    lon: 10.45,
    demandWeight: 0.24,
    regulatedFirmShare: 0.62,
    publicExposure: 0.18
  },
  {
    id: "fr",
    name: "France",
    zone: "FR",
    lat: 46.23,
    lon: 2.21,
    demandWeight: 0.19,
    regulatedFirmShare: 0.56,
    publicExposure: 0.2
  },
  {
    id: "nl",
    name: "Netherlands",
    zone: "NL",
    lat: 52.13,
    lon: 5.29,
    demandWeight: 0.11,
    regulatedFirmShare: 0.58,
    publicExposure: 0.13
  },
  {
    id: "es",
    name: "Spain",
    zone: "ES",
    lat: 40.46,
    lon: -3.75,
    demandWeight: 0.12,
    regulatedFirmShare: 0.51,
    publicExposure: 0.19
  },
  {
    id: "it",
    name: "Italy",
    zone: "IT-North",
    lat: 42.5,
    lon: 12.57,
    demandWeight: 0.14,
    regulatedFirmShare: 0.53,
    publicExposure: 0.18
  },
  {
    id: "nordics",
    name: "Nordics",
    zone: "NO-SE-FI",
    lat: 61.92,
    lon: 10.75,
    demandWeight: 0.1,
    regulatedFirmShare: 0.5,
    publicExposure: 0.16
  },
  {
    id: "rest_eu",
    name: "Rest of EU",
    zone: "EU-Mix",
    lat: 48,
    lon: 14,
    demandWeight: 0.1,
    regulatedFirmShare: 0.52,
    publicExposure: 0.19
  }
];

export const ELECTRICITY_ZONES: ElectricityZoneCalibration[] = [
  {
    zone: "DE-LU",
    basePriceIndex: 106,
    referenceLoadIndex: 220,
    gridHeadroomMW: 680,
    dataCentreLoadMW: 520,
    congestionFactor: 0.18
  },
  {
    zone: "FR",
    basePriceIndex: 92,
    referenceLoadIndex: 190,
    gridHeadroomMW: 760,
    dataCentreLoadMW: 390,
    congestionFactor: 0.1
  },
  {
    zone: "NL",
    basePriceIndex: 112,
    referenceLoadIndex: 80,
    gridHeadroomMW: 210,
    dataCentreLoadMW: 430,
    congestionFactor: 0.28
  },
  {
    zone: "ES",
    basePriceIndex: 96,
    referenceLoadIndex: 150,
    gridHeadroomMW: 540,
    dataCentreLoadMW: 210,
    congestionFactor: 0.09
  },
  {
    zone: "IT-North",
    basePriceIndex: 118,
    referenceLoadIndex: 160,
    gridHeadroomMW: 360,
    dataCentreLoadMW: 240,
    congestionFactor: 0.16
  },
  {
    zone: "NO-SE-FI",
    basePriceIndex: 78,
    referenceLoadIndex: 110,
    gridHeadroomMW: 820,
    dataCentreLoadMW: 360,
    congestionFactor: 0.07
  },
  {
    zone: "EU-Mix",
    basePriceIndex: 101,
    referenceLoadIndex: 250,
    gridHeadroomMW: 620,
    dataCentreLoadMW: 330,
    congestionFactor: 0.13
  }
];

export const SCENARIOS: ScenarioInput[] = [
  {
    id: "baseline_global_compute",
    name: "Baseline global compute",
    description:
      "EU users retain broad access to global AI compute while EU-local capacity grows gradually.",
    timeline: { startYear: 2026, endYear: 2035, step: "quarter" },
    regulation: {
      euOnlyComputeStartYear: null,
      scope: "none",
      foreignComputeAccess: "global",
      publicSectorPriority: false,
      tokenPriceCap: null,
      dataCentreSubsidyPerMW: 0,
      carbonConstraint: 0
    },
    demand: {
      consumerAdoptionGrowth: 0.1,
      firmAdoptionGrowth: 0.14,
      publicSectorAdoptionGrowth: 0.08,
      aiProviderInternalGrowth: 0.16,
      firmTokenIntensity: 1,
      publicSectorAiDependence: 1,
      agenticWorkflowMultiplier2030: 1.8
    },
    technology: {
      tokensPerMWhImprovementAnnual: 0.16,
      pueImprovementAnnual: 0.01,
      gpuSupplyGrowthAnnual: 0.22
    },
    electricity: {
      basePriceShock: 0,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2.05,
      scarcityShock: 0,
      weatherVolatility: 0.14,
      weatherPersistence: 0.65,
      weatherPriceSensitivity: 0.1
    },
    dataCentres: {
      buildTimeYears: 2.25,
      gridConnectionDelayYears: 3.5,
      permittingDelayYears: 1,
      investmentSensitivity: 0.65,
      moratoriumSeverity: 0
    }
  },
  {
    id: "eu_only_compute_shock",
    name: "EU-only compute shock",
    description:
      "From 2028, EU public-sector and regulated firms must use EU-executed compute.",
    timeline: { startYear: 2026, endYear: 2035, step: "quarter" },
    regulation: {
      euOnlyComputeStartYear: 2028,
      scope: "regulated_and_public",
      foreignComputeAccess: "eu_only",
      publicSectorPriority: false,
      tokenPriceCap: null,
      dataCentreSubsidyPerMW: 0,
      carbonConstraint: 0.05
    },
    demand: {
      consumerAdoptionGrowth: 0.12,
      firmAdoptionGrowth: 0.18,
      publicSectorAdoptionGrowth: 0.1,
      aiProviderInternalGrowth: 0.18,
      firmTokenIntensity: 1.08,
      publicSectorAiDependence: 1.15,
      agenticWorkflowMultiplier2030: 2.5
    },
    technology: {
      tokensPerMWhImprovementAnnual: 0.16,
      pueImprovementAnnual: 0.01,
      gpuSupplyGrowthAnnual: 0.2
    },
    electricity: {
      basePriceShock: 0.02,
      gridExpansionSpeedMultiplier: 0.9,
      priceConvexity: 2.25,
      scarcityShock: 0.02,
      weatherVolatility: 0.18,
      weatherPersistence: 0.68,
      weatherPriceSensitivity: 0.13
    },
    dataCentres: {
      buildTimeYears: 2.5,
      gridConnectionDelayYears: 4.25,
      permittingDelayYears: 1.25,
      investmentSensitivity: 0.72,
      moratoriumSeverity: 0
    }
  },
  {
    id: "fast_grid_buildout",
    name: "EU-only plus fast grid buildout",
    description:
      "The EU-only compute shock is paired with faster grid-connection expansion and lower connection delay.",
    timeline: { startYear: 2026, endYear: 2035, step: "quarter" },
    regulation: {
      euOnlyComputeStartYear: 2028,
      scope: "regulated_and_public",
      foreignComputeAccess: "eu_only",
      publicSectorPriority: false,
      tokenPriceCap: null,
      dataCentreSubsidyPerMW: 0.12,
      carbonConstraint: 0.05
    },
    demand: {
      consumerAdoptionGrowth: 0.12,
      firmAdoptionGrowth: 0.18,
      publicSectorAdoptionGrowth: 0.1,
      aiProviderInternalGrowth: 0.18,
      firmTokenIntensity: 1.08,
      publicSectorAiDependence: 1.15,
      agenticWorkflowMultiplier2030: 2.5
    },
    technology: {
      tokensPerMWhImprovementAnnual: 0.16,
      pueImprovementAnnual: 0.012,
      gpuSupplyGrowthAnnual: 0.22
    },
    electricity: {
      basePriceShock: 0.02,
      gridExpansionSpeedMultiplier: 1.85,
      priceConvexity: 2.05,
      scarcityShock: 0.01,
      weatherVolatility: 0.18,
      weatherPersistence: 0.68,
      weatherPriceSensitivity: 0.12
    },
    dataCentres: {
      buildTimeYears: 2,
      gridConnectionDelayYears: 2.2,
      permittingDelayYears: 0.75,
      investmentSensitivity: 0.9,
      moratoriumSeverity: 0
    }
  },
  {
    id: "ai_efficiency_breakthrough",
    name: "AI efficiency breakthrough",
    description:
      "Tokens per MWh improve faster, lowering electricity intensity and stretching local compute capacity.",
    timeline: { startYear: 2026, endYear: 2035, step: "quarter" },
    regulation: {
      euOnlyComputeStartYear: 2028,
      scope: "regulated_and_public",
      foreignComputeAccess: "eu_only",
      publicSectorPriority: false,
      tokenPriceCap: null,
      dataCentreSubsidyPerMW: 0,
      carbonConstraint: 0.03
    },
    demand: {
      consumerAdoptionGrowth: 0.13,
      firmAdoptionGrowth: 0.19,
      publicSectorAdoptionGrowth: 0.11,
      aiProviderInternalGrowth: 0.2,
      firmTokenIntensity: 1.12,
      publicSectorAiDependence: 1.15,
      agenticWorkflowMultiplier2030: 2.7
    },
    technology: {
      tokensPerMWhImprovementAnnual: 0.32,
      pueImprovementAnnual: 0.018,
      gpuSupplyGrowthAnnual: 0.24
    },
    electricity: {
      basePriceShock: 0,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2,
      scarcityShock: 0,
      weatherVolatility: 0.14,
      weatherPersistence: 0.65,
      weatherPriceSensitivity: 0.09
    },
    dataCentres: {
      buildTimeYears: 2.25,
      gridConnectionDelayYears: 3.5,
      permittingDelayYears: 1,
      investmentSensitivity: 0.72,
      moratoriumSeverity: 0
    }
  },
  {
    id: "public_sector_priority",
    name: "Public-sector priority",
    description:
      "Public-sector services receive first access to EU-sovereign compute under scarcity.",
    timeline: { startYear: 2026, endYear: 2035, step: "quarter" },
    regulation: {
      euOnlyComputeStartYear: 2028,
      scope: "regulated_and_public",
      foreignComputeAccess: "eu_only",
      publicSectorPriority: true,
      tokenPriceCap: null,
      dataCentreSubsidyPerMW: 0,
      carbonConstraint: 0.05
    },
    demand: {
      consumerAdoptionGrowth: 0.12,
      firmAdoptionGrowth: 0.18,
      publicSectorAdoptionGrowth: 0.12,
      aiProviderInternalGrowth: 0.18,
      firmTokenIntensity: 1.08,
      publicSectorAiDependence: 1.25,
      agenticWorkflowMultiplier2030: 2.5
    },
    technology: {
      tokensPerMWhImprovementAnnual: 0.16,
      pueImprovementAnnual: 0.01,
      gpuSupplyGrowthAnnual: 0.2
    },
    electricity: {
      basePriceShock: 0.02,
      gridExpansionSpeedMultiplier: 0.9,
      priceConvexity: 2.25,
      scarcityShock: 0.02,
      weatherVolatility: 0.2,
      weatherPersistence: 0.7,
      weatherPriceSensitivity: 0.14
    },
    dataCentres: {
      buildTimeYears: 2.5,
      gridConnectionDelayYears: 4.25,
      permittingDelayYears: 1.25,
      investmentSensitivity: 0.72,
      moratoriumSeverity: 0
    }
  },
  {
    id: "us_eu_compute_alliance",
    name: "US/EU compute alliance",
    description:
      "EU users can access certified allied compute after the sovereignty shock, reducing short-run rationing.",
    timeline: { startYear: 2026, endYear: 2035, step: "quarter" },
    regulation: {
      euOnlyComputeStartYear: 2028,
      scope: "regulated_and_public",
      foreignComputeAccess: "allied",
      publicSectorPriority: false,
      tokenPriceCap: null,
      dataCentreSubsidyPerMW: 0,
      carbonConstraint: 0.04
    },
    demand: {
      consumerAdoptionGrowth: 0.12,
      firmAdoptionGrowth: 0.18,
      publicSectorAdoptionGrowth: 0.1,
      aiProviderInternalGrowth: 0.18,
      firmTokenIntensity: 1.08,
      publicSectorAiDependence: 1.15,
      agenticWorkflowMultiplier2030: 2.5
    },
    technology: {
      tokensPerMWhImprovementAnnual: 0.16,
      pueImprovementAnnual: 0.01,
      gpuSupplyGrowthAnnual: 0.22
    },
    electricity: {
      basePriceShock: 0.015,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2.1,
      scarcityShock: 0.01,
      weatherVolatility: 0.16,
      weatherPersistence: 0.67,
      weatherPriceSensitivity: 0.11
    },
    dataCentres: {
      buildTimeYears: 2.25,
      gridConnectionDelayYears: 3.5,
      permittingDelayYears: 1,
      investmentSensitivity: 0.72,
      moratoriumSeverity: 0
    }
  }
];

export function getScenarioById(id: string): ScenarioInput {
  return SCENARIOS.find((scenario) => scenario.id === id) ?? SCENARIOS[0];
}
