import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { PackRequest } from "@/components/drive/PackRequest";
import { StickyEnquiryBar } from "@/components/drive/StickyEnquiryBar";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Chapter } from "@/components/ui/Chapter";
import { Ledger } from "@/components/ui/Ledger";
import { NumeralRow } from "@/components/ui/Numeral";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { Statement } from "@/components/ui/Statement";
import { TakeASeat } from "@/components/ui/TakeASeat";
import { buildMetadata, serviceJsonLd } from "@/lib/seo";
import {
  driveHero,
  experience,
  family,
  faqs,
  finish,
  included,
  packCta,
  programmes,
  seat,
  timeline,
} from "@/content/drive";
import { eascr2027 } from "@/content/eascr2027";

export const metadata = buildMetadata({
  title: "The Drive · the arrive-and-drive programme",
  description:
    "What a Minti Motorsport seat includes, what is expected of you, the schedule from first call to finish ramp, and straight answers on safety, licensing and what happens when the road wins.",
  path: "/the-drive",
});

/** Hero first-paint stagger. */
const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

/** Edge-to-edge plates on phones keep their caption inside the page gutter. */
const captionInset = "[&_figcaption]:px-5 sm:[&_figcaption]:px-8 lg:[&_figcaption]:px-0";

export default function TheDrivePage() {
  return (
    <Page path="/the-drive">
      {/* 1 · Hero: the gauges, the kicker, the signature action */}
      <Section roadbook="THE OFFER" className="relative flex min-h-[100svh] items-end">
        <Parallax className="absolute inset-0" amount={0.08}>
          <Image
            src={driveHero.image.src}
            alt={driveHero.image.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={driveHero.image.blurDataURL}
            className="object-cover"
            style={{ objectPosition: driveHero.position }}
          />
        </Parallax>
        <div
          className="grain absolute inset-0"
          style={{ "--grain": 0.06 } as React.CSSProperties}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-night via-night/60 to-transparent"
          aria-hidden="true"
        />
        <Container className="relative pb-12 pt-40 sm:pb-16">
          <p className="hero-rise data-mono text-data font-medium text-sodium">{driveHero.kicker}</p>
          <h1
            className="hero-rise display-wide mt-4 max-w-[11ch] text-marquee text-chalk"
            style={rise(180)}
          >
            {driveHero.headline}
          </h1>
          <p className="hero-rise mt-6 max-w-[40ch] text-lead text-chalk/85" style={rise(300)}>
            {driveHero.line}
          </p>
          <div
            className="hero-rise mt-10 flex flex-wrap items-end justify-between gap-6"
            style={rise(420)}
          >
            <div className="flex w-full flex-wrap gap-4 sm:w-auto">
              <Button
                href={eascr2027.applyHref}
                magnetic
                block
                event="campaign_cta_click"
                eventProps={{ campaign: "eascr2027", from: "the-drive-hero" }}
              >
                {eascr2027.applyCta}
              </Button>
            </div>
            <Image
              src="/brand/minti-crest.png"
              alt=""
              width={826}
              height={759}
              className="hidden w-36 opacity-90 lg:block"
            />
          </div>
          <div className="hero-rise mt-12" style={rise(520)}>
            <StageStrip path="/the-drive" />
          </div>
        </Container>
      </Section>

      {/* 2 · The 2027 seat: one hire cost, nine inclusions, four numbers */}
      <Section roadbook="THE 2027 SEAT" id="arrive-and-drive" dark className="clip-x py-section">
        <Container>
          <Chapter code={seat.code} number="01" tulip={0} title={seat.title} dark />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Photograph and numbers first in the DOM so phones read image, numbers, offer */}
            <div className="lg:order-2 lg:col-span-7">
              <Plate
                image={seat.plate.image}
                ratio="3/2"
                mobileRatio="1/1"
                position="50% 55%"
                caption={seat.plate.caption}
                tag={seat.plate.tag}
                dark
                className="bleed-x bleed-right [&_figcaption]:px-5 sm:[&_figcaption]:px-8 lg:[&_figcaption]:pl-0 lg:[&_figcaption]:pr-8"
              />
              <NumeralRow className="mt-12" items={seat.numerals} size="m" dark />
            </div>
            <div className="mt-12 lg:order-1 lg:col-span-5 lg:mt-0">
              <Reveal>
                <p className="data-mono text-[11px] tracking-[0.16em] text-sodium">{seat.priceLine}</p>
                <p className="measure mt-5 text-body text-chalk/85">{seat.body}</p>
              </Reveal>
              <Ledger className="mt-10" rows={eascr2027.includes} numbered dark />
              <Reveal delay={120}>
                <div className="mt-10">
                  <Button
                    href={eascr2027.applyHref}
                    magnetic
                    block
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
          </div>
        </Container>
      </Section>

      {/* 3 · Three programmes, one row each */}
      <Section roadbook="THE ROUTES" className="py-section">
        <Container>
          <Chapter code={programmes.code} number="02" tulip={1} title={programmes.title} />
          <div className="mt-16 lg:mt-20">
            {programmes.items.map((prog, i) => (
              <Reveal key={prog.id} delay={i * 80}>
                <article
                  id={prog.id}
                  className="scroll-mt-24 border-t rule py-10 lg:grid lg:grid-cols-12 lg:gap-6"
                >
                  <p className="display-wide text-h1 text-murram lg:col-span-2" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-4 lg:col-span-4 lg:mt-0">
                    <h3 className="display-wide text-h2">{prog.name}</h3>
                    <p className="mt-3 text-lead text-night/75">{prog.strap}</p>
                  </div>
                  <Ledger className="mt-8 lg:col-span-4 lg:mt-0" rows={prog.points} numbered />
                  <div className="mt-8 lg:col-span-2 lg:mt-0 lg:text-right">
                    {prog.badge ? (
                      <p className="data-mono mb-4 text-[11px] text-murram">{prog.badge}</p>
                    ) : null}
                    <Button variant="text-light" href={prog.action.href}>
                      {prog.action.label}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4 · Arrive & Drive, in full: what is in, what is not */}
      <Section roadbook="INCLUDED" className="border-t rule pb-section">
        <Container className="pt-12 lg:pt-16">
          <Chapter code={included.code} number="03" tulip={2} title={included.title} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-6">
            <Plate
              image={included.plate.image}
              ratio="4/5"
              position="50% 60%"
              caption={included.plate.caption}
              tag={included.plate.tag}
              sizes="(min-width: 1024px) 28vw, 100vw"
              className={`bleed-x lg:col-span-4 lg:mx-0 ${captionInset}`}
            />
            <Ledger
              className="mt-12 lg:col-span-3 lg:col-start-6 lg:mt-0"
              mode="check"
              heading="IN"
              rows={included.yes}
            />
            <Ledger
              className="mt-12 lg:col-span-3 lg:col-start-10 lg:mt-0"
              mode="check"
              muted
              heading="NOT IN"
              rows={included.no}
            />
          </div>
        </Container>
      </Section>

      {/* 5 · The schedule, then the crew at the end of the day */}
      <Section roadbook="TIMELINE" dark className="py-section">
        <Container>
          <Chapter dark code={timeline.code} number="04" tulip={3} title={timeline.title} />
          <ol className="mt-16 divide-y rule border-y lg:mt-20">
            {timeline.steps.map((step, i) => (
              <Reveal
                key={step.what}
                as="li"
                delay={i * 60}
                className="py-6 lg:grid lg:grid-cols-12 lg:gap-6"
              >
                <p className="data-mono text-data text-sodium lg:col-span-3">{step.when}</p>
                <p className="display-wide mt-2 text-h3 lg:col-span-4 lg:mt-0">{step.what}</p>
                <p className="mt-2 text-data text-chalk/70 lg:col-span-5 lg:mt-0">{step.line}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
        {/* Full width of the band: rail to right edge */}
        <div className="mt-24 [&_figcaption]:px-5 sm:[&_figcaption]:px-8">
          <Plate
            image={timeline.plate.image}
            ratio="21/9"
            mobileRatio="4/5"
            position="50% 45%"
            caption={timeline.plate.caption}
            tag={timeline.plate.tag}
            sizes="100vw"
            dark
          />
        </div>
      </Section>

      {/* 6 · The driver: the facts, the photograph, the family */}
      <Section roadbook="AM I READY" className="py-section-xl">
        <Container>
          <Chapter
            code={experience.code}
            number="05"
            tulip={4}
            title={experience.title}
            statement={experience.statement}
          />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-6">
            {/* Photograph first in the DOM so phones read statement, face, facts */}
            <Plate
              image={experience.plate.image}
              ratio="4/5"
              position="40% 50%"
              caption={experience.plate.caption}
              tag={experience.plate.tag}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={`bleed-x lg:order-2 lg:col-span-6 lg:col-start-7 lg:mx-0 ${captionInset}`}
            />
            <div className="mt-12 lg:order-1 lg:col-span-5 lg:mt-0">
              <Ledger mode="facts" rows={experience.requirements} />
              <Reveal delay={100}>
                <p className="measure mt-8 text-data text-night/75">{experience.honest}</p>
              </Reveal>
            </div>
          </div>
          <Statement eyebrow={family.eyebrow} rule className="mt-24">
            {family.statement}
          </Statement>
        </Container>
      </Section>

      {/* 7 · Straight answers, and the brief in writing */}
      <Section roadbook="STRAIGHT ANSWERS" className="border-t rule py-section">
        <Container>
          <Chapter code={faqs.code} number="06" tulip={5} title={faqs.title} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-7">
              <Accordion items={faqs.items} />
            </div>
            <div className="mt-12 lg:col-span-4 lg:col-start-9 lg:mt-0">
              <div className="lg:sticky lg:top-32">
                <PackRequest title={packCta.title} body={packCta.body} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8 · Finish */}
      <TakeASeat
        variant="compact"
        roadbook="FINISH"
        headline={finish.headline}
        line={finish.line}
        from="the-drive-finish"
        className="pb-24"
      />

      <StickyEnquiryBar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd()) }}
      />
    </Page>
  );
}
