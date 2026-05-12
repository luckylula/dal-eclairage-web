import Image from "next/image";
import { siteName } from "@/lib/site";

type Props = {
  /** Tamaño relativo del logo */
  variant?: "header" | "footer";
  priority?: boolean;
  className?: string;
};

const sizeClass = {
  header: "h-[5.25rem] w-auto sm:h-[5.75rem] md:h-[6rem]",
  footer: "h-[4.25rem] w-auto sm:h-[4.75rem]",
} as const;

export function SiteLogo({ variant = "header", priority = false, className = "" }: Props) {
  return (
    <Image
      src="/images/logo/dal_logo.png"
      alt={siteName}
      width={400}
      height={130}
      priority={priority}
      className={`object-contain object-left ${sizeClass[variant]} ${className}`}
    />
  );
}
