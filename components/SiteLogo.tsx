import { logoVideoHeight, logoVideoSrc, logoVideoWidth } from "@/lib/logo-media";
import { siteName } from "@/lib/site";

type Props = {
  className?: string;
};

const footerLogoClass =
  "mx-auto block h-16 w-auto max-w-[12rem] object-contain object-center sm:h-20";

export function SiteLogo({ className }: Props) {
  return (
    <video
      src={logoVideoSrc}
      width={logoVideoWidth}
      height={logoVideoHeight}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label={siteName}
      className={className ?? footerLogoClass}
      style={{ backgroundColor: "transparent" }}
    />
  );
}
