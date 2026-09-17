import { PageHero } from "@/components/ui/PageHero";
import { events } from "@/lib/analytics";
import { hero } from "@/content/home";

/**
 * Home hero: the film loop where context allows (muted, no controls, a
 * sub-1MB rendition on phones) with the jump still beneath as the fallback.
 * Two lines, one face, one line, one ask.
 */
export function Hero() {
  return (
    <PageHero
        path="/"
        roadbook="THE OFFER"
        image={hero.image}
        position="60% 50%"
        video={{ src: "/video/hero-loop.mp4", mobileSrc: "/video/hero-loop-mobile.mp4" }}
        kicker={hero.kicker}
        headline={
          <>
            {hero.headline.line1}
            <br />
            {hero.headline.line2}
          </>
        }
        headlineClassName="max-w-[9ch] text-[clamp(4.75rem,2rem+11.5vw,13.5rem)] leading-[0.86]"
        line={hero.sub}
        primary={{
          label: hero.primaryCta,
          href: hero.primaryHref,
          event: events.heroCta,
          eventProps: { campaign: "eascr2027" },
        }}
        secondary={{ label: hero.secondaryCta, href: hero.secondaryHref }}
        grain={0.08}
      />
  );
}
