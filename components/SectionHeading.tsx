type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  /** Fond sombre : texte clair (accroche DAL en doré). */
  variant?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  variant = "default",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const inverted = variant === "inverted";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-dal">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 font-sans text-base sm:text-lg leading-relaxed ${
            inverted ? "text-white/85" : "text-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
