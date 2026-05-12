import Image from "next/image";

type Props = {
  seed: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectClassName?: string;
};

/** Image placeholder via picsum.photos (seed stable par image). */
export function PlaceholderImage({
  seed,
  alt,
  className = "",
  priority = false,
  aspectClassName = "aspect-[4/3]",
}: Props) {
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/1600/1200`;

  return (
    <div className={`relative w-full overflow-hidden bg-line ${aspectClassName} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
