import { Download, FileJson, Play, RotateCcw, Upload } from "lucide-react";
import { downloadResultCsv, downloadResultJson, downloadScenarioJson } from "../utils/download";
import type { ScenarioInput, SimulationResult } from "../model/types";

interface RunControlsProps {
  scenario: ScenarioInput;
  result: SimulationResult;
  isRunning: boolean;
  onRun: () => void;
  onReset: () => void;
  onImport: (json: string) => void;
}

export function RunControls({
  scenario,
  result,
  isRunning,
  onRun,
  onReset,
  onImport
}: RunControlsProps) {
  return (
    <div className="run-controls">
      <button className="primary command-button" type="button" onClick={onRun} disabled={isRunning}>
        <Play size={17} />
        {isRunning ? "Running" : "Run"}
      </button>
      <button className="command-button" type="button" onClick={onReset}>
        <RotateCcw size={17} />
        Reset
      </button>
      <button className="command-button" type="button" onClick={() => downloadScenarioJson(scenario)}>
        <FileJson size={17} />
        Scenario
      </button>
      <button className="command-button" type="button" onClick={() => downloadResultCsv(result)}>
        <Download size={17} />
        CSV
      </button>
      <button className="command-button" type="button" onClick={() => downloadResultJson(result)}>
        <Download size={17} />
        JSON
      </button>
      <label className="import-button">
        <Upload size={17} />
        Import
        <input
          type="file"
          accept="application/json,.json"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (!file) {
              return;
            }
            void file.text().then(onImport);
            event.currentTarget.value = "";
          }}
        />
      </label>
    </div>
  );
}
