# Token Economics and AI Compute Finance Masterplan

This project is a professional research and teaching resource on token economics, AI compute finance, and the risk management of model-token exposure. The agent-based digital twin is not the main product. It is one useful analysis instrument inside a broader resource that should teach, formalize, and test the economics of AI tokens from global infrastructure risk down to local hedging and procurement decisions.

The intended reader is a mathematically trained student or researcher in mathematical finance, economics, energy finance, computational social science, or AI policy. The writing should be engaging and motivating, but never casual at the expense of precision. Each page should read like a carefully written textbook chapter in webpage form: intuitive narrative, precise definitions, declared variables, rigorous equations, references, examples, exercises, and links to interactive analysis.

## Scientific Principles

1. Scientific truthfulness has priority over speed, visual polish, and computational convenience.
2. Every major claim should state its assumptions, scope, and limitations.
3. Variables must be declared before or immediately after equations.
4. Token units must not be treated as equivalent unless an explicit conversion is defined.
5. When several modelling routes are possible, the resource should present the main alternatives, compare their strengths and weaknesses, and justify the selected approach.
6. Calibration and simulation results must be distinguished from empirical facts.
7. The digital twin is a laboratory for mechanisms, not a forecast machine.
8. Mathematical finance, economics, energy systems, AI engineering, and policy analysis should be integrated rather than siloed.
9. The writing should be clear enough for students and rigorous enough for researchers.
10. Uncertainty, tail risk, basis risk, model risk, and climate/weather risk should be treated as first-class objects.
11. Major mathematical claims should be promoted from prose to named assumptions, propositions, theorems, proof sketches, counterexamples, or conjectures.
12. A theorem is included only when its assumptions support the conclusion. Speculative but important claims should be labelled as research questions or conjectures.

## Public Prose and Teaching Standard

All public-facing resource pages must be written for a general scholarly audience, not for the project owner or any individual reviewer. The tone should resemble a careful mathematics, economics, or mathematical-finance textbook: professional, precise, explanatory, and motivating. Conversational phrases such as "you are right," "as you asked," or "I will" must not appear in article text.

Each module should contain:

- Formal definitions before substantial use of a concept.
- Simple numerical examples that show how the abstract equations work.
- Explicit declaration of every variable in equations.
- Clear separation between definitions, assumptions, examples, calibrated quantities, simulations, conjectures, and empirical claims.
- Illustrations wherever possible: diagrams, comparison tables, process maps, and preferably interactive calculators or visualizations when parameters materially affect the result.
- Explanations that make complex functions concrete before introducing the full research-level abstraction.

## Citation and Reference Standard

All concepts, equations, modelling devices, empirical claims, and terminology that are inherited from existing literature must be cited where they are introduced, not only in a bibliography. Use concise author-year references in the article body and a complete reference list at the end of each module. Every public-facing citation must be clickable: inline author-year citations should link directly to the source, and bibliography entries should also be clickable.

Citation identifiers must be treated scientifically:

- Use DOI links only when a DOI has been assigned and checked against a reliable source such as the publisher, ACL Anthology, Crossref, JSTOR, or the journal page.
- Prefer the published journal, conference-proceedings, book, standards-body, or official report version over an arXiv/preprint version whenever such a version exists. Use arXiv only for genuine preprints or technical reports after checking that no published version is available, and label the item clearly as a preprint.
- Use ISBNs for books when the ISBN has been verified; otherwise cite publisher, edition, and year without inventing an identifier.
- Use institutional report numbers, standard numbers, or official issuer pages for reports and standards.
- Do not invent DOIs, page ranges, editions, or publication venues. If an identifier cannot be verified, omit it or mark the item as an institutional report/preprint/book without DOI.
- Prefer primary sources: journal pages, publisher pages, standards bodies, official reports, or archival repositories. Secondary sources may help discovery but should not be the final authority for the reference list.
- Time-sensitive standards and reports must be rechecked before publication. For example, PUE should reference the current ISO/IEC 30134-2 edition rather than a withdrawn edition.
- Before a module is published, every citation URL must be double-checked. A DOI link must resolve through `doi.org`; a conference paper without DOI must resolve to the official proceedings page; an arXiv link must be used only after checking that no published venue exists and must resolve to the intended arXiv record; an institutional report link must resolve to the intended official report page or PDF; and a book link must resolve to a publisher, library, or stable catalogue page.
- Broken, stale, paywall-challenge, or redirected links must be investigated. If the DOI resolver redirects to the publisher but the publisher blocks automated access, the DOI can still be used if Crossref, the publisher, or another reliable source verifies the DOI and title.
- Inline citations and bibliography entries must share the same verified URL source wherever possible, preferably through a central citation map in the code so that future corrections happen in one place.

