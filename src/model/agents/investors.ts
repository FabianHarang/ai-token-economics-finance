export function investorRiskDiscount(policyRisk: number, delayYears: number): number {
  return Math.max(0.15, 1 - policyRisk * 0.35 - delayYears * 0.035);
}
