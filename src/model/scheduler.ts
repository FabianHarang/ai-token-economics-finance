import type { TimeStep } from "./types";

export function stepSize(step: TimeStep): number {
  if (step === "month") {
    return 1 / 12;
  }
  if (step === "quarter") {
    return 0.25;
  }
  return 1;
}

export function makeTimeline(startYear: number, endYear: number, step: TimeStep): number[] {
  const increment = stepSize(step);
  const years: number[] = [];
  for (let year = startYear; year <= endYear + 0.0001; year += increment) {
    years.push(Number(year.toFixed(4)));
  }
  return years;
}

export function formatTickLabel(year: number): string {
  const wholeYear = Math.floor(year);
  const quarter = Math.round((year - wholeYear) / 0.25) + 1;
  if (Math.abs(year - wholeYear) < 0.001) {
    return `${wholeYear}`;
  }
  if (quarter >= 1 && quarter <= 4) {
    return `${wholeYear} Q${quarter}`;
  }
  return year.toFixed(2);
}
