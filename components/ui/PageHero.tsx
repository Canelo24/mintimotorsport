import Image from "next/image";
import type { ReactNode } from "react";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { Parallax } from "@/components/motion/Parallax";
import { Button } from "@/components/ui/Button";
import { Hud } from "@/components/ui/Hud";
import { Container, Section } from "@/components/ui/Section";
import { StageStrip } from "@/components/ui/StageStrip";
import type { ImageSlot } from "@/content/images.generated";

type Cta = { label: string; href: string; event?: string; eventProps?: Record<string, string | number> };

type Props = {
  path: string;
  roadbook: string;
  image: ImageSlot;
  position?: string;
  /** Optional film loop over the still (still remains the fallback). */
  video?: { src: string; mobileSrc?: string };
  kicker: string;
  /** JSX so a page can break lines or set a word in sodium. Always Big Shoulders. */
  headline: ReactNode;
  headlineClassName?: string;
  line?: string;
  primary?: Cta;
  secondary?: Cta;
  grain?: number;
  /** Height of the legibility gradient, as a Tailwind height class. */
  gradient?: string;
  crest?: boolean;
  /** The mono data strip under the content; off by default, the HUD carries it. */
  strip?: boolean;
  children?: ReactNode;
};

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as React.CSSProperties;

/**
 * The cinematic hero every page opens with: full-viewport photograph (and
 * loop where allowed), grain, a low legibility gradient, the HUD corners,
 * one headline in two voices, one line, the ask, the stage strip.
 */
export function PageHero({
  path,
  roadbook,
  image,
  position = "50% 50%",
  video,
  kicker,
  headline,
  headlineClassName = "max-w-[11ch] text-marquee",
  line,
  primary,
  secondary,
  grain = 0.07,
  gradient = "h-[72%] lg:h-[64%]",
  crest = true,
  strip = false,
  children,
}: Props) {
  return (
    <Section roadbook={roadbook} className="relative flex min-h-[100svh] items-end bg-night text-chalk">
      <Parallax className="absolute inset-0" amount={0.08}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          className="object-cover"
          style={{ objectPosition: position }}
        />
        {video ? (
          <AmbientVideo src={video.src} mobileSrc={video.mobileSrc} className="absolute inset-0" />
        ) : null}
      </Parallax>
      <div
        className="grain absolute inset-0"
        style={{ "--grain": grain } as React.CSSProperties}
        aria-hidden="true"
      />
      <div
        className={`absolute inset-x-0 bottom-0 ${gradient} bg-gradient-to-t from-night via-night/65 to-transparent`}
        aria-hidden="true"
      />
      {/* a whisper of vignette at the top so the header never fights the sky */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-night/75 via-night/35 to-transparent" aria-hidden="true" />
      <Hud path={path} />
      <Container className="relative pb-16 pt-44 sm:pb-20">
        <p className="hero-rise display-cond text-[0.875rem] tracking-[0.16em] text-sodium" style={rise(60)}>
          {kicker}
        </p>
        <h1 className={`hero-slam display-wide mt-5 text-chalk ${headlineClassName}`} style={rise(160)}>
          {headline}
        </h1>
        {line ? (
          <p
            className="hero-rise editorial mt-8 max-w-[44ch] text-chalk/90"
            style={rise(360)}
          >
            {line}
          </p>
        ) : null}
        {primary || secondary || crest ? (
          <div className="hero-rise mt-10 flex flex-wrap items-end justify-between gap-6" style={rise(480)}>
            <div className="flex w-full flex-wrap items-center gap-x-8 gap-y-4 sm:w-auto">
              {primary ? (
                <Button href={primary.href} magnetic block event={primary.event} eventProps={primary.eventProps}>
                  {primary.label}
                </Button>
              ) : null}
              {secondary ? (
                <Button href={secondary.href} variant="text-dark">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
            {crest ? (
              <Image
                src="/brand/minti-crest.png"
                alt=""
                width={826}
                height={549}
                className="hidden w-40 opacity-90 lg:block"
              />
            ) : null}
          </div>
        ) : null}
        {children}
        {strip ? (
          <div className="hero-rise mt-12" style={rise(580)}>
            <StageStrip path={path} />
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
