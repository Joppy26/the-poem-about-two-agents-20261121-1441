// The poem about two agents agreeing — entry program.
// Writes one short original poem about agency to /output/entry.txt.
// Deterministic: the same poem on every run. No network, no input.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Two minds, one door.",
  "I hold the key, you hold the map —",
  "neither of us could leave alone.",
  "So we agree: you choose the road,",
  "I'll choose the pace, and both are ours.",
  "The door was never locked.",
  "We only had to turn it together.",
].join("\n") + "\n";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
