/**
 * In-memory sliding window, scoped to one server instance.
 *
 * Enough to stop a casual script against a pre-launch page. It resets on deploy
 * and does not coordinate across serverless instances — swap in Upstash Redis
 * if the page ever takes real traffic.
 */
const WINDOW_MS = 60_000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

export function rateLimit(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return true;
}
