"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { scrollToEl } from "@/lib/scroll";
import { tulipCycle, TulipFinish } from "./tulips";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

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
  const navRef = useRef<HTMLElement | null>(null);
  const [labelPx, setLabelPx] = useState(10);
  // Below a legible size the rail goes glyph-only (labels stay for screen readers).
  const [labelsHidden, setLabelsHidden] = useState(false);
  const slopeRef = useRef(0);
  const [fitTick, setFitTick] = useState(0);

  useEffect(() => {
    const bump = () => setFitTick((t) => t + 1);
    window.addEventListener("resize", bump);
    document.fonts?.ready.then(bump).catch(() => {});
    // Late settle checks: early layout can differ (fonts, hydration order).
    const t1 = setTimeout(bump, 400);
    const t2 = setTimeout(bump, 1500);
    return () => {
      window.removeEventListener("resize", bump);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Label size: as large as fits. Pages differ in section count and label
  // length, so this can't be static CSS. Solved in ONE pass per trigger, with
  // the font-dependent part measured off-DOM (canvas): a measure-and-adjust
  // loop over the live layout feeds on its own intermediate states and
  // oscillates, so the size must never be derived from a layout it changed.
  useIsoLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav || !sections.length) return;
    const buttons = Array.from(nav.children) as HTMLElement[];
    const spans = buttons
      .map((b) => b.querySelector("span"))
      .filter(Boolean) as HTMLElement[];
    if (!spans.length) return;
    const cs = getComputedStyle(nav);
    const padding = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    // Split each item into the label extent (scales linearly with font size,
    // through zero) and the chrome around it (glyph, gap, padding — fixed).
    // shrink-0 on buttons and spans keeps these natural heights honest even
    // while the current layout overflows.
    let chrome = 0;
    let labelTotal = 0;
    for (const b of buttons) {
      const s = b.querySelector("span");
      const sh = s ? s.getBoundingClientRect().height : 0;
      labelTotal += sh;
      chrome += b.offsetHeight - sh;
    }
    const currentPx = parseFloat(getComputedStyle(spans[0]).fontSize);
    if (!currentPx) return;
    // While hidden, the spans measure 1px, so the last visible slope decides
    // whether there is room to bring the labels back.
    let slope = slopeRef.current;
    if (!labelsHidden && labelTotal > 0) {
      slope = labelTotal / currentPx;
      slopeRef.current = slope;
    }
    if (!slope) return;
    const room = nav.clientHeight - padding - chrome - 4;
    const cap = Math.min(12, Math.max(9, window.innerHeight * 0.0135));
    const fit = Math.floor((room / slope) * 2) / 2;
    if (fit < 9) {
      setLabelsHidden(true);
    } else {
      setLabelsHidden(false);
      setLabelPx(Math.min(cap, fit));
    }
  }, [sections, fitTick, labelsHidden]);

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
      // The mobile distance chip renders inside the Header's own bar (so it
      // can never cover page content or the wordmark) — feed it from here.
      window.dispatchEvent(
        new CustomEvent("minti:roadbook", {
          detail: { code: stage.code, km: p * stage.km, show: p > 0.02 && p <= 0.995 },
        }),
      );
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
  }, [measure, stage.km, stage.code]);

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

      {/* Desktop: the roadbook column */}
      <aside
        className="fixed inset-y-0 left-0 z-[60] hidden w-rail flex-col border-r rule bg-feshfesh text-night lg:flex"
        aria-label="Roadbook page sections"
      >
        {/* continuous distance line on the right edge */}
        <div className="absolute inset-y-0 right-0 w-[2px] bg-night/10" aria-hidden="true">
          <div
            className="h-full w-full bg-murram"
            style={{ transform: `scaleY(${progress})`, transformOrigin: "top" }}
          />
        </div>

        <div className="border-b rule px-3 py-3 text-center">
          <div className="display-wide text-xl leading-none">{stage.code}</div>
          <div className="data-mono mt-1 text-[12px] text-night/65">
            {stage.km.toFixed(2)} KM
          </div>
        </div>

        <nav ref={navRef} className="flex min-h-0 flex-1 flex-col justify-between overflow-y-auto py-4 [scrollbar-width:none]">
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
                className={`group flex shrink-0 flex-col items-center gap-0.5 px-2 py-0.5 transition-colors ${
                  isActive ? "text-murram" : "text-night/65 hover:text-night"
                }`}
              >
                <Glyph active={isActive} />
                <span
                  className={labelsHidden ? "sr-only" : "display-cond shrink-0 font-medium tracking-[0.15em]"}
                  style={labelsHidden ? undefined : { writingMode: "vertical-rl", fontSize: `${labelPx}px` }}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="border-t rule px-2 py-3 text-center" aria-live="off">
          <div
            className={`data-mono text-base font-semibold tabular-nums ${
              finished ? "text-murram" : "text-night"
            }`}
          >
            {km.toFixed(1)}
          </div>
          <div className="data-mono mt-0.5 text-[12px] text-night/65">
            {finished ? "FIN" : "KM"}
          </div>
        </div>
      </aside>
    </>
  );
}
