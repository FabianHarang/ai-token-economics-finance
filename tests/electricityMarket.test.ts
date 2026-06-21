import { describe, expect, it } from "vitest";
import { ELECTRICITY_ZONES } from "../src/model/calibration/defaults";
import { clearElectricityMarkets } from "../src/model/markets/electricityMarket";

describe("electricity market", () => {
  it("higher data-centre load increases the average electricity price", () => {
    const low = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: 40,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2,
      basePriceShock: 0,
      scarcityShock: 0
    });
    const high = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: 160,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2,
      basePriceShock: 0,
      scarcityShock: 0
    });

    expect(high.euAveragePriceIndex).toBeGreaterThan(low.euAveragePriceIndex);
  });

  it("faster grid expansion reduces congestion markup", () => {
    const slow = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: 180,
      gridExpansionSpeedMultiplier: 0.7,
      priceConvexity: 2,
      basePriceShock: 0,
      scarcityShock: 0
    });
    const fast = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: 180,
      gridExpansionSpeedMultiplier: 2,
      priceConvexity: 2,
      basePriceShock: 0,
      scarcityShock: 0
    });
    const slowCongestion = slow.zonePrices.reduce(
      (sum, zone) => sum + zone.congestionMarkup,
      0
    );
    const fastCongestion = fast.zonePrices.reduce(
      (sum, zone) => sum + zone.congestionMarkup,
      0
    );

    expect(fastCongestion).toBeLessThan(slowCongestion);
  });

  it("adverse weather stress raises exogenous electricity prices", () => {
    const calm = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: 80,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2,
      basePriceShock: 0,
      scarcityShock: 0,
      weatherStressByZone: Object.fromEntries(
        ELECTRICITY_ZONES.map((zone) => [zone.zone, 0])
      ),
      weatherPriceSensitivity: 0.2
    });
    const stressed = clearElectricityMarkets({
      zones: ELECTRICITY_ZONES,
      dataCentreLoadIndex: 80,
      gridExpansionSpeedMultiplier: 1,
      priceConvexity: 2,
      basePriceShock: 0,
      scarcityShock: 0,
      weatherStressByZone: Object.fromEntries(
        ELECTRICITY_ZONES.map((zone) => [zone.zone, 1.2])
      ),
      weatherPriceSensitivity: 0.2
    });

    expect(stressed.euAveragePriceIndex).toBeGreaterThan(calm.euAveragePriceIndex);
    expect(stressed.euWeatherComponent).toBeGreaterThan(calm.euWeatherComponent);
  });
});
