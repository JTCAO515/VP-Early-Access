import { CHECKS, COPY, PLAN_ROWS, STATUS_LABEL, type Lang } from "@/lib/copy";
import {
  Alert,
  ArrowRight,
  Book,
  Calendar,
  Check,
  Clock,
  Compass,
  Route,
  Shield,
  Ticket,
  Train,
} from "./icons";

const CHECK_ICON: Record<string, React.ComponentType<{ size?: number }>> = {
  route: Route,
  transport: Train,
  time: Clock,
  hours: Calendar,
  bookings: Ticket,
  pacing: Compass,
  risks: Shield,
};

export default function Simulator({ lang }: { lang: Lang }) {
  const t = COPY.simulator;

  return (
    <section className="section alt" id="how-it-works">
      <div className="wrap">
        <p className="eyebrow">{t.eyebrow[lang]}</p>
        <h2 className="display">{t.title[lang]}</h2>
        <p className="section-lede">{t.lede[lang]}</p>

        <div className="sim-grid">
          <div className="panel">
            <header>{t.panelPlan[lang]}</header>
            <table>
              <thead>
                <tr>
                  <th className="col-day">{t.colDay[lang]}</th>
                  <th>{t.colPlan[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_ROWS.map((row) => (
                  <tr key={row.day}>
                    <td className="col-day">Day {row.day}</td>
                    <td>{row.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="panel-foot add">+ {t.addRow[lang]}</div>
          </div>

          <div className="sim-arrow" aria-hidden>
            <ArrowRight size={20} />
          </div>

          <div className="panel">
            <header>{t.panelChecks[lang]}</header>
            {CHECKS.map((check) => {
              const Icon = CHECK_ICON[check.id] ?? Book;
              return (
                <div className="check-row" key={check.id}>
                  <span className="check-icon">
                    <Icon />
                  </span>
                  <span className="check-label">{check.label[lang]}</span>
                  <span className="status" data-status={check.status}>
                    {check.status === "good" ? <Check size={14} /> : <Alert size={14} />}
                    {STATUS_LABEL[check.status][lang]}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="sim-arrow" aria-hidden>
            <ArrowRight size={20} />
          </div>

          <div className="panel">
            <header>{t.panelCanvas[lang]}</header>
            <div className="panel-meta">
              <Calendar size={13} />
              Updated: May 22, 2025
            </div>
            <table>
              <thead>
                <tr>
                  <th className="col-day">{t.colDay[lang]}</th>
                  <th>{t.colPlan[lang]}</th>
                  <th>{t.colNext[lang]}</th>
                </tr>
              </thead>
              <tbody>
                {PLAN_ROWS.map((row) => (
                  <tr key={row.day}>
                    <td className="col-day">Day {row.day}</td>
                    <td>{row.plan}</td>
                    <td>{row.next[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="panel-foot done">
              <Check size={14} />
              {t.footer[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
