import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import katex from "katex";
import { describe, expect, it } from "vitest";

const componentDir = join(process.cwd(), "src", "components");

function componentFiles() {
  return readdirSync(componentDir)
    .filter((fileName) => fileName.endsWith(".tsx"))
    .map((fileName) => join(componentDir, fileName));
}

function lineAt(source: string, index: number) {
  return source.slice(0, index).split("\n").length;
}

describe("mathematical notation", () => {
  it("renders every String.raw LaTeX expression in component source", () => {
    const failures: string[] = [];
    let checked = 0;

    for (const filePath of componentFiles()) {
      const source = readFileSync(filePath, "utf8");
      const matches = source.matchAll(/String\.raw`([\s\S]*?)`/g);

      for (const match of matches) {
        checked += 1;
        const latex = match[1];
        try {
          katex.renderToString(latex, {
            displayMode: true,
            throwOnError: true,
            strict: "warn"
          });
        } catch (error) {
          failures.push(
            `${filePath}:${lineAt(source, match.index ?? 0)} ${String(error)}\n${latex}`
          );
        }
      }
    }

    expect(checked).toBeGreaterThan(0);
    expect(failures).toEqual([]);
  });
});
