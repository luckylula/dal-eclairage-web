export const HEADER_VARIANT_STORAGE_KEY = "dal-header-variant";

export type HeaderVariant = "a" | "b" | "c";

export const headerVariantOptions: {
  id: HeaderVariant;
  label: string;
  description: string;
}[] = [
  {
    id: "a",
    label: "A",
    description: "Juste milieu — taille intermédiaire",
  },
  {
    id: "b",
    label: "B",
    description: "Logo conservé — barre affinée",
  },
  {
    id: "c",
    label: "C",
    description: "Logo réduit — menu plus visible",
  },
];

export function isHeaderVariant(value: string | null): value is HeaderVariant {
  return value === "a" || value === "b" || value === "c";
}

export function applyHeaderVariant(variant: HeaderVariant) {
  document.documentElement.dataset.headerVariant = variant;
}

export type HeaderVariantStyles = {
  container: string;
  menuButton: string;
  logo: string;
  nav: string;
  navLink: string;
  mobileNav: string;
  mobileNavLink: string;
};

export const headerVariantStyles: Record<HeaderVariant, HeaderVariantStyles> = {
  a: {
    container: "relative mx-auto flex max-w-content flex-col items-center px-6 py-3 sm:py-3.5 lg:px-10",
    menuButton:
      "absolute right-0 top-3 inline-flex h-9 items-center justify-center px-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white sm:top-3.5 lg:hidden",
    logo: "mx-auto block h-[7rem] w-auto max-w-[min(24rem,72vw)] object-contain object-center sm:h-[7.5rem] md:h-[8rem]",
    nav: "mt-2 hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:flex xl:gap-x-6",
    navLink:
      "whitespace-nowrap font-sans text-sm tracking-[0.08em] transition-colors sm:text-[0.9375rem] lg:text-base",
    mobileNav: "flex flex-col items-center gap-4 px-6 py-6",
    mobileNavLink: "font-sans text-base tracking-[0.06em]",
  },
  b: {
    container: "relative mx-auto flex max-w-content flex-col items-center px-6 py-2 sm:py-2.5 lg:px-10",
    menuButton:
      "absolute right-0 top-2 inline-flex h-9 items-center justify-center px-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white sm:top-2.5 lg:hidden",
    logo: "mx-auto block h-[9rem] w-auto max-w-[min(28rem,78vw)] object-contain object-center sm:h-[10rem] md:h-[11rem]",
    nav: "mt-1.5 hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-1.5 lg:flex xl:gap-x-5",
    navLink:
      "whitespace-nowrap font-sans text-sm tracking-[0.08em] transition-colors sm:text-sm lg:text-[0.9375rem]",
    mobileNav: "flex flex-col items-center gap-4 px-6 py-6",
    mobileNavLink: "font-sans text-base tracking-[0.06em]",
  },
  c: {
    container: "relative mx-auto flex max-w-content flex-col items-center px-6 py-3 sm:py-3.5 lg:px-10",
    menuButton:
      "absolute right-0 top-3 inline-flex h-9 items-center justify-center px-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white sm:top-3.5 lg:hidden",
    logo: "mx-auto block h-[5rem] w-auto max-w-[min(18rem,62vw)] object-contain object-center sm:h-[5.5rem] md:h-[6rem]",
    nav: "mt-2.5 hidden w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:flex xl:gap-x-7",
    navLink:
      "whitespace-nowrap font-sans text-base tracking-[0.08em] transition-colors sm:text-[1.0625rem] lg:text-lg",
    mobileNav: "flex flex-col items-center gap-5 px-6 py-7",
    mobileNavLink: "font-sans text-lg tracking-[0.06em]",
  },
};
