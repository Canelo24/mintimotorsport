import { Page } from "@/components/layout/Page";
import { Container, Section } from "@/components/ui/Section";

/**
 * Placeholder legal page shell. NOTE FOR LAUNCH: these pages are drafts —
 * legal counsel must review and approve final Privacy, Terms and Cookie
 * text before the site goes live (see CLIENT_CONFIRMATION_CHECKLIST.md).
 */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <Page path="/contact">
      <Section roadbook="LEGAL" className="pb-24 pt-36">
        <Container className="max-w-3xl">
          <p className="data-mono text-data-s text-murram">LEGAL</p>
          <h1 className="display-wide mt-3 text-h1">{title}</h1>
          <p className="mt-6 text-lead text-night/80">{intro}</p>
          <p className="data-mono mt-6 border border-dashed border-murram/50 p-4 text-data-s text-night/70">
            DRAFT — this page must be reviewed and approved by legal counsel before launch.
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="display-wide text-h3">{s.h}</h2>
                <p className="mt-3 text-body text-night/80">{s.p}</p>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
