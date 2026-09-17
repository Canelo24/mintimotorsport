"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { events, track } from "@/lib/analytics";

/**
 * Transparent over the hero, solid night after scroll. The mobile menu is a
 * calm full-screen sheet: nav links only, generous air, contact row, one CTA
 * anchored at the bottom — no numbering, no borders, no clutter.
 */
export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  // Live roadbook distance, broadcast by RoadbookRail — shown as a chip in
  // the bar itself on mobile so it never overlaps page content.
  const [roadbook, setRoadbook] = useState<{ code: string; km: number; show: boolean } | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onRoadbook = (e: Event) => setRoadbook((e as CustomEvent).detail);
    window.addEventListener("minti:roadbook", onRoadbook);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("minti:roadbook", onRoadbook);
    };
  }, []);

  // Close the menu on navigation; manage focus + scroll lock while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const whatsappHref = site.contact.whatsapp
    ? `https://wa.me/${site.contact.whatsapp}`
    : null;

  // Pages that open on the light ground get a light bar until they scroll.
  const LIGHT = ["/contact", "/journal", "/privacy", "/terms", "/cookies"];
  const light = !solid && !open && LIGHT.some((p) => pathname === p || pathname?.startsWith(p + "/"));

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-300 ${
        solid || open
          ? "bg-night text-chalk"
          : light
            ? "border-b rule bg-feshfesh/90 text-night backdrop-blur-sm"
            : "bg-gradient-to-b from-night/60 to-transparent text-chalk"
      }`}
    >
      <div className="relative flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
        <Link
          href="/"
          className="wordmark -my-2 py-2 text-base leading-none sm:text-lg lg:text-[1.625rem]"
          aria-label="Minti Motorsport home"
        >
          MINTI<span className="text-sodium">·</span>MOTORSPORT
        </Link>

        <span
          aria-hidden="true"
          className={`data-mono absolute right-[72px] top-1/2 hidden -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold tracking-[0.08em] transition-opacity duration-300 min-[400px]:block lg:!hidden ${light ? "text-murram" : "text-sodium"} ${
            roadbook?.show && !open ? "opacity-100" : "opacity-0"
          }`}
        >
          {roadbook ? `${roadbook.code} · ${roadbook.km.toFixed(1)} KM` : ""}
        </span>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {/* Journal stays in the footer and mobile menu; the header keeps only
              the selling routes. */}
          {site.nav.filter((item) => item.href !== "/journal").map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`display-cond text-[0.875rem] transition-colors ${
                light
                  ? pathname === item.href
                    ? "text-murram"
                    : "text-night/80 hover:text-murram"
                  : pathname === item.href
                    ? "text-sodium"
                    : "text-chalk/80 hover:text-sodium"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="display-cond bg-sodium px-5 py-2.5 text-[0.8125rem] text-night transition-colors hover:bg-chalk"
          >
            {site.cta.primary}
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="display-cond -mr-2 px-2 py-2 text-[0.875rem] lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

    </header>

      {/* Mobile menu — a true full-screen opaque sheet, rendered OUTSIDE the
          header (its backdrop styles would otherwise trap this fixed layer). */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 z-[69] flex-col bg-night pt-[57px] text-chalk lg:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        <button ref={closeRef} className="sr-only" onClick={() => setOpen(false)}>
          Close menu
        </button>

        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col justify-center gap-1 px-8"
        >
          {[{ href: "/", label: "Home" }, ...site.nav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`menu-item display-wide py-2.5 text-[1.75rem] leading-none transition-colors ${
                pathname === item.href ? "text-sodium" : "text-chalk hover:text-sodium"
              }`}
              style={{ "--menu-delay": `${60 + i * 45}ms` } as React.CSSProperties}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className="menu-item flex justify-center pb-6"
          style={{ "--menu-delay": "380ms" } as React.CSSProperties}
        >
          <Image
            src="/brand/minti-crest.png"
            alt=""
            width={826}
            height={549}
            className="w-32 opacity-95"
          />
        </div>

        <div
          className="menu-item px-8 pb-5"
          style={{ "--menu-delay": "420ms" } as React.CSSProperties}
        >
          <div className="flex items-center justify-between border-t border-chalk/15 pt-5">
            <p className="data-mono text-[12px] text-chalk/60">
              NAIROBI · {site.base.coords}
            </p>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                onClick={() => track(events.whatsapp)}
                className="display-cond py-3 text-[13px] text-chalk/80 hover:text-sodium"
              >
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        <div
          className="menu-item px-5 pb-8"
          style={{ "--menu-delay": "480ms" } as React.CSSProperties}
        >
          <Link
            href="/enquire"
            className="display-cond block bg-sodium px-6 py-5 text-center text-[15px] text-night"
          >
            {site.cta.primary}
          </Link>
        </div>
      </div>
    </>
  );
}
