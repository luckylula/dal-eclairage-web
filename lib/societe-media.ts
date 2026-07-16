import type { AdaptivePhotoSlide } from "@/components/AdaptivePhotoGallery";

export type SocieteValeur = {
  titre: string;
  videoSrc: string;
  width: number;
  height: number;
};

/**
 * Médias page La Société — `public/secciones/societe` et `public/images/equipe`.
 */

export { societeHeroVideoSrc } from "@/lib/secciones-media";

/** Valeurs + vidéos — `public/videos/societe/valeurs/` */
const societeValeursMediaVersion = "v=3";

const valeurVideo = (file: string) =>
  `/videos/societe/valeurs/${file}?${societeValeursMediaVersion}`;

export const societeValeurs: SocieteValeur[] = [
  {
    titre: "Échange sincère et durable",
    videoSrc: valeurVideo("workinprogress5.mp4"),
    width: 1056,
    height: 848,
  },
  {
    titre: "Accompagnement de proximité",
    videoSrc: valeurVideo("workinprogress7.mp4"),
    width: 960,
    height: 944,
  },
  {
    titre: "Expérience technique",
    videoSrc: valeurVideo("workinprogress6.mp4"),
    width: 1168,
    height: 768,
  },
];

/** Incrémenter après remplacement d'un fichier (même nom) pour forcer le rechargement. */
const societeEquipeMediaVersion = "v=5";

const equipePhoto = (file: string) =>
  `/images/equipe/${file}?${societeEquipeMediaVersion}`;

/** Photos bloc « Histoire » — démo client (sélecteur adaptatif). */
export const societeHistoireSlides: AdaptivePhotoSlide[] = [
  {
    src: equipePhoto("equipo5.png"),
    width: 1274,
    height: 1234,
    label: "Équipe — atelier",
  },
  {
    src: equipePhoto("equipo2.png"),
    width: 1131,
    height: 1391,
    label: "Équipe — plans et luminaires",
  },
  {
    src: equipePhoto("equipo3.png"),
    width: 1040,
    height: 992,
    label: "Équipe — showroom",
  },
  {
    src: equipePhoto("equipo7.png"),
    width: 1040,
    height: 992,
    label: "Équipe — étude de projet",
  },
];
