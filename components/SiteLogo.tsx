import { logoVideoHeight, logoVideoSrc, logoVideoWidth } from "@/lib/logo-media";
import { siteName } from "@/lib/site";

type Props = {
  className?: string;
};

const logoVideoClass =
  "logo-header-video mx-auto block h-[5rem] w-auto max-w-[min(16rem,52vw)] object-contain object-center sm:h-[5.5rem] md:h-[6rem]";

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