## Verification Workflow

1. Execute exactly one module milestone at a time.
2. For each module, write the article as a standalone resource page.
3. Verify build, tests, rendering, LaTeX, navigation, mobile layout, and internal links.
4. Check the scientific content for assumptions, unit consistency, and mathematical clarity.
5. Check the proof layer for correct quantifiers, dimensional consistency, existence conditions, convexity conditions, and counterexamples.
6. Request reviewer approval for the module in the app.
7. Continue only after the module is approved or revised.

## Site Architecture

The public-facing site should have three layers:

- Resource library: textbook-style pages on token economics and AI compute finance.
- Mathematical finance laboratory: token indices, spreads, hedging, allocation, derivatives, and risk metrics.
- Analysis tools: the ABM/digital twin, scenario builder, charts, exports, and documentation used to test mechanisms.

The resource library should be the reader's first impression. The analysis tool should be introduced as a way to test the concepts after they have been defined.

## Milestone 1: What Is an AI Token?

Status: revised for review with textbook voice, worked examples, and an interactive equivalence illustration.

Purpose:

- Establish the central principle that "a token is not a token."
- Explain the technical mechanics of tokenization and the economic translation from raw tokens to task-equivalent service.
- Introduce the mathematical finance idea that model-token classes are non-equivalent priced exposures.

Required content:

- Technical tokenization: vocabulary, subword units, sequence length, embeddings, context windows, input tokens, output tokens, cached tokens, hidden tokens, retrieval tokens, tool-use tokens, and service-token accounting.
- Economic tokenization: raw tokens, billable tokens, effective tokens, solved-task units, quality adjustment, latency, reliability, privacy, compliance, and model-specific task success.
- USD token prices: posted input/output prices, cached-token prices, batch prices, reserved-capacity prices, and why posted token prices are not sufficient.
- Cost per solved task: repeated prompting, verification cost, latency cost, residual error cost, and expected attempts.
- Token non-equivalence: frontier reasoning tokens, general-purpose tokens, small-model tokens, open-weight/local tokens, domain-specialized tokens, certified local tokens, and priority-capacity tokens.
- Token spreads: task-adjusted spreads, frontier-small spreads, EU-certified/global basis, latency basis, model-quality basis, and compliance basis.
- Token index construction: benchmark tasks, use-case weights, quality adjustments, eligibility rules, rebalancing rules, and index governance.
- Risk management: token budget-at-risk, conditional token budget-at-risk, covariance of effective token prices, hedge ratios, model substitution, and basis-risk decomposition.
- ABM link: the current scalar effective-token unit is a simplification; the research direction is a vector of token classes with solved-task yields and allocation weights.
- Worked examples: raw-token count ratios, expected cost per solved task, and quality-adjusted equivalence ratios.
- Interactive illustration: a two-token-class calculator showing how posted price, verification cost, latency cost, solve probability, and residual error cost change the task-adjusted spread.

Verification question:

- Is the page precise enough for a mathematical finance student to understand why raw tokens are not equivalent, how model-token exposures should be priced, and why token procurement becomes a hedging and allocation problem?

## Milestone 2: Token Market Design and Tradable Token Assets

Status: revised for review with contract definitions, stochastic underlying price dynamics, calibration logic, derivative payoff equations, worked examples, and interactive illustrations.

