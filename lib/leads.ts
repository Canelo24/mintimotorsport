import "server-only";

/**
 * Lead delivery adapter (brief §6). Destinations are configured by env var;
 * with none configured, submissions are logged loudly server-side and the
 * README documents the missing setup — a production submission is never
 * silently discarded.
 *
 * Supported destinations (any combination):
 * - LEAD_WEBHOOK_URL   — POST JSON to any endpoint (Zapier/Make/own API)
 * - RESEND_API_KEY + LEAD_TO_EMAIL [+ LEAD_FROM_EMAIL] — email via Resend
 * - CRM: see the clearly-marked adapter stub below
 */

export type Lead = {
  kind: "enquiry" | "newsletter" | "pack";
  data: Record<string, unknown>;
  meta: { receivedAt: string; spamScore: number };
};

export async function deliverLead(lead: Lead): Promise<{ delivered: boolean }> {
  let delivered = false;

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      const res = await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
      delivered = delivered || res.ok;
      if (!res.ok) console.error(`[leads] webhook responded ${res.status}`);
    } catch (err) {
      console.error("[leads] webhook delivery failed", err);
    }
  }

  if (process.env.RESEND_API_KEY && process.env.LEAD_TO_EMAIL) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL ?? "leads@mintimotorsport.example.com",
          to: process.env.LEAD_TO_EMAIL,
          subject: `[Minti site] New ${lead.kind}`,
          text: JSON.stringify(lead.data, null, 2),
        }),
      });
      delivered = delivered || res.ok;
      if (!res.ok) console.error(`[leads] resend responded ${res.status}`);
    } catch (err) {
      console.error("[leads] email delivery failed", err);
    }
  }

  await appendToCrm(lead);

  if (!delivered) {
    // ============================================================
    // NO LEAD DESTINATION CONFIGURED — see README "Lead delivery".
    // The submission is logged here so it is never silently lost,
    // but you MUST configure a destination before launch.
    // ============================================================
    console.warn("[leads] NO DESTINATION CONFIGURED — logging submission:");
    console.warn(JSON.stringify(lead, null, 2));
  }

  return { delivered };
}

/**
 * ============================================================
 * CRM ADAPTER STUB — replace with your provider (brief §6).
 * Examples: HubSpot contacts API, Pipedrive persons/deals,
 * Airtable, Supabase table insert. Keep the Lead shape as the
 * boundary; map fields inside this function only.
 * ============================================================
 */
async function appendToCrm(lead: Lead): Promise<void> {
  // Intentionally a no-op until a CRM is chosen.
  void lead;
}
