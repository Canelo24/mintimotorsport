"use client";

import { useState, useTransition } from "react";
import { subscribeNewsletter } from "@/app/actions";
import { events, track } from "@/lib/analytics";

/** One-field registry of interest — for buyers two years out (brief §6). */
export function NewsletterForm() {
  const [state, setState] = useState<"idle" | "done" | "error">("idle");
  const [error, setError] = useState<string>();
  const [pending, startTransition] = useTransition();

  if (state === "done") {
    return (
      <p className="data-mono text-data text-sodium" role="status">
        Noted. You&apos;re on the list — we write rarely and only when there&apos;s
        something worth reading.
      </p>
    );
  }

  return (
    <form
      action={(fd) =>
        startTransition(async () => {
          const res = await subscribeNewsletter(fd);
          if (res.ok) {
            track(events.newsletter);
            setState("done");
          } else {
            setError(res.error);
            setState("error");
          }
        })
      }
      className="flex max-w-md gap-0"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        aria-describedby={state === "error" ? "newsletter-error" : undefined}
        className="data-mono w-full border border-chalk/30 bg-transparent px-4 py-3 text-data text-chalk placeholder:text-grease focus-visible:border-sodium"
      />
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        type="submit"
        disabled={pending}
        className="display-cond shrink-0 border border-l-0 border-chalk/30 px-5 text-data-s tracking-[0.14em] text-chalk transition-colors hover:border-sodium hover:text-sodium disabled:opacity-50"
      >
        {pending ? "…" : "Join"}
      </button>
      {state === "error" ? (
        <p id="newsletter-error" role="alert" className="data-mono ml-3 self-center text-data-s text-sodium">
          {error}
        </p>
      ) : null}
    </form>
  );
}
