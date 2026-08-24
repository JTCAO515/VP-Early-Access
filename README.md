# VP - Early Access

Early access (waitlist) landing page for **VisePanda** — the companion page to
[JTCAO515/VP-V4](https://github.com/JTCAO515/VP-V4).

One page, three jobs: explain what VisePanda does, collect an email plus three
qualifying answers, and state that the iOS and Android apps are in development.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16 (App Router), React 19, TypeScript | Same major versions as VP-V4 |
| Styling | Hand-written CSS in `app/globals.css` | One page, no utility-framework dependency |
| Fonts | `next/font` (Instrument Serif) | Self-hosted at build time — `fonts.googleapis.com` is unreachable from mainland China |
| Storage | Pluggable provider (`console` / `feishu` / `webhook`) | Data lands in a table the operator can open from the mainland |

No client-side analytics or third-party scripts are loaded.

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

With no configuration the `console` provider prints each signup to the server
log, so the page is fully usable before any account exists.

## Waitlist storage

Set `WAITLIST_PROVIDER` in `.env.local`:

- **`console`** — dev default. Logs to stdout, stores nothing.
- **`feishu`** — writes one row per signup into a Feishu / Lark Bitable table.
  Setup walkthrough: [`docs/setup-feishu.md`](docs/setup-feishu.md).
- **`webhook`** — POSTs the JSON payload to `WAITLIST_WEBHOOK_URL`.

The visitor's browser only ever talks to this site's own `/api/waitlist`. The
call to the storage provider happens server-side, so overseas visitors are never
slowed down by a China-hosted service, and mainland visitors are never blocked by
an overseas one.

To add a provider, implement it in `lib/providers/` and register it in
`lib/providers/index.ts`.

## What the form collects

Step 1 is email only. Step 2 asks three optional single-select questions
(travel timing, referral source, most wanted feature) and can be skipped.
Both the questions and their options live in `QUESTIONS` in `lib/copy.ts`.

Protections on `POST /api/waitlist`: hidden honeypot field, in-memory rate limit
of 5 requests per IP per minute, email format check, and an allowlist that drops
any answer value not defined in `QUESTIONS`.

> The rate limiter is per server instance and resets on deploy. Move it to
> Upstash Redis or an equivalent before running paid traffic at this page.

## Editing content

**All copy lives in `lib/copy.ts`.** Every string is `{ en, zh }`, and the page
has an EN/中文 toggle in the nav. Nothing else needs to be touched to change
wording, questions, cities, or the itinerary shown in the mockups.

`ACCESS_WINDOW` is the line under the closing call to action. Waitlist pages
convert better with a concrete window ("early access opens this autumn") than
with an open-ended promise — that is a public commitment about the launch date,
so it ships deliberately vague and should be set by the project owner.

## Deployment

The app is a standard Next.js build with one dynamic route handler, so it runs on
Vercel, Cloudflare Pages, Netlify, or any Node host. Set the environment
variables from `.env.example` in the host's dashboard — no secret belongs in this
repository.

> **Mainland reachability is a hosting question, not a code question.** Vercel's
> default domains are not reliably reachable from mainland China. If mainland
> visitors are in scope, host on a provider that is (or put a mainland CDN with a
> filed ICP licence in front). The storage provider choice does not solve this.

## Notes on the map

`components/Constellation.tsx` draws a city network — nodes and arcs — rather
than a national outline. Publishing a map of China in the mainland requires an
approved base map and a review number under 《地图管理条例》, and a hand-drawn
border would be both a legal and an accuracy risk. If an approved base map is
ever licensed it can be dropped in behind the nodes; the coordinates in
`CITY_POINTS` stay valid.

## Checks

```bash
pnpm check
```

Runs `tsc --noEmit` and a production build.
