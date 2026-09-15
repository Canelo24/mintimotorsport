import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { TulipCrest, TulipFinish, TulipRight, TulipStart } from "@/components/roadbook/tulips";
import { Chapter } from "@/components/ui/Chapter";
import { Numeral, NumeralRow } from "@/components/ui/Numeral";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { Statement } from "@/components/ui/Statement";
import { TakeASeat } from "@/components/ui/TakeASeat";
import { buildMetadata } from "@/lib/seo";
import { images } from "@/content/images.generated";
import { crews, heritageHero, stewardship, timeline } from "@/content/heritage";

export const metadata = buildMetadata({
  title: "Heritage · the Safari Classic years and the crews we have run",
  description:
    "Minti Motorsport's record: inside the East African Safari Classic Rally since 2020, and the crews the family has backed. Duncan, Tundo, Wahome and Khan.",
  path: "/heritage",
});

/** One tulip per timeline column: start, right, crest, then the finish roundel. */
const timelineGlyphs = [TulipStart, TulipRight, TulipCrest, TulipFinish];

export default function HeritagePage() {
  return (
    <Page path="/heritage">
      {/* Hero: the archive pan, black and white */}
      <Section roadbook="THE RECORD" className="relative flex min-h-[100svh] items-end">
        <Parallax className="absolute inset-0" amount={0.08}>
          <Image
            src={heritageHero.image.src}
            alt={heritageHero.image.alt}
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={heritageHero.image.blurDataURL}
            className="object-cover"
            style={{ objectPosition: "55% 50%" }}
          />
        </Parallax>
        <div
          className="grain absolute inset-0"
          style={{ "--grain": 0.08 } as React.CSSProperties}
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-night via-night/70 to-transparent"
          aria-hidden="true"
        />
        <Container className="relative pb-12 pt-40 sm:pb-16">
          <p className="hero-rise data-mono text-data font-medium text-sodium">{heritageHero.kicker}</p>
          <h1
            className="hero-rise display-wide mt-4 max-w-[12ch] text-h1 text-chalk"
            style={{ "--rise-delay": "180ms" } as React.CSSProperties}
          >
            {heritageHero.headline}
          </h1>
          <div
            className="hero-rise mt-10 hidden justify-end lg:flex"
            style={{ "--rise-delay": "420ms" } as React.CSSProperties}
          >
            <Image src="/brand/minti-crest.png" alt="" width={826} height={549} className="w-36 opacity-90" />
          </div>
          <div className="hero-rise mt-12" style={{ "--rise-delay": "520ms" } as React.CSSProperties}>
            <StageStrip path="/heritage" />
          </div>
        </Container>
      </Section>

      {/* The record in three numbers */}
      <Section dark className="py-16 lg:py-20">
        <Container>
          <NumeralRow dark size="l" items={heritageHero.record} />
        </Container>
      </Section>

      {/* The Safari Classic: inside the event since 2020; ownership is never discussed */}
      <Section roadbook="SAFARI CLASSIC" className="py-section-xl">
        <Container>
          <Chapter code={stewardship.code} title={stewardship.title} tulip={0} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <Numeral value={stewardship.tenure.value} label={stewardship.tenure.label} size="l" />
            </Reveal>
            <div className="mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
              <Statement rule={false}>{stewardship.statement}</Statement>
              <Reveal delay={120}>
                <p className="measure mt-8 text-body text-night/75">{stewardship.body}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Crews we have run: the names only */}
      <Section roadbook="CREWS RUN" dark className="py-section">
        <Container>
          <Chapter dark code={crews.code} title={crews.title} size="m" tulip={1} />
          <ol className="mt-16 divide-y rule border-y">
            {crews.entries.map((entry, i) => (
              <Reveal
                key={entry.name}
                as="li"
                delay={i * 80}
                className="py-8 lg:grid lg:grid-cols-12 lg:gap-6 lg:items-baseline"
              >
                <p className="data-mono text-data-s text-sodium lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="display-wide mt-3 text-h1 lg:col-span-8 lg:mt-0">{entry.name}</p>
                <p className="data-mono mt-4 text-data text-sodium lg:col-span-3 lg:mt-0 lg:text-right">
                  {entry.car}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Timeline: four dated columns */}
      <Section roadbook="TIMELINE" className="py-section">
        <Container>
          <Chapter code={timeline.code} number={timeline.number} title={timeline.title} tulip={2} />
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {timeline.entries.map((entry, i) => {
              const Glyph = timelineGlyphs[i % timelineGlyphs.length];
              return (
                <Reveal key={entry.year} as="li" delay={i * 80} className="border-t rule pt-6">
                  <Glyph className="h-6 w-6 text-murram" />
                  <p className="display-wide mt-5 text-h2 text-murram">{entry.year}</p>
                  <p className="mt-4 text-data text-night/75">{entry.text}</p>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </Section>

      {/* Finish */}
      <TakeASeat
        variant="full"
        roadbook="FINISH"
        headline="The next chapter has a seat in it."
        scarcity="EAST AFRICAN SAFARI CLASSIC 2027 · APPLICATIONS OPEN"
        from="heritage"
        image={images.askMurramRoadAerial}
        position="50% 60%"
      />
    </Page>
  );
}
