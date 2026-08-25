"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/copy";
import { TOOLS, type ToolId } from "@/lib/demo/tools";
import { DEMO_UI } from "@/lib/demo/ui";
import { ToolGlyph } from "./art";

type Props = { lang: Lang; focusTool: ToolId | null; onToast: (message: string) => void };

export default function ToolsSurface({ lang, focusTool, onToast }: Props) {
  const ui = DEMO_UI.copilot;
  const [toolId, setToolId] = useState<ToolId>(focusTool ?? "translate");
  const [screenId, setScreenId] = useState<string>(TOOLS[0].screens[0].id);

  useEffect(() => {
    if (!focusTool) return;
    setToolId(focusTool);
    const tool = TOOLS.find((item) => item.id === focusTool);
    if (tool) setScreenId(tool.screens[0].id);
  }, [focusTool]);

  const tool = TOOLS.find((item) => item.id === toolId) ?? TOOLS[0];
  const screen = tool.screens.find((item) => item.id === screenId) ?? tool.screens[0];

  return (
    <div className="demo-tools-page">
      <header>
        <div><small>Tools</small><h3>{ui.toolsTitle[lang]}</h3></div>
        <span className="vp-ability">{DEMO_UI.ability.tools[lang]}</span>
      </header>

      <div className="vp-tools">
        <nav className="vp-tool-list">
          {TOOLS.map((item) => (
            <button
              key={item.id}
              className={item.id === toolId ? "active" : ""}
              onClick={() => { setToolId(item.id); setScreenId(item.screens[0].id); }}
            >
              <ToolGlyph name={item.glyph} />
              <strong>{item.title[lang]}</strong>
              <small>{item.lede[lang]}</small>
            </button>
          ))}
        </nav>

        <section className="vp-tool-detail">
          <header>
            <ToolGlyph name={tool.glyph} />
            <div>
              <h4>{tool.title[lang]}</h4>
              <p>{tool.lede[lang]}</p>
            </div>
          </header>

          <div className="vp-tool-screens">
            {tool.screens.map((item) => (
              <button key={item.id} className={item.id === screen.id ? "active" : ""} onClick={() => setScreenId(item.id)}>
                {item.label[lang]}
              </button>
            ))}
          </div>

          <article className="vp-tool-screen">
            <strong>{screen.label[lang]}</strong>
            <p>{screen.body[lang]}</p>
            {screen.fields?.length ? (
              <dl>
                {screen.fields.map((field, index) => (
                  <div key={index}><dt>{field.k[lang]}</dt><dd>{field.v[lang]}</dd></div>
                ))}
              </dl>
            ) : null}
            {screen.note ? <p className="vp-tool-note">{screen.note[lang]}</p> : null}
            <button onClick={() => onToast(`${tool.title[lang]} · ${screen.label[lang]}`)}>
              {lang === "zh" ? "在 Demo 中执行" : "Run in the demo"}
            </button>
          </article>

          <p className="vp-tool-boundary"><b>{ui.boundary[lang]}</b>{tool.boundary[lang]}</p>
        </section>
      </div>
    </div>
  );
}
