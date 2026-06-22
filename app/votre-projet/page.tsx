import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProjetBriefForm } from "@/components/ProjetBriefForm";
import { SectionHeading } from "@/components/SectionHeading";
import { realisations } from "@/lib/realisations-data";
import { votreProjetHeroVideoSrc } from "@/lib/votre-projet-media";

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
              Vous avez un projet d&apos;éclairage ?
            </h1>
            <p className="mt-6 font-sans text-lg text-white/90">
              Que vous soyez architecte, décorateur ou installateur, nous vous accompagnons de
              l&apos;étude jusqu&apos;à la réalisation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            eyebrow="Brief"
            title="Parlez-nous de votre espace"
            lead="Les champs marqués * sont obligatoires."
          />
          <div className="mt-12 max-w-3xl border border-line bg-white p-6 sm:p-10">
            <ProjetBriefForm />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <SectionHeading
            variant="inverted"
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
