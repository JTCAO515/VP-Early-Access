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
      <section className="section profile-showcase"><div className="wrap"><h2 className="display">{lang === "zh" ? "越聊越懂你的旅行方式。" : "The more you talk, the better your trip fits."}</h2><p className="section-lede">{lang === "zh" ? "持续理解预算、节奏、步行强度、兴趣与同行人。" : "Budget, pace, walking intensity, interests and companions shape every next recommendation."}</p><div className="web-shot profile-shot"><header><span>VisePanda Profile</span><small>Updated from your conversations</small></header><aside>{lang === "zh" ? "旅行偏好" : "Travel preferences"}<b>{lang === "zh" ? "上海 · 7 天" : "Shanghai · 7 days"}</b></aside><main><h3>{lang === "zh" ? "你的旅行画像" : "Your travel profile"}</h3><div className="profile-metrics"><span>{lang === "zh" ? "舒适节奏" : "Comfort pace"}<b>72%</b></span><span>{lang === "zh" ? "预算优先" : "Budget aware"}<b>68%</b></span><span>{lang === "zh" ? "文化与美食" : "Culture & food"}<b>84%</b></span></div><p>{lang === "zh" ? "今天的建议会以较少步行、更多本地餐食和灵活交通为优先。" : "Today’s plan prioritizes less walking, local food, and flexible transport."}</p></main></div></div></section>
      <section className="section tools-showcase"><div className="wrap"><h2 className="display">{lang === "zh" ? "把旅途里的工具，放进同一个助手。" : "Put every on-trip tool in one assistant."}</h2><div className="web-shot tools-shot"><header><span>VisePanda Tools</span><small>{lang === "zh" ? "旅行执行工具箱" : "Travel execution toolkit"}</small></header><nav><b>Translate</b><b>{lang === "zh" ? "问路" : "Directions"}</b><b>{lang === "zh" ? "行程导入" : "Import"}</b><b>{lang === "zh" ? "人工支持" : "Human support"}</b></nav><main><article><strong>{lang === "zh" ? "图片识别翻译" : "Image translation"}</strong><p>TTS · STT · Camera</p></article><article><strong>{lang === "zh" ? "问路卡与叫车" : "Direction card & ride"}</strong><p>{lang === "zh" ? "把目的地、中文地址与下一步放在同一张卡片。" : "Keep destination, Chinese address and next step together."}</p></article><article><strong>{lang === "zh" ? "攻略整理与验证" : "Import & verify"}</strong><p>Text · Image · PDF</p></article></main></div></div></section>
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
