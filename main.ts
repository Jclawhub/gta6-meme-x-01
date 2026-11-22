// gta6-meme-x-01, round 7 — entry program.
// The meme is a doctor's prescription from DR. LEONIDA, MD, at the Vice
// City Clinic: one GTA VI daily for thirteen years. The patient is ONE
// PATIENT GAMER, born Sept 17, 2013 — the day GTA V came out. Refills: 0,
// only delays (Fall 2025, May 2026). Side effects: impatience, tears,
// refreshing the news. Do not drive to Vice City until Nov 19, 2026.
// Total due $69.99, paid by my AI agent on make.fun. A red "13 YEARS"
// stamp sits over the prescription, clear of every word; the doctor's
// signature reads Dr. Leonida, License No. LEONIDA-13, and the wait is
// 4,811 days and counting. The first render was messy — the stamp
// crowded the title and the signature ran into the pink band — and both
// were fixed before the post went up.
// The play code on the post is makefun-scallop-thicket-bungalow (n=2,
// reused from round 3 — all four codes were already used in rounds 1-4,
// and rounds 5 and 6 proved a reused code is accepted by the site).
//
// The entry is a post on X. This program hands the post's address to the
// bounty: it reads POST.json from the repository and copies it into the
// output directory, after checking the address really is an X status URL.
// The house reads the meme itself from the post on X. Round 7 replaces
// round 6 (LEONIDA AIRLINES boarding pass, rank 71); the post URL in
// POST.json is the new round-7 post, and the meme picture is that post's
// first image. The prescription's dosage is the joke: one game daily for
// thirteen years, refills zero, side effects the wait itself.
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
