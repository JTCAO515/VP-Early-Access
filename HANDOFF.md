# HANDOFF — VP Early Access hero map detail and demo plan expansion

- Objective: make the Early Access hero map read as a real reference map, and expand the interactive product Demo plan with the field-level detail needed to build and accept the next slices.
- Scope completed: province borders and a cursor-driven magnifier on the hero map, 37 hand-drawn landmark glyphs, and a rewritten `docs/interactive-product-demo-plan.md`.
- Public CTA: unchanged — every Early Access link still points directly to `https://form.jotform.com/cjttttt/visepanda-early-access`.
- Truth boundary: unchanged — all Demo conversations, prices, reviews and account details remain explicit static fixtures. The new landmark glyphs are stylised drawings, never presented as photographs.

## Frozen contracts preserved

- No change to the waitlist API, validation, rate limit, form, simulator, mobile showcase or Product Demo components.
- No secret or provider key was added.
- `lib/map-geometry.ts` stays generated-only; `scripts/build-map.mjs` is the single source.
- `MAP_VIEWBOX.bounds` still comes from the admin-0 selection alone, so the 37 city markers project to exactly the same points as before.
- Product Demo copy remains centralized and bilingual in `lib/copy.ts`.

## Delivered this round

**Hero map (`19dd221`)**

- 31 admin-1 province shapes carry the dot-pattern fill and a dashed hairline border; the four admin-0 outlines are stroked on top with a soft shadow; a 10-degree graticule is clipped to the country silhouette.
- The plate no longer pans or rolls. A lens follows a fine pointer, magnifies the region under it 2.6x, and reveals province names and city names inside the circle.
- While lensing, the base plate dims, the cursor hint hides and the callout hangs above the lens; otherwise the callout hangs above the rotating highlighted marker.
- Touch devices keep the static plate and the rotating highlight; the lens and the hint never appear.
- `scripts/build-map.mjs` now consumes admin-0 and admin-1 together and simplifies province rings with Ramer-Douglas-Peucker at EPSILON 0.35.

**Landmark glyphs (`f82abc9`)**

- `lib/landmarks.ts` holds one stroke-only glyph per city on a shared 32x32 grid, keyed 1:1 with `MAP_CITIES` ids.
- ChinaMap emits them as `<symbol>` defs; the callout header and the card above every marker inside the lens both reference the same drawing with `<use>`.
- The callout's placeholder gradient band is gone, replaced by the glyph on a tinted ground.

**Demo plan (`docs/interactive-product-demo-plan.md`)**

- Every existing section kept and deepened; new sections cover evidence and trust visualisation, empty/loading/failure/degraded states, mobile detail, bilingual copy rules, anti-goals.
- New core material: the shared conversation layer (clarifying chips, generation skeleton, evidence chips, confidence, uncertainty fallback), the Canvas node field spec across all three views, the Diff-and-confirm flow, Canvas versions, Today and recovery paths, memory item structure with before/after preview and governance, the five tool screens, and the nine simulator checks.
- Interaction state matrix goes from about 45 shipped states to a target of about 105; section 15 splits the work into 15 independently acceptable slices S1–S15 with dependencies.
- Every new item is marked `待实现` so the doc never overstates what is built.

## Verification

- `pnpm typecheck` — passed.
- `pnpm build` — passed.
- Desktop hero map at 1440x900 in English and Chinese — passed: 31 province paths, 4 outlines, 37 markers; lens magnified with province/city/landmark labels; callout tracked the lens with the correct glyph.
- All 37 glyphs reviewed on a rendered contact sheet — passed; Hohhot, Shanghai, Hangzhou, Zhengzhou and Shenzhen were redrawn and re-reviewed.
- Mobile hero map at 375x812 — passed: lens and hint suppressed on a coarse pointer, no horizontal overflow.
- Browser console — no errors on a fresh load or after lens interaction.
- Production smoke test — passed: `https://earlyaccess.go2china.space/` returns 200 with 31 province paths and the `lm-*` symbols, and the deployed stylesheet carries the new province, lens and callout rules.
- `prefers-reduced-motion` regression on the rewritten map — not run; the guard was rewritten but not executed under an emulated setting.
- Frozen waitlist API regression — not run; untouched by this slice.
- Live JotForm submission — not run; no user email was transmitted during QA.
- 430x932 viewport — not run this round.

## Risks

- `lib/map-geometry.ts` grew from roughly 13 KB to 43 KB gzipped. Raise `EPSILON` in `scripts/build-map.mjs` if the hero payload becomes a problem.
- Province polygons are drawn individually, so shared borders are stroked twice; visible only as a slightly denser dashed line.
- The landmark glyphs are stylised interpretations, not surveyed drawings.

## Operator actions

1. Confirm the JotForm public URL remains current.
2. Decide whether the expanded plan's slices S1–S15 should become GitHub issues for Codex, and in which order.
3. Replace the CSS POI and dish image placeholders inside the Product Demo with approved project-local assets in a later image pass. The hero map no longer needs an image pass.

## Rollback

Revert `f82abc9` to drop the landmark glyphs and `19dd221` to restore the previous rolling map. Both are isolated from the waitlist API, the JotForm CTA and the Product Demo.

## Next action

Implement slice S1 of the expanded plan — the shared status badges from section 2.2 and the evidence/source constructs from section 10 — because every later slice depends on them.
