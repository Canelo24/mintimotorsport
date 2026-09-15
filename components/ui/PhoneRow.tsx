import { site } from "@/content/site";

/**
 * "Names you can phone", literally: the official line as one full-width
 * tappable row, phone and WhatsApp, sized to fit a 350px measure.
 */
export function PhoneRow({ dark, className = "" }: { dark?: boolean; className?: string }) {
  const tel = `tel:${site.contact.phone.replace(/\s/g, "")}`;
  const wa = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}` : null;
  const border = "rule border-y";
  const text = dark ? "text-chalk" : "text-night";
  const muted = dark ? "text-chalk/55" : "text-grease";
  return (
    <div className={`${border} ${className}`}>
      <a
        href={tel}
        className={`group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-5 ${text}`}
      >
        <span className={`data-mono text-[11px] tracking-[0.16em] ${muted}`}>
          {site.contact.officialLabel.toUpperCase()}
        </span>
        <span className="data-mono flex items-baseline gap-4 text-h3 font-semibold">
          {site.contact.phone}
          <span
            aria-hidden="true"
            className="text-sodium transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </a>
      {wa ? (
        <a
          href={wa}
          className={`group flex items-baseline justify-between gap-6 border-t rule py-4 ${text}`}
        >
          <span className={`data-mono text-[11px] tracking-[0.16em] ${muted}`}>WHATSAPP</span>
          <span className="data-mono flex items-baseline gap-4 text-data font-semibold">
            Message the team
            <span aria-hidden="true" className="text-sodium transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </span>
        </a>
      ) : null}
    </div>
  );
}
