import type { ReactNode } from "react";
import { tulipCycle, TulipFinish } from "@/components/roadbook/tulips";

type ChapterProps = {
  /** Roadbook instruction, e.g. "SS1/04 · THE CAR". */
  code: string;
  /** Chapter number rendered as a ghost numeral behind the title. */
  number?: string;
  title: string;
  /** One sentence set in the statement voice under the title. */
  statement?: ReactNode;
  dark?: boolean;
  size?: "l" | "m";
  /** Tulip glyph index (mirrors the rail's cycle) or "finish". Omit for none. */
  tulip?: number | "finish";
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Section opener in the roadbook voice: tulip + mono code + hairline to the
 * grid edge, then a large display title with the chapter number ghosted
 * behind it. Replaces SectionHeading on the marketing pages.
 */
export function Chapter({
  code,
  number,
  title,
  statement,
  dark,
  size = "l",
  tulip,
  as: Tag = "h2",
  className = "",
}: ChapterProps) {
  const Glyph = tulip === "finish" ? TulipFinish : typeof tulip === "number" ? tulipCycle[tulip % tulipCycle.length] : null;
  const accent = dark ? "text-sodium" : "text-murram";
  return (
    <header className={`relative ${className}`}>
      <div className={`flex items-center gap-3 ${accent}`}>
        {Glyph ? <Glyph className="h-5 w-5 shrink-0" /> : null}
        <p className="data-mono shrink-0 text-[11px] font-medium tracking-[0.16em]">{code}</p>
        <span className="h-px flex-1 rule border-t" aria-hidden="true" />
      </div>
      <div className="relative mt-6">
        {number ? (
          <span className={`ghost-numeral ${dark ? "text-chalk" : "text-night"}`} aria-hidden="true">
            {number}
          </span>
        ) : null}
        <Tag
          className={`display-wide relative z-[1] max-w-[14ch] ${size === "l" ? "text-h1" : "text-h2"}`}
        >
          {title}
        </Tag>
      </div>
      {statement ? (
        <p className={`statement relative z-[1] mt-8 ${dark ? "text-chalk/90" : "text-night/90"}`}>
          {statement}
        </p>
      ) : null}
    </header>
  );
}
