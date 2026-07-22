import { realisationMedia } from "@/lib/realisations-images";

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
  /** Recadrage CSS object-position (ex. `50% 0%` pour ancrer en haut) */
  objectPosition?: string;
};

function toRealisation(
  item: {
    titre: string;
    type: RealisationType;
    description: string;
    marque?: string;
    objectPosition?: string;
  },
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
    objectPosition: item.objectPosition,
  };
}

/** Projets principaux — accueil, Votre Projet, page Réalisations. */
export const realisations: Realisation[] = realisationMedia.map((item, index) =>
  toRealisation(item, `r${index + 1}`, `dal-real-${index + 1}`),
);

/** Page Réalisations — uniquement les 10 photos principales. */
export const realisationsPage: Realisation[] = realisations;
