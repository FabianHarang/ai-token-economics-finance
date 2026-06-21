import type { AgentClass } from "../types";

export function consumerPriceSensitivity(agent: AgentClass): number {
  return agent.kind === "consumer" ? agent.elasticity : 0;
}
