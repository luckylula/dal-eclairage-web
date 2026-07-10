import { contactBlock, type SocialLink } from "@/lib/site";

const socialIconClass = "h-8 w-8 shrink-0";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${socialIconClass} origin-center scale-[1.2]`}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`${socialIconClass} origin-center scale-[1.35]`}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5.25" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

const icons = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
} as const;

const baseClass =
  "inline-flex h-12 w-12 items-center justify-center text-white/70 transition-colors hover:text-dal";

function SocialItem({ link }: { link: SocialLink }) {
  const Icon = icons[link.id];
  const soonLabel = `${link.label} — bientôt disponible`;

  if (link.href) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label={link.label}
      >
        <Icon />
      </a>
    );
  }

  return (
    <span
      className={`${baseClass} cursor-default opacity-55 hover:text-dal`}
      aria-disabled="true"
      title="Bientôt disponible"
    >
      <Icon />
      <span className="sr-only">{soonLabel}</span>
    </span>
  );
}

export function SocialFooterLinks() {
  return (
    <div>
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-dal">
        Nous suivre
      </p>
      <div className="mt-4 flex items-center gap-3">
        {contactBlock.social.map((link) => (
          <SocialItem key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}
