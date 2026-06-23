"use client";

import { useEffect, useState } from "react";
import {
  applyHeadingFont,
  HEADING_FONT_STORAGE_KEY,
  headingFontOptions,
  isHeadingFontOption,
  type HeadingFontOption,
} from "@/lib/typography-selector";

export function TypographySelector() {
  const [active, setActive] = useState<HeadingFontOption>("1");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(HEADING_FONT_STORAGE_KEY);
    const option = isHeadingFontOption(stored) ? stored : "1";
    applyHeadingFont(option);
    setActive(option);
    setReady(true);
  }, []);

  function select(option: HeadingFontOption) {
    if (option === active) return;
    applyHeadingFont(option);
    localStorage.setItem(HEADING_FONT_STORAGE_KEY, option);
    window.location.reload();
  }

  if (!ready) return null;

  return (
    <div
      className="flex flex-col gap-2"
      role="toolbar"
      aria-label="Sélecteur de typographie des titres"
    >
      {headingFontOptions.map((option) => {
        const isActive = active === option.id;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => select(option.id)}
            aria-label={option.label}
            aria-pressed={isActive}
            title={option.label}
            className={`flex h-11 w-11 items-center justify-center border-2 bg-white text-xl leading-none shadow-md transition ${
              isActive
                ? "border-dal text-dal"
                : "border-ink/15 text-ink hover:border-ink/40"
            }`}
            style={{
              fontFamily: option.previewFamily,
              fontWeight: option.previewWeight ?? 400,
              letterSpacing: option.previewLetterSpacing,
            }}
          >
            A
          </button>
        );
      })}
    </div>
  );
}
