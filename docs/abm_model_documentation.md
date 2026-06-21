# Agent-Based Model Documentation

This document specifies the agent-based model (ABM) used as a supporting analysis tool in the Token Economics and AI Compute Finance resource. It is intended to be readable by economists, policy analysts, energy-system researchers, mathematical finance students, and model developers. The structure follows the spirit of the ODD protocol for ABM documentation while adding explicit market equations and calibration notes for economic use.

The model is a mechanism model, not a forecast. It asks how European AI-token access changes when demand growth, local compute regulation, data-centre buildout, electricity prices, and grid-connection constraints interact.

## 1. Purpose

The model represents AI tokens as effective units of model service. A token is not treated as a pure software output. It is modeled as a claim on:

- accelerator capacity;
- data-centre IT load;
- grid connection;
- electricity;
- cooling and PUE;
- software/model operations;
- legal and compliance access;
- platform or retail intermediation.

The main question is:

> How vulnerable is the eurozone if AI-token demand grows quickly while local compute capacity, data-centre buildout, electricity supply, and grid connections lag behind demand?

## 2. Why an ABM?

A representative-agent equilibrium model would hide the heterogeneity that matters here. The relevant system contains:

- price-sensitive and price-insensitive demand;
- consumer, firm, public-sector, and AI-provider demand;
- critical and discretionary workloads;
- local and foreign-compute routing;
- region-specific grid constraints;
- policy rules that apply to some agents but not others;
- investment delays and pipeline capacity.

ABMs and agent-based computational economics are well suited to this setting because they allow macro outcomes to emerge from heterogeneous agents, institutional rules, and bounded adjustment processes.

Key methodology references:

- Grimm et al. (2010, 2020), ODD protocol for ABM description.
- Epstein and Axtell (1996), generative social science and bottom-up simulation.
- Tesfatsion (2006), agent-based computational economics.
- Farmer and Foley (2009), use of ABM for macroeconomic systems.
- Holland and Miller (1991), artificial adaptive agents in economic theory.
- Arthur (1994), bounded rationality and inductive reasoning.

## 3. Literature Anchors

### 3.1 AI systems and compute scaling

The data-science literature explains why token production is tied to compute, data, context length, and hardware efficiency.

- Vaswani et al. (2017), _Attention Is All You Need_
- Kaplan et al. (2020), _Scaling Laws for Neural Language Models_
- Hoffmann et al. (2022), _Training Compute-Optimal Large Language Models_

### 3.2 AI as an economic input

AI demand is derived demand. Users want prediction, classification, writing, coding, search, decision support, and automation, not tokens as such.

- Agrawal, Gans, and Goldfarb (2019), _The Economics of Artificial Intelligence_
- Acemoglu and Restrepo (2019), _Artificial Intelligence, Automation, and Work_
- Bresnahan and Trajtenberg (1995), _General Purpose Technologies_
- Romer (1990), _Endogenous Technological Change_

### 3.3 Platforms and industrial organization

Token markets may concentrate because of scale economies, model quality, cloud relationships, developer ecosystems, safety reputation, and platform effects.

- Rochet and Tirole (2003), _Platform Competition in Two-Sided Markets_
- Shapiro and Varian (1999), _Information Rules_
- Tirole (1988), _The Theory of Industrial Organization_

### 3.4 Electricity and infrastructure economics

Token supply depends on physical infrastructure. Electricity and grid constraints are not side details.

- IEA (2025), _Energy and AI_
- Epoch AI, AI supercomputer performance share by country
- Hogan (1992), _Contract Networks for Electric Power Transmission_
- Bessembinder and Lemmon (2002), electricity forward markets

### 3.5 Investment under uncertainty

Data-centre projects are irreversible investments under demand, policy, hardware, electricity, and grid-delay uncertainty.

- Dixit and Pindyck (1994), _Investment Under Uncertainty_
- Black and Scholes (1973), option pricing
- Merton (1973), rational option pricing

## 4. Agents and Entities

The browser model uses weighted super-agents. A super-agent is a class of agents, not an individual.

| Entity                   | Role                                                             | Heterogeneity retained                                     |
| ------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------- |
| Consumers                | Discretionary and semi-critical token demand                     | Elasticity, adoption, budget sensitivity                   |
| Regulated firms          | High-value enterprise demand under possible data-residency rules | Critical share, productivity loss, sovereignty requirement |
| Unregulated firms / SMEs | Flexible enterprise demand                                       | Elasticity and lower sovereignty requirement               |
| Public sector            | Critical public services and sensitive workloads                 | Low elasticity, high critical share, priority rule         |
| AI providers             | Internal compute demand and provider-side pressure               | Training/inference pressure, compute sourcing              |
| Data centres             | Convert IT load and GPUs into token capacity                     | Physical capacity, PUE, grid connection, pipeline delay    |
| Grid/electricity zones   | Determine power cost and congestion pressure                     | Base price, load, headroom, congestion factor              |
| Regulator                | Routes demand by legal access rules                              | EU-only start year, scope, public priority                 |
| Investor                 | Adds future capacity when returns justify it                     | Investment sensitivity, delay, subsidy response            |

