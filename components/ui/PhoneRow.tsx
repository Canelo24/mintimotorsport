import { site } from "@/content/site";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 16"
      className={`shrink-0 text-sodium transition-transform duration-200 group-hover:translate-x-1.5 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 8 H30" />
      <path d="M23 2 L30 8 L23 14" />
    </svg>
  );
}

/**
 * "Names you can phone", literally: the official line as one full-width
 * tappable row, the number in the display face with the arrow beside it,
 * then WhatsApp in the rubric register.
 */
export function PhoneRow({ dark, className = "" }: { dark?: boolean; className?: string }) {
  const tel = `tel:${site.contact.phone.replace(/\s/g, "")}`;
  const wa = site.contact.whatsapp ? `https://wa.me/${site.contact.whatsapp}` : null;
  const text = dark ? "text-chalk" : "text-night";
  const muted = dark ? "text-chalk/60" : "text-murram";
  return (
    <div className={`rule border-y ${className}`}>
      <a href={tel} className={`group flex flex-col gap-3 py-5 ${text}`}>
        <span className={`data-mono text-[12px] font-medium tracking-[0.1em] ${muted}`}>
          {site.contact.officialLabel.toUpperCase()}
        </span>
        <span className="display-wide flex items-center gap-5 text-[clamp(2.25rem,1.5rem+3vw,4rem)] leading-none">
          {site.contact.phone}
          <Arrow className="h-5 w-10 sm:h-6 sm:w-12" />
        </span>
      </a>
      {wa ? (
        <a href={wa} className={`group flex items-center justify-between gap-6 border-t rule py-4 ${text}`}>
          <span className={`data-mono text-[12px] font-medium tracking-[0.1em] ${muted}`}>WHATSAPP</span>
          <span className="display-cond flex items-center gap-4 text-[15px]">
            Message the team
            <Arrow className="h-3.5 w-7" />
          </span>
        </a>
      ) : null}
    </div>
  );
}
