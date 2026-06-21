import { BookMarked, ChevronRight } from "lucide-react";
import { InlineMath, MathEquation } from "./MathEquation";

const references = [
  {
    id: "Vaswani2017",
    label:
      "Vaswani et al. (2017), Attention Is All You Need, Advances in Neural Information Processing Systems 30",
    href: "https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
    field: "data science",
  },
  {
    id: "Kaplan2020",
    label:
      "Kaplan et al. (2020), Scaling Laws for Neural Language Models, OpenAI technical report / arXiv:2001.08361",
    href: "https://arxiv.org/abs/2001.08361",
    field: "data science",
  },
  {
    id: "Brown2020",
    label:
      "Brown et al. (2020), Language Models are Few-Shot Learners, Advances in Neural Information Processing Systems 33",
    href: "https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html",
    field: "data science",
  },
  {
    id: "Hoffmann2022",
    label:
      "Hoffmann et al. (2022), Training Compute-Optimal Large Language Models, DeepMind technical report / arXiv:2203.15556",
    href: "https://arxiv.org/abs/2203.15556",
    field: "data science",
  },
  {
    id: "AIIndex2026",
    label: "Stanford HAI (2026), AI Index Report 2026",
    href: "https://hai.stanford.edu/ai-index/2026-ai-index-report",
    field: "data science",
  },
  {
    id: "Epoch2025",
    label: "Epoch AI, AI supercomputer performance share by country",
    href: "https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country",
    field: "compute geography",
  },
  {
    id: "IEA2025",
    label: "IEA (2025), Energy and AI",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
    field: "energy",
  },
  {
    id: "EUAIAct",
    label: "European Commission, AI Act regulatory framework",
    href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    field: "policy",
  },
  {
    id: "EUAIContinent",
    label: "European Commission, AI Continent Action Plan",
    href: "https://commission.europa.eu/topics/competitiveness/ai-continent_en",
    field: "policy",
  },
  {
    id: "AgrawalGansGoldfarb2019",
    label:
      "Agrawal, Gans, and Goldfarb (2019), The Economics of Artificial Intelligence",
    href: "https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda",
    field: "economics of AI",
  },
  {
    id: "AcemogluRestrepo2018",
    label:
      "Acemoglu and Restrepo (2019), Artificial Intelligence, Automation, and Work",
    href: "https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda/artificial-intelligence-automation-and-work",
    field: "labor economics",
  },
  {
    id: "BresnahanTrajtenberg1995",
    label: "Bresnahan and Trajtenberg (1995), General Purpose Technologies",
    href: "https://doi.org/10.1016/0304-4076(94)01598-T",
    field: "growth",
  },
  {
    id: "Romer1990",
    label: "Romer (1990), Endogenous Technological Change",
    href: "https://doi.org/10.1086/261725",
    field: "growth",
  },
  {
    id: "AghionHowitt1992",
    label:
      "Aghion and Howitt (1992), A Model of Growth Through Creative Destruction",
    href: "https://doi.org/10.2307/2951599",
    field: "growth",
  },
  {
    id: "JonesWilliams1998",
    label: "Jones and Williams (1998), Measuring the Social Return to R&D",
    href: "https://doi.org/10.1162/003355398555856",
    field: "innovation",
  },
  {
    id: "RochetTirole2003",
    label:
      "Rochet and Tirole (2003), Platform Competition in Two-Sided Markets",
    href: "https://doi.org/10.1162/154247603322493212",
    field: "industrial organization",
  },
  {
    id: "Tirole1988",
    label: "Tirole (1988), The Theory of Industrial Organization",
    href: "https://mitpress.mit.edu/9780262200714/the-theory-of-industrial-organization/",
    field: "industrial organization",
  },
  {
    id: "ShapiroVarian1999",
    label: "Shapiro and Varian (1999), Information Rules",
    href: "https://books.google.com/books?id=aE_J4Iv_PVEC",
    field: "information economics",
  },
  {
    id: "Arrow1962",
    label: "Arrow (1962), The Economic Implications of Learning by Doing",
    href: "https://www.jstor.org/stable/2295952",
    field: "learning",
  },
  {
    id: "DixitPindyck1994",
    label: "Dixit and Pindyck (1994), Investment Under Uncertainty",
    href: "https://openlibrary.org/isbn/0691034109",
    field: "real options",
  },
  {
    id: "Hogan1992",
    label: "Hogan (1992), Contract Networks for Electric Power Transmission",
    href: "https://doi.org/10.1007/BF00133621",
    field: "electricity markets",
  },
  {
    id: "BessembinderLemmon2002",
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets",
    href: "https://doi.org/10.1111/1540-6261.00463",
    field: "energy finance",
  },
  {
    id: "BlackScholes1973",
    label:
      "Black and Scholes (1973), The Pricing of Options and Corporate Liabilities",
    href: "https://doi.org/10.1086/260062",
    field: "math finance",
  },
  {
    id: "Merton1973",
    label: "Merton (1973), Theory of Rational Option Pricing",
    href: "https://doi.org/10.2307/3003143",
    field: "math finance",
  },
  {
    id: "Schwartz1997",
    label: "Schwartz (1997), The Stochastic Behavior of Commodity Prices",
    href: "https://doi.org/10.1111/j.1540-6261.1997.tb02721.x",
    field: "commodity finance",
  },
  {
    id: "Duffie2001",
    label: "Duffie (2001), Dynamic Asset Pricing Theory",
    href: "https://books.google.com/books?id=f2Wv-LDpsoUC",
    field: "asset pricing",
  },
];

