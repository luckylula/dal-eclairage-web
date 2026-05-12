/** Marques — liens fabricant placeholder */

export type Marque = {
  slug: string;
  nom: string;
  description: string;
  siteFabricant: string;
};

export const marques: Marque[] = [
  { slug: "linealight", nom: "Linealight", description: "[Ligne architecturale — placeholder]", siteFabricant: "https://example.com/linealight" },
  { slug: "nova-luce", nom: "Nova Luce", description: "[Solutions intérieures — placeholder]", siteFabricant: "https://example.com/nova-luce" },
  { slug: "luxiona", nom: "Luxiona", description: "[Performance et confort visuel — placeholder]", siteFabricant: "https://example.com/luxiona" },
  { slug: "stilnovo", nom: "Stilnovo", description: "[Design iconique — placeholder]", siteFabricant: "https://example.com/stilnovo" },
  { slug: "maytoni", nom: "Maytoni", description: "[Luminaires décoratifs — placeholder]", siteFabricant: "https://example.com/maytoni" },
  { slug: "hofflight", nom: "Hofflight", description: "[Éclairage technique — placeholder]", siteFabricant: "https://example.com/hofflight" },
  { slug: "kraken", nom: "Kraken Lighting", description: "[Mise en scène — placeholder]", siteFabricant: "https://example.com/kraken" },
  { slug: "estiluz", nom: "Estiluz", description: "[Appliques et suspensions — placeholder]", siteFabricant: "https://example.com/estiluz" },
  { slug: "tri21", nom: "Trizo 21", description: "[Minimalisme belge — placeholder]", siteFabricant: "https://example.com/trizo21" },
  { slug: "giocca", nom: "Giocca", description: "[Sur mesure — placeholder]", siteFabricant: "https://example.com/giocca" },
  { slug: "puk", nom: "PUK", description: "[Systèmes modulaires — placeholder]", siteFabricant: "https://example.com/puk" },
  { slug: "nte", nom: "NTE Systemas", description: "[Contrôle architectural — placeholder]", siteFabricant: "https://example.com/nte" },
];
