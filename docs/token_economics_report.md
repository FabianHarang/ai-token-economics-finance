# The Economics of AI Tokens

This report is part of the Token Economics and AI Compute Finance resource. A billable AI token is the visible accounting unit, but an effective token is a quality-adjusted claim on a capital-intensive and politically constrained production chain: accelerator hardware, model weights, data, electricity, data-centre capacity, grid connection, cooling, networking, software operations, compliance, and platform access.

The accompanying model is not a forecast. It is a scenario-analysis tool designed to make one mechanism visible: token prices can move much more than electricity prices when local compute, GPUs, data-centre capacity, grid connection, or legal access becomes scarce.

## 1. What Is a Token?

In data science, a token is a discrete element processed by a model. Text is split into tokens; code, images, audio, tool calls, and actions can also be represented through token-like discrete or latent units. The transformer architecture made token sequences the core object of scalable modern AI systems.

In economics, raw token count is not enough. A token from a frontier model, a small local model, and a domain-specific expert model may differ in quality, latency, context length, reliability, privacy, security certification, and legal admissibility.

$$
T^{eff}=q(m,u,s)T^{raw}
$$

where `T^eff` is quality-adjusted effective tokens, `T^raw` is raw billable token count, and `q(m,u,s)` is a quality index for model `m`, use case `u`, and service conditions `s`.

The browser version sets `q = 1` so users can first see infrastructure economics clearly. Later versions should estimate quality-adjusted tokens by use case.

## 2. How Tokens Are Used in AI

Operationally, tokens are the units that move through model inference. A user sends input tokens, the model reads a context window, and the model returns output tokens. The platform may also spend hidden tokens or token-equivalent compute on retrieval, tool calls, routing, safety checks, caching, and multimodal encoders.

$$
\begin{aligned}
T^{svc}_{u,t}
&=T^{in}_{u,t}+T^{out}_{u,t}+T^{tool}_{u,t}+T^{hidden}_{u,t},\\
Cost_{u,t}
&=T^{svc}_{u,t}\cdot mc_{m,r,t}.
\end{aligned}
$$

where `T^svc_{u,t}` is total service-token consumption for use case `u`, `T^in` and `T^out` are visible prompt and completion tokens, `T^tool` is tool/retrieval/action use, `T^hidden` is provider-side orchestration and safety work, and `mc_{m,r,t}` is marginal cost for model `m` in region `r`.

This is why a token is both a data-science representation unit and an economic production unit.

## 3. Literature Review

There is not yet a single mature literature called "token economics." The relevant theory is a synthesis.

### 2.1 AI Systems and Compute Scaling

The transformer and scaling-law literatures explain why tokens are not just a user-interface unit. Model performance and cost depend on sequence length, parameters, training data, inference load, hardware efficiency, and deployment architecture.

Useful references:

- Vaswani et al. (2017), _Attention Is All You Need_
- Kaplan et al. (2020), _Scaling Laws for Neural Language Models_
- Brown et al. (2020), _Language Models are Few-Shot Learners_
- Hoffmann et al. (2022), _Training Compute-Optimal Large Language Models_
- Stanford HAI, _AI Index Report 2026_

### 2.2 AI as a General-Purpose Input

AI tokens are derived demand. Users do not fundamentally want tokens; they want prediction, generation, translation, classification, software production, search, planning, and task automation. The economics of AI therefore connects to the economics of general-purpose technologies, endogenous growth, automation, and task reallocation.

Useful references:

- Agrawal, Gans, and Goldfarb (2019), _The Economics of Artificial Intelligence_
- Acemoglu and Restrepo (2019), _Artificial Intelligence, Automation, and Work_
- Bresnahan and Trajtenberg (1995), _General Purpose Technologies_
- Romer (1990), _Endogenous Technological Change_
- Aghion and Howitt (1992), _A Model of Growth Through Creative Destruction_

### 2.3 Platforms, Market Power, and Information Goods

Token markets are unlikely to be perfectly competitive by default. Model providers and cloud providers have scale economies, model-specific quality advantages, distribution channels, developer ecosystems, procurement power, reputation, and safety/compliance capabilities. Token retailers may become platforms matching users, models, tools, and compute pools.

