# HANDOFF — VP Early Access

- Objective: bilingual Early Access page with an interactive 12-city China map and a server-owned JotForm waitlist submission path.
- Branch: feature branch required before PR; never push this work directly to `main`.
- Rollback: set `WAITLIST_PROVIDER=console` and redeploy; revert the map commit to restore the former static constellation.

## Frozen contracts

- `POST /api/waitlist` request/response, honeypot behavior, allowlisted answers, two-step form and server-only secrets remain unchanged.
- JotForm is called only from `lib/providers/jotform.ts`; no API key belongs in browser code, docs, or git.

## Current implementation

- `scripts/build-map.mjs` converted Natural Earth 1:50m CHN/TWN/HKG/MAC geometry into committed `lib/map-geometry.ts` paths.
- `ChinaMap` focuses twelve defined cities, pauses on click, observes reduced motion and fetches weather server-side through cached Open-Meteo data.
- JotForm provider and setup guide are present; `console` remains the zero-config default.

## Verification

- `pnpm check` — passed.
- API regression — passed: valid 200, invalid email 400, honeypot 200, invalid option 200, sixth request 429 after a fresh server restart.
- Browser acceptance — not yet run in this round.
- JotForm live write — not run; operator must set the API key plus form/question-ID environment variables.

## Operator actions

1. Provide the JotForm API key and form/question IDs only through hosting environment variables.
2. Bind `earlyaccess.go2china.space` DNS and Vercel domain.
3. Decide whether to send a confirmation email; this build only records a signup.

## Next action

Run the frozen API and desktop/mobile browser acceptance matrix, then commit from a feature branch and open a PR.
