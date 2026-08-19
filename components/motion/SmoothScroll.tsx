"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Lenis smooth scroll — dynamically imported, desktop fine-pointer only,
 * skipped entirely under prefers-reduced-motion.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reduced.matches || !finePointer.matches) return;

    let lenis: Lenis | undefined;
    let cancelled = false;

    import("lenis").then(({ default: LenisCtor }) => {
      if (cancelled) return;
      lenis = new LenisCtor({ autoRaf: true, lerp: 0.12 });
      window.__lenis = lenis;
    });

    return () => {
      cancelled = true;
      lenis?.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
