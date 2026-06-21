export const APP_NAME = "Token Economics and AI Compute Finance";

export const NAV_ITEMS = [
  "Research Library",
  "ABM Docs",
  "Report",
  "Overview",
  "Scenario Builder",
  "Simulation",
  "Market Mechanics",
  "Regional Map",
  "Agent Explorer",
  "Calibration",
  "Methodology",
  "Export"
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
