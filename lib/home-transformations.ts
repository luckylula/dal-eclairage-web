import { homeAboutInteriorSrc } from "@/lib/home-about";

export type HomeTransformation = {
  id: string;
  titre: string;
  lieu?: string;
  videoSrc: string;
  posterSrc?: string;
};

const base = "/images/transformations";

/** Vidéos de transformation (avant → après dans un seul fichier). */
export const homeTransformations: HomeTransformation[] = [
  {
    id: "1",
    titre: "Transformation 01",
    videoSrc: `${base}/transformation1.mp4`,
    posterSrc: homeAboutInteriorSrc,
  },
  {
    id: "2",
    titre: "Transformation 02",
    videoSrc: `${base}/transformation2.mp4`,
    posterSrc: homeAboutInteriorSrc,
  },
  {
    id: "3",
    titre: "Transformation 03",
    videoSrc: `${base}/transformation3.mp4`,
    posterSrc: homeAboutInteriorSrc,
  },
];
