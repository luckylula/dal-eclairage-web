import fs from "fs";
import path from "path";
import type { Marque } from "@/lib/marques";

const CUSTOM_DIR = path.join(process.cwd(), "public/images/marques/custom");
const CUSTOM_EXTENSIONS = ["png", "svg", "jpg", "jpeg", "webp"] as const;

/** Noms de fichier courts acceptés en plus du slug exact. */
const CUSTOM_ALIASES: Record<string, string[]> = {
  "opple-lighting": ["opple"],
  "kraken-lighting": ["kraken"],
  "nte-sistemas": ["nte"],
};

export type MarqueImage = {
  src: string;
  isCustom: boolean;
  fit: Marque["imageFit"];
  tone: Marque["imageTone"];
};

function normalizeBaseName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listCustomImages(): { file: string; base: string; ext: string }[] {
  if (!fs.existsSync(CUSTOM_DIR)) return [];

  return fs
    .readdirSync(CUSTOM_DIR)
    .map((file) => {
      const parsed = path.parse(file);
      const ext = parsed.ext.slice(1).toLowerCase();
      if (!CUSTOM_EXTENSIONS.includes(ext as (typeof CUSTOM_EXTENSIONS)[number])) {
        return null;
      }
      return { file, base: normalizeBaseName(parsed.name), ext };
    })
    .filter((entry): entry is { file: string; base: string; ext: string } => entry !== null);
}

function findCustomImageSrc(slug: string): string | null {
  const normalizedSlug = normalizeBaseName(slug);
  const candidates = new Set([normalizedSlug, ...(CUSTOM_ALIASES[slug] ?? []).map(normalizeBaseName)]);
  const files = listCustomImages();

  for (const name of candidates) {
    const match = files.find((f) => f.base === name);
    if (match) {
      return `/images/marques/custom/${match.file}`;
    }
  }

  return null;
}

/** Résout le visuel affiché : logo custom prioritaire, sinon image par défaut. */
export function resolveMarqueImage(marque: Marque): MarqueImage {
  const customSrc = findCustomImageSrc(marque.slug);
  if (customSrc) {
    return {
      src: customSrc,
      isCustom: true,
      fit: "cover",
      tone: marque.imageTone,
    };
  }

  return {
    src: marque.imageSrc,
    isCustom: false,
    fit: marque.imageFit,
    tone: marque.imageTone,
  };
}
