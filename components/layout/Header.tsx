"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { events, track } from "@/lib/analytics";

/**
 * Transparent over the hero, solid night after scroll. Mobile: full-screen
 * menu with the primary CTA anchored at the bottom; WhatsApp appears only
 * when a real number is configured.
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
    <header
      className={`fixed inset-x-0 top-0 z-[70] text-chalk transition-colors duration-300 ${
        solid || open
          ? "bg-night/95 backdrop-blur-sm"
          : "bg-gradient-to-b from-night/60 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
        <Link href="/" className="display-wide text-lg leading-none tracking-tight">
          MINTI<span className="text-sodium">·</span>MOTORSPORT
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`display-cond text-data-s tracking-[0.16em] transition-colors hover:text-sodium ${
                pathname === item.href ? "text-sodium" : "text-chalk/85"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/enquire"
            className="display-cond bg-sodium px-5 py-2.5 text-data-s tracking-[0.16em] text-night transition-colors hover:bg-chalk"
          >
            {site.cta.primary}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              onClick={() => track(events.whatsapp)}
              aria-label="WhatsApp Minti Motorsport"
              className="data-mono border border-chalk/40 px-3 py-2 text-data-s"
            >
              WhatsApp
            </a>
          ) : null}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="display-cond px-2 py-2 text-data-s tracking-[0.16em]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-0 top-[57px] flex-col justify-between bg-night px-5 pb-8 pt-10 lg:hidden ${
          open ? "flex" : "hidden"
        }`}
      >
        <button ref={closeRef} className="sr-only" onClick={() => setOpen(false)}>
          Close menu
        </button>
        <nav aria-label="Mobile" className="flex flex-col gap-2">
          {site.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="display-wide border-b rule py-4 text-h3 text-chalk"
            >
              <span className="data-mono mr-4 text-data-s text-grease">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/enquire"
          className="display-cond block bg-sodium px-6 py-5 text-center text-data tracking-[0.2em] text-night"
        >
          {site.cta.primary}
        </Link>
      </div>
    </header>
  );
}
