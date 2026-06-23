"use client";

import Link from "next/link";
import { RealisationImage } from "@/components/RealisationImage";
import { Reveal } from "@/components/Reveal";
import type { Realisation } from "@/lib/realisations-data";

type Props = {
  items: Realisation[];
};

export function ProjetRealisationsGrid({ items }: Props) {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      {items.map((r, i) => (
        <Reveal
          key={r.id}
          direction={i % 2 === 0 ? "left" : "right"}
          delay={i * 120}
          className="projet-realisation-slide"
        >
          <Link
            href="/realisations"
            className="group relative block aspect-[4/5] overflow-hidden border border-white/20 bg-ink"
          >
            <RealisationImage
              id={r.id}
              seed={r.seed}
              alt={r.titre}
              fillContainer
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-dal sm:text-[10px]">
                {r.type}
              </p>
              <p className="mt-1 font-serif text-base leading-snug text-white sm:text-lg">
                {r.titre}
              </p>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