Useful references:

- Rochet and Tirole (2003), _Platform Competition in Two-Sided Markets_
- Tirole (1988), _The Theory of Industrial Organization_
- Shapiro and Varian (1999), _Information Rules_
- Arrow (1962), _The Economic Implications of Learning by Doing_

### 2.4 Infrastructure, Electricity, and Real Options

The physical layer makes token supply lumpy, location-specific, and slow to expand. Data centres require land, construction, cooling, fiber, grid connection, power contracts, transformers, permitting, and financing. A data centre with GPUs but no grid connection does not create usable local token supply.

Useful references:

- IEA (2025), _Energy and AI_
- Epoch AI, AI supercomputer performance share by country
- Hogan (1992), _Contract Networks for Electric Power Transmission_
- Dixit and Pindyck (1994), _Investment Under Uncertainty_

### 2.5 Finance and Commodity Risk

If token capacity becomes scarce, token markets may evolve beyond spot API pricing. We should expect reserved capacity, priority-access contracts, interruptible batch tokens, sovereign token pools, forward contracts, option-like rights, and regional basis risk. Electricity and commodity finance are natural analogies because the valuable unit is non-storable capacity delivered under location and time constraints.

Useful references:

- Bessembinder and Lemmon (2002), _Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets_
- Black and Scholes (1973), _The Pricing of Options and Corporate Liabilities_
- Merton (1973), _Theory of Rational Option Pricing_
- Schwartz (1997), _The Stochastic Behavior of Commodity Prices_
- Duffie (2001), _Dynamic Asset Pricing Theory_

## 4. Tradable Token Assets and Derivatives

In an idealized market with equivalent models, standardized quality, enforceable delivery, and credible clearing, an AI token can become a tradable capacity asset. This does not mean a cryptocurrency. It means a contract right to consume model service under defined delivery conditions.

$$
X=(\kappa,m,r,\tau,\ell,\pi,\gamma)
$$

where `kappa` is quantity of effective tokens, `m` is the model or benchmark, `r` is region or certified compute pool, `tau` is the delivery window, `ell` is latency class, `pi` is privacy/compliance class, and `gamma` is reliability/interruption rule.

The natural financial products are reserved capacity, interruptible batch tokens, forward delivery, options on priority delivery, and regional basis contracts.

$$
\begin{aligned}
V^{fwd}_{t}(K,T)&=e^{-r(T-t)}\mathbb{E}^{\mathbb{Q}}_{t}[S_T-K],\\
C_t(K,T)&=e^{-r(T-t)}\mathbb{E}^{\mathbb{Q}}_{t}[\max(S_T-K,0)],\\
B^{EU,glob}_{T}&=F^{EU}_{T}-F^{glob}_{T}.
\end{aligned}
$$

where `S_T` is future spot token price, `K` is the forward price or option strike, `Q` is the risk-neutral measure, `C_t` is a call option on token capacity, and `B^{EU,glob}_T` is the EU-local versus global basis.

## 5. Model Notation

The simulator uses weighted super-agents. Let:

- `i`: agent group.
- `t`: time.
- `r`: compute region.
- `z`: electricity bidding zone.
- `Q_{i,t}`: token demand of agent `i`.
- `P_t`: delivered token price index.
- `P^{elec}_{z,t}`: electricity price index in zone `z`.
- `K^{GPU}_{t}`: available GPU capacity.
- `K^{DC}_{t}`: available data-centre capacity.
- `K^{Grid}_{t}`: available grid-connection capacity.
- `lambda_{i,t}`: share of demand requiring local/certified compute.
- `W_{z,t}`: stochastic weather stress in electricity zone `z`.
- `MC_t`: marginal cost of a delivered effective token before scarcity rent.

## 6. Demand Block

Demand is derived from adoption, activity, use-case intensity, price response, and regulation.

$$
\begin{aligned}
Q^{0}_{i,t}&=b_iA_{i,t}W_t\theta_{i,t},\\
A_{i,t}&=(1+g_i)^{t-t_0}.
\end{aligned}
$$

