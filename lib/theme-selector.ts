export const SITE_THEME_STORAGE_KEY = "dal-site-theme";

export type SiteThemeOption = "1" | "2" | "3" | "4";

export const siteThemeOptions: {
  id: SiteThemeOption;
  label: string;
  preview: "default" | "black" | "split" | "cream";
}[] = [
  { id: "1", label: "Thème 1 — design actuel", preview: "default" },
  { id: "2", label: "Thème 2 — noir uniforme, accents dorés", preview: "black" },
  { id: "3", label: "Thème 3 — franges crème et noir alternées", preview: "split" },
  { id: "4", label: "Thème 4 — crème uniforme, accents marron", preview: "cream" },
];

export function isSiteThemeOption(value: string | null): value is SiteThemeOption {
  return value === "1" || value === "2" || value === "3" || value === "4";
}

export function applySiteTheme(option: SiteThemeOption) {
  if (option === "1") {
    delete document.documentElement.dataset.siteTheme;
  } else {
    document.documentElement.dataset.siteTheme = option;
  }
}
