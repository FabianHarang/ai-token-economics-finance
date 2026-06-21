# Analysis Tool

The agent-based model is a supporting analysis tool for the broader Token Economics and AI Compute Finance resource. The website is not primarily a dashboard. It is a research and teaching resource on tokenization, token pricing, model-token non-equivalence, AI compute exposure, energy and climate risk, hedging, and policy.

The current model treats one effective AI-token as a normalized unit of frontier-equivalent model service. This is a deliberate simplification for mechanism analysis. It does not forecast token prices. It creates internally consistent scenario paths showing how legal access, grid connections, data-centre buildout, GPU supply, electricity prices, weather shocks, and demand growth interact.

## Resource Architecture

The resource is organized around three layers:

1. Textbook-style learning modules on token economics and AI compute finance.
2. Mathematical finance tools for token pricing, spreads, indices, hedging, allocation, and risk measurement.
3. The ABM/digital twin as a laboratory for testing mechanisms and policy scenarios.

The first layer defines the objects. The second layer studies how those objects can be priced and risk-managed. The third layer lets the reader test selected mechanisms interactively.

## Core Research Modules

1. Token foundations: a token as a representation unit, a priced service unit, a non-equivalent model-token asset, and a quality-adjusted economic input.
2. Token market design: standardized delivery contracts, spot prices, forwards, options, priority rights, and EU-global basis risk.
3. Token production, energy, weather, and climate risk.
4. Mathematical model of token economics: demand, quality, pricing, capacity, clearing, welfare, and risk.
5. Agent-based analysis tool: heterogeneous agents, policy routing, grid constraints, and investment delay.
6. Policy, geopolitics, and institutional design.
7. Learning methods for token economics and finance.

## Economic Boundary of the Analysis Tool

The browser model connects five reduced-form markets:

- Token demand from consumers, firms, public-sector services, and AI providers.
- Compute supply from local and foreign model providers, cloud providers, and data-centre operators.
- Data-centre electricity demand by zone.
- Grid-connection capacity and congestion.
- Investment and construction pipelines for new data-centre capacity.

## Price Decomposition

Token price is decomposed into:

- electricity cost,
- GPU/server amortization,
- data-centre amortization,
- operations,
- compliance,
- provider markup,
- GPU scarcity rent,
- grid scarcity rent,
- data-centre scarcity rent,
- regulation wedge.

The important mechanism is that electricity can become a small part of the final token-price shock when EU-local compute, data-centre capacity, or grid access binds.

## Token Non-Equivalence and Financial Exposure

The first browser model uses one normalized effective-token unit. This is a transparent simplification, not a claim that all provider tokens are equivalent. A richer research model should treat token classes as a vector:

- frontier reasoning tokens;
- general-purpose model tokens;
- small or cheap model tokens;
- domain-specialized model tokens;
- certified local or sovereign-compute tokens;
- input, output, cached, batch, priority, and reserved-capacity tokens.

The economically relevant comparison is not the posted USD price per raw token alone. It is the expected cost per solved task after adjusting for quality, retries, verification, latency, compliance, and residual error risk.

Future model extension:

$$
Q_{i,u,t}^{eff}=\sum_{j=1}^{J}x_{i,u,j,t}y_{j,u,t}T^{svc}_{i,u,j,t}
$$

where `x_{i,u,j,t}` is the share of use case `u` routed by agent `i` to token class `j`, `y_{j,u,t}` is the solved-task yield of that token class, and `T^{svc}` is service-token consumption.

This creates a mathematical-finance research direction:

- task-adjusted spreads between model-token classes;
- token-service indices built from benchmark use cases;
- basis risk between frontier, small-model, global, and EU-certified tokens;
- token budget-at-risk and conditional token budget-at-risk;
- optimal procurement and routing under budget, quality, compliance, latency, and tail-risk constraints;
- hedges using forward capacity, reserved capacity, priority options, and token-index contracts.

## Simulation Loop of the Analysis Tool

For every step in the scenario timeline, the engine:

1. Applies demand, technology, and policy trends.
2. Builds weighted token demand by agent class.
3. Routes demand into EU-local, allied, or global compute pools based on regulation.
4. Draws seeded stochastic weather stress and computes data-centre load plus reduced-form electricity prices.
5. Clears the EU-local token market and flexible/global market.
6. Allocates rationing and productivity/public-service losses.
7. Updates data-centre investment and construction pipelines.
8. Records KPI, price, capacity, agent, zone, and vulnerability metrics.

## Endogenous and Exogenous Variables

The browser simulation is stochastic but seeded: the same scenario seed reproduces the same path, while a different seed changes the weather path. The following variables are endogenous:

- agent token demand after adoption, workflow growth, price response, and policy routing;
- EU-local required demand and flexible foreign/global demand;
- EU-local token supply from GPU, data-centre, grid, and efficiency constraints;
- data-centre electricity load;
- electricity price level from simulated data-centre load and grid congestion;
- token marginal cost, normal price, clearing price, scarcity rents, rationing, and welfare loss;
- investment pipeline and new operational data-centre capacity.

The following are exogenous scenario inputs:

- adoption growth rates, firm token intensity, public-sector AI dependence, and workflow multiplier;
- EU-only compute start year, policy scope, foreign compute access, and public-sector priority;
- baseline electricity shock, scarcity shock, weather volatility, weather persistence, weather price sensitivity, price convexity, and grid expansion speed;
- GPU supply growth, tokens-per-MWh improvement, and PUE improvement;
- data-centre build time, permitting delay, grid connection delay, and investment sensitivity.

Electricity price is therefore mixed: baseline shock parameters and weather innovations are exogenous, while the realized electricity price index is also endogenous to simulated data-centre load and congestion state.

## Advanced Learning Extensions for the Analysis Tool

The first release is deliberately interpretable. Deep learning and reinforcement learning should be added only where they improve empirical calibration, uncertainty quantification, or adaptive decision rules.

Recommended extensions:

- Neural surrogate model: train `f_psi(x)` to approximate ABM outputs from scenario inputs, enabling fast sensitivity analysis and policy search.
- Learned token quality: estimate the quality index `q(m,u,s)` from benchmarks, latency, reliability, compliance labels, user outcomes, and willingness-to-pay data.
- Learned demand: replace fixed elasticities with econometric or machine-learning estimates by sector and use case.
- Monte Carlo plus surrogate uncertainty: run many seeds and parameter draws, then use a surrogate to map uncertainty to token-price, welfare, and vulnerability distributions.
- Reinforcement-learning regulator: treat policy as a constrained Markov decision problem over grid investment, subsidies, certification scope, allied compute access, and public priority.
- Multi-agent reinforcement learning: allow providers, investors, firms, and regulators to adapt strategically, making market power and anticipatory investment endogenous.
- Inverse reinforcement learning or structural estimation: infer implicit preferences and policy weights from observed procurement, investment, and regulatory choices.

The main design constraint is interpretability. Learned components must be benchmarked against the transparent ABM equations, tested out of sample, and reported with diagnostics so that the simulator remains a scientific instrument rather than an opaque predictor.

## Simulation Horizon

Each scenario declares its own horizon in `timeline.startYear`, `timeline.endYear`, and `timeline.step`. The bundled scenarios currently run from 2026 to 2035 in quarterly steps, giving 37 seeded stochastic periods.

## Scope Limits

The public browser version uses weighted super-agents and reduced-form markets. It does not model individual firms, hourly power dispatch, proprietary GPU inventories, private cloud contracts, or strategic oligopoly pricing.
