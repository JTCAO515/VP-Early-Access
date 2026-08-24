import { NextResponse } from "next/server";
import { saveSubmission } from "@/lib/providers";
import { rateLimit } from "@/lib/ratelimit";
import { parseSubmission } from "@/lib/validate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientKey(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  return (
    forwarded?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: Request) {
  if (!rateLimit(clientKey(req))) {
    return NextResponse.json({ error: "rate" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "email" }, { status: 400 });
  }

  const parsed = parseSubmission(body, {
    referrer: req.headers.get("referer") ?? "",
    userAgent: req.headers.get("user-agent") ?? "",
  });

  if (!parsed.ok) {
    // A honeypot hit is a bot. Answer 200 so it has nothing to tune against.
    if (parsed.reason === "honeypot") return NextResponse.json({ ok: true });
    return NextResponse.json({ error: "email" }, { status: 400 });
  }

  try {
    await saveSubmission(parsed.value);
  } catch (error) {
    // The address is logged so a provider outage never silently loses a signup.
    console.error("[waitlist:failed]", parsed.value.email, error);
    return NextResponse.json({ error: "server" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
