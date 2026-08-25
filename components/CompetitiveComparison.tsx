import { COMPARISON_COPY, COMPETITOR_COMPARISON, type Lang } from "@/lib/copy";

export default function CompetitiveComparison({ lang }: { lang: Lang }) {
  return (
    <section className="section competitive-comparison" id="comparison">
      <div className="wrap">
        <p className="eyebrow">{COMPARISON_COPY.eyebrow[lang]}</p>
        <h2 className="display">{COMPARISON_COPY.title[lang]}</h2>
        <p className="section-lede">{COMPARISON_COPY.lede[lang]}</p>

        <div className="comparison-scroll" role="region" aria-label={COMPARISON_COPY.title[lang]} tabIndex={0}>
          <table>
            <thead>
              <tr>
                <th>{COMPARISON_COPY.dimension[lang]}</th>
                {COMPETITOR_COMPARISON.columns.map((column) => (
                  <th key={column.id} className={column.id === "visepanda" ? "visepanda" : ""}>
                    <strong>{column.title[lang]}</strong>
                    <small>{column.note[lang]}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPETITOR_COMPARISON.rows.map((row) => (
                <tr key={row.label.en}>
                  <th>{row.label[lang]}</th>
                  {row.values.map((value, index) => (
                    <td key={index} className={index === 3 ? "visepanda" : ""}>{value[lang]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="comparison-limitation">
          <strong>{COMPARISON_COPY.limitationTitle[lang]}</strong>
          <p>{COMPARISON_COPY.limitationBody[lang]}</p>
        </aside>
        <p className="comparison-scope">{COMPARISON_COPY.scopeNote[lang]}</p>
      </div>
    </section>
  );
}
