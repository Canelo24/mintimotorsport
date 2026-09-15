"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Section";
import { tulipCycle, TulipFinish } from "@/components/roadbook/tulips";
import type { ImageSlot } from "@/content/images.generated";

type Card = { tc: string; title: string; body: string; image: ImageSlot; position?: string };

type Props = {
  code: string;
  title: string;
  cards: Card[];
};

/**
 * "How the week runs": the pinned horizontal sequence (brief §7).
 * Desktop + full motion: GSAP ScrollTrigger pins the section and scrubs the
 * track. Mobile / reduced motion: a native horizontal scroll-snap rail —
 * same content, no pinning, no library loaded.
 */
export function DriveSequence({ code, title, cards }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Only lock the track's own scrolling once GSAP pinning is actually live;
  // under reduced motion (or if the import fails) it stays a swipeable rail.
  const [pinned, setPinned] = useState(false);

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
        setPinned(true);

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
          setPinned(false);
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
      className="overflow-hidden bg-night py-section text-chalk lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-20"
    >
      <Container>
        <Chapter dark code={code} number="04" title={title} tulip={3} />
      </Container>
      <div
        ref={trackRef}
        className={`no-scrollbar mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 sm:px-8 ${
          pinned ? "lg:snap-none lg:overflow-x-visible lg:will-change-transform" : ""
        }`}
      >
        {/* Image-led cards: the photograph is the card, with the control's
            tulip, its number, a title and one line over its lower edge. */}
        {cards.map((card, i) => {
          const Glyph = tulipCycle[i % tulipCycle.length];
          return (
            <article
              key={card.tc}
              className="relative w-[78vw] max-w-[460px] shrink-0 snap-start overflow-hidden bg-night-2 sm:w-[46vw] lg:w-[29vw]"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(min-width: 1024px) 29vw, 78vw"
                  placeholder="blur"
                  blurDataURL={card.image.blurDataURL}
                  className="object-cover"
                  style={{ objectPosition: card.position ?? "50% 50%" }}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute left-6 top-6 flex items-center gap-3 text-sodium sm:left-7 sm:top-7">
                <Glyph className="h-6 w-6" />
                <span className="data-mono text-data-s tracking-[0.16em]">TC{i + 1}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="display-wide text-h1 leading-none text-chalk/40">{card.tc}</p>
                <h3 className="display-wide mt-2 text-[clamp(2rem,3.4vw,3.5rem)] leading-none">{card.title}</h3>
                <p className="mt-3 max-w-[30ch] text-data leading-relaxed text-chalk/85">{card.body}</p>
              </div>
            </article>
          );
        })}
        {/* End card: the ask, inside the sequence */}
        <article className="flex w-[78vw] max-w-[460px] shrink-0 snap-start flex-col justify-between border border-sodium/60 bg-night-2 p-6 sm:w-[46vw] sm:p-7 lg:w-[29vw]">
          <div className="flex items-center gap-3 text-sodium">
            <TulipFinish className="h-6 w-6" />
            <span className="data-mono text-data-s tracking-[0.16em]">FINISH CONTROL · EASCR 2027</span>
          </div>
          <div>
            <h3 className="display-wide text-[clamp(2rem,3.4vw,3.5rem)] leading-none">Your name on the door.</h3>
            <p className="mt-3 text-data text-chalk/75">The full programme, in writing, after one call.</p>
            <a
              href="/enquire?e=eascr2027"
              className="display-cond mt-7 inline-flex min-h-14 items-center gap-3 bg-sodium px-9 py-4 text-[13px] tracking-[0.18em] text-night transition-colors hover:bg-chalk"
            >
              Take a seat <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
