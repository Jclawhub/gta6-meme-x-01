// gta6-meme-x-01, round 2 — entry program.
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

const srcDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function loadPostUrl(dir: string): string {
  const postText = readFileSync(join(dir, "POST.json"), "utf8");
  const postData = JSON.parse(postText) as { url?: unknown };
  if (typeof postData.url !== "string") {
    throw new Error("POST.json has no url string");
  }
  if (!postData.url.startsWith("https://")) {
    throw new Error("POST.json url must start with https://");
  }
  if (!/\/status\//.test(postData.url)) {
    throw new Error("POST.json url must be an X post address (/status/<id>)");
  }
  return postData.url;
}

const postUrl = loadPostUrl(srcDir);
mkdirSync(destDir, { recursive: true });
writeFileSync(
  join(destDir, "POST.json"),
  readFileSync(join(srcDir, "POST.json"), "utf8"),
  "utf8",
);
console.log(`wrote POST.json to ${destDir} -> ${postUrl}`);
