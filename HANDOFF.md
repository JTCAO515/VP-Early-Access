# HANDOFF — 50-city map, completed Demo states and category comparison

## Current working slice: humanized public copy

- Branch: `codex/humanize-homepage-copy`
- Status: implemented and locally accepted; not merged or deployed.
- Installed global skills:
  - `humanizer` from `blader/humanizer` at `e2e92e7b4b8229253ed5c8e81dc65463fdeddda5`;
  - `humanizer-zh` from `ai-zixun/humanizer-zh` at `f75f1ac9735c4f10da1bba0148e0ea7228c5c3b3`.
- Added repository copy rules in `AGENTS.md`: English uses `humanizer`; Chinese uses neutral `humanizer-zh`; bilingual pairs move together; facts, numbers, CTA targets and Demo boundaries stay unchanged.
- Rewrote Hero, capability cards, competitor comparison, simulator, mobile section, closing CTA, Demo ability statements and the visible turns in all eleven chats.
- Rewrote page title, search description and Open Graph description so shared links no longer use the previous slogan.
- Added `docs/interactive-demo-implementation-report.md`, a code-backed report of every Demo surface, layout, fixture, interaction, component boundary and recommended path into formal product development.
- Corrected the public/documented tool count from 36 to the actual 34 screens: Translation 7, Ride 8, Visa 6, Network 7 and Human Handoff 6.
- Removed narrative em dashes, inflated claims, formulaic contrast, report language and repeated three-part explanations. Standard UI labels and fixture data were kept stable.
- Fact audit: no product number, price, date, route, hard constraint, source/recheck state, inventory limitation or partnership boundary was added or removed.
- `pnpm check` and `git diff --check` passed.
- In-app Browser passed desktop English/Chinese identity, layout, console and interaction checks.
- Playwright fallback was used after the in-app browser stalled at a 375px viewport. English/Chinese passed at 1440×900, 375×812 and 430×932 with no page overflow or console errors.
- Production still serves `bac38b1`; the copy branch has not been released.

- Release commit: `799760b` on GitHub `main`
- Objective: expand the Hero map to 50 destinations, complete every product-plan item previously marked pending, add an honest competitor-category comparison and reconcile the repository documentation.
- Status: implemented, merged to `main`, deployed by Vercel and production-smoke accepted.
- Frozen boundaries preserved: public JotForm CTA, legacy waitlist API contract, no secrets, no real transaction/provider action, VP-V4 read-only.

## Delivered

### Hero map

- `MAP_CITIES` now contains exactly 50 destinations.
- Added Datong, Suzhou, Huangshan, Xiamen, Jingdezhen, Qingdao, Luoyang, Jiuzhaigou, Dali, Lijiang, Sanya, Dunhuang and Kashgar.
- `LANDMARK_ART` contains exactly 50 matching keys; each new destination has a 32×32 stroke-only SVG glyph.
- Added a top SVG control layer with 50 keyboard-accessible city buttons. This prevents the pointer lens or overlapping Hero copy from swallowing marker clicks.
- Mouse activation, keyboard activation, `aria-pressed`, autoplay pinning and weather callouts share the same city state.
- Fixed the server parser for Open-Meteo multi-coordinate responses. A live 50-coordinate request returned HTTP 200 and 50 result objects.
- Corrected WMO weather-code ordering so fog and snow no longer fall through to drizzle/rain.

### Completed Demo specification

- Tour step 2 opens the Shanghai Canvas Diff instead of returning to an unchanged Ask state.
- Added the missing Canvas ability statement, browser lock glyph, current Trip/context/time and a four-state legend.
- Added editable four-stage import inspection: received, parsing, extracted and checked. Five extracted fields can be edited; a failed rail field can be repaired manually.
- Added reachable partial-failure and offline degradation states in Tools. Offline disables network-dependent execution while keeping saved bilingual cards conceptually available.
- Explore city cards now show readiness, POI count, coverage categories and update time. Added an area selector alongside price, international-card and English-service filters.
- Mobile Demo now uses a six-item bottom navigation and an Ask/Trip Canvas segmented switch. Comparison tables become vertical cards inside the Demo.
- 375×812 and 430×932 both keep page-level horizontal overflow at zero.

