import Image from "next/image";
import Link from "next/link";
import { StageMap } from "@/components/roadbook/StageMap";
import { site } from "@/content/site";
import { NewsletterForm } from "./NewsletterForm";

const label = "display-cond mb-4 text-[13px] text-chalk/55";
const navLink = "display-cond inline-block py-2 text-[13px] text-chalk/85 transition-colors hover:text-sodium";
const legalLink = "display-cond inline-block py-2 text-[12px] text-chalk/60 transition-colors hover:text-sodium";

export function Footer() {
  const tel = `tel:${site.contact.phone.replace(/\s/g, "")}`;
  return (
    <footer className="bg-night text-chalk">
      {/* The route through the site, as the roadbook draws it */}
      <div className="border-b rule">
        <div className="mx-auto max-w-[84rem] px-5 py-12 sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
          <p className="display-cond text-[13px] tracking-[0.14em] text-sodium">THE ROUTE · 8 CONTROLS</p>
          <StageMap dark compact className="mt-6 max-w-4xl" />
        </div>
      </div>
      <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            {/* The crest sits directly on the footer ground */}
            <Image
              src="/brand/minti-crest.png"
              alt="Minti Motorsport, Preserving Heritage"
              width={826}
              height={549}
              className="mb-6 w-60 sm:w-72"
            />
            <p className="editorial max-w-sm text-chalk/80">{site.tagline}</p>
            <div className="mt-8">
              <p className={label}>Registry of interest</p>
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className={label}>Find your way</p>
            <ul className="space-y-1">
              {[{ href: "/", label: "Home" }, ...site.nav, { href: "/enquire", label: site.cta.primary }].map(
                (item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={navLink}>
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <p className={label}>Find us</p>
            <address className="not-italic">
              <p className="data-mono text-data text-chalk/85">
                {site.base.address}
                <br />
                Nairobi, Kenya
                <br />
                <span className="text-sodium">{site.base.coords}</span>
              </p>
              <p className="mt-3">
                <a href={`mailto:${site.contact.email}`} className="data-mono inline-block py-1 text-data text-chalk/70 hover:text-sodium">
                  {site.contact.email}
                </a>
              </p>
              <p>
                <a href={tel} className="data-mono inline-block py-1 text-data text-chalk/70 hover:text-sodium">
                  {site.contact.phone}
                </a>
              </p>
            </address>
            <p className={`${label} mt-8`}>Legal</p>
            <ul className="space-y-0.5">
              <li><Link href="/privacy" className={legalLink}>Privacy</Link></li>
              <li><Link href="/terms" className={legalLink}>Terms</Link></li>
              <li><Link href="/cookies" className={legalLink}>Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t rule pt-6 sm:flex-row">
          <p className="data-mono text-data-s text-chalk/55">
            © {new Date().getFullYear()} Minti Motorsport. Registered in the United
            Kingdom. Operational base: Nairobi, Kenya.
          </p>
          <p className="data-mono text-data-s text-chalk/55">
            Family-run since {site.founded}
          </p>
        </div>
      </div>
    </footer>
  );
}
