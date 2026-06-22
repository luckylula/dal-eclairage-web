import Link from "next/link";
import { SiteLogo } from "@/components/SiteLogo";
import { mainNav } from "@/lib/nav";
import { contactBlock, siteName, siteTagline } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-2 border-black/15 bg-cream">
      <div className="mx-auto grid max-w-content gap-12 px-6 py-16 lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-10 lg:px-10">
        <div>
          <SiteLogo variant="footer" />
          <p className="sr-only">{siteName}</p>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted">{siteTagline}</p>
        </div>

        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-dal">
            Contact
          </p>
          <address className="mt-4 not-italic font-sans text-base leading-relaxed text-muted">
            {contactBlock.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-3 font-sans text-base text-muted">
            Tél.{" "}
            <a className="text-ink hover:text-dal" href={`tel:${contactBlock.phoneTel}`}>
              {contactBlock.phone}
            </a>
          </p>
          <p className="mt-1 font-sans text-base text-muted">
            Email{" "}
            <a className="text-ink hover:text-dal" href={`mailto:${contactBlock.email}`}>
              {contactBlock.email}
            </a>
          </p>
          <p className="mt-3 font-sans text-base text-muted">
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
          <ul className="mt-4 grid gap-3 font-sans text-lg font-medium text-black sm:grid-cols-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:opacity-70">
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
                className="font-sans text-lg text-ink underline-offset-4 hover:text-dal hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black/15 bg-white">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-6 py-6 font-sans text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {siteName}. [Mentions légales — placeholder]</p>
          <p>[Politique de confidentialité — placeholder]</p>
        </div>
      </div>
    </footer>
  );
}
