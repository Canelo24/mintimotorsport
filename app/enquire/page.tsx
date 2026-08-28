import { Page } from "@/components/layout/Page";
import { Container, Section } from "@/components/ui/Section";
import { EnquiryWizard } from "@/components/enquire/EnquiryWizard";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Take a seat — enquire",
  description:
    "Five short questions, then a call with Joey Ghose. No forms fifteen fields long, no obligation — a conversation about a seat in the Safari.",
  path: "/enquire",
});

/**
 * The conversion endpoint. Heading matches the CTA verb exactly —
 * "Take a seat" leads to a page that says "Take a seat" (brief §6).
 */
export default function EnquirePage() {
  return (
    <Page path="/enquire">
      <Section roadbook="FINISH CONTROL" dark className="min-h-screen pb-28 pt-36">
        <Container className="max-w-3xl">
          <p className="data-mono text-data font-medium text-sodium">
            FIN — FINISH CONTROL · FIVE QUESTIONS, THEN A CALL
          </p>
          <h1 className="display-wide mt-4 text-h1">Take a seat.</h1>
          <p className="mt-5 max-w-xl text-lead text-chalk/80">
            One question per screen, most of a minute in total. Your answers go to Joey, not into
            a database purgatory.
          </p>
          <div className="mt-14">
            <EnquiryWizard />
          </div>
        </Container>
      </Section>
    </Page>
  );
}
