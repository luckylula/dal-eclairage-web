export type HomeTeamSlide = {
  src: string;
  width: number;
  height: number;
  label: string;
};

/** Photos de groupe — accueil, section « Notre staff » (démo client). */
export const homeTeamSlides: HomeTeamSlide[] = [
  {
    src: "/images/equipe/equipo1.png",
    width: 1536,
    height: 1024,
    label: "Équipe — vue horizontale",
  },
  {
    src: "/images/equipe/equipo11.png",
    width: 1271,
    height: 995,
    label: "Équipe — devant la boutique",
  },
];

export const homeTeamGroupPhotoSeed = "dal-team-group";
