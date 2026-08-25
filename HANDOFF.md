# HANDOFF — VP Early Access hero map and product demo rebuild

- Objective: make the hero map read as a real reference map, and rebuild the interactive product Demo on a shared fixture layer so every claim carries a state, a source and a recheck time.
- Public CTA: unchanged — every Early Access link still points directly to `https://form.jotform.com/cjttttt/visepanda-early-access`.
- Truth boundary: unchanged and now enforced in the UI. Every conversation, price, review and account is a fixed sample; every tool states what it does not claim; no Canvas change applies without confirmation.

## Frozen contracts preserved

- No change to the waitlist API, validation, rate limit, form, simulator section, mobile showcase or the JotForm CTA.
- No secret or provider key was added.
- `lib/map-geometry.ts` stays generated-only from `scripts/build-map.mjs`.
- City markers project against the admin-0 bounds, so the 37 hero points did not move.

## New contracts

- `lib/demo/` is the single source of truth for the Demo. Superseded fixtures were deleted from `lib/copy.ts`; do not put Demo content back there.
- Every Demo claim renders through `StateBadge` / `ConfidenceTag` / `EvidenceChip`. A number without a source and a recheck time is a bug.
- No Canvas change may apply without passing the diff. There is no silent-update path.
- Hard constraints (peanut allergy, step-free access) are never overridden automatically.
- Each Copilot tool renders its own boundary line. Ride hailing must keep stating that it claims no partnership and requests no car.
- Demo art is stroke-only SVG in `components/demo/art.tsx`, 32x32 for glyphs and 64x32 for scenes. No bitmaps, no third-party imagery.

## Delivered

**Hero map (`19dd221`, `f82abc9`)**

- 31 admin-1 province shapes with dotted fill and dashed borders, four national outlines on top, a graticule clipped to the silhouette.
- The plate is static; a lens follows a fine pointer, magnifies 2.6x and reveals province, city and landmark labels. Touch devices keep the static plate.
- 37 hand-drawn landmark glyphs in `lib/landmarks.ts`, used by both the lens and the callout.

**Product demo (`593d76b`)**

- Eleven chats, four to eight turns each, with clarifying chips, evidence chips, confidence levels, memory recall that links into Copilot, and a three-part fallback when an answer cannot be confirmed. New chats: Xi'an timed entry, travelling with parents, first day on the ground, delay recovery, tighter budget.
- Trip Canvas with the full node schema, read identically by the timeline, the schematic map and the bookings list.
- Diff and confirm, with the trigger named on every change; Canvas versions with per-version difference summaries.
- Copilot split into Memory and Tools. Memory carries source, state, confidence, last update and the suggestions each item already rewrote, plus forget, pause, export and a before/after preview. **Tools moved into Copilot at the operator's request** — translation, ride hailing, visa, network and human handoff, 36 screens, each with its own boundary statement. Explore no longer has a Tools mode.
- Explore with price, international-card and English-service filters, self-drawn covers, and payment, language and entry broken out field by field.
- Today with the next step, current conditions, four recovery paths and the nine simulator checks with alternatives for every failure.
- User gains Travel Profile, Preferences and Privacy & Data.

## Verification

- `pnpm typecheck` — passed.
- `pnpm build` — passed.
- Hero map, desktop and mobile, both languages — passed.
- All 37 landmark glyphs reviewed on a rendered contact sheet — passed; five redrawn and re-reviewed.
- Demo interaction pass at 1440×900 in English and Chinese — passed: 11 chats, diff with three entries and per-entry accept/reject, Copilot Tools with five tools (translation 7 screens, ride hailing 8 screens verified), Explore POI drawer with four matrices, Today with four recovery paths and nine checks summarised 2/4/3, User with five tabs.
- Demo at 375×812 — passed, no horizontal overflow.
- Browser console on a fresh load and after interaction — no errors.
- Hero map on production — passed (`earlyaccess.go2china.space` returns 200 with 31 province paths and the `lm-*` symbols).
- Demo rebuild on production — **not run** at the time of writing; verify after the deploy.
- `prefers-reduced-motion` regression — **not run**.
- 430×932 viewport — **not run**.
- Frozen waitlist API regression — **not run**; untouched by both slices.
- Live JotForm submission — **not run**.

## Known gaps

- S7: the import pipeline shows all four stages in conversation, but you cannot yet edit an individual extracted item.
- S13: empty, loading, filter-no-result and cannot-confirm states are done; partial-failure and offline degradation are not.

## Risks

- `lib/map-geometry.ts` is about 43 KB gzipped. Raise `EPSILON` in `scripts/build-map.mjs` if the hero payload becomes a problem.
- Adding a chat means adding a `CanvasDoc` and a conversation together, or the Canvas falls back to an empty document.
- Landmark and POI glyphs are stylised interpretations, never photographs.
- Moving tools into Copilot removed Explore's Tools mode. If both are wanted, add a second entry point rather than a copy.

## Operator actions

1. Confirm the JotForm public URL remains current.
2. Confirm that execution tools belong in Copilot only, or say whether Explore should link to them too.
3. Decide whether S7 and S13 are worth another slice.

## Rollback

Revert `593d76b` for the demo rebuild, `f82abc9` for the landmark glyphs and `19dd221` for the map. All three are isolated from the waitlist API and the JotForm CTA.

## Next action

Verify the demo rebuild on production once the deploy completes, then close out S7 and S13 if the operator wants them.
