"use client";

import { useMemo, useState } from "react";
import { RealisationImage } from "@/components/RealisationImage";
import type { Realisation, RealisationType } from "@/lib/realisations-data";
import { realisations as all } from "@/lib/realisations-data";

const filtres: Array<"Tous" | RealisationType> = [
  "Tous",
  "Technique",
  "Décoratif",
  "Extérieur",
  "Événements",
];

export function RealisationFilterClient() {
  const [filtre, setFiltre] = useState<(typeof filtres)[number]>("Tous");

  const liste = useMemo(
    () => (filtre === "Tous" ? all : all.filter((r) => r.type === filtre)),
    [filtre],
  );

  return (
    <>
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <div className="flex flex-wrap gap-2">
          {filtres.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltre(f)}
              className={`border px-4 py-2 font-sans text-xs uppercase tracking-widest transition ${
                filtre === f
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col gap-1 lg:mt-12">
        {liste.map((r: Realisation) => (
          <article
            key={r.id}
            className="group relative aspect-[16/9] w-full overflow-hidden bg-ink sm:aspect-[21/9]"
          >
            <RealisationImage
              id={r.id}
              seed={r.seed}
              alt={r.titre}
              fillContainer
              sizes="100vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-5 pt-12 sm:px-10 sm:pb-6 lg:px-12">
              <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-dal sm:text-[10px]">
                {r.type}
              </p>
              <h3 className="mt-1 max-w-3xl font-serif text-base leading-snug text-white sm:text-lg md:text-xl">
                {r.titre}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
