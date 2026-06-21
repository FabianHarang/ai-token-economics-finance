import type { AgentClass } from "../types";

export function isPublicSectorAgent(agent: AgentClass): boolean {
  return agent.kind === "public";
}
