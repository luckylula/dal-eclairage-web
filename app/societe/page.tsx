import Image from "next/image";
import Link from "next/link";
import { EquipeMemberPhoto } from "@/components/EquipeMemberPhoto";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { societeHeroVideoSrc, societeValeurs } from "@/lib/societe-media";
import { equipe } from "@/lib/societe-data";

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
            La Société{" "}
            <span className="text-dal">Genevoise</span>
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-lg text-white/90">
            Expertise de la lumière au service des professionnels
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Histoire"
              title="Une présence ancrée dans l’éclairage professionnel"
            />
            <div className="mt-8 space-y-6 font-sans text-base leading-relaxed text-muted">
              <p>
                Implantée à Genève, DAL ECLAIRAGE HITECH est un acteur local reconnu dans le domaine de
                l&apos;éclairage. Forte d&apos;une expérience confirmée, notre équipe travaille auprès des
                professionnels depuis plus de 15 ans dans la conception et la mise en œuvre de solutions
                d&apos;éclairage performantes, esthétiques et durables.
              </p>
              <p>
                Notre mission est d&apos;être à l&apos;écoute et comprendre vos besoins, s&apos;attacher à
                construire une relation de confiance fondée sur la proximité, le conseil personnalisé et la
                réactivité.
              </p>
              <p>
                Notre équipe met à disposition son savoir-faire technique afin d&apos;assurer la réussite de
                chacun de vos projets, de la phase d&apos;étude à la livraison des produits.
              </p>
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
          />
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {equipe.map((m) => (
              <article key={m.seed} className="flex h-full flex-col border border-line bg-white shadow-sm">
                {m.photos?.length ? (
                  <EquipeMemberPhoto
                    slides={m.photos}
                    alt={`Photo ${m.nom}`}
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                ) : m.photo ? (
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-line">
                    <Image
                      src={m.photo}
                      alt={`Photo ${m.nom}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                ) : (
                  <PlaceholderImage
                    seed={m.seed}
                    alt={`Photo ${m.nom}`}
                    aspectClassName="aspect-[3/4]"
                  />
                )}
                <div className="flex flex-1 flex-col p-6 text-left lg:p-8">
                  <h3 className="font-serif text-xl text-ink">{m.nom}</h3>
                  {m.role ? (
                    <p className="mt-1 font-sans text-sm font-medium text-dal">{m.role}</p>
                  ) : null}
                  {m.bio ? (
                    <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-muted">{m.bio}</p>
                  ) : null}
                  {m.linkedin ? (
                    <Link
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block font-sans text-xs uppercase tracking-widest text-dal hover:underline"
                    >
                      LinkedIn
                    </Link>
                  ) : null}
                </div>
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
          <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10 lg:gap-14">
            {societeValeurs.map((v, i) => (
              <Reveal
                key={v.titre}
                direction="up"
                delay={i * 160}
                className="flex justify-center"
              >
                <div className="valeur-card group flex max-w-[18rem] flex-col items-center text-center">
                  <h3 className="font-serif text-2xl leading-snug text-[#c9a84c] transition-colors duration-300 group-hover:text-[#d4b85f] lg:text-[1.85rem]">
                    {v.titre}
                  </h3>
                  <span className="valeur-underline mt-5 block h-px w-12 bg-[#c9a84c]" aria-hidden />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
