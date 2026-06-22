"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HomeTransformation } from "@/lib/home-transformations";

type Props = {
  items: HomeTransformation[];
};

export function HomeTransformationShowcase({ items }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [mediaError, setMediaError] = useState(false);

  const item = items[active];

  const go = useCallback(
    (dir: -1 | 1) => {
      setActive((i) => (i + dir + items.length) % items.length);
      setMediaError(false);
    },
    [items.length],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || mediaError) return;
    video.load();
    void video.play().catch(() => undefined);
  }, [active, mediaError, item?.videoSrc]);

  if (!item) return null;

  return (
    <div
      className="w-full"
      aria-roledescription="carousel"
      aria-label="Transformations lumineuses"
    >
      <div className="relative w-full overflow-hidden border border-line bg-ink shadow-sm aspect-video">
        {!mediaError ? (
          <video
            ref={videoRef}
            key={item.videoSrc}
            src={item.videoSrc}
            poster={item.posterSrc}
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setMediaError(true)}
            aria-label={item.titre}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : item.posterSrc ? (
          <Image
            src={item.posterSrc}
            alt={item.titre}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="pointer-events-none min-w-0">
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
                    onClick={() => {
                      setActive(index);
                      setMediaError(false);
                    }}
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
    </div>
  );
}
