import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "How Minti Motorsport handles the personal information you send us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="The short version: we use what you send us to respond to you, we don't sell it, and we delete it when you ask."
      sections={[
        {
          h: "What we collect",
          p: "What you type into our enquiry, brief-request and newsletter forms: contact details and whatever you choose to tell us about your plans. Analytics, where enabled, is either cookieless (Plausible) or loaded only after your explicit consent (GA4).",
        },
        {
          h: "What we do with it",
          p: "We respond to your enquiry, prepare a proposal if you ask for one, and write occasionally if you joined the registry of interest. Budget indications are treated as confidential and shared with nobody outside the team.",
        },
        {
          h: "Your rights",
          p: "Ask what we hold, ask for a copy, or ask for deletion. One email, no forms, actioned promptly. UK GDPR applies to our processing as a UK-registered company.",
        },
      ]}
    />
  );
}
