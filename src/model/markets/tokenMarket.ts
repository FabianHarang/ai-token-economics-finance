import type { PriceDecomposition } from "../types";

export interface TokenMarketParams {
  demandAtReferencePrice: number;
  criticalDemandAtReferencePrice: number;
  elasticity: number;
  capacity: number;
  marginalCost: number;
  markupRate: number;
  maxWillingnessToPay: number;
  priceCap?: number | null;
  scarcityWeights: {
    grid: number;
    gpu: number;
    dataCentre: number;
  };
}

export interface TokenMarketResult {
  price: number;
  normalPrice: number;
  supplied: number;
  unmetAtReferencePrice: number;
  criticalUnmet: number;
  scarcityRent: number;
  scarcityRentShare: number;
  decomposition: PriceDecomposition;
}

export function demandAtPrice(
  demandAtReferencePrice: number,
  referencePrice: number,
  price: number,
  elasticity: number
): number {
  const relativePrice = Math.max(price, 1) / referencePrice;
  return demandAtReferencePrice * Math.pow(relativePrice, -elasticity);
}

function binarySearchClearingPrice(params: {
  low: number;
  high: number;
  capacity: number;
  demandAtReferencePrice: number;
  elasticity: number;
}): number {
  let low = params.low;
  let high = params.high;
  for (let i = 0; i < 64; i += 1) {
    const mid = (low + high) / 2;
    const demand = demandAtPrice(
      params.demandAtReferencePrice,
      100,
      mid,
      params.elasticity
    );
    if (demand > params.capacity) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return high;
}

export function buildPriceDecomposition(params: {
  electricityCost: number;
  gpuCost: number;
  dataCentreCost: number;
  operationsCost: number;
  complianceCost: number;
  markup: number;
  scarcityRent: number;
  regulationWedge: number;
  scarcityWeights: TokenMarketParams["scarcityWeights"];
}): PriceDecomposition {
  const weightTotal =
    params.scarcityWeights.grid +
    params.scarcityWeights.gpu +
    params.scarcityWeights.dataCentre;
  const safeTotal = weightTotal > 0 ? weightTotal : 1;
  return {
    electricity: params.electricityCost,
    gpuCapex: params.gpuCost,
    dataCentreCapex: params.dataCentreCost,
    operations: params.operationsCost,
    compliance: params.complianceCost,
    providerMarkup: params.markup,
    gridScarcityRent:
      params.scarcityRent * (params.scarcityWeights.grid / safeTotal),
    gpuScarcityRent:
      params.scarcityRent * (params.scarcityWeights.gpu / safeTotal),
    dataCentreScarcityRent:
      params.scarcityRent * (params.scarcityWeights.dataCentre / safeTotal),
    regulationWedge: params.regulationWedge
  };
}

export function clearTokenMarket(params: TokenMarketParams): TokenMarketResult {
  const normalPrice = params.marginalCost * (1 + params.markupRate);
  const cappedHigh = params.priceCap
    ? Math.min(params.maxWillingnessToPay, params.priceCap)
    : params.maxWillingnessToPay;
  const availableCapacity = Math.max(params.capacity, 0);

  if (availableCapacity <= 0) {
    return {
      price: cappedHigh,
      normalPrice,
      supplied: 0,
      unmetAtReferencePrice: params.demandAtReferencePrice,
      criticalUnmet: params.criticalDemandAtReferencePrice,
      scarcityRent: Math.max(0, cappedHigh - normalPrice),
      scarcityRentShare: Math.max(0, cappedHigh - normalPrice) / cappedHigh,
      decomposition: buildPriceDecomposition({
        electricityCost: 0,
        gpuCost: 0,
        dataCentreCost: 0,
        operationsCost: 0,
        complianceCost: 0,
        markup: 0,
        scarcityRent: Math.max(0, cappedHigh - normalPrice),
        regulationWedge: 0,
        scarcityWeights: params.scarcityWeights
      })
    };
  }

  const demandAtNormal = demandAtPrice(
    params.demandAtReferencePrice,
    100,
    normalPrice,
    params.elasticity
  );

  if (demandAtNormal <= availableCapacity) {
    return {
      price: normalPrice,
      normalPrice,
      supplied: demandAtNormal,
      unmetAtReferencePrice: Math.max(0, params.demandAtReferencePrice - demandAtNormal),
      criticalUnmet: 0,
      scarcityRent: 0,
      scarcityRentShare: 0,
      decomposition: buildPriceDecomposition({
        electricityCost: 0,
        gpuCost: 0,
        dataCentreCost: 0,
        operationsCost: 0,
        complianceCost: 0,
        markup: 0,
        scarcityRent: 0,
        regulationWedge: 0,
        scarcityWeights: params.scarcityWeights
      })
    };
  }

  const clearingPrice = binarySearchClearingPrice({
    low: normalPrice,
    high: cappedHigh,
    capacity: availableCapacity,
    demandAtReferencePrice: params.demandAtReferencePrice,
    elasticity: params.elasticity
  });
  const demandAtClearing = demandAtPrice(
    params.demandAtReferencePrice,
    100,
    clearingPrice,
    params.elasticity
  );
  const supplied = Math.min(availableCapacity, demandAtClearing);
  const scarcityRent = Math.max(0, clearingPrice - normalPrice);

  return {
    price: clearingPrice,
    normalPrice,
    supplied,
    unmetAtReferencePrice: Math.max(0, params.demandAtReferencePrice - supplied),
    criticalUnmet: Math.max(0, params.criticalDemandAtReferencePrice - supplied),
    scarcityRent,
    scarcityRentShare: clearingPrice > 0 ? scarcityRent / clearingPrice : 0,
    decomposition: buildPriceDecomposition({
      electricityCost: 0,
      gpuCost: 0,
      dataCentreCost: 0,
      operationsCost: 0,
      complianceCost: 0,
      markup: 0,
      scarcityRent,
      regulationWedge: 0,
      scarcityWeights: params.scarcityWeights
    })
  };
}
