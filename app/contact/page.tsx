import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Ledger } from "@/components/ui/Ledger";
import { PhoneRow } from "@/components/ui/PhoneRow";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { images } from "@/content/images.generated";

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
          <p className="hero-rise data-mono text-data font-medium text-murram">SS7 · CONTACT</p>
          <h1
            className="hero-rise display-wide mt-4 text-h1"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            Talk to a <span className="em-serif">person.</span>
          </h1>
          <p
            className="hero-rise mt-6 max-w-[40ch] text-lead text-night/80"
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
                <span className="data-mono text-[11px] tracking-[0.16em] text-grease">EMAIL</span>
                <span className="data-mono flex items-baseline gap-4 text-data font-semibold">
                  {site.contact.email}
                  <span
                    aria-hidden="true"
                    className="text-sodium transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
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

            {/* The workshop: one photograph and the facts. */}
            <div className="mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0">
              <Plate
                image={images.peopleWorkshopNairobi}
                ratio="4/5"
                caption="THE BAY · A FRESH BUILD"
                tag="THE COMPETITION CAR"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="bleed-x lg:mx-0"
              />
              <Ledger
                mode="facts"
                numbered={false}
                emphasis
                className="mt-10"
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
