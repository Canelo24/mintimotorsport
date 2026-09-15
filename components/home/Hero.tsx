import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StageStrip } from "@/components/ui/StageStrip";
import { Parallax } from "@/components/motion/Parallax";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { events } from "@/lib/analytics";
import { hero } from "@/content/home";

/**
 * Home hero: the film loop where context allows (muted, no controls) — a
 * sub-1MB rendition on phones — with the jump still beneath as the fallback
 * for reduced motion, Save-Data and slow connections. One headline, one ask.
 */
export function Hero() {
  return (
    <section data-roadbook="THE OFFER" className="relative flex min-h-[100svh] items-end">
      <Parallax className="absolute inset-0" amount={0.08}>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={hero.image.blurDataURL}
          className="object-cover"
          style={{ objectPosition: "60% 50%" }}
        />
        <AmbientVideo
          src="/video/hero-loop.mp4"
          mobileSrc="/video/hero-loop-mobile.mp4"
          className="absolute inset-0"
        />
      </Parallax>
      <div
        className="grain absolute inset-0"
        style={{ "--grain": 0.06 } as React.CSSProperties}
        aria-hidden="true"
      />
      {/* Legibility gradient over the lower part only: the top of the frame stays clean */}
      <div
        className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-night via-night/60 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[84rem] px-5 pb-12 pt-40 sm:px-8 sm:pb-16">
        <p
          className="hero-rise data-mono text-data font-medium text-sodium"
          style={{ "--rise-delay": "80ms" } as React.CSSProperties}
        >
          {hero.kicker}
        </p>
        <h1
          className="hero-rise display-wide mt-4 max-w-[11ch] text-marquee text-chalk"
          style={{ "--rise-delay": "180ms" } as React.CSSProperties}
        >
          {hero.headline}
        </h1>
        <p
          className="hero-rise mt-6 max-w-[40ch] text-lead text-chalk/85"
          style={{ "--rise-delay": "300ms" } as React.CSSProperties}
        >
          {hero.sub}
        </p>
        <div
          className="hero-rise mt-10 flex flex-wrap items-end justify-between gap-6"
          style={{ "--rise-delay": "420ms" } as React.CSSProperties}
        >
          <div className="flex w-full flex-wrap gap-4 sm:w-auto">
            <Button
              href={hero.primaryHref}
              magnetic
              block
              event={events.heroCta}
              eventProps={{ campaign: "eascr2027" }}
            >
              {hero.primaryCta}
            </Button>
            <Button href={hero.secondaryHref} variant="ghost-dark" block>
              {hero.secondaryCta}
            </Button>
          </div>
          <Image
            src="/brand/minti-crest.png"
            alt=""
            width={826}
            height={549}
            className="hidden w-36 opacity-90 lg:block"
          />
        </div>
        <div
          className="hero-rise mt-12"
          style={{ "--rise-delay": "520ms" } as React.CSSProperties}
        >
          <StageStrip path="/" />
        </div>
      </div>
    </section>
  );
}
