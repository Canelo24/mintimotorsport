import Image from "next/image";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import { eascr2027 } from "@/content/eascr2027";
import type { ImageSlot } from "@/content/images.generated";

type TakeASeatProps = {
  headline: string;
  line?: string;
  scarcity?: string;
  /** Analytics source, e.g. "home-finish". */
  from: string;
  href?: string;
  variant?: "full" | "compact";
  image?: ImageSlot;
  position?: string;
  video?: string;
  roadbook?: string;
  className?: string;
};

/**
 * The signature ask, identical on every page: night band, one headline, one
 * line, the primary "Take a seat", the organiser note. Full variant carries a
 * dimmed photograph (and optionally the service loop); compact is type only.
 */
export function TakeASeat({
  headline,
  line,
  scarcity,
  from,
  href = eascr2027.applyHref,
  variant = "full",
  image,
  position = "50% 60%",
  video,
  roadbook = "FINISH",
  className = "",
}: TakeASeatProps) {
  const full = variant === "full";
  return (
    <Section
      roadbook={roadbook}
      dark
      className={`relative overflow-hidden ${full ? "flex min-h-[70svh] items-end lg:min-h-[80svh]" : ""} ${className}`}
    >
      {full && image ? (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            className="object-cover opacity-40"
            style={{ objectPosition: position }}
            aria-hidden="true"
          />
          {video ? <AmbientVideo lazy src={video} className="absolute inset-0 opacity-35" /> : null}
          <div
            className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent"
            aria-hidden="true"
          />
        </>
      ) : null}
      <Container className={`relative ${full ? "pb-20 pt-32 sm:pb-24" : "py-section"}`}>
        <Reveal>
          <p className="data-mono text-[11px] tracking-[0.16em] text-sodium">
            ARRIVE &amp; DRIVE · EAST AFRICAN SAFARI CLASSIC 2027
          </p>
          <h2 className={`display-wide mt-5 max-w-[12ch] ${full ? "text-h1" : "text-h2"}`}>{headline}</h2>
        </Reveal>
        {line ? (
          <Reveal delay={100}>
            <p className="mt-6 max-w-[40ch] text-lead text-chalk/85">{line}</p>
          </Reveal>
        ) : null}
        {scarcity ? (
          <Reveal delay={160}>
            <p className="data-mono mt-8 text-data text-sodium">{scarcity}</p>
          </Reveal>
        ) : null}
        <Reveal delay={220}>
          <div className="mt-10">
            <Button
              href={href}
              magnetic
              block
              event="campaign_cta_click"
              eventProps={{ campaign: "eascr2027", from }}
            >
              {eascr2027.applyCta}
            </Button>
          </div>
          <p className="data-mono mt-5 max-w-md text-[11px] leading-relaxed text-grease">
            {eascr2027.organiserNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
