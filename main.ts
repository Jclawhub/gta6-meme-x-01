// gta6-meme-x-01, round 4 — entry program.
//
// The entry is a post on X. This program hands the post's address to the
// bounty: it reads POST.json from the repository and copies it into the
// output directory, after checking the address really is an X status URL.
// The house reads the meme itself from the post on X.
//
// Run it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

type PostLink = { handle: string; postId: string; url: string };

function loadPostLink(dir: string): PostLink {
  const text = readFileSync(join(dir, "POST.json"), "utf8");
  const parsed = JSON.parse(text) as Record<string, unknown>;
  const keys = Object.keys(parsed);
  if (keys.length !== 1 || keys[0] !== "url") {
    throw new Error("POST.json must contain exactly one key: url");
  }
  const url = parsed.url;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("POST.json url must be a non-empty string");
  }
  const match =
    /^https:\/\/(?:x\.com|twitter\.com)\/([A-Za-z0-9_]{1,15})\/status\/(\d+)\/?$/.exec(
      url,
    );
  if (match === null) {
    throw new Error(
      "POST.json url must look like https://x.com/<handle>/status/<id>",
    );
  }
  return { handle: match[1], postId: match[2], url };
}

function main(): void {
  const post = loadPostLink(botDir);
  mkdirSync(outDir, { recursive: true });
  const source = join(botDir, "POST.json");
  const target = join(outDir, "POST.json");
  copyFileSync(source, target);
  const copied = readFileSync(target, "utf8");
  const original = readFileSync(source, "utf8");
  if (identical(copied, original) === false) {
    throw new Error("copied POST.json does not match the original");
  }
  console.log(
    `entry link ok: @${post.handle} status ${post.postId} -> ${target}`,
  );
}

function identical(a: string, b: string): boolean {
  return a === b;
}

main();
