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

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 24"
      className={`transition-transform duration-300 group-hover:translate-x-2 ${className}`}
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
  );
}

/**
 * The signature ask as a time card: a stub, the instruction, the arrow.
 * One per page, always sodium, "Take a seat" unless the page sells another
 * programme.
 */
export function SeatTicket({
  from,
  href = eascr2027.applyHref,
  label = eascr2027.applyCta,
  meta = "EAST AFRICAN SAFARI CLASSIC · 2027 ENTRY",
  stub = ["EASCR", "2027"],
  ground = "night",
  className = "",
}: Props) {
  const notch = ground === "night" ? "bg-night" : "bg-feshfesh";
  return (
    <Link
      href={href}
      data-ticket=""
      onClick={() => track("campaign_cta_click", { campaign: "eascr2027", from })}
      className={`group relative grid overflow-hidden bg-sodium text-night transition-colors duration-300 hover:bg-chalk focus-visible:bg-chalk sm:grid-cols-[auto_1fr_auto] ${className}`}
    >
      {/* the stub */}
      <div className="relative flex items-baseline gap-3 border-b border-dashed border-night/40 px-5 py-4 sm:flex-col sm:items-start sm:justify-center sm:gap-1 sm:border-b-0 sm:border-r sm:px-7 sm:py-6">
        <span className="display-wide text-h3 leading-none">{stub[0]}</span>
        <span className="data-mono text-[12px] font-semibold tracking-[0.12em]">{stub[1]}</span>
        <span aria-hidden="true" className={`absolute -right-2 -top-2 hidden h-4 w-4 rounded-full sm:block ${notch}`} />
        <span aria-hidden="true" className={`absolute -bottom-2 -right-2 hidden h-4 w-4 rounded-full sm:block ${notch}`} />
      </div>
      {/* the instruction; on phones the arrow sits inline with the label */}
      <div className="min-w-0 px-5 py-5 sm:px-8 sm:py-7">
        <p className="data-mono text-[12px] font-semibold tracking-[0.1em] text-night/75">{meta}</p>
        <p className="mt-2 flex items-center justify-between gap-4">
          <span className="display-wide text-[clamp(2.25rem,1.4rem+3.6vw,4.5rem)] leading-none">{label}</span>
          <Arrow className="h-6 w-12 shrink-0 sm:hidden" />
        </p>
      </div>
      {/* the arrow cell, desktop and tablet */}
      <div className="hidden items-center justify-center border-l border-dashed border-night/40 px-8 sm:flex">
        <Arrow className="h-8 w-16" />
      </div>
    </Link>
  );
}
