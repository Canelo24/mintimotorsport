"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { track } from "@/lib/analytics";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light";
  /** Magnetic cursor pull — primary CTAs, fine pointers only. */
  magnetic?: boolean;
  /** Analytics event fired on click. */
  event?: string;
  eventProps?: Record<string, string | number>;
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-sodium text-night hover:bg-chalk focus-visible:bg-chalk",
  "ghost-dark":
    "border border-chalk/40 text-chalk hover:border-sodium hover:text-sodium",
  "ghost-light":
    "border border-night/40 text-night hover:border-murram hover:text-murram",
};

export function Button({
  href,
  children,
  variant = "primary",
  magnetic = false,
  event,
  eventProps,
  className = "",
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

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
      className={`display-cond inline-block px-7 py-4 text-data tracking-[0.16em] transition-[background-color,color,border-color,transform] duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
