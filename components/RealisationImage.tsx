"use client";

import Image from "next/image";
import { useState } from "react";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { getRealisationImageSrc } from "@/lib/realisations-images";

type Props = {
  id: string;
  seed: string;
  alt: string;
  aspectClassName?: string;
  priority?: boolean;
  fillContainer?: boolean;
  sizes?: string;
};

export function RealisationImage({
  id,
  seed,
  alt,
  aspectClassName = "aspect-[4/3]",
  priority = false,
  fillContainer = false,
  sizes = "(max-width: 768px) 90vw, 38vw",
}: Props) {
  const src = getRealisationImageSrc(id);
  const [failed, setFailed] = useState(!src);

  if (!src || failed) {
    return (
      <PlaceholderImage
        seed={seed}
        alt={alt}
        aspectClassName={fillContainer ? "h-full w-full min-h-[6rem]" : aspectClassName}
        priority={priority}
      />
    );
  }

  const frameClass = fillContainer
    ? "relative h-full w-full overflow-hidden bg-line"
    : `relative w-full overflow-hidden bg-line ${aspectClassName}`;

  return (
    <div className={frameClass}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        priority={priority}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
