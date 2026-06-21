# Calibration

Default values are scenario-calibrated assumptions, not measured forecasts. Each central value is chosen to make the mechanisms inspectable in a browser-run model.

## Public Default Targets

- EU demand grows rapidly under AI adoption and agentic workflow assumptions.
- EU-local data-centre and grid capacity grow more slowly than legal demand in the EU-only shock.
- Electricity prices rise with data-centre load, but not enough to explain the full token-price shock when compute capacity binds.
- Weather volatility and weather price sensitivity add exogenous stochastic electricity risk while preserving reproducibility through scenario seeds.
- Faster grid buildout reduces grid scarcity rent.
- Faster AI efficiency growth reduces electricity intensity per token and data-centre load.

## Update Path

The files in `public/data/calibration` are deliberately plain JSON. They can be replaced with source-linked values from public datasets and then re-run through the same browser engine.
