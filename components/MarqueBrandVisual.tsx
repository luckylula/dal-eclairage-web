import Image from "next/image";

type Props = {
  nom: string;
  imageSrc: string;
  fit?: "logo" | "cover";
  tone?: "light" | "dark";
  aspectClassName?: string;
  className?: string;
  paddingClassName?: string;
  imageScale?: number;
  zoomOnHover?: boolean;
};

export function MarqueBrandVisual({
  nom,
  imageSrc,
  fit = "logo",
  aspectClassName = "aspect-[16/10]",
  className = "",
  paddingClassName = "",
  imageScale = 1,
  zoomOnHover = false,
}: Props) {
  const isRemote = imageSrc.startsWith("http");
  const isSvg = imageSrc.endsWith(".svg");
  const bgClass = "marque-visual-bg";
  const fitClass =
    fit === "cover"
      ? "object-cover object-center"
      : "object-contain object-center";
  const zoomClass = zoomOnHover
    ? "transition-transform duration-700 ease-out group-hover:scale-[1.06]"
    : "";
  const scaleStyle =
    imageScale !== 1
      ? { transform: `scale(${imageScale})`, transformOrigin: "center center" }
      : undefined;

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClassName} ${bgClass} ${className}`}
    >
      {isRemote || isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={nom}
          className={`absolute inset-0 h-full w-full ${fitClass} ${paddingClassName} ${zoomClass}`}
          style={scaleStyle}
          loading="lazy"
        />
      ) : (
        <Image
          src={imageSrc}
          alt={nom}
          fill
          quality={100}
          className={`${fitClass} ${paddingClassName} ${zoomClass}`}
          style={scaleStyle}
          sizes="(max-width: 1024px) 88vw, 400px"
        />
      )}
    </div>
  );
}
