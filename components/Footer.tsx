import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNav } from "@/lib/nav";
import { contactBlock, siteName, siteTagline } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <SiteLogo variant="footer" />
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
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-dal">
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
          <div className="mt-6 flex gap-4">
            {contactBlock.social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-lg text-white underline-offset-4 hover:text-dal hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-6 font-sans text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {siteName}. [Mentions légales — placeholder]</p>
          <p>[Politique de confidentialité — placeholder]</p>
        </div>
      </div>
    </footer>
  );
}
