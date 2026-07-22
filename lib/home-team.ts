export type HomeTeamSlide = {
  src: string;
  width: number;
  height: number;
  label: string;
};

/** Incrémenter après remplacement d'un fichier (même nom) pour forcer le rechargement. */
const homeTeamMediaVersion = "v=8";

/** Photo de groupe fixe — accueil, section « Notre staff ». */
export const homeTeamSlides: HomeTeamSlide[] = [
  {
    src: `/images/equipe/equipo12.png?${homeTeamMediaVersion}`,
    width: 1535,
    height: 1024,
    label: "Équipe DAL — intérieur showroom",
  },
];

export const homeTeamGroupPhotoSeed = "dal-team-group";
