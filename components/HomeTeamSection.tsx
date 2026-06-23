import Link from "next/link";
import { HomeTeamPhoto } from "@/components/HomeTeamPhoto";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

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

        <div className="mt-14">
          <HomeTeamPhoto />
        </div>

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
