"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { homeTeamGroupPhotoSeed, homeTeamGroupPhotoSrc } from "@/lib/home-team";

export function HomeTeamPhoto() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <figure
      ref={ref}
      className={`group relative min-h-[42vh] overflow-hidden border border-line bg-ink shadow-sm transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div
        className={`absolute inset-0 transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none ${
          visible ? "scale-100" : "scale-110"
        }`}
      >
        {homeTeamGroupPhotoSrc ? (
          <Image
            src={homeTeamGroupPhotoSrc}
            alt="L'équipe DAL Éclairage Hitech"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
        ) : (
          <PlaceholderImage
            seed={homeTeamGroupPhotoSeed}
            alt="[Photo de groupe — équipe DAL]"
            aspectClassName="min-h-[42vh] h-full"
          />
        )}
      </div>

      <figcaption
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-6 pb-6 pt-24 transition-all duration-[2000ms] delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-10 sm:pb-8 motion-reduce:transition-none ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
          Notre staff
        </p>
        <p className="mt-2 max-w-xl font-serif text-2xl text-white sm:text-3xl">
          Une équipe dédiée à vos projets lumineux
        </p>
      </figcaption>
    </figure>
  );
}
