import { QUESTIONS } from "./copy";
import type { WaitlistSubmission } from "./types";

/**
 * Deliberately permissive: the goal is to reject typos and obvious junk, not to
 * be a spec-complete RFC 5322 parser. Anything stricter starts rejecting real
 * addresses, which costs more than it saves on a waitlist.
 */
const EMAIL = /^[^\s@,;]+@[^\s@,;]+\.[a-z]{2,}$/i;

const ALLOWED: Record<string, Set<string>> = Object.fromEntries(
  QUESTIONS.map((q) => [q.id, new Set(q.options.map((o) => o.value))]),
);

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL.test(value.trim());
}

export type ParseResult =
  | { ok: true; value: WaitlistSubmission }
  | { ok: false; reason: "email" | "honeypot" };

/** Answers are dropped rather than rejected when they are not a known option. */
function pickAnswer(id: string, raw: unknown): string {
  return typeof raw === "string" && ALLOWED[id]?.has(raw) ? raw : "";
}

export function parseSubmission(
  body: Record<string, unknown>,
  meta: { referrer: string; userAgent: string },
): ParseResult {
  // Honeypot: a real browser leaves this hidden field empty.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return { ok: false, reason: "honeypot" };
  }
  if (!isValidEmail(body.email)) {
    return { ok: false, reason: "email" };
  }
  return {
    ok: true,
    value: {
      email: (body.email as string).trim().toLowerCase(),
      timing: pickAnswer("timing", body.timing),
      source: pickAnswer("source", body.source),
      feature: pickAnswer("feature", body.feature),
      lang: body.lang === "zh" ? "zh" : "en",
      referrer: meta.referrer.slice(0, 300),
      userAgent: meta.userAgent.slice(0, 300),
      submittedAt: new Date().toISOString(),
    },
  };
}
