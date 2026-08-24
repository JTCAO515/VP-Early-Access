import type { WaitlistSubmission } from "../types";

const fields = ["EMAIL", "TIMING", "SOURCE", "FEATURE", "LANG", "SUBMITTED_AT"] as const;

function config(name: (typeof fields)[number]): string {
  const value = process.env[`JOTFORM_FIELD_${name}`]?.trim();
  if (!value) throw new Error(`jotform provider is missing JOTFORM_FIELD_${name}`);
  return value;
}

export async function saveToJotForm(entry: WaitlistSubmission): Promise<void> {
  const apiKey = process.env.JOTFORM_API_KEY?.trim();
  const formId = process.env.JOTFORM_FORM_ID?.trim();
  if (!apiKey || !formId) throw new Error("jotform provider is missing JOTFORM_API_KEY or JOTFORM_FORM_ID");

  const body = new URLSearchParams();
  const values = [entry.email, entry.timing, entry.source, entry.feature, entry.lang, entry.submittedAt];
  fields.forEach((field, index) => body.set(`submission[${config(field)}]`, values[index]));

  const response = await fetch(`https://api.jotform.com/form/${formId}/submissions`, {
    method: "POST",
    headers: { APIKEY: apiKey, "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });
  const data = await response.json().catch(() => null) as { responseCode?: number } | null;
  if (!response.ok || data?.responseCode !== 200) throw new Error(`jotform write failed: ${response.status}`);
}
