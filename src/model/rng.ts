export interface Rng {
  next: () => number;
  between: (min: number, max: number) => number;
  normal: (mean?: number, standardDeviation?: number) => number;
}

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function createRng(seed = "ai-token-economics-finance"): Rng {
  let state = hashSeed(seed) || 1;
  let spareNormal: number | null = null;

  function next(): number {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }

  return {
    next,
    between: (min: number, max: number) => min + (max - min) * next(),
    normal: (mean = 0, standardDeviation = 1) => {
      if (spareNormal !== null) {
        const value = spareNormal;
        spareNormal = null;
        return mean + standardDeviation * value;
      }
      const u = Math.max(next(), Number.MIN_VALUE);
      const v = next();
      const radius = Math.sqrt(-2 * Math.log(u));
      const angle = 2 * Math.PI * v;
      spareNormal = radius * Math.sin(angle);
      return mean + standardDeviation * radius * Math.cos(angle);
    }
  };
}
