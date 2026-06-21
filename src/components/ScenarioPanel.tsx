import { Check, SlidersHorizontal } from "lucide-react";
import type { ScenarioInput } from "../model/types";
import { SliderControl } from "./SliderControl";

interface ScenarioPanelProps {
  scenarios: ScenarioInput[];
  selectedScenarioId: string;
  scenario: ScenarioInput;
  onSelectScenario: (id: string) => void;
  onChangeScenario: (scenario: ScenarioInput) => void;
}

export function ScenarioPanel({
  scenarios,
  selectedScenarioId,
  scenario,
  onSelectScenario,
  onChangeScenario
}: ScenarioPanelProps) {
  return (
    <section className="control-panel" id="scenario-builder">
      <div className="section-kicker">
        <SlidersHorizontal size={16} />
        Scenario Builder
      </div>
      <label className="select-field">
        <span>Scenario</span>
        <select
          value={selectedScenarioId}
          onChange={(event) => onSelectScenario(event.target.value)}
        >
          {scenarios.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <p className="scenario-description">{scenario.description}</p>
      <p className="control-note">
        Controls rerun the seeded browser model immediately. Weather uncertainty is stochastic
        but reproducible for the same scenario seed.
      </p>
      <div className="control-grid">
        <SliderControl
          label="Firm adoption growth"
          value={scenario.demand.firmAdoptionGrowth}
          min={0.02}
          max={0.35}
          step={0.01}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              demand: { ...scenario.demand, firmAdoptionGrowth: value }
            })
          }
        />
        <SliderControl
          label="Firm token intensity"
          value={scenario.demand.firmTokenIntensity}
          min={0.6}
          max={1.8}
          step={0.02}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              demand: { ...scenario.demand, firmTokenIntensity: value }
            })
          }
        />
        <SliderControl
          label="Public AI dependence"
          value={scenario.demand.publicSectorAiDependence}
          min={0.6}
          max={1.8}
          step={0.02}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              demand: { ...scenario.demand, publicSectorAiDependence: value }
            })
          }
        />
        <SliderControl
          label="Grid expansion speed"
          value={scenario.electricity.gridExpansionSpeedMultiplier}
          min={0.4}
          max={2.5}
          step={0.05}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              electricity: {
                ...scenario.electricity,
                gridExpansionSpeedMultiplier: value
              }
            })
          }
        />
        <SliderControl
          label="Electricity price shock"
          value={scenario.electricity.basePriceShock}
          min={-0.1}
          max={0.35}
          step={0.01}
          suffix="x"
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              electricity: { ...scenario.electricity, basePriceShock: value }
            })
          }
        />
        <SliderControl
          label="Weather volatility"
          value={scenario.electricity.weatherVolatility}
          min={0}
          max={0.5}
          step={0.01}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              electricity: { ...scenario.electricity, weatherVolatility: value }
            })
          }
        />
        <SliderControl
          label="Weather price sensitivity"
          value={scenario.electricity.weatherPriceSensitivity}
          min={0}
          max={0.35}
          step={0.01}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              electricity: {
                ...scenario.electricity,
                weatherPriceSensitivity: value
              }
            })
          }
        />
        <SliderControl
          label="Tokens per MWh growth"
          value={scenario.technology.tokensPerMWhImprovementAnnual}
          min={0.04}
          max={0.45}
          step={0.01}
          onChange={(value) =>
            onChangeScenario({
              ...scenario,
              technology: {
                ...scenario.technology,
                tokensPerMWhImprovementAnnual: value
              }
            })
          }
        />
      </div>
      <div className="toggle-row">
        <label>
          <input
            type="checkbox"
            checked={scenario.regulation.publicSectorPriority}
            onChange={(event) =>
              onChangeScenario({
                ...scenario,
                regulation: {
                  ...scenario.regulation,
                  publicSectorPriority: event.target.checked
                }
              })
            }
          />
          <span>
            <Check size={16} />
            Public-sector priority
          </span>
        </label>
      </div>
    </section>
  );
}
