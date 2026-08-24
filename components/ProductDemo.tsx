"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { EXPLORE_CITIES, PRODUCT_DEMO, SHANGHAI_POIS, type Lang } from "@/lib/copy";

type Surface = "ask" | "copilot" | "explore" | "user";
type ChatId = keyof typeof PRODUCT_DEMO.scenarios;

export default function ProductDemo({ lang }: { lang: Lang }) {
  const [surface, setSurface] = useState<Surface>("ask");
  const [chatId, setChatId] = useState<ChatId>("shanghai");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [handoff, setHandoff] = useState("");
  const [exploreId, setExploreId] = useState("translate");
  const [exploreMode, setExploreMode] = useState<"places" | "tools">("places");
  const [exploreCity, setExploreCity] = useState("shanghai");
  const [poiCategory, setPoiCategory] = useState("attractions");
  const [poiId, setPoiId] = useState<string | null>(null);
  const [profileEditing, setProfileEditing] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);
  const [canvasTab, setCanvasTab] = useState<"timeline" | "map" | "bookings">("timeline");
  const [actionFeedback, setActionFeedback] = useState("");
  const scenario = PRODUCT_DEMO.scenarios[chatId];
  const ui = PRODUCT_DEMO.ui;
  const profile = PRODUCT_DEMO.userProfile;
  const selectedExplore = useMemo(
    () => PRODUCT_DEMO.explore.find((item) => item.id === exploreId) ?? PRODUCT_DEMO.explore[0],
    [exploreId],
  );
  const selectedPoi = useMemo(() => SHANGHAI_POIS.find((poi) => poi.id === poiId) ?? null, [poiId]);
  const visiblePois = useMemo(() => SHANGHAI_POIS.filter((poi) => poi.category === poiCategory), [poiCategory]);

  const selectChat = (id: ChatId) => {
    setSurface("ask");
    setChatId(id);
    setCanvasTab("timeline");
    setDrawerOpen(false);
    setHandoff("");
    setActionFeedback("");
  };

  return (
    <section className="section product-demo-section" id="product-demo">
      <div className="wrap">
        <h2 className="display">
          {ui.sectionTitle[lang]}
        </h2>
        <p className="section-lede">
          {ui.sectionLede[lang]}
        </p>

        <div className="demo-browser" aria-label="Interactive VisePanda product demo">
          <header className="demo-browser-bar">
            <span className="demo-browser-dots"><i /><i /><i /></span>
            <span className="demo-address">{PRODUCT_DEMO.address}</span>
            <span className="demo-secure">⌁</span>
          </header>

          <div className="demo-app-shell">
            <aside className="demo-sidebar">
              <span className="demo-brand">VisePanda.</span>
              <nav className="demo-main-nav">
                {(["ask", "copilot", "explore"] as const).map((item) => (
                  <button key={item} className={surface === item ? "active" : ""} onClick={() => setSurface(item)}>
                    <span>{item === "ask" ? "✦" : item === "copilot" ? "◫" : "◇"}</span>
                    {PRODUCT_DEMO.nav[item][lang]}
                  </button>
                ))}
              </nav>
              <div className="demo-chat-list">
                <small>{ui.chats[lang]}</small>
                {PRODUCT_DEMO.chats.map((chat) => (
                  <button key={chat.id} className={surface === "ask" && chatId === chat.id ? "active" : ""} onClick={() => selectChat(chat.id as ChatId)}>
                    {chat.title[lang]}
                  </button>
                ))}
              </div>
              <button className={surface === "user" ? "demo-user active" : "demo-user"} onClick={() => setSurface("user")}><Image src="/assets/demo/michael-turner-avatar.png" alt="Michael Turner demo avatar" width={28} height={28} />{PRODUCT_DEMO.nav.user[lang]}</button>
            </aside>

            <main className="demo-workspace">
              {surface === "ask" ? (
                <div className="demo-ask-layout">
                  <section className="demo-canvas" aria-label="Trip Canvas demo">
                    <header><span>{ui.tripCanvas[lang]}</span><small>{scenario.canvasTitle[lang]}</small></header>
                    <div className="demo-canvas-tools"><button className={canvasTab === "timeline" ? "active" : ""} onClick={() => setCanvasTab("timeline")}>{ui.timeline[lang]}</button><button className={canvasTab === "map" ? "active" : ""} onClick={() => setCanvasTab("map")}>{ui.map[lang]}</button><button className={canvasTab === "bookings" ? "active" : ""} onClick={() => setCanvasTab("bookings")}>{ui.bookings[lang]}</button></div>
                    <div className="demo-trip-summary"><strong>{scenario.canvasTitle[lang]}</strong><span>{ui.adjusted[lang]}</span></div>
                    {canvasTab === "timeline" ? <div className="demo-canvas-rows">
                      {scenario.rows.map((row) => (
                        <article key={`${row.time}-${row.title.en}`} className={row.time === "!" ? "warning" : ""}>
                          <time>{row.time}</time><span className="demo-row-line" /><div><strong>{row.title[lang]}</strong><small>{row.meta[lang]}</small></div>
                          {chatId === "transport" || chatId === "hotel" ? <button onClick={() => setHandoff(row.title[lang])}>{ui.open[lang]}</button> : null}
                          {chatId === "restaurant" && row.time === "Dish" ? <button onClick={() => setDrawerOpen(true)}>{ui.viewDishes[lang]}</button> : null}
                        </article>
                      ))}
                    </div> : null}
                    {canvasTab === "map" ? <div className="demo-mini-map"><span>{EXPLORE_CITIES[0].name[lang]}</span><i /><i /><i /><strong>{ui.mapSequence[lang]}</strong></div> : null}
                    {canvasTab === "bookings" ? <div className="demo-bookings">{Object.values(PRODUCT_DEMO.bookings).map((item) => <article key={item.label.en}><span>{item.label[lang]}</span><strong>{item.title[lang]}</strong><button onClick={() => setActionFeedback(item.feedback[lang])}>{item.action[lang]}</button></article>)}</div> : null}
                    {chatId === "shanghai" ? <div className="demo-generating"><i /><span>{ui.generating[lang]}</span></div> : null}
                    {handoff ? <div className="demo-toast">{ui.handoffPrefix[lang]}{handoff}</div> : null}
                    {actionFeedback ? <div className="demo-toast">{actionFeedback}</div> : null}
                  </section>

                  <section className="demo-chat" aria-label="Chatbot demo">
                    <header><span>{ui.askTitle[lang]}</span><small>{ui.askLocation[lang]}</small></header>
                    <div className="demo-messages">
                      <article className="message user"><small>{ui.you[lang]}</small><p>{scenario.user[lang]}</p></article>
                      <article className="message assistant"><small>VisePanda</small><p>{scenario.assistant[lang]}</p></article>
                      {chatId === "shanghai" ? <article className="message user"><small>{ui.you[lang]}</small><p>{ui.shanghaiFollowup[lang]}</p></article> : null}
                    </div>
                    <div className="demo-composer"><span>{ui.composer[lang]}</span><button onClick={() => setActionFeedback(ui.messageSent[lang])}>↑</button></div>
                  </section>

                  {drawerOpen ? <aside className="demo-dish-drawer"><button onClick={() => setDrawerOpen(false)}>×</button><div className="demo-food-image" /><small>{ui.dishLabel[lang]}</small><h3>{ui.dishTitle[lang]}</h3><p>{ui.dishBody[lang]}</p><span>{ui.dishAction[lang]} ↗</span></aside> : null}
                </div>
              ) : null}

              {surface === "copilot" ? (
                <div className="demo-copilot">
                  <header><div><small>VisePanda Copilot</small><h3>{ui.copilotTitle[lang]}</h3></div><span>{ui.longTermMemory[lang]}</span></header>
                  <div className="copilot-grid">
                    <article><small>{ui.travelIntensity[lang]}</small><strong>Relaxed · 68%</strong><i style={{ width: "68%" }} /></article>
                    <article><small>{ui.dailyBudget[lang]}</small><strong>¥800–1,200</strong><i style={{ width: "74%" }} /></article>
                    <article><small>{ui.preferences[lang]}</small><strong>{ui.preferenceValue[lang]}</strong></article>
                    <article><small>{ui.knownConstraints[lang]}</small><strong>{ui.constraintValue[lang]}</strong></article>
                  </div>
                  <section className="copilot-adjustment"><small>{ui.adaptiveSuggestion[lang]}</small><p>{ui.adaptiveBody[lang]}</p><button onClick={() => selectChat("shanghai")}>{ui.reviewCanvas[lang]}</button></section>
                </div>
              ) : null}

              {surface === "explore" ? (
                <div className="demo-explore">
                  <header><div><small>Explore</small><h3>{ui.exploreTitle[lang]}</h3></div><div className="explore-mode-switch"><button className={exploreMode === "places" ? "active" : ""} onClick={() => setExploreMode("places")}>{ui.places[lang]}</button><button className={exploreMode === "tools" ? "active" : ""} onClick={() => setExploreMode("tools")}>{ui.tools[lang]}</button></div></header>

                  {exploreMode === "places" ? <>
                    <div className="explore-city-tabs">{EXPLORE_CITIES.map((item) => <button key={item.id} className={exploreCity === item.id ? "active" : ""} onClick={() => { setExploreCity(item.id); setPoiId(null); }}>{item.name[lang]}{item.ready ? null : <small>{ui.soon[lang]}</small>}</button>)}</div>
                    {exploreCity === "shanghai" ? <>
                      <div className="poi-category-tabs">{(["attractions", "restaurants", "hotels"] as const).map((category) => <button key={category} className={poiCategory === category ? "active" : ""} onClick={() => { setPoiCategory(category); setPoiId(null); }}>{ui[category][lang]}</button>)}</div>
                      <div className="poi-card-grid">{visiblePois.map((poi) => <button key={poi.id} onClick={() => setPoiId(poi.id)}><span className={`poi-cover ${poi.category}`} /><small>{poi.area[lang]}</small><strong>{poi.name[lang]}</strong><em>{poi.price[lang]}</em></button>)}</div>
                    </> : <div className="city-coming-soon"><span>◇</span><h4>{ui.citySoonTitle[lang]}</h4><p>{ui.citySoonBody[lang]}</p></div>}
                  </> : <>
                    <div className="explore-card-grid">{PRODUCT_DEMO.explore.map((item) => <button key={item.id} className={exploreId === item.id ? "active" : ""} onClick={() => setExploreId(item.id)}><span>{item.id === "translate" ? "文/A" : item.id === "ride" ? "车" : item.id === "visa" ? "证" : "SIM"}</span><strong>{item.title[lang]}</strong><small>{item.body[lang]}</small></button>)}</div>
                    <section className="explore-detail"><div><small>{selectedExplore.title[lang]}</small><h4>{selectedExplore.body[lang]}</h4></div><div className="explore-tool-preview"><span>01</span><strong>{selectedExplore.step[lang]}</strong><button onClick={() => setActionFeedback(`${selectedExplore.title[lang]}${ui.demoOpened[lang]}`)}>{ui.start[lang]}</button></div></section>
                  </>}

                  {selectedPoi ? <aside className="poi-detail-drawer"><button onClick={() => setPoiId(null)}>×</button><span className={`poi-detail-cover ${selectedPoi.category}`} /><small>{selectedPoi.area[lang]} · {ui.demoFixture[lang]}</small><h3>{selectedPoi.name[lang]}</h3><p>{selectedPoi.review[lang]}</p><dl><div><dt>{ui.price[lang]}</dt><dd>{selectedPoi.price[lang]}</dd></div><div><dt>{ui.foreignPayment[lang]}</dt><dd>{selectedPoi.payment[lang]}</dd></div><div><dt>{ui.languageService[lang]}</dt><dd>{selectedPoi.language[lang]}</dd></div></dl><button className="poi-add-button" onClick={() => { setActionFeedback(ui.addedCanvas[lang]); setPoiId(null); }}>{ui.addCanvas[lang]}</button></aside> : null}
                </div>
              ) : null}

              {surface === "user" ? <div className="demo-user-page">
                <header><div className="user-identity"><Image src="/assets/demo/michael-turner-avatar.png" alt="Michael Turner demo avatar" width={64} height={64} /><div><small>{profile.id}</small><h3>{profile.name}</h3><p>{profile.email} · {profile.location}</p></div></div><button onClick={() => { setProfileEditing((value) => !value); setProfileSaved(false); }}>{profileEditing ? ui.cancel[lang] : ui.editProfile[lang]}</button></header>
                <nav className="user-page-tabs"><button className="active">{ui.account[lang]}</button><button>{ui.travelProfile[lang]}</button><button>{ui.memory[lang]}</button><button>{ui.privacy[lang]}</button></nav>
                <div className="user-page-grid"><section><small>{ui.accountSettings[lang]}</small><dl><div><dt>Email</dt><dd>{profile.email}</dd></div><div><dt>{ui.language[lang]}</dt><dd>{profile.language}</dd></div><div><dt>{ui.currency[lang]}</dt><dd>{profile.currency}</dd></div><div><dt>{ui.timeZone[lang]}</dt><dd>{profile.timeZone}</dd></div></dl></section><section className={profileEditing ? "memory-judgement editing" : "memory-judgement"}><small>{ui.memoryJudgement[lang]}</small><h4>{ui.memorySummary[lang]}</h4><div className="memory-facts"><span>{ui.dailyBudget[lang]}<b>{profileEditing ? "$200–300" : "$180–260"}</b></span><span>{ui.walking[lang]}<b>{profileEditing ? "6–8k" : "7–9k"} steps</b></span><span>{ui.hotels[lang]}<b>{ui.hotelPreference[lang]}</b></span><span>{ui.knownConstraint[lang]}<b>{ui.allergy[lang]}</b></span></div><p>{ui.memorySource[lang]}</p>{profileEditing ? <button onClick={() => { setProfileEditing(false); setProfileSaved(true); }}>{ui.saveProfile[lang]}</button> : null}{profileSaved ? <div className="profile-saved">{ui.profileSaved[lang]}</div> : null}</section></div>
              </div> : null}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
