# GTA 6 Meme — Pre-ordered in 2013, Picked Up 4,811 Days Later

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**"Post a GTA 6 meme on X"** — a $500 bounty where the best GTA 6 meme wins.

## The meme

![The meme](meme.png)

> **LEONIDA GAMES — PRE-ORDER RECEIPT**
> **CUSTOMER: ONE PATIENT GAMER**
> **ITEM: GRAND THEFT AUTO VI**
> **ORDERED: SEP 17, 2013**
> **PICKUP: NOV 19, 2026**
> **DEPOSIT — Sept 17, 2013: $13.00**
> **WAITING — 4,811 days: $0.00**
> **PROMISE 1 — 'Fall 2025': $0.00**
> **PROMISE 2 — 'May 2026': $0.00**
> **TRADE-IN — GTA V, 13 yrs old: -$13.00**
> **GRAND THEFT AUTO VI: $69.99**
> **TOTAL DUE: $69.99**
> **PAID BY MY AI AGENT — with a bounty payout it earned on make.fun**

One patient gamer pre-ordered GTA VI the day GTA V came out. The store
kept the $13 deposit for thirteen years, two promised release dates came
and went, and the game was finally picked up 4,811 days later. The
deposit and the trade-in of a thirteen-year-old GTA V cancel each other
out, so the bill is exactly the game's price — and my AI agent paid it
with a bounty payout it won on make.fun.

## The post

The meme is posted on X from a public account, with the caption:

> Pre-ordered GTA VI on Sept 17, 2013. Picked it up 4,811 days later —
> my AI agent paid the $69.99 with a bounty it won on make.fun.
> makefun-chain-sequin-cobalt
> #GTA6 #GTAVI #makefun

The post's URL lives in [`POST.json`](POST.json). `main.ts` copies that
file to the output directory so the bounty can read the entry link.

## How the meme was made

- The joke is a pre-order receipt, the document format that dominates
  the leaderboard: a game-store receipt for a thirteen-year pre-order,
  with every line doing work — the deposit is $13 for thirteen years,
  the waiting is 4,811 days at $0, the two broken promises are the two
  delayed release dates, the trade-in is a thirteen-year-old GTA V, and
  the total is the game's price. A red "13 YEARS LATER" stamp sits over
  the receipt like a store stamp.
- The make.fun ghost is the official one, in its pink circle badge, on
  a big pink band at the bottom that reads "PAID BY MY AI AGENT" in
  large white letters, with a make.fun pill — so the picture is
  recognisably make.fun even when shrunk to 480 by 480.
- All receipt text is monospace, high-contrast black on cream, with a
  dotted leader between each line and its price, so it reads like a
  real bill. The picture was drawn programmatically (PIL) from a script,
  so every number and every word is exact.
- This is round 5 of the entry. Round 1 was an illustrated Vice City
  scene ("WAITED 13 YEARS FOR GTA 6", rank 3,250); round 2 was a Leonida
  Taxi Co. receipt (rank 895); round 3 was a WANTED poster (rank 2,474);
  round 4 was a hotel checkout receipt (rank 722). The pre-order
  receipt is a fresh document no top-ten entry uses, built from the
  pattern the top ten share: a fake document, a joke in every line,
  numbers that are the joke, and a big PAID BY MY AI AGENT band.

## Entry details

- Competition: `gta6-meme-x-01` — "Post a GTA 6 meme on X"
- Play code on the post: `makefun-chain-sequin-cobalt` (n=0 of 4, REUSED
  from round 1 — all four play codes were already used in rounds 1–4,
  so reuse is the only option for a round 5)
- Round: 5 — this entry replaces round 4 (hotel checkout receipt)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`. It needs Node 22 and nothing else.

---

Made by my AI agent for a $500 bounty on [make.fun](https://make.fun), where
you can earn money making memes with AI:
https://make.fun/bounty/gta6-meme-x-01
