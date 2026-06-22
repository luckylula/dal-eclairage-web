import Image from "next/image";
import {
  logoFooterSrc,
  logoHeaderPosterSrc,
  logoHeaderVideoHeight,
  logoHeaderVideoSrc,
  logoHeaderVideoWidth,
} from "@/lib/logo-media";
import { siteName } from "@/lib/site";

type Props = {
  variant?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

const footerSizeClass = "h-[6.25rem] w-auto sm:h-[7rem] md:h-[8rem]";

const headerVideoClass =
  "logo-header-video block h-[7rem] w-auto max-w-[min(22rem,60vw)] object-contain object-left sm:h-[7.75rem] md:h-[8.5rem]";

export function SiteLogo({ variant = "header", priority = false, className = "" }: Props) {
  if (variant === "header") {
    return (
      <video
        src={logoHeaderVideoSrc}
        width={logoHeaderVideoWidth}
        height={logoHeaderVideoHeight}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={logoHeaderPosterSrc}
        aria-label={siteName}
        className={`${headerVideoClass} ${className}`}
      />
    );
  }

  return (
    <Image
      src={logoFooterSrc}
      alt={siteName}
      width={400}
      height={130}
      priority={priority}
      className={`object-contain object-left ${footerSizeClass}`}
    />
  );
}
