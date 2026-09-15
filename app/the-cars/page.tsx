import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Chapter } from "@/components/ui/Chapter";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { Statement } from "@/components/ui/Statement";
import { TakeASeat } from "@/components/ui/TakeASeat";
import { buildMetadata } from "@/lib/seo";
import { buildProcess, carsHero, models, otherMachinery, partnership } from "@/content/cars";
import { eascr2027 } from "@/content/eascr2027";

export const metadata = buildMetadata({
  title: "The Cars · MST Escort Mk1 and Mk2, Safari spec",
  description:
    "New and original Ford Escort Mk1 and Mk2 built to Safari specification by MST Cars, under Minti Motorsport's exclusive regional partnership.",
  path: "/the-cars",
});

export default function TheCarsPage() {
  const { mk1, mk2 } = models;
  const { cage, dial } = buildProcess.plates;

  return (
    <Page path="/the-cars">
      {/* Hero: the reader meets the car before a sentence */}
      <Section roadbook="THE PARTNERSHIP" className="relative flex min-h-[100svh] items-end">
        <Parallax className="absolute inset-0" amount={0.08}>
          <Image
            src={carsHero.image.src}
            alt={carsHero.image.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={carsHero.image.blurDataURL}
            className="object-cover"
            style={{ objectPosition: carsHero.position }}
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
          <p className="hero-rise data-mono text-data font-medium text-sodium">{carsHero.kicker}</p>
          <h1
            className="hero-rise display-wide mt-4 max-w-[11ch] text-marquee text-chalk"
            style={{ "--rise-delay": "180ms" } as React.CSSProperties}
          >
            {carsHero.headline}
          </h1>
          <div
            className="hero-rise mt-10 hidden justify-end lg:flex"
            style={{ "--rise-delay": "420ms" } as React.CSSProperties}
          >
            <Image
              src="/brand/minti-crest.png"
              alt=""
              width={826}
              height={549}
              className="w-36 opacity-90"
            />
          </div>
          <div className="hero-rise mt-12" style={{ "--rise-delay": "520ms" } as React.CSSProperties}>
            <StageStrip path="/the-cars" />
          </div>
        </Container>
      </Section>

      {/* The partnership, in one breath */}
      <Section>
        <Container className="py-section-xl">
          <Statement rule>{partnership.statement}</Statement>
          <Reveal delay={120}>
            <p className="data-mono mt-8 max-w-xl text-[11px] leading-relaxed tracking-[0.08em] text-grease">
              {partnership.footnote}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* The two models */}
      <Section roadbook="MK1 / MK2" dark className="py-section clip-x">
        <Container>
          <Chapter
            dark
            code={mk1.code}
            number={mk1.number}
            title={mk1.title}
            statement={mk1.statement}
            tulip={0}
          />

          <div className="mt-32 lg:mt-40 lg:grid lg:grid-cols-12 lg:gap-8 lg:items-end">
            <div className="lg:col-span-5">
              <Chapter
                dark
                code={mk2.code}
                number={mk2.number}
                title={mk2.title}
                statement={mk2.statement}
                tulip={1}
              />
              <Reveal delay={120}>
                <div className="mt-8">
                  <Button
                    href={eascr2027.applyHref}
                    variant="text-dark"
                    event="campaign_cta_click"
                    eventProps={{ campaign: "eascr2027", from: "the-cars-mk2" }}
                  >
                    {eascr2027.applyCta}
                  </Button>
                </div>
              </Reveal>
            </div>
            {/* 800px source: never rendered wider than its native width */}
            <div className="bleed-x mt-12 lg:col-span-7 lg:mt-0">
              <Plate
                image={mk2.image}
                ratio="native"
                maxWidth={800}
                frame
                grain={0.08}
                caption={mk2.caption}
                sizes="(min-width: 1024px) 800px, 100vw"
                dark
                className="ml-auto [&_figcaption]:px-5 sm:[&_figcaption]:px-8 lg:[&_figcaption]:px-0"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Safari specification: what happens after the paint */}
      <Section roadbook="THE BUILD" className="py-section clip-x">
        <Container>
          <Chapter
            code={buildProcess.code}
            number={buildProcess.number}
            title={buildProcess.title}
            tulip={2}
          />

          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            <Plate
              image={cage.image}
              ratio="3/2"
              mobileRatio="4/5"
              position="50% 50%"
              caption={cage.caption}
              tag={cage.tag}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="bleed-x lg:col-span-7 lg:mx-0"
            />
            <Plate
              image={dial.image}
              ratio="4/5"
              caption={dial.caption}
              tag={dial.tag}
              sizes="(min-width: 1024px) 30vw, 70vw"
              delay={120}
              className="mt-12 ml-auto w-[70%] lg:col-span-4 lg:col-start-9 lg:mt-32 lg:w-full"
            />
          </div>

          <div className="mt-24 lg:grid lg:grid-cols-12 lg:gap-8">
            <ol className="divide-y rule border-y lg:col-span-8">
              {buildProcess.steps.map((step, i) => (
                <Reveal key={step.n} as="li" delay={i * 80} className="grid grid-cols-[auto_1fr] gap-x-4 py-6 lg:grid-cols-12 lg:gap-6">
                  <p className="display-wide text-h3 text-murram lg:col-span-1">{step.n}</p>
                  <h3 className="display-wide text-h3 lg:col-span-4">{step.title}</h3>
                  <p className="col-span-2 mt-3 text-data text-night/75 lg:col-span-7 lg:mt-0">{step.line}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Finish */}
      <TakeASeat
        variant="compact"
        roadbook="FINISH"
        headline={otherMachinery.headline}
        line={otherMachinery.line}
        from="the-cars"
        href={otherMachinery.href}
      />
    </Page>
  );
}
