import type { ElectricityZoneCalibration } from "../types";

export interface ElectricityMarketParams {
  zones: ElectricityZoneCalibration[];
  dataCentreLoadIndex: number;
  gridExpansionSpeedMultiplier: number;
  priceConvexity: number;
  basePriceShock: number;
  scarcityShock: number;
  weatherStressByZone?: Record<string, number>;
  weatherPriceSensitivity?: number;
}

export interface ElectricityMarketResult {
  euAveragePriceIndex: number;
  euBaseComponent: number;
  euEndogenousLoadComponent: number;
  euCongestionComponent: number;
  euExogenousShockComponent: number;
  euWeatherComponent: number;
  euWeatherStressIndex: number;
  zonePrices: Array<{
    zone: string;
    electricityPriceIndex: number;
    baseComponent: number;
    endogenousLoadComponent: number;
    exogenousShockComponent: number;
    weatherStressIndex: number;
    weatherShockComponent: number;
    dataCentreLoadIndex: number;
    gridHeadroomIndex: number;
    congestionMarkup: number;
  }>;
}

export function clearElectricityMarkets(
  params: ElectricityMarketParams
): ElectricityMarketResult {
  const totalReferenceLoad = params.zones.reduce(
    (sum, zone) => sum + zone.referenceLoadIndex,
    0
  );
  const zonePrices = params.zones.map((zone, index) => {
    const zoneLoadShare = zone.referenceLoadIndex / totalReferenceLoad;
    const hubStress = 1 + index * 0.025;
    const dataCentreLoadIndex =
      params.dataCentreLoadIndex * zoneLoadShare * hubStress;
    const gridHeadroomIndex =
      (zone.gridHeadroomMW * params.gridExpansionSpeedMultiplier) /
      Math.max(zone.dataCentreLoadMW, 1);
    const loadRatio =
      1 + dataCentreLoadIndex / Math.max(zone.referenceLoadIndex * 3.5, 1);
    const congestionMarkup =
      100 *
      zone.congestionFactor *
      Math.max(0, dataCentreLoadIndex / 72 - gridHeadroomIndex / 7);
    const baseComponent = zone.basePriceIndex;
    const endogenousLoadComponent =
      zone.basePriceIndex * (Math.pow(loadRatio, params.priceConvexity) - 1);
    const exogenousShockComponent =
      zone.basePriceIndex * params.basePriceShock + 100 * params.scarcityShock;
    const weatherStressIndex = params.weatherStressByZone?.[zone.zone] ?? 0;
    const weatherShockComponent =
      zone.basePriceIndex *
      (params.weatherPriceSensitivity ?? 0) *
      weatherStressIndex;
    const electricityPriceIndex =
      baseComponent +
      endogenousLoadComponent +
      congestionMarkup +
      exogenousShockComponent +
      weatherShockComponent;

    return {
      zone: zone.zone,
      electricityPriceIndex,
      baseComponent,
      endogenousLoadComponent,
      exogenousShockComponent,
      weatherStressIndex,
      weatherShockComponent,
      dataCentreLoadIndex,
      gridHeadroomIndex: gridHeadroomIndex * 100,
      congestionMarkup
    };
  });

  function weightedAverage(
    selector: (zone: (typeof zonePrices)[number]) => number
  ): number {
    return (
      zonePrices.reduce((sum, zone, index) => {
        return sum + selector(zone) * params.zones[index].referenceLoadIndex;
      }, 0) / totalReferenceLoad
    );
  }

  return {
    euAveragePriceIndex: weightedAverage((zone) => zone.electricityPriceIndex),
    euBaseComponent: weightedAverage((zone) => zone.baseComponent),
    euEndogenousLoadComponent: weightedAverage(
      (zone) => zone.endogenousLoadComponent
    ),
    euCongestionComponent: weightedAverage((zone) => zone.congestionMarkup),
    euExogenousShockComponent: weightedAverage(
      (zone) => zone.exogenousShockComponent
    ),
    euWeatherComponent: weightedAverage((zone) => zone.weatherShockComponent),
    euWeatherStressIndex: weightedAverage((zone) => zone.weatherStressIndex),
    zonePrices
  };
}
