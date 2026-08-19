import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getJournalPosts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/the-drive",
    "/the-cars",
    "/the-team",
    "/heritage",
    "/journal",
    "/enquire",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/the-drive" || path === "/enquire" ? 0.9 : 0.6,
  }));

  const posts = getJournalPosts().map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...routes, ...posts];
}
