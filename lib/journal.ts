import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { images, type ImageSlot } from "@/content/images.generated";

/**
 * Journal content layer: MDX files in content/journal with typed frontmatter.
 * Structured so a CMS (Sanity/Storyblok) can replace this module later —
 * pages consume only getJournalPosts()/getJournalPost() (see README).
 */

const JOURNAL_DIR = path.join(process.cwd(), "content", "journal");

export type JournalPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  cover: ImageSlot;
  body: string;
};

type Frontmatter = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  cover: keyof typeof images;
};

export function getJournalPosts(): JournalPost[] {
  const files = fs.readdirSync(JOURNAL_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => readPost(file.replace(/\.mdx$/, "")))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getJournalPost(slug: string): JournalPost | null {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  try {
    return readPost(slug);
  } catch {
    return null;
  }
}

function readPost(slug: string): JournalPost {
  const raw = fs.readFileSync(path.join(JOURNAL_DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;
  return {
    slug,
    title: fm.title,
    date: fm.date,
    category: fm.category,
    excerpt: fm.excerpt,
    cover: images[fm.cover] ?? images.journalServiceParkCraft,
    body: content,
  };
}
