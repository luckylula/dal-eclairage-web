/**
 * Photos du hero d’accueil — dossiers `public/images/fotos interior` et `fotos exterior`.
 * Modifiez les noms de fichiers ici si vous changez les images.
 */

export type HeroSlide = {
  src: string;
  alt: string;
  lieu: "Intérieur" | "Extérieur";
};

const int = (fichier: string) => encodeURI(`/images/fotos interior/${fichier}`);
const ext = (fichier: string) => encodeURI(`/images/fotos exterior/${fichier}`);

export const heroCarouselSlides: HeroSlide[] = [
  {
    src: int("12e44253-1408-483c-a98c-bff3fb079fca.jpg"),
    alt: "[Réalisation intérieure — placeholder]",
    lieu: "Intérieur",
  },
  {
    src: ext("06f03c3d-2503-41a8-8b82-66de45d560ee.jpg"),
    alt: "[Réalisation extérieure — placeholder]",
    lieu: "Extérieur",
  },
  {
    src: int("17df602e-09e2-4376-aa9e-80dc6c2543a7.jpg"),
    alt: "[Réalisation intérieure — placeholder]",
    lieu: "Intérieur",
  },
  {
    src: ext("195a4c48-7054-4158-9bcf-80d0bf7848e5.jpg"),
    alt: "[Réalisation extérieure — placeholder]",
    lieu: "Extérieur",
  },
  {
    src: int("1e594c9f-0e53-416a-8af7-8c5946755174.jpg"),
    alt: "[Réalisation intérieure — placeholder]",
    lieu: "Intérieur",
  },
];
