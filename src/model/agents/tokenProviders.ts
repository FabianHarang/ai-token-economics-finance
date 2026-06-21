export function retailMarkupFromServiceLevel(baseMarkup: number, scarcityShare: number): number {
  return baseMarkup + Math.min(0.08, scarcityShare * 0.18);
}
