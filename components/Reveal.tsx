"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "fade";

type Props = {
  children: ReactNode;
  direction?: Direction;
  /** Retraso de inicio en milisegundos (para efectos en cascada). */
  delay?: number;
  className?: string;
  /** Umbral de visibilidad para disparar la animación (0–1). */
  threshold?: number;
  /** Si true (por defecto), solo se anima la primera vez. */
  once?: boolean;
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.15,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold]);

  const dirClass =
    direction === "left"
      ? "hero-from-left"
      : direction === "right"
        ? "hero-from-right"
        : direction === "fade"
          ? "hero-fade"
          : "hero-from-bottom";

  const style: CSSProperties = { ["--hero-delay" as never]: `${delay}ms` };

  return (
    <div
      ref={ref}
      className={`${visible ? `hero-anim ${dirClass}` : "opacity-0"} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