Purpose:

- Develop a formal market-design chapter for tokenized AI compute service.
- Explain how token classes can become tradable service assets without confusing them with cryptocurrency tokens.
- Define the stochastic underlying price process needed to value token forwards, options, spreads, and index contracts.

Required content:

- Contract specification: provider, model, region, delivery window, input/output class, latency class, privacy/compliance class, reliability rule, interruption rule, and priority rule.
- Spot token-service markets and posted-price markets.
- Reserved capacity, forward delivery, batch contracts, interruptible token service, and priority access.
- Options on compute capacity and token delivery.
- Token-index futures, spread contracts, basis swaps, and collars.
- Underlying price dynamics: benchmark provider basket, expected token usage, stochastic output tokens, energy-price exposure, demand-dependent mean reversion, seasonality, jumps, and scarcity rents.
- Calibration: provider prices, benchmark task baskets, output-length distributions, usage/adoption data, electricity and weather factors, deliverable capacity, reserved-capacity quotes, forward quotes, risk premia, and physical-versus-risk-neutral dynamics.
- Clearing, collateral, margin, credit risk, manipulation risk, and benchmark governance.
- Comparison with electricity, gas, cloud computing, bandwidth, and commodity finance.
- Conditions required for liquidity: standardization, verification, settlement, quality measurement, and enforceability.
- Distinction between AI-token service claims and cryptocurrency tokens.
- Worked examples: long token forward, burst-capacity option, and certified/global basis spread.
- Interactive illustration: a commodity-style spot dynamics calculator showing how expected usage, electricity price, seasonality, utilization, and scarcity convexity affect benchmark token prices.
- Interactive illustration: a forward-hedge calculator showing how hedge share, forward price, spot price, and basis risk affect future token-procurement cost.

Verification question:

- Is the derivative and market-design logic mathematically motivated, practically plausible, and clearly separated from cryptocurrency language?

## Milestone 3: Token Production, Energy, Weather, and Climate Risk

Status: revised for review with service-path accounting, inference compute, facility energy, grid capacity bottlenecks, stochastic weather, electricity-price dynamics, energy pass-through, climate risk, stress metrics, worked examples, and an interactive weather-stress calculator.

Purpose:

- Explain how tokens translate into compute, energy consumption, data-centre load, electricity prices, grid stress, weather shocks, and climate-related exposure.

Required content:

- From input/output tokens to inference compute, memory bandwidth, utilization, batching, and latency.
- Electricity intensity per effective token, PUE, cooling, water, hardware efficiency, and model-efficiency improvements.
- Difference between training compute, inference compute, batch inference, real-time inference, and agentic workflows.
- Grid connection, data-centre siting, transmission bottlenecks, power contracts, and local congestion.
- Weather as an exogenous stochastic process affecting electricity demand, renewable output, cooling loads, hydro/wind conditions, and scarcity events.
- Climate risk: chronic temperature shifts, extreme weather, water stress, transition policy, carbon pricing, and adaptation investment.
- Energy-price pass-through to token prices and when electricity is only a small part of the total scarcity rent.
- Stress testing token portfolios under joint token, electricity, weather, and climate shocks.
- Explicit unit discipline: distinguish raw tokens, service tokens, service-load indices, IT energy, facility energy, grid capacity, electricity price, carbon intensity, carbon price, and scarcity penalties.
- Model-comparison discipline: present reduced-form stochastic processes and structural electricity-system maps as alternatives, and state when each is appropriate.
- Interactive illustration: a weather and energy stress calculator linking service-token volume, energy intensity, PUE/cooling, renewable derating, grid capacity, electricity price, carbon intensity, carbon price, and capacity scarcity.

Verification question:

- Can the reader trace a tokenized AI service request from input/output tokens to compute load, electricity demand, and financial risk exposure?

## Milestone 4: Mathematical Model of Token Economics

