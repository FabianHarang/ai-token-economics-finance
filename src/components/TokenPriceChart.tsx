import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { SimulationResult } from "../model/types";

interface TokenPriceChartProps {
  result: SimulationResult;
  baseline: SimulationResult;
}

export function TokenPriceChart({ result, baseline }: TokenPriceChartProps) {
  const data = result.timeline.map((tick, index) => ({
    label: tick.label,
    token: tick.euTokenPriceIndex,
    electricity: tick.electricityPriceIndex,
    baselineToken: baseline.timeline[index]?.euTokenPriceIndex ?? null
  }));

  return (
    <section className="chart-panel" id="simulation">
      <div className="panel-heading">
        <span>Simulation</span>
        <h2>Token Price Versus Electricity</h2>
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 18, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="label" minTickGap={32} />
          <YAxis domain={["dataMin - 10", "dataMax + 16"]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="token"
            name="EU token price"
            stroke="var(--petrol)"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="electricity"
            name="Electricity price"
            stroke="var(--amber)"
            strokeWidth={2.5}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="baselineToken"
            name="Baseline token price"
            stroke="var(--glacier)"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
