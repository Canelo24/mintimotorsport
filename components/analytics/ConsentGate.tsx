"use client";

import { useEffect, useState } from "react";

const KEY = "minti-consent";

/** Minimal consent gate for GA4 — no cookies until the visitor agrees. */
export function ConsentGate({ gaId }: { gaId: string }) {
  const [choice, setChoice] = useState<string | null>("pending");

  useEffect(() => {
    setChoice(localStorage.getItem(KEY));
  }, []);

  useEffect(() => {
    if (choice !== "granted") return;
    const s = document.createElement("script");
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    s.async = true;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", gaId, { anonymize_ip: true });
  }, [choice, gaId]);

  // "pending" (pre-hydration), "granted" and "denied" all render nothing;
  // the banner shows only when no stored decision exists (null).
  if (choice !== null) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[80] border-t rule bg-night-2 px-5 py-4 text-chalk"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
        <p className="text-data text-chalk/85">
          We use one analytics cookie to see which pages help people decide.
          Nothing loads until you agree.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            className="display-cond border border-chalk/40 px-4 py-2 text-data-s tracking-[0.14em]"
            onClick={() => {
              localStorage.setItem(KEY, "denied");
              setChoice("denied");
            }}
          >
            Decline
          </button>
          <button
            type="button"
            className="display-cond bg-sodium px-4 py-2 text-data-s tracking-[0.14em] text-night"
            onClick={() => {
              localStorage.setItem(KEY, "granted");
              setChoice("granted");
            }}
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}
