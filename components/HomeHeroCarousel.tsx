"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { HeroSlide } from "@/lib/hero-carousel";

const INTERVAL_MS = 5500;

type Props = {
  slides: HeroSlide[];
};

export function HomeHeroCarousel({ slides }: Props) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const len = slides.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + len) % len);
    },
    [len],
  );

  useEffect(() => {
    if (len <= 1 || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [len, reducedMotion]);

  return (
    <section
      className="relative min-h-[78vh] w-full overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="Réalisations DAL — diaporama"
    >
      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
              i === index ? "z-0 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/40 to-black/25" />

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-content flex-col justify-end px-6 pb-24 pt-32 sm:pb-28 lg:px-10 lg:pb-32">
        <p
          className="hero-anim hero-from-left font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white/80"
          style={{ ["--hero-delay" as never]: "120ms" }}
        >
          Genève · Suisse
        </p>
        <h1
          className="hero-anim hero-from-left mt-4 max-w-3xl font-sans text-4xl font-medium leading-tight tracking-wide text-balance text-white sm:text-5xl md:text-5xl xl:text-6xl"
          style={{ ["--hero-delay" as never]: "240ms" }}
        >
          Spécialiste en éclairage technique et architectural sur Genève.
        </h1>
        <p
          className="hero-anim hero-from-left mt-6 max-w-xl font-sans text-lg text-white/85"
          style={{ ["--hero-delay" as never]: "420ms" }}
        >
          Nous accompagnons architectes, bureaux d&apos;étude et professionnels du bâtiment dans leurs projets d&apos;éclairage.
        </p>

        <div
          className="hero-anim hero-from-right pointer-events-auto mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          style={{ ["--hero-delay" as never]: "780ms" }}
        >
          <div className="flex items-center gap-2" role="tablist" aria-label="Choisir une diapositive">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${slide.lieu} — image ${i + 1} sur ${len}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/70">
            <span className="text-white/90">{slides[index]?.lieu}</span>
            {" · "}
            {index + 1} / {len}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Image précédente"
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Image suivante"
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {slides[index] ? `${slides[index].lieu}, image ${index + 1} sur ${len}` : ""}
      </p>
    </section>
  );
}
