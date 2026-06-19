/**
 * Bloc équipe (accueil) — remplace l’ancienne section « Nos marques ».
 *
 * Variantes :
 * - `"group"`     — photo de groupe pleine largeur
 * - `"individual"` — portraits avec nom sous chaque photo
 * - `"both"`       — les deux, l’une sous l’autre (pour comparer avant de choisir)
 */
export type HomeTeamVariant = "group" | "individual" | "both";

export const homeTeamVariant: HomeTeamVariant = "both";

/** Photo de groupe — remplacer par le chemin définitif quand disponible. */
export const homeTeamGroupPhotoSrc: string | null = null;

export const homeTeamGroupPhotoSeed = "dal-team-group";
