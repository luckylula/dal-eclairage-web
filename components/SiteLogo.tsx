import { logoVideoHeight, logoVideoSrc, logoVideoWidth } from "@/lib/logo-media";
import { siteName } from "@/lib/site";

type Props = {
  className?: string;
};

const logoVideoClass =
  "logo-header-video mx-auto block h-[9rem] w-auto max-w-[min(28rem,78vw)] object-contain object-center sm:h-[10rem] md:h-[11rem]";

export function SiteLogo({ className = "" }: Props) {
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
      className={`${logoVideoClass} ${className}`}
    />
  );
}
