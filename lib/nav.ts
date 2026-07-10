import { siteFeatures } from "@/lib/site-features";

const allNavItems = [
  { href: "/", label: "Accueil" },
  { href: "/societe", label: "La Société" },
  { href: "/marques", label: "Nos Marques" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/votre-projet", label: "Votre Projet" },
  { href: "/actualites", label: "Actualités", feature: "actualites" as const },
  { href: "/contact", label: "Contact" },
] as const;

export const mainNav = allNavItems.filter((item) => {
  if ("feature" in item && item.feature === "actualites") {
    return siteFeatures.actualites;
  }
  return true;
});
