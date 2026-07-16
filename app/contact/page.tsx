import { ContactForm } from "@/components/ContactForm";
import { contactHeroVideoSrc } from "@/lib/contact-media";
import { contactBlock, siteName, siteTagline } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">Contact</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-ink sm:text-5xl md:text-6xl">
            Écrivez-nous
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg text-muted">{siteTagline}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <h2 className="font-serif text-2xl text-ink">Formulaire</h2>
            <p className="mt-2 font-sans text-sm text-muted">
              Votre message est transmis directement à notre équipe.
            </p>
            <div className="mt-8 border border-line bg-cream/30 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ink">{siteName}</h2>
            <address className="mt-6 not-italic font-sans text-sm leading-relaxed text-muted">
              {contactBlock.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="mt-4 font-sans text-sm text-muted">
              Téléphone :{" "}
              <a className="text-ink hover:text-dal" href={`tel:${contactBlock.phoneTel}`}>
                {contactBlock.phone}
              </a>
            </p>
            <p className="mt-1 font-sans text-sm text-muted">
              Email :{" "}
              <a className="text-ink hover:text-dal" href={`mailto:${contactBlock.email}`}>
                {contactBlock.email}
              </a>
            </p>
            <div className="mt-10 border border-line bg-cream/50 p-6">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-dal">
                Horaires
              </h3>
              <div className="mt-3 space-y-1 font-sans text-sm text-muted">
                {contactBlock.hoursLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink">
        <div className="mx-auto max-w-content px-6 py-12 lg:px-10 lg:py-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/15 bg-black sm:aspect-[21/10] lg:min-h-[28rem]">
            <video
              className="absolute inset-0 h-full w-full object-contain"
              src={contactHeroVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="DAL Éclairage Hitech — boutique"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
          <h2 className="font-serif text-xl text-ink">Plan</h2>
          <div className="mt-6 aspect-[21/9] w-full border border-line bg-line">
            <iframe
              title="DAL Éclairage Hitech — Rue du Tunnel 11 B, Carouge"
              className="h-full w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={contactBlock.mapsEmbedUrl}
            />
          </div>
          <p className="mt-3 font-sans text-sm text-muted">
            <a
              href={contactBlock.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:text-dal hover:underline"
            >
              Ouvrir dans Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
