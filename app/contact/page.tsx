import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { Todo } from "@/components/ui/Todo";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { images } from "@/content/images.generated";

export const metadata = buildMetadata({
  title: "Contact — Nairobi workshop, direct lines",
  description:
    "Reach Minti Motorsport directly: the Nairobi workshop, driver enquiries, partner and media contact.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappHref = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}` : null;

  return (
    <Page path="/contact">
      <Section roadbook="THE LINES" className="pb-24 pt-36">
        <Container>
          <p className="hero-rise data-mono text-data font-medium text-murram">SS7 — CONTACT</p>
          <h1 className="hero-rise display-wide mt-4 text-h1" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            Talk to a person.
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lead text-night/80" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            Serious about a seat? The fastest route is the enquiry — it lands with Jeet directly.
            Everything else, use the lines below.
          </p>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <Reveal className="border-t-2 border-murram pt-5">
                <h2 className="display-wide text-h3">Drivers</h2>
                <p className="mt-2 text-body text-night/80">
                  Five questions, then a call. The enquiry page is the front of the queue.
                </p>
                <div className="mt-5">
                  <Button href="/enquire">{site.cta.primary}</Button>
                </div>
              </Reveal>

              <Reveal delay={100} className="border-t-2 border-night/20 pt-5">
                <h2 className="display-wide text-h3">Direct</h2>
                <dl className="mt-4 space-y-3">
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">EMAIL</dt>
                    <dd className="data-mono text-data">
                      {site.contact.email ? (
                        <a href={`mailto:${site.contact.email}`} className="hover:text-murram">
                          {site.contact.email}
                        </a>
                      ) : (
                        <Todo value={site.contact.emailTodo} />
                      )}
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">PHONE</dt>
                    <dd className="data-mono text-data">
                      {site.contact.phone ? (
                        <a href={`tel:${site.contact.phone}`} className="hover:text-murram">
                          {site.contact.phone}
                        </a>
                      ) : (
                        <Todo value={site.contact.phoneTodo} />
                      )}
                    </dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">WHATSAPP</dt>
                    <dd className="data-mono text-data">
                      {whatsappHref ? (
                        <a href={whatsappHref} className="hover:text-murram">
                          Message the workshop
                        </a>
                      ) : (
                        <Todo value={site.contact.whatsappTodo} />
                      )}
                    </dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={160} className="border-t-2 border-night/20 pt-5">
                <h2 className="display-wide text-h3">Partners & media</h2>
                <p className="mt-2 text-body text-night/80">
                  Sponsorship, hospitality and media programmes are built per event. Start with the
                  enquiry and pick <em>“Sponsor or partner”</em> — it routes to the same desk,
                  faster.
                </p>
              </Reveal>
            </div>

            <div>
              <Reveal wipe>
                <Image
                  src={images.contactWorkshopGate.src}
                  alt={images.contactWorkshopGate.alt}
                  width={images.contactWorkshopGate.width}
                  height={images.contactWorkshopGate.height}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  placeholder="blur"
                  blurDataURL={images.contactWorkshopGate.blurDataURL}
                  className="w-full"
                />
              </Reveal>
              <Reveal delay={120}>
                <dl className="mt-6 divide-y rule border-y">
                  <div className="flex justify-between gap-6 py-3">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">WORKSHOP</dt>
                    <dd className="data-mono text-data">NAIROBI, KENYA</dd>
                  </div>
                  <div className="flex justify-between gap-6 py-3">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">COORDINATES</dt>
                    <dd className="data-mono text-data text-murram">{site.base.coords}</dd>
                  </div>
                  <div className="flex justify-between gap-6 py-3">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">ADDRESS</dt>
                    <dd className="data-mono text-right text-data">
                      <Todo value={site.base.coordsTodo} />
                    </dd>
                  </div>
                  <div className="flex justify-between gap-6 py-3">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">REGISTERED</dt>
                    <dd className="data-mono text-data">UNITED KINGDOM</dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
