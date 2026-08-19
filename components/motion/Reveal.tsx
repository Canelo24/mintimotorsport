"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          observer?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  return observer;
}

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms, applied via CSS custom property. */
  delay?: number;
  /** Use a clip-path wipe (for imagery) instead of the settle. */
  wipe?: boolean;
  className?: string;
  as?: "div" | "section" | "figure" | "li" | "span";
};

/**
 * Scroll-driven reveal. The CSS in globals.css owns the transition and the
 * reduced-motion kill-switch — this component only flags visibility.
 */
export function Reveal({
  children,
  delay = 0,
  wipe = false,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`${wipe ? "reveal-wipe" : "reveal"} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
