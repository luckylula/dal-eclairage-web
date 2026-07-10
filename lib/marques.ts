export type Marque = {
  slug: string;
  nom: string;
  description: string;
  siteFabricant: string;
  lienCatalogue: string;
  /** Logo ou visuel officiel — `/images/marques/…` ou URL fabricant. */
  imageSrc: string;
  imageFit?: "logo" | "cover";
  imageTone?: "light" | "dark";
  /** Marge intérieure Tailwind autour du logo (ex. `px-8 py-4`). */
  imagePadding?: string;
  /** Facteur d'échelle du logo (1 = taille par défaut). */
  imageScale?: number;
};

export const marques: Marque[] = [
  {
    slug: "stilnovo",
    nom: "Stilnovo",
    description:
      "Design italien depuis 1946 — collections iconiques et luminaires LED contemporains.",
    siteFabricant: "https://www.stilnovo.com/en/",
    lienCatalogue: "https://www.stilnovo.com/en/download/",
    imageSrc: "/images/marques/stilnovo.svg",
    imagePadding: "px-8 py-5 sm:px-10 sm:py-6",
  },
  {
    slug: "lluria",
    nom: "Lluria",
    description:
      "Spécialiste de l’éclairage linéaire LED et des projets sur mesure, intérieur comme extérieur.",
    siteFabricant: "https://lluria.com/en/",
    lienCatalogue: "https://lluria.com/en/downloads/",
    imageSrc: "/images/marques/lluria.png",
  },
  {
    slug: "linealight",
    nom: "Linealight",
    description:
      "Groupe italien de référence en éclairage LED professionnel et architectural, intérieur et extérieur.",
    siteFabricant: "https://www.linealight.com/en",
    lienCatalogue: "https://www.linealight.com/en/catalogues",
    imageSrc: "/images/marques/linealight.jpg",
  },
  {
    slug: "estiluz",
    nom: "Estiluz",
    description:
      "Luminaires décoratifs contemporains — design, matériaux nobles et finitions soignées.",
    siteFabricant: "https://www.estiluz.com/en",
    lienCatalogue: "https://www.estiluz.com/en/downloads",
    imageSrc: "/images/marques/estiluz.png",
    imagePadding: "px-8 py-5 sm:px-10 sm:py-6",
  },
  {
    slug: "pixlum",
    nom: "Pixlum",
    description:
      "Système modulaire breveté de panneaux conducteurs et LED — décoration lumineuse repositionnable, ciels étoilés et design d’intérieur.",
    siteFabricant: "https://www.pixlum.fr/",
    lienCatalogue: "https://www.pixlum.fr/media/catalogue-pixlum-v1-079535800-1819-04122018.pdf",
    imageSrc: "/images/marques/pixlum.svg",
    imagePadding: "px-8 py-5 sm:px-10 sm:py-6",
  },
  {
    slug: "kraken-lighting",
    nom: "Kraken Lighting",
    description:
      "Éclairage professionnel en bois massif, conçu et fabriqué en France.",
    siteFabricant: "https://kraken-lighting.fr/",
    lienCatalogue: "https://kraken-lighting.fr/category/telechargements/",
    imageSrc: "/images/marques/kraken-lighting.svg",
    imagePadding: "px-5 py-3 sm:px-6 sm:py-4",
    imageScale: 0.9,
  },
  {
    slug: "luxiona",
    nom: "Luxiona",
    description:
      "Éclairage technique professionnel pour l’architecture, l’industrie, le tertiaire et les environnements exigeants.",
    siteFabricant: "https://luxiona.com/",
    lienCatalogue: "https://luxiona.com/downloads",
    imageSrc: "/images/marques/luxiona.svg",
    imagePadding: "px-8 py-5 sm:px-10 sm:py-6",
  },
  {
    slug: "opple-lighting",
    nom: "Opple Lighting",
    description:
      "Solutions d’éclairage LED pour le résidentiel, le tertiaire et les espaces professionnels.",
    siteFabricant: "https://www.opple.eu/en",
    lienCatalogue: "https://www.opple.eu/en/catalogue-en",
    imageSrc: "/images/marques/opple-lighting.svg",
    imageScale: 1.85,
  },
  {
    slug: "goccia",
    nom: "Goccia",
    description:
      "Éclairage extérieur architectural et urbain — solutions LED pour espaces publics et paysagers.",
    siteFabricant: "https://www.goccia.it/en/",
    lienCatalogue: "https://www.goccia.it/it/download",
    imageSrc: "/images/marques/goccia.png",
    imagePadding: "px-6 py-4 sm:px-8 sm:py-5",
  },
  {
    slug: "led-line",
    nom: "LED LINE",
    description:
      "Fabricant polonais de solutions LED : luminaires, rubans, profils et éclairage architectural et industriel.",
    siteFabricant: "https://ledline.pl/en/",
    lienCatalogue: "https://ledline.pl/en/downloads/",
    imageSrc: "/images/marques/led-line.png",
    imageScale: 1.65,
  },
  {
    slug: "daylight",
    nom: "Daylight",
    description:
      "Éclairage LED haute fidélité des couleurs pour le travail de précision, l’artisanat et les métiers d’art.",
    siteFabricant: "https://daylightitalia.com/fr/",
    lienCatalogue: "https://daylightitalia.com/fr/catalogue-general/",
    imageSrc: "/images/marques/daylight.png",
    imagePadding: "px-5 py-3 sm:px-6 sm:py-4",
  },
  {
    slug: "nova-luce",
    nom: "Nova Luce",
    description:
      "Éclairage décoratif, technique et extérieur — design contemporain et solutions LED pour l’architecture.",
    siteFabricant: "https://novaluce.com/",
    lienCatalogue: "https://novaluce.com/Kataloge",
    imageSrc: "/images/marques/nova-luce.png",
    imagePadding: "px-5 py-3 sm:px-6 sm:py-4",
  },
  {
    slug: "siteco",
    nom: "Siteco",
    description:
      "Éclairage intérieur et extérieur, gestion de la lumière et solutions complètes Made in Germany.",
    siteFabricant: "https://www.siteco.com/",
    lienCatalogue: "https://www.siteco.com/products",
    imageSrc: "/images/marques/siteco.svg",
    imagePadding: "px-5 py-3 sm:px-6 sm:py-4",
  },
  {
    slug: "nte-sistemas",
    nom: "NTE Sistemas",
    description:
      "Éclairage LED professionnel : voirie, urbain, industriel, sportif et solutions solaires.",
    siteFabricant: "https://www.ntesistemas.es/en/",
    lienCatalogue: "https://www.ntesistemas.es/en/catalogue/",
    imageSrc: "/images/marques/nte-sistemas.png",
    imagePadding: "px-8 py-5 sm:px-10 sm:py-6",
    imageScale: 0.76,
  },
];
