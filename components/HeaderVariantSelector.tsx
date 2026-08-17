"use client";

import { useEffect, useState } from "react";
import {
  applyHeaderVariant,
  HEADER_VARIANT_STORAGE_KEY,
  headerVariantOptions,
  isHeaderVariant,
  type HeaderVariant,
} from "@/lib/header-variant";

export function HeaderVariantSelector() {
  const [active, setActive] = useState<HeaderVariant>("a");

  useEffect(() => {
    const stored = localStorage.getItem(HEADER_VARIANT_STORAGE_KEY);
    const variant = isHeaderVariant(stored) ? stored : "a";
    applyHeaderVariant(variant);
    setActive(variant);
  }, []);

  function select(variant: HeaderVariant) {
    localStorage.setItem(HEADER_VARIANT_STORAGE_KEY, variant);
    applyHeaderVariant(variant);
    setActive(variant);
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] w-[min(22rem,calc(100vw-3rem))] rounded-sm border border-white/20 bg-black/90 p-3 shadow-lg backdrop-blur-sm"
      role="group"
      aria-label="Sélecteur de barre de navigation"
    >
      <p className="mb-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-dal">
        Barre menu — validation
      </p>
      <div className="flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-2">
        {headerVariantOptions.map((option) => {
          const selected = active === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => select(option.id)}
              className={`flex flex-1 flex-col items-start gap-0.5 rounded-sm border px-2.5 py-2 text-left transition ${
                selected
                  ? "border-dal bg-dal/10 text-white"
                  : "border-white/15 text-white/75 hover:border-white/30 hover:text-white"
              }`}
              aria-pressed={selected}
            >
              <span className="font-sans text-xs font-semibold">{option.label}</span>
              <span className="font-sans text-[0.625rem] leading-snug text-white/65">{option.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