## 5. Units and State Variables

Most quantities are indices. This is deliberate: exact provider-level token volume, GPU inventories, and private data-centre contracts are not public.

| Symbol                                   | Meaning                                                       |
| ---------------------------------------- | ------------------------------------------------------------- |
| `Q_i,t`                                  | Desired token demand by agent class `i`                       |
| `L_i,t`                                  | Local/certified token demand after policy routing             |
| `F_i,t`                                  | Flexible token demand allowed to use global or allied compute |
| `K_gpu,t`                                | GPU capacity layer                                            |
| `K_dc,t`                                 | Data-centre capacity layer                                    |
| `K_grid,t`                               | Grid-connection capacity layer                                |
| `P_elec,z,t`                             | Electricity price index in zone `z`                           |
| `W_z,t`                                  | Seeded stochastic weather stress in electricity zone `z`      |
| `P_token,t`                              | Delivered token price index                                   |
| `MC_t`                                   | Delivered-token marginal cost before scarcity rent            |
| `rent_grid,t`, `rent_gpu,t`, `rent_dc,t` | Scarcity-rent attribution by bottleneck layer                 |

## 6. Time Scale and Schedule

Bundled scenarios run from 2026 to 2035 in quarterly steps, giving 37 periods. The timeline is editable in each scenario JSON.

At each tick:

1. Read scenario parameters and current state.
2. Apply exogenous adoption, workflow, efficiency, GPU, grid, and policy trends.
3. Compute agent token demand.
4. Route demand into local/certified and flexible compute pools.
5. Compute GPU, data-centre, grid, allied, and global capacity layers.
6. Compute provisional data-centre electricity load.
7. Draw seeded stochastic weather stress and clear reduced-form electricity markets by zone.
8. Construct token marginal cost.
9. Clear token markets.
10. Allocate served and unmet tokens to agents.
11. Compute productivity loss, public-service loss, welfare loss, price decomposition, and vulnerability metrics.
12. Plan investment and advance previously planned pipeline capacity.

## 7. Demand Submodel

Desired demand before price response:

$$
Q^{0}_{i,t}=b_i A_{i,t} W_t \theta_{i,t}
$$

where `Q^0_{i,t}` is desired token demand before price response, `b_i` is baseline scale, `A_{i,t}` is adoption, `W_t` is workflow expansion, and `theta_{i,t}` is use-case intensity.

Adoption:

$$
A_{i,t}=(1+g_i)^{t-t_0}
$$

where `g_i` is the annual adoption growth rate.

Workflow ramp:

$$
W_t=1+(M_{2030}-1)\operatorname{ramp}_t
$$

where `M_2030` is the scenario workflow multiplier and `ramp_t` moves from 0 to 1 over the ramp period.

Isoelastic price response:

$$
Q_{i,t}(P)=Q^{0}_{i,t}\left(\frac{P_{i,t}}{P^{ref}}\right)^{-\varepsilon_i}
$$

where `P_{i,t}` is delivered token price, `P^ref` is the reference price, and `epsilon_i` is demand elasticity.

Policy routing:

$$
L_{i,t}=\lambda_{i,t}Q_{i,t},\qquad
F_{i,t}=(1-\lambda_{i,t})Q_{i,t}
$$

where `lambda_{i,t}` is the policy routing share requiring local or certified compute.

`lambda_i,t` is determined by policy scope:

- `none`
- `public_only`
- `regulated_and_public`
- `all_eu`

## 8. Capacity Submodel

Local token capacity is bottlenecked by the minimum of physical and institutional layers:

$$
K^{EU}_{t}=E_t\min\left\{K^{GPU}_{t},K^{DC}_{t},K^{Grid}_{t}\right\}
$$

where `K^EU_t` is EU-local effective token capacity, `E_t` is tokens-per-MWh efficiency, and the three `K` terms are GPU, data-centre, and grid capacity layers.

GPU growth:

$$
K^{GPU}_{t}=K^{GPU}_{0}(1+g_{GPU})^{t-t_0}
$$

where `g_GPU` is the annual GPU capacity growth rate.

Data-centre and grid capacity grow from baseline capacity plus completed pipeline projects. Grid expansion speed is a scenario parameter.

This minimum operator is the core infrastructure mechanism: if any layer binds, local token capacity binds.

## 9. Electricity Submodel

The model uses a reduced-form electricity market rather than hourly dispatch.

Electricity intensity:

