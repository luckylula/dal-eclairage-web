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
    titre: "[Projet bureau — placeholder]",
    type: "Technique",
    description: "[Ligne claire, confort visuel et efficacité énergétique — placeholder]",
    seed: "dal-real-1",
  },
  {
    id: "r2",
    titre: "[Hôtel boutique — placeholder]",
    type: "Décoratif",
    description: "[Ambiance chaleureuse et scénographie lumineuse — placeholder]",
    seed: "dal-real-2",
  },
  {
    id: "r3",
    titre: "[Façade institutionnelle — placeholder]",
    type: "Extérieur",
    description: "[Mise en valeur nocturne maîtrisée — placeholder]",
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
];
