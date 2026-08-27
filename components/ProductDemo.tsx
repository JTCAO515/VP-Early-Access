"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { COPY, PRODUCT_DEMO, type Lang } from "@/lib/copy";
import { CANVAS } from "@/lib/demo/canvas";
import { CHATS, CHAT_CONTEXT } from "@/lib/demo/chats";
import type { DemoSurface } from "@/lib/demo/features";
import type { ToolId } from "@/lib/demo/tools";
import type { ChatId } from "@/lib/demo/types";
import { DEMO_UI } from "@/lib/demo/ui";
import { ToolGlyph } from "./demo/art";
import AskSurface from "./demo/AskSurface";
import CopilotSurface from "./demo/CopilotSurface";
import DishDrawer from "./demo/DishDrawer";
import ExploreSurface from "./demo/ExploreSurface";
import TodaySurface from "./demo/TodaySurface";
import ToolsSurface from "./demo/ToolsSurface";
import UserSurface from "./demo/UserSurface";
import { StateBadge } from "./demo/parts";
import BrandLogo from "./BrandLogo";

export type DemoIntent = { surface: DemoSurface; chatId?: ChatId; nonce: number };

type Props = {
  lang: Lang;
  fullscreen: boolean;
  onFullscreen?: (value: boolean) => void;
  intent: DemoIntent | null;
  standalone?: boolean;
  onLanguageToggle?: () => void;
};

const NOOP_FULLSCREEN = () => {};

const TOUR: Array<{ surface: DemoSurface; chat?: ChatId; diff?: boolean }> = [
  { surface: "ask", chat: "shanghai" },
  { surface: "ask", chat: "shanghai", diff: true },
  { surface: "copilot" },
  { surface: "ask", chat: "import" },
];

const NAV: Array<{ id: DemoSurface; glyph: string }> = [
  { id: "today", glyph: "◉" },
  { id: "ask", glyph: "✦" },
  { id: "copilot", glyph: "◫" },
  { id: "tools", glyph: "⚒" },
  { id: "explore", glyph: "◇" },
];

const MOBILE_NAV: Array<{ id: DemoSurface; glyph: string }> = [...NAV, { id: "user", glyph: "○" }];

