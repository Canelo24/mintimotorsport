import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Chapter } from "@/components/ui/Chapter";
import { Ledger } from "@/components/ui/Ledger";
import { PageHero } from "@/components/ui/PageHero";
import { PhoneRow } from "@/components/ui/PhoneRow";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
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

export default function TheTeamPage() {
  return (
    <Page path="/the-team">
      {/* SS4 · Hero: the crew, and the line that names the page. No button: the phone row is the action. */}
      <PageHero
        path="/the-team"
        roadbook="THE FAMILY"
        image={teamHero.image}
        position={teamHero.position}
        kicker={teamHero.kicker}
        headline={
          <>
            Names you can phone.
          </>
        }
        headlineClassName="max-w-[10ch] text-marquee"
        line={teamHero.line}
      />

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
              <p className="display-cond text-[13px] tracking-[0.14em] text-murram">{ghose.code}</p>
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
            sizes="100vw"
            dark
          />
        </div>
        <Container className="mt-16 space-y-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-6">
            <Statement dark rule={false}>
              {base.statement}
            </Statement>
            <Reveal delay={100}>
              <p className="measure mt-6 text-body text-chalk/75">{base.body}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Ledger dark mode="facts" numbered={false} rows={base.facts} />
          </div>
        </Container>
      </Section>

      {/* SS4/03 · The crew: the numbers, two frames, one paragraph */}
      <Section roadbook="THE CREW" className="clip-x py-section">
        <Container>
          <Chapter code={crew.code} number={crew.number} title={crew.title} tulip={2} />
          <div className="mt-16 lg:mt-20 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <Plate
                image={crew.plates.shirts.image}
                ratio="4/5"
                position={crew.plates.shirts.position}
                caption={crew.plates.shirts.caption}
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
