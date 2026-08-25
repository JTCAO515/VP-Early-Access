"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PRODUCT_DEMO, type Lang } from "@/lib/copy";
import { CHATS } from "@/lib/demo/chats";
import type { ToolId } from "@/lib/demo/tools";
import type { ChatId } from "@/lib/demo/types";
import { DEMO_UI } from "@/lib/demo/ui";
import AskSurface from "./demo/AskSurface";
import CopilotSurface from "./demo/CopilotSurface";
import ExploreSurface from "./demo/ExploreSurface";
import TodaySurface from "./demo/TodaySurface";
import UserSurface from "./demo/UserSurface";

type Surface = "today" | "ask" | "copilot" | "explore" | "user";

const TOUR: Array<{ surface: Surface; chat?: ChatId; mode?: "memory" | "tools" }> = [
  { surface: "ask", chat: "shanghai" },
  { surface: "ask", chat: "shanghai" },
  { surface: "copilot", mode: "memory" },
  { surface: "ask", chat: "import" },
];

export default function ProductDemo({ lang }: { lang: Lang }) {
  const ui = PRODUCT_DEMO.ui;
  const [surface, setSurface] = useState<Surface>("ask");
  const [chatId, setChatId] = useState<ChatId>("shanghai");
  const [copilotMode, setCopilotMode] = useState<"memory" | "tools">("memory");
  const [focusMemory, setFocusMemory] = useState<string | null>(null);
  const [focusTool, setFocusTool] = useState<ToolId | null>(null);
  const [dishOpen, setDishOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [tourStep, setTourStep] = useState(-1);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const selectChat = (id: ChatId) => {
    setSurface("ask");
    setChatId(id);
    setDishOpen(false);
    setToast("");
  };

  const openMemory = (memoryId: string) => {
    setSurface("copilot");
    setCopilotMode("memory");
    setFocusMemory(memoryId);
  };

  const openTool = (toolId: string) => {
    setSurface("copilot");
    setCopilotMode("tools");
    setFocusTool(toolId as ToolId);
  };

  const runTour = (step: number) => {
    const target = TOUR[step];
    if (!target) return;
    setTourStep(step);
    setSurface(target.surface);
    if (target.chat) setChatId(target.chat);
    if (target.mode) setCopilotMode(target.mode);
  };

  return (
    <section className="section product-demo-section" id="product-demo">
      <div className="wrap">
        <h2 className="display">{ui.sectionTitle[lang]}</h2>
        <p className="section-lede">{ui.sectionLede[lang]}</p>

        <div className="demo-browser" aria-label="Interactive VisePanda product demo">
          <header className="demo-browser-bar">
            <span className="demo-browser-dots"><i /><i /><i /></span>
            <span className="demo-address">⌁ {PRODUCT_DEMO.address}</span>
            <span className="vp-fixture" title={DEMO_UI.fixtureLong[lang]}>{DEMO_UI.fixture[lang]}</span>
          </header>

          <div className="demo-app-shell">
            <aside className="demo-sidebar">
              <span className="demo-brand">VisePanda.</span>

              <nav className="demo-main-nav">
                <button className={surface === "today" ? "active" : ""} onClick={() => setSurface("today")}>
                  <span>◉</span>{DEMO_UI.today.title[lang]}
                </button>
                <button className={surface === "ask" ? "active" : ""} onClick={() => setSurface("ask")}>
                  <span>✦</span>{PRODUCT_DEMO.nav.ask[lang]}
                </button>
                <button className={surface === "copilot" ? "active" : ""} onClick={() => setSurface("copilot")}>
                  <span>◫</span>{PRODUCT_DEMO.nav.copilot[lang]}
                </button>
                <button className={surface === "explore" ? "active" : ""} onClick={() => setSurface("explore")}>
                  <span>◇</span>{PRODUCT_DEMO.nav.explore[lang]}
                </button>
              </nav>

              <div className="demo-chat-list">
                <small>{ui.chats[lang]}</small>
                {CHATS.map((chat) => (
                  <button
                    key={chat.id}
                    className={surface === "ask" && chatId === chat.id ? "active" : ""}
                    onClick={() => selectChat(chat.id)}
                  >
                    <b>{chat.title[lang]}</b>
                    <small>{chat.subtitle[lang]}</small>
                    <em>{chat.when[lang]}</em>
                  </button>
                ))}
              </div>

              <button className={surface === "user" ? "demo-user active" : "demo-user"} onClick={() => setSurface("user")}>
                <Image src="/assets/demo/michael-turner-avatar.png" alt="Michael Turner demo avatar" width={28} height={28} />
                {PRODUCT_DEMO.nav.user[lang]}
              </button>
            </aside>

            <main className="demo-workspace">
              {surface === "ask" ? (
                <AskSurface
                  lang={lang}
                  chatId={chatId}
                  onToast={setToast}
                  onOpenMemory={openMemory}
                  onOpenDishes={() => { setSurface("explore"); setDishOpen(true); }}
                  onOpenTool={openTool}
                />
              ) : null}

              {surface === "copilot" ? (
                <CopilotSurface
                  lang={lang}
                  mode={copilotMode}
                  setMode={setCopilotMode}
                  focusMemory={focusMemory}
                  focusTool={focusTool}
                  onToast={setToast}
                  onOpenCanvas={() => selectChat("shanghai")}
                />
              ) : null}

              {surface === "explore" ? (
                <ExploreSurface
                  lang={lang}
                  dishOpen={dishOpen}
                  setDishOpen={setDishOpen}
                  onToast={setToast}
                  onAsk={() => selectChat("shanghai")}
                />
              ) : null}

              {surface === "today" ? <TodaySurface lang={lang} onToast={setToast} /> : null}
              {surface === "user" ? <UserSurface lang={lang} onToast={setToast} /> : null}

              {toast ? <div className="demo-toast">{toast}</div> : null}
            </main>
          </div>

          <footer className="demo-status-bar">
            <span>{DEMO_UI.localTime[lang]}</span>
            <div className="vp-tour">
              <small>{DEMO_UI.tour.title[lang]}</small>
              {DEMO_UI.tour.steps.map((step, index) => (
                <button key={index} className={tourStep === index ? "active" : ""} onClick={() => runTour(index)}>
                  {index + 1}. {step[lang]}
                </button>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
