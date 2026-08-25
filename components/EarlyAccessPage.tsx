"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ACCESS_WINDOW, COPY, type Lang } from "@/lib/copy";
import type { DemoSurface } from "@/lib/demo/features";
import type { ChatId } from "@/lib/demo/types";
import { DEMO_UI } from "@/lib/demo/ui";
import type { CityWeather } from "@/lib/weather";
import ChinaMap from "./ChinaMap";
import DemoFeatures from "./DemoFeatures";
import MobileShowcase from "./MobileShowcase";
import ProductDemo, { type DemoIntent } from "./ProductDemo";
import Simulator from "./Simulator";
import { ArrowRight } from "./icons";

const JOTFORM_URL = "https://form.jotform.com/cjttttt/visepanda-early-access";

export default function EarlyAccessPage({ weather }: { weather: CityWeather[] }) {
  const [lang, setLang] = useState<Lang>("en");
  const [demoFullscreen, setDemoFullscreen] = useState(false);
  const [demoIntent, setDemoIntent] = useState<DemoIntent | null>(null);
  const nonce = useRef(0);

  const openDemo = useCallback((intent: { surface: DemoSurface; chatId?: ChatId }, immersive = true) => {
    nonce.current += 1;
    setDemoIntent({ ...intent, nonce: nonce.current });
    if (immersive) setDemoFullscreen(true);
    else document.getElementById("product-demo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Keep the document language in sync so :lang() rules and screen readers agree.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = COPY;

  return (
    <div lang={lang}>
      <nav className="nav">
        <div className="nav-left">
          <span className="wordmark">{t.brand}</span>
          <span className="badge">{t.nav.badge[lang]}</span>
        </div>
        <div className="nav-right">
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label={lang === "en" ? "Switch to Chinese" : "切换到英文"}
          >
            {t.nav.langToggle[lang]}
          </button>
          <button type="button" className="pill-button small ghost nav-demo" onClick={() => openDemo({ surface: "ask", chatId: "shanghai" })}>
            {DEMO_UI.shell.openDemo[lang]}
          </button>
          <a href={JOTFORM_URL} target="_blank" rel="noreferrer" className="pill-button small nav-cta">
            {t.nav.cta[lang]}
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy"><h1 className="display">{t.hero.title[lang]}</h1><p className="hero-lede">{t.hero.lede[lang]}</p><p className="hero-note"><span className="dot" />{t.hero.note[lang]}</p><div className="hero-actions"><a href={JOTFORM_URL} target="_blank" rel="noreferrer" className="pill-button hero-cta">{t.nav.cta[lang]} <ArrowRight /></a><button type="button" className="pill-button ghost hero-demo" onClick={() => openDemo({ surface: "ask", chatId: "shanghai" })}>{DEMO_UI.shell.openDemo[lang]} <ArrowRight /></button></div></div>
          <ChinaMap lang={lang} weather={weather} />
        </div>
      </header>

      <DemoFeatures lang={lang} onOpen={(intent) => openDemo(intent)} />

      <ProductDemo
        lang={lang}
        fullscreen={demoFullscreen}
        onFullscreen={setDemoFullscreen}
        intent={demoIntent}
      />
      <Simulator lang={lang} />
      <MobileShowcase lang={lang} />

      <section className="closing">
        <div className="wrap">
          <div className="closing-card">
            <h2 className="display">{t.closing.title[lang]}</h2>
            <p>{t.closing.lede[lang]}</p>
            <a href={JOTFORM_URL} target="_blank" rel="noreferrer" className="pill-button lilac">
              {t.nav.cta[lang]}
              <ArrowRight />
            </a>
            <p className="window">{ACCESS_WINDOW[lang]}</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span className="wordmark">{t.brand}</span>
          <span>
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights[lang]}
          </span>
          <a href="https://go2china.space">{t.footer.mainSite[lang]}</a>
          <a href="mailto:jtcao@go2china.space">{t.footer.contact[lang]}</a>
        </div>
      </footer>
    </div>
  );
}
