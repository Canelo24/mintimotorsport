import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Hero } from "@/components/home/Hero";
import { FilmStack } from "@/components/home/FilmStack";
import { Reveal } from "@/components/motion/Reveal";
import { StageMap } from "@/components/roadbook/StageMap";
import { Button } from "@/components/ui/Button";
import { Chapter, RoadbookRow } from "@/components/ui/Chapter";
import { NumeralRow } from "@/components/ui/Numeral";
import { PhoneRow } from "@/components/ui/PhoneRow";
import { Plate } from "@/components/ui/Plate";
import { SeatTicket } from "@/components/ui/SeatTicket";
import { Container, Section } from "@/components/ui/Section";
import { Statement } from "@/components/ui/Statement";
import { TakeASeat } from "@/components/ui/TakeASeat";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { ask, car, heritageStrip, people, route, seat, week } from "@/content/home";
import { eascr2027 } from "@/content/eascr2027";

export const metadata = buildMetadata({
  title: "Minti Motorsport · Arrive & Drive · A seat in the Safari",
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <Page path="/">
      <Hero />

      {/* 01 · The route: one sentence, the map, three facts */}
      <Section roadbook="THE ROUTE" className="py-section">
        <Container>
          <div className="flex items-center gap-4">
            <RoadbookRow code={route.code} number="01" tulip={0} instruction="STRAIGHT ON · THE ROUTE" />
            <span className="hidden h-px flex-1 rule border-t sm:block" aria-hidden="true" />
          </div>
          <div className="mt-14 lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
            <Statement rule={false} className="lg:col-span-5">
              {route.statement}
            </Statement>
            <StageMap current="/" className="mt-12 lg:col-span-7 lg:mt-0" />
          </div>
          <NumeralRow items={route.numerals} size="l" className="mt-16 lg:mt-20" />
        </Container>
      </Section>

      {/* 02 · The 2027 seat: the package as figures over the dials, then the ticket */}
      <Section roadbook="THE 2027 SEAT" id="the-seat" dark className="clip-x py-section">
        <Container>
          <Chapter dark code={seat.code} number="02" title={seat.title} tulip={1} instruction="KEEP LEFT · THE 2027 SEAT" />
        </Container>
        <div className="relative mt-16 lg:mt-20">
          <Image
            src={seat.board.src}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={seat.board.blurDataURL}
            className="object-cover opacity-45"
            style={{ objectPosition: "50% 50%" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night via-night/25 to-night" aria-hidden="true" />
          <div className="grain absolute inset-0" style={{ "--grain": 0.07 } as React.CSSProperties} aria-hidden="true" />
          <Container className="relative py-16 lg:py-24">
            <NumeralRow items={seat.numerals} dark size="l" columns={3} mobileColumns={2} />
            <p className="caption mt-6 text-chalk/55">{seat.boardCaption}</p>
          </Container>
        </div>
        <Container className="mt-16 lg:grid lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="statement text-chalk/90">{seat.line}</p>
            <p className="display-cond mt-6 text-[13px] tracking-[0.12em] text-chalk/60">{seat.allIn}</p>
          </Reveal>
          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <Reveal delay={120}>
              <SeatTicket from="home-product" />
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
                <p className="data-mono max-w-md text-data-s leading-relaxed text-chalk/60">
                  {eascr2027.organiserNote}
                </p>
                <Button href={seat.manifest.href} variant="text-dark">
                  {seat.manifest.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 03 · The car: the wide frame at full width, the detail, one line */}
      <Section roadbook="THE CAR" className="clip-x py-section">
        <Container>
          <Chapter code={car.code} number="03" title={car.title} tulip={2} instruction="OVER CREST · THE CAR" />
        </Container>
        <div className="mt-16 lg:mt-20 [&_figcaption]:px-5 sm:[&_figcaption]:px-8">
          <Plate
            image={car.wide.image}
            ratio="21/9"
            mobileRatio="4/5"
            position="60% 50%"
            caption={car.wide.caption}
            sizes="100vw"
          />
        </div>
        <Container className="mt-12 lg:grid lg:grid-cols-12 lg:items-end lg:gap-10">
          <Plate
            image={car.tall.image}
            ratio="4/5"
            caption={car.tall.caption}
            className="w-[62%] lg:col-span-4 lg:w-full"
            sizes="(min-width: 1024px) 30vw, 62vw"
            delay={120}
          />
          <Reveal className="mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0 lg:pb-10">
            <p className="statement text-night/90">{car.statement}</p>
            <div className="mt-10">
              <Button href={car.cta.href} variant="ghost-light">
                {car.cta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* 04 · How the week runs: five frames that stack */}
      <FilmStack {...week} />

      {/* 05 · The people: the principal, the official line, the crew */}
      <Section roadbook="THE PEOPLE" className="clip-x py-section">
        <Container>
          <Chapter code={people.code} number="05" title={people.title} tulip={4} instruction="JUNCTION · THE PEOPLE" />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
            <Plate
              image={people.joey.image}
              ratio="native"
              maxWidth={335}
              frame
              caption={people.joey.caption}
              className="w-[220px] sm:w-[280px] lg:col-span-3 lg:w-full"
              sizes="335px"
            />
            <Reveal className="mt-10 lg:col-span-7 lg:col-start-5 lg:mt-0">
              <p className="display-wide text-h2">{people.joey.name}</p>
              <p className="data-mono mt-3 text-data-s text-murram">{people.joey.role}</p>
              <p className="editorial mt-5 max-w-[44ch] text-night/85">{people.joey.line}</p>
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

      {/* 06 · Heritage, briefly: the archive frame and three dates */}
      <Section roadbook="HERITAGE" className="clip-x py-section">
        <Container>
          <Chapter code={heritageStrip.code} number="06" title={heritageStrip.title} tulip={5} instruction="CAUTION · HERITAGE" />
        </Container>
        <div className="mt-16 lg:mt-20 [&_figcaption]:px-5 sm:[&_figcaption]:px-8">
          <Plate
            image={heritageStrip.image}
            ratio="21/9"
            mobileRatio="4/5"
            position="55% 50%"
            grain={0.09}
            caption={heritageStrip.caption}
            sizes="100vw"
          />
        </div>
        <Container>
          <Reveal className="mt-12 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <p className="editorial max-w-[52ch] text-night/85">{heritageStrip.line}</p>
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
        from="home-finish"
        image={ask.image}
        position="50% 60%"
        video="/video/service-loop.mp4"
      />
    </Page>
  );
}
