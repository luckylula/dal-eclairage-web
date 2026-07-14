/**
 * Bannières du haut de page — dossier unique `public/secciones/`.
 * Chaque sous-dossier = une page. Y déposer photos (.jpg, .png…) ou vidéos (.mp4).
 * Après dépôt, renseigner les fichiers actifs ci-dessous (ou via le chat).
 */

export const SECCIONES_BASE = "/secciones";

export const seccionFolders = {
  accueil: `${SECCIONES_BASE}/accueil`,
  societe: `${SECCIONES_BASE}/societe`,
  marques: `${SECCIONES_BASE}/marques`,
  realisations: `${SECCIONES_BASE}/realisations`,
  votreProjet: `${SECCIONES_BASE}/votre-projet`,
} as const;

export type SeccionId = keyof typeof seccionFolders;

export type SeccionCarouselSlide = {
  src: string;
  alt: string;
  lieu?: "Intérieur" | "Extérieur";
};

export type SeccionHeroConfig =
  | { mode: "video"; src: string }
  | { mode: "carousel"; slides: SeccionCarouselSlide[] };

const f = (section: SeccionId, file: string) =>
  encodeURI(`${seccionFolders[section]}/${file}`);

/**
 * Médias actifs par page — à mettre à jour quand vous déposez dans secciones/.
 * Les chemins ci-dessous pointent encore vers l’ancien emplacement le temps
 * de la migration ; remplacez-les par f("societe", "votre-fichier.mp4"), etc.
 */
export const seccionHeroMedia: Record<SeccionId, SeccionHeroConfig> = {
  accueil: {
    mode: "carousel",
    slides: [
      // Ex. après dépôt dans secciones/accueil/ :
      // { src: f("accueil", "01.jpg"), alt: "Réalisation intérieure", lieu: "Intérieur" },
    ],
  },
  societe: {
    mode: "video",
    src: f("societe", "genevejour.mp4"),
  },
  marques: {
    mode: "video",
    src: "/videos/grok-video-a30c7402-7703-4ab4-bb63-4ad837cbc258.mp4",
  },
  realisations: {
    mode: "video",
    src: "/videos/grok-video-17df602e-09e2-4376-aa9e-80dc6c2543a7.mp4",
  },
  votreProjet: {
    mode: "video",
    src: f("votreProjet", "planvideo.mp4"),
  },
};

/** Helpers pour les pages (vidéo unique) */
export const societeHeroVideoSrc =
  seccionHeroMedia.societe.mode === "video" ? seccionHeroMedia.societe.src : "";
export const marquesHeroVideoSrc =
  seccionHeroMedia.marques.mode === "video" ? seccionHeroMedia.marques.src : "";
export const realisationsHeroVideoSrc =
  seccionHeroMedia.realisations.mode === "video" ? seccionHeroMedia.realisations.src : "";
export const votreProjetHeroVideoSrc =
  seccionHeroMedia.votreProjet.mode === "video" ? seccionHeroMedia.votreProjet.src : "";

export { f as seccionMediaPath };
