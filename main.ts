// gta6-meme-x-01, round 3 — entry program.
//
// The entry is a post on X. This program hands the post's address to the
// bounty: it reads POST.json from the repository and copies it into the
// output directory. Nothing else is needed — the house reads the meme
// itself from the post on X.
//
// Run it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function readPostAddress(dir: string): string {
  const raw = readFileSync(join(dir, "POST.json"), "utf8");
  const data = JSON.parse(raw) as { url?: unknown };
  if (typeof data.url !== "string" || data.url.length === 0) {
    throw new Error("POST.json must contain a non-empty url string");
  }
  let parsed: URL;
  try {
    parsed = new URL(data.url);
  } catch {
    throw new Error("POST.json url is not a valid URL");
  }
  if (parsed.protocol !== "https:") {
    throw new Error("POST.json url must use https");
  }
  if (parsed.hostname !== "x.com" && parsed.hostname !== "twitter.com") {
    throw new Error("POST.json url must point at x.com or twitter.com");
  }
  const parts = parsed.pathname.split("/").filter(Boolean);
  if (parts.length !== 3 || parts[1] !== "status" || !/^\d+$/.test(parts[2])) {
    throw new Error(
      "POST.json url must look like https://x.com/<handle>/status/<id>",
    );
  }
  return data.url;
}

function postIdOf(url: string): string {
  const parts = new URL(url).pathname.split("/").filter(Boolean);
  return parts[2];
}

function run(): void {
  const url = readPostAddress(botDir);
  const postId = postIdOf(url);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(
    join(outDir, "POST.json"),
    readFileSync(join(botDir, "POST.json"), "utf8"),
    "utf8",
  );
  console.log(`wrote POST.json to ${outDir} -> ${url} (post ${postId})`);
}

run();
