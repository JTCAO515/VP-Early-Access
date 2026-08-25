# Codex execution contract — VP Early Access

> Updated 2026-08-25. This file replaces the former 12-city and server-side-JotForm brief. Current repository evidence and the latest accepted operator request outrank historical sections and chat.

## 1. Project coordinates

| Item | Value |
| --- | --- |
| Local repository | `/Users/jtcao/VP-Early-Access` |
| GitHub | `JTCAO515/VP-Early-Access` |
| Runtime | Next.js 16 App Router, React 19, strict TypeScript, hand-written CSS |
| Public deployment | `https://earlyaccess.go2china.space/` |
| Public intake | Direct JotForm CTA |
| Commit email | `jt.cao@outlook.com` |

## 2. Mandatory reading order

1. `README.md`
2. `docs/interactive-product-demo-plan.md`
3. `HANDOFF.md`
4. `docs/handoff.json`
5. `lib/copy.ts`
6. `lib/demo/types.ts` and the fixture file owned by the requested surface
7. the component that renders that fixture

For map work also read, in order:

1. `components/ChinaMap.tsx`
2. `lib/landmarks.ts`
3. `scripts/build-map.mjs`
4. generated `lib/map-geometry.ts` only as output evidence

## 3. Current architecture contracts

### Landing page

- `lib/copy.ts` owns landing, map, comparison and shell copy.
- The only public conversion CTA is Early Access and all CTA links point to the configured public JotForm URL.
- The legacy `/api/waitlist` route is retained for compatibility but is not called by the page.

### Product Demo

- `lib/demo/` is the single fixture layer for Demo content and state.
- Top-level navigation is `Today / Ask / Copilot / Tools / Explore / User`.
- Ask and Trip Canvas share one document state.
- No Canvas change applies without a visible Diff and user confirmation.
- Copilot owns long-term memory; Tools is a separate top-level surface; Explore owns Places only.
- Every operational claim with a number renders a source, confidence or recheck state.
- Hard constraints are never overridden automatically.
- Every external action is a static handoff. The Demo never books, buys, calls, uploads, requests a car or contacts a human.

### Map

- `MAP_CITIES` contains exactly 50 destinations, including Hong Kong, Macao and Taipei.
- `LANDMARK_ART` contains exactly the same 50 keys, one 32×32 stroke-only glyph per city.
- `lib/map-geometry.ts` is generated-only from Natural Earth admin-0 and admin-1 data through `scripts/build-map.mjs`.
- Runtime requests no map tiles, map SDK or external visual asset.
- Base geometry is static. Autoplay changes only the active marker. A fine pointer may open the magnifying lens. Reduced motion disables autoplay and motion.

## 4. Frozen boundaries

Do not change these without an explicit operator contract decision:

- `/api/waitlist` request/response, honeypot, allowlist and rate-limit behaviour;
- public JotForm destination;
- secret handling: real keys never enter code, docs, commits or chat;
- no fabricated registrations, testimonials, media logos, inventory, prices or partnerships;
- no real booking, payment, ride, upload or human-support action;
- `/Users/jtcao/Documents/VP - V4` and `JTCAO515/VP-V4` remain read-only for this repository task.

## 5. Current accepted work

The 2026-08-25 slice must:

1. expand the Hero map from 37 to 50 cities with matching hand-drawn glyphs;
2. complete the product-plan items previously marked pending, including the tour, ability statements, shell context, global states, editable import results, partial/offline degradation, Explore area filtering and mobile navigation;
3. add a category-level comparison of traditional OTAs, general AI, travel AI and VisePanda, including an explicit inventory limitation and no claim of existing partnerships;
4. reconcile README, plan, handoff and machine-readable handoff with the implementation.

## 6. Acceptance

Required automated checks:

```bash
pnpm check
git diff --check
```

Required invariant checks:

- 50 city IDs and 50 landmark keys, with empty missing/extra sets;
- CHN/TWN/HKG/MAC outlines and province paths remain present;
- no secret-like value or unsupported partnership claim is introduced;
- all new visible copy is bilingual.

Required browser checks:

- 1440×900, 375×812 and 430×932;
- English and Chinese;
- no console errors and no page-level horizontal overflow;
- Hero map, lens/pin behaviour, all 50 marker positions and glyph rendering;
- full-screen enter/Escape exit;
- tour step 2 opens the Canvas Diff;
- import item edit/repair;
- partial-failure and offline states;
- Explore category, area, payment and language filters;
- mobile bottom navigation and Ask/Canvas segmented switch;
- competitor table and limitation copy;
- reduced-motion autoplay/motion guards.

Unrun checks must remain explicitly marked `not-run`; a build is not browser acceptance.

## 7. Documentation closeout

Before handoff, update `docs/handoff.json` and `HANDOFF.md` with:

- objective and accepted scope;
- changed files;
- actual command evidence;
- browser evidence and screenshots;
- unrun checks;
- deviations and residual risks;
- rollback commits;
- exactly one next action.
