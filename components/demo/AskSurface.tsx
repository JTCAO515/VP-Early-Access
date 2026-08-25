"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/copy";
import { CANVAS } from "@/lib/demo/canvas";
import { CONVERSATIONS } from "@/lib/demo/chats";
import { DEMO_UI } from "@/lib/demo/ui";
import type { CanvasDay, CanvasNode, ChatId, Localized } from "@/lib/demo/types";
import { ConfidenceTag, EvidenceRow, StateBadge } from "./parts";

type Decision = "accepted" | "rejected";
type Tab = "timeline" | "map" | "bookings";

type Props = {
  lang: Lang;
  chatId: ChatId;
  onToast: (message: string) => void;
  onOpenMemory: (memoryId: string) => void;
  onOpenDishes: () => void;
  onOpenTool: (toolId: string) => void;
};

const KIND_GLYPH: Record<CanvasNode["kind"], string> = {
  sight: "◇", food: "◍", transit: "→", stay: "▤", task: "✓",
};

/** Reveal turns up to and including the next one that offers clarifying chips. */
function nextStop(turns: { chips?: Localized[] }[], from: number) {
  for (let i = from; i < turns.length; i += 1) {
    if (turns[i].chips) return i + 1;
  }
  return turns.length;
}

/**
 * Every chat opens on at least two exchanges, so a visitor sees a conversation
 * rather than a single question. Always end on an assistant turn.
 */
function openingShown(turns: Array<{ role: "user" | "assistant"; chips?: Localized[] }>) {
  let shown = Math.min(turns.length, Math.max(nextStop(turns, 0), 4));
  if (turns[shown - 1]?.role === "user" && shown < turns.length) shown += 1;
  return shown;
}

