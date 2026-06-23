const base = "/images/realisations";

/**
 * Photos des 3 réalisations visibles sur l'accueil (r1, r2, r3)
 * et les suivantes sur la page Réalisations.
 */
export const realisationImagePaths: Partial<Record<string, string>> = {
  r1: `${base}/01/ce014bed-9610-495c-bb3d-67295fa1ac22.jpg`,
  r2: `${base}/02/geneva-mo-bar-2024-low.jpg`,
  r3: `${base}/03/RIT_1028-EDIT-low.jpg`,
  r4: `${base}/fcad271e-eb07-4d0e-bff2-b017a12213cc.jpg`,
  r5: `${base}/e709bb63-e6b0-478c-a717-0d726efbd2f9.jpg`,
  r6: `${base}/e658c5a2-333f-4089-a234-9a9d81583f85.jpg`,
  r7: `${base}/df5e9f2f-8b26-4557-af8f-f316819400b8.jpg`,
};

/** Chemin public de la photo d'une réalisation, ou null si aucune image définie. */
export function getRealisationImageSrc(id: string): string | null {
  const mapped = realisationImagePaths[id];
  if (mapped) return mapped;

  const index = id.replace(/^r/, "").padStart(2, "0");
  return `${base}/${index}/photo.jpg`;
}

/** true si une image dédiée est configurée pour ce projet */
export function hasRealisationImage(id: string): boolean {
  return id in realisationImagePaths;
}
