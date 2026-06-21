import { BookOpen, CircuitBoard, Network, ShieldAlert } from "lucide-react";

export function MethodologyPanel() {
  const items = [
    {
      title: "Effective token",
      body: "One normalized unit of frontier-equivalent AI model service, abstracting from quality differences in the first version.",
      icon: CircuitBoard
    },
    {
      title: "Supply chain",
      body: "Electricity, grid connection, data-centre capacity, GPUs, model operations, legal access, and retail margins all enter the delivered token price.",
      icon: Network
    },
    {
      title: "Market clearing",
      body: "If demand at marginal cost exceeds available capacity, the token price rises along the demand curve and remaining critical demand is rationed.",
      icon: ShieldAlert
    },
    {
      title: "Scenario status",
      body: "Defaults are transparent assumptions for mechanism exploration, not measured forecasts or policy predictions.",
      icon: BookOpen
    }
  ];

  return (
    <section className="method-panel" id="methodology">
      <div className="panel-heading">
        <span>Methodology</span>
        <h2>Supporting Analysis Tool</h2>
      </div>
      <div className="method-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title}>
              <Icon size={20} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
