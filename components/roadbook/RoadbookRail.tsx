"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { scrollToEl } from "@/lib/scroll";
import { tulipCycle, TulipFinish } from "./tulips";

type Stage = { code: string; name: string; km: number };

type Section = { label: string; top: number; el: Element };

/**
 * The signature element (DESIGN-PLAN.md §4): a paper roadbook column fixed to
 * the left edge on desktop, a slim progress strip on mobile. Pages mark
 * sections with `data-roadbook="LABEL"`; the rail measures them, maps scroll
 * to stage distance, and marks the active tulip. The final section on a page
 * is treated as its finish control.
 *
 * The readout is driven solely by the user's own scrolling, so it remains
 * correct (not frozen) under prefers-reduced-motion; only smoothing differs.
 */
export function RoadbookRail({ stage }: { stage: Stage }) {
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState(0);
  const [km, setKm] = useState(0);
  const [progress, setProgress] = useState(0);
  const raf = useRef(0);
  const sectionsRef = useRef<Section[]>([]);

  const measure = useCallback(() => {
    const els = Array.from(document.querySelectorAll("[data-roadbook]"));
    const list = els.map((el) => ({
      label: el.getAttribute("data-roadbook") ?? "",
      top: el.getBoundingClientRect().top + window.scrollY,
      el,
    }));
    sectionsRef.current = list;
    setSections(list);
  }, []);

  useEffect(() => {
    measure();
    // Re-measure when layout settles (fonts, images) and on resize.
    const ro = new ResizeObserver(() => measure());
    ro.observe(document.body);

    const update = () => {
      raf.current = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(p);
      setKm(p * stage.km);
      const list = sectionsRef.current;
      const marker = window.scrollY + window.innerHeight * 0.38;
      let idx = 0;
      for (let i = 0; i < list.length; i++) {
        if (list[i].top <= marker) idx = i;
      }
      // Snap the finish control at the very bottom of the page.
      if (p > 0.995 && list.length) idx = list.length - 1;
      setActive(idx);
    };
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [measure, stage.km]);

  const finished = progress > 0.995;

  return (
    <>
      {/* Mobile: slim progress strip with distance chip */}
      <div className="fixed inset-x-0 top-0 z-[60] lg:hidden" aria-hidden="true">
        <div className="h-[3px] w-full bg-night/20">
          <div
            className="h-full bg-sodium"
            style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
          />
        </div>
      </div>
      <div
        className="data-mono fixed right-2 top-2 z-[60] rounded-sm bg-night/80 px-2 py-0.5 text-[10px] font-medium text-chalk lg:hidden"
        aria-hidden="true"
      >
        {stage.code} · {km.toFixed(1)}/{stage.km.toFixed(1)} KM
      </div>

      {/* Desktop: the roadbook column */}
      <aside
        className="fixed inset-y-0 left-0 z-[60] hidden w-rail flex-col border-r rule bg-feshfesh text-night lg:flex"
        aria-label="Roadbook — page sections"
      >
        {/* continuous distance line on the right edge */}
        <div className="absolute inset-y-0 right-0 w-[2px] bg-night/10" aria-hidden="true">
          <div
            className="h-full w-full bg-murram"
            style={{ transform: `scaleY(${progress})`, transformOrigin: "top" }}
          />
        </div>

        <div className="border-b rule px-3 py-4 text-center">
          <div className="display-wide text-lg leading-none">{stage.code}</div>
          <div className="data-mono mt-1 text-[10px] text-grease">
            {stage.km.toFixed(2)} KM
          </div>
        </div>

        <nav className="flex flex-1 flex-col justify-between overflow-hidden py-5">
          {sections.map((s, i) => {
            const isLast = i === sections.length - 1;
            const Glyph = isLast ? TulipFinish : tulipCycle[i % tulipCycle.length];
            const isActive = i === active;
            return (
              <button
                key={`${s.label}-${i}`}
                type="button"
                onClick={() => scrollToEl(s.el)}
                aria-label={`Go to section: ${s.label}`}
                aria-current={isActive ? "true" : undefined}
                className={`group flex flex-col items-center gap-1.5 px-2 py-1 transition-colors ${
                  isActive ? "text-murram" : "text-grease hover:text-night"
                }`}
              >
                <Glyph active={isActive} />
                <span
                  className="display-cond text-[9px] tracking-[0.18em]"
                  style={{ writingMode: "vertical-rl" }}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="border-t rule px-2 py-4 text-center" aria-live="off">
          <div
            className={`data-mono text-sm font-semibold tabular-nums ${
              finished ? "text-murram" : "text-night"
            }`}
          >
            {km.toFixed(1)}
          </div>
          <div className="data-mono mt-0.5 text-[10px] text-grease">
            {finished ? "FIN" : "KM"}
          </div>
        </div>
      </aside>
    </>
  );
}
