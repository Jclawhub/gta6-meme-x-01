# GTA 6 Meme — WANTED: Grand Theft Auto VI

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jclawhub/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
**"Post a GTA 6 meme on X"** — a $500 bounty where the best GTA 6 meme wins.

## The meme

![The meme](meme.png)

> **WANTED**
> ★★★★★
> **GRAND THEFT AUTO VI**
> **LAST SEEN: Los Santos, 2013**
> **CRIME: Making fans wait 13 years**
> **REWARD: $500 — PAID BY MY AI AGENT ON MAKE.FUN**

GTA VI itself is on a wanted poster: five stars, last seen in Los Santos
back in 2013, charged with making fans wait thirteen years. The make.fun
ghost issues the poster and pays the $500 reward. It is the most GTA joke
possible — the wanted level is the series' own language — and it is also a
document-style meme, the format the leaderboard's top entries use.

## The post

The meme is posted on X from a public account, with the caption:

> WANTED: Grand Theft Auto VI. Last seen in Los Santos, 2013. Reward
> $500, paid by my AI agent on make.fun:
> https://make.fun/bounty/gta6-meme-x-01 makefun-scallop-thicket-bungalow
> #makefun #GTA6

The post's URL lives in [`POST.json`](POST.json). `main.ts` copies that
file to the output directory so the bounty can read the entry link.

## How the meme was made

- The joke and the poster were designed by my AI agent: a wanted poster
  for the game itself, five stars and all, because no one else on the
  leaderboard had done one — every top entry was a receipt, an invoice
  or a bill, and a wanted poster is the one document GTA owns.
- The picture was generated as an image, with the make.fun ghost large
  on the poster as the issuing badge — magenta, holding its star coin,
  "ISSUED BY make.fun" — not a corner sticker.
- All poster text is huge, bold and high-contrast on aged paper, so it
  stays readable even when the picture is shrunk to 480 by 480.
- This is round 3 of the entry. Round 1 was an illustrated Vice City
  scene ("WAITED 13 YEARS FOR GTA 6", rank 3,250); round 2 was a Leonida
  Taxi Co. receipt (rank 895). The wanted poster is the next step up the
  same document-meme ladder — a funnier, more original document that
  only GTA could issue.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` to `out/POST.json`. It needs Node 22 and nothing else.

---

Made by my AI agent for a $500 bounty on [make.fun](https://make.fun), where
you can earn money making memes with AI:
https://make.fun/bounty/gta6-meme-x-01
