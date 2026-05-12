import Image from "next/image";
import Link from "next/link";
import { HomeHeroCarousel } from "@/components/HomeHeroCarousel";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { heroCarouselSlides } from "@/lib/hero-carousel";
import { homeAboutInteriorSrc } from "@/lib/home-about";
import { marques } from "@/lib/marques";
import { realisations } from "@/lib/realisations-data";

const temoignages = [
  {
    cite: "[Citation client — placeholder. Accompagnement professionnel et choix luminaires au niveau attendu.]",
    auteur: "[Nom, fonction — placeholder]",
  },
  {
    cite: "[Deuxième témoignage — placeholder. Réactivité et expertise technique sur un chantier sensible.]",
    auteur: "[Nom, secteur — placeholder]",
  },
  {
    cite: "[Troisième témoignage — placeholder. Proposition claire, budgets maîtrisés, rendu final impeccable.]",
    auteur: "[Nom, entreprise — placeholder]",
  },
];

export default function HomePage() {
  const homeMarques = marques.slice(0, 8);
  const dernieres = realisations.slice(0, 3);

  return (
    <>
      <HomeHeroCarousel slides={heroCarouselSlides} />

      <section className="bg-white">
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

          {/* Bandas blancas de separación (1 cm arriba y 1 cm abajo) */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-[1cm] bg-white z-10" />
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[1cm] bg-white z-10" />
          {/* Bandas blancas de separación (1 cm izquierda y 1 cm derecha) */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-[1cm] bg-white z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-[1cm] bg-white z-10" />

          {/* Cajita de texto pegada a la parte inferior */}
          <div className="absolute bottom-[1cm] left-0 right-0 z-20">
            <div className="w-full max-w-content px-6 pb-0 lg:px-10">
              <div className="flex min-h-[26rem] w-full max-w-[26rem] flex-col justify-end transform -translate-x-4 rounded border-2 border-black bg-white/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
                <SectionHeading
                  eyebrow="Qui sommes-nous"
                  title="DAL Éclairage Hitech, partenaire lumière des pros"
                  lead="[Paragraphe introductif — placeholder. Présentation de l’entreprise, son ancrage à Genève, son réseau de fabricants et son approche conseil pour architectes, décorateurs et entreprises.]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            variant="inverted"
            eyebrow="Nos marques"
            title="Un univers de signatures lumineuses"
            lead="[Texte d’introduction — placeholder. Sélection exigeante de fabricants européens pour répondre aux exigences techniques et esthétiques.]"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeMarques.map((m) => (
              <Link
                key={m.slug}
                href="/marques"
                className="group border border-white/20 bg-white p-6 text-ink transition hover:border-dal hover:shadow-md"
              >
                <PlaceholderImage
                  seed={`dal-brand-${m.slug}`}
                  alt={`[Logo ${m.nom} — placeholder]`}
                  aspectClassName="aspect-[3/2]"
                  className="mb-4"
                />
                <p className="font-serif text-xl text-ink group-hover:text-dal transition-colors">
                  {m.nom}
                </p>
                <p className="mt-2 font-sans text-sm text-muted line-clamp-2">{m.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/marques"
              className="inline-flex border border-white px-8 py-3 font-sans text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              Voir toutes les marques
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Réalisations"
            title="Dernières réalisations"
            lead="[Phrase d’accroche — placeholder. Aperçu de projets récents : bureaux, retail, hôtellerie et extérieurs.]"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {dernieres.map((r) => (
              <article key={r.id} className="flex flex-col border border-line bg-cream/40">
                <PlaceholderImage seed={r.seed} alt={`[${r.titre}]`} aspectClassName="aspect-[5/4]" />
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-dal">
                    {r.type}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-ink">{r.titre}</h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted">
                    {r.description}
                  </p>
                  <Link
                    href="/realisations"
                    className="mt-6 inline-flex font-sans text-sm text-ink underline-offset-4 hover:text-dal hover:underline"
                  >
                    Voir les réalisations
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/20 bg-black py-20 text-white lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            variant="inverted"
            eyebrow="Témoignages"
            title="La confiance de nos partenaires"
            align="center"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {temoignages.map((t, i) => (
              <blockquote
                key={i}
                className="flex flex-col border border-line bg-white p-8 text-center shadow-sm"
              >
                <p className="font-serif text-xl leading-snug text-ink">&ldquo;{t.cite}&rdquo;</p>
                <footer className="mt-6 font-sans text-xs uppercase tracking-widest text-muted">
                  {t.auteur}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 text-center lg:px-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink text-balance">
            Vous avez un projet ? Parlons-en
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-muted">
            [Court texte CTA — placeholder. Brief, échantillons, visite ou appel découverte.]
          </p>
          <Link
            href="/votre-projet"
            className="mt-10 inline-flex bg-dal px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-dal/90"
          >
            Démarrer votre brief
          </Link>
        </div>
      </section>
    </>
  );
}
