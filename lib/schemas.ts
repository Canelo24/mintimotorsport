import { z } from "zod";

/** Step option values — single source for wizard UI and server validation. */
export const purposeOptions = [
  { value: "drive", label: "Arrive & Drive", detail: "A supported seat in one of our cars" },
  { value: "team", label: "Your car, our team", detail: "Preparation, freight, testing and event support" },
  { value: "commission", label: "Commission a car", detail: "A new MST Safari build, specified around you" },
  { value: "sponsor", label: "Sponsor or partner", detail: "Brand, hospitality and media programmes" },
  { value: "other", label: "Something else", detail: "Tell us what you have in mind" },
] as const;

export const eventOptions = [
  { value: "eascr-2027", label: "East African Safari Classic 2027", detail: "Arrive & Drive, applications open now" },
  { value: "future", label: "A future edition", detail: "Planning one to three years out" },
  { value: "advise", label: "Not sure yet — advise me", detail: "We'll recommend the right event and year" },
] as const;

export const experienceOptions = [
  { value: "none", label: "Never rallied", detail: "Most of our drivers started exactly here" },
  { value: "some", label: "Some competition experience", detail: "Track days, club events, historic racing" },
  { value: "licensed", label: "Licensed and active", detail: "Current competition licence" },
  { value: "professional", label: "Professional", detail: "Racing or rallying at a professional level" },
] as const;

/**
 * Budget bands are indicative and confidential, a qualification aid rather
 * than a price list. The hire cost itself is not published on the site
 * (client instruction); it is given on the first call.
 */
export const budgetOptions = [
  { value: "band-full", label: "Ready for the full campaign budget", detail: "The all-in 2027 arrive-and-drive hire" },
  { value: "band-multi", label: "More than one event", detail: "Multi-event or commission programmes" },
  { value: "band-explore", label: "A smaller programme", detail: "Support-only, shared plans, future planning" },
  { value: "discuss", label: "Prefer to discuss", detail: "" },
] as const;

const enumValues = <T extends readonly { value: string }[]>(opts: T) =>
  opts.map((o) => o.value) as [T[number]["value"], ...T[number]["value"][]];

export const enquirySchema = z.object({
  purpose: z.enum(enumValues(purposeOptions)),
  event: z.enum(enumValues(eventOptions)),
  experience: z.enum(enumValues(experienceOptions)),
  budget: z.enum(enumValues(budgetOptions)).optional(),
  name: z.string().max(200).optional().or(z.literal("")),
  email: z.string().email("Enter an email we can reach you on"),
  phone: z
    .string()
    .min(7, "Enter a phone number with country code")
    .max(30)
    .regex(/^[+()\d\s-]+$/, "Digits, spaces and + only"),
  country: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(4000).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "We need your consent to respond to you" }),
  }),
  // Anti-spam: honeypot must stay empty; elapsed is checked server-side.
  website: z.string().max(0).optional().or(z.literal("")),
  elapsedMs: z.number(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const emailOnlySchema = z.object({
  email: z.string().email("Enter a valid email"),
  website: z.string().max(0).optional().or(z.literal("")),
});
