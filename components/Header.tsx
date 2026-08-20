"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNav } from "@/lib/nav";

const navLinkClass =
  "whitespace-nowrap font-sans text-sm tracking-[0.08em] transition-colors sm:text-sm lg:text-[0.9375rem]";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${navLinkClass} ${
        active
          ? "font-medium text-white underline decoration-1 decoration-white/70 underline-offset-[0.35em]"
          : "font-normal text-white/80 hover:text-white"
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
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10">
      <div className="relative mx-auto flex max-w-content flex-col items-center px-6 py-2 sm:py-2.5 lg:px-10">
        <button
          type="button"
          className="absolute right-0 top-2 inline-flex h-9 items-center justify-center px-3 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white sm:top-2.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fermer" : "Menu"}
        </button>

        <Link
          href="/"
          className="group flex shrink-0 items-center justify-center leading-none"
          onClick={() => setOpen(false)}
        >
          <SiteLogo className="mx-auto block h-[9rem] w-auto max-w-[min(28rem,78vw)] object-contain object-center transition-opacity group-hover:opacity-90 sm:h-[10rem] md:h-[11rem]" />
        </Link>

        <nav
          className="mt-1.5 hidden w-full flex-wrap items-center justify-center gap-x-4 gap-y-1.5 lg:flex xl:gap-x-5"
          aria-label="Principale"
        >
          {mainNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 lg:hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        } transition-all duration-300`}
      >
        <nav className="flex flex-col items-center gap-4 px-6 py-6" aria-label="Mobile">
          {mainNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-base tracking-[0.06em] ${
                  active
                    ? "font-medium text-white underline decoration-1 decoration-white/70 underline-offset-[0.35em]"
                    : "font-normal text-white/80"
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
