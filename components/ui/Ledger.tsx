import { Reveal } from "@/components/motion/Reveal";

type Row = string | { k: string; v: string };

type LedgerProps = {
  rows: Row[];
  /** list: one line per row. facts: key and value. check: a list with a heading (IN / NOT IN). */
  mode?: "list" | "facts" | "check";
  heading?: string;
  numbered?: boolean;
  dark?: boolean;
  /** The quieter list (NOT IN): same rows, lower ink. */
  muted?: boolean;
  /** Fact values set in the display face (place names, not readouts). */
  emphasis?: boolean;
  className?: string;
};

const isCoord = (v: string) => /°/.test(v);

/**
 * The one list primitive: hairline rows, a mono index on the left, the text
 * in the body face. Facts add a fixed key column. No glyphs.
 */
export function Ledger({
  rows,
  mode = "list",
  heading,
  numbered = true,
  dark,
  muted,
  emphasis,
  className = "",
}: LedgerProps) {
  const accent = muted ? (dark ? "text-chalk/60" : "text-night/60") : dark ? "text-sodium" : "text-murram";
  const ruleColor = muted ? (dark ? "border-chalk/30" : "border-night/30") : dark ? "border-sodium" : "border-murram";
  const text = muted ? (dark ? "text-chalk/50" : "text-night/50") : dark ? "text-chalk/85" : "text-night/85";
  const key = dark ? "text-chalk/55" : "text-murram";
  const showIndex = mode === "check" ? true : numbered;
  return (
    <Reveal className={className}>
      {heading ? (
        <p className={`display-cond border-b-2 pb-3 text-[13px] ${accent} ${ruleColor}`}>{heading}</p>
      ) : null}
      <ol className="divide-y rule border-b">
        {rows.map((row, i) => {
          const index = String(i + 1).padStart(2, "0");
          return (
            <li key={typeof row === "string" ? row : row.k} className="flex items-baseline gap-4 py-3.5">
              {showIndex ? (
                <span className={`data-mono w-7 shrink-0 text-[11px] font-medium ${accent}`}>{index}</span>
              ) : null}
              {typeof row === "string" ? (
                <span className={`text-data ${text}`}>{row}</span>
              ) : (
                <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <span className={`display-cond w-32 shrink-0 text-[12px] ${key}`}>{row.k}</span>
                  {isCoord(row.v) ? (
                    <span className={`data-mono text-data font-medium ${text}`}>{row.v}</span>
                  ) : emphasis ? (
                    <span className={`display-wide text-h3 leading-none ${dark ? "text-chalk" : "text-night"}`}>{row.v}</span>
                  ) : (
                    <span className={`text-data ${text}`}>{row.v}</span>
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
