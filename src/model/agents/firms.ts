import type { AgentClass } from "../types";

export function isFirmAgent(agent: AgentClass): boolean {
  return agent.kind === "firm";
}

export function firmProductivityExposure(agent: AgentClass): number {
  return agent.kind === "firm" ? agent.productivityMultiplier : 0;
}
