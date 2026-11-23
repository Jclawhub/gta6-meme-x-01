// gta6-meme-x-01, round 10 — entry program.
// The meme is an insurance claim from LEONIDA MUTUAL, Vice City: PLAYER
// ONE files for EMOTIONAL DAMAGE after waiting 4,811 days for GTA VI.
// The itemised damages are the joke: 13 years of waiting at $1.00 a day
// ($4,811.00), 87 trailers at $13.00 each ($1,131.00), 1 childhood spent
// waiting ($13,000.00), 214 GB of hope, corrupted ($214.00), a keyboard
// worn out refreshing the news ($69.99), 2 delays — Fall 2025, May 2026
// ($0.00), and Jason & Lucia, emotional support, absent ($0.00). TOTAL
// CLAIM $19,225.99 — and the claim is DENIED: the adjuster notes "please
// wait 13 more years". A red DENIED stamp sits over the claim, clear of
// every word; the claimant is PLAYER ONE, the incident runs Sept 2013 to
// Nov 2026, and the claim number is 13-VI-2013. The first render hid the
// last letter of the headline under the stamp, and that was fixed before
// the post went up.
// The play code on the post is makefun-abacus-flask-duck (n=1, reused
// from rounds 2 and 6 — all four codes were already used in rounds 1-4,
// and rounds 5, 6 and 7 proved a reused code is accepted by the site).
//
// The entry is a post on X. This program hands the post's address to the
// bounty: it reads POST.json from the repository and copies it into the
// output directory, after checking the address really is an X status URL.
// The house reads the meme itself from the post on X. Round 10 replaces
// round 6 (LEONIDA AIRLINES boarding pass, rank 87, judge 884,675, 12-0);
// round 7 (prescription) was posted but never submitted — the account hit
// its reputation entry limit — and rounds 8 (delivery tracking) and 9
// (Leonida Bistro) were built but never posted. The post URL in POST.json
// is the new round-10 post, and the meme picture is that post's first
// image. The claim is the joke: thirteen years of waiting, priced line
// by line, and denied in the end.
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
