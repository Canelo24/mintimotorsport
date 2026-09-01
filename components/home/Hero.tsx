import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/motion/Parallax";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { site } from "@/content/site";
import { events } from "@/lib/analytics";
import { hero } from "@/content/home";

/**
 * Home hero: the film loop where context allows (muted, no controls), the
 * jump still everywhere else — reduced motion, Save-Data, slow connections
 * and small screens all get the photograph. One headline, one primary CTA.
 */
export function Hero() {
  return (
    <section data-roadbook="THE OFFER" className="relative flex min-h-[100svh] items-end">
      <Parallax className="absolute inset-0" amount={0.14}>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={hero.image.blurDataURL}
          className="object-cover"
        />
        <AmbientVideo src="/video/hero-loop.mp4" className="absolute inset-0" />
      </Parallax>
      {/* Legibility gradient — night from the base, like dusk coming in */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/10"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:px-8">
        <p className="hero-rise data-mono text-data font-medium text-sodium" style={{ "--rise-delay": "80ms" } as React.CSSProperties}>
          {hero.kicker}
        </p>
        <h1
          className="hero-rise display-wide mt-4 max-w-4xl text-h1 text-chalk"
          style={{ "--rise-delay": "180ms" } as React.CSSProperties}
        >
          {hero.headline}
        </h1>
        <p
          className="hero-rise mt-6 max-w-xl text-lead text-chalk/85"
          style={{ "--rise-delay": "300ms" } as React.CSSProperties}
        >
          {hero.sub}
        </p>
        <div
          className="hero-rise mt-10 flex flex-wrap gap-4"
          style={{ "--rise-delay": "420ms" } as React.CSSProperties}
        >
          <Button href="/enquire" magnetic event={events.heroCta}>
            {site.cta.primary}
          </Button>
          <Button href="/the-cars" variant="ghost-dark">
            {site.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
