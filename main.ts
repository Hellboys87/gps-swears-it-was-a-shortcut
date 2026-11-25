import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The map swore the cake was on your route, so I cut through this wedding — and frankly, it was worth your missed exit.";

if (!line || line.trim().length === 0 || line.includes("\n") || line.length > 200) {
  console.error("Invalid entry line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