Status: revised for review with a full mathematical model chapter covering the formal model operator, primitives, feasible allocation sets, correspondence-versus-function interpretation, existence-style properties, selection rules, token-class vectors, task demand, quality-adjusted yields, effective prices, capacity feasibility, clearing, scarcity rents, welfare, stochastic state dynamics, derivative pricing, factor risk, portfolio hedging, policy constraints, calibration, simulator mapping, worked examples, readable symbol tables, and an interactive clearing/risk calculator.

Purpose:

- Provide the rigorous mathematical core of the resource.
- Define token demand, task value, model quality, token supply, market clearing, welfare, investment, uncertainty, and risk metrics.

Required content:

- A clear construction of the model operator from primitives to outcomes, including domain, codomain, feasible set, selection rule, and interpretation as a correspondence when outcomes are not unique.
- Mathematical properties of the model operator, such as nonempty feasible sets, compactness, continuity, monotonicity, shadow values, and conditions under which the correspondence becomes a single-valued simulator map.
- A vector model of token classes rather than one scalar token.
- Task-level demand and willingness-to-pay.
- Quality-adjusted effective tokens and solved-task yields.
- Token price processes, spreads, covariance, factor models, and stochastic basis risk.
- Capacity constraints across GPUs, data centres, grid, power contracts, compliance pools, and certified regions.
- Market-clearing equations, rationing, scarcity rents, and welfare losses.
- Portfolio allocation, hedging, token budget-at-risk, CVaR, stress testing, and robust optimization.
- Policy constraints and legal admissibility constraints.
- Explicit connection between equations and simulator state variables.
- Published or official references for mathematical economics, asset pricing, commodity/electricity markets, tail-risk optimization, data-centre energy accounting, and benchmark governance.
- Interactive illustration linking solved-task yield, policy routing, capacity stress, electricity shocks, scarcity rents, expected budget, tail budget, and hedging.

Verification question:

- Can a mathematical economist reproduce the model logic and identify which assumptions drive each result?

## Milestone 5: Agent-Based Analysis Tool

Status: revised for review with an ODD-style ABM architecture chapter covering purpose, horizon, agent classes, state variables, quarterly scheduling, demand routing, electricity-price endogeneity, token market clearing, rationing, delayed investment, stochastic weather, calibration, validation, sensitivity analysis, scenario design, output interpretation, limitations, exercises, worked mathematical examples, and an interactive ABM mechanism laboratory.

Purpose:

- Recast the digital twin as a supporting analysis tool for the theory.
- Explain why an ABM is useful for token economics, while making clear that the site is broader than the ABM.

Required content:

- Agents: households, firms, regulated firms, public agencies, model providers, data centres, grid operators, investors, regulators, and token intermediaries.
- State variables, schedule, decision rules, market interactions, and policy routing.
- How the ABM can test mechanisms from the mathematical chapters.
- Mathematically explicit submodels for demand splitting, electricity-price stress, token clearing, rationing, investment delay, weather uncertainty, calibration, and scenario design.
- Worked examples immediately after important equations so students can see how the symbolic notation operates in simple numerical cases.
- Calibration principles and data limitations.
- Sensitivity analysis, Monte Carlo, scenario design, validation, and falsification.
- Comparison with representative-agent models, equilibrium models, stochastic control, econometrics, and network models.
- Guidelines for using simulation output: mechanism exploration, not point forecasting.

Verification question:

- Does the ABM documentation make the tool credible without overclaiming empirical precision?

## Milestone 6: Policy, Geopolitics, and Institutional Design

Status: revised for review with a policy, geopolitics, and institutional-design chapter covering compute sovereignty, legal admissibility, geopolitical dependency, welfare criteria, distributional effects, public procurement, energy and climate policy, market power, benchmark governance, scenario design, ABM links, exercises, references, and an interactive policy tradeoff laboratory.

Purpose:

- Analyze token economics as a macroeconomic, geopolitical, and institutional problem.

Required content:

