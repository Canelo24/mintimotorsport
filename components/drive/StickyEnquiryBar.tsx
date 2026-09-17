"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

/**
 * Sticky enquiry bar for /the-drive on phones and tablets: appears once the
 * visitor scrolls past the hero, and steps aside whenever a ticket or the
 * footer is on screen so the ask is never shown twice at once. Desktop keeps
 * the header button instead.
 */
export function StickyEnquiryBar() {
  const [pastHero, setPastHero] = useState(false);
  const [covered, setCovered] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), {
      rootMargin: "0px",
    });
    io.observe(el);

    const targets = [
      ...Array.from(document.querySelectorAll("[data-ticket]")),
      ...Array.from(document.querySelectorAll("footer")),
    ];
    const visible = new Set<Element>();
    const io2 = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setCovered(visible.size > 0);
      },
      { rootMargin: "0px 0px 80px 0px" },
    );
    targets.forEach((t) => io2.observe(t));
    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  const show = pastHero && !covered;

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute inset-x-0 top-[90svh]" />
      <div
        className={`fixed inset-x-0 bottom-0 z-[65] border-t rule bg-night/95 backdrop-blur-sm transition-transform duration-300 lg:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!show}
      >
        <div className="mx-auto flex max-w-[84rem] items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <p className="display-cond hidden text-[13px] text-chalk/85 sm:block">
            SEATS ARE ALLOCATED IN ORDER OF COMMITMENT, NOT ENQUIRY.
          </p>
          <Link
            href="/enquire"
            tabIndex={show ? 0 : -1}
            className="display-cond w-full bg-sodium px-6 py-3 text-center text-[13px] text-night transition-colors hover:bg-chalk sm:w-auto"
          >
            {site.cta.primary}
          </Link>
        </div>
      </div>
    </>
  );
}
