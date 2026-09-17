import { site, stages } from "@/content/site";

/**
 * The roadbook data strip: stage code, distance, coordinates and the
 * programme name in one thin mono row. Used on the light utility heros
 * (contact, journal), which carry no HUD.
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
  const muted = dark ? "text-chalk/70" : "text-night/70";
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 border-t pt-4 ${
        dark ? "border-chalk/20" : "border-night/15"
      } ${className}`}
    >
      <p className={`data-mono text-[12px] font-medium tracking-[0.1em] ${muted}`}>
        {stage.code} · {stage.name} · {stage.km.toFixed(1)} KM
      </p>
      <p className={`data-mono hidden text-[12px] font-medium tracking-[0.1em] sm:block ${muted}`}>
        NAIROBI · {site.base.coords}
      </p>
      <p className={`data-mono text-[12px] font-medium tracking-[0.1em] ${dark ? "text-sodium" : "text-murram"}`}>
        ARRIVE &amp; DRIVE
      </p>
    </div>
  );
}
