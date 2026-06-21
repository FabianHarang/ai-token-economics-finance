import { BookOpenCheck, ChevronRight } from "lucide-react";
import { MathEquation } from "./MathEquation";

const abmReferences = [
  {
    id: "Grimm2010",
    label: "Grimm et al. (2010), The ODD protocol: a review and first update",
    href: "https://doi.org/10.1016/j.ecolmodel.2010.08.019",
  },
  {
    id: "Grimm2020",
    label:
      "Grimm et al. (2020), The ODD protocol for describing agent-based and other simulation models",
    href: "https://doi.org/10.1111/2041-210X.13356",
  },
  {
    id: "EpsteinAxtell1996",
    label: "Epstein and Axtell (1996), Growing Artificial Societies",
    href: "https://mitpress.mit.edu/9780262050531/growing-artificial-societies/",
  },
  {
    id: "Tesfatsion2006",
    label: "Tesfatsion (2006), Agent-Based Computational Economics",
    href: "https://www2.econ.iastate.edu/tesfatsi/ace.htm",
  },
  {
    id: "FarmerFoley2009",
    label: "Farmer and Foley (2009), The economy needs agent-based modelling",
    href: "https://doi.org/10.1038/460685a",
  },
  {
    id: "HollandMiller1991",
    label:
      "Holland and Miller (1991), Artificial Adaptive Agents in Economic Theory",
    href: "https://www.jstor.org/stable/2006842",
  },
  {
    id: "Arthur1994",
    label: "Arthur (1994), Inductive Reasoning and Bounded Rationality",
    href: "https://www.jstor.org/stable/2117868",
  },
  {
    id: "Vaswani2017",
    label: "Vaswani et al. (2017), Attention Is All You Need",
    href: "https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html",
  },
  {
    id: "Kaplan2020",
    label:
      "Kaplan et al. (2020), Scaling Laws for Neural Language Models, arXiv preprint",
    href: "https://arxiv.org/abs/2001.08361",
  },
  {
    id: "Hoffmann2022",
    label:
      "Hoffmann et al. (2022), Training Compute-Optimal Large Language Models, arXiv preprint",
    href: "https://arxiv.org/abs/2203.15556",
  },
  {
    id: "IEA2025",
    label: "IEA (2025), Energy and AI",
    href: "https://www.iea.org/reports/energy-and-ai/executive-summary",
  },
  {
    id: "Epoch2025",
    label: "Epoch AI, AI supercomputer performance share by country",
    href: "https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country",
  },
  {
    id: "Hogan1992",
    label: "Hogan (1992), Contract Networks for Electric Power Transmission",
    href: "https://doi.org/10.1007/BF00133621",
  },
  {
    id: "BessembinderLemmon2002",
    label:
      "Bessembinder and Lemmon (2002), Equilibrium Pricing and Optimal Hedging in Electricity Forward Markets",
    href: "https://doi.org/10.1111/1540-6261.00463",
  },
  {
    id: "RochetTirole2003",
    label:
      "Rochet and Tirole (2003), Platform Competition in Two-Sided Markets",
    href: "https://doi.org/10.1162/154247603322493212",
  },
  {
    id: "DixitPindyck1994",
    label: "Dixit and Pindyck (1994), Investment Under Uncertainty",
    href: "https://openlibrary.org/isbn/0691034109",
  },
  {
    id: "AgrawalGansGoldfarb2019",
    label:
      "Agrawal, Gans, and Goldfarb (2019), The Economics of Artificial Intelligence",
    href: "https://www.nber.org/books-and-chapters/economics-artificial-intelligence-agenda",
  },
  {
    id: "EUAIAct",
    label: "European Commission, AI Act regulatory framework",
    href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
  },
];

const toc = [
  ["abm-purpose", "Purpose"],
  ["abm-literature", "Literature"],
  ["abm-entities", "Entities"],
  ["abm-state", "State variables"],
  ["abm-schedule", "Schedule"],
  ["abm-submodels", "Submodels"],
  ["abm-uncertainty", "Uncertainty"],
  ["abm-equations", "Equations"],
  ["abm-calibration", "Calibration"],
  ["abm-validation", "Validation"],
  ["abm-limits", "Limits"],
  ["abm-references", "References"],
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
        const reference = abmReferences.find((item) => item.id === id);
        return reference ? (
          <a href={reference.href} key={id} target="_blank" rel="noreferrer">
            {citationLabel(reference)}
          </a>
        ) : null;
      })}
    </span>
  );
}

