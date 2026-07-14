import { MarquesGridClient } from "@/components/MarquesGridClient";
import { SectionHeading } from "@/components/SectionHeading";
import { resolveMarqueImage } from "@/lib/get-marque-image";
import { marquesHeroVideoSrc } from "@/lib/marques-media";
import { marques } from "@/lib/marques";

export const metadata = {
  title: "Nos Marques",
};

export default function MarquesPage() {
  const marqueItems = marques.map((marque) => ({
    marque,
    image: resolveMarqueImage(marque),
  }));

  return (
    <>
      <section className="relative min-h-[45vh] overflow-hidden border-b border-line bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
          src={marquesHeroVideoSrc}
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
              Partenaires fabricants
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl md:text-6xl">Nos Marques</h1>
            <p className="mt-4 max-w-xl font-sans text-lg text-white/90">
              Sélection de signatures pour projets architecturaux et décoratifs.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream/25 py-20 lg:py-28">
        <div className="marques-section-bg pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="14 partenaires"
            title="Un réseau de fabricants d&apos;exception"
            lead="Des signatures reconnues pour l&apos;éclairage technique, architectural et décoratif."
          />
        </div>

        <div className="relative mx-auto mt-14 max-w-[85rem] px-6 lg:px-10">
          <MarquesGridClient items={marqueItems} />
        </div>
      </section>
    </>
  );
}
