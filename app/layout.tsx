import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteName } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
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
    <html lang="fr" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        <Header />
        <main className="pt-[8.5rem] sm:pt-[9rem] lg:pt-[10.5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
