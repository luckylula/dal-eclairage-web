import { HomeTransformationShowcase } from "@/components/HomeTransformationShowcase";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { homeTransformations } from "@/lib/home-transformations";

export function HomeAboutSection() {
  return (
    <section className="grid w-full min-h-[78vh] grid-cols-1 lg:grid-cols-[minmax(280px,32%)_1fr]">
      <div className="flex flex-col justify-center bg-white px-6 py-14 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <Reveal direction="left">
          <SectionHeading
            eyebrow="Qui sommes-nous"
            title="DAL Éclairage Hitech, partenaire lumière des pros"
            lead="Chez DAL Éclairage Hitech, nous ne nous contentons pas de vendre des produits. Nous écoutons, étudions et conseillons chaque projet d'éclairage, fonctionnel, d'ambiance ou décoratif, en tenant compte de vos contraintes techniques et économiques. De la conception à la mise en œuvre, nous vous accompagnons à chaque étape."
          />
          <p className="mt-6 font-sans text-sm text-muted">
            Parcourez nos transformations lumineuses — du projet initial au rendu final.
          </p>
        </Reveal>
      </div>

      <Reveal
        direction="right"
        delay={120}
        className="flex min-h-[52vh] items-center bg-white px-6 py-10 sm:px-8 lg:min-h-[78vh] lg:px-10 lg:py-14 xl:px-12"
      >
        <HomeTransformationShowcase items={homeTransformations} />
      </Reveal>
    </section>
  );
}
