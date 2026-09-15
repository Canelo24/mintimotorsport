"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { track } from "@/lib/analytics";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light" | "text-dark" | "text-light";
  /** Magnetic cursor pull — primary CTAs, fine pointers only. */
  magnetic?: boolean;
  /** Full width on phones, natural width from sm up. */
  block?: boolean;
  /** Analytics event fired on click. */
  event?: string;
  eventProps?: Record<string, string | number>;
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "display-cond min-h-14 bg-sodium px-9 py-4 text-[13px] tracking-[0.18em] text-night hover:bg-chalk focus-visible:bg-chalk",
  "ghost-dark":
    "display-cond min-h-14 border border-chalk/40 px-9 py-4 text-[13px] tracking-[0.18em] text-chalk hover:border-sodium hover:text-sodium",
  "ghost-light":
    "display-cond min-h-14 border border-night/40 px-9 py-4 text-[13px] tracking-[0.18em] text-night hover:border-murram hover:text-murram",
  "text-dark":
    "data-mono text-[12px] uppercase tracking-[0.12em] text-chalk/80 underline-offset-[6px] hover:text-sodium hover:underline",
  "text-light":
    "data-mono text-[12px] uppercase tracking-[0.12em] text-murram underline-offset-[6px] hover:underline",
};

/**
 * One button system: a primary, a ghost and a text link. Every variant
 * carries a trailing arrow that slides on hover; the primary label site-wide
 * is "Take a seat".
 */
export function Button({
  href,
  children,
  variant = "primary",
  magnetic = false,
  block = false,
  event,
  eventProps,
  className = "",
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const isText = variant.startsWith("text");

  const onMove = (e: MouseEvent) => {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const box = el.getBoundingClientRect();
    const x = (e.clientX - box.left - box.width / 2) * 0.18;
    const y = (e.clientY - box.top - box.height / 2) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => event && track(event, eventProps)}
      className={`group inline-flex items-center justify-center gap-3 transition-[background-color,color,border-color,transform] duration-200 ${
        block ? "w-full sm:w-auto" : ""
      } ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={`inline-block transition-transform duration-200 group-hover:translate-x-1 ${
          isText ? "" : "text-[15px]"
        }`}
      >
        →
      </span>
    </Link>
  );
}
