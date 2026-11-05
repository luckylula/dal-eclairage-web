export type HomeTeamSlide = {
  src: string;
  width: number;
  height: number;
  label: string;
};

/** Incrémenter après remplacement d'un fichier (même nom) pour forcer le rechargement. */
const homeTeamMediaVersion = "v=9";

/** Photo de groupe fixe — accueil, section « Notre staff ». */
export const homeTeamSlides: HomeTeamSlide[] = [
  {
    src: `${encodeURI("/images/equipe/equipe de deux.png")}?${homeTeamMediaVersion}`,
    width: 1387,
    height: 1134,
    label: "Équipe DAL — Hubert et Lucie",
  },
];

export const homeTeamGroupPhotoSeed = "dal-team-group";
