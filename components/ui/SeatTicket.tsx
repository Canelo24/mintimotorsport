"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { eascr2027 } from "@/content/eascr2027";

type Props = {
  /** Analytics source, e.g. "home-finish". */
  from: string;
  href?: string;
  label?: string;
  /** The mono line above the label. */
  meta?: string;
  /** The stub: big word, small word. */
  stub?: [string, string];
  /** Colour of the band behind the ticket, for the perforation notches. */
  ground?: "night" | "feshfesh";
  className?: string;
};

/**
 * The signature ask as a time card: a stub, the instruction, the arrow.
 * One per page, always sodium, always "Take a seat".
 */
export function SeatTicket({
  from,
  href = eascr2027.applyHref,
  label = eascr2027.applyCta,
  meta = "APPLICATIONS OPEN · ONE ALL-IN HIRE COST · PRICED ON APPLICATION",
  stub = ["EASCR", "2027"],
  ground = "night",
  className = "",
}: Props) {
  const notch = ground === "night" ? "bg-night" : "bg-feshfesh";
  return (
    <Link
      href={href}
      onClick={() => track("campaign_cta_click", { campaign: "eascr2027", from })}
      className={`group relative grid overflow-hidden bg-sodium text-night transition-colors duration-300 hover:bg-chalk focus-visible:bg-chalk sm:grid-cols-[auto_1fr_auto] ${className}`}
    >
      {/* the stub */}
      <div className="relative flex items-baseline gap-3 border-b border-dashed border-night/40 px-5 py-4 sm:flex-col sm:items-start sm:justify-center sm:gap-1 sm:border-b-0 sm:border-r sm:px-7 sm:py-6">
        <span className="display-wide text-h3 leading-none">{stub[0]}</span>
        <span className="data-mono text-[11px] tracking-[0.18em]">{stub[1]}</span>
        <span aria-hidden="true" className={`absolute -right-2 -top-2 hidden h-4 w-4 rounded-full sm:block ${notch}`} />
        <span aria-hidden="true" className={`absolute -bottom-2 -right-2 hidden h-4 w-4 rounded-full sm:block ${notch}`} />
      </div>
      {/* the instruction */}
      <div className="min-w-0 px-5 py-5 sm:px-8 sm:py-7">
        <p className="data-mono text-[10px] tracking-[0.18em] text-night/70 sm:text-[11px]">{meta}</p>
        <p className="display-wide mt-2 text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-none">{label}</p>
      </div>
      {/* the arrow */}
      <div className="flex items-center justify-end border-t border-dashed border-night/40 px-5 py-4 sm:justify-center sm:border-l sm:border-t-0 sm:px-8">
        <svg
          viewBox="0 0 48 24"
          className="h-6 w-12 transition-transform duration-300 group-hover:translate-x-2 sm:h-8 sm:w-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 12 H44" />
          <path d="M34 3 L44 12 L34 21" />
        </svg>
      </div>
    </Link>
  );
}
