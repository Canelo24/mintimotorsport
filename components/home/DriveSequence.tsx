"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SectionHeading, Container } from "@/components/ui/Section";
import type { ImageSlot } from "@/content/images.generated";

type Card = { tc: string; title: string; body: string; image: ImageSlot };

type Props = {
  instruction: string;
  title: string;
  lead: string;
  cards: Card[];
};

/**
 * "What a seat includes" — the pinned horizontal sequence (brief §7).
 * Desktop + full motion: GSAP ScrollTrigger pins the section and scrubs the
 * track. Mobile / reduced motion: a native horizontal scroll-snap rail —
 * same content, no pinning, no library loaded.
 */
export function DriveSequence({ instruction, title, lead, cards }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !desktop) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled || !sectionRef.current || !trackRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        const track = trackRef.current;
        const getDistance = () => track.scrollWidth - window.innerWidth * 0.92;

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cleanup = () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-roadbook="THE SEAT"
      className="overflow-hidden bg-night py-20 text-chalk lg:flex lg:min-h-screen lg:flex-col lg:justify-center"
    >
      <Container>
        <SectionHeading dark instruction={instruction} title={title} lead={lead} />
      </Container>
      <div
        ref={trackRef}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-8 lg:snap-none lg:overflow-x-visible lg:will-change-transform"
      >
        {cards.map((card, i) => (
          <article
            key={card.tc}
            className="w-[82vw] max-w-[520px] shrink-0 snap-start border rule bg-night-2 sm:w-[52vw] lg:w-[36vw]"
          >
            <div className="relative aspect-[8/5]">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                sizes="(min-width: 1024px) 36vw, 82vw"
                placeholder="blur"
                blurDataURL={card.image.blurDataURL}
                className="object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
            <div className="p-6">
              <p className="data-mono text-data-s font-medium text-sodium">
                {card.tc} / {String(cards.length).padStart(2, "0")}
              </p>
              <h3 className="display-wide mt-2 text-h3">{card.title}</h3>
              <p className="mt-3 text-data leading-relaxed text-chalk/75">{card.body}</p>
            </div>
          </article>
        ))}
        {/* End card: the ask, inside the sequence */}
        <article className="flex w-[82vw] max-w-[520px] shrink-0 snap-start flex-col items-start justify-center border border-sodium/60 bg-night-2 p-8 sm:w-[52vw] lg:w-[36vw]">
          <p className="data-mono text-data-s text-sodium">FINISH CONTROL</p>
          <h3 className="display-wide mt-2 text-h3">Your name on the door</h3>
          <p className="mt-3 text-data text-chalk/75">
            The full programme, in writing, after one call.
          </p>
          <a
            href="/enquire"
            className="display-cond mt-6 bg-sodium px-6 py-3.5 text-data-s tracking-[0.16em] text-night transition-colors hover:bg-chalk"
          >
            Take a seat
          </a>
        </article>
      </div>
    </section>
  );
}
