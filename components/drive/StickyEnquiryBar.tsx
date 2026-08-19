"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

/**
 * Sticky enquiry bar for /the-drive: appears once the visitor scrolls past
 * the hero (IO sentinel), sits above the fold bottom, one CTA.
 */
export function StickyEnquiryBar() {
  const [show, setShow] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), {
      rootMargin: "0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="absolute inset-x-0 top-[90svh]" />
      <div
        className={`fixed inset-x-0 bottom-0 z-[65] border-t rule bg-night/95 backdrop-blur-sm transition-transform duration-300 lg:pl-rail ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!show}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <p className="data-mono hidden text-data-s text-chalk/80 sm:block">
            SEATS ARE ALLOCATED IN ORDER OF COMMITMENT, NOT ENQUIRY.
          </p>
          <Link
            href="/enquire"
            tabIndex={show ? 0 : -1}
            className="display-cond w-full bg-sodium px-6 py-3 text-center text-data-s tracking-[0.16em] text-night transition-colors hover:bg-chalk sm:w-auto"
          >
            {site.cta.primary}
          </Link>
        </div>
      </div>
    </>
  );
}
