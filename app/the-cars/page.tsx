import Image from "next/image";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Todo } from "@/components/ui/Todo";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { buildProcess, carsHero, models, otherMachinery, partnership } from "@/content/cars";

export const metadata = buildMetadata({
  title: "The Cars — MST Escort Mk1 and Mk2, Safari spec",
  description:
    "New and original Ford Escort Mk1 and Mk2 built to Safari specification by MST Cars, under Minti Motorsport's exclusive regional partnership.",
  path: "/the-cars",
});

export default function TheCarsPage() {
  return (
    <Page path="/the-cars">
      <Section roadbook="THE PARTNERSHIP" className="pb-20 pt-36">
        <Container>
          <p className="hero-rise data-mono text-data font-medium text-murram">{carsHero.kicker}</p>
          <h1 className="hero-rise display-wide mt-4 max-w-3xl text-h1" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            {carsHero.headline}
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lead text-night/80" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            {carsHero.sub}
          </p>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <h2 className="display-wide text-h2">{partnership.title}</h2>
              <div className="mt-5 space-y-4">
                {partnership.body.map((p, i) => (
                  <p key={i} className="text-body text-night/85">{p}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140} className="self-end border-l-2 border-murram pl-6">
              <p className="text-data text-night/70">{partnership.disclaimer}</p>
              <p className="data-mono mt-4 text-data-s text-grease">
                PARTNER-MANDATED TRADEMARK WORDING: <Todo value="{{TODO: MST trademark disclaimer, once supplied}}" />
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* The two models */}
      <Section roadbook="MK1 / MK2" dark className="py-24">
        <Container className="space-y-20">
          {models.map((model, i) => (
            <div
              key={model.name}
              className={`grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] ${
                i % 2 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <Reveal wipe className="lg:[direction:ltr]">
                <Image
                  src={model.image.src}
                  alt={model.image.alt}
                  width={model.image.width}
                  height={model.image.height}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  placeholder="blur"
                  blurDataURL={model.image.blurDataURL}
                  className="w-full"
                />
              </Reveal>
              <Reveal delay={120} className="lg:[direction:ltr]">
                <h2 className="display-wide text-h2">{model.name}</h2>
                <p className="mt-4 text-body text-chalk/80">{model.blurb}</p>
                <dl className="mt-8 divide-y rule border-y">
                  {model.spec.map((row) => (
                    <div key={row.k} className="flex justify-between gap-6 py-3">
                      <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">{row.k}</dt>
                      <dd className="data-mono text-right text-data">
                        <Todo value={row.v} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          ))}
        </Container>
      </Section>

      {/* Build process */}
      <Section roadbook="THE BUILD" className="py-24">
        <Container>
          <SectionHeading
            instruction="SS3/03 — SAFARI SPECIFICATION"
            title={buildProcess.title}
            lead={buildProcess.intro}
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-8">
              {buildProcess.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 80} className="border-l-2 border-murram pl-6">
                  <p className="data-mono text-data-s font-medium text-murram">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-wide mt-1 text-h3">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-body text-night/80">{step.body}</p>
                </Reveal>
              ))}
            </div>
            <div className="space-y-6">
              <Reveal wipe>
                <Image
                  src={buildProcess.image.src}
                  alt={buildProcess.image.alt}
                  width={buildProcess.image.width}
                  height={buildProcess.image.height}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  placeholder="blur"
                  blurDataURL={buildProcess.image.blurDataURL}
                  className="w-full"
                />
              </Reveal>
              <Reveal wipe delay={120}>
                <Image
                  src={buildProcess.detail.src}
                  alt={buildProcess.detail.alt}
                  width={buildProcess.detail.width}
                  height={buildProcess.detail.height}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  placeholder="blur"
                  blurDataURL={buildProcess.detail.blurDataURL}
                  className="w-full"
                />
              </Reveal>
            </div>
          </div>

          <Reveal delay={100}>
            <div className="mt-20 border-t rule pt-10">
              <h2 className="display-wide text-h3">{otherMachinery.title}</h2>
              <p className="mt-3 max-w-2xl text-body text-night/80">{otherMachinery.body}</p>
              <div className="mt-8">
                <Button href="/enquire" magnetic>
                  {site.cta.primary}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Page>
  );
}
