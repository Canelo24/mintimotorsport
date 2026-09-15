import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";

type Item = { value: string; label: string; unit?: string };

type NumeralProps = Item & {
  size?: "xl" | "l" | "m";
  dark?: boolean;
  className?: string;
};

const isInteger = (v: string) => /^\d{1,4}$/.test(v);

/**
 * The number moment: a single allowed fact set big enough to stand alone.
 * Integers count up once on entry (final value under reduced motion); long
 * values such as coordinates or "FROM 2020" set in mono so they never wrap.
 */
export function Numeral({ value, label, unit, size = "l", dark, className = "" }: NumeralProps) {
  const long = !isInteger(value);
  const valueClass = long
    ? "data-mono text-lead font-semibold sm:text-h3"
    : `display-wide ${size === "xl" ? "text-numeral" : size === "l" ? "text-h1" : "text-h2"}`;
  return (
    <div className={className}>
      <p className={`${valueClass} ${dark ? "text-chalk" : "text-night"} flex items-baseline gap-3`}>
        {long ? value : <CountUp value={Number(value)} className="!font-[inherit] !tracking-[inherit]" />}
        {unit ? <span className="data-mono text-h3 font-medium">{unit}</span> : null}
      </p>
      <p className={`data-mono mt-3 text-[11px] tracking-[0.16em] ${dark ? "text-sodium" : "text-murram"}`}>
        {label}
      </p>
    </div>
  );
}

/** Two to four numerals across the grid, hairlines between. */
export function NumeralRow({
  items,
  size = "l",
  dark,
  caption,
  columns,
  className = "",
}: {
  items: Item[];
  size?: "xl" | "l" | "m";
  dark?: boolean;
  caption?: string;
  /** Desktop column count; defaults to one per item (2x2 for four on phones). */
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const n = columns ?? Math.min(4, Math.max(2, items.length));
  const cols =
    n === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : n === 3
        ? "grid-cols-1 sm:grid-cols-3"
        : "grid-cols-2";
  return (
    <div className={className}>
      {caption ? (
        <p className={`data-mono mb-6 text-[11px] tracking-[0.16em] ${dark ? "text-chalk/55" : "text-grease"}`}>
          {caption}
        </p>
      ) : null}
      <div className={`grid ${cols} gap-x-8`}>
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 80} className="rule border-t py-7">
            <Numeral {...it} size={size} dark={dark} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
