import type { ScenarioInput, SimulationResult } from "../model/types";

function downloadBlob(filename: string, content: BlobPart, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

export function downloadScenarioJson(scenario: ScenarioInput) {
  downloadBlob(
    `${scenario.id}.json`,
    JSON.stringify(scenario, null, 2),
    "application/json"
  );
}

export function downloadResultJson(result: SimulationResult) {
  downloadBlob(
    `${result.scenarioId}_results.json`,
    JSON.stringify(result, null, 2),
    "application/json"
  );
}

export function resultToCsv(result: SimulationResult): string {
  const headers = [
    "year",
    "label",
    "euTokenPriceIndex",
    "electricityPriceIndex",
    "electricityWeatherComponent",
    "weatherStressIndex",
    "localComputeAdequacyRatio",
    "foreignComputeDependencyRatio",
    "unmetTokenDemand",
    "criticalUnmetTokenDemand",
    "firmProductivityLoss",
    "publicServiceDegradationIndex",
    "sovereignVulnerabilityIndex",
    "electricityMWhPerTokenIndex"
  ];
  const rows = result.timeline.map((tick) =>
    headers
      .map((header) => {
        const value = tick[header as keyof typeof tick];
        return typeof value === "number" ? value.toFixed(6) : `"${String(value)}"`;
      })
      .join(",")
  );
  return [headers.join(","), ...rows].join("\n");
}

export function downloadResultCsv(result: SimulationResult) {
  downloadBlob(`${result.scenarioId}_results.csv`, resultToCsv(result), "text/csv");
}
