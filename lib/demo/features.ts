import type { ChatId, Localized } from "./types";

export type DemoSurface = "today" | "ask" | "copilot" | "tools" | "explore" | "user";

/** Capability cards shown on the marketing page; each one opens the demo where it lives. */
export type Feature = {
  id: string;
  glyph: string;
  title: Localized;
  body: Localized;
  proof: Localized;
  surface: DemoSurface;
  chatId?: ChatId;
};

export const FEATURES: Feature[] = [
  {
    id: "diff",
    glyph: "diff",
    title: { en: "Nothing changes until you say so", zh: "你不点头，行程就不会变" },
    body: {
      en: "Every edit arrives as a proposal that names what triggered it — your message, your profile, a check, or a condition outside the app. You accept or reject each one.",
      zh: "每一处修改都以提案出现，并写明触发来源——你的消息、你的画像、一次检查，还是应用之外的条件。你逐条接受或拒绝。",
    },
    proof: { en: "Shanghai · 3 changes waiting", zh: "上海 · 3 处改动待确认" },
    surface: "ask", chatId: "shanghai",
  },
  {
    id: "evidence",
    glyph: "visa",
    title: { en: "Every number carries its source", zh: "每个数字都带着来源" },
    body: {
      en: "Prices, opening hours, payment rules and visa answers all show where they came from and when they were last rechecked. Stale facts are marked, not quietly reused.",
      zh: "价格、开放时间、支付规则和签证结论都标明出处与上次复核时间。过期的信息会被标出来，而不是被悄悄继续使用。",
    },
    proof: { en: "Official · Platform · Your upload", zh: "官方 · 平台 · 你上传" },
    surface: "explore",
  },
  {
    id: "unknown",
    glyph: "alert",
    title: { en: "It says when it doesn't know", zh: "不知道的时候会直说" },
    body: {
      en: "When an answer can't be confirmed, you get the gap named, the official channel that decides it, and a next step you can actually take — instead of a confident guess.",
      zh: "无法确认时，会明确说出缺口、给出真正能裁定的官方渠道，以及你可以执行的下一步——而不是给一个听起来很确定的猜测。",
    },
    proof: { en: "Delay compensation · cannot confirm", zh: "晚点补偿 · 无法确认" },
    surface: "ask", chatId: "rescue",
  },
  {
    id: "memory",
    glyph: "human",
    title: { en: "Your pace, remembered", zh: "你的节奏，它记得" },
    body: {
      en: "Budget, walking range, start time, hotel style, allergies. Each memory shows its source, its confidence, and the suggestions it has already rewritten — and you can forget any of it.",
      zh: "预算、步行范围、出发时间、酒店偏好、过敏。每条记忆都显示来源、置信度，以及它已经改写过哪些建议——任何一条你都可以让它忘记。",
    },
    proof: { en: "12 memory items · peanut is a hard constraint", zh: "12 条记忆 · 花生是硬约束" },
    surface: "copilot",
  },
  {
    id: "tools",
    glyph: "translate",
    title: { en: "The errands, handled in place", zh: "杂事在行程里就办了" },
    body: {
      en: "Menu reading, a Chinese ordering card, a pickup point, visa rules, an eSIM, and a support packet you can hand to a human. Each one states plainly what it does not claim.",
      zh: "读菜单、生成中文点菜卡、确认上车点、查签证规则、办 eSIM，以及一份能直接交给人工的求助包。每个工具都写明自己不声明什么。",
    },
    proof: { en: "5 tools · 36 screens", zh: "5 个工具 · 36 个子屏" },
    surface: "tools",
  },
  {
    id: "recovery",
    glyph: "clock",
    title: { en: "A plan for when it breaks", zh: "出问题时也有安排" },
    body: {
      en: "Delays, closures, queues, someone feeling unwell. Today shows the next step now, and a recovery path for each of those — each one still going through the same confirmation.",
      zh: "延误、闭馆、排队过长、身体不适。Today 给出此刻的下一步，以及这四种情况各自的恢复路径——而且同样要经过确认才生效。",
    },
    proof: { en: "9 checks · 2 not workable", zh: "9 项检查 · 2 项不可行" },
    surface: "today",
  },
];

export const FEATURES_COPY = {
  eyebrow: { en: "What the demo shows", zh: "Demo 展示了什么" },
  title: { en: "Six things a trip planner has to get right.", zh: "旅行规划必须做对的六件事。" },
  lede: {
    en: "Each one is a working state in the demo, not a promise. Open the card to land where it lives.",
    zh: "每一条在 Demo 里都是可操作的真实状态，不是承诺。点开卡片直接落到它所在的位置。",
  },
  open: { en: "Open in the demo", zh: "在 Demo 中打开" },
};
