import { describe, expect, it } from "vitest";
import { getScenarioById } from "../src/model/calibration/defaults";
import { runSimulation } from "../src/model/simulation";

describe("simulation proof points", () => {
  it("is reproducible for the same seeded scenario", () => {
    const scenario = getScenarioById("eu_only_compute_shock");
    const first = runSimulation(scenario);
    const second = runSimulation(scenario);

    expect(first.summary).toEqual(second.summary);
  });

  it("EU-only compute raises token prices versus baseline", () => {
    const baseline = runSimulation(getScenarioById("baseline_global_compute"));
    const euOnly = runSimulation(getScenarioById("eu_only_compute_shock"));

    expect(euOnly.summary.euTokenPriceIndex).toBeGreaterThan(
      baseline.summary.euTokenPriceIndex
    );
  });

  it("fast grid buildout lowers grid scarcity rent versus EU-only shock", () => {
    const euOnly = runSimulation(getScenarioById("eu_only_compute_shock"));
    const fastGrid = runSimulation(getScenarioById("fast_grid_buildout"));

    expect(fastGrid.summary.priceDecomposition.gridScarcityRent).toBeLessThan(
      euOnly.summary.priceDecomposition.gridScarcityRent
    );
  });

  it("AI efficiency breakthrough reduces electricity intensity per token", () => {
    const euOnly = runSimulation(getScenarioById("eu_only_compute_shock"));
    const efficiency = runSimulation(getScenarioById("ai_efficiency_breakthrough"));

    expect(efficiency.summary.electricityMWhPerTokenIndex).toBeLessThan(
      euOnly.summary.electricityMWhPerTokenIndex
    );
  });

  it("electricity price responds to scenario shocks and endogenous load", () => {
    const baselineScenario = getScenarioById("baseline_global_compute");
    const shockedScenario = {
      ...baselineScenario,
      id: "electricity_stress_test",
      electricity: {
        ...baselineScenario.electricity,
        basePriceShock: 0.25,
        scarcityShock: 0.08,
        gridExpansionSpeedMultiplier: 0.55
      },
      demand: {
        ...baselineScenario.demand,
        firmAdoptionGrowth: 0.28,
        firmTokenIntensity: 1.6
      }
    };
    const baseline = runSimulation(baselineScenario);
    const shocked = runSimulation(shockedScenario);

    expect(shocked.summary.electricityPriceIndex).toBeGreaterThan(
      baseline.summary.electricityPriceIndex
    );
    expect(shocked.summary.electricityExogenousShockComponent).toBeGreaterThan(
      baseline.summary.electricityExogenousShockComponent
    );
  });

  it("uses a reproducible stochastic weather path by seed", () => {
    const baselineScenario = getScenarioById("baseline_global_compute");
    const weatherScenario = {
      ...baselineScenario,
      seed: "weather-seed-a",
      electricity: {
        ...baselineScenario.electricity,
        weatherVolatility: 0.35,
        weatherPriceSensitivity: 0.25
      }
    };
    const sameSeed = runSimulation(weatherScenario);
    const repeated = runSimulation(weatherScenario);
    const differentSeed = runSimulation({
      ...weatherScenario,
      seed: "weather-seed-b"
    });

    expect(sameSeed.timeline.map((tick) => tick.weatherStressIndex)).toEqual(
      repeated.timeline.map((tick) => tick.weatherStressIndex)
    );
    expect(sameSeed.timeline.map((tick) => tick.weatherStressIndex)).not.toEqual(
      differentSeed.timeline.map((tick) => tick.weatherStressIndex)
    );
  });
});