where `Q^0_{i,t}` is desired demand before price response, `b_i` is baseline demand, `A_{i,t}` is adoption, `W_t` is workflow expansion, `theta_{i,t}` is use-case intensity, `g_i` is adoption growth, and `t_0` is the reference start period.

The price response is isoelastic:

$$
Q_{i,t}(P)=Q^{0}_{i,t}\left(\frac{P_{i,t}}{P^{ref}}\right)^{-\varepsilon_i}a_{i,t}
$$

where `P_{i,t}` is delivered price, `P^ref` is reference price, `epsilon_i` is demand elasticity, and `a_{i,t}` is the access factor.

Regulation splits demand into local-required and flexible demand:

$$
L_{i,t}=\lambda_{i,t}Q_{i,t},\qquad
F_{i,t}=(1-\lambda_{i,t})Q_{i,t}
$$

where `lambda_{i,t}` is the policy routing share requiring local or certified compute.

`L_i,t` must clear against EU-local or certified compute. `F_i,t` may use global or allied capacity depending on policy.

## 7. Capacity Block

Local token supply is the minimum of several physical and institutional layers.

$$
K^{EU}_{t}=E_t\min\{K^{GPU}_{t},K^{DC}_{t},K^{Grid}_{t},K^{Power}_{t}\}
$$

where `K^EU_t` is EU-local effective token capacity, `E_t` is tokens-per-MWh efficiency, and the `K` terms are GPU, data-centre, grid, and available-power layers.

This minimum operator is the heart of the model. It says that a bottleneck in any layer can create token scarcity.

## 8. Electricity and Grid Block

The browser model uses a reduced-form electricity module rather than hourly dispatch.

$$
e_t=e_0\frac{PUE_t}{E_t}
$$

where `e_t` is MWh per token, `PUE_t` captures data-centre overhead, and `E_t` captures hardware and model-efficiency improvements.

Electricity prices are modeled as:

$$
\begin{aligned}
P^{elec}_{z,t}
&=P^{base}_{z}\left(\frac{Load_{z,t}}{Load^{ref}_{z}}\right)^{\eta_z}\\
&\quad+C_{z,t}+S_{z,t}+Carbon_{z,t}.
\end{aligned}
$$

where `eta_z` is price convexity, `C_{z,t}` is congestion markup, `S_{z,t}` is scarcity shock, and `Carbon_{z,t}` is the carbon-policy cost component.

This is not a full dispatch model. It is a transparent way to represent the fact that concentrated data-centre load can raise local power prices and congestion costs.

The realized electricity price is partly endogenous and partly exogenous:

$$
P^{elec}_{z,t}=B_z+\Delta^{load}_{z,t}+\Delta^{cong}_{z,t}+\Delta^{fixed}_{z,t}+\Delta^{weather}_{z,t}
$$

where `B_z` is base price, `Delta^load` is endogenous load markup, `Delta^cong` is endogenous congestion markup, `Delta^fixed` is the deterministic scenario shock, and `Delta^weather` is stochastic weather stress.

`base_z`, electricity shock, scarcity shock, weather parameters, and convexity are scenario inputs. The load and congestion components are computed inside the simulation from data-centre electricity use, grid headroom, and grid expansion.

## 9. Exogenous Weather Uncertainty

Weather affects electricity demand, renewable availability, cooling loads, hydro/wind conditions, and scarcity events. The simulator represents this as a seeded stochastic process. Same seed gives the same path; changing the seed gives a different path.

$$
\begin{aligned}
W_{z,t}
&=\phi W_{z,t-1}
+\sigma\left(\rho\varepsilon^{EU}_{t}+\sqrt{1-\rho^2}\varepsilon_{z,t}\right),\\
\varepsilon^{EU}_{t},\varepsilon_{z,t}&\sim\mathcal{N}(0,1),\\
\Delta^{weather}_{z,t}&=\chi_z W_{z,t}.
\end{aligned}
$$

where `W_{z,t}` is weather stress, `phi` is persistence, `sigma` is volatility, `rho` is cross-zone correlation, `epsilon^EU` is the common European shock, `epsilon_z` is a zone shock, and `chi_z` is weather price sensitivity.

