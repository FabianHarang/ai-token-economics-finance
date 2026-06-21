import { Copy } from "lucide-react";
import type { ScenarioInput, SimulationResult } from "../model/types";
import { downloadResultCsv, downloadResultJson, downloadScenarioJson } from "../utils/download";

interface ExportPanelProps {
  scenario: ScenarioInput;
  result: SimulationResult;
}

export function ExportPanel({ scenario, result }: ExportPanelProps) {
  const shareUrl = `${window.location.origin}${import.meta.env.BASE_URL}?scenario=${encodeURIComponent(scenario.id)}`;
  return (
    <section className="export-panel" id="export">
      <div className="panel-heading">
        <span>Export</span>
        <h2>Scenario and Result Files</h2>
      </div>
      <div className="export-actions">
        <button type="button" className="command-button" onClick={() => downloadScenarioJson(scenario)}>
          Scenario JSON
        </button>
        <button type="button" className="command-button" onClick={() => downloadResultCsv(result)}>
          Results CSV
        </button>
        <button type="button" className="command-button" onClick={() => downloadResultJson(result)}>
          Full state JSON
        </button>
        <button
          type="button"
          className="command-button"
          onClick={() => navigator.clipboard?.writeText(shareUrl)}
        >
          <Copy size={16} />
          Share URL
        </button>
      </div>
    </section>
  );
}
