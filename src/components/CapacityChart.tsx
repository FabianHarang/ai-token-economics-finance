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

export function CapacityChart({ result }: { result: SimulationResult }) {
  const data = result.timeline.map((tick) => ({
    label: tick.label,
    demand: tick.localDemand,
    supply: tick.localSupply,
    grid: tick.capacity.grid,
    gpu: tick.capacity.gpu,
    dataCentre: tick.capacity.dataCentre
  }));

  return (
    <section className="chart-panel">
      <div className="panel-heading">
        <span>Capacity</span>
        <h2>Local Demand and Binding Layers</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 18, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="label" minTickGap={32} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="demand" name="EU-local demand" stroke="var(--petrol)" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="supply" name="Supplied" stroke="var(--teal)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="grid" name="Grid layer" stroke="var(--amber)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="gpu" name="GPU layer" stroke="var(--clay)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="dataCentre" name="Data-centre layer" stroke="var(--glacier)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
