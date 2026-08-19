"use server";

import { deliverLead } from "@/lib/leads";
import { emailOnlySchema, enquirySchema } from "@/lib/schemas";

export type ActionResult = { ok: boolean; error?: string };

/**
 * Enquiry submission. Spam handling: honeypot field + a timing check —
 * sub-4-second completions are accepted back to the client (so bots learn
 * nothing) but flagged and not delivered as real leads.
 */
export async function submitEnquiry(input: unknown): Promise<ActionResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      error:
        parsed.error.issues[0]?.message ?? "Check the highlighted fields and try again.",
    };
  }

  const { website, elapsedMs, ...data } = parsed.data;
  const spam = Boolean(website) || elapsedMs < 4000;
  if (spam) {
    console.warn("[leads] enquiry flagged as spam", { elapsedMs, honeypot: Boolean(website) });
    return { ok: true };
  }

  await deliverLead({
    kind: "enquiry",
    data,
    meta: { receivedAt: new Date().toISOString(), spamScore: 0 },
  });
  return { ok: true };
}

export async function subscribeNewsletter(formData: FormData): Promise<ActionResult> {
  const parsed = emailOnlySchema.safeParse({
    email: formData.get("email"),
    website: formData.get("website") ?? "",
  });
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message };
  if (parsed.data.website) return { ok: true };

  await deliverLead({
    kind: "newsletter",
    data: { email: parsed.data.email },
    meta: { receivedAt: new Date().toISOString(), spamScore: 0 },
  });
  return { ok: true };
}

/** "Download the brief" — email-gated pack request (strong intent signal). */
export async function requestPack(formData: FormData): Promise<ActionResult> {
  const parsed = emailOnlySchema.safeParse({
    email: formData.get("email"),
    website: formData.get("website") ?? "",
  });
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message };
  if (parsed.data.website) return { ok: true };

  await deliverLead({
    kind: "pack",
    data: { email: parsed.data.email },
    meta: { receivedAt: new Date().toISOString(), spamScore: 0 },
  });
  return { ok: true };
}
