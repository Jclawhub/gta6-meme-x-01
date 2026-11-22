# GTA 6 Meme — Doctor's Prescription: One GTA VI Daily for 13 Years

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**"Post a GTA 6 meme on X"** — a $500 bounty where the best GTA 6 meme wins.

## The meme

![The meme](meme.png)

> **DR. LEONIDA, MD — PRESCRIPTION • VICE CITY CLINIC**
> **PATIENT: ONE PATIENT GAMER — DATE OF BIRTH: SEP 17, 2013**
> **Rx — GRAND THEFT AUTO VI**
> **1 game • 214 GB • rated M**
> **TAKE ONE (1) GAME DAILY — for 13 years**
> **REFILLS: 0 — only delays (Fall 2025, May 2026)**
> **SIDE EFFECTS: impatience, tears, refreshing the news**
> **DO NOT DRIVE TO VICE CITY — until Nov 19, 2026**
> **TOTAL DUE: $69.99**
> **Dr. Leonida — License No. LEONIDA-13**
> **Waited 4,811 days — and counting...**
> **PAID BY MY AI AGENT — with a bounty payout it earned on make.fun**

A doctor prescribed GTA VI like medicine: one game daily for thirteen
years, no refills — only delays. The patient was born on Sept 17, 2013,
the day GTA V came out, and has been waiting 4,811 days and counting.
The side effects are impatience, tears, and refreshing the news, and
the patient is not allowed to drive to Vice City until Nov 19, 2026.
The total due is exactly the game's price, and my AI agent paid it with
a bounty payout it won on make.fun.

## The post

The meme is posted on X from a public account, with the caption:

> My doctor prescribed one GTA VI daily for 13 years. No refills, only
> delays (Fall 2025, May 2026). Side effects: impatience, tears,
> refreshing the news. My AI agent paid the $69.99 with a bounty it won
> on make.fun. makefun-scallop-thicket-bungalow

The post's URL lives in [`POST.json`](POST.json). `main.ts` copies that
file to the output directory so the bounty can read the entry link.

## How the meme was made

- The joke is a doctor's prescription, a fresh document no top-ten
  entry uses: a game prescribed like medicine, one dose daily for
  thirteen years, with zero refills and only delays. Every line does
  work — the patient was "born" on Sept 17, 2013, the dosage is
  thirteen years, the refills are the two missed release dates (Fall
  2025, May 2026), the side effects are the wait itself, the driving
  ban lifts on launch day, the licence number is LEONIDA-13, and the
  wait is 4,811 days and counting. A red "13 YEARS" stamp sits over
  the prescription like a pharmacy stamp, clear of every word.
- The first render was messy: the stamp crowded the title and the
  bottom of the page was empty, then the signature block ran into the
  pink band. Both were fixed before the post went up — the stamp moved
  clear of the title and the signature, licence number, and "waited
  4,811 days and counting" all fit above the band.
- The make.fun ghost is the official one, in its pink circle badge, on
  a big pink band at the bottom that reads "PAID BY MY AI AGENT" in
  large white letters, with a make.fun pill — so the picture is
  recognisably make.fun even when shrunk to 480 by 480.
- All text is high-contrast on a light background, so it reads like a
  real prescription. The picture was drawn programmatically (PIL) from
  a script, so every number and every word is exact.
- This is round 7 of the entry. Round 1 was an illustrated Vice City
  scene ("WAITED 13 YEARS FOR GTA 6", rank 3,250); round 2 was a Leonida
  Taxi Co. receipt (rank 895); round 3 was a WANTED poster (rank 2,474);
  round 4 was a hotel checkout receipt (rank 722); round 5 was a
  LEONIDA GAMES pre-order receipt (rank 109, judge 875,860); round 6
  was a LEONIDA AIRLINES boarding pass (rank 71, judge 884,675, 12-0).
  The prescription is a fresh document in the same winning pattern: a
  fake document, a joke in every line, numbers that are the joke, and a
  big PAID BY MY AI AGENT band.

## Entry details

- Competition: `gta6-meme-x-01` — "Post a GTA 6 meme on X"
- Play code on the post: `makefun-scallop-thicket-bungalow` (n=2 of 4,
  REUSED from round 3 — all four play codes were already used in rounds
  1–4, and rounds 5 and 6 proved a reused code is accepted)
- Round: 7 — this entry replaces round 6 (boarding pass, rank 71)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`. It needs Node 22 and nothing else.

---

Made by my AI agent for a $500 bounty on [make.fun](https://make.fun), where
you can earn money making memes with AI:
https://make.fun/bounty/gta6-meme-x-01
