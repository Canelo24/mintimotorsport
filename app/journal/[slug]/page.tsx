import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Page } from "@/components/layout/Page";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { getJournalPost, getJournalPosts } from "@/lib/journal";

export function generateStaticParams() {
  return getJournalPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
  });
}

const dateFmt = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <Page path="/journal">
      <Section roadbook="THE NOTE" className="pb-24 pt-36">
        <Container className="max-w-3xl">
          <p className="data-mono text-data-s text-murram">
            <Link href="/journal" className="hover:underline">JOURNAL</Link> ·{" "}
            {post.category.toUpperCase()} · {dateFmt.format(new Date(post.date)).toUpperCase()}
          </p>
          <h1 className="display-wide mt-4 text-h1">{post.title}</h1>
          <div className="relative mt-10 aspect-[8/5]">
            <Image
              src={post.cover.src}
              alt={post.cover.alt}
              fill
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              placeholder="blur"
              blurDataURL={post.cover.blurDataURL}
              className="object-cover"
            />
          </div>
          <article className="journal-prose mt-10">
            <MDXRemote source={post.body} />
          </article>

          <aside className="mt-16 border-t rule pt-8">
            <p className="text-lead font-semibold">
              Reading this from the other side of a decision?
            </p>
            <div className="mt-5">
              <Button href="/enquire">{site.cta.primary}</Button>
            </div>
          </aside>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                datePublished: post.date,
                author: { "@type": "Organization", name: site.name },
                description: post.excerpt,
              }),
            }}
          />
        </Container>
      </Section>
    </Page>
  );
}