## 10. Token Marginal Cost

$$
MC_t=e_tP^{elec}_{t}+c^{GPU}_{t}+c^{DC}_{t}+c^{ops}_{t}+c^{comp}_{t}+\omega^{reg}_{t}
$$

where `MC_t` is marginal cost before scarcity rent, the `c` terms are cost components, and `omega^reg_t` is the regulatory wedge.

The competitive normal price is:

$$
P^{normal}_{t}=MC_t(1+\mu_t)
$$

where `mu_t` is the markup rate.

## 11. Market Clearing

The local token market clears as follows:

$$
\begin{aligned}
P_t&=
\begin{cases}
P^{normal}_{t}, & Q(P^{normal}_{t})\le K_t,\\
P^{*}_{t}, & Q(P^{normal}_{t})>K_t,\ Q(P^{*}_{t})=K_t.
\end{cases}
\end{aligned}
$$

where `P_t` is the clearing token price, `P^normal_t` is the marginal-cost price, `K_t` is binding token capacity, and `Q(P_t)` is aggregate demand evaluated at price `P_t`.

$$
R_t=\max\{0,P_t-P^{normal}_{t}\},\qquad S_t=\min\{Q(P_t),K_t\}
$$

where `R_t` is scarcity rent per token and `S_t` is supplied token volume. If critical local demand remains above capacity after the price adjustment, the simulation applies the policy priority rule to ration unmet demand.

This is why token prices can rise more than electricity prices. Electricity affects `MC_t`, but capacity scarcity affects `P_t - P_normal,t`.

## 12. Scarcity Rent Attribution

The model attributes scarcity rent to the bottleneck layers:

$$
g_{j,t}=\max\{0,L_t-K_{j,t}\}
$$

where `j` indexes the bottleneck layer: GPU capacity, data-centre capacity, grid connection, or available power. `L_t` is local-required token demand and `K_{j,t}` is capacity in layer `j`.

$$
\begin{aligned}
\rho_{j,t}&=\frac{g_{j,t}}{\sum_{\ell}g_{\ell,t}},\\
R_{j,t}&=\rho_{j,t}R_t.
\end{aligned}
$$

where `rho_{j,t}` is the attributed bottleneck share, `ell` is the summation index over bottleneck layers, and `R_{j,t}` is rent attributed to layer `j`. If all gaps are zero, all attributed rents are zero by convention.

This is an accounting device, not a structural proof of who captures the rent in real markets. Contracting and market power determine the actual distribution.

## 13. Full Simulation Sequence

Each bundled scenario runs from 2026 to 2035 in quarterly periods. The simulation order is:

1. Initialize scenario, seed, timeline, calibration tables, and investment pipeline.
2. Generate weather stress by electricity zone.
3. Update adoption, workflow expansion, efficiency, PUE, GPU capacity, data-centre capacity, and grid capacity.
4. Compute desired token demand by agent class.
5. Route demand into local/certified and flexible pools.
6. Compute provisional EU data-centre electricity load.
7. Clear zonal electricity prices.
8. Construct token marginal costs.
9. Clear local/certified and flexible token markets.
10. Allocate served and unmet tokens back to agents.
11. Compute welfare, productivity, public-service, emissions, and vulnerability metrics.
12. Plan new data-centre projects for future periods.

## 14. Investment and Delay

New data-centre capacity enters when expected returns exceed a hurdle rate:

$$
\begin{aligned}
\mathbb{E}[NPV_t]
&=\mathbb{E}[\Pi^{token}_{t}]
-Capex_t
-\mathbb{E}[C^{elec}_{t}]\\
&\quad-C^{grid}_{t}-C^{delay}_{t}-C^{policy}_{t}.
\end{aligned}
$$

where `E[NPV_t]` is expected net present value at decision time `t`, `E[Pi^token_t]` is expected token operating profit, `Capex_t` is capital expenditure, and the remaining terms are expected electricity, grid-upgrade, delay, and policy-risk costs.

Projects then pass through permitting, construction, and grid-connection delay. This makes scarcity persistent even when high prices induce investment.

## 15. Political Economy

