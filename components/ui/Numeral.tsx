import { Reveal } from "@/components/motion/Reveal";

type Item = { value: string; label: string; unit?: string };

type NumeralProps = Item & {
  size?: "xl" | "l" | "m";
  dark?: boolean;
  className?: string;
};

const isInteger = (v: string) => /^\d{1,4}$/.test(v);
const isCoord = (v: string) => /°/.test(v);

/**
 * The number moment: one allowed fact set in the display face. Integers and
 * words alike are Big Shoulders 800 (one rule for one role); only a
 * coordinate pair is a readout and stays in mono. Final values are rendered
 * server-side and never animated.
 */
export function Numeral({ value, label, unit, size = "l", dark, className = "" }: NumeralProps) {
  const valueClass = isCoord(value)
    ? "data-mono text-h3 font-semibold"
    : `display-wide leading-[0.86] ${size === "xl" ? "text-numeral" : size === "l" ? "text-h1" : "text-h2"}`;
  return (
    <div className={className}>
      <p className={`${valueClass} ${dark ? "text-chalk" : "text-night"} flex flex-wrap items-baseline gap-3`}>
        {value}
        {unit ? <span className="data-mono text-h3 font-medium">{unit}</span> : null}
      </p>
      <p className={`display-cond mt-3 text-[13px] tracking-[0.1em] ${dark ? "text-sodium" : "text-murram"}`}>
        {label}
      </p>
    </div>
  );
}

/** Two to four numerals across the grid, hairlines between. One size per row. */
export function NumeralRow({
  items,
  size = "l",
  dark,
  caption,
  columns,
  mobileColumns,
  className = "",
}: {
  items: Item[];
  size?: "xl" | "l" | "m";
  dark?: boolean;
  caption?: string;
  /** Desktop column count; defaults to one per item (2x2 for four on phones). */
  columns?: 2 | 3 | 4;
  /** Phone column count for three-column rows (default one, for long values). */
  mobileColumns?: 1 | 2;
  className?: string;
}) {
  const n = columns ?? Math.min(4, Math.max(2, items.length));
  const cols =
    n === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : n === 3
        ? `${mobileColumns === 2 ? "grid-cols-2" : "grid-cols-1"} sm:grid-cols-3`
        : "grid-cols-2";
  // A row with words in it steps the whole row down one size so every value shares one rule.
  const uniform = items.every((it) => isInteger(it.value));
  const rowSize = uniform ? size : size === "xl" ? "l" : "m";
  return (
    <div className={className}>
      {caption ? (
        <p className={`display-cond mb-6 text-[13px] tracking-[0.12em] ${dark ? "text-chalk/60" : "text-murram"}`}>
          {caption}
        </p>
      ) : null}
      <div className={`grid ${cols} gap-x-8`}>
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 80} className="rule border-t py-7">
            <Numeral {...it} size={rowSize} dark={dark} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
