"use client";

import Link from "next/link";
import { RealisationImage } from "@/components/RealisationImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import type { Realisation } from "@/lib/realisations-data";

const STAIR_DIRECTIONS = ["left", "right", "up"] as const;

type Props = {
  items: Realisation[];
};

export function HomeRealisationsStaircase({ items }: Props) {
  return (
    <section className="home-realisation-section bg-black text-white">
      <div className="home-section-inner flex h-full min-h-0 flex-col">
        <Reveal direction="left" className="shrink-0 md:max-w-sm">
          <SectionHeading
            variant="inverted"
            eyebrow="Réalisations"
            title="Dernières réalisations"
          />
        </Reveal>

        <div className="home-realisation-stair mt-4 md:mt-5">
          {items.map((r, i) => (
            <Reveal
              key={r.id}
              direction={STAIR_DIRECTIONS[i] ?? "up"}
              delay={i * 200}
              className="home-realisation-stair-item h-full"
            >
              <Link
                href="/realisations"
                className="group relative block h-full w-full bg-ink"
              >
                <RealisationImage
                  id={r.id}
                  seed={r.seed}
                  alt={r.titre}
                  fillContainer
                  priority={i === 0}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5">
                  <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-dal sm:text-[10px]">
                    {r.type}
                  </p>
                  <h3 className="mt-1 max-w-[18ch] font-serif text-base leading-snug text-white sm:text-lg md:text-xl">
                    {r.titre}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
