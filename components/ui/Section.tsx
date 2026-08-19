import type { ReactNode } from "react";

type SectionProps = {
  /** Roadbook label — marks this section on the rail. Omit for untracked bands. */
  roadbook?: string;
  id?: string;
  dark?: boolean;
  className?: string;
  children: ReactNode;
};

/** Page band. `roadbook` registers the section with the rail. */
export function Section({ roadbook, id, dark, className = "", children }: SectionProps) {
  return (
    <section
      id={id}
      data-roadbook={roadbook}
      className={`${dark ? "bg-night text-chalk" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type HeadingProps = {
  /** Roadbook-instruction eyebrow, e.g. "SS1/03 — THE CAR". */
  instruction: string;
  title: string;
  lead?: string;
  dark?: boolean;
  className?: string;
};

/** Section heading in the roadbook voice: mono instruction, wide display title. */
export function SectionHeading({ instruction, title, lead, dark, className = "" }: HeadingProps) {
  return (
    <header className={`max-w-3xl ${className}`}>
      <p className={`data-mono text-data-s font-medium ${dark ? "text-sodium" : "text-murram"}`}>
        {instruction}
      </p>
      <h2 className="display-wide mt-3 text-h2">{title}</h2>
      {lead ? (
        <p className={`mt-5 text-lead ${dark ? "text-chalk/80" : "text-night/80"}`}>{lead}</p>
      ) : null}
    </header>
  );
}