- Compute sovereignty, allied compute access, foreign dependency, export controls, data residency, public-sector priority, and certification regimes.
- Welfare tradeoffs between cost, resilience, privacy, innovation, competition, emissions, and state capacity.
- Distributional effects across households, SMEs, regulated firms, public agencies, and model providers.
- Public procurement of token exposure, reserve capacity, and sovereign token-service indices.
- Regulatory design for token benchmarks, transparency, market power, consumer protection, and systemic risk.
- Interaction with grid investment, energy policy, climate adaptation, and industrial strategy.
- Mathematical policy objects, dependency ratios, admissibility constraints, public procurement budget equations, policy welfare objectives, distribution-weighted welfare, and paired-seed scenario experiments.
- Interactive illustration showing tradeoffs among local capacity, allied access, compliance strictness, public priority, subsidies, weather stress, scarcity, dependency, fiscal cost, distributional risk, and welfare.

Verification question:

- Are the policy implications balanced, transparent, and analytically tied to the mathematical and simulation framework?

## Milestone 7: Learning Methods for Token Economics and Finance

Status: revised for review with a textbook-style research roadmap covering neural and probabilistic surrogates, Bayesian calibration, learned token-quality indices, sectoral demand estimation, Bayesian optimization, constrained reinforcement learning, multi-agent learning, inverse reinforcement learning, model-risk diagnostics, references, and an interactive learning-methods laboratory.

Purpose:

- Develop a research roadmap for using modern learning methods without sacrificing interpretability or scientific discipline.

Required content:

- Neural surrogate models for fast scenario exploration.
- Learned token-quality indices from benchmarks, user outcomes, latency, reliability, and compliance data.
- Demand estimation by sector and use case.
- Bayesian calibration and uncertainty quantification.
- Reinforcement learning for policy and procurement under constraints.
- Multi-agent reinforcement learning for providers, investors, regulators, and users.
- Inverse reinforcement learning or structural estimation of policy preferences.
- Model-risk diagnostics, out-of-sample tests, monotonicity checks, causal validation, and comparison with simpler baselines.
- Explicit mathematical declaration of learned components, surrogate response surfaces, Bayesian calibration posteriors, quality-yield estimators, demand functions, acquisition functions, constrained RL objectives, multi-agent transition kernels, inverse-RL preference recovery, and model-risk scores.
- Clear separation between structural economic primitives and learned statistical components. Learning methods may estimate, emulate, or explore; they must not silently redefine token classes, admissibility, welfare, or risk objectives.
- Published or official references for deep learning, Gaussian processes, Bayesian computer-model calibration, reinforcement learning, inverse reinforcement learning, model interpretation, sensitivity analysis, and AI-risk governance.
- Interactive illustration showing how simulator design runs, dimensionality, noise, surrogate flexibility, exploration, audit strength, and policy conservatism affect surrogate error, uncertainty width, model risk, constraint violation, speedup, and policy usefulness.

Verification question:

- Is the roadmap ambitious but scientifically auditable, with clear safeguards against opaque modelling?

## Milestone 8: Data Architecture, Calibration, and Validation

Status: revised for review with a textbook-style empirical-methods chapter covering observable versus latent quantities, source maps, measurement equations, calibration moments, moment matching, Bayesian calibration, identification diagnostics, validation scores, probabilistic forecast scoring, provenance, governance, references, and an interactive calibration-readiness laboratory.

Purpose:

- Define how token-economics models should be connected to empirical evidence without pretending that all economically important variables are directly observable.
- Make calibration, validation, provenance, and reproducibility first-class scientific objects.

Required content:

