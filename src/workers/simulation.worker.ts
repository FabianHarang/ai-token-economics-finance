import { runSimulation } from "../model/simulation";
import type { ScenarioInput, SimulationResult } from "../model/types";

export interface SimulationWorkerRequest {
  type: "run";
  scenario: ScenarioInput;
}

export interface SimulationWorkerResponse {
  type: "result" | "error";
  result?: SimulationResult;
  message?: string;
}

self.onmessage = (event: MessageEvent<SimulationWorkerRequest>) => {
  if (event.data.type !== "run") {
    return;
  }
  try {
    const result = runSimulation(event.data.scenario);
    self.postMessage({ type: "result", result } satisfies SimulationWorkerResponse);
  } catch (error) {
    self.postMessage({
      type: "error",
      message: error instanceof Error ? error.message : "Unknown simulation error"
    } satisfies SimulationWorkerResponse);
  }
};
