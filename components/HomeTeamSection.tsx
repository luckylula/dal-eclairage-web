import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { homeTeamGroupPhotoSeed, homeTeamGroupPhotoSrc } from "@/lib/home-team";

function GroupPhoto() {
  if (homeTeamGroupPhotoSrc) {
    return (
      <div className="relative h-full min-h-[42vh] w-full overflow-hidden bg-line">
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
      aspectClassName="min-h-[42vh] h-full"
    />
  );
}

export function HomeTeamSection() {
  return (
    <section className="home-section bg-white">
      <div className="home-section-inner">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Notre équipe"
            title="L&apos;équipe DAL"
            lead="[Courte accroche — placeholder. Des profils complémentaires autour du conseil, de la technique et de la relation client.]"
          />
        </Reveal>

        <Reveal direction="up" delay={120} className="mt-14">
          <figure className="group relative min-h-[42vh] overflow-hidden border border-line bg-ink shadow-sm">
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
