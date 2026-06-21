export function gridGapRatio(demand: number, gridCapacity: number): number {
  if (demand <= 0) {
    return 0;
  }
  return Math.max(0, demand - gridCapacity) / demand;
}
