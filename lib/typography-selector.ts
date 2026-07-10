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
    label: "Typographie 1 — Rê Majeur",
    previewFamily: "var(--font-montserrat), system-ui, sans-serif",
    previewWeight: 600,
    previewLetterSpacing: "0.01em",
  },
  {
    id: "2",
    label: "Typographie 2 — Juana",
    previewFamily: "var(--font-playfair), Georgia, serif",
    previewWeight: 400,
    previewLetterSpacing: "0.02em",
  },
  {
    id: "3",
    label: "Typographie 3 — Porta Romana",
    previewFamily: "var(--font-jost), system-ui, sans-serif",
    previewWeight: 700,
    previewLetterSpacing: "-0.015em",
  },
];

export function isHeadingFontOption(value: string | null): value is HeadingFontOption {
  return value === "1" || value === "2" || value === "3";
}

export function applyHeadingFont(option: HeadingFontOption) {
  if (option === "1") {
    delete document.documentElement.dataset.headingFont;
  } else {
    document.documentElement.dataset.headingFont = option;
  }
}
