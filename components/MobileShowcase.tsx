import { COPY, DAY3_TIMELINE, type Lang } from "@/lib/copy";
import { Android, Apple, Book, Chevron, Dots, Menu, Train } from "./icons";

function TripCanvasPhone({ lang }: { lang: Lang }) {
  const t = COPY.mobile;
  return (
    <div className="phone">
      <span className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-head">
          <span className="icon">
            <Menu />
          </span>
          {t.tripCanvas[lang]}
          <span className="icon">
            <Dots />
          </span>
        </div>
        <div className="phone-daylabel">
          <span className="day">{t.day3[lang]}</span>
          <span className="date">{t.date[lang]}</span>
          <span className="bookmark">
            <Book size={13} />
          </span>
        </div>
        <p className="phone-sub">{t.city[lang]}</p>
        <ul className="timeline">
          {DAY3_TIMELINE.map((item) => (
            <li key={item.time}>
              <span className="time">{item.time}</span>
              <span className="rail" />
              <span>
                <span className="title">{item.title[lang]}</span>
                <br />
                <span className="meta">{item.meta[lang]}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TodayPhone({ lang }: { lang: Lang }) {
  const t = COPY.mobile;
  const [next, ...ahead] = DAY3_TIMELINE;
  return (
    <div className="phone">
      <span className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-head">
          {t.today[lang]}
          <span className="icon">
            <Dots />
          </span>
        </div>
        <p className="phone-sub">
          {t.dateLong[lang]} · {t.city[lang]}
        </p>

        <div className="phone-card">
          <h4>{t.nextStep[lang]}</h4>
          <div className="next-step">
            <div className="body">
              <span className="time">{next.time}</span>
              <p className="title">{next.title[lang]}</p>
              <p className="meta">{next.meta[lang]}</p>
            </div>
            <span className="glyph">
              <Train size={15} />
            </span>
          </div>
        </div>

        <div className="phone-card">
          <h4>{t.whatsAhead[lang]}</h4>
          {ahead.slice(0, 3).map((item) => (
            <div className="ahead-row" key={item.time}>
              <span className="time">{item.time}</span>
              <span className="label">{item.title[lang]}</span>
              <span className="chev">
                <Chevron size={13} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MobileShowcase({ lang }: { lang: Lang }) {
  const t = COPY.mobile;
  const platforms = [
    { key: "ios", label: t.ios[lang], Glyph: Apple },
    { key: "android", label: t.android[lang], Glyph: Android },
  ];

  return (
    <section className="section" id="apps">
      <div className="wrap">
        <p className="eyebrow">{t.eyebrow[lang]}</p>

        <div className="mobile-body">
          <div>
            <h2 className="display">{t.title[lang]}</h2>
            <p className="section-lede">{t.lede[lang]}</p>

            <div className="platform-cards" style={{ marginTop: 28 }}>
              {platforms.map(({ key, label, Glyph }) => (
                <div className="platform-card" key={key}>
                  <span className="glyph">
                    <Glyph size={26} />
                  </span>
                  <span className="name">{label}</span>
                  <span className="status-badge">
                    <span className="pulse" />
                    {t.status[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="phones">
            <TripCanvasPhone lang={lang} />
            <TodayPhone lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
