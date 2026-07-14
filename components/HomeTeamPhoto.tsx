"use client";

import { useEffect, useRef, useState } from "react";
import { AdaptivePhotoGallery } from "@/components/AdaptivePhotoGallery";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { homeTeamGroupPhotoSeed, homeTeamSlides } from "@/lib/home-team";

export function HomeTeamPhoto() {
  const figureRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = figureRef.current;
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

  if (!homeTeamSlides.length) {
    return (
      <PlaceholderImage
        seed={homeTeamGroupPhotoSeed}
        alt="[Photo de groupe — équipe DAL]"
        aspectClassName="aspect-[3/2] w-full"
      />
    );
  }

  return (
    <div
      ref={figureRef}
      className={`transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <AdaptivePhotoGallery
        slides={homeTeamSlides}
        ariaLabel="Photos de l'équipe DAL"
        imageSizes="(max-width: 1280px) 100vw, 1200px"
        tone="dark"
        controls="overlay"
        className="bg-ink"
        caption={
          <>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
              Notre staff
            </p>
            <p className="mt-2 max-w-xl font-serif text-2xl text-white sm:text-3xl">
              Une équipe dédiée à vos projets lumineux
            </p>
          </>
        }
      />
    </div>
  );
}
