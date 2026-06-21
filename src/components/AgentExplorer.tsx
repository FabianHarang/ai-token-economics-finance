import type { TickMetrics } from "../model/types";
import { formatIndex } from "../utils/formatters";

export function AgentExplorer({ summary }: { summary: TickMetrics }) {
  return (
    <section className="table-panel" id="agent-explorer">
      <div className="panel-heading">
        <span>Agent Explorer</span>
        <h2>Demand, Rationing, and Losses</h2>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Agent</th>
              <th>Demand</th>
              <th>Served</th>
              <th>Unmet</th>
              <th>Critical unmet</th>
              <th>Price paid</th>
              <th>Loss index</th>
            </tr>
          </thead>
          <tbody>
            {summary.agents.map((agent) => (
              <tr key={agent.id}>
                <td>
                  <strong>{agent.label}</strong>
                  <span>{agent.kind}</span>
                </td>
                <td>{formatIndex(agent.demand)}</td>
                <td>{formatIndex(agent.served)}</td>
                <td>{formatIndex(agent.unmet)}</td>
                <td>{formatIndex(agent.criticalUnmet)}</td>
                <td>{formatIndex(agent.pricePaid)}</td>
                <td>{formatIndex(agent.productivityLoss + agent.publicServiceLoss)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
