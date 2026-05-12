"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
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

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {liste.map((r: Realisation) => (
          <article key={r.id} className="group border border-line bg-white">
            <PlaceholderImage seed={r.seed} alt={`[${r.titre}]`} aspectClassName="aspect-[4/3]" />
            <div className="p-6">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-dal">
                {r.type}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-ink group-hover:text-dal transition-colors">
                {r.titre}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{r.description}</p>
              <Link
                href="/contact"
                className="mt-5 inline-block font-sans text-sm text-ink underline-offset-4 hover:text-dal hover:underline"
              >
                [En savoir plus — placeholder]
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
