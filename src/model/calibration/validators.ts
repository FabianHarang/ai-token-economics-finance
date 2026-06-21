import { scenarioInputSchema } from "../scenarioSchema";

export function validateScenarioJson(json: string) {
  return scenarioInputSchema.safeParse(JSON.parse(json));
}
