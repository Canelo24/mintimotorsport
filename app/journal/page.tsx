import Image from "next/image";
import Link from "next/link";
import { Page } from "@/components/layout/Page";
import { Reveal } from "@/components/motion/Reveal";
import { Container, Section } from "@/components/ui/Section";
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

export default function JournalPage() {
  const posts = getJournalPosts();
  return (
    <Page path="/journal">
      <Section roadbook="THE NOTES" className="pb-24 pt-36">
        <Container>
          <p className="hero-rise data-mono text-data font-medium text-murram">SS6 · JOURNAL</p>
          <h1 className="hero-rise display-wide mt-4 text-h1" style={{ "--rise-delay": "120ms" } as React.CSSProperties}>
            Notes from the road.
          </h1>
          <p className="hero-rise mt-6 max-w-2xl text-lead text-night/80" style={{ "--rise-delay": "240ms" } as React.CSSProperties}>
            Build diaries, event reports and service-park craft. Written by the people who do
            the work, at the pace the work allows.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100} as="li" className="list-none">
                <Link href={`/journal/${post.slug}`} className="group block">
                  <div className="relative aspect-[8/5] overflow-hidden">
                    <Image
                      src={post.cover.src}
                      alt={post.cover.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      placeholder="blur"
                      blurDataURL={post.cover.blurDataURL}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="data-mono mt-4 text-data-s text-murram">
                    {post.category.toUpperCase()} · {dateFmt.format(new Date(post.date)).toUpperCase()}
                  </p>
                  <h2 className="display-wide mt-2 text-h3 group-hover:text-murram">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-data text-night/75">{post.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
