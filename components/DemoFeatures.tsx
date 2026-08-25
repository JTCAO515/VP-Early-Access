"use client";

import type { Lang } from "@/lib/copy";
import { FEATURES, FEATURES_COPY } from "@/lib/demo/features";
import type { DemoIntent } from "./ProductDemo";
import { ToolGlyph } from "./demo/art";
import { ArrowRight } from "./icons";

/** Marketing-side view of what the demo can do; each card opens the demo where that lives. */
export default function DemoFeatures({ lang, onOpen }: { lang: Lang; onOpen: (intent: Omit<DemoIntent, "nonce">) => void }) {
  return (
    <section className="section demo-features" id="capabilities">
      <div className="wrap">
        <p className="eyebrow">{FEATURES_COPY.eyebrow[lang]}</p>
        <h2 className="display">{FEATURES_COPY.title[lang]}</h2>
        <p className="section-lede">{FEATURES_COPY.lede[lang]}</p>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <article key={feature.id} className="feature-card">
              <ToolGlyph name={feature.glyph} />
              <h3>{feature.title[lang]}</h3>
              <p>{feature.body[lang]}</p>
              <span className="feature-proof">{feature.proof[lang]}</span>
              <button onClick={() => onOpen({ surface: feature.surface, chatId: feature.chatId })}>
                {FEATURES_COPY.open[lang]} <ArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
