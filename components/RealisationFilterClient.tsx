"use client";

import { useMemo, useState } from "react";
import { RealisationBanner } from "@/components/RealisationBanner";
import type { Realisation, RealisationType } from "@/lib/realisations-data";
import { realisationsPage } from "@/lib/realisations-data";

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
    () => (filtre === "Tous" ? realisationsPage : realisationsPage.filter((r) => r.type === filtre)),
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
                  ? "border-dal text-dal"
                  : "border-line text-muted hover:border-dal hover:text-dal"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col gap-1 lg:mt-12">
        {liste.map((r: Realisation) => (
          <RealisationBanner key={r.id} realisation={r} />
        ))}
      </div>
    </>
  );
}
