import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SectionHeading } from "@/components/SectionHeading";
import { societeHeroVideoSrc, societeHistoireInteriorSrc } from "@/lib/societe-media";
import { equipe } from "@/lib/societe-data";

const valeurs = [
  {
    titre: "[Excellence — placeholder]",
    texte: "[Description courte — placeholder. Qualité produit et exigence du rendu.]",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.5" d="M12 3l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 22l2.3-7-6-4.6h7.6L12 3z" />
      </svg>
    ),
  },
  {
    titre: "[Proximité — placeholder]",
    texte: "[Description courte — placeholder. Écoute, réactivité, suivi de chantier.]",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.5" d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" />
        <circle cx="12" cy="11" r="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    titre: "[Innovation — placeholder]",
    texte: "[Description courte — placeholder. LED, contrôle, durabilité.]",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.5" d="M9 18h6M10 22h4M12 2v1M4 12H3m18 0h-1M5.6 5.6l-.7-.7m14.8 14.8l-.7-.7M5.6 18.4l-.7.7M18.4 5.6l.7-.7M12 6a6 6 0 016 6c0 3-2 5-4 6h-4c-2-1-4-3-4-6a6 6 0 016-6z" />
      </svg>
    ),
  },
  {
    titre: "[Transparence — placeholder]",
    texte: "[Description courte — placeholder. Conseils avisés, budgets lisibles.]",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <path strokeWidth="1.5" d="M4 6h16M4 12h10M4 18h16" />
      </svg>
    ),
  },
];

export const metadata = {
  title: "La Société",
};

export default function SocietePage() {
  return (
    <>
      <section className="relative min-h-[48vh] overflow-hidden border-b border-line bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={societeHeroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/30" aria-hidden />
        <div className="relative z-10 mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-28">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
            DAL Éclairage Hitech
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl text-balance text-white sm:text-5xl md:text-6xl">
            La Société
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg text-white/90">
            [Accroche — placeholder. Histoire, équipe et valeurs au service des projets lumineux à Genève.]
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-2 lg:items-start lg:gap-20 lg:px-10">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Histoire"
              title="Une présence ancrée dans l’éclairage professionnel"
            />
            <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-muted">
              <p>
                [Paragraphe 1 — placeholder. Genève comme base, réseau européen de fabricants, culture du
                détail et du service.]
              </p>
              <p>
                [Paragraphe 2 — placeholder. Accompagnement des bureaux d’études, décorateurs et maîtres
                d’ouvrage sur l’ensemble du cycle projet.]
              </p>
              <p>
                [Paragraphe 3 — placeholder. Showroom, échantillons, planification lumière et coordination
                logistique.]
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-line">
              <Image
                src={societeHistoireInteriorSrc}
                alt="[Intérieur — histoire DAL]"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/20 bg-black py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            variant="inverted"
            eyebrow="Équipe"
            title="Les visages de DAL"
            lead="[Introduction équipe — placeholder. Profils complémentaires autour du conseil, de la technique et de la relation client.]"
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((m) => (
              <article key={m.nom} className="border border-line bg-white p-6 text-center shadow-sm">
                <div className="mx-auto w-40">
                  <PlaceholderImage
                    seed={m.seed}
                    alt={`[Photo ${m.nom}]`}
                    aspectClassName="aspect-square"
                    className="rounded-full border border-line"
                  />
                </div>
                <h3 className="mt-6 font-serif text-xl text-ink">{m.nom}</h3>
                <p className="mt-1 font-sans text-sm text-muted">{m.role}</p>
                <Link
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-sans text-xs uppercase tracking-widest text-dal hover:underline"
                >
                  LinkedIn
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Valeurs"
            title="Ce qui guide notre métier"
            align="center"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {valeurs.map((v) => (
              <div
                key={v.titre}
                className="flex gap-6 border border-line bg-cream/50 p-8 lg:p-10"
              >
                <div className="text-dal">{v.icon}</div>
                <div>
                  <h3 className="font-serif text-2xl text-ink">{v.titre}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{v.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
