import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { SimulationResult } from "../model/types";

const COMPONENTS = [
  { key: "electricity", name: "Electricity", color: "var(--teal)" },
  { key: "gpuCapex", name: "GPU capex", color: "var(--petrol)" },
  { key: "dataCentreCapex", name: "Data-centre capex", color: "var(--glacier)" },
  { key: "operations", name: "Operations", color: "var(--slate)" },
  { key: "compliance", name: "Compliance", color: "var(--mist-strong)" },
  { key: "providerMarkup", name: "Markup", color: "var(--ink-soft)" },
  { key: "gridScarcityRent", name: "Grid scarcity", color: "var(--amber)" },
  { key: "gpuScarcityRent", name: "GPU scarcity", color: "var(--clay)" },
  { key: "dataCentreScarcityRent", name: "DC scarcity", color: "var(--amber-deep)" },
  { key: "regulationWedge", name: "Regulation", color: "var(--petrol-night)" }
] as const;

export function PriceDecomposition({ result }: { result: SimulationResult }) {
  const data = result.timeline
    .filter((_, index) => index % 4 === 0 || index === result.timeline.length - 1)
    .map((tick) => ({
      label: tick.label,
      ...tick.priceDecomposition
    }));

  return (
    <section className="chart-panel" id="market-mechanics">
      <div className="panel-heading">
        <span>Market Mechanics</span>
        <h2>Token Price Decomposition</h2>
      </div>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data} margin={{ top: 10, right: 18, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          {COMPONENTS.map((component) => (
            <Bar
              key={component.key}
              dataKey={component.key}
              name={component.name}
              stackId="price"
              fill={component.color}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
