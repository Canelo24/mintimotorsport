import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Plate } from "@/components/ui/Plate";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import { buildMetadata } from "@/lib/seo";
import { getJournalPosts } from "@/lib/journal";

export const metadata = buildMetadata({
  title: "Journal · build diaries, event reports, service-park craft",
  description:
    "Notes from the workshop and the service park: build diaries, event reports and the craft of East African rallying.",
  path: "/journal",
});

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const stamp = (category: string, date: string) =>
  `${category.toUpperCase()} · ${dateFmt.format(new Date(date)).toUpperCase()}`;

export default function JournalPage() {
  // Newest first (lib/journal sorts by date descending): the first post is the feature.
  const [feature, ...rest] = getJournalPosts();

  return (
    <Page path="/journal">
      <Section roadbook="THE NOTES" className="pb-section pt-40 lg:pt-48">
        <Container>
          <p className="hero-rise display-cond text-[0.875rem] tracking-[0.16em] text-murram">SS6 · JOURNAL</p>
          <h1
            className="hero-rise display-wide mt-4 text-h1"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            Notes from the road.
          </h1>
          <p
            className="hero-rise editorial mt-6 max-w-[46ch] text-night/85"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            Build diaries, event reports, service-park craft. Written by the people who do the
            work.
          </p>
          <div className="hero-rise mt-10" style={{ "--rise-delay": "360ms" } as React.CSSProperties}>
            <StageStrip path="/journal" dark={false} />
          </div>

          {feature ? (
            <Link href={`/journal/${feature.slug}`} className="group mt-16 block lg:mt-20">
              <Plate
                image={feature.cover}
                ratio="21/9"
                mobileRatio="3/2"
                caption={stamp(feature.category, feature.date)}
                tag="FEATURE"
                priority
                sizes="(min-width: 1024px) 1280px, 100vw"
                className="bleed-x lg:mx-0"
                imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <Reveal delay={120}>
                <h2 className="display-wide mt-6 max-w-[16ch] text-h2 transition-colors duration-200 group-hover:text-murram">
                  {feature.title}
                </h2>
                <p className="clamp-2 mt-3 max-w-[56ch] text-body text-night/75">{feature.excerpt}</p>
              </Reveal>
            </Link>
          ) : null}

          {rest.length ? (
            <ul className="mt-20 grid gap-12 md:grid-cols-2">
              {rest.map((post, i) => (
                <li key={post.slug}>
                  <Link href={`/journal/${post.slug}`} className="group block">
                    <Plate
                      image={post.cover}
                      ratio="3/2"
                      caption={stamp(post.category, post.date)}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      delay={i * 80}
                      imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <Reveal delay={i * 80 + 120}>
                      <h2 className="display-wide mt-5 text-h3 transition-colors duration-200 group-hover:text-murram">
                        {post.title}
                      </h2>
                      <p className="clamp-2 mt-2 text-data text-night/75">{post.excerpt}</p>
                    </Reveal>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </Section>
    </Page>
  );
}
