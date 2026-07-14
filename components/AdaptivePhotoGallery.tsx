"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type AdaptivePhotoSlide = {
  src: string;
  width: number;
  height: number;
  label: string;
};

type Props = {
  slides: AdaptivePhotoSlide[];
  ariaLabel: string;
  imageSizes: string;
  tone?: "dark" | "light";
  controls?: "overlay" | "below";
  caption?: ReactNode;
  className?: string;
};

export function AdaptivePhotoGallery({
  slides,
  ariaLabel,
  imageSizes,
  tone = "dark",
  controls = "overlay",
  caption,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const len = slides.length;
  const active = slides[index];
  const activeHeight =
    containerWidth > 0 && active ? (containerWidth * active.height) / active.width : undefined;

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + len) % len);
    },
    [len],
  );

  const isDark = tone === "dark";
  const arrowClass = isDark
    ? "border border-white/35 bg-black/35 text-white backdrop-blur-sm hover:border-dal hover:text-dal"
    : "border border-black/15 bg-white/90 text-ink shadow-sm hover:border-dal hover:text-dal";
  const dotInactiveClass = isDark ? "bg-white/45 hover:bg-white/70" : "bg-black/20 hover:bg-black/35";
  const counterClass = isDark ? "text-white/60" : "text-muted";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setContainerWidth(el.clientWidth);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const controlsUi = (
    <div className="flex items-center gap-3">
      {slides.map((slide, i) => (
        <button
          key={slide.src}
          type="button"
          aria-label={`${slide.label} — photo ${i + 1} sur ${len}`}
          aria-current={i === index ? "true" : undefined}
          onClick={() => setIndex(i)}
          className={`h-2 rounded-full transition-all ${
            i === index ? "w-8 bg-dal" : `w-2 ${dotInactiveClass}`
          }`}
        />
      ))}
      <span className={`ml-1 font-sans text-[11px] uppercase tracking-[0.2em] ${counterClass}`}>
        {index + 1} / {len}
      </span>
    </div>
  );

  if (!slides.length) return null;

  return (
    <figure
      className={`relative overflow-hidden border border-line bg-line shadow-sm ${className}`}
      aria-roledescription="gallery"
      aria-label={ariaLabel}
    >
      <div ref={containerRef} className="relative w-full">
        <div
          className={`relative overflow-hidden ${
            reducedMotion ? "" : "transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          }`}
          style={{ height: activeHeight }}
        >
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-x-0 top-0 transition-opacity duration-500 ease-out ${
                i === index ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                width={slide.width}
                height={slide.height}
                className="h-auto w-full"
                sizes={imageSizes}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {len > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Photo précédente"
              className={`absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center transition sm:left-4 sm:h-11 sm:w-11 ${arrowClass}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                <path d="M14 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Photo suivante"
              className={`absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center transition sm:right-4 sm:h-11 sm:w-11 ${arrowClass}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden>
                <path d="M10 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        ) : null}
      </div>

      {controls === "overlay" && caption ? (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-6 pb-6 pt-24 sm:px-10 sm:pb-8">
          {caption}
          {len > 1 ? <div className="pointer-events-auto mt-5">{controlsUi}</div> : null}
        </figcaption>
      ) : null}

      {controls === "below" && len > 1 ? (
        <figcaption className="border-t border-line bg-white px-4 py-4">{controlsUi}</figcaption>
      ) : null}
    </figure>
  );
}
