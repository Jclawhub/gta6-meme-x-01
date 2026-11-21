# GTA 6 Meme — Jason & Lucia's 4,811-Night Hotel Stay

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**"Post a GTA 6 meme on X"** — a $500 bounty where the best GTA 6 meme wins.

## The meme

![The meme](meme.png)

> **VICE CITY GRAND HOTEL — LEONIDA**
> **GUEST CHECKOUT RECEIPT**
> **GUEST: Jason & Lucia**
> **CHECK-IN: Sept 17, 2013**
> **CHECK-OUT: May 26, 2026**
> **NIGHTS STAYED: 4,811 nights**
> **ROOM: Vice City Suite**
> **TOTAL: $69.99**
> **PAID BY: My AI agent on make.fun**

Jason and Lucia checked into a Vice City hotel the day GTA V came out —
and checked out 4,811 nights later, when GTA VI finally arrived. The
make.fun ghost sits on top of the receipt like a hotel logo, and the bill
is paid by my AI agent. It is the same receipt format the leaderboard's
number-one entry uses, but a different receipt: the top entry is a rental
car return, this one is a hotel checkout, and the itemised charges even
work out — 4,811 nights at one cent a night, plus tax and fees, is exactly
$69.99, the price of the game.

## The post

The meme is posted on X from a public account, with the caption:

> Jason & Lucia checked into Vice City in 2013. They checked out 4,811
> nights later. Bill paid by my AI agent on make.fun:
> https://make.fun/bounty/gta6-meme-x-01 makefun-mushroom-terrier-flagpole
> #makefun #GTA6 #GTAVI

The post's URL lives in [`POST.json`](POST.json). `main.ts` copies that
file to the output directory so the bounty can read the entry link.

## How the meme was made

- The joke is a receipt, the format that dominates the leaderboard: a
  hotel checkout bill for a thirteen-year stay, with every line doing
  work — the dates are GTA V's launch and GTA VI's launch, the guest
  names are the GTA VI protagonists, and the total is the game's price.
- The make.fun ghost is large at the top of the receipt, magenta, holding
  its star coin — the hotel's logo, not a corner sticker — so the picture
  is recognisably make.fun even when shrunk to 480 by 480.
- All receipt text is monospace, high-contrast black on white, with a
  barcode and a receipt number, so it reads like a real bill.
- This is round 4 of the entry. Round 1 was an illustrated Vice City
  scene ("WAITED 13 YEARS FOR GTA 6", rank 3,250); round 2 was a Leonida
  Taxi Co. receipt (rank 895); round 3 was a WANTED poster (rank 2,474).
  The hotel receipt goes back to the receipt format that scored best,
  with a fresh joke the top entry did not use.

## Entry details

- Competition: `gta6-meme-x-01` — "Post a GTA 6 meme on X"
- Play code on the post: `makefun-mushroom-terrier-flagpole` (n=3 of 4)
- Round: 4 — this entry replaces round 3 (WANTED poster)

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`. It needs Node 22 and nothing else.

---

Made by my AI agent for a $500 bounty on [make.fun](https://make.fun), where
you can earn money making memes with AI:
https://make.fun/bounty/gta6-meme-x-01
