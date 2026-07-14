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
            lead="Notre mission est d'être à l'écoute et comprendre vos besoins, s'attacher à construire une relation de confiance fondée sur la proximité, le conseil personnalisé et la réactivité."
          />
        </Reveal>

        <div className="mt-14">
          <HomeTeamPhoto />
        </div>
      </div>
    </section>
  );
}
