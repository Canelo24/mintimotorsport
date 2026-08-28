import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Todo } from "@/components/ui/Todo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-night text-chalk">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:pl-[calc(var(--spacing-rail)+2rem)]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/minti-logo-black.jpg"
              alt="Minti Motorsport — Preserving Heritage"
              width={112}
              height={112}
              className="mb-5"
            />
            <p className="display-wide text-h3">
              MINTI<span className="text-sodium">·</span>MOTORSPORT
            </p>
            <p className="display-cond mt-2 text-data-s tracking-[0.24em] text-sodium">
              Preserving Heritage
            </p>
            <p className="mt-4 max-w-sm text-data text-chalk/70">
              {site.tagline}
            </p>
            <div className="mt-8">
              <p className="display-cond mb-3 text-data-s tracking-[0.16em] text-grease">
                Registry of interest
              </p>
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="display-cond mb-4 text-data-s tracking-[0.16em] text-grease">
              Find your way
            </p>
            <ul className="space-y-2.5">
              {[{ href: "/", label: "Home" }, ...site.nav, { href: "/enquire", label: site.cta.primary }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-data text-chalk/80 transition-colors hover:text-sodium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <p className="display-cond mb-4 text-data-s tracking-[0.16em] text-grease">
              Find us
            </p>
            <address className="not-italic">
              <p className="data-mono text-data text-chalk/80">
                Nairobi, Kenya
                <br />
                <span className="text-sodium">{site.base.coords}</span>
              </p>
              <p className="mt-3 text-data text-chalk/60">
                Workshop address: <Todo value={site.base.coordsTodo} />
              </p>
              <p className="mt-3 text-data text-chalk/60">
                {site.contact.email ? (
                  <a href={`mailto:${site.contact.email}`} className="hover:text-sodium">
                    {site.contact.email}
                  </a>
                ) : (
                  <Todo value={site.contact.emailTodo} />
                )}
              </p>
              <p className="mt-1 text-data text-chalk/60">
                {site.contact.phone ? (
                  <a href={`tel:${site.contact.phone}`} className="hover:text-sodium">
                    {site.contact.phone}
                  </a>
                ) : (
                  <Todo value={site.contact.phoneTodo} />
                )}
              </p>
            </address>
            <p className="display-cond mb-2 mt-8 text-data-s tracking-[0.16em] text-grease">
              Legal
            </p>
            <ul className="space-y-1.5">
              <li><Link href="/privacy" className="text-data-s text-chalk/60 hover:text-sodium">Privacy</Link></li>
              <li><Link href="/terms" className="text-data-s text-chalk/60 hover:text-sodium">Terms</Link></li>
              <li><Link href="/cookies" className="text-data-s text-chalk/60 hover:text-sodium">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t rule pt-6 sm:flex-row">
          <p className="data-mono text-data-s text-grease">
            © {new Date().getFullYear()} Minti Motorsport. Registered in the United
            Kingdom. Operational base: Nairobi, Kenya.
          </p>
          <p className="data-mono text-data-s text-grease">
            Family-run since <Todo value="{{TODO: founding year}}" />
          </p>
        </div>
      </div>
    </footer>
  );
}
