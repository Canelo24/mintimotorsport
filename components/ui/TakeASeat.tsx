import Image from "next/image";
import { AmbientVideo } from "@/components/motion/AmbientVideo";
import { Reveal } from "@/components/motion/Reveal";
import { SeatTicket } from "@/components/ui/SeatTicket";
import { Container, Section } from "@/components/ui/Section";
import { eascr2027 } from "@/content/eascr2027";
import type { ImageSlot } from "@/content/images.generated";

type TakeASeatProps = {
  headline: string;
  line?: string;
  /** Analytics source, e.g. "home-finish". */
  from: string;
  href?: string;
  variant?: "full" | "compact";
  image?: ImageSlot;
  position?: string;
  video?: string;
  roadbook?: string;
  /** The programme line above the headline. */
  eyebrow?: string;
  ticketMeta?: string;
  ticketLabel?: string;
  className?: string;
};

/**
 * The signature ask, identical on every page: night band, one eyebrow, one
 * headline at one size, one line, the ticket, the organiser note. Full
 * variant carries the photograph (and optionally the service loop).
 */
export function TakeASeat({
  headline,
  line,
  from,
  href = eascr2027.applyHref,
  variant = "full",
  image,
  position = "50% 60%",
  video,
  roadbook = "FINISH",
  eyebrow = "ARRIVE & DRIVE · APPLICATIONS OPEN",
  ticketMeta,
  ticketLabel,
  className = "",
}: TakeASeatProps) {
  const full = variant === "full";
  return (
    <Section
      roadbook={roadbook}
      dark
      className={`relative overflow-hidden ${full ? "flex min-h-[92svh] items-end" : ""} ${className}`}
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
            className="object-cover opacity-60"
            style={{ objectPosition: position }}
            aria-hidden="true"
          />
          {video ? <AmbientVideo lazy src={video} className="absolute inset-0 opacity-50" /> : null}
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/20" aria-hidden="true" />
          <div className="grain absolute inset-0" style={{ "--grain": 0.07 } as React.CSSProperties} aria-hidden="true" />
        </>
      ) : null}
      <Container className={`relative ${full ? "pb-16 pt-36 sm:pb-20" : "py-section"}`}>
        <Reveal>
          <p className="display-cond text-[13px] tracking-[0.14em] text-sodium">{eyebrow}</p>
          <h2 className="display-wide mt-5 max-w-[14ch] text-h1">{headline}</h2>
        </Reveal>
        {line ? (
          <Reveal delay={100}>
            <p className="editorial mt-8 max-w-[44ch] text-chalk/90">{line}</p>
          </Reveal>
        ) : null}
        <Reveal delay={220}>
          <SeatTicket href={href} from={from} meta={ticketMeta} label={ticketLabel} className="mt-12" />
          <p className="data-mono mt-5 max-w-md text-data-s leading-relaxed text-chalk/60">
            {eascr2027.organiserNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