export function AbmDocumentationPage() {
  return (
    <section className="abm-doc-panel" id="abm-docs">
      <div className="abm-doc-hero">
        <span className="section-kicker">
          <BookOpenCheck size={16} />
          ABM Documentation
        </span>
        <h2>Agent-Based Model Specification</h2>
        <p>
          This page documents the chosen ABM architecture in enough detail for a
          reader to understand, critique, reproduce, and extend the model. It
          follows the spirit of the ODD protocol used in agent-based modeling
          while adding economic market equations and calibration notes.
        </p>
      </div>

      <div className="abm-doc-layout">
        <aside className="report-toc">
          {toc.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              <ChevronRight size={14} />
              {label}
            </a>
          ))}
        </aside>

        <article className="report-body abm-doc-body">
          <section
            id="abm-purpose"
            className="report-section report-section-intro"
          >
            <h3>1. Purpose and epistemic status</h3>
            <p className="report-lede">
              The model asks how European AI-token access changes when demand
              growth, local compute policy, data-centre buildout, electricity
              prices, and grid connection constraints interact. It is a
              mechanism model, not a forecast.
            </p>
            <div className="report-summary-grid">
              <div>
                <span>Primary unit</span>
                <strong>Effective AI tokens</strong>
                <p>
                  Quality-adjusted model-service units, normalized to 1 in
                  version 1.
                </p>
              </div>
              <div>
                <span>Time scale</span>
                <strong>2026-2035, quarterly</strong>
                <p>
                  Bundled scenarios use 37 seeded stochastic periods unless
                  edited.
                </p>
              </div>
              <div>
                <span>Model class</span>
                <strong>Weighted economic ABM</strong>
                <p>
                  Super-agents represent classes of users, providers,
                  infrastructure, and policy actors.
                </p>
              </div>
            </div>
            <p>
              The ABM choice is deliberate. A representative-agent equilibrium
              model would hide exactly the heterogeneity this question depends
              on: critical versus discretionary demand, local versus
              foreign-compute access, public-sector priority, grid bottlenecks,
              and delayed investment. ABM and agent-based computational
              economics are useful when macro outcomes emerge from heterogeneous
              agents, institutions, and bounded adjustment processes.{" "}
              <Cite
                ids={[
                  "EpsteinAxtell1996",
                  "Tesfatsion2006",
                  "FarmerFoley2009",
                  "HollandMiller1991",
                ]}
              />
            </p>
          </section>

          <section id="abm-literature" className="report-section">
            <h3>2. Literature anchors and why they matter</h3>
            <div className="abm-literature-map">
              <article>
                <h4>ABM methodology</h4>
                <p>
                  The documentation follows the ODD tradition: overview, design
                  concepts, details, initialization, inputs, and submodels.
                </p>
                <Cite ids={["Grimm2010", "Grimm2020", "Tesfatsion2006"]} />
              </article>
              <article>
                <h4>AI production technology</h4>
                <p>
                  Tokens are modeled as model-service units because transformers
                  and scaling laws connect token processing to compute, data,
                  and hardware.
                </p>
                <Cite ids={["Vaswani2017", "Kaplan2020", "Hoffmann2022"]} />
              </article>
              <article>
                <h4>Electricity and infrastructure</h4>
                <p>
                  Data-centre load, grid congestion, and non-storable
                  electricity motivate a separate reduced-form electricity
                  market.
                </p>
                <Cite
                  ids={["IEA2025", "Hogan1992", "BessembinderLemmon2002"]}
                />
              </article>
              <article>
                <h4>Platforms and investment</h4>
                <p>
                  Market power, platform intermediation, reserved capacity, and
                  delayed irreversible investment shape supply response.
                </p>
                <Cite
                  ids={[
                    "RochetTirole2003",
                    "DixitPindyck1994",
                    "AgrawalGansGoldfarb2019",
                  ]}
                />
              </article>
            </div>
          </section>

          <section id="abm-entities" className="report-section">
            <h3>3. Entities, agents, and aggregation choice</h3>
            <p>
              The model uses weighted super-agents. A super-agent is not one
              household or one firm; it is a representative weighted class. This
              makes the model browser-runnable while preserving economically
              relevant heterogeneity.
            </p>
            <table className="abm-table">
              <thead>
                <tr>
                  <th>Entity</th>
                  <th>Role in model</th>
                  <th>Key heterogeneity retained</th>
                  <th>Literature link</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Consumers</td>
                  <td>Discretionary and semi-critical token demand.</td>
                  <td>
                    Elasticity, adoption, budget sensitivity, trust in foreign
                    compute.
                  </td>
                  <td>Task demand and information goods.</td>
                </tr>
                <tr>
                  <td>Regulated firms</td>
                  <td>
                    High-value enterprise demand that may face data-residency
                    rules.
                  </td>
                  <td>
                    Critical share, productivity loss, regulated share,
                    sovereignty requirement.
                  </td>
                  <td>AI as task input and GPT.</td>
                </tr>
                <tr>
                  <td>Unregulated firms and SMEs</td>
                  <td>
                    Flexible enterprise demand that can often use global
                    compute.
                  </td>
                  <td>Elasticity and lower sovereignty requirement.</td>
                  <td>Diffusion and adoption heterogeneity.</td>
                </tr>
                <tr>
                  <td>Public sector</td>
                  <td>
                    Critical services, public administration, and sensitive
                    workloads.
                  </td>
                  <td>
                    Low elasticity, high critical share, priority allocation
                    option.
                  </td>
                  <td>State capacity and AI governance.</td>
                </tr>
                <tr>
                  <td>AI providers</td>
                  <td>
                    Internal compute demand and provider-side token production
                    pressure.
                  </td>
                  <td>
                    Training/inference pressure, compute sourcing, market power
                    placeholder.
                  </td>
                  <td>Scaling laws and platforms.</td>
                </tr>
                <tr>
                  <td>Data centres</td>
                  <td>
                    Convert grid-connected IT load and GPUs into token capacity.
                  </td>
                  <td>
                    Physical capacity, PUE, grid connection, pipeline delay.
                  </td>
                  <td>Infrastructure economics.</td>
                </tr>
                <tr>
                  <td>Grid/electricity zones</td>
                  <td>Set zonal electricity cost and congestion pressure.</td>
                  <td>Base price, load, headroom, congestion factor.</td>
                  <td>Electricity-market theory.</td>
                </tr>
                <tr>
                  <td>Regulator</td>
                  <td>Routes demand by legal compute-access rules.</td>
                  <td>
                    EU-only start year, scope, public priority, foreign access.
                  </td>
                  <td>AI Act and industrial policy.</td>
                </tr>
                <tr>
                  <td>Investor</td>
                  <td>
                    Adds future data-centre capacity when price and adequacy
                    signals justify it.
                  </td>
                  <td>
                    Hurdle-rate proxy, delay, policy risk, subsidy sensitivity.
                  </td>
                  <td>Real options.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="abm-state" className="report-section">
            <h3>4. State variables and units</h3>
            <p>
              Most quantities are indices. This is intentional: current public
              data on exact model-provider costs, GPU inventories, enterprise
              token volumes, and data-centre contracts is incomplete. The model
              is calibrated to mechanisms and relative magnitudes, not point
              forecasts.
            </p>
            <table className="notation-table">
              <tbody>
                <tr>
                  <th>Q_i,t</th>
                  <td>Desired effective token demand by agent class i.</td>
                </tr>
                <tr>
                  <th>L_i,t</th>
                  <td>Local/certified compute demand after policy routing.</td>
                </tr>
                <tr>
                  <th>F_i,t</th>
                  <td>
                    Flexible demand allowed to use global or allied compute.
                  </td>
                </tr>
                <tr>
                  <th>K_gpu,t, K_dc,t, K_grid,t</th>
                  <td>
                    Capacity layers for accelerators, data centres, and grid
                    connection.
                  </td>
                </tr>
                <tr>
                  <th>P_elec,z,t</th>
                  <td>
                    Zonal electricity price index, decomposed into base,
                    endogenous load, congestion, fixed shock, and weather shock.
                  </td>
                </tr>
                <tr>
                  <th>W_z,t</th>
                  <td>
                    Seeded stochastic weather stress in electricity zone z.
                  </td>
                </tr>
                <tr>
                  <th>P_token,t</th>
                  <td>
                    Delivered token price index after marginal cost, markup, and
                    scarcity rent.
                  </td>
                </tr>
                <tr>
                  <th>rent_grid, rent_gpu, rent_dc</th>
                  <td>Scarcity-rent attribution to bottleneck layers.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="abm-schedule" className="report-section">
            <h3>5. Process overview and schedule</h3>
            <p>
              Each simulation tick is one quarter in the bundled scenarios. The
              order matters: policy affects demand routing before electricity
              and token markets clear, and investment decisions affect future
              capacity rather than current capacity.
            </p>
            <ol className="process-list">
              <li>
                Read scenario parameters and initialize timeline, calibration,
                and pipeline.
              </li>
              <li>
                Apply exogenous adoption, workflow, efficiency, GPU, grid, and
                policy trends.
              </li>
              <li>Compute agent token demand by class.</li>
              <li>
                Route demand into local/certified and flexible compute pools.
              </li>
              <li>
                Compute capacity layers: GPU, data-centre, grid, certified
                allied capacity.
              </li>
              <li>Compute provisional data-centre electricity load.</li>
              <li>
                Draw seeded stochastic weather shocks and clear reduced-form
                electricity markets by zone.
              </li>
              <li>Build token marginal cost and clear token markets.</li>
              <li>Allocate served and unmet tokens back to agents.</li>
              <li>
                Compute productivity, welfare, vulnerability, and
                price-decomposition metrics.
              </li>
              <li>
                Plan investment projects and advance previously planned pipeline
                capacity.
              </li>
            </ol>
          </section>

          <section id="abm-submodels" className="report-section">
            <h3>6. Submodels and equations</h3>
            <h4>6.1 Demand and policy routing</h4>
            <MathEquation
              title="Desired token demand before price response"
              latex={String.raw`Q^{0}_{i,t}=b_i A_{i,t} W_t \theta_{i,t}`}
              explanation="This is the agent group's desired effective-token volume before delivered price changes demand. It combines baseline scale, adoption, workflow expansion, and use-case intensity."
              variables={[
                {
                  symbol: String.raw`Q^{0}_{i,t}`,
                  meaning:
                    "baseline desired token demand for agent class i at time t",
                },
                {
                  symbol: String.raw`b_i`,
                  meaning: "baseline demand scale for agent class i",
                },
                {
                  symbol: String.raw`A_{i,t}`,
                  meaning: "AI adoption factor for agent class i",
                },
                {
                  symbol: String.raw`W_t`,
                  meaning: "agentic workflow multiplier common to the scenario",
                },
                {
                  symbol: String.raw`\theta_{i,t}`,
                  meaning:
                    "use-case intensity, such as firm token intensity or public AI dependence",
                },
              ]}
            />
            <MathEquation
              title="Isoelastic price response"
              latex={String.raw`Q_{i,t}(P)=Q^{0}_{i,t}\left(\frac{P_{i,t}}{P^{ref}}\right)^{-\varepsilon_i}`}
              explanation="Delivered token demand falls with the delivered price. Elasticity is heterogeneous: consumer demand is more elastic than critical public or regulated-firm demand."
              variables={[
                {
                  symbol: String.raw`Q_{i,t}(P)`,
                  meaning: "price-adjusted demand at delivered price P",
                },
                {
                  symbol: String.raw`P_{i,t}`,
                  meaning: "delivered token price faced by agent i",
                },
                {
                  symbol: String.raw`P^{ref}`,
                  meaning: "reference token price index",
                },
                {
                  symbol: String.raw`\varepsilon_i`,
                  meaning:
                    "absolute price elasticity of token demand for agent class i",
                },
              ]}
            />
            <MathEquation
              title="Policy routing into local and flexible pools"
              latex={String.raw`L_{i,t}=\lambda_{i,t}Q_{i,t},\qquad F_{i,t}=(1-\lambda_{i,t})Q_{i,t}`}
              explanation="Policy does not only change total demand. It changes where demand is legally allowed to be served. The local-required pool clears against EU-local or certified compute, while the flexible pool may use global or allied compute."
              variables={[
                {
                  symbol: String.raw`L_{i,t}`,
                  meaning:
                    "local or certified compute demand from agent class i",
                },
                {
                  symbol: String.raw`F_{i,t}`,
                  meaning: "flexible demand from agent class i",
                },
                {
                  symbol: String.raw`\lambda_{i,t}`,
                  meaning:
                    "policy routing share, determined by scope: none, public only, regulated and public, or all EU",
                },
              ]}
            />

            <h4>6.2 Capacity production</h4>
            <MathEquation
              title="EU-local effective token capacity"
              latex={String.raw`K^{EU}_{t}=E_t\min\left\{K^{GPU}_{t},K^{DC}_{t},K^{Grid}_{t}\right\}`}
              explanation="The minimum operator is the bottleneck logic. Extra GPUs do not help if grid connection binds; extra grid headroom does not help if data-centre or accelerator capacity binds."
              variables={[
                {
                  symbol: String.raw`K^{EU}_{t}`,
                  meaning: "effective EU-local token capacity at time t",
                },
                {
                  symbol: String.raw`E_t`,
                  meaning: "tokens-per-MWh efficiency factor",
                },
                {
                  symbol: String.raw`K^{GPU}_{t}`,
                  meaning: "GPU or accelerator capacity layer",
                },
                {
                  symbol: String.raw`K^{DC}_{t}`,
                  meaning: "data-centre IT capacity layer",
                },
                {
                  symbol: String.raw`K^{Grid}_{t}`,
                  meaning: "grid-connection capacity layer",
                },
              ]}
            />

            <h4>6.3 Electricity-market block</h4>
            <MathEquation
              title="Electricity price decomposition"
              latex={String.raw`P^{elec}_{z,t}=B_z+\Delta^{load}_{z,t}+\Delta^{cong}_{z,t}+\Delta^{fixed}_{z,t}+\Delta^{weather}_{z,t}`}
              explanation="Electricity price is mixed. The scenario sets base and fixed shock terms; the seeded weather process adds exogenous stochasticity; data-centre load and congestion are computed endogenously."
              variables={[
                {
                  symbol: String.raw`P^{elec}_{z,t}`,
                  meaning: "electricity price index in bidding zone z",
                },
                {
                  symbol: String.raw`B_z`,
                  meaning: "baseline electricity price index in zone z",
                },
                {
                  symbol: String.raw`\Delta^{load}_{z,t}`,
                  meaning: "endogenous markup from data-centre load",
                },
                {
                  symbol: String.raw`\Delta^{cong}_{z,t}`,
                  meaning: "endogenous congestion markup from grid stress",
                },
                {
                  symbol: String.raw`\Delta^{fixed}_{z,t}`,
                  meaning: "deterministic exogenous scenario shock",
                },
                {
                  symbol: String.raw`\Delta^{weather}_{z,t}`,
                  meaning: "seeded stochastic weather shock",
                },
              ]}
            />
            <p>
              Electricity price is mixed: scenario shock parameters and weather
              innovations are exogenous, but the realized price responds
              endogenously to simulated data-centre load and grid congestion.
            </p>

            <h4>6.4 Token marginal cost and market clearing</h4>
            <MathEquation
              title="Delivered-token marginal cost"
              latex={String.raw`MC_t=e_tP^{elec}_{t}+c^{GPU}_{t}+c^{DC}_{t}+c^{ops}_{t}+c^{comp}_{t}+\omega^{reg}_{t}`}
              explanation="Marginal cost is the resource cost of producing one more effective token before any scarcity rent. Electricity enters, but it is only one component."
              variables={[
                {
                  symbol: String.raw`MC_t`,
                  meaning: "marginal cost per delivered effective token",
                },
                { symbol: String.raw`e_t`, meaning: "MWh per effective token" },
                {
                  symbol: String.raw`P^{elec}_{t}`,
                  meaning: "EU-weighted electricity price index",
                },
                {
                  symbol: String.raw`c^{GPU}_{t}`,
                  meaning: "amortized GPU/server cost per token",
                },
                {
                  symbol: String.raw`c^{DC}_{t}`,
                  meaning: "amortized data-centre cost per token",
                },
                {
                  symbol: String.raw`c^{ops}_{t}`,
                  meaning: "operations, cooling, and maintenance cost",
                },
                {
                  symbol: String.raw`c^{comp}_{t}`,
                  meaning: "compliance and assurance cost",
                },
                {
                  symbol: String.raw`\omega^{reg}_{t}`,
                  meaning:
                    "regulatory wedge from legal compute-access constraints",
                },
              ]}
            />
            <MathEquation
              title="Token market-clearing rule"
              latex={String.raw`\begin{aligned}
P^{normal}_{t}&=MC_t(1+\mu_t),\\
P_t&=
\begin{cases}
P^{normal}_{t}, & Q(P^{normal}_{t})\le K_t,\\
P^{*}_{t}, & Q(P^{normal}_{t})>K_t,\ Q(P^{*}_{t})=K_t.
\end{cases}
\end{aligned}`}
              explanation="If capacity is abundant, price equals marginal cost plus markup. If capacity binds, the price rises until demand equals available capacity, subject to the willingness-to-pay cap and rationing rule."
              variables={[
                {
                  symbol: String.raw`P^{normal}_{t}`,
                  meaning:
                    "normal competitive token price before scarcity rent",
                },
                {
                  symbol: String.raw`\mu_t`,
                  meaning: "retail/provider markup rate",
                },
                {
                  symbol: String.raw`P_t`,
                  meaning: "market-clearing token price",
                },
                {
                  symbol: String.raw`Q(P)`,
                  meaning: "aggregate demand evaluated at delivered price P",
                },
                {
                  symbol: String.raw`K_t`,
                  meaning:
                    "available token capacity in the relevant compute pool",
                },
                {
                  symbol: String.raw`P^{*}_{t}`,
                  meaning:
                    "scarcity-clearing price when normal-price demand exceeds capacity",
                },
              ]}
            />

            <h4>6.5 Scarcity-rent attribution</h4>
            <MathEquation
              title="Bottleneck rent accounting"
              latex={String.raw`\begin{aligned}
g_{j,t}&=\max\{0,L_t-K_{j,t}\},\\
R_{j,t}&=R_t\frac{g_{j,t}}{\sum_{\ell\in\{GPU,DC,Grid\}}g_{\ell,t}}.
\end{aligned}`}
              explanation="This is an attribution rule, not a claim about contractual incidence. It tells the reader which modeled layer is responsible for scarcity pressure."
              variables={[
                {
                  symbol: String.raw`j`,
                  meaning: "bottleneck layer: GPU, data centre, or grid",
                },
                {
                  symbol: String.raw`\ell`,
                  meaning: "summation index over bottleneck layers",
                },
                {
                  symbol: String.raw`g_{j,t}`,
                  meaning: "capacity gap attributed to layer j",
                },
                {
                  symbol: String.raw`L_t`,
                  meaning: "aggregate local-required token demand",
                },
                { symbol: String.raw`K_{j,t}`, meaning: "capacity of layer j" },
                {
                  symbol: String.raw`R_t`,
                  meaning: "total scarcity rent per token",
                },
                {
                  symbol: String.raw`R_{j,t}`,
                  meaning: "scarcity rent attributed to layer j",
                },
              ]}
            />

            <h4>6.6 Investment and pipeline</h4>
            <MathEquation
              title="Reduced-form investment and time-to-power"
              latex={String.raw`\begin{aligned}
I_t&=\beta_I f\left(\frac{P_t}{P^{ref}},1-\frac{K^{EU}_{t}}{L_t},s_t\right),\\
T^{ready}_{t}&=t+\tau^{build}+\tau^{permit}+\tau^{grid}.
\end{aligned}`}
              explanation="Investment rises with price stress, local adequacy gaps, and subsidy support. New capacity is delayed by build, permitting, and grid-connection time."
              variables={[
                {
                  symbol: String.raw`I_t`,
                  meaning:
                    "new project size or capacity increment planned at time t",
                },
                {
                  symbol: String.raw`\beta_I`,
                  meaning: "investment sensitivity parameter",
                },
                {
                  symbol: String.raw`f(\cdot)`,
                  meaning:
                    "increasing reduced-form investment response function",
                },
                {
                  symbol: String.raw`P_t/P^{ref}`,
                  meaning: "token price stress relative to reference price",
                },
                {
                  symbol: String.raw`1-K^{EU}_{t}/L_t`,
                  meaning: "local adequacy gap",
                },
                {
                  symbol: String.raw`s_t`,
                  meaning: "subsidy or policy support term",
                },
                {
                  symbol: String.raw`T^{ready}_{t}`,
                  meaning: "year when planned capacity becomes operational",
                },
                {
                  symbol: String.raw`\tau^{build},\tau^{permit},\tau^{grid}`,
                  meaning:
                    "construction, permitting, and grid-connection delays",
                },
              ]}
            />
          </section>

          <section id="abm-uncertainty" className="report-section">
            <h3>7. Stochastic uncertainty</h3>
            <p>
              The model now includes exogenous stochastic weather risk in
              electricity prices. This is intentionally the first uncertainty
              channel because weather is important for power systems and clearly
              outside the control of token-market agents. The process is seeded:
              a scenario with the same seed gives the same path, while a
              different seed gives a different weather path.
            </p>
            <MathEquation
              title="Seeded weather process"
              latex={String.raw`\begin{aligned}
W_{z,t}
&=\phi W_{z,t-1}
+\sigma\left(\rho\varepsilon^{EU}_{t}+\sqrt{1-\rho^2}\varepsilon_{z,t}\right),\\
\Delta^{weather}_{z,t}&=\chi_z W_{z,t}.
\end{aligned}`}
              explanation="Weather is modeled as a persistent, correlated stochastic process by electricity zone. Positive stress raises the electricity price component, while negative stress lowers it."
              variables={[
                {
                  symbol: String.raw`W_{z,t}`,
                  meaning: "weather stress in electricity zone z at time t",
                },
                { symbol: String.raw`\phi`, meaning: "weather persistence" },
                { symbol: String.raw`\sigma`, meaning: "weather volatility" },
                {
                  symbol: String.raw`\rho`,
                  meaning: "cross-zone correlation of European weather shocks",
                },
                {
                  symbol: String.raw`\varepsilon^{EU}_{t}`,
                  meaning: "common European normal innovation",
                },
                {
                  symbol: String.raw`\varepsilon_{z,t}`,
                  meaning: "zone-specific normal innovation",
                },
                {
                  symbol: String.raw`\chi_z`,
                  meaning: "weather price sensitivity",
                },
                {
                  symbol: String.raw`\Delta^{weather}_{z,t}`,
                  meaning: "weather-driven electricity price component",
                },
              ]}
            />
            <p>
              This is not a Monte Carlo engine yet. It is one stochastic path
              per scenario. A future Monte Carlo module should run many seeds,
              report confidence bands, and decompose variance by weather, demand
              growth, GPU supply, policy timing, and grid-connection delay.
            </p>
          </section>

          <section id="abm-equations" className="report-section">
            <h3>8. Endogenous versus exogenous variables</h3>
            <table className="abm-table compact">
              <thead>
                <tr>
                  <th>Endogenous</th>
                  <th>Exogenous input or stochastic process</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Token demand after price response and policy routing.</td>
                  <td>
                    Adoption growth, firm intensity, public AI dependence,
                    workflow multiplier.
                  </td>
                </tr>
                <tr>
                  <td>
                    EU-local capacity from GPU, data-centre, grid, and
                    efficiency layers.
                  </td>
                  <td>
                    GPU growth, grid expansion speed, tokens-per-MWh growth, PUE
                    improvement.
                  </td>
                </tr>
                <tr>
                  <td>Electricity price level from load and congestion.</td>
                  <td>
                    Base electricity shock, scarcity shock, price convexity, and
                    stochastic weather parameters.
                  </td>
                </tr>
                <tr>
                  <td>Weather price component in each zone.</td>
                  <td>
                    Seeded AR(1) weather innovations with persistence,
                    volatility, and price sensitivity.
                  </td>
                </tr>
                <tr>
                  <td>
                    Token price, scarcity rent, rationing, productivity loss.
                  </td>
                  <td>
                    Policy scope, foreign access rule, public priority, price
                    cap.
                  </td>
                </tr>
                <tr>
                  <td>Investment pipeline and future operational capacity.</td>
                  <td>
                    Build time, permitting delay, grid delay, investment
                    sensitivity.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="abm-calibration" className="report-section">
            <h3>9. Calibration and data status</h3>
            <p>
              The public version uses transparent stylized calibration. It is
              not calibrated to proprietary provider-level token volume or GPU
              inventories. Public references motivate orders of magnitude and
              qualitative constraints: compute concentration, data-centre
              electricity growth, EU AI infrastructure policy, and
              grid-connection bottlenecks.{" "}
              <Cite ids={["IEA2025", "Epoch2025", "EUAIAct"]} />
            </p>
            <table className="abm-table compact">
              <thead>
                <tr>
                  <th>Calibration file</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>public/data/scenarios</td>
                  <td>Policy and technology scenario settings.</td>
                </tr>
                <tr>
                  <td>public/data/calibration/agent_classes.json</td>
                  <td>
                    Agent demand, elasticity, critical shares, sovereignty
                    requirements.
                  </td>
                </tr>
                <tr>
                  <td>public/data/calibration/electricity_zones.json</td>
                  <td>
                    Zonal base price, load, grid headroom, congestion factor.
                  </td>
                </tr>
                <tr>
                  <td>public/data/calibration/technology_assumptions.json</td>
                  <td>
                    Token capacity, PUE, GPU/data-centre costs, markup
                    assumptions.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="abm-validation" className="report-section">
            <h3>10. Verification, validation, and credibility checks</h3>
            <p>
              The model currently has verification tests, scenario-invariant
              tests, and mechanism tests. These do not prove empirical accuracy;
              they prove the model implements the stated mechanisms
              consistently.
            </p>
            <ul className="check-list">
              <li>
                Token market: roomy supply gives marginal cost plus markup.
              </li>
              <li>
                Token market: binding supply raises price and creates scarcity
                rent.
              </li>
              <li>
                Electricity market: higher data-centre load raises electricity
                price.
              </li>
              <li>
                Electricity market: faster grid expansion reduces congestion
                markup.
              </li>
              <li>
                Scenario: EU-only compute raises token price versus baseline.
              </li>
              <li>Scenario: fast grid buildout lowers grid scarcity rent.</li>
              <li>Scenario: efficiency breakthrough lowers MWh per token.</li>
              <li>
                Scenario: electricity price responds to exogenous shocks and
                endogenous load.
              </li>
              <li>
                Weather process: adverse weather raises exogenous electricity
                prices.
              </li>
              <li>
                Reproducibility: same seed produces the same stochastic weather
                path.
              </li>
              <li>
                Uncertainty: different seeds produce different weather paths.
              </li>
            </ul>
            <p>
              A stronger empirical release should add sensitivity analysis,
              historical backtests against observed data-centre load and
              electricity prices, calibration uncertainty bands, and external
              replication notebooks.
            </p>
          </section>

          <section id="abm-limits" className="report-section">
            <h3>11. Limits and planned extensions</h3>
            <p>
              The model is intentionally reduced-form. It does not yet include
              hourly power dispatch, explicit GPU vintages, firm-level balance
              sheets, model quality differentiation, strategic oligopoly,
              cross-border power flows, water constraints, carbon intensity by
              hour, or endogenous GDP feedback. Those are extensions, not
              omissions to hide.
            </p>
            <p>
              The next most valuable additions are: confidence bands from many
              seeds, uncertainty bands on every major parameter, model-provider
              oligopoly, quality-adjusted token units, forward capacity
              contracts, explicit country-level welfare accounting, and a
              source-linked calibration table.
            </p>
          </section>

          <section id="abm-references" className="report-section">
            <h3>12. References</h3>
            <ol className="reference-list">
              {abmReferences.map((reference) => (
                <li key={reference.id}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.label}
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </div>
    </section>
  );
}
