import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Todo } from "@/components/ui/Todo";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { crews, heritageHero, stewardship, timeline } from "@/content/heritage";

export const metadata = buildMetadata({
  title: "Heritage · the Safari Classic years and the crews we have run",
  description:
    "Minti Motorsport's record: past stewardship of the East African Safari Classic Rally organisation, and the crews the family has backed. Duncan, Tundo, Wahome and Khan.",
  path: "/heritage",
});

export default function HeritagePage() {
  return (
    <Page path="/heritage">
      {/* Hero */}
      <Section roadbook="THE RECORD" className="relative flex min-h-[70svh] items-end">
        <Image
          src={heritageHero.image.src}
          alt={heritageHero.image.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={heritageHero.image.blurDataURL}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/15" aria-hidden="true" />
        <Container className="relative pb-16 pt-40">
          <p className="hero-rise data-mono text-data font-medium text-sodium">{heritageHero.kicker}</p>
          <h1 className="hero-rise display-wide mt-4 max-w-3xl text-h1 text-chalk" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            {heritageHero.headline}
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lead text-chalk/85" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            {heritageHero.sub}
          </p>
        </Container>
      </Section>

      {/* Stewardship — past tense, explicitly */}
      <Section roadbook="STEWARDSHIP" className="py-24">
        <Container>
          <SectionHeading instruction="SS5/01 · THE SAFARI CLASSIC YEARS" title={stewardship.title} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-5">
              {stewardship.body.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="text-body text-night/85">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={140} className="self-start border-l-2 border-murram pl-6">
              <p className="display-cond text-[10px] tracking-[0.2em] text-grease">TENURE</p>
              <p className="data-mono mt-2 text-data">
                <Todo value={stewardship.years} />
              </p>
              <p className="mt-5 text-data text-night/60">
                Stated plainly because it matters: this is heritage, not a current ownership claim.
                The event is independently run today.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Crews we have run */}
      <Section roadbook="CREWS RUN" dark className="py-24">
        <Container>
          <SectionHeading dark instruction="SS5/02 · THE DRIVERS" title={crews.title} lead={crews.intro} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {crews.entries.map((entry, i) => (
              <Reveal
                key={entry.name}
                delay={i * 100}
                as="figure"
                className="flex flex-col justify-between border-t-2 border-sodium bg-night-2 p-7"
              >
                <div>
                  <p className="data-mono text-data-s text-grease">{String(i + 1).padStart(2, "0")}</p>
                  <p className="display-wide mt-3 text-h2 leading-none">{entry.name}</p>
                  <p className="data-mono mt-3 text-data-s text-sodium">
                    <Todo value={entry.car} /> · <Todo value={entry.years} />
                  </p>
                </div>
                <p className="mt-6 text-data text-chalk/75">{entry.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section roadbook="TIMELINE" className="py-24">
        <Container>
          <SectionHeading instruction="SS5/03 · DATED" title={timeline.title} lead={timeline.note} />
          <ol className="mt-12 border-l-2 border-murram/40 pl-8">
            {timeline.entries.map((entry, i) => (
              <Reveal key={i} as="li" delay={i * 60} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1 h-3 w-3 rounded-full border-2 border-murram bg-feshfesh"
                  aria-hidden="true"
                />
                <p className="data-mono text-data font-medium text-murram">
                  <Todo value={entry.year} />
                </p>
                <p className="mt-1.5 max-w-2xl text-body text-night/80">{entry.text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={100}>
            <div className="mt-14">
              <Button href="/enquire" magnetic>
                {site.cta.primary}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Page>
  );
}
