import Image from "next/image";
import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { Hero } from "@/components/home/Hero";
import { DriveSequence } from "@/components/home/DriveSequence";
import { Marquee } from "@/components/motion/Marquee";
import { Reveal } from "@/components/motion/Reveal";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeading } from "@/components/ui/Section";
import { Todo } from "@/components/ui/Todo";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import {
  ask,
  car,
  credibility,
  driveSequence,
  heritageStrip,
  marqueeLine,
  people,
  proposition,
  routesIn,
} from "@/content/home";
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

      {/* 2 — The 2027 seat. The product, in full, straight after the film. */}
      <Section roadbook="THE 2027 SEAT" dark className="py-24 sm:py-28">
        <Container>
          <p className="data-mono text-data font-semibold tracking-[0.14em] text-sodium">
            SS1/02 · {eascr2027.eyebrow}
          </p>
          <h2 className="display-wide mt-3 max-w-4xl text-h1">
            {eascr2027.event} {eascr2027.year}
          </h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Reveal>
                <p className="display-wide text-h2 text-sodium">{eascr2027.price}</p>
                <p className="data-mono mt-1 text-data-s tracking-[0.16em] text-grease">
                  {eascr2027.priceLabel}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-xl text-body text-chalk/85">{eascr2027.intro}</p>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <Button
                    href={eascr2027.applyHref}
                    magnetic
                    event="campaign_cta_click"
                    eventProps={{ campaign: "eascr2027", from: "home-product" }}
                  >
                    {eascr2027.applyCta}
                  </Button>
                  <Link
                    href="/the-drive#arrive-and-drive"
                    className="data-mono text-data text-chalk/70 underline-offset-4 hover:text-sodium hover:underline"
                  >
                    Full spec and detail →
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <p className="data-mono mt-6 max-w-md text-[11px] leading-relaxed text-grease">
                  {eascr2027.organiserNote}
                </p>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="display-cond text-data-s tracking-[0.2em] text-grease">
                THE HIRE COST COVERS
              </p>
              <ul className="mt-4 divide-y divide-chalk/10 border-y border-chalk/10">
                {eascr2027.includes.map((item) => (
                  <li key={item} className="flex gap-3 py-2.5 text-data text-chalk/85">
                    <span className="text-sodium" aria-hidden="true">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 3 — The proposition, three lines, room to breathe */}
      <Section roadbook="THE DEAL" className="py-24 sm:py-32">
        <Container>
          <div className="max-w-3xl space-y-6">
            {proposition.map((line, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="text-h3 font-semibold leading-snug">{line}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3 — Credibility strip: mono facts, no logo row */}
      <Section className="border-y rule">
        <Container className="grid grid-cols-1 divide-y rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {credibility.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className={`px-4 py-8 ${i === 0 ? "pl-0" : ""}`}
            >
              <p className="display-cond text-[10px] tracking-[0.2em] text-grease">
                {item.label}
              </p>
              <p className="data-mono mt-2 text-data font-medium text-night">
                <Todo value={item.value} />
              </p>
            </Reveal>
          ))}
        </Container>
      </Section>

      {/* 4 — The drive: pinned horizontal sequence */}
      <DriveSequence {...driveSequence} />

      {/* The other routes in — one quiet line, detail lives on /the-drive */}
      <Section className="border-b rule">
        <Container className="flex flex-wrap items-baseline gap-x-6 gap-y-2 py-6">
          <p className="text-data font-semibold text-night/70">{routesIn.line}</p>
          {routesIn.items.slice(1).map((route) => (
            <Link
              key={route.name}
              href={route.href}
              className="data-mono text-data text-murram underline-offset-4 hover:underline"
            >
              {route.name} →
            </Link>
          ))}
        </Container>
      </Section>

      {/* 6 — The car */}
      <Section roadbook="THE CAR" className="py-24 sm:py-32">
        <Container>
          <SectionHeading instruction={car.instruction} title={car.title} />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
            <Reveal wipe>
              <Image
                src={car.image.src}
                alt={car.image.alt}
                width={car.image.width}
                height={car.image.height}
                sizes="(min-width: 1024px) 60vw, 100vw"
                placeholder="blur"
                blurDataURL={car.image.blurDataURL}
                className="w-full"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="text-body text-night/80">{car.body}</p>
              </Reveal>
              <Reveal delay={120}>
                <dl className="mt-8 divide-y rule border-y">
                  {car.spec.map((row) => (
                    <div key={row.k} className="flex justify-between gap-6 py-3">
                      <dt className="display-cond text-[10px] tracking-[0.2em] text-grease">
                        {row.k}
                      </dt>
                      <dd className="data-mono text-right text-data">
                        <Todo value={row.v} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8">
                  <Button href="/the-cars" variant="ghost-light">
                    {site.cta.secondary}
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* The one marquee band */}
      <Marquee text={marqueeLine} />

      {/* 6 — The people */}
      <Section roadbook="THE PEOPLE" className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            instruction={people.instruction}
            title={people.title}
            lead={people.lead}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Joey leads, set in type until his portrait is shot */}
            <Reveal as="figure">
              <div className="flex aspect-[4/5] flex-col justify-between bg-night p-6 text-chalk">
                <p className="data-mono text-data-s text-sodium">01</p>
                <p className="display-wide text-h2 leading-none">
                  Joey
                  <br />
                  Ghose
                </p>
              </div>
              <figcaption className="mt-4">
                <p className="display-wide text-lead">{people.joey.name}</p>
                <p className="data-mono mt-0.5 text-data-s text-murram">{people.joey.role}</p>
                <p className="mt-2 text-data text-night/75">{people.joey.body}</p>
              </figcaption>
            </Reveal>
            {people.cards.map((person, i) => (
              <Reveal key={person.role} delay={(i + 1) * 100} as="figure">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={person.image.src}
                    alt={person.image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    placeholder="blur"
                    blurDataURL={person.image.blurDataURL}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="display-wide text-lead">{person.name}</p>
                  <p className="data-mono mt-0.5 text-data-s text-murram">{person.role}</p>
                  <p className="mt-2 text-data text-night/75">{person.body}</p>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 text-data text-night/70">
              Want to meet them first?{" "}
              <Link href="/the-team" className="font-semibold text-murram underline-offset-4 hover:underline">
                The team, the workshop, the crew →
              </Link>
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* 7 — Heritage, compressed. Correct tense throughout. */}
      <Section roadbook="HERITAGE" className="border-t rule py-24 sm:py-32">
        <Container>
          <SectionHeading
            instruction={heritageStrip.instruction}
            title={heritageStrip.title}
          />
        </Container>
        <div className="no-scrollbar mt-12 flex snap-x gap-5 overflow-x-auto px-5 sm:px-8">
          {heritageStrip.entries.map((entry, i) => (
            <Reveal
              key={i}
              delay={i * 80}
              className="w-[78vw] max-w-[360px] shrink-0 snap-start border-t-2 border-murram pt-4"
            >
              <p className="data-mono text-data-s font-medium text-murram">
                <Todo value={entry.year} />
              </p>
              <p className="mt-3 text-data text-night/80">{entry.text}</p>
            </Reveal>
          ))}
          <Link
            href="/heritage"
            className="flex w-[60vw] max-w-[240px] shrink-0 snap-start items-center border-t-2 border-night/20 pt-4 text-lead font-semibold text-murram underline-offset-4 hover:underline"
          >
            The full story →
          </Link>
        </div>
      </Section>

      {/* 8 — The ask. Real scarcity, stated plainly. */}
      <Section roadbook="FINISH" dark className="relative overflow-hidden">
        <Image
          src={ask.image.src}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={ask.image.blurDataURL}
          className="object-cover opacity-40"
          aria-hidden="true"
        />
        {/* Crew-at-service ambient loop over the aerial still, context-gated */}
        <AmbientVideo
          lazy
          src="/video/service-loop.mp4"
          className="absolute inset-0 opacity-35"
        />
        <Container className="relative py-28 sm:py-40">
          <Reveal>
            <h2 className="display-wide max-w-3xl text-h1">{ask.headline}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lead text-chalk/85">{ask.body}</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="data-mono mt-8 text-data text-sodium">
              SEATS, NEXT EVENT: <Todo value={ask.scarcityLine.seats} /> ·{" "}
              <Todo value={ask.scarcityLine.event} />
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10">
              <Button
                href={ask.href}
                magnetic
                event="ask_cta_click"
                eventProps={{ campaign: "eascr2027" }}
              >
                {ask.cta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </Page>
  );
}
