import type { AgentClass, RegulationScope } from "../types";

export function localRequirementShare(agent: AgentClass, scope: RegulationScope): number {
  if (scope === "all_eu") {
    return 1;
  }
  if (scope === "public_only") {
    return agent.kind === "public" ? 1 : agent.sovereigntyRequirement * 0.35;
  }
  if (scope === "regulated_and_public") {
    if (agent.kind === "public") {
      return 1;
    }
    if (agent.regulatedShare > 0.75) {
      return 1;
    }
    return Math.max(agent.sovereigntyRequirement * 0.45, agent.regulatedShare * 0.55);
  }
  return 0.34 * Math.max(agent.sovereigntyRequirement, 0.12);
}
