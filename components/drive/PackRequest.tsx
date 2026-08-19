"use client";

import { useState, useTransition } from "react";
import { requestPack } from "@/app/actions";
import { events, track } from "@/lib/analytics";

/** Email-gated "request the brief" — the strong-intent secondary conversion. */
export function PackRequest({ title, body }: { title: string; body: string }) {
  const [state, setState] = useState<"idle" | "done" | "error">("idle");
  const [error, setError] = useState<string>();
  const [pending, startTransition] = useTransition();

  return (
    <div className="border rule bg-night-2 p-8">
      <p className="display-wide text-h3 text-chalk">{title}</p>
      <p className="mt-3 max-w-xl text-data text-chalk/75">{body}</p>
      {state === "done" ? (
        <p className="data-mono mt-6 text-data text-sodium" role="status">
          On its way. Check your inbox — including the folder nobody checks.
        </p>
      ) : (
        <form
          action={(fd) =>
            startTransition(async () => {
              const res = await requestPack(fd);
              if (res.ok) {
                track(events.packRequested);
                setState("done");
              } else {
                setError(res.error);
                setState("error");
              }
            })
          }
          className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
        >
          <label htmlFor="pack-email" className="sr-only">
            Email address
          </label>
          <input
            id="pack-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            aria-describedby={state === "error" ? "pack-error" : undefined}
            className="data-mono w-full border border-chalk/30 bg-transparent px-4 py-3 text-data text-chalk placeholder:text-grease focus-visible:border-sodium"
          />
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <button
            type="submit"
            disabled={pending}
            className="display-cond shrink-0 bg-sodium px-6 py-3 text-data-s tracking-[0.16em] text-night transition-colors hover:bg-chalk disabled:opacity-50 sm:border-l-0"
          >
            {pending ? "Sending…" : "Request the brief"}
          </button>
        </form>
      )}
      {state === "error" ? (
        <p id="pack-error" role="alert" className="data-mono mt-3 text-data-s text-sodium">
          {error}
        </p>
      ) : null}
    </div>
  );
}
