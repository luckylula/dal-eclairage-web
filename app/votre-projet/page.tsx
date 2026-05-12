import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProjetBriefForm } from "@/components/ProjetBriefForm";
import { SectionHeading } from "@/components/SectionHeading";
import { realisations } from "@/lib/realisations-data";
import { votreProjetHeroVideoSrc } from "@/lib/votre-projet-media";

const accompagnement = [
  {
    titre: "[Étude & conseil — placeholder]",
    texte: "[Analyse des usages, normes, confort visuel et cohérence esthétique.]",
  },
  {
    titre: "[Sélection produits — placeholder]",
    texte: "[Propositions techniques, échantillons et comparatifs fabricants.]",
  },
  {
    titre: "[Logistique & suivi — placeholder]",
    texte: "[Coordination délais, livraisons et support jusqu’à la mise en service.]",
  },
  {
    titre: "[Après-vente — placeholder]",
    texte: "[Assistance SAV, pièces détachées et évolutions lumineuses.]",
  },
];

export const metadata = {
  title: "Votre Projet",
};

export default function VotreProjetPage() {
  const mini = realisations.slice(0, 4);

  return (
    <>
      <section className="relative min-h-[55vh] overflow-hidden border-b border-line bg-ink">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={votreProjetHeroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/30" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-content items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
          <div className="max-w-3xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
              Accompagnement
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl text-balance">
              Expertise de lumière au service des professionnels
            </h1>
            <p className="mt-6 font-sans text-lg text-white/90">
              [Intro — placeholder. Déposez votre brief : nous revenons vers vous avec une première piste
              lumineuse.]
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Méthode"
            title="Un accompagnement structuré, sans jargon inutile"
            lead="[Texte — placeholder. Quatre étapes types pour sécuriser votre projet d’éclairage.]"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {accompagnement.map((a) => (
              <div key={a.titre} className="border border-line bg-cream/40 p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-ink">{a.titre}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Brief"
            title="Parlez-nous de votre espace"
            lead="[Formulaire — placeholder. Les champs marqués * sont obligatoires.]"
          />
          <div className="mt-12 max-w-3xl border border-line bg-white p-6 sm:p-10">
            <ProjetBriefForm />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions fréquentes sur l’éclairage"
            lead="[Sous-texte — placeholder. Réponses génériques à affiner avec votre expert DAL.]"
          />
          <div className="mt-12 max-w-4xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Inspiration"
            title="Réalisations qui posent le ton"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mini.map((r) => (
              <Link key={r.id} href="/realisations" className="group block border border-line bg-white">
                <PlaceholderImage seed={r.seed} alt={`[${r.titre}]`} aspectClassName="aspect-square" />
                <div className="p-4">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-dal">
                    {r.type}
                  </p>
                  <p className="mt-1 font-serif text-lg text-ink group-hover:text-dal transition-colors">
                    {r.titre}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
