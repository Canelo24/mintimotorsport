type Props = {
  words: string[];
  /** Index of the word set solid in sodium; the rest are stroke-only. */
  solid?: number;
  className?: string;
};

/**
 * The speed strip: stroke-only display type running fast under the hero.
 * Energy, not information; hidden from assistive tech and static under
 * reduced motion.
 */
export function SpeedStrip({ words, solid = -1, className = "" }: Props) {
  const run = [0, 1, 2].flatMap(() => words);
  return (
    <div
      className={`overflow-hidden border-y border-chalk/10 bg-night py-4 text-chalk ${className}`}
      aria-hidden="true"
    >
      <div className="speed-track flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <span key={copy} className="flex shrink-0 items-baseline">
            {run.map((w, i) => (
              <span
                key={`${copy}-${i}`}
                className={`display-wide shrink-0 pr-8 text-[clamp(2.5rem,1.8rem+3.6vw,5.5rem)] leading-none ${
                  i % words.length === solid ? "text-sodium" : "outline-text opacity-60"
                }`}
              >
                {w}
                <span className="pl-8 text-sodium opacity-80">·</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
