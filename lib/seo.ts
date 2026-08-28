import type { Metadata } from "next";
import { site } from "@/content/site";
import { images } from "@/content/images.generated";

/** Per-route metadata with canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_GB",
      images: [{ url: images.ogDefault.src, width: 1200, height: 630, alt: images.ogDefault.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [images.ogDefault.src],
    },
  };
}

/** Organization JSON-LD — facts limited to the verified list (brief §9). */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    sport: "Rallying",
    foundingLocation: { "@type": "Country", name: "United Kingdom" },
    location: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
    },
    founder: { "@type": "Person", name: site.founder },
  };
}

/** Service JSON-LD for /the-drive. */
export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Arrive-and-drive East African rally programme",
    provider: { "@type": "SportsOrganization", name: site.name, url: site.url },
    areaServed: "East Africa",
    serviceType: "Motorsport participation programme",
    description:
      "A fully-supported seat in a Safari-spec rally car: MST-built Ford Escort Mk1/Mk2, preparation and shakedown, full service crew and logistics, event administration, and travel coordination.",
  };
}
