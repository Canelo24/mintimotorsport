import { site, stages } from "@/content/site";

/**
 * Hero HUD: crop marks in the four corners and four readouts that boot on
 * first paint (stage code and distance, the base coordinates, the programme,
 * the event). Decorative and hidden from assistive tech; the same facts are
 * in the page text.
 */
export function Hud({ path, className = "" }: { path: string; className?: string }) {
  const stage = stages[path];
  if (!stage) return null;
  const mark = "absolute h-5 w-5 border-chalk/50";
  const readout = "hud-boot data-mono absolute text-[12px] font-medium tracking-[0.1em]";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-[1] ${className}`}>
      <span className={`${mark} left-5 top-24 border-l border-t sm:left-8`} />
      <span className={`${mark} right-5 top-24 border-r border-t sm:right-8`} />
      <span className={`${mark} bottom-4 left-5 border-b border-l sm:left-8`} />
      <span className={`${mark} bottom-4 right-5 border-b border-r sm:right-8`} />
      <p className={`${readout} left-5 top-[7.4rem] text-chalk/85 sm:left-8`}>
        {stage.code} · {stage.name} · {stage.km.toFixed(1)} KM
      </p>
      <p
        className={`${readout} right-5 top-[7.4rem] hidden text-chalk/85 sm:right-8 sm:block`}
        style={{ "--boot-delay": "220ms" } as React.CSSProperties}
      >
        {site.base.city.toUpperCase()} · {site.base.coords}
      </p>
      <p
        className={`${readout} bottom-5 left-12 text-sodium sm:left-16`}
        style={{ "--boot-delay": "380ms" } as React.CSSProperties}
      >
        ARRIVE &amp; DRIVE
      </p>
      <p
        className={`${readout} bottom-5 right-12 hidden text-chalk/85 sm:right-16 sm:block`}
        style={{ "--boot-delay": "520ms" } as React.CSSProperties}
      >
        EAST AFRICAN SAFARI CLASSIC 2027
      </p>
    </div>
  );
}
