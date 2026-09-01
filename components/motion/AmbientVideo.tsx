"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** MP4 path; a sibling .webm (VP9) is offered first for browsers without H.264. */
  src: string;
  /** Optional lighter rendition served below 768px (same .webm convention). */
  mobileSrc?: string;
  className?: string;
  /** Wait until the element nears the viewport before loading (below-fold use). */
  lazy?: boolean;
};

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * Muted ambient background video. Plays on desktop and mobile alike; the
 * still image beneath remains the fallback for prefers-reduced-motion,
 * Save-Data, genuinely slow connections (2g/3g), and anywhere autoplay is
 * refused (e.g. iOS Low Power Mode) — the video is enhancement only.
 */
export function AmbientVideo({ src, mobileSrc, className = "", lazy = false }: Props) {
  const [allowed, setAllowed] = useState(false);
  const [small, setSmall] = useState(false);
  const [near, setNear] = useState(!lazy);
  const holder = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as unknown as { connection?: NetworkInformation }).connection;
    const constrained =
      conn?.saveData === true || /(^|\b)(2g|3g)\b/.test(conn?.effectiveType ?? "");
    setSmall(window.matchMedia("(max-width: 767px)").matches);
    setAllowed(!reduced && !constrained);
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

  // iOS occasionally ignores the autoplay attribute on dynamically inserted
  // video; a muted play() call is permitted and settles it. Failure is fine —
  // the still image simply stays.
  useEffect(() => {
    if (allowed && near) videoRef.current?.play().catch(() => {});
  }, [allowed, near]);

  const activeSrc = small && mobileSrc ? mobileSrc : src;

  return (
    <div ref={holder} className={className} aria-hidden="true">
      {allowed && near ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={activeSrc.replace(/\.mp4$/, ".webm")} type="video/webm" />
          <source src={activeSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
