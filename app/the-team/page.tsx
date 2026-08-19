import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Todo } from "@/components/ui/Todo";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { base, crew, familyPhoto, ghose, teamHero } from "@/content/team";

export const metadata = buildMetadata({
  title: "The Team — the Ghose family and the Nairobi crew",
  description:
    "Founded by Joey Ghose, managed by Jeet Ghose. UK-registered, family-run, operated from Nairobi by a crew that has made a career of finishing rallies.",
  path: "/the-team",
});

export default function TheTeamPage() {
  return (
    <Page path="/the-team">
      <Section roadbook="THE FAMILY" className="pb-20 pt-36">
        <Container>
          <p className="hero-rise data-mono text-data font-medium text-murram">{teamHero.kicker}</p>
          <h1 className="hero-rise display-wide mt-4 max-w-3xl text-h1" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            {teamHero.headline}
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lead text-night/80" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            {teamHero.sub}
          </p>

          <Reveal wipe className="mt-14">
            <Image
              src={familyPhoto.src}
              alt={familyPhoto.alt}
              width={familyPhoto.width}
              height={familyPhoto.height}
              sizes="(min-width: 1024px) 80vw, 100vw"
              placeholder="blur"
              blurDataURL={familyPhoto.blurDataURL}
              className="w-full"
              priority
            />
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {ghose.map((person, i) => (
              <Reveal key={person.name} delay={i * 120} className="border-t-2 border-murram pt-5">
                <h2 className="display-wide text-h3">{person.name}</h2>
                <p className="data-mono mt-1 text-data-s text-murram">{person.role}</p>
                <p className="mt-3 text-body text-night/80">{person.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nairobi base */}
      <Section roadbook="HOME GROUND" dark className="py-24">
        <Container>
          <SectionHeading dark instruction="SS4/02 — THE BASE" title={base.title} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal wipe>
                <Image
                  src={base.image.src}
                  alt={base.image.alt}
                  width={base.image.width}
                  height={base.image.height}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  placeholder="blur"
                  blurDataURL={base.image.blurDataURL}
                  className="w-full"
                />
              </Reveal>
              <div className="mt-6 space-y-4">
                {base.body.map((p, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <p className="text-body text-chalk/80">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={150}>
              <dl className="divide-y rule border-y">
                {base.facts.map((row) => (
                  <div key={row.k} className="py-3.5">
                    <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">{row.k}</dt>
                    <dd className="data-mono mt-1 text-data text-chalk">
                      <Todo value={row.v} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The crew */}
      <Section roadbook="THE CREW" className="py-24">
        <Container>
          <SectionHeading instruction="SS4/03 — SERVICE" title={crew.title} lead={crew.body} />
          <Reveal wipe className="mt-12">
            <Image
              src={crew.image.src}
              alt={crew.image.alt}
              width={crew.image.width}
              height={crew.image.height}
              sizes="(min-width: 1024px) 80vw, 100vw"
              placeholder="blur"
              blurDataURL={crew.image.blurDataURL}
              className="w-full"
            />
          </Reveal>
          <p className="data-mono mt-6 text-data text-grease">
            <Todo value={crew.namesTodo} />
          </p>
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
