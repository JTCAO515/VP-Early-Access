import type { WaitlistSubmission } from "../types";

type TokenResponse = { code: number; msg: string; tenant_access_token?: string; expire?: number };

let cached: { token: string; expiresAt: number } | null = null;

function domain(): string {
  // open.feishu.cn -> mainland tenant, open.larksuite.com -> international tenant.
  return process.env.FEISHU_DOMAIN?.trim() || "open.feishu.cn";
}

async function tenantAccessToken(): Promise<string> {
  if (cached && Date.now() < cached.expiresAt) return cached.token;

  const res = await fetch(`https://${domain()}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      app_id: process.env.FEISHU_APP_ID,
      app_secret: process.env.FEISHU_APP_SECRET,
    }),
    cache: "no-store",
  });

  const data = (await res.json()) as TokenResponse;
  if (data.code !== 0 || !data.tenant_access_token) {
    throw new Error(`feishu auth failed: code=${data.code} msg=${data.msg}`);
  }

  // Refresh a minute early so an in-flight request never uses an expiring token.
  cached = {
    token: data.tenant_access_token,
    expiresAt: Date.now() + Math.max((data.expire ?? 7200) - 60, 60) * 1000,
  };
  return cached.token;
}

/** Every Bitable column below is a plain text field, so no type coercion is needed. */
export async function saveToFeishu(entry: WaitlistSubmission): Promise<void> {
  const appToken = process.env.FEISHU_BITABLE_APP_TOKEN;
  const tableId = process.env.FEISHU_BITABLE_TABLE_ID;
  if (!appToken || !tableId) {
    throw new Error("feishu provider is missing FEISHU_BITABLE_APP_TOKEN or FEISHU_BITABLE_TABLE_ID");
  }

  const token = await tenantAccessToken();
  const res = await fetch(
    `https://${domain()}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fields: {
          Email: entry.email,
          Timing: entry.timing,
          Source: entry.source,
          Feature: entry.feature,
          Lang: entry.lang,
          Referrer: entry.referrer,
          "User Agent": entry.userAgent,
          "Submitted At": entry.submittedAt,
        },
      }),
      cache: "no-store",
    },
  );

  const data = (await res.json()) as { code: number; msg: string };
  if (data.code !== 0) {
    // A stale cached token is the most common failure; drop it so the next call re-auths.
    if (data.code === 99991663 || data.code === 99991661) cached = null;
    throw new Error(`feishu bitable write failed: code=${data.code} msg=${data.msg}`);
  }
}