If AI tokens are inputs into productivity, public administration, research, and security-sensitive services, compute access becomes a macroeconomic exposure. A country dependent on foreign-executed tokens can face price shocks, rationing, access restrictions, cloud-term changes, export controls, or policy leverage from compute-controlling firms and states.

Sovereign compute policy therefore trades resilience against cost. Local compute rules can protect privacy, security, and industrial capability, but they can also move demand from a large global supply curve to a smaller local supply curve. If grid-connected AI capacity lags, the result is not merely a higher electricity bill. It is a token-price wedge, rationing, and slower AI adoption.

The simulator summarizes this through:

$$
\begin{aligned}
SAVI_t
&=w_1D^{foreign}_t+w_2U^{critical}_t+w_3G^{gap}_t\\
&\quad+w_4S^{price}_t+w_5X^{public}_t.
\end{aligned}
$$

where `SAVI_t` is the Sovereign AI Vulnerability Index, `D^foreign_t` is foreign dependency, `U^critical_t` is critical unmet demand, `G^gap_t` is grid-connection gap, `S^price_t` is token price shock, `X^public_t` is public-sector exposure, and the `w` terms are scenario weights.

## 16. References

- Vaswani et al. (2017), Attention Is All You Need, Advances in Neural Information Processing Systems 30: https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html
- Kaplan et al. (2020), Scaling Laws for Neural Language Models, arXiv preprint: https://arxiv.org/abs/2001.08361
- Brown et al. (2020), Language Models are Few-Shot Learners, Advances in Neural Information Processing Systems 33: https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html
- Hoffmann et al. (2022), Training Compute-Optimal Large Language Models, arXiv preprint: https://arxiv.org/abs/2203.15556
- Stanford HAI (2026), AI Index Report 2026: https://hai.stanford.edu/ai-index/2026-ai-index-report
- Epoch AI, AI supercomputer performance share by country: https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country
- IEA (2025), Energy and AI: https://www.iea.org/reports/energy-and-ai/executive-summary
- European Commission, AI Act regulatory framework: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
- European Commission, AI Continent Action Plan: https://commission.europa.eu/topics/competitiveness/ai-continent_en
- Agrawal, Gans, and Goldfarb (2019), The Economics of Artificial Intelligence: https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda
- Acemoglu and Restrepo (2019), Artificial Intelligence, Automation, and Work: https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda/artificial-intelligence-automation-and-work
- Bresnahan and Trajtenberg (1995), General Purpose Technologies: https://doi.org/10.1016/0304-4076(94)01598-T
- Romer (1990), Endogenous Technological Change: https://doi.org/10.1086/261725
- Aghion and Howitt (1992), A Model of Growth Through Creative Destruction: https://doi.org/10.2307/2951599
- Jones and Williams (1998), Measuring the Social Return to R&D: https://doi.org/10.1162/003355398555856
- Rochet and Tirole (2003), Platform Competition in Two-Sided Markets: https://doi.org/10.1162/154247603322493212
- Tirole (1988), The Theory of Industrial Organization: https://mitpress.mit.edu/9780262200714/the-theory-of-industrial-organization/
- Shapiro and Varian (1999), Information Rules: https://books.google.com/books?id=aE_J4Iv_PVEC
- Arrow (1962), The Economic Implications of Learning by Doing: https://www.jstor.org/stable/2295952
- Dixit and Pindyck (1994), Investment Under Uncertainty: https://openlibrary.org/isbn/0691034109
- Hogan (1992), Contract Networks for Electric Power Transmission: https://doi.org/10.1007/BF00133621
- Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets: https://doi.org/10.1111/1540-6261.00463
- Black and Scholes (1973), The Pricing of Options and Corporate Liabilities: https://doi.org/10.1086/260062
- Merton (1973), Theory of Rational Option Pricing: https://doi.org/10.2307/3003143
- Schwartz (1997), The Stochastic Behavior of Commodity Prices: https://doi.org/10.1111/j.1540-6261.1997.tb02721.x
- Duffie (2001), Dynamic Asset Pricing Theory: https://books.google.com/books?id=f2Wv-LDpsoUC
