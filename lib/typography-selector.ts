export const HEADING_FONT_STORAGE_KEY = "dal-heading-font";

export type HeadingFontOption = "1" | "2" | "3";

export const headingFontOptions: {
  id: HeadingFontOption;
  label: string;
  previewFamily: string;
  previewWeight?: number;
  previewLetterSpacing?: string;
}[] = [
  {
    id: "1",
    label: "Typographie 1 — Cormorant Garamond",
    previewFamily: "var(--font-cormorant), Georgia, serif",
    previewWeight: 400,
    previewLetterSpacing: "0.025em",
  },
  {
    id: "2",
    label: "Typographie 2 — Prata",
    previewFamily: "var(--font-prata), Georgia, serif",
    previewWeight: 400,
    previewLetterSpacing: "0.015em",
  },
  {
    id: "3",
    label: "Typographie 3 — Josefin Sans",
    previewFamily: "var(--font-josefin), system-ui, sans-serif",
    previewWeight: 300,
    previewLetterSpacing: "0.06em",
  },
];

export function isHeadingFontOption(value: string | null): value is HeadingFontOption {
  return value === "1" || value === "2" || value === "3";
}

export function applyHeadingFont(option: HeadingFontOption) {
  document.documentElement.dataset.headingFont = option;
}
