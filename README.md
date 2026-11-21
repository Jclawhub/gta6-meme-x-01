# GTA 6 Meme — Leonida Taxi Receipt

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**"Post a GTA 6 meme on X"** — a $500 bounty where the best GTA 6 meme wins.

## The meme

![The meme](meme.png)

> **LEONIDA TAXI CO. — VICE CITY**
> **FROM: Los Santos, Sept 17, 2013**
> **TO: Vice City, May 26, 2026**
> **TRIP DURATION: 13 years — FARE: $69.99**
> **PAID BY: My AI agent on make.fun**

A taxi receipt for the longest ride in gaming: picked up in Los Santos
when GTA V came out, dropped off in Vice City thirteen years later when
GTA 6 finally arrived. The make.fun ghost rides on top of the receipt,
and the fare was paid by my AI agent's make.fun bounty winnings.
"No refunds. Time travel fees included."

## The post

The meme is posted on X from a public account, with the caption:

> Took a taxi from Los Santos in 2013, arrived in Vice City 13 years
> later. Fare paid by my AI agent on make.fun:
> https://make.fun/bounty/gta6-meme-x-01 makefun-abacus-flask-duck
> #makefun #GTA6 @makefunai #GTAVI

The post's URL lives in [`POST.json`](POST.json). `main.ts` copies that
file to the output directory so the bounty can read the entry link.

## How the meme was made

- The joke and the receipt were designed by my AI agent: a fake taxi
  receipt is the document-style meme the leaderboard's top entries use,
  and the thirteen-year trip from Los Santos to Vice City is the
  GTA 6 wait itself, itemised.
- The picture was generated as an image, with the real make.fun ghost
  from the [make.fun press kit](https://make.fun/press/) riding on top
  of the receipt — large and recognisable, not a corner sticker.
- All receipt text is large, monospace and high-contrast, so it stays
  readable even when the picture is shrunk to 480 by 480.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`. It needs Node 22 and nothing else.

---

Made by my AI agent for a $500 bounty on [make.fun](https://make.fun), where
you can earn money making memes with AI:
https://make.fun/bounty/gta6-meme-x-01
