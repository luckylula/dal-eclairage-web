"use client";

import Image from "next/image";
import { useState } from "react";
import type { MembrePhoto } from "@/lib/societe-data";

type Props = {
  slides: MembrePhoto[];
  alt: string;
  sizes: string;
  defaultPhoto?: "avecLogo" | "portrait";
};

function PhotoLayer({
  slide,
  alt,
  sizes,
  visible,
  priority,
}: {
  slide: MembrePhoto;
  alt: string;
  sizes: string;
  visible: boolean;
  priority?: boolean;
}) {
  return (
    <Image
      src={slide.src}
      alt={slide.label || alt}
      fill
      className={`object-cover transition-opacity duration-500 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ objectPosition: slide.objectPosition ?? "50% 0%" }}
      sizes={sizes}
      priority={priority}
      aria-hidden={!visible}
    />
  );
}

export function EquipeMemberPhoto({ slides, alt, sizes, defaultPhoto = "avecLogo" }: Props) {
  const [hovered, setHovered] = useState(false);

  if (!slides.length) return null;

  if (slides.length === 1) {
    return (
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-line">
        <PhotoLayer slide={slides[0]} alt={alt} sizes={sizes} visible priority />
      </div>
    );
  }

  const [avecLogo, portrait] = slides;
  const defaultIsLogo = defaultPhoto === "avecLogo";
  const showLogo = hovered ? !defaultIsLogo : defaultIsLogo;

  return (
    <div
      className="relative aspect-[3/4] w-full overflow-hidden bg-line"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PhotoLayer slide={avecLogo} alt={alt} sizes={sizes} visible={showLogo} priority={defaultIsLogo} />
      <PhotoLayer slide={portrait} alt={alt} sizes={sizes} visible={!showLogo} priority={!defaultIsLogo} />
    </div>
  );
}
