# Token Economics and AI Compute Finance

A research and teaching resource on AI-token economics, mathematical finance of model-token exposure, compute markets, energy risk, and policy. The interactive agent-based simulation is a supporting analysis tool, not the full scope of the project.

The resource develops tokenization, input/output token accounting, non-equivalent model-token assets, task-adjusted token prices, token spreads, token indices, hedging, procurement, compute capacity, electricity exposure, weather and climate risk, and policy implications. The simulation explores how token demand from consumers, firms, public-sector agencies, and AI providers interacts with local compute supply, electricity markets, grid connections, data-centre buildout, and regulation.

This is not a forecast. The simulation is a scenario exploration tool for understanding mechanisms, vulnerabilities, and policy tradeoffs inside the broader research program.

## Published Site

This project is configured for GitHub Pages:

```text
https://fabianharang.github.io/ai-token-economics-finance/
```

## What The Analysis Tool Shows

- EU token price and electricity price paths under alternative compute-access rules.
- A decomposition of token price into electricity cost, GPU/server capex, data-centre capex, operations, compliance, markup, scarcity rents, and regulation wedge.
- Local compute adequacy, foreign compute dependency, grid-constrained load, unmet demand, critical unmet demand, productivity loss, and public-service degradation.
- How faster grid buildout, AI-efficiency progress, public-sector priority, and allied compute access change the outcome.

## Local Development

```bash
npm install
npm run dev
```

Run tests and build:

```bash
npm test -- --run
npm run build
```

## GitHub CLI Setup

```bash
# 1. Authenticate
gh auth login

# 2. Create the repo
OWNER=$(gh api user --jq .login)
REPO=ai-token-economics-finance

gh repo create "$OWNER/$REPO" --public --source=. --remote=origin --push
```

Enable Pages via GitHub CLI:

```bash
OWNER=$(gh api user --jq .login)
REPO=ai-token-economics-finance

gh api \
  --method POST \
  "repos/$OWNER/$REPO/pages" \
  -f build_type=workflow || true

gh api \
  --method PUT \
  "repos/$OWNER/$REPO/pages" \
  -f build_type=workflow || true
```

Commit and deploy:

```bash
git add .
git commit -m "Publish token economics finance resource"
git push origin main
gh run watch
gh repo view --web
```

## Project Structure

```text
public/data/scenarios/      Scenario JSON files
public/data/calibration/    Calibration assumptions and seed data
src/model/                  Pure deterministic simulation engine
src/workers/                Web Worker execution path
src/components/             React dashboard, charts, map, and export UI
docs/                       Methodology, calibration, scenarios, limitations, sources
tests/                      Market, scenario, and simulation tests
```

## Acceptance Checks

- `npm install` succeeds.
- `npm test -- --run` succeeds.
- `npm run build` succeeds.
- The site runs locally with `npm run dev`.
- EU-only compute produces higher EU token prices than baseline.
- Fast grid buildout reduces grid scarcity rent versus EU-only compute.
- AI efficiency breakthrough reduces data-centre electricity intensity per token.
- Scenario JSON can be exported and re-imported through the schema.

## License

MIT.
