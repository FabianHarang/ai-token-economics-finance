import { describe, expect, it } from "vitest";
import { SCENARIOS } from "../src/model/calibration/defaults";
import { parseScenario } from "../src/model/scenarioSchema";

describe("scenario schema", () => {
  it("validates all bundled scenarios", () => {
    for (const scenario of SCENARIOS) {
      expect(parseScenario(scenario).id).toBe(scenario.id);
    }
  });

  it("roundtrips exported scenario JSON", () => {
    const scenario = SCENARIOS[1];
    const exported = JSON.stringify(scenario);
    const imported = parseScenario(JSON.parse(exported));

    expect(imported).toEqual(scenario);
  });
});
