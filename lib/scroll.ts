/** Scroll helper that respects Lenis (when active) and reduced motion. */
export function scrollToEl(el: Element) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lenis = window.__lenis;
  if (lenis && !reduced) {
    lenis.scrollTo(el as HTMLElement, { offset: -72 });
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}
