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
};

export const marques: Marque[] = [
  {
    slug: "nova-luce",
    nom: "Nova Luce",
    description:
      "Éclairage décoratif, technique et extérieur — design contemporain et solutions LED pour l’architecture.",
    siteFabricant: "https://novaluce.com/",
    lienCatalogue: "https://novaluce.com/Kataloge",
    imageSrc: "/images/marques/nova-luce.png",
  },
  {
    slug: "led-line",
    nom: "LED LINE",
    description:
      "Fabricant polonais de solutions LED : luminaires, rubans, profils et éclairage architectural et industriel.",
    siteFabricant: "https://ledline.pl/en/",
    lienCatalogue: "https://ledline.pl/en/downloads/",
    imageSrc: "/images/marques/led-line.png",
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
    slug: "luxiona",
    nom: "Luxiona",
    description:
      "Éclairage technique professionnel pour l’architecture, l’industrie, le tertiaire et les environnements exigeants.",
    siteFabricant: "https://luxiona.com/",
    lienCatalogue: "https://luxiona.com/downloads",
    imageSrc: "/images/marques/luxiona.svg",
  },
  {
    slug: "linealight",
    nom: "Linealight",
    description:
      "Groupe italien de référence en éclairage LED professionnel et architectural, intérieur et extérieur.",
    siteFabricant: "https://www.linealight.com/en",
    lienCatalogue: "https://www.linealight.com/en/catalogues",
    imageSrc: "/images/marques/linealight.jpg",
    imageFit: "cover",
  },
  {
    slug: "opple-lighting",
    nom: "Opple Lighting",
    description:
      "Solutions d’éclairage LED pour le résidentiel, le tertiaire et les espaces professionnels.",
    siteFabricant: "https://www.opple.eu/en",
    lienCatalogue: "https://www.opple.eu/en/catalogue-en",
    imageSrc: "/images/marques/opple-lighting.png",
    imageFit: "cover",
  },
  {
    slug: "siteco",
    nom: "Siteco",
    description:
      "Éclairage intérieur et extérieur, gestion de la lumière et solutions complètes Made in Germany.",
    siteFabricant: "https://www.siteco.com/",
    lienCatalogue: "https://www.siteco.com/products",
    imageSrc: "/images/marques/siteco.svg",
  },
  {
    slug: "kraken-lighting",
    nom: "Kraken Lighting",
    description:
      "Éclairage professionnel en bois massif, conçu et fabriqué en France.",
    siteFabricant: "https://kraken-lighting.fr/",
    lienCatalogue: "https://kraken-lighting.fr/category/telechargements/",
    imageSrc: "/images/marques/kraken-lighting.svg",
  },
  {
    slug: "estiluz",
    nom: "Estiluz",
    description:
      "Luminaires décoratifs contemporains — design, matériaux nobles et finitions soignées.",
    siteFabricant: "https://www.estiluz.com/en",
    lienCatalogue: "https://www.estiluz.com/en/downloads",
    imageSrc: "/images/marques/estiluz.png",
  },
  {
    slug: "stilnovo",
    nom: "Stilnovo",
    description:
      "Design italien depuis 1946 — collections iconiques et luminaires LED contemporains.",
    siteFabricant: "https://www.stilnovo.com/en/",
    lienCatalogue: "https://www.stilnovo.com/en/download/",
    imageSrc: "/images/marques/stilnovo.jpg",
    imageFit: "cover",
  },
  {
    slug: "vistosi",
    nom: "Vistosi",
    description:
      "Verrerie vénitienne et luminaires en verre soufflé de Murano — tradition et design.",
    siteFabricant: "https://vistosi.it/?lang=en",
    lienCatalogue: "https://vistosi.it/download/?lang=en",
    imageSrc: "/images/marques/vistosi.svg",
  },
  {
    slug: "daylight",
    nom: "Daylight",
    description:
      "Éclairage LED haute fidélité des couleurs pour le travail de précision, l’artisanat et les métiers d’art.",
    siteFabricant: "https://daylightcompany.com/eu/fr/",
    lienCatalogue: "https://daylightcompany.com/eu/fr/sewing-and-crafts/",
    imageSrc: "/images/marques/daylight.svg",
    imageTone: "dark",
  },
  {
    slug: "goccia",
    nom: "Goccia",
    description:
      "Éclairage extérieur architectural et urbain — solutions LED pour espaces publics et paysagers.",
    siteFabricant: "https://www.goccia.it/en/",
    lienCatalogue: "https://www.goccia.it/it/download",
    imageSrc: "https://www.goccia.it/corporate153/images/5967/goccia_g_logo_header.png",
  },
  {
    slug: "nte-sistemas",
    nom: "NTE Sistemas",
    description:
      "Éclairage LED professionnel : voirie, urbain, industriel, sportif et solutions solaires.",
    siteFabricant: "https://www.ntesistemas.es/en/",
    lienCatalogue: "https://www.ntesistemas.es/en/catalogue/",
    imageSrc: "/images/marques/nte-sistemas.png",
    imageFit: "cover",
  },
];
