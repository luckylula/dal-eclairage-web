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
};

export const realisations: Realisation[] = [
  {
    id: "r1",
    titre: "Dressing sur mesure — éclairage intégré",
    type: "Technique",
    description:
      "Bandeaux LED dans les étagères et îlots en pierre rétroéclairés : confort visuel, rendu haut de gamme et maîtrise technique.",
    seed: "dal-real-1",
  },
  {
    id: "r2",
    titre: "MO Bar — Genève",
    type: "Décoratif",
    description:
      "Scénographie lumineuse et ambiance chaleureuse pour un bar au cœur de Genève.",
    seed: "dal-real-2",
  },
  {
    id: "r3",
    titre: "Espace intérieur — mise en lumière",
    type: "Décoratif",
    description:
      "Éclairage d'ambiance et accentuation des matières dans un projet résidentiel ou hôtelier.",
    seed: "dal-real-3",
  },
  {
    id: "r4",
    titre: "[Galerie événementielle — placeholder]",
    type: "Événements",
    description: "[Installations temporaires et circuits DMX — placeholder]",
    seed: "dal-real-4",
  },
  {
    id: "r5",
    titre: "[Restaurant — placeholder]",
    type: "Décoratif",
    description: "[Accent sur matières et volumes — placeholder]",
    seed: "dal-real-5",
  },
  {
    id: "r6",
    titre: "[Showroom retail — placeholder]",
    type: "Technique",
    description: "[IRC élevé et modularité des spots — placeholder]",
    seed: "dal-real-6",
  },
  {
    id: "r7",
    titre: "[Réalisation — placeholder]",
    type: "Décoratif",
    description: "[Projet d'éclairage — placeholder]",
    seed: "dal-real-7",
  },
];
