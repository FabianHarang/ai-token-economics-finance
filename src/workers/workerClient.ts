import { runSimulation } from "../model/simulation";
import type { ScenarioInput, SimulationResult } from "../model/types";
import type {
  SimulationWorkerRequest,
  SimulationWorkerResponse
} from "./simulation.worker";

export function runScenarioInWorker(scenario: ScenarioInput): Promise<SimulationResult> {
  if (typeof Worker === "undefined") {
    return Promise.resolve(runSimulation(scenario));
  }

  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("./simulation.worker.ts", import.meta.url), {
      type: "module"
    });
    worker.onmessage = (event: MessageEvent<SimulationWorkerResponse>) => {
      worker.terminate();
      if (event.data.type === "result" && event.data.result) {
        resolve(event.data.result);
      } else {
        reject(new Error(event.data.message ?? "Simulation worker failed"));
      }
    };
    worker.onerror = (event) => {
      worker.terminate();
      reject(new Error(event.message));
    };
    worker.postMessage({ type: "run", scenario } satisfies SimulationWorkerRequest);
  });
}
