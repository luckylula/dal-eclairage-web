import Image from "next/image";

type Props = {
  nom: string;
  imageSrc: string;
  fit?: "logo" | "cover";
  tone?: "light" | "dark";
  aspectClassName?: string;
  className?: string;
  zoomOnHover?: boolean;
};

export function MarqueBrandVisual({
  nom,
  imageSrc,
  fit = "logo",
  tone = "light",
  aspectClassName = "aspect-[16/10]",
  className = "",
  zoomOnHover = false,
}: Props) {
  const isRemote = imageSrc.startsWith("http");
  const isSvg = imageSrc.endsWith(".svg");
  const bgClass = tone === "dark" ? "marque-visual-bg-dark" : "marque-visual-bg-light";
  const fitClass =
    fit === "cover" ? "object-cover" : "object-contain p-8 sm:p-10";
  const zoomClass = zoomOnHover
    ? "transition-transform duration-700 ease-out group-hover:scale-[1.06]"
    : "";

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClassName} ${bgClass} ${className}`}
    >
      {isRemote || isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={nom}
          className={`absolute inset-0 h-full w-full ${fitClass} ${zoomClass}`}
          loading="lazy"
        />
      ) : (
        <Image
          src={imageSrc}
          alt={nom}
          fill
          className={`${fitClass} ${zoomClass}`}
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      )}
    </div>
  );
}
