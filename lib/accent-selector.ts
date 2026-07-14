export const ACCENT_COLOR_STORAGE_KEY = "dal-accent-color";

export type AccentColorOption = "gold" | "red";

export const accentColorOptions: {
  id: AccentColorOption;
  label: string;
  swatch: string;
}[] = [
  {
    id: "gold",
    label: "Accent doré",
    swatch: "var(--theme-gold)",
  },
  {
    id: "red",
    label: "Accent rouge — logo DAL",
    swatch: "var(--theme-red)",
  },
];

export function isAccentColorOption(value: string | null): value is AccentColorOption {
  return value === "gold" || value === "red";
}

export function applyAccentColor(option: AccentColorOption) {
  if (option === "gold") {
    delete document.documentElement.dataset.accent;
  } else {
    document.documentElement.dataset.accent = option;
  }
}
