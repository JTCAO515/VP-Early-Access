import type { Lang } from "@/lib/copy";

export default function ChatbotShowcase({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return <section className="section chatbot-showcase"><div className="wrap"><h2 className="display">{zh ? "把一天的上海，放进同一段对话。" : "Plan one day in Shanghai in one conversation."}</h2><div className="chatbot-grid"><article className="chat-canvas"><small>Trip Canvas · Day 01</small><strong>{zh ? "上海" : "Shanghai"}</strong><p>09:00 · {zh ? "外滩" : "The Bund"}</p><p>12:00 · {zh ? "豫园" : "Yu Garden"}</p><p>16:30 · {zh ? "武康路" : "Wukang Road"}</p></article><article className="chat-dialog"><small>VisePanda Chat</small><p className="user">{zh ? "帮我安排上海一日游，节奏不要太赶。" : "Plan one relaxed day in Shanghai."}</p><p className="assistant">{zh ? "已把外滩、豫园和武康路排进同一条顺路行程。" : "The Bund, Yu Garden and Wukang Road now sit in one sensible route."}</p></article></div></div></section>;
}
