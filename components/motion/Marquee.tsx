type MarqueeProps = {
  text: string;
};

/**
 * The single running text band (brief §7 — use once per site).
 * CSS animation; static under prefers-reduced-motion.
 */
export function Marquee({ text }: MarqueeProps) {
  const line = `${text} · `;
  return (
    <div
      className="overflow-hidden border-y rule bg-murram py-4 text-feshfesh"
      aria-label={text}
      role="marquee"
    >
      <div className="marquee-track flex w-max whitespace-nowrap">
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1}
            className="display-cond shrink-0 pr-2 text-lead"
          >
            {line.repeat(4)}
          </span>
        ))}
      </div>
    </div>
  );
}
