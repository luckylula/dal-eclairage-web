"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HomeTransformation } from "@/lib/home-transformations";

const FALLBACK_MS = 9000;

type Props = {
  items: HomeTransformation[];
};

export function HomeTransformationShowcase({ items }: Props) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mediaErrors, setMediaErrors] = useState<Record<string, boolean>>({});
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [flashKey, setFlashKey] = useState(0);
  const skipInitialFlash = useRef(true);

  const item = items[active];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      setProgress(0);
      setActive((i) => (i + dir + items.length) % items.length);
    },
    [items.length],
  );

  const goTo = useCallback((index: number) => {
    setProgress(0);
    setActive(index);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (skipInitialFlash.current) {
      skipInitialFlash.current = false;
      return;
    }
    setFlashKey((k) => k + 1);
  }, [active, reducedMotion]);

  useEffect(() => {
    const video = videoRefs.current[active];
    if (!video || mediaErrors[item?.id ?? ""]) return;

    video.currentTime = 0;
    if (!paused) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }

    videoRefs.current.forEach((v, i) => {
      if (!v || i === active) return;
      v.pause();
      v.currentTime = 0;
    });
  }, [active, item?.id, mediaErrors, paused]);

  useEffect(() => {
    if (items.length <= 1 || paused || reducedMotion) return;

    const current = items[active];
    if (!current || mediaErrors[current.id]) {
      const id = window.setTimeout(() => go(1), FALLBACK_MS);
      return () => window.clearTimeout(id);
    }

    const video = videoRefs.current[active];
    if (!video) return;

    const onEnded = () => go(1);
    video.addEventListener("ended", onEnded);
    return () => video.removeEventListener("ended", onEnded);
  }, [active, go, items, mediaErrors, paused, reducedMotion]);

  const onTimeUpdate = useCallback(() => {
    const video = videoRefs.current[active];
    if (!video || !video.duration) return;
    setProgress(video.currentTime / video.duration);
  }, [active]);

  if (!item) return null;

  return (
    <div
      className="group/showcase w-full"
      aria-roledescription="carousel"
      aria-label="Transformations lumineuses"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden border border-line bg-ink shadow-sm">
        <div
          className="flex h-full w-full transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}
        >
          {items.map((slide, index) => {
            const failed = mediaErrors[slide.id];

            return (
              <div
                key={slide.id}
                className={`transformation-slide relative h-full min-w-full shrink-0 overflow-hidden ${
                  index === active ? "is-active" : ""
                }`}
              >
                {!failed ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={slide.videoSrc}
                    poster={slide.posterSrc}
                    muted
                    playsInline
                    preload={index === active ? "auto" : "metadata"}
                    onError={() =>
                      setMediaErrors((prev) => ({ ...prev, [slide.id]: true }))
                    }
                    onTimeUpdate={index === active ? onTimeUpdate : undefined}
                    aria-label={slide.titre}
                    className="transformation-video-media absolute inset-0 h-full w-full object-cover"
                  />
                ) : slide.posterSrc ? (
                  <Image
                    src={slide.posterSrc}
                    alt={slide.titre}
                    fill
                    className="transformation-video-media object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                  />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        {!reducedMotion ? (
          <div key={flashKey} className="transformation-light-flash" aria-hidden />
        ) : null}

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-1 bg-white/15"
          aria-hidden
        >
          <div
            className="h-full bg-dal transition-[width] duration-150 ease-linear motion-reduce:transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div
              key={item.id}
              className="transformation-caption pointer-events-none min-w-0"
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dal">
                Avant / Après
              </p>
              <p className="mt-1 font-serif text-xl text-white sm:text-2xl">{item.titre}</p>
              {item.lieu ? (
                <p className="mt-1 font-sans text-sm text-white/75">{item.lieu}</p>
              ) : null}
            </div>

            <div className="pointer-events-auto flex shrink-0 items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15"
                aria-label="Transformation précédente"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {items.map((t, index) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === active ? "w-8 bg-dal" : "w-2 bg-white/45 hover:bg-white/70"
                    }`}
                    aria-label={`Aller à ${t.titre}`}
                    aria-current={index === active ? "true" : undefined}
                  />
                ))}
              </div>
              <span className="font-sans text-xs tabular-nums text-white/70">
                {active + 1}/{items.length}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/15"
                aria-label="Transformation suivante"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {item.titre}, transformation {active + 1} sur {items.length}
        {paused ? " — lecture en pause" : ""}
      </p>
    </div>
  );
}
