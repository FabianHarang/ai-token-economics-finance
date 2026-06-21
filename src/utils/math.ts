export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function latest<T>(items: T[]): T {
  return items[items.length - 1];
}
