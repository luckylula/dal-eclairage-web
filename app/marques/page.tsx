import { MarqueBrandVisual } from "@/components/MarqueBrandVisual";
import { marquesHeroVideoSrc } from "@/lib/marques-media";
import { marques } from "@/lib/marques";

export const metadata = {
  title: "Nos Marques",
};

export default function MarquesPage() {
  return (
    <>
      <section className="relative min-h-[45vh] overflow-hidden border-b border-line bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
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
              [Sous-titre — placeholder. Sélection de signatures pour projets architecturaux et décoratifs.]
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content space-y-20 px-6 lg:px-10">
          {marques.map((m, index) => {
            const visuel = (
              <MarqueBrandVisual
                nom={m.nom}
                imageSrc={m.imageSrc}
                fit={m.imageFit}
                tone={m.imageTone}
              />
            );
            const texte = (
              <div>
                <h2 className="font-serif text-3xl text-ink sm:text-4xl">{m.nom}</h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-muted">{m.description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={m.siteFabricant}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-ink px-6 py-2.5 font-sans text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
                  >
                    Site web
                  </a>
                  <a
                    href={m.lienCatalogue}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex border border-dal px-6 py-2.5 font-sans text-sm font-medium text-dal transition hover:bg-dal hover:text-white"
                  >
                    Catalogue
                  </a>
                </div>
              </div>
            );
            return (
              <article
                key={m.slug}
                className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16"
              >
                {index % 2 === 0 ? (
                  <>
                    {visuel}
                    {texte}
                  </>
                ) : (
                  <>
                    <div className="lg:order-2">{texte}</div>
                    <div className="lg:order-1">{visuel}</div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