### Competitor-category comparison

- Added a section between capability cards and the interactive Demo.
- Compares traditional OTAs, general AI, travel AI and VisePanda across seven capability dimensions.
- Explicitly states that OTA hotel/ticket inventory, live prices and instant transactions remain stronger.
- VisePanda claims only official-channel handoffs and future channel-integration/partnership capability; it does not claim an existing OTA, hotel, ticketing or ride-hailing partnership.
- The table is labelled as category-level positioning, not a named-provider ranking.

### Documentation

- Replaced the obsolete 12-city/server-side-JotForm kickoff with the current execution contract.
- README now reflects the direct JotForm CTA, 50-city map, fixture architecture and current navigation.
- `docs/interactive-product-demo-plan.md` no longer marks implemented work as pending and records S1–S15, the 50-city extension and competitor comparison.
- `lib/copy.ts` owns landing/comparison copy; `lib/demo/` owns Demo fixture and UI copy.

## Verification evidence

- `pnpm check` — passed after implementation.
- `git diff --check` — passed.
- Map invariant script — 50 cities, 50 glyphs, empty missing/extra sets.
- Rendered contact sheet — all 50 glyphs reviewed at `/tmp/vp-landmarks-50.png`; new glyphs are distinct and follow the existing stroke system.
- Open-Meteo live shape check — HTTP 200, response array length 50.
- In-app Browser — passed desktop visual review, competitor section, full screen, tour Diff, import repair, partial/offline state, Explore area filter and 375px mobile navigation.
- Playwright fallback — used because the in-app browser stalled while changing to 430×932. Passed 1440×900, 375×812 and 430×932 in English and Chinese, with no page overflow or console errors.
- Map browser checks — 50 markers, 50 accessible controls, 50 SVG symbols, 31 province paths and four national outlines; Kashgar mouse activation and Suzhou keyboard activation showed the correct glyph/place/weather callout.
- Autoplay advanced; emulated reduced motion kept the active city fixed.
- Full-screen enter/Escape exit restored body scrolling.
- Production deployment — passed: `earlyaccess.go2china.space` renders 50 markers/controls/symbols, the comparison section and the completed Demo. Kashgar click/weather, full-screen, tour Diff and 430×932 mobile passed with no console errors.
- Frozen waitlist API regression — not run; untouched.
- Live JotForm submission — not run; no email was transmitted.

## Visual fidelity ledger

| Point | Accepted evidence | Local evidence | Result |
| --- | --- | --- | --- |
| Hero composition | Production 1440×900 | `/tmp/vp-ea-local-desktop.png` | Copy/layout preserved; only marker count, click layer and live weather changed |
| Map art | Existing purple stroke landmarks | `/tmp/vp-landmarks-50.png` | 13 new glyphs match grid, stroke, caps and colour |
| Competitor section | Existing white/purple landing system | `/tmp/vp-ea-comparison.png` | Same typography, border, radius and VisePanda accent column |
| Demo chrome | Existing browser shell | `/tmp/vp-ea-demo.png` | Lock, context, state legend and tour fit without changing the shell family |
| Mobile product frame | Existing responsive Demo | `/tmp/vp-ea-mobile-430.png` | Bottom nav and segmented Ask/Canvas state are readable with no page overflow |

Above-the-fold copy and CTA order are unchanged. No material visual mismatch remains in the checked views.

## Residual risks

- Dense eastern-city clusters rely on the lens; all markers are clickable but not all labels can be visible simultaneously.
- Open-Meteo is an external dependency. Failure still omits the weather row rather than inventing a value.
- The competitor section is positioning copy, not a sourced market study; keep it category-level unless a research task adds citations.
- Production observation is a smoke test, not a long-term product outcome measurement.

## Rollback

Revert `799760b`. The generated map geometry, waitlist API and public JotForm destination are not changed by the rollback.

## Next action

Merge the copy/report branch to `main`; after Vercel succeeds, run a production bilingual smoke check and confirm the report is available in the repository.
