/**
 * Central site configuration and verified facts.
 *
 * RULES (from the build brief):
 * - Anything not in the verified list below is marked with a {{TODO: …}} string
 *   and listed in CONTENT-TODO.md. Never present an invented number as final.
 * - EASCR involvement: inside the event since 2020. Who owns the organisation is
 *   not discussed anywhere on the site (client instruction, 2026-09-15).
 * - Drivers are "crews we have run" — past tense, year-labelled.
 */

export const TODO = (label: string) => `{{TODO: ${label}}}`;

/**
 * Env values arrive from dashboards where "added but left blank" is common.
 * Treat empty/whitespace as unset so a blank variable can never break a build
 * or hide a TBC chip behind an empty string.
 */
const env = (value: string | undefined): string | null => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
};

/** Site URL: tolerate blank values, a missing scheme, paths and bad input. */
const resolveSiteUrl = (): string => {
  // The production domain (Squarespace-registered, served by Vercel).
  // NEXT_PUBLIC_SITE_URL still overrides when set.
  const fallback = "https://www.mintimotorsports.com";
  const raw = env(process.env.NEXT_PUBLIC_SITE_URL);
  if (!raw) return fallback;
  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    return new URL(candidate).origin;
  } catch {
    console.warn(`[site] NEXT_PUBLIC_SITE_URL is not a valid URL ("${raw}") — using fallback.`);
    return fallback;
  }
};

export const site = {
  name: "Minti Motorsport",
  tagline: "A seat in the Safari. Built, crewed and run from Nairobi.",
  description:
    "Minti Motorsport runs fully supported seats on East African rallies. MST-built Safari-spec Ford Escorts, a Nairobi service crew, and everything handled from first call to finish ramp.",
  // Production domain — set before launch. Used for canonical URLs, sitemap, OG.
  url: resolveSiteUrl(),

  founder: "Joey Ghose",
  founded: "2017",
  registeredIn: "United Kingdom",
  base: {
    city: "Nairobi",
    country: "Kenya",
    address: "Galleria Business Park, Loita",
    // Nairobi city coordinates — replace with the workshop's own if wanted.
    coords: "1.2921° S, 36.8219° E",
  },

  contact: {
    /**
     * Contact hierarchy (client instruction, 2026-09-01): the official Minti
     * line leads — no personal name attached; Joey Ghose is the named
     * secondary contact. Env vars override the defaults.
     */
    officialLabel: "Minti Motorsport official line",
    email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL) ?? "mintimotorsports@gmail.com",
    phone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE) ?? "+254 799 839012",
    whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) ?? "254799839012", // digits only, intl format
  },

  social: {
    instagram: null as string | null, // {{TODO: Instagram URL}}
    youtube: null as string | null, // {{TODO: YouTube URL}}
    linkedin: null as string | null, // {{TODO: LinkedIn URL}}
  },

  /** Booking link for the post-enquiry call step. Offered only when configured. */
  bookingUrl: env(process.env.NEXT_PUBLIC_BOOKING_URL),

  /** CTA vocabulary — one verb set through the whole funnel. */
  cta: {
    primary: "Take a seat",
    secondary: "See the car",
    speak: "Speak to the team",
    pack: "Request the brief",
  },

  nav: [
    { href: "/the-drive", label: "The Drive" },
    { href: "/the-cars", label: "The Cars" },
    { href: "/the-team", label: "The Team" },
    { href: "/heritage", label: "Heritage" },
    { href: "/journal", label: "Journal" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

/** Verified facts — the only claims the site may state as fact (brief §9). */
export const verifiedFacts = {
  ukRegistered: true,
  familyRun: true,
  nairobiBase: true,
  // Dates supplied by the client, 2026-09-10.
  founded: "2017",
  eascrStakeFrom: "2020",
  crewsRunFrom: "2017",
  mstPartnership:
    "Exclusive regional partnership with MST Cars supplying new and original Ford Escort Mk1 and Mk2 Safari-spec rally cars, built for endurance events.",
  eascrHeritage:
    "Inside the East African Safari Classic Rally since 2020. Ownership of the organisation is not discussed on the site.",
  // Per-crew years are unconfirmed; the site states only "from 2017" for
  // crews as a whole, so individual year labels are not published.
  crewsRun: [
    {
      name: "Ian Duncan",
      car: "Nissan 240RS",
    },
    {
      name: 'Carl "Flash" Tundo',
      car: "VW Polo R5",
      carShort: "VW R5",
    },
    {
      name: "Maxine Wahome & Safina Khan",
      note: "An all-Kenyan ladies crew introduced to classic rallying.",
    },
  ],
} as const;

/** Roadbook stage metadata per route — drives the signature rail. */
export const stages: Record<
  string,
  { code: string; name: string; km: number }
> = {
  "/": { code: "SS1", name: "THE PITCH", km: 60.2 },
  "/the-drive": { code: "SS2", name: "THE DRIVE", km: 48.7 },
  "/the-cars": { code: "SS3", name: "THE CARS", km: 33.1 },
  "/the-team": { code: "SS4", name: "THE TEAM", km: 21.9 },
  "/heritage": { code: "SS5", name: "HERITAGE", km: 74.0 },
  "/journal": { code: "SS6", name: "JOURNAL", km: 18.4 },
  "/contact": { code: "SS7", name: "CONTACT", km: 12.6 },
  "/enquire": { code: "FIN", name: "FINISH CONTROL", km: 8.8 },
};
