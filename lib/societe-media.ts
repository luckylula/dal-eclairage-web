import type { AdaptivePhotoSlide } from "@/components/AdaptivePhotoGallery";

export type SocieteValeur = {
  titre: string;
  videoSrc: string;
};

/**
 * Médias page La Société — `public/secciones/societe` et `public/images/equipe`.
 */

export { societeHeroVideoSrc } from "@/lib/secciones-media";

/** Valeurs + vidéos — `public/videos/societe/valeurs/` */
export const societeValeurs: SocieteValeur[] = [
  {
    titre: "Échange sincère et durable",
    videoSrc: "/videos/societe/valeurs/workinprogress1.mp4",
  },
  {
    titre: "Accompagnement de proximité",
    videoSrc: "/videos/societe/valeurs/workinprogress3.mp4",
  },
  {
    titre: "Expérience technique",
    videoSrc: "/videos/societe/valeurs/workinprogress2.mp4",
  },
];

/** Photos bloc « Histoire » — démo client (sélecteur adaptatif). */
export const societeHistoireSlides: AdaptivePhotoSlide[] = [
  {
    src: "/images/equipe/equipo5.png",
    width: 1024,
    height: 992,
    label: "Équipe — atelier",
  },
  {
    src: "/images/equipe/equipo2.jpg",
    width: 832,
    height: 1024,
    label: "Équipe — plans et luminaires",
  },
  {
    src: "/images/equipe/equipo3.jpg",
    width: 1024,
    height: 992,
    label: "Équipe — showroom",
  },
  {
    src: "/images/equipe/equipo6.jpg",
    width: 819,
    height: 1024,
    label: "Équipe — étude de projet",
  },
];
