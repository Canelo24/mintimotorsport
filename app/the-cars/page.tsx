import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Stamp } from "@/components/roadbook/Stamp";
import { Button } from "@/components/ui/Button";
import { Chapter } from "@/components/ui/Chapter";
import { PageHero } from "@/components/ui/PageHero";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
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
      <PageHero
        path="/the-cars"
        roadbook="THE PARTNERSHIP"
        image={carsHero.image}
        position={carsHero.position}
        kicker={carsHero.kicker}
        headline={
          <>
            The <span className="em-serif">Escort.</span>
          </>
        }
      />

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
            <div className="mb-10 lg:order-2 lg:col-span-3 lg:col-start-10 lg:mb-0 lg:flex lg:justify-end">
              <Stamp id="cars-stamp" text="SAFARI SPECIFICATION · MST · NAIROBI · " className="h-40 w-40 text-murram lg:h-48 lg:w-48" />
            </div>
            <ol className="divide-y rule border-y lg:order-1 lg:col-span-8">
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
