import katex from "katex";
import { useMemo } from "react";

export interface EquationVariable {
  symbol: string;
  meaning: string;
}

interface MathEquationProps {
  title: string;
  latex: string;
  explanation?: string;
  variables?: EquationVariable[];
}

function renderLatex(latex: string, displayMode: boolean) {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: true,
      trust: false,
      strict: "warn"
    });
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("KaTeX render error", { latex, error });
    }
    return `<span class="math-render-error" role="alert">Invalid LaTeX: <code>${escapeHtml(
      latex
    )}</code></span>`;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function InlineMath({ latex }: { latex: string }) {
  const html = useMemo(() => renderLatex(latex, false), [latex]);
  return <span className="inline-math" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MathEquation({
  title,
  latex,
  explanation,
  variables = []
}: MathEquationProps) {
  const html = useMemo(() => renderLatex(latex, true), [latex]);

  return (
    <figure className="math-equation">
      <figcaption>{title}</figcaption>
      <div className="math-render" dangerouslySetInnerHTML={{ __html: html }} />
      {explanation ? <p>{explanation}</p> : null}
      {variables.length > 0 ? (
        <dl>
          {variables.map((variable) => (
            <div key={variable.symbol}>
              <dt>
                <InlineMath latex={variable.symbol} />
              </dt>
              <dd>{variable.meaning}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </figure>
  );
}