export default function ProductDemo({ lang, fullscreen, onFullscreen = NOOP_FULLSCREEN, intent, standalone = false, onLanguageToggle }: Props) {
  const ui = PRODUCT_DEMO.ui;
  const [surface, setSurface] = useState<DemoSurface>("ask");
  const [chatId, setChatId] = useState<ChatId>("shanghai");
  const [focusMemory, setFocusMemory] = useState<string | null>(null);
  const [focusTool, setFocusTool] = useState<ToolId | null>(null);
  const [dishOpen, setDishOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [tourStep, setTourStep] = useState(-1);
  const currentDoc = CANVAS[chatId];

  const navLabel: Record<DemoSurface, string> = {
    today: DEMO_UI.today.title[lang],
    ask: PRODUCT_DEMO.nav.ask[lang],
    copilot: PRODUCT_DEMO.nav.copilot[lang],
    tools: DEMO_UI.copilot.tools[lang],
    explore: PRODUCT_DEMO.nav.explore[lang],
    user: PRODUCT_DEMO.nav.user[lang],
  };

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(""), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const selectChat = useCallback((id: ChatId) => {
    setSurface("ask");
    setChatId(id);
    setDishOpen(false);
    setToast("");
    setTourStep(-1);
  }, []);

  // External deep links from the page's capability cards and the hero button.
  useEffect(() => {
    if (!intent) return;
    setSurface(intent.surface);
    if (intent.chatId) setChatId(intent.chatId);
    setDishOpen(false);
    setTourStep(-1);
  }, [intent]);

  const immersive = fullscreen || standalone;

  // Immersive mode locks the page behind it. The shareable page stays immersive.
  useEffect(() => {
    if (!immersive) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (standalone) return () => { document.body.style.overflow = previous; };
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onFullscreen(false); };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [immersive, standalone, onFullscreen]);

  const openMemory = (memoryId: string) => {
    setSurface("copilot");
    setFocusMemory(memoryId);
  };

  const openTool = (toolId: string) => {
    setSurface("tools");
    setFocusTool(toolId as ToolId);
  };

  const runTour = (step: number) => {
    const target = TOUR[step];
    if (!target) return;
    setTourStep(step);
    setSurface(target.surface);
    if (target.chat) setChatId(target.chat);
  };

  return (
    <section className={standalone ? "section product-demo-section demo-standalone" : "section product-demo-section"} id="product-demo">
      <div className={standalone ? "demo-standalone-inner" : "wrap"}>
        {standalone ? null : <h2 className="display">{ui.sectionTitle[lang]}</h2>}
        {standalone ? null : <p className="section-lede">{ui.sectionLede[lang]}</p>}

        <div className={immersive ? `demo-frame fullscreen${standalone ? " standalone" : ""}` : "demo-frame"}>
          <div className="demo-browser" aria-label="Interactive VisePanda product demo">
            <header className="demo-browser-bar">
              <span className="demo-browser-dots"><i /><i /><i /></span>
              <span className="demo-address"><ToolGlyph name="lock" />{PRODUCT_DEMO.address}</span>
              <div className="demo-bar-right">
                <span className="vp-fixture" title={DEMO_UI.fixtureLong[lang]}>{DEMO_UI.fixture[lang]}</span>
                {standalone ? (
                  <>
                    <button className="vp-demo-language" onClick={onLanguageToggle} aria-label={lang === "en" ? "Switch to Chinese" : "切换到英文"}>{COPY.nav.langToggle[lang]}</button>
                    <Link className="vp-demo-back" href="/">{DEMO_UI.shell.backToEarlyAccess[lang]}</Link>
                  </>
                ) : (
                  <button
                    className="vp-fullscreen"
                    onClick={() => onFullscreen(!fullscreen)}
                    aria-label={fullscreen ? DEMO_UI.shell.exitFullscreen[lang] : DEMO_UI.shell.fullscreen[lang]}
                  >
                    <ToolGlyph name={fullscreen ? "collapse" : "expand"} />
                    <span>{fullscreen ? DEMO_UI.shell.exitFullscreen[lang] : DEMO_UI.shell.fullscreen[lang]}</span>
                  </button>
                )}
              </div>
            </header>

            <div className="demo-app-shell">
              <aside className="demo-sidebar">
                <span className="demo-brand"><BrandLogo className="demo-brand-logo" size={30} /><span>VisePanda</span></span>

                <nav className="demo-main-nav">
                  {NAV.map((item) => (
                    <button
                      key={item.id}
                      className={surface === item.id ? "active" : ""}
                      onClick={() => setSurface(item.id)}
                    >
                      <span>{item.glyph}</span>{navLabel[item.id]}
                    </button>
                  ))}
                </nav>

                <div className="demo-chat-list">
                  <small>{ui.chats[lang]}</small>
                  <div className="demo-chat-scroll">
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
                </div>

                <button className={surface === "user" ? "demo-user active" : "demo-user"} onClick={() => setSurface("user")}>
                  <Image src="/assets/demo/michael-turner-avatar.png" alt="Michael Turner demo avatar" width={28} height={28} />
                  {navLabel.user}
                </button>
              </aside>

              <main className="demo-workspace">
                {surface === "ask" ? (
                  <AskSurface
                    lang={lang}
                    chatId={chatId}
                    onToast={setToast}
                    onOpenMemory={openMemory}
                    onOpenDishes={() => setDishOpen(true)}
                    onOpenTool={openTool}
                    forceDiff={tourStep === 1 && chatId === "shanghai"}
                  />
                ) : null}

                {surface === "copilot" ? (
                  <CopilotSurface
                    lang={lang}
                    focusMemory={focusMemory}
                    onToast={setToast}
                    onOpenCanvas={() => selectChat("shanghai")}
                  />
                ) : null}

                {surface === "tools" ? <ToolsSurface lang={lang} focusTool={focusTool} onToast={setToast} /> : null}

                {surface === "explore" ? (
                  <ExploreSurface lang={lang} onToast={setToast} onAsk={() => selectChat("shanghai")} />
                ) : null}

                {surface === "today" ? <TodaySurface lang={lang} onToast={setToast} /> : null}
                {surface === "user" ? <UserSurface lang={lang} onToast={setToast} /> : null}

                {dishOpen ? <DishDrawer lang={lang} onClose={() => setDishOpen(false)} onToast={setToast} /> : null}

                {toast ? <div className="demo-toast">{toast}</div> : null}
              </main>

              <nav className="demo-mobile-nav" aria-label={DEMO_UI.shell.mobileNav[lang]}>
                {MOBILE_NAV.map((item) => (
                  <button key={item.id} className={surface === item.id ? "active" : ""} onClick={() => setSurface(item.id)}>
                    <span>{item.glyph}</span><small>{navLabel[item.id]}</small>
                  </button>
                ))}
              </nav>
            </div>

            <footer className="demo-status-bar">
              <span className="vp-status-context">
                <b>{DEMO_UI.status.trip[lang]}</b>{currentDoc.title[lang]}
                <i>·</i><b>{DEMO_UI.status.context[lang]}</b>{CHAT_CONTEXT[chatId][lang]}
                <i>·</i>{DEMO_UI.localTime[lang]}{fullscreen && !standalone ? ` · ${DEMO_UI.shell.escHint[lang]}` : ""}
              </span>
              <div className="vp-state-legend">
                <small>{DEMO_UI.status.states[lang]}</small>
                {(["confirmed", "proposed", "inferred", "recheck"] as const).map((state) => <StateBadge key={state} state={state} lang={lang} />)}
              </div>
              <div className="vp-tour">
                <small>{DEMO_UI.tour.title[lang]}</small>
                {DEMO_UI.tour.steps.map((step, index) => (
                  <button key={index} className={tourStep === index ? "active" : ""} aria-current={tourStep === index ? "step" : undefined} onClick={() => runTour(index)}>
                    {index + 1}. {step[lang]}
                  </button>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
