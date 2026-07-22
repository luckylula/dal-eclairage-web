import Link from "next/link";
import { HomeAboutSection } from "@/components/HomeAboutSection";
import { HomeHeroCarousel } from "@/components/HomeHeroCarousel";
import { HomeRealisationsStaircase } from "@/components/HomeRealisationsStaircase";
import { HomeTeamSection } from "@/components/HomeTeamSection";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { accueilHeroVideos } from "@/lib/secciones-media";
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
  const dernieres = realisations.slice(0, 3);

  return (
    <>
      <HomeHeroCarousel videos={accueilHeroVideos} />

      <HomeTeamSection />

      <HomeRealisationsStaircase items={dernieres} />

      <HomeAboutSection />

      <section className="border-y border-white/20 bg-black py-20 text-white lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <Reveal direction="up">
            <SectionHeading
              variant="inverted"
              eyebrow="Témoignages"
              title="La confiance de nos partenaires"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {temoignages.map((t, i) => {
              const dir = i === 0 ? "left" : i === temoignages.length - 1 ? "right" : "up";
              return (
                <Reveal key={i} direction={dir} delay={i * 140}>
                  <blockquote className="flex h-full flex-col border border-line bg-white p-8 text-center shadow-sm">
                    <p className="font-serif text-xl leading-snug text-ink">&ldquo;{t.cite}&rdquo;</p>
                    <footer className="mt-6 font-sans text-xs uppercase tracking-widest text-muted">
                      {t.auteur}
                    </footer>
                  </blockquote>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 text-center lg:px-10">
          <Reveal direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink text-balance">
              Vous avez un projet ? Parlons-en
            </h2>
          </Reveal>
          <Reveal direction="up" delay={140}>
            <Link
              href="/votre-projet"
              className="mt-10 inline-flex bg-dal px-10 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-dal/90"
            >
              Démarrer votre brief
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
