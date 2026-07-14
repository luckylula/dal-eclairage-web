"use client";

import { AdaptivePhotoGallery } from "@/components/AdaptivePhotoGallery";
import { societeHistoireSlides } from "@/lib/societe-media";

export function SocieteHistoirePhoto() {
  return (
    <AdaptivePhotoGallery
      slides={societeHistoireSlides}
      ariaLabel="Photos — histoire DAL Éclairage Hitech"
      imageSizes="(max-width: 1024px) 100vw, 50vw"
      tone="light"
      controls="below"
    />
  );
}
