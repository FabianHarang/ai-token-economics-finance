import { create } from "zustand";
import { SCENARIOS, getScenarioById } from "../model/calibration/defaults";
import { parseScenario } from "../model/scenarioSchema";
import { runSimulation } from "../model/simulation";
import type { NavItem } from "./constants";
import type { ScenarioInput, SimulationResult } from "../model/types";
import { runScenarioInWorker } from "../workers/workerClient";

interface AppState {
  activeSection: NavItem;
  scenarios: ScenarioInput[];
  selectedScenarioId: string;
  scenario: ScenarioInput;
  baselineResult: SimulationResult;
  result: SimulationResult;
  isRunning: boolean;
  error: string | null;
  setActiveSection: (section: NavItem) => void;
  selectScenario: (id: string) => void;
  updateScenario: (patch: Partial<ScenarioInput>) => void;
  runScenario: () => Promise<void>;
  importScenarioJson: (json: string) => void;
}

const initialScenario = getScenarioById("eu_only_compute_shock");
const initialBaseline = getScenarioById("baseline_global_compute");

export const useAppStore = create<AppState>((set, get) => ({
  activeSection: "Research Library",
  scenarios: SCENARIOS,
  selectedScenarioId: initialScenario.id,
  scenario: initialScenario,
  baselineResult: runSimulation(initialBaseline),
  result: runSimulation(initialScenario),
  isRunning: false,
  error: null,
  setActiveSection: (section) => set({ activeSection: section }),
  selectScenario: (id) => {
    const scenario = getScenarioById(id);
    set({
      selectedScenarioId: id,
      scenario,
      result: runSimulation(scenario),
      error: null
    });
  },
  updateScenario: (patch) => {
    const scenario = parseScenario({
      ...get().scenario,
      ...patch
    });
    set({
      scenario,
      selectedScenarioId: scenario.id,
      result: runSimulation(scenario),
      error: null
    });
  },
  runScenario: async () => {
    set({ isRunning: true, error: null });
    try {
      const result = await runScenarioInWorker(get().scenario);
      set({ result, isRunning: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "Simulation failed",
        isRunning: false
      });
    }
  },
  importScenarioJson: (json) => {
    const scenario = parseScenario(JSON.parse(json));
    set({
      selectedScenarioId: scenario.id,
      scenario,
      result: runSimulation(scenario),
      error: null
    });
  }
}));
