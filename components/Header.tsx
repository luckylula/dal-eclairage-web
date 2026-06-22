"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNav } from "@/lib/nav";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-sans text-lg tracking-wide text-black transition-colors lg:text-xl xl:text-[1.35rem] xl:tracking-[0.02em] ${
        active
          ? "font-semibold underline decoration-2 decoration-black underline-offset-[0.18em]"
          : "font-medium hover:opacity-80"
      }`}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-black/15 bg-white">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-5 sm:py-6 lg:gap-10 lg:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center leading-none"
          onClick={() => setOpen(false)}
        >
          <SiteLogo variant="header" priority className="transition-opacity group-hover:opacity-90" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-7 xl:gap-9 2xl:gap-10" aria-label="Principale">
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-12 min-w-[5.25rem] items-center justify-center rounded border-2 border-black/25 px-5 font-sans text-sm font-semibold uppercase tracking-widest text-black sm:text-base lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t-2 border-black/15 bg-white lg:hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        } transition-all duration-300`}
      >
        <nav className="flex flex-col gap-6 px-6 py-8" aria-label="Mobile">
          {mainNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-xl text-black sm:text-2xl ${
                  active
                    ? "font-semibold underline decoration-2 decoration-black underline-offset-[0.18em]"
                    : "font-medium"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
