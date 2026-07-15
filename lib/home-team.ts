export type HomeTeamSlide = {
  src: string;
  width: number;
  height: number;
  label: string;
};

/** Incrémenter après remplacement d'un fichier (même nom) pour forcer le rechargement. */
const homeTeamMediaVersion = "v=7";

/** Photos de groupe — accueil, section « Notre staff ». */
export const homeTeamSlides: HomeTeamSlide[] = [
  {
    src: `/images/equipe/equipo1.png?${homeTeamMediaVersion}`,
    width: 1537,
    height: 1023,
    label: "Équipe — vue horizontale",
  },
  {
    src: `/images/equipe/equipo11.png?${homeTeamMediaVersion}`,
    width: 1275,
    height: 1233,
    label: "Équipe — devant la boutique",
  },
  {
    src: `/images/equipe/equipo12.png?${homeTeamMediaVersion}`,
    width: 1535,
    height: 1024,
    label: "Équipe — intérieur showroom",
  },
  {
    src: `/images/equipe/equipo13.png?${homeTeamMediaVersion}`,
    width: 1536,
    height: 1024,
    label: "Équipe — devant l'entrée",
  },
];

export const homeTeamGroupPhotoSeed = "dal-team-group";
