import { contactBlock, siteName } from "@/lib/site";

/** Informations légales officielles (UID CHE-345.126.432, RC Genève). */
export const legalEntity = {
  tradeName: siteName,
  legalName: "DAL Eclairage Hitech Sàrl",
  legalForm: "Société à responsabilité limitée (Sàrl)",
  address: "Rue du Tunnel 11B, 1227 Carouge (GE), Suisse",
  email: contactBlock.email,
  phone: contactBlock.phone,
  /** Représentant habilité à engager la société */
  representative: "Hubert Darnet, gérant",
  uid: "CHE-345.126.432",
  commercialRegisterNumber: "CH-660.4.375.022-2",
  commercialRegisterOffice: "Handelsregisteramt des Kantons Genf",
  commercialRegisterStatus: "actif",
  commercialRegister:
    "Inscrite au registre du commerce du canton de Genève (Handelsregisteramt des Kantons Genf), statut actif",
};

export const legalHosting = {
  provider: "Vercel",
};

export const legalProcessors = [
  {
    name: "Vercel",
    role: "Hébergement du site web",
  },
  {
    name: "Neon",
    role: "Stockage des messages de contact",
  },
  {
    name: "Resend",
    role: "Envoi des notifications par e-mail",
  },
  {
    name: "Google",
    role: "Carte interactive sur la page Contact",
  },
] as const;

export const legalLastUpdated = "juillet 2026";

export const legalFooterLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
] as const;
