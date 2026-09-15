import Image from "next/image";
import { Chapter } from "@/components/ui/Chapter";
import { Container } from "@/components/ui/Section";
import { tulipCycle, TulipFinish } from "@/components/roadbook/tulips";
import type { ImageSlot } from "@/content/images.generated";

type Frame = { tc: string; title: string; body: string; image: ImageSlot; position?: string };

type Props = {
  code: string;
  title: string;
  frames: Frame[];
};

/**
 * "How the week runs" as a film: five full-viewport frames that stick and
 * stack as you scroll, each one photograph, one control, one serif word,
 * one line. CSS sticky only: no library, works on phones, final state under
 * reduced motion is simply the frames in a column.
 */
export function FilmStack({ code, title, frames }: Props) {
  return (
    <section data-roadbook="THE WEEK" className="bg-night text-chalk">
      <Container className="py-section">
        <Chapter dark code={code} number="04" title={title} tulip={3} instruction="FOLLOW THE WEEK · 5 CONTROLS" />
      </Container>
      <div className="relative">
        {frames.map((f, i) => {
          const last = i === frames.length - 1;
          const Glyph = last ? TulipFinish : tulipCycle[i % tulipCycle.length];
          return (
            <article key={f.tc} className="film-frame bg-night">
              <Image
                src={f.image.src}
                alt={f.image.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={f.image.blurDataURL}
                className="object-cover"
                style={{ objectPosition: f.position ?? "50% 50%" }}
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/35 to-night/10" aria-hidden="true" />
              <div className="grain absolute inset-0" style={{ "--grain": 0.07 } as React.CSSProperties} aria-hidden="true" />
              {/* control header */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-24 text-sodium sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
                <span className="flex items-center gap-3">
                  <Glyph className="h-7 w-7" />
                  <span className="data-mono text-[11px] tracking-[0.18em]">TIME CONTROL {f.tc}</span>
                </span>
                <span className="data-mono text-[11px] tracking-[0.18em] text-chalk/70">
                  {f.tc} / {String(frames.length).padStart(2, "0")}
                </span>
              </div>
              {/* the word and the line */}
              <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 lg:pl-[calc(var(--spacing-rail)+2rem)]">
                <div className="mx-auto max-w-[84rem]">
                  <p className="display-wide text-h2 leading-none text-chalk/35">{f.tc}</p>
                  <h3 className="editorial editorial-i mt-2 text-[clamp(3rem,1.5rem+7.5vw,10rem)] text-chalk">{f.title}</h3>
                  <p className="mt-5 max-w-[34ch] text-lead text-chalk/85">{f.body}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
