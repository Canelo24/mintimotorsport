"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** MP4 path; a sibling .webm (VP9) is offered first for browsers without H.264. */
  src: string;
  className?: string;
  /** Wait until the element nears the viewport before loading (below-fold use). */
  lazy?: boolean;
};

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Muted ambient background video, rendered only when the visitor's context
 * warrants it (brief §7): never under prefers-reduced-motion, never with
 * Save-Data or a slow connection, never below 768px. Everywhere else the
 * underlying still image simply remains — the video is enhancement only.
 */
export function AmbientVideo({ src, className = "", lazy = false }: Props) {
  const [allowed, setAllowed] = useState(false);
  const [near, setNear] = useState(!lazy);
  const holder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const conn = (navigator as unknown as { connection?: NetworkInformation }).connection;
    const constrained =
      conn?.saveData === true || /(^|\b)(2g|3g)\b/.test(conn?.effectiveType ?? "");
    setAllowed(!reduced && wide && !constrained);
  }, []);

  useEffect(() => {
    if (!lazy || near) return;
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy, near]);

  return (
    <div ref={holder} className={className} aria-hidden="true">
      {allowed && near ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src.replace(/\.mp4$/, ".webm")} type="video/webm" />
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