$$
e_t=e_0\frac{PUE_t}{E_t}
$$

where `e_t` is MWh per token, `e_0` is baseline electricity intensity, `PUE_t` is power usage effectiveness, and `E_t` is efficiency.

Electricity price decomposition:

$$
P^{elec}_{z,t}=B_z+\Delta^{load}_{z,t}+\Delta^{cong}_{z,t}+\Delta^{fixed}_{z,t}+\Delta^{weather}_{z,t}
$$

where `B_z` is the base zonal price, `Delta^load` is the endogenous load markup, `Delta^cong` is the endogenous congestion markup, `Delta^fixed` is the deterministic exogenous shock component, and `Delta^weather` is the stochastic weather component.

The realized electricity price is therefore mixed:

- exogenous deterministic: base price, price shock, scarcity shock, convexity parameter;
- exogenous stochastic: seeded weather stress;
- endogenous: load markup from simulated data-centre load and congestion markup from grid stress.

## 10. Stochastic Weather Process

Weather enters as an exogenous stochastic process because weather affects power demand, renewable supply, cooling stress, hydro/wind conditions, and scarcity events, while remaining outside the control of token-market agents.

$$
\begin{aligned}
W_{z,t}
&=\phi W_{z,t-1}
+\sigma\left(\rho\varepsilon^{EU}_{t}+\sqrt{1-\rho^2}\varepsilon_{z,t}\right),\\
\varepsilon^{EU}_{t},\varepsilon_{z,t}&\sim\mathcal{N}(0,1),\\
\Delta^{weather}_{z,t}&=\chi_z W_{z,t}.
\end{aligned}
$$

where `W_{z,t}` is weather stress, `phi` is persistence, `sigma` is volatility, `rho` is cross-zone correlation, `epsilon^EU_t` is the common European weather innovation, `epsilon_{z,t}` is the zone-specific innovation, and `chi_z` is price sensitivity.

The process is seeded. The same scenario and seed reproduce the same weather path exactly; changing the seed creates a different path. This gives stochastic uncertainty while preserving reproducibility.

## 11. Token Marginal Cost

$$
MC_t=e_tP^{elec}_{t}+c^{GPU}_{t}+c^{DC}_{t}+c^{ops}_{t}+c^{comp}_{t}+\omega^{reg}_{t}
$$

where `MC_t` is marginal cost, `c` terms are amortized and operating costs, and `omega^reg_t` is the regulatory wedge.

Normal competitive price:

$$
P^{normal}_{t}=MC_t(1+\mu_t)
$$

where `mu_t` is the markup rate.

## 12. Token Market Clearing

If capacity is sufficient:

$$
\begin{aligned}
P_t&=P^{normal}_{t}
\quad\text{if}\quad
Q(P^{normal}_{t})\le K_t.
\end{aligned}
$$

In this case supplied demand equals `Q(P^normal_t)` and scarcity rent is zero.

If capacity binds:

$$
\begin{aligned}
Q(P_t)&=K_t,\\
R_t&=P_t-P^{normal}_{t}
\quad\text{if}\quad
Q(P^{normal}_{t})>K_t.
\end{aligned}
$$

where `R_t` is scarcity rent per token, `P_t` is the clearing token price, `K_t` is available capacity, and `Q(P_t)` is aggregate demand evaluated at price `P_t`.

If critical demand still exceeds supply, unmet critical demand is rationed according to policy. In the public-sector-priority scenario, public demand is allocated first.

## 13. Scarcity Rent Attribution

$$
\begin{aligned}
g_{j,t}&=\max\{0,L_t-K_{j,t}\},\\
R_{j,t}&=R_t\frac{g_{j,t}}{\sum_{\ell}g_{\ell,t}}.
\end{aligned}
$$

where `j` is a bottleneck layer, `ell` is the summation index over bottleneck layers, `g_{j,t}` is its capacity gap, and `R_{j,t}` is the attributed rent.

This is an accounting device for explaining which layer is responsible for scarcity in the model. It is not a proof of who captures the rent in real markets.

## 14. Investment and Pipeline

The full theoretical condition is:

$$
\begin{aligned}
\mathbb{E}[NPV_t]&=
\mathbb{E}[\Pi^{token}_{t}]
-Capex_t
-\mathbb{E}[C^{elec}_{t}]\\
&\quad-C^{grid}_{t}-C^{delay}_{t}-C^{policy}_{t}.
\end{aligned}
$$

where expected token revenue must cover capital, electricity, grid, delay, and policy-risk costs.

The browser model uses a reduced-form project-size rule:

$$
I_t=\beta_I f\left(\frac{P_t}{P^{ref}},1-\frac{K^{EU}_{t}}{L_t},s_t\right)
$$

where `I_t` is planned capacity, `beta_I` is investment sensitivity, and `s_t` is subsidy support.

