import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Hero } from "@/components/home/Hero";
import { DriveSequence } from "@/components/home/DriveSequence";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Chapter } from "@/components/ui/Chapter";
import { Ledger } from "@/components/ui/Ledger";
import { NumeralRow } from "@/components/ui/Numeral";
import { PhoneRow } from "@/components/ui/PhoneRow";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
import { Statement } from "@/components/ui/Statement";
import { TakeASeat } from "@/components/ui/TakeASeat";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { ask, car, deal, driveSequence, heritageStrip, marqueeLine, people, seat } from "@/content/home";
import { eascr2027 } from "@/content/eascr2027";

export const metadata = buildMetadata({
  title: "Minti Motorsport · A seat in the Safari",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <Page path="/">
      <Hero />

      {/* 01 · The deal: one statement, three facts */}
      <Section roadbook="THE DEAL" className="py-section-xl">
        <Container>
          <Statement eyebrow="SS1/01 · THE DEAL">{deal.statement}</Statement>
          <NumeralRow items={deal.numerals} size="l" className="mt-16 lg:mt-20" />
        </Container>
      </Section>

      {/* 02 · The 2027 seat: the product, sold on numbers and a ledger */}
      <Section roadbook="THE 2027 SEAT" id="the-seat" dark className="clip-x py-section">
        <Container>
          <Chapter dark code={seat.code} number="02" title={seat.title} tulip={1} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-10">
            {/* The board: the package as figures, the period dials behind them */}
            <div className="lg:order-2 lg:col-span-7">
              <Reveal wipe>
                <div className="bleed-x bleed-right relative overflow-hidden bg-night-2">
                  <Image
                    src={seat.board.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    placeholder="blur"
                    blurDataURL={seat.board.blurDataURL}
                    className="object-cover opacity-30"
                    style={{ objectPosition: "50% 50%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/10"
                    aria-hidden="true"
                  />
                  <div
                    className="grain absolute inset-0"
                    style={{ "--grain": 0.06 } as React.CSSProperties}
                    aria-hidden="true"
                  />
                  <div className="relative px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
                    <NumeralRow items={seat.numerals} dark size="l" columns={2} />
                  </div>
                </div>
              </Reveal>
              <p className="caption mt-3 px-5 text-chalk/55 sm:px-0">{seat.boardCaption}</p>
            </div>
            <div className="mt-14 lg:order-1 lg:col-span-5 lg:mt-0">
              <Reveal>
                <p className="data-mono text-[11px] tracking-[0.16em] text-sodium">{seat.priceLine}</p>
                <p className="measure mt-5 text-body text-chalk/85">{seat.line}</p>
              </Reveal>
              <Ledger rows={[...eascr2027.includes]} dark className="mt-10" />
              <Reveal delay={120}>
                <div className="mt-10">
                  <Button
                    href={eascr2027.applyHref}
                    magnetic
                    block
                    event="campaign_cta_click"
                    eventProps={{ campaign: "eascr2027", from: "home-product" }}
                  >
                    {eascr2027.applyCta}
                  </Button>
                </div>
                <p className="data-mono mt-5 max-w-md text-[11px] leading-relaxed text-grease">
                  {eascr2027.organiserNote}
                </p>
                <div className="mt-6">
                  <Button href={seat.otherRoutes.href} variant="text-dark">
                    {seat.otherRoutes.label}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 · The car: one tall plate, one wide plate, two lines */}
      <Section roadbook="THE CAR" className="clip-x py-section">
        <Container>
          <Chapter code={car.code} number="03" title={car.title} tulip={2} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            <Plate
              image={car.wide.image}
              ratio="5/4"
              mobileRatio="4/5"
              position="60% 50%"
              caption={car.wide.caption}
              className="bleed-x bleed-right lg:order-2 lg:col-span-8 lg:col-start-5 lg:mt-24"
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
            <Plate
              image={car.tall.image}
              ratio="4/5"
              caption={car.tall.caption}
              tag={car.tall.tag}
              className="mt-8 ml-auto w-[70%] lg:order-1 lg:col-span-4 lg:mt-0 lg:w-full"
              sizes="(min-width: 1024px) 30vw, 70vw"
              delay={120}
            />
          </div>
          <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-6 lg:col-start-5">
              <p className="measure text-body text-night/80">{car.body}</p>
              <div className="mt-8">
                <Button href={car.cta.href} variant="ghost-light">
                  {car.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 04 · How the week runs: pinned horizontal sequence */}
      <DriveSequence {...driveSequence} />

      {/* 05 · The people: the principal, the official line, the crew */}
      <Section roadbook="THE PEOPLE" className="clip-x py-section">
        <Container>
          <Chapter code={people.code} number="05" title={people.title} tulip={4} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
            <Plate
              image={people.joey.image}
              ratio="native"
              maxWidth={335}
              frame
              caption={people.joey.caption}
              className="w-[200px] sm:w-[260px] lg:col-span-3 lg:w-full"
              sizes="335px"
            />
            <Reveal className="mt-10 lg:col-span-7 lg:col-start-5 lg:mt-0">
              <p className="display-wide text-h2">{people.joey.name}</p>
              <p className="data-mono mt-3 text-data-s text-murram">{people.joey.role}</p>
              <p className="measure mt-5 text-body text-night/80">{people.joey.line}</p>
              <PhoneRow className="mt-10" />
            </Reveal>
          </div>
        </Container>
        <div className="mt-20 [&_figcaption]:px-5 [&_figcaption]:sm:px-8 lg:mt-24">
          <Plate
            image={people.crew.image}
            ratio="21/9"
            mobileRatio="4/5"
            position="50% 40%"
            caption={people.crew.caption}
            tag={people.crew.tag}
            sizes="100vw"
          />
        </div>
        <Container>
          <Reveal className="mt-8">
            <Button href={people.cta.href} variant="text-light">
              {people.cta.label}
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* The one marquee band */}
      <Marquee text={marqueeLine} />

      {/* 06 · Heritage, briefly: the archive frame and three dates */}
      <Section roadbook="HERITAGE" className="py-section">
        <Container>
          <Chapter code={heritageStrip.code} number="06" title={heritageStrip.title} tulip={5} />
          <Plate
            image={heritageStrip.image}
            ratio="16/9"
            mobileRatio="4/5"
            position="55% 50%"
            grain={0.08}
            caption={heritageStrip.caption}
            className="bleed-x mt-16 lg:mx-0 lg:mt-20"
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
          <NumeralRow items={heritageStrip.numerals} size="l" className="mt-16" />
          <Reveal className="mt-10 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <p className="measure text-body text-night/80">{heritageStrip.line}</p>
              <div className="mt-6">
                <Button href={heritageStrip.cta.href} variant="text-light">
                  {heritageStrip.cta.label}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 07 · Finish control: the ask */}
      <TakeASeat
        headline={ask.headline}
        line={ask.line}
        scarcity={ask.scarcity}
        from="home-finish"
        image={ask.image}
        position="50% 60%"
        video="/video/service-loop.mp4"
      />
    </Page>
  );
}
