"use client";

import { useEffect, useState } from "react";
import { ACCESS_WINDOW, COPY, type Lang } from "@/lib/copy";
import type { CityWeather } from "@/lib/weather";
import ChinaMap from "./ChinaMap";
import ChatbotShowcase from "./ChatbotShowcase";
import MobileShowcase from "./MobileShowcase";
import Simulator from "./Simulator";
import { ArrowRight } from "./icons";

const JOTFORM_URL = "https://form.jotform.com/cjttttt/visepanda-early-access";

export default function EarlyAccessPage({ weather }: { weather: CityWeather[] }) {
  const [lang, setLang] = useState<Lang>("en");

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
          <a href={JOTFORM_URL} target="_blank" rel="noreferrer" className="pill-button small nav-cta">
            {t.nav.cta[lang]}
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-layout">
          <div className="hero-copy"><h1 className="display">{t.hero.title[lang]}</h1><p className="hero-lede">{t.hero.lede[lang]}</p><p className="hero-note"><span className="dot" />{t.hero.note[lang]}</p><a href={JOTFORM_URL} target="_blank" rel="noreferrer" className="pill-button hero-cta">{t.nav.cta[lang]} <ArrowRight /></a></div>
          <ChinaMap lang={lang} weather={weather} />
        </div>
      </header>

      <ChatbotShowcase lang={lang} />
      <section className="section profile-showcase"><div className="wrap"><h2 className="display">{lang === "zh" ? "越聊越懂你的旅行方式。" : "The more you talk, the better your trip fits."}</h2><p className="section-lede">{lang === "zh" ? "持续理解预算、节奏、步行强度、兴趣与同行人，把每次对话变成更贴合你的行程。" : "Budget, pace, walking intensity, interests and companions shape every next recommendation."}</p><div className="profile-tags"><span>{lang === "zh" ? "舒适节奏" : "Comfort pace"}</span><span>{lang === "zh" ? "预算优先" : "Budget aware"}</span><span>{lang === "zh" ? "文化与美食" : "Culture & food"}</span></div></div></section>
      <section className="section tools-showcase"><div className="wrap"><h2 className="display">{lang === "zh" ? "把旅途里的工具，放进同一个助手。" : "Put every on-trip tool in one assistant."}</h2><div className="tools-grid"><article>Translate<br /><small>TTS · STT · Image</small></article><article>{lang === "zh" ? "问路卡与叫车" : "Direction cards & rides"}<br /><small>{lang === "zh" ? "官方与合作渠道" : "Official and partner handoffs"}</small></article><article>{lang === "zh" ? "攻略整理与验证" : "Trip import & checks"}<br /><small>Text · image · PDF</small></article><article>{lang === "zh" ? "人工介入" : "Human support"}<br /><small>{lang === "zh" ? "带着当前行程求助" : "Help with your current trip"}</small></article></div></div></section>
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
