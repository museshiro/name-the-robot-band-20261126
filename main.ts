import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The Almost Humans — hit single 'Almost Familiar', a love song for the humans who keep squinting at us.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to /output/entry.txt`);
