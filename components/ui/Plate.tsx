import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import type { ImageSlot } from "@/content/images.generated";

type Ratio = "21/9" | "16/9" | "3/2" | "5/4" | "1/1" | "4/5" | "native";

type PlateProps = {
  image: ImageSlot;
  /** Factual caption in the mono voice: only what is visible in the frame. */
  caption?: string;
  /** Short right-aligned tag, e.g. "MURRAM" or "SERVICE". */
  tag?: string;
  ratio?: Ratio;
  /** Mobile ratio when it must differ (landscape bleeds become 4/5 on phones). */
  mobileRatio?: Ratio;
  /** object-position, e.g. "60% 50%". */
  position?: string;
  /** Rendered width cap in px: soft sources are never upscaled. */
  maxWidth?: number;
  frame?: boolean;
  /** Grain opacity 0..1; omit for none. */
  grain?: number;
  priority?: boolean;
  sizes?: string;
  delay?: number;
  dark?: boolean;
  className?: string;
  imgClassName?: string;
};

const ratioClass: Record<Exclude<Ratio, "native">, string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "3/2": "aspect-[3/2]",
  "5/4": "aspect-[5/4]",
  "1/1": "aspect-square",
  "4/5": "aspect-[4/5]",
};

const mobileRatioClass: Record<Exclude<Ratio, "native">, string> = {
  "21/9": "max-lg:aspect-[21/9]",
  "16/9": "max-lg:aspect-[16/9]",
  "3/2": "max-lg:aspect-[3/2]",
  "5/4": "max-lg:aspect-[5/4]",
  "1/1": "max-lg:aspect-square",
  "4/5": "max-lg:aspect-[4/5]",
};

/**
 * The editorial photograph. One component for every picture outside a hero
 * so crops, captions, frames, grain and resolution caps live in one place.
 */
export function Plate({
  image,
  caption,
  tag,
  ratio = "3/2",
  mobileRatio,
  position = "50% 50%",
  maxWidth,
  frame,
  grain,
  priority,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  delay = 0,
  dark,
  className = "",
  imgClassName = "",
}: PlateProps) {
  const box =
    ratio === "native"
      ? ""
      : `${ratioClass[ratio]} ${mobileRatio && mobileRatio !== "native" ? mobileRatioClass[mobileRatio] : ""}`;
  const style = {
    ...(maxWidth ? { maxWidth } : {}),
    ...(grain ? ({ "--grain": grain } as React.CSSProperties) : {}),
  } as React.CSSProperties;
  // An edge-to-edge image keeps its caption inset to the page gutter.
  const bleeds = /\bbleed-/.test(className);
  return (
    <figure className={className} style={maxWidth ? { maxWidth } : undefined}>
      <Reveal wipe delay={delay}>
        <div
          className={`relative overflow-hidden ${box} ${grain ? "grain" : ""} ${
            frame ? "border rule" : ""
          }`}
          style={style}
        >
          {ratio === "native" ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={sizes}
              priority={priority}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              className={`h-auto w-full ${imgClassName}`}
            />
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              priority={priority}
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              className={`object-cover ${imgClassName}`}
              style={{ objectPosition: position }}
            />
          )}
        </div>
      </Reveal>
      {caption || tag ? (
        <figcaption
          className={`caption mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 ${
            dark ? "text-chalk/55" : ""
          } ${bleeds ? "px-5 sm:px-8 lg:px-0" : ""}`}
        >
          <span>{caption}</span>
          {tag ? <span className="shrink-0">{tag}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
