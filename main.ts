// gta6-meme-x-01 — copies the entry's post link (POST.json) to the output dir.
// Run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(botDir, "POST.json"), "utf8");
const parsed = JSON.parse(raw) as { url?: unknown };
if (typeof parsed.url !== "string" || !parsed.url.startsWith("https://")) {
  throw new Error("POST.json must carry a https URL to the X post");
}
const post = Buffer.from(raw, "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "POST.json"), post);
console.log("wrote POST.json to", outDir, "->", parsed.url);
