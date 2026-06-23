import { RealisationFilterClient } from "@/components/RealisationFilterClient";
import { realisationsHeroVideoSrc } from "@/lib/realisations-media";

export const metadata = {
  title: "Réalisations",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="relative min-h-[45vh] overflow-hidden border-b border-line bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={realisationsHeroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/30" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[45vh] max-w-content items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-20">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
              Projets
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl md:text-6xl">Réalisations</h1>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 pt-20 lg:pb-28 lg:pt-28">
        <RealisationFilterClient />
      </section>
    </>
  );
}
