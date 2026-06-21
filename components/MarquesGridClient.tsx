"use client";

import { MarquesMobileCarousel } from "@/components/MarquesMobileCarousel";
import { Reveal } from "@/components/Reveal";
import { MarqueCard } from "@/components/MarquesGrid";
import type { MarqueImage } from "@/lib/get-marque-image";
import type { Marque } from "@/lib/marques";

export type MarqueGridItem = {
  marque: Marque;
  image: MarqueImage;
};

type Props = {
  items: MarqueGridItem[];
};

export function MarquesGridClient({ items }: Props) {
  return (
    <>
      <MarquesMobileCarousel items={items} />

      <div className="mx-auto hidden w-full max-w-[85rem] grid-cols-1 gap-8 md:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 lg:py-2">
        {items.map(({ marque, image }, index) => (
          <Reveal
            key={marque.slug}
            direction="up"
            delay={(index % 3) * 90 + Math.floor(index / 3) * 50}
            className="h-full"
          >
            <MarqueCard marque={marque} image={image} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
