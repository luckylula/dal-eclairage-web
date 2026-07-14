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
    file: "20250807_165354.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "e709bb63-e6b0-478c-a717-0d726efbd2f9.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "IMG-20241106-WA0020.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
  {
    file: "IMG-20260605-WA0005.jpg",
    titre: "[Réalisation — à compléter]",
    type: "Décoratif" as RealisationType,
    description: "[Description — à compléter]",
  },
] as const;

const pixlumBase = `${base}/pixlum`;

type RealisationMediaItem = {
  file: string;
  titre: string;
  type: RealisationType;
  description: string;
};

/**
 * Réalisations Pixlum — `public/images/realisations/pixlum/`.
 * Affichées uniquement en bas de la page Réalisations.
 */
const pixlumFiles = [
  "01.jpg",
  "15f6860a750dcaf53de89a6bbdb9eb70dc1819a9.jpg",
  "2d8ca0f92703b5d0979fab70c90da6a5e1240693.jpg",
  "301b0876fe56a55b3cfbc615a4ca190e.jpg",
  "36580e4597d3a05f31e0917e5bc04369.jpg",
  "94be53880b6a4fed4aa8ffd94df5391f31015cd8.jpg",
  "9bd3c68dcead5ccb1723b6e52846c8d1692b1100.jpg",
  "a0cb91f3ba5a2e6f476ff0c6cc90d52cbbff2918.jpg",
  "AI45_001_Cam_001_C4D.jpg",
  "AI46_001_C4D.jpg",
  "AI46_003_C4D.jpg",
  "AI46_004_C4D.jpg",
  "AI46_005_C4D.jpg",
  "AI46_010_C4D.jpg",
  "AI48_002_cam_01_C4D.jpg",
  "AI48_003_cam_01_C4D.jpg",
  "AI48_005_cam_01_C4D.jpg",
  "AI48_009_cam_01_PP_1.jpg",
  "AI50_002_cam_01_PP.jpg",
  "AI50_003_cam_03_PP_1.jpg",
  "AI50_004_cam_02_PP.jpg",
  "AI51_001_cam_001_PP.jpg",
  "AI51_002_cam001_PP.jpg",
  "AI51_002_cam003_PP.jpg",
  "AI51_002_cam004_PP.jpg",
  "AI51_002_cam005_PP.jpg",
  "AI51_003_Cam_001_PP.jpg",
  "AI51_003_Cam_002_PP.jpg",
  "AI51_003_Cam_004_PP.jpg",
  "AI51_003_Cam_005_PP.jpg",
  "AI51_004_Cam_003_PP.jpg",
  "AI_vol4_02_01.jpg",
  "AI_vol4_02_02.jpg",
  "AI_vol4_5_Cam_04.jpg",
  "cac392bd32616f8f9c90bdda6b8b9050.jpg",
  "e00f32aa44e7a72112a56d2ab0ac7650.jpg",
  "fb3b8f486aab3d36cdfc9551659e30b6.jpg",
  "fc177875ab8cefb8c0fbb353f5ed392a47b52690.jpg",
] as const;

export const pixlumMedia: RealisationMediaItem[] = pixlumFiles.map((file) => ({
  file,
  titre: "[Réalisation — à compléter]",
  type: "Technique",
  description: "[Description — à compléter]",
}));

export const realisationImagePaths: Record<string, string> = {
  ...Object.fromEntries(
    realisationMedia.map((item, index) => [
      `r${index + 1}`,
      encodeURI(`${base}/${item.file}`),
    ]),
  ),
  ...Object.fromEntries(
    pixlumMedia.map((item, index) => [
      `pixlum-${index + 1}`,
      encodeURI(`${pixlumBase}/${item.file}`),
    ]),
  ),
};

/** Chemin public de la photo d'une réalisation, ou null si aucune image définie. */
export function getRealisationImageSrc(id: string): string | null {
  return realisationImagePaths[id] ?? null;
}

/** true si une image dédiée est configurée pour ce projet */
export function hasRealisationImage(id: string): boolean {
  return id in realisationImagePaths;
}
