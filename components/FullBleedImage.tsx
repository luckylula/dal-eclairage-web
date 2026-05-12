import Image from "next/image";

type Props = {
  seed: string;
  alt: string;
  priority?: boolean;
};

export function FullBleedImage({ seed, alt, priority }: Props) {
  const src = `https://picsum.photos/seed/${encodeURIComponent(seed)}/1920/1080`;

  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
