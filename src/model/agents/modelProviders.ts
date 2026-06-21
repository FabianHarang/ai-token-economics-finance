import type { AgentClass } from "../types";

export function isModelProviderAgent(agent: AgentClass): boolean {
  return agent.kind === "provider";
}
