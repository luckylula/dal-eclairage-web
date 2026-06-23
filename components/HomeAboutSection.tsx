import { HomeTransformationShowcase } from "@/components/HomeTransformationShowcase";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { homeTransformations } from "@/lib/home-transformations";

export function HomeAboutSection() {
  return (
    <section className="grid w-full min-h-[78vh] grid-cols-1 bg-white lg:grid-cols-[minmax(280px,32%)_1fr]">
      <div className="flex flex-col justify-start px-6 pb-8 pt-14 sm:px-10 lg:px-12 lg:pb-10 lg:pt-[7%] xl:px-16 2xl:px-20">
        <Reveal direction="left" className="home-about-text-box">
          <div className="home-about-text-frame">
            <SectionHeading
              eyebrow="Qui sommes-nous"
              title="DAL Éclairage Hitech, partenaire lumière des pros"
              lead="Chez DAL Éclairage Hitech, nous ne nous contentons pas de vendre des produits. Nous écoutons, étudions et conseillons chaque projet d'éclairage, fonctionnel, d'ambiance ou décoratif, en tenant compte de vos contraintes techniques et économiques. De la conception à la mise en œuvre, nous vous accompagnons à chaque étape."
            />
            <p className="mt-6 font-sans text-sm text-muted">
              Parcourez nos transformations lumineuses — du projet initial au rendu final.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal
        direction="right"
        delay={200}
        className="home-about-video-wrap flex min-h-[52vh] w-full items-end px-6 pb-10 pt-4 sm:px-8 lg:min-h-[78vh] lg:px-10 lg:pb-[9%] lg:pt-[18%] xl:px-12"
      >
        <HomeTransformationShowcase items={homeTransformations} />
      </Reveal>
    </section>
  );
}
