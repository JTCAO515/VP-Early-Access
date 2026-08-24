# HANDOFF — VP Early Access

Machine-authoritative source: [`docs/handoff.json`](docs/handoff.json). This file
is the human-readable view of the same record.

- **Objective** — a public early access page for VisePanda that collects an email
  plus at most three qualifying answers into a mainland-accessible table, and
  states that the iOS and Android apps are in development.
- **Owner** — JTCAO515
- **Phase** — implementation complete, blocked on operator credentials.
- **Rollback** — set `WAITLIST_PROVIDER=console` and redeploy.

## Reading order

1. `README.md`
2. `docs/setup-feishu.md`
3. `lib/copy.ts`
4. `app/api/waitlist/route.ts`
5. `lib/providers/index.ts`

## Frozen contracts

Change these only with a matching update to `docs/handoff.json`.

- `POST /api/waitlist` accepts `{ email, timing?, source?, feature?, lang?, company? }`
  and returns `{ ok: true }` or `{ error: "email" | "rate" | "server" }`.
- A honeypot hit returns `200 { ok: true }` and is never persisted.
- Answer values absent from `QUESTIONS` in `lib/copy.ts` are dropped to `""`.
- The Feishu Bitable table exposes exactly these text columns: `Email`, `Timing`,
  `Source`, `Feature`, `Lang`, `Referrer`, `User Agent`, `Submitted At`.
- Secrets travel only through environment variables.

## Verification status

| Check | Result |
| --- | --- |
| `pnpm typecheck` | passed |
| `pnpm build` | passed |
| `POST /api/waitlist` — valid / bad email / honeypot / unknown answer / rate limit | passed (200 / 400 / 200 unpersisted / dropped / 429) |
| Browser at 1440×900 and 375×812, EN and ZH | passed, no console errors, no horizontal overflow |
| Feishu provider end-to-end write | **not run** — blocked on operator credentials |

## Open operator actions

1. Create the Feishu app and Bitable table per `docs/setup-feishu.md`, then set
   the six environment variables in the hosting dashboard. Do not paste the App
   Secret into chat or into this repository.
2. Set `ACCESS_WINDOW` in `lib/copy.ts` to a real launch window, or confirm it
   stays non-binding. This is a public promise about the launch date, which is
   why it was not invented here.
3. Choose hosting with mainland reachability in mind — Vercel's default domains
   are not reliably reachable from the mainland, and the storage provider choice
   does not change that.
4. Confirm the footer contact address (currently `hello@visepanda.com`) and the
   production domain for `NEXT_PUBLIC_SITE_URL`.

## Known risks

- The rate limiter is in-memory and per instance; it resets on deploy and does
  not coordinate across serverless instances.
- The page carries no social proof yet. None was fabricated — add a real signup
  counter or early-user quotes once they exist.
- `components/Constellation.tsx` deliberately draws no national outline. See the
  note in `README.md` before replacing it with a map image.

## Next action

Operator completes `docs/setup-feishu.md`, sets `WAITLIST_PROVIDER=feishu`, and
confirms one real signup lands in the Bitable table.
