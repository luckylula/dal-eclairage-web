"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MarqueCard } from "@/components/MarquesGrid";
import type { MarqueGridItem } from "@/components/MarquesGridClient";

type Props = {
  items: MarqueGridItem[];
};

export function MarquesMobileCarousel({ items }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = slideRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx >= 0) setActive(idx);
        }
      },
      { root: track, threshold: 0.6 },
    );

    for (const slide of slideRefs.current) {
      if (slide) observer.observe(slide);
    }

    return () => observer.disconnect();
  }, [items.length]);

  const scrollTo = useCallback((index: number) => {
    const next = Math.max(0, Math.min(index, items.length - 1));
    slideRefs.current[next]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActive(next);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="md:hidden" aria-roledescription="carousel" aria-label="Nos marques">
      <div
        ref={trackRef}
        className="marques-carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map(({ marque, image }, index) => (
          <div
            key={marque.slug}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="w-[min(88vw,22rem)] shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${marque.nom} — ${index + 1} sur ${items.length}`}
          >
            <MarqueCard marque={marque} image={image} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => scrollTo(active - 1)}
          disabled={active === 0}
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-white text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Marque précédente"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path strokeWidth="1.5" d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <p className="truncate font-sans text-sm font-medium text-ink">
            {items[active]?.marque.nom}
          </p>
          <p className="font-sans text-xs tabular-nums text-muted">
            {active + 1} / {items.length}
          </p>
          <div className="flex max-w-full flex-wrap justify-center gap-1.5">
            {items.map((item, index) => (
              <button
                key={item.marque.slug}
                type="button"
                onClick={() => scrollTo(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === active ? "w-6 bg-dal" : "w-1.5 bg-line hover:bg-ink/30"
                }`}
                aria-label={`Aller à ${item.marque.nom}`}
                aria-current={index === active ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollTo(active + 1)}
          disabled={active === items.length - 1}
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-white text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-35"
          aria-label="Marque suivante"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
            <path strokeWidth="1.5" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
