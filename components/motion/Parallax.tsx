"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /** Total differential as a fraction of element height. Max 0.2 per brief. */
  amount?: number;
  className?: string;
};

/**
 * Subtle scroll parallax — transform only, rAF-throttled, disabled under
 * reduced motion and below 768px.
 */
export function Parallax({ children, amount = 0.16, className = "" }: ParallaxProps) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia("(min-width: 768px)");
    if (reduced.matches || !wide.matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const box = outer.current?.getBoundingClientRect();
      const el = inner.current;
      if (!box || !el) return;
      const vh = window.innerHeight;
      // -1 (below viewport) … 1 (above viewport)
      const p = Math.max(-1, Math.min(1, 1 - (2 * (box.top + box.height / 2)) / (vh + box.height)));
      el.style.transform = `translate3d(0, ${(p * amount * box.height) / 2}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [amount]);

  return (
    <div ref={outer} className={`overflow-hidden ${className}`}>
      <div ref={inner} className="h-full w-full will-change-transform" style={{ scale: `${1 + amount}` }}>
        {children}
      </div>
    </div>
  );
}
