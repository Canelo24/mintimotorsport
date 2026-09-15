"use client";

import { usePathname } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { stages } from "@/content/site";

/** The route through the site, in order of the roadbook. */
const ORDER = ["/", "/the-drive", "/the-cars", "/the-team", "/heritage", "/journal", "/contact", "/enquire"];

/** Control positions, wide layout (viewBox 1000 x 420). */
const WIDE: [number, number][] = [
  [70, 330], [200, 205], [335, 295], [470, 140], [610, 255], [745, 110], [860, 215], [950, 85],
];

/** Control positions, tall layout for phones (viewBox 400 x 760). */
const TALL: [number, number][] = [
  [100, 60], [300, 150], [100, 240], [300, 330], [100, 420], [300, 510], [100, 600], [300, 690],
];

/** Catmull-Rom through the controls, emitted as cubic Béziers. */
function smoothPath(pts: [number, number][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

/** Faint contour lines behind the route: the map feel, nothing more. */
function contours(w: number, h: number, count: number) {
  const out: string[] = [];
  for (let k = 0; k < count; k++) {
    const y = (h / (count + 1)) * (k + 1);
    const a = 18 + (k % 3) * 9;
    out.push(
      `M0,${y} C${w * 0.22},${y - a} ${w * 0.38},${y + a} ${w * 0.55},${y - a / 2} S${w * 0.85},${y + a} ${w},${y - a / 3}`,
    );
  }
  return out;
}

type Props = {
  /** Highlighted control; defaults to the current route. */
  current?: string;
  dark?: boolean;
  /** Smaller type and no contour lines (footer). */
  compact?: boolean;
  className?: string;
};

function Map({
  pts,
  w,
  h,
  current,
  dark,
  compact,
  fontSize,
  className,
}: {
  pts: [number, number][];
  w: number;
  h: number;
  current: string;
  dark?: boolean;
  compact?: boolean;
  fontSize: number;
  className: string;
}) {
  const ink = dark ? "text-chalk" : "text-night";
  const accent = dark ? "var(--color-sodium)" : "var(--color-murram)";
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={`overflow-visible ${ink} ${className}`}
      role="img"
      aria-label="The route through this site: eight controls from the pitch to the finish"
    >
      {!compact
        ? contours(w, h, w > h ? 5 : 9).map((d, i) => (
            <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.1" />
          ))
        : null}
      {/* the route, drawn on entry */}
      <path
        d={smoothPath(pts)}
        pathLength={1}
        fill="none"
        stroke={accent}
        strokeWidth={compact ? 1.5 : 2}
        strokeLinecap="round"
        className="draw-path"
      />
      {ORDER.map((path, i) => {
        const st = stages[path];
        const [x, y] = pts[i];
        const isCurrent = path === current;
        const last = i === ORDER.length - 1;
        const wide = w > h;
        const above = wide ? i % 2 === 1 : false;
        const ty = above ? y - 16 : y + fontSize + 16;
        const anchor = wide ? (x < 140 ? "start" : x > w - 140 ? "end" : "middle") : "middle";
        const tx = x;
        return (
          <a key={path} href={path} className="draw-node" style={{ "--node-delay": `${900 + i * 180}ms` } as React.CSSProperties}>
            {isCurrent ? <circle cx={x} cy={y} r={compact ? 9 : 12} fill="none" stroke={accent} strokeWidth="1.5" /> : null}
            {last ? (
              <g>
                <circle cx={x} cy={y} r={compact ? 6 : 8} fill="none" stroke={accent} strokeWidth="2" />
                <circle cx={x} cy={y} r={compact ? 2.5 : 3.5} fill={accent} />
              </g>
            ) : (
              <circle cx={x} cy={y} r={compact ? 4 : 5.5} fill={isCurrent ? accent : "currentColor"} />
            )}
            <text
              x={tx}
              y={ty}
              textAnchor={anchor}
              fontSize={fontSize}
              fill="currentColor"
              className="data-mono"
              style={{ letterSpacing: "0.12em" }}
            >
              <tspan fontWeight="600" fill={isCurrent ? accent : "currentColor"}>{st.code}</tspan>
              <tspan opacity="0.6"> · {st.name}</tspan>
              {!compact && wide ? <tspan opacity="0.6"> · {st.km.toFixed(1)} KM</tspan> : null}
            </text>
          </a>
        );
      })}
      {!compact ? (
        <g className="data-mono" fill="currentColor" opacity="0.55" fontSize={fontSize - 1} style={{ letterSpacing: "0.14em" }}>
          {w > h ? (
            <>
              <text x={w - 12} y={h - 14} textAnchor="end">THE ROUTE THROUGH THIS SITE · 8 CONTROLS</text>
              <path d={`M16,${h - 22} h60`} stroke="currentColor" strokeWidth="1.5" />
              <path d={`M16,${h - 26} v8 M76,${h - 26} v8`} stroke="currentColor" strokeWidth="1.5" />
              <text x={16} y={h - 30}>0 · 10 KM</text>
            </>
          ) : (
            <text x={w / 2} y={h - 12} textAnchor="middle">THE ROUTE THROUGH THIS SITE</text>
          )}
        </g>
      ) : null}
    </svg>
  );
}

/**
 * The stage map: the site's own roadbook drawn as a route with eight
 * controls, one per page. Honest by construction: it maps this site, not a
 * rally, and says so on the sheet. Every control is a link.
 */
export function StageMap({ current, dark, compact, className = "" }: Props) {
  const pathname = usePathname();
  const cur = current ?? (pathname === "/journal" || pathname?.startsWith("/journal/") ? "/journal" : pathname ?? "/");
  return (
    <Reveal className={className}>
      <Map pts={WIDE} w={1000} h={420} current={cur} dark={dark} compact={compact} fontSize={compact ? 12 : 11} className="hidden w-full md:block" />
      <Map pts={TALL} w={400} h={760} current={cur} dark={dark} compact={compact} fontSize={12} className="w-full md:hidden" />
    </Reveal>
  );
}
