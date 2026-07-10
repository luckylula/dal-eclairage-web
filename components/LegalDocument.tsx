import type { ReactNode } from "react";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalDocument({ eyebrow, title, lead, updatedAt, sections }: Props) {
  return (
    <>
      <section className="border-b border-line bg-cream">
        <div className="mx-auto max-w-content px-6 py-20 lg:px-10 lg:py-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-dal">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl text-ink sm:text-5xl">{title}</h1>
          {lead ? (
            <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted">{lead}</p>
          ) : null}
          <p className="mt-8 font-sans text-sm text-muted">
            Dernière mise à jour&nbsp;: {updatedAt}
          </p>
        </div>
      </section>

      <section className="border-b border-line py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <nav aria-label="Sommaire" className="mb-14 border-b border-line pb-8">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Sommaire
            </p>
            <ol className="mt-4 grid gap-2 font-sans text-sm text-ink/90 sm:grid-cols-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="transition hover:text-dal">
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-14">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="font-serif text-2xl text-ink sm:text-3xl">{section.title}</h2>
                <div className="legal-prose mt-5 font-sans text-base leading-relaxed text-muted">
                  {section.content}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
