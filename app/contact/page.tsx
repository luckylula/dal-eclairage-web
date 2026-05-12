import { ContactForm } from "@/components/ContactForm";
import { contactBlock, siteName } from "@/lib/site";

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
          <p className="mt-6 max-w-xl font-sans text-lg text-muted">
            [Accroche — placeholder. Showroom sur rendez-vous, réponse sous 48h ouvrées.]
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-content gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div>
            <h2 className="font-serif text-2xl text-ink">Formulaire</h2>
            <p className="mt-2 font-sans text-sm text-muted">
              [Note — placeholder. Ce message est transmis à l’équipe commerciale.]
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
              Tél.{" "}
              <a className="text-ink hover:text-dal" href={`tel:${contactBlock.phone.replace(/\s/g, "")}`}>
                {contactBlock.phone}
              </a>
            </p>
            <p className="mt-1 font-sans text-sm text-muted">
              <a className="text-ink hover:text-dal" href={`mailto:${contactBlock.email}`}>
                {contactBlock.email}
              </a>
            </p>
            <div className="mt-10 border border-line bg-cream/50 p-6">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-dal">
                Horaires
              </h3>
              <p className="mt-3 font-sans text-sm text-muted">{contactBlock.hours}</p>
              <p className="mt-4 font-sans text-sm text-muted">
                [Samedi fermé — placeholder. Rendez-vous hors horaires sur demande.]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-content px-6 py-12 lg:px-10">
          <h2 className="font-serif text-xl text-ink">Plan (embed placeholder)</h2>
          <div className="mt-6 aspect-[21/9] w-full border border-line bg-line">
            <iframe
              title="[Carte — placeholder]"
              className="h-full w-full grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=6.12%2C46.18%2C6.18%2C46.24&amp;layer=mapnik"
            />
          </div>
          <p className="mt-3 font-sans text-xs text-muted">
            [Carte indicative Genève — placeholder. Remplacer par l’adresse définitive DAL.]
          </p>
        </div>
      </section>
    </>
  );
}
