import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Landmark,
  Layers,
  LineChart,
  Network,
  PlayCircle,
  Route,
  Sigma,
  type LucideIcon,
  Zap,
} from "lucide-react";
import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { InlineMath, MathEquation } from "./MathEquation";
import { SliderControl } from "./SliderControl";

type LearningModuleId =
  | "learn-token-foundations"
  | "learn-economic-asset"
  | "learn-token-production-energy"
  | "learn-abm-architecture"
  | "learn-equation-map"
  | "learn-policy-lab"
  | "learn-advanced-learning"
  | "learn-data-calibration"
  | "learn-portfolio-hedging"
  | "learn-theorem-proof-layer";

interface LearningModule {
  id: LearningModuleId;
  milestone: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  deliverable: string;
  verification: string;
}

const learningModules: LearningModule[] = [
  {
    id: "learn-token-foundations",
    milestone: "Milestone 1",
    icon: BookOpenCheck,
    title: "What is an AI token?",
    subtitle:
      "A token is a technical unit, a billing unit, and a financial exposure. The module separates those meanings before using them in the model.",
    deliverable:
      "A self-contained article on raw tokens, service tokens, effective task units, and the economic reason that model tokens cannot be treated as interchangeable.",
    verification:
      "Verify that the reader can explain why two token prices cannot be compared without a task and quality adjustment.",
  },
  {
    id: "learn-economic-asset",
    milestone: "Milestone 2",
    icon: LineChart,
    title: "How can tokens become tradable assets?",
    subtitle:
      "The module asks what has to be standardized before AI-compute service can be traded, hedged, or indexed.",
    deliverable:
      "A market-design article that moves from posted provider prices to tradable service claims and explains where basis risk enters.",
    verification:
      "Verify that the contract logic is precise and clearly separated from cryptocurrency language.",
  },
  {
    id: "learn-token-production-energy",
    milestone: "Milestone 3",
    icon: Zap,
    title: "How do tokens become energy and climate exposure?",
    subtitle:
      "Token demand eventually becomes physical load. The module follows that path from inference service to grid stress.",
    deliverable:
      "A chapter on inference energy, facility overhead, stochastic weather, electricity prices, and the financial risk created by local infrastructure limits.",
    verification:
      "Verify that the reader can trace a service request from model use to electricity demand and token-price exposure.",
  },
  {
    id: "learn-equation-map",
    milestone: "Milestone 4",
    icon: Sigma,
    title: "Mathematical Model of Token Economics",
    subtitle:
      "A formal map from task demand to service tokens, capacity constraints, prices, welfare, and risk.",
    deliverable:
      "A mathematical chapter that states the units, assumptions, variables, equations, and simulator links needed to reproduce the model.",
    verification:
      "Verify that a mathematical economist can reproduce the model logic from the documentation.",
  },
  {
    id: "learn-abm-architecture",
    milestone: "Milestone 5",
    icon: Network,
    title: "Agent-Based Analysis Tool for Token Economics",
    subtitle:
      "The ABM shows how heterogeneous users, infrastructure constraints, policy rules, and delayed investment interact over time.",
    deliverable:
      "A design chapter that explains the agents, state variables, timing, stochastic shocks, validation checks, and interpretation of results.",
    verification:
      "Verify that the ABM architecture is credible as a research instrument.",
  },
  {
    id: "learn-policy-lab",
    milestone: "Milestone 6",
    icon: Landmark,
    title: "How do policy and geopolitics shape token finance?",
    subtitle:
      "Compute policy changes who can access capacity, which workloads must stay local, and who bears the cost of scarcity.",
    deliverable:
      "A policy-analysis chapter that explains experiment design, welfare criteria, and interpretation of scenario results.",
    verification:
      "Verify that the policy implications are balanced, transparent, and useful for scenario design.",
  },
  {
    id: "learn-advanced-learning",
    milestone: "Milestone 7",
    icon: BrainCircuit,
    title: "How can learning methods improve token finance research?",
    subtitle:
      "Learning methods can help estimate hidden quantities, explore scenarios, and test policies while leaving the economic structure visible.",
    deliverable:
      "A research roadmap for using modern learning methods without losing interpretability, auditability, or economic discipline.",
    verification:
      "Verify that the roadmap is ambitious but scientifically disciplined.",
  },
  {
    id: "learn-data-calibration",
    milestone: "Milestone 8",
    icon: Database,
    title: "How should token-economics models be measured and calibrated?",
    subtitle:
      "The model contains observable variables and latent quantities. This module explains how empirical evidence can discipline both.",
    deliverable:
      "A calibration chapter on measurement equations, empirical moments, validation scores, provenance, and reproducible workflows.",
    verification:
      "Verify that the calibration workflow is reproducible, scientifically cautious, and honest about measurement limits.",
  },
  {
    id: "learn-portfolio-hedging",
    milestone: "Milestone 9",
    icon: Layers,
    title: "How should token exposure be allocated, hedged, and stress tested?",
    subtitle:
      "The module treats future compute demand as a portfolio problem with basis risk and tail-budget exposure.",
    deliverable:
      "A mathematical-finance chapter on exposure measurement, hedge construction, tail-budget control, and basis-risk diagnosis.",
    verification:
      "Verify that a mathematical finance student can formulate and diagnose a token hedging problem from first principles.",
  },
  {
    id: "learn-theorem-proof-layer",
    milestone: "Milestone 10",
    icon: CheckCircle2,
    title: "Theorems, Proofs, and Research Frontiers",
    subtitle:
      "The module states what can be proved under explicit assumptions and where the research frontier begins.",
    deliverable:
      "A research-level chapter with assumptions, propositions, proofs, counterexamples, and open problems in token finance.",
    verification:
      "Verify that every theorem has assumptions, a clear conclusion, a readable proof, and an honest discussion of where the result can fail.",
  },
];

const moduleIds = learningModules.map((module) => module.id);

const tokenArticleToc = [
  ["token-learning-goals", "Learning goals"],
  ["token-three-definitions", "Three definitions"],
  ["token-non-equivalence", "A token is not a token"],
  ["token-worked-examples", "Worked examples"],
  ["token-technical-pipeline", "Technical pipeline"],
  ["token-service-accounting", "Service accounting"],
  ["token-usd-price", "USD token price"],
  ["token-solved-task-cost", "Cost per solved task"],
  ["token-interactive-equivalence", "Interactive illustration"],
  ["token-economic-demand", "Economic demand"],
  ["token-production-function", "Production function"],
  ["token-scarcity", "Why scarcity appears"],
  ["token-spreads", "Token spreads"],
  ["token-index", "Token index"],
  ["token-allocation", "Optimal allocation"],
  ["token-risk-management", "Risk management"],
  ["token-measurement", "Measurement traps"],
  ["token-abm-link", "Link to the ABM"],
  ["token-frontier", "Research extensions"],
  ["token-exercises", "Checks and exercises"],
] as const;

const tokenArticleSectionIds: readonly string[] = tokenArticleToc.map(
  ([id]) => id,
);

const marketArticleToc = [
  ["market-learning-goals", "Learning goals"],
  ["market-not-crypto", "Not a cryptocurrency"],
  ["market-contract-spec", "Contract specification"],
  ["market-service-claim", "Service claim"],
  ["market-spot", "Spot markets"],
  ["market-expected-usage", "Expected usage"],
  ["market-underlying-dynamics", "Underlying dynamics"],
  ["market-calibration", "Calibration"],
  ["market-interactive-dynamics", "Interactive dynamics"],
  ["market-reserved", "Reserved capacity"],
  ["market-forwards", "Forwards and futures"],
  ["market-options", "Options and priority rights"],
  ["market-spreads", "Spread contracts"],
  ["market-index", "Token indices"],
  ["market-clearing-learning", "Clearing and scarcity"],
  ["market-collateral", "Margin and collateral"],
  ["market-quality", "Quality and settlement"],
  ["market-worked-examples", "Worked examples"],
  ["market-interactive-hedge", "Interactive hedge"],
  ["market-abm-link", "Link to the ABM"],
  ["market-governance", "Governance"],
  ["market-exercises", "Checks and exercises"],
] as const;

const marketArticleSectionIds: readonly string[] = marketArticleToc.map(
  ([id]) => id,
);

const productionArticleToc = [
  ["energy-learning-goals", "Learning goals"],
  ["energy-service-pipeline", "Service pipeline"],
  ["energy-inference-compute", "Inference compute"],
  ["energy-training-inference", "Training vs inference"],
  ["energy-facility-energy", "Facility energy"],
  ["energy-grid-capacity", "Grid capacity"],
  ["energy-weather-process", "Weather process"],
  ["energy-electricity-price", "Electricity price"],
  ["energy-pass-through", "Token-price pass-through"],
  ["energy-climate-risk", "Climate risk"],
  ["energy-stress-testing", "Stress testing"],
  ["energy-worked-examples", "Worked examples"],
  ["energy-interactive-lab", "Interactive stress lab"],
  ["energy-abm-link", "Link to the ABM"],
  ["energy-calibration", "Calibration"],
  ["energy-exercises", "Checks and exercises"],
] as const;

const productionArticleSectionIds: readonly string[] = productionArticleToc.map(
  ([id]) => id,
);

const equationArticleToc = [
  ["equation-learning-goals", "Roadmap"],
  ["equation-modeling-principle", "Modeling principle"],
  ["equation-phi-operator", "Model operator"],
  ["equation-primitives", "Primitives"],
  ["equation-token-vector", "Token vector"],
  ["equation-task-demand", "Task demand"],
  ["equation-quality-yield", "Quality yield"],
  ["equation-effective-prices", "Effective prices"],
  ["equation-feasibility", "Feasibility"],
  ["equation-clearing", "Clearing"],
  ["equation-welfare", "Welfare"],
  ["equation-stochastic-state", "State dynamics"],
  ["equation-risk-neutral", "Pricing kernel"],
  ["equation-factor-risk", "Factor risk"],
  ["equation-portfolio", "Portfolio problem"],
  ["equation-policy", "Policy constraints"],
  ["equation-calibration", "Calibration"],
  ["equation-simulator-map", "Simulator map"],
  ["equation-worked-example", "Worked example"],
  ["equation-interactive-lab", "Interactive model"],
  ["equation-limitations", "Assumptions"],
  ["equation-exercises", "Checks and exercises"],
] as const;

const equationArticleSectionIds: readonly string[] = equationArticleToc.map(
  ([id]) => id,
);

const abmArticleToc = [
  ["abm-learning-goals", "Roadmap"],
  ["abm-why", "Why ABM"],
  ["abm-odd", "ODD protocol"],
  ["abm-scope", "Scope and horizon"],
  ["abm-agents", "Agents"],
  ["abm-state", "State variables"],
  ["abm-schedule", "Schedule"],
  ["abm-demand-routing", "Demand and routing"],
  ["abm-markets", "Markets"],
  ["abm-allocation", "Allocation"],
  ["abm-investment", "Investment"],
  ["abm-stochasticity", "Stochasticity"],
  ["abm-calibration", "Calibration"],
  ["abm-validation", "Validation"],
  ["abm-scenarios", "Scenario design"],
  ["abm-comparisons", "Model comparison"],
  ["abm-outputs", "Using outputs"],
  ["abm-interactive-lab", "Interactive ABM"],
  ["abm-limitations", "Limitations"],
  ["abm-exercises", "Checks and exercises"],
] as const;

const abmArticleSectionIds: readonly string[] = abmArticleToc.map(([id]) => id);

const policyArticleToc = [
  ["policy-learning-goals", "Roadmap"],
  ["policy-object", "Policy problem"],
  ["policy-sovereignty", "Compute sovereignty"],
  ["policy-admissibility", "Legal admissibility"],
  ["policy-geopolitics", "Geopolitical exposure"],
  ["policy-welfare", "Welfare criterion"],
  ["policy-distribution", "Distribution"],
  ["policy-procurement", "Public procurement"],
  ["policy-energy", "Energy and climate"],
  ["policy-market-power", "Market power"],
  ["policy-benchmarks", "Benchmarks"],
  ["policy-scenarios", "Scenario design"],
  ["policy-interactive-lab", "Interactive lab"],
  ["policy-abm-link", "ABM link"],
  ["policy-limitations", "Limitations"],
  ["policy-exercises", "Checks and exercises"],
] as const;

const policyArticleSectionIds: readonly string[] = policyArticleToc.map(
  ([id]) => id,
);

const advancedArticleToc = [
  ["advanced-learning-goals", "Roadmap"],
  ["advanced-why-learning", "Why learning methods"],
  ["advanced-surrogates", "Neural surrogates"],
  ["advanced-calibration", "Bayesian calibration"],
  ["advanced-quality-index", "Quality indices"],
  ["advanced-demand-estimation", "Demand estimation"],
  ["advanced-bayes-opt", "Bayesian optimization"],
  ["advanced-rl-procurement", "RL procurement"],
  ["advanced-marl", "Multi-agent RL"],
  ["advanced-inverse-rl", "Inverse RL"],
  ["advanced-risk-controls", "Model-risk controls"],
  ["advanced-interactive-lab", "Interactive lab"],
  ["advanced-abm-link", "ABM link"],
  ["advanced-exercises", "Checks and exercises"],
] as const;

const advancedArticleSectionIds: readonly string[] = advancedArticleToc.map(
  ([id]) => id,
);

const dataArticleToc = [
  ["data-learning-goals", "Roadmap"],
  ["data-why", "Why data architecture"],
  ["data-observable-latent", "Observable vs latent"],
  ["data-sources", "Source map"],
  ["data-measurement-model", "Measurement model"],
  ["data-moments", "Calibration moments"],
  ["data-bayesian-calibration", "Bayesian calibration"],
  ["data-identification", "Identification"],
  ["data-validation", "Validation"],
  ["data-scoring", "Forecast scoring"],
  ["data-provenance", "Provenance"],
  ["data-governance", "Governance"],
  ["data-interactive-lab", "Interactive lab"],
  ["data-abm-link", "ABM link"],
  ["data-exercises", "Checks and exercises"],
] as const;

const dataArticleSectionIds: readonly string[] = dataArticleToc.map(
  ([id]) => id,
);

const portfolioArticleToc = [
  ["portfolio-learning-goals", "Roadmap"],
  ["portfolio-object", "Risk-management object"],
  ["portfolio-exposure-vector", "Exposure vector"],
  ["portfolio-token-portfolio", "Token portfolio"],
  ["portfolio-factors", "Price factors"],
  ["portfolio-hedge-ratio", "Hedge ratio"],
  ["portfolio-basis-risk", "Basis risk"],
  ["portfolio-budget-risk", "Budget-at-risk"],
  ["portfolio-cvar", "CVaR control"],
  ["portfolio-derivatives", "Derivative claims"],
  ["portfolio-margin", "Margin and liquidity"],
  ["portfolio-robust", "Robust procurement"],
  ["portfolio-interactive-lab", "Interactive lab"],
  ["portfolio-abm-link", "ABM link"],
  ["portfolio-exercises", "Checks and exercises"],
] as const;

const portfolioArticleSectionIds: readonly string[] = portfolioArticleToc.map(
  ([id]) => id,
);

const theoremArticleToc = [
  ["proof-roadmap", "Roadmap"],
  ["proof-assumptions", "Assumptions"],
  ["proof-existence", "Existence"],
  ["proof-monotonicity", "Monotonicity"],
  ["proof-shadow-rents", "Shadow rents"],
  ["proof-hedge-ratio", "Hedge ratio"],
  ["proof-cvar", "CVaR convexity"],
  ["proof-simulator-selection", "Simulator selection"],
  ["proof-calibration", "Identification"],
  ["proof-counterexamples", "Failure modes"],
  ["proof-frontier", "Research frontiers"],
  ["proof-exercises", "Exercises"],
] as const;

const theoremArticleSectionIds: readonly string[] = theoremArticleToc.map(
  ([id]) => id,
);

const tokenReferences = [
  {
    label:
      "Vaswani et al. (2017), Attention Is All You Need. Advances in Neural Information Processing Systems 30 (NIPS 2017).",
    href: "https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
  },
  {
    label:
      "Sennrich, Haddow, and Birch (2016), Neural Machine Translation of Rare Words with Subword Units. ACL 54(1), 1715-1725; DOI: 10.18653/v1/P16-1162.",
    href: "https://doi.org/10.18653/v1/P16-1162",
  },
  {
    label:
      "Kudo and Richardson (2018), SentencePiece. EMNLP System Demonstrations, 66-71; DOI: 10.18653/v1/D18-2012.",
    href: "https://doi.org/10.18653/v1/D18-2012",
  },
  {
    label:
      "Kaplan et al. (2020), Scaling Laws for Neural Language Models. OpenAI technical report / arXiv:2001.08361.",
    href: "https://arxiv.org/abs/2001.08361",
  },
  {
    label:
      "Hoffmann et al. (2022), Training Compute-Optimal Large Language Models. DeepMind technical report / arXiv:2203.15556.",
    href: "https://arxiv.org/abs/2203.15556",
  },
  {
    label:
      "Agrawal, Gans, and Goldfarb, eds. (2019), The Economics of Artificial Intelligence: An Agenda. NBER / University of Chicago Press.",
    href: "https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda",
  },
  {
    label:
      "Shapiro and Varian (1999), Information Rules: A Strategic Guide to the Network Economy. Harvard Business School Press; ISBN: 9780875848631.",
    href: "https://books.google.com/books?id=aE_J4Iv_PVEC",
  },
  {
    label: "IEA (2025), Energy and AI. International Energy Agency report.",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
  {
    label:
      "Markowitz (1952), Portfolio Selection. Journal of Finance 7(1), 77-91; DOI: 10.2307/2975974.",
    href: "https://doi.org/10.2307/2975974",
  },
  {
    label:
      "Black and Scholes (1973), The Pricing of Options and Corporate Liabilities. Journal of Political Economy 81(3), 637-654; DOI: 10.1086/260062.",
    href: "https://doi.org/10.1086/260062",
  },
  {
    label:
      "Merton (1973), Theory of Rational Option Pricing. Bell Journal of Economics and Management Science 4(1), 141-183; DOI: 10.2307/3003143.",
    href: "https://doi.org/10.2307/3003143",
  },
  {
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets. Journal of Finance 57(3), 1347-1382; DOI: 10.1111/1540-6261.00463.",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    label:
      "Schwartz (1997), The Stochastic Behavior of Commodity Prices. Journal of Finance 52(3), 923-973; DOI: 10.1111/j.1540-6261.1997.tb02721.x.",
    href: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
  },
  {
    label:
      "Duffie (2001), Dynamic Asset Pricing Theory, 3rd ed. Princeton University Press; ISBN: 9780691090221.",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  },
  {
    label:
      "Rockafellar and Uryasev (2000), Optimization of Conditional Value-at-Risk. Journal of Risk 2(3), 21-41; DOI: 10.21314/JOR.2000.038.",
    href: "https://doi.org/10.21314/JOR.2000.038",
  },
];

const marketReferences = [
  {
    label:
      "Duffie (2001), Dynamic Asset Pricing Theory, 3rd ed. Princeton University Press; ISBN: 9780691090221.",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  },
  {
    label:
      "Hull (2022), Options, Futures, and Other Derivatives, 11th ed. Pearson.",
    href: "https://www.pearson.com/en-us/subject-catalog/p/options-futures-and-other-derivatives/P200000006175",
  },
  {
    label:
      "Black and Scholes (1973), The Pricing of Options and Corporate Liabilities. Journal of Political Economy 81(3), 637-654; DOI: 10.1086/260062.",
    href: "https://doi.org/10.1086/260062",
  },
  {
    label:
      "Merton (1973), Theory of Rational Option Pricing. Bell Journal of Economics and Management Science 4(1), 141-183; DOI: 10.2307/3003143.",
    href: "https://doi.org/10.2307/3003143",
  },
  {
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets. Journal of Finance 57(3), 1347-1382; DOI: 10.1111/1540-6261.00463.",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    label:
      "Schwartz (1997), The Stochastic Behavior of Commodity Prices. Journal of Finance 52(3), 923-973; DOI: 10.1111/j.1540-6261.1997.tb02721.x.",
    href: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
  },
  {
    label:
      "Geman (2005), Commodities and Commodity Derivatives. Wiley; ISBN: 9780470012185.",
    href: "https://www.wiley.com/en-us/Commodities+and+Commodity+Derivatives%3A+Modeling+and+Pricing+for+Agriculturals%2C+Metals+and+Energy-p-9780470012185",
  },
  {
    label:
      "O'Hara (1995), Market Microstructure Theory. Blackwell; ISBN: 0631207619.",
    href: "https://search.worldcat.org/isbn/0631207619",
  },
  {
    label:
      "Shapiro and Varian (1999), Information Rules: A Strategic Guide to the Network Economy. Harvard Business School Press; ISBN: 9780875848631.",
    href: "https://books.google.com/books?id=aE_J4Iv_PVEC",
  },
  {
    label:
      "IOSCO (2013), Principles for Financial Benchmarks. Final report FR07/13.",
    href: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf",
  },
];

const productionReferences = [
  {
    label:
      "Patterson et al. (2021), Carbon Emissions and Large Neural Network Training. Technical report / arXiv:2104.10350.",
    href: "https://arxiv.org/abs/2104.10350",
  },
  {
    label:
      "Henderson et al. (2020), Towards the Systematic Reporting of the Energy and Carbon Footprints of Machine Learning. Journal of Machine Learning Research 21(248), 1-43.",
    href: "https://jmlr.org/papers/v21/20-312.html",
  },
  {
    label:
      "Strubell, Ganesh, and McCallum (2019), Energy and Policy Considerations for Deep Learning in NLP. ACL 57, 3645-3650; DOI: 10.18653/v1/P19-1355.",
    href: "https://doi.org/10.18653/v1/P19-1355",
  },
  {
    label:
      "Patterson et al. (2022), The Carbon Footprint of Machine Learning Training Will Plateau, Then Shrink. Computer 55(7), 18-28; DOI: 10.1109/MC.2022.3148714.",
    href: "https://doi.org/10.1109/MC.2022.3148714",
  },
  {
    label:
      "Masanet et al. (2020), Recalibrating Global Data Center Energy-Use Estimates. Science 367(6481), 984-986; DOI: 10.1126/science.aba3758.",
    href: "https://doi.org/10.1126/science.aba3758",
  },
  {
    label: "IEA (2025), Energy and AI. International Energy Agency report.",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
  {
    label:
      "ISO/IEC 30134-2:2026, Information technology - Data centres key performance indicators - Part 2: Power usage effectiveness (PUE).",
    href: "https://www.iso.org/standard/30134-2",
  },
  {
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets. Journal of Finance 57(3), 1347-1382; DOI: 10.1111/1540-6261.00463.",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    label:
      "Schwartz (1997), The Stochastic Behavior of Commodity Prices. Journal of Finance 52(3), 923-973; DOI: 10.1111/j.1540-6261.1997.tb02721.x.",
    href: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
  },
  {
    label:
      "Geman (2005), Commodities and Commodity Derivatives. Wiley; ISBN: 9780470012185.",
    href: "https://www.wiley.com/en-us/Commodities+and+Commodity+Derivatives%3A+Modeling+and+Pricing+for+Agriculturals%2C+Metals+and+Energy-p-9780470012185",
  },
  {
    label:
      "Eydeland and Wolyniec (2003), Energy and Power Risk Management. Wiley; ISBN: 9780471104001.",
    href: "https://www.wiley.com/en-us/Energy+and+Power+Risk+Management%3A+New+Developments+in+Modeling%2C+Pricing%2C+and+Hedging-p-9780471104001",
  },
  {
    label:
      "Rockafellar and Uryasev (2000), Optimization of Conditional Value-at-Risk. Journal of Risk 2(3), 21-41; DOI: 10.21314/JOR.2000.038.",
    href: "https://doi.org/10.21314/JOR.2000.038",
  },
  {
    label:
      "Network for Greening the Financial System (2024), NGFS Climate Scenarios for Central Banks and Supervisors.",
    href: "https://www.ngfs.net/ngfs-scenarios-portal/",
  },
  {
    label:
      "Duffie (2001), Dynamic Asset Pricing Theory, 3rd ed. Princeton University Press; ISBN: 9780691090221.",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  },
];

const equationReferences = [
  {
    label:
      "Arrow and Debreu (1954), Existence of an Equilibrium for a Competitive Economy. Econometrica 22(3), 265-290; DOI: 10.2307/1907353.",
    href: "https://doi.org/10.2307/1907353",
  },
  {
    label:
      "Mas-Colell, Whinston, and Green (1995), Microeconomic Theory. Oxford University Press; ISBN: 9780195073409.",
    href: "https://global.oup.com/academic/product/microeconomic-theory-9780195073409",
  },
  {
    label:
      "Berry, Levinsohn, and Pakes (1995), Automobile Prices in Market Equilibrium. Econometrica 63(4), 841-890; DOI: 10.2307/2171802.",
    href: "https://doi.org/10.2307/2171802",
  },
  {
    label:
      "Lucas (1976), Econometric Policy Evaluation: A Critique. Carnegie-Rochester Conference Series on Public Policy 1, 19-46; DOI: 10.1016/S0167-2231(76)80003-6.",
    href: "https://doi.org/10.1016/S0167-2231(76)80003-6",
  },
  {
    label:
      "Kydland and Prescott (1982), Time to Build and Aggregate Fluctuations. Econometrica 50(6), 1345-1370; DOI: 10.2307/1913386.",
    href: "https://doi.org/10.2307/1913386",
  },
  {
    label:
      "Markowitz (1952), Portfolio Selection. Journal of Finance 7(1), 77-91; DOI: 10.2307/2975974.",
    href: "https://doi.org/10.2307/2975974",
  },
  {
    label:
      "Duffie (2001), Dynamic Asset Pricing Theory, 3rd ed. Princeton University Press; ISBN: 9780691090221.",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  },
  {
    label:
      "Rockafellar and Uryasev (2000), Optimization of Conditional Value-at-Risk. Journal of Risk 2(3), 21-41; DOI: 10.21314/JOR.2000.038.",
    href: "https://doi.org/10.21314/JOR.2000.038",
  },
  {
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets. Journal of Finance 57(3), 1347-1382; DOI: 10.1111/1540-6261.00463.",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    label:
      "Schwartz (1997), The Stochastic Behavior of Commodity Prices. Journal of Finance 52(3), 923-973; DOI: 10.1111/j.1540-6261.1997.tb02721.x.",
    href: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
  },
  {
    label:
      "Masanet et al. (2020), Recalibrating Global Data Center Energy-Use Estimates. Science 367(6481), 984-986; DOI: 10.1126/science.aba3758.",
    href: "https://doi.org/10.1126/science.aba3758",
  },
  {
    label: "IEA (2025), Energy and AI. International Energy Agency report.",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
  {
    label:
      "IOSCO (2013), Principles for Financial Benchmarks. Final report FR07/13.",
    href: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf",
  },
  {
    label:
      "ISO/IEC 30134-2:2026, Information technology - Data centres key performance indicators - Part 2: Power usage effectiveness (PUE).",
    href: "https://www.iso.org/standard/30134-2",
  },
];

const abmReferences = [
  {
    label:
      "Grimm et al. (2006), A standard protocol for describing individual-based and agent-based models. Ecological Modelling 198(1-2), 115-126; DOI: 10.1016/j.ecolmodel.2006.04.023.",
    href: "https://doi.org/10.1016/j.ecolmodel.2006.04.023",
  },
  {
    label:
      "Grimm et al. (2010), The ODD protocol: A review and first update. Ecological Modelling 221(23), 2760-2768; DOI: 10.1016/j.ecolmodel.2010.08.019.",
    href: "https://doi.org/10.1016/j.ecolmodel.2010.08.019",
  },
  {
    label:
      "Bonabeau (2002), Agent-based modeling: Methods and techniques for simulating human systems. Proceedings of the National Academy of Sciences 99(suppl_3), 7280-7287; DOI: 10.1073/pnas.082080899.",
    href: "https://doi.org/10.1073/pnas.082080899",
  },
  {
    label:
      "Tesfatsion (2006), Agent-Based Computational Economics: A Constructive Approach to Economic Theory. Handbook of Computational Economics, Volume 2, 831-880; DOI: 10.1016/S1574-0021(05)02016-2.",
    href: "https://doi.org/10.1016/S1574-0021(05)02016-2",
  },
  {
    label:
      "Fagiolo, Moneta, and Windrum (2007), A Critical Guide to Empirical Validation of Agent-Based Models in Economics. Computational Economics 30, 195-226; DOI: 10.1007/s10614-007-9104-4.",
    href: "https://doi.org/10.1007/s10614-007-9104-4",
  },
  {
    label:
      "Farmer and Foley (2009), The economy needs agent-based modelling. Nature 460, 685-686; DOI: 10.1038/460685a.",
    href: "https://doi.org/10.1038/460685a",
  },
  {
    label:
      "Miller and Page (2007), Complex Adaptive Systems: An Introduction to Computational Models of Social Life. Princeton University Press; ISBN: 9780691127026.",
    href: "https://press.princeton.edu/books/paperback/9780691127026/complex-adaptive-systems",
  },
  {
    label:
      "Epstein (2006), Generative Social Science: Studies in Agent-Based Computational Modeling. Princeton University Press; ISBN: 9780691125473.",
    href: "https://press.princeton.edu/books/paperback/9780691125473/generative-social-science",
  },
  {
    label:
      "Schelling (1971), Dynamic Models of Segregation. Journal of Mathematical Sociology 1(2), 143-186; DOI: 10.1080/0022250X.1971.9989794.",
    href: "https://doi.org/10.1080/0022250X.1971.9989794",
  },
  {
    label:
      "Saltelli et al. (2008), Global Sensitivity Analysis: The Primer. Wiley; ISBN: 9780470059975.",
    href: "https://www.wiley.com/en-us/Global+Sensitivity+Analysis%3A+The+Primer-p-9780470059975",
  },
  {
    label:
      "Lucas (1976), Econometric Policy Evaluation: A Critique. Carnegie-Rochester Conference Series on Public Policy 1, 19-46; DOI: 10.1016/S0167-2231(76)80003-6.",
    href: "https://doi.org/10.1016/S0167-2231(76)80003-6",
  },
];

const policyReferences = [
  {
    label:
      "Regulation (EU) 2024/1689, Artificial Intelligence Act. Official Journal of the European Union, ELI: http://data.europa.eu/eli/reg/2024/1689/oj.",
    href: "https://data.europa.eu/eli/reg/2024/1689/oj",
  },
  {
    label:
      "Regulation (EU) 2023/2854, Data Act. Official Journal of the European Union, ELI: http://data.europa.eu/eli/reg/2023/2854/oj.",
    href: "https://data.europa.eu/eli/reg/2023/2854/oj",
  },
  {
    label:
      "Farrell and Newman (2019), Weaponized Interdependence: How Global Economic Networks Shape State Coercion. International Security 44(1), 42-79; DOI: 10.1162/isec_a_00351.",
    href: "https://doi.org/10.1162/isec_a_00351",
  },
  {
    label:
      "Laffont and Tirole (1993), A Theory of Incentives in Procurement and Regulation. MIT Press; ISBN: 9780262121743.",
    href: "https://mitpress.mit.edu/9780262121743/a-theory-of-incentives-in-procurement-and-regulation/",
  },
  {
    label:
      "Weitzman (1974), Prices vs. Quantities. Review of Economic Studies 41(4), 477-491; DOI: 10.2307/2296698.",
    href: "https://doi.org/10.2307/2296698",
  },
  {
    label:
      "Ostrom (1990), Governing the Commons: The Evolution of Institutions for Collective Action. Cambridge University Press; ISBN: 9780521405997.",
    href: "https://www.cambridge.org/core/books/governing-the-commons/7AB7AE11BADA84409C34815CC288CD79",
  },
  {
    label:
      "NIST (2023), Artificial Intelligence Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology.",
    href: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    label: "IEA (2025), Energy and AI. International Energy Agency report.",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
  {
    label:
      "Network for Greening the Financial System (2024), NGFS Climate Scenarios for Central Banks and Supervisors.",
    href: "https://www.ngfs.net/ngfs-scenarios-portal/",
  },
  {
    label:
      "IOSCO (2013), Principles for Financial Benchmarks. Final report FR07/13.",
    href: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf",
  },
  {
    label:
      "Lucas (1976), Econometric Policy Evaluation: A Critique. Carnegie-Rochester Conference Series on Public Policy 1, 19-46; DOI: 10.1016/S0167-2231(76)80003-6.",
    href: "https://doi.org/10.1016/S0167-2231(76)80003-6",
  },
];

const advancedReferences = [
  {
    label:
      "Goodfellow, Bengio, and Courville (2016), Deep Learning. MIT Press; ISBN: 9780262035613.",
    href: "https://mitpress.mit.edu/9780262035613/deep-learning/",
  },
  {
    label:
      "Rasmussen and Williams (2006), Gaussian Processes for Machine Learning. MIT Press; ISBN: 0-262-18253-X.",
    href: "https://gaussianprocess.org/gpml/",
  },
  {
    label:
      "Kennedy and O'Hagan (2001), Bayesian Calibration of Computer Models. Journal of the Royal Statistical Society: Series B 63(3), 425-464; DOI: 10.1111/1467-9868.00294.",
    href: "https://doi.org/10.1111/1467-9868.00294",
  },
  {
    label:
      "Sutton and Barto (2018), Reinforcement Learning: An Introduction, 2nd ed. MIT Press; ISBN: 9780262039246.",
    href: "https://mitpress.mit.edu/9780262039246/reinforcement-learning/",
  },
  {
    label:
      "Kaelbling, Littman, and Moore (1996), Reinforcement Learning: A Survey. Journal of Artificial Intelligence Research 4, 237-285; DOI: 10.1613/jair.301.",
    href: "https://doi.org/10.1613/jair.301",
  },
  {
    label:
      "Ng and Russell (2000), Algorithms for Inverse Reinforcement Learning. Proceedings of the Seventeenth International Conference on Machine Learning.",
    href: "https://ai.stanford.edu/~ang/papers/icml00-irl.pdf",
  },
  {
    label:
      "Lundberg and Lee (2017), A Unified Approach to Interpreting Model Predictions. Advances in Neural Information Processing Systems 30.",
    href: "https://proceedings.neurips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html",
  },
  {
    label:
      "NIST (2023), Artificial Intelligence Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology.",
    href: "https://www.nist.gov/itl/ai-risk-management-framework",
  },
  {
    label:
      "Saltelli et al. (2008), Global Sensitivity Analysis: The Primer. Wiley; ISBN: 9780470059975.",
    href: "https://www.wiley.com/en-us/Global+Sensitivity+Analysis%3A+The+Primer-p-9780470059975",
  },
  {
    label:
      "Lucas (1976), Econometric Policy Evaluation: A Critique. Carnegie-Rochester Conference Series on Public Policy 1, 19-46; DOI: 10.1016/S0167-2231(76)80003-6.",
    href: "https://doi.org/10.1016/S0167-2231(76)80003-6",
  },
];

const dataReferences = [
  {
    label:
      "Wilkinson et al. (2016), The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data 3, 160018; DOI: 10.1038/sdata.2016.18.",
    href: "https://doi.org/10.1038/sdata.2016.18",
  },
  {
    label:
      "W3C (2013), PROV-Overview: An Overview of the PROV Family of Documents. W3C Working Group Note.",
    href: "https://www.w3.org/TR/prov-overview/",
  },
  {
    label:
      "Kennedy and O'Hagan (2001), Bayesian Calibration of Computer Models. Journal of the Royal Statistical Society: Series B 63(3), 425-464; DOI: 10.1111/1467-9868.00294.",
    href: "https://doi.org/10.1111/1467-9868.00294",
  },
  {
    label:
      "Hansen (1982), Large Sample Properties of Generalized Method of Moments Estimators. Econometrica 50(4), 1029-1054; DOI: 10.2307/1912775.",
    href: "https://doi.org/10.2307/1912775",
  },
  {
    label:
      "Gneiting and Raftery (2007), Strictly Proper Scoring Rules, Prediction, and Estimation. Journal of the American Statistical Association 102(477), 359-378; DOI: 10.1198/016214506000001437.",
    href: "https://doi.org/10.1198/016214506000001437",
  },
  {
    label:
      "Fagiolo, Moneta, and Windrum (2007), A Critical Guide to Empirical Validation of Agent-Based Models in Economics. Computational Economics 30, 195-226; DOI: 10.1007/s10614-007-9104-4.",
    href: "https://doi.org/10.1007/s10614-007-9104-4",
  },
  {
    label:
      "Saltelli et al. (2008), Global Sensitivity Analysis: The Primer. Wiley; ISBN: 9780470059975.",
    href: "https://www.wiley.com/en-us/Global+Sensitivity+Analysis%3A+The+Primer-p-9780470059975",
  },
  {
    label:
      "Imbens and Rubin (2015), Causal Inference for Statistics, Social, and Biomedical Sciences. Cambridge University Press; DOI: 10.1017/CBO9781139025751.",
    href: "https://doi.org/10.1017/CBO9781139025751",
  },
  {
    label:
      "ENTSO-E, Transparency Platform. Official European electricity-market transparency data portal.",
    href: "https://transparency.entsoe.eu/",
  },
  {
    label:
      "Eurostat, Database. Official statistical database of the European Union.",
    href: "https://ec.europa.eu/eurostat/web/main/data/database",
  },
  {
    label: "IEA (2025), Energy and AI. International Energy Agency report.",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
];

const portfolioReferences = [
  {
    label:
      "Markowitz (1952), Portfolio Selection. Journal of Finance 7(1), 77-91; DOI: 10.2307/2975974.",
    href: "https://doi.org/10.2307/2975974",
  },
  {
    label:
      "Duffie (2001), Dynamic Asset Pricing Theory, 3rd ed. Princeton University Press; ISBN: 9780691090221.",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  },
  {
    label:
      "Hull (2022), Options, Futures, and Other Derivatives, 11th ed. Pearson.",
    href: "https://www.pearson.com/en-us/subject-catalog/p/options-futures-and-other-derivatives/P200000006175",
  },
  {
    label:
      "Black and Scholes (1973), The Pricing of Options and Corporate Liabilities. Journal of Political Economy 81(3), 637-654; DOI: 10.1086/260062.",
    href: "https://doi.org/10.1086/260062",
  },
  {
    label:
      "Merton (1973), Theory of Rational Option Pricing. Bell Journal of Economics and Management Science 4(1), 141-183; DOI: 10.2307/3003143.",
    href: "https://doi.org/10.2307/3003143",
  },
  {
    label:
      "Rockafellar and Uryasev (2000), Optimization of Conditional Value-at-Risk. Journal of Risk 2(3), 21-41; DOI: 10.21314/JOR.2000.038.",
    href: "https://doi.org/10.21314/JOR.2000.038",
  },
  {
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets. Journal of Finance 57(3), 1347-1382; DOI: 10.1111/1540-6261.00463.",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    label:
      "Schwartz (1997), The Stochastic Behavior of Commodity Prices. Journal of Finance 52(3), 923-973; DOI: 10.1111/j.1540-6261.1997.tb02721.x.",
    href: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
  },
  {
    label:
      "Geman (2005), Commodities and Commodity Derivatives. Wiley; ISBN: 9780470012185.",
    href: "https://www.wiley.com/en-us/Commodities+and+Commodity+Derivatives%3A+Modeling+and+Pricing+for+Agriculturals%2C+Metals+and+Energy-p-9780470012185",
  },
  {
    label:
      "IOSCO (2013), Principles for Financial Benchmarks. Final report FR07/13.",
    href: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf",
  },
];

const theoremReferences = [
  {
    label:
      "Arrow and Debreu (1954), Existence of an Equilibrium for a Competitive Economy. Econometrica 22(3), 265-290; DOI: 10.2307/1907353.",
    href: "https://doi.org/10.2307/1907353",
  },
  {
    label:
      "Mas-Colell, Whinston, and Green (1995), Microeconomic Theory. Oxford University Press; ISBN: 9780195073409.",
    href: "https://global.oup.com/academic/product/microeconomic-theory-9780195073409",
  },
  {
    label:
      "Rockafellar and Uryasev (2000), Optimization of Conditional Value-at-Risk. Journal of Risk 2(3), 21-41; DOI: 10.21314/JOR.2000.038.",
    href: "https://doi.org/10.21314/JOR.2000.038",
  },
  {
    label:
      "Markowitz (1952), Portfolio Selection. Journal of Finance 7(1), 77-91; DOI: 10.2307/2975974.",
    href: "https://doi.org/10.2307/2975974",
  },
  {
    label:
      "Duffie (2001), Dynamic Asset Pricing Theory, 3rd ed. Princeton University Press; ISBN: 9780691090221.",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  },
  {
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets. Journal of Finance 57(3), 1347-1382; DOI: 10.1111/1540-6261.00463.",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    label:
      "Hansen (1982), Large Sample Properties of Generalized Method of Moments Estimators. Econometrica 50(4), 1029-1054; DOI: 10.2307/1912775.",
    href: "https://doi.org/10.2307/1912775",
  },
  {
    label:
      "Kennedy and O'Hagan (2001), Bayesian Calibration of Computer Models. Journal of the Royal Statistical Society: Series B 63(3), 425-464; DOI: 10.1111/1467-9868.00294.",
    href: "https://doi.org/10.1111/1467-9868.00294",
  },
  {
    label:
      "Grimm et al. (2010), The ODD protocol: A review and first update. Ecological Modelling 221(23), 2760-2768; DOI: 10.1016/j.ecolmodel.2010.08.019.",
    href: "https://doi.org/10.1016/j.ecolmodel.2010.08.019",
  },
  {
    label:
      "IOSCO (2013), Principles for Financial Benchmarks. Final report FR07/13.",
    href: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf",
  },
  {
    label:
      "IEA (2025), Energy and AI. International Energy Agency official report.",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
];

const citationLinks = {
  agrawal2019:
    "https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda",
  arrowDebreu1954: "https://doi.org/10.2307/1907353",
  berryLevinsohnPakes1995: "https://doi.org/10.2307/2171802",
  bessembinderLemmon2002: "https://doi.org/10.1111/1540-6261.00463",
  blackScholes1973: "https://doi.org/10.1086/260062",
  bonabeau2002: "https://doi.org/10.1073/pnas.082080899",
  duffie2001: "https://books.google.com/books?id=f2Wv-LDpsoUC",
  epstein2006:
    "https://press.princeton.edu/books/paperback/9780691125473/generative-social-science",
  eydelandWolyniec2003:
    "https://www.wiley.com/en-us/Energy+and+Power+Risk+Management%3A+New+Developments+in+Modeling%2C+Pricing%2C+and+Hedging-p-9780471104001",
  entsoeTransparency: "https://transparency.entsoe.eu/",
  eurostatDatabase: "https://ec.europa.eu/eurostat/web/main/data/database",
  fagiolo2007: "https://doi.org/10.1007/s10614-007-9104-4",
  farmerFoley2009: "https://doi.org/10.1038/460685a",
  geman2005:
    "https://www.wiley.com/en-us/Commodities+and+Commodity+Derivatives%3A+Modeling+and+Pricing+for+Agriculturals%2C+Metals+and+Energy-p-9780470012185",
  grimm2006: "https://doi.org/10.1016/j.ecolmodel.2006.04.023",
  grimm2010: "https://doi.org/10.1016/j.ecolmodel.2010.08.019",
  gneitingRaftery2007: "https://doi.org/10.1198/016214506000001437",
  goodfellow2016: "https://mitpress.mit.edu/9780262035613/deep-learning/",
  hansen1982: "https://doi.org/10.2307/1912775",
  henderson2020: "https://jmlr.org/papers/v21/20-312.html",
  hoffmann2022: "https://arxiv.org/abs/2203.15556",
  hull2022:
    "https://www.pearson.com/en-us/subject-catalog/p/options-futures-and-other-derivatives/P200000006175",
  iea2025: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  iosco2013: "https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf",
  euAiAct2024: "https://data.europa.eu/eli/reg/2024/1689/oj",
  euDataAct2023: "https://data.europa.eu/eli/reg/2023/2854/oj",
  farrellNewman2019: "https://doi.org/10.1162/isec_a_00351",
  imbensRubin2015: "https://doi.org/10.1017/CBO9781139025751",
  iso3013422026: "https://www.iso.org/standard/30134-2",
  kaplan2020: "https://arxiv.org/abs/2001.08361",
  kudoRichardson2018: "https://doi.org/10.18653/v1/D18-2012",
  kaelbling1996: "https://doi.org/10.1613/jair.301",
  kennedyOHagan2001: "https://doi.org/10.1111/1467-9868.00294",
  kydlandPrescott1982: "https://doi.org/10.2307/1913386",
  lundbergLee2017:
    "https://proceedings.neurips.cc/paper/2017/hash/8a20a8621978632d76c43dfd28b67767-Abstract.html",
  lucas1976: "https://doi.org/10.1016/S0167-2231(76)80003-6",
  laffontTirole1993:
    "https://mitpress.mit.edu/9780262121743/a-theory-of-incentives-in-procurement-and-regulation/",
  markowitz1952: "https://doi.org/10.2307/2975974",
  masColell1995:
    "https://global.oup.com/academic/product/microeconomic-theory-9780195073409",
  masanet2020: "https://doi.org/10.1126/science.aba3758",
  merton1973: "https://doi.org/10.2307/3003143",
  millerPage2007:
    "https://press.princeton.edu/books/paperback/9780691127026/complex-adaptive-systems",
  ngfs2024: "https://www.ngfs.net/ngfs-scenarios-portal/",
  ngRussell2000: "https://ai.stanford.edu/~ang/papers/icml00-irl.pdf",
  nistAirmf2023: "https://www.nist.gov/itl/ai-risk-management-framework",
  ohara1995: "https://search.worldcat.org/isbn/0631207619",
  ostrom1990:
    "https://www.cambridge.org/core/books/governing-the-commons/7AB7AE11BADA84409C34815CC288CD79",
  patterson2021: "https://arxiv.org/abs/2104.10350",
  patterson2022: "https://doi.org/10.1109/MC.2022.3148714",
  rockafellarUryasev2000: "https://doi.org/10.21314/JOR.2000.038",
  saltelli2008:
    "https://www.wiley.com/en-us/Global+Sensitivity+Analysis%3A+The+Primer-p-9780470059975",
  rasmussenWilliams2006: "https://gaussianprocess.org/gpml/",
  schwartz1997: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
  schelling1971: "https://doi.org/10.1080/0022250X.1971.9989794",
  sennrich2016: "https://doi.org/10.18653/v1/P16-1162",
  shapiroVarian1999: "https://books.google.com/books?id=aE_J4Iv_PVEC",
  strubell2019: "https://doi.org/10.18653/v1/P19-1355",
  suttonBarto2018:
    "https://mitpress.mit.edu/9780262039246/reinforcement-learning/",
  tesfatsion2006: "https://doi.org/10.1016/S1574-0021(05)02016-2",
  vaswani2017:
    "https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
  weitzman1974: "https://doi.org/10.2307/2296698",
  wilkinsonFair2016: "https://doi.org/10.1038/sdata.2016.18",
  w3cProv2013: "https://www.w3.org/TR/prov-overview/",
} as const;

type CitationKey = keyof typeof citationLinks;

function CitationLink({
  id,
  children,
}: {
  id: CitationKey;
  children: ReactNode;
}) {
  return (
    <a
      className="citation-link"
      href={citationLinks[id]}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function getModuleIdFromHash(hash: string): LearningModuleId | null {
  if (moduleIds.includes(hash as LearningModuleId)) {
    return hash as LearningModuleId;
  }
  if (tokenArticleSectionIds.includes(hash)) {
    return "learn-token-foundations";
  }
  if (marketArticleSectionIds.includes(hash)) {
    return "learn-economic-asset";
  }
  if (productionArticleSectionIds.includes(hash)) {
    return "learn-token-production-energy";
  }
  if (equationArticleSectionIds.includes(hash)) {
    return "learn-equation-map";
  }
  if (abmArticleSectionIds.includes(hash)) {
    return "learn-abm-architecture";
  }
  if (policyArticleSectionIds.includes(hash)) {
    return "learn-policy-lab";
  }
  if (advancedArticleSectionIds.includes(hash)) {
    return "learn-advanced-learning";
  }
  if (dataArticleSectionIds.includes(hash)) {
    return "learn-data-calibration";
  }
  if (portfolioArticleSectionIds.includes(hash)) {
    return "learn-portfolio-hedging";
  }
  if (theoremArticleSectionIds.includes(hash)) {
    return "learn-theorem-proof-layer";
  }
  return null;
}

function getModule(id: LearningModuleId) {
  return (
    learningModules.find((module) => module.id === id) ?? learningModules[0]
  );
}

function updateHash(id: string) {
  window.history.pushState(null, "", `#${id}`);
}

export function ModelTheoryLearningHub() {
  const [activeModuleId, setActiveModuleId] = useState<LearningModuleId | null>(
    null,
  );

  useEffect(() => {
    function syncModuleFromHash() {
      const hash = window.location.hash.replace("#", "");
      setActiveModuleId(getModuleIdFromHash(hash));
    }

    syncModuleFromHash();
    window.addEventListener("hashchange", syncModuleFromHash);
    return () => window.removeEventListener("hashchange", syncModuleFromHash);
  }, []);

  const activeModule = useMemo(
    () => (activeModuleId ? getModule(activeModuleId) : null),
    [activeModuleId],
  );

  useEffect(() => {
    if (!activeModuleId) return;
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === activeModuleId) return;

    window.requestAnimationFrame(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activeModuleId]);

  function openModule(id: LearningModuleId) {
    setActiveModuleId(id);
    updateHash(id);
    document
      .getElementById("model-theory")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function backToPlan() {
    setActiveModuleId(null);
    updateHash("model-theory");
    document
      .getElementById("model-theory")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  function goRelative(direction: -1 | 1) {
    if (!activeModuleId) return;
    const index = moduleIds.indexOf(activeModuleId);
    const next = moduleIds[index + direction];
    if (next) {
      openModule(next as LearningModuleId);
    }
  }

  return (
    <section className="learning-panel" id="model-theory">
      {activeModule ? (
        <LearningArticleFrame
          module={activeModule}
          onBack={backToPlan}
          onPrevious={() => goRelative(-1)}
          onNext={() => goRelative(1)}
          hasPrevious={moduleIds.indexOf(activeModule.id) > 0}
          hasNext={moduleIds.indexOf(activeModule.id) < moduleIds.length - 1}
        />
      ) : (
        <LearningMasterplan onOpenModule={openModule} />
      )}
    </section>
  );
}

function LearningMasterplan({
  onOpenModule,
}: {
  onOpenModule: (id: LearningModuleId) => void;
}) {
  return (
    <>
      <div className="learning-overview">
        <div className="learning-overview-copy">
          <span className="section-kicker">
            <GraduationCap size={16} />
            Token economics and AI compute finance
          </span>
          <h2>A mathematical finance resource for AI-token markets</h2>
          <p>
            This site develops token economics as a research field: tokenization
            mechanics, input-output token accounting, model-quality differences,
            task-adjusted pricing, energy and grid exposure, weather and climate
            risk, token indices, hedging, investment, and policy. The
            agent-based simulation is a supporting laboratory for testing
            mechanisms, not the center of the project.
          </p>
          <div className="learning-overview-actions">
            <button
              type="button"
              className="command-button primary"
              onClick={() => onOpenModule("learn-token-foundations")}
            >
              <PlayCircle size={17} />
              Start Module 1
            </button>
            <a className="command-button" href="#abm-docs">
              Open analysis tool docs
            </a>
          </div>
        </div>
        <aside className="learning-review-card">
          <span>Research standard</span>
          <strong>Mathematical rigor before speed</strong>
          <p>
            Each module should be scientifically cautious, explicit about
            assumptions, and written for mathematical finance students. When
            several modelling routes are possible, the resource should compare
            them and justify the selected approach.
          </p>
        </aside>
      </div>

      <div className="learning-masterplan">
        <div className="learning-masterplan-header">
          <span className="section-kicker">Research masterplan</span>
          <h3>Textbook-style modules with interactive analysis</h3>
        </div>
        <div className="learning-module-list">
          {learningModules.map((module) => {
            const Icon = module.icon;
            return (
              <button
                className="learning-module-row"
                key={module.id}
                type="button"
                onClick={() => onOpenModule(module.id)}
              >
                <span className="module-row-icon">
                  <Icon size={20} />
                </span>
                <span className="module-row-main">
                  <span className="module-row-meta">
                    {module.milestone}
                  </span>
                  <strong>{module.title}</strong>
                  <span>{module.subtitle}</span>
                </span>
                <ChevronRight size={18} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

function LearningArticleFrame({
  module,
  onBack,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: {
  module: LearningModule;
  onBack: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}) {
  return (
    <div className="learning-article-page" id={module.id}>
      <div className="learning-page-toolbar">
        <button type="button" className="command-button" onClick={onBack}>
          <ArrowLeft size={16} />
          Back to masterplan
        </button>
        <div className="learning-page-steps">
          <button
            type="button"
            className="command-button"
            onClick={onPrevious}
            disabled={!hasPrevious}
          >
            <ArrowLeft size={16} />
            Previous
          </button>
          <button
            type="button"
            className="command-button"
            onClick={onNext}
            disabled={!hasNext}
          >
            Next
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <header className="learning-article-header">
        <span className="module-row-meta">
          {module.milestone}
        </span>
        <h2>{module.title}</h2>
        <p>{module.subtitle}</p>
        <div className="learning-article-brief">
          <div>
            <span>Deliverable</span>
            <p>{module.deliverable}</p>
          </div>
          <div>
            <span>Verification question</span>
            <p>{module.verification}</p>
          </div>
        </div>
      </header>

      {module.id === "learn-token-foundations" && <TokenFoundationsArticle />}
      {module.id === "learn-economic-asset" && <TokenMarketArticle />}
      {module.id === "learn-token-production-energy" && (
        <TokenProductionEnergyArticle />
      )}
      {module.id === "learn-equation-map" && <TokenMathematicalModelArticle />}
      {module.id === "learn-abm-architecture" && (
        <TokenAbmArchitectureArticle />
      )}
      {module.id === "learn-policy-lab" && <TokenPolicyGeopoliticsArticle />}
      {module.id === "learn-advanced-learning" && (
        <TokenAdvancedLearningArticle />
      )}
      {module.id === "learn-data-calibration" && (
        <TokenDataCalibrationArticle />
      )}
      {module.id === "learn-portfolio-hedging" && (
        <TokenPortfolioHedgingArticle />
      )}
      {module.id === "learn-theorem-proof-layer" && (
        <TokenTheoremProofArticle />
      )}
      {module.id !== "learn-token-foundations" &&
        module.id !== "learn-economic-asset" &&
        module.id !== "learn-token-production-energy" &&
        module.id !== "learn-equation-map" &&
        module.id !== "learn-abm-architecture" &&
        module.id !== "learn-policy-lab" &&
        module.id !== "learn-advanced-learning" &&
        module.id !== "learn-data-calibration" &&
        module.id !== "learn-portfolio-hedging" &&
        module.id !== "learn-theorem-proof-layer" && (
          <PlannedModulePage module={module} />
        )}
    </div>
  );
}

function PlannedModulePage({ module }: { module: LearningModule }) {
  return (
    <article className="learning-planned-page">
      <FlaskConical size={24} />
      <h3>
        {module.milestone} will be expanded after the preceding module is complete
      </h3>
      <p>
        This page is intentionally not expanded yet. The workflow is sequential:
        first verify Module 1, then this module will be written as a full
        article with equations, references, model links, and verification
        criteria.
      </p>
      <div className="learning-two-column">
        <section>
          <h4>Planned article scope</h4>
          <p>{module.deliverable}</p>
        </section>
        <section>
          <h4>Review criterion</h4>
          <p>{module.verification}</p>
        </section>
      </div>
    </article>
  );
}

function ProofBlock({
  kind,
  title,
  children,
}: {
  kind: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="proof-block">
      <span>{kind}</span>
      <h4>{title}</h4>
      {children}
    </section>
  );
}

function TokenTheoremProofArticle() {
  return (
    <div className="learning-article-shell">
      <nav className="learning-article-toc" aria-label="Module 10 contents">
        {theoremArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <article className="learning-article-body">
        <section id="proof-roadmap">
          <h3>1. Roadmap: What Can Be Proved?</h3>
          <p className="learning-lede">
            The previous modules build the vocabulary of the project. They show
            how a task becomes a token-service request, why capacity and energy
            enter the price, and how a buyer inherits basis risk. This chapter
            asks a narrower mathematical question: which claims follow once the
            assumptions are stated?
          </p>
          <p>
            A proof layer is useful because token economics sits between
            mathematical finance, energy economics, AI systems, and policy
            design. Some statements follow directly from the model. For example,
            a capacity expansion weakly enlarges the feasible allocation set, so
            the optimal welfare value weakly increases. Other statements need
            institutional assumptions. Arbitrage-free token derivatives require
            a settlement unit, a delivery convention, and a model of residual
            basis risk. A quality-adjusted token index also needs benchmark
            governance before it can be used for settlement.
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={20} />
              <h4>Proved results</h4>
              <p>
                The chapter proves existence of a welfare-selected allocation,
                weak capacity monotonicity, KKT scarcity rents, hedge-ratio
                formulas, CVaR convexity, simulator well-definedness, and a
                local identification condition.
              </p>
            </article>
            <article>
              <FlaskConical size={20} />
              <h4>Research frontiers</h4>
              <p>
                The open problems begin when service quality, provider strategy,
                weather-driven electricity prices, and benchmark governance move
                together.
              </p>
            </article>
          </div>
        </section>

        <section id="proof-assumptions">
          <h3>2. A Minimal Assumption System</h3>
          <p>
            The following assumptions define a clean mathematical environment for
            the model operator. Real token markets may be strategic, incomplete,
            and institutionally constrained. Those complications can be added
            after the baseline objects are well defined.
          </p>
          <ProofBlock kind="Assumption A1" title="Finite state and decision dimensions">
            <p>
              At each date, the token-class set, use-case set, agent set, and
              bottleneck set are finite. Allocations are represented by a vector{" "}
              <InlineMath latex={String.raw`x\in\mathbb R_+^n`} />.
            </p>
          </ProofBlock>
          <ProofBlock kind="Assumption A2" title="Closed and bounded feasibility">
            <p>
              For each state <InlineMath latex={String.raw`X_t`} />, the
              feasible set is nonempty, closed, and bounded. Legal
              admissibility is encoded by setting infeasible allocation
              components equal to zero.
            </p>
          </ProofBlock>
          <ProofBlock kind="Assumption A3" title="Continuous objective and measurement">
            <p>
              The benefit, cost, shortage, externality, resilience, and
              measurement functions are continuous in the allocation vector on
              the feasible set.
            </p>
          </ProofBlock>
          <ProofBlock kind="Assumption A4" title="Convexity for shadow-price results">
            <p>
              When scarcity rents are interpreted through KKT conditions, the
              feasible set is convex, the welfare objective is concave in
              allocations, and a suitable constraint qualification holds.
            </p>
          </ProofBlock>
          <MathEquation
            title="Canonical proof environment"
            latex={String.raw`\mathcal X(K)=\{x\in\mathbb R_+^n:\ Ax\le K,\ x_j=0\ \mathrm{if}\ j\notin\mathcal J^{\mathrm{adm}}\},\qquad V(K)=\max_{x\in\mathcal X(K)}W(x)`}
            explanation="The proof layer studies a finite-dimensional allocation problem with capacity K, admissibility restrictions, and welfare objective W."
            variables={[
              {
                symbol: String.raw`\mathcal X(K)`,
                meaning: "feasible allocation set under capacity vector K",
              },
              {
                symbol: String.raw`A`,
                meaning:
                  "technology and bottleneck incidence matrix converting allocations into capacity use",
              },
              {
                symbol: String.raw`K`,
                meaning: "capacity vector for compute, grid, region, and compliance bottlenecks",
              },
              {
                symbol: String.raw`W(x)`,
                meaning: "net welfare objective evaluated at allocation x",
              },
            ]}
          />
        </section>

        <section id="proof-existence">
          <h3>3. Existence of a Welfare-Selected Allocation</h3>
          <p>
            Existence is the first credibility test for a mathematical model. A
            simulator may always return a number, but a mathematical
            specification should say why the object it computes exists.
          </p>
          <ProofBlock kind="Theorem 1" title="Existence of an optimizer">
            <p>
              <strong>Statement.</strong> Under Assumptions A1-A3, the
              welfare-selection problem has at least one solution:
            </p>
            <MathEquation
              title="Existence statement"
              latex={String.raw`\operatorname*{arg\,max}_{x\in\mathcal X(K)}W(x)\ne\varnothing`}
              explanation="There is at least one feasible allocation that attains the maximum welfare value."
            />
            <p>
              <strong>Proof.</strong> By A2,{" "}
              <InlineMath latex={String.raw`\mathcal X(K)`} /> is nonempty and
              compact in a finite-dimensional Euclidean space. By A3,{" "}
              <InlineMath latex={String.raw`W`} /> is continuous on{" "}
              <InlineMath latex={String.raw`\mathcal X(K)`} />. The Weierstrass
              extreme-value theorem implies that a continuous real-valued
              function on a nonempty compact set attains its maximum.
            </p>
            <p>
              The theorem guarantees existence. It does not guarantee uniqueness.
              Multiple allocations can be optimal when two token classes are
              perfect substitutes, when rationing rules tie, or when a policy cap
              creates flat regions in the objective.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-monotonicity">
          <h3>4. Capacity Monotonicity</h3>
          <p>
            Capacity monotonicity is simple but important. It gives the model a
            basic economic sanity check. If all other primitives are fixed,
            relaxing a bottleneck weakly enlarges the feasible set. The best
            achievable welfare value therefore weakly increases.
          </p>
          <ProofBlock kind="Theorem 2" title="Weak value monotonicity in capacity">
            <p>
              <strong>Statement.</strong> If{" "}
              <InlineMath latex={String.raw`K'\ge K`} /> componentwise, then
            </p>
            <MathEquation
              title="Capacity monotonicity"
              latex={String.raw`V(K')\ge V(K)`}
              explanation="The optimal value cannot decrease when every capacity component weakly increases."
            />
            <p>
              <strong>Proof.</strong> If{" "}
              <InlineMath latex={String.raw`x\in\mathcal X(K)`} />, then{" "}
              <InlineMath latex={String.raw`Ax\le K\le K'`} />. Hence{" "}
              <InlineMath latex={String.raw`x\in\mathcal X(K')`} />. Therefore{" "}
              <InlineMath latex={String.raw`\mathcal X(K)\subseteq\mathcal X(K')`} />.
              Maximizing the same objective over a larger feasible set weakly
              raises the supremum. Existence from Theorem 1 turns the supremum
              into a maximum.
            </p>
            <p>
              Strict improvement requires additional assumptions. If the
              relaxed bottleneck was not binding, or if demand is already fully
              served, then <InlineMath latex={String.raw`V(K')=V(K)`} /> may hold.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-shadow-rents">
          <h3>5. Scarcity Rents as Shadow Values</h3>
          <p>
            Scarcity rents are not arbitrary markups in the formal model. Under
            convexity and regularity, they are Lagrange multipliers on capacity
            constraints and can be interpreted as marginal values of relaxing
            bottlenecks.
          </p>
          <ProofBlock kind="Theorem 3" title="KKT interpretation of bottleneck rents">
            <p>
              <strong>Statement.</strong> Suppose A1-A4 hold and{" "}
              <InlineMath latex={String.raw`x^*`} /> solves the welfare problem.
              Then there exists a nonnegative multiplier vector{" "}
              <InlineMath latex={String.raw`\rho^*\ge0`} /> such that
            </p>
            <MathEquation
              title="Complementarity and marginal scarcity"
              latex={String.raw`\rho_b^*\bigl(K_b-(Ax^*)_b\bigr)=0,\qquad \rho_b^*\in\partial_{K_b}V(K)`}
              explanation="A bottleneck has a positive rent only when it binds. When the value function is nonsmooth, the rent is a subgradient with respect to capacity."
              variables={[
                {
                  symbol: String.raw`\rho_b^*`,
                  meaning: "scarcity rent or multiplier for bottleneck b",
                },
                {
                  symbol: String.raw`K_b-(Ax^*)_b`,
                  meaning: "unused capacity at bottleneck b",
                },
                {
                  symbol: String.raw`\partial_{K_b}V(K)`,
                  meaning:
                    "subdifferential of the value function with respect to capacity component b",
                },
              ]}
            />
            <p>
              <strong>Proof sketch.</strong> The Lagrangian is{" "}
              <InlineMath
                latex={String.raw`\mathcal L(x,\rho)=W(x)+\rho^\top(K-Ax)`}
              />.
              Under convex feasibility, concavity of{" "}
              <InlineMath latex={String.raw`W`} />, and a constraint
              qualification, the Karush-Kuhn-Tucker conditions are necessary and
              sufficient. Complementarity gives the first displayed condition.
              Standard envelope and convex-analysis arguments identify
              multipliers with subgradients of the value function.
            </p>
            <p>
              In the token setting, this means a grid, GPU, certified-region,
              or compliance bottleneck can carry an economically meaningful
              price even when raw API prices are administratively posted.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-hedge-ratio">
          <h3>6. Minimum-Variance Token Hedge</h3>
          <p>
            Token hedging should be introduced with units. Let{" "}
            <InlineMath latex={String.raw`\Delta C`} /> denote the uncertain
            change in procurement cost for the target exposure, and let{" "}
            <InlineMath latex={String.raw`\Delta X`} /> denote the payoff change
            on one unit of a hedge instrument.
          </p>
          <ProofBlock kind="Theorem 4" title="Minimum-variance hedge ratio">
            <p>
              <strong>Statement.</strong> If{" "}
              <InlineMath latex={String.raw`\operatorname{Var}(\Delta X)>0`} />,
              the hedge ratio minimizing residual variance is
            </p>
            <MathEquation
              title="Optimal hedge ratio"
              latex={String.raw`h^*=\frac{\operatorname{Cov}(\Delta C,\Delta X)}{\operatorname{Var}(\Delta X)}`}
              explanation="The hedge ratio is the covariance of exposure and hedge payoff divided by hedge-payoff variance."
            />
            <p>
              <strong>Proof.</strong> Define{" "}
              <InlineMath latex={String.raw`R(h)=\Delta C-h\Delta X`} />. Then
            </p>
            <MathEquation
              title="Residual variance"
              latex={String.raw`\operatorname{Var}(R(h))=\operatorname{Var}(\Delta C)-2h\operatorname{Cov}(\Delta C,\Delta X)+h^2\operatorname{Var}(\Delta X)`}
              explanation="The residual variance is a quadratic function of the hedge ratio."
            />
            <p>
              Differentiating with respect to{" "}
              <InlineMath latex={String.raw`h`} /> and setting the first-order
              condition equal to zero gives the displayed hedge ratio. The
              second derivative is{" "}
              <InlineMath latex={String.raw`2\operatorname{Var}(\Delta X)>0`} />,
              so the solution is the unique minimizer.
            </p>
            <p>
              If token class B is a poor substitute for token class A, the
              covariance is small and the optimal hedge is weak. This is the
              mathematical expression of model-quality, latency, compliance, and
              regional basis risk.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-cvar">
          <h3>7. Convexity of Token Budget CVaR</h3>
          <p>
            Tail-risk control matters because token budgets can jump when
            demand, output length, electricity prices, and scarcity rents move
            together. CVaR is useful because it has a tractable optimization
            representation.
          </p>
          <ProofBlock kind="Theorem 5" title="Convex CVaR procurement objective">
            <p>
              <strong>Statement.</strong> Let{" "}
              <InlineMath latex={String.raw`C(x,\omega)`} /> be convex in the
              procurement decision{" "}
              <InlineMath latex={String.raw`x`} /> for every state{" "}
              <InlineMath latex={String.raw`\omega`} />. Then{" "}
              <InlineMath latex={String.raw`\operatorname{CVaR}_{\alpha}(C(x,\omega))`} />{" "}
              is convex in <InlineMath latex={String.raw`x`} />.
            </p>
            <MathEquation
              title="Rockafellar-Uryasev representation"
              latex={String.raw`\operatorname{CVaR}_{\alpha}(C_x)=\min_{\eta\in\mathbb R}\left\{\eta+\frac{1}{1-\alpha}\mathbb E\left[(C_x-\eta)_+\right]\right\}`}
              explanation="CVaR can be optimized by adding an auxiliary threshold eta and the expected excess loss above eta."
              variables={[
                {
                  symbol: String.raw`\alpha`,
                  meaning: "tail confidence level, such as 0.95 or 0.99",
                },
                {
                  symbol: String.raw`\eta`,
                  meaning: "auxiliary VaR-like threshold",
                },
                {
                  symbol: String.raw`(y)_+`,
                  meaning: "positive part, max(y,0)",
                },
              ]}
            />
            <p>
              <strong>Proof sketch.</strong> For fixed{" "}
              <InlineMath latex={String.raw`\eta`} />, the map{" "}
              <InlineMath latex={String.raw`x\mapsto C(x,\omega)-\eta`} /> is
              convex. The positive-part function is convex and nondecreasing, so
              composition preserves convexity. Expectation preserves convexity,
              and pointwise minimization over{" "}
              <InlineMath latex={String.raw`\eta`} /> in this representation
              gives the CVaR functional. This is the standard
              Rockafellar-Uryasev argument.
            </p>
            <p>
              The result is powerful but conditional. Integer procurement,
              minimum-lot token contracts, and discontinuous legal admissibility
              can break convexity and require mixed-integer or robust methods.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-simulator-selection">
          <h3>8. When the Simulator Is a Function</h3>
          <p>
            The theoretical model is naturally a correspondence because prices,
            allocations, and rationing outcomes may not be unique. A web
            simulator becomes a function only after a selection rule and random
            seed convention have been fixed.
          </p>
          <ProofBlock kind="Proposition 1" title="Single-valued selected simulator">
            <p>
              <strong>Statement.</strong> Suppose{" "}
              <InlineMath latex={String.raw`\mathcal M_\theta(X_t,z_t,\xi_{t+1})`} />{" "}
              is nonempty and the selection rule{" "}
              <InlineMath latex={String.raw`\Psi_t`} /> chooses one admissible
              element from it. Then
            </p>
            <MathEquation
              title="Selected simulator map"
              latex={String.raw`\widehat Y_t=H_\theta\!\left(X_t,\Psi_t\!\left(\mathcal M_\theta(X_t,z_t,\xi_{t+1})\right)\right)`}
              explanation="The selected simulator reports one outcome vector after the theoretical correspondence has been resolved by a deterministic selection rule."
            />
            <p>
              <strong>Proof.</strong> Nonemptiness ensures that there is at
              least one admissible internal model object. The selection rule
              returns exactly one such object. The measurement map{" "}
              <InlineMath latex={String.raw`H_\theta`} /> then maps that object
              and the state into a unique reported outcome. Therefore the
              implemented simulator is single-valued for the given state,
              scenario, parameters, and pseudo-random innovation.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-calibration">
          <h3>9. Local Identification in Moment Calibration</h3>
          <p>
            Calibration is a claim about information. A parameter is locally
            identifiable only when the selected moments contain enough
            independent variation to distinguish nearby parameter values.
          </p>
          <ProofBlock kind="Proposition 2" title="Rank condition for local identification">
            <p>
              <strong>Statement.</strong> Let{" "}
              <InlineMath latex={String.raw`G(\theta)=m^{\mathrm{sim}}(\theta)-m^{\mathrm{obs}}`} />{" "}
              be continuously differentiable near the true parameter{" "}
              <InlineMath latex={String.raw`\theta_0\in\mathbb R^d`} />. If
            </p>
            <MathEquation
              title="Local identification rank condition"
              latex={String.raw`\operatorname{rank}D_\theta G(\theta_0)=d`}
              explanation="The moment Jacobian must have full column rank to distinguish all d local parameter directions."
            />
            <p>
              then <InlineMath latex={String.raw`\theta_0`} /> is locally
              isolated as a solution to{" "}
              <InlineMath latex={String.raw`G(\theta)=0`} />.
            </p>
            <p>
              <strong>Proof sketch.</strong> The full-column-rank condition
              rules out a nonzero local direction that leaves all moments
              unchanged to first order. In the exactly identified case, this is
              the implicit-function theorem. In overidentified GMM, the same
              rank condition is the local identification condition underlying
              the quadratic moment objective.
            </p>
            <p>
              In token economics, this warning matters because several mechanisms
              can generate similar aggregate budget moments. Demand may grow.
              Solved-task yield may improve. Output-token variance may change.
              Policy routing may move workloads into a constrained region.
              Identification requires moments that separate these mechanisms.
            </p>
          </ProofBlock>
        </section>

        <section id="proof-counterexamples">
          <h3>10. Failure Modes and Counterexamples</h3>
          <p>
            A rigorous resource should teach where results fail. These examples
            are not defects in the theory; they are boundaries of the theorem
            assumptions.
          </p>
          <table className="learning-table symbol-table">
            <thead>
              <tr>
                <th>Claim</th>
                <th>Why it can fail</th>
                <th>Model implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unique allocation</td>
                <td>
                  Two token classes may have identical task-adjusted price,
                  quality, latency, and admissibility.
                </td>
                <td>
                  Use a correspondence plus a documented selection rule rather
                  than pretending the optimizer is unique.
                </td>
              </tr>
              <tr>
                <td>Competitive scarcity rent</td>
                <td>
                  Providers may set posted prices strategically or bundle token
                  access with cloud contracts.
                </td>
                <td>
                  Add industrial-organization modules before interpreting all
                  markups as shadow values.
                </td>
              </tr>
              <tr>
                <td>No-arbitrage token derivative</td>
                <td>
                  The underlying token service is non-storable, quality
                  adjusted, capacity constrained, and provider controlled.
                </td>
                <td>
                  Treat derivative pricing as incomplete-market risk pricing,
                  not as direct Black-Scholes replication.
                </td>
              </tr>
              <tr>
                <td>Stable calibration</td>
                <td>
                  Provider pricing, user prompting behavior, and regulation may
                  change after the market design changes.
                </td>
                <td>
                  Stress policy invariance and use Bayesian discrepancy or
                  scenario ensembles.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="proof-frontier">
          <h3>11. Research-Level Frontiers</h3>
          <p>
            The most interesting work begins where the clean theorems stop. The
            following questions are close to the frontier because they require
            new links between mathematical finance, AI systems, energy markets,
            and institutional design.
          </p>
          <div className="learning-concept-grid">
            <article>
              <h4>Standard inference token</h4>
              <p>
                Define an index unit that is invariant enough for settlement but
                rich enough to account for model quality, output stochasticity,
                verification cost, and latency.
              </p>
            </article>
            <article>
              <h4>Service-claim derivatives</h4>
              <p>
                Build pricing theory for non-storable AI service claims where
                delivery depends on capacity, quality, and provider discretion.
              </p>
            </article>
            <article>
              <h4>Weather-grid-token coupling</h4>
              <p>
                Estimate joint stochastic dynamics for weather, renewable
                generation, grid congestion, electricity price, and token
                scarcity.
              </p>
            </article>
            <article>
              <h4>Strategic provider equilibrium</h4>
              <p>
                Model firms that choose posted token prices, priority access,
                model releases, capacity investment, and index eligibility
                strategically.
              </p>
            </article>
            <article>
              <h4>Differentiable ABM calibration</h4>
              <p>
                Combine ABM structure with neural surrogates or differentiable
                simulation while retaining interpretable economic constraints.
              </p>
            </article>
            <article>
              <h4>Benchmark governance</h4>
              <p>
                Design token indices that resist manipulation, benchmark
                overfitting, hidden-token gaming, and selective availability of
                high-quality service.
              </p>
            </article>
          </div>
          <div className="learning-callout">
            <FlaskConical size={20} />
            <p>
              A 2026 arXiv preprint on AI token futures is a useful signal that
              this research direction is emerging. It should be cited with its
              preprint status clearly marked. The stronger foundation still comes
              from published work on asset pricing, electricity markets,
              commodity markets, benchmark governance, and calibration.
            </p>
          </div>
        </section>

        <section id="proof-exercises">
          <h3>12. Proof Exercises and References</h3>
          <ol className="learning-exercise-list">
            <li>
              Give an example with two token classes where the welfare optimizer
              is not unique. Define a selection rule and show that the simulator
              becomes single-valued.
            </li>
            <li>
              Prove capacity monotonicity when capacity enters both feasibility
              and the electricity-price process. Which part of the proof breaks?
            </li>
            <li>
              Derive the minimum-variance hedge ratio for two hedge instruments
              using covariance matrices.
            </li>
            <li>
              Construct a token procurement problem where CVaR is convex, then
              add a minimum-lot contract and explain why convexity fails.
            </li>
            <li>
              Propose three moments that separately identify demand growth,
              solved-task yield, and electricity pass-through.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 10</h3>
            <p>
              These references are used for existence arguments, optimization,
              asset pricing, hedging, electricity finance, calibration,
              simulation methodology, benchmark governance, and AI-energy
              empirical context.
            </p>
            <ol className="reference-list">
              {theoremReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://arxiv.org/abs/2603.21690"
                  target="_blank"
                  rel="noreferrer"
                >
                  Xing (2026), AI Token Futures Market: Commoditization of
                  Compute and Derivatives Contract Design. arXiv preprint
                  arXiv:2603.21690.
                </a>
              </li>
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

interface TokenLabParams {
  rawCost: number;
  verifyCost: number;
  latencyCost: number;
  solvePct: number;
  errorCost: number;
}

function expectedTaskCost(params: TokenLabParams) {
  const solveProbability = Math.max(params.solvePct / 100, 0.01);
  return (
    (params.rawCost + params.verifyCost + params.latencyCost) /
      solveProbability +
    params.errorCost
  );
}

function formatUsd(value: number) {
  return `$${value.toFixed(value >= 1 ? 2 : 4)}`;
}

function TokenEquivalenceLab() {
  const [frontier, setFrontier] = useState<TokenLabParams>({
    rawCost: 0.06,
    verifyCost: 0.01,
    latencyCost: 0.005,
    solvePct: 90,
    errorCost: 0.01,
  });
  const [smallModel, setSmallModel] = useState<TokenLabParams>({
    rawCost: 0.02,
    verifyCost: 0.018,
    latencyCost: 0.003,
    solvePct: 35,
    errorCost: 0.025,
  });

  const frontierTaskCost = expectedTaskCost(frontier);
  const smallTaskCost = expectedTaskCost(smallModel);
  const maxTaskCost = Math.max(frontierTaskCost, smallTaskCost, 0.01);
  const spread = frontierTaskCost - smallTaskCost;
  const lowerCostClass =
    spread <= 0 ? "frontier token class F" : "smaller-model token class S";
  const higherCostClass =
    spread <= 0 ? "smaller-model token class S" : "frontier token class F";

  function updateParams(
    setter: Dispatch<SetStateAction<TokenLabParams>>,
    key: keyof TokenLabParams,
    value: number,
  ) {
    setter((current) => ({ ...current, [key]: value }));
  }

  function applySimpleTaskPreset() {
    setFrontier({
      rawCost: 0.06,
      verifyCost: 0.005,
      latencyCost: 0.003,
      solvePct: 94,
      errorCost: 0.004,
    });
    setSmallModel({
      rawCost: 0.015,
      verifyCost: 0.004,
      latencyCost: 0.002,
      solvePct: 92,
      errorCost: 0.003,
    });
  }

  function applyHardReasoningPreset() {
    setFrontier({
      rawCost: 0.06,
      verifyCost: 0.01,
      latencyCost: 0.005,
      solvePct: 90,
      errorCost: 0.01,
    });
    setSmallModel({
      rawCost: 0.02,
      verifyCost: 0.025,
      latencyCost: 0.006,
      solvePct: 25,
      errorCost: 0.05,
    });
  }

  return (
    <div
      className="token-lab"
      aria-label="Interactive expected task cost calculator"
    >
      <div className="token-lab-controls">
        <article className="token-lab-model frontier">
          <h4>Frontier token class F</h4>
          <p>
            This class represents a high-capability model with expensive raw
            tokens and a high probability of solving the benchmark task in one
            attempt.
          </p>
          <SliderControl
            label="Raw attempt cost"
            value={frontier.rawCost}
            min={0.005}
            max={0.2}
            step={0.005}
            suffix=" USD"
            onChange={(value) => updateParams(setFrontier, "rawCost", value)}
          />
          <SliderControl
            label="Verification cost"
            value={frontier.verifyCost}
            min={0}
            max={0.08}
            step={0.005}
            suffix=" USD"
            onChange={(value) => updateParams(setFrontier, "verifyCost", value)}
          />
          <SliderControl
            label="Latency cost"
            value={frontier.latencyCost}
            min={0}
            max={0.05}
            step={0.005}
            suffix=" USD"
            onChange={(value) =>
              updateParams(setFrontier, "latencyCost", value)
            }
          />
          <SliderControl
            label="Solve probability"
            value={frontier.solvePct}
            min={5}
            max={99}
            step={1}
            suffix="%"
            onChange={(value) => updateParams(setFrontier, "solvePct", value)}
          />
          <SliderControl
            label="Residual error cost"
            value={frontier.errorCost}
            min={0}
            max={0.15}
            step={0.005}
            suffix=" USD"
            onChange={(value) => updateParams(setFrontier, "errorCost", value)}
          />
        </article>

        <article className="token-lab-model small-model">
          <h4>Smaller-model token class S</h4>
          <p>
            This class represents a cheaper model-token service that may require
            more retries, additional verification, or human repair before
            producing a usable result.
          </p>
          <SliderControl
            label="Raw attempt cost"
            value={smallModel.rawCost}
            min={0.005}
            max={0.2}
            step={0.005}
            suffix=" USD"
            onChange={(value) => updateParams(setSmallModel, "rawCost", value)}
          />
          <SliderControl
            label="Verification cost"
            value={smallModel.verifyCost}
            min={0}
            max={0.08}
            step={0.005}
            suffix=" USD"
            onChange={(value) =>
              updateParams(setSmallModel, "verifyCost", value)
            }
          />
          <SliderControl
            label="Latency cost"
            value={smallModel.latencyCost}
            min={0}
            max={0.05}
            step={0.005}
            suffix=" USD"
            onChange={(value) =>
              updateParams(setSmallModel, "latencyCost", value)
            }
          />
          <SliderControl
            label="Solve probability"
            value={smallModel.solvePct}
            min={5}
            max={99}
            step={1}
            suffix="%"
            onChange={(value) => updateParams(setSmallModel, "solvePct", value)}
          />
          <SliderControl
            label="Residual error cost"
            value={smallModel.errorCost}
            min={0}
            max={0.15}
            step={0.005}
            suffix=" USD"
            onChange={(value) =>
              updateParams(setSmallModel, "errorCost", value)
            }
          />
        </article>
      </div>

      <div className="token-lab-presets" aria-label="Benchmark task presets">
        <span>Benchmark preset</span>
        <button
          type="button"
          className="command-button"
          onClick={applySimpleTaskPreset}
        >
          Simple task
        </button>
        <button
          type="button"
          className="command-button"
          onClick={applyHardReasoningPreset}
        >
          Hard reasoning
        </button>
      </div>

      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Expected task price F</span>
          <strong>{formatUsd(frontierTaskCost)}</strong>
          <p>Expected attempts: {(100 / frontier.solvePct).toFixed(2)}</p>
        </article>
        <article className="token-result-card">
          <span>Expected task price S</span>
          <strong>{formatUsd(smallTaskCost)}</strong>
          <p>Expected attempts: {(100 / smallModel.solvePct).toFixed(2)}</p>
        </article>
        <article className="token-result-card accent">
          <span>Task-adjusted spread</span>
          <strong>{formatUsd(Math.abs(spread))}</strong>
          <p>
            {lowerCostClass} is lower than {higherCostClass} under the current
            parameters.
          </p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Expected task cost comparison: frontier ${formatUsd(frontierTaskCost)}, smaller model ${formatUsd(
          smallTaskCost,
        )}`}
      >
        <div className="token-lab-bar-row">
          <span>F</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(4, (frontierTaskCost / maxTaskCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(frontierTaskCost)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>S</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, (smallTaskCost / maxTaskCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(smallTaskCost)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        The sign of the spread can change when quality, verification, latency,
        or error-cost assumptions change. This is the simplest form of
        model-quality basis risk: a hedge written on one token class does not
        perfectly hedge the economic cost of another token class.
      </p>
    </div>
  );
}

interface ForwardHedgeParams {
  contractUnits: number;
  exposedSpot: number;
  hedgeSpot: number;
  forwardPrice: number;
  hedgePct: number;
}

function computeForwardHedge(params: ForwardHedgeParams) {
  const hedgeShare = params.hedgePct / 100;
  const unhedgedCost = params.contractUnits * params.exposedSpot;
  const hedgePayoff =
    hedgeShare *
    params.contractUnits *
    (params.hedgeSpot - params.forwardPrice);
  const hedgedCost = unhedgedCost - hedgePayoff;
  const perfectLockedCost = params.contractUnits * params.forwardPrice;

  return {
    hedgePayoff,
    hedgedCost,
    perfectLockedCost,
    unhedgedCost,
  };
}

function formatSignedUsd(value: number) {
  const sign = value >= 0 ? "+" : "-";
  return `${sign}${formatUsd(Math.abs(value))}`;
}

function ForwardHedgeLab() {
  const [params, setParams] = useState<ForwardHedgeParams>({
    contractUnits: 1200,
    exposedSpot: 0.16,
    hedgeSpot: 0.13,
    forwardPrice: 0.09,
    hedgePct: 70,
  });

  const result = computeForwardHedge(params);
  const maxCost = Math.max(result.unhedgedCost, result.hedgedCost, 1);
  const saved = result.unhedgedCost - result.hedgedCost;

  function updateParam(key: keyof ForwardHedgeParams, value: number) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  function applyPerfectHedgePreset() {
    setParams({
      contractUnits: 1200,
      exposedSpot: 0.16,
      hedgeSpot: 0.16,
      forwardPrice: 0.09,
      hedgePct: 100,
    });
  }

  function applyBasisRiskPreset() {
    setParams({
      contractUnits: 1200,
      exposedSpot: 0.16,
      hedgeSpot: 0.11,
      forwardPrice: 0.09,
      hedgePct: 70,
    });
  }

  return (
    <div
      className="token-lab"
      aria-label="Interactive forward hedge calculator"
    >
      <div className="token-lab-controls">
        <article className="token-lab-model frontier">
          <h4>Future procurement exposure</h4>
          <p>
            The buyer needs contract units of token service at the settlement
            date. The exposed spot price is the future price of the required
            token class.
          </p>
          <SliderControl
            label="Contract units"
            value={params.contractUnits}
            min={100}
            max={5000}
            step={100}
            onChange={(value) => updateParam("contractUnits", value)}
          />
          <SliderControl
            label="Required-token spot"
            value={params.exposedSpot}
            min={0.02}
            max={0.35}
            step={0.01}
            suffix=" USD"
            onChange={(value) => updateParam("exposedSpot", value)}
          />
        </article>
        <article className="token-lab-model small-model">
          <h4>Forward hedge instrument</h4>
          <p>
            The hedge may be the same token class or a correlated index. A
            mismatch between the required token and hedge instrument is basis
            risk.
          </p>
          <SliderControl
            label="Hedge-index spot"
            value={params.hedgeSpot}
            min={0.02}
            max={0.35}
            step={0.01}
            suffix=" USD"
            onChange={(value) => updateParam("hedgeSpot", value)}
          />
          <SliderControl
            label="Forward price"
            value={params.forwardPrice}
            min={0.02}
            max={0.25}
            step={0.01}
            suffix=" USD"
            onChange={(value) => updateParam("forwardPrice", value)}
          />
          <SliderControl
            label="Hedge share"
            value={params.hedgePct}
            min={0}
            max={100}
            step={5}
            suffix="%"
            onChange={(value) => updateParam("hedgePct", value)}
          />
        </article>
      </div>

      <div className="token-lab-presets" aria-label="Forward hedge presets">
        <span>Settlement preset</span>
        <button
          type="button"
          className="command-button"
          onClick={applyPerfectHedgePreset}
        >
          Same-class hedge
        </button>
        <button
          type="button"
          className="command-button"
          onClick={applyBasisRiskPreset}
        >
          Basis-risk hedge
        </button>
      </div>

      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Unhedged cost</span>
          <strong>{formatUsd(result.unhedgedCost)}</strong>
          <p>
            <InlineMath latex={String.raw`Q S_T^A`} /> with no forward payoff.
          </p>
        </article>
        <article className="token-result-card">
          <span>Hedged cost</span>
          <strong>{formatUsd(result.hedgedCost)}</strong>
          <p>
            <InlineMath latex={String.raw`Q S_T^A-hQ(S_T^H-F_{0,T}^H)`} />
          </p>
        </article>
        <article className="token-result-card accent">
          <span>Forward payoff</span>
          <strong>{formatSignedUsd(result.hedgePayoff)}</strong>
          <p>
            Cost change versus unhedged procurement: {formatSignedUsd(saved)}.
          </p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Unhedged cost ${formatUsd(result.unhedgedCost)}, hedged cost ${formatUsd(
          result.hedgedCost,
        )}`}
      >
        <div className="token-lab-bar-row">
          <span>U</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(4, (result.unhedgedCost / maxCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.unhedgedCost)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>H</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, (result.hedgedCost / maxCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.hedgedCost)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        A same-class forward hedge can lock the procurement price when
        settlement is enforceable and quality is identical. An index or proxy
        hedge reduces exposure only to the extent that the hedge instrument
        co-moves with the required token class.
      </p>
    </div>
  );
}

interface SpotDynamicsParams {
  baseCost: number;
  electricityPrice: number;
  energyIntensity: number;
  expectedUsageMultiplier: number;
  demandCapacityRatio: number;
  seasonalDemandShift: number;
  scarcitySlope: number;
  scarcityPower: number;
}

function computeSpotDynamics(params: SpotDynamicsParams) {
  const energyCost = params.energyIntensity * params.electricityPrice;
  const expectedMarginalCost =
    params.expectedUsageMultiplier * (params.baseCost + energyCost);
  const stressedUtilization =
    params.demandCapacityRatio * (1 + params.seasonalDemandShift / 100);
  const scarcityRent =
    params.scarcitySlope *
    Math.pow(Math.max(0, stressedUtilization - 1), params.scarcityPower);
  const benchmarkSpot = expectedMarginalCost + scarcityRent;

  return {
    benchmarkSpot,
    energyCost,
    expectedMarginalCost,
    scarcityRent,
    stressedUtilization,
  };
}

function SpotDynamicsLab() {
  const [params, setParams] = useState<SpotDynamicsParams>({
    baseCost: 0.055,
    electricityPrice: 95,
    energyIntensity: 0.00045,
    expectedUsageMultiplier: 1.35,
    demandCapacityRatio: 0.92,
    seasonalDemandShift: 8,
    scarcitySlope: 0.55,
    scarcityPower: 2.2,
  });

  const result = computeSpotDynamics(params);
  const maxComponent = Math.max(
    result.expectedMarginalCost,
    result.scarcityRent,
    result.benchmarkSpot,
    0.01,
  );

  function updateParam(key: keyof SpotDynamicsParams, value: number) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  function applySoftDemandPreset() {
    setParams({
      baseCost: 0.05,
      electricityPrice: 65,
      energyIntensity: 0.00038,
      expectedUsageMultiplier: 1.15,
      demandCapacityRatio: 0.72,
      seasonalDemandShift: -4,
      scarcitySlope: 0.45,
      scarcityPower: 2,
    });
  }

  function applyWinterCongestionPreset() {
    setParams({
      baseCost: 0.06,
      electricityPrice: 160,
      energyIntensity: 0.00055,
      expectedUsageMultiplier: 1.6,
      demandCapacityRatio: 1.08,
      seasonalDemandShift: 16,
      scarcitySlope: 0.65,
      scarcityPower: 2.4,
    });
  }

  return (
    <div
      className="token-lab"
      aria-label="Interactive benchmark token spot dynamics calculator"
    >
      <div className="token-lab-controls">
        <article className="token-lab-model frontier">
          <h4>Fundamental cost block</h4>
          <p>
            The benchmark spot price starts from expected marginal service cost:
            non-energy cost, electricity pass-through, and stochastic expected
            token usage per compute request.
          </p>
          <SliderControl
            label="Non-energy cost"
            value={params.baseCost}
            min={0.01}
            max={0.15}
            step={0.005}
            suffix=" USD"
            onChange={(value) => updateParam("baseCost", value)}
          />
          <SliderControl
            label="Electricity price"
            value={params.electricityPrice}
            min={20}
            max={250}
            step={5}
            suffix=" USD/MWh"
            onChange={(value) => updateParam("electricityPrice", value)}
          />
          <SliderControl
            label="Energy intensity"
            value={params.energyIntensity}
            min={0.0001}
            max={0.0012}
            step={0.00005}
            suffix=" MWh/unit"
            onChange={(value) => updateParam("energyIntensity", value)}
          />
          <SliderControl
            label="Expected usage multiplier"
            value={params.expectedUsageMultiplier}
            min={0.8}
            max={2.5}
            step={0.05}
            onChange={(value) => updateParam("expectedUsageMultiplier", value)}
          />
        </article>
        <article className="token-lab-model small-model">
          <h4>Scarcity and demand block</h4>
          <p>
            Demand relative to deliverable capacity determines scarcity rent.
            Seasonality and weather can move utilization even when installed
            capacity is unchanged.
          </p>
          <SliderControl
            label="Demand/capacity ratio"
            value={params.demandCapacityRatio}
            min={0.4}
            max={1.4}
            step={0.02}
            onChange={(value) => updateParam("demandCapacityRatio", value)}
          />
          <SliderControl
            label="Seasonal demand shift"
            value={params.seasonalDemandShift}
            min={-20}
            max={30}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("seasonalDemandShift", value)}
          />
          <SliderControl
            label="Scarcity slope"
            value={params.scarcitySlope}
            min={0}
            max={1.5}
            step={0.05}
            onChange={(value) => updateParam("scarcitySlope", value)}
          />
          <SliderControl
            label="Scarcity convexity"
            value={params.scarcityPower}
            min={1}
            max={4}
            step={0.1}
            onChange={(value) => updateParam("scarcityPower", value)}
          />
        </article>
      </div>

      <div className="token-lab-presets" aria-label="Spot dynamics presets">
        <span>Dynamics preset</span>
        <button
          type="button"
          className="command-button"
          onClick={applySoftDemandPreset}
        >
          Soft demand
        </button>
        <button
          type="button"
          className="command-button"
          onClick={applyWinterCongestionPreset}
        >
          Winter congestion
        </button>
      </div>

      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Expected marginal cost</span>
          <strong>{formatUsd(result.expectedMarginalCost)}</strong>
          <p>Energy component: {formatUsd(result.energyCost)} per unit.</p>
        </article>
        <article className="token-result-card">
          <span>Scarcity rent</span>
          <strong>{formatUsd(result.scarcityRent)}</strong>
          <p>
            Effective utilization:{" "}
            {(100 * result.stressedUtilization).toFixed(1)}%.
          </p>
        </article>
        <article className="token-result-card accent">
          <span>Benchmark spot price</span>
          <strong>{formatUsd(result.benchmarkSpot)}</strong>
          <p>
            Stylized task-equivalent service price for the competitive basket.
          </p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Expected marginal cost ${formatUsd(result.expectedMarginalCost)}, scarcity rent ${formatUsd(
          result.scarcityRent,
        )}, benchmark spot ${formatUsd(result.benchmarkSpot)}`}
      >
        <div className="token-lab-bar-row">
          <span>M</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(4, (result.expectedMarginalCost / maxComponent) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.expectedMarginalCost)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>R</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, (result.scarcityRent / maxComponent) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.scarcityRent)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        This illustration is not a calibration. It shows the structural
        mechanism: token prices can mean-revert toward a demand-dependent
        fundamental level, while electricity shocks, seasonal utilization, and
        capacity congestion generate commodity-like volatility and spikes.
      </p>
    </div>
  );
}

interface EnergyStressParams {
  serviceTokens: number;
  itEnergyIntensity: number;
  pue: number;
  coolingShiftPct: number;
  renewableDeratePct: number;
  gridCapacity: number;
  electricityPrice: number;
  carbonIntensity: number;
  carbonPrice: number;
  scarcitySlope: number;
}

function computeEnergyStress(params: EnergyStressParams) {
  const weatherAdjustedPue = params.pue * (1 + params.coolingShiftPct / 100);
  const itEnergy = params.serviceTokens * params.itEnergyIntensity;
  const facilityEnergy = itEnergy * weatherAdjustedPue;
  const deliveredGridCapacity =
    params.gridCapacity * (1 - params.renewableDeratePct / 100);
  const gridUtilization =
    facilityEnergy / Math.max(deliveredGridCapacity, Number.EPSILON);
  const energyCost = facilityEnergy * params.electricityPrice;
  const carbonCost =
    facilityEnergy * params.carbonIntensity * params.carbonPrice;
  const scarcityPenalty =
    energyCost *
    params.scarcitySlope *
    Math.pow(Math.max(0, gridUtilization - 1), 2);
  const totalCost = energyCost + carbonCost + scarcityPenalty;
  const costPerMillionTokens =
    totalCost / Math.max(params.serviceTokens, Number.EPSILON);

  return {
    carbonCost,
    costPerMillionTokens,
    deliveredGridCapacity,
    energyCost,
    facilityEnergy,
    gridUtilization,
    itEnergy,
    scarcityPenalty,
    totalCost,
    weatherAdjustedPue,
  };
}

function formatMwh(value: number) {
  return `${value.toFixed(value >= 100 ? 0 : 1)} MWh`;
}

function formatPercent(value: number) {
  return `${(100 * value).toFixed(1)}%`;
}

function EnergyWeatherLab() {
  const [params, setParams] = useState<EnergyStressParams>({
    serviceTokens: 220,
    itEnergyIntensity: 0.42,
    pue: 1.22,
    coolingShiftPct: 6,
    renewableDeratePct: 4,
    gridCapacity: 150,
    electricityPrice: 92,
    carbonIntensity: 0.18,
    carbonPrice: 85,
    scarcitySlope: 0.65,
  });

  const result = computeEnergyStress(params);
  const maxCost = Math.max(
    result.energyCost,
    result.carbonCost,
    result.scarcityPenalty,
    result.totalCost,
    1,
  );

  function updateParam(key: keyof EnergyStressParams, value: number) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  function applyMildWeatherPreset() {
    setParams({
      serviceTokens: 180,
      itEnergyIntensity: 0.36,
      pue: 1.18,
      coolingShiftPct: 0,
      renewableDeratePct: 0,
      gridCapacity: 165,
      electricityPrice: 58,
      carbonIntensity: 0.11,
      carbonPrice: 75,
      scarcitySlope: 0.45,
    });
  }

  function applyHeatwaveStressPreset() {
    setParams({
      serviceTokens: 280,
      itEnergyIntensity: 0.48,
      pue: 1.24,
      coolingShiftPct: 18,
      renewableDeratePct: 22,
      gridCapacity: 150,
      electricityPrice: 185,
      carbonIntensity: 0.32,
      carbonPrice: 105,
      scarcitySlope: 0.95,
    });
  }

  return (
    <div
      className="token-lab"
      aria-label="Interactive token energy and weather stress calculator"
    >
      <div className="token-lab-controls">
        <article className="token-lab-model frontier">
          <h4>Service and facility block</h4>
          <p>
            This block translates a batch of task-equivalent token service into
            IT energy and facility energy after cooling and overhead.
          </p>
          <SliderControl
            label="Service tokens"
            value={params.serviceTokens}
            min={50}
            max={500}
            step={10}
            suffix=" million"
            onChange={(value) => updateParam("serviceTokens", value)}
          />
          <SliderControl
            label="IT energy intensity"
            value={params.itEnergyIntensity}
            min={0.1}
            max={0.9}
            step={0.02}
            suffix=" MWh/million"
            onChange={(value) => updateParam("itEnergyIntensity", value)}
          />
          <SliderControl
            label="Baseline PUE"
            value={params.pue}
            min={1.05}
            max={1.8}
            step={0.01}
            onChange={(value) => updateParam("pue", value)}
          />
          <SliderControl
            label="Weather cooling shift"
            value={params.coolingShiftPct}
            min={-8}
            max={30}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("coolingShiftPct", value)}
          />
          <SliderControl
            label="Grid energy budget"
            value={params.gridCapacity}
            min={60}
            max={280}
            step={5}
            suffix=" MWh"
            onChange={(value) => updateParam("gridCapacity", value)}
          />
        </article>

        <article className="token-lab-model small-model">
          <h4>Weather, price, and carbon block</h4>
          <p>
            This block applies weather-sensitive supply derating, electricity
            prices, carbon intensity, and a convex penalty when facility demand
            exceeds deliverable grid capacity.
          </p>
          <SliderControl
            label="Renewable/grid derating"
            value={params.renewableDeratePct}
            min={0}
            max={45}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("renewableDeratePct", value)}
          />
          <SliderControl
            label="Electricity price"
            value={params.electricityPrice}
            min={20}
            max={260}
            step={5}
            suffix=" USD/MWh"
            onChange={(value) => updateParam("electricityPrice", value)}
          />
          <SliderControl
            label="Carbon intensity"
            value={params.carbonIntensity}
            min={0}
            max={0.75}
            step={0.01}
            suffix=" tCO2/MWh"
            onChange={(value) => updateParam("carbonIntensity", value)}
          />
          <SliderControl
            label="Carbon price"
            value={params.carbonPrice}
            min={0}
            max={200}
            step={5}
            suffix=" USD/tCO2"
            onChange={(value) => updateParam("carbonPrice", value)}
          />
          <SliderControl
            label="Scarcity penalty"
            value={params.scarcitySlope}
            min={0}
            max={1.8}
            step={0.05}
            onChange={(value) => updateParam("scarcitySlope", value)}
          />
        </article>
      </div>

      <div className="token-lab-presets" aria-label="Weather stress presets">
        <span>Weather preset</span>
        <button
          type="button"
          className="command-button"
          onClick={applyMildWeatherPreset}
        >
          Mild weather
        </button>
        <button
          type="button"
          className="command-button"
          onClick={applyHeatwaveStressPreset}
        >
          Heatwave stress
        </button>
      </div>

      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Facility energy</span>
          <strong>{formatMwh(result.facilityEnergy)}</strong>
          <p>
            IT energy {formatMwh(result.itEnergy)} with adjusted PUE{" "}
            {result.weatherAdjustedPue.toFixed(2)}.
          </p>
        </article>
        <article className="token-result-card">
          <span>Grid utilization</span>
          <strong>{formatPercent(result.gridUtilization)}</strong>
          <p>
            Deliverable capacity: {formatMwh(result.deliveredGridCapacity)}.
          </p>
        </article>
        <article className="token-result-card accent">
          <span>Total energy-risk cost</span>
          <strong>{formatUsd(result.totalCost)}</strong>
          <p>
            {formatUsd(result.costPerMillionTokens)} per million service tokens.
          </p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Energy cost ${formatUsd(result.energyCost)}, carbon cost ${formatUsd(
          result.carbonCost,
        )}, scarcity penalty ${formatUsd(result.scarcityPenalty)}`}
      >
        <div className="token-lab-bar-row">
          <span>E</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(4, (result.energyCost / maxCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.energyCost)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>C</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, (result.carbonCost / maxCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.carbonCost)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>R</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.scarcityPenalty / maxCost) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.scarcityPenalty)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        The calculator is a mechanism illustration, not an empirical
        calibration. Its main lesson is structural: weather affects token
        economics through several channels at once, including cooling overhead,
        renewable availability, electricity prices, carbon cost, and capacity
        scarcity.
      </p>
    </div>
  );
}

function TokenProductionEnergyArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {productionArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="energy-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            This module connects the financial object studied in the previous
            modules to the physical production system that delivers it. A token
            service is not produced by a purely digital abstraction. It is
            produced by models running on hardware, in data centres, connected
            to electricity networks, exposed to weather, cooling constraints,
            grid congestion, carbon policy, and climate risk.
          </p>
          <p>
            The scientific background for this module comes from three
            literatures. Energy and carbon accounting for machine learning is
            anchored in{" "}
            <CitationLink id="strubell2019">
              Strubell, Ganesh, and McCallum (2019)
            </CitationLink>
            {", "}
            <CitationLink id="henderson2020">
              Henderson et al. (2020)
            </CitationLink>
            {", "}
            <CitationLink id="patterson2021">
              Patterson et al. (2021)
            </CitationLink>
            {", and "}
            <CitationLink id="patterson2022">
              Patterson et al. (2022)
            </CitationLink>
            {". "}
            Data-centre energy accounting and PUE follow{" "}
            <CitationLink id="masanet2020">Masanet et al. (2020)</CitationLink>,
            the <CitationLink id="iea2025">IEA (2025)</CitationLink>, and{" "}
            <CitationLink id="iso3013422026">ISO/IEC 30134-2:2026</CitationLink>
            {". "}
            The stochastic treatment of electricity prices, scarcity, and
            derivative risk draws on{" "}
            <CitationLink id="schwartz1997">Schwartz (1997)</CitationLink>,{" "}
            <CitationLink id="bessembinderLemmon2002">
              Bessembinder and Lemmon (2002)
            </CitationLink>
            {", "}
            <CitationLink id="geman2005">Geman (2005)</CitationLink>,{" "}
            <CitationLink id="eydelandWolyniec2003">
              Eydeland and Wolyniec (2003)
            </CitationLink>
            {", and "}
            <CitationLink id="rockafellarUryasev2000">
              Rockafellar and Uryasev (2000)
            </CitationLink>
            {"."}
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Translate input, output, hidden, cached, and tool tokens into a
                service-load variable suitable for economics.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Distinguish training energy, inference energy, batch inference,
                real-time inference, and agentic workflows.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define IT energy, facility energy, power usage effectiveness,
                cooling load, and deliverable grid capacity.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Model weather as an exogenous stochastic process that affects
                electricity demand, renewable output, and cooling requirements.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Explain electricity-price pass-through, scarcity rents, carbon
                costs, and climate-transition exposure.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Construct stress tests for token portfolios under joint token,
                weather, electricity, grid, and climate shocks.
              </p>
            </article>
          </div>
        </section>

        <section id="energy-service-pipeline">
          <h3>1. The Production Chain: From Request to Delivered Service</h3>
          <p>
            The economic object is a delivered token service, but production
            begins with a request. A request may contain prompt text, retrieved
            context, files, tool calls, images, audio, or structured data. The
            service stack tokenizes the input, routes the request to a model or
            sequence of models, performs prefill over the input context,
            generates output tokens, possibly calls external tools, and returns
            a result that may still require verification or retry.
          </p>
          <p>
            This service-path formulation extends the tokenization and
            transformer-serving logic introduced in Module 1. It is not a claim
            that every provider implements the same internal workflow. It is a
            bookkeeping device that makes visible the same kind of hidden
            computational work that energy-reporting papers argue must be
            disclosed before machine-learning energy estimates are comparable
            across systems (
            <CitationLink id="henderson2020">
              Henderson et al., 2020
            </CitationLink>
            {"; "}
            <CitationLink id="patterson2021">
              Patterson et al., 2021
            </CitationLink>
            ).
          </p>
          <p>
            A useful first abstraction is a service path. The path is the set of
            model calls, retrieval steps, safety checks, tool calls, and repair
            attempts that occur before a usable output is delivered. This is why
            an economic token unit cannot be inferred from the visible prompt
            alone.
          </p>
          <MathEquation
            title="Service path for one request"
            latex={String.raw`\mathcal{G}_{i,u,t}=\{g_1,\ldots,g_{N_{i,u,t}}\},\qquad
g_n=(m_n,r_n,\ell_n,T^{in}_n,T^{out}_n,T^{hid}_n)`}
            explanation="A service path records the model calls and hidden work required to produce a usable output for agent i and use case u."
            variables={[
              {
                symbol: String.raw`\mathcal{G}_{i,u,t}`,
                meaning: "service path for agent i, use case u, and time t",
              },
              {
                symbol: String.raw`g_n`,
                meaning: "nth service operation in the path",
              },
              {
                symbol: String.raw`N_{i,u,t}`,
                meaning: "random number of service operations in the path",
              },
              {
                symbol: String.raw`m_n`,
                meaning: "model or model class used in operation n",
              },
              {
                symbol: String.raw`r_n`,
                meaning: "region or delivery pool used in operation n",
              },
              {
                symbol: String.raw`\ell_n`,
                meaning: "latency or service-level class for operation n",
              },
              {
                symbol: String.raw`T^{in}_n,T^{out}_n,T^{hid}_n`,
                meaning:
                  "input, output, and hidden token-equivalent work in operation n",
              },
            ]}
          />
          <p>
            The path formulation is deliberately general. A simple chatbot
            answer may have one model call. An agentic workflow can have many
            calls, tool invocations, retrieval loops, verification steps, and
            retries. The same visible user task can therefore have different
            energy and price exposure depending on model routing and workflow
            design.
          </p>
        </section>

        <section id="energy-inference-compute">
          <h3>2. From Tokens to Inference Compute</h3>
          <p>
            Inference cost is not exactly proportional to raw token count. A
            stylized decomposition separates prefill work, which processes the
            input and context, from decode work, which produces output tokens.
            Long context, low batching efficiency, strict latency requirements,
            and memory bandwidth pressure can all raise energy per effective
            token.
          </p>
          <p>
            The decomposition below is deliberately reduced form. It is
            motivated by transformer sequence processing (
            <CitationLink id="vaswani2017">Vaswani et al., 2017</CitationLink>)
            and by the empirical warning that energy and carbon estimates depend
            on hardware, utilization, location, and reporting scope rather than
            on model size alone (
            <CitationLink id="strubell2019">
              Strubell, Ganesh, and McCallum, 2019
            </CitationLink>
            {"; "}
            <CitationLink id="henderson2020">
              Henderson et al., 2020
            </CitationLink>
            {"; "}
            <CitationLink id="patterson2021">
              Patterson et al., 2021
            </CitationLink>
            ).
          </p>
          <MathEquation
            title="Expected service-load index"
            latex={String.raw`H^{inf}_{i,u,t}
=\mathbb{E}_{t}\!\left[
\sum_{g\in\mathcal{G}_{i,u,t}}
\left(
\eta^{pre}_{m_g,t}T^{in}_{g}
+\eta^{dec}_{m_g,t}T^{out}_{g}
+\eta^{ctx}_{m_g,t}T^{ctx}_{g}T^{out}_{g}
+\eta^{hid}_{m_g,t}T^{hid}_{g}
\right)
\right]`}
            explanation="The service-load index converts the random service path into expected inference work. It is a reduced-form economic index, not a hardware benchmark."
            variables={[
              {
                symbol: String.raw`H^{inf}_{i,u,t}`,
                meaning:
                  "expected inference service-load index for agent i and use case u",
              },
              {
                symbol: String.raw`\mathbb{E}_{t}`,
                meaning:
                  "expectation conditional on information available at time t",
              },
              {
                symbol: String.raw`\eta^{pre}_{m,t}`,
                meaning:
                  "model-specific prefill work coefficient per input token",
              },
              {
                symbol: String.raw`\eta^{dec}_{m,t}`,
                meaning:
                  "model-specific decode work coefficient per output token",
              },
              {
                symbol: String.raw`\eta^{ctx}_{m,t}`,
                meaning:
                  "context-interaction coefficient capturing memory and attention pressure",
              },
              {
                symbol: String.raw`T^{ctx}_{g}`,
                meaning: "effective context length used during operation g",
              },
              {
                symbol: String.raw`\eta^{hid}_{m,t}`,
                meaning:
                  "coefficient for hidden routing, verification, safety, or tool orchestration work",
              },
            ]}
          />
          <p>
            The cross term{" "}
            <InlineMath latex={String.raw`T^{ctx}_{g}T^{out}_{g}`} /> is a
            simplified way to remind the reader that generating each output
            token can require access to previous context. Modern serving systems
            reduce this cost through caching, batching, attention variants,
            quantization, sparsity, and specialized hardware. The economic model
            should therefore treat the coefficients{" "}
            <InlineMath latex={String.raw`\eta`} /> as technology-dependent
            state variables, not physical constants.
          </p>
        </section>

        <section id="energy-training-inference">
          <h3>3. Training Energy and Inference Energy Are Different Objects</h3>
          <p>
            Training produces a model. Inference produces service. Training
            energy can be amortized over future service, but the amortization is
            uncertain because future demand, model lifetime, replacement speed,
            and model depreciation are uncertain. Inference energy is
            operational: it is incurred at the time and location of the request.
          </p>
          <p>
            This separation follows the reporting distinction emphasized in
            <CitationLink id="strubell2019">
              Strubell, Ganesh, and McCallum (2019)
            </CitationLink>
            {", "}
            <CitationLink id="henderson2020">
              Henderson et al. (2020)
            </CitationLink>
            {", "}
            <CitationLink id="patterson2021">
              Patterson et al. (2021)
            </CitationLink>
            {", and "}
            <CitationLink id="patterson2022">
              Patterson et al. (2022)
            </CitationLink>
            {". "}
            Training energy is a capital-like historical cost that must be
            allocated over an uncertain service horizon. Inference energy is a
            marginal operating exposure that can vary by region, time of day,
            electricity mix, latency requirement, and utilization state.
          </p>
          <MathEquation
            title="Amortized training energy per service unit"
            latex={String.raw`e^{train}_{m,t}
=\frac{E^{train}_{m}}
{\sum_{\tau=t}^{T_m}\delta^{\,\tau-t}\,
\mathbb{E}_{t}\!\left[Y^{svc}_{m,\tau}\right]}`}
            explanation="Training energy can be expressed per expected future service unit, but this requires an assumption about model lifetime and future demand."
            variables={[
              {
                symbol: String.raw`e^{train}_{m,t}`,
                meaning:
                  "amortized training energy per future service unit for model m",
              },
              {
                symbol: String.raw`E^{train}_{m}`,
                meaning: "total energy used to train model m",
              },
              {
                symbol: String.raw`T_m`,
                meaning:
                  "economic service horizon or retirement date of model m",
              },
              {
                symbol: String.raw`\delta`,
                meaning: "discount or survival factor for future service units",
              },
              {
                symbol: String.raw`Y^{svc}_{m,\tau}`,
                meaning:
                  "future delivered service units produced by model m at time tau",
              },
            ]}
          />
          <p>
            This distinction matters for finance. A spot token price mostly
            reflects current service cost, capacity scarcity, and market power.
            A long-run investment model must also account for training cost,
            model development, accelerator depreciation, and the risk that a new
            model generation makes previous investments less valuable.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Compute category</th>
                <th>Main uncertainty</th>
                <th>Financial implication</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Training</td>
                <td>Model lifetime, future demand, research progress.</td>
                <td>
                  Long-run capital recovery and strategic investment risk.
                </td>
              </tr>
              <tr>
                <td>Batch inference</td>
                <td>Flexible timing, queue length, off-peak prices.</td>
                <td>Lower price but weaker hedge for urgent workflows.</td>
              </tr>
              <tr>
                <td>Real-time inference</td>
                <td>Latency, reserved capacity, peak congestion.</td>
                <td>Higher scarcity premium and stronger option value.</td>
              </tr>
              <tr>
                <td>Agentic workflows</td>
                <td>Random path length, tool loops, verification depth.</td>
                <td>Heavy-tailed token-budget and energy-budget risk.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="energy-facility-energy">
          <h3>4. From IT Energy to Facility Energy</h3>
          <p>
            Data-centre electricity demand is larger than the energy delivered
            directly to accelerators. Cooling, power conversion, fans,
            networking, storage, and auxiliary systems create overhead. Power
            usage effectiveness, or PUE, is a common aggregate ratio: facility
            energy divided by IT energy. A lower PUE means less overhead, but
            even an efficient facility can face high electricity prices and grid
            constraints.
          </p>
          <p>
            PUE is a standardized data-centre energy-efficiency KPI, now defined
            in{" "}
            <CitationLink id="iso3013422026">ISO/IEC 30134-2:2026</CitationLink>
            {". "}
            It is useful because it separates IT energy from facility overhead,
            but it is not a full sustainability metric: it does not by itself
            measure carbon intensity, water stress, regional grid congestion,
            rebound effects, or total demand growth (
            <CitationLink id="masanet2020">Masanet et al., 2020</CitationLink>;
            <CitationLink id="iea2025">IEA, 2025</CitationLink>).
          </p>
          <MathEquation
            title="Facility energy demand"
            latex={String.raw`E^{IT}_{r,t}=\sum_{m\in\mathcal{M}_{r}}e^{IT}_{m,r,t}Y^{svc}_{m,r,t},\qquad
E^{fac}_{r,t}=PUE_{r,t}E^{IT}_{r,t}`}
            explanation="IT energy aggregates model-service energy across the regional model set. Facility energy multiplies IT energy by power usage effectiveness."
            variables={[
              {
                symbol: String.raw`E^{IT}_{r,t}`,
                meaning:
                  "IT energy consumed by model-serving equipment in region r",
              },
              {
                symbol: String.raw`e^{IT}_{m,r,t}`,
                meaning:
                  "IT energy intensity per service unit for model m in region r",
              },
              {
                symbol: String.raw`Y^{svc}_{m,r,t}`,
                meaning:
                  "delivered service units of model m in region r at time t",
              },
              {
                symbol: String.raw`PUE_{r,t}`,
                meaning:
                  "power usage effectiveness of the serving facility or region",
              },
              {
                symbol: String.raw`E^{fac}_{r,t}`,
                meaning:
                  "total facility energy demand after overhead and cooling",
              },
            ]}
          />
          <p>
            Weather can enter PUE through cooling. A heat wave can raise cooling
            energy and reduce the efficiency of some systems. Water stress can
            restrict evaporative cooling or force a facility into a less
            efficient operating mode. These physical details should not be
            hidden inside a constant if the objective is climate-aware token
            finance.
          </p>
          <MathEquation
            title="Weather-sensitive PUE"
            latex={String.raw`PUE_{r,t}=PUE^{0}_{r}
\left(1+\psi^{temp}_{r}\,[Temp_{r,t}-\bar Temp_{r}]_{+}
+\psi^{water}_{r}\,WS_{r,t}\right)`}
            explanation="This reduced-form expression lets heat and water stress raise facility overhead above the baseline PUE."
            variables={[
              {
                symbol: String.raw`PUE^{0}_{r}`,
                meaning: "baseline facility power usage effectiveness",
              },
              {
                symbol: String.raw`Temp_{r,t}`,
                meaning: "temperature state in region r",
              },
              {
                symbol: String.raw`\bar Temp_{r}`,
                meaning: "temperature threshold above which cooling load rises",
              },
              {
                symbol: String.raw`WS_{r,t}`,
                meaning: "water-stress index in region r",
              },
              {
                symbol: String.raw`\psi^{temp}_{r},\psi^{water}_{r}`,
                meaning:
                  "temperature and water-stress sensitivities of facility overhead",
              },
            ]}
          />
        </section>

        <section id="energy-grid-capacity">
          <h3>5. Grid Capacity and Deliverable Token Supply</h3>
          <p>
            Installed accelerators do not automatically imply deliverable token
            capacity. A provider may have GPUs, but still be constrained by
            data-centre space, transformer capacity, interconnection queues,
            contracted power, transmission bottlenecks, cooling limits,
            latency-region requirements, or legal access rules. The supply of a
            token class is therefore a minimum over several bottlenecks.
          </p>
          <MathEquation
            title="Deliverable service capacity"
            latex={String.raw`K^{del}_{j,r,t}
=\min\!\left\{
K^{GPU}_{j,r,t},
K^{DC}_{j,r,t},
\frac{K^{grid}_{r,t}}{PUE_{r,t}e^{IT}_{j,r,t}},
K^{pow}_{j,r,t},
K^{legal}_{j,r,t}
\right\}`}
            explanation="Every term is expressed in service-unit capacity. The grid term converts available electricity capacity into service capacity using energy intensity and PUE."
            variables={[
              {
                symbol: String.raw`K^{del}_{j,r,t}`,
                meaning: "deliverable capacity of token class j in region r",
              },
              {
                symbol: String.raw`K^{GPU}_{j,r,t}`,
                meaning: "accelerator-limited service capacity",
              },
              {
                symbol: String.raw`K^{DC}_{j,r,t}`,
                meaning: "data-centre and cooling-limited service capacity",
              },
              {
                symbol: String.raw`K^{grid}_{r,t}`,
                meaning:
                  "available grid energy or power budget for AI service in region r",
              },
              {
                symbol: String.raw`K^{pow}_{j,r,t}`,
                meaning: "contracted-power or procurement-limited capacity",
              },
              {
                symbol: String.raw`K^{legal}_{j,r,t}`,
                meaning: "legally admissible or certified capacity for class j",
              },
            ]}
          />
          <p>
            The minimum formulation is intentionally strict. It prevents the
            model from counting capacity that cannot actually be delivered. A
            simulation that increases GPU supply without increasing grid
            connection or cooling capacity may show little improvement in
            effective token supply. That result would not be a bug; it would be
            the bottleneck logic working as intended.
          </p>
        </section>

        <section id="energy-weather-process">
          <h3>6. Weather as Exogenous Stochastic State</h3>
          <p>
            Weather should be treated as a source of exogenous stochasticity. It
            affects electricity demand through heating and cooling load,
            renewable supply through wind, solar, and hydrological conditions,
            thermal-plant efficiency, transmission reliability, cooling
            requirements, and outage probabilities. The ABM should therefore
            draw weather paths independently of agent decisions, while allowing
            agents to respond to those paths.
          </p>
          <p>
            The stochastic process below is a compact weather generator for
            economic simulation, not a substitute for meteorology or climate
            science. Its role is analogous to reduced-form factor models in
            energy finance: represent seasonality, mean reversion, covariance,
            and extreme events with enough structure to study prices, hedges,
            and stress tests (
            <CitationLink id="geman2005">Geman, 2005</CitationLink>;{" "}
            <CitationLink id="eydelandWolyniec2003">
              Eydeland and Wolyniec, 2003
            </CitationLink>
            ). More detailed work should replace it with reanalysis data or
            climate-model downscaling when physical realism is the research
            target.
          </p>
          <MathEquation
            title="Vector weather process"
            latex={String.raw`dW_{r,t}
=A_r\!\left(\Theta_r(t)-W_{r,t}\right)dt
+\Sigma_r^{1/2}dB^{W}_{r,t}+dJ^{W}_{r,t}`}
            explanation="A vector Ornstein-Uhlenbeck process with a seasonal mean provides a compact starting point for regional weather states."
            variables={[
              {
                symbol: String.raw`W_{r,t}`,
                meaning:
                  "weather-state vector, such as temperature, wind, solar, hydro, humidity, and storm intensity",
              },
              {
                symbol: String.raw`A_r`,
                meaning:
                  "mean-reversion matrix determining how weather returns toward seasonal norms",
              },
              {
                symbol: String.raw`\Theta_r(t)`,
                meaning:
                  "deterministic seasonal mean vector for region r and time t",
              },
              {
                symbol: String.raw`\Sigma_r`,
                meaning: "weather covariance matrix",
              },
              {
                symbol: String.raw`B^{W}_{r,t}`,
                meaning: "multivariate Brownian motion for weather shocks",
              },
              {
                symbol: String.raw`J^{W}_{r,t}`,
                meaning:
                  "jump process for storms, heat waves, cold snaps, droughts, or other extremes",
              },
            ]}
          />
          <p>
            This is a model class, not the only possible model. A statistical
            weather generator, a reanalysis-based scenario library, or a
            climate-model downscaling pipeline can replace the vector process
            when the research question requires more realism. The reduced-form
            process is useful because it makes uncertainty transparent and can
            be coupled directly to electricity prices and capacity constraints.
          </p>
        </section>

        <section id="energy-electricity-price">
          <h3>7. Electricity Price Dynamics</h3>
          <p>
            Electricity prices differ from ordinary commodity prices because
            electricity is difficult to store at system scale and must clear
            under network constraints. Prices can exhibit strong seasonality,
            mean reversion, spikes, negative prices, regional basis, and
            nonlinear responses near capacity limits. Token economics inherits
            part of this behavior when inference is concentrated in electricity
            regions with volatile prices or tight grids.
          </p>
          <p>
            The mean-reverting, jump-augmented specification is inherited from
            the commodity and energy-pricing tradition rather than invented for
            this project.{" "}
            <CitationLink id="schwartz1997">Schwartz (1997)</CitationLink>{" "}
            motivates mean-reverting commodity spot factors;{" "}
            <CitationLink id="bessembinderLemmon2002">
              Bessembinder and Lemmon (2002)
            </CitationLink>{" "}
            show why electricity forwards require special treatment of scarcity
            and demand-supply asymmetry;{" "}
            <CitationLink id="geman2005">Geman (2005)</CitationLink> and{" "}
            <CitationLink id="eydelandWolyniec2003">
              Eydeland and Wolyniec (2003)
            </CitationLink>{" "}
            provide the broader energy-derivatives context.
          </p>
          <MathEquation
            title="Weather-linked log electricity factor"
            latex={String.raw`X^{elec}_{r,t}=\log P^{elec}_{r,t},\qquad
dX^{elec}_{r,t}
=\kappa^{E}_{r}\!\left(\theta^{E}_{r}(t,W_{r,t})-X^{elec}_{r,t}\right)dt
+\sigma^{E}_{r}dB^{E}_{r,t}+dJ^{E}_{r,t}`}
            explanation="The electricity price factor mean-reverts toward a seasonal and weather-dependent level, with diffusion shocks and jump shocks."
            variables={[
              {
                symbol: String.raw`X^{elec}_{r,t}`,
                meaning: "log electricity price factor in region r",
              },
              {
                symbol: String.raw`P^{elec}_{r,t}`,
                meaning: "electricity price in region r",
              },
              {
                symbol: String.raw`\kappa^{E}_{r}`,
                meaning: "electricity mean-reversion speed",
              },
              {
                symbol: String.raw`\theta^{E}_{r}(t,W_{r,t})`,
                meaning: "seasonal mean level shifted by weather state W",
              },
              {
                symbol: String.raw`\sigma^{E}_{r}`,
                meaning: "electricity price volatility",
              },
              {
                symbol: String.raw`B^{E}_{r,t}`,
                meaning:
                  "Brownian shock, possibly correlated with weather and demand shocks",
              },
              {
                symbol: String.raw`J^{E}_{r,t}`,
                meaning:
                  "jump process for scarcity events, outages, fuel shocks, or policy shocks",
              },
            ]}
          />
          <p>
            A structural alternative writes electricity price as a function of
            load, renewable output, fuel prices, carbon prices, and network
            constraints. That approach is more interpretable when grid detail is
            available. The reduced-form stochastic factor is more practical when
            the model needs many Monte Carlo scenarios.
          </p>
          <MathEquation
            title="Structural electricity-price map"
            latex={String.raw`P^{elec}_{r,t}
=f_r\!\left(
D^{grid}_{r,t},R^{ren}_{r,t},K^{trans}_{r,t},P^{fuel}_{t},P^{CO2}_{t}
\right)+\varepsilon^{E}_{r,t}`}
            explanation="The structural map expresses electricity prices as a function of grid load, renewable output, transmission capacity, fuel prices, carbon prices, and residual shocks."
            variables={[
              {
                symbol: String.raw`D^{grid}_{r,t}`,
                meaning: "regional grid demand",
              },
              {
                symbol: String.raw`R^{ren}_{r,t}`,
                meaning: "renewable generation available in region r",
              },
              {
                symbol: String.raw`K^{trans}_{r,t}`,
                meaning: "transmission or interconnection capacity",
              },
              {
                symbol: String.raw`P^{fuel}_{t}`,
                meaning: "fuel-price vector",
              },
              {
                symbol: String.raw`P^{CO2}_{t}`,
                meaning: "carbon price",
              },
              {
                symbol: String.raw`\varepsilon^{E}_{r,t}`,
                meaning:
                  "residual electricity-price shock after observable drivers",
              },
            ]}
          />
        </section>

        <section id="energy-pass-through">
          <h3>8. Pass-Through from Energy Prices to Token Prices</h3>
          <p>
            Electricity can enter token prices directly through marginal cost
            and indirectly through capacity scarcity. The direct channel is
            energy intensity times electricity price. The indirect channel
            appears when high electricity demand, weather stress, or grid
            derating reduces deliverable capacity and increases the scarcity
            rent. The indirect channel can dominate when the grid is close to a
            constraint.
          </p>
          <MathEquation
            title="Token marginal cost with energy and carbon"
            latex={String.raw`mc_{j,r,t}
=a_{j,t}
+e^{fac}_{j,r,t}P^{elec}_{r,t}
+e^{fac}_{j,r,t}\xi_{r,t}P^{CO2}_{t}
+c^{cap}_{j,r,t}+c^{net}_{j,r,t}+c^{comp}_{j,r,t}`}
            explanation="The marginal cost combines non-energy platform cost, electricity cost, carbon cost, capital/network cost, and compliance cost."
            variables={[
              {
                symbol: String.raw`mc_{j,r,t}`,
                meaning: "marginal cost of token class j delivered in region r",
              },
              {
                symbol: String.raw`a_{j,t}`,
                meaning: "non-energy platform and algorithmic service cost",
              },
              {
                symbol: String.raw`e^{fac}_{j,r,t}`,
                meaning:
                  "facility energy intensity per task-equivalent token-service unit",
              },
              {
                symbol: String.raw`\xi_{r,t}`,
                meaning: "emissions intensity of regional electricity",
              },
              {
                symbol: String.raw`P^{CO2}_{t}`,
                meaning: "carbon price",
              },
              {
                symbol: String.raw`c^{cap},c^{net},c^{comp}`,
                meaning: "capital, network, and compliance cost components",
              },
            ]}
          />
          <MathEquation
            title="Direct and scarcity pass-through"
            latex={String.raw`\frac{\partial S^{*}_{j,r,t}}{\partial P^{elec}_{r,t}}
=e^{fac}_{j,r,t}
+\frac{\partial \rho^{cap}_{j,r,t}}{\partial U_{j,r,t}}\,
\frac{\partial U_{j,r,t}}{\partial K^{del}_{j,r,t}}\,
\frac{\partial K^{del}_{j,r,t}}{\partial P^{elec}_{r,t}}`}
            explanation="The first term is direct energy pass-through. The remaining product captures the scarcity channel through utilization and deliverable capacity."
            variables={[
              {
                symbol: String.raw`S^{*}_{j,r,t}`,
                meaning: "fundamental token spot level",
              },
              {
                symbol: String.raw`\rho^{cap}_{j,r,t}`,
                meaning: "capacity scarcity rent",
              },
              {
                symbol: String.raw`U_{j,r,t}`,
                meaning:
                  "utilization ratio, equal to demand divided by deliverable capacity",
              },
              {
                symbol: String.raw`K^{del}_{j,r,t}`,
                meaning: "deliverable token-service capacity",
              },
            ]}
          />
          <p>
            The derivative above should be read carefully. Since{" "}
            <InlineMath latex={String.raw`U=D/K^{del}`} />, the derivative{" "}
            <InlineMath latex={String.raw`\partial U/\partial K^{del}`} /> is
            negative. If high electricity prices reduce deliverable capacity,
            then{" "}
            <InlineMath
              latex={String.raw`\partial K^{del}/\partial P^{elec}<0`}
            />{" "}
            and the scarcity channel raises the token spot level. Near a
            capacity boundary, the indirect pass-through may be larger than the
            direct electricity bill.
          </p>
        </section>

        <section id="energy-climate-risk">
          <h3>9. Climate Risk and Token Economics</h3>
          <p>
            Climate risk enters token economics through both physical and
            transition channels. Physical risk changes the distribution of
            weather states: higher average temperatures, more frequent heat
            waves, drought, water stress, wildfire smoke, storms, floods, and
            transmission disruption. Transition risk changes carbon prices,
            permitting rules, renewable build-out, grid investment, disclosure,
            and industrial policy.
          </p>
          <p>
            The distinction between physical and transition risk follows the
            climate-finance scenario framework used by the{" "}
            <CitationLink id="ngfs2024">
              Network for Greening the Financial System
            </CitationLink>
            {". "}
            In this module the scenarios are not forecasts of exact data-centre
            losses. They are controlled perturbations of weather, energy,
            policy, and capacity states used to identify vulnerability,
            concentration, and hedge failure.
          </p>
          <MathEquation
            title="Climate-shifted weather distribution"
            latex={String.raw`\Theta^{clim}_{r}(t;s)
=\Theta^{hist}_{r}(t)+\Delta^{temp}_{r}(t;s)+\Delta^{hydro}_{r}(t;s)+\Delta^{ext}_{r}(t;s)`}
            explanation="A climate scenario s shifts the seasonal weather distribution through temperature, hydrological, and extreme-event components."
            variables={[
              {
                symbol: String.raw`\Theta^{clim}_{r}(t;s)`,
                meaning: "seasonal weather mean under climate scenario s",
              },
              {
                symbol: String.raw`\Theta^{hist}_{r}(t)`,
                meaning: "historical or baseline seasonal weather mean",
              },
              {
                symbol: String.raw`\Delta^{temp}_{r}`,
                meaning: "temperature shift under climate scenario s",
              },
              {
                symbol: String.raw`\Delta^{hydro}_{r}`,
                meaning:
                  "hydrological or water-availability shift under scenario s",
              },
              {
                symbol: String.raw`\Delta^{ext}_{r}`,
                meaning:
                  "extreme-event frequency or severity shift under scenario s",
              },
            ]}
          />
          <p>
            The climate module should not pretend to forecast precise future
            data-centre losses. Its purpose is to test sensitivity. If a token
            portfolio depends on a narrow set of hot, water-stressed, or
            transmission-constrained regions, then climate scenarios can reveal
            concentration risk that ordinary price histories may not show.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Risk channel</th>
                <th>State variable</th>
                <th>Token-economics effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Heat</td>
                <td>Temperature and cooling load.</td>
                <td>Higher PUE, lower capacity, larger scarcity rent.</td>
              </tr>
              <tr>
                <td>Water stress</td>
                <td>Regional water-stress index.</td>
                <td>Cooling restrictions and siting constraints.</td>
              </tr>
              <tr>
                <td>Storm and wildfire</td>
                <td>Extreme-event jump intensity.</td>
                <td>Outages, interruption risk, insurance premia.</td>
              </tr>
              <tr>
                <td>Transition policy</td>
                <td>Carbon price, permitting, renewable build-out.</td>
                <td>Changed marginal cost and investment incentives.</td>
              </tr>
              <tr>
                <td>Adaptation</td>
                <td>Cooling upgrades and grid investment.</td>
                <td>Lower future vulnerability at current capital cost.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="energy-stress-testing">
          <h3>10. Stress Testing Token Portfolios</h3>
          <p>
            Token portfolios can be stressed by simulating joint paths for
            demand, model usage, electricity prices, weather, carbon prices,
            grid capacity, and token market prices. A procurement portfolio may
            look cheap under expected prices but fail under a hot-weather,
            high-load, low-renewable, grid-constrained scenario.
          </p>
          <p>
            The cost-at-risk notation below is a procurement analogue of
            quantile risk measurement, and conditional cost-at-risk follows the
            CVaR logic formalized by{" "}
            <CitationLink id="rockafellarUryasev2000">
              Rockafellar and Uryasev (2000)
            </CitationLink>
            {". "}
            The purpose is not to make tail risk disappear into one number. It
            is to make explicit which joint states drive the bad tail: demand
            surges, electricity spikes, weather derating, carbon costs, and
            local deliverability constraints.
          </p>
          <MathEquation
            title="Energy cost of a token portfolio"
            latex={String.raw`C^{energy}_{i,[0,T]}
=\sum_{t=0}^{T}\sum_{j,r}
Q_{i,j,r,t}\,e^{fac}_{j,r,t}
\left(P^{elec}_{r,t}+\xi_{r,t}P^{CO2}_{t}\right)`}
            explanation="The portfolio energy cost sums electricity and carbon cost across token classes, regions, and time."
            variables={[
              {
                symbol: String.raw`C^{energy}_{i,[0,T]}`,
                meaning:
                  "energy and carbon cost of agent i's token portfolio over horizon 0 to T",
              },
              {
                symbol: String.raw`Q_{i,j,r,t}`,
                meaning:
                  "quantity of token class j consumed or delivered for agent i in region r",
              },
              {
                symbol: String.raw`e^{fac}_{j,r,t}`,
                meaning: "facility energy intensity per token-service unit",
              },
              {
                symbol: String.raw`\xi_{r,t}`,
                meaning: "regional emissions intensity",
              },
            ]}
          />
          <MathEquation
            title="Energy cost-at-risk"
            latex={String.raw`\operatorname{ECaR}_{\alpha,T}
=\inf\left\{b\in\mathbb{R}:
\mathbb{P}\!\left(C^{energy}_{i,[0,T]}\le b\right)\ge \alpha\right\}`}
            explanation="Energy cost-at-risk is the alpha-quantile of future energy and carbon cost under the selected physical probability measure."
            variables={[
              {
                symbol: String.raw`\operatorname{ECaR}_{\alpha,T}`,
                meaning: "energy cost-at-risk over horizon T",
              },
              {
                symbol: String.raw`\alpha`,
                meaning: "confidence level, such as 0.95 or 0.99",
              },
              {
                symbol: String.raw`\mathbb{P}`,
                meaning:
                  "physical probability measure used for scenario simulation",
              },
              {
                symbol: String.raw`b`,
                meaning: "candidate cost threshold",
              },
            ]}
          />
          <p>
            Conditional cost-at-risk can also be used when tail severity matters
            more than the quantile threshold. For policy analysis, the same
            Monte Carlo paths can report welfare loss, rationed token demand,
            emissions, public-sector service shortfalls, and distributional
            effects across user groups.
          </p>
        </section>

        <section id="energy-worked-examples">
          <h3>11. Worked Examples: Units and Mechanisms</h3>
          <div className="learning-example-card">
            <h4>Example 1: Facility energy from service tokens</h4>
            <p>
              Suppose a provider delivers{" "}
              <InlineMath latex={String.raw`Y^{svc}=100`} /> million
              task-equivalent service tokens. IT energy intensity is{" "}
              <InlineMath latex={String.raw`e^{IT}=0.40`} /> MWh per million
              service tokens and <InlineMath latex={String.raw`PUE=1.25`} />.
              Facility energy is:
            </p>
            <MathEquation
              title="Facility energy example"
              latex={String.raw`E^{fac}=PUE\cdot e^{IT}Y^{svc}=1.25\cdot0.40\cdot100=50\ \mathrm{MWh}`}
              explanation="The service batch uses 40 MWh at the IT layer and 50 MWh after facility overhead."
              variables={[
                {
                  symbol: String.raw`Y^{svc}`,
                  meaning: "service tokens measured in millions",
                },
                {
                  symbol: String.raw`e^{IT}`,
                  meaning:
                    "IT energy intensity in MWh per million service tokens",
                },
                {
                  symbol: String.raw`PUE`,
                  meaning: "power usage effectiveness",
                },
              ]}
            />
          </div>
          <div className="learning-example-card">
            <h4>Example 2: Direct electricity pass-through</h4>
            <p>
              If electricity costs 120 USD/MWh and facility energy intensity is
              0.50 MWh per million service tokens, the direct electricity cost
              per million service tokens is:
            </p>
            <MathEquation
              title="Direct pass-through example"
              latex={String.raw`e^{fac}P^{elec}=0.50\cdot120=60\ \mathrm{USD}`}
              explanation="The direct channel is linear in electricity price for a fixed facility energy intensity."
              variables={[
                {
                  symbol: String.raw`e^{fac}`,
                  meaning:
                    "facility energy intensity per million service tokens",
                },
                {
                  symbol: String.raw`P^{elec}`,
                  meaning: "electricity price in USD per MWh",
                },
              ]}
            />
          </div>
          <div className="learning-example-card">
            <h4>Example 3: Weather creates a capacity shock</h4>
            <p>
              Suppose deliverable grid capacity is 80 MWh in normal weather, but
              heat and low renewable output reduce it by 20 percent. The
              available grid budget becomes:
            </p>
            <MathEquation
              title="Weather derating example"
              latex={String.raw`K^{grid,stress}=80(1-0.20)=64\ \mathrm{MWh}`}
              explanation="A service batch that fits under normal conditions may become capacity constrained after weather derating."
              variables={[
                {
                  symbol: String.raw`K^{grid,stress}`,
                  meaning: "weather-stressed deliverable grid capacity",
                },
              ]}
            />
          </div>
        </section>

        <section id="energy-interactive-lab">
          <h3>12. Interactive Illustration: Energy and Weather Stress</h3>
          <p>
            The calculator below follows the same chain as the equations:
            service tokens determine IT energy; PUE and cooling determine
            facility energy; weather can derate deliverable capacity;
            electricity and carbon prices determine direct cost; and utilization
            above the deliverable grid budget creates a convex scarcity penalty.
          </p>
          <MathEquation
            title="Interactive stress formula"
            latex={String.raw`C^{stress}
=E^{fac}P^{elec}
+E^{fac}\xi P^{CO2}
+\alpha\,E^{fac}P^{elec}\max\!\left\{0,\frac{E^{fac}}{K^{grid}(1-d)}-1\right\}^{2}`}
            explanation="The stress cost combines electricity cost, carbon cost, and a scarcity penalty when facility energy exceeds weather-adjusted grid capacity."
            variables={[
              {
                symbol: String.raw`C^{stress}`,
                meaning: "stylized energy-risk cost in the calculator",
              },
              {
                symbol: String.raw`E^{fac}`,
                meaning: "facility energy demand",
              },
              {
                symbol: String.raw`\xi`,
                meaning: "emissions intensity",
              },
              {
                symbol: String.raw`d`,
                meaning:
                  "weather-driven derating of renewable or grid capacity",
              },
              {
                symbol: String.raw`\alpha`,
                meaning: "scarcity penalty scale",
              },
            ]}
          />
          <EnergyWeatherLab />
        </section>

        <section id="energy-abm-link">
          <h3>13. How This Module Enters the ABM</h3>
          <p>
            The ABM should treat weather and electricity prices as stochastic
            state variables that affect providers and users through cost,
            capacity, and rationing. Users generate token demand. Providers
            allocate capacity across model classes and regions. Grid states
            determine deliverable capacity. Policy can restrict routing,
            prioritize public services, subsidize grid investment, impose carbon
            prices, or require certified local compute.
          </p>
          <MathEquation
            title="State update skeleton"
            latex={String.raw`(W_{t},P^{elec}_{t},K^{grid}_{t})
\longrightarrow (K^{del}_{j,t},mc_{j,t},S^{*}_{j,t})
\longrightarrow (Q^{clr}_{j,t},R_{j,t},\Pi_{i,t},\mathcal{W}_{t})`}
            explanation="Weather and electricity states determine deliverable capacity and cost, which determine clearing, rationing, agent profit, and welfare."
            variables={[
              {
                symbol: String.raw`Q^{clr}_{j,t}`,
                meaning: "cleared token-service quantity",
              },
              {
                symbol: String.raw`R_{j,t}`,
                meaning: "rationed or unmet token-service demand",
              },
              {
                symbol: String.raw`\Pi_{i,t}`,
                meaning: "profit, surplus, or net payoff of agent i",
              },
              {
                symbol: String.raw`\mathcal{W}_{t}`,
                meaning: "social welfare or scenario objective value",
              },
            ]}
          />
          <p>
            This sequence makes uncertainty visible. Changing a policy scenario
            should change the model itself. It should alter a state transition,
            constraint, cost term, eligibility set, or priority rule. For
            example, a grid-investment policy raises future{" "}
            <InlineMath latex={String.raw`K^{grid}_{r,t}`} /> after a delay. A
            local-compute mandate restricts eligible regions and can raise
            certified-token scarcity. A carbon-price policy changes the
            marginal-cost term and the investment value of low-carbon capacity.
          </p>
        </section>

        <section id="energy-calibration">
          <h3>14. Calibration and Data Requirements</h3>
          <p>
            Calibration should separate measured quantities, estimated
            quantities, and scenario assumptions. Some objects can be measured
            from telemetry or public grid data. Others require engineering
            assumptions, benchmarks, or scenario analysis. The model should
            display this epistemic status rather than presenting every parameter
            as equally observed.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Observable or estimate</th>
                <th>Model object</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service demand</td>
                <td>
                  Prompt counts, output lengths, workflow traces, sector
                  adoption, benchmark tasks.
                </td>
                <td>
                  <InlineMath latex={String.raw`Y^{svc}_{m,r,t}`} /> and{" "}
                  <InlineMath latex={String.raw`H^{inf}_{i,u,t}`} />.
                </td>
              </tr>
              <tr>
                <td>Serving efficiency</td>
                <td>
                  Internal telemetry, hardware benchmarks, latency tests,
                  utilization rates.
                </td>
                <td>
                  <InlineMath latex={String.raw`e^{IT}_{m,r,t}`} /> and{" "}
                  <InlineMath latex={String.raw`\eta_{m,t}`} /> coefficients.
                </td>
              </tr>
              <tr>
                <td>Facility efficiency</td>
                <td>
                  PUE, cooling technology, climate zone, water constraints.
                </td>
                <td>
                  <InlineMath latex={String.raw`PUE_{r,t}`} /> and cooling
                  sensitivities.
                </td>
              </tr>
              <tr>
                <td>Electricity system</td>
                <td>
                  Day-ahead and real-time prices, load, renewables, fuel,
                  carbon, transmission.
                </td>
                <td>
                  <InlineMath latex={String.raw`P^{elec}_{r,t}`} /> and{" "}
                  <InlineMath latex={String.raw`K^{grid}_{r,t}`} />.
                </td>
              </tr>
              <tr>
                <td>Weather and climate</td>
                <td>
                  Historical weather, reanalysis data, climate scenarios,
                  extreme-event catalogues.
                </td>
                <td>
                  <InlineMath latex={String.raw`W_{r,t}`} />,{" "}
                  <InlineMath latex={String.raw`\Theta^{clim}_{r}`} />, and jump
                  intensities.
                </td>
              </tr>
              <tr>
                <td>Market response</td>
                <td>
                  Posted token prices, reserved-capacity quotes, outage
                  premiums, procurement contracts.
                </td>
                <td>
                  Pass-through, scarcity-rent, markup, and risk-premium
                  parameters.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            A robust research workflow should calibrate the simplest transparent
            model first, then compare it with richer alternatives. For example,
            a seasonal mean-reverting electricity model can be compared with a
            structural supply-stack model. If both produce the same qualitative
            token-risk ranking, the result is more credible. If they disagree,
            the disagreement becomes a research question rather than a nuisance.
          </p>
        </section>

        <section id="energy-exercises">
          <h3>15. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Define a service path for an agentic coding task with retrieval,
              tool use, verification, and retry. Identify which components are
              visible to the user and which may be hidden inside the provider
              stack.
            </li>
            <li>
              Explain why output-token uncertainty creates both price risk and
              energy-risk uncertainty even when the input prompt is known.
            </li>
            <li>
              Derive the facility energy demand for a service batch when IT
              energy intensity, service volume, and PUE are given.
            </li>
            <li>
              Show how a weather-induced reduction in renewable output can raise
              token prices through both electricity prices and capacity
              scarcity.
            </li>
            <li>
              Compare the direct electricity pass-through channel with the
              indirect scarcity-rent channel. Give one case where each channel
              dominates.
            </li>
            <li>
              Design a stress test for a firm that depends on EU-certified
              frontier reasoning tokens during a heat wave and grid congestion.
            </li>
            <li>
              Explain why training energy and inference energy should not be
              collapsed into one constant in a finance model.
            </li>
            <li>
              Propose a calibration strategy when provider telemetry is
              unavailable but electricity prices, weather data, and posted token
              prices are observable.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 3</h3>
            <p>
              Citation identifiers are source-type specific: DOI links are used
              where assigned, official proceedings pages are used for published
              conference papers without DOI, arXiv is retained only for checked
              preprints, ISBNs are used for books, and institutional standards
              or reports are cited by issuer and document code.
            </p>
            <ol className="reference-list">
              {productionReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

interface EquationModelLabParams {
  taskDemand: number;
  solvedYield: number;
  capacity: number;
  marginalCost: number;
  electricityShockPct: number;
  policyRoutingPct: number;
  scarcitySlope: number;
  hedgeSharePct: number;
}

function solveEquationModelLab(params: EquationModelLabParams) {
  const solvedYield = Math.max(params.solvedYield, 0.05);
  const serviceDemand = params.taskDemand / solvedYield;
  const policyShare = params.policyRoutingPct / 100;
  const deliverableCapacity = params.capacity * (1 - 0.45 * policyShare);
  const stressedMarginalCost =
    params.marginalCost * (1 + params.electricityShockPct / 100);
  const utilization = serviceDemand / Math.max(deliverableCapacity, 1);
  const scarcityRent =
    stressedMarginalCost *
    params.scarcitySlope *
    Math.pow(Math.max(0, utilization - 1), 2);
  const tokenSpotPrice = stressedMarginalCost + scarcityRent;
  const servedService = Math.min(serviceDemand, deliverableCapacity);
  const servedTasks = servedService * solvedYield;
  const unservedTasks = Math.max(0, params.taskDemand - servedTasks);
  const shortageRate = unservedTasks / Math.max(params.taskDemand, 1);
  const expectedBudget = serviceDemand * tokenSpotPrice;
  const tailMultiplier =
    1 +
    0.55 * Math.max(0, utilization - 1) +
    Math.max(0, params.electricityShockPct) / 140;
  const unhedgedTailBudget = expectedBudget * tailMultiplier;
  const hedgeShare = params.hedgeSharePct / 100;
  const hedgePremium = expectedBudget * 0.035 * hedgeShare;
  const hedgedTailBudget =
    unhedgedTailBudget * (1 - 0.42 * hedgeShare) + hedgePremium;

  return {
    deliverableCapacity,
    expectedBudget,
    hedgedTailBudget,
    scarcityRent,
    serviceDemand,
    shortageRate,
    solvedYield,
    tokenSpotPrice,
    unhedgedTailBudget,
    unservedTasks,
    utilization,
  };
}

function formatUnits(value: number) {
  return value.toLocaleString(undefined, {
    maximumFractionDigits: value >= 100 ? 0 : 1,
  });
}

function TokenEquationLab() {
  const [params, setParams] = useState<EquationModelLabParams>({
    taskDemand: 1200,
    solvedYield: 0.8,
    capacity: 1400,
    marginalCost: 0.05,
    electricityShockPct: 20,
    policyRoutingPct: 35,
    scarcitySlope: 4,
    hedgeSharePct: 40,
  });

  const result = solveEquationModelLab(params);

  function updateParam<K extends keyof EquationModelLabParams>(
    key: K,
    value: EquationModelLabParams[K],
  ) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="token-lab" aria-label="Interactive token model">
      <div className="token-lab-presets">
        <span>Scenario</span>
        <button
          type="button"
          className="command-button compact"
          onClick={() =>
            setParams({
              taskDemand: 1000,
              solvedYield: 0.9,
              capacity: 1600,
              marginalCost: 0.045,
              electricityShockPct: 5,
              policyRoutingPct: 15,
              scarcitySlope: 3,
              hedgeSharePct: 25,
            })
          }
        >
          Diversified supply
        </button>
        <button
          type="button"
          className="command-button compact"
          onClick={() =>
            setParams({
              taskDemand: 1500,
              solvedYield: 0.65,
              capacity: 1250,
              marginalCost: 0.055,
              electricityShockPct: 45,
              policyRoutingPct: 60,
              scarcitySlope: 5.5,
              hedgeSharePct: 35,
            })
          }
        >
          Policy bottleneck
        </button>
        <button
          type="button"
          className="command-button compact"
          onClick={() =>
            setParams({
              taskDemand: 900,
              solvedYield: 0.55,
              capacity: 1350,
              marginalCost: 0.04,
              electricityShockPct: 30,
              policyRoutingPct: 25,
              scarcitySlope: 4.5,
              hedgeSharePct: 70,
            })
          }
        >
          Hedged procurement
        </button>
      </div>
      <div className="token-lab-controls">
        <section className="token-lab-model frontier">
          <h4>Demand and service conversion</h4>
          <p>
            Task demand becomes service-token demand by dividing by the expected
            solved-task yield of the token class.
          </p>
          <SliderControl
            label="Task demand"
            value={params.taskDemand}
            min={400}
            max={2500}
            step={50}
            onChange={(value) => updateParam("taskDemand", value)}
          />
          <SliderControl
            label="Solved-task yield"
            value={params.solvedYield}
            min={0.2}
            max={1.2}
            step={0.05}
            onChange={(value) => updateParam("solvedYield", value)}
          />
          <SliderControl
            label="Policy routed"
            value={params.policyRoutingPct}
            min={0}
            max={85}
            step={5}
            suffix="%"
            onChange={(value) => updateParam("policyRoutingPct", value)}
          />
        </section>
        <section className="token-lab-model small-model">
          <h4>Supply, cost, and hedge</h4>
          <p>
            Capacity limits, electricity stress, and scarcity convexity convert
            the service-token balance into a spot price and tail budget.
          </p>
          <SliderControl
            label="Raw capacity"
            value={params.capacity}
            min={700}
            max={2600}
            step={50}
            onChange={(value) => updateParam("capacity", value)}
          />
          <SliderControl
            label="Marginal cost"
            value={params.marginalCost}
            min={0.02}
            max={0.12}
            step={0.005}
            suffix=" USD"
            onChange={(value) => updateParam("marginalCost", value)}
          />
          <SliderControl
            label="Electricity shock"
            value={params.electricityShockPct}
            min={-20}
            max={80}
            step={5}
            suffix="%"
            onChange={(value) => updateParam("electricityShockPct", value)}
          />
          <SliderControl
            label="Scarcity slope"
            value={params.scarcitySlope}
            min={0.5}
            max={8}
            step={0.5}
            onChange={(value) => updateParam("scarcitySlope", value)}
          />
          <SliderControl
            label="Hedged share"
            value={params.hedgeSharePct}
            min={0}
            max={100}
            step={5}
            suffix="%"
            onChange={(value) => updateParam("hedgeSharePct", value)}
          />
        </section>
      </div>
      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Service demand</span>
          <strong>{formatUnits(result.serviceDemand)}</strong>
          <p>Task demand divided by solved-task yield.</p>
        </article>
        <article className="token-result-card">
          <span>Spot price</span>
          <strong>{formatUsd(result.tokenSpotPrice)}</strong>
          <p>Marginal cost plus scarcity rent per service token.</p>
        </article>
        <article className="token-result-card accent">
          <span>Shortage</span>
          <strong>{formatPercent(result.shortageRate)}</strong>
          <p>Fraction of task demand not served by constrained capacity.</p>
        </article>
        <article className="token-result-card">
          <span>Expected budget</span>
          <strong>{formatUsd(result.expectedBudget)}</strong>
          <p>Expected service-token procurement cost.</p>
        </article>
        <article className="token-result-card">
          <span>Tail budget</span>
          <strong>{formatUsd(result.unhedgedTailBudget)}</strong>
          <p>Stress budget before hedging.</p>
        </article>
        <article className="token-result-card accent">
          <span>Hedged tail</span>
          <strong>{formatUsd(result.hedgedTailBudget)}</strong>
          <p>Illustrative stress budget after reserved-capacity hedging.</p>
        </article>
      </div>
      <div className="token-lab-bars">
        <div className="token-lab-bar-row">
          <span>U</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{ width: `${Math.min(result.utilization, 1.5) * 66}%` }}
            />
          </div>
          <strong>{formatPercent(result.utilization)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>R</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.min(result.scarcityRent / 0.5, 1) * 100}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.scarcityRent)}</strong>
        </div>
      </div>
      <p className="token-lab-note">
        This is a pedagogical equilibrium calculator, not an empirical estimate.
        Its purpose is to make the algebra visible: quality changes demand,
        policy changes the admissible capacity set, electricity changes marginal
        cost, and capacity stress creates a nonlinear scarcity rent.
      </p>
    </div>
  );
}

interface AbmArchitectureLabParams {
  adoptionGrowthPct: number;
  policyRoutingPct: number;
  localCapacityGrowthPct: number;
  gridMultiplier: number;
  weatherStress: number;
  investmentDelayYears: number;
  publicPriorityPct: number;
}

function clampNumber(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function solveAbmArchitectureLab(params: AbmArchitectureLabParams) {
  const horizonYears = 9;
  const quarters = horizonYears * 4;
  const baseDemand = 155;
  const workflowDeepening = 1.55;
  const grossDemand =
    baseDemand *
    Math.pow(1 + params.adoptionGrowthPct / 100, horizonYears) *
    workflowDeepening;
  const localDemand = grossDemand * (params.policyRoutingPct / 100);
  const flexibleDemand = grossDemand - localDemand;
  const delayPenalty = Math.max(0, params.investmentDelayYears - 1) * 0.055;
  const localCapacity =
    72 *
    Math.pow(1 + params.localCapacityGrowthPct / 100, horizonYears) *
    params.gridMultiplier *
    (1 - delayPenalty);
  const alliedFlexibleCapacity = 118 * Math.pow(1.045, horizonYears);
  const localAdequacy = localCapacity / Math.max(localDemand, 1);
  const systemAdequacy =
    (localCapacity + alliedFlexibleCapacity) / Math.max(grossDemand, 1);
  const localShortage = Math.max(0, localDemand - localCapacity);
  const flexibleShortage = Math.max(0, flexibleDemand - alliedFlexibleCapacity);
  const totalShortage = localShortage + flexibleShortage;
  const weatherMarkup = 0.075 * params.weatherStress;
  const scarcityMarkup =
    0.42 * Math.pow(Math.max(0, 1 / Math.max(localAdequacy, 0.05) - 1), 1.35);
  const delayMarkup = 0.018 * Math.max(0, params.investmentDelayYears - 2);
  const priceIndex = 100 * (1 + weatherMarkup + scarcityMarkup + delayMarkup);
  const protectedLocalDemand = localDemand * (params.publicPriorityPct / 100);
  const criticalShortage = Math.max(0, protectedLocalDemand - localCapacity);
  const vulnerabilityScore = clampNumber(
    18 +
      33 * Math.max(0, 1 - localAdequacy) +
      15 * params.weatherStress +
      0.22 * params.policyRoutingPct +
      3.5 * Math.max(0, params.investmentDelayYears - 2) -
      0.12 * params.publicPriorityPct,
    0,
    100,
  );
  const investmentSignal = clampNumber(
    0.42 * Math.max(0, priceIndex / 100 - 1) +
      0.58 * Math.max(0, 1 - localAdequacy) +
      0.04 * params.localCapacityGrowthPct,
    0,
    1.8,
  );

  return {
    alliedFlexibleCapacity,
    criticalShortage,
    flexibleDemand,
    flexibleShortage,
    grossDemand,
    horizonYears,
    investmentSignal,
    localAdequacy,
    localCapacity,
    localDemand,
    priceIndex,
    quarters,
    systemAdequacy,
    totalShortage,
    vulnerabilityScore,
  };
}

function AbmArchitectureLab() {
  const [params, setParams] = useState<AbmArchitectureLabParams>({
    adoptionGrowthPct: 18,
    policyRoutingPct: 42,
    localCapacityGrowthPct: 9,
    gridMultiplier: 0.92,
    weatherStress: 1.1,
    investmentDelayYears: 3,
    publicPriorityPct: 32,
  });

  const result = solveAbmArchitectureLab(params);

  function updateParam<K extends keyof AbmArchitectureLabParams>(
    key: K,
    value: AbmArchitectureLabParams[K],
  ) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="token-lab" aria-label="Interactive ABM architecture lab">
      <div className="token-lab-presets">
        <span>Policy experiment</span>
        <button
          type="button"
          className="command-button compact"
          onClick={() =>
            setParams({
              adoptionGrowthPct: 14,
              policyRoutingPct: 28,
              localCapacityGrowthPct: 12,
              gridMultiplier: 1.08,
              weatherStress: 0.45,
              investmentDelayYears: 2,
              publicPriorityPct: 20,
            })
          }
        >
          Balanced expansion
        </button>
        <button
          type="button"
          className="command-button compact"
          onClick={() =>
            setParams({
              adoptionGrowthPct: 24,
              policyRoutingPct: 68,
              localCapacityGrowthPct: 5,
              gridMultiplier: 0.76,
              weatherStress: 1.75,
              investmentDelayYears: 5,
              publicPriorityPct: 55,
            })
          }
        >
          Bottleneck stress
        </button>
        <button
          type="button"
          className="command-button compact"
          onClick={() =>
            setParams({
              adoptionGrowthPct: 16,
              policyRoutingPct: 52,
              localCapacityGrowthPct: 15,
              gridMultiplier: 1.18,
              weatherStress: 0.9,
              investmentDelayYears: 3,
              publicPriorityPct: 65,
            })
          }
        >
          Public priority
        </button>
      </div>

      <div className="token-lab-controls">
        <section className="token-lab-model frontier">
          <h4>Demand and policy routing</h4>
          <p>
            Adoption growth and workflow deepening raise service-token demand.
            Policy routing moves a share of demand into the constrained local or
            certified pool.
          </p>
          <SliderControl
            label="Annual adoption growth"
            value={params.adoptionGrowthPct}
            min={4}
            max={32}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("adoptionGrowthPct", value)}
          />
          <SliderControl
            label="Local policy routing"
            value={params.policyRoutingPct}
            min={0}
            max={85}
            step={5}
            suffix="%"
            onChange={(value) => updateParam("policyRoutingPct", value)}
          />
          <SliderControl
            label="Public-priority share"
            value={params.publicPriorityPct}
            min={0}
            max={80}
            step={5}
            suffix="%"
            onChange={(value) => updateParam("publicPriorityPct", value)}
          />
        </section>

        <section className="token-lab-model small-model">
          <h4>Capacity, grid, and weather</h4>
          <p>
            Local data-centre growth is useful only when grid connection,
            permitting, and weather-sensitive electricity stress do not bind the
            deliverable capacity.
          </p>
          <SliderControl
            label="Local capacity growth"
            value={params.localCapacityGrowthPct}
            min={0}
            max={22}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("localCapacityGrowthPct", value)}
          />
          <SliderControl
            label="Grid multiplier"
            value={params.gridMultiplier}
            min={0.55}
            max={1.35}
            step={0.05}
            onChange={(value) => updateParam("gridMultiplier", value)}
          />
          <SliderControl
            label="Weather stress"
            value={params.weatherStress}
            min={0}
            max={2.5}
            step={0.05}
            onChange={(value) => updateParam("weatherStress", value)}
          />
          <SliderControl
            label="Investment delay"
            value={params.investmentDelayYears}
            min={1}
            max={7}
            step={1}
            suffix=" years"
            onChange={(value) => updateParam("investmentDelayYears", value)}
          />
        </section>
      </div>

      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Horizon</span>
          <strong>{result.quarters} quarters</strong>
          <p>Annualized interval from 2026 through 2035.</p>
        </article>
        <article className="token-result-card">
          <span>Local adequacy</span>
          <strong>{formatPercent(result.localAdequacy)}</strong>
          <p>Certified local capacity divided by routed local demand.</p>
        </article>
        <article className="token-result-card accent">
          <span>Token price index</span>
          <strong>{result.priceIndex.toFixed(0)}</strong>
          <p>Normalized index with scarcity, weather, and delay markups.</p>
        </article>
        <article className="token-result-card">
          <span>Unserved demand</span>
          <strong>{formatUnits(result.totalShortage)}</strong>
          <p>Demand not covered by local and flexible capacity pools.</p>
        </article>
        <article className="token-result-card">
          <span>Investment signal</span>
          <strong>{result.investmentSignal.toFixed(2)}</strong>
          <p>Stylized incentive from price pressure and adequacy gaps.</p>
        </article>
        <article className="token-result-card accent">
          <span>Vulnerability</span>
          <strong>{result.vulnerabilityScore.toFixed(0)} / 100</strong>
          <p>
            Higher values indicate more exposure to bottlenecked policy demand.
          </p>
        </article>
      </div>

      <div className="token-lab-bars">
        <div className="token-lab-bar-row">
          <span>L</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.min(result.localAdequacy, 1.5) * 66}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.localAdequacy)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>S</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.min(result.systemAdequacy, 1.5) * 66}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.systemAdequacy)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        The calculator is a reduced teaching model. It does not estimate a real
        EU token price. It shows why token price is an outcome of the simulated
        system. Demand, policy routing, weather, capacity, clearing, allocation,
        and investment are updated in sequence.
      </p>
    </div>
  );
}

function TokenMathematicalModelArticle() {
  return (
    <div className="learning-article-shell">
      <nav className="learning-article-toc" aria-label="Module 4 contents">
        {equationArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
      <article className="learning-article-body">
        <section id="equation-learning-goals">
          <h3>1. Roadmap, Units, and Learning Goals</h3>
          <p className="learning-lede">
            This chapter specifies the mathematical model used by the token
            economics resource. The aim is to make the model reproducible. A
            reader should be able to start with a task, follow the conversion
            into service demand, identify the binding constraints, and then see
            how prices and welfare are computed.
          </p>
          <p>
            The central object is the model operator{" "}
            <InlineMath latex={String.raw`\Phi_{\theta}`} />. It is constructed
            in layers. First come the primitives: users, tasks, token classes,
            capacity, and policy rules. The feasible set then says which
            allocations can actually be delivered. Market-clearing and welfare
            equations translate feasible allocations into observable outcomes.
            The notation{" "}
            <InlineMath latex={String.raw`\Phi_{\theta}`} /> is reserved for
            that full mapping from assumptions to outcomes.
          </p>
          <p>
            The equilibrium logic follows standard mathematical economics: goods
            are indexed, agents have feasible sets and preferences, markets
            clear subject to constraints, and scarcity is represented by prices
            or shadow values. The spirit is close to the competitive equilibrium
            treatment of{" "}
            <CitationLink id="arrowDebreu1954">
              Arrow and Debreu (1954)
            </CitationLink>{" "}
            and the textbook formalism of{" "}
            <CitationLink id="masColell1995">
              Mas-Colell, Whinston, and Green (1995)
            </CitationLink>
            . In this project, the goods are AI-compute service claims. Their
            value depends on the task they serve, the model used, the region of
            delivery, and the legal rules that govern access.
          </p>
          <MathEquation
            title="Model sequence"
            latex={String.raw`\left(D_{i,u,t},v_{i,u,t}\right)\Rightarrow T^{svc}_{i,u,j,t}\Rightarrow A_t x_t\le K_t\Rightarrow \left(S_{j,t},\rho_{b,t},W_t\right)\Rightarrow C^{tok}_{T}(w)`}
            explanation="The model begins with task demand and task value, converts them into service-token demand, checks whether the resulting allocation is feasible, computes prices and welfare, and finally evaluates procurement risk."
            variables={[
              {
                symbol: String.raw`D_{i,u,t}`,
                meaning:
                  "desired task volume for agent i and use case u at date t",
              },
              {
                symbol: String.raw`v_{i,u,t}`,
                meaning:
                  "marginal value or inverse willingness to pay for the task",
              },
              {
                symbol: String.raw`T^{svc}_{i,u,j,t}`,
                meaning:
                  "service tokens of class j required by agent i for use case u",
              },
              {
                symbol: String.raw`x_t`,
                meaning: "vector of delivered service-token quantities",
              },
              {
                symbol: String.raw`A_t`,
                meaning:
                  "technology and routing matrix mapping token deliveries into bottleneck use",
              },
              {
                symbol: String.raw`K_t`,
                meaning:
                  "capacity vector for physical, contractual, grid, and compliance bottlenecks",
              },
              {
                symbol: String.raw`S_{j,t}`,
                meaning: "spot price of token class j",
              },
              {
                symbol: String.raw`\rho_{b,t}`,
                meaning: "shadow price or scarcity rent of bottleneck b",
              },
              {
                symbol: String.raw`W_t`,
                meaning: "period social welfare",
              },
              {
                symbol: String.raw`C^{tok}_{T}(w)`,
                meaning:
                  "future token procurement cost under portfolio and hedge choice w",
              },
            ]}
          />
          <p>
            The unit discipline is essential. A raw token is a tokenizer output,
            a service token is a metered unit of delivered model service, an
            effective token is a task-quality-adjusted service unit, and a
            solved task is the economic output. The model never assumes these
            four objects are identical.
          </p>
          <div className="equation-index-panel" aria-label="Equation index">
            <article className="equation-index-row">
              <header>
                <span>Model layer</span>
                <h4>Model Operator</h4>
                <p>
                  The outer map takes primitives and shocks as inputs and returns
                  the observable outcomes implied by the model.
                </p>
              </header>
              <div className="equation-index-variables">
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`\Phi_{\theta}`} />
                  </div>
                  <p>Outcome correspondence.</p>
                </div>
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`Y_t`} />
                  </div>
                  <p>Reported outcome vector.</p>
                </div>
              </div>
            </article>

            <article className="equation-index-row">
              <header>
                <span>Model layer</span>
                <h4>Task Demand</h4>
                <p>
                  Demand starts from the task an agent wants to complete. Token
                  demand appears only after that task has been routed through a
                  model-service technology.
                </p>
              </header>
              <div className="equation-index-variables">
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`D_{i,u,t}`} />
                  </div>
                  <p>Desired volume of task type u by agent i at date t.</p>
                </div>
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`P^{task}_{i,u,t}`} />
                  </div>
                  <p>Task-level willingness to pay.</p>
                </div>
              </div>
            </article>

            <article className="equation-index-row">
              <header>
                <span>Model layer</span>
                <h4>Quality Conversion</h4>
                <p>
                  A provider token becomes economically meaningful after it is
                  converted into expected solved-task service.
                </p>
              </header>
              <div className="equation-index-variables">
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`y_{j,u,t}`} />
                  </div>
                  <p>Expected solved-task yield of token class j.</p>
                </div>
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`Q^{eff}_{i,u,t}`} />
                  </div>
                  <p>Effective task-adjusted service.</p>
                </div>
              </div>
            </article>

            <article className="equation-index-row">
              <header>
                <span>Model layer</span>
                <h4>Capacity Feasibility</h4>
                <p>
                  This layer checks whether requested service can be delivered
                  through available compute, electricity, grid access, and
                  admissible regions.
                </p>
              </header>
              <div className="equation-index-variables">
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`x_t`} />
                  </div>
                  <p>Delivered service allocation.</p>
                </div>
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`K_t`} />
                  </div>
                  <p>Deliverable capacity vector.</p>
                </div>
              </div>
            </article>

            <article className="equation-index-row">
              <header>
                <span>Model layer</span>
                <h4>Market Clearing</h4>
                <p>
                  When feasible capacity is scarce, the model records unmet
                  demand and assigns shadow values to the binding bottlenecks.
                </p>
              </header>
              <div className="equation-index-variables">
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`U_{j,t}`} />
                  </div>
                  <p>Unmet token demand.</p>
                </div>
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`\rho_{b,t}`} />
                  </div>
                  <p>Bottleneck scarcity rent.</p>
                </div>
              </div>
            </article>

            <article className="equation-index-row">
              <header>
                <span>Model layer</span>
                <h4>Risk and Hedging</h4>
                <p>
                  The finance layer studies how future procurement costs move
                  across scenarios and how much tail risk remains after hedging.
                </p>
              </header>
              <div className="equation-index-variables">
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath latex={String.raw`\Sigma^{tok}_{t}`} />
                  </div>
                  <p>Token-price covariance matrix.</p>
                </div>
                <div className="equation-index-variable">
                  <div className="equation-index-symbol">
                    <InlineMath
                      latex={String.raw`\operatorname{CVaR}_{\alpha}`}
                    />
                  </div>
                  <p>Tail budget-risk functional.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define the model operator{" "}
                <InlineMath latex={String.raw`\Phi_{\theta}`} /> as a
                correspondence from primitives and state variables to outcomes.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define the vector of token classes rather than a single scalar
                token.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Convert raw service tokens into task-equivalent effective
                tokens.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Write demand, feasibility, clearing, welfare, and rationing
                equations with declared variables.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Represent weather, electricity, demand, policy, and capacity as
                stochastic state variables.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Formulate portfolio, hedge, token-budget-at-risk, and CVaR
                problems.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Map the equations to the variables used by the current
                agent-based simulator.
              </p>
            </article>
          </div>
        </section>

        <section id="equation-modeling-principle">
          <h3>2. Modeling Principle: Start from Tasks, Not Tokens</h3>
          <p>
            The model begins with economic tasks, because tasks are what create
            value. A law firm wants a reviewed contract, a hospital wants a
            triage summary, a public agency wants a decision-support document,
            and a software firm wants working code. Raw input and output tokens
            are intermediate technical units. They matter because they determine
            cost and capacity, but welfare is attached to tasks solved under
            quality, latency, compliance, and reliability constraints.
          </p>
          <p>
            This creates the central modeling distinction. The good traded in a
            possible AI-token market is not "one token" in the abstract. It is a
            specified service claim. The value of that claim depends on the
            stochastic transformation from service tokens into solved tasks.
            This is why the model treats tokens as a vector of differentiated
            assets or commodities rather than a homogeneous numeraire.
          </p>
          <MathEquation
            title="Task value and implied service-token requirement"
            latex={String.raw`B_{i,u,t}(q)=\int_{0}^{q}v_{i,u,t}(z)\,dz,\qquad T^{svc}_{i,u,j,t}(q)=\frac{q}{y_{j,u,t}}`}
            explanation="The first expression values q completed tasks. The second expression states how many service tokens of class j are needed in expectation to deliver q solved tasks of type u."
            variables={[
              {
                symbol: String.raw`B_{i,u,t}(q)`,
                meaning:
                  "gross benefit to agent i from q solved tasks of use case u at date t",
              },
              {
                symbol: String.raw`q`,
                meaning: "number of solved tasks being valued or delivered",
              },
              {
                symbol: String.raw`v_{i,u,t}(z)`,
                meaning:
                  "marginal value or inverse willingness to pay for the z-th solved task",
              },
              {
                symbol: String.raw`T^{svc}_{i,u,j,t}(q)`,
                meaning:
                  "expected service-token requirement when token class j is used to produce q solved tasks",
              },
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning:
                  "expected solved-task yield per service token for token class j and use case u",
              },
            ]}
          />
        </section>

        <section id="equation-phi-operator">
          <h3>3. The Model Operator: From Primitives to Outcomes</h3>
          <p>
            The symbol <InlineMath latex={String.raw`\Phi_{\theta}`} /> denotes
            the model operator. It is not a fitted curve and it is not a verbal
            summary. It is the mathematical object that takes primitives and a
            state of the world as inputs and returns the set of outcomes
            consistent with demand, quality conversion, feasibility, clearing,
            policy admissibility, stochastic shocks, and the selected rationing
            rule.
          </p>
          <p>
            The construction follows the logic of finite-dimensional
            mathematical economics. First define agents, goods, preferences,
            technologies, and constraints. Then define feasible allocations.
            Then define equilibrium or planner-selected allocations. Finally
            compute observable outcomes such as prices, scarcity rents, unmet
            demand, welfare, and risk measures. This is the same discipline used
            in competitive-equilibrium models such as{" "}
            <CitationLink id="arrowDebreu1954">
              Arrow and Debreu (1954)
            </CitationLink>{" "}
            and in the general equilibrium formalism presented by{" "}
            <CitationLink id="masColell1995">
              Mas-Colell, Whinston, and Green (1995)
            </CitationLink>
            , but the commodity space is specialized to heterogeneous AI-token
            service.
          </p>
          <MathEquation
            title="Primitive vector"
            latex={String.raw`\theta=\left(\mathcal I,\mathcal U,\mathcal J,\mathcal R,\mathcal B,\{B_{i,u,t}\},\{y_{j,u,t}\},C_t,A_t,K_t,\mathcal L_t,\Psi_t,\mathbb P\right)`}
            explanation="The parameter vector theta collects the primitives needed to construct the token economy."
            variables={[
              {
                symbol: String.raw`\theta`,
                meaning:
                  "primitive vector defining the mathematical model, before a scenario or shock is realized",
              },
              {
                symbol: String.raw`\mathcal I,\mathcal U,\mathcal J,\mathcal R,\mathcal B`,
                meaning:
                  "sets of agents, use cases, token classes, regions, and bottlenecks",
              },
              {
                symbol: String.raw`B_{i,u,t}`,
                meaning:
                  "benefit function for agent i and use case u at date t",
              },
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning:
                  "expected solved-task yield of token class j for use case u",
              },
              {
                symbol: String.raw`C_t`,
                meaning: "production and delivery cost functions",
              },
              {
                symbol: String.raw`A_t`,
                meaning:
                  "technology matrix mapping token deliveries into bottleneck usage",
              },
              {
                symbol: String.raw`K_t`,
                meaning: "capacity vector for all bottlenecks",
              },
              {
                symbol: String.raw`\mathcal L_t`,
                meaning:
                  "legal admissibility, certification, and policy-routing constraints",
              },
              {
                symbol: String.raw`\Psi_t`,
                meaning:
                  "selection rule used when several feasible market or rationing outcomes exist",
              },
              {
                symbol: String.raw`\mathbb P`,
                meaning:
                  "physical probability law for demand, weather, outage, electricity, and policy shocks",
              },
            ]}
          />
          <p>
            The primitive vector is deliberately large because token economics
            is not one market with one good. The researcher can simplify it, but
            simplification should be explicit. For example, the current
            simulator normalizes all token classes into one effective service
            unit, which is equivalent to replacing{" "}
            <InlineMath latex={String.raw`\mathcal J`} /> by a small set of
            local and flexible capacity pools and setting several yield
            adjustments equal to one.
          </p>
          <MathEquation
            title="Feasible allocation set"
            latex={String.raw`\mathcal X_t(X_t)=\left\{x\in\mathbb R_{+}^{|\mathcal I||\mathcal U||\mathcal J|}:\ A_t x\le K_t,\ x_{i,u,j}=0\ \mathrm{if}\ j\notin\mathcal J^{adm}_{i,u,t}\right\}`}
            explanation="The feasible set contains all nonnegative token-service allocations that respect physical capacity and legal admissibility."
            variables={[
              {
                symbol: String.raw`\mathcal X_t(X_t)`,
                meaning:
                  "set of feasible token allocations at date t, conditional on state X_t",
              },
              {
                symbol: String.raw`x`,
                meaning:
                  "allocation vector with entries x_{i,u,j}, the service delivered to agent i for use case u using token class j",
              },
              {
                symbol: String.raw`A_t x\le K_t`,
                meaning:
                  "capacity restrictions across GPU, data centre, grid, power, compliance, and regional bottlenecks",
              },
              {
                symbol: String.raw`\mathcal J^{adm}_{i,u,t}`,
                meaning:
                  "token classes legally and institutionally admissible for agent i and use case u",
              },
            ]}
          />
          <p>
            Once the feasible set exists, the model can be closed in two
            standard ways. A market formulation seeks prices and allocations
            satisfying individual optimality, market clearing, and
            complementarity conditions. A planner or policy-evaluation
            formulation selects an allocation by maximizing a welfare criterion
            subject to the same constraints. The current simulator is closer to
            the second approach when price caps and priority rationing bind,
            because it uses explicit allocation rules to decide which demand is
            served.
          </p>
          <MathEquation
            title="Welfare-selected allocation"
            latex={String.raw`x_t^{*}\in\operatorname*{arg\,max}_{x\in\mathcal X_t(X_t)}\left\{\sum_{i,u}B_{i,u,t}\!\left(q_{i,u}(x)\right)-\sum_{j}C_{j,t}(x_j)-L^{short}_{t}(x)-E^{ext}_{t}(x)+B^{res}_{t}(x)\right\}`}
            explanation="A welfare-selected allocation maximizes gross task value net of delivery cost, shortage losses, external costs, and resilience benefits."
            variables={[
              {
                symbol: String.raw`x_t^{*}`,
                meaning: "selected feasible token allocation at date t",
              },
              {
                symbol: String.raw`\operatorname*{arg\,max}`,
                meaning:
                  "set of allocations that maximize the displayed objective",
              },
              {
                symbol: String.raw`q_{i,u}(x)`,
                meaning:
                  "solved-task quantity produced for agent i and use case u by allocation x",
              },
              {
                symbol: String.raw`B_{i,u,t}`,
                meaning: "gross benefit from solved tasks",
              },
              {
                symbol: String.raw`C_{j,t}`,
                meaning: "cost of delivering token class j",
              },
              {
                symbol: String.raw`L^{short}_{t}`,
                meaning: "loss from unmet demand, queues, or degraded service",
              },
              {
                symbol: String.raw`E^{ext}_{t}`,
                meaning:
                  "external cost such as emissions, water stress, grid congestion, or reliability impacts",
              },
              {
                symbol: String.raw`B^{res}_{t}`,
                meaning:
                  "resilience, sovereignty, or public-service continuity benefit",
              },
            ]}
          />
          <p>
            The model operator can now be defined. It is best written as a
            correspondence rather than a single-valued function because several
            allocations may solve the same problem when agents are tied,
            rationing is proportional, or prices are capped. A deterministic
            simulator becomes a function only after a selection rule{" "}
            <InlineMath latex={String.raw`\Psi_t`} /> has been fixed.
          </p>
          <MathEquation
            title="Outcome correspondence"
            latex={String.raw`\Phi_{\theta}(X_t,z_t,\varepsilon_{t+1})=\left\{Y_t:\ \exists (x_t,S_t,\rho_t,U_t)\in\mathcal M_{\theta}(X_t,z_t,\varepsilon_{t+1})\ \mathrm{with}\ Y_t=H_{\theta}(X_t,x_t,S_t,\rho_t,U_t)\right\}`}
            explanation="The model operator returns all observable outcomes generated by allocations, prices, scarcity rents, and unmet demand that satisfy the model conditions."
            variables={[
              {
                symbol: String.raw`\Phi_{\theta}`,
                meaning:
                  "model operator or outcome correspondence induced by primitive vector theta",
              },
              {
                symbol: String.raw`X_t`,
                meaning: "state vector at date t",
              },
              {
                symbol: String.raw`z_t`,
                meaning: "scenario or policy configuration applied at date t",
              },
              {
                symbol: String.raw`\varepsilon_{t+1}`,
                meaning: "new stochastic shock vector",
              },
              {
                symbol: String.raw`Y_t`,
                meaning:
                  "observable outcome vector: prices, allocations, welfare, shortages, rents, emissions, and risk statistics",
              },
              {
                symbol: String.raw`\mathcal M_{\theta}`,
                meaning:
                  "set of allocations, prices, rents, and unmet-demand variables satisfying feasibility, clearing, and policy rules",
              },
              {
                symbol: String.raw`S_t`,
                meaning: "token price vector",
              },
              {
                symbol: String.raw`\rho_t`,
                meaning: "bottleneck scarcity-rent vector",
              },
              {
                symbol: String.raw`U_t`,
                meaning: "unmet-demand vector",
              },
              {
                symbol: String.raw`H_{\theta}`,
                meaning:
                  "measurement map converting internal model objects into reported outputs",
              },
            ]}
          />
          <table className="learning-table symbol-table">
            <thead>
              <tr>
                <th>Property</th>
                <th>Mathematical meaning</th>
                <th>Why it matters here</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nonempty feasible set</td>
                <td>
                  <InlineMath
                    latex={String.raw`\mathcal X_t(X_t)\ne\varnothing`}
                  />
                </td>
                <td>
                  The model must always permit at least the zero-allocation or a
                  clearly defined emergency allocation.
                </td>
              </tr>
              <tr>
                <td>Compactness</td>
                <td>
                  Feasible allocations are bounded by finite capacity and closed
                  legal constraints.
                </td>
                <td>A continuous welfare objective then attains a maximum.</td>
              </tr>
              <tr>
                <td>Continuity</td>
                <td>
                  Benefits, costs, yields, and measurement maps change
                  continuously in their arguments except at declared policy
                  thresholds.
                </td>
                <td>
                  Small input changes should not create unexplained jumps in
                  model output.
                </td>
              </tr>
              <tr>
                <td>Concavity or monotonicity</td>
                <td>
                  Marginal task value weakly falls and cost weakly rises with
                  delivered service.
                </td>
                <td>
                  This gives economically interpretable scarcity rents and
                  stable comparative statics.
                </td>
              </tr>
              <tr>
                <td>Selection rule</td>
                <td>
                  <InlineMath latex={String.raw`\Psi_t`} /> chooses one outcome
                  when <InlineMath latex={String.raw`\Phi_{\theta}`} /> is
                  multi-valued.
                </td>
                <td>
                  Priority rules, proportional rationing, and price caps become
                  reproducible rather than implicit.
                </td>
              </tr>
            </tbody>
          </table>
          <MathEquation
            title="Capacity monotonicity of the value function"
            latex={String.raw`K'_t\ge K_t\quad\Longrightarrow\quad V_{\theta}(X_t;K'_t)\ge V_{\theta}(X_t;K_t)`}
            explanation="If all else is fixed, relaxing capacity constraints cannot reduce the maximum attainable welfare value."
            variables={[
              {
                symbol: String.raw`K'_t\ge K_t`,
                meaning:
                  "every component of the alternative capacity vector is at least as large as the original capacity vector",
              },
              {
                symbol: String.raw`V_{\theta}(X_t;K_t)`,
                meaning:
                  "optimal value of the welfare-selection problem at state X_t with capacity vector K_t",
              },
            ]}
          />
          <MathEquation
            title="Shadow-value interpretation"
            latex={String.raw`\rho_{b,t}\in\partial_{K_{b,t}}V_{\theta}(X_t;K_t)`}
            explanation="When the value function is not differentiable, the bottleneck rent is interpreted as a subgradient: a marginal value of relaxing bottleneck b."
            variables={[
              {
                symbol: String.raw`\rho_{b,t}`,
                meaning: "scarcity rent of bottleneck b",
              },
              {
                symbol: String.raw`\partial_{K_{b,t}}V_{\theta}`,
                meaning:
                  "subdifferential of the value function with respect to capacity component K_{b,t}",
              },
              {
                symbol: String.raw`K_{b,t}`,
                meaning: "capacity of bottleneck b",
              },
            ]}
          />
          <p>
            In the web simulator, the mathematical correspondence is implemented
            as a selected computational map:
          </p>
          <MathEquation
            title="Simulator selection"
            latex={String.raw`\widehat Y_t=\widehat\Phi_{\theta}(X_t,z_t,\xi_{t+1})=H_{\theta}\!\left(X_t,\Psi_t\!\left(\mathcal M_{\theta}(X_t,z_t,\xi_{t+1})\right)\right)`}
            explanation="The simulator fixes a selection rule and random seed, then reports one outcome path from the underlying model correspondence."
            variables={[
              {
                symbol: String.raw`\widehat\Phi_{\theta}`,
                meaning:
                  "implemented single-valued simulator approximation to the theoretical correspondence",
              },
              {
                symbol: String.raw`\widehat Y_t`,
                meaning: "reported simulation outcome in period t",
              },
              {
                symbol: String.raw`\xi_{t+1}`,
                meaning: "pseudo-random innovation used by the simulation run",
              },
              {
                symbol: String.raw`\Psi_t`,
                meaning:
                  "implemented allocation and tie-breaking rule, such as public priority or proportional rationing",
              },
            ]}
          />
          <p>
            This distinction is essential for scientific interpretation. The
            theory defines the admissible outcome set. The simulator chooses a
            reproducible path through that set under a scenario and random seed.
            A strong empirical version of the project should test how sensitive
            conclusions are to the primitives, the selection rule, and the
            stochastic law.
          </p>
        </section>

        <section id="equation-primitives">
          <h3>4. Primitives and Index Sets</h3>
          <p>
            Let time be discrete in the simulator,{" "}
            <InlineMath latex={String.raw`t=0,1,\ldots,T`} />, while the
            mathematical finance layer may also be read in continuous time. The
            finite horizon is useful for policy experiments because grid
            investment, data-centre construction, procurement contracts, and
            regulation all operate with explicit lead times.
          </p>
          <table className="learning-table symbol-table">
            <thead>
              <tr>
                <th>Set</th>
                <th>Meaning</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\mathcal{I}`} />
                </td>
                <td>Economic agents</td>
                <td>Households, firms, public agencies, providers.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\mathcal{U}`} />
                </td>
                <td>Task or use-case classes</td>
                <td>Code generation, document review, customer support.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\mathcal{J}`} />
                </td>
                <td>Token contract classes</td>
                <td>Frontier reasoning, small model, EU-certified service.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\mathcal{R}`} />
                </td>
                <td>Regions or delivery pools</td>
                <td>EU local, allied, global, grid zone.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\mathcal{B}`} />
                </td>
                <td>Capacity bottlenecks</td>
                <td>GPU, data centre, grid, power contract, compliance.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\Omega`} />
                </td>
                <td>Uncertainty states</td>
                <td>Weather, demand, electricity, outage, policy shocks.</td>
              </tr>
            </tbody>
          </table>
          <MathEquation
            title="Stochastic economy"
            latex={String.raw`\mathcal{E}_t=\left(\mathcal{I},\mathcal{U},\mathcal{J},\mathcal{R},\mathcal{B},X_t,\mathcal{A}_t,\mathcal{P}_t\right)`}
            explanation="At each date the token economy is described by agents, tasks, token classes, regions, bottlenecks, state variables, feasible actions, and policy rules."
            variables={[
              {
                symbol: String.raw`\mathcal{E}_t`,
                meaning: "token economy at date t",
              },
              {
                symbol: String.raw`\mathcal{I},\mathcal{U},\mathcal{J},\mathcal{R},\mathcal{B}`,
                meaning:
                  "sets of agents, use cases, token classes, regions, and bottlenecks",
              },
              {
                symbol: String.raw`X_t`,
                meaning:
                  "state vector containing demand, technology, capacity, weather, electricity, and policy states",
              },
              {
                symbol: String.raw`\mathcal{A}_t`,
                meaning:
                  "feasible action correspondences for users, providers, investors, and regulators",
              },
              {
                symbol: String.raw`\mathcal{P}_t`,
                meaning:
                  "policy rules, legal admissibility rules, procurement rules, and certification regimes",
              },
            ]}
          />
        </section>

        <section id="equation-token-vector">
          <h3>5. The Vector of Token Classes</h3>
          <p>
            A token class must include more than provider and model name. It
            should identify the region, service quality, compliance class,
            latency class, reliability rule, and delivery window. This is the
            contract specification that prevents a model from comparing unlike
            units. The notation below deliberately resembles a commodity
            contract definition, because physical delivery conditions matter.
          </p>
          <MathEquation
            title="Token contract vector"
            latex={String.raw`j=(p,m,r,\kappa,\ell,\pi,\gamma,\tau)\in\mathcal{J}`}
            explanation="A token class is a contract-like object. Two classes are different if any economically relevant field differs."
            variables={[
              {
                symbol: String.raw`j`,
                meaning: "token contract class",
              },
              {
                symbol: String.raw`\mathcal{J}`,
                meaning: "set of admissible token contract classes",
              },
              { symbol: String.raw`p`, meaning: "provider or platform" },
              { symbol: String.raw`m`, meaning: "model or model family" },
              { symbol: String.raw`r`, meaning: "delivery region or pool" },
              {
                symbol: String.raw`\kappa`,
                meaning:
                  "billing unit: input, output, cached, batch, or reserved token",
              },
              { symbol: String.raw`\ell`, meaning: "latency class" },
              {
                symbol: String.raw`\pi`,
                meaning:
                  "privacy, residency, compliance, or certification class",
              },
              {
                symbol: String.raw`\gamma`,
                meaning:
                  "reliability, priority, interruption, or service-level rule",
              },
              {
                symbol: String.raw`\tau`,
                meaning: "delivery date, delivery window, or contract maturity",
              },
            ]}
          />
          <p>
            The vector price at date <InlineMath latex={String.raw`t`} /> is{" "}
            <InlineMath latex={String.raw`S_t=(S_{1,t},\ldots,S_{J,t})`} />. A
            posted price is not yet an economic price because it has not been
            adjusted for task yield. The economic price will be a task-adjusted
            price introduced below.
          </p>
        </section>

        <section id="equation-task-demand">
          <h3>6. Task Demand and Willingness to Pay</h3>
          <p>
            Demand is defined at the task level. Let{" "}
            <InlineMath latex={String.raw`D_{i,u,t}`} /> be the desired number
            of tasks of type <InlineMath latex={String.raw`u`} /> by agent{" "}
            <InlineMath latex={String.raw`i`} /> at time{" "}
            <InlineMath latex={String.raw`t`} /> before rationing. Let{" "}
            <InlineMath latex={String.raw`v_{i,u,t}(q)`} /> denote inverse
            willingness to pay for the marginal task. This permits both ordinary
            demand curves and public-service demand where the monetary
            willingness to pay is a shadow value rather than a private price.
          </p>
          <MathEquation
            title="Task-level demand"
            latex={String.raw`D_{i,u,t}=d_{i,u}\!\left(Y_{i,t},A_{i,u,t},P^{task}_{i,u,t},Z^{pol}_{i,t},\varepsilon^{D}_{i,u,t}\right)`}
            explanation="Desired task volume depends on income or output, AI adoption, task-adjusted price, policy state, and a demand shock."
            variables={[
              {
                symbol: String.raw`D_{i,u,t}`,
                meaning: "desired task volume for agent i and use case u",
              },
              {
                symbol: String.raw`d_{i,u}`,
                meaning: "task-demand function for agent i and use case u",
              },
              {
                symbol: String.raw`Y_{i,t}`,
                meaning: "income, scale, or output of agent i",
              },
              {
                symbol: String.raw`A_{i,u,t}`,
                meaning: "AI adoption or workflow automation intensity",
              },
              {
                symbol: String.raw`P^{task}_{i,u,t}`,
                meaning: "expected cost per solved task faced by the agent",
              },
              {
                symbol: String.raw`Z^{pol}_{i,t}`,
                meaning:
                  "policy, procurement, or compliance state affecting demand",
              },
              {
                symbol: String.raw`\varepsilon^{D}_{i,u,t}`,
                meaning: "idiosyncratic or aggregate task-demand shock",
              },
            ]}
          />
          <p>
            A fully structural demand model could use discrete-choice methods
            when agents choose among model-token classes. The logic is analogous
            to differentiated-product demand estimation as in{" "}
            <CitationLink id="berryLevinsohnPakes1995">
              Berry, Levinsohn, and Pakes (1995)
            </CitationLink>
            , although token markets require new observables such as task
            success, latency, reliability, and compliance class.
          </p>
        </section>

        <section id="equation-quality-yield">
          <h3>7. Quality-Adjusted Solved-Task Yield</h3>
          <p>
            The key conversion is from service tokens to solved tasks. Let{" "}
            <InlineMath latex={String.raw`y_{j,u,t}`} /> denote the expected
            number of solved tasks of type <InlineMath latex={String.raw`u`} />{" "}
            produced by one service token of class{" "}
            <InlineMath latex={String.raw`j`} />. The yield is expected because
            output length, model success, retries, verification, and human
            repair are stochastic.
          </p>
          <MathEquation
            title="Expected solved-task yield"
            latex={String.raw`y_{j,u,t}=\mathbb{E}_{t}\!\left[\frac{H_{j,u,t}}{T^{svc}_{j,u,t}}\right]`}
            explanation="Yield is the expected solved-task output per service token. A higher-quality model can have higher yield even if its raw token price is higher."
            variables={[
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning:
                  "expected solved-task yield for token class j and task u",
              },
              {
                symbol: String.raw`H_{j,u,t}`,
                meaning: "number or value of successfully solved tasks",
              },
              {
                symbol: String.raw`T^{svc}_{j,u,t}`,
                meaning: "visible and hidden service tokens consumed",
              },
            ]}
          />
          <MathEquation
            title="Effective service from a token allocation"
            latex={String.raw`Q^{eff}_{i,u,t}=\sum_{j\in\mathcal{J}_{i,u,t}}x_{i,u,j,t}\,y_{j,u,t}\,T^{svc}_{i,u,j,t}`}
            explanation="Effective service is a weighted sum of service tokens after task-specific quality conversion."
            variables={[
              {
                symbol: String.raw`Q^{eff}_{i,u,t}`,
                meaning:
                  "effective solved-task service delivered to agent i for task u",
              },
              {
                symbol: String.raw`\mathcal{J}_{i,u,t}`,
                meaning: "token classes admissible for agent i and task u",
              },
              {
                symbol: String.raw`x_{i,u,j,t}`,
                meaning:
                  "allocation share or routing intensity assigned to token class j",
              },
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning:
                  "expected solved-task yield per service token for token class j and use case u",
              },
              {
                symbol: String.raw`T^{svc}_{i,u,j,t}`,
                meaning: "service tokens consumed under token class j",
              },
            ]}
          />
          <p>
            The current simulator sets{" "}
            <InlineMath latex={String.raw`y_{j,u,t}=1`} /> after normalizing all
            demand into frontier-equivalent service units. That is a useful
            first approximation. A mature research version should estimate{" "}
            <InlineMath latex={String.raw`y_{j,u,t}`} /> from benchmark tasks,
            human evaluation, production telemetry, error repair rates, and
            observed substitution behavior.
          </p>
        </section>

        <section id="equation-effective-prices">
          <h3>8. Effective Prices and Task-Adjusted Spreads</h3>
          <p>
            Let <InlineMath latex={String.raw`S_{j,t}`} /> be the price of one
            service token of class <InlineMath latex={String.raw`j`} />. The
            cost per solved task for use case{" "}
            <InlineMath latex={String.raw`u`} /> divides by the expected yield
            and adds verification, latency, and expected error costs. This is
            the object that belongs in demand and risk management.
          </p>
          <MathEquation
            title="Task-adjusted effective price"
            latex={String.raw`P^{task}_{j,u,t}=\frac{S_{j,t}+C^{ver}_{j,u,t}+C^{lat}_{j,u,t}}{y_{j,u,t}}+C^{err}_{j,u,t}`}
            explanation="The effective task price can be high for a cheap model if its solved-task yield is low or if verification and error costs are high."
            variables={[
              {
                symbol: String.raw`P^{task}_{j,u,t}`,
                meaning: "task-adjusted effective price",
              },
              {
                symbol: String.raw`S_{j,t}`,
                meaning: "service-token spot price",
              },
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning:
                  "expected solved-task yield used to convert service-token cost into solved-task cost",
              },
              {
                symbol: String.raw`C^{ver}_{j,u,t}`,
                meaning: "verification and review cost per service token",
              },
              {
                symbol: String.raw`C^{lat}_{j,u,t}`,
                meaning: "latency or delay cost per service token",
              },
              {
                symbol: String.raw`C^{err}_{j,u,t}`,
                meaning: "expected residual error cost per solved task",
              },
            ]}
          />
          <MathEquation
            title="Task-adjusted spread"
            latex={String.raw`\Delta^{task}_{a,b,u,t}=P^{task}_{a,u,t}-P^{task}_{b,u,t}`}
            explanation="Spreads must compare effective task prices, not raw posted token prices."
            variables={[
              {
                symbol: String.raw`\Delta^{task}_{a,b,u,t}`,
                meaning: "spread between token classes a and b for use case u",
              },
              { symbol: String.raw`a,b`, meaning: "two token classes" },
              {
                symbol: String.raw`P^{task}_{a,u,t},P^{task}_{b,u,t}`,
                meaning:
                  "task-adjusted effective prices of token classes a and b",
              },
            ]}
          />
        </section>

        <section id="equation-feasibility">
          <h3>9. Capacity and Feasibility Constraints</h3>
          <p>
            Token service is constrained by physical and institutional
            bottlenecks. GPUs do not produce useful service without data-centre
            space, power contracts, grid connection, cooling, software
            operations, and legal eligibility. This is why the capacity set is
            represented by a matrix inequality.
          </p>
          <MathEquation
            title="Bottleneck feasibility"
            latex={String.raw`A_t x_t\le K_t,\qquad x_t\ge 0`}
            explanation="The vector of token deliveries must fit inside all bottleneck capacities."
            variables={[
              {
                symbol: String.raw`x_t`,
                meaning:
                  "vector of delivered service-token quantities by class",
              },
              {
                symbol: String.raw`A_t`,
                meaning:
                  "technology and routing matrix mapping token deliveries into bottleneck use",
              },
              {
                symbol: String.raw`K_t`,
                meaning:
                  "capacity vector for GPU, data centre, grid, power, compliance, and regional pools",
              },
            ]}
          />
          <MathEquation
            title="Regional token capacity"
            latex={String.raw`K^{tok}_{j,r,t}=\min\!\left\{K^{gpu}_{j,r,t},K^{dc}_{r,t},\frac{K^{grid}_{r,t}}{PUE_{r,t}e^{IT}_{j,r,t}},K^{pow}_{r,t},K^{comp}_{j,r,t}\right\}`}
            explanation="For a given class and region, delivered token capacity is the minimum of the relevant physical and compliance layers."
            variables={[
              {
                symbol: String.raw`K^{tok}_{j,r,t}`,
                meaning: "deliverable token capacity",
              },
              {
                symbol: String.raw`K^{gpu}_{j,r,t}`,
                meaning: "accelerator capacity layer",
              },
              {
                symbol: String.raw`K^{dc}_{r,t}`,
                meaning: "data-centre capacity layer",
              },
              {
                symbol: String.raw`K^{grid}_{r,t}`,
                meaning: "grid energy or power budget for AI service",
              },
              {
                symbol: String.raw`PUE_{r,t}`,
                meaning: "power usage effectiveness",
              },
              {
                symbol: String.raw`e^{IT}_{j,r,t}`,
                meaning: "IT energy per service token",
              },
              {
                symbol: String.raw`K^{pow}_{r,t}`,
                meaning: "contracted power capacity",
              },
              {
                symbol: String.raw`K^{comp}_{j,r,t}`,
                meaning: "legal or certified-compute capacity",
              },
            ]}
          />
          <p>
            The PUE term follows data-centre energy accounting standards such as{" "}
            <CitationLink id="iso3013422026">ISO/IEC 30134-2</CitationLink>.
            Data-centre energy magnitudes and efficiency trends should be
            calibrated against empirical energy-system literature such as{" "}
            <CitationLink id="masanet2020">Masanet et al. (2020)</CitationLink>{" "}
            and official energy-system analysis such as{" "}
            <CitationLink id="iea2025">IEA (2025)</CitationLink>.
          </p>
        </section>

        <section id="equation-clearing">
          <h3>10. Market Clearing, Rationing, and Scarcity Rents</h3>
          <p>
            A market-clearing condition equates delivered service tokens to
            feasible demand when prices are flexible and contracts are honored.
            If capacity binds, a shadow price appears. In a simulation, that
            shadow price may be represented as a scarcity rent, a queue, a
            rationing rule, a latency increase, or unmet demand.
          </p>
          <MathEquation
            title="Clearing with unmet demand"
            latex={String.raw`\sum_{i,u}T^{svc}_{i,u,j,t}=x_{j,t}+U_{j,t},\qquad 0\le x_{j,t}\le K^{tok}_{j,t},\qquad U_{j,t}\ge 0`}
            explanation="Demand for service tokens is either served or left unmet. Served demand cannot exceed deliverable capacity."
            variables={[
              {
                symbol: String.raw`T^{svc}_{i,u,j,t}`,
                meaning:
                  "service-token demand by agent i, use case u, and token class j",
              },
              { symbol: String.raw`x_{j,t}`, meaning: "served token quantity" },
              { symbol: String.raw`U_{j,t}`, meaning: "unmet token demand" },
              {
                symbol: String.raw`K^{tok}_{j,t}`,
                meaning: "deliverable capacity",
              },
            ]}
          />
          <MathEquation
            title="Capacity-rent complementarity"
            latex={String.raw`0\le \rho_{b,t}\ \perp\ K_{b,t}-(A_t x_t)_b\ge 0`}
            explanation="The bottleneck rent is positive only when the corresponding capacity constraint binds."
            variables={[
              {
                symbol: String.raw`\rho_{b,t}`,
                meaning: "scarcity rent or shadow price of bottleneck b",
              },
              {
                symbol: String.raw`K_{b,t}`,
                meaning: "available capacity of bottleneck b at date t",
              },
              {
                symbol: String.raw`(A_t x_t)_b`,
                meaning: "use of bottleneck b implied by token deliveries",
              },
            ]}
          />
          <p>
            Electricity markets are a special case because power is difficult to
            store, demand is weather-sensitive, and capacity constraints can
            bind sharply. The use of nonlinear scarcity rents is consistent with
            the electricity-forward literature, including{" "}
            <CitationLink id="bessembinderLemmon2002">
              Bessembinder and Lemmon (2002)
            </CitationLink>
            .
          </p>
        </section>

        <section id="equation-welfare">
          <h3>11. Welfare Accounting</h3>
          <p>
            Welfare is not the same as provider revenue. A policy can raise
            local prices and still increase resilience, or lower prices while
            increasing legal, climate, or geopolitical risk. The welfare
            function must therefore account for task benefits, production costs,
            externalities, shortages, and policy objectives.
          </p>
          <MathEquation
            title="Social welfare"
            latex={String.raw`W_t=\sum_{i,u}\int_{0}^{q_{i,u,t}}v_{i,u,t}(z)\,dz-\sum_{j}C_{j,t}(x_{j,t})-L^{short}_{t}-E^{ext}_{t}+B^{res}_{t}`}
            explanation="Welfare equals gross task value minus production cost, shortage loss, external costs, plus resilience benefits."
            variables={[
              {
                symbol: String.raw`W_t`,
                meaning: "period social welfare at date t",
              },
              {
                symbol: String.raw`q_{i,u,t}`,
                meaning: "served task volume for agent i and use case u",
              },
              {
                symbol: String.raw`v_{i,u,t}(z)`,
                meaning:
                  "marginal willingness to pay or social value of task z",
              },
              {
                symbol: String.raw`C_{j,t}`,
                meaning: "cost function for token class j",
              },
              {
                symbol: String.raw`x_{j,t}`,
                meaning: "served token quantity of class j",
              },
              {
                symbol: String.raw`L^{short}_{t}`,
                meaning:
                  "loss from unmet task demand, queues, or degraded service",
              },
              {
                symbol: String.raw`E^{ext}_{t}`,
                meaning:
                  "external cost from emissions, water stress, congestion, or reliability impacts",
              },
              {
                symbol: String.raw`B^{res}_{t}`,
                meaning:
                  "resilience, sovereignty, or public-service continuity benefit",
              },
            ]}
          />
          <p>
            This formulation is deliberately general. A private firm may set{" "}
            <InlineMath latex={String.raw`B^{res}_{t}=0`} /> and optimize profit
            or expected cost. A regulator may place high weight on public
            service continuity. A climate policy experiment may increase the
            external-cost term through carbon intensity and carbon price.
          </p>
        </section>

        <section id="equation-stochastic-state">
          <h3>12. Stochastic State Dynamics</h3>
          <p>
            The state vector collects the variables that move the token economy
            over time: adoption, task intensity, model efficiency, GPU supply,
            data-centre capacity, grid capacity, weather, electricity price,
            policy state, and provider reliability. The process below is the
            general Markov form used by the simulation logic.
          </p>
          <MathEquation
            title="Controlled stochastic state equation"
            latex={String.raw`X_{t+1}=f_{\theta}\!\left(X_t,a^{user}_t,a^{prov}_t,a^{grid}_t,a^{pol}_t,\varepsilon_{t+1}\right)`}
            explanation="Future states depend on the current state, actions by agents and policy makers, and stochastic shocks."
            variables={[
              { symbol: String.raw`X_t`, meaning: "state vector at date t" },
              {
                symbol: String.raw`f_{\theta}`,
                meaning:
                  "state-transition function indexed by structural parameters theta",
              },
              {
                symbol: String.raw`a^{user}_t`,
                meaning: "user adoption, routing, and procurement actions",
              },
              {
                symbol: String.raw`a^{prov}_t`,
                meaning:
                  "provider pricing, capacity, and model-release actions",
              },
              {
                symbol: String.raw`a^{grid}_t`,
                meaning: "grid investment and connection actions",
              },
              {
                symbol: String.raw`a^{pol}_t`,
                meaning: "policy, certification, subsidy, and priority actions",
              },
              {
                symbol: String.raw`\varepsilon_{t+1}`,
                meaning:
                  "innovation vector of demand, weather, outage, and policy shocks",
              },
              {
                symbol: String.raw`\theta`,
                meaning: "structural and calibration parameters",
              },
            ]}
          />
          <MathEquation
            title="Weather-sensitive electricity factor"
            latex={String.raw`\log P^{elec}_{r,t+1}=\alpha_r+\phi_r\log P^{elec}_{r,t}+\beta_r W_{r,t+1}+\eta_r G_{r,t+1}+\sigma_r \xi_{r,t+1}`}
            explanation="Electricity prices are modeled as stochastic and weather-sensitive, with grid stress as an additional driver."
            variables={[
              {
                symbol: String.raw`P^{elec}_{r,t}`,
                meaning: "electricity price in region r",
              },
              {
                symbol: String.raw`\alpha_r`,
                meaning:
                  "regional electricity-price intercept or seasonal baseline",
              },
              {
                symbol: String.raw`\phi_r`,
                meaning: "persistence coefficient for log electricity prices",
              },
              {
                symbol: String.raw`\beta_r,\eta_r`,
                meaning:
                  "regional sensitivities to weather stress and grid congestion",
              },
              {
                symbol: String.raw`W_{r,t+1}`,
                meaning:
                  "weather stress factor, such as heat, wind shortfall, or cooling load",
              },
              {
                symbol: String.raw`G_{r,t+1}`,
                meaning: "grid congestion or deliverability stress",
              },
              {
                symbol: String.raw`\xi_{r,t+1}`,
                meaning: "mean-zero electricity shock",
              },
              {
                symbol: String.raw`\sigma_r`,
                meaning: "regional volatility loading on the electricity shock",
              },
            ]}
          />
          <p>
            The commodity-price and energy-risk motivation follows{" "}
            <CitationLink id="schwartz1997">Schwartz (1997)</CitationLink> and
            energy-market texts such as{" "}
            <CitationLink id="eydelandWolyniec2003">
              Eydeland and Wolyniec (2003)
            </CitationLink>
            . The current ABM uses an interpretable discrete-time version rather
            than a full nodal power-market model.
          </p>
        </section>

        <section id="equation-risk-neutral">
          <h3>13. Pricing Kernel and Derivative Prices</h3>
          <p>
            If token capacity claims become tradable, derivative pricing must
            specify what is being delivered and under which probability measure
            prices are computed. The risk-neutral measure is not a statement
            that agents are risk neutral. It is the measure under which
            discounted traded payoffs are priced when markets are sufficiently
            complete for the relevant risks. In incomplete token markets,
            pricing intervals or utility-based prices may be more appropriate.
          </p>
          <MathEquation
            title="Stochastic discount factor"
            latex={String.raw`V_t(Y_{t+1})=\mathbb{E}_{t}\!\left[M_{t+1}Y_{t+1}\right]`}
            explanation="The time-t value of a one-period traded payoff is the conditional expectation of the payoff multiplied by the stochastic discount factor."
            variables={[
              {
                symbol: String.raw`V_t(Y_{t+1})`,
                meaning: "time-t value of the random payoff Y at t+1",
              },
              {
                symbol: String.raw`M_{t+1}`,
                meaning: "stochastic discount factor from t to t+1",
              },
              {
                symbol: String.raw`Y_{t+1}`,
                meaning:
                  "random payoff generated by a token claim, hedge, or settlement rule",
              },
            ]}
          />
          <MathEquation
            title="Value and forward price for a delivered token claim"
            latex={String.raw`V_{j,t}(T)=P(t,T)\mathbb{E}^{\mathbb{Q}}_{t}\!\left[S^{del}_{j,T}+\Delta^{del}_{j,T}\right],\qquad F_{j,t}(T)=\frac{V_{j,t}(T)}{P(t,T)}`}
            explanation="The present value discounts the risk-neutral expected settlement value. The forward price divides by the risk-free discount factor under the stated collateral and funding convention."
            variables={[
              {
                symbol: String.raw`V_{j,t}(T)`,
                meaning:
                  "time-t present value of a claim delivering token class j at T",
              },
              {
                symbol: String.raw`P(t,T)`,
                meaning:
                  "time-t price of a risk-free zero-coupon claim paying one at T",
              },
              {
                symbol: String.raw`F_{j,t}(T)`,
                meaning: "forward price at t for token class j delivered at T",
              },
              {
                symbol: String.raw`\mathbb{Q}`,
                meaning:
                  "risk-neutral pricing measure when an equivalent martingale measure exists",
              },
              {
                symbol: String.raw`S^{del}_{j,T}`,
                meaning:
                  "settlement price or delivery value of token class j at T",
              },
              {
                symbol: String.raw`\Delta^{del}_{j,T}`,
                meaning:
                  "delivery adjustment for outage, latency, quality, interruption, or cash settlement",
              },
            ]}
          />
          <p>
            The general asset-pricing background is treated in{" "}
            <CitationLink id="duffie2001">Duffie (2001)</CitationLink>. The
            mathematical point for this project is that derivative prices cannot
            be defined until the underlying service claim and settlement rule
            have been defined.
          </p>
        </section>

        <section id="equation-factor-risk">
          <h3>14. Factor Risk, Covariance, and Basis Risk</h3>
          <p>
            Token prices should not be modeled as independent random walks. They
            share common factors: GPU scarcity, electricity stress, weather,
            model-efficiency improvements, demand growth, provider market power,
            and policy restrictions. Hedging requires a covariance model, but
            covariance alone is not enough because basis risk also includes
            quality and legal non-substitutability.
          </p>
          <MathEquation
            title="Token price factor model"
            latex={String.raw`\Delta\log S^{eff}_{j,t+1}=\alpha_j+\beta_j^{\top}F_{t+1}+\epsilon_{j,t+1}`}
            explanation="Effective token-price changes are decomposed into common risk factors and idiosyncratic shocks."
            variables={[
              {
                symbol: String.raw`S^{eff}_{j,t}`,
                meaning: "effective token price for class j",
              },
              {
                symbol: String.raw`\alpha_j`,
                meaning:
                  "token-class intercept in the conditional return equation",
              },
              {
                symbol: String.raw`F_{t+1}`,
                meaning:
                  "vector of common factors: demand, electricity, capacity, policy, quality, outage",
              },
              {
                symbol: String.raw`\beta_j`,
                meaning: "factor loading vector for token class j",
              },
              {
                symbol: String.raw`\epsilon_{j,t+1}`,
                meaning: "idiosyncratic token-class shock",
              },
            ]}
          />
          <MathEquation
            title="Conditional covariance matrix"
            latex={String.raw`\Sigma^{tok}_{t}=\operatorname{Cov}_{t}\!\left(\Delta\log S^{eff}_{t+1}\right)`}
            explanation="The covariance matrix is the core input to diversification, hedge ratios, stress testing, and risk budgeting."
            variables={[
              {
                symbol: String.raw`\Sigma^{tok}_{t}`,
                meaning:
                  "conditional covariance matrix of effective token-price changes",
              },
              {
                symbol: String.raw`\operatorname{Cov}_{t}`,
                meaning:
                  "covariance conditional on information available at date t",
              },
              {
                symbol: String.raw`\Delta\log S^{eff}_{t+1}`,
                meaning: "vector of effective token-price log changes",
              },
            ]}
          />
        </section>

        <section id="equation-portfolio">
          <h3>15. Procurement, Hedging, and Tail-Risk Optimization</h3>
          <p>
            A token-dependent organization chooses spot usage, reserved
            capacity, fallback routes, and hedges. This is a portfolio problem
            with service constraints. The Markowitz tradition begins with{" "}
            <CitationLink id="markowitz1952">Markowitz (1952)</CitationLink>,
            but token procurement also needs tail-risk constraints because bad
            states can combine high demand, high electricity prices, grid
            congestion, and policy restrictions.
          </p>
          <MathEquation
            title="Expected-cost and risk objective"
            latex={String.raw`\min_{w\in\mathcal{W}_t}\ \mathbb{E}_{t}\!\left[C^{tok}_{T}(w)\right]+\lambda\,\operatorname{CVaR}_{\alpha,t}\!\left(C^{tok}_{T}(w)\right)`}
            explanation="The decision maker minimizes expected token cost plus a tail-risk penalty over admissible procurement and hedge portfolios."
            variables={[
              {
                symbol: String.raw`w`,
                meaning:
                  "portfolio of spot token use, reserved capacity, forwards, options, and fallback routes",
              },
              {
                symbol: String.raw`\mathcal{W}_t`,
                meaning:
                  "admissible portfolio set under budget, legal, and service constraints",
              },
              {
                symbol: String.raw`C^{tok}_{T}(w)`,
                meaning: "future token cost under portfolio w",
              },
              {
                symbol: String.raw`\lambda`,
                meaning: "risk-aversion or tail-risk penalty weight",
              },
              {
                symbol: String.raw`\operatorname{CVaR}_{\alpha,t}`,
                meaning: "conditional value-at-risk at level alpha",
              },
              {
                symbol: String.raw`\alpha`,
                meaning: "tail confidence level",
              },
            ]}
          />
          <MathEquation
            title="Rockafellar-Uryasev CVaR representation"
            latex={String.raw`\operatorname{CVaR}_{\alpha}(C)=\min_{\zeta\in\mathbb{R}}\left\{\zeta+\frac{1}{1-\alpha}\mathbb{E}\left[(C-\zeta)_{+}\right]\right\}`}
            explanation="This representation makes CVaR optimization tractable in scenario models."
            variables={[
              {
                symbol: String.raw`C`,
                meaning: "random token procurement cost",
              },
              {
                symbol: String.raw`\alpha`,
                meaning: "confidence level used to define the tail",
              },
              {
                symbol: String.raw`\zeta`,
                meaning: "auxiliary threshold variable",
              },
              { symbol: String.raw`(x)_+`, meaning: "positive part, max(x,0)" },
            ]}
          />
          <p>
            The CVaR formulation follows{" "}
            <CitationLink id="rockafellarUryasev2000">
              Rockafellar and Uryasev (2000)
            </CitationLink>
            . In token finance, the scenarios should include model-quality
            shocks, provider outages, capacity shortages, electricity spikes,
            and compliance restrictions. Ordinary price volatility is only one
            part of the loss distribution.
          </p>
        </section>

        <section id="equation-policy">
          <h3>16. Policy and Legal Admissibility Constraints</h3>
          <p>
            Policy enters the model in two different ways. First, it changes the
            feasible set: a workload may legally require certified, regional, or
            public-priority compute. Second, it changes state dynamics through
            subsidies, grid investment, permitting, carbon pricing, export
            controls, or allied-access agreements.
          </p>
          <MathEquation
            title="Legal admissibility set"
            latex={String.raw`\mathcal{J}_{i,u,t}^{adm}=\left\{j\in\mathcal{J}:\ A^{law}_{i,u,t}(j)=1\right\}`}
            explanation="Only legally admissible token classes can serve a regulated task."
            variables={[
              {
                symbol: String.raw`\mathcal{J}_{i,u,t}^{adm}`,
                meaning: "admissible token set for agent i and task u",
              },
              {
                symbol: String.raw`\mathcal{J}`,
                meaning: "full set of token contract classes",
              },
              {
                symbol: String.raw`j`,
                meaning: "candidate token contract class",
              },
              {
                symbol: String.raw`A^{law}_{i,u,t}(j)`,
                meaning:
                  "indicator equal to one when token class j satisfies legal, compliance, and procurement rules",
              },
            ]}
          />
          <MathEquation
            title="Policy-routed demand"
            latex={String.raw`T^{cert}_{i,u,t}=\lambda_{i,u,t}T^{svc}_{i,u,t},\qquad T^{flex}_{i,u,t}=(1-\lambda_{i,u,t})T^{svc}_{i,u,t}`}
            explanation="The policy routing share moves part of service-token demand into a constrained certified pool."
            variables={[
              {
                symbol: String.raw`T^{cert}_{i,u,t}`,
                meaning:
                  "service-token demand requiring certified or local compute",
              },
              {
                symbol: String.raw`T^{flex}_{i,u,t}`,
                meaning:
                  "service-token demand that can use flexible global or allied compute",
              },
              {
                symbol: String.raw`\lambda_{i,u,t}`,
                meaning: "policy routing share",
              },
              {
                symbol: String.raw`T^{svc}_{i,u,t}`,
                meaning:
                  "total service-token demand before splitting into certified and flexible pools",
              },
            ]}
          />
          <p>
            This is also where the Lucas critique matters. If a policy changes
            incentives, fixed behavioral parameters estimated before the policy
            may not remain valid. The caution originates in{" "}
            <CitationLink id="lucas1976">Lucas (1976)</CitationLink> and is
            especially relevant for AI-token markets because providers, users,
            and investors can adapt strategically to regulation.
          </p>
        </section>

        <section id="equation-calibration">
          <h3>17. Calibration and Identification</h3>
          <p>
            The model has structural parameters that cannot all be read from
            public data. Calibration should therefore separate observed facts,
            estimated parameters, and transparent scenario assumptions. The
            research standard should be: use measured data where possible,
            estimate when identification is plausible, and expose uncertain
            assumptions when proprietary information is missing.
          </p>
          <MathEquation
            title="Moment-matching calibration"
            latex={String.raw`\widehat{\theta}=\operatorname*{arg\,min}_{\theta\in\Theta}\left(\widehat m-m(\theta)\right)^{\top}W\left(\widehat m-m(\theta)\right)`}
            explanation="Parameters are chosen so simulated moments match empirical moments, with a weighting matrix W."
            variables={[
              {
                symbol: String.raw`\widehat{\theta}`,
                meaning: "calibrated parameter vector",
              },
              {
                symbol: String.raw`\theta`,
                meaning: "candidate structural parameter vector",
              },
              {
                symbol: String.raw`\widehat m`,
                meaning: "empirical moments from data",
              },
              {
                symbol: String.raw`m(\theta)`,
                meaning: "model-implied moments at parameter theta",
              },
              {
                symbol: String.raw`W`,
                meaning: "positive semidefinite weighting matrix",
              },
              {
                symbol: String.raw`\Theta`,
                meaning: "admissible parameter space",
              },
            ]}
          />
          <table className="learning-table">
            <thead>
              <tr>
                <th>Model object</th>
                <th>Data target</th>
                <th>Identification problem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task demand elasticity</td>
                <td>Usage response to price, latency, and quality changes.</td>
                <td>Posted prices may be endogenous to capacity and demand.</td>
              </tr>
              <tr>
                <td>Solved-task yield</td>
                <td>Benchmarks, human review, retries, repair costs.</td>
                <td>Benchmark tasks may not represent production tasks.</td>
              </tr>
              <tr>
                <td>Capacity conversion</td>
                <td>Tokens per accelerator-hour, PUE, utilization.</td>
                <td>Operational telemetry is often proprietary.</td>
              </tr>
              <tr>
                <td>Electricity pass-through</td>
                <td>Regional electricity prices and data-centre load.</td>
                <td>Power contracts can hide spot-price exposure.</td>
              </tr>
              <tr>
                <td>Policy routing</td>
                <td>
                  Procurement rules, sectoral regulation, compliance labels.
                </td>
                <td>Legal scope may be qualitative or change abruptly.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="equation-simulator-map">
          <h3>18. Mapping to the Simulator State Variables</h3>
          <p>
            The current ABM is a normalized version of this full vector model.
            It uses one effective token unit to focus on capacity, policy,
            electricity, and investment mechanisms. The table below explains how
            the theoretical variables map into the code and charts.
          </p>
          <table className="learning-table symbol-table">
            <thead>
              <tr>
                <th>Theory</th>
                <th>Simulator representation</th>
                <th>Current simplification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <InlineMath latex={String.raw`D_{i,u,t}`} />
                </td>
                <td>
                  Agent demand by household, firm, regulated firm, public
                  sector.
                </td>
                <td>Use cases are aggregated inside each agent class.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`y_{j,u,t}`} />
                </td>
                <td>Effective-token normalization.</td>
                <td>Set to one for the first release.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\lambda_{i,u,t}`} />
                </td>
                <td>Policy routing share by scenario.</td>
                <td>Scenario presets determine scope and timing.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`K^{tok}_{j,r,t}`} />
                </td>
                <td>
                  Minimum of GPU, data-centre, grid, allied/global capacity.
                </td>
                <td>Capacity layers are aggregated by region and scenario.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`P^{elec}_{r,t}`} />
                </td>
                <td>
                  Endogenous electricity path with load and weather terms.
                </td>
                <td>Stylized regional electricity-price process.</td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`\rho_{b,t}`} />
                </td>
                <td>GPU, data-centre, and grid scarcity-rent decomposition.</td>
                <td>
                  Rent attribution is diagnostic rather than market-cleared.
                </td>
              </tr>
              <tr>
                <td>
                  <InlineMath latex={String.raw`W_t`} />
                </td>
                <td>Welfare chart and unmet critical demand.</td>
                <td>Social weights are transparent scenario assumptions.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="equation-worked-example">
          <h3>19. Worked Example: When a Better Token Is Cheaper</h3>
          <p>
            Suppose a frontier model token costs{" "}
            <InlineMath latex={String.raw`0.06`} /> USD and has solved-task
            yield <InlineMath latex={String.raw`0.90`} />. A small model token
            costs <InlineMath latex={String.raw`0.02`} /> USD and has yield{" "}
            <InlineMath latex={String.raw`0.25`} />. Ignore error and
            verification costs for the moment. The task-adjusted prices are:
          </p>
          <MathEquation
            title="Task-adjusted price comparison"
            latex={String.raw`P^{task}_{F}=\frac{0.06}{0.90}=0.0667,\qquad P^{task}_{S}=\frac{0.02}{0.25}=0.0800`}
            explanation="The frontier token is more expensive per raw token but cheaper per solved task in this example."
            variables={[
              {
                symbol: String.raw`P^{task}_{F}`,
                meaning: "task-adjusted price of the frontier token",
              },
              {
                symbol: String.raw`P^{task}_{S}`,
                meaning: "task-adjusted price of the small-model token",
              },
            ]}
          />
          <p>
            Now add a policy constraint. If the frontier token is not admissible
            for a regulated task, the relevant feasible set removes it even if
            it is cheaper per solved task. This is the source of compliance
            basis risk: the best economic token may not be legally available for
            the task.
          </p>
        </section>

        <section id="equation-interactive-lab">
          <h3>
            20. Interactive Illustration: Demand, Capacity, and Tail Budget
          </h3>
          <p>
            The calculator below compresses the model into one token class so
            the reader can see the mechanics. Increasing solved-task yield
            lowers the service-token demand for a fixed task volume. Routing
            more demand into a certified pool reduces deliverable capacity.
            Electricity shocks raise marginal cost. Capacity stress creates a
            convex scarcity rent. Hedging reduces the illustrative tail budget
            but requires a premium.
          </p>
          <TokenEquationLab />
        </section>

        <section id="equation-limitations">
          <h3>21. Assumptions and Where the Model Can Improve</h3>
          <p>
            This mathematical model is a disciplined starting point, not a claim
            that token markets are already complete or perfectly competitive.
            Several assumptions should be treated as research hypotheses.
          </p>
          <div className="learning-two-column">
            <section>
              <h4>Market structure</h4>
              <p>
                Posted prices may be set by platforms with market power rather
                than by competitive clearing. A richer model should include
                industrial-organization behavior and strategic capacity
                investment.
              </p>
            </section>
            <section>
              <h4>Quality measurement</h4>
              <p>
                The solved-task yield is task-specific and difficult to observe.
                Benchmark governance is therefore central if token indices or
                derivatives are built on quality-adjusted units.
              </p>
            </section>
            <section>
              <h4>Policy invariance</h4>
              <p>
                Behavioral parameters may change after policy changes. Scenario
                analysis should therefore test alternative demand and investment
                responses rather than using one fixed elasticity.
              </p>
            </section>
            <section>
              <h4>Incomplete markets</h4>
              <p>
                Some risks may not be hedgeable, especially quality, compliance,
                outage, and geopolitical shocks. Risk-neutral prices should then
                be interpreted cautiously.
              </p>
            </section>
          </div>
        </section>

        <section id="equation-exercises">
          <h3>22. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Define two token classes that differ only by region and
              compliance. Explain why they may have different prices even if the
              underlying model is identical.
            </li>
            <li>
              Derive the task-adjusted price when verification cost and error
              cost are nonzero.
            </li>
            <li>
              In the bottleneck equation, explain why increasing{" "}
              <InlineMath latex={String.raw`K^{gpu}`} /> has no effect when{" "}
              <InlineMath latex={String.raw`K^{grid}`} /> is binding.
            </li>
            <li>
              Write the complementarity condition for a compliance-capacity
              constraint and interpret the shadow price.
            </li>
            <li>
              Formulate a CVaR procurement problem for a hospital that must use
              certified local compute for patient-facing AI tasks.
            </li>
            <li>
              Give one example of a policy that changes the feasible set and one
              example of a policy that changes state dynamics.
            </li>
            <li>
              Explain why an arithmetically cheap hedge can fail when
              task-quality basis risk is large.
            </li>
            <li>
              Propose three empirical moments that could identify solved-task
              yield for a coding assistant, and describe one identification
              threat.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 4</h3>
            <p>
              Citation identifiers are source-type specific: DOI links are used
              where assigned, official proceedings pages are used for published
              conference papers without DOI, arXiv is retained only for checked
              preprints, ISBNs are used for books, and institutional standards
              or reports are cited by issuer and document code.
            </p>
            <ol className="reference-list">
              {equationReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

function TokenAbmArchitectureArticle() {
  return (
    <div className="learning-article-shell">
      <nav className="learning-article-toc" aria-label="Module 5 contents">
        {abmArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>

      <article className="learning-article-body">
        <section id="abm-learning-goals">
          <h3>1. Roadmap and Learning Goals</h3>
          <p className="learning-lede">
            This module documents the agent-based analysis tool used in this
            resource. The tool is a transparent computational laboratory. It
            studies how heterogeneous AI-compute demand evolves under policy
            routing, grid bottlenecks, weather shocks, electricity prices, delayed
            capacity investment, and rationing.
          </p>
          <p>
            The chapter follows the ODD tradition for individual-based and
            agent-based models introduced by{" "}
            <CitationLink id="grimm2006">Grimm et al. (2006)</CitationLink> and
            updated by{" "}
            <CitationLink id="grimm2010">Grimm et al. (2010)</CitationLink>. The
            economic motivation comes from agent-based computational economics,
            where aggregate outcomes are generated from interacting agents
            rather than imposed by a representative agent; see{" "}
            <CitationLink id="tesfatsion2006">Tesfatsion (2006)</CitationLink>,{" "}
            <CitationLink id="bonabeau2002">Bonabeau (2002)</CitationLink>, and{" "}
            <CitationLink id="farmerFoley2009">
              Farmer and Foley (2009)
            </CitationLink>
            .
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Explain why token economics needs heterogeneous agents. Different
                users have different values, legal constraints, and tolerance for
                rationing.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                State the model scope, horizon, agent classes, state variables,
                and quarterly update schedule.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Derive the demand-routing, market-clearing, allocation, weather,
                and investment rules used by the current simulator.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Separate calibrated facts, stylized assumptions, stochastic
                scenarios, and empirical validation targets.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Use Monte Carlo, sensitivity analysis, and falsification tests
                to discipline scenario interpretation.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Understand why the ABM is a research instrument for mechanism
                analysis rather than an oracle for exact future prices.
              </p>
            </article>
          </div>
        </section>

        <section id="abm-why">
          <h3>2. Why an Agent-Based Model?</h3>
          <p>
            AI-token economics has several features that are difficult to
            compress into one aggregate equation. Users differ in willingness to
            pay, compliance constraints, latency sensitivity, tolerance for
            model error, and ability to substitute between token classes.
            Providers and data centres face capacity lead times, energy
            contracts, grid connection constraints, and model-specific quality
            uncertainty. Regulators can redirect demand into certified pools.
            Weather affects electricity prices and deliverable capacity. These
            mechanisms are inherently heterogeneous and path dependent.
          </p>
          <p>
            Agent-based modelling is useful when macro outcomes emerge from many
            local decisions, feedback loops, and constraints. This is the
            setting emphasized by{" "}
            <CitationLink id="millerPage2007">
              Miller and Page (2007)
            </CitationLink>{" "}
            for complex adaptive systems and by{" "}
            <CitationLink id="epstein2006">Epstein (2006)</CitationLink> for
            generative social science. The classic lesson from{" "}
            <CitationLink id="schelling1971">Schelling (1971)</CitationLink>,
            that simple local rules can produce non-obvious aggregate structure,
            is directly relevant to token markets: local procurement and routing
            rules can generate systemic shortages even when average capacity
            appears adequate.
          </p>
          <MathEquation
            title="ABM object of study"
            latex={String.raw`Y_t=\Gamma_{\vartheta}\!\left(X_t,\{a_{i,t}\}_{i\in\mathcal A},\varepsilon_t\right)`}
            explanation="The ABM studies observable outcomes generated by a state vector, heterogeneous agent decisions, stochastic shocks, and a fixed simulation schedule."
            variables={[
              {
                symbol: String.raw`Y_t`,
                meaning:
                  "observable outcome vector at date t: token prices, allocations, shortages, electricity prices, welfare, and vulnerability metrics",
              },
              {
                symbol: String.raw`\Gamma_{\vartheta}`,
                meaning:
                  "implemented ABM transition-and-measurement operator with parameter vector vartheta",
              },
              {
                symbol: String.raw`a_{i,t}`,
                meaning:
                  "action or decision of agent i at date t, such as demand, routing, or investment",
              },
              {
                symbol: String.raw`\mathcal A`,
                meaning: "set of agents or representative agent classes",
              },
              {
                symbol: String.raw`X_t`,
                meaning: "model state vector before the period update",
              },
              {
                symbol: String.raw`\varepsilon_t`,
                meaning:
                  "stochastic shocks in the period, especially weather and demand shocks",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example interpretation: if a policy raises local-compute routing
              for regulated firms, the agent actions{" "}
              <InlineMath latex={String.raw`a_{i,t}`} /> change even when the
              physical state <InlineMath latex={String.raw`X_t`} /> is
              unchanged. The operator{" "}
              <InlineMath latex={String.raw`\Gamma_{\vartheta}`} /> then
              recomputes local demand, electricity stress, clearing prices,
              rationing, and welfare. This is why the ABM is a mechanism model:
              aggregate outcomes are generated by rules, not imposed directly.
            </p>
          </div>
        </section>

        <section id="abm-odd">
          <h3>3. ODD Protocol: Overview, Design Concepts, Details</h3>
          <p>
            A credible ABM must be documented in a form that lets another
            researcher reproduce the logic. The ODD protocol separates a model
            description into Overview, Design concepts, and Details. The present
            simulator uses ODD as a documentation discipline even though the
            application is written as a web-based research tool rather than a
            traditional standalone simulation package.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>ODD component</th>
                <th>Token-economics interpretation</th>
                <th>Implemented documentation target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Purpose</td>
                <td>
                  Study mechanisms linking token demand, policy, energy, and
                  capacity.
                </td>
                <td>Scenario outputs are interpreted as mechanism evidence.</td>
              </tr>
              <tr>
                <td>Entities</td>
                <td>
                  Users, providers, data centres, grid zones, regulators, and
                  investors.
                </td>
                <td>
                  Current code uses five demand classes and seven electricity
                  zones.
                </td>
              </tr>
              <tr>
                <td>State variables</td>
                <td>
                  Demand, capacity, electricity price, policy state, weather,
                  scarcity, welfare.
                </td>
                <td>
                  Stored in quarterly simulation records and charted in the UI.
                </td>
              </tr>
              <tr>
                <td>Process overview</td>
                <td>
                  Demand forms, policy routes demand, weather and capacity
                  affect costs, markets clear, investment updates capacity.
                </td>
                <td>
                  The simulator executes this sequence once per quarterly tick.
                </td>
              </tr>
              <tr>
                <td>Submodels</td>
                <td>
                  Adoption, electricity, token clearing, allocation, investment,
                  welfare, vulnerability.
                </td>
                <td>
                  Each submodel is exposed below with equations and units.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="abm-scope">
          <h3>4. Scope, Horizon, and Interpretation</h3>
          <p>
            The current simulator runs from 2026 through 2035 in quarterly
            steps. With <InlineMath latex={String.raw`\Delta=1/4`} /> years, the
            default horizon contains <InlineMath latex={String.raw`36`} />{" "}
            updates. This horizon is long enough for data-centre investment,
            permitting, grid expansion, and AI adoption to interact, but short
            enough for scenario assumptions to remain interpretable.
          </p>
          <p>
            A simulation path is not a forecast. It is a conditional mechanism
            experiment. The correct reading is: if the scenario assumptions and
            behavioral rules were approximately valid, what patterns would the
            model generate? That distinction protects the model from
            overclaiming empirical precision and is central for policy use.
          </p>
          <MathEquation
            title="Discrete quarterly transition"
            latex={String.raw`X_{t+\Delta}=G_{\theta}\!\left(X_t,a_t,\varepsilon_{t+\Delta}\right),\qquad \Delta=\frac{1}{4}`}
            explanation="Each quarter the state is updated by the simulator schedule. Conditional on the present state, decisions, and realized shocks, the next state is determined."
            variables={[
              {
                symbol: String.raw`X_t`,
                meaning: "state vector at the start of quarter t",
              },
              {
                symbol: String.raw`X_{t+\Delta}`,
                meaning: "state vector at the next quarterly date",
              },
              {
                symbol: String.raw`G_{\theta}`,
                meaning:
                  "simulator transition function with parameter vector theta",
              },
              {
                symbol: String.raw`a_t`,
                meaning:
                  "vector of agent decisions during the quarter, including demand and investment",
              },
              {
                symbol: String.raw`\varepsilon_{t+\Delta}`,
                meaning: "new exogenous shocks realized during the quarter",
              },
              {
                symbol: String.raw`\Delta`,
                meaning: "time step measured in years",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example interpretation: suppose a grid project is scheduled to
              become active in 2029 Q1. Before that quarter, it belongs to the
              investment-pipeline component of{" "}
              <InlineMath latex={String.raw`X_t`} />. When the schedule reaches
              the ready date, <InlineMath latex={String.raw`G_{\theta}`} />{" "}
              moves it into deliverable capacity{" "}
              <InlineMath latex={String.raw`K_t`} />. This is why the horizon
              and quarterly timing are part of the economics, not merely UI
              metadata.
            </p>
          </div>
        </section>

        <section id="abm-agents">
          <h3>5. Agents and Economic Roles</h3>
          <p>
            The implemented simulator currently represents demand through five
            classes: consumers, regulated firms, unregulated firms and SMEs,
            public-sector users, and AI-provider internal compute. These classes
            differ by adoption, criticality, price sensitivity, and policy
            exposure. The research design is broader: later versions should
            separate model providers, data-centre operators, grid operators,
            investors, regulators, and token intermediaries as strategic
            decision makers.
          </p>
          <MathEquation
            title="Agent partition"
            latex={String.raw`\mathcal A=\mathcal A^{\mathrm{use}}\dot\cup\mathcal A^{\mathrm{infra}}\dot\cup\mathcal A^{\mathrm{pol}}\dot\cup\mathcal A^{\mathrm{fin}}`}
            explanation="The full research model partitions agents into disjoint role classes. The dotted union states that each modeled decision maker is assigned to one primary role."
            variables={[
              {
                symbol: String.raw`\mathcal A`,
                meaning: "full set of agents in the ABM",
              },
              {
                symbol: String.raw`\mathcal A^{\mathrm{use}}`,
                meaning:
                  "users of token service, such as households, firms, regulated firms, and public agencies",
              },
              {
                symbol: String.raw`\mathcal A^{\mathrm{infra}}`,
                meaning:
                  "infrastructure actors, including model providers, data centres, and grid operators",
              },
              {
                symbol: String.raw`\mathcal A^{\mathrm{pol}}`,
                meaning:
                  "policy actors, such as regulators, procurement authorities, and public planners",
              },
              {
                symbol: String.raw`\mathcal A^{\mathrm{fin}}`,
                meaning:
                  "financial actors, such as token intermediaries, hedgers, and investors",
              },
              {
                symbol: String.raw`\dot\cup`,
                meaning:
                  "disjoint union; the role classes do not overlap in the mathematical bookkeeping",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example interpretation: a cloud company could be both an AI user
              and an infrastructure owner in reality. In the first mathematical
              model it should be represented by two role-specific agents, one in{" "}
              <InlineMath latex={String.raw`\mathcal A^{\mathrm{use}}`} /> and
              one in{" "}
              <InlineMath latex={String.raw`\mathcal A^{\mathrm{infra}}`} />, or
              by one richer strategic agent in a later extension. The disjoint
              partition keeps the first version auditable.
            </p>
          </div>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Agent class</th>
                <th>Current implementation</th>
                <th>Research extension</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Households and consumers</td>
                <td>Demand class with adoption and price sensitivity.</td>
                <td>
                  Income heterogeneity, subscription budgets, welfare loss.
                </td>
              </tr>
              <tr>
                <td>Regulated firms</td>
                <td>Demand class with high local-compliance routing.</td>
                <td>
                  Sector-specific legal admissibility and service-criticality.
                </td>
              </tr>
              <tr>
                <td>Public agencies</td>
                <td>Demand class with public-priority policy treatment.</td>
                <td>
                  Procurement reserves, emergency priority, and sovereign risk.
                </td>
              </tr>
              <tr>
                <td>Model providers</td>
                <td>Represented through available token capacity.</td>
                <td>
                  Strategic pricing, quality investment, reliability, outages.
                </td>
              </tr>
              <tr>
                <td>Data centres and grid operators</td>
                <td>Capacity layers and electricity zones.</td>
                <td>
                  Site choice, grid connection queues, power contracts, cooling.
                </td>
              </tr>
              <tr>
                <td>Financial intermediaries</td>
                <td>Not yet strategic in the simulation core.</td>
                <td>
                  Forward hedging, index products, basis risk, margin calls.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="abm-state">
          <h3>6. State Variables</h3>
          <p>
            A state variable is a quantity that must be remembered from one
            quarter to the next. The state includes economic demand, physical
            infrastructure, electricity zones, stochastic weather stress, policy
            settings, and investment already under construction.
          </p>
          <MathEquation
            title="Simulation state vector"
            latex={String.raw`X_t=\left(D_t,K_t,P^{\mathrm{elec}}_t,\mathcal W_t,Z^{\mathrm{pol}}_t,B_t,I_t,R_t\right)`}
            explanation="The state vector collects demand, capacity, electricity prices, weather, policy, bottleneck values, investment pipeline, and outcome records."
            variables={[
              {
                symbol: String.raw`D_t`,
                meaning: "demand state by agent class and token pool",
              },
              {
                symbol: String.raw`K_t`,
                meaning:
                  "capacity state across GPUs, data centres, grid connection, allied supply, and global supply",
              },
              {
                symbol: String.raw`P^{\mathrm{elec}}_t`,
                meaning: "regional electricity-price vector",
              },
              {
                symbol: String.raw`\mathcal W_t`,
                meaning:
                  "weather-stress state, not to be confused with welfare",
              },
              {
                symbol: String.raw`Z^{\mathrm{pol}}_t`,
                meaning: "policy state and routing rules in force at date t",
              },
              {
                symbol: String.raw`B_t`,
                meaning:
                  "bottleneck diagnostics and scarcity-rent decomposition",
              },
              {
                symbol: String.raw`I_t`,
                meaning:
                  "investment pipeline with capacity additions scheduled for future dates",
              },
              {
                symbol: String.raw`R_t`,
                meaning:
                  "simulation records used for charts, welfare metrics, and vulnerability scores",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example interpretation: if a heat wave raises the weather state{" "}
              <InlineMath latex={String.raw`\mathcal W_t`} />, the same token
              demand <InlineMath latex={String.raw`D_t`} /> may become more
              expensive to serve because cooling load and regional electricity
              prices rise. If a new grid connection enters{" "}
              <InlineMath latex={String.raw`K_t`} />, the same demand may create
              less scarcity even when adoption is unchanged.
            </p>
          </div>
        </section>

        <section id="abm-schedule">
          <h3>7. Quarterly Schedule</h3>
          <p>
            The order of updates matters. If weather affects electricity before
            token markets clear, then token prices reflect weather stress in the
            same quarter. If investment has a construction delay, then high
            prices today raise future capacity rather than current capacity. The
            ABM therefore uses a schedule rather than a single simultaneous
            formula.
          </p>
          <ol className="learning-exercise-list">
            <li>Activate capacity projects whose ready date has arrived.</li>
            <li>
              Update technology, efficiency, and power-usage-effectiveness
              assumptions.
            </li>
            <li>
              Compute regional capacity layers: GPU, data-centre, grid,
              contract, local, allied, and global.
            </li>
            <li>
              Build demand slices by agent class and route demand into local and
              flexible pools according to policy.
            </li>
            <li>
              Sample weather stress and update regional electricity prices.
            </li>
            <li>
              Convert electricity and capacity conditions into token supply
              costs.
            </li>
            <li>
              Clear local and flexible token markets under capacity and price
              caps.
            </li>
            <li>
              Allocate scarce token service, including public-priority rules
              when the scenario activates them.
            </li>
            <li>
              Compute prices, shortages, welfare, vulnerability, emissions, and
              bottleneck attribution.
            </li>
            <li>
              Form investment signals and add delayed capacity projects to the
              pipeline.
            </li>
          </ol>
        </section>

        <section id="abm-demand-routing">
          <h3>8. Demand Formation and Policy Routing</h3>
          <p>
            Demand begins with an agent-class baseline and grows with adoption,
            workflow deepening, and economic intensity. Policy can then route a
            share of this demand into a local or certified pool. The important
            distinction is legal rather than arithmetic. Policy changes which
            capacity set is admissible for a given task.
          </p>
          <MathEquation
            title="Demand split"
            latex={String.raw`\begin{aligned}
Q^{0}_{i,t}&=b_i M_{i,t},\\
L_{i,t}&=\lambda_i\!\left(Z^{\mathrm{pol}}_t\right)Q^{0}_{i,t},\qquad
F_{i,t}=\left(1-\lambda_i\!\left(Z^{\mathrm{pol}}_t\right)\right)Q^{0}_{i,t},\\
0&\le \lambda_i\!\left(Z^{\mathrm{pol}}_t\right)\le 1.
\end{aligned}`}
            explanation="Raw desired demand is split into local or certified demand and flexible demand. The routing share is constrained to lie between zero and one."
            variables={[
              {
                symbol: String.raw`Q^{0}_{i,t}`,
                meaning: "desired service-token demand of agent class i",
              },
              {
                symbol: String.raw`b_i`,
                meaning: "baseline demand scale for agent class i",
              },
              {
                symbol: String.raw`M_{i,t}`,
                meaning:
                  "adoption, workflow-depth, and macro-intensity multiplier",
              },
              {
                symbol: String.raw`L_{i,t}`,
                meaning:
                  "demand from agent class i routed to local or certified capacity",
              },
              {
                symbol: String.raw`F_{i,t}`,
                meaning:
                  "demand from agent class i allowed to use flexible capacity",
              },
              {
                symbol: String.raw`\lambda_i(Z^{\mathrm{pol}}_t)`,
                meaning: "policy-dependent routing share for agent class i",
              },
              {
                symbol: String.raw`Z^{\mathrm{pol}}_t`,
                meaning: "policy state at date t",
              },
            ]}
          />
          <p>
            A regulated firm may have a high{" "}
            <InlineMath latex={String.raw`\lambda_i`} /> because sensitive data
            must remain in a certified environment. An ordinary consumer may
            have a lower value because many tasks can use global capacity. This
            heterogeneity is one reason an ABM is more informative than a single
            aggregate routing parameter.
          </p>
          <div className="learning-example-card">
            <p>
              Example: suppose a regulated firm has raw quarterly demand{" "}
              <InlineMath latex={String.raw`Q^0_{i,t}=100`} /> service units and
              the policy state implies{" "}
              <InlineMath latex={String.raw`\lambda_i=0.6`} />. Then{" "}
              <InlineMath latex={String.raw`L_{i,t}=60`} /> units must be served
              by local or certified capacity, while{" "}
              <InlineMath latex={String.raw`F_{i,t}=40`} /> units may use
              flexible global capacity. The same total demand therefore creates
              different scarcity depending on the legal routing rule.
            </p>
          </div>
        </section>

        <section id="abm-markets">
          <h3>9. Electricity and Token Markets</h3>
          <p>
            Electricity prices are endogenous in the simulation in the limited
            but important sense that they respond to load, congestion, and
            stochastic weather stress. They are not fully endogenous power
            system equilibrium prices. This distinction should be explicit: the
            simulator uses a reduced-form electricity module, not a unit
            commitment or power-flow model.
          </p>
          <MathEquation
            title="Reduced-form electricity price"
            latex={String.raw`P^{\mathrm{elec}}_{z,t}=P^{0}_{z,t}\exp\!\left(\alpha_z \ell_{z,t}+\gamma_z c_{z,t}+\omega_z w_{z,t}\right)`}
            explanation="Regional electricity price is a positive baseline price multiplied by an exponential load, congestion, and weather stress factor."
            variables={[
              {
                symbol: String.raw`P^{\mathrm{elec}}_{z,t}`,
                meaning: "electricity price in zone z at date t",
              },
              {
                symbol: String.raw`P^{0}_{z,t}`,
                meaning:
                  "baseline seasonal or scenario electricity price in zone z",
              },
              {
                symbol: String.raw`\ell_{z,t}`,
                meaning: "normalized load pressure in zone z",
              },
              {
                symbol: String.raw`c_{z,t}`,
                meaning: "normalized congestion pressure in zone z",
              },
              {
                symbol: String.raw`w_{z,t}`,
                meaning: "weather-stress realization in zone z",
              },
              {
                symbol: String.raw`\alpha_z,\gamma_z,\omega_z`,
                meaning:
                  "zone-specific load, congestion, and weather pass-through coefficients",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              The exponential form is used because electricity prices cannot
              become negative in this reduced-form module. If the weighted
              stress index{" "}
              <InlineMath
                latex={String.raw`\alpha_z\ell_{z,t}+\gamma_z c_{z,t}+\omega_z w_{z,t}`}
              />{" "}
              equals <InlineMath latex={String.raw`0.10`} />, then{" "}
              <InlineMath latex={String.raw`\exp(0.10)\approx 1.105`} /> and the
              simulated electricity price is about{" "}
              <InlineMath latex={String.raw`10.5\%`} /> above its seasonal
              baseline.
            </p>
          </div>
          <p>
            Token markets then clear against deliverable capacity. If desired
            demand at the normal price fits within capacity, the market remains
            unconstrained. If demand exceeds capacity, the market raises the
            scarcity price until demand is reduced to capacity, unless a price
            cap binds and rationing is required.
          </p>
          <MathEquation
            title="Capacity-constrained token clearing"
            latex={String.raw`\begin{aligned}
D_j(S)&=D^0_j\left(\frac{S}{S^0_j}\right)^{-\epsilon_j},\\
\widetilde S_j&=S^0_j\left(\frac{D^0_j}{K_j}\right)^{1/\epsilon_j},\\
S^*_j&=\min\{\bar S_j,\max\{S^0_j,\widetilde S_j\}\},\\
x^*_j&=\min\{K_j,D_j(S^*_j)\},\qquad U^*_j=\max\{0,D_j(S^*_j)-K_j\}.
\end{aligned}`}
            explanation="Demand for token class j falls with price elasticity epsilon_j. The unconstrained scarcity price is compared with the reference price and the price cap; if the cap binds, the remaining excess demand is rationed."
            variables={[
              {
                symbol: String.raw`D_j(S)`,
                meaning: "price-sensitive demand for token class j at price S",
              },
              {
                symbol: String.raw`D^0_j`,
                meaning: "unconstrained demand at the normal price",
              },
              {
                symbol: String.raw`\widetilde S_j`,
                meaning:
                  "uncapped scarcity price that would make demand equal capacity when K_j is below D^0_j",
              },
              {
                symbol: String.raw`S`,
                meaning: "candidate token price",
              },
              {
                symbol: String.raw`S^0_j`,
                meaning: "normal or reference price for token class j",
              },
              {
                symbol: String.raw`\epsilon_j`,
                meaning: "absolute demand elasticity for token class j",
              },
              {
                symbol: String.raw`S^*_j`,
                meaning: "market-clearing token price for token class j",
              },
              {
                symbol: String.raw`\bar S_j`,
                meaning:
                  "price cap or maximum permitted token price, assumed to satisfy bar S_j >= S^0_j",
              },
              {
                symbol: String.raw`K_j`,
                meaning: "deliverable capacity for token class j",
              },
              {
                symbol: String.raw`x^*_j`,
                meaning: "served quantity of token class j",
              },
              {
                symbol: String.raw`U^*_j`,
                meaning:
                  "unmet demand for token class j after pricing and rationing",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: if desired demand is{" "}
              <InlineMath latex={String.raw`D^0_j=120`} />, capacity is{" "}
              <InlineMath latex={String.raw`K_j=100`} />, the reference price is{" "}
              <InlineMath latex={String.raw`S^0_j=0.10`} />, and elasticity is{" "}
              <InlineMath latex={String.raw`\epsilon_j=2`} />, then the uncapped
              scarcity price is{" "}
              <InlineMath
                latex={String.raw`\widetilde S_j=0.10(1.2)^{1/2}\approx 0.1095`}
              />
              . If the cap is below this value, the model records rationing;
              otherwise price adjustment clears demand to capacity.
            </p>
          </div>
          <p>
            The displayed clearing rule assumes{" "}
            <InlineMath latex={String.raw`K_j>0`} />. If deliverable capacity is
            zero, the boundary convention is{" "}
            <InlineMath latex={String.raw`x^*_j=0`} /> and{" "}
            <InlineMath latex={String.raw`U^*_j=D_j(\bar S_j)`} />: the model
            records a complete service outage at the capped price.
          </p>
        </section>

        <section id="abm-allocation">
          <h3>10. Allocation and Rationing</h3>
          <p>
            When capacity is scarce and the price cap binds, the model must
            allocate fewer tokens than agents want. Allocation is therefore not
            a cosmetic detail; it determines welfare losses, distributional
            effects, and political exposure. The current simulator uses
            proportional allocation with optional public-sector priority.
          </p>
          <MathEquation
            title="Priority-adjusted rationing"
            latex={String.raw`\begin{aligned}
d^P_{i,t}&=p_{i,t}d_{i,t},\qquad d^N_{i,t}=(1-p_{i,t})d_{i,t},\\
x^P_{i,t}&=d^P_{i,t}\min\!\left\{1,\frac{K_t}{\sum_k d^P_{k,t}}\right\},\\
K^N_t&=\left(K_t-\sum_k x^P_{k,t}\right)_+,\\
x^N_{i,t}&=d^N_{i,t}\min\!\left\{1,\frac{K^N_t}{\sum_k d^N_{k,t}}\right\},\qquad
x_{i,t}=x^P_{i,t}+x^N_{i,t}.
\end{aligned}`}
            explanation="Demand is divided into priority and non-priority parts. Priority demand is rationed first if necessary; any remaining capacity is then allocated proportionally to non-priority demand."
            variables={[
              {
                symbol: String.raw`x_{i,t}`,
                meaning: "allocated token service for agent class i",
              },
              {
                symbol: String.raw`d_{i,t}`,
                meaning: "desired token demand of agent class i",
              },
              {
                symbol: String.raw`p_{i,t}`,
                meaning:
                  "priority share of demand for agent class i, between zero and one",
              },
              {
                symbol: String.raw`d^P_{i,t}`,
                meaning: "priority demand of agent class i",
              },
              {
                symbol: String.raw`d^N_{i,t}`,
                meaning: "non-priority demand of agent class i",
              },
              {
                symbol: String.raw`x^P_{i,t}`,
                meaning: "served priority demand of agent class i",
              },
              {
                symbol: String.raw`x^N_{i,t}`,
                meaning: "served non-priority demand of agent class i",
              },
              {
                symbol: String.raw`K_t`,
                meaning: "capacity available to the rationing pool",
              },
              {
                symbol: String.raw`K^N_t`,
                meaning:
                  "capacity remaining after priority allocation, with negative residuals truncated to zero",
              },
              {
                symbol: String.raw`k`,
                meaning: "index over all agent classes in the rationing pool",
              },
            ]}
          />
          <p>
            The formula is deliberately transparent. It does not yet model
            strategic queueing, market power, or political lobbying. Those
            mechanisms are valid research extensions, but the first version
            should make the welfare consequences of simple rationing visible. If
            a denominator in the rationing factors is zero, the corresponding
            allocation layer is empty and the factor is interpreted as one.
          </p>
          <div className="learning-example-card">
            <p>
              Example: suppose total priority demand is{" "}
              <InlineMath latex={String.raw`40`} />, non-priority demand is{" "}
              <InlineMath latex={String.raw`90`} />, and capacity is{" "}
              <InlineMath latex={String.raw`100`} />. The priority layer is
              fully served and leaves{" "}
              <InlineMath latex={String.raw`K^N_t=60`} /> units. Non-priority
              users receive the common fraction{" "}
              <InlineMath latex={String.raw`60/90=2/3`} /> of their non-priority
              demand. If priority demand alone exceeded capacity, the first
              proportional factor would ration priority demand too.
            </p>
          </div>
        </section>

        <section id="abm-investment">
          <h3>11. Delayed Investment and Capacity Expansion</h3>
          <p>
            Data-centre and grid investment cannot appear instantly. This is a
            key reason token economics resembles energy and infrastructure
            markets. A price spike today may create an investment signal, but
            the additional capacity appears only after construction, permitting,
            grid connection, procurement, and cooling constraints are resolved.
          </p>
          <MathEquation
            title="Investment pipeline"
            latex={String.raw`\begin{aligned}
I_{m,t}&=\chi_m\left[\beta_S(S_t-S^{\mathrm{ref}})_+ + \beta_A(1-A^{\mathrm{cap}}_{m,t})_+ + \beta_U \mathrm{Sub}_{m,t}\right]_+,\\
K_{m,t+\tau_m}&=K_{m,t+\tau_m}^{\mathrm{base}}+\phi_m I_{m,t}.
\end{aligned}`}
            explanation="Investment in capacity mode m is triggered by scarcity prices, capacity-adequacy gaps, and policy support, but it becomes deliverable capacity only after delay tau_m."
            variables={[
              {
                symbol: String.raw`I_{m,t}`,
                meaning: "investment initiated in capacity mode m at date t",
              },
              {
                symbol: String.raw`K_{m,t+\tau_m}`,
                meaning:
                  "capacity available after the construction and grid delay for mode m",
              },
              {
                symbol: String.raw`K_{m,t+\tau_m}^{\mathrm{base}}`,
                meaning:
                  "capacity that would be available without the new investment",
              },
              {
                symbol: String.raw`\phi_m`,
                meaning:
                  "conversion from investment units to deliverable capacity for mode m",
              },
              {
                symbol: String.raw`\chi_m`,
                meaning: "investment responsiveness parameter for mode m",
              },
              {
                symbol: String.raw`S_t`,
                meaning: "token scarcity price or price index at date t",
              },
              {
                symbol: String.raw`S^{\mathrm{ref}}`,
                meaning:
                  "reference price below which scarcity investment is weak",
              },
              {
                symbol: String.raw`A^{\mathrm{cap}}_{m,t}`,
                meaning:
                  "capacity adequacy ratio for mode m, with values below one indicating shortage",
              },
              {
                symbol: String.raw`\mathrm{Sub}_{m,t}`,
                meaning:
                  "policy support, subsidy, or permitting support for mode m at date t",
              },
              {
                symbol: String.raw`\beta_S,\beta_A,\beta_U`,
                meaning:
                  "weights on price pressure, adequacy gaps, and policy support",
              },
              {
                symbol: String.raw`(x)_+`,
                meaning: "positive part, max(x,0)",
              },
            ]}
          />
          <p>
            The equation should not be read as an estimated investment law. It
            is a transparent reduced form. Calibration should replace these
            coefficients when project-level data, power-connection queues, and
            data-centre investment announcements can be measured.
          </p>
          <div className="learning-example-card">
            <p>
              Example: if token prices are below the reference level and
              adequacy is high, the first two positive-part terms vanish. A
              capacity project can still appear if{" "}
              <InlineMath latex={String.raw`\mathrm{Sub}_{m,t}`} /> represents a
              public grid-connection subsidy or accelerated permitting program.
              The second line then places the resulting capacity at date{" "}
              <InlineMath latex={String.raw`t+\tau_m`} />, not immediately.
            </p>
          </div>
        </section>

        <section id="abm-stochasticity">
          <h3>12. Stochasticity: Weather as Exogenous Uncertainty</h3>
          <p>
            Uncertainty enters the current simulator primarily through weather
            stress. Weather affects cooling loads, electricity demand, renewable
            output, hydrology, wind availability, and local grid conditions. It
            is therefore reasonable to treat weather as an exogenous stochastic
            driver of electricity prices and capacity stress, especially before
            building a full power-system model.
          </p>
          <MathEquation
            title="Weather stress process"
            latex={String.raw`w_{z,t+\Delta}=\Pi_{[-\bar w,\bar w]}\!\left(\rho w_{z,t}+\sigma\left(c\eta^0_{t+\Delta}+\sqrt{1-c^2}\eta^z_{t+\Delta}\right)\right)`}
            explanation="Weather stress in each zone is persistent, partly common across zones, partly idiosyncratic, and projected into a bounded interval to avoid unrealistic outliers in the teaching simulator."
            variables={[
              {
                symbol: String.raw`w_{z,t+\Delta}`,
                meaning: "weather-stress state in zone z next quarter",
              },
              {
                symbol: String.raw`w_{z,t}`,
                meaning: "weather-stress state in zone z this quarter",
              },
              {
                symbol: String.raw`\rho`,
                meaning: "persistence parameter",
              },
              {
                symbol: String.raw`\sigma`,
                meaning: "innovation scale",
              },
              {
                symbol: String.raw`c`,
                meaning:
                  "loading on common weather innovation, between zero and one",
              },
              {
                symbol: String.raw`\eta^0_{t+\Delta}`,
                meaning:
                  "common weather shock, modeled as a standard-normal innovation before projection",
              },
              {
                symbol: String.raw`\eta^z_{t+\Delta}`,
                meaning:
                  "zone-specific weather shock, modeled as a standard-normal innovation before projection",
              },
              {
                symbol: String.raw`\Pi_{[-\bar w,\bar w]}`,
                meaning:
                  "projection onto the interval from minus w-bar to plus w-bar",
              },
              {
                symbol: String.raw`\bar w`,
                meaning: "maximum absolute stress value allowed in the model",
              },
            ]}
          />
          <p>
            This stochastic term creates exogenous variation even when policy
            and adoption assumptions are unchanged. Re-running a scenario with
            different seeds should therefore produce a distribution of outcomes,
            not a single deterministic line. Monte Carlo summaries should report
            medians, percentiles, and tail metrics.
          </p>
          <div className="learning-example-card">
            <p>
              Example: with <InlineMath latex={String.raw`c=0.6`} />, each zone
              receives a common weather component with loading{" "}
              <InlineMath latex={String.raw`0.6`} /> and an idiosyncratic
              component with loading{" "}
              <InlineMath latex={String.raw`\sqrt{1-0.6^2}=0.8`} />. The common
              component creates cross-regional stress correlation; the
              idiosyncratic component allows one region to face a heat or wind
              shock while another does not.
            </p>
          </div>
        </section>

        <section id="abm-calibration">
          <h3>13. Calibration Principles</h3>
          <p>
            Calibration must distinguish three categories. First, quantities
            that can be observed directly, such as posted token prices,
            electricity prices, public data-centre announcements, and policy
            dates. Second, quantities that can be estimated with uncertainty,
            such as elasticities, energy pass-through, and adoption curves.
            Third, quantities that are currently scenario assumptions because
            provider telemetry is unavailable.
          </p>
          <MathEquation
            title="Calibration by moment discipline"
            latex={String.raw`\widehat{\theta}=\operatorname*{arg\,min}_{\theta\in\Theta}\sum_{r\in\mathcal R_m}\omega_r\left(\widehat m_r-m_r(\theta)\right)^2`}
            explanation="The calibrated parameter vector should make model-implied moments close to empirical moments, with transparent weights."
            variables={[
              {
                symbol: String.raw`\widehat{\theta}`,
                meaning: "calibrated parameter vector",
              },
              {
                symbol: String.raw`\theta`,
                meaning: "candidate parameter vector",
              },
              {
                symbol: String.raw`\Theta`,
                meaning: "admissible parameter space",
              },
              {
                symbol: String.raw`\mathcal R_m`,
                meaning: "set of empirical moments used for calibration",
              },
              {
                symbol: String.raw`\omega_r`,
                meaning: "weight on calibration moment r",
              },
              {
                symbol: String.raw`\widehat m_r`,
                meaning: "empirical value of moment r",
              },
              {
                symbol: String.raw`m_r(\theta)`,
                meaning:
                  "model-implied value of moment r under parameter vector theta",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: one moment can be average quarterly electricity-price
              volatility, another can be the frequency of capacity utilization
              above <InlineMath latex={String.raw`90\%`} />, and a third can be
              average token-demand growth. The weights{" "}
              <InlineMath latex={String.raw`\omega_r`} /> should be reported,
              because they determine which empirical facts the calibration is
              allowed to fit most closely.
            </p>
          </div>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Parameter family</th>
                <th>Possible data source</th>
                <th>Main risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adoption and demand growth</td>
                <td>
                  Usage statistics, surveys, software spending, API volumes.
                </td>
                <td>Rapid structural breaks and strategic substitution.</td>
              </tr>
              <tr>
                <td>Price elasticity</td>
                <td>Posted price changes, budget data, procurement records.</td>
                <td>Prices may be set in response to unobserved demand.</td>
              </tr>
              <tr>
                <td>Energy intensity</td>
                <td>Engineering estimates, telemetry, benchmark reporting.</td>
                <td>Provider-specific batching and hardware utilization.</td>
              </tr>
              <tr>
                <td>Capacity lead time</td>
                <td>
                  Data-centre projects, grid queues, permitting databases.
                </td>
                <td>Announcements may not equal deliverable capacity.</td>
              </tr>
              <tr>
                <td>Weather pass-through</td>
                <td>
                  Electricity prices, demand, renewable output, weather data.
                </td>
                <td>Power contracts may hide actual exposure.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="abm-validation">
          <h3>14. Validation, Sensitivity, and Falsification</h3>
          <p>
            Validation of economic ABMs is difficult because the model is
            usually built to study counterfactual mechanisms, not only to
            interpolate historical data. The validation problem is discussed by{" "}
            <CitationLink id="fagiolo2007">
              Fagiolo, Moneta, and Windrum (2007)
            </CitationLink>
            . The practical standard should combine structural validation,
            empirical moment checks, pattern validation, sensitivity analysis,
            and explicit falsification tests.
          </p>
          <p>
            Sensitivity analysis should vary assumptions one at a time and in
            correlated bundles. The global sensitivity-analysis perspective of{" "}
            <CitationLink id="saltelli2008">
              Saltelli et al. (2008)
            </CitationLink>{" "}
            is relevant because interaction effects matter: weather stress may
            be mild under abundant capacity but severe when local policy routing
            is high and grid expansion is delayed.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Validation layer</th>
                <th>Question</th>
                <th>Example for this ABM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Code verification</td>
                <td>Does the implementation match the model specification?</td>
                <td>
                  Unit tests for demand splitting, clearing, rationing, and
                  investment delays.
                </td>
              </tr>
              <tr>
                <td>Structural validation</td>
                <td>Are the causal mechanisms plausible?</td>
                <td>
                  Expert review of capacity bottlenecks and electricity
                  pass-through.
                </td>
              </tr>
              <tr>
                <td>Moment validation</td>
                <td>Do simulated moments match observed moments?</td>
                <td>
                  Compare electricity-price volatility, demand growth, and
                  capacity utilization.
                </td>
              </tr>
              <tr>
                <td>Pattern validation</td>
                <td>Does the model reproduce qualitative stylized facts?</td>
                <td>
                  Scarcity rents rise nonlinearly when utilization approaches
                  capacity.
                </td>
              </tr>
              <tr>
                <td>Falsification</td>
                <td>What evidence would make the model mechanism untenable?</td>
                <td>
                  If token prices never respond to capacity stress, the scarcity
                  channel must be revised.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="abm-scenarios">
          <h3>15. Scenario Design</h3>
          <p>
            Scenarios should be designed as experiments. A good scenario changes
            a small number of interpretable assumptions and records the
            mechanism being tested. A poor scenario changes many assumptions at
            once and then attributes the output to a policy slogan.
          </p>
          <MathEquation
            title="Scenario as controlled parameter intervention"
            latex={String.raw`s=\left(\theta_s,Z^{\mathrm{pol}}_s,\mathcal E_s,\xi_s\right)`}
            explanation="A scenario bundles parameter values, policy rules, external trajectories, and random-seed design."
            variables={[
              {
                symbol: String.raw`s`,
                meaning: "scenario identifier",
              },
              {
                symbol: String.raw`\theta_s`,
                meaning:
                  "scenario-specific behavioral and technology parameters",
              },
              {
                symbol: String.raw`Z^{\mathrm{pol}}_s`,
                meaning: "policy configuration in the scenario",
              },
              {
                symbol: String.raw`\mathcal E_s`,
                meaning:
                  "external trajectories such as baseline electricity paths or macro assumptions",
              },
              {
                symbol: String.raw`\xi_s`,
                meaning:
                  "random-seed design for Monte Carlo replication under the scenario",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: a local-compliance scenario changes{" "}
              <InlineMath latex={String.raw`Z^{\mathrm{pol}}_s`} /> by raising
              certified routing shares for selected sectors, while keeping the
              same random-seed design <InlineMath latex={String.raw`\xi_s`} />{" "}
              as the baseline. Paired random seeds make it easier to separate
              the policy mechanism from weather noise in Monte Carlo
              comparisons.
            </p>
          </div>
          <p>
            The default scenario comparison should include a baseline, a high
            adoption scenario, a local-compliance bottleneck scenario, a fast
            grid-expansion scenario, a weather-stress scenario, and a policy
            priority scenario. Each should have a short statement of purpose and
            a set of expected mechanisms before the results are viewed.
          </p>
        </section>

        <section id="abm-comparisons">
          <h3>16. Comparison with Other Model Classes</h3>
          <p>
            An ABM is not always the best model. It is valuable for
            heterogeneity, sequencing, bottlenecks, and path dependence. Other
            methods are better for different questions. A rigorous research
            program should therefore compare models rather than defend one
            method by default.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Model class</th>
                <th>Strength</th>
                <th>Limitation for token economics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Representative-agent model</td>
                <td>Analytical clarity and comparative statics.</td>
                <td>Hides distributional effects and compliance routing.</td>
              </tr>
              <tr>
                <td>Competitive equilibrium model</td>
                <td>Market-clearing discipline and welfare theorems.</td>
                <td>
                  Hard to include rationing, platform pricing, and delayed
                  capacity.
                </td>
              </tr>
              <tr>
                <td>Stochastic control</td>
                <td>Optimal procurement, hedging, and investment decisions.</td>
                <td>
                  Requires a well-defined objective and tractable state space.
                </td>
              </tr>
              <tr>
                <td>Econometric forecasting</td>
                <td>Empirical discipline and uncertainty quantification.</td>
                <td>
                  Weak for policies and markets that have not yet existed.
                </td>
              </tr>
              <tr>
                <td>Network model</td>
                <td>Explicit infrastructure and dependency topology.</td>
                <td>
                  May omit behavioral adaptation unless combined with agents.
                </td>
              </tr>
              <tr>
                <td>Agent-based model</td>
                <td>
                  Heterogeneity, adaptation, bottlenecks, and path dependence.
                </td>
                <td>
                  Requires careful validation and transparent assumptions.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="abm-outputs">
          <h3>17. Interpreting Simulation Outputs</h3>
          <p>
            Simulation outputs should be read as conditional quantities. A price
            path answers a question about the scenario mechanism, not a promise
            about the future. A shortage path identifies when demand and
            capacity assumptions are inconsistent. A welfare chart exposes
            distributional costs. A vulnerability score summarizes exposure to
            bottlenecks but should not replace the underlying diagnostics.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Output</th>
                <th>Interpretation</th>
                <th>Common mistake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Token price</td>
                <td>Scarcity-sensitive service price under assumptions.</td>
                <td>Treating it as an empirical forecast.</td>
              </tr>
              <tr>
                <td>Electricity price</td>
                <td>Reduced-form regional stress indicator.</td>
                <td>Reading it as a full power-market equilibrium.</td>
              </tr>
              <tr>
                <td>Unmet demand</td>
                <td>Quantity rationed or priced out under capacity limits.</td>
                <td>Ignoring which agent classes bear the shortage.</td>
              </tr>
              <tr>
                <td>Scarcity rent</td>
                <td>Diagnostic value of bottlenecked capacity.</td>
                <td>
                  Assuming it is directly observable in provider accounts.
                </td>
              </tr>
              <tr>
                <td>Investment signal</td>
                <td>Pressure for future capacity expansion.</td>
                <td>Assuming immediate supply response.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="abm-interactive-lab">
          <h3>18. Interactive Illustration: ABM Mechanism Laboratory</h3>
          <p>
            The calculator below is a compressed version of the ABM logic. It
            shows why the model must include uncertainty, policy routing, and
            investment delay. Increasing local capacity growth helps only if the
            grid multiplier and delay are favorable. Increasing policy routing
            can improve sovereignty goals while raising local scarcity. Weather
            stress raises the token price index through electricity and capacity
            pressure.
          </p>
          <AbmArchitectureLab />
        </section>

        <section id="abm-limitations">
          <h3>19. Limitations and Research Extensions</h3>
          <p>
            The current ABM is intentionally transparent. That makes it useful
            for teaching and mechanism exploration, but it also leaves several
            research extensions open. The most important limitation is that
            providers, investors, and regulators are not yet fully strategic. A
            richer model should let them learn, anticipate policy, set prices,
            choose regions, and hedge risk.
          </p>
          <div className="learning-two-column">
            <section>
              <h4>Strategic providers</h4>
              <p>
                Providers should eventually choose model quality, prices,
                capacity reservations, and regional deployment under market
                power and reliability constraints.
              </p>
            </section>
            <section>
              <h4>Financial hedging</h4>
              <p>
                Token intermediaries should hold forward contracts, options, and
                index hedges, creating basis risk and collateral dynamics.
              </p>
            </section>
            <section>
              <h4>Power-system coupling</h4>
              <p>
                The reduced-form electricity module should be compared with
                power-flow, unit-commitment, or electricity-market simulation
                modules for high-stakes energy analysis.
              </p>
            </section>
            <section>
              <h4>Learning behavior</h4>
              <p>
                Later versions can use Bayesian learning or reinforcement
                learning to represent adaptive procurement and investment, but
                interpretability should remain a core requirement.
              </p>
            </section>
          </div>
          <p>
            The Lucas critique remains relevant: if policy changes agent
            incentives, behavioral parameters may shift.{" "}
            <CitationLink id="lucas1976">Lucas (1976)</CitationLink> therefore
            supports the model-design rule that policy experiments should vary
            behavior as well as constraints.
          </p>
        </section>

        <section id="abm-exercises">
          <h3>20. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Explain why the ABM uses quarterly updates rather than one static
              equilibrium equation.
            </li>
            <li>
              Write a demand-routing rule for a hospital, a bank, and a small
              software firm. Which agent has the highest local-compliance share?
            </li>
            <li>
              Give one case where increasing GPU capacity does not reduce token
              scarcity because another bottleneck binds.
            </li>
            <li>
              Design a Monte Carlo experiment that separates weather uncertainty
              from policy uncertainty.
            </li>
            <li>
              Propose three empirical moments that should be used to calibrate
              the electricity-price module.
            </li>
            <li>
              Define a falsification test for the investment-response rule.
            </li>
            <li>
              Compare a representative-agent version of the model with the ABM.
              Which welfare effects disappear in the representative-agent model?
            </li>
            <li>
              Describe how reinforcement learning could be added for procurement
              agents without turning the model into an uninterpretable black
              box.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 5</h3>
            <p>
              The references below use published journal articles, book pages,
              official publisher pages, or DOI links where available. They
              support the ABM documentation standard, economic ABM motivation,
              validation logic, sensitivity analysis, and the general role of
              agent-based modelling in computational economics.
            </p>
            <ol className="reference-list">
              {abmReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

function PolicyTradeoffLab() {
  const [params, setParams] = useState({
    localCapacity: 62,
    alliedAccess: 28,
    complianceStrictness: 55,
    publicPriority: 34,
    subsidyIntensity: 38,
    weatherStress: 30,
  });

  function updateParam(name: keyof typeof params, value: number) {
    setParams((current) => ({ ...current, [name]: value }));
  }

  const result = useMemo(() => {
    const totalDemand = 120;
    const certifiedDemand =
      totalDemand *
      (0.28 +
        0.0047 * params.complianceStrictness +
        0.0016 * params.publicPriority);
    const certifiedCapacity =
      params.localCapacity +
      0.65 * params.alliedAccess -
      0.24 * params.weatherStress +
      0.18 * params.subsidyIntensity;
    const flexibleCapacity =
      42 + 0.52 * params.alliedAccess - 0.18 * params.weatherStress;
    const certifiedShortage = Math.max(0, certifiedDemand - certifiedCapacity);
    const flexibleDemand = totalDemand - certifiedDemand;
    const flexibleShortage = Math.max(0, flexibleDemand - flexibleCapacity);
    const shortageRate = (certifiedShortage + flexibleShortage) / totalDemand;
    const dependency =
      Math.max(
        0,
        totalDemand - params.localCapacity - 0.5 * params.alliedAccess,
      ) / totalDemand;
    const publicProtection = Math.min(
      1,
      (params.publicPriority + params.localCapacity * 0.45) / 100,
    );
    const scarcityPremium =
      18 +
      170 * shortageRate +
      0.18 * params.complianceStrictness +
      0.16 * params.weatherStress;
    const fiscalCost =
      0.72 * params.subsidyIntensity +
      0.42 * params.publicPriority +
      0.2 * params.localCapacity;
    const distributionRisk = Math.max(
      0,
      100 * shortageRate - 42 * publicProtection,
    );
    const welfareScore =
      100 -
      0.18 * scarcityPremium -
      0.28 * fiscalCost -
      35 * dependency -
      0.35 * distributionRisk;

    return {
      certifiedDemand,
      certifiedCapacity: Math.max(0, certifiedCapacity),
      shortageRate,
      dependency,
      publicProtection,
      scarcityPremium,
      fiscalCost,
      distributionRisk,
      welfareScore,
    };
  }, [params]);

  function applyOpenMarketPreset() {
    setParams({
      localCapacity: 45,
      alliedAccess: 55,
      complianceStrictness: 25,
      publicPriority: 18,
      subsidyIntensity: 18,
      weatherStress: 20,
    });
  }

  function applySovereigntyPreset() {
    setParams({
      localCapacity: 82,
      alliedAccess: 30,
      complianceStrictness: 78,
      publicPriority: 56,
      subsidyIntensity: 64,
      weatherStress: 34,
    });
  }

  const maxBar = Math.max(
    1,
    result.scarcityPremium,
    result.fiscalCost,
    result.distributionRisk,
  );

  return (
    <div
      className="token-lab"
      aria-label="Interactive policy and sovereignty tradeoff calculator"
    >
      <div className="token-lab-controls">
        <article className="token-lab-model frontier">
          <h4>Institutional design</h4>
          <p>
            These controls determine how much demand is routed into certified
            pools and how much protected access is reserved for public use.
          </p>
          <SliderControl
            label="Compliance strictness"
            value={params.complianceStrictness}
            min={0}
            max={100}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("complianceStrictness", value)}
          />
          <SliderControl
            label="Public priority reserve"
            value={params.publicPriority}
            min={0}
            max={100}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("publicPriority", value)}
          />
          <SliderControl
            label="Compute subsidy"
            value={params.subsidyIntensity}
            min={0}
            max={100}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("subsidyIntensity", value)}
          />
        </article>

        <article className="token-lab-model small-model">
          <h4>Capacity and shocks</h4>
          <p>
            These controls determine whether certified demand can actually be
            served under local, allied, and weather-stressed capacity.
          </p>
          <SliderControl
            label="Local capacity"
            value={params.localCapacity}
            min={20}
            max={110}
            step={1}
            suffix=" units"
            onChange={(value) => updateParam("localCapacity", value)}
          />
          <SliderControl
            label="Allied access"
            value={params.alliedAccess}
            min={0}
            max={90}
            step={1}
            suffix=" units"
            onChange={(value) => updateParam("alliedAccess", value)}
          />
          <SliderControl
            label="Weather stress"
            value={params.weatherStress}
            min={0}
            max={100}
            step={1}
            suffix="%"
            onChange={(value) => updateParam("weatherStress", value)}
          />
        </article>
      </div>

      <div className="token-lab-presets" aria-label="Policy presets">
        <span>Policy preset</span>
        <button
          type="button"
          className="command-button"
          onClick={applyOpenMarketPreset}
        >
          Open access
        </button>
        <button
          type="button"
          className="command-button"
          onClick={applySovereigntyPreset}
        >
          Sovereignty stress
        </button>
      </div>

      <div className="token-lab-results" aria-live="polite">
        <article className="token-result-card">
          <span>Certified scarcity</span>
          <strong>{formatPercent(result.shortageRate)}</strong>
          <p>
            Certified demand {result.certifiedDemand.toFixed(1)} against
            capacity {result.certifiedCapacity.toFixed(1)}.
          </p>
        </article>
        <article className="token-result-card">
          <span>Foreign dependency</span>
          <strong>{formatPercent(result.dependency)}</strong>
          <p>
            Lower dependency means less exposure to external capacity
            withdrawal.
          </p>
        </article>
        <article className="token-result-card accent">
          <span>Policy welfare score</span>
          <strong>{result.welfareScore.toFixed(1)}</strong>
          <p>Higher is better in this stylized mechanism illustration.</p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Scarcity premium ${result.scarcityPremium.toFixed(
          1,
        )}, fiscal cost ${result.fiscalCost.toFixed(
          1,
        )}, distribution risk ${result.distributionRisk.toFixed(1)}`}
      >
        <div className="token-lab-bar-row">
          <span>S</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.scarcityPremium / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{result.scarcityPremium.toFixed(1)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>F</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, (result.fiscalCost / maxBar) * 100)}%`,
              }}
            />
          </div>
          <strong>{result.fiscalCost.toFixed(1)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>D</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.distributionRisk / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{result.distributionRisk.toFixed(1)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        This calculator is not a calibrated welfare model. It illustrates the
        mechanism that stronger sovereignty and priority rules can reduce
        dependency while increasing fiscal cost and certified-capacity scarcity
        if capacity expansion is too slow.
      </p>
    </div>
  );
}

function TokenPolicyGeopoliticsArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {policyArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="policy-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            Token economics becomes a public-policy problem when model service
            is scarce, jurisdictionally constrained, energy-intensive, and
            strategically important. This module treats policy as a set of
            constraints, incentives, rights, reserves, and institutional rules
            that shape token prices, access, welfare, and geopolitical exposure.
          </p>
          <p>
            The legal context is anchored in official EU regulation, especially
            the <CitationLink id="euAiAct2024">AI Act</CitationLink> and{" "}
            <CitationLink id="euDataAct2023">Data Act</CitationLink>. The
            geopolitical framing follows{" "}
            <CitationLink id="farrellNewman2019">
              Farrell and Newman (2019)
            </CitationLink>
            , while regulation and procurement logic follows{" "}
            <CitationLink id="laffontTirole1993">
              Laffont and Tirole (1993)
            </CitationLink>
            . Energy and climate constraints are tied to{" "}
            <CitationLink id="iea2025">IEA (2025)</CitationLink> and{" "}
            <CitationLink id="ngfs2024">NGFS (2024)</CitationLink>.
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define compute sovereignty as a measurable exposure, not a
                slogan.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Translate legal admissibility, public priority, and procurement
                reserves into mathematical constraints.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Evaluate tradeoffs among cost, resilience, privacy, innovation,
                emissions, and distributional welfare.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Design scenario experiments that separate policy mechanisms from
                weather, demand, and capacity shocks.
              </p>
            </article>
          </div>
        </section>

        <section id="policy-object">
          <h3>1. The Policy Problem</h3>
          <p>
            In token economics, policy is best treated as a vector of
            institutional choices. It can determine which models may be used,
            which delivery regions are admissible, which agents receive priority,
            which capacity must be reserved, which benchmarks are acceptable, and
            which risks must be disclosed.
          </p>
          <MathEquation
            title="Policy design object"
            latex={String.raw`\pi=\left(A^{\mathrm{adm}},R^{\mathrm{pub}},\tau,\sigma^{\mathrm{sub}},B^{\mathrm{bench}},\mathcal G\right)\in\Pi`}
            explanation="A policy design specifies admissibility rules, public reserves, taxes or fees, subsidies, benchmark rules, and governance constraints."
            variables={[
              {
                symbol: String.raw`\pi`,
                meaning: "policy design vector",
              },
              {
                symbol: String.raw`A^{\mathrm{adm}}`,
                meaning:
                  "legal admissibility matrix over agents, token classes, regions, and uses",
              },
              {
                symbol: String.raw`R^{\mathrm{pub}}`,
                meaning: "public-sector reserve or priority-access rule",
              },
              {
                symbol: String.raw`\tau`,
                meaning: "tax, fee, carbon price, or scarcity charge",
              },
              {
                symbol: String.raw`\sigma^{\mathrm{sub}}`,
                meaning: "subsidy or investment-support instrument",
              },
              {
                symbol: String.raw`B^{\mathrm{bench}}`,
                meaning: "benchmark-governance rule for token indices",
              },
              {
                symbol: String.raw`\mathcal G`,
                meaning:
                  "institutional governance rule, including disclosure, audit, and enforcement",
              },
              {
                symbol: String.raw`\Pi`,
                meaning: "admissible set of policy designs",
              },
            ]}
          />
        </section>

        <section id="policy-sovereignty">
          <h3>2. Compute Sovereignty as Exposure</h3>
          <p>
            Compute sovereignty should be measured as exposure to non-admitted
            or externally controlled service, not as a binary concept. A country
            can be highly innovative and still fragile if critical workloads
            depend on a small number of foreign-controlled providers or grid
            zones.
          </p>
          <MathEquation
            title="Dependency ratio"
            latex={String.raw`\operatorname{Dep}_{u,t}^{\pi}=\frac{\sum_{j,r}\left(1-A^{\mathrm{adm}}_{u,j,r,t}(\pi)\right)x_{u,j,r,t}}{\sum_{j,r}x_{u,j,r,t}}`}
            explanation="The dependency ratio is the share of delivered service for use case u that relies on non-admitted or externally exposed capacity under policy pi."
            variables={[
              {
                symbol: String.raw`\operatorname{Dep}_{u,t}^{\pi}`,
                meaning:
                  "dependency exposure for use case u at date t under policy pi",
              },
              {
                symbol: String.raw`A^{\mathrm{adm}}_{u,j,r,t}(\pi)`,
                meaning:
                  "indicator or weight equal to one when token class j in region r is admissible for use case u",
              },
              {
                symbol: String.raw`x_{u,j,r,t}`,
                meaning:
                  "delivered token service for use case u, token class j, region r, date t",
              },
            ]}
          />
        </section>

        <section id="policy-admissibility">
          <h3>3. Legal Admissibility and Certification</h3>
          <p>
            The AI Act creates obligations that vary by system role and risk
            category, while the Data Act affects access to and use of data. In
            the model, these legal facts enter as admissibility constraints.
            They can reduce legal risk and improve trust, but they can also
            redirect demand into a smaller certified capacity pool.
          </p>
          <MathEquation
            title="Admissible service constraint"
            latex={String.raw`x_{i,u,j,r,t}\le A^{\mathrm{adm}}_{i,u,j,r,t}(\pi)K_{j,r,t}`}
            explanation="If a token class or region is not legally admissible for an agent-use pair, the admissible capacity on that route is zero."
            variables={[
              {
                symbol: String.raw`x_{i,u,j,r,t}`,
                meaning:
                  "service allocated to agent i for use u using token class j in region r",
              },
              {
                symbol: String.raw`K_{j,r,t}`,
                meaning: "deliverable capacity of token class j in region r",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: if a hospital workload may only use certified local
              service, then global capacity can be abundant while the hospital
              still faces scarcity. The constraint changes the relevant supply
              set.
            </p>
          </div>
        </section>

        <section id="policy-geopolitics">
          <h3>4. Geopolitical Exposure and Network Power</h3>
          <p>
            Token service depends on networks. Semiconductor supply, model
            providers, cloud regions, data centres, power contracts, cables,
            benchmarks, payment systems, and export controls all shape the
            feasible service set.{" "}
            <CitationLink id="farrellNewman2019">
              Farrell and Newman (2019)
            </CitationLink>{" "}
            show why asymmetric network positions can become instruments of
            state coercion. In token economics, the relevant question is whether
            foreign-controlled capacity can be withdrawn, monitored, priced
            discriminatorily, or legally blocked.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Exposure</th>
                <th>Token-economics channel</th>
                <th>Model variable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chokepoint</td>
                <td>Loss of access to provider, GPU, cloud, or region.</td>
                <td>Capacity shock to admissible supply.</td>
              </tr>
              <tr>
                <td>Panopticon</td>
                <td>
                  Information exposure through data, prompts, or telemetry.
                </td>
                <td>Privacy or compliance penalty.</td>
              </tr>
              <tr>
                <td>Price power</td>
                <td>Scarcity markups or discriminatory priority access.</td>
                <td>Scarcity rent and token price.</td>
              </tr>
              <tr>
                <td>Fragmentation</td>
                <td>
                  Lower substitutability across token classes and regions.
                </td>
                <td>Basis risk and lower effective capacity.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="policy-welfare">
          <h3>5. Welfare Criterion</h3>
          <p>
            A credible policy model must state what is being optimized. A
            government may care about consumer surplus, public-service
            continuity, industrial capability, emissions, fiscal cost, and tail
            risk. These objectives generally conflict.
          </p>
          <MathEquation
            title="Policy welfare objective"
            latex={String.raw`J(\pi)=\mathbb E[W^{\pi}]-\lambda_L\operatorname{CVaR}_{\alpha}(L^{\pi})-\lambda_FF^{\pi}-\lambda_EE^{\pi}`}
            explanation="The policy objective balances expected welfare against tail losses, fiscal cost, and environmental externalities."
            variables={[
              {
                symbol: String.raw`J(\pi)`,
                meaning: "policy score for policy design pi",
              },
              {
                symbol: String.raw`W^{\pi}`,
                meaning: "social welfare under policy pi",
              },
              {
                symbol: String.raw`L^{\pi}`,
                meaning: "loss distribution, such as unmet critical demand",
              },
              {
                symbol: String.raw`F^{\pi}`,
                meaning: "fiscal cost of reserves, subsidies, and procurement",
              },
              {
                symbol: String.raw`E^{\pi}`,
                meaning: "environmental externality or emissions cost",
              },
              {
                symbol: String.raw`\lambda_L,\lambda_F,\lambda_E`,
                meaning:
                  "policy weights on tail risk, fiscal cost, and environmental cost",
              },
            ]}
          />
          <p>
            The use of{" "}
            <CitationLink id="rockafellarUryasev2000">CVaR</CitationLink> is
            important because token policy is often about crisis performance.
            Average cost can look acceptable while the lower tail contains severe
            unmet critical demand.
          </p>
        </section>

        <section id="policy-distribution">
          <h3>6. Distributional Effects</h3>
          <p>
            Token scarcity is distributional. Public agencies, hospitals, SMEs,
            regulated firms, households, and frontier AI providers can face very
            different welfare consequences. The ABM should therefore report
            group-level outcomes alongside aggregate welfare.
          </p>
          <MathEquation
            title="Distribution-weighted welfare"
            latex={String.raw`W^{\pi}_t=\sum_{g\in\mathcal G}\omega_g CS^{\pi}_{g,t}+\Pi^{\pi}_t-C^{\mathrm{energy},\pi}_t-C^{\mathrm{short},\pi}_t`}
            explanation="Social welfare is written as weighted group surplus plus provider profit minus energy and shortage costs."
            variables={[
              {
                symbol: String.raw`\mathcal G`,
                meaning: "set of social or economic groups",
              },
              {
                symbol: String.raw`\omega_g`,
                meaning: "normative welfare weight for group g",
              },
              {
                symbol: String.raw`CS^{\pi}_{g,t}`,
                meaning: "consumer or user surplus of group g",
              },
              {
                symbol: String.raw`\Pi^{\pi}_t`,
                meaning: "producer surplus or provider profit",
              },
              {
                symbol: String.raw`C^{\mathrm{short},\pi}_t`,
                meaning: "cost of shortages and unmet critical demand",
              },
            ]}
          />
        </section>

        <section id="policy-procurement">
          <h3>7. Public Procurement and Token Reserves</h3>
          <p>
            Public procurement can be modeled as a portfolio problem: the state
            can buy spot service, reserve capacity, forward contracts, and
            emergency priority rights. Incentive design matters because
            providers may know more than the state about true deliverable
            capacity, reliability, and marginal cost; this is the setting of
            procurement and regulation theory in{" "}
            <CitationLink id="laffontTirole1993">
              Laffont and Tirole (1993)
            </CitationLink>
            .
          </p>
          <MathEquation
            title="Public token budget"
            latex={String.raw`B^{\mathrm{pub}}_T=S_Tq_T+F_{0,T}h_T+\kappa m_T+\chi R_T`}
            explanation="Public token expenditure combines spot purchases, forward hedges, emergency margin or collateral, and reserve-capacity payments."
            variables={[
              {
                symbol: String.raw`B^{\mathrm{pub}}_T`,
                meaning: "public token budget at horizon T",
              },
              {
                symbol: String.raw`S_Tq_T`,
                meaning: "spot token expenditure",
              },
              {
                symbol: String.raw`F_{0,T}h_T`,
                meaning: "forward or reserved-capacity expenditure",
              },
              {
                symbol: String.raw`\kappa m_T`,
                meaning: "collateral or margin cost",
              },
              {
                symbol: String.raw`\chi R_T`,
                meaning: "reserve-capacity or priority-access payment",
              },
            ]}
          />
        </section>

        <section id="policy-energy">
          <h3>8. Energy, Grid, and Climate Policy</h3>
          <p>
            Token sovereignty is impossible to separate from energy policy.
            Local model service requires data-centre sites, grid connections,
            power contracts, cooling, and resilience to weather shocks. The{" "}
            <CitationLink id="iea2025">IEA (2025)</CitationLink> frames AI as a
            fast-growing electricity-demand issue, while{" "}
            <CitationLink id="ngfs2024">NGFS (2024)</CitationLink> motivates
            climate scenario analysis for financial risk.
          </p>
          <p>
            Policy instruments include grid investment, permitting reform,
            carbon prices, locational electricity pricing, public power
            contracts, climate adaptation, water constraints, and demand
            response obligations for data centres.
          </p>
        </section>

        <section id="policy-market-power">
          <h3>9. Market Power and Competition</h3>
          <p>
            Token markets may be concentrated because frontier models, chips,
            data, cloud infrastructure, and distribution channels exhibit scale
            economies. Regulation must therefore distinguish scarcity rents from
            market-power rents. A price cap can protect buyers in the short run,
            but it can also worsen rationing if capacity is fixed. This is a
            prices-versus-quantities problem in the spirit of{" "}
            <CitationLink id="weitzman1974">Weitzman (1974)</CitationLink>.
          </p>
        </section>

        <section id="policy-benchmarks">
          <h3>10. Benchmark and Index Governance</h3>
          <p>
            If token indices become financial benchmarks, governance becomes a
            policy issue. The benchmark must specify eligible providers,
            quality-adjustment rules, task baskets, outage treatment, fallback
            rules, conflict management, and auditability. The{" "}
            <CitationLink id="iosco2013">IOSCO (2013)</CitationLink> benchmark
            principles are a natural governance reference.
          </p>
        </section>

        <section id="policy-scenarios">
          <h3>11. Scenario Design for Policy Analysis</h3>
          <p>
            A policy scenario should change a small set of institutional levers
            and preserve a clear counterfactual. The ABM should run paired Monte
            Carlo seeds so that policy effects are not confused with weather
            noise or demand shocks. The Lucas critique{" "}
            <CitationLink id="lucas1976">Lucas (1976)</CitationLink> also
            matters: if policy changes incentives, behavioral parameters may
            shift.
          </p>
          <MathEquation
            title="Policy scenario experiment"
            latex={String.raw`\Delta Y_s=\mathbb E_{\xi}\!\left[Y(\pi_s,\theta_s,\xi)-Y(\pi_0,\theta_0,\xi)\right]`}
            explanation="A policy effect is estimated by comparing scenario and baseline outcomes under matched random seeds."
            variables={[
              {
                symbol: String.raw`\Delta Y_s`,
                meaning: "scenario effect on an outcome vector",
              },
              {
                symbol: String.raw`\pi_s,\pi_0`,
                meaning: "scenario and baseline policy designs",
              },
              {
                symbol: String.raw`\theta_s,\theta_0`,
                meaning:
                  "scenario and baseline behavioral or technology parameters",
              },
              {
                symbol: String.raw`\xi`,
                meaning: "random seed or stochastic shock path",
              },
            ]}
          />
        </section>

        <section id="policy-interactive-lab">
          <h3>12. Interactive Illustration: Policy Tradeoff Laboratory</h3>
          <p>
            The laboratory below illustrates why policy is not one-dimensional.
            Stronger compliance and public reserves can improve sovereignty and
            critical-service continuity, but they can also raise certified
            scarcity unless local and allied capacity expand.
          </p>
          <PolicyTradeoffLab />
        </section>

        <section id="policy-abm-link">
          <h3>13. Link to the ABM</h3>
          <p>
            In the ABM, policy affects three layers. First, it changes routing
            through admissibility and certification rules. Second, it changes
            capacity through subsidies, permitting, and public procurement.
            Third, it changes allocation through priority rules. This means the
            policy module should be tested through scenario comparisons, not by
            reading a single dashboard output in isolation.
          </p>
        </section>

        <section id="policy-limitations">
          <h3>14. Limitations and Research Extensions</h3>
          <p>
            The current policy representation is reduced-form. It does not yet
            model legislative bargaining, lobbying, strategic export controls,
            antitrust enforcement, or international treaty formation. Later
            versions should represent governments, providers, grid operators,
            and foreign jurisdictions as strategic agents. The institutional
            design perspective of{" "}
            <CitationLink id="ostrom1990">Ostrom (1990)</CitationLink> is useful
            because token governance is partly a common-resource problem:
            reliability, trust, standards, and grid capacity are shared
            institutional goods.
          </p>
          <p>
            Risk management should also follow structured frameworks such as{" "}
            <CitationLink id="nistAirmf2023">NIST AI RMF 1.0</CitationLink>,
            especially when simulated policy outputs are used to support
            decisions about critical services.
          </p>
        </section>

        <section id="policy-exercises">
          <h3>15. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Define compute sovereignty as a measurable dependency ratio for a
              hospital workload.
            </li>
            <li>
              Give an example where stricter certification improves legal safety
              but increases token scarcity.
            </li>
            <li>
              Explain why a public reserve capacity contract resembles a hedge.
            </li>
            <li>
              Design a paired-seed Monte Carlo experiment comparing open access
              and local-compliance policy.
            </li>
            <li>
              Identify one policy question where a price instrument is more
              natural than a quantity instrument, and one where the opposite is
              true.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 6</h3>
            <p>
              The references below use official legal sources, publisher pages,
              institutional reports, or DOI links where available.
            </p>
            <ol className="reference-list">
              {policyReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

interface LearningMethodsLabParams {
  designRuns: number;
  scenarioDimensions: number;
  observationNoisePct: number;
  surrogateComplexityPct: number;
  explorationPct: number;
  auditStrengthPct: number;
  policyConservatismPct: number;
}

function solveLearningMethodsLab(params: LearningMethodsLabParams) {
  const sampleGain = Math.sqrt(params.designRuns / 250);
  const dimensionPenalty = Math.sqrt(params.scenarioDimensions / 8);
  const noisePenalty = 1 + params.observationNoisePct / 100;
  const complexityPenalty = 1 + params.surrogateComplexityPct / 140;
  const auditCoverage = Math.min(
    0.98,
    0.22 + params.auditStrengthPct / 150 + params.explorationPct / 260,
  );
  const surrogateError = Math.max(
    0.015,
    (0.32 * dimensionPenalty * noisePenalty * complexityPenalty) /
      (1.2 + sampleGain),
  );
  const posteriorWidth = Math.max(
    0.025,
    Math.min(
      0.7,
      surrogateError * (1.28 - auditCoverage) +
        params.observationNoisePct / 330,
    ),
  );
  const modelRiskScore = Math.max(
    0.02,
    Math.min(
      1,
      0.52 * surrogateError +
        0.33 * posteriorWidth +
        0.22 * (1 - auditCoverage) +
        Math.max(0, 0.35 - params.explorationPct / 100),
    ),
  );
  const rlConstraintViolation = Math.max(
    0.01,
    Math.min(
      0.55,
      0.2 +
        params.explorationPct / 230 -
        params.auditStrengthPct / 260 -
        params.policyConservatismPct / 250,
    ),
  );
  const policyUsefulness = Math.max(
    0,
    Math.min(
      1,
      0.86 -
        0.47 * modelRiskScore -
        0.33 * rlConstraintViolation +
        params.auditStrengthPct / 650,
    ),
  );
  const speedup = Math.max(
    1,
    (params.designRuns * 40) /
      (18 + params.designRuns * 0.18 + params.scenarioDimensions * 1.8),
  );

  return {
    auditCoverage,
    modelRiskScore,
    policyUsefulness,
    posteriorWidth,
    rlConstraintViolation,
    speedup,
    surrogateError,
  };
}

function LearningMethodsLab() {
  const [params, setParams] = useState<LearningMethodsLabParams>({
    designRuns: 260,
    scenarioDimensions: 10,
    observationNoisePct: 12,
    surrogateComplexityPct: 55,
    explorationPct: 28,
    auditStrengthPct: 68,
    policyConservatismPct: 55,
  });

  function updateParam<K extends keyof LearningMethodsLabParams>(
    key: K,
    value: LearningMethodsLabParams[K],
  ) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  const result = solveLearningMethodsLab(params);
  const maxBar = Math.max(
    result.surrogateError,
    result.posteriorWidth,
    result.modelRiskScore,
    result.rlConstraintViolation,
    result.policyUsefulness,
  );

  return (
    <div className="token-lab">
      <div className="token-lab-controls">
        <div className="token-lab-model frontier">
          <h4>Experiment Design</h4>
          <p>
            The design controls how much ABM evidence is available to train a
            surrogate and how hard the scenario space is.
          </p>
          <SliderControl
            label="ABM design runs"
            min={50}
            max={1000}
            step={10}
            value={params.designRuns}
            onChange={(value) => updateParam("designRuns", value)}
          />
          <SliderControl
            label="Scenario dimensions"
            min={4}
            max={30}
            step={1}
            value={params.scenarioDimensions}
            onChange={(value) => updateParam("scenarioDimensions", value)}
          />
          <SliderControl
            label="Observation noise"
            min={0}
            max={40}
            step={1}
            suffix="%"
            value={params.observationNoisePct}
            onChange={(value) => updateParam("observationNoisePct", value)}
          />
          <SliderControl
            label="Surrogate flexibility"
            min={10}
            max={100}
            step={1}
            suffix="%"
            value={params.surrogateComplexityPct}
            onChange={(value) => updateParam("surrogateComplexityPct", value)}
          />
        </div>

        <div className="token-lab-model small-model">
          <h4>Learning Governance</h4>
          <p>
            The governance controls whether learning improves exploration while
            remaining interpretable and constraint-aware.
          </p>
          <SliderControl
            label="Exploration share"
            min={5}
            max={70}
            step={1}
            suffix="%"
            value={params.explorationPct}
            onChange={(value) => updateParam("explorationPct", value)}
          />
          <SliderControl
            label="Audit strength"
            min={20}
            max={100}
            step={1}
            suffix="%"
            value={params.auditStrengthPct}
            onChange={(value) => updateParam("auditStrengthPct", value)}
          />
          <SliderControl
            label="Policy conservatism"
            min={0}
            max={100}
            step={1}
            suffix="%"
            value={params.policyConservatismPct}
            onChange={(value) => updateParam("policyConservatismPct", value)}
          />
          <div className="token-lab-presets">
            <span>Presets</span>
            <button
              type="button"
              onClick={() =>
                setParams({
                  designRuns: 520,
                  scenarioDimensions: 9,
                  observationNoisePct: 8,
                  surrogateComplexityPct: 42,
                  explorationPct: 24,
                  auditStrengthPct: 88,
                  policyConservatismPct: 72,
                })
              }
            >
              Careful audit
            </button>
            <button
              type="button"
              onClick={() =>
                setParams({
                  designRuns: 140,
                  scenarioDimensions: 18,
                  observationNoisePct: 24,
                  surrogateComplexityPct: 88,
                  explorationPct: 56,
                  auditStrengthPct: 42,
                  policyConservatismPct: 24,
                })
              }
            >
              Fast search
            </button>
          </div>
        </div>
      </div>

      <div className="token-lab-results">
        <article>
          <span>Surrogate error</span>
          <strong>{formatPercent(result.surrogateError)}</strong>
          <p>Approximate out-of-sample error for policy outcomes.</p>
        </article>
        <article>
          <span>Speedup</span>
          <strong>{result.speedup.toFixed(0)}x</strong>
          <p>Illustrative gain relative to brute-force ABM exploration.</p>
        </article>
        <article>
          <span>Model-risk score</span>
          <strong>{formatPercent(result.modelRiskScore)}</strong>
          <p>Residual risk after validation, stress tests, and audit.</p>
        </article>
        <article>
          <span>Policy usefulness</span>
          <strong>{formatPercent(result.policyUsefulness)}</strong>
          <p>
            Whether the learned layer is useful enough for research screening.
          </p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Surrogate error ${formatPercent(
          result.surrogateError,
        )}, posterior width ${formatPercent(
          result.posteriorWidth,
        )}, model risk ${formatPercent(result.modelRiskScore)}`}
      >
        <div className="token-lab-bar-row">
          <span>E</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.surrogateError / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.surrogateError)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>U</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(
                  4,
                  (result.posteriorWidth / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.posteriorWidth)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>R</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.rlConstraintViolation / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.rlConstraintViolation)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>P</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(
                  4,
                  (result.policyUsefulness / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.policyUsefulness)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        The numbers are didactic, not calibrated estimates. The purpose is to
        show the scientific tradeoff: learning layers can accelerate scenario
        search, but their usefulness depends on experimental design, validation,
        uncertainty quantification, and constraint-aware governance.
      </p>
    </div>
  );
}

function TokenAdvancedLearningArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {advancedArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="advanced-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            Modern learning methods can make token-economics research more
            powerful, but only if they are embedded inside a disciplined
            scientific workflow. The objective is not to replace the economic
            model with an opaque predictor. The objective is to learn uncertain
            components, accelerate expensive simulations, estimate demand,
            quantify uncertainty, and test policy or procurement rules under
            transparent safeguards.
          </p>
          <p>
            The chapter connects deep learning{" "}
            <CitationLink id="goodfellow2016">
              (Goodfellow, Bengio, and Courville, 2016)
            </CitationLink>
            , Gaussian-process uncertainty quantification{" "}
            <CitationLink id="rasmussenWilliams2006">
              (Rasmussen and Williams, 2006)
            </CitationLink>
            , Bayesian calibration{" "}
            <CitationLink id="kennedyOHagan2001">
              (Kennedy and O'Hagan, 2001)
            </CitationLink>
            , reinforcement learning{" "}
            <CitationLink id="suttonBarto2018">
              (Sutton and Barto, 2018)
            </CitationLink>
            , and model interpretation{" "}
            <CitationLink id="lundbergLee2017">
              (Lundberg and Lee, 2017)
            </CitationLink>{" "}
            to the token-finance problem.
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Explain which parts of token economics can be learned from data
                and which must remain structural assumptions.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define neural and Gaussian-process surrogates for expensive ABM
                outputs.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Formulate Bayesian calibration for unknown behavioral,
                technology, and weather-response parameters.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Describe reinforcement learning for procurement and policy
                search under hard constraints.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                State validation, interpretability, and model-risk controls
                before using learned outputs in economic analysis.
              </p>
            </article>
          </div>
        </section>

        <section id="advanced-why-learning">
          <h3>1. Why Learning Methods Enter the Research Program</h3>
          <p>
            Token economics contains several high-dimensional functions that are
            unknown or costly to evaluate. Examples include task success
            probability as a function of model class and prompt type, output
            token length as a stochastic response, sectoral adoption as a
            function of price and quality, and ABM policy outcomes as functions
            of capacity, weather, regulation, and demand. These functions are
            too important to leave as constants, but too complex to specify
            perfectly from first principles.
          </p>
          <p>
            The learning layer should therefore be interpreted as a map from
            observed evidence to uncertain model components. It must be
            subordinate to economic definitions, not a substitute for them. In
            particular, a learned model cannot decide by itself whether a token
            class is legally admissible, whether a benchmark is valid, or
            whether a policy objective is ethically acceptable. Those objects
            remain institutional and economic primitives.
          </p>
          <MathEquation
            title="Economic model with learned components"
            latex={String.raw`Y=\Phi(\theta,\pi,\xi;\eta),\qquad \eta\sim p(\eta\mid\mathcal D)`}
            explanation="The structural simulator maps parameters, policy, and shocks into outcomes. Learning updates uncertain components eta using evidence D."
            variables={[
              {
                symbol: String.raw`Y`,
                meaning:
                  "outcome vector, such as token prices, shortages, welfare, emissions, and budgets",
              },
              {
                symbol: String.raw`\Phi`,
                meaning:
                  "structural token-economics simulator or model operator",
              },
              {
                symbol: String.raw`\theta`,
                meaning:
                  "economic and technological parameters, such as demand elasticities and capacity expansion speeds",
              },
              {
                symbol: String.raw`\pi`,
                meaning: "policy or procurement design",
              },
              {
                symbol: String.raw`\xi`,
                meaning: "exogenous stochastic shock path",
              },
              {
                symbol: String.raw`\eta`,
                meaning:
                  "learned component, such as a token-quality function, demand function, or surrogate response surface",
              },
              {
                symbol: String.raw`\mathcal D`,
                meaning: "dataset used for estimation or calibration",
              },
            ]}
          />
        </section>

        <section id="advanced-surrogates">
          <h3>2. Neural and Probabilistic Surrogates</h3>
          <p>
            An ABM can be expensive when it must be run across many policy
            rules, weather paths, capacity assumptions, and demand scenarios. A
            surrogate model approximates selected ABM outputs after observing a
            designed set of simulator runs. Neural networks provide flexible
            function approximation{" "}
            <CitationLink id="goodfellow2016">
              (Goodfellow, Bengio, and Courville, 2016)
            </CitationLink>
            . Gaussian processes provide a probabilistic surrogate with
            predictive uncertainty, which is useful when simulation runs are
            expensive{" "}
            <CitationLink id="rasmussenWilliams2006">
              (Rasmussen and Williams, 2006)
            </CitationLink>
            .
          </p>
          <MathEquation
            title="Surrogate response surface"
            latex={String.raw`\widehat Y(z)=f_{\psi}(z),\qquad z=(\theta,\pi,\omega)`}
            explanation="A surrogate approximates the simulator outcome at a scenario-design point z."
            variables={[
              {
                symbol: String.raw`\widehat Y(z)`,
                meaning: "surrogate prediction for the ABM outcome vector",
              },
              {
                symbol: String.raw`f_{\psi}`,
                meaning:
                  "learned function with fitted parameters psi, such as a neural network or Gaussian-process predictor",
              },
              {
                symbol: String.raw`z`,
                meaning:
                  "scenario-design vector containing parameters, policy controls, and experimental conditions",
              },
              {
                symbol: String.raw`\omega`,
                meaning:
                  "scenario controls such as weather stress, demand shock, or grid constraint",
              },
            ]}
          />
          <p>
            A surrogate is useful only inside its validated domain. If it is
            trained on moderate weather shocks, it should not be trusted to
            price tail shortages under extreme heat without explicit stress
            validation. The ABM remains the reference model; the surrogate is a
            fast emulator that proposes where to look next.
          </p>
          <div className="learning-example-card">
            <p>
              Example: suppose 400 ABM runs cover local capacity, certification
              strictness, weather stress, and demand growth. A surrogate can
              estimate welfare and shortage surfaces over thousands of nearby
              combinations. The most important combinations should then be rerun
              in the ABM to check the emulator.
            </p>
          </div>
        </section>

        <section id="advanced-calibration">
          <h3>3. Bayesian Calibration and Model Discrepancy</h3>
          <p>
            Calibration should acknowledge that the simulator may be wrong. A
            scientific model needs parameters, but it also needs an explicit way
            to represent model discrepancy. The Bayesian calibration framework of{" "}
            <CitationLink id="kennedyOHagan2001">
              Kennedy and O'Hagan (2001)
            </CitationLink>{" "}
            is useful because it separates parameter uncertainty from model
            discrepancy.
          </p>
          <MathEquation
            title="Bayesian calibration"
            latex={String.raw`p(\theta,\delta\mid m^{\mathrm{obs}})\propto p(m^{\mathrm{obs}}\mid \theta,\delta)\,p(\theta)\,p(\delta)`}
            explanation="Observed moments update both structural parameters and a model-discrepancy term."
            variables={[
              {
                symbol: String.raw`p(\theta,\delta\mid m^{\mathrm{obs}})`,
                meaning:
                  "posterior distribution over parameters and model discrepancy",
              },
              {
                symbol: String.raw`m^{\mathrm{obs}}`,
                meaning:
                  "observed empirical moments, such as token volumes, prices, outages, or adoption shares",
              },
              {
                symbol: String.raw`\theta`,
                meaning: "structural parameter vector",
              },
              {
                symbol: String.raw`\delta`,
                meaning:
                  "discrepancy term representing systematic simulator mismatch",
              },
              {
                symbol: String.raw`p(m^{\mathrm{obs}}\mid\theta,\delta)`,
                meaning: "likelihood of observing the empirical moments",
              },
            ]}
          />
          <p>
            In token economics, the discrepancy term is not a technical detail.
            It is a warning label. A model may fit current token expenditure
            while underestimating outages, frontier-model scarcity, or policy
            substitution. Posterior intervals should therefore be reported with
            simulation outputs whenever the model is used for research or policy
            comparison.
          </p>
        </section>

        <section id="advanced-quality-index">
          <h3>4. Learned Token-Quality Indices</h3>
          <p>
            A central lesson of the earlier modules is that raw tokens are not
            equivalent. A learned token-quality index can estimate how many
            solved-task units a model-token class produces for a given use case.
            This is a statistical problem because quality is observed through
            benchmark tasks, user outcomes, latency, reliability, safety
            incidents, and compliance status.
          </p>
          <MathEquation
            title="Expected solved-task yield"
            latex={String.raw`\widehat y_{j,u,t}=\mathbb E_{\psi}\!\left[S_{j,u,t}\mid b_u,\ell_{j,t},r_{j,t},c_{j,t},\chi_{j,t}\right]`}
            explanation="The learned yield estimates the expected solved-task service obtained from token class j for use case u."
            variables={[
              {
                symbol: String.raw`\widehat y_{j,u,t}`,
                meaning:
                  "estimated solved-task yield of token class j for use case u at date t",
              },
              {
                symbol: String.raw`S_{j,u,t}`,
                meaning:
                  "random solved-task outcome or quality-adjusted service score",
              },
              {
                symbol: String.raw`b_u`,
                meaning: "benchmark-task vector for use case u",
              },
              {
                symbol: String.raw`\ell_{j,t}`,
                meaning: "latency measurement for token class j",
              },
              {
                symbol: String.raw`r_{j,t}`,
                meaning: "reliability or outage measurement",
              },
              {
                symbol: String.raw`c_{j,t}`,
                meaning: "compliance or admissibility measurement",
              },
              {
                symbol: String.raw`\chi_{j,t}`,
                meaning:
                  "context variables such as prompt length, tool use, or region",
              },
            ]}
          />
          <p>
            The index must be interpretable because it can affect prices,
            hedges, and public procurement. SHAP-style feature attribution can
            help diagnose which variables drive a quality estimate{" "}
            <CitationLink id="lundbergLee2017">
              (Lundberg and Lee, 2017)
            </CitationLink>
            , but attribution is not validation. The index still needs
            out-of-sample task tests, stability checks, manipulation resistance,
            and benchmark-governance rules.
          </p>
        </section>

        <section id="advanced-demand-estimation">
          <h3>5. Demand Estimation by Sector and Use Case</h3>
          <p>
            Token demand is not a single curve. Demand depends on sector, model
            quality, latency, compliance, risk tolerance, and the value of
            solved tasks. A learned demand model may help estimate adoption, but
            it must respect economic structure. The Lucas critique{" "}
            <CitationLink id="lucas1976">Lucas (1976)</CitationLink> is
            relevant: if policy changes incentives and available models,
            historical demand responses may not be invariant.
          </p>
          <MathEquation
            title="Sectoral token demand with learned heterogeneity"
            latex={String.raw`D_{g,u,j,t}=D_{\varphi}\!\left(P^{\mathrm{eff}}_{j,u,t},\widehat y_{j,u,t},A^{\mathrm{adm}}_{g,u,j,t},Z_{g,t}\right)+\varepsilon_{g,u,j,t}`}
            explanation="Demand for token class j is estimated as a function of effective price, learned quality yield, legal admissibility, and sector covariates."
            variables={[
              {
                symbol: String.raw`D_{g,u,j,t}`,
                meaning:
                  "demand from group or sector g for use case u and token class j",
              },
              {
                symbol: String.raw`D_{\varphi}`,
                meaning: "estimated demand function with parameters varphi",
              },
              {
                symbol: String.raw`P^{\mathrm{eff}}_{j,u,t}`,
                meaning:
                  "quality-adjusted effective price of token class j for use case u",
              },
              {
                symbol: String.raw`A^{\mathrm{adm}}_{g,u,j,t}`,
                meaning:
                  "admissibility indicator or weight for group g and use case u",
              },
              {
                symbol: String.raw`Z_{g,t}`,
                meaning:
                  "sector covariates such as income, regulation, and AI readiness",
              },
              {
                symbol: String.raw`\varepsilon_{g,u,j,t}`,
                meaning: "demand shock or residual",
              },
            ]}
          />
          <p>
            A credible demand model should compare flexible learners against
            simpler baselines: elasticities, discrete-choice specifications,
            panel regressions, and scenario-based expert priors. The flexible
            model is useful only if it improves prediction without destroying
            interpretability.
          </p>
        </section>

        <section id="advanced-bayes-opt">
          <h3>6. Bayesian Optimization for Scenario Discovery</h3>
          <p>
            When ABM runs are costly, the research problem is often to find
            informative scenarios rather than to exhaustively enumerate the
            entire parameter space. Bayesian optimization uses a surrogate and
            an acquisition function to decide which scenario should be evaluated
            next. In token economics, the acquisition function may search for
            high welfare loss, high scarcity rent, large policy difference, or
            high uncertainty.
          </p>
          <MathEquation
            title="Sequential scenario selection"
            latex={String.raw`z_{n+1}\in\operatorname*{arg\,max}_{z\in\mathcal Z}a_n(z)`}
            explanation="The next ABM scenario is chosen to maximize an acquisition function based on current surrogate beliefs."
            variables={[
              {
                symbol: String.raw`z_{n+1}`,
                meaning: "next scenario-design point to simulate",
              },
              {
                symbol: String.raw`\mathcal Z`,
                meaning: "admissible scenario-design space",
              },
              {
                symbol: String.raw`a_n(z)`,
                meaning:
                  "acquisition function after n simulator observations, such as expected improvement or uncertainty-weighted stress value",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: if the surrogate is uncertain about certified-capacity
              shortages during high weather stress, the acquisition function can
              select a new ABM run in that region of the scenario space. The
              point is scientific efficiency, not automatic optimization of
              policy.
            </p>
          </div>
        </section>

        <section id="advanced-rl-procurement">
          <h3>7. Reinforcement Learning for Procurement</h3>
          <p>
            Reinforcement learning studies sequential decision making under
            uncertainty{" "}
            <CitationLink id="kaelbling1996">
              (Kaelbling, Littman, and Moore, 1996)
            </CitationLink>
            ;{" "}
            <CitationLink id="suttonBarto2018">
              (Sutton and Barto, 2018)
            </CitationLink>
            . Token procurement is naturally sequential: a buyer chooses spot
            purchases, forward hedges, reserved capacity, and substitution rules
            before future demand, weather, and provider prices are fully known.
          </p>
          <MathEquation
            title="Constrained procurement policy"
            latex={String.raw`\max_{\mu}\mathbb E_{\mu}\!\left[\sum_{t=0}^{T}\gamma^t r(X_t,a_t)\right]\quad\text{s.t.}\quad \Pr_{\mu}\!\left(U^{\mathrm{crit}}_t>\bar U\right)\le \eta`}
            explanation="A procurement policy maximizes discounted reward while bounding the probability of unmet critical demand."
            variables={[
              {
                symbol: String.raw`\mu`,
                meaning: "procurement policy mapping states to actions",
              },
              {
                symbol: String.raw`X_t`,
                meaning:
                  "state at date t, including demand, price, inventory of contracts, capacity, and weather state",
              },
              {
                symbol: String.raw`a_t`,
                meaning:
                  "procurement action, such as spot purchase, hedge, reserve, or substitution",
              },
              {
                symbol: String.raw`r(X_t,a_t)`,
                meaning:
                  "reward, usually negative cost plus service-continuity value",
              },
              {
                symbol: String.raw`\gamma`,
                meaning: "discount factor",
              },
              {
                symbol: String.raw`U^{\mathrm{crit}}_t`,
                meaning: "unmet critical demand at date t",
              },
              {
                symbol: String.raw`\bar U`,
                meaning: "maximum tolerated critical shortage",
              },
              {
                symbol: String.raw`\eta`,
                meaning: "allowed probability of violating the shortage limit",
              },
            ]}
          />
          <p>
            For public-sector or regulated procurement, the constraint is as
            important as the reward. A policy that reduces average cost while
            creating large shortage risk during crises is not acceptable. The
            learning algorithm must therefore be evaluated by constraint
            satisfaction, stress performance, and explainability, not only by
            average simulated reward.
          </p>
        </section>

        <section id="advanced-marl">
          <h3>
            8. Multi-Agent Reinforcement Learning and Strategic Adaptation
          </h3>
          <p>
            Token markets contain strategic agents: providers set prices and
            capacity, buyers hedge, regulators impose rules, grid operators
            ration connections, and investors fund expansion. Multi-agent
            reinforcement learning can be used as a research tool to explore
            adaptive behavior, but it is more fragile than single-agent control
            because the environment changes as other agents learn.
          </p>
          <MathEquation
            title="Strategic learning environment"
            latex={String.raw`a^k_t\sim\mu_k(\cdot\mid X_t),\qquad X_{t+1}\sim P(\cdot\mid X_t,a^1_t,\ldots,a^K_t)`}
            explanation="Each strategic agent chooses an action from its policy, and the next state depends on the joint action profile."
            variables={[
              {
                symbol: String.raw`k`,
                meaning: "strategic agent index",
              },
              {
                symbol: String.raw`a^k_t`,
                meaning: "action of agent k at date t",
              },
              {
                symbol: String.raw`\mu_k`,
                meaning: "policy of agent k",
              },
              {
                symbol: String.raw`P`,
                meaning:
                  "transition kernel for market, capacity, and policy states",
              },
              {
                symbol: String.raw`K`,
                meaning: "number of strategic agents",
              },
            ]}
          />
          <p>
            The scientific use case is mechanism discovery. Multi-agent learning
            may reveal that a benchmark rule creates manipulation incentives,
            that a subsidy induces overbuilding in the wrong region, or that
            priority access shifts risk to SMEs. Such findings must be checked
            against simpler game-theoretic or econometric models before they are
            treated as robust.
          </p>
        </section>

        <section id="advanced-inverse-rl">
          <h3>9. Inverse Reinforcement Learning and Policy Preferences</h3>
          <p>
            Inverse reinforcement learning attempts to infer a reward function
            from observed behavior{" "}
            <CitationLink id="ngRussell2000">
              (Ng and Russell, 2000)
            </CitationLink>
            . In token economics, this idea can be used carefully to study
            revealed preferences in procurement, regulation, or firm adoption.
            The key word is carefully: observed behavior may reflect legal
            constraints, missing information, political bargaining, or market
            power rather than true welfare weights.
          </p>
          <MathEquation
            title="Preference recovery problem"
            latex={String.raw`\widehat{\rho}\in\operatorname*{arg\,min}_{\rho\in\mathcal R}\operatorname{dist}\!\left(\tau^{\mathrm{obs}},\tau^{\mu_{\rho}}\right)`}
            explanation="An inverse-learning exercise searches for reward parameters that make model-implied trajectories resemble observed trajectories."
            variables={[
              {
                symbol: String.raw`\widehat{\rho}`,
                meaning: "estimated reward or preference parameter",
              },
              {
                symbol: String.raw`\mathcal R`,
                meaning: "admissible set of reward parameters",
              },
              {
                symbol: String.raw`\tau^{\mathrm{obs}}`,
                meaning:
                  "observed trajectory, such as procurement, price, or routing decisions",
              },
              {
                symbol: String.raw`\tau^{\mu_{\rho}}`,
                meaning:
                  "trajectory generated by a policy optimized for reward parameter rho",
              },
              {
                symbol: String.raw`\operatorname{dist}`,
                meaning: "distance or loss function over trajectories",
              },
            ]}
          />
        </section>

        <section id="advanced-risk-controls">
          <h3>10. Model-Risk Controls</h3>
          <p>
            Learned components create model risk. A good result on a training
            set is insufficient for economics, finance, or policy. The research
            workflow should include held-out validation, time-split validation,
            stress tests, monotonicity checks, unit tests for equations,
            sensitivity analysis{" "}
            <CitationLink id="saltelli2008">
              (Saltelli et al., 2008)
            </CitationLink>
            , and structured AI-risk governance{" "}
            <CitationLink id="nistAirmf2023">(NIST, 2023)</CitationLink>.
          </p>
          <MathEquation
            title="Model-risk score"
            latex={String.raw`\mathcal R^{\mathrm{model}}=\omega_oL_{\mathrm{out}}+\omega_mV_{\mathrm{mono}}+\omega_cL_{\mathrm{cal}}+\omega_sS_{\mathrm{stress}}`}
            explanation="A model-risk score combines out-of-sample loss, monotonicity violations, calibration loss, and stress-test failures."
            variables={[
              {
                symbol: String.raw`\mathcal R^{\mathrm{model}}`,
                meaning: "model-risk score for the learned component",
              },
              {
                symbol: String.raw`L_{\mathrm{out}}`,
                meaning: "out-of-sample prediction loss",
              },
              {
                symbol: String.raw`V_{\mathrm{mono}}`,
                meaning:
                  "penalty for violating economically required monotonicity or sign restrictions",
              },
              {
                symbol: String.raw`L_{\mathrm{cal}}`,
                meaning: "probabilistic calibration loss",
              },
              {
                symbol: String.raw`S_{\mathrm{stress}}`,
                meaning: "stress-test failure score",
              },
              {
                symbol: String.raw`\omega_o,\omega_m,\omega_c,\omega_s`,
                meaning: "nonnegative model-risk weights",
              },
            ]}
          />
          <table className="learning-table">
            <thead>
              <tr>
                <th>Learned component</th>
                <th>Primary scientific risk</th>
                <th>Required control</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Surrogate model</td>
                <td>Confident extrapolation outside validated scenarios.</td>
                <td>Holdout ABM reruns, uncertainty bands, domain limits.</td>
              </tr>
              <tr>
                <td>Quality index</td>
                <td>Benchmark gaming or hidden task mismatch.</td>
                <td>Governed task basket, manipulation tests, audit trails.</td>
              </tr>
              <tr>
                <td>Demand model</td>
                <td>Policy instability and confounded adoption behavior.</td>
                <td>
                  Structural baselines, time splits, counterfactual checks.
                </td>
              </tr>
              <tr>
                <td>RL policy</td>
                <td>Reward hacking or violation of public constraints.</td>
                <td>
                  Hard constraints, stress tests, human-readable policy rules.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="advanced-interactive-lab">
          <h3>11. Interactive Illustration: Learning Methods Laboratory</h3>
          <p>
            The laboratory below shows the central tradeoff. More simulator runs
            improve surrogate accuracy, but high dimensionality, noisy evidence,
            and excessive model flexibility increase error. Stronger audit and
            conservative policy constraints reduce model risk, but too little
            exploration can miss important stress regions.
          </p>
          <LearningMethodsLab />
        </section>

        <section id="advanced-abm-link">
          <h3>12. Link to the ABM and Token-Finance Laboratory</h3>
          <p>
            The advanced-learning layer should be added to the platform in
            stages. First, run designed ABM experiments and fit simple
            surrogates for selected outcomes such as scarcity rent, shortage
            rate, welfare, emissions, and budget-at-risk. Second, add Bayesian
            calibration for uncertain parameters. Third, estimate token-quality
            and demand modules from benchmark and usage data. Fourth, test
            constrained RL policies offline before allowing any adaptive policy
            to influence scenario recommendations.
          </p>
          <p>
            A useful architecture is a three-model stack: a structural economic
            model defines variables and constraints, an ABM simulates
            heterogeneous mechanisms, and a learned layer accelerates
            exploration or estimates uncertain components. The learned layer
            should always report uncertainty and never overwrite the structural
            definitions of token classes, admissibility, welfare, or risk.
          </p>
        </section>

        <section id="advanced-exercises">
          <h3>13. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Give two examples of token-economics functions that are suitable
              for supervised learning and two that should remain explicit
              structural assumptions.
            </li>
            <li>
              Explain why a surrogate model trained on moderate weather stress
              should not be trusted automatically in extreme weather scenarios.
            </li>
            <li>
              Write a Bayesian calibration problem for an unknown demand
              elasticity and an unknown model-discrepancy term.
            </li>
            <li>
              Define a reward function for public token procurement and state at
              least one hard constraint that should not be violated.
            </li>
            <li>
              Design a validation protocol for a learned token-quality index
              that could be used in a token-service benchmark.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 7</h3>
            <p>
              The references below use publisher pages, official proceedings,
              DOI links, or stable institutional sources where available.
            </p>
            <ol className="reference-list">
              {advancedReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

interface DataCalibrationLabParams {
  telemetryCoveragePct: number;
  sourceDiversity: number;
  measurementNoisePct: number;
  benchmarkCadence: number;
  holdoutSharePct: number;
  provenancePct: number;
  priorStrengthPct: number;
  marketTransparencyPct: number;
}

function solveDataCalibrationLab(params: DataCalibrationLabParams) {
  const coverage = params.telemetryCoveragePct / 100;
  const diversity = params.sourceDiversity / 8;
  const noise = params.measurementNoisePct / 100;
  const cadence = params.benchmarkCadence / 12;
  const holdout = params.holdoutSharePct / 100;
  const provenance = params.provenancePct / 100;
  const prior = params.priorStrengthPct / 100;
  const transparency = params.marketTransparencyPct / 100;

  const dataQuality = Math.max(
    0.03,
    Math.min(
      1,
      0.08 +
        0.27 * coverage +
        0.15 * diversity +
        0.13 * cadence +
        0.2 * provenance +
        0.12 * transparency -
        0.28 * noise,
    ),
  );
  const identificationStrength = Math.max(
    0.02,
    Math.min(
      1,
      0.1 +
        0.28 * coverage +
        0.22 * diversity +
        0.18 * transparency +
        0.1 * cadence -
        0.22 * noise,
    ),
  );
  const posteriorWidth = Math.max(
    0.025,
    Math.min(
      0.75,
      0.62 * (1 - dataQuality) * (1 - 0.45 * prior) +
        0.34 * noise +
        0.11 * (1 - identificationStrength),
    ),
  );
  const validationCredibility = Math.max(
    0.02,
    Math.min(
      1,
      0.12 +
        0.28 * holdout +
        0.23 * provenance +
        0.16 * diversity +
        0.13 * coverage +
        0.09 * transparency -
        0.24 * noise,
    ),
  );
  const calibrationReadiness = Math.max(
    0.02,
    Math.min(
      1,
      0.34 * dataQuality +
        0.24 * identificationStrength +
        0.24 * validationCredibility +
        0.18 * (1 - posteriorWidth),
    ),
  );

  return {
    calibrationReadiness,
    dataQuality,
    identificationStrength,
    posteriorWidth,
    validationCredibility,
  };
}

function DataCalibrationLab() {
  const [params, setParams] = useState<DataCalibrationLabParams>({
    telemetryCoveragePct: 55,
    sourceDiversity: 5,
    measurementNoisePct: 14,
    benchmarkCadence: 6,
    holdoutSharePct: 25,
    provenancePct: 70,
    priorStrengthPct: 45,
    marketTransparencyPct: 50,
  });

  function updateParam<K extends keyof DataCalibrationLabParams>(
    key: K,
    value: DataCalibrationLabParams[K],
  ) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  const result = solveDataCalibrationLab(params);
  const maxBar = Math.max(
    result.calibrationReadiness,
    result.dataQuality,
    result.identificationStrength,
    result.posteriorWidth,
    result.validationCredibility,
  );

  return (
    <div className="token-lab">
      <div className="token-lab-controls">
        <div className="token-lab-model frontier">
          <h4>Empirical Coverage</h4>
          <p>
            These controls represent how much of the token-economics system is
            observed with usable, comparable, and repeated measurements.
          </p>
          <SliderControl
            label="Telemetry coverage"
            min={5}
            max={100}
            step={1}
            suffix="%"
            value={params.telemetryCoveragePct}
            onChange={(value) => updateParam("telemetryCoveragePct", value)}
          />
          <SliderControl
            label="Source diversity"
            min={1}
            max={8}
            step={1}
            value={params.sourceDiversity}
            onChange={(value) => updateParam("sourceDiversity", value)}
          />
          <SliderControl
            label="Measurement noise"
            min={0}
            max={45}
            step={1}
            suffix="%"
            value={params.measurementNoisePct}
            onChange={(value) => updateParam("measurementNoisePct", value)}
          />
          <SliderControl
            label="Benchmark cadence"
            min={1}
            max={12}
            step={1}
            suffix="/yr"
            value={params.benchmarkCadence}
            onChange={(value) => updateParam("benchmarkCadence", value)}
          />
        </div>

        <div className="token-lab-model small-model">
          <h4>Scientific Controls</h4>
          <p>
            These controls represent the design choices that make calibration
            reproducible rather than merely fitted.
          </p>
          <SliderControl
            label="Holdout share"
            min={5}
            max={45}
            step={1}
            suffix="%"
            value={params.holdoutSharePct}
            onChange={(value) => updateParam("holdoutSharePct", value)}
          />
          <SliderControl
            label="Provenance completeness"
            min={10}
            max={100}
            step={1}
            suffix="%"
            value={params.provenancePct}
            onChange={(value) => updateParam("provenancePct", value)}
          />
          <SliderControl
            label="Prior discipline"
            min={0}
            max={100}
            step={1}
            suffix="%"
            value={params.priorStrengthPct}
            onChange={(value) => updateParam("priorStrengthPct", value)}
          />
          <SliderControl
            label="Market transparency"
            min={0}
            max={100}
            step={1}
            suffix="%"
            value={params.marketTransparencyPct}
            onChange={(value) => updateParam("marketTransparencyPct", value)}
          />
          <div className="token-lab-presets">
            <span>Presets</span>
            <button
              type="button"
              onClick={() =>
                setParams({
                  telemetryCoveragePct: 82,
                  sourceDiversity: 7,
                  measurementNoisePct: 7,
                  benchmarkCadence: 10,
                  holdoutSharePct: 32,
                  provenancePct: 92,
                  priorStrengthPct: 70,
                  marketTransparencyPct: 78,
                })
              }
            >
              Audit-ready
            </button>
            <button
              type="button"
              onClick={() =>
                setParams({
                  telemetryCoveragePct: 28,
                  sourceDiversity: 3,
                  measurementNoisePct: 31,
                  benchmarkCadence: 3,
                  holdoutSharePct: 10,
                  provenancePct: 36,
                  priorStrengthPct: 18,
                  marketTransparencyPct: 24,
                })
              }
            >
              Thin data
            </button>
          </div>
        </div>
      </div>

      <div className="token-lab-results">
        <article>
          <span>Data quality</span>
          <strong>{formatPercent(result.dataQuality)}</strong>
          <p>Coverage, source diversity, cadence, provenance, and noise.</p>
        </article>
        <article>
          <span>Identification</span>
          <strong>{formatPercent(result.identificationStrength)}</strong>
          <p>Whether moments can distinguish competing parameter values.</p>
        </article>
        <article>
          <span>Posterior width</span>
          <strong>{formatPercent(result.posteriorWidth)}</strong>
          <p>Residual parameter uncertainty after calibration.</p>
        </article>
        <article>
          <span>Readiness</span>
          <strong>{formatPercent(result.calibrationReadiness)}</strong>
          <p>Whether the empirical workflow is ready for research use.</p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Data quality ${formatPercent(
          result.dataQuality,
        )}, identification ${formatPercent(
          result.identificationStrength,
        )}, posterior width ${formatPercent(result.posteriorWidth)}`}
      >
        <div className="token-lab-bar-row">
          <span>Q</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(4, (result.dataQuality / maxBar) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.dataQuality)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>I</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(
                  4,
                  (result.identificationStrength / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.identificationStrength)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>U</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.posteriorWidth / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.posteriorWidth)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>V</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(
                  4,
                  (result.validationCredibility / maxBar) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.validationCredibility)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        The laboratory is a teaching device. It illustrates that calibration is a
        scientific measurement problem. Data coverage, source independence,
        measurement noise, provenance, and holdout validation determine whether
        fitted parameters are meaningful.
      </p>
    </div>
  );
}

function TokenDataCalibrationArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {dataArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="data-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            A token-economics model becomes scientifically useful only when its
            variables are connected to observable evidence. This module defines
            the empirical layer: data sources, measurement equations,
            calibration targets, validation scores, provenance, and governance
            rules. The aim is not to pretend that every relevant quantity is
            observable. The aim is to state clearly which quantities are
            measured, which are inferred, and which remain assumptions.
          </p>
          <p>
            The data standard follows the FAIR principles{" "}
            <CitationLink id="wilkinsonFair2016">
              (Wilkinson et al., 2016)
            </CitationLink>{" "}
            and W3C provenance concepts{" "}
            <CitationLink id="w3cProv2013">(W3C, 2013)</CitationLink>.
            Calibration uses both moment-based econometrics{" "}
            <CitationLink id="hansen1982">(Hansen, 1982)</CitationLink> and
            Bayesian computer-model calibration{" "}
            <CitationLink id="kennedyOHagan2001">
              (Kennedy and O'Hagan, 2001)
            </CitationLink>
            . Validation follows the ABM validation discipline discussed by{" "}
            <CitationLink id="fagiolo2007">
              Fagiolo, Moneta, and Windrum (2007)
            </CitationLink>{" "}
            and probabilistic forecast scoring from{" "}
            <CitationLink id="gneitingRaftery2007">
              Gneiting and Raftery (2007)
            </CitationLink>
            .
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>Separate observables, latent variables, and assumptions.</p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Write measurement equations before writing calibration
                objectives.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define empirical moments for token prices, demand, energy,
                outages, and policy routing.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Validate the model with held-out moments, stress tests, scoring
                rules, and provenance audits.
              </p>
            </article>
          </div>
        </section>

        <section id="data-why">
          <h3>1. Why Data Architecture Is a Model Component</h3>
          <p>
            In token economics, data architecture is not a back-office detail.
            It determines what can be learned. Raw provider invoices may reveal
            billable input and output tokens, but not hidden orchestration.
            Public electricity data may reveal nodal or zonal prices, but not
            the private power contract of a data centre. Benchmark scores may
            reveal model capability on a task basket, but not the value of that
            model to a hospital, law firm, or public agency. The empirical
            system must therefore include an observation operator.
          </p>
          <MathEquation
            title="Observation operator"
            latex={String.raw`\widetilde M_t=H(Y_t;\zeta)+\varepsilon_t`}
            explanation="Observed measurements are noisy transformations of model outcomes rather than the outcomes themselves."
            variables={[
              {
                symbol: String.raw`\widetilde M_t`,
                meaning: "vector of observed empirical measurements at date t",
              },
              {
                symbol: String.raw`Y_t`,
                meaning:
                  "latent model outcome vector, such as true demand, service quality, capacity, prices, and shortages",
              },
              {
                symbol: String.raw`H`,
                meaning:
                  "observation operator mapping model outcomes into reported data",
              },
              {
                symbol: String.raw`\zeta`,
                meaning:
                  "measurement-system parameters, such as reporting coverage and aggregation rules",
              },
              {
                symbol: String.raw`\varepsilon_t`,
                meaning: "measurement error or reporting noise",
              },
            ]}
          />
        </section>

        <section id="data-observable-latent">
          <h3>2. Observable Variables and Latent Variables</h3>
          <p>
            The first calibration step is a vocabulary exercise. A researcher
            must decide whether a symbol denotes something directly observed,
            indirectly estimated, or assumed for scenario analysis. Confusing
            these categories makes a simulator look empirical when it is only
            parameterized.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Empirical status</th>
                <th>Typical measurement problem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Posted token price</td>
                <td>Often observable from provider schedules.</td>
                <td>
                  Discounts, batch prices, reserved capacity, and outages.
                </td>
              </tr>
              <tr>
                <td>Effective token price</td>
                <td>Estimated.</td>
                <td>
                  Requires quality adjustment, repeated attempts, latency, and
                  residual-error cost.
                </td>
              </tr>
              <tr>
                <td>Output token length</td>
                <td>Observable in telemetry for measured workflows.</td>
                <td>Task mix and hidden reasoning or tool-use tokens.</td>
              </tr>
              <tr>
                <td>Solving probability</td>
                <td>Estimated from benchmarks and outcome studies.</td>
                <td>Benchmark-task mismatch and strategic benchmark gaming.</td>
              </tr>
              <tr>
                <td>Electricity price</td>
                <td>Observable for public zones or nodes.</td>
                <td>
                  Private contracts and data-centre-specific pass-through.
                </td>
              </tr>
              <tr>
                <td>Scarcity rent</td>
                <td>Latent.</td>
                <td>
                  Must be inferred from utilization, queueing, outages, and
                  marginal price behavior.
                </td>
              </tr>
              <tr>
                <td>Policy admissibility</td>
                <td>Constructed from legal and institutional rules.</td>
                <td>Interpretation, enforcement, exemptions, and updates.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="data-sources">
          <h3>3. Data Source Map</h3>
          <p>
            A token-economics dataset should be assembled from independent
            sources whenever possible. Provider data is necessary but not
            sufficient; it must be checked against benchmarks, electricity
            markets, public statistics, and policy records. Official energy and
            macro sources include{" "}
            <CitationLink id="entsoeTransparency">ENTSO-E</CitationLink>,{" "}
            <CitationLink id="eurostatDatabase">Eurostat</CitationLink>, and{" "}
            <CitationLink id="iea2025">IEA</CitationLink>.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Examples</th>
                <th>Use in calibration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Token service</td>
                <td>Input/output tokens, cached tokens, batch use, latency.</td>
                <td>
                  Usage volumes, output-length distributions, cost per task.
                </td>
              </tr>
              <tr>
                <td>Quality and outcomes</td>
                <td>Benchmark tasks, human review, failure rates, rework.</td>
                <td>Task-equivalent yields and effective prices.</td>
              </tr>
              <tr>
                <td>Market and contracts</td>
                <td>Spot prices, forward quotes, reserves, outages.</td>
                <td>Price dynamics, scarcity rents, basis risk.</td>
              </tr>
              <tr>
                <td>Energy and weather</td>
                <td>Electricity price, load, renewable output, temperature.</td>
                <td>Energy pass-through and weather shock processes.</td>
              </tr>
              <tr>
                <td>Macroeconomic adoption</td>
                <td>
                  Sector output, firm size, digital intensity, regulation.
                </td>
                <td>Demand heterogeneity and adoption response.</td>
              </tr>
              <tr>
                <td>Legal and policy</td>
                <td>AI rules, data residency, procurement rules, subsidies.</td>
                <td>Admissibility matrices and policy scenario constraints.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="data-measurement-model">
          <h3>4. Measurement Model</h3>
          <p>
            Each empirical series should have its own measurement equation. This
            prevents the model from silently treating a noisy proxy as the true
            object. For example, posted token price is a proxy for marginal
            token-service cost; benchmark score is a proxy for solved-task
            yield; public electricity price is a proxy for a data centre's
            marginal power cost.
          </p>
          <MathEquation
            title="Measurement equation for empirical moment k"
            latex={String.raw`\widetilde m_{k,t}=h_k(Y_t,\zeta_k)+\varepsilon_{k,t},\qquad \mathbb E[\varepsilon_{k,t}\mid\mathcal F_{t-1}]=0`}
            explanation="Each observed moment is a noisy report of a latent model object under an explicit measurement rule."
            variables={[
              {
                symbol: String.raw`\widetilde m_{k,t}`,
                meaning: "observed empirical moment k at date t",
              },
              {
                symbol: String.raw`h_k`,
                meaning: "measurement function for moment k",
              },
              {
                symbol: String.raw`\zeta_k`,
                meaning:
                  "measurement parameters, such as coverage, lag, and aggregation",
              },
              {
                symbol: String.raw`\mathcal F_{t-1}`,
                meaning: "information available before date t",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: if provider telemetry covers only enterprise customers,
              then the observed output-token distribution may understate
              consumer experimentation and overstate high-value business tasks.
              The measurement function should include coverage weights.
            </p>
          </div>
        </section>

        <section id="data-moments">
          <h3>5. Calibration Moments</h3>
          <p>
            A calibration target is a statistic that the model is expected to
            reproduce within uncertainty. Moment-based calibration is connected
            to generalized method of moments{" "}
            <CitationLink id="hansen1982">(Hansen, 1982)</CitationLink>. In this
            project, useful moments include average token expenditure, output
            token variance, adoption by sector, electricity-price sensitivity,
            shortage frequency, capacity utilization, and policy-routing shares.
          </p>
          <MathEquation
            title="Moment-matching calibration"
            latex={String.raw`\widehat\theta\in\operatorname*{arg\,min}_{\theta\in\Theta}\left(\widehat m^{\mathrm{obs}}-\widehat m^{\mathrm{sim}}(\theta)\right)^\top W\left(\widehat m^{\mathrm{obs}}-\widehat m^{\mathrm{sim}}(\theta)\right)`}
            explanation="The calibrated parameter vector minimizes a weighted distance between observed and simulated moments."
            variables={[
              {
                symbol: String.raw`\widehat\theta`,
                meaning: "calibrated parameter vector",
              },
              {
                symbol: String.raw`\Theta`,
                meaning: "admissible parameter set",
              },
              {
                symbol: String.raw`\widehat m^{\mathrm{obs}}`,
                meaning: "vector of observed empirical moments",
              },
              {
                symbol: String.raw`\widehat m^{\mathrm{sim}}(\theta)`,
                meaning:
                  "vector of simulated moments produced by the model under parameter theta",
              },
              {
                symbol: String.raw`W`,
                meaning:
                  "positive semidefinite weighting matrix, often reflecting measurement precision and research priorities",
              },
            ]}
          />
        </section>

        <section id="data-bayesian-calibration">
          <h3>6. Bayesian Calibration and Discrepancy</h3>
          <p>
            Moment matching gives a point estimate. Bayesian calibration gives a
            distribution over parameters and should include model discrepancy
            when the simulator is known to be incomplete{" "}
            <CitationLink id="kennedyOHagan2001">
              (Kennedy and O'Hagan, 2001)
            </CitationLink>
            . This is especially important for token economics because provider
            behavior, hidden tokens, and policy enforcement may not be fully
            represented.
          </p>
          <MathEquation
            title="Posterior predictive distribution"
            latex={String.raw`p(Y^{\mathrm{new}}\mid\mathcal D)=\int p(Y^{\mathrm{new}}\mid\theta,\delta)\,p(\theta,\delta\mid\mathcal D)\,d\theta\,d\delta`}
            explanation="Predictions integrate over parameter uncertainty and model discrepancy rather than using only one fitted parameter vector."
            variables={[
              {
                symbol: String.raw`Y^{\mathrm{new}}`,
                meaning: "future or held-out model outcome to be predicted",
              },
              {
                symbol: String.raw`\mathcal D`,
                meaning: "calibration data",
              },
              {
                symbol: String.raw`\delta`,
                meaning: "model-discrepancy component",
              },
            ]}
          />
        </section>

        <section id="data-identification">
          <h3>7. Identification and Sensitivity</h3>
          <p>
            A parameter is identified when different parameter values imply
            observably different moments. Calibration without identification can
            produce precise-looking numbers that are not scientifically
            meaningful. Sensitivity analysis{" "}
            <CitationLink id="saltelli2008">
              (Saltelli et al., 2008)
            </CitationLink>{" "}
            should therefore be reported next to calibrated parameters.
          </p>
          <MathEquation
            title="Local identification matrix"
            latex={String.raw`\mathcal I(\theta)=J(\theta)^\top WJ(\theta),\qquad J_{k\ell}(\theta)=\frac{\partial m_k^{\mathrm{sim}}(\theta)}{\partial\theta_\ell}`}
            explanation="The local identification matrix measures how strongly simulated moments respond to parameter changes."
            variables={[
              {
                symbol: String.raw`\mathcal I(\theta)`,
                meaning: "local identification or information matrix",
              },
              {
                symbol: String.raw`J(\theta)`,
                meaning: "Jacobian matrix of simulated moments",
              },
              {
                symbol: String.raw`J_{k\ell}(\theta)`,
                meaning: "sensitivity of moment k to parameter ell at theta",
              },
              {
                symbol: String.raw`\theta_\ell`,
                meaning: "parameter ell",
              },
            ]}
          />
          <p>
            If two parameters change the same moments in nearly the same way,
            the matrix is ill-conditioned. For example, high token demand and
            low capacity can both raise scarcity prices. A calibration dataset
            must include additional moments, such as utilization, queueing, or
            shortage frequency, to distinguish them.
          </p>
        </section>

        <section id="data-validation">
          <h3>8. Validation Protocol</h3>
          <p>
            Validation asks whether the model is accurate enough for its
            intended use. It does not ask whether the model is universally true.
            ABM validation in economics should combine qualitative mechanism
            checks, moment validation, distributional validation, sensitivity
            analysis, and out-of-sample tests{" "}
            <CitationLink id="fagiolo2007">
              (Fagiolo, Moneta, and Windrum, 2007)
            </CitationLink>
            .
          </p>
          <MathEquation
            title="Validation score"
            latex={String.raw`\mathcal V=\omega_m L_m+\omega_d L_d+\omega_s L_s+\omega_p L_p`}
            explanation="A validation score aggregates different validation losses; lower values indicate better validation performance."
            variables={[
              {
                symbol: String.raw`\mathcal V`,
                meaning: "validation score",
              },
              {
                symbol: String.raw`L_m`,
                meaning: "moment-matching loss on held-out moments",
              },
              {
                symbol: String.raw`L_d`,
                meaning:
                  "distributional loss for outcomes such as prices or shortages",
              },
              {
                symbol: String.raw`L_s`,
                meaning: "stress-test loss under extreme scenarios",
              },
              {
                symbol: String.raw`L_p`,
                meaning:
                  "provenance or reproducibility penalty for incomplete data lineage",
              },
              {
                symbol: String.raw`\omega_m,\omega_d,\omega_s,\omega_p`,
                meaning: "nonnegative validation weights",
              },
            ]}
          />
        </section>

        <section id="data-scoring">
          <h3>9. Probabilistic Forecast Scoring</h3>
          <p>
            Because the model contains weather, demand, output-token, and policy
            uncertainty, validation should often score predictive distributions
            rather than point forecasts. Strictly proper scoring rules reward
            honest probabilistic forecasts{" "}
            <CitationLink id="gneitingRaftery2007">
              (Gneiting and Raftery, 2007)
            </CitationLink>
            .
          </p>
          <MathEquation
            title="Log score for a predictive density"
            latex={String.raw`\operatorname{LS}(F,y)=-\log f(y)`}
            explanation="The log score penalizes a predictive distribution F when the realized observation y has low assigned density."
            variables={[
              {
                symbol: String.raw`F`,
                meaning: "predictive distribution",
              },
              {
                symbol: String.raw`f`,
                meaning: "density of predictive distribution F",
              },
              {
                symbol: String.raw`y`,
                meaning: "realized observation",
              },
            ]}
          />
          <p>
            For token economics, proper scoring rules can be applied to
            electricity-price paths, token expenditure, shortage rates,
            effective token prices, and budget-at-risk. A model that gives
            narrow intervals and misses crisis states should be penalized more
            than a model that admits uncertainty honestly.
          </p>
        </section>

        <section id="data-provenance">
          <h3>10. Provenance and Reproducibility</h3>
          <p>
            A calibrated model should be reproducible. Each data object should
            record source, license, retrieval time, transformation code,
            version, and quality flags. This is consistent with FAIR data
            stewardship{" "}
            <CitationLink id="wilkinsonFair2016">
              (Wilkinson et al., 2016)
            </CitationLink>{" "}
            and W3C provenance standards{" "}
            <CitationLink id="w3cProv2013">(W3C, 2013)</CitationLink>.
          </p>
          <MathEquation
            title="Dataset provenance record"
            latex={String.raw`d=(s,u,\ell,\nu,t^{\mathrm{pull}},T,q)`}
            explanation="A dataset record stores enough provenance to make a calibration input auditable."
            variables={[
              {
                symbol: String.raw`d`,
                meaning: "dataset or empirical series record",
              },
              {
                symbol: String.raw`s`,
                meaning: "source institution or provider",
              },
              {
                symbol: String.raw`u`,
                meaning: "URL, API endpoint, or retrieval route",
              },
              {
                symbol: String.raw`\ell`,
                meaning: "license or legal-use condition",
              },
              {
                symbol: String.raw`\nu`,
                meaning: "dataset version or release identifier",
              },
              {
                symbol: String.raw`t^{\mathrm{pull}}`,
                meaning: "retrieval timestamp",
              },
              {
                symbol: String.raw`T`,
                meaning: "transformation pipeline applied to raw data",
              },
              {
                symbol: String.raw`q`,
                meaning: "quality flag or audit score",
              },
            ]}
          />
        </section>

        <section id="data-governance">
          <h3>11. Governance of the Empirical Layer</h3>
          <p>
            Data governance should specify who can update sources, how revisions
            are logged, how missing observations are handled, which calibration
            runs are reproducible, and which outputs are allowed to support
            policy or procurement claims. A token-economics result should carry
            a calibration label: exploratory, internally validated, externally
            audited, or publication-ready.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Meaning</th>
                <th>Allowed use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Exploratory</td>
                <td>Scenario assumptions and partial data.</td>
                <td>Mechanism learning and teaching.</td>
              </tr>
              <tr>
                <td>Internally validated</td>
                <td>Held-out moments and documented provenance.</td>
                <td>Research comparison and sensitivity analysis.</td>
              </tr>
              <tr>
                <td>Externally audited</td>
                <td>Independent review of data, code, and assumptions.</td>
                <td>Policy discussion with uncertainty bands.</td>
              </tr>
              <tr>
                <td>Publication-ready</td>
                <td>
                  Stable data release, reproducible code, and cited methods.
                </td>
                <td>Scholarly claims and formal reporting.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="data-interactive-lab">
          <h3>
            12. Interactive Illustration: Calibration Readiness Laboratory
          </h3>
          <p>
            The laboratory below illustrates why calibration quality depends on
            the empirical design. More telemetry is helpful, but it is not
            enough if all data come from one biased source. More prior
            discipline is helpful, but it cannot compensate for a model whose
            parameters are not identified by the available moments.
          </p>
          <DataCalibrationLab />
        </section>

        <section id="data-abm-link">
          <h3>13. Link to the ABM</h3>
          <p>
            In the current browser model, many parameters remain scenario
            inputs. Milestone 8 defines how those inputs should become
            empirically disciplined over time. Demand growth should be tied to
            adoption and sector-output moments. Weather sensitivity should be
            tied to electricity-load and renewable-output data. Token price
            dynamics should be tied to posted prices, benchmark token use,
            capacity utilization, and outage observations. Policy routing should
            be tied to legal admissibility rules and observed procurement
            constraints.
          </p>
          <p>
            The immediate implementation roadmap is: define a calibration data
            schema, add provenance fields to imported data, store empirical
            moments separately from scenario assumptions, add validation outputs
            to the simulator, and label each scenario result by calibration
            status.
          </p>
        </section>

        <section id="data-exercises">
          <h3>14. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Classify posted token price, effective token price, solved-task
              yield, and scarcity rent as observable, estimated, or latent.
            </li>
            <li>
              Write a measurement equation for electricity-price pass-through
              from a public market price to a data-centre marginal cost.
            </li>
            <li>
              Propose five empirical moments that should be used to calibrate
              token demand and capacity scarcity.
            </li>
            <li>
              Explain why two different parameter vectors can fit average token
              expenditure while implying different tail risks.
            </li>
            <li>
              Design a provenance record for a benchmark dataset used to
              estimate a token-quality index.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 8</h3>
            <p>
              The references below use DOI links, official institutional
              sources, or standards-body pages where available.
            </p>
            <ol className="reference-list">
              {dataReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

interface PortfolioHedgingLabParams {
  exposureUnits: number;
  requiredSpot: number;
  hedgeForward: number;
  hedgeExpectedSpot: number;
  hedgeSharePct: number;
  hedgeCorrelationPct: number;
  tokenVolatilityPct: number;
  tailShockPct: number;
  marginRatePct: number;
  liquidityBufferPct: number;
}

function solvePortfolioHedgingLab(params: PortfolioHedgingLabParams) {
  const hedgeShare = params.hedgeSharePct / 100;
  const correlation = params.hedgeCorrelationPct / 100;
  const volatility = params.tokenVolatilityPct / 100;
  const tailShock = params.tailShockPct / 100;
  const marginRate = params.marginRatePct / 100;
  const liquidityBuffer = params.liquidityBufferPct / 100;

  const exposure = params.exposureUnits * params.requiredSpot;
  const unhedgedTailCost =
    params.exposureUnits * params.requiredSpot * (1 + tailShock);
  const hedgePayoff =
    params.exposureUnits *
    hedgeShare *
    correlation *
    (params.hedgeExpectedSpot - params.hedgeForward);
  const hedgedExpectedCost = exposure - hedgePayoff;
  const residualTail =
    params.exposureUnits *
    params.requiredSpot *
    (1 + tailShock * (1 - hedgeShare * correlation));
  const marginNeed =
    params.exposureUnits *
    hedgeShare *
    params.hedgeForward *
    (marginRate + liquidityBuffer * Math.max(0.15, volatility));
  const basisRisk = Math.max(
    0.01,
    volatility * Math.sqrt(Math.max(0, 1 - correlation * correlation)),
  );
  const cvarProxy = residualTail + 0.35 * marginNeed;
  const hedgeEfficiency = Math.max(
    0,
    Math.min(1, (unhedgedTailCost - cvarProxy) / Math.max(1, unhedgedTailCost)),
  );

  return {
    basisRisk,
    cvarProxy,
    exposure,
    hedgeEfficiency,
    hedgePayoff,
    hedgedExpectedCost,
    marginNeed,
    residualTail,
    unhedgedTailCost,
  };
}

function PortfolioHedgingLab() {
  const [params, setParams] = useState<PortfolioHedgingLabParams>({
    exposureUnits: 120,
    requiredSpot: 0.12,
    hedgeForward: 0.115,
    hedgeExpectedSpot: 0.15,
    hedgeSharePct: 65,
    hedgeCorrelationPct: 78,
    tokenVolatilityPct: 34,
    tailShockPct: 75,
    marginRatePct: 9,
    liquidityBufferPct: 14,
  });

  function updateParam<K extends keyof PortfolioHedgingLabParams>(
    key: K,
    value: PortfolioHedgingLabParams[K],
  ) {
    setParams((current) => ({ ...current, [key]: value }));
  }

  const result = solvePortfolioHedgingLab(params);
  const maxCost = Math.max(
    result.unhedgedTailCost,
    result.residualTail,
    result.cvarProxy,
    result.marginNeed,
    1,
  );

  return (
    <div className="token-lab">
      <div className="token-lab-controls">
        <div className="token-lab-model frontier">
          <h4>Exposure and Hedge</h4>
          <p>
            The buyer needs a future token class but hedges with a forward or
            index that may not track the required exposure perfectly.
          </p>
          <SliderControl
            label="Exposure units"
            min={20}
            max={500}
            step={5}
            value={params.exposureUnits}
            onChange={(value) => updateParam("exposureUnits", value)}
          />
          <SliderControl
            label="Required spot"
            min={0.02}
            max={0.5}
            step={0.005}
            value={params.requiredSpot}
            onChange={(value) => updateParam("requiredSpot", value)}
          />
          <SliderControl
            label="Hedge forward"
            min={0.02}
            max={0.5}
            step={0.005}
            value={params.hedgeForward}
            onChange={(value) => updateParam("hedgeForward", value)}
          />
          <SliderControl
            label="Expected hedge spot"
            min={0.02}
            max={0.7}
            step={0.005}
            value={params.hedgeExpectedSpot}
            onChange={(value) => updateParam("hedgeExpectedSpot", value)}
          />
          <SliderControl
            label="Hedge share"
            min={0}
            max={100}
            step={1}
            suffix="%"
            value={params.hedgeSharePct}
            onChange={(value) => updateParam("hedgeSharePct", value)}
          />
        </div>

        <div className="token-lab-model small-model">
          <h4>Risk Conditions</h4>
          <p>
            Correlation controls basis risk; tail shock and margin determine
            whether a hedge is affordable under stress.
          </p>
          <SliderControl
            label="Hedge correlation"
            min={0}
            max={100}
            step={1}
            suffix="%"
            value={params.hedgeCorrelationPct}
            onChange={(value) => updateParam("hedgeCorrelationPct", value)}
          />
          <SliderControl
            label="Token volatility"
            min={5}
            max={100}
            step={1}
            suffix="%"
            value={params.tokenVolatilityPct}
            onChange={(value) => updateParam("tokenVolatilityPct", value)}
          />
          <SliderControl
            label="Tail shock"
            min={5}
            max={200}
            step={1}
            suffix="%"
            value={params.tailShockPct}
            onChange={(value) => updateParam("tailShockPct", value)}
          />
          <SliderControl
            label="Margin rate"
            min={0}
            max={35}
            step={1}
            suffix="%"
            value={params.marginRatePct}
            onChange={(value) => updateParam("marginRatePct", value)}
          />
          <SliderControl
            label="Liquidity buffer"
            min={0}
            max={50}
            step={1}
            suffix="%"
            value={params.liquidityBufferPct}
            onChange={(value) => updateParam("liquidityBufferPct", value)}
          />
          <div className="token-lab-presets">
            <span>Presets</span>
            <button
              type="button"
              onClick={() =>
                setParams({
                  exposureUnits: 150,
                  requiredSpot: 0.13,
                  hedgeForward: 0.125,
                  hedgeExpectedSpot: 0.17,
                  hedgeSharePct: 85,
                  hedgeCorrelationPct: 93,
                  tokenVolatilityPct: 28,
                  tailShockPct: 60,
                  marginRatePct: 8,
                  liquidityBufferPct: 12,
                })
              }
            >
              Strong hedge
            </button>
            <button
              type="button"
              onClick={() =>
                setParams({
                  exposureUnits: 150,
                  requiredSpot: 0.13,
                  hedgeForward: 0.095,
                  hedgeExpectedSpot: 0.14,
                  hedgeSharePct: 70,
                  hedgeCorrelationPct: 38,
                  tokenVolatilityPct: 62,
                  tailShockPct: 125,
                  marginRatePct: 20,
                  liquidityBufferPct: 30,
                })
              }
            >
              Basis stress
            </button>
          </div>
        </div>
      </div>

      <div className="token-lab-results">
        <article>
          <span>Unhedged tail</span>
          <strong>{formatUsd(result.unhedgedTailCost)}</strong>
          <p>Future procurement cost under the tail price shock.</p>
        </article>
        <article>
          <span>Hedged tail</span>
          <strong>{formatUsd(result.residualTail)}</strong>
          <p>Tail cost after hedge share and correlation are applied.</p>
        </article>
        <article>
          <span>Margin need</span>
          <strong>{formatUsd(result.marginNeed)}</strong>
          <p>Cash buffer required to keep the hedge alive under stress.</p>
        </article>
        <article>
          <span>Hedge efficiency</span>
          <strong>{formatPercent(result.hedgeEfficiency)}</strong>
          <p>Tail-cost reduction net of an illustrative liquidity cost.</p>
        </article>
      </div>

      <div
        className="token-lab-bars"
        role="img"
        aria-label={`Unhedged tail ${formatUsd(
          result.unhedgedTailCost,
        )}, hedged tail ${formatUsd(result.residualTail)}, margin ${formatUsd(
          result.marginNeed,
        )}`}
      >
        <div className="token-lab-bar-row">
          <span>U</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(
                  4,
                  (result.unhedgedTailCost / maxCost) * 100,
                )}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.unhedgedTailCost)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>H</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, (result.residualTail / maxCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.residualTail)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>M</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar frontier"
              style={{
                width: `${Math.max(4, (result.marginNeed / maxCost) * 100)}%`,
              }}
            />
          </div>
          <strong>{formatUsd(result.marginNeed)}</strong>
        </div>
        <div className="token-lab-bar-row">
          <span>B</span>
          <div className="token-lab-bar-track">
            <span
              className="token-lab-bar small-model"
              style={{
                width: `${Math.max(4, result.basisRisk * 100)}%`,
              }}
            />
          </div>
          <strong>{formatPercent(result.basisRisk)}</strong>
        </div>
      </div>

      <p className="token-lab-note">
        The calculator is deliberately stylized. It illustrates that a hedge can
        reduce tail procurement cost only when the hedge instrument tracks the
        required token exposure, and when margin and liquidity needs do not
        force the hedge to be closed in the stress state.
      </p>
    </div>
  );
}

function TokenPortfolioHedgingArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {portfolioArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="portfolio-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            Token finance becomes operational when exposure can be measured,
            allocated, hedged, and stress tested. This module treats token use
            as a procurement portfolio problem. The portfolio contains spot
            usage, reserved capacity, forward claims, option-like priority
            rights, fallback model routes, compliance-constrained pools, and
            liquidity buffers.
          </p>
          <p>
            The mathematical language follows portfolio selection{" "}
            <CitationLink id="markowitz1952">(Markowitz, 1952)</CitationLink>,
            dynamic asset pricing{" "}
            <CitationLink id="duffie2001">(Duffie, 2001)</CitationLink>,
            derivative pricing{" "}
            <CitationLink id="blackScholes1973">
              (Black and Scholes, 1973)
            </CitationLink>
            ; <CitationLink id="merton1973">Merton (1973)</CitationLink>,
            commodity markets{" "}
            <CitationLink id="schwartz1997">(Schwartz, 1997)</CitationLink>,
            electricity hedging{" "}
            <CitationLink id="bessembinderLemmon2002">
              (Bessembinder and Lemmon, 2002)
            </CitationLink>
            , and CVaR optimization{" "}
            <CitationLink id="rockafellarUryasev2000">
              (Rockafellar and Uryasev, 2000)
            </CitationLink>
            .
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>Translate AI-token needs into exposure vectors.</p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Compute hedge ratios and explain why proxy hedges create basis
                risk.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Formulate token budget-at-risk and CVaR as procurement risk
                metrics.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Include margin, collateral, liquidity, compliance, and service
                quality in the portfolio problem.
              </p>
            </article>
          </div>
        </section>

        <section id="portfolio-object">
          <h3>1. The Risk-Management Object</h3>
          <p>
            A token portfolio is not a portfolio of homogeneous coins. It is a
            set of claims and operational routes that deliver AI service under
            uncertainty. The relevant risk is future cost of obtaining solved
            tasks subject to quality, latency, legal admissibility, energy, and
            capacity constraints.
          </p>
          <MathEquation
            title="Token procurement portfolio"
            latex={String.raw`w_t=(q_t^{\mathrm{spot}},h_t^{\mathrm{fwd}},o_t^{\mathrm{opt}},r_t^{\mathrm{res}},x_t^{\mathrm{route}},b_t^{\mathrm{liq}})\in\mathcal W_t`}
            explanation="The portfolio includes spot use, forward hedges, options, reserved capacity, routing choices, and liquidity buffers."
            variables={[
              {
                symbol: String.raw`w_t`,
                meaning: "procurement and hedge portfolio at date t",
              },
              {
                symbol: String.raw`q_t^{\mathrm{spot}}`,
                meaning: "spot token-service quantity",
              },
              {
                symbol: String.raw`h_t^{\mathrm{fwd}}`,
                meaning: "forward or futures hedge position",
              },
              {
                symbol: String.raw`o_t^{\mathrm{opt}}`,
                meaning: "option-like priority or burst-capacity claim",
              },
              {
                symbol: String.raw`r_t^{\mathrm{res}}`,
                meaning: "reserved-capacity position",
              },
              {
                symbol: String.raw`x_t^{\mathrm{route}}`,
                meaning:
                  "allocation across providers, models, regions, and compliance pools",
              },
              {
                symbol: String.raw`b_t^{\mathrm{liq}}`,
                meaning: "liquidity buffer for margin and emergency spot use",
              },
              {
                symbol: String.raw`\mathcal W_t`,
                meaning:
                  "admissible portfolio set under budget, legal, quality, and liquidity constraints",
              },
            ]}
          />
        </section>

        <section id="portfolio-exposure-vector">
          <h3>2. Exposure Vector</h3>
          <p>
            The first step is to measure the unhedged exposure. For a user with
            many use cases, the exposure is a vector indexed by token class,
            provider, region, delivery window, and compliance status. The vector
            should use effective token prices rather than raw token prices.
          </p>
          <MathEquation
            title="Future token-cost exposure"
            latex={String.raw`C_T^{\mathrm{tok}}=\sum_{j=1}^{J}Q_{j,T}^{\mathrm{eff}}P_{j,T}^{\mathrm{eff}}`}
            explanation="Future token cost is the sum of effective demand times effective price across token classes."
            variables={[
              {
                symbol: String.raw`C_T^{\mathrm{tok}}`,
                meaning: "future token procurement cost at horizon T",
              },
              {
                symbol: String.raw`Q_{j,T}^{\mathrm{eff}}`,
                meaning:
                  "effective token demand or solved-task equivalent exposure to class j",
              },
              {
                symbol: String.raw`P_{j,T}^{\mathrm{eff}}`,
                meaning:
                  "quality-adjusted effective price of token class j at horizon T",
              },
              {
                symbol: String.raw`J`,
                meaning: "number of token classes",
              },
            ]}
          />
          <div className="learning-example-card">
            <p>
              Example: a law firm may have exposure to frontier reasoning tokens
              for contract review, smaller batch tokens for summarizing
              archives, and certified regional tokens for confidential client
              documents. Each exposure has a different price and basis risk.
            </p>
          </div>
        </section>

        <section id="portfolio-token-portfolio">
          <h3>3. Portfolio Weights and Feasibility</h3>
          <p>
            Portfolio weights route tasks across token classes. A cheaper token
            class is not necessarily a feasible substitute if it fails quality,
            latency, or legal constraints. The feasible set must therefore encode
            service requirements as well as budget limits.
          </p>
          <MathEquation
            title="Feasible routing set"
            latex={String.raw`\mathcal X_{u,t}=\left\{x_u\in\mathbb R_+^J:\sum_{j=1}^{J}x_{u,j,t}=1,\ x_{u,j,t}=0\ \mathrm{if}\ q_{j,u,t}<\bar q_u\ \mathrm{or}\ A^{\mathrm{adm}}_{u,j,t}=0\right\}`}
            explanation="Use-case routing weights must sum to one. A token class receives positive routing weight only if it satisfies the quality threshold and admissibility rule."
            variables={[
              {
                symbol: String.raw`\mathcal X_{u,t}`,
                meaning: "feasible routing set for use case u",
              },
              {
                symbol: String.raw`x_u\in\mathbb R_+^J`,
                meaning:
                  "nonnegative vector of routing shares across the J token classes for use case u",
              },
              {
                symbol: String.raw`x_{u,j,t}`,
                meaning:
                  "share of use case u routed to token class j at date t",
              },
              {
                symbol: String.raw`q_{j,u,t}`,
                meaning: "quality or solved-task yield for token class j",
              },
              {
                symbol: String.raw`\bar q_u`,
                meaning: "minimum acceptable quality for use case u",
              },
              {
                symbol: String.raw`A^{\mathrm{adm}}_{u,j,t}`,
                meaning: "admissibility indicator for the route",
              },
            ]}
          />
        </section>

        <section id="portfolio-factors">
          <h3>4. Price Factors and Correlation</h3>
          <p>
            Token prices can move together because they share infrastructure:
            GPUs, data centres, cloud regions, electricity prices, model
            releases, benchmark rules, and regulatory constraints. A factor
            representation makes those common drivers explicit.
          </p>
          <MathEquation
            title="Token-price factor model"
            latex={String.raw`\Delta p_{j,t}=\beta_j^\top F_t+\epsilon_{j,t}`}
            explanation="The log price change of token class j is decomposed into common factor exposure and idiosyncratic movement."
            variables={[
              {
                symbol: String.raw`\Delta p_{j,t}`,
                meaning: "log effective-price change of token class j",
              },
              {
                symbol: String.raw`\beta_j`,
                meaning: "factor-loading vector for token class j",
              },
              {
                symbol: String.raw`F_t`,
                meaning:
                  "common risk-factor vector, such as electricity shock, capacity scarcity, demand shock, or compliance shock",
              },
              {
                symbol: String.raw`\epsilon_{j,t}`,
                meaning: "idiosyncratic token-class shock",
              },
            ]}
          />
        </section>

        <section id="portfolio-hedge-ratio">
          <h3>5. Hedge Ratio</h3>
          <p>
            If an exact forward on the required token class exists, hedging is
            conceptually simple. More often, the available hedge is a token
            index, a provider basket, a reserved-capacity claim, an electricity
            hedge, or a proxy model-token class. The minimum-variance hedge
            ratio depends on covariance, not on visual similarity between
            contracts.
          </p>
          <MathEquation
            title="Minimum-variance hedge ratio"
            latex={String.raw`h^\star=\frac{\operatorname{Cov}(\Delta C_A,\Delta X_H)}{\operatorname{Var}(\Delta X_H)}`}
            explanation="The hedge ratio is the covariance of the exposure and hedge payoff divided by hedge payoff variance."
            variables={[
              {
                symbol: String.raw`h^\star`,
                meaning: "minimum-variance hedge ratio",
              },
              {
                symbol: String.raw`\Delta C_A`,
                meaning:
                  "change in procurement cost for required token exposure A",
              },
              {
                symbol: String.raw`\Delta X_H`,
                meaning: "change in value or payoff of hedge instrument H",
              },
            ]}
          />
        </section>

        <section id="portfolio-basis-risk">
          <h3>6. Basis Risk</h3>
          <p>
            Basis risk is the risk that the hedge instrument and the required
            exposure diverge. It is central in electricity markets because power
            is location- and time-specific{" "}
            <CitationLink id="bessembinderLemmon2002">
              (Bessembinder and Lemmon, 2002)
            </CitationLink>
            . Token markets would have analogous basis: model quality, region,
            latency, compliance, provider outage, and benchmark composition.
          </p>
          <MathEquation
            title="Residual variance after hedging"
            latex={String.raw`\operatorname{Var}(\Delta C_A-h\Delta X_H)=\sigma_A^2-2h\rho_{AH}\sigma_A\sigma_H+h^2\sigma_H^2`}
            explanation="Residual hedge risk falls when the hedge is highly correlated with the exposure and rises when the hedge is a weak proxy."
            variables={[
              {
                symbol: String.raw`\sigma_A`,
                meaning: "volatility of the required exposure",
              },
              {
                symbol: String.raw`\sigma_H`,
                meaning: "volatility of the hedge instrument",
              },
              {
                symbol: String.raw`\rho_{AH}`,
                meaning: "correlation between exposure and hedge payoff",
              },
              {
                symbol: String.raw`h`,
                meaning: "chosen hedge ratio",
              },
            ]}
          />
        </section>

        <section id="portfolio-budget-risk">
          <h3>7. Token Budget-at-Risk</h3>
          <p>
            A token buyer often cares about future expenditure rather than mark
            to market profit. Token budget-at-risk is the high quantile of
            future procurement cost. It is useful for boards, public agencies,
            and risk committees because it translates model-token uncertainty
            into budget language.
          </p>
          <MathEquation
            title="Token budget-at-risk"
            latex={String.raw`\operatorname{TaR}_{\alpha,T}(w)=\inf\left\{b:\Pr\!\left(C_T^{\mathrm{tok}}(w)\le b\right)\ge \alpha\right\}`}
            explanation="Token budget-at-risk is the alpha quantile of future token cost under portfolio w."
            variables={[
              {
                symbol: String.raw`\operatorname{TaR}_{\alpha,T}(w)`,
                meaning:
                  "token budget-at-risk over horizon T at confidence level alpha",
              },
              {
                symbol: String.raw`C_T^{\mathrm{tok}}(w)`,
                meaning: "future token cost under portfolio w",
              },
              {
                symbol: String.raw`b`,
                meaning: "budget threshold",
              },
            ]}
          />
        </section>

        <section id="portfolio-cvar">
          <h3>8. CVaR Control</h3>
          <p>
            CVaR asks what the average cost is in the bad tail. This is often
            more useful than an ordinary variance metric because token crises
            are joint events: demand spikes, electricity prices rise, capacity
            becomes scarce, and legal substitutes may be unavailable.
          </p>
          <MathEquation
            title="CVaR representation"
            latex={String.raw`\operatorname{CVaR}_{\alpha}(C)=\min_{\zeta\in\mathbb R}\left\{\zeta+\frac{1}{1-\alpha}\mathbb E[(C-\zeta)_+]\right\}`}
            explanation="The Rockafellar-Uryasev representation turns tail-risk control into an optimization problem."
            variables={[
              {
                symbol: String.raw`C`,
                meaning: "future procurement cost random variable",
              },
              {
                symbol: String.raw`\zeta`,
                meaning: "auxiliary threshold variable",
              },
              {
                symbol: String.raw`(C-\zeta)_+`,
                meaning: "positive part of C minus zeta",
              },
            ]}
          />
        </section>

        <section id="portfolio-derivatives">
          <h3>9. Derivative Claims</h3>
          <p>
            Token derivatives should be defined as claims on standardized
            service, indices, or capacity rights. Standard derivative payoffs
            can be reused, but settlement must account for delivery quality,
            outages, and admissibility. Textbook option logic follows{" "}
            <CitationLink id="hull2022">Hull (2022)</CitationLink>,{" "}
            <CitationLink id="blackScholes1973">
              Black and Scholes (1973)
            </CitationLink>
            , and <CitationLink id="merton1973">Merton (1973)</CitationLink>.
          </p>
          <MathEquation
            title="Forward and call payoff"
            latex={String.raw`\Pi_T^{\mathrm{fwd}}=Q(S_T-K),\qquad \Pi_T^{\mathrm{call}}=Q(S_T-K)_+`}
            explanation="A token forward and call option can be written on a token spot price or benchmark index, provided the underlying is well specified."
            variables={[
              {
                symbol: String.raw`\Pi_T^{\mathrm{fwd}}`,
                meaning: "forward payoff at maturity T",
              },
              {
                symbol: String.raw`\Pi_T^{\mathrm{call}}`,
                meaning: "call option payoff at maturity T",
              },
              {
                symbol: String.raw`Q`,
                meaning: "contract quantity",
              },
              {
                symbol: String.raw`S_T`,
                meaning: "settlement price of the token underlying",
              },
              {
                symbol: String.raw`K`,
                meaning: "strike or forward delivery price",
              },
            ]}
          />
        </section>

        <section id="portfolio-margin">
          <h3>10. Margin and Liquidity</h3>
          <p>
            A hedge that is economically sound can still fail if margin calls
            exceed available liquidity. Token users therefore need liquidity
            buffers, especially when hedges are exchange-traded, centrally
            cleared, or collateralized bilaterally.
          </p>
          <MathEquation
            title="Liquidity requirement"
            latex={String.raw`L_t(w)=b_t^{\mathrm{liq}}-M_t(w)-S_t^{\mathrm{emg}}\ge0`}
            explanation="The liquidity buffer must cover margin and emergency spot purchases."
            variables={[
              {
                symbol: String.raw`L_t(w)`,
                meaning: "remaining liquidity under portfolio w",
              },
              {
                symbol: String.raw`M_t(w)`,
                meaning: "margin or collateral requirement",
              },
              {
                symbol: String.raw`S_t^{\mathrm{emg}}`,
                meaning: "emergency spot-service expenditure",
              },
            ]}
          />
        </section>

        <section id="portfolio-robust">
          <h3>11. Robust Procurement</h3>
          <p>
            Because token markets are young and data are incomplete, a portfolio
            problem should not rely only on one calibrated probability model.
            Robust procurement asks whether a portfolio performs acceptably
            across a set of plausible stress scenarios.
          </p>
          <MathEquation
            title="Robust token procurement"
            latex={String.raw`\min_{w\in\mathcal W}\ \sup_{\xi\in\Xi}\left\{C_T^{\mathrm{tok}}(w,\xi)+\lambda L_T(w,\xi)\right\}`}
            explanation="The portfolio is chosen to control worst-case cost and service loss over a stress set Xi."
            variables={[
              {
                symbol: String.raw`\Xi`,
                meaning: "stress scenario set",
              },
              {
                symbol: String.raw`\xi`,
                meaning:
                  "stress scenario, such as weather shock, provider outage, regulatory constraint, or demand spike",
              },
              {
                symbol: String.raw`L_T(w,\xi)`,
                meaning: "service loss under portfolio w and stress xi",
              },
              {
                symbol: String.raw`\lambda`,
                meaning: "penalty weight on service loss",
              },
            ]}
          />
        </section>

        <section id="portfolio-interactive-lab">
          <h3>12. Interactive Illustration: Token Hedge and Tail Budget</h3>
          <p>
            The laboratory below demonstrates the central mechanism. Increasing
            hedge share reduces tail exposure only if the hedge tracks the
            required token class. If correlation is low, basis risk remains. If
            margin and liquidity needs are high, the hedge may become difficult
            to maintain precisely when it is most valuable.
          </p>
          <PortfolioHedgingLab />
        </section>

        <section id="portfolio-abm-link">
          <h3>13. Link to the ABM</h3>
          <p>
            The ABM can generate stochastic paths for token prices, demand,
            electricity costs, weather states, capacity utilization, shortages,
            and policy constraints. Those paths become scenarios for token
            budget-at-risk, CVaR, hedge-ratio estimation, and basis-risk
            decomposition. The goal is not to make a single forecast; it is to
            test whether a portfolio remains viable across mechanisms.
          </p>
          <p>
            The next implementation step is to add a portfolio layer to the
            simulator output: exposure by token class, hedge instruments,
            reserved capacity, liquidity buffer, tail budget, CVaR, and basis
            loss. That would make the analysis tool directly useful for
            procurement research.
          </p>
        </section>

        <section id="portfolio-exercises">
          <h3>14. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Define the exposure vector for a hospital that must use certified
              regional tokens for critical workflows.
            </li>
            <li>
              Derive the minimum-variance hedge ratio for an exposure hedged
              with a token index.
            </li>
            <li>
              Explain why a global token index may fail to hedge certified local
              token scarcity.
            </li>
            <li>
              Write a token budget-at-risk measure for a firm with stochastic
              output-token volume.
            </li>
            <li>
              Compare a forward hedge, a reserved-capacity contract, and a
              priority-access option for a public agency.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 9</h3>
            <p>
              The references below use DOI links, publisher pages, official
              benchmark guidance, or stable book pages where available.
            </p>
            <ol className="reference-list">
              {portfolioReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

function TokenMarketArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {marketArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="market-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            This module studies how AI-token service can become a tradable
            economic claim. The central idea is not that an AI token is a
            cryptocurrency token. The central idea is that scarce,
            quality-defined model service can be standardized, delivered,
            reserved, indexed, hedged, and governed like other non-storable or
            hard-to-store infrastructure commodities.
          </p>
          <p>
            The modelling language in this module is borrowed from established
            asset-pricing, derivatives, commodity-finance, electricity-market,
            and benchmark-governance literatures. Dynamic pricing and
            risk-neutral valuation follow{" "}
            <CitationLink id="duffie2001">Duffie (2001)</CitationLink>,{" "}
            <CitationLink id="blackScholes1973">
              Black and Scholes (1973)
            </CitationLink>
            {", "}
            <CitationLink id="merton1973">Merton (1973)</CitationLink>, and{" "}
            <CitationLink id="hull2022">Hull (2022)</CitationLink>.
            Commodity-style mean reversion, storage limits, and energy-market
            scarcity follow{" "}
            <CitationLink id="schwartz1997">Schwartz (1997)</CitationLink>,{" "}
            <CitationLink id="geman2005">Geman (2005)</CitationLink>, and{" "}
            <CitationLink id="bessembinderLemmon2002">
              Bessembinder and Lemmon (2002)
            </CitationLink>
            {". "}
            Market microstructure and benchmark integrity follow{" "}
            <CitationLink id="ohara1995">O'Hara (1995)</CitationLink> and{" "}
            <CitationLink id="iosco2013">IOSCO (2013)</CitationLink>.
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Specify a token contract by provider, model class, region,
                service unit, maturity, compliance, latency, and reliability.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Distinguish spot token service, reserved capacity, forwards,
                futures, options, spread contracts, and index contracts.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Explain why quality, deliverability, and basis risk are more
                important than raw token transferability.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Write the basic payoff equations for token forwards, options,
                and hedges.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Model benchmark token prices as commodity-like processes with
                demand-dependent means, electricity exposure, seasonality, and
                jumps.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Connect market design and price dynamics to the ABM through
                clearing, scarcity rents, calibration, and policy-constrained
                delivery pools.
              </p>
            </article>
          </div>
        </section>

        <section id="market-not-crypto">
          <h3>1. A Tradable AI Token Is Not a Cryptocurrency Token</h3>
          <p>
            In this resource, a tradable AI token is a claim on model service or
            compute capacity under a contract specification. It is not assumed
            to be a decentralized bearer asset, a payment coin, or a governance
            token. A distributed ledger could be used for audit or settlement,
            but the economically essential object is the service claim: a right
            to receive model-token delivery with defined quality and access
            conditions.
          </p>
          <p>
            This definition deliberately follows the financial-contract
            tradition rather than cryptocurrency terminology. The object being
            traded is a contingent service right with deliverability,
            substitution, margin, and settlement rules. That places the problem
            closer to commodity derivatives, cloud capacity, and market
            microstructure than to monetary tokens or payment assets (
            <CitationLink id="duffie2001">Duffie, 2001</CitationLink>;{" "}
            <CitationLink id="ohara1995">O'Hara, 1995</CitationLink>).
          </p>
          <p>
            The distinction matters because service tokens have performance
            risk. A cryptocurrency token can be fungible if all units are
            identical on the ledger. AI-token service is not automatically
            fungible. A token delivered by a frontier reasoning model in a
            certified European region at low latency is not the same good as a
            batch token from a smaller model in a different region. Fungibility
            must therefore be engineered through contract standardization,
            quality measurement, and settlement rules.
          </p>
          <MathEquation
            title="Tradable AI-token claim"
            latex={String.raw`X=(j,Q,\tau,\mathcal{D},\mathcal{S},\mathcal{M})`}
            explanation="A tradable token claim is a structured service right, not merely a ledger entry."
            variables={[
              { symbol: String.raw`X`, meaning: "AI-token service claim" },
              {
                symbol: String.raw`j`,
                meaning:
                  "token class, including provider, model, region, billing unit, latency, compliance, reliability, and delivery window",
              },
              {
                symbol: String.raw`Q`,
                meaning: "quantity of deliverable token-service units",
              },
              {
                symbol: String.raw`\tau`,
                meaning: "delivery date or service window",
              },
              {
                symbol: String.raw`\mathcal{D}`,
                meaning: "delivery rules and admissible substitutions",
              },
              {
                symbol: String.raw`\mathcal{S}`,
                meaning: "settlement, metering, and verification rules",
              },
              {
                symbol: String.raw`\mathcal{M}`,
                meaning: "margin, collateral, and default-management rules",
              },
            ]}
          />
        </section>

        <section id="market-contract-spec">
          <h3>2. Contract Specification: The Unit Must Be Deliverable</h3>
          <p>
            A financial market cannot trade a vague object. The contract must
            define the model-token unit precisely enough that buyers, sellers,
            auditors, and clearing institutions can decide whether delivery
            occurred. For AI compute, this is harder than for a textbook
            commodity because the service combines digital output, physical
            infrastructure, latency, legal constraints, and model quality.
          </p>
          <p>
            The contract fields below are motivated by benchmark-governance and
            microstructure principles: the traded unit must be observable enough
            to settle, hard enough to manipulate, and precise enough that price
            quotes refer to the same economic object across time and
            counterparties (
            <CitationLink id="ohara1995">O'Hara, 1995</CitationLink>;{" "}
            <CitationLink id="iosco2013">IOSCO, 2013</CitationLink>).
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Contract field</th>
                <th>Economic meaning</th>
                <th>Typical source of basis risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provider and model class</td>
                <td>Defines algorithmic capability and service stack.</td>
                <td>
                  One model class may not solve the same tasks as another.
                </td>
              </tr>
              <tr>
                <td>Region and certified pool</td>
                <td>
                  Defines where the service is produced or legally hosted.
                </td>
                <td>
                  Global supply can be cheap while local certified supply is
                  scarce.
                </td>
              </tr>
              <tr>
                <td>Input, output, cached, or batch unit</td>
                <td>Defines the metered unit being delivered.</td>
                <td>
                  Output tokens, hidden orchestration, and cached tokens have
                  different costs.
                </td>
              </tr>
              <tr>
                <td>Latency and priority class</td>
                <td>Defines the time profile of access.</td>
                <td>Batch capacity is not a hedge for real-time workflows.</td>
              </tr>
              <tr>
                <td>Compliance and assurance</td>
                <td>Defines admissibility for regulated use cases.</td>
                <td>
                  Low-cost tokens may be unusable for public or regulated
                  agents.
                </td>
              </tr>
              <tr>
                <td>Substitution rule</td>
                <td>Defines which alternatives count as delivery.</td>
                <td>
                  Substitution can transfer quality risk from seller to buyer.
                </td>
              </tr>
            </tbody>
          </table>
          <MathEquation
            title="Eligible delivery set"
            latex={String.raw`\mathcal{E}_{X}=\{j':d(j',j)\le \epsilon_X,\ q_{j',u,t}\ge \bar q_X,\ \pi_{j'}\in\Pi_X\}`}
            explanation="The delivery set contains token classes that are close enough to the contract specification, meet quality thresholds, and satisfy compliance requirements."
            variables={[
              {
                symbol: String.raw`\mathcal{E}_{X}`,
                meaning: "eligible delivery set for contract X",
              },
              {
                symbol: String.raw`j'`,
                meaning: "candidate delivered token class",
              },
              {
                symbol: String.raw`d(j',j)`,
                meaning:
                  "distance between the candidate token class and the reference token class",
              },
              {
                symbol: String.raw`\epsilon_X`,
                meaning: "maximum admissible substitution distance",
              },
              {
                symbol: String.raw`q_{j',u,t}`,
                meaning:
                  "quality or solved-task yield of candidate token class for use case u",
              },
              {
                symbol: String.raw`\bar q_X`,
                meaning: "contractual minimum quality threshold",
              },
              {
                symbol: String.raw`\Pi_X`,
                meaning: "admissible compliance labels",
              },
            ]}
          />
        </section>

        <section id="market-service-claim">
          <h3>
            3. What Is the Claim: Service, Capacity, or Financial Settlement?
          </h3>
          <p>
            Token markets can trade several related claims. A service claim
            delivers actual model usage. A capacity claim reserves the right to
            use future throughput. A financial claim pays cash according to a
            token-price benchmark without physically delivering service. These
            claims should not be merged because they solve different problems.
          </p>
          <div className="learning-concept-grid">
            <article>
              <Cpu size={18} />
              <h4>Physical service claim</h4>
              <p>
                The seller delivers token-service units under the contract
                specification. This is useful for procurement and operational
                resilience.
              </p>
            </article>
            <article>
              <Layers size={18} />
              <h4>Capacity reservation</h4>
              <p>
                The buyer reserves future access, often paying a premium even if
                the capacity is not fully used.
              </p>
            </article>
            <article>
              <LineChart size={18} />
              <h4>Financial settlement</h4>
              <p>
                The contract settles against an index or reference price. This
                supports hedging when physical delivery is impractical.
              </p>
            </article>
            <article>
              <Landmark size={18} />
              <h4>Policy entitlement</h4>
              <p>
                A public rule may allocate certified or priority tokens to
                critical sectors during congestion.
              </p>
            </article>
          </div>
        </section>

        <section id="market-spot">
          <h3>4. Spot Token-Service Markets</h3>
          <p>
            A spot token-service market sells immediate or near-immediate
            access. Current API pricing is a primitive version of such a market:
            posted prices, rate limits, usage tiers, batch discounts, and
            reserved throughput all reveal scarcity in different ways. A more
            explicit spot market would clear demand against real-time capacity
            by token class, region, and service level.
          </p>
          <p>
            This is a microstructure statement. The allocation rule determines
            whether scarcity appears as a posted price, queue, rate limit,
            priority tier, rationing rule, or bilateral contract. Different
            trading mechanisms can generate different prices for the same
            underlying scarcity (
            <CitationLink id="ohara1995">O'Hara, 1995</CitationLink>).
          </p>
          <MathEquation
            title="Spot market clearing with rationing"
            latex={String.raw`Q^{clr}_{j,t}=\min\{D_{j,t}(S_{j,t}),Y_{j,t}\},\qquad
R_{j,t}=\big[D_{j,t}(S_{j,t})-Y_{j,t}\big]_{+}`}
            explanation="Cleared quantity is the minimum of demand and deliverable supply. Rationed demand is the positive part of demand above available capacity."
            variables={[
              {
                symbol: String.raw`D_{j,t}(S_{j,t})`,
                meaning:
                  "spot demand for token class j as a function of spot price",
              },
              {
                symbol: String.raw`S_{j,t}`,
                meaning: "spot price of token class j",
              },
              {
                symbol: String.raw`Y_{j,t}`,
                meaning: "available deliverable token capacity",
              },
              {
                symbol: String.raw`Q^{clr}_{j,t}`,
                meaning: "quantity of token service actually cleared",
              },
              {
                symbol: String.raw`R_{j,t}`,
                meaning:
                  "rationed demand, including queues, throttling, or unmet service",
              },
            ]}
          />
          <p>
            Spot markets are useful for flexible workloads, but they transfer
            price and availability risk to users. A firm with critical real-time
            workflows may therefore prefer reserved capacity or forward
            contracts even when the expected spot price is lower.
          </p>
        </section>

        <section id="market-expected-usage">
          <h3>5. Expected Token Usage and the Underlying Unit</h3>
          <p>
            Derivative pricing requires an underlying price process. For AI
            tokens this cannot be the raw token count of a single prompt,
            because output length is stochastic and provider-side orchestration
            may add hidden work. The underlying should therefore be defined as
            an expected task-equivalent service unit for a benchmark use case,
            model class, region, and service level.
          </p>
          <p>
            The expectation is essential. A token-service derivative cannot
            settle on a random conversational trace unless the trace itself is
            part of the contract. A benchmark unit therefore resembles a
            commodity or inflation index: it aggregates a clearly specified
            basket under a transparent methodology and then prices a
            standardized exposure to that basket (
            <CitationLink id="iosco2013">IOSCO, 2013</CitationLink>).
          </p>
          <MathEquation
            title="Expected billable usage per compute request"
            latex={String.raw`\bar T^{svc}_{j,u,t}
=\mathbb{E}_{t}\!\left[
T^{in}_{j,u,t}+T^{out}_{j,u,t}+T^{cache}_{j,u,t}
+T^{tool}_{j,u,t}+T^{retr}_{j,u,t}+T^{route}_{j,u,t}+T^{safe}_{j,u,t}
\right]`}
            explanation="The contract unit is based on expected billable and service-equivalent usage, because output tokens and internal service paths are random at request time."
            variables={[
              {
                symbol: String.raw`\bar T^{svc}_{j,u,t}`,
                meaning:
                  "expected token-service usage for token class j and use case u",
              },
              {
                symbol: String.raw`\mathbb{E}_{t}`,
                meaning:
                  "expectation conditional on information available at time t",
              },
              {
                symbol: String.raw`T^{in}`,
                meaning: "input token quantity, often fixed by the prompt",
              },
              {
                symbol: String.raw`T^{out}`,
                meaning:
                  "random output token quantity determined by model response and stopping rule",
              },
              {
                symbol: String.raw`T^{cache},T^{tool},T^{retr},T^{route},T^{safe}`,
                meaning:
                  "cached-context, tool-use, retrieval, routing, and safety or verification token-equivalent work",
              },
            ]}
          />
          <p>
            This definition makes the modelling target explicit. A derivative is
            not written on a particular answer length. It is written on the
            expected price of delivering a standardized service unit. Variance
            in output length remains economically important because it affects
            budget risk, margin, and tail exposure, but the quoted underlying
            price must be an expectation under a stated benchmark protocol.
          </p>
          <MathEquation
            title="Expected task-equivalent spot price"
            latex={String.raw`S^{eff}_{u,t}
=\sum_{j\in\mathcal{J}_{u,t}}w_{j,u,t}\,
\frac{\mathbb{E}_{t}\!\left[C^{svc}_{j,u,t}\right]}
{\mathbb{E}_{t}\!\left[Y^{task}_{j,u,t}\right]},
\qquad
\sum_{j\in\mathcal{J}_{u,t}}w_{j,u,t}=1`}
            explanation="The benchmark spot price aggregates task-equivalent service prices across eligible providers and models."
            variables={[
              {
                symbol: String.raw`S^{eff}_{u,t}`,
                meaning:
                  "benchmark effective spot price for use case u at time t",
              },
              {
                symbol: String.raw`\mathcal{J}_{u,t}`,
                meaning:
                  "eligible set of providers and model classes treated as equivalent enough for benchmark use case u",
              },
              {
                symbol: String.raw`w_{j,u,t}`,
                meaning:
                  "benchmark weight of provider or model class j for use case u",
              },
              {
                symbol: String.raw`C^{svc}_{j,u,t}`,
                meaning:
                  "random all-in service cost, including raw token cost, verification, latency, and residual error costs",
              },
              {
                symbol: String.raw`Y^{task}_{j,u,t}`,
                meaning:
                  "random task-equivalent output or solved-task yield delivered by token class j",
              },
            ]}
          />
          <div className="learning-callout">
            <LineChart size={20} />
            <p>
              A single provider's posted API price is an administered price. It
              may be strategic, sticky, discontinuous, bundled, or changed by
              policy. The stochastic asset model below applies to a competitive
              benchmark basket of approximately substitutable providers and
              models. Without that benchmark assumption, there is no natural
              market-clearing price to model.
            </p>
          </div>
        </section>

        <section id="market-underlying-dynamics">
          <h3>6. Underlying Token-Price Dynamics</h3>
          <p>
            The natural dynamics are closer to commodity and electricity price
            dynamics than to equity dynamics. Token service is costly to store,
            real-time capacity matters, electricity and cooling costs move with
            weather, demand has trend and seasonality, and scarcity rents can
            become nonlinear when demand approaches deliverable capacity.
            However, the long-run mean is not fixed. It shifts with AI adoption,
            productivity, model efficiency, hardware supply, grid capacity,
            policy constraints, and the size of the eligible provider set.
          </p>
          <p>
            The mean-reverting structure is motivated by commodity-pricing
            models in which prices tend to move toward a cost,
            convenience-yield, or inventory-related fundamental, while jumps
            represent disruptions and scarcity episodes (
            <CitationLink id="schwartz1997">Schwartz, 1997</CitationLink>;{" "}
            <CitationLink id="geman2005">Geman, 2005</CitationLink>).
            Electricity is especially relevant because non-storability and
            peak-load scarcity can produce nonlinear price behavior and
            distinctive forward premia (
            <CitationLink id="bessembinderLemmon2002">
              Bessembinder and Lemmon, 2002
            </CitationLink>
            ).
          </p>
          <MathEquation
            title="Observed and fundamental spot-price decomposition"
            latex={String.raw`S^{obs}_{j,t}=S^{*}_{j,t}+\varepsilon_{j,t},\qquad
S^{*}_{j,t}=mc_{j,t}+\rho^{cap}_{j,t}+\mu_{j,t}`}
            explanation="The observed benchmark quote is separated from the fundamental spot level. The fundamental level combines marginal cost, capacity scarcity rent, and markup or market-power premium."
            variables={[
              {
                symbol: String.raw`S^{obs}_{j,t}`,
                meaning: "observed benchmark quote for token class j",
              },
              {
                symbol: String.raw`S^{*}_{j,t}`,
                meaning: "fundamental spot level for token class j",
              },
              {
                symbol: String.raw`mc_{j,t}`,
                meaning:
                  "expected marginal cost of serving one task-equivalent token unit",
              },
              {
                symbol: String.raw`\rho^{cap}_{j,t}`,
                meaning:
                  "capacity scarcity rent caused by demand approaching or exceeding deliverable capacity",
              },
              {
                symbol: String.raw`\mu_{j,t}`,
                meaning:
                  "markup, market-power, priority-access, or certification premium",
              },
              {
                symbol: String.raw`\varepsilon_{j,t}`,
                meaning:
                  "short-run measurement noise, quote noise, or temporary platform pricing wedge",
              },
            ]}
          />
          <MathEquation
            title="Electricity-linked marginal cost"
            latex={String.raw`mc_{j,t}=a_{j,t}+e_{j,t}P^{elec}_{r,t}+c^{GPU}_{j,t}+c^{DC}_{r,t}+c^{net}_{r,t}+c^{comp}_{j,r,t}`}
            explanation="Electricity is one state variable in marginal cost. It matters more when energy intensity is high, local prices are volatile, or capacity is located in stressed grid regions."
            variables={[
              {
                symbol: String.raw`a_{j,t}`,
                meaning:
                  "non-energy algorithmic and platform service cost component",
              },
              {
                symbol: String.raw`e_{j,t}`,
                meaning: "electricity intensity per effective token unit",
              },
              {
                symbol: String.raw`P^{elec}_{r,t}`,
                meaning: "electricity price in delivery region r",
              },
              {
                symbol: String.raw`c^{GPU},c^{DC},c^{net},c^{comp}`,
                meaning:
                  "accelerator, data-centre, network, and compliance cost components",
              },
            ]}
          />
          <MathEquation
            title="Commodity-style mean reversion toward a moving fundamental"
            latex={String.raw`\begin{aligned}
X_{j,t}&=\log S^{*}_{j,t},\\
dX_{j,t}
&=\kappa_j\!\left(\bar x_{j,t}-X_{j,t}\right)dt
+\sigma_{j,t}dW^{S}_{j,t}+dJ^{S}_{j,t},\\
\bar x_{j,t}&=\log \bar S_{j,t}.
\end{aligned}`}
            explanation="The token spot price mean-reverts toward a moving fundamental level determined by demand, capacity, electricity, policy, and technology. Jumps represent outages, policy shocks, model releases, or congestion events."
            variables={[
              {
                symbol: String.raw`X_{j,t}`,
                meaning: "log fundamental spot price of token class j",
              },
              {
                symbol: String.raw`\kappa_j`,
                meaning:
                  "speed at which token prices revert toward the current fundamental level",
              },
              {
                symbol: String.raw`\bar x_{j,t}`,
                meaning: "log moving fundamental mean",
              },
              {
                symbol: String.raw`\bar S_{j,t}`,
                meaning:
                  "positive moving fundamental token-price level implied by cost, demand, capacity, and policy states",
              },
              {
                symbol: String.raw`\sigma_{j,t}`,
                meaning: "conditional volatility of token-price shocks",
              },
              {
                symbol: String.raw`W^{S}_{j,t}`,
                meaning:
                  "Brownian shock, correlated with electricity and demand shocks",
              },
              {
                symbol: String.raw`J^{S}_{j,t}`,
                meaning:
                  "jump process for outages, sudden demand changes, policy events, or model deprecations",
              },
            ]}
          />
          <MathEquation
            title="Demand-dependent moving mean"
            latex={String.raw`\begin{aligned}
\bar S_{j,t}&=mc_{j,t}+\rho^{cap}_{j,t}+\mu^{pol}_{j,t},\\
\rho^{cap}_{j,t}&=\alpha_j\big[U_{j,t}-\bar U_j\big]_{+}^{\nu_j},\\
\mu^{pol}_{j,t}&=\beta_j Z^{policy}_{j,t},\\
U_{j,t}&=\frac{D_{j,t}}{K^{del}_{j,t}}.
\end{aligned}`}
            explanation="The mean level rises when utilization approaches the deliverable capacity boundary. Demand, policy routing, and capacity investment therefore move the price mean."
            variables={[
              {
                symbol: String.raw`\rho^{cap}_{j,t}`,
                meaning: "nonlinear capacity scarcity rent",
              },
              {
                symbol: String.raw`\mu^{pol}_{j,t}`,
                meaning: "policy, certification, or access premium",
              },
              {
                symbol: String.raw`U_{j,t}`,
                meaning:
                  "utilization ratio of expected demand to deliverable capacity",
              },
              {
                symbol: String.raw`D_{j,t}`,
                meaning: "expected task-equivalent demand for token class j",
              },
              {
                symbol: String.raw`K^{del}_{j,t}`,
                meaning:
                  "deliverable capacity after accounting for hardware, power, latency, and legal access",
              },
              {
                symbol: String.raw`\bar U_j`,
                meaning:
                  "utilization threshold above which scarcity rents become material",
              },
              {
                symbol: String.raw`\alpha_j,\nu_j`,
                meaning: "scarcity-rent scale and convexity parameters",
              },
              {
                symbol: String.raw`Z^{policy}_{j,t}`,
                meaning:
                  "policy, certification, routing, or export-control state variable",
              },
            ]}
          />
          <p>
            Electricity itself can be modelled with seasonal mean reversion,
            because weather affects load, renewable output, cooling demand, and
            hydrological or wind conditions. A parsimonious specification is:
          </p>
          <p>
            This factor model is intentionally modest. It should be replaced by
            a structural power-system model when nodal grid detail, fuel-stack
            information, and renewable-output data are available. The value of
            the reduced form is that it gives the token-price model a
            transparent stochastic driver for seasonality, weather shocks, and
            scarcity jumps.
          </p>
          <MathEquation
            title="Seasonal electricity factor"
            latex={String.raw`dX^{elec}_{r,t}
=\kappa_E\!\left(\theta_r(t)-X^{elec}_{r,t}\right)dt
+\sigma_E dW^{E}_{r,t}+dJ^E_{r,t},\qquad
P^{elec}_{r,t}=\exp(X^{elec}_{r,t})`}
            explanation="The log electricity factor mean-reverts to a seasonal function. Weather and grid shocks enter through diffusion and jump terms."
            variables={[
              {
                symbol: String.raw`X^{elec}_{r,t}`,
                meaning: "log electricity price factor in region r",
              },
              {
                symbol: String.raw`\theta_r(t)`,
                meaning:
                  "seasonal mean, such as daily, weekly, and annual load pattern",
              },
              {
                symbol: String.raw`\kappa_E,\sigma_E`,
                meaning: "electricity mean-reversion speed and volatility",
              },
              {
                symbol: String.raw`J^E_{r,t}`,
                meaning:
                  "electricity jump process for scarcity events, outages, and extreme weather",
              },
            ]}
          />
        </section>

        <section id="market-calibration">
          <h3>7. Calibration Strategy for Token-Price Dynamics</h3>
          <p>
            Calibration should proceed from observable engineering and market
            quantities to reduced-form price dynamics. The goal is not to
            pretend that token markets already provide a full futures surface.
            The goal is to build a scientifically auditable model that can
            become more market-implied as quotes, reserved-capacity contracts,
            and index data appear.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Calibration layer</th>
                <th>Data object</th>
                <th>Model quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Benchmark unit</td>
                <td>
                  Prompt basket, output-length distribution, task benchmark,
                  eligible providers.
                </td>
                <td>
                  <InlineMath latex={String.raw`\bar T^{svc}_{j,u,t}`} />,{" "}
                  <InlineMath latex={String.raw`Y^{task}_{j,u,t}`} />, and
                  provider weights.
                </td>
              </tr>
              <tr>
                <td>Posted prices</td>
                <td>
                  Input, output, cached, batch, reserved, and priority prices.
                </td>
                <td>
                  Raw cost components and sticky administered-price adjustment.
                </td>
              </tr>
              <tr>
                <td>Energy and weather</td>
                <td>
                  Regional electricity prices, weather, renewable output,
                  cooling load.
                </td>
                <td>
                  <InlineMath latex={String.raw`P^{elec}_{r,t}`} />, seasonal
                  mean reversion, jumps, and correlation with token prices.
                </td>
              </tr>
              <tr>
                <td>Capacity</td>
                <td>
                  GPU availability, data-centre capacity, grid connection,
                  latency pool, outages.
                </td>
                <td>
                  <InlineMath latex={String.raw`K^{del}_{j,t}`} /> and
                  utilization <InlineMath latex={String.raw`U_{j,t}`} />.
                </td>
              </tr>
              <tr>
                <td>Demand</td>
                <td>
                  Usage logs, sector adoption, prompt volume, agentic workflow
                  depth, macro activity.
                </td>
                <td>
                  <InlineMath latex={String.raw`D_{j,t}`} />, trend growth,
                  seasonal demand, and demand shocks.
                </td>
              </tr>
              <tr>
                <td>Market-implied layer</td>
                <td>
                  Reserved-capacity quotes, forward quotes, OTC contracts, index
                  futures, options.
                </td>
                <td>
                  Risk premia, risk-neutral drift, convenience yield, and
                  volatility surface.
                </td>
              </tr>
            </tbody>
          </table>
          <MathEquation
            title="Demand process with moving adoption mean"
            latex={String.raw`\begin{aligned}
Y^D_{j,t}&=\log D_{j,t},\\
dY^D_{j,t}
&=\kappa_D\!\left(\bar d_{j,t}-Y^D_{j,t}\right)dt
+\sigma_D dW^D_{j,t}+dJ^D_{j,t},\\
\bar d_{j,t}&=b_0+b_AA_t+b_MM_t+b_PZ^{policy}_{j,t}.
\end{aligned}`}
            explanation="Demand mean-reverts around a moving adoption-driven level. The mean can shift with AI adoption, macro output, and policy routing."
            variables={[
              {
                symbol: String.raw`Y^D_{j,t}`,
                meaning: "log demand state for token class j",
              },
              {
                symbol: String.raw`D_{j,t}`,
                meaning: "expected task-equivalent demand for token class j",
              },
              {
                symbol: String.raw`\bar d_{j,t}`,
                meaning:
                  "moving long-run log demand level implied by adoption and macro states",
              },
              {
                symbol: String.raw`A_t`,
                meaning: "AI adoption or workflow automation index",
              },
              {
                symbol: String.raw`M_t`,
                meaning: "macro activity, sector output, or task-volume index",
              },
              {
                symbol: String.raw`Z^{policy}_{j,t}`,
                meaning:
                  "policy routing, certification, or access constraint affecting demand for token class j",
              },
            ]}
          />
          <MathEquation
            title="Risk-neutral pricing bridge"
            latex={String.raw`F_{j,t,T}=\mathbb{E}^{\mathbb{Q}}_{t}\!\left[S_{j,T}\right]+\delta^{del}_{j,t,T}-\delta^{flex}_{j,t,T}`}
            explanation="A forward price is the risk-neutral expected settlement price plus delivery and reliability premia minus flexibility or interruptibility discounts."
            variables={[
              {
                symbol: String.raw`F_{j,t,T}`,
                meaning:
                  "forward price at time t for token class j and maturity T",
              },
              {
                symbol: String.raw`\mathbb{Q}`,
                meaning: "pricing measure after applying market prices of risk",
              },
              {
                symbol: String.raw`\delta^{del}_{j,t,T}`,
                meaning:
                  "delivery, reliability, collateral, or physical scarcity premium",
              },
              {
                symbol: String.raw`\delta^{flex}_{j,t,T}`,
                meaning:
                  "discount for interruptible, batch, or flexible delivery",
              },
            ]}
          />
          <p>
            Before liquid derivatives exist, the physical-measure model is most
            useful for scenario analysis and risk management. As markets
            develop, forward and option quotes can identify risk premia and
            risk-neutral dynamics. The documentation should therefore keep two
            objects separate: the real-world process used for simulation and
            stress testing, and the pricing process used for derivative
            valuation.
          </p>
          <p>
            This separation follows standard asset-pricing practice. The
            physical measure describes empirical scenarios and procurement risk;
            the risk-neutral measure prices traded claims after market prices of
            risk have been incorporated (
            <CitationLink id="duffie2001">Duffie, 2001</CitationLink>;{" "}
            <CitationLink id="hull2022">Hull, 2022</CitationLink>).
          </p>
        </section>

        <section id="market-interactive-dynamics">
          <h3>8. Interactive Illustration: Commodity-Style Spot Dynamics</h3>
          <p>
            The illustration below uses a reduced-form benchmark spot price. It
            is deliberately simple: expected marginal cost moves with
            electricity and expected token usage, while scarcity rent appears
            when seasonally adjusted demand approaches capacity. This is the
            basic commodity logic that should sit underneath token forwards and
            options.
          </p>
          <MathEquation
            title="Interactive spot-price decomposition"
            latex={String.raw`\bar S= m\left(c_0+eP^{elec}\right)
+\alpha\max\{0,U(1+s)-1\}^{\nu}`}
            explanation="The benchmark spot price combines expected marginal cost and a convex scarcity rent generated by utilization pressure."
            variables={[
              {
                symbol: String.raw`\bar S`,
                meaning: "stylized benchmark spot price",
              },
              {
                symbol: String.raw`m`,
                meaning:
                  "expected usage multiplier capturing stochastic output and hidden service tokens",
              },
              {
                symbol: String.raw`c_0`,
                meaning: "non-energy marginal cost component",
              },
              {
                symbol: String.raw`eP^{elec}`,
                meaning: "electricity cost per benchmark service unit",
              },
              {
                symbol: String.raw`U`,
                meaning: "baseline demand-capacity utilization ratio",
              },
              {
                symbol: String.raw`s`,
                meaning: "seasonal or weather-driven demand shift",
              },
              {
                symbol: String.raw`\alpha,\nu`,
                meaning: "scarcity slope and convexity",
              },
            ]}
          />
          <SpotDynamicsLab />
        </section>

        <section id="market-reserved">
          <h3>9. Reserved Capacity and Take-or-Pay Contracts</h3>
          <p>
            Reserved capacity converts uncertain future access into a contract.
            The buyer pays for a right to use capacity in a future window. The
            seller receives more predictable revenue and can finance
            infrastructure. This resembles cloud reserved instances, pipeline
            capacity, power purchase agreements, and take-or-pay commodity
            contracts.
          </p>
          <MathEquation
            title="Reserved-capacity cost"
            latex={String.raw`C^{res}_{i,T}=P^{res}_{j,0,T}Q^{res}_{i,j,T}
+S_{j,T}\big[Q^{use}_{i,j,T}-Q^{res}_{i,j,T}\big]_{+}`}
            explanation="The buyer pays an upfront or fixed reserved price for contracted capacity and uses the spot market only for demand above the reserved amount."
            variables={[
              {
                symbol: String.raw`C^{res}_{i,T}`,
                meaning: "future cost of reserved-capacity procurement",
              },
              {
                symbol: String.raw`P^{res}_{j,0,T}`,
                meaning: "reserved-capacity contract price set at initial date",
              },
              {
                symbol: String.raw`Q^{res}_{i,j,T}`,
                meaning:
                  "quantity of token class j reserved by buyer i for delivery window T",
              },
              {
                symbol: String.raw`Q^{use}_{i,j,T}`,
                meaning: "realized token need of buyer i",
              },
              {
                symbol: String.raw`S_{j,T}`,
                meaning: "spot price at delivery",
              },
            ]}
          />
          <p>
            The central tradeoff is utilization risk versus scarcity risk. A
            buyer who reserves too much capacity pays for unused service. A
            buyer who reserves too little capacity remains exposed to spot
            spikes, queues, and policy constraints.
          </p>
        </section>

        <section id="market-forwards">
          <h3>10. Forwards and Futures on Token Service</h3>
          <p>
            A forward contract fixes a price today for token delivery or cash
            settlement at a future date. For a buyer of token service, a long
            forward hedge protects against future spot-price increases. For a
            model provider, a short forward can stabilize revenue but creates
            delivery obligations.
          </p>
          <MathEquation
            title="Physically settled token forward"
            latex={String.raw`\Pi^{long}_{T}=Q(S_{j,T}-F_{j,0,T})`}
            explanation="The payoff of a long forward is positive when the settlement spot price exceeds the forward price."
            variables={[
              {
                symbol: String.raw`\Pi^{long}_{T}`,
                meaning: "long-forward payoff at delivery date T",
              },
              {
                symbol: String.raw`Q`,
                meaning: "contract quantity of deliverable token service",
              },
              {
                symbol: String.raw`S_{j,T}`,
                meaning: "spot price of token class j at delivery",
              },
              {
                symbol: String.raw`F_{j,0,T}`,
                meaning:
                  "forward price agreed at date 0 for delivery at date T",
              },
            ]}
          />
          <MathEquation
            title="Cost of a hedged token buyer"
            latex={String.raw`C_T(h)=Q S^A_T-hQ(S^H_T-F^H_{0,T})`}
            explanation="A buyer exposed to required token class A can hedge a share h using a forward on token class H. If H differs from A, the remaining uncertainty is basis risk."
            variables={[
              {
                symbol: String.raw`C_T(h)`,
                meaning: "net future procurement cost after the hedge",
              },
              {
                symbol: String.raw`S^A_T`,
                meaning: "future spot price of the required token class A",
              },
              {
                symbol: String.raw`S^H_T`,
                meaning:
                  "future settlement price of the hedge token or index H",
              },
              {
                symbol: String.raw`F^H_{0,T}`,
                meaning: "forward price of the hedge instrument",
              },
              {
                symbol: String.raw`h`,
                meaning: "hedge share, between zero and one",
              },
            ]}
          />
        </section>

        <section id="market-options">
          <h3>11. Options, Priority Rights, and Reliability Insurance</h3>
          <p>
            An option gives the right, but not the obligation, to receive token
            service or cash settlement. For token economics, options are not
            only financial instruments. Priority access, burst capacity,
            failover rights, and emergency public-sector compute can all be
            interpreted as option-like claims on scarce future service.
          </p>
          <p>
            The formula below is the continuous-time complete-market benchmark
            associated with{" "}
            <CitationLink id="blackScholes1973">
              Black and Scholes (1973)
            </CitationLink>
            {", "}
            <CitationLink id="merton1973">Merton (1973)</CitationLink>, and the
            derivative-pricing exposition in{" "}
            <CitationLink id="duffie2001">Duffie (2001)</CitationLink> and{" "}
            <CitationLink id="hull2022">Hull (2022)</CitationLink>. It is
            included to define the reference object; actual token-service
            options would generally be incomplete-market claims with
            deliverability, quality, and outage risks.
          </p>
          <MathEquation
            title="Call option on token-service price"
            latex={String.raw`C^{call}_{j,0}=\mathbb{E}_0^{\mathbb{Q}}\!\left[
e^{-\int_0^T r_s\,ds}\big(S_{j,T}-K\big)_{+}
\right]`}
            explanation="In a risk-neutral pricing model, the call value is the discounted expected positive difference between future spot price and strike. In practice, incomplete markets and delivery risk make this only a benchmark."
            variables={[
              {
                symbol: String.raw`C^{call}_{j,0}`,
                meaning: "date-0 value of a call option on token class j",
              },
              {
                symbol: String.raw`\mathbb{Q}`,
                meaning:
                  "risk-neutral pricing measure in a complete-market benchmark",
              },
              { symbol: String.raw`r_s`, meaning: "short interest rate" },
              {
                symbol: String.raw`K`,
                meaning: "strike price of the option",
              },
              {
                symbol: String.raw`S_{j,T}`,
                meaning: "future settlement price of token class j",
              },
            ]}
          />
          <p>
            The complete-market option formula is not a claim that token markets
            are complete. It is a reference point. Real token options would also
            require delivery rules, quality tests, outage treatment, model
            deprecation rules, collateral, and governance of the settlement
            index.
          </p>
        </section>

        <section id="market-spreads">
          <h3>12. Spread Contracts and Basis Risk</h3>
          <p>
            Spread contracts matter because token classes are non-equivalent. A
            frontier-small spread, EU-certified/global spread, low-latency/batch
            spread, or input/output spread can become a traded risk factor. The
            spread is meaningful only after the token units have been made
            task-equivalent or contract-equivalent.
          </p>
          <MathEquation
            title="Token spread payoff"
            latex={String.raw`\Pi_T^{spread}=N\left[(S^A_T-S^B_T)-K_{\Delta}\right]`}
            explanation="A spread contract pays according to the difference between two token prices relative to a contracted spread strike."
            variables={[
              {
                symbol: String.raw`\Pi_T^{spread}`,
                meaning: "spread-contract payoff at maturity",
              },
              {
                symbol: String.raw`N`,
                meaning: "contract notional",
              },
              {
                symbol: String.raw`S^A_T,S^B_T`,
                meaning: "settlement prices of token classes A and B",
              },
              {
                symbol: String.raw`K_{\Delta}`,
                meaning: "contracted spread strike",
              },
            ]}
          />
          <p>
            A spread hedge is useful when the risk is relative rather than
            absolute. A firm may tolerate general token-price inflation but be
            harmed if frontier reasoning tokens rise sharply relative to
            general-purpose tokens. A government may track the premium of
            certified local tokens over a global benchmark as a measure of
            sovereignty cost.
          </p>
        </section>

        <section id="market-index">
          <h3>13. Token-Index Contracts</h3>
          <p>
            A token index is a benchmark basket of task-adjusted token prices.
            It can support procurement budgets, derivatives, public reporting,
            and risk measurement. The index must specify benchmark tasks,
            eligible models, quality thresholds, regions, weights, price
            sources, rebalancing, and governance.
          </p>
          <p>
            If such an index is used for contracts, it becomes a financial
            benchmark.{" "}
            <CitationLink id="iosco2013">
              IOSCO's benchmark principles
            </CitationLink>{" "}
            are therefore directly relevant: methodology, governance,
            accountability, conflicts of interest, data sufficiency, and
            contingency rules must be specified before the benchmark can carry
            derivative settlement.
          </p>
          <MathEquation
            title="Deliverable token-service index"
            latex={String.raw`\tilde S_{j,T}=\phi_{j,T}S^{obs}_{j,T},\qquad
I_T=\sum_{j=1}^{J}w_{j,T}\tilde S_{j,T},\qquad
\sum_{j=1}^{J}w_{j,T}=1`}
            explanation="The index first quality-adjusts observed constituent prices and then aggregates the adjusted prices with benchmark weights."
            variables={[
              { symbol: String.raw`I_T`, meaning: "token-service index level" },
              {
                symbol: String.raw`\tilde S_{j,T}`,
                meaning: "quality-adjusted constituent settlement price",
              },
              {
                symbol: String.raw`w_{j,T}`,
                meaning: "weight of token class j in the index",
              },
              {
                symbol: String.raw`\phi_{j,T}`,
                meaning:
                  "eligibility or quality adjustment factor for token class j",
              },
              {
                symbol: String.raw`S^{obs}_{j,T}`,
                meaning: "observed benchmark price for token class j",
              },
              {
                symbol: String.raw`J`,
                meaning: "number of index constituents",
              },
            ]}
          />
          <p>
            Benchmark governance is central. If the index is used for
            derivatives, the methodology must reduce manipulation incentives,
            handle missing prices, treat new models consistently, and explain
            how quality improvements enter the benchmark.
          </p>
        </section>

        <section id="market-clearing-learning">
          <h3>14. Clearing, Scarcity Rents, and Market Power</h3>
          <p>
            Token-service markets are vulnerable to congestion and market power
            because supply is bottlenecked by GPUs, data centres, electricity,
            grid interconnection, skilled operations, and legal compliance.
            Scarcity rents arise when the willingness to pay for deliverable
            tokens exceeds marginal service cost.
          </p>
          <MathEquation
            title="Scarcity rent"
            latex={String.raw`\rho^{cap}_{j,t}=\alpha_j\big[U_{j,t}-\bar U_j\big]_{+}^{\nu_j},\qquad
U_{j,t}=\frac{D_{j,t}}{K^{del}_{j,t}}`}
            explanation="A positive scarcity rent appears only when utilization exceeds the threshold at which deliverable token capacity becomes tight."
            variables={[
              {
                symbol: String.raw`\rho^{cap}_{j,t}`,
                meaning: "scarcity rent for token class j",
              },
              {
                symbol: String.raw`\alpha_j`,
                meaning: "scale of the scarcity-rent function",
              },
              {
                symbol: String.raw`\nu_j`,
                meaning: "convexity of the scarcity-rent function",
              },
              {
                symbol: String.raw`U_{j,t}`,
                meaning: "demand-capacity utilization ratio",
              },
            ]}
          />
          <p>
            Clearing rules must state whether demand is rationed by price,
            queue, priority contract, public entitlement, or platform rule.
            These mechanisms have different welfare and distributional
            implications, and the ABM can represent them explicitly.
          </p>
        </section>

        <section id="market-collateral">
          <h3>15. Margin, Collateral, and Default</h3>
          <p>
            Derivatives require default management. A seller of future token
            delivery may fail because capacity is unavailable, electricity costs
            spike, a data centre is delayed, a model is deprecated, or a policy
            rule prevents delivery. A buyer may fail to pay when the forward is
            out of the money. Margin rules convert these risks into collateral
            requirements.
          </p>
          <MathEquation
            title="Variation margin on a token future"
            latex={String.raw`VM_t=N\left(F_{j,t,T}-F_{j,t-\Delta t,T}\right)`}
            explanation="A futures contract can be marked to market. Gains and losses are transferred through variation margin as the futures price changes."
            variables={[
              {
                symbol: String.raw`VM_t`,
                meaning: "variation margin at time t",
              },
              { symbol: String.raw`N`, meaning: "contract notional" },
              {
                symbol: String.raw`F_{j,t,T}`,
                meaning:
                  "futures price at time t for token class j and maturity T",
              },
            ]}
          />
          <p>
            For physically settled service contracts, financial margin is not
            enough. The clearing design may also need deliverability tests,
            replacement-service auctions, interruption penalties, and force
            majeure rules for electricity or policy shocks.
          </p>
        </section>

        <section id="market-quality">
          <h3>16. Quality Measurement and Settlement</h3>
          <p>
            Settlement is the hardest scientific problem. A token derivative
            cannot be credible if the underlying unit is ambiguous. The market
            must decide whether settlement is based on raw posted prices,
            metered usage, delivered service, benchmark task performance, or an
            audited index.
          </p>
          <MathEquation
            title="Quality shortfall penalty"
            latex={String.raw`\mathrm{Penalty}_{j,T}
=\eta\,S_{j,T}\big[\bar q_X-q_{j,T}\big]_{+},\qquad
V^{del}_{j,T}=S_{j,T}-\mathrm{Penalty}_{j,T}`}
            explanation="A delivered token service with quality below the contractual threshold receives a penalty. The adjusted delivery value falls as the shortfall grows."
            variables={[
              {
                symbol: String.raw`\mathrm{Penalty}_{j,T}`,
                meaning:
                  "cash penalty or value reduction for quality shortfall",
              },
              {
                symbol: String.raw`V^{del}_{j,T}`,
                meaning: "quality-adjusted delivery value",
              },
              {
                symbol: String.raw`S_{j,T}`,
                meaning: "unadjusted settlement value",
              },
              {
                symbol: String.raw`\eta`,
                meaning: "penalty slope for quality shortfall",
              },
              {
                symbol: String.raw`\bar q_X`,
                meaning: "contractual quality threshold",
              },
              {
                symbol: String.raw`q_{j,T}`,
                meaning: "measured delivered quality",
              },
            ]}
          />
          <p>
            A benchmark should not reward a provider for delivering cheap tokens
            that fail the benchmark task. Conversely, it should not penalize
            genuine algorithmic improvements that reduce raw-token usage while
            preserving task quality. This is why Milestone 1's effective-token
            unit is a prerequisite for market design.
          </p>
        </section>

        <section id="market-worked-examples">
          <h3>17. Worked Examples: Forward, Option, and Spread Payoffs</h3>
          <div className="learning-example-card">
            <h4>Example 1: Long forward for a token buyer</h4>
            <p>
              A firm expects to need <InlineMath latex={String.raw`Q=1000`} />{" "}
              contract units in three months. It enters a long forward at{" "}
              <InlineMath latex={String.raw`F_{0,T}=0.09`} /> USD per unit. If
              the settlement spot price is{" "}
              <InlineMath latex={String.raw`S_T=0.16`} />, the forward payoff
              is:
            </p>
            <MathEquation
              title="Forward payoff example"
              latex={String.raw`\Pi_T^{long}=1000(0.16-0.09)=70`}
              explanation="The positive payoff offsets the higher spot procurement cost. If the spot price had fallen below the forward price, the payoff would be negative."
              variables={[
                {
                  symbol: String.raw`\Pi_T^{long}`,
                  meaning: "long-forward payoff at settlement",
                },
                { symbol: String.raw`Q`, meaning: "contract quantity" },
                { symbol: String.raw`S_T`, meaning: "settlement spot price" },
                { symbol: String.raw`F_{0,T}`, meaning: "forward price" },
              ]}
            />
          </div>
          <div className="learning-example-card">
            <h4>Example 2: Call option as burst-capacity insurance</h4>
            <p>
              A buyer holds an option with strike{" "}
              <InlineMath latex={String.raw`K=0.12`} /> on priority token
              service. If the spot price during congestion is{" "}
              <InlineMath latex={String.raw`S_T=0.20`} />, the intrinsic value
              per unit is:
            </p>
            <MathEquation
              title="Option payoff example"
              latex={String.raw`\max(S_T-K,0)=\max(0.20-0.12,0)=0.08`}
              explanation="The option pays in scarcity states and expires out of the money when spot capacity is cheap."
              variables={[
                { symbol: String.raw`K`, meaning: "strike price" },
                { symbol: String.raw`S_T`, meaning: "settlement spot price" },
              ]}
            />
          </div>
          <div className="learning-example-card">
            <h4>Example 3: EU-certified/global basis spread</h4>
            <p>
              Suppose the EU-certified token-service price is{" "}
              <InlineMath latex={String.raw`S^{EU}_T=0.18`} /> and the global
              benchmark price is <InlineMath latex={String.raw`S^{G}_T=0.10`} />
              {". "}
              The certified basis is:
            </p>
            <MathEquation
              title="Certified basis example"
              latex={String.raw`\Delta^{EU,G}_T=S^{EU}_T-S^G_T=0.18-0.10=0.08`}
              explanation="The spread measures the premium paid for local or certified deliverability relative to the global benchmark."
              variables={[
                {
                  symbol: String.raw`\Delta^{EU,G}_T`,
                  meaning: "EU-certified versus global token spread",
                },
                {
                  symbol: String.raw`S^{EU}_T`,
                  meaning: "EU-certified token settlement price",
                },
                {
                  symbol: String.raw`S^G_T`,
                  meaning: "global benchmark settlement price",
                },
              ]}
            />
          </div>
        </section>

        <section id="market-interactive-hedge">
          <h3>18. Interactive Illustration: Forward Hedge and Basis Risk</h3>
          <p>
            The calculator below illustrates a long hedge for a future buyer of
            token service. The buyer must procure the required token class at
            the future spot price but also holds a forward-linked hedge. If the
            hedge instrument tracks the required token class, the hedge offsets
            spot-price increases. If the hedge instrument is only a proxy, basis
            risk remains.
          </p>
          <MathEquation
            title="Interactive hedge formula"
            latex={String.raw`C_T(h)=Q S_T^A-hQ(S_T^H-F_{0,T}^H)`}
            explanation="The cost equals unhedged procurement cost minus the long-forward payoff on the hedge instrument."
            variables={[
              { symbol: String.raw`Q`, meaning: "contract units required" },
              {
                symbol: String.raw`S_T^A`,
                meaning: "future spot price of the required token class",
              },
              {
                symbol: String.raw`S_T^H`,
                meaning: "future spot price of the hedge instrument",
              },
              {
                symbol: String.raw`F_{0,T}^H`,
                meaning: "forward price of the hedge instrument",
              },
              { symbol: String.raw`h`, meaning: "hedge share" },
            ]}
          />
          <ForwardHedgeLab />
        </section>

        <section id="market-abm-link">
          <h3>19. How Market Design Enters the ABM</h3>
          <p>
            The ABM can treat token contracts as claims on future capacity. A
            firm, public agency, or regulated entity chooses between spot use,
            reservation, forward procurement, and proxy hedges. Providers choose
            how much capacity to sell forward while preserving operational
            flexibility. Policy determines which agents may access global,
            allied, local, or certified pools.
          </p>
          <MathEquation
            title="Agent procurement portfolio"
            latex={String.raw`Q_{i,j,T}=Q^{spot}_{i,j,T}+Q^{res}_{i,j,T}+Q^{fwd}_{i,j,T}+Q^{opt}_{i,j,T}`}
            explanation="Future token service can be decomposed by procurement channel. Each channel has different price, flexibility, and default-risk properties."
            variables={[
              {
                symbol: String.raw`Q_{i,j,T}`,
                meaning:
                  "future token-service quantity for agent i and class j",
              },
              {
                symbol: String.raw`Q^{spot}`,
                meaning: "spot-procured quantity",
              },
              {
                symbol: String.raw`Q^{res}`,
                meaning: "reserved-capacity quantity",
              },
              {
                symbol: String.raw`Q^{fwd}`,
                meaning: "forward-contracted quantity",
              },
              {
                symbol: String.raw`Q^{opt}`,
                meaning: "option or priority-right quantity",
              },
            ]}
          />
          <p>
            This extension makes policy experiments richer. A
            compute-sovereignty rule can increase the premium of certified local
            delivery. A public priority rule can change option-like access
            rights. A grid-delay shock can raise default risk on forward
            delivery. A liquid token index can reduce budget uncertainty but
            leave quality and regional basis risk.
          </p>
        </section>

        <section id="market-governance">
          <h3>20. Governance, Manipulation, and Scientific Limits</h3>
          <p>
            A token market is credible only if the benchmark and delivery rules
            are credible. Governance must address price-source selection,
            conflicts of interest, stale quotes, missing data, model upgrades,
            deprecations, outages, compliance audits, and manipulation. The
            market should also publish what the benchmark does not measure.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Design risk</th>
                <th>Why it matters</th>
                <th>Control</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Benchmark manipulation</td>
                <td>
                  Participants may influence reported prices or index weights.
                </td>
                <td>
                  Transparent methodology, transaction data, audits, and
                  fallback rules.
                </td>
              </tr>
              <tr>
                <td>Quality drift</td>
                <td>
                  A model may change while the contract name remains the same.
                </td>
                <td>
                  Versioned model classes, benchmark tasks, and requalification
                  tests.
                </td>
              </tr>
              <tr>
                <td>Delivery failure</td>
                <td>
                  Capacity, power, or policy shocks may prevent service
                  delivery.
                </td>
                <td>
                  Margin, penalties, replacement auctions, and force majeure
                  definitions.
                </td>
              </tr>
              <tr>
                <td>Eligibility gaming</td>
                <td>
                  Low-quality service may be made to appear index-eligible.
                </td>
                <td>
                  Independent quality measurement and compliance certification.
                </td>
              </tr>
              <tr>
                <td>Market power</td>
                <td>Concentrated providers can affect prices or access.</td>
                <td>
                  Competition policy, transparency, interoperability, and public
                  procurement rules.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The scientific limit is equally important. A market price is not a
            universal measure of social value. It reflects the contract, the
            benchmark, the eligible users, the delivery pool, liquidity, and the
            distribution of market power. The documentation should therefore
            preserve the distinction between token-market prices and welfare.
          </p>
        </section>

        <section id="market-exercises">
          <h3>21. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Define a physically settled AI-token forward for a regulated
              hospital. Specify the provider, model class, region, service unit,
              delivery window, compliance rule, and substitution rule.
            </li>
            <li>
              Explain why a global token-price index may fail to hedge
              EU-certified public-sector token exposure.
            </li>
            <li>
              Derive the payoff of a long forward for a buyer with future token
              demand and explain when the hedge becomes imperfect.
            </li>
            <li>
              Compare a reserved-capacity contract with a call option on
              priority token service.
            </li>
            <li>
              Propose a settlement rule for a token index when a major model is
              upgraded during the contract period.
            </li>
            <li>
              Describe one scenario where financial settlement is preferable to
              physical delivery and one scenario where physical delivery is
              essential.
            </li>
            <li>
              Explain why clearinghouse margin for token forwards may need to
              account for electricity-price shocks and grid delays.
            </li>
            <li>
              Design a spread contract between frontier reasoning tokens and
              small-model batch tokens. State the economic risk being hedged.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 2</h3>
            <p>
              Citation identifiers are source-type specific: DOI links are used
              where assigned, official proceedings pages are used for published
              conference papers without DOI, arXiv is retained only for checked
              preprints, ISBNs are used for books, and institutional standards
              or reports are cited by issuer and document code.
            </p>
            <ol className="reference-list">
              {marketReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}

function TokenFoundationsArticle() {
  return (
    <div className="learning-article-layout">
      <aside
        className="learning-article-toc"
        aria-label="Article table of contents"
      >
        {tokenArticleToc.map(([id, label]) => (
          <a href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </aside>

      <article className="learning-article-body">
        <section id="token-learning-goals">
          <h3>Learning Goals</h3>
          <p className="learning-lede">
            This module builds the object that the rest of the simulator
            studies. By the end, the reader should be able to distinguish a
            token in the machine-learning sense from a token in the economic and
            financial sense, explain why raw token counts are not comparable
            across services, and understand why token access can become an
            infrastructure, policy, and risk-management problem.
          </p>
          <p>
            The technical vocabulary follows the language-model literature on
            transformer architectures and subword tokenization, especially
            <CitationLink id="vaswani2017">
              Vaswani et al. (2017)
            </CitationLink>,{" "}
            <CitationLink id="sennrich2016">
              Sennrich, Haddow, and Birch (2016)
            </CitationLink>
            {", and "}
            <CitationLink id="kudoRichardson2018">
              Kudo and Richardson (2018)
            </CitationLink>
            {". "}
            The economic interpretation draws on information-goods economics (
            <CitationLink id="shapiroVarian1999">
              Shapiro and Varian, 1999
            </CitationLink>
            ), portfolio selection (
            <CitationLink id="markowitz1952">Markowitz, 1952</CitationLink>),
            derivative-pricing foundations (
            <CitationLink id="blackScholes1973">
              Black and Scholes, 1973
            </CitationLink>
            {"; "}
            <CitationLink id="merton1973">Merton, 1973</CitationLink>;{" "}
            <CitationLink id="duffie2001">Duffie, 2001</CitationLink>),
            electricity and commodity-price dynamics (
            <CitationLink id="schwartz1997">Schwartz, 1997</CitationLink>;{" "}
            <CitationLink id="bessembinderLemmon2002">
              Bessembinder and Lemmon, 2002
            </CitationLink>
            ), and tail-risk optimization (
            <CitationLink id="rockafellarUryasev2000">
              Rockafellar and Uryasev, 2000
            </CitationLink>
            ).
          </p>
          <div className="learning-goal-grid">
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define a token technically as a representation unit used by
                modern AI systems.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Define an effective token economically as quality-adjusted model
                service.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Explain hidden service tokens, tool tokens, cached tokens, and
                output tokens.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Connect token demand to compute, memory, electricity, latency,
                and legal access.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Explain why a cheap small-model token may be more expensive per
                solved task than an expensive frontier-model token.
              </p>
            </article>
            <article>
              <CheckCircle2 size={18} />
              <p>
                Formulate token spreads, token indices, hedges, and allocation
                problems as mathematical-finance objects.
              </p>
            </article>
          </div>
        </section>

        <section id="token-three-definitions">
          <h3>1. Three Definitions of a Token</h3>
          <p>
            The word token is overloaded. In this project it must be separated
            into three layers. A technical token is a symbol or latent unit used
            by a model. A billable token is the unit that appears on a provider
            invoice. An effective economic token is a quality-adjusted unit of
            useful model service. Confusing these layers is the fastest way to
            make the economics look simpler than it is.
          </p>
          <p>
            The first layer is inherited from machine learning: tokens are the
            discrete sequence elements produced by tokenization before a
            language model embeds and processes them. The second layer is a
            platform-pricing convention. The third layer is introduced here as
            an economic measurement unit, analogous to the way finance often
            converts heterogeneous cash flows or commodities into standardized
            risk exposures before portfolio analysis.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Definition</th>
                <th>Why it matters for economics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Technical token</td>
                <td>
                  A discrete or latent representation unit consumed or produced
                  by a model.
                </td>
                <td>
                  Determines sequence length, attention cost, memory pressure,
                  and throughput.
                </td>
              </tr>
              <tr>
                <td>Billable token</td>
                <td>The metered unit used by API or platform pricing.</td>
                <td>
                  Determines invoices, budgets, procurement contracts, and
                  short-run usage response.
                </td>
              </tr>
              <tr>
                <td>Effective token</td>
                <td>
                  A quality-adjusted service unit for a use case under service
                  conditions.
                </td>
                <td>
                  Determines economic value, welfare, productivity, and
                  comparability across providers.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            This distinction is the first modelling choice in the ABM. The
            current simulator normalizes quality to one so that infrastructure
            mechanisms are visible. That is analytically useful, but it is not
            the final research frontier. A richer model should estimate
            quality-adjusted tokens by use case and provider.
          </p>
        </section>

        <section id="token-non-equivalence">
          <h3>2. A Token Is Not a Token</h3>
          <p>
            A token from a frontier reasoning model and a token from a smaller
            or less capable model should not be treated as equivalent. They are
            closer to different grades of a commodity, or different assets in a
            portfolio, than to identical units of one homogeneous good. Each
            token class has its own price, delivery conditions, quality,
            latency, reliability, legal status, and task-success distribution. A
            one-token count is therefore a quantity in a technical accounting
            system, not a universal unit of economic value.
          </p>
          <p>
            This non-equivalence is not a rhetorical claim. It follows from the
            fact that model service is a composite good: one unit combines
            algorithmic capability, context handling, latency, region,
            reliability, privacy, and task success. In finance language, token
            classes therefore resemble distinct risky assets with imperfect
            substitution and basis risk, not different labels for the same
            payoff.
          </p>
          <p>
            A frontier model may be expensive per raw input or output token, but
            may solve a difficult task in one attempt. A smaller model may be
            cheap per raw token, but may require repeated prompting, external
            verification, repair attempts, or human correction. The relevant
            object for finance is not raw token cost. It is expected cost per
            unit of task-equivalent output, with uncertainty around both quality
            and future price.
          </p>
          <MathEquation
            title="Token contract class"
            latex={String.raw`j=(p,m,r,\kappa,\ell,\pi,\gamma,\tau)`}
            explanation="A token asset class must identify the provider, model, region, service class, latency, compliance, reliability, and delivery window. Without this contract specification, token prices are not comparable."
            variables={[
              {
                symbol: String.raw`j`,
                meaning: "token contract class or model-token asset",
              },
              { symbol: String.raw`p`, meaning: "provider or platform" },
              {
                symbol: String.raw`m`,
                meaning:
                  "model or model class, such as frontier reasoning, general purpose, small local, or domain-specialized",
              },
              {
                symbol: String.raw`r`,
                meaning: "compute region or certified delivery pool",
              },
              {
                symbol: String.raw`\kappa`,
                meaning:
                  "billing unit: input token, output token, cached token, batch token, or reserved-capacity token",
              },
              {
                symbol: String.raw`\ell`,
                meaning: "latency or service-level class",
              },
              {
                symbol: String.raw`\pi`,
                meaning:
                  "privacy, residency, certification, or compliance class",
              },
              {
                symbol: String.raw`\gamma`,
                meaning: "reliability, interruption, and priority-access rule",
              },
              {
                symbol: String.raw`\tau`,
                meaning: "delivery time, maturity, or reservation window",
              },
            ]}
          />
          <p>
            This lets us speak in mathematical-finance language. A token class
            is an asset-like exposure because its future price and usefulness
            are uncertain. A firm that depends on one model-token class has
            basis risk if another model-token class becomes cheap while its own
            production workflows still require the expensive one. A public
            agency has compliance basis risk if global tokens become cheap but
            legally admissible EU certified tokens remain scarce. A developer
            has model-quality basis risk if a cheap model's raw tokens do not
            substitute for frontier reasoning tokens in the task that matters.
          </p>
        </section>

        <section id="token-worked-examples">
          <h3>
            3. Worked Examples: Raw Tokens, Effective Tokens, and Task Cost
          </h3>
          <p>
            Simple numerical examples are useful because the relevant functions
            are complex. The examples below are not empirical estimates. They
            are controlled calculations that show why definitions matter before
            calibration begins.
          </p>
          <div className="learning-example-card">
            <h4>Example 1: Two tokenizers give different raw counts</h4>
            <p>
              Suppose the same task prompt is encoded as 900 tokens by tokenizer
              A and 1,200 tokens by tokenizer B. If both systems charge the same
              posted price per raw token, tokenizer B appears 33.3 percent more
              expensive before any model-quality adjustment:
            </p>
            <MathEquation
              title="Tokenizer count ratio"
              latex={String.raw`\frac{T^{raw,B}}{T^{raw,A}}=\frac{1200}{900}=1.333`}
              explanation="Raw token counts are tokenizer-dependent. A raw token is not a stable economic unit unless the tokenizer and model class are fixed."
              variables={[
                {
                  symbol: String.raw`T^{raw,A}`,
                  meaning: "raw token count under tokenizer A",
                },
                {
                  symbol: String.raw`T^{raw,B}`,
                  meaning: "raw token count under tokenizer B",
                },
              ]}
            />
          </div>
          <div className="learning-example-card">
            <h4>
              Example 2: A more expensive model can be cheaper per solved task
            </h4>
            <p>
              Consider a reasoning task. Model F is a frontier model. Model S is
              a smaller model. A single attempt with F costs 0.06 USD and solves
              the task with probability 0.90. A single attempt with S costs 0.02
              USD and solves the task with probability 0.25. Ignoring residual
              error costs for the moment, the expected cost per solved task is:
            </p>
            <MathEquation
              title="Expected cost comparison"
              latex={String.raw`P^{task}_{F}=\frac{0.06}{0.90}=0.0667,\qquad P^{task}_{S}=\frac{0.02}{0.25}=0.0800`}
              explanation="The smaller model is cheaper per attempt but more expensive per solved task in this stylized example because it requires more expected attempts."
              variables={[
                {
                  symbol: String.raw`P^{task}_{F}`,
                  meaning:
                    "expected cost per solved task using frontier token class F",
                },
                {
                  symbol: String.raw`P^{task}_{S}`,
                  meaning:
                    "expected cost per solved task using smaller-model token class S",
                },
              ]}
            />
          </div>
          <div className="learning-example-card">
            <h4>
              Example 3: Quality conversion defines an effective-token unit
            </h4>
            <p>
              Let the benchmark be one solved legal-analysis task. If one
              service token from model F produces 0.004 expected solved tasks
              and one service token from model S produces 0.001 expected solved
              tasks, then one F service token is equivalent to four S service
              tokens for that use case:
            </p>
            <MathEquation
              title="Use-case-specific equivalence ratio"
              latex={String.raw`\chi^{F,S}_{u,t}=\frac{y_{F,u,t}}{y_{S,u,t}}=\frac{0.004}{0.001}=4`}
              explanation="Equivalence is use-case-specific. The same ratio may be different for translation, code repair, legal reasoning, or public-sector document review."
              variables={[
                {
                  symbol: String.raw`\chi^{F,S}_{u,t}`,
                  meaning:
                    "effective-token equivalence ratio between frontier model F and smaller model S for use case u",
                },
                {
                  symbol: String.raw`y_{F,u,t}`,
                  meaning: "solved-task yield of token class F",
                },
                {
                  symbol: String.raw`y_{S,u,t}`,
                  meaning: "solved-task yield of token class S",
                },
              ]}
            />
          </div>
        </section>

        <section id="token-technical-pipeline">
          <h3>4. The Technical Pipeline: From Text to Model Computation</h3>
          <p>
            For text models, tokenization maps a string into a sequence of
            integer identifiers. Modern systems often use subword tokenizers
            such as byte-pair encoding, unigram language-model tokenization, or
            byte-level variants. A word may be one token, many tokens, or part
            of a token depending on language, spelling, domain, and tokenizer.
            Code, mathematical notation, and low-resource languages can be
            tokenized very differently from ordinary English text.
          </p>
          <p>
            Byte-pair encoding for subword neural machine translation is
            associated with{" "}
            <CitationLink id="sennrich2016">
              Sennrich, Haddow, and Birch (2016)
            </CitationLink>
            {". "}
            SentencePiece, which treats tokenization as a language-independent
            preprocessing layer, is introduced by{" "}
            <CitationLink id="kudoRichardson2018">
              Kudo and Richardson (2018)
            </CitationLink>
            {". "}
            These references matter economically because a provider's tokenizer
            partly determines billable sequence length, memory pressure, and
            service cost.
          </p>
          <MathEquation
            title="Tokenization map"
            latex={String.raw`\tau_{\nu}:x\mapsto (s_1,\ldots,s_n),\qquad s_j\in\mathcal{V}_{\nu}`}
            explanation="A tokenizer with vocabulary nu maps an input object into a sequence of token symbols. The same text can produce a different sequence under a different tokenizer."
            variables={[
              {
                symbol: String.raw`\tau_{\nu}`,
                meaning: "tokenizer indexed by vocabulary and rules nu",
              },
              {
                symbol: String.raw`x`,
                meaning:
                  "input object, such as text, code, image patches, or audio features",
              },
              {
                symbol: String.raw`s_j`,
                meaning: "token symbol at position j",
              },
              {
                symbol: String.raw`\mathcal{V}_{\nu}`,
                meaning: "token vocabulary for tokenizer nu",
              },
              {
                symbol: String.raw`n`,
                meaning: "sequence length after tokenization",
              },
            ]}
          />
          <p>
            In a transformer, tokens become vectors through embeddings. The
            model then applies attention and feed-forward transformations across
            the sequence. Very roughly, a longer sequence raises compute and
            memory requirements because each generated token must condition on
            previous context. The exact cost depends on architecture, caching,
            batching, hardware, sparsity, quantization, and serving stack.
          </p>
          <p>
            The transformer architecture and attention mechanism are grounded in
            <CitationLink id="vaswani2017">Vaswani et al. (2017)</CitationLink>.
            Scaling-law work such as{" "}
            <CitationLink id="kaplan2020">Kaplan et al. (2020)</CitationLink>{" "}
            and compute-optimal training analysis such as{" "}
            <CitationLink id="hoffmann2022">
              Hoffmann et al. (2022)
            </CitationLink>{" "}
            motivate treating model size, data, compute, and efficiency as
            economic state variables rather than fixed constants.
          </p>
          <MathEquation
            title="Simplified sequence-service cost"
            latex={String.raw`C^{serve}_{m,t}\approx a_m n^{in}_{t}+b_m n^{out}_{t}+c_m n^{ctx}_{t}n^{out}_{t}`}
            explanation="This stylized expression is not a hardware benchmark. It motivates why input length, output length, and context length matter for service cost."
            variables={[
              {
                symbol: String.raw`C^{serve}_{m,t}`,
                meaning: "serving cost for model m at time t",
              },
              { symbol: String.raw`n^{in}_{t}`, meaning: "input token length" },
              {
                symbol: String.raw`n^{out}_{t}`,
                meaning: "generated output token length",
              },
              {
                symbol: String.raw`n^{ctx}_{t}`,
                meaning: "effective context length used during generation",
              },
              {
                symbol: String.raw`a_m,b_m,c_m`,
                meaning: "model- and architecture-specific cost coefficients",
              },
            ]}
          />
          <div className="learning-callout">
            <Cpu size={20} />
            <p>
              The important lesson for economics is not the exact engineering
              coefficient. It is that token demand translates into scarce
              serving capacity through a real production system: GPUs, memory
              bandwidth, software routing, cooling, and power.
            </p>
          </div>
        </section>

        <section id="token-service-accounting">
          <h3>5. Service Accounting: Visible and Hidden Tokens</h3>
          <p>
            A user sees a prompt and an answer. The provider may also run
            retrieval, tool calls, policy checks, routing models, embeddings,
            ranking, caching, safety filters, and post-processing. Some of these
            steps consume tokens directly; others consume token-equivalent
            compute. A useful service-accounting model distinguishes visible
            user tokens from hidden provider-side work.
          </p>
          <MathEquation
            title="Full service-token accounting"
            latex={String.raw`\begin{aligned}
T^{svc}_{u,t}
&=T^{in}_{u,t}+T^{out}_{u,t}+T^{tool}_{u,t}+T^{retr}_{u,t}+T^{safe}_{u,t}+T^{route}_{u,t},\\
Cost_{u,t}
&=T^{svc}_{u,t}mc_{m,r,t}+F^{fixed}_{m,r,t}.
\end{aligned}`}
            explanation="The billable unit may be visible tokens, but the production system must pay for the whole service path."
            variables={[
              {
                symbol: String.raw`T^{svc}_{u,t}`,
                meaning:
                  "total service tokens or token-equivalent compute for use case u at time t",
              },
              {
                symbol: String.raw`T^{in}_{u,t}`,
                meaning: "visible input tokens",
              },
              {
                symbol: String.raw`T^{out}_{u,t}`,
                meaning: "visible output tokens",
              },
              {
                symbol: String.raw`T^{tool}_{u,t}`,
                meaning: "tool-use or action tokens",
              },
              {
                symbol: String.raw`T^{retr}_{u,t}`,
                meaning:
                  "retrieval, embedding, or ranking token-equivalent work",
              },
              {
                symbol: String.raw`T^{safe}_{u,t}`,
                meaning: "safety, policy, and verification work",
              },
              {
                symbol: String.raw`T^{route}_{u,t}`,
                meaning: "router or model-selection work",
              },
              {
                symbol: String.raw`mc_{m,r,t}`,
                meaning: "marginal service cost for model m in region r",
              },
              {
                symbol: String.raw`F^{fixed}_{m,r,t}`,
                meaning:
                  "fixed allocated platform, model, and infrastructure cost",
              },
            ]}
          />
          <p>
            Agentic applications make this distinction essential. A single user
            request can produce many internal model calls: plan, search,
            retrieve, call tools, inspect results, correct errors, and produce a
            final answer. The final response may be short while the hidden
            compute path is large. For policy and capacity planning, the hidden
            path is often more important than the visible answer.
          </p>
        </section>

        <section id="token-usd-price">
          <h3>6. USD Token Price: The Posted Price Is Only the First Layer</h3>
          <p>
            In today's API-style markets, a token is typically associated with a
            posted currency price: for example, a USD price per million input
            tokens, output tokens, cached tokens, batch tokens, or reserved
            capacity. Those posted prices are real economic signals, but they
            are not sufficient to rank models. A token with a low posted price
            can be expensive if it creates many retries, low accuracy, higher
            latency, or more human correction. A token with a high posted price
            can be cheap if it solves the task reliably with fewer calls.
          </p>
          <MathEquation
            title="Raw posted token cost"
            latex={String.raw`C^{raw}_{j,u,t}=S^{in}_{j,t}T^{in}_{j,u,t}+S^{out}_{j,t}T^{out}_{j,u,t}+S^{cache}_{j,t}T^{cache}_{j,u,t}+S^{tool}_{j,t}T^{tool}_{j,u,t}`}
            explanation="The raw monetary cost of a model call is a sum of posted token prices times token quantities by billing category."
            variables={[
              {
                symbol: String.raw`C^{raw}_{j,u,t}`,
                meaning:
                  "raw USD cost of using token class j for use case u at time t",
              },
              {
                symbol: String.raw`S^{in}_{j,t}`,
                meaning:
                  "posted price per input token or per million input tokens",
              },
              {
                symbol: String.raw`S^{out}_{j,t}`,
                meaning:
                  "posted price per output token or per million output tokens",
              },
              {
                symbol: String.raw`S^{cache}_{j,t}`,
                meaning: "posted price for cached or repeated-context tokens",
              },
              {
                symbol: String.raw`S^{tool}_{j,t}`,
                meaning:
                  "posted price or token-equivalent cost for tool, retrieval, or action tokens",
              },
              {
                symbol: String.raw`T^{in},T^{out},T^{cache},T^{tool}`,
                meaning: "token quantities in each billing category",
              },
            ]}
          />
          <p>
            For financial analysis, the vector of posted prices
            <InlineMath latex={String.raw`S_{t}=(S_{1,t},\ldots,S_{J,t})`} /> is
            analogous to a cross-section of asset prices. But the payoff of each
            asset is not a cash dividend. The payoff is task completion, time
            saved, risk reduced, compliance achieved, or productivity created.
            The pricing problem is therefore closer to valuing a
            quality-adjusted commodity input than valuing a generic software
            unit.
          </p>
        </section>

        <section id="token-solved-task-cost">
          <h3>7. Expected Cost per Solved Task</h3>
          <p>
            The correct comparison is often not "which model has the cheapest
            token?" but "which token class gives the lowest risk-adjusted cost
            per solved task?" If a smaller model solves a task with probability
            <InlineMath latex={String.raw`p^{solve}_{j,u,t}`} /> per attempt and
            each attempt costs{" "}
            <InlineMath latex={String.raw`C^{raw}_{j,u,t}`} />, then repeated
            prompting changes the economics. Under a simple geometric-attempt
            approximation, the expected number of attempts is{" "}
            <InlineMath latex={String.raw`1/p^{solve}_{j,u,t}`} />.
          </p>
          <MathEquation
            title="Expected cost per solved task"
            latex={String.raw`P^{task}_{j,u,t}=\frac{C^{raw}_{j,u,t}+C^{verify}_{j,u,t}+C^{latency}_{j,u,t}}{p^{solve}_{j,u,t}}+C^{error}_{j,u,t}`}
            explanation="The financially relevant price is the expected cost of getting a usable answer, not the posted price of one raw token."
            variables={[
              {
                symbol: String.raw`P^{task}_{j,u,t}`,
                meaning:
                  "expected USD cost per solved task using token class j",
              },
              {
                symbol: String.raw`C^{raw}_{j,u,t}`,
                meaning: "raw posted token cost of one attempt",
              },
              {
                symbol: String.raw`C^{verify}_{j,u,t}`,
                meaning:
                  "cost of verification, repair, or human review per attempt",
              },
              {
                symbol: String.raw`C^{latency}_{j,u,t}`,
                meaning: "time and delay cost per attempt",
              },
              {
                symbol: String.raw`p^{solve}_{j,u,t}`,
                meaning:
                  "probability that one attempt solves the task at acceptable quality",
              },
              {
                symbol: String.raw`C^{error}_{j,u,t}`,
                meaning:
                  "expected residual error, compliance, or safety cost after delivery",
              },
            ]}
          />
          <p>
            This equation captures the central economic mechanism: an expensive
            frontier-model token can be cheaper per solved task if it reduces
            retries and error costs. A cheap model-token can dominate for simple
            tasks, but fail for reasoning, code generation, regulated advice, or
            high-stakes classification. The optimal allocation is task-specific,
            time-varying, and uncertain. That makes it a natural object for
            portfolio and hedging methods.
          </p>
          <MathEquation
            title="Task-equivalent token yield"
            latex={String.raw`y_{j,u,t}=\frac{p^{solve}_{j,u,t}}{T^{svc}_{j,u,t}},\qquad S^{eff}_{j,u,t}=\frac{S^{raw}_{j,t}}{y_{j,u,t}}`}
            explanation="The yield converts raw model tokens into solved-task capacity. The effective price divides the raw token price by the task-equivalent yield."
            variables={[
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning: "expected solved-task yield per service token",
              },
              {
                symbol: String.raw`T^{svc}_{j,u,t}`,
                meaning:
                  "service-token requirement per attempt for token class j and use case u",
              },
              {
                symbol: String.raw`S^{raw}_{j,t}`,
                meaning: "raw posted token price for token class j",
              },
              {
                symbol: String.raw`S^{eff}_{j,u,t}`,
                meaning: "effective price per solved-task-equivalent token",
              },
            ]}
          />
        </section>

        <section id="token-interactive-equivalence">
          <h3>
            8. Interactive Illustration: Effective Price of Two Token Classes
          </h3>
          <p>
            The calculator below compares two stylized model-token classes. The
            frontier class has a higher posted token price but a higher
            probability of solving the task. The smaller-model class has a lower
            posted token price but may require more attempts, verification, and
            correction. The calculation uses the same expected solved-task price
            introduced above:
          </p>
          <MathEquation
            title="Interactive calculator formula"
            latex={String.raw`P^{task}_{j}=\frac{C^{raw}_{j}+C^{verify}_{j}+C^{latency}_{j}}{p^{solve}_{j}}+C^{error}_{j}`}
            explanation="All inputs in the illustration are stylized. The purpose is to visualize the effect of price, quality, and retry probability, not to estimate a real provider's costs."
            variables={[
              {
                symbol: String.raw`j`,
                meaning:
                  "token class, either frontier F or smaller-model S in the illustration",
              },
              {
                symbol: String.raw`C^{raw}_{j}`,
                meaning: "posted raw token cost per attempt",
              },
              {
                symbol: String.raw`C^{verify}_{j}`,
                meaning: "verification or repair cost per attempt",
              },
              {
                symbol: String.raw`C^{latency}_{j}`,
                meaning: "delay cost per attempt",
              },
              {
                symbol: String.raw`p^{solve}_{j}`,
                meaning:
                  "probability that one attempt solves the benchmark task",
              },
              {
                symbol: String.raw`C^{error}_{j}`,
                meaning: "expected residual error cost",
              },
            ]}
          />
          <TokenEquivalenceLab />
        </section>

        <section id="token-economic-demand">
          <h3>9. The Economic Definition: Tokens as Derived Demand</h3>
          <p>
            Households, firms, public agencies, and AI providers do not
            fundamentally want tokens. They want tasks completed: writing,
            coding, diagnosis support, translation, procurement analysis,
            document review, fraud detection, scientific search, public
            administration, or autonomous workflows. Token demand is derived
            from the value of these downstream tasks.
          </p>
          <p>
            This is a derived-demand argument. It is consistent with
            information-goods economics: users value the service because it
            changes production, search, coordination, or decision costs, not
            because the raw digital unit has intrinsic value by itself (
            <CitationLink id="shapiroVarian1999">
              Shapiro and Varian, 1999
            </CitationLink>
            {"; "}
            <CitationLink id="agrawal2019">
              Agrawal, Gans, and Goldfarb, 2019
            </CitationLink>
            ).
          </p>
          <MathEquation
            title="Quality-adjusted effective tokens"
            latex={String.raw`T^{eff}_{u,m,r,t}=q_{u,m,r,t}T^{raw}_{u,m,r,t}`}
            explanation="Effective tokens are the unit the economist wants: raw tokens scaled by task quality and service conditions."
            variables={[
              {
                symbol: String.raw`T^{eff}_{u,m,r,t}`,
                meaning: "quality-adjusted effective tokens",
              },
              {
                symbol: String.raw`T^{raw}_{u,m,r,t}`,
                meaning: "raw billable tokens",
              },
              {
                symbol: String.raw`q_{u,m,r,t}`,
                meaning:
                  "quality, reliability, compliance, latency, privacy, and task-performance index",
              },
            ]}
          />
          <MathEquation
            title="Task value and willingness to pay"
            latex={String.raw`V_{i,u,t}=p^{task}_{i,u,t}B_{i,u,t}-C^{integrate}_{i,u,t}-R^{risk}_{i,u,t}`}
            explanation="A user pays for tokens only because the model service creates expected task value net of integration and risk costs."
            variables={[
              {
                symbol: String.raw`V_{i,u,t}`,
                meaning: "net value of AI service for agent i and use case u",
              },
              {
                symbol: String.raw`p^{task}_{i,u,t}`,
                meaning:
                  "probability or quality-adjusted success rate for the task",
              },
              {
                symbol: String.raw`B_{i,u,t}`,
                meaning: "gross benefit if the task is performed successfully",
              },
              {
                symbol: String.raw`C^{integrate}_{i,u,t}`,
                meaning: "cost of integrating AI into the user's workflow",
              },
              {
                symbol: String.raw`R^{risk}_{i,u,t}`,
                meaning: "expected risk, compliance, or error cost",
              },
            ]}
          />
          <p>
            This is why a public hospital, a bank, a small firm, a student, and
            a model provider should not be represented by one demand curve. They
            differ in task value, elasticity, legal constraints, risk tolerance,
            and ability to substitute across compute regions.
          </p>
        </section>

        <section id="token-production-function">
          <h3>10. Token Production: The Economic Production Function</h3>
          <p>
            Token supply looks digital to the user, but the production function
            is physical. A delivered token requires model software, accelerator
            hardware, memory, storage, networking, data-centre space,
            electricity, cooling, operations, and legal access. The ABM
            therefore treats token capacity as a bottlenecked infrastructure
            service, not a frictionless software copy.
          </p>
          <p>
            This modelling choice separates AI tokens from the textbook
            zero-marginal-cost caricature of digital goods. The weights of a
            trained model can be copied, but low-latency, high-reliability,
            certified inference capacity is constrained by hardware, power,
            location, and operations. The energy and data-centre evidence in the{" "}
            <CitationLink id="iea2025">IEA (2025)</CitationLink> and{" "}
            <CitationLink id="masanet2020">Masanet et al. (2020)</CitationLink>{" "}
            motivates making these bottlenecks explicit.
          </p>
          <MathEquation
            title="Effective token production"
            latex={String.raw`Y^{tok}_{r,t}=A^{model}_{t}A^{serve}_{r,t}\min\{K^{GPU}_{r,t},K^{DC}_{r,t},K^{Grid}_{r,t},K^{Power}_{r,t}\}`}
            explanation="Production is limited by the tightest capacity layer. Better models or serving software raise productivity, but cannot use capacity that is not powered or connected."
            variables={[
              {
                symbol: String.raw`Y^{tok}_{r,t}`,
                meaning:
                  "effective token output capacity in region r at time t",
              },
              {
                symbol: String.raw`A^{model}_{t}`,
                meaning: "model and algorithmic productivity",
              },
              {
                symbol: String.raw`A^{serve}_{r,t}`,
                meaning: "regional serving-stack productivity",
              },
              {
                symbol: String.raw`K^{GPU}_{r,t}`,
                meaning: "accelerator capacity",
              },
              {
                symbol: String.raw`K^{DC}_{r,t}`,
                meaning: "data-centre IT capacity",
              },
              {
                symbol: String.raw`K^{Grid}_{r,t}`,
                meaning: "grid-connection capacity",
              },
              {
                symbol: String.raw`K^{Power}_{r,t}`,
                meaning: "available power-contract or electricity supply layer",
              },
            ]}
          />
          <MathEquation
            title="Marginal service cost"
            latex={String.raw`mc_{m,r,t}=e_{m,t}P^{elec}_{r,t}+c^{GPU}_{m,r,t}+c^{DC}_{r,t}+c^{net}_{r,t}+c^{ops}_{r,t}+c^{comp}_{m,r,t}`}
            explanation="The marginal cost of serving a token combines electricity intensity, electricity price, hardware amortization, data-centre costs, network costs, operations, and compliance."
            variables={[
              {
                symbol: String.raw`e_{m,t}`,
                meaning: "MWh per effective token for model m",
              },
              {
                symbol: String.raw`P^{elec}_{r,t}`,
                meaning: "electricity price in region r",
              },
              {
                symbol: String.raw`c^{GPU}_{m,r,t}`,
                meaning: "accelerator and server amortization per token",
              },
              {
                symbol: String.raw`c^{DC}_{r,t}`,
                meaning: "data-centre capital and facility cost per token",
              },
              {
                symbol: String.raw`c^{net}_{r,t}`,
                meaning: "network and data-transfer cost per token",
              },
              {
                symbol: String.raw`c^{ops}_{r,t}`,
                meaning: "operations, cooling, and maintenance cost",
              },
              {
                symbol: String.raw`c^{comp}_{m,r,t}`,
                meaning:
                  "compliance, certification, privacy, and assurance cost",
              },
            ]}
          />
          <p>
            A key feature of this function is complementarity. Extra GPUs have
            low value if grid connection is delayed. Extra grid headroom has low
            value if accelerators are unavailable. Better model efficiency
            helps, but can also increase demand by making more use cases
            economical. The ABM is designed to show these interactions.
          </p>
        </section>

        <section id="token-scarcity">
          <h3>11. Why Scarcity Appears Even When Software Scales</h3>
          <p>
            Digital goods usually have high fixed cost and low marginal
            reproduction cost. AI tokens only partially fit this pattern. The
            model weights can be copied, but serving frontier-scale demand
            requires scarce real-time resources. Scarcity appears through at
            least six channels.
          </p>
          <div className="learning-concept-grid">
            <article>
              <Layers size={18} />
              <h4>Accelerator scarcity</h4>
              <p>
                High-end GPUs and specialized accelerators are capital-intensive
                and supply-constrained.
              </p>
            </article>
            <article>
              <Zap size={18} />
              <h4>Electricity and grid scarcity</h4>
              <p>
                Data-centre load needs power contracts, substations,
                transformers, and connection queues.
              </p>
            </article>
            <article>
              <Route size={18} />
              <h4>Latency scarcity</h4>
              <p>
                Interactive use cases require nearby, responsive, reliable
                capacity.
              </p>
            </article>
            <article>
              <Landmark size={18} />
              <h4>Legal-access scarcity</h4>
              <p>
                Privacy, residency, certification, or public-sector rules can
                shrink the feasible supply pool.
              </p>
            </article>
          </div>
          <p>
            This is the logic behind the simulator's EU-local compute scenarios.
            A policy may not change the global supply of model service, but it
            can change the legally admissible supply for a class of users. If
            demand is rerouted to a smaller local pool, the token price can rise
            even when the underlying technology improves.
          </p>
        </section>

        <section id="token-spreads">
          <h3>12. Token Spreads and Basis Risk</h3>
          <p>
            Once token classes are non-equivalent, spreads become meaningful.
            The spread between a frontier reasoning token and a small-model
            token measures more than a posted price gap. It reflects the
            expected cost of obtaining a successful task completion through two
            different service technologies.
          </p>
          <p>
            The economic spread widens when the frontier model becomes more
            valuable for the relevant task, when small-model retries become more
            expensive, or when certified access to the frontier model becomes
            scarce. A firm can therefore have stable total token volume and still
            carry a large exposure to the frontier-small spread.
          </p>
          <p>
            The spread language is borrowed from commodity, electricity, and
            fixed-income risk management. The analogy is useful because each
            field studies relative prices between related claims. AI-compute
            spreads add a further complication: the two claims may differ in
            model quality, legal admissibility, latency, and future availability.
            For this reason the spread below is defined on task-adjusted prices.
          </p>
          <MathEquation
            title="Task-adjusted token spread"
            latex={String.raw`\Delta^{A,B}_{u,t}=P^{task}_{A,u,t}-P^{task}_{B,u,t}`}
            explanation="The economically relevant spread compares the expected cost per solved task, not just the posted raw-token price."
            variables={[
              {
                symbol: String.raw`\Delta^{A,B}_{u,t}`,
                meaning:
                  "task-adjusted spread between token classes A and B for use case u",
              },
              {
                symbol: String.raw`P^{task}_{A,u,t}`,
                meaning: "expected cost per solved task using token class A",
              },
              {
                symbol: String.raw`P^{task}_{B,u,t}`,
                meaning: "expected cost per solved task using token class B",
              },
            ]}
          />
          <p>
            This spread can be traded in principle. A firm with workflows that
            require frontier reasoning tokens is "long" frontier token exposure:
            it loses when frontier-token prices rise relative to its output
            prices. If a liquid market existed, it might hedge by buying forward
            frontier-token capacity, selling exposure to cheaper flexible
            tokens, or entering a spread contract that pays when the
            frontier-small spread widens. The hedge is imperfect because models
            are not perfect substitutes. That imperfection is basis risk.
          </p>
          <MathEquation
            title="Hedging residual basis risk"
            latex={String.raw`\min_{h}\operatorname{Var}\left(Q^{A}_{u,T}S^{A}_{T}-hQ^{H}_{T}S^{B}_{T}\right)`}
            explanation="A simple hedge chooses h to reduce the variance of a future procurement cost for token class A using a hedge instrument with contract unit Q^H_T linked to token class B. The residual variance is basis risk."
            variables={[
              {
                symbol: String.raw`Q^{A}_{u,T}`,
                meaning:
                  "future quantity exposure to token class A for use case u",
              },
              {
                symbol: String.raw`S^{A}_{T}`,
                meaning: "future price of token class A",
              },
              {
                symbol: String.raw`Q^{H}_{T}`,
                meaning:
                  "delivery or payoff unit of one hedge contract at horizon T",
              },
              {
                symbol: String.raw`S^{B}_{T}`,
                meaning: "future price of hedge token or token index B",
              },
              { symbol: String.raw`h`, meaning: "hedge ratio" },
            ]}
          />
          <p>
            The analogy to electricity markets is useful. Electricity hedges
            often face locational basis risk: a contract at one hub does not
            perfectly hedge prices at another node. AI-token hedges would face
            model-quality basis risk when two models solve tasks at different
            rates. They would face compliance basis risk when a hedge instrument
            settles on a service class that cannot be used for the buyer's legal
            workload. Regional compute basis risk enters when the hedge settles
            in a delivery pool with different grid or capacity conditions.
          </p>
        </section>

        <section id="token-index">
          <h3>13. A Token Index of Equivalent Model Service</h3>
          <p>
            Because raw tokens are not comparable, a useful market benchmark
            would be a token index. The index begins by converting each token
            class into a common effective-service unit. Only after that
            conversion does aggregation make economic sense.
          </p>
          <p>
            The conversion step is the scientific core of the index. It requires
            benchmark tasks, measurement of expected solved-task yield, and
            transparent treatment of service conditions such as latency,
            certification, and region of delivery. Once those ingredients are
            declared, the index can aggregate model-service prices using weights
            that match the intended exposure.
          </p>
          <p>
            This index logic is analogous to benchmark construction in finance:
            the unit, eligibility set, weighting rule, and rebalancing method
            determine what exposure the index represents. If the index were ever
            used for settlement, the benchmark-governance concerns developed by{" "}
            <CitationLink id="iosco2013">IOSCO (2013)</CitationLink> would
            become directly relevant.
          </p>
          <MathEquation
            title="Effective-token price for an index constituent"
            latex={String.raw`S^{index}_{j,t}=\sum_{u\in\mathcal{U}}\omega_{u,t}\frac{P^{task}_{j,u,t}}{B_{u,t}}`}
            explanation="An index constituent is priced by its task-adjusted cost relative to the value or benchmark requirement of each use case."
            variables={[
              {
                symbol: String.raw`S^{index}_{j,t}`,
                meaning: "index-normalized price of token class j",
              },
              {
                symbol: String.raw`\mathcal{U}`,
                meaning: "set of benchmark use cases included in the index",
              },
              {
                symbol: String.raw`\omega_{u,t}`,
                meaning:
                  "use-case weight, such as demand share, revenue share, or social-priority weight",
              },
              {
                symbol: String.raw`P^{task}_{j,u,t}`,
                meaning:
                  "expected cost per solved task using token class j for use case u",
              },
              {
                symbol: String.raw`B_{u,t}`,
                meaning:
                  "benchmark task value, benchmark token requirement, or normalization constant for use case u",
              },
            ]}
          />
          <MathEquation
            title="Composite token-service index"
            latex={String.raw`I^{tok}_{t}=\sum_{j=1}^{J}w_{j,t}S^{index}_{j,t},\qquad \sum_{j=1}^{J}w_{j,t}=1`}
            explanation="The token index is a weighted basket of task-normalized token classes. Weights can be demand-based, liquidity-based, welfare-based, or fixed for a Laspeyres-style index."
            variables={[
              {
                symbol: String.raw`I^{tok}_{t}`,
                meaning: "composite token-service price index",
              },
              {
                symbol: String.raw`w_{j,t}`,
                meaning: "basket weight for token class j",
              },
              {
                symbol: String.raw`J`,
                meaning: "number of token classes in the index",
              },
            ]}
          />
          <p>
            Such an index would support budgeting, procurement, benchmarking,
            and risk management. A company could measure whether its AI costs
            are rising because all token-service prices are rising, because it
            is overexposed to one model class, or because its tasks require a
            scarce certified compute pool. A government could compare the cost
            of public-service AI exposure to a sovereign certified-token index
            rather than to a generic global API price.
          </p>
          <div className="learning-callout">
            <LineChart size={20} />
            <p>
              The index is a research object. Its credibility depends on the unit
              of equivalence, the benchmark tasks, the weights, the rebalancing
              rule, and the treatment of new models. The same issues arise in
              commodity indices, inflation indices, and financial benchmarks.
            </p>
          </div>
        </section>

        <section id="token-allocation">
          <h3>14. Optimal Allocation Across Token Assets</h3>
          <p>
            A user who can choose among several model-token classes faces a
            portfolio problem. The decision is partly about quantity, but it is
            also about routing. A workflow can be sent to a frontier model, a
            smaller model with retries, a certified regional pool, or a cheaper
            flexible pool. Each route creates a different distribution of task
            value, token cost, latency, compliance exposure, and future price
            risk.
          </p>
          <p>
            The optimization problem below adapts the portfolio-choice logic of
            <CitationLink id="markowitz1952">Markowitz (1952)</CitationLink> to
            a production-input setting. The CVaR penalty follows{" "}
            <CitationLink id="rockafellarUryasev2000">
              Rockafellar and Uryasev (2000)
            </CitationLink>
            {", "}
            because infrastructure planners often care more about the severity
            of bad-tail procurement states than about variance around the mean.
          </p>
          <MathEquation
            title="Token allocation problem"
            latex={String.raw`\begin{aligned}
\max_{x\in\mathcal{X}}\quad
&\mathbb{E}\left[\sum_{u\in\mathcal{U}}\sum_{j=1}^{J}x_{j,u}V_{j,u,T}\right]
-\mathbb{E}\left[\sum_{u\in\mathcal{U}}\sum_{j=1}^{J}x_{j,u}P^{task}_{j,u,T}\right]\\
&-\lambda_R\operatorname{CVaR}_{\alpha}(L_T(x))
-\lambda_Q\sum_{u\in\mathcal{U}}\max\{0,\bar q_u-q_u(x)\}.
\end{aligned}`}
            explanation="The allocator chooses task routing weights to maximize expected net value while penalizing tail risk and quality shortfalls."
            variables={[
              {
                symbol: String.raw`x_{j,u}`,
                meaning: "share of use case u routed to token class j",
              },
              {
                symbol: String.raw`\mathcal{X}`,
                meaning:
                  "feasible allocation set including budget, compliance, capacity, and diversification constraints",
              },
              {
                symbol: String.raw`V_{j,u,T}`,
                meaning:
                  "future value delivered by token class j for use case u",
              },
              {
                symbol: String.raw`P^{task}_{j,u,T}`,
                meaning: "future cost per solved task",
              },
              {
                symbol: String.raw`L_T(x)`,
                meaning:
                  "loss from price shocks, outages, failures, or unmet task demand under allocation x",
              },
              {
                symbol: String.raw`\operatorname{CVaR}_{\alpha}`,
                meaning: "conditional value at risk at tail probability alpha",
              },
              {
                symbol: String.raw`q_u(x)`,
                meaning: "portfolio quality for use case u",
              },
              {
                symbol: String.raw`\bar q_u`,
                meaning: "minimum acceptable quality for use case u",
              },
              {
                symbol: String.raw`\lambda_R,\lambda_Q`,
                meaning: "risk-aversion and quality-penalty weights",
              },
            ]}
          />
          <p>
            This problem is structurally close to portfolio choice, but the
            "returns" are not ordinary financial returns. They are task success,
            productivity, compliance, and resilience. The covariance matrix is
            also unusual: token classes can co-move because they share GPUs,
            cloud providers, electricity zones, model architectures, data-centre
            capacity, or regulation. The diversification benefit is therefore an
            empirical question.
          </p>
          <MathEquation
            title="Token price-risk covariance"
            latex={String.raw`\Sigma^{tok}_{t}=\operatorname{Cov}_{t}\left(\Delta \log S^{eff}_{1,t+1},\ldots,\Delta \log S^{eff}_{J,t+1}\right)`}
            explanation="The covariance matrix measures how effective token prices move together. It is needed for diversification, stress testing, and hedge design."
            variables={[
              {
                symbol: String.raw`\Sigma^{tok}_{t}`,
                meaning:
                  "conditional covariance matrix of effective token-price changes",
              },
              {
                symbol: String.raw`S^{eff}_{j,t}`,
                meaning: "effective price for token class j",
              },
              {
                symbol: String.raw`\Delta \log S^{eff}_{j,t+1}`,
                meaning: "log change in effective token price from t to t+1",
              },
            ]}
          />
        </section>

        <section id="token-risk-management">
          <h3>15. Risk Management of Token Exposure</h3>
          <p>
            If tokens become core production inputs, firms and public agencies
            will need token risk management. The risk manager would ask: What is
            our future demand by token class? Which workloads are exposed to
            frontier reasoning tokens? Which can switch to cheaper models? Which
            must use certified regional compute? What happens if output-token
            prices spike, a provider changes pricing, a model is rate-limited,
            or a local compute pool becomes congested?
          </p>
          <p>
            Token budget-at-risk is introduced as an analogy to value-at-risk,
            while conditional token budget-at-risk follows the CVaR tradition.
            These statistics should be interpreted with the usual caution: their
            usefulness depends on scenario design, tail dependence, calibration,
            and whether the simulated bad states include the infrastructure and
            policy shocks that actually matter.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Risk</th>
                <th>Description</th>
                <th>Possible hedge or control</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price risk</td>
                <td>
                  Posted or effective token prices rise for a required model
                  class.
                </td>
                <td>
                  Forward token capacity, reserved capacity, model
                  diversification, budget collars.
                </td>
              </tr>
              <tr>
                <td>Quality basis risk</td>
                <td>
                  A cheaper model does not deliver the same solved-task quality.
                </td>
                <td>
                  Task benchmarks, quality-adjusted index hedges, fallback
                  routing rules.
                </td>
              </tr>
              <tr>
                <td>Regional basis risk</td>
                <td>
                  Global tokens become cheap but certified local tokens remain
                  expensive.
                </td>
                <td>
                  EU-certified token forwards, allied compute agreements, local
                  capacity options.
                </td>
              </tr>
              <tr>
                <td>Volume risk</td>
                <td>
                  Agentic workflows increase hidden token consumption
                  unexpectedly.
                </td>
                <td>
                  Usage telemetry, dynamic caps, batch processing, workflow
                  optimization.
                </td>
              </tr>
              <tr>
                <td>Operational risk</td>
                <td>
                  Provider outage, rate limits, latency spikes, or model
                  deprecation.
                </td>
                <td>
                  Multi-provider routing, reliability options, service-level
                  contracts.
                </td>
              </tr>
            </tbody>
          </table>
          <MathEquation
            title="Token budget-at-risk"
            latex={String.raw`\operatorname{TaR}_{\alpha,T}=\inf\left\{b:\Pr\left(C_T^{tok}>b\right)\le 1-\alpha\right\}`}
            explanation="Token budget-at-risk is the alpha-quantile of future token expenditure. It is analogous to value-at-risk, but applied to token procurement cost."
            variables={[
              {
                symbol: String.raw`\operatorname{TaR}_{\alpha,T}`,
                meaning:
                  "token budget-at-risk over horizon T at confidence level alpha",
              },
              {
                symbol: String.raw`C_T^{tok}`,
                meaning:
                  "future token expenditure under uncertain prices, volumes, routing, and quality",
              },
              { symbol: String.raw`b`, meaning: "budget threshold" },
              { symbol: String.raw`\alpha`, meaning: "confidence level" },
            ]}
          />
          <p>
            The next natural statistic is conditional token budget-at-risk, the
            expected cost conditional on being in the bad tail. That is often
            more useful for infrastructure planning than an ordinary variance
            measure, because the damaging states are precisely the states where
            token prices, electricity prices, grid congestion, and policy
            constraints can move together.
          </p>
        </section>

        <section id="token-measurement">
          <h3>16. Measurement Traps</h3>
          <p>
            Token economics is measurement-sensitive. Several quantities that
            sound similar should not be merged without thought.
          </p>
          <table className="learning-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Common mistake</th>
                <th>Better modelling treatment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Raw tokens</td>
                <td>
                  Comparing across tokenizers as if one token means the same
                  thing everywhere.
                </td>
                <td>
                  Convert to use-case and model-specific effective tokens.
                </td>
              </tr>
              <tr>
                <td>Billable tokens</td>
                <td>Ignoring hidden orchestration and safety work.</td>
                <td>
                  Use service-token accounting with visible and hidden
                  components.
                </td>
              </tr>
              <tr>
                <td>Average price</td>
                <td>
                  Interpreting lower posted prices as lower scarcity for all
                  workloads.
                </td>
                <td>
                  Separate spot, reserved, priority, certified, and
                  interruptible capacity.
                </td>
              </tr>
              <tr>
                <td>Electricity price</td>
                <td>
                  Assuming token prices must move one-for-one with electricity
                  prices.
                </td>
                <td>
                  Model electricity as one marginal-cost term plus capacity
                  scarcity rents.
                </td>
              </tr>
              <tr>
                <td>Capacity</td>
                <td>
                  Counting theoretical GPU FLOPs as delivered user service.
                </td>
                <td>
                  Adjust for utilization, memory, latency, batching,
                  reliability, and legal access.
                </td>
              </tr>
              <tr>
                <td>Token spread</td>
                <td>
                  Comparing posted prices while ignoring different solved-task
                  yields.
                </td>
                <td>
                  Compute spreads on task-adjusted effective prices, not raw
                  token prices.
                </td>
              </tr>
              <tr>
                <td>Token index</td>
                <td>
                  Building an index from provider list prices without benchmark
                  tasks.
                </td>
                <td>
                  Define a basket of use cases, quality adjustments, delivery
                  conditions, and weights.
                </td>
              </tr>
              <tr>
                <td>Hedge ratio</td>
                <td>
                  Assuming one model-token hedge perfectly offsets another token
                  exposure.
                </td>
                <td>
                  Estimate basis risk from task quality, compliance, region,
                  latency, and price co-movement.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="token-abm-link">
          <h3>17. How This Enters the ABM</h3>
          <p>
            The current simulation tool uses "effective token" as the demand and
            capacity unit. For tractability, it sets{" "}
            <InlineMath latex={String.raw`q_{u,m,r,t}=1`} /> in the first
            release. This means that one simulated token is interpreted as one
            normalized frontier-equivalent service unit. That choice is
            transparent and useful for the first mechanism: infrastructure and
            policy can create scarcity even without model quality differences.
            The revised research direction is to replace that simplifying
            assumption with a vector of token classes and a conversion layer
            from raw tokens to task-equivalent service units.
          </p>
          <MathEquation
            title="ABM demand unit"
            latex={String.raw`Q_{i,t}=\sum_{u\in\mathcal{U}_i}D_{i,u,t}T^{eff}_{u,t}`}
            explanation="Agent demand is aggregated across use cases into effective token units."
            variables={[
              {
                symbol: String.raw`Q_{i,t}`,
                meaning: "effective token demand of agent class i at time t",
              },
              {
                symbol: String.raw`\mathcal{U}_i`,
                meaning: "use-case set for agent class i",
              },
              {
                symbol: String.raw`D_{i,u,t}`,
                meaning: "activity or task volume for use case u",
              },
              {
                symbol: String.raw`T^{eff}_{u,t}`,
                meaning: "effective token requirement per task",
              },
            ]}
          />
          <p>
            The ABM then routes this demand through policy. If a public agency
            or regulated firm is legally required to use EU-local or certified
            compute, its demand is moved into a constrained local pool. Flexible
            demand may still use global capacity. This routing is the bridge
            between token definitions and policy analysis.
          </p>
          <MathEquation
            title="Policy routing of effective-token demand"
            latex={String.raw`L_{i,t}=\lambda_{i,t}Q_{i,t},\qquad F_{i,t}=(1-\lambda_{i,t})Q_{i,t}`}
            explanation="The same effective-token demand can face different supply curves depending on legal and institutional access."
            variables={[
              {
                symbol: String.raw`L_{i,t}`,
                meaning: "local or certified compute demand",
              },
              {
                symbol: String.raw`F_{i,t}`,
                meaning:
                  "flexible demand allowed to use global or allied compute",
              },
              {
                symbol: String.raw`\lambda_{i,t}`,
                meaning: "policy routing share",
              },
            ]}
          />
          <MathEquation
            title="Future multi-token ABM extension"
            latex={String.raw`Q_{i,u,t}^{eff}=\sum_{j=1}^{J}x_{i,u,j,t}\,y_{j,u,t}\,T^{svc}_{i,u,j,t}`}
            explanation="A richer ABM would let each agent allocate each use case across token classes, converting raw service tokens into effective solved-task units."
            variables={[
              {
                symbol: String.raw`Q_{i,u,t}^{eff}`,
                meaning:
                  "effective solved-task demand served for agent i and use case u",
              },
              {
                symbol: String.raw`x_{i,u,j,t}`,
                meaning: "allocation share routed to token class j",
              },
              {
                symbol: String.raw`y_{j,u,t}`,
                meaning:
                  "task-equivalent yield of token class j for use case u",
              },
              {
                symbol: String.raw`T^{svc}_{i,u,j,t}`,
                meaning:
                  "service tokens consumed by agent i for use case u using token class j",
              },
              {
                symbol: String.raw`J`,
                meaning: "number of available token classes",
              },
            ]}
          />
          <p>
            This is where the ABM can become a serious research tool for
            mathematical finance: the simulator can generate stochastic paths
            for token prices, task yields, electricity costs, regional basis
            spreads, capacity constraints, and policy states. Those paths can
            then feed portfolio allocation, hedging, stress testing, and
            token-index design.
          </p>
        </section>

        <section id="token-frontier">
          <h3>18. Research Extensions for This Module</h3>
          <p>
            The token unit can be improved without sacrificing the ABM's
            transparency. The most important next step is to estimate
            quality-adjusted tokens and token-class risk factors instead of
            assuming all effective tokens are equivalent.
          </p>
          <div className="learning-two-column">
            <section>
              <h4>Empirical quality index</h4>
              <p>
                Estimate <InlineMath latex={String.raw`q_{u,m,r,t}`} /> using
                task benchmarks, human evaluations, latency, reliability,
                context length, privacy labels, compliance certifications, and
                observed willingness to pay.
              </p>
            </section>
            <section>
              <h4>Service-token telemetry</h4>
              <p>
                Separate visible tokens from retrieval, tool-use, routing, and
                safety tokens. This would help estimate how agentic workflows
                change infrastructure demand.
              </p>
            </section>
            <section>
              <h4>Use-case task model</h4>
              <p>
                Replace aggregate token demand with task volumes: legal review,
                coding, call-centre support, public administration, medical
                triage, and scientific search.
              </p>
            </section>
            <section>
              <h4>Provider differentiation</h4>
              <p>
                Allow model providers to differ by quality, compliance, price,
                latency, energy intensity, and location. This would connect
                token economics to industrial organization.
              </p>
            </section>
            <section>
              <h4>Token spread data</h4>
              <p>
                Track task-adjusted spreads between frontier reasoning,
                general-purpose, small, open-weight, domain-specialized, and
                certified local model tokens.
              </p>
            </section>
            <section>
              <h4>Token index design</h4>
              <p>
                Construct benchmark baskets with transparent use-case weights,
                quality adjustments, eligibility rules, rebalancing rules, and
                stress scenarios.
              </p>
            </section>
            <section>
              <h4>Risk-factor model</h4>
              <p>
                Estimate common token risk factors: GPU scarcity, electricity
                stress, regional compliance scarcity, model-quality shocks, and
                provider outage risk.
              </p>
            </section>
            <section>
              <h4>Optimal procurement</h4>
              <p>
                Solve for model-token routing, reserved capacity, spot usage,
                and hedges under budget, quality, compliance, latency, and
                tail-risk constraints.
              </p>
            </section>
          </div>
        </section>

        <section id="token-exercises">
          <h3>19. Checks and Exercises</h3>
          <ol className="learning-exercise-list">
            <li>
              Explain why raw token counts are not enough for economic
              comparison across two models with different reliability and task
              accuracy.
            </li>
            <li>
              Give an example where visible user tokens are small but hidden
              service tokens are large.
            </li>
            <li>
              In the production function, explain why adding GPUs does not raise
              delivered EU-local token capacity if grid connection is the
              binding layer.
            </li>
            <li>
              Suppose a public-sector rule raises{" "}
              <InlineMath latex={String.raw`\lambda_{i,t}`} />. Describe how
              this changes the supply curve faced by that demand.
            </li>
            <li>
              Propose one observable variable that could help estimate
              <InlineMath latex={String.raw`q_{u,m,r,t}`} /> for legal, medical,
              or coding use cases.
            </li>
            <li>
              Suppose Model A costs five times more per raw output token than
              Model B, but solves a task with probability 0.9 per attempt while
              Model B solves it with probability 0.25. Write the expected cost
              per solved task for both models.
            </li>
            <li>
              Define a task-adjusted spread between an EU-certified frontier
              token and a global general-purpose token. What are the main
              sources of basis risk?
            </li>
            <li>
              Design a simple token index for a law firm, a hospital, or a
              public agency. Specify the benchmark use-case weights and quality
              adjustments.
            </li>
            <li>
              Formulate a hedging problem for a company that expects high future
              demand for frontier reasoning tokens but can partially substitute
              to smaller model tokens.
            </li>
          </ol>
          <section className="learning-reference-page compact">
            <h3>References for Module 1</h3>
            <p>
              Citation identifiers are source-type specific: DOI links are used
              where assigned, official proceedings pages are used for published
              conference papers without DOI, arXiv is retained only for checked
              preprints, ISBNs are used for books, and institutional standards
              or reports are cited by issuer and document code.
            </p>
            <ol className="reference-list">
              {tokenReferences.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </article>
    </div>
  );
}
