import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Todo } from "@/components/ui/Todo";
import { StickyEnquiryBar } from "@/components/drive/StickyEnquiryBar";
import { PackRequest } from "@/components/drive/PackRequest";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import {
  driveHero,
  experience,
  family,
  faqs,
  included,
  packages,
  packCta,
  timeline,
} from "@/content/drive";

export const metadata = buildMetadata({
  title: "The Drive — the arrive-and-drive programme",
  description:
    "What a Minti Motorsport seat includes, what's expected of you, package tiers and the honest answers: safety, licensing, insurance, and what happens when the road wins.",
  path: "/the-drive",
});

export default function TheDrivePage() {
  return (
    <Page path="/the-drive">
      {/* Hero */}
      <Section roadbook="THE OFFER" className="relative flex min-h-[86svh] items-end">
        <Image
          src={driveHero.image.src}
          alt={driveHero.image.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={driveHero.image.blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/20" aria-hidden="true" />
        <Container className="relative pb-16 pt-40">
          <p className="hero-rise data-mono text-data font-medium text-sodium">{driveHero.kicker}</p>
          <h1 className="hero-rise display-wide mt-4 text-h1 text-chalk" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            {driveHero.headline}
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lead text-chalk/85" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            {driveHero.sub}
          </p>
        </Container>
      </Section>

      {/* Included / not included — two columns, stated plainly */}
      <Section roadbook="INCLUDED" className="py-24">
        <Container>
          <SectionHeading
            instruction="SS2/01 — THE CONTENTS"
            title="What's in, what's not"
            lead="Plainly, before any call. The agreement you eventually sign says the same things in longer sentences."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <Reveal>
              <h3 className="display-cond border-b-2 border-murram pb-3 text-data tracking-[0.2em] text-murram">
                INCLUDED
              </h3>
              <ul className="mt-5 space-y-4">
                {included.yes.map((item) => (
                  <li key={item} className="flex gap-3 text-body text-night/85">
                    <span className="data-mono mt-0.5 text-murram" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h3 className="display-cond border-b-2 border-grease pb-3 text-data tracking-[0.2em] text-grease">
                NOT INCLUDED
              </h3>
              <ul className="mt-5 space-y-4">
                {included.no.map((item) => (
                  <li key={item} className="flex gap-3 text-body text-night/70">
                    <span className="data-mono mt-0.5 text-grease" aria-hidden="true">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section roadbook="TIMELINE" dark className="py-24">
        <Container>
          <SectionHeading dark instruction="SS2/02 — THE SCHEDULE" title={timeline.title} />
          <ol className="mt-12 divide-y rule border-y">
            {timeline.steps.map((step, i) => (
              <Reveal key={i} as="li" delay={i * 60}>
                <div className="grid gap-2 py-6 sm:grid-cols-[180px_220px_1fr] sm:gap-6">
                  <p className="data-mono text-data font-medium text-sodium">
                    <Todo value={step.when} />
                  </p>
                  <p className="display-wide text-lead">{step.what}</p>
                  <p className="text-data text-chalk/70">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Experience — honest and welcoming */}
      <Section roadbook="AM I READY" className="py-24">
        <Container>
          <SectionHeading
            instruction="SS2/03 — THE DRIVER"
            title={experience.title}
            lead={experience.lead}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5">
              {experience.body.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-body text-night/85">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <dl className="divide-y rule border-y">
                {experience.requirements.map((row) => (
                  <div key={row.k} className="py-3.5">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">{row.k}</dt>
                    <dd className="data-mono mt-1 text-data">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="mt-12 border-l-2 border-murram pl-6">
              <h3 className="display-wide text-h3">{family.title}</h3>
              <p className="mt-3 max-w-2xl text-body text-night/80">{family.body}</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Packages — named, "from" pricing, one CTA each */}
      <Section roadbook="PACKAGES" dark className="py-24">
        <Container>
          <SectionHeading
            dark
            instruction="SS2/04 — THE PACKAGES"
            title="Three ways in"
            lead={packages.note}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.tiers.map((tier, i) => (
              <Reveal
                key={tier.name}
                delay={i * 100}
                className={`flex flex-col border p-8 ${
                  i === 1 ? "border-sodium/70 bg-night-2" : "rule bg-night-2/60"
                }`}
              >
                <h3 className="display-wide text-h3">{tier.name}</h3>
                <p className="mt-2 text-data text-chalk/70">{tier.who}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex gap-2.5 text-data text-chalk/80">
                      <span className="text-sodium" aria-hidden="true">·</span>
                      {inc}
                    </li>
                  ))}
                </ul>
                <p className="data-mono mt-8 text-data text-chalk/70">
                  FROM <Todo value={tier.from} className="text-sodium" />
                </p>
                <div className="mt-5">
                  <Button
                    href="/enquire"
                    variant={i === 1 ? "primary" : "ghost-dark"}
                    event="package_cta_click"
                    eventProps={{ tier: tier.name }}
                    className="w-full text-center"
                  >
                    {site.cta.primary}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ — the real objections */}
      <Section roadbook="STRAIGHT ANSWERS" className="py-24">
        <Container>
          <SectionHeading
            instruction="SS2/05 — THE QUESTIONS"
            title="Asked every time, answered straight"
          />
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
          <div className="mt-16">
            <PackRequest title={packCta.title} body={packCta.body} />
          </div>
        </Container>
      </Section>

      <StickyEnquiryBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd()) }}
      />
    </Page>
  );
}
