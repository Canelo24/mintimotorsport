/**
 * Tulip junction glyphs, drawn for this site in the roadbook idiom:
 * ball = where you come from, arrow = where you go.
 * Order cycles per section; the finish control is always the last section.
 */

type TulipProps = { active?: boolean; className?: string };

const stroke = (active?: boolean) =>
  active ? "var(--color-sodium)" : "currentColor";

function Svg({ children, active, className }: TulipProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke={stroke(active)}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Start control: ball at the bottom, straight ahead. */
export function TulipStart(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="19" r="2.6" fill={stroke(p.active)} stroke="none" />
      <path d="M12 16.5 V6" />
      <path d="M8.5 9 L12 5 L15.5 9" />
    </Svg>
  );
}

/** 90° right at a T. */
export function TulipRight(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="7" cy="19" r="2.4" fill={stroke(p.active)} stroke="none" />
      <path d="M7 16.5 V9 Q7 7 9 7 H17" />
      <path d="M14 3.8 L18.2 7 L14 10.2" />
    </Svg>
  );
}

/** 90° left, keep on main track. */
export function TulipLeft(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="17" cy="19" r="2.4" fill={stroke(p.active)} stroke="none" />
      <path d="M17 16.5 V9 Q17 7 15 7 H7" />
      <path d="M10 3.8 L5.8 7 L10 10.2" />
    </Svg>
  );
}

/** Straight over crest — the double chevron. */
export function TulipCrest(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="20" r="2.4" fill={stroke(p.active)} stroke="none" />
      <path d="M12 17.5 V5.5" />
      <path d="M8.5 8.5 L12 5 L15.5 8.5" />
      <path d="M8.5 12.5 L12 9 L15.5 12.5" />
    </Svg>
  );
}

/** Chicane — S through the trees. */
export function TulipChicane(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="20" r="2.4" fill={stroke(p.active)} stroke="none" />
      <path d="M9 17.5 V14 Q9 12 11 12 H13 Q15 12 15 10 V6" />
      <path d="M11.8 8.8 L15 5.4 L18.2 8.8" />
    </Svg>
  );
}

/** Junction: keep left at the fork. */
export function TulipFork(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="20" r="2.4" fill={stroke(p.active)} stroke="none" />
      <path d="M12 17.5 V13 L7.5 8.5 V5" />
      <path d="M12 13 L16.5 8.5 V6.5" strokeDasharray="2 2.4" />
      <path d="M4.8 7.4 L7.5 4.4 L10.2 7.4" />
    </Svg>
  );
}

/** Finish control — the flying finish roundel. */
export function TulipFinish(p: TulipProps) {
  return (
    <Svg {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" fill={stroke(p.active)} stroke="none" />
      <path d="M12 0.8 V3.6 M12 20.4 V23.2" />
    </Svg>
  );
}

export const tulipCycle = [
  TulipStart,
  TulipRight,
  TulipCrest,
  TulipLeft,
  TulipChicane,
  TulipFork,
];
