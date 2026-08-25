"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/copy";
import { MEMORY, MEMORY_EXPORT, MEMORY_PREVIEW } from "@/lib/demo/memory";
import { TOOLS, type ToolId } from "@/lib/demo/tools";
import { DEMO_UI } from "@/lib/demo/ui";
import { ToolGlyph } from "./art";
import { ConfidenceTag, StateBadge } from "./parts";

type Props = {
  lang: Lang;
  mode: "memory" | "tools";
  setMode: (mode: "memory" | "tools") => void;
  focusMemory: string | null;
  focusTool: ToolId | null;
  onToast: (message: string) => void;
  onOpenCanvas: () => void;
};

export default function CopilotSurface({ lang, mode, setMode, focusMemory, focusTool, onToast, onOpenCanvas }: Props) {
  const ui = DEMO_UI.copilot;
  const [forgotten, setForgotten] = useState<string[]>([]);
  const [paused, setPaused] = useState(false);
  const [preview, setPreview] = useState(false);
  const [exporting, setExporting] = useState(false);
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
    <div className="demo-copilot">
      <header>
        <div>
          <small>VisePanda Copilot</small>
          <h3>{mode === "memory" ? ui.memoryTitle[lang] : ui.toolsTitle[lang]}</h3>
        </div>
        <div className="explore-mode-switch">
          <button className={mode === "memory" ? "active" : ""} onClick={() => setMode("memory")}>{ui.memory[lang]}</button>
          <button className={mode === "tools" ? "active" : ""} onClick={() => setMode("tools")}>{ui.tools[lang]}</button>
        </div>
      </header>

      {mode === "memory" ? (
        <div className="vp-memory">
          {paused ? <p className="vp-banner">{ui.paused[lang]}</p> : null}

          <div className="vp-memory-grid">
            {MEMORY.map((item) => {
              const gone = forgotten.includes(item.id);
              return (
                <article
                  key={item.id}
                  className={`vp-memory-item${item.hard ? " hard" : ""}${gone ? " gone" : ""}${focusMemory === item.id ? " focus" : ""}`}
                >
                  <header>
                    <small>{item.dimension[lang]}</small>
                    <StateBadge state={item.state} lang={lang} />
                  </header>
                  <strong>{item.value[lang]}</strong>
                  {item.fill !== undefined ? <i className="vp-memory-bar"><b style={{ width: `${item.fill}%` }} /></i> : null}
                  {item.hard ? <p className="vp-hard">{ui.hard[lang]}</p> : null}
                  <ConfidenceTag level={item.confidence} lang={lang} />
                  <dl>
                    <div><dt>{ui.source[lang]}</dt><dd>{item.sourceDetail[lang]}</dd></div>
                    <div><dt>{ui.updated[lang]}</dt><dd>{item.updated[lang]}</dd></div>
                    <div><dt>{ui.impact[lang]}</dt><dd>{item.impact.map((line) => line[lang]).join(" · ")}</dd></div>
                  </dl>
                  <div className="vp-memory-actions">
                    <button onClick={() => onToast(item.value[lang])}>{ui.confirm[lang]}</button>
                    <button
                      onClick={() => {
                        setForgotten((value) => (gone ? value.filter((id) => id !== item.id) : [...value, item.id]));
                        if (!gone) onToast(ui.forgotten[lang]);
                      }}
                    >
                      {ui.forget[lang]}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="vp-memory-governance">
            <button onClick={() => { setPaused((value) => !value); onToast(paused ? ui.resume[lang] : ui.paused[lang]); }}>
              {paused ? ui.resume[lang] : ui.pause[lang]}
            </button>
            <button onClick={() => setExporting((value) => !value)}>{ui.exportTitle[lang]}</button>
            <button onClick={() => setPreview((value) => !value)}>{ui.preview[lang]}</button>
          </section>

          {exporting ? (
            <section className="vp-export">
              <small>{ui.exportBody[lang]}</small>
              <pre>{MEMORY_EXPORT}</pre>
            </section>
          ) : null}

          {preview ? (
            <section className="vp-preview">
              <header><b>{MEMORY_PREVIEW.title[lang]}</b></header>
              <div className="vp-preview-cols">
                <div>
                  <small>{ui.before[lang]}</small>
                  <ul>{MEMORY_PREVIEW.before.map((line, index) => <li key={index}>{line[lang]}</li>)}</ul>
                </div>
                <div>
                  <small>{ui.after[lang]}</small>
                  <ul>{MEMORY_PREVIEW.after.map((line, index) => <li key={index}>{line[lang]}</li>)}</ul>
                </div>
              </div>
              <div className="vp-preview-deltas">
                {MEMORY_PREVIEW.deltas.map((delta) => (
                  <span key={delta.label.en}><b>{delta.label[lang]}</b>{delta.from} → {delta.to}</span>
                ))}
              </div>
              <button onClick={onOpenCanvas}>{ui.openCanvas[lang]}</button>
            </section>
          ) : null}
        </div>
      ) : (
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
      )}
    </div>
  );
}
