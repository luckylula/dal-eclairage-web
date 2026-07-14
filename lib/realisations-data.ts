import { pixlumMedia, realisationMedia } from "@/lib/realisations-images";

export type RealisationType =
  | "Technique"
  | "Décoratif"
  | "Extérieur"
  | "Événements";

export type Realisation = {
  id: string;
  titre: string;
  type: RealisationType;
  description: string;
  seed: string;
  /** Petite mention marque (ex. Pixlum) */
  marque?: string;
};

function toRealisation(
  item: { titre: string; type: RealisationType; description: string; marque?: string },
  id: string,
  seed: string,
): Realisation {
  return {
    id,
    titre: item.titre,
    type: item.type,
    description: item.description,
    seed,
    marque: item.marque,
  };
}

/** Projets principaux — accueil, Votre Projet. */
export const realisations: Realisation[] = realisationMedia.map((item, index) =>
  toRealisation(item, `r${index + 1}`, `dal-real-${index + 1}`),
);

const pixlumRealisations: Realisation[] = pixlumMedia.map((item, index) =>
  toRealisation(item, `pixlum-${index + 1}`, `dal-real-pixlum-${index + 1}`),
);

/** Page Réalisations — toutes les images à la suite (principales puis pixlum/). */
export const realisationsPage: Realisation[] = [...realisations, ...pixlumRealisations];
