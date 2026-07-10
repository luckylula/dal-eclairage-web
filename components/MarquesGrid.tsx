import { MarqueBrandVisual } from "@/components/MarqueBrandVisual";
import type { MarqueImage } from "@/lib/get-marque-image";
import type { Marque } from "@/lib/marques";

type CardProps = {
  marque: Marque;
  image: MarqueImage;
};

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path d="M6 3h7v7M13 3 6 10" />
      <path d="M3 6v7h7" />
    </svg>
  );
}

export function MarqueCard({ marque, image }: CardProps) {
  return (
    <article className="marque-card group relative flex h-full flex-col overflow-hidden border border-line/80 bg-white">
      <div className="marque-card-visual overflow-hidden border-b border-line">
        <MarqueBrandVisual
          nom={marque.nom}
          imageSrc={image.src}
          fit={image.fit}
          tone={image.tone}
          aspectClassName="aspect-[16/10]"
          zoomOnHover
        />
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <h2 className="font-serif text-xl text-ink transition-colors duration-300 group-hover:text-dal lg:text-2xl">
          {marque.nom}
        </h2>
        <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted lg:text-base">
          {marque.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={marque.siteFabricant}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 bg-white px-5 py-2.5 font-sans text-sm font-medium text-black shadow-sm transition hover:bg-white/90 hover:shadow-md"
          >
            Site web
            <ExternalLinkIcon />
          </a>
          <a
            href={marque.lienCatalogue}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 bg-dal px-5 py-2.5 font-sans text-sm font-medium text-white shadow-sm transition hover:bg-dal/90 hover:shadow-md"
          >
            Catalogue
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
