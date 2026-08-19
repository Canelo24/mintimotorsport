import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookies",
  description: "What this site stores in your browser, and what it refuses to.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      intro="This site is nearly cookie-free by design."
      sections={[
        {
          h: "What we store",
          p: "Your enquiry progress is kept in sessionStorage on your own device so a refresh doesn't lose your answers; it never leaves your browser until you submit. A consent choice is stored in localStorage only if an analytics banner is shown.",
        },
        {
          h: "Analytics",
          p: "Where Plausible is configured it runs without cookies. Where GA4 is configured it loads only after you explicitly allow it via the consent banner — declining stores nothing except your 'no'.",
        },
      ]}
    />
  );
}
