import { AlertTriangle } from "lucide-react";
import { Layout } from "./components/Layout";
import { ScenarioPanel } from "./components/ScenarioPanel";
import { RunControls } from "./components/RunControls";
import { KpiCards } from "./components/KpiCards";
import { TokenPriceChart } from "./components/TokenPriceChart";
import { ElectricityChart } from "./components/ElectricityChart";
import { CapacityChart } from "./components/CapacityChart";
import { WelfareChart } from "./components/WelfareChart";
import { PriceDecomposition } from "./components/PriceDecomposition";
import { ScenarioComparison } from "./components/ScenarioComparison";
import { MapView } from "./components/MapView";
import { AgentExplorer } from "./components/AgentExplorer";
import { MethodologyPanel } from "./components/MethodologyPanel";
import { StaticResultsPanel } from "./components/StaticResultsPanel";
import { ExportPanel } from "./components/ExportPanel";
import { TokenEconomicsReport } from "./components/TokenEconomicsReport";
import { ModelSpecificationPanel } from "./components/ModelSpecificationPanel";
import { AbmDocumentationPage } from "./components/AbmDocumentationPage";
import { ModelTheoryLearningHub } from "./components/ModelTheoryLearningHub";
import { useAppStore } from "./app/store";

export function App() {
  const {
    activeSection,
    scenarios,
    selectedScenarioId,
    scenario,
    baselineResult,
    result,
    isRunning,
    error,
    setActiveSection,
    selectScenario,
    updateScenario,
    runScenario,
    importScenarioJson
  } = useAppStore();

  return (
    <Layout activeSection={activeSection} onNavigate={setActiveSection}>
      <section className="workspace-hero">
        <div className="hero-copy">
          <span className="section-kicker">Token economics and AI compute finance</span>
          <h1>Pricing, hedging, and governing AI-token exposure</h1>
          <p>
            This research resource develops the economics and mathematical finance of AI
            tokens: non-equivalent model-token assets, task-adjusted prices, compute and
            energy exposure, hedging, token indices, policy risk, and agent-based analysis.
            The simulation is an accompanying laboratory for testing the mechanisms.
          </p>
        </div>
        <RunControls
          scenario={scenario}
          result={result}
          isRunning={isRunning}
          onRun={() => void runScenario()}
          onReset={() => selectScenario(selectedScenarioId)}
          onImport={importScenarioJson}
        />
      </section>

      {error ? (
        <div className="error-banner" role="alert">
          <AlertTriangle size={18} />
          {error}
        </div>
      ) : null}

      <ModelTheoryLearningHub />
      <AbmDocumentationPage />
      <TokenEconomicsReport />

      <ModelSpecificationPanel scenario={scenario} result={result} />

      <div className="dashboard-grid">
        <ScenarioPanel
          scenarios={scenarios}
          selectedScenarioId={selectedScenarioId}
          scenario={scenario}
          onSelectScenario={selectScenario}
          onChangeScenario={(nextScenario) => updateScenario(nextScenario)}
        />
        <div className="dashboard-main">
          <KpiCards summary={result.summary} />
          <StaticResultsPanel summary={result.summary} />
          <TokenPriceChart result={result} baseline={baselineResult} />
        </div>
      </div>

      <div className="chart-grid two">
        <PriceDecomposition result={result} />
        <CapacityChart result={result} />
      </div>
      <div className="chart-grid two">
        <ElectricityChart result={result} />
        <WelfareChart result={result} />
      </div>
      <div className="chart-grid two">
        <MapView summary={result.summary} />
        <AgentExplorer summary={result.summary} />
      </div>
      <ScenarioComparison result={result} baseline={baselineResult} />
      <MethodologyPanel />
      <ExportPanel scenario={scenario} result={result} />
    </Layout>
  );
}
