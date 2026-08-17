"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SiteLogo } from "@/components/SiteLogo";
import {
  applyHeaderVariant,
  HEADER_VARIANT_STORAGE_KEY,
  headerVariantStyles,
  isHeaderVariant,
  type HeaderVariant,
} from "@/lib/header-variant";
import { mainNav } from "@/lib/nav";

function NavLink({
  href,
  label,
  linkClass,
}: {
  href: string;
  label: string;
  linkClass: string;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${linkClass} ${
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
  const [variant, setVariant] = useState<HeaderVariant>("a");

  useEffect(() => {
    const stored = localStorage.getItem(HEADER_VARIANT_STORAGE_KEY);
    const next = isHeaderVariant(stored) ? stored : "a";
    applyHeaderVariant(next);
    setVariant(next);

    const onStorage = (event: StorageEvent) => {
      if (event.key !== HEADER_VARIANT_STORAGE_KEY) return;
      const updated = isHeaderVariant(event.newValue) ? event.newValue : "a";
      applyHeaderVariant(updated);
      setVariant(updated);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      const current = root.dataset.headerVariant ?? null;
      if (isHeaderVariant(current) && current !== variant) {
        setVariant(current);
      }
    });
    observer.observe(root, { attributes: true, attributeFilter: ["data-header-variant"] });
    return () => observer.disconnect();
  }, [variant]);

  const styles = headerVariantStyles[variant];

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/10">
      <div className={styles.container}>
        <button
          type="button"
          className={styles.menuButton}
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
          <SiteLogo className={`transition-opacity group-hover:opacity-90 ${styles.logo}`} />
        </Link>

        <nav className={styles.nav} aria-label="Principale">
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              linkClass={styles.navLink}
            />
          ))}
        </nav>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-white/10 lg:hidden ${
          open ? "max-h-[640px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
        } transition-all duration-300`}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {mainNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${
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
