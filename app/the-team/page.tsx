import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { Chapter } from "@/components/ui/Chapter";
import { Ledger } from "@/components/ui/Ledger";
import { NumeralRow } from "@/components/ui/Numeral";
import { PhoneRow } from "@/components/ui/PhoneRow";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { Statement } from "@/components/ui/Statement";
import { TakeASeat } from "@/components/ui/TakeASeat";
import { buildMetadata } from "@/lib/seo";
import { base, crew, finish, ghose, teamHero } from "@/content/team";

export const metadata = buildMetadata({
  title: "The Team · Joey Ghose and the Nairobi crew",
  description:
    "Founded and run by Joey Ghose. UK-registered, family-run, operated from Nairobi by a crew that has made a career of finishing rallies.",
  path: "/the-team",
});

/** Hero first-paint stagger, in ms. */
const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

export default function TheTeamPage() {
  return (
    <Page path="/the-team">
      {/* SS4 · Hero: the crew, and the line that names the page */}
      <Section roadbook="THE FAMILY" className="relative flex min-h-[100svh] items-end">
        <Parallax className="absolute inset-0" amount={0.08}>
          <Image
            src={teamHero.image.src}
            alt={teamHero.image.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={teamHero.image.blurDataURL}
            className="object-cover"
            style={{ objectPosition: teamHero.position }}
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
          <p className="hero-rise data-mono text-data font-medium text-sodium">{teamHero.kicker}</p>
          <h1
            className="hero-rise display-wide mt-4 max-w-[10ch] text-marquee text-chalk"
            style={rise(180)}
          >
            {teamHero.headline}
          </h1>
          <p className="hero-rise mt-6 max-w-[40ch] text-lead text-chalk/85" style={rise(300)}>
            {teamHero.line}
          </p>
          {/* No button here: the phone row in the next band is the action. */}
          <div className="hero-rise mt-10 hidden justify-end lg:flex" style={rise(420)}>
            <Image
              src="/brand/minti-crest.png"
              alt=""
              width={826}
              height={549}
              className="w-36 opacity-90"
            />
          </div>
          <div className="hero-rise mt-12" style={rise(520)}>
            <StageStrip path="/the-team" />
          </div>
        </Container>
      </Section>

      {/* SS4/01 · The principal: his picture properly, then the line you can ring */}
      <Section className="py-section">
        <Container className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-3">
            <Plate
              image={ghose.image}
              ratio="native"
              maxWidth={335}
              frame
              caption={ghose.caption}
              sizes="(min-width: 1024px) 335px, (min-width: 640px) 260px, 200px"
              className="w-[200px] sm:w-[260px] lg:w-full"
            />
          </div>
          <div className="mt-12 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <Reveal>
              <p className="data-mono text-[11px] tracking-[0.16em] text-murram">{ghose.code}</p>
              <h2 className="display-wide mt-4 text-h1">{ghose.name}</h2>
              <p className="data-mono mt-3 text-data-s text-murram">{ghose.role}</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="measure mt-6 text-body text-night/80">{ghose.body}</p>
            </Reveal>
            <Reveal delay={140}>
              <PhoneRow className="mt-10" />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* SS4/02 · Home ground: the bay, one statement, the coordinates */}
      <Section roadbook="HOME GROUND" dark className="py-section">
        <Container>
          <Chapter dark code={base.code} number={base.number} title={base.title} tulip={1} />
        </Container>
        <div className="mt-16 lg:mt-20 [&_figcaption]:px-5 [&_figcaption]:sm:px-8">
          <Plate
            image={base.plate.image}
            ratio="21/9"
            mobileRatio="4/5"
            position={base.plate.position}
            caption={base.plate.caption}
            tag={base.plate.tag}
            sizes="100vw"
            dark
          />
        </div>
        <Container className="mt-16 space-y-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-6">
            <Statement dark rule={false}>
              {base.statement}
            </Statement>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <NumeralRow dark size="m" items={base.coordinates} />
            <Ledger dark mode="facts" numbered={false} rows={base.facts} className="mt-10" />
          </div>
        </Container>
      </Section>

      {/* SS4/03 · The crew: the numbers, two frames, one paragraph */}
      <Section roadbook="THE CREW" className="clip-x py-section">
        <Container>
          <Chapter code={crew.code} number={crew.number} title={crew.title} tulip={2} />
          <NumeralRow
            className="mt-16"
            size="m"
            caption={crew.numerals.caption}
            items={crew.numerals.items}
          />
          <div className="mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Plate
                image={crew.plates.shirts.image}
                ratio="4/5"
                position={crew.plates.shirts.position}
                caption={crew.plates.shirts.caption}
                tag={crew.plates.shirts.tag}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="bleed-x lg:mx-0 [&_figcaption]:px-5 [&_figcaption]:sm:px-8 [&_figcaption]:lg:px-0"
              />
            </div>
            <div className="lg:col-span-7">
              <Plate
                image={crew.plates.wheelNuts.image}
                ratio="3/2"
                position={crew.plates.wheelNuts.position}
                caption={crew.plates.wheelNuts.caption}
                sizes="(min-width: 1024px) 60vw, 100vw"
                delay={120}
                className="mt-12 bleed-x bleed-right lg:mt-24 [&_figcaption]:px-5 [&_figcaption]:sm:px-8 [&_figcaption]:lg:px-0"
              />
            </div>
          </div>
          <Reveal>
            <p className="measure mt-16 text-body text-night/80">{crew.body}</p>
          </Reveal>
        </Container>
      </Section>

      {/* Finish control */}
      <TakeASeat
        variant="compact"
        roadbook="FINISH"
        headline={finish.headline}
        line={finish.line}
        from="the-team"
      />
    </Page>
  );
}
