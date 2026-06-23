type Props = {
  text: string;
  className?: string;
  /** Répétitions par bloc (évite les bandes vides sur grands écrans). */
  repeatsPerBlock?: number;
};

export function TaglineMarquee({
  text,
  className = "h-[1cm]",
  repeatsPerBlock = 2,
}: Props) {
  const displayText = text.toUpperCase();

  const block = (
    <span className="flex shrink-0 items-center">
      {Array.from({ length: repeatsPerBlock }, (_, i) => (
        <span
          key={i}
          className="whitespace-nowrap px-5 font-sans text-[clamp(0.625rem,1.2vw,0.875rem)] font-semibold uppercase leading-none tracking-[0.14em] text-dal sm:px-7 md:px-9"
        >
          {displayText}
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={`tagline-marquee flex items-center overflow-hidden bg-white ${className}`}
      aria-label={text}
    >
      <div className="tagline-marquee-track flex w-max items-center">
        {block}
        <span aria-hidden="true">{block}</span>
      </div>
    </div>
  );
}
