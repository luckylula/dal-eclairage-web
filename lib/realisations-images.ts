const base = "/images/realisations";

type RealisationType = "Technique" | "Décoratif" | "Extérieur" | "Événements";

/**
 * Photos des réalisations — dossier unique `public/images/realisations/`.
 * L'ordre définit l'affichage partout (accueil = 3 premières, Votre Projet = 4, etc.).
 */
export const realisationMedia = [
  {
    file: "dressing.jpg",
    titre: "Dressing sur mesure — éclairage intégré",
    type: "Technique" as RealisationType,
    description:
      "Bandeaux LED dans les étagères et îlots en pierre rétroéclairés : confort visuel, rendu haut de gamme et maîtrise technique.",
  },
  {
    file: "geneva-mo-bar-2024-low.jpg",
    titre: "MO Bar — Genève",
    type: "Décoratif" as RealisationType,
    description:
      "Scénographie lumineuse et ambiance chaleureuse pour un bar au cœur de Genève.",
  },
  {
    file: "geneva-royal-terrace-suite-dining-room-low.jpg",
    titre: "Royal Terrace — salle à manger, Genève",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "20260617_091154.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "RIT_1028-EDIT-low.jpg",
    titre: "Espace intérieur — mise en lumière",
    type: "Décoratif" as RealisationType,
    description:
      "Éclairage d'ambiance et accentuation des matières dans un projet résidentiel ou hôtelier.",
  },
  {
    file: "High quality JPG - Mandarin Oriental Retouches chambre Février 2024-1-low.jpg",
    titre: "Mandarin Oriental — chambre",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "Low Quality JPG - Mandarin Oriental Août 2024 II-16.jpg",
    titre: "Mandarin Oriental — Genève",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "20250807_165354.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "IMG-20241106-WA0020.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Extérieur" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "IMG-20260605-WA0005.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "Extérieur.jpg",
    titre: "[Réalisation extérieur — à compléter]",
    type: "Extérieur" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "Technique.jpg",
    titre: "[Réalisation technique — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
    objectPosition: "50% 0%",
  },
  {
    file: "Extérieur3.jpg",
    titre: "[Réalisation extérieur — à compléter]",
    type: "Extérieur" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "Technique2.png",
    titre: "[Réalisation technique — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
    objectPosition: "50% 0%",
  },
  {
    file: "Technique1.jpg",
    titre: "[Réalisation technique — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "Technique3.png",
    titre: "[Réalisation technique — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "Technique4.png",
    titre: "[Réalisation technique — à compléter]",
    type: "Technique" as RealisationType,
    description: "[Description — à compléter]",
  },
] as const;

export const realisationImagePaths: Record<string, string> = Object.fromEntries(
  realisationMedia.map((item, index) => [
    `r${index + 1}`,
    `${encodeURI(`${base}/${item.file}`)}?v=4`,
  ]),
);

/** Chemin public de la photo d'une réalisation, ou null si aucune image définie. */
export function getRealisationImageSrc(id: string): string | null {
  return realisationImagePaths[id] ?? null;
}

/** true si une image dédiée est configurée pour ce projet */
export function hasRealisationImage(id: string): boolean {
  return id in realisationImagePaths;
}
