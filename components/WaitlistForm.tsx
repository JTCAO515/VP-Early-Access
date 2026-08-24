"use client";

import { useState } from "react";
import { COPY, QUESTIONS, type Lang } from "@/lib/copy";
import { isValidEmail } from "@/lib/validate";
import { ArrowRight, Check } from "./icons";

type Step = "email" | "questions" | "done";
type ErrorKey = keyof typeof COPY.form.errors;
type Answers = Record<string, string>;

export default function WaitlistForm({ lang }: { lang: Lang }) {
  const t = COPY.form;
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState<ErrorKey | null>(null);
  const [pending, setPending] = useState(false);

  function startQuestions(event: React.FormEvent) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("email");
      return;
    }
    setError(null);
    setStep("questions");
  }

  async function submit() {
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, lang, ...answers }),
      });
      if (res.ok) {
        setStep("done");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error === "rate" || data.error === "email" ? data.error : "server");
    } catch {
      setError("server");
    } finally {
      setPending(false);
    }
  }

  if (step === "done") {
    return (
      <div className="form-card" id="join">
        <div className="success">
          <span className="success-mark">
            <Check size={22} />
          </span>
          <h2 className="display">{t.successTitle[lang]}</h2>
          <p>{t.successBody[lang]}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card" id="join">
      {step === "email" ? (
        <form onSubmit={startQuestions} noValidate>
          <h2>{t.heading[lang]}</h2>
          <label className="visually-hidden" htmlFor="waitlist-email">
            {t.emailLabel[lang]}
          </label>
          <div className="email-row">
            <input
              id="waitlist-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              required
              placeholder={t.emailPlaceholder[lang]}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="pill-button">
              {t.continue[lang]}
              <ArrowRight />
            </button>
          </div>
          <div className="honeypot" aria-hidden>
            <label htmlFor="waitlist-company">Company</label>
            <input
              id="waitlist-company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <p className="form-privacy">{t.privacy[lang]}</p>
          {error ? <p className="form-error">{t.errors[error][lang]}</p> : null}
        </form>
      ) : (
        <div className="questions">
          <div className="questions-head">
            <h2>{t.questionsHeading[lang]}</h2>
            <p>{t.questionsLede[lang]}</p>
          </div>

          {QUESTIONS.map((question) => (
            <div className="question" key={question.id}>
              <span>{question.label[lang]}</span>
              <div className="chips">
                {question.options.map((option) => {
                  const selected = answers[question.id] === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className="chip"
                      aria-pressed={selected}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          // Tapping the selected chip again clears the answer.
                          [question.id]: selected ? "" : option.value,
                        }))
                      }
                    >
                      {option.label[lang]}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="form-actions">
            <button type="button" className="ghost-button" onClick={() => setStep("email")}>
              {t.back[lang]}
            </button>
            <button type="button" className="pill-button" onClick={submit} disabled={pending}>
              {pending ? t.sending[lang] : t.submit[lang]}
              {pending ? null : <ArrowRight />}
            </button>
          </div>

          <p className="form-privacy">{t.privacy[lang]}</p>
          {error ? <p className="form-error">{t.errors[error][lang]}</p> : null}
        </div>
      )}
    </div>
  );
}
