import { CalendarDays, FunctionSquare, GitBranch, Sigma } from "lucide-react";
import type { ScenarioInput, SimulationResult } from "../model/types";

function stepLabel(step: ScenarioInput["timeline"]["step"]) {
  if (step === "month") {
    return "monthly";
  }
  if (step === "quarter") {
    return "quarterly";
  }
  return "annual";
}

function periodCount(scenario: ScenarioInput) {
  const stepSize =
    scenario.timeline.step === "month"
      ? 1 / 12
      : scenario.timeline.step === "quarter"
        ? 0.25
        : 1;
  return Math.floor((scenario.timeline.endYear - scenario.timeline.startYear) / stepSize) + 1;
}

export function ModelSpecificationPanel({
  scenario,
  result
}: {
  scenario: ScenarioInput;
  result: SimulationResult;
}) {
  const shock =
    scenario.regulation.euOnlyComputeStartYear === null
      ? "none"
      : `${scenario.regulation.euOnlyComputeStartYear}`;

  return (
    <section className="model-spec-panel">
      <article>
        <CalendarDays size={19} />
        <span>Horizon</span>
        <strong>
          {scenario.timeline.startYear}-{scenario.timeline.endYear}
        </strong>
        <p>
          {periodCount(scenario)} {stepLabel(scenario.timeline.step)} periods with seeded
          stochastic weather; seed {scenario.seed ?? scenario.id}.
        </p>
      </article>
      <article>
        <GitBranch size={19} />
        <span>Policy regime</span>
        <strong>{scenario.regulation.scope.replaceAll("_", " ")}</strong>
        <p>
          Shock year {shock}; foreign access is{" "}
          {scenario.regulation.foreignComputeAccess.replaceAll("_", " ")}.
        </p>
      </article>
      <article>
        <Sigma size={19} />
        <span>Endogenous state</span>
        <strong>Demand, supply, prices</strong>
        <p>
          Token demand, served demand, electricity load, electricity price, token
          price, scarcity rents, rationing, and investment pipeline.
        </p>
      </article>
      <article>
        <FunctionSquare size={19} />
        <span>Current clearing problem</span>
        <strong>
          {result.summary.localSupply.toFixed(0)} / {result.summary.localDemand.toFixed(0)}
        </strong>
        <p>
          EU-local supplied over EU-local required token demand in the final period.
        </p>
      </article>
    </section>
  );
}
