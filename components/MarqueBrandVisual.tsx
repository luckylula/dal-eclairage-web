import Image from "next/image";

type Props = {
  nom: string;
  imageSrc: string;
  /** Logo centré ou visuel plein cadre (couverture / hero marque). */
  fit?: "logo" | "cover";
  /** Fond clair pour logos sombres, fond sombre pour logos blancs. */
  tone?: "light" | "dark";
  className?: string;
};

export function MarqueBrandVisual({
  nom,
  imageSrc,
  fit = "logo",
  tone = "light",
  className = "",
}: Props) {
  const isRemote = imageSrc.startsWith("http");
  const isSvg = imageSrc.endsWith(".svg");
  const bgClass = tone === "dark" ? "bg-ink" : "bg-cream/60";
  const fitClass = fit === "cover" ? "object-cover" : "object-contain p-8 sm:p-10 lg:p-12";

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden border border-line ${bgClass} ${className}`}
    >
      {isRemote || isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={nom}
          className={`absolute inset-0 h-full w-full ${fitClass}`}
          loading="lazy"
        />
      ) : (
        <Image
          src={imageSrc}
          alt={nom}
          fill
          className={fitClass}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      )}
    </div>
  );
}
