"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef } from "react";
import { homeAboutInteriorSrc } from "@/lib/home-about";

type Props = {
  children: ReactNode;
};

/**
 * Bloc photo « Qui sommes-nous ». L’entrée du panneau utilise la Web Animations API
 * (pas seulement des classes CSS) pour un déplacement gauche → droite bien visible.
 * Le ref d’observation est sur toute la <section>, pas sur le panneau déplacé.
 */
export function HomeAboutBand({ children }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      panel.style.opacity = "1";
      panel.style.transform = "translateX(-1rem)";
      doneRef.current = true;
      return;
    }

    const run = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      panel.animate(
        [
          { opacity: 0, transform: "translateX(-90vw)" },
          { opacity: 1, transform: "translateX(-1rem)" },
        ],
        {
          duration: 3800,
          easing: "cubic-bezier(0.15, 0.85, 0.25, 1)",
          fill: "forwards",
        },
      );
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        run();
      },
      { threshold: 0, rootMargin: "0px 0px 35% 0px" },
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="relative min-h-[60vh] lg:min-h-[72vh]">
        <Image
          src={homeAboutInteriorSrc}
          alt="[Intérieur — réalisation DAL]"
          fill
          priority={false}
          className="object-cover"
          sizes="100vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/75 via-white/0 to-white/0" />

        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[1cm] bg-white" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[1cm] bg-white" />
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[1cm] bg-white" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[1cm] bg-white" />

        <div className="absolute bottom-[1cm] left-0 right-0 z-20">
          <div className="mx-auto w-full max-w-content px-6 pb-0 pr-8 sm:pr-12 lg:px-10 lg:pr-16">
            <div className="min-h-[26rem] w-full max-w-[26rem]">
              <div
                ref={panelRef}
                className="flex min-h-[26rem] w-full flex-col justify-end rounded border-2 border-black bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8 [will-change:transform,opacity]"
                style={{ opacity: 0, transform: "translateX(-90vw)" }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
