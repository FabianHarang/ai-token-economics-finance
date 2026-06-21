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

export function WelfareChart({ result }: { result: SimulationResult }) {
  const data = result.timeline.map((tick) => ({
    label: tick.label,
    firms: tick.firmProductivityLoss,
    publicServices: tick.publicServiceDegradationIndex,
    consumers: tick.consumerSurplusLoss,
    welfare: tick.welfareLoss
  }));

  return (
    <section className="chart-panel">
      <div className="panel-heading">
        <span>Welfare</span>
        <h2>Rationing and Productivity Loss</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 18, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="label" minTickGap={32} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="firms" name="Firm productivity loss" stroke="var(--petrol)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="publicServices" name="Public degradation" stroke="var(--amber)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="consumers" name="Consumer surplus loss" stroke="var(--glacier)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="welfare" name="Welfare loss" stroke="var(--clay)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
