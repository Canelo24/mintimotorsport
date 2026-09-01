"use client";

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

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-[70] text-chalk transition-colors duration-300 ${
        solid || open
          ? "bg-night"
          : "bg-gradient-to-b from-night/60 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
        <Link
          href="/"
          className="wordmark text-lg leading-none"
          aria-label="Minti Motorsport — home"
        >
          MINTI<span className="text-sodium">·</span>MOTORSPORT
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`display-cond text-data-s tracking-[0.14em] transition-colors hover:text-sodium ${
                pathname === item.href ? "text-sodium" : "text-chalk/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="display-cond bg-sodium px-5 py-2.5 text-data-s tracking-[0.14em] text-night transition-colors hover:bg-chalk"
          >
            {site.cta.primary}
          </Link>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="display-cond -mr-2 px-2 py-2 text-data-s tracking-[0.16em] lg:hidden"
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
          className="menu-item px-8 pb-5"
          style={{ "--menu-delay": "420ms" } as React.CSSProperties}
        >
          <div className="flex items-center justify-between border-t border-chalk/15 pt-5">
            <p className="data-mono text-[11px] text-grease">
              NAIROBI · {site.base.coords}
            </p>
            {whatsappHref ? (
              <a
                href={whatsappHref}
                onClick={() => track(events.whatsapp)}
                className="data-mono text-[11px] text-chalk/70 underline-offset-4 hover:text-sodium"
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
            className="display-cond block bg-sodium px-6 py-5 text-center text-data tracking-[0.2em] text-night"
          >
            {site.cta.primary}
          </Link>
        </div>
      </div>
    </>
  );
}
