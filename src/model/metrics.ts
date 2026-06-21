import type { PriceDecomposition, VulnerabilityWeights } from "./types";

export function sumPriceDecomposition(decomposition: PriceDecomposition): number {
  return Object.values(decomposition).reduce((sum, value) => sum + value, 0);
}

export function computeVulnerabilityIndex(params: {
  weights: VulnerabilityWeights;
  foreignComputeDependencyRatio: number;
  criticalUnmetRatio: number;
  gridConnectionGapRatio: number;
  tokenPriceShockRatio: number;
  publicServiceExposureRatio: number;
}): number {
  const totalWeight =
    params.weights.foreignComputeDependency +
    params.weights.unmetCriticalDemand +
    params.weights.gridConnectionGap +
    params.weights.tokenPriceShock +
    params.weights.publicSectorExposure;
  const safeWeight = totalWeight > 0 ? totalWeight : 1;
  return (
    (100 / safeWeight) *
    (params.weights.foreignComputeDependency *
      params.foreignComputeDependencyRatio +
      params.weights.unmetCriticalDemand * params.criticalUnmetRatio +
      params.weights.gridConnectionGap * params.gridConnectionGapRatio +
      params.weights.tokenPriceShock * params.tokenPriceShockRatio +
      params.weights.publicSectorExposure * params.publicServiceExposureRatio)
  );
}
