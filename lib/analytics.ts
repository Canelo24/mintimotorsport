/**
 * Analytics adapter (brief §6/§15). Provider-agnostic:
 * - Plausible: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (cookieless — no banner needed)
 * - GA4: set NEXT_PUBLIC_GA_ID (loaded only after consent)
 * With neither configured, track() is a silent no-op.
 */

type Props = Record<string, string | number>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props }) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: string, props?: Props) {
  if (typeof window === "undefined") return;
  try {
    window.plausible?.(event, props ? { props } : undefined);
    window.gtag?.("event", event, props ?? {});
  } catch {
    // analytics must never break the page
  }
}

/** Funnel events, named once so the vocabulary stays consistent. */
export const events = {
  heroCta: "hero_cta_click",
  enquiryStarted: "enquiry_started",
  enquiryStep: "enquiry_step_completed",
  enquirySubmitted: "enquiry_submitted",
  packRequested: "pack_requested",
  newsletter: "newsletter_signup",
  whatsapp: "whatsapp_click",
  callBooking: "call_booking_click",
  packageCta: "package_cta_click",
} as const;
