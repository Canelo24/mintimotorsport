import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontClassNames } from "./fonts";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Analytics } from "@/components/analytics/Analytics";
import { organizationJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — A seat in the Safari`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export const viewport: Viewport = {
  themeColor: "#171310",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={fontClassNames}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </body>
    </html>
  );
}
