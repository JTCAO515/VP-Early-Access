"use client";

import { useMemo, useState } from "react";
import type { Lang } from "@/lib/copy";
import { DISHES, EXPLORE_CITY_CARDS, POIS, SUPPORT_LABEL, type PoiCategory } from "@/lib/demo/explore";
import { DEMO_UI } from "@/lib/demo/ui";
import { SceneArt } from "./art";
import { EvidenceRow, StateBadge } from "./parts";

type Props = {
  lang: Lang;
  dishOpen: boolean;
  setDishOpen: (open: boolean) => void;
  onToast: (message: string) => void;
  onAsk: () => void;
};

const CATEGORIES: PoiCategory[] = ["attractions", "restaurants", "hotels"];
const CATEGORY_LABEL = {
  attractions: { en: "Attractions", zh: "景点" },
  restaurants: { en: "Restaurants", zh: "餐厅" },
  hotels: { en: "Hotels", zh: "酒店" },
} as const;

export default function ExploreSurface({ lang, dishOpen, setDishOpen, onToast, onAsk }: Props) {
  const ui = DEMO_UI.explore;
  const [cityId, setCityId] = useState("shanghai");
  const [category, setCategory] = useState<PoiCategory>("attractions");
  const [maxTier, setMaxTier] = useState(4);
  const [intlOnly, setIntlOnly] = useState(false);
  const [englishOnly, setEnglishOnly] = useState(false);
  const [poiId, setPoiId] = useState<string | null>(null);

  const visible = useMemo(
    () => POIS.filter((poi) =>
      poi.category === category &&
      poi.tier <= maxTier &&
      (!intlOnly || poi.intlCard) &&
      (!englishOnly || poi.english)),
    [category, maxTier, intlOnly, englishOnly],
  );

  const poi = POIS.find((item) => item.id === poiId) ?? null;
  const dishes = DISHES;

  return (
    <div className="demo-explore">
      <header>
        <div><small>Explore</small><h3>{ui.title[lang]}</h3></div>
        <span className="vp-ability">{DEMO_UI.ability.explore[lang]}</span>
      </header>

      <div className="explore-city-tabs">
        {EXPLORE_CITY_CARDS.map((city) => (
          <button key={city.id} className={cityId === city.id ? "active" : ""} onClick={() => { setCityId(city.id); setPoiId(null); }}>
            <b>{city.name[lang]}</b>
            <span>{city.ready ? `${city.count} ${ui.poiCount[lang]}` : city.updated[lang]}</span>
          </button>
        ))}
      </div>

      {cityId === "shanghai" ? (
        <>
          <div className="poi-category-tabs">
            {CATEGORIES.map((item) => (
              <button key={item} className={category === item ? "active" : ""} onClick={() => { setCategory(item); setPoiId(null); }}>
                {CATEGORY_LABEL[item][lang]}
              </button>
            ))}
          </div>

          <div className="vp-filters">
            <small>{ui.filters[lang]}</small>
            <label>
              <span>{maxTier === 4 ? ui.anyPrice[lang] : "¥".repeat(maxTier)}</span>
              <input type="range" min={1} max={4} value={maxTier} onChange={(event) => setMaxTier(Number(event.target.value))} />
            </label>
            <button className={intlOnly ? "active" : ""} onClick={() => setIntlOnly((value) => !value)}>{ui.intlCard[lang]}</button>
            <button className={englishOnly ? "active" : ""} onClick={() => setEnglishOnly((value) => !value)}>{ui.englishService[lang]}</button>
            <button onClick={() => { setMaxTier(4); setIntlOnly(false); setEnglishOnly(false); }}>{ui.reset[lang]}</button>
            <em>{visible.length} {ui.results[lang]}</em>
          </div>

          {visible.length === 0 ? (
            <div className="vp-empty">
              <h4>{ui.noResults[lang]}</h4>
              <p>{ui.noResultsBody[lang]}</p>
              <div><button onClick={() => { setMaxTier(4); setIntlOnly(false); setEnglishOnly(false); }}>{ui.reset[lang]}</button></div>
            </div>
          ) : (
            <div className="poi-card-grid">
              {visible.map((item) => (
                <button key={item.id} onClick={() => setPoiId(item.id)}>
                  <span className="poi-cover"><SceneArt name={item.art} /></span>
                  <small>{item.area[lang]}</small>
                  <strong>{item.name[lang]}</strong>
                  <em>{item.price[lang]}</em>
                  <StateBadge state={item.state} lang={lang} />
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="city-coming-soon">
          <span>◇</span>
          <h4>{ui.citySoonTitle[lang]}</h4>
          <p>{ui.citySoonBody[lang]}</p>
        </div>
      )}

      {poi ? (
        <aside className="poi-detail-drawer">
          <button className="vp-close" onClick={() => setPoiId(null)}>×</button>
          <span className="poi-detail-cover"><SceneArt name={poi.art} /></span>
          <small>{poi.area[lang]} · {DEMO_UI.fixture[lang]}</small>
          <h3>{poi.name[lang]}</h3>
          <p className="vp-address">{poi.address[lang]}</p>
          <StateBadge state={poi.state} lang={lang} />
          <p>{poi.review[lang]}</p>

          <section className="vp-matrix">
            <h4>{ui.payment[lang]}</h4>
            <dl>
              {poi.payment.map((row, index) => (
                <div key={index}><dt>{row.method[lang]}</dt><dd className={`support-${row.value}`}>{SUPPORT_LABEL[row.value][lang]}</dd></div>
              ))}
            </dl>
          </section>

          <section className="vp-matrix">
            <h4>{ui.language[lang]}</h4>
            <dl>
              {poi.language.map((row, index) => (
                <div key={index}><dt>{row.item[lang]}</dt><dd>{row.value[lang]}</dd></div>
              ))}
            </dl>
          </section>

          <section className="vp-matrix">
            <h4>{ui.entry[lang]}</h4>
            <dl>
              {poi.entry.map((row, index) => (
                <div key={index}><dt>{row.item[lang]}</dt><dd>{row.value[lang]}</dd></div>
              ))}
            </dl>
          </section>

          <section className="vp-matrix">
            <h4>{ui.sourceLine[lang]}</h4>
            <EvidenceRow items={poi.evidence} lang={lang} />
          </section>

          <div className="vp-drawer-actions">
            <button onClick={onAsk}>{ui.ask[lang]}</button>
            <button className="poi-add-button" onClick={() => { onToast(ui.added[lang]); setPoiId(null); }}>{ui.add[lang]}</button>
          </div>
        </aside>
      ) : null}

      {dishOpen ? (
        <aside className="demo-dish-drawer">
          <button className="vp-close" onClick={() => setDishOpen(false)}>×</button>
          <h3>{lang === "zh" ? "推荐菜品" : "Recommended dishes"}</h3>
          {dishes.map((dish) => (
            <article key={dish.id} className={dish.safe ? "vp-dish" : "vp-dish unsafe"}>
              <span className="demo-food-image"><SceneArt name={dish.art} /></span>
              <strong>{dish.name[lang]}</strong>
              {dish.safe ? null : (
                <p className="vp-allergen">
                  {lang === "zh" ? "触碰硬约束：花生" : "Hits a hard constraint: peanut"}
                  <button onClick={() => onToast(lang === "zh" ? "已给出替代菜品" : "Replacement suggested")}>
                    {lang === "zh" ? "替换建议" : "Suggest a replacement"}
                  </button>
                </p>
              )}
              <dl>
                <div><dt>{lang === "zh" ? "口味" : "Taste"}</dt><dd>{dish.taste[lang]}</dd></div>
                <div><dt>{lang === "zh" ? "原料" : "Ingredients"}</dt><dd>{dish.ingredients[lang]}</dd></div>
                <div><dt>{lang === "zh" ? "过敏原" : "Allergens"}</dt><dd>{dish.allergens[lang]}</dd></div>
                <div><dt>{lang === "zh" ? "搭配" : "Pairing"}</dt><dd>{dish.pairing[lang]}</dd></div>
                <div><dt>{lang === "zh" ? "价格" : "Price"}</dt><dd>{dish.price[lang]}</dd></div>
              </dl>
            </article>
          ))}
          <div className="vp-order-card">
            <small>{lang === "zh" ? "点菜卡（出示给店员）" : "Ordering card (show to staff)"}</small>
            <strong>我对花生过敏，请不要加花生或花生油。</strong>
            <em>{lang === "zh" ? "Demo 静态内容，点餐前仍需与店员确认。" : "Static demo content. Still confirm with staff before ordering."}</em>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
