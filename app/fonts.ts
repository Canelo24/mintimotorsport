import localFont from "next/font/local";

/**
 * Four voices (DESIGN-PLAN.md, revised after client feedback):
 * - Big Shoulders (variable, opsz+wght) — marquee display: tall, condensed,
 *   industrial; rally-poster character at scale
 * - Archivo (variable, wdth 62–125)     — condensed labels + wordmark
 * - Familjen Grotesk (variable)         — body: warm editorial grotesk,
 *   17–19px long-form with actual personality
 * - IBM Plex Mono                       — everything numeric and factual
 */

export const bigShoulders = localFont({
  src: "./fonts/big-shoulders-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-big-shoulders",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Impact", "sans-serif"],
});

export const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

export const familjen = localFont({
  src: [
    {
      path: "./fonts/familjen-grotesk-variable.woff2",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "./fonts/familjen-grotesk-italic-variable.woff2",
      weight: "400 700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-familjen",
  fallback: ["Segoe UI", "Helvetica Neue", "sans-serif"],
});

export const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-mono-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-plex-mono",
  fallback: ["Courier New", "monospace"],
});

export const fontClassNames = `${bigShoulders.variable} ${archivo.variable} ${familjen.variable} ${plexMono.variable}`;
