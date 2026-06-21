export interface CapacityLayerParams {
  yearsElapsed: number;
  baselineGpuCapacity: number;
  baselineDataCentreCapacity: number;
  baselineGridConnectionCapacity: number;
  baselineGlobalTokenCapacity: number;
  baselineAlliedTokenCapacity: number;
  gpuSupplyGrowthAnnual: number;
  gridExpansionSpeedMultiplier: number;
  tokensPerMWhFactor: number;
  operationalCapacityBonus: number;
  moratoriumSeverity: number;
}

export function computeCapacityLayers(params: CapacityLayerParams) {
  const gpu =
    params.baselineGpuCapacity *
    Math.pow(1 + params.gpuSupplyGrowthAnnual, params.yearsElapsed);
  const dataCentre =
    (params.baselineDataCentreCapacity *
      Math.pow(1.045, params.yearsElapsed) +
      params.operationalCapacityBonus) *
    (1 - params.moratoriumSeverity * 0.28);
  const grid =
    params.baselineGridConnectionCapacity *
      Math.pow(1 + 0.055 * params.gridExpansionSpeedMultiplier, params.yearsElapsed) +
    params.operationalCapacityBonus * (0.7 + 0.3 * params.gridExpansionSpeedMultiplier);

  const euLocalTokenCapacity =
    Math.min(gpu, dataCentre, grid) * params.tokensPerMWhFactor;
  const globalTokenCapacity =
    params.baselineGlobalTokenCapacity * Math.pow(1.13, params.yearsElapsed);
  const alliedTokenCapacity =
    params.baselineAlliedTokenCapacity * Math.pow(1.11, params.yearsElapsed);

  return {
    gpu,
    dataCentre,
    grid,
    euLocalTokenCapacity,
    globalTokenCapacity,
    alliedTokenCapacity
  };
}
