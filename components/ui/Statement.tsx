import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

type StatementProps = {
  children: ReactNode;
  eyebrow?: string;
  cite?: string;
  dark?: boolean;
  /** Hairlines above and below. */
  rule?: boolean;
  /** Give the sentence a whole screen: vertically centred, min 60svh. */
  screen?: boolean;
  className?: string;
};

/** One sentence, set large, with air around it. The pull-quote as a section. */
export function Statement({
  children,
  eyebrow,
  cite,
  dark,
  rule = true,
  screen,
  className = "",
}: StatementProps) {
  return (
    <Reveal
      className={`${screen ? "flex min-h-[60svh] flex-col justify-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className={`data-mono mb-8 text-[11px] tracking-[0.16em] ${dark ? "text-sodium" : "text-murram"}`}>
          {eyebrow}
        </p>
      ) : null}
      <div className={rule ? "rule border-y py-8 sm:py-10" : ""}>
        <p className={`statement ${dark ? "text-chalk" : "text-night"}`}>{children}</p>
        {cite ? (
          <p className={`data-mono mt-6 text-[11px] tracking-[0.16em] ${dark ? "text-chalk/55" : "text-grease"}`}>
            {cite}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
