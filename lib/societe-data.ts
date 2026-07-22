export type MembrePhoto = {
  src: string;
  width: number;
  height: number;
  label: string;
  /** Recadrage vertical — ex. `50% 28%` pour remonter le visage */
  objectPosition?: string;
};

export type Membre = {
  nom: string;
  role?: string;
  bio?: string;
  photo?: string;
  photos?: MembrePhoto[];
  seed: string;
  linkedin?: string;
};

export const equipe: Membre[] = [
  {
    nom: "Hubert Darnet",
    photos: [
      {
        src: "/images/equipe/hubertaveclogo.jpg",
        width: 720,
        height: 1280,
        label: "Hubert Darnet — avec logo DAL",
        objectPosition: "50% 28%",
      },
    ],
    bio: "Passionné par l'éclairage depuis plus de 17 ans, j'ai bâti une expertise solide au fil d'un parcours riche et concret. Aujourd'hui à la tête de DAL ECLAIRAGE HITECH SARL, je mets cette expérience au service des installateurs électriciens, architectes et bureaux d'études, ou même technicien sur site, en proposant bien plus que de la vente",
    seed: "dal-team-hubert-darnet",
  },
  {
    nom: "Lucie Benoit",
    photos: [
      {
        src: "/images/equipe/lucieaveclogo.jpg",
        width: 720,
        height: 1280,
        label: "Lucie Benoit — avec logo DAL",
        objectPosition: "50% 28%",
      },
    ],
    bio: "Forte de 14 ans d'expérience, j'assure le suivi commercial, administratif et comptable de l'entreprise. Grâce à ma polyvalence et à mon sens de l'organisation, j'accompagne au quotidien nos clients, partenaires et équipes afin de garantir un service efficace et de qualité",
    seed: "dal-team-lucie-benoit",
  },
  {
    nom: "Alain Knaub",
    photos: [
      {
        src: "/images/equipe/alainaveclogo.jpg",
        width: 720,
        height: 1280,
        label: "Alain Knaub — avec logo DAL",
        objectPosition: "50% 28%",
      },
    ],
    bio: "Issu du monde de fabricants de luminaires, homme de terrain avec plus de 15 ans dans la conception et réalisation de solutions d'éclairage dans les espaces intérieurs et extérieurs, j'accompagne les installateurs, architectes, bureau d'études, clients divers pour tous type de projets tout en respectant les contraintes techniques et économiques.",
    seed: "dal-team-alain-knaub",
  },
];
