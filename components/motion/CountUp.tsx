"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  durationMs?: number;
};

/**
 * Mono numeral count-up, triggered once on entry. Linear ramp — no easing
 * theatrics (brief §7). Reduced motion shows the final value immediately.
 */
export function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  durationMs = 900,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (reduced) {
          setDisplay(value);
          return;
        }
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / durationMs);
          setDisplay(value * p);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={`data-mono ${className}`}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
