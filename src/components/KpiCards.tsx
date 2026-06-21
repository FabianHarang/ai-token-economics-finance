import { BatteryCharging, CircleDollarSign, Cpu, Gauge, Landmark, Zap } from "lucide-react";
import type { TickMetrics } from "../model/types";
import { formatIndex, formatPercent, formatRatio } from "../utils/formatters";

interface KpiCardsProps {
  summary: TickMetrics;
}

export function KpiCards({ summary }: KpiCardsProps) {
  const signed = (value: number) => `${value >= 0 ? "+" : ""}${value.toFixed(1)}`;
  const cards = [
    {
      label: "EU token price",
      value: formatIndex(summary.euTokenPriceIndex),
      detail: `${formatRatio(summary.tokenElectricityPassThrough)} pass-through`,
      icon: CircleDollarSign
    },
    {
      label: "Electricity price",
      value: formatIndex(summary.electricityPriceIndex),
      detail: `${signed(summary.electricityEndogenousLoadComponent)} load, ${signed(summary.electricityCongestionComponent)} grid, ${signed(summary.electricityWeatherComponent)} weather`,
      icon: Zap
    },
    {
      label: "Local adequacy",
      value: formatPercent(Math.min(1, summary.localComputeAdequacyRatio)),
      detail: `${formatIndex(summary.capacity.euLocalTokenCapacity)} capacity`,
      icon: Cpu
    },
    {
      label: "Foreign dependency",
      value: formatPercent(summary.foreignComputeDependencyRatio),
      detail: `${formatPercent(summary.shareDemandServedInsideEu)} inside EU`,
      icon: Gauge
    },
    {
      label: "Critical unmet",
      value: formatIndex(summary.criticalUnmetTokenDemand),
      detail: "weighted token units",
      icon: Landmark
    },
    {
      label: "Vulnerability",
      value: formatIndex(summary.sovereignVulnerabilityIndex),
      detail: "composite index",
      icon: BatteryCharging
    }
  ];

  return (
    <div className="kpi-grid" id="overview">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <article className="kpi-card" key={card.label}>
            <Icon size={20} />
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <small>{card.detail}</small>
          </article>
        );
      })}
    </div>
  );
}
