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
  programmes,
  timeline,
} from "@/content/drive";
import { eascr2027 } from "@/content/eascr2027";

export const metadata = buildMetadata({
  title: "The Drive · the arrive-and-drive programme",
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

      {/* The three programmes */}
      <Section roadbook="THE ROUTES" className="py-24">
        <Container>
          <SectionHeading
            instruction={programmes.instruction}
            title={programmes.title}
            lead={programmes.lead}
          />
          <div className="mt-12 space-y-10">
            {programmes.items.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 80}>
                <article
                  id={prog.id}
                  className="grid scroll-mt-24 gap-6 border-t-2 border-murram pt-6 lg:grid-cols-[280px_1fr_260px]"
                >
                  <div>
                    <p className="data-mono text-data-s font-medium text-murram">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="display-wide mt-1 text-h3">{prog.name}</h3>
                    <p className="mt-2 text-data font-semibold text-night/70">{prog.strap}</p>
                    {"badge" in prog && prog.badge ? (
                      <div className="mt-4">
                        <p className="data-mono inline-block bg-sodium px-2.5 py-1.5 text-[11px] font-semibold text-night">
                          {prog.badge}
                        </p>
                        <div className="mt-3">
                          <Button
                            href={prog.applyHref}
                            event="campaign_cta_click"
                            eventProps={{ campaign: "eascr2027", from: "the-drive" }}
                          >
                            Apply for the seat
                          </Button>
                        </div>
                        <p className="data-mono mt-2 max-w-[240px] text-[10px] leading-relaxed text-grease">
                          {prog.applyNote}
                        </p>
                      </div>
                    ) : null}
                  </div>
                  <p className="max-w-xl text-body text-night/80">{prog.body}</p>
                  <ul className="space-y-2">
                    {prog.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-data text-night/70">
                        <span className="text-murram" aria-hidden="true">·</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-12 max-w-2xl text-data text-night/60">
              Everything below describes <strong className="text-night/80">Arrive &amp; Drive</strong> in
              full. The other programmes are built to the same standard and priced per car on
              the first call.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* The 2027 package, from the client's own sheet: price, contents, spec */}
      <Section roadbook="THE 2027 SEAT" dark className="py-24">
        <Container>
          <p className="data-mono text-data font-semibold tracking-[0.14em] text-sodium">
            SS2/01 · {eascr2027.eyebrow}
          </p>
          <h2 className="display-wide mt-3 max-w-4xl text-h1">
            {eascr2027.event} {eascr2027.year}
          </h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Reveal>
                <p className="display-wide text-h2 text-sodium">{eascr2027.price}</p>
                <p className="data-mono mt-1 text-data-s tracking-[0.16em] text-grease">
                  {eascr2027.priceLabel}
                </p>
                <p className="mt-5 max-w-xl text-body text-chalk/85">{eascr2027.intro}</p>
              </Reveal>
              <Reveal delay={120}>
                <p className="display-cond mt-10 text-data-s tracking-[0.2em] text-grease">
                  THE HIRE COST COVERS
                </p>
                <ul className="mt-4 divide-y divide-chalk/10 border-y border-chalk/10">
                  {eascr2027.includes.map((item) => (
                    <li key={item} className="flex gap-3 py-2.5 text-data text-chalk/85">
                      <span className="text-sodium" aria-hidden="true">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8">
                  <Button
                    href={eascr2027.applyHref}
                    magnetic
                    event="campaign_cta_click"
                    eventProps={{ campaign: "eascr2027", from: "the-drive-package" }}
                  >
                    {eascr2027.applyCta}
                  </Button>
                </div>
                <p className="data-mono mt-5 max-w-md text-[11px] leading-relaxed text-grease">
                  {eascr2027.organiserNote}
                </p>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="display-cond text-data-s tracking-[0.2em] text-grease">
                THE CAR, AS BUILT
              </p>
              <dl className="mt-4 divide-y divide-chalk/10 border-y border-chalk/10">
                {eascr2027.spec.map((row) => (
                  <div key={row.k} className="grid grid-cols-[120px_1fr] gap-4 py-2.5">
                    <dt className="data-mono text-data-s text-sodium">{row.k}</dt>
                    <dd className="text-data text-chalk/85">{row.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="data-mono mt-4 text-[11px] text-grease">
                Damper, brake, gearbox and livery upgrades are available. Ask on the call.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Included / not included — two columns, stated plainly */}
      <Section roadbook="INCLUDED" className="py-24 pt-0">
        <Container>
          <SectionHeading
            instruction="SS2/02 · ARRIVE & DRIVE, IN FULL"
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
                    <span className="data-mono mt-0.5 text-grease" aria-hidden="true">·</span>
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
          <SectionHeading dark instruction="SS2/03 · THE SCHEDULE" title={timeline.title} />
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
            instruction="SS2/04 · THE DRIVER"
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
            instruction="SS2/05 · THE PACKAGES"
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
            instruction="SS2/06 · THE QUESTIONS"
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
