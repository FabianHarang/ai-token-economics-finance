export interface PipelineProject {
  readyYear: number;
  capacityIndex: number;
  timeToPower: number;
}

export function activatePipeline(
  pipeline: PipelineProject[],
  year: number
): {
  remaining: PipelineProject[];
  activatedCapacity: number;
  averageTimeToPower: number;
  activatedCount: number;
} {
  const activated = pipeline.filter((project) => project.readyYear <= year);
  const remaining = pipeline.filter((project) => project.readyYear > year);
  const activatedCapacity = activated.reduce(
    (sum, project) => sum + project.capacityIndex,
    0
  );
  const averageTimeToPower =
    activated.length > 0
      ? activated.reduce((sum, project) => sum + project.timeToPower, 0) /
        activated.length
      : 0;

  return {
    remaining,
    activatedCapacity,
    averageTimeToPower,
    activatedCount: activated.length
  };
}

export function planInvestment(params: {
  year: number;
  tokenPriceIndex: number;
  localAdequacyRatio: number;
  investmentSensitivity: number;
  buildTimeYears: number;
  gridConnectionDelayYears: number;
  permittingDelayYears: number;
  subsidyPerMW: number;
}): PipelineProject | null {
  const priceSignal = Math.max(0, params.tokenPriceIndex - 112) / 32;
  const adequacySignal = Math.max(0, 1 - params.localAdequacyRatio);
  const capacityIndex =
    (priceSignal + adequacySignal + params.subsidyPerMW) *
    2.6 *
    params.investmentSensitivity;

  if (capacityIndex < 0.35) {
    return null;
  }

  const timeToPower =
    params.buildTimeYears +
    params.gridConnectionDelayYears +
    params.permittingDelayYears;

  return {
    readyYear: params.year + timeToPower,
    capacityIndex,
    timeToPower
  };
}
