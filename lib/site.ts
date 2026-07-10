export const siteName = "DAL Éclairage Hitech";

export const siteTagline = "Spécialiste en éclairage technique et architectural sur Genève.";

export type SocialLink = {
  id: "linkedin" | "instagram";
  label: string;
  /** Définir l'URL pour activer le lien (ex. profil LinkedIn / Instagram). */
  href?: string;
};

export const contactBlock = {
  addressLines: ["Rue du Tunnel 11B", "1227 Carouge (GE), Suisse"],
  phone: "022 308 18 28",
  phoneTel: "+41223081828",
  email: "info@dal-eclairage.ch",
  hoursLines: [
    "Lun.–Jeu. 7h30–12h / 13h–17h",
    "Vendredi 7h30–12h / 13h–16h",
  ],
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Rue+du+Tunnel+11B,+1227+Carouge,+Suisse",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Rue+du+Tunnel+11B,+1227+Carouge,+Suisse&hl=fr&z=16&output=embed",
  social: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/dal-eclairage-hitech",
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/daleclairagehitech/",
    },
  ] satisfies SocialLink[],
};
