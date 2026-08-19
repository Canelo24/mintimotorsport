import localFont from "next/font/local";

/**
 * Three voices, per DESIGN-PLAN.md:
 * - Archivo (variable, wdth 62–125) — display at both width extremes
 * - Source Sans 3 (variable)        — body, 17–19px long-form
 * - IBM Plex Mono                   — everything numeric and factual
 */

export const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

export const sourceSans = localFont({
  src: [
    {
      path: "./fonts/source-sans-3-variable.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "./fonts/source-sans-3-italic-variable.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-source-sans",
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

export const fontClassNames = `${archivo.variable} ${sourceSans.variable} ${plexMono.variable}`;
