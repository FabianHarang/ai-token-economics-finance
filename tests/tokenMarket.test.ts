import { describe, expect, it } from "vitest";
import { clearTokenMarket } from "../src/model/markets/tokenMarket";

describe("token market clearing", () => {
  it("uses marginal cost plus markup when capacity is roomy", () => {
    const result = clearTokenMarket({
      demandAtReferencePrice: 100,
      criticalDemandAtReferencePrice: 20,
      elasticity: 0.5,
      capacity: 200,
      marginalCost: 90,
      markupRate: 0.1,
      maxWillingnessToPay: 300,
      scarcityWeights: { grid: 0, gpu: 0, dataCentre: 0 }
    });

    expect(result.price).toBeCloseTo(99);
    expect(result.scarcityRent).toBe(0);
  });

  it("raises price above normal when supply binds", () => {
    const result = clearTokenMarket({
      demandAtReferencePrice: 120,
      criticalDemandAtReferencePrice: 30,
      elasticity: 0.55,
      capacity: 75,
      marginalCost: 90,
      markupRate: 0.1,
      maxWillingnessToPay: 360,
      scarcityWeights: { grid: 1, gpu: 1, dataCentre: 1 }
    });

    expect(result.price).toBeGreaterThan(result.normalPrice);
    expect(result.scarcityRent).toBeGreaterThan(0);
    expect(result.supplied).toBeLessThanOrEqual(75);
  });

  it("records critical rationing when critical demand exceeds capacity", () => {
    const result = clearTokenMarket({
      demandAtReferencePrice: 100,
      criticalDemandAtReferencePrice: 42,
      elasticity: 0.3,
      capacity: 30,
      marginalCost: 90,
      markupRate: 0.1,
      maxWillingnessToPay: 220,
      scarcityWeights: { grid: 2, gpu: 1, dataCentre: 1 }
    });

    expect(result.criticalUnmet).toBeGreaterThan(0);
  });
});
