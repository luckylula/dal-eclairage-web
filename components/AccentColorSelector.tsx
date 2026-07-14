"use client";

import { useEffect, useState } from "react";
import {
  ACCENT_COLOR_STORAGE_KEY,
  accentColorOptions,
  applyAccentColor,
  isAccentColorOption,
  type AccentColorOption,
} from "@/lib/accent-selector";

export function AccentColorSelector() {
  const [active, setActive] = useState<AccentColorOption>("gold");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(ACCENT_COLOR_STORAGE_KEY);
    const option = isAccentColorOption(stored) ? stored : "gold";
    applyAccentColor(option);
    setActive(option);
    setReady(true);
  }, []);

  function select(option: AccentColorOption) {
    if (option === active) return;
    applyAccentColor(option);
    localStorage.setItem(ACCENT_COLOR_STORAGE_KEY, option);
    setActive(option);
  }

  if (!ready) return null;

  return (
    <div
      className="flex flex-col gap-2"
      role="toolbar"
      aria-label="Sélecteur de couleur d'accent"
    >
      {accentColorOptions.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => select(option.id)}
            aria-label={option.label}
            aria-pressed={isActive}
            title={option.label}
            className={`flex h-11 w-11 items-center justify-center border-2 bg-white shadow-md transition ${
              isActive ? "border-dal" : "border-ink/15 hover:border-ink/40"
            }`}
          >
            <span
              className="h-6 w-6 rounded-full border border-black/10"
              style={{ backgroundColor: option.swatch }}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}
