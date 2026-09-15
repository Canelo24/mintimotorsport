/**
 * The scrutineering stamp: a slow-turning roundel of mono text around a
 * tulip. Decoration in the safari idiom, never a claim.
 */
export function Stamp({
  text = "MINTI MOTORSPORT · ARRIVE & DRIVE · NAIROBI · ",
  id = "stamp",
  className = "",
}: {
  text?: string;
  id?: string;
  className?: string;
}) {
  const ring = `${id}-ring`;
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <path id={ring} d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
      </defs>
      <circle cx="100" cy="100" r="97" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <g className="spin-slow">
        <text className="data-mono" fontSize="12.5" fill="currentColor" style={{ letterSpacing: "0.18em" }}>
          <textPath href={`#${ring}`} textLength="436" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </g>
      {/* tulip: straight over crest */}
      <g transform="translate(76 76) scale(2)" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="20" r="2.2" fill="currentColor" stroke="none" />
        <path d="M12 17.5 V5.5" />
        <path d="M8.5 8.5 L12 5 L15.5 8.5" />
        <path d="M8.5 12.5 L12 9 L15.5 12.5" />
      </g>
    </svg>
  );
}