export default function AskSurface({ lang, chatId, onToast, onOpenMemory, onOpenDishes, onOpenTool }: Props) {
  const doc = CANVAS[chatId];
  const turns = CONVERSATIONS[chatId];
  const ui = DEMO_UI;

  const [tab, setTab] = useState<Tab>("timeline");
  const [versionId, setVersionId] = useState(doc.versions.at(-1)?.id ?? "");
  const [diffOpen, setDiffOpen] = useState(false);
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});
  const [shown, setShown] = useState(() => openingShown(turns));
  const [openNode, setOpenNode] = useState<string | null>(null);

  useEffect(() => {
    setTab("timeline");
    setVersionId(CANVAS[chatId].versions.at(-1)?.id ?? "");
    setDiffOpen(false);
    setDecisions({});
    setShown(openingShown(CONVERSATIONS[chatId]));
    setOpenNode(null);
  }, [chatId]);

  const pending = useMemo(
    () => (doc.diff?.entries ?? []).filter((entry) => !decisions[entry.id]).length,
    [doc.diff, decisions],
  );

  const decide = (id: string, decision: Decision) => {
    setDecisions((value) => ({ ...value, [id]: decision }));
    onToast(decision === "accepted" ? ui.canvas.applied[lang] : ui.canvas.rejectedNote[lang]);
  };

  const acceptAll = () => {
    const all: Record<string, Decision> = {};
    (doc.diff?.entries ?? []).forEach((entry) => { all[entry.id] = "accepted"; });
    setDecisions(all);
    onToast(ui.canvas.applied[lang]);
  };

  const visible = turns.slice(0, shown);
  const canAdvance = shown < turns.length;

  return (
    <div className="demo-ask-layout">
      <section className="demo-canvas" aria-label="Trip Canvas demo">
        <header>
          <span>{doc.title[lang]}</span>
          <small>{doc.subtitle[lang]}</small>
          {doc.versions.length > 1 ? (
            <label className="vp-version">
              <span>{ui.canvas.version[lang]}</span>
              <select value={versionId} onChange={(event) => { setVersionId(event.target.value); onToast(ui.canvas.restore[lang]); }}>
                {doc.versions.map((version) => <option key={version.id} value={version.id}>{version.label[lang]}</option>)}
              </select>
            </label>
          ) : null}
        </header>

        {doc.versions.length > 1 ? (
          <p className="vp-version-note">{doc.versions.find((version) => version.id === versionId)?.note[lang]}</p>
        ) : null}

        <div className="demo-canvas-tools">
          <button className={tab === "timeline" ? "active" : ""} onClick={() => setTab("timeline")}>{ui.canvas.timeline[lang]}</button>
          <button className={tab === "map" ? "active" : ""} onClick={() => setTab("map")}>{ui.canvas.map[lang]}</button>
          <button className={tab === "bookings" ? "active" : ""} onClick={() => setTab("bookings")}>{ui.canvas.bookings[lang]}</button>
        </div>

        <div className="demo-canvas-body">
        {doc.diff && pending > 0 && !diffOpen ? (
          <button className="vp-diff-banner" onClick={() => setDiffOpen(true)}>
            <b>{doc.diff.summary[lang]}</b>
            <span>{ui.canvas.nothingApplied[lang]}</span>
            <em>{ui.canvas.diffOpen[lang]}</em>
          </button>
        ) : null}

        {doc.diff && diffOpen ? (
          <section className="vp-diff" aria-label="Canvas diff">
            <header>
              <b>{doc.diff.summary[lang]}</b>
              <div>
                <button onClick={acceptAll}>{ui.canvas.acceptAll[lang]}</button>
                <button onClick={() => setDiffOpen(false)}>{ui.canvas.diffClose[lang]}</button>
              </div>
            </header>
            {doc.diff.entries.map((entry) => {
              const decision = decisions[entry.id];
              return (
                <article key={entry.id} className={`vp-diff-entry op-${entry.op}${decision ? ` ${decision}` : ""}`}>
                  <span className="vp-diff-op">{entry.op === "add" ? "+" : entry.op === "remove" ? "−" : "⇄"}</span>
                  <div>
                    <strong>{entry.target[lang]}</strong>
                    <small>{entry.detail[lang]}</small>
                    <p><b>{ui.canvas.reason[lang]}</b>{entry.reason[lang]}</p>
                    <p><b>{ui.canvas.trigger[lang]}</b>{entry.trigger[lang]}</p>
                  </div>
                  {decision ? (
                    <span className="vp-diff-done">{decision === "accepted" ? ui.canvas.accepted[lang] : ui.canvas.rejected[lang]}</span>
                  ) : (
                    <div className="vp-diff-actions">
                      <button onClick={() => decide(entry.id, "accepted")}>{ui.canvas.accept[lang]}</button>
                      <button onClick={() => decide(entry.id, "rejected")}>{ui.canvas.reject[lang]}</button>
                      <button onClick={() => onToast(ui.chat.anotherNote[lang])}>{ui.canvas.rework[lang]}</button>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        ) : null}

        {tab === "timeline" ? (
          <div className="demo-canvas-rows">
            {doc.empty ? (
              <div className="vp-empty">
                <h4>{doc.empty.title[lang]}</h4>
                <p>{doc.empty.body[lang]}</p>
                <div>{doc.empty.options.map((option, index) => (
                  <button key={index} onClick={() => onToast(option[lang])}>{option[lang]}</button>
                ))}</div>
                <small>{ui.canvas.uploadTypes[lang]}</small>
              </div>
            ) : null}

            {doc.compare ? <CompareBlock lang={lang} doc={doc} /> : null}

            {doc.days.map((day) => (
              <DayBlock
                key={day.id}
                day={day}
                lang={lang}
                openNode={openNode}
                setOpenNode={setOpenNode}
                onToast={onToast}
                onOpenDishes={onOpenDishes}
                onOpenTool={onOpenTool}
              />
            ))}
          </div>
        ) : null}

        {tab === "map" ? <MapView doc={doc} lang={lang} /> : null}

        {tab === "bookings" ? (
          <div className="demo-bookings">
            {doc.bookings.length === 0 ? (
              <div className="vp-empty"><h4>{ui.canvas.emptyTitle[lang]}</h4><p>{ui.canvas.nothingApplied[lang]}</p></div>
            ) : doc.bookings.map((item) => (
              <article key={item.id}>
                <span>{item.label[lang]}</span>
                <div>
                  <strong>{item.title[lang]}</strong>
                  <StateBadge state={item.state} lang={lang} />
                </div>
                <button onClick={() => onToast(item.feedback[lang])}>{item.action[lang]}</button>
              </article>
            ))}
          </div>
        ) : null}
        </div>
      </section>

      <section className="demo-chat" aria-label="Chatbot demo">
        <header>
          <span>Ask VisePanda</span>
          <small>{ui.ability.ask[lang]}</small>
        </header>

        <div className="demo-messages">
          {visible.map((turn, index) => (
            <article key={index} className={`message ${turn.role}`}>
              <small>{turn.role === "user" ? ui.chat.you[lang] : "VisePanda"}</small>
              <p>{turn.text[lang]}</p>

              {turn.recall ? (
                <button className="vp-recall" onClick={() => onOpenMemory(turn.recall!.memoryId)}>
                  <b>{turn.recall.label[lang]}</b>
                  <span>{turn.recall.value[lang]}</span>
                  <em>{ui.chat.viewMemory[lang]}</em>
                </button>
              ) : null}

              {turn.confidence ? <ConfidenceTag level={turn.confidence} lang={lang} /> : null}
              <EvidenceRow items={turn.evidence} lang={lang} />

              {turn.fallback ? (
                <div className="vp-fallback">
                  <b>{ui.chat.cannotConfirm[lang]}</b>
                  <p><span>{ui.chat.officialChannel[lang]}</span>{turn.fallback.channel[lang]}</p>
                  <p><span>{ui.chat.nextStep[lang]}</span>{turn.fallback.nextStep[lang]}</p>
                </div>
              ) : null}

              {turn.generating ? (
                <div className="vp-skeleton" aria-hidden="true">
                  <span>{ui.canvas.generating[lang]}</span>
                  <i /><i /><i />
                </div>
              ) : null}

              {turn.role === "assistant" && index === visible.length - 1 ? (
                <div className="vp-msg-actions">
                  <button onClick={() => onToast(ui.chat.copied[lang])}>{ui.chat.copy[lang]}</button>
                  <button onClick={() => onToast(ui.chat.anotherNote[lang])}>{ui.chat.another[lang]}</button>
                  <button onClick={() => onToast(ui.chat.wrongNote[lang])}>{ui.chat.wrong[lang]}</button>
                </div>
              ) : null}

              {turn.chips && index === visible.length - 1 && canAdvance ? (
                <div className="vp-chips">
                  <small>{ui.chat.pick[lang]}</small>
                  {turn.chips.map((chip, chipIndex) => (
                    <button key={chipIndex} onClick={() => setShown(nextStop(turns, shown))}>{chip[lang]}</button>
                  ))}
                </div>
              ) : null}
            </article>
          ))}

          {canAdvance && !visible.at(-1)?.chips ? (
            <button className="vp-continue" onClick={() => setShown(nextStop(turns, shown))}>
              {lang === "zh" ? "继续这段对话" : "Continue this conversation"}
            </button>
          ) : null}
        </div>

        <div className="demo-composer">
          <span>{ui.chat.composer[lang]}</span>
          <button onClick={() => (canAdvance ? setShown(nextStop(turns, shown)) : onToast(ui.chat.send[lang]))}>↑</button>
        </div>
      </section>
    </div>
  );
}

function CompareBlock({ lang, doc }: { lang: Lang; doc: (typeof CANVAS)[ChatId] }) {
  const table = doc.compare!;
  return (
    <section className="vp-compare">
      <header><b>{table.caption[lang]}</b></header>
      <div className="vp-compare-scroll">
        <table>
          <thead>
            <tr>
              <th />
              {table.options.map((option, index) => <th key={index}>{option[lang]}</th>)}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr key={index}>
                <th>{row.field[lang]}</th>
                {row.values.map((value, valueIndex) => (
                  <td key={valueIndex} className={row.match === valueIndex ? "match" : ""}>{value[lang]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <small>{table.footnote[lang]}</small>
    </section>
  );
}

function DayBlock({
  day, lang, openNode, setOpenNode, onToast, onOpenDishes, onOpenTool,
}: {
  day: CanvasDay; lang: Lang; openNode: string | null;
  setOpenNode: (id: string | null) => void;
  onToast: (message: string) => void;
  onOpenDishes: () => void;
  onOpenTool: (toolId: string) => void;
}) {
  const ui = DEMO_UI;
  return (
    <section className="vp-day">
      <header>
        <strong>{day.label[lang]}</strong>
        <span>{day.summary.walk[lang]}</span>
        <span>{day.summary.nodes[lang]}</span>
        <span>{day.summary.budget[lang]}</span>
        <span>{day.summary.indoor[lang]}</span>
      </header>

      {day.nodes.map((node) => {
        const open = openNode === node.id;
        return (
          <article key={node.id} className={`vp-node${node.time === "!" ? " warning" : ""}${open ? " open" : ""}`}>
            <time>{node.time}</time>
            <span className="demo-row-line" />
            <div>
              <button className="vp-node-head" onClick={() => setOpenNode(open ? null : node.id)}>
                <strong><i>{KIND_GLYPH[node.kind]}</i>{node.title[lang]}</strong>
                <StateBadge state={node.state} lang={lang} />
                {node.confidence ? <ConfidenceTag level={node.confidence} lang={lang} /> : null}
              </button>

              <dl className="vp-node-meta">
                {node.duration ? <div><dt>{ui.canvas.duration[lang]}</dt><dd>{node.duration[lang]}</dd></div> : null}
                {node.transfer ? <div><dt>{ui.canvas.transfer[lang]}</dt><dd>{node.transfer[lang]}</dd></div> : null}
                {node.cost ? <div><dt>{ui.canvas.cost[lang]}</dt><dd>{node.cost[lang]}</dd></div> : null}
              </dl>

              {open ? (
                <>
                  {node.risks?.length ? (
                    <ul className="vp-risks">
                      {node.risks.map((risk, index) => <li key={index}><b>{ui.canvas.risk[lang]}</b>{risk[lang]}</li>)}
                    </ul>
                  ) : null}
                  <EvidenceRow items={node.evidence} lang={lang} />
                </>
              ) : null}
            </div>

            {node.next ? (
              <button
                className="vp-node-action"
                onClick={() => {
                  if (node.next!.label.en === "View dishes") onOpenDishes();
                  else if (node.next!.label.en.includes("ride")) onOpenTool("ride");
                  else if (node.next!.label.en.includes("network")) onOpenTool("network");
                  onToast(node.next!.feedback[lang]);
                }}
              >
                {node.next.label[lang]}
              </button>
            ) : null}
          </article>
        );
      })}

      {day.stay ? <p className="vp-stay"><b>{ui.canvas.stay[lang]}</b>{day.stay[lang]}</p> : null}
    </section>
  );
}

function MapView({ doc, lang }: { doc: (typeof CANVAS)[ChatId]; lang: Lang }) {
  const nodes = doc.days.flatMap((day) => day.nodes).filter((node) => node.map);
  if (!nodes.length) {
    return <div className="demo-mini-map empty"><strong>{DEMO_UI.canvas.emptyTitle[lang]}</strong></div>;
  }
  const points = nodes.map((node) => ({ node, x: node.map!.x * 100, y: node.map!.y * 100 }));
  const path = points.map((point, index) => `${index === 0 ? "M" : "L"}${point.x} ${point.y}`).join(" ");
  return (
    <div className="demo-mini-map">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className="vp-map-route" d={path} />
      </svg>
      {points.map((point, index) => (
        <span key={point.node.id} className={`vp-map-pin state-${point.node.state}`} style={{ left: `${point.x}%`, top: `${point.y}%` }}>
          <i>{index + 1}</i>
          <b>{point.node.title[lang]}</b>
        </span>
      ))}
      <strong>{DEMO_UI.canvas.mapCaption[lang]}</strong>
    </div>
  );
}