const literatureStrands = [
  {
    title: "AI systems and compute scaling",
    claim:
      "Tokens became economically important because model performance, context, and deployment cost scale with compute, data, sequence length, and hardware efficiency.",
    ids: [
      "Vaswani2017",
      "Kaplan2020",
      "Brown2020",
      "Hoffmann2022",
      "AIIndex2026",
    ],
  },
  {
    title: "AI as a general-purpose input",
    claim:
      "AI lowers the cost of prediction and task execution. The effect can reorganize production, not just automate existing routines.",
    ids: [
      "AgrawalGansGoldfarb2019",
      "AcemogluRestrepo2018",
      "BresnahanTrajtenberg1995",
      "Romer1990",
    ],
  },
  {
    title: "Market power, platforms, and information goods",
    claim:
      "Token markets inherit scale economies, ecosystem lock-in, versioning, two-sided network effects, and strategic pricing from software and platform markets.",
    ids: ["RochetTirole2003", "Tirole1988", "ShapiroVarian1999", "Arrow1962"],
  },
  {
    title: "Infrastructure, electricity, and real options",
    claim:
      "The physical layer makes token supply lumpy, location-specific, and delay-prone. That invites scarcity rents and option value.",
    ids: ["IEA2025", "Epoch2025", "DixitPindyck1994", "Hogan1992"],
  },
  {
    title: "Financial contracts and commodity risk",
    claim:
      "Reserved token capacity could evolve into forward, option-like, and basis-risk contracts that look closer to electricity and commodity finance than SaaS billing.",
    ids: [
      "BessembinderLemmon2002",
      "BlackScholes1973",
      "Merton1973",
      "Schwartz1997",
      "Duffie2001",
    ],
  },
  {
    title: "Sovereignty and industrial policy",
    claim:
      "Regulation can convert globally available compute into legally constrained local capacity, making AI adoption a macroeconomic and geopolitical question.",
    ids: ["EUAIAct", "EUAIContinent", "AghionHowitt1992", "JonesWilliams1998"],
  },
];

const toc = [
  ["reading-guide", "Reading guide"],
  ["definitions", "Definitions"],
  ["ai-usage", "AI usage"],
  ["literature-review", "Literature review"],
  ["token-asset", "Token asset"],
  ["model-overview", "Model overview"],
  ["demand", "Demand"],
  ["capacity", "Capacity"],
  ["electricity", "Electricity"],
  ["uncertainty", "Uncertainty"],
  ["market-clearing", "Market clearing"],
  ["simulation-detail", "Simulation detail"],
  ["investment", "Investment"],
  ["political-economy", "Politics"],
  ["references", "References"],
] as const;

function citationLabel(reference: { id: string; label: string }) {
  const authorYear = reference.label.match(/^(.+?\(\d{4}\))/);
  return authorYear
    ? authorYear[1]
    : (reference.label.split(",")[0] ?? reference.id);
}

function Cite({ ids }: { ids: string[] }) {
  return (
    <span className="citation-list">
      {ids.map((id) => {
        const reference = references.find((item) => item.id === id);
        return reference ? (
          <a href={reference.href} key={id} target="_blank" rel="noreferrer">
            {citationLabel(reference)}
          </a>
        ) : null;
      })}
    </span>
  );
}

