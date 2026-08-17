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
  contact: `${SECCIONES_BASE}/contact`,
} as const;

export type SeccionId = keyof typeof seccionFolders;

export type SeccionCarouselSlide = {
  src: string;
  alt: string;
  lieu?: "Intérieur" | "Extérieur";
};

export type SeccionVideoSlide = {
  src: string;
  label: string;
};

export type SeccionHeroConfig =
  | { mode: "video"; src: string }
  | { mode: "carousel"; slides: SeccionCarouselSlide[] }
  | { mode: "videoCarousel"; slides: SeccionVideoSlide[] };

/** Incrémenter après remplacement d'un fichier (même nom) pour forcer le rechargement. */
const seccionMediaVersion = "v=7";

const f = (section: SeccionId, file: string) =>
  `${encodeURI(`${seccionFolders[section]}/${file}`)}?${seccionMediaVersion}`;

/**
 * Médias actifs par page — à mettre à jour quand vous déposez dans secciones/.
 * Les chemins ci-dessous pointent encore vers l’ancien emplacement le temps
 * de la migration ; remplacez-les par f("societe", "votre-fichier.mp4"), etc.
 */
export const seccionHeroMedia: Record<SeccionId, SeccionHeroConfig> = {
  accueil: {
    mode: "videoCarousel",
    slides: [
      { src: f("accueil", "videodal6.mp4"), label: "1" },
      { src: f("accueil", "videodal33.mp4"), label: "2" },
      { src: f("accueil", "videodal55.mp4"), label: "3" },
      { src: f("accueil", "videodal4.mp4"), label: "4" },
      { src: f("accueil", "videodal11.mp4"), label: "5" },
      { src: f("accueil", "videodal66.mp4"), label: "6" },
      { src: f("accueil", "videodal3.mp4"), label: "7" },
    ],
  },
  societe: {
    mode: "video",
    src: f("societe", "genevejour.mp4"),
  },
  marques: {
    mode: "video",
    src: f("marques", "videodal5.mp4"),
  },
  realisations: {
    mode: "video",
    src: f("realisations", "videodal6.mp4"),
  },
  votreProjet: {
    mode: "video",
    src: f("votreProjet", "planvideo.mp4"),
  },
  contact: {
    mode: "video",
    src: f("contact", "contact.mp4"),
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
export const contactHeroVideoSrc =
  seccionHeroMedia.contact.mode === "video" ? seccionHeroMedia.contact.src : "";

/** Vidéos hero accueil — 7 propositions en validation (libellées Vidéo 1–7). */
export const accueilHeroVideos: SeccionVideoSlide[] =
  seccionHeroMedia.accueil.mode === "videoCarousel" ? seccionHeroMedia.accueil.slides : [];

export { f as seccionMediaPath };