- Distinction between observed variables, estimated variables, latent variables, and scenario assumptions.
- Data source map for provider telemetry, token prices, benchmark outcomes, electricity markets, weather, adoption, capacity, macroeconomic indicators, and legal/policy rules.
- Explicit measurement equations linking noisy empirical proxies to latent model variables.
- Calibration moments for token demand, token prices, output-token uncertainty, energy pass-through, capacity utilization, shortage frequency, policy routing, and quality-adjusted yields.
- Moment-matching calibration and Bayesian calibration with model-discrepancy terms.
- Identification diagnostics showing whether available moments can distinguish competing parameter values.
- Validation protocol using held-out moments, distributional checks, stress scenarios, sensitivity analysis, and qualitative mechanism checks.
- Probabilistic forecast scoring for stochastic model outputs such as electricity prices, token expenditure, shortage rates, and budget-at-risk.
- Provenance and reproducibility rules using machine-actionable metadata, source records, licenses, versions, transformation pipelines, and quality flags.
- Governance labels for empirical outputs: exploratory, internally validated, externally audited, and publication-ready.
- Published or official references for FAIR data principles, W3C provenance, generalized method of moments, Bayesian computer-model calibration, proper scoring rules, ABM validation, sensitivity analysis, causal inference, EU statistics, electricity-market data, and energy reports.
- Interactive illustration showing how telemetry coverage, source diversity, measurement noise, benchmark cadence, holdout validation, provenance completeness, prior discipline, and market transparency affect data quality, identification strength, posterior uncertainty, validation credibility, and calibration readiness.

Verification question:

- Is the empirical workflow reproducible, scientifically cautious, and honest about measurement limits?

## Milestone 9: Portfolio Allocation, Hedging, and Token Budget Risk

Status: revised for review with a mathematical-finance chapter covering exposure vectors, feasible token portfolios, factor risk, hedge ratios, basis risk, token budget-at-risk, CVaR, derivative claims, margin, liquidity, robust procurement, references, exercises, and an interactive token-hedging laboratory.

Purpose:

- Show how firms, public agencies, and token intermediaries can measure token exposure, allocate demand across model-token classes, hedge future procurement costs, and stress test tail budgets.
- Consolidate the finance logic introduced across earlier modules into one coherent risk-management chapter.

Required content:

- Definition of a token procurement portfolio containing spot use, forward hedges, options, reserved capacity, routing choices, and liquidity buffers.
- Exposure-vector construction using quality-adjusted effective token prices, not raw token counts.
- Feasible routing sets that encode quality, latency, legal admissibility, and compliance requirements.
- Factor model for effective token-price changes, including capacity, demand, electricity, compliance, and provider shocks.
- Minimum-variance hedge ratio and basis-risk decomposition.
- Token budget-at-risk and conditional token budget-at-risk/CVaR as procurement risk metrics.
- Payoff equations for token forwards and option-like capacity claims.
- Margin, collateral, and liquidity constraints.
- Robust procurement formulation over weather, outage, demand, electricity, and policy stress scenarios.
- Published references for portfolio selection, dynamic asset pricing, derivatives, commodity/electricity hedging, benchmark governance, and CVaR optimization.
- Interactive illustration showing how hedge share, hedge correlation, volatility, tail shocks, margin, and liquidity buffers affect tail cost, basis risk, and hedge efficiency.

Verification question:

- Can a mathematical finance student formulate, hedge, and diagnose a token procurement exposure from first principles?

## Milestone 10: Theorems, Proofs, and Research Frontiers

Status: added for review with a formal proof layer covering assumptions, existence, capacity monotonicity, KKT scarcity rents, minimum-variance hedging, CVaR convexity, simulator selection, local identification, counterexamples, and research-frontier questions.

Purpose:

- Convert the mathematical model from a collection of definitions and motivated equations into a structure with explicit assumptions and provable claims.
- Teach readers which results are guaranteed by the model, which require stronger conditions, and which remain open research questions.
- Make the project credible for mathematical finance and economics readers by separating theorem, proof, conjecture, simulation, calibration, and empirical evidence.

Required content:

- A minimal assumption system for finite-dimensional token allocation, capacity constraints, admissibility, continuity, compactness, convexity, and measurement maps.
- Existence theorem for welfare-selected allocations under compactness and continuity.
- Capacity-monotonicity theorem for the welfare value function.
- Scarcity-rent theorem using KKT multipliers and subgradient interpretation.
- Minimum-variance hedge-ratio theorem with correct exposure and hedge units.
- CVaR convexity theorem using the Rockafellar-Uryasev representation.
- Simulator-selection proposition explaining when the model correspondence becomes a single-valued computational map.
- Local-identification proposition for moment-based calibration.
- Counterexamples showing where uniqueness, competitive scarcity rents, no-arbitrage derivative pricing, and stable calibration fail.
- Research-frontier section on standard inference tokens, service-claim derivatives, weather-grid-token coupling, strategic provider equilibrium, differentiable ABM calibration, and benchmark governance.
- Published or official references for mathematical economics, optimization, asset pricing, electricity finance, calibration, ABM methodology, benchmark governance, and AI-energy reports. Preprints may be cited only as explicitly labelled frontier signals.