export function TokenEconomicsReport() {
  return (
    <section className="report-panel" id="report">
      <div className="report-hero">
        <span className="section-kicker">
          <BookMarked size={16} />
          Research Report
        </span>
        <h2>The Economics of AI Tokens</h2>
        <p>
          A research-level guide to AI tokens as economic objects. The report
          begins with the technical definition of a token, then develops the
          connection to model service, infrastructure scarcity, market clearing,
          and political economy.
        </p>
      </div>

      <div className="report-layout">
        <aside className="report-toc">
          {toc.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              <ChevronRight size={14} />
              {label}
            </a>
          ))}
        </aside>

        <article className="report-body">
          <section
            id="reading-guide"
            className="report-section report-section-intro"
          >
            <h3>Reading guide</h3>
            <p className="report-lede">
              The core argument is simple. A billable AI token is the visible
              unit. An effective token is a quality-adjusted claim on model
              service produced by a capital-intensive and politically constrained
              system. The economic analysis therefore has to connect machine
              learning, industrial organization, electricity economics, real
              options, asset pricing, and political economy.
            </p>
            <div className="report-summary-grid">
              <div>
                <span>Technical unit</span>
                <strong>Model input or output symbol</strong>
                <p>
                  Useful for counting context, throughput, and billing volume.
                </p>
              </div>
              <div>
                <span>Economic unit</span>
                <strong>Effective model service</strong>
                <p>
                  Quality-adjusted by model capability, latency, reliability,
                  privacy, and compliance.
                </p>
              </div>
              <div>
                <span>Market unit</span>
                <strong>Capacity right</strong>
                <p>
                  In scarcity, a token becomes access to powered, connected
                  accelerator infrastructure.
                </p>
              </div>
            </div>
          </section>

          <section id="definitions" className="report-section">
            <h3>1. Definitions: what exactly is a token?</h3>
            <p>
              In data science, a token is a discrete element in the
              representation processed by a model. Text is split into tokens;
              code, images, audio, tool calls, and actions can also be
              represented through token-like discrete or latent units. The
              transformer literature matters because attention-based models made
              tokens the accounting unit of scalable sequence computation.{" "}
              <Cite ids={["Vaswani2017", "Brown2020"]} />
            </p>
            <p>
              In economics, token count is not enough. Let raw token volume be
              T. Let q(m, u, s) be a quality index for model m, use case u, and
              service conditions s. An economically comparable unit is:
            </p>
            <MathEquation
              title="Quality-adjusted effective tokens"
              latex={String.raw`T^{eff}=q(m,u,s)T^{raw}`}
              explanation="Raw token counts become economically comparable only after quality adjustment. The first simulator version sets q equal to one so the infrastructure mechanism is isolated."
              variables={[
                {
                  symbol: String.raw`T^{eff}`,
                  meaning: "effective quality-adjusted token units",
                },
                {
                  symbol: String.raw`T^{raw}`,
                  meaning: "raw billable token count",
                },
                {
                  symbol: String.raw`q(m,u,s)`,
                  meaning:
                    "quality factor for model m, use case u, and service conditions s",
                },
                {
                  symbol: String.raw`s`,
                  meaning:
                    "service conditions that determine whether a token can solve the relevant task",
                },
              ]}
            />
            <p>
              This distinction is central. Two providers may sell the same
              number of raw tokens while delivering different economic value. A
              future empirical model should estimate q directly. The first
              browser model sets q = 1 so users can isolate the infrastructure
              and market-clearing mechanisms before adding model
              differentiation.
            </p>
          </section>

          <section id="ai-usage" className="report-section">
            <h3>2. How tokens are used in AI systems</h3>
            <p>
              Operationally, tokens are the units that pass through model
              inference. A user sends input tokens, the model reads a context
              window, and the model returns output tokens. In a modern application
              the visible exchange may be only part of the service path. The
              platform can spend additional compute on retrieval, tool use,
              reasoning traces, moderation, caching, embeddings, routing, or
              multimodal encoding. The economic cost of one visible billable
              token is therefore the cost of the whole service pathway.
            </p>
            <MathEquation
              title="Service token accounting"
              latex={String.raw`\begin{aligned}
T^{svc}_{u,t}
&=T^{in}_{u,t}+T^{out}_{u,t}+T^{tool}_{u,t}+T^{hidden}_{u,t},\\
Cost_{u,t}
&=T^{svc}_{u,t}\cdot mc_{m,r,t}.
\end{aligned}`}
              explanation="The simulator abstracts from this internal accounting and works in effective tokens, but this decomposition explains why token demand can grow when applications become agentic and tool-heavy."
              variables={[
                {
                  symbol: String.raw`T^{svc}_{u,t}`,
                  meaning:
                    "total service tokens consumed by use case u at time t",
                },
                {
                  symbol: String.raw`T^{in}_{u,t}`,
                  meaning: "visible input or prompt tokens",
                },
                {
                  symbol: String.raw`T^{out}_{u,t}`,
                  meaning: "visible output or completion tokens",
                },
                {
                  symbol: String.raw`T^{tool}_{u,t}`,
                  meaning:
                    "tokens or compute-equivalent units spent on tools, retrieval, and external actions",
                },
                {
                  symbol: String.raw`T^{hidden}_{u,t}`,
                  meaning:
                    "provider-side hidden tokens for routing, safety, caching, and orchestration",
                },
                {
                  symbol: String.raw`mc_{m,r,t}`,
                  meaning:
                    "marginal cost per effective token for model m in region r",
                },
              ]}
            />
            <p>
              This is why "what is a token?" has two answers. To a tokenizer, it
              is a discrete representation unit. To an economist, it is a
              metered claim on a production function: model weights, accelerator
              time, memory bandwidth, context length, software orchestration,
              and powered data-centre capacity.
            </p>
          </section>

          <section id="literature-review" className="report-section">
            <h3>3. Literature review: six strands</h3>
            <p>
              There is no single established "token economics" literature yet.
              The relevant research base is a synthesis. The table below shows
              how the simulator borrows concepts from each field.
            </p>
            <div className="literature-grid">
              {literatureStrands.map((strand) => (
                <article className="literature-card" key={strand.title}>
                  <h4>{strand.title}</h4>
                  <p>{strand.claim}</p>
                  <Cite ids={strand.ids} />
                </article>
              ))}
            </div>
            <p>
              The data-science literature explains why compute is productive.
              Scaling-law and compute-optimal training results show that model
              performance can improve predictably with compute and data,
              although the frontier is not fixed. The economics literature
              explains why this can become a general-purpose technology: cheap
              prediction and generation lower the cost of many downstream tasks,
              which can trigger organizational redesign and productivity
              spillovers. Industrial organization explains why the market may
              concentrate around model platforms and cloud ecosystems. Energy
              economics and finance explain why powered capacity, not abstract
              software, may become the binding constraint.
            </p>
          </section>

          <section id="token-asset" className="report-section">
            <h3>4. From API billing unit to tradable token asset</h3>
            <p>
              In an idealized world with equivalent models, standardized service
              quality, enforceable delivery, and credible clearing, a token can
              become a tradable capacity asset. The asset is not a
              cryptocurrency token. It is a contract right: the right to consume
              a specified quantity of effective model service at a time, place,
              latency class, privacy class, and certification class.
            </p>
            <MathEquation
              title="Standardized token-delivery contract"
              latex={String.raw`X=(\kappa,m,r,\tau,\ell,\pi,\gamma)`}
              explanation="A token asset must specify what is being delivered. Otherwise prices mix model quality, location, latency, legal status, and reliability in one opaque number."
              variables={[
                {
                  symbol: String.raw`\kappa`,
                  meaning: "quantity of effective tokens",
                },
                {
                  symbol: String.raw`m`,
                  meaning: "model or quality benchmark",
                },
                {
                  symbol: String.raw`r`,
                  meaning: "delivery region or certified compute pool",
                },
                {
                  symbol: String.raw`\tau`,
                  meaning: "delivery window or maturity",
                },
                {
                  symbol: String.raw`\ell`,
                  meaning: "latency/service-level class",
                },
                {
                  symbol: String.raw`\pi`,
                  meaning: "privacy, residency, or compliance class",
                },
                {
                  symbol: String.raw`\gamma`,
                  meaning: "reliability and interruption rules",
                },
              ]}
            />
            <p>
              A spot token price is the price of immediate delivery. A forward
              token contract fixes a delivery price for future tokens. A call
              option gives the holder the right, but not the obligation, to buy
              token capacity at a strike price. A priority contract is an
              option-like claim on scarce capacity during congestion. A regional
              basis contract hedges the difference between EU-local and global
              token prices.
            </p>
            <MathEquation
              title="Forward and option value"
              latex={String.raw`\begin{aligned}
V^{fwd}_{t}(K,T)&=e^{-r(T-t)}\mathbb{E}^{\mathbb{Q}}_{t}[S_T-K],\\
C_t(K,T)&=e^{-r(T-t)}\mathbb{E}^{\mathbb{Q}}_{t}[\max(S_T-K,0)],\\
B^{EU,glob}_{T}&=F^{EU}_{T}-F^{glob}_{T}.
\end{aligned}`}
              explanation="These are stylized finance formulas, not claims that today already has deep token derivatives. They show what must be priced if token capacity becomes standardized and tradable."
              variables={[
                {
                  symbol: String.raw`S_T`,
                  meaning: "spot token price at maturity T",
                },
                {
                  symbol: String.raw`K`,
                  meaning: "forward delivery price or option strike price",
                },
                {
                  symbol: String.raw`r`,
                  meaning: "discount rate under the collateral convention",
                },
                {
                  symbol: String.raw`\mathbb{Q}`,
                  meaning: "risk-neutral pricing measure",
                },
                {
                  symbol: String.raw`C_t(K,T)`,
                  meaning: "time-t value of a call option on token capacity",
                },
                {
                  symbol: String.raw`B^{EU,glob}_{T}`,
                  meaning:
                    "regional basis between EU-local and global token forwards",
                },
                {
                  symbol: String.raw`F^{EU}_{T},F^{glob}_{T}`,
                  meaning: "EU-local and global forward delivery prices",
                },
              ]}
            />
            <p>
              The analogy to electricity markets is useful but imperfect.
              Electricity is physically non-storable; token rights are
              contractually storable only if future capacity can be credibly
              reserved. The natural products are therefore reserved capacity,
              interruptible batch tokens, public-sector priority rights, forward
              delivery, options on delivery, and basis swaps between compute
              regions.{" "}
              <Cite
                ids={[
                  "BessembinderLemmon2002",
                  "BlackScholes1973",
                  "Merton1973",
                  "Schwartz1997",
                  "Duffie2001",
                ]}
              />
            </p>
          </section>

          <section id="model-overview" className="report-section">
            <h3>5. Model overview and notation</h3>
            <p>
              The simulator is an agent-based, reduced-form market model. It
              represents user groups as weighted super-agents. Time is indexed by{" "}
              <InlineMath latex={String.raw`t`} />, agents by{" "}
              <InlineMath latex={String.raw`i`} />, compute regions by{" "}
              <InlineMath latex={String.raw`r`} />, and electricity zones by{" "}
              <InlineMath latex={String.raw`z`} />.
            </p>
            <table className="notation-table">
              <tbody>
                <tr>
                  <th>Q_i,t</th>
                  <td>Token demand of agent group i at time t.</td>
                </tr>
                <tr>
                  <th>P_t</th>
                  <td>Delivered EU token price index.</td>
                </tr>
                <tr>
                  <th>P_elec,z,t</th>
                  <td>Electricity price index in bidding zone z.</td>
                </tr>
                <tr>
                  <th>K_gpu,t, K_dc,t, K_grid,t</th>
                  <td>Available GPU, data-centre, and grid capacity layers.</td>
                </tr>
                <tr>
                  <th>lambda_i,t</th>
                  <td>
                    Share of agent i's demand that must use EU-local or
                    certified compute.
                  </td>
                </tr>
                <tr>
                  <th>MC_t</th>
                  <td>
                    Marginal cost of a delivered effective token before scarcity
                    rent.
                  </td>
                </tr>
                <tr>
                  <th>W_z,t</th>
                  <td>
                    Seeded stochastic weather stress index in electricity zone
                    z.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="demand" className="report-section">
            <h3>6. Demand block</h3>
            <p>
              Demand is derived from adoption, activity, use-case intensity,
              price response, and regulation. Consumers, firms, public agencies,
              and AI providers have different elasticities and critical shares.
            </p>
            <MathEquation
              title="Baseline demand before price response"
              latex={String.raw`\begin{aligned}
Q^{0}_{i,t}&=b_iA_{i,t}W_t\theta_{i,t},\\
A_{i,t}&=(1+g_i)^{t-t_0}.
\end{aligned}`}
              explanation="The model starts from desired token demand before the price response. Demand rises with AI adoption, workflow expansion, and sector-specific intensity."
              variables={[
                {
                  symbol: String.raw`Q^{0}_{i,t}`,
                  meaning:
                    "desired effective-token demand before price response",
                },
                {
                  symbol: String.raw`b_i`,
                  meaning: "baseline demand scale for agent class i",
                },
                { symbol: String.raw`A_{i,t}`, meaning: "adoption factor" },
                {
                  symbol: String.raw`W_t`,
                  meaning:
                    "workflow multiplier, including agentic workflow expansion",
                },
                {
                  symbol: String.raw`\theta_{i,t}`,
                  meaning: "use-case intensity",
                },
                {
                  symbol: String.raw`g_i`,
                  meaning: "annual adoption growth rate",
                },
                {
                  symbol: String.raw`t_0`,
                  meaning: "reference start period for the adoption index",
                },
              ]}
            />
            <MathEquation
              title="Isoelastic delivered demand"
              latex={String.raw`Q_{i,t}(P)=Q^{0}_{i,t}\left(\frac{P_{i,t}}{P^{ref}}\right)^{-\varepsilon_i}a_{i,t}`}
              explanation="Delivered demand falls as price rises. The access term allows legal or practical availability constraints to reduce effective demand."
              variables={[
                {
                  symbol: String.raw`Q_{i,t}(P)`,
                  meaning: "demand after delivered-price response",
                },
                {
                  symbol: String.raw`P_{i,t}`,
                  meaning: "delivered token price paid by agent i",
                },
                {
                  symbol: String.raw`P^{ref}`,
                  meaning: "reference token price",
                },
                {
                  symbol: String.raw`\varepsilon_i`,
                  meaning: "price elasticity of demand",
                },
                {
                  symbol: String.raw`a_{i,t}`,
                  meaning:
                    "access factor from regulation, latency, reliability, or service availability",
                },
              ]}
            />
            <p>
              Regulation enters through lambda_i,t. If an EU-only rule applies
              to public agencies and regulated firms, their local-required
              demand rises even if total desired use is unchanged.
            </p>
            <MathEquation
              title="Local and flexible demand split"
              latex={String.raw`L_{i,t}=\lambda_{i,t}Q_{i,t},\qquad F_{i,t}=(1-\lambda_{i,t})Q_{i,t}`}
              explanation="The routing share is the policy channel. It determines whether demand must clear against EU-local or certified capacity, or may use global and allied capacity."
              variables={[
                {
                  symbol: String.raw`L_{i,t}`,
                  meaning: "local or certified demand for agent i",
                },
                {
                  symbol: String.raw`F_{i,t}`,
                  meaning: "flexible foreign/global demand for agent i",
                },
                {
                  symbol: String.raw`\lambda_{i,t}`,
                  meaning:
                    "policy routing share requiring local or certified compute",
                },
              ]}
            />
          </section>

          <section id="capacity" className="report-section">
            <h3>7. Capacity block</h3>
            <p>
              Local token supply is the minimum of several physical and
              institutional layers. This is the model's most important departure
              from a simple cost-plus software model.
            </p>
            <MathEquation
              title="EU-local effective token capacity"
              latex={String.raw`K^{EU}_{t}=E_t\min\{K^{GPU}_{t},K^{DC}_{t},K^{Grid}_{t},K^{Power}_{t}\}`}
              explanation="Local supply is constrained by the tightest physical or institutional layer. This minimum operator is why grid connection can matter more than the average electricity price."
              variables={[
                {
                  symbol: String.raw`K^{EU}_{t}`,
                  meaning: "EU-local effective token capacity",
                },
                {
                  symbol: String.raw`E_t`,
                  meaning: "tokens-per-MWh efficiency factor",
                },
                {
                  symbol: String.raw`K^{GPU}_{t}`,
                  meaning: "accelerator capacity",
                },
                {
                  symbol: String.raw`K^{DC}_{t}`,
                  meaning: "data-centre IT capacity",
                },
                {
                  symbol: String.raw`K^{Grid}_{t}`,
                  meaning: "grid-connection capacity",
                },
                {
                  symbol: String.raw`K^{Power}_{t}`,
                  meaning:
                    "available power-contract or electricity availability layer",
                },
              ]}
            />
            <p>
              A data centre with land and GPUs but no timely grid connection
              does not create usable local token capacity. Conversely, grid
              headroom without accelerators also cannot serve token demand. The
              binding layer determines the scarcity rent.
            </p>
          </section>

          <section id="electricity" className="report-section">
            <h3>8. Electricity and grid price block</h3>
            <p>
              The browser model uses a reduced-form electricity module rather
              than hourly dispatch. It is designed to capture the direction of
              congestion and load effects, not to forecast zonal power prices.
            </p>
            <MathEquation
              title="Electricity intensity of tokens"
              latex={String.raw`e_t=e_0\frac{PUE_t}{E_t}`}
              explanation="Electricity per token falls when tokens-per-MWh efficiency improves, and rises with data-centre overhead."
              variables={[
                {
                  symbol: String.raw`e_t`,
                  meaning: "MWh required per effective token",
                },
                {
                  symbol: String.raw`e_0`,
                  meaning: "baseline MWh per effective token",
                },
                {
                  symbol: String.raw`PUE_t`,
                  meaning:
                    "power usage effectiveness, including cooling and overhead",
                },
                {
                  symbol: String.raw`E_t`,
                  meaning: "tokens-per-MWh efficiency factor",
                },
              ]}
            />
            <MathEquation
              title="Reduced-form electricity price"
              latex={String.raw`\begin{aligned}
P^{elec}_{z,t}
&=P^{base}_{z}\left(\frac{Load_{z,t}}{Load^{ref}_{z}}\right)^{\eta_z}\\
&\quad+C_{z,t}+S_{z,t}+Carbon_{z,t}.
\end{aligned}`}
              explanation="This is not hourly dispatch. It is a reduced-form way to make zonal electricity prices respond to load, congestion, scarcity events, and carbon policy."
              variables={[
                {
                  symbol: String.raw`P^{elec}_{z,t}`,
                  meaning: "electricity price in zone z",
                },
                {
                  symbol: String.raw`P^{base}_{z}`,
                  meaning: "baseline zonal electricity price",
                },
                {
                  symbol: String.raw`Load_{z,t}`,
                  meaning: "total load including simulated data-centre load",
                },
                {
                  symbol: String.raw`Load^{ref}_{z}`,
                  meaning: "reference load in zone z",
                },
                {
                  symbol: String.raw`\eta_z`,
                  meaning: "price convexity parameter",
                },
                { symbol: String.raw`C_{z,t}`, meaning: "congestion markup" },
                {
                  symbol: String.raw`S_{z,t}`,
                  meaning: "exogenous scarcity shock",
                },
                {
                  symbol: String.raw`Carbon_{z,t}`,
                  meaning: "carbon-policy cost component",
                },
              ]}
            />
            <MathEquation
              title="Dashboard electricity decomposition"
              latex={String.raw`P^{elec}_{z,t}=B_z+\Delta^{load}_{z,t}+\Delta^{cong}_{z,t}+\Delta^{fixed}_{z,t}+\Delta^{weather}_{z,t}`}
              explanation="The dashboard reports this additive decomposition so users can see what moved because of endogenous load or grid congestion versus fixed exogenous shocks and stochastic weather."
              variables={[
                {
                  symbol: String.raw`B_z`,
                  meaning: "base electricity price component",
                },
                {
                  symbol: String.raw`\Delta^{load}_{z,t}`,
                  meaning: "endogenous data-centre load component",
                },
                {
                  symbol: String.raw`\Delta^{cong}_{z,t}`,
                  meaning: "endogenous grid-congestion component",
                },
                {
                  symbol: String.raw`\Delta^{fixed}_{z,t}`,
                  meaning: "fixed exogenous scenario shock component",
                },
                {
                  symbol: String.raw`\Delta^{weather}_{z,t}`,
                  meaning: "seeded stochastic weather component",
                },
              ]}
            />
            <p>
              This is where electricity economics enters. The same MWh can have
              different opportunity costs across zones because grid congestion,
              connection queues, and local load growth differ. That is why token
              capacity in a powered hub can be worth more than nominally similar
              capacity elsewhere.{" "}
              <Cite ids={["IEA2025", "Hogan1992", "BessembinderLemmon2002"]} />
            </p>
          </section>

          <section id="uncertainty" className="report-section">
            <h3>9. Exogenous uncertainty: stochastic weather</h3>
            <p>
              The current uncertainty channel is weather-driven electricity
              risk. Weather is exogenous to token agents: firms and public
              agencies do not choose it, and data centres cannot instantly
              eliminate it. It affects electricity through load, renewable
              availability, cooling stress, hydro/wind conditions, and scarcity
              events. The simulator represents this with a seeded autoregressive
              process.
            </p>
            <MathEquation
              title="Correlated zonal weather process"
              latex={String.raw`\begin{aligned}
W_{z,t}
&=\phi W_{z,t-1}
+\sigma\left(\rho\varepsilon^{EU}_{t}+\sqrt{1-\rho^2}\varepsilon_{z,t}\right),\\
\varepsilon^{EU}_{t},\varepsilon_{z,t}&\sim\mathcal{N}(0,1),\\
\Delta^{weather}_{z,t}&=\chi_z W_{z,t}.
\end{aligned}`}
              explanation="Weather shocks are stochastic but reproducible for a given scenario seed. Positive weather stress raises electricity prices; negative stress lowers them."
              variables={[
                {
                  symbol: String.raw`W_{z,t}`,
                  meaning: "weather stress index in electricity zone z",
                },
                {
                  symbol: String.raw`\phi`,
                  meaning: "weather persistence parameter",
                },
                {
                  symbol: String.raw`\sigma`,
                  meaning:
                    "weather volatility parameter controlled in the scenario builder",
                },
                {
                  symbol: String.raw`\rho`,
                  meaning:
                    "cross-zone correlation of European weather innovations",
                },
                {
                  symbol: String.raw`\varepsilon^{EU}_{t}`,
                  meaning: "common European weather innovation",
                },
                {
                  symbol: String.raw`\varepsilon_{z,t}`,
                  meaning: "zone-specific weather innovation",
                },
                {
                  symbol: String.raw`\chi_z`,
                  meaning: "weather price sensitivity in zone z",
                },
                {
                  symbol: String.raw`\Delta^{weather}_{z,t}`,
                  meaning: "weather-driven electricity price component",
                },
              ]}
            />
            <p>
              This is not a full climate or power-system model. It is a
              disciplined way to add exogenous stochasticity while preserving
              interpretability. Changing the scenario seed changes the weather
              path. Keeping the same seed reproduces the same simulation
              exactly, which is essential for debugging and scenario analysis.
            </p>
          </section>

          <section id="market-clearing" className="report-section">
            <h3>10. Token market clearing and scarcity rents</h3>
            <p>
              The token market is cleared in two stages: a local or certified
              pool and a flexible foreign pool. The local pool is the
              economically interesting one under sovereignty scenarios.
            </p>
            <MathEquation
              title="Marginal cost before scarcity"
              latex={String.raw`MC_t=e_tP^{elec}_{t}+c^{GPU}_{t}+c^{DC}_{t}+c^{ops}_{t}+c^{comp}_{t}+\omega^{reg}_{t}`}
              explanation="Electricity cost enters marginal cost, but the token price can exceed marginal cost when capacity binds."
              variables={[
                {
                  symbol: String.raw`MC_t`,
                  meaning: "marginal resource cost per token",
                },
                {
                  symbol: String.raw`e_tP^{elec}_{t}`,
                  meaning: "electricity cost per token",
                },
                {
                  symbol: String.raw`c^{GPU}_{t}`,
                  meaning: "GPU/server amortization",
                },
                {
                  symbol: String.raw`c^{DC}_{t}`,
                  meaning: "data-centre amortization",
                },
                {
                  symbol: String.raw`c^{ops}_{t}`,
                  meaning: "operations and cooling cost",
                },
                {
                  symbol: String.raw`c^{comp}_{t}`,
                  meaning: "compliance cost",
                },
                {
                  symbol: String.raw`\omega^{reg}_{t}`,
                  meaning: "regulatory wedge",
                },
              ]}
            />
            <MathEquation
              title="Competitive normal price"
              latex={String.raw`P^{normal}_{t}=MC_t(1+\mu_t)`}
              explanation="Normal price is marginal cost plus provider or retailer markup before scarcity rents."
              variables={[
                {
                  symbol: String.raw`P^{normal}_{t}`,
                  meaning: "normal price before scarcity",
                },
                { symbol: String.raw`\mu_t`, meaning: "markup rate" },
              ]}
            />
            <MathEquation
              title="Market-clearing rule"
              latex={String.raw`\begin{aligned}
P_t&=
\begin{cases}
P^{normal}_{t}, & Q(P^{normal}_{t})\le K_t,\\
P^{*}_{t}, & Q(P^{normal}_{t})>K_t,\ Q(P^{*}_{t})=K_t.
\end{cases}
\end{aligned}`}
              explanation="When capacity is scarce, price rises until demand equals capacity. If critical demand still exceeds capacity at the willingness-to-pay cap, rationing occurs."
              variables={[
                { symbol: String.raw`P_t`, meaning: "clearing token price" },
                {
                  symbol: String.raw`Q(P)`,
                  meaning: "demand at delivered price P",
                },
                {
                  symbol: String.raw`K_t`,
                  meaning: "available token capacity",
                },
                {
                  symbol: String.raw`P^{*}_{t}`,
                  meaning: "scarcity-clearing price",
                },
              ]}
            />
            <MathEquation
              title="Scarcity rent attribution"
              latex={String.raw`\begin{aligned}
g_{j,t}&=\max\{0,L_t-K_{j,t}\},\\
\rho_{j,t}&=\frac{g_{j,t}}{\sum_{\ell}g_{\ell,t}},\\
R_{j,t}&=\rho_{j,t}R_t.
\end{aligned}`}
              explanation="This explains which bottleneck layer accounts for the scarcity rent in the simulation."
              variables={[
                {
                  symbol: String.raw`g_{j,t}`,
                  meaning: "capacity gap in bottleneck layer j",
                },
                {
                  symbol: String.raw`\ell`,
                  meaning: "summation index over bottleneck layers",
                },
                {
                  symbol: String.raw`\rho_{j,t}`,
                  meaning: "share of scarcity pressure attributed to layer j",
                },
                {
                  symbol: String.raw`R_t`,
                  meaning: "total scarcity rent per token",
                },
                {
                  symbol: String.raw`R_{j,t}`,
                  meaning: "rent attributed to layer j",
                },
              ]}
            />
            <p>
              This rent attribution is not a structural proof of who captures
              the rent in the real world. It is an accounting device that tells
              users which layer is most responsible for the model's price wedge.
              The legal owner of the rent depends on contracts, market power,
              regulation, and bargaining.
            </p>
          </section>

          <section id="simulation-detail" className="report-section">
            <h3>11. Full simulation sequence</h3>
            <p>
              Each bundled scenario runs from 2026 to 2035 in quarterly periods.
              At each period the simulator updates state in a fixed order. This
              order is part of the model definition: policy changes demand
              routing before market clearing; electricity is priced before token
              marginal cost; investment affects future capacity after a delay.
            </p>
            <ol className="process-list">
              <li>
                Initialize scenario, seed, timeline, calibration tables, and
                investment pipeline.
              </li>
              <li>
                Generate the weather stress state for each electricity zone.
              </li>
              <li>
                Update adoption, workflow expansion, AI efficiency, PUE, GPUs,
                data centres, and grid capacity.
              </li>
              <li>Compute desired token demand for each agent class.</li>
              <li>
                Route demand into EU-local/certified and flexible pools
                according to policy.
              </li>
              <li>Compute provisional EU data-centre electricity load.</li>
              <li>
                Clear zonal electricity prices with base, load, congestion,
                fixed shock, and weather components.
              </li>
              <li>Construct local and flexible token marginal costs.</li>
              <li>
                Clear token markets using the isoelastic demand curve and
                capacity constraint.
              </li>
              <li>
                Allocate served and unmet tokens back to agents, with public
                priority if enabled.
              </li>
              <li>
                Compute welfare loss, productivity loss, public-service
                degradation, emissions proxy, and vulnerability index.
              </li>
              <li>
                Plan new data-centre projects if price stress and adequacy gaps
                justify investment.
              </li>
            </ol>
          </section>

          <section id="investment" className="report-section">
            <h3>12. Investment, delay, and option value</h3>
            <p>
              High token prices induce investment, but new capacity arrives with
              delay. This makes short-run scarcity persistent even when the
              long-run supply response is strong.
            </p>
            <MathEquation
              title="Stylized investment trigger"
              latex={String.raw`\begin{aligned}
\mathbb{E}[NPV_t]
&=\mathbb{E}[\Pi^{token}_{t}]-Capex_t-\mathbb{E}[C^{elec}_{t}]\\
&\quad-C^{grid}_{t}-C^{delay}_{t}-C^{policy}_{t}.
\end{aligned}`}
              explanation="A data-centre project is attractive when expected token revenue exceeds capital, electricity, grid, delay, and policy-risk costs by enough to clear the hurdle rate."
              variables={[
                {
                  symbol: String.raw`\mathbb{E}[NPV_t]`,
                  meaning: "expected net present value of a project",
                },
                {
                  symbol: String.raw`\mathbb{E}[\Pi^{token}_{t}]`,
                  meaning: "expected token or compute revenue",
                },
                { symbol: String.raw`Capex_t`, meaning: "capital expenditure" },
                {
                  symbol: String.raw`\mathbb{E}[C^{elec}_{t}]`,
                  meaning: "expected electricity cost",
                },
                {
                  symbol: String.raw`C^{grid}_{t}`,
                  meaning: "grid upgrade or connection cost",
                },
                {
                  symbol: String.raw`C^{delay}_{t}`,
                  meaning: "cost of construction and time-to-power delay",
                },
                {
                  symbol: String.raw`C^{policy}_{t}`,
                  meaning: "policy and regulatory risk cost",
                },
              ]}
            />
            <p>
              In the code, this is represented by a reduced-form investment
              signal that rises with token-price stress and local capacity
              inadequacy. The planned capacity then enters a construction and
              grid-connection pipeline. This is a real-options simplification:
              uncertainty and irreversibility make waiting valuable.{" "}
              <Cite
                ids={["DixitPindyck1994", "BlackScholes1973", "Merton1973"]}
              />
            </p>
          </section>

          <section id="political-economy" className="report-section">
            <h3>13. Political economy and macroeconomic interpretation</h3>
            <p>
              If AI tokens are inputs into productivity, state capacity,
              research, and security-sensitive services, then compute access
              becomes a macroeconomic exposure. A country dependent on
              foreign-executed tokens can face price shocks, rationing, access
              restrictions, or policy leverage from compute-controlling firms
              and states.
            </p>
            <p>
              Sovereign compute policy trades off resilience against cost. Local
              compute rules can protect privacy, security, and industrial
              capability. They can also move demand from a large global supply
              curve to a smaller local supply curve. If grid-connected AI
              capacity lags, the result is a token-price wedge. The wedge can
              create rationing and lower productivity in firms and public
              agencies.{" "}
              <Cite
                ids={["EUAIAct", "EUAIContinent", "Epoch2025", "AIIndex2026"]}
              />
            </p>
            <p>
              The simulator's Sovereign AI Vulnerability Index summarizes this
              exposure:
            </p>
            <MathEquation
              title="Sovereign AI Vulnerability Index"
              latex={String.raw`\begin{aligned}
SAVI_t
&=w_1D^{foreign}_t+w_2U^{critical}_t+w_3G^{gap}_t\\
&\quad+w_4S^{price}_t+w_5X^{public}_t.
\end{aligned}`}
              explanation="The index is a transparent weighted sum. It is not a welfare theorem; it is a dashboard summary of five channels of sovereign AI vulnerability."
              variables={[
                {
                  symbol: String.raw`SAVI_t`,
                  meaning: "Sovereign AI Vulnerability Index",
                },
                {
                  symbol: String.raw`D^{foreign}_t`,
                  meaning: "foreign compute dependency ratio",
                },
                {
                  symbol: String.raw`U^{critical}_t`,
                  meaning: "critical unmet demand ratio",
                },
                {
                  symbol: String.raw`G^{gap}_t`,
                  meaning: "grid connection gap",
                },
                {
                  symbol: String.raw`S^{price}_t`,
                  meaning: "token price shock",
                },
                {
                  symbol: String.raw`X^{public}_t`,
                  meaning: "public-sector exposure",
                },
                {
                  symbol: String.raw`w_1,\ldots,w_5`,
                  meaning: "configurable vulnerability weights",
                },
              ]}
            />
          </section>

          <section id="references" className="report-section">
            <h3>References</h3>
            <ol className="reference-list">
              {references.map((reference) => (
                <li key={reference.id}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                  <span>{reference.field}</span>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </div>
    </section>
  );
}
