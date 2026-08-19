import Script from "next/script";
import { ConsentGate } from "./ConsentGate";

/**
 * Analytics loader behind the adapter in lib/analytics.ts.
 * - Plausible (cookieless): loads directly when configured.
 * - GA4: loads only after explicit consent (ConsentGate).
 * Neither configured → renders nothing.
 */
export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}
      {gaId ? <ConsentGate gaId={gaId} /> : null}
    </>
  );
}
