# VP Early Access

Bilingual Early Access landing page and interactive, fixture-backed VisePanda product demo.

## Current product surface

The page has four jobs:

1. explain VisePanda’s China-trip execution model;
2. show a 50-city interactive China destination map;
3. let visitors operate a prepared VisePanda workspace in normal or full-screen mode;
4. send the single public Early Access CTA to the operator-owned JotForm form.

The Demo is intentionally static. Conversations, prices, reviews, user data, tool results and channel handoffs are fixed fixtures. It does not create real bookings, request a car, upload a file or contact a person.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, strict TypeScript |
| Styling | Hand-written CSS in `app/globals.css` |
| Fonts | Self-hosted through `next/font` |
| Public intake | Direct JotForm link |
| Map | Generated local SVG paths from Natural Earth 1:50m |
| Weather | Open-Meteo, fetched server-side with revalidation |

No client-side analytics, map tiles, external fonts or third-party scripts are loaded.

## Architecture

- `lib/copy.ts` — landing-page, navigation, map and comparison copy.
- `lib/demo/` — single source of truth for Demo conversations, Canvas documents, memory, tools, Explore, Today, status and UI copy.
- `components/demo/` — typed interactive surfaces that render the fixture layer.
- `components/ProductDemo.tsx` — browser shell, navigation, tour, full-screen state and deep-link routing.
- `components/ChinaMap.tsx` — 50 destination markers, static province plate, pointer lens, autoplay and reduced-motion behaviour.
- `lib/landmarks.ts` — exactly one 32×32 stroke-only landmark glyph per `MAP_CITIES` entry.
- `lib/map-geometry.ts` — generated file; never edit it by hand.
- `scripts/build-map.mjs` — the only supported way to regenerate country and province geometry.

The legacy `POST /api/waitlist` contract remains in the repository for compatibility but is not called by the public page. Do not change its request/response, honeypot, allowlist or rate-limit behaviour without an explicit contract decision.

## Demo navigation

The current top-level surfaces are:

```text
Today · Ask VisePanda · Copilot · Tools · Explore · User
```

Ask and Trip Canvas share a fixture state. Canvas changes must pass through a visible Diff before they can be applied. Copilot owns long-term memory. Tools is a separate top-level surface. Explore contains Places only.

The same product Demo is available as a shareable immersive page at `/demo`. The standalone route keeps the full product shell, language switch and all interactions, and links back to the Early Access page. It reuses `ProductDemo` and `lib/demo/`; it does not carry a second fixture layer.

## Map contract

- 50 cities total, including Hong Kong, Macao and Taipei;
- 50 matching landmark glyphs, with no missing or extra keys;
- 31 mainland province shapes plus CHN/TWN/HKG/MAC outlines;
- the base plate never pans or zooms automatically;
- a fine pointer can open a lens; touch keeps the static plate;
- autoplay changes only the active city and stops while pinned or under reduced motion.

## Public CTA

All Early Access buttons point to:

```text
https://form.jotform.com/cjttttt/visepanda-early-access
```

The form link is public configuration, not a secret. API keys, private form configuration and user submissions must never enter the repository, documentation or chat.

## Local development

```bash
pnpm install
pnpm dev
```

## Verification

```bash
pnpm check
```

This runs strict TypeScript and the production build. Frontend changes additionally require browser checks at 1440×900, 375×812 and 430×932, both languages, reduced motion, console errors, page overflow and the main interaction paths.

## Current documentation authority

Read in this order:

1. `README.md`
2. `docs/interactive-product-demo-plan.md`
3. `docs/interactive-demo-implementation-report.md`
4. `HANDOFF.md`
5. `docs/handoff.json`
6. the owning implementation files named by the handoff

`docs/codex-kickoff.md` now records the current execution contract and supersedes its former 12-city/server-side-JotForm brief. Repository and deployed evidence outrank historical chat or commit notes.