Verification question:

- Does each theorem state its assumptions, conclusion, proof, and failure cases clearly enough for a mathematical finance student to reproduce the argument?

## Milestone 11: Citation and Source Audit

Status: planned.

Purpose:

- Verify every citation across the site against published proceedings, journal pages, DOI resolvers, official reports, standards bodies, publisher pages, or stable institutional sources.
- Replace arXiv references with published versions whenever a published version exists, and clearly label remaining arXiv items as preprints or technical reports.

Required content:

- Central citation inventory with source type, URL, DOI/ISBN/report identifier, publication status, last-checked date, and reason for any preprint citation.
- Automated or semi-automated link-checking workflow.
- Review of older report and ABM pages so they do not lag behind the learning modules.

Verification question:

- Can a reviewer click every public citation and verify that it resolves to the intended source?

## Milestone 12: Token Index Methodology and Benchmark Governance

Status: planned.

Purpose:

- Develop a rigorous methodology for task-equivalent token indices and standard inference-token units.

Required content:

- Eligibility rules, provider baskets, model-class buckets, task baskets, quality adjustments, hidden-token treatment, latency rules, regional and legal admissibility rules, rebalancing, benchmark governance, manipulation risk, and settlement procedures.
- Axioms for index consistency, monotonicity, substitutability, auditability, and resistance to benchmark gaming.
- Examples comparing raw-token, USD-token, solved-task, and risk-adjusted indices.

Verification question:

- Is the proposed index methodology precise enough to support hedging and settlement without pretending that all model tokens are equivalent?

## Milestone 13: Empirical Calibration Pipeline and Research Data Package

Status: planned.

Purpose:

- Connect the theoretical model and ABM to reproducible empirical workflows.

Required content:

- Data schema for provider prices, benchmark outcomes, output-token distributions, electricity prices, weather, grid capacity, adoption, policy rules, and scenario assumptions.
- Calibration notebooks or scripts, validation diagnostics, uncertainty bands, provenance metadata, and data-quality labels.
- Separation between real observations, synthetic examples, and scenario parameters.

Verification question:

- Can a researcher reproduce the calibration path from raw data or documented scenario assumptions to model parameters and validation diagnostics?

## Research Agent Instructions

Any future agent or contributor working on this project should follow these rules:

1. Prefer mathematical and scientific correctness over speed.
2. Never hide uncertainty behind a polished interface.
3. For every important modelling problem, consider multiple approaches before selecting one.
4. Explain why the chosen approach is appropriate and what it fails to capture.
5. Use LaTeX for mathematical definitions and declare all variables.
6. Distinguish definitions, assumptions, propositions, empirical claims, simulations, and conjectures.
7. Do not claim that tokens are equivalent unless an explicit task-equivalence or quality-adjustment index has been defined.
8. Treat energy, weather, climate, regional infrastructure, and policy constraints as sources of financial risk, not only background context.
9. Write in an engaging way that invites the reader into the problem, while keeping the tone professional and technically precise.
10. Keep the simulator connected to the theory, but do not let the simulator define the scope of the research.
11. Never write public article text as a direct response to an individual reviewer. The reader should encounter a general, polished scholarly resource.
12. Add concrete mathematical examples and interactive illustrations whenever they clarify a difficult abstraction.
13. Add theorem/proof boxes for model claims that can be proven, and counterexamples for claims that fail without stronger assumptions.
14. Before publishing a citation, verify that the link resolves to the intended published, official, or explicitly labelled preprint source.
