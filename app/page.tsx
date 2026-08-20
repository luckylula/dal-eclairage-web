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
    cite:
      "Nous avons particulièrement apprécié la qualité de l'accompagnement et le professionnalisme de l'équipe tout au long de notre collaboration. Les conseils apportés ont toujours été pertinents et adaptés à nos besoins, avec une excellente connaissance des produits et une réelle attention portée à nos attentes. La qualité de la lustrerie proposée, le choix des produits ainsi que le sérieux dans le suivi des demandes sont également des points que nous avons beaucoup appréciés. La disponibilité, la réactivité et la fiabilité de l'équipe ont largement contribué au bon déroulement de nos projets et ont permis d'établir une relation de confiance. C'est donc avec plaisir que nous recommandons cette entreprise à toute personne recherchant un partenaire compétent, sérieux et de bon conseil dans le domaine de la lustrerie.",
    auteur: "Sébastien Blanchet",
    role: "Directeur — Econtrol SA",
  },
  {
    cite:
      "Nous avons été très satisfaits de notre expérience avec votre équipe. Dès les premiers échanges, nous avons apprécié votre écoute, votre disponibilité et la qualité de vos conseils. L'accompagnement a été professionnel, clair et personnalisé, ce qui nous a permis d'avancer sereinement dans notre projet. Nous avons également été pleinement satisfaits de la qualité des produits et du sérieux avec lequel chaque étape a été suivie. La communication, le respect des engagements et l'attention portée à nos besoins ont été de vrais points forts. Nous recommandons sans hésitation votre entreprise pour votre professionnalisme, votre expertise et la qualité de votre accompagnement.",
    auteur: "M. Agostini",
    role: "Directeur technique — MANOTEL",
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
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {temoignages.map((t, i) => {
              const dir = i === 0 ? "left" : "right";
              return (
                <Reveal key={t.auteur} direction={dir} delay={i * 140}>
                  <blockquote className="flex h-full flex-col border border-line bg-white p-8 text-left shadow-sm sm:p-10">
                    <p className="font-serif text-base leading-relaxed text-ink sm:text-lg">
                      &ldquo;{t.cite}&rdquo;
                    </p>
                    <footer className="mt-8 border-t border-line pt-5">
                      <p className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                        {t.auteur}
                      </p>
                      <p className="mt-1 font-sans text-xs uppercase tracking-[0.16em] text-muted">
                        {t.role}
                      </p>
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
