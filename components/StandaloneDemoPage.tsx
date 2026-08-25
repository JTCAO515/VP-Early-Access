"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/copy";
import ProductDemo from "./ProductDemo";

export default function StandaloneDemoPage() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="standalone-demo-page" lang={lang}>
      <ProductDemo
        lang={lang}
        fullscreen
        standalone
        onLanguageToggle={() => setLang((value) => value === "en" ? "zh" : "en")}
        intent={null}
      />
    </main>
  );
}
