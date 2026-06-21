import { z } from "zod";
import type { ScenarioInput } from "./types";

export const timeStepSchema = z.enum(["month", "quarter", "year"]);
export const regulationScopeSchema = z.enum([
  "none",
  "public_only",
  "regulated_and_public",
  "all_eu"
]);
export const foreignComputeAccessSchema = z.enum(["global", "allied", "eu_only"]);

export const vulnerabilityWeightsSchema = z.object({
  foreignComputeDependency: z.number().nonnegative(),
  unmetCriticalDemand: z.number().nonnegative(),
  gridConnectionGap: z.number().nonnegative(),
  tokenPriceShock: z.number().nonnegative(),
  publicSectorExposure: z.number().nonnegative()
});

export const scenarioInputSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  timeline: z
    .object({
      startYear: z.number().int().min(2020).max(2100),
      endYear: z.number().int().min(2020).max(2100),
      step: timeStepSchema
    })
    .refine((value) => value.endYear > value.startYear, {
      message: "endYear must be after startYear"
    }),
  regulation: z.object({
    euOnlyComputeStartYear: z.number().int().min(2020).max(2100).nullable(),
    scope: regulationScopeSchema,
    foreignComputeAccess: foreignComputeAccessSchema,
    publicSectorPriority: z.boolean(),
    tokenPriceCap: z.number().positive().nullable(),
    dataCentreSubsidyPerMW: z.number().min(0).max(5),
    carbonConstraint: z.number().min(0).max(1)
  }),
  demand: z.object({
    consumerAdoptionGrowth: z.number().min(-0.2).max(1),
    firmAdoptionGrowth: z.number().min(-0.2).max(1),
    publicSectorAdoptionGrowth: z.number().min(-0.2).max(1),
    aiProviderInternalGrowth: z.number().min(-0.2).max(1),
    firmTokenIntensity: z.number().positive().max(5),
    publicSectorAiDependence: z.number().positive().max(5),
    agenticWorkflowMultiplier2030: z.number().positive().max(10)
  }),
  technology: z.object({
    tokensPerMWhImprovementAnnual: z.number().min(-0.2).max(1),
    pueImprovementAnnual: z.number().min(0).max(0.2),
    gpuSupplyGrowthAnnual: z.number().min(-0.2).max(1)
  }),
  electricity: z.object({
    basePriceShock: z.number().min(-0.8).max(3),
    gridExpansionSpeedMultiplier: z.number().min(0).max(5),
    priceConvexity: z.number().min(0.1).max(8),
    scarcityShock: z.number().min(0).max(3),
    weatherVolatility: z.number().min(0).max(2).default(0.16),
    weatherPersistence: z.number().min(0).max(0.98).default(0.68),
    weatherPriceSensitivity: z.number().min(0).max(1.5).default(0.12)
  }),
  dataCentres: z.object({
    buildTimeYears: z.number().min(0.25).max(12),
    gridConnectionDelayYears: z.number().min(0).max(15),
    permittingDelayYears: z.number().min(0).max(10),
    investmentSensitivity: z.number().min(0).max(5),
    moratoriumSeverity: z.number().min(0).max(1)
  }),
  vulnerabilityWeights: vulnerabilityWeightsSchema.optional(),
  seed: z.string().optional()
});

export function parseScenario(input: unknown): ScenarioInput {
  return scenarioInputSchema.parse(input);
}
