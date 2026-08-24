import type { WaitlistSubmission } from "../types";
import { saveToFeishu } from "./feishu";

export type ProviderName = "console" | "feishu" | "webhook";

function providerName(): ProviderName {
  const raw = process.env.WAITLIST_PROVIDER?.trim().toLowerCase();
  return raw === "feishu" || raw === "webhook" ? raw : "console";
}

async function saveToWebhook(entry: WaitlistSubmission): Promise<void> {
  const url = process.env.WAITLIST_WEBHOOK_URL;
  if (!url) throw new Error("webhook provider is missing WAITLIST_WEBHOOK_URL");

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(entry),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`webhook write failed: ${res.status}`);
}

export async function saveSubmission(entry: WaitlistSubmission): Promise<ProviderName> {
  const name = providerName();
  switch (name) {
    case "feishu":
      await saveToFeishu(entry);
      break;
    case "webhook":
      await saveToWebhook(entry);
      break;
    default:
      // Dev default: the page works with zero configuration.
      console.info("[waitlist:console]", JSON.stringify(entry));
  }
  return name;
}
