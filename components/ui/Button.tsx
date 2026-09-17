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
    "display-cond min-h-16 bg-sodium px-10 py-5 text-[15px] text-night hover:bg-chalk focus-visible:bg-chalk",
  "ghost-dark":
    "display-cond min-h-16 border border-chalk/45 px-10 py-5 text-[15px] text-chalk hover:border-sodium hover:text-sodium",
  "ghost-light":
    "display-cond min-h-16 border border-night/45 px-10 py-5 text-[15px] text-night hover:border-murram hover:text-murram",
  "text-dark":
    "display-cond -my-2 py-2 text-[13px] text-chalk/85 underline decoration-1 underline-offset-[6px] hover:text-sodium",
  "text-light":
    "display-cond -my-2 py-2 text-[13px] text-murram underline decoration-1 underline-offset-[6px] hover:text-night",
};

/**
 * One button system: a primary, a ghost and a text link. Every variant
 * carries a trailing line arrow that lengthens on hover; the primary label
 * site-wide is "Take a seat".
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
      className={`group inline-flex items-center justify-center gap-4 transition-[background-color,color,border-color,transform] duration-200 ${
        block ? "w-full sm:w-auto" : ""
      } ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 16"
        className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 ${
          isText ? "h-3 w-6" : "h-4 w-8"
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 8 H30" />
        <path d="M23 2 L30 8 L23 14" />
      </svg>
    </Link>
  );
}
