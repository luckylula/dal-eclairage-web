import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { SocialFooterLinks } from "@/components/SocialFooterLinks";
import { legalFooterLinks } from "@/lib/legal";
import { mainNav } from "@/lib/nav";
import { contactBlock, siteName, siteTagline } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <SiteLogo />
          <p className="sr-only">{siteName}</p>
          <p className="mt-6 font-sans text-base leading-relaxed text-white/75">{siteTagline}</p>
        </div>

        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-dal">
            Contact
          </p>
          <address className="mt-4 not-italic font-sans text-base leading-relaxed text-white/75">
            {contactBlock.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-3 font-sans text-base text-white/75">
            Tél.{" "}
            <a className="text-white hover:text-dal" href={`tel:${contactBlock.phoneTel}`}>
              {contactBlock.phone}
            </a>
          </p>
          <p className="mt-1 font-sans text-base text-white/75">
            Email{" "}
            <a className="text-white hover:text-dal" href={`mailto:${contactBlock.email}`}>
              {contactBlock.email}
            </a>
          </p>
          <p className="mt-3 font-sans text-base text-white/75">
            {contactBlock.hoursLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>

        <div>
          <SocialFooterLinks />
          <p className="mt-6 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-dal">
            Navigation
          </p>
          <ul className="mt-4 grid gap-3 font-sans text-lg font-medium text-white sm:grid-cols-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-dal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-6 font-sans text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {siteName}</p>
          <nav aria-label="Informations légales" className="flex flex-wrap gap-x-6 gap-y-2">
            {legalFooterLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 underline-offset-4 transition hover:text-dal hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
