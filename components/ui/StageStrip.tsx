import { site, stages } from "@/content/site";

/**
 * The roadbook data strip: stage code, distance, coordinates and the
 * programme name in one thin mono row. Carries the safari identity onto
 * every hero, including on mobile where the rail itself is hidden.
 */
export function StageStrip({
  path,
  dark = true,
  className = "",
}: {
  path: string;
  dark?: boolean;
  className?: string;
}) {
  const stage = stages[path];
  if (!stage) return null;
  const muted = dark ? "text-chalk/60" : "text-night/50";
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 border-t pt-4 ${
        dark ? "border-chalk/20" : "border-night/15"
      } ${className}`}
    >
      <p className={`data-mono text-[11px] tracking-[0.14em] ${muted}`}>
        {stage.code} · {stage.name} · {stage.km.toFixed(1)} KM
      </p>
      <p className={`data-mono hidden text-[11px] tracking-[0.14em] sm:block ${muted}`}>
        NAIROBI · {site.base.coords}
      </p>
      <p className="data-mono text-[11px] tracking-[0.14em] text-sodium">
        ARRIVE &amp; DRIVE
      </p>
    </div>
  );
}
