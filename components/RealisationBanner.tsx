import { RealisationImage } from "@/components/RealisationImage";
import type { Realisation } from "@/lib/realisations-data";

type Props = {
  realisation: Realisation;
  sizes?: string;
};

export function RealisationBanner({
  realisation,
  sizes = "100vw",
}: Props) {
  return (
    <article className="group relative aspect-[16/9] w-full overflow-hidden bg-ink sm:aspect-[21/9]">
      <RealisationImage
        id={realisation.id}
        seed={realisation.seed}
        alt={realisation.titre}
        fillContainer
        sizes={sizes}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-5 pt-12 sm:px-10 sm:pb-6 lg:px-12">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-dal sm:text-[10px]">
            {realisation.type}
          </p>
          {realisation.marque ? (
            <span className="font-sans text-[8px] font-medium uppercase tracking-[0.22em] text-white/55 sm:text-[9px]">
              {realisation.marque}
            </span>
          ) : null}
        </div>
        {!realisation.titre.startsWith("[") ? (
          <h3 className="mt-1 max-w-3xl font-serif text-base leading-snug text-white sm:text-lg md:text-xl">
            {realisation.titre}
          </h3>
        ) : null}
      </div>
    </article>
  );
}
