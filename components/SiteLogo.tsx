import {
  logoFooterVideoSrc,
  logoHeaderVideoHeight,
  logoHeaderVideoSrc,
  logoHeaderVideoWidth,
} from "@/lib/logo-media";
import { siteName } from "@/lib/site";

type Props = {
  variant?: "header" | "footer";
  className?: string;
};

const logoVideoClass =
  "logo-header-video block h-[7.75rem] w-auto max-w-[min(24rem,65vw)] object-contain object-left sm:h-[8.5rem] md:h-[9.25rem]";

export function SiteLogo({ variant = "header", className = "" }: Props) {
  const src = variant === "header" ? logoHeaderVideoSrc : logoFooterVideoSrc;

  return (
    <video
      src={src}
      width={logoHeaderVideoWidth}
      height={logoHeaderVideoHeight}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={siteName}
      className={`${logoVideoClass} ${className}`}
    />
  );
}
