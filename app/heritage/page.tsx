import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { TulipCrest, TulipFinish, TulipRight, TulipStart } from "@/components/roadbook/tulips";
import { Chapter } from "@/components/ui/Chapter";
import { Numeral, NumeralRow } from "@/components/ui/Numeral";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
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
      <PageHero
        path="/heritage"
        roadbook="THE RECORD"
        image={heritageHero.image}
        position="55% 50%"
        kicker={heritageHero.kicker}
        headline={
          <>
            We have stood in this dust before.
          </>
        }
        headlineClassName="max-w-[14ch] text-[clamp(3.25rem,2rem+6.5vw,9rem)] leading-[0.9]"
        grain={0.1}
        gradient="h-[72%]"
      />

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
          <Chapter dark code={crews.code} title={crews.title} tulip={1} />
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
                <p className="display-wide mt-3 text-h2 lg:col-span-8 lg:mt-0">{entry.name}</p>
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
        from="heritage"
        image={images.askMurramRoadAerial}
        position="50% 60%"
      />
    </Page>
  );
}
