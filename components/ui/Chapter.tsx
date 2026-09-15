import type { ReactNode } from "react";
import { tulipCycle, TulipFinish } from "@/components/roadbook/tulips";

type Tulip = number | "finish";

type RowProps = {
  /** Roadbook instruction code, e.g. "SS1/04 · THE CAR". */
  code: string;
  /** Chapter number: also seeds the decorative distances on the row. */
  number?: string;
  /** Tulip glyph index (mirrors the rail's cycle) or "finish". */
  tulip?: Tulip;
  /** The instruction line under the code, e.g. "KEEP LEFT · THE 2027 SEAT". */
  instruction?: string;
  dark?: boolean;
  className?: string;
};

const fmt = (n: number) => n.toFixed(2).padStart(5, "0");

/**
 * Roadbook distances for the row. They are the roadbook idiom, not a claim:
 * derived from the chapter number so the same chapter always reads the same.
 */
function distances(number?: string) {
  const n = Number.parseInt(number ?? "", 10) || 1;
  return { total: fmt(n * 6.4 + 2.3), interval: fmt(1.2 + ((n * 7) % 5) * 0.55) };
}

function glyphFor(tulip?: Tulip) {
  if (tulip === "finish") return TulipFinish;
  if (typeof tulip === "number") return tulipCycle[tulip % tulipCycle.length];
  return null;
}

/**
 * One row of a rally roadbook: distance cell, tulip cell, instruction cell,
 * boxed and hairlined. The device the client asked for ("I love the SS,
 * just more visual presentation"): every chapter opens with one.
 */
export function RoadbookRow({ code, number, tulip, instruction, dark, className = "" }: RowProps) {
  const Glyph = glyphFor(tulip);
  const { total, interval } = distances(number);
  const line = dark ? "border-sodium/45" : "border-murram/45";
  const accent = dark ? "text-sodium" : "text-murram";
  return (
    <div
      className={`inline-grid grid-cols-[auto_auto_minmax(0,1fr)] border ${line} ${accent} ${className}`}
      role="presentation"
    >
      <div className={`flex flex-col justify-center border-r px-3 py-2 ${line}`}>
        <span className="data-mono text-[9px] tracking-[0.16em] opacity-60">TOT</span>
        <span className="data-mono text-[13px] font-semibold leading-tight tabular-nums">{total}</span>
        <span className="data-mono mt-1.5 text-[9px] tracking-[0.16em] opacity-60">INT</span>
        <span className="data-mono text-[11px] leading-tight tabular-nums">{interval}</span>
      </div>
      <div className={`flex items-center justify-center border-r px-3 ${line}`}>
        {Glyph ? <Glyph className="h-9 w-9" /> : <span className="h-9 w-9" />}
      </div>
      <div className="flex min-w-0 flex-col justify-center px-4 py-2">
        <span className="data-mono text-[11px] font-medium tracking-[0.16em]">{code}</span>
        {instruction ? (
          <span className="display-cond mt-1.5 text-[11px] tracking-[0.2em] opacity-75">{instruction}</span>
        ) : null}
      </div>
    </div>
  );
}

type ChapterProps = RowProps & {
  title: string;
  /** One sentence set in the statement (serif) voice under the title. */
  statement?: ReactNode;
  size?: "l" | "m";
  as?: "h1" | "h2";
};

/**
 * Section opener: the roadbook row with a hairline to the grid edge, then a
 * large display title with the chapter number ghosted behind it.
 */
export function Chapter({
  code,
  number,
  title,
  statement,
  dark,
  size = "l",
  tulip,
  instruction,
  as: Tag = "h2",
  className = "",
}: ChapterProps) {
  const instr = instruction ?? title.replace(/[.!]$/, "").toUpperCase();
  return (
    <header className={`relative ${className}`}>
      <div className="flex items-center gap-4">
        <RoadbookRow code={code} number={number} tulip={tulip} instruction={instr} dark={dark} />
        <span className="hidden h-px flex-1 rule border-t sm:block" aria-hidden="true" />
      </div>
      <div className="relative mt-8">
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
