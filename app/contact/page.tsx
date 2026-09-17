import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Ledger } from "@/components/ui/Ledger";
import { PhoneRow } from "@/components/ui/PhoneRow";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact · Nairobi workshop, direct lines",
  description:
    "Reach Minti Motorsport directly: the Nairobi workshop, driver enquiries, partner and media contact.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Page path="/contact">
      <Section roadbook="THE LINES" className="pb-section pt-40 lg:pt-48">
        <Container>
          <p className="hero-rise display-cond text-[0.875rem] tracking-[0.16em] text-murram">SS7 · CONTACT</p>
          <h1
            className="hero-rise display-wide mt-4 text-h1"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            Talk to a person.
          </h1>
          <p
            className="hero-rise editorial mt-6 max-w-[46ch] text-night/85"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            The enquiry lands with the team directly. For everything else, the lines below.
          </p>
          <div className="hero-rise mt-10" style={{ "--rise-delay": "360ms" } as React.CSSProperties}>
            <StageStrip path="/contact" dark={false} />
          </div>

          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-10">
            {/* The lines: phone, WhatsApp and email as tappable rows, then who answers. */}
            <div className="lg:col-span-6">
              <PhoneRow />
              <a
                href={`mailto:${site.contact.email}`}
                className="group flex flex-col gap-1 border-b rule py-4 text-night sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="data-mono text-[12px] font-medium tracking-[0.1em] text-murram">EMAIL</span>
                <span className="data-mono flex items-center gap-4 text-data font-medium">
                  {site.contact.email}
                  <svg
                    viewBox="0 0 32 16"
                    className="h-3.5 w-7 shrink-0 text-sodium transition-transform duration-200 group-hover:translate-x-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M1 8 H30" />
                    <path d="M23 2 L30 8 L23 14" />
                  </svg>
                </span>
              </a>

              <div className="mt-12 space-y-10">
                <Reveal className="border-t rule pt-6">
                  <h2 className="display-wide text-h3">Joey Ghose</h2>
                  <p className="mt-2 measure text-body text-night/75">
                    Founder and team principal. The conversations that decide a programme end up
                    with him.
                  </p>
                </Reveal>

                <Reveal delay={80} className="border-t rule pt-6">
                  <h2 className="display-wide text-h3">Drivers</h2>
                  <p className="mt-2 measure text-body text-night/75">Five questions, then a call.</p>
                  <div className="mt-6">
                    <Button
                      href="/enquire"
                      block
                      event="campaign_cta_click"
                      eventProps={{ campaign: "eascr2027", from: "contact" }}
                    >
                      {site.cta.primary}
                    </Button>
                  </div>
                </Reveal>

                <Reveal delay={160} className="border-t rule pt-6">
                  <h2 className="display-wide text-h3">Partners &amp; media</h2>
                  <p className="mt-2 measure text-body text-night/75">
                    Start with the enquiry and pick Sponsor or partner. Same desk, faster.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* The workshop: the facts. */}
            <div className="mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <Ledger
                mode="facts"
                numbered={false}
                emphasis
                rows={[
                  { k: "WORKSHOP", v: "Nairobi, Kenya" },
                  { k: "ADDRESS", v: site.base.address },
                  { k: "COORDINATES", v: site.base.coords },
                  { k: "REGISTERED", v: "United Kingdom" },
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
