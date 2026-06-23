"use client";

import { useEffect, useState } from "react";
import {
  applySiteTheme,
  isSiteThemeOption,
  SITE_THEME_STORAGE_KEY,
  siteThemeOptions,
  type SiteThemeOption,
} from "@/lib/theme-selector";

function ThemePreview({ type }: { type: (typeof siteThemeOptions)[number]["preview"] }) {
  if (type === "default") {
    return (
      <span
        aria-hidden
        className="block h-6 w-6 rounded-full border-2 border-ink/20 bg-white"
      />
    );
  }

  if (type === "black") {
    return <span aria-hidden className="block h-6 w-6 rounded-full bg-black" />;
  }

  if (type === "cream") {
    return (
      <span
        aria-hidden
        className="block h-6 w-6 rounded-full border border-ink/10"
        style={{ backgroundColor: "#F5F0E8" }}
      />
    );
  }

  return (
    <span
      aria-hidden
      className="block h-6 w-6 overflow-hidden rounded-full border border-ink/10"
      style={{
        background: "linear-gradient(135deg, #F5F0E8 50%, #000000 50%)",
      }}
    />
  );
}

export function ThemeSelector() {
  const [active, setActive] = useState<SiteThemeOption>("1");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(SITE_THEME_STORAGE_KEY);
    const option = isSiteThemeOption(stored) ? stored : "1";
    applySiteTheme(option);
    setActive(option);
    setReady(true);
  }, []);

  function select(option: SiteThemeOption) {
    if (option === active) return;
    applySiteTheme(option);
    localStorage.setItem(SITE_THEME_STORAGE_KEY, option);
    window.location.reload();
  }

  if (!ready) return null;

  return (
    <div
      className="flex flex-col gap-2"
      role="toolbar"
      aria-label="Sélecteur de thème"
    >
      {siteThemeOptions.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => select(option.id)}
            aria-label={option.label}
            aria-pressed={isActive}
            title={option.label}
            className={`flex h-11 w-11 items-center justify-center rounded-full border-2 bg-white shadow-md transition ${
              isActive ? "border-dal ring-2 ring-dal/30" : "border-ink/15 hover:border-ink/40"
            }`}
          >
            <ThemePreview type={option.preview} />
          </button>
        );
      })}
    </div>
  );
}
