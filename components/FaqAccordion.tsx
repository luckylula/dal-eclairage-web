import { faqItems } from "@/lib/faq";

export function FaqAccordion() {
  return (
    <div className="border border-line bg-white divide-y divide-line">
      {faqItems.map((item, i) => (
        <details key={i} className="group px-6 py-5 lg:px-8">
          <summary className="cursor-pointer list-none font-serif text-lg text-ink marker:content-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
            <span>{item.q}</span>
            <span className="font-sans text-dal text-2xl leading-none group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl font-sans text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