Capacity enters only after:

$$
T^{ready}_{t}=t+\tau^{build}+\tau^{permit}+\tau^{grid}
$$

where the tau terms are construction, permitting, and grid-connection delays.

This captures the key time-to-power mechanism.

## 15. Endogenous and Exogenous Variables

| Endogenous                                     | Exogenous input or stochastic process                                                                           |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Demand after price response and policy routing | Adoption growth, firm intensity, public AI dependence                                                           |
| EU-local capacity                              | GPU growth, grid expansion speed, tokens-per-MWh growth                                                         |
| Electricity price load/congestion components   | Base shock, scarcity shock, price convexity, weather persistence, weather volatility, weather price sensitivity |
| Weather price component                        | Seeded normal innovations                                                                                       |
| Token price, scarcity rent, rationing          | Policy scope, foreign access rule, public priority                                                              |
| Investment pipeline                            | Build time, permitting delay, grid delay, investment sensitivity                                                |

## 16. Calibration Status

Calibration is transparent and stylized. The first version is designed to preserve mechanisms and relative directions, not to forecast real token prices.

Important files:

- `public/data/scenarios/*.json`
- `public/data/calibration/agent_classes.json`
- `public/data/calibration/electricity_zones.json`
- `public/data/calibration/technology_assumptions.json`
- `src/model/calibration/defaults.ts`

## 17. Verification and Validation

Current tests verify:

- roomy token supply clears at marginal cost plus markup;
- binding token supply raises price and creates scarcity rent;
- critical demand can be rationed;
- higher data-centre load raises electricity price;
- faster grid expansion lowers congestion;
- EU-only compute raises token price versus baseline;
- fast grid buildout lowers grid scarcity rent;
- efficiency breakthrough lowers MWh per token;
- electricity price responds to exogenous shocks and endogenous load;
- adverse weather stress raises electricity prices;
- same seed produces the same stochastic weather path;
- different seeds produce different stochastic weather paths.

These are mechanism tests, not empirical validation.

## 18. Limitations

The current model is seeded-stochastic and reduced-form. It does not include:

- hourly electricity dispatch;
- Monte Carlo confidence bands over many seeds;
- cross-border power flows;
- GPU vintages;
- water constraints;
- model quality differentiation;
- strategic oligopoly pricing;
- firm-level financial constraints;
- explicit GDP feedback;
- endogenous political response;
- country-level tax and subsidy incidence.

## 19. Next Extensions

The next credible research release should add:

- parameter uncertainty bands;
- Monte Carlo confidence bands;
- source-linked calibration table;
- quality-adjusted token units;
- model-provider oligopoly;
- forward capacity contracts;
- country-level welfare accounting;
- hourly electricity and carbon-intensity module;
- external calibration notebooks.

## 20. References

- Grimm et al. (2010), The ODD protocol: https://doi.org/10.1016/j.ecolmodel.2010.08.019
- Grimm et al. (2020), ODD for ABM documentation: https://doi.org/10.1111/2041-210X.13356
- Epstein and Axtell (1996), Growing Artificial Societies: https://mitpress.mit.edu/9780262050531/growing-artificial-societies/
- Tesfatsion (2006), Agent-Based Computational Economics: https://www2.econ.iastate.edu/tesfatsi/ace.htm
- Farmer and Foley (2009), The economy needs agent-based modelling: https://doi.org/10.1038/460685a
- Holland and Miller (1991), Artificial Adaptive Agents in Economic Theory: https://www.jstor.org/stable/2006842
- Arthur (1994), Inductive Reasoning and Bounded Rationality: https://www.jstor.org/stable/2117868
- Vaswani et al. (2017), Attention Is All You Need, Advances in Neural Information Processing Systems 30: https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html
- Kaplan et al. (2020), Scaling Laws for Neural Language Models, arXiv preprint: https://arxiv.org/abs/2001.08361
- Hoffmann et al. (2022), Training Compute-Optimal Large Language Models, arXiv preprint: https://arxiv.org/abs/2203.15556
- IEA (2025), Energy and AI: https://www.iea.org/reports/energy-and-ai/executive-summary
- Epoch AI, AI supercomputer performance share by country: https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country
- Hogan (1992), Contract Networks for Electric Power Transmission: https://doi.org/10.1007/BF00133621
- Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets: https://doi.org/10.1111/1540-6261.00463
- Rochet and Tirole (2003), Platform Competition in Two-Sided Markets: https://doi.org/10.1162/154247603322493212
- Dixit and Pindyck (1994), Investment Under Uncertainty: https://openlibrary.org/isbn/0691034109
- Agrawal, Gans, and Goldfarb (2019), The Economics of Artificial Intelligence: https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda
- European Commission, AI Act regulatory framework: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
