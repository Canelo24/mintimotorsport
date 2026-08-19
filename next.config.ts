import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Journal posts are MDX rendered via next-mdx-remote at request/build time;
  // no MDX webpack pipeline needed.
};

export default nextConfig;
