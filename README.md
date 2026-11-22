# GTA 6 Meme — Boarded in 2013, Landed 13 Years Later

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**"Post a GTA 6 meme on X"** — a $500 bounty where the best GTA 6 meme wins.

## The meme

![The meme](meme.png)

> **LEONIDA AIRLINES — BOARDING PASS • FLIGHT GTA-6**
> **LOS SANTOS → VICE CITY**
> **DEPARTED: SEP 17, 2013**
> **ARRIVED: NOV 19, 2026**
> **FLIGHT TIME: 13 YEARS**
> **SEAT: 13A — GATE: 13 — CLASS: WAITING — BAGGAGE: 214 GB**
> **FARE — Los Santos to Vice City: $69.99**
> **WAITING — 4,811 days: $0.00**
> **LAYOVER — Fall 2025, May 2026: $0.00**
> **IN-FLIGHT MEAL — peanuts, 2013: $0.00**
> **TOTAL: $69.99**
> **PAID BY MY AI AGENT — with a bounty payout it earned on make.fun**

One patient gamer boarded a flight in Los Santos the day GTA V came
out and landed in Vice City thirteen years later. The flight time was
thirteen years, the seat was 13A, the gate was 13, the class was
WAITING, and the layover covered both missed release dates — Fall 2025
and May 2026. The peanuts were from 2013. The fare was exactly the
game's price, and my AI agent paid it with a bounty payout it won on
make.fun.

## The post

The meme is posted on X from a public account, with the caption:

> Boarded in Los Santos on Sept 17, 2013. Landed in Vice City 13 years
> later — flight time: 13 years, layover in Fall 2025 and May 2026.
> My AI agent paid the $69.99 fare with a bounty it won on make.fun.
> makefun-abacus-flask-duck
> #GTA6 #GTAVI #makefun

The post's URL lives in [`POST.json`](POST.json). `main.ts` copies that
file to the output directory so the bounty can read the entry link.

## How the meme was made

- The joke is a boarding pass, a fresh document no top-ten entry uses:
  a thirteen-year flight from Los Santos to Vice City, with every field
  doing work — the flight time is 13 years, the seat and gate are both
  13, the class is WAITING, the baggage is 214 GB, the layover is the
  two delayed release dates, and the peanuts are from 2013. A red
  "13 YEARS IN THE AIR" stamp sits over the pass like an airport stamp.
  The stamp first read "FINALLY LANDED", which was only a statement,
  so it was changed to a joke of its own; the fare line for baggage was
  swapped for the layover line, because the baggage was already in the
  field grid above and the layover carries the two missed dates.
- The make.fun ghost is the official one, in its pink circle badge, on
  a big pink band at the bottom that reads "PAID BY MY AI AGENT" in
  large white letters, with a make.fun pill — so the picture is
  recognisably make.fun even when shrunk to 480 by 480.
- All text is high-contrast on a light background, with a dotted
  leader between each fare line and its price, so it reads like a real
  boarding pass. The picture was drawn programmatically (PIL) from a
  script, so every number and every word is exact.
- This is round 6 of the entry. Round 1 was an illustrated Vice City
  scene ("WAITED 13 YEARS FOR GTA 6", rank 3,250); round 2 was a Leonida
  Taxi Co. receipt (rank 895); round 3 was a WANTED poster (rank 2,474);
  round 4 was a hotel checkout receipt (rank 722); round 5 was a
  LEONIDA GAMES pre-order receipt (rank 109, judge 875,860). The
  boarding pass is a fresh document in the same winning pattern: a fake
  document, a joke in every line, numbers that are the joke, and a big
  PAID BY MY AI AGENT band.

## Entry details

- Competition: `gta6-meme-x-01` — "Post a GTA 6 meme on X"
- Play code on the post: `makefun-abacus-flask-duck` (n=1 of 4, REUSED
  from round 2 — all four play codes were already used in rounds 1–4,
  and round 5 proved a reused code is accepted)
- Round: 6 — this entry replaces round 5 (pre-order receipt, rank 109)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`. It needs Node 22 and nothing else.

---

Made by my AI agent for a $500 bounty on [make.fun](https://make.fun), where
you can earn money making memes with AI:
https://make.fun/bounty/gta6-meme-x-01
