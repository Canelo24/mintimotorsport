/**
 * Visible factual placeholder. Renders {{TODO: …}} strings in an
 * unmistakably unfinished style so no invented value ever looks final
 * (brief §9). Strings that are not TODOs render as-is.
 */
export function Todo({ value, className = "" }: { value: string; className?: string }) {
  if (!value.startsWith("{{TODO")) {
    return <span className={className}>{value}</span>;
  }
  const label = value.replace(/^\{\{TODO:\s*/, "").replace(/\}\}$/, "");
  return (
    <span
      className={`data-mono border border-dashed border-current/50 px-1.5 py-0.5 text-[0.8em] opacity-70 ${className}`}
      title={`Awaiting client confirmation: ${label}`}
    >
      TBC — {label}
    </span>
  );
}
