import {
  Area,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { SimulationResult } from "../model/types";

export function ElectricityChart({ result }: { result: SimulationResult }) {
  const data = result.timeline.map((tick) => ({
    label: tick.label,
    price: tick.electricityPriceIndex,
    endogenousLoad: tick.electricityEndogenousLoadComponent,
    congestion: tick.electricityCongestionComponent,
    exogenous: tick.electricityExogenousShockComponent,
    weather: tick.electricityWeatherComponent,
    weatherStress: tick.weatherStressIndex,
    consumption: tick.dataCentreElectricityConsumption,
    intensity: tick.electricityMWhPerTokenIndex,
    constrained: tick.gridConstrainedDataCentreLoad
  }));

  return (
    <section className="chart-panel">
      <div className="panel-heading">
        <span>Electricity</span>
        <h2>Electricity Price Formation</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 10, right: 18, bottom: 0, left: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis dataKey="label" minTickGap={32} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="endogenousLoad"
            name="Endogenous load markup"
            fill="var(--teal)"
            stroke="var(--teal)"
            fillOpacity={0.24}
          />
          <Area
            type="monotone"
            dataKey="congestion"
            name="Endogenous congestion"
            fill="var(--amber)"
            stroke="var(--amber)"
            fillOpacity={0.22}
          />
          <Area
            type="monotone"
            dataKey="exogenous"
            name="Fixed exogenous shock"
            fill="var(--clay)"
            stroke="var(--clay)"
            fillOpacity={0.16}
          />
          <Area
            type="monotone"
            dataKey="weather"
            name="Stochastic weather shock"
            fill="var(--glacier)"
            stroke="var(--glacier)"
            fillOpacity={0.18}
          />
          <Line
            type="monotone"
            dataKey="price"
            name="EU electricity price index"
            stroke="var(--petrol)"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="intensity"
            name="MWh per token index"
            stroke="var(--glacier)"
            strokeDasharray="5 5"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="panel-note">
        Electricity price is endogenous to simulated data-centre load and grid
        congestion, plus fixed scenario shocks and a seeded stochastic weather
        process. The index uses a common reference, so scenarios are comparable
        in levels and reproducible for the same seed.
      </p>
    </section>
  );
}
