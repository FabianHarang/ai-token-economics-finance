export function computePueFactor(baselinePue: number, pueImprovementAnnual: number, yearsElapsed: number): number {
  const pue = Math.max(1.08, baselinePue * (1 - pueImprovementAnnual * yearsElapsed));
  return pue / baselinePue;
}
