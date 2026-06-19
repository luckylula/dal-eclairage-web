import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  homeTeamGroupPhotoSeed,
  homeTeamGroupPhotoSrc,
  homeTeamVariant,
  type HomeTeamVariant,
} from "@/lib/home-team";
import { equipe } from "@/lib/societe-data";

function GroupPhoto() {
  if (homeTeamGroupPhotoSrc) {
    return (
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-line sm:aspect-[2.4/1]">
        <Image
          src={homeTeamGroupPhotoSrc}
          alt="L'équipe DAL Éclairage Hitech"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
      </div>
    );
  }

  return (
    <PlaceholderImage
      seed={homeTeamGroupPhotoSeed}
      alt="[Photo de groupe — équipe DAL]"
      aspectClassName="aspect-[21/9] sm:aspect-[2.4/1]"
    />
  );
}

/** Version 1 — photo de groupe, mise en page éditoriale. */
export function HomeTeamGroupSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Notre équipe"
            title="L&apos;équipe DAL"
            lead="[Courte accroche — placeholder. Des profils complémentaires autour du conseil, de la technique et de la relation client.]"
          />
        </Reveal>

        <Reveal direction="up" delay={120} className="mt-14">
          <figure className="group relative overflow-hidden border border-line bg-ink shadow-sm">
            <GroupPhoto />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-6 pb-6 pt-24 sm:px-10 sm:pb-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
                Notre staff
              </p>
              <p className="mt-2 max-w-xl font-serif text-2xl text-white sm:text-3xl">
                Une équipe dédiée à vos projets lumineux
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal direction="fade" delay={260} className="mt-10 text-center">
          <Link
            href="/societe"
            className="inline-flex border border-ink px-8 py-3 font-sans text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
          >
            Découvrir l&apos;équipe
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/** Version 2 — portraits individuels avec le nom sous chaque photo. */
export function HomeTeamIndividualSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Notre équipe"
            title="Les visages de DAL"
            lead="[Courte accroche — placeholder. Conseil, technique et accompagnement au quotidien de vos chantiers.]"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {equipe.map((m, i) => (
            <Reveal key={m.seed} direction="up" delay={i * 90}>
              <figure className="flex h-full flex-col border border-line bg-cream/40">
                <PlaceholderImage
                  seed={m.seed}
                  alt={`Photo ${m.nom}`}
                  aspectClassName="aspect-[3/4]"
                />
                <figcaption className="flex flex-1 flex-col p-6 text-left">
                  <p className="font-serif text-xl text-ink">{m.nom}</p>
                  {m.bio ? (
                    <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-muted">{m.bio}</p>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal direction="fade" delay={300} className="mt-12 text-center">
          <Link
            href="/societe"
            className="inline-flex border border-ink px-8 py-3 font-sans text-sm font-medium text-ink transition hover:bg-ink hover:text-white"
          >
            Découvrir l&apos;équipe
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const variantSections: Record<Exclude<HomeTeamVariant, "both">, () => JSX.Element> = {
  group: HomeTeamGroupSection,
  individual: HomeTeamIndividualSection,
};

export function HomeTeamSection() {
  if (homeTeamVariant === "both") {
    return (
      <>
        <HomeTeamGroupSection />
        <div className="border-y border-line bg-cream/30 py-3 text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
            Version individuelle — aperçu
          </p>
        </div>
        <HomeTeamIndividualSection />
      </>
    );
  }

  const Section = variantSections[homeTeamVariant];
  return <Section />;
}
