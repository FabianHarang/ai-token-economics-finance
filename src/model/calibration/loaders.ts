import { SCENARIOS } from "./defaults";
import { parseScenario } from "../scenarioSchema";

export function loadBundledScenarios() {
  return SCENARIOS.map((scenario) => parseScenario(scenario));
}
