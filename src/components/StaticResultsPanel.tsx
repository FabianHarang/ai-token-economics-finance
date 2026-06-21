import type { TickMetrics } from "../model/types";
import { formatIndex, formatNumber, formatPercent } from "../utils/formatters";

export function StaticResultsPanel({ summary }: { summary: TickMetrics }) {
  const rows = [
    ["Unmet token demand", formatNumber(summary.unmetTokenDemand)],
    ["Data-centre investment gap", formatNumber(summary.dataCentreInvestmentGap)],
    ["New operational MW", formatNumber(summary.newOperationalDataCentreMW)],
    ["Average time to power", `${summary.averageTimeToPower.toFixed(1)} years`],
    ["Weather stress", summary.weatherStressIndex.toFixed(2)],
    ["Scarcity rent share", formatPercent(summary.scarcityRentShare)],
    ["Emissions proxy", formatIndex(summary.emissionsProxy)]
  ];

  return (
    <section className="result-strip">
      {rows.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}
