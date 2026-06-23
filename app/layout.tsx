import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Josefin_Sans, Prata } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SelectorDock } from "@/components/SelectorDock";
import { siteName } from "@/lib/site";
import "./globals.css";
import "./themes.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-prata",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-josefin",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteName} · Genève`,
    template: `%s · ${siteName}`,
  },
  description:
    "[Description SEO — placeholder] Distributeur d'éclairage professionnel à Genève.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${prata.variable} ${josefin.variable} ${dmSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("dal-site-theme");if(t==="2"||t==="3"||t==="4")document.documentElement.dataset.siteTheme=t;var h=localStorage.getItem("dal-heading-font");if(h==="2"||h==="3")document.documentElement.dataset.headingFont=h;}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <Header />
        <main className="pt-[168px] sm:pt-[188px] md:pt-[208px]">{children}</main>
        <Footer />
        <SelectorDock />
      </body>
    </html>
  );
}
