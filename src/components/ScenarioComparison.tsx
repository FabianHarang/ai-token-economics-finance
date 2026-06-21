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

interface ScenarioComparisonProps {
  result: SimulationResult;
  baseline: SimulationResult;
}

export function ScenarioComparison({ result, baseline }: ScenarioComparisonProps) {
  const data = result.timeline.map((tick, index) => ({
    label: tick.label,
    scenario: tick.sovereignVulnerabilityIndex,
    baseline: baseline.timeline[index]?.sovereignVulnerabilityIndex ?? null,
    dependency: tick.foreignComputeDependencyRatio * 100
  }));

  return (
    <section className="chart-panel" id="calibration">
      <div className="panel-heading">
        <span>Calibration</span>
        <h2>Vulnerability Against Baseline</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 18, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="label" minTickGap={32} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="scenario" name="Scenario vulnerability" stroke="var(--petrol)" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="baseline" name="Baseline vulnerability" stroke="var(--glacier)" strokeDasharray="5 5" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="dependency" name="Foreign dependency" stroke="var(--amber)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
