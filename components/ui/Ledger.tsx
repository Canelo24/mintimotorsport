import { Reveal } from "@/components/motion/Reveal";

type Row = string | { k: string; v: string };

type LedgerProps = {
  rows: Row[];
  /** list: one line per row. facts: key/value. check: ticked (in) or hollow (not in). */
  mode?: "list" | "facts" | "check";
  heading?: string;
  numbered?: boolean;
  dark?: boolean;
  /** Muted heading rule (used for NOT IN). */
  muted?: boolean;
  /** Values set larger in the facts mode. */
  emphasis?: boolean;
  className?: string;
};

/**
 * The roadbook list: inclusions, requirements and facts as one numbered mono
 * table, so lists stop reading as bullet-point documents.
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
  const accent = muted ? "text-grease" : dark ? "text-sodium" : "text-murram";
  const ruleColor = muted ? "border-grease/60" : dark ? "border-sodium" : "border-murram";
  const text = dark ? "text-chalk/85" : "text-night/85";
  return (
    <Reveal className={className}>
      {heading ? (
        <p className={`display-cond border-b-2 pb-3 text-[11px] tracking-[0.2em] ${accent} ${ruleColor}`}>
          {heading}
        </p>
      ) : null}
      <ol className="divide-y rule border-b">
        {rows.map((row, i) => {
          const index = String(i + 1).padStart(2, "0");
          return (
            <li key={typeof row === "string" ? row : row.k} className="flex items-baseline gap-4 py-3.5">
              {mode === "check" ? (
                <span
                  aria-hidden="true"
                  className={`mt-1 inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center border ${
                    muted ? "border-grease/70" : dark ? "border-sodium bg-sodium" : "border-murram bg-murram"
                  }`}
                >
                  {!muted ? (
                    <svg viewBox="0 0 10 10" className={`h-2.5 w-2.5 ${dark ? "text-night" : "text-chalk"}`} fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M2 5.2 4.2 7.4 8 3" />
                    </svg>
                  ) : null}
                </span>
              ) : numbered ? (
                <span className={`data-mono w-7 shrink-0 text-[11px] ${accent}`}>{index}</span>
              ) : null}
              {typeof row === "string" ? (
                <span className={`text-data ${text}`}>{row}</span>
              ) : (
                <span className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className={`display-cond text-[10px] tracking-[0.2em] ${dark ? "text-chalk/50" : "text-grease"}`}>
                    {row.k}
                  </span>
                  <span className={`data-mono ${emphasis ? "text-lead font-medium" : "text-data"} ${text} sm:text-right`}>
                    {row.v}
                  </span>
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
