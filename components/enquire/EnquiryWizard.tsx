"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { submitEnquiry } from "@/app/actions";
import { events, track } from "@/lib/analytics";
import { site } from "@/content/site";
import {
  budgetOptions,
  enquirySchema,
  eventOptions,
  experienceOptions,
  purposeOptions,
} from "@/lib/schemas";

/** Client-side schema: everything except the server-side timing field. */
const formSchema = enquirySchema.omit({ elapsedMs: true });
type FormValues = z.infer<typeof formSchema>;

const STORAGE_KEY = "minti-enquiry";

type ChoiceStep = {
  kind: "choice";
  field: "purpose" | "event" | "experience" | "budget";
  tc: string;
  title: string;
  hint?: string;
  optional?: boolean;
  options: readonly { value: string; label: string; detail: string }[];
};

const steps: ChoiceStep[] = [
  {
    kind: "choice",
    field: "purpose",
    tc: "TC1",
    title: "What are you here for?",
    options: purposeOptions,
  },
  {
    kind: "choice",
    field: "event",
    tc: "TC2",
    title: "Which event, and when?",
    options: eventOptions,
  },
  {
    kind: "choice",
    field: "experience",
    tc: "TC3",
    title: "Your experience",
    hint: "There is no wrong answer here — it changes the programme, not the welcome.",
    options: experienceOptions,
  },
  {
    kind: "choice",
    field: "budget",
    tc: "TC4",
    title: "Indicative budget",
    hint: "Indicative and confidential. It helps us propose the right programme first time — nothing is priced or promised from this.",
    optional: true,
    options: budgetOptions,
  },
];

const CONTACT_STEP = steps.length; // TC5
const TOTAL_TCS = steps.length + 1;

export function EnquiryWizard() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<"form" | "booking" | "done">("form");
  const [direction, setDirection] = useState<"fwd" | "back">("fwd");
  const [serverError, setServerError] = useState<string>();
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef<number>(0);
  const restored = useRef(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: { website: "" },
  });

  const values = watch();

  // Restore progress from sessionStorage; a refresh never loses answers.
  useEffect(() => {
    startedAt.current = Date.now();
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { step?: number; values?: Partial<FormValues> };
        Object.entries(saved.values ?? {}).forEach(([k, v]) => {
          if (v !== undefined && k !== "consent")
            setValue(k as keyof FormValues, v as never);
        });
        if (typeof saved.step === "number") setStep(Math.min(saved.step, CONTACT_STEP));
      }
    } catch {
      // corrupted storage is not worth breaking the form over
    }
    restored.current = true;
    track(events.enquiryStarted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist on every change.
  useEffect(() => {
    if (!restored.current) return;
    try {
      const persistable: Partial<FormValues> = { ...values };
      delete persistable.website; // never persist the honeypot
      delete persistable.consent; // consent must be re-given, not restored
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ step, values: persistable }));
    } catch {
      // storage full/blocked — continue without persistence
    }
  }, [values, step]);

  const go = (next: number, dir: "fwd" | "back") => {
    setDirection(dir);
    setStep(next);
    setServerError(undefined);
  };

  const advanceFromChoice = async (s: ChoiceStep, index: number) => {
    if (!s.optional) {
      const ok = await trigger(s.field);
      if (!ok) return;
    }
    track(events.enquiryStep, { step: s.tc });
    go(index + 1, "fwd");
  };

  const onSubmit = handleSubmit(
    async (data) => {
      setSubmitting(true);
      setServerError(undefined);
      const res = await submitEnquiry({
        ...data,
        elapsedMs: Date.now() - startedAt.current,
      });
      setSubmitting(false);
      if (res.ok) {
        track(events.enquirySubmitted);
        sessionStorage.removeItem(STORAGE_KEY);
        setPhase(site.bookingUrl ? "booking" : "done");
        window.scrollTo({ top: 0 });
      } else {
        setServerError(res.error ?? "Something went wrong — try again, or email us directly.");
      }
    },
    () => setServerError(undefined),
  );

  /* ---------------- confirmation states ---------------- */

  if (phase === "done" || phase === "booking") {
    return (
      <div className="border rule bg-night-2 p-8 sm:p-12" role="status">
        <p className="data-mono text-data font-medium text-sodium">FINISH CONTROL — TIME CARD STAMPED</p>
        <h2 className="display-wide mt-4 text-h2 text-chalk">Received. Properly.</h2>
        <div className="mt-6 max-w-xl space-y-4 text-body text-chalk/80">
          <p>
            Your enquiry goes straight to <strong className="text-chalk">Joey Ghose</strong>, who
            reads every one personally.
          </p>
          <p>
            You&apos;ll hear back within{" "}
            <span className="data-mono text-sodium">two working days</span> — from a named person,
            not a mailbox.
          </p>
        </div>

        {phase === "booking" && site.bookingUrl ? (
          <div className="mt-10 border-t rule pt-8">
            <h3 className="display-wide text-h3 text-chalk">Skip the queue</h3>
            <p className="mt-2 max-w-xl text-data text-chalk/70">
              If you&apos;d rather put a time in the diary now, book the call directly. Entirely
              optional — the reply comes either way.
            </p>
            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track(events.callBooking)}
                className="display-cond bg-sodium px-6 py-3.5 text-data-s tracking-[0.16em] text-night transition-colors hover:bg-chalk"
              >
                Book the call
              </a>
              <button
                type="button"
                onClick={() => setPhase("done")}
                className="display-cond border border-chalk/40 px-6 py-3.5 text-data-s tracking-[0.16em] text-chalk hover:border-sodium hover:text-sodium"
              >
                No need — I&apos;ll wait for the reply
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  /* ---------------- wizard ---------------- */

  const isContact = step === CONTACT_STEP;
  const current = isContact ? null : steps[step];
  const progress = (step + 1) / (TOTAL_TCS + 0.25);

  return (
    <form onSubmit={onSubmit} noValidate>
      {/* Roadbook progress */}
      <div className="mb-10">
        <div className="flex items-baseline justify-between">
          <p className="data-mono text-data font-medium text-sodium">
            {isContact ? "TC5" : steps[step].tc} / TC{TOTAL_TCS}
          </p>
          <p className="data-mono text-data-s text-grease">
            {(progress * 8.8).toFixed(1)} / 8.8 KM
          </p>
        </div>
        <div className="mt-3 h-[2px] w-full bg-chalk/15">
          <div
            className="h-full bg-sodium transition-transform duration-500"
            style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div
        key={step}
        className="wizard-step"
        data-direction={direction}
        style={{ minHeight: "20rem" }}
      >
        {current ? (
          <fieldset>
            <legend className="display-wide text-h2 text-chalk">{current.title}</legend>
            {current.hint ? (
              <p className="mt-3 max-w-xl text-data text-chalk/65">{current.hint}</p>
            ) : null}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {current.options.map((opt) => {
                const selected = values[current.field] === opt.value;
                return (
                  <label
                    key={opt.value}
                    className={`cursor-pointer border p-5 transition-colors ${
                      selected
                        ? "border-sodium bg-night-2"
                        : "rule bg-night-2/50 hover:border-chalk/50"
                    }`}
                  >
                    <input
                      type="radio"
                      value={opt.value}
                      className="sr-only"
                      {...register(current.field)}
                    />
                    <span className="flex items-start justify-between gap-3">
                      <span className="text-lead font-semibold text-chalk">{opt.label}</span>
                      <span
                        aria-hidden="true"
                        className={`data-mono mt-1 text-data ${selected ? "text-sodium" : "text-grease"}`}
                      >
                        {selected ? "◉" : "○"}
                      </span>
                    </span>
                    {opt.detail ? (
                      <span className="mt-1.5 block text-data text-chalk/60">{opt.detail}</span>
                    ) : null}
                  </label>
                );
              })}
            </div>
            {errors[current.field] ? (
              <p role="alert" className="data-mono mt-4 text-data-s text-sodium">
                Pick one to carry on — you can change it on the call.
              </p>
            ) : null}
          </fieldset>
        ) : (
          <fieldset>
            <legend className="display-wide text-h2 text-chalk">Where we reach you</legend>
            <p className="mt-3 max-w-xl text-data text-chalk/65">
              Email and phone are all we need. Everything else helps the first call start further
              down the road.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Name" optional error={errors.name?.message}>
                <input className={inputCls} autoComplete="name" {...register("name")} />
              </Field>
              <Field label="Country" optional error={errors.country?.message}>
                <input className={inputCls} autoComplete="country-name" {...register("country")} />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  className={inputCls}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </Field>
              <Field label="Phone, with country code" error={errors.phone?.message}>
                <input
                  type="tel"
                  className={inputCls}
                  autoComplete="tel"
                  placeholder="+44 …"
                  aria-invalid={Boolean(errors.phone)}
                  {...register("phone")}
                />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Tell us what you have in mind" optional error={errors.message?.message}>
                <textarea rows={4} className={inputCls} {...register("message")} />
              </Field>
            </div>
            <label className="mt-6 flex items-start gap-3 text-data text-chalk/75">
              <input type="checkbox" className="mt-1 accent-[#e1962e]" {...register("consent")} />
              <span>
                Use these details to respond to this enquiry. Nothing else, no list, no nonsense.
                See the <a href="/privacy" className="underline underline-offset-2">privacy note</a>.
              </span>
            </label>
            {errors.consent ? (
              <p role="alert" className="data-mono mt-2 text-data-s text-sodium">
                {errors.consent.message}
              </p>
            ) : null}
          </fieldset>
        )}
      </div>

      {serverError ? (
        <p role="alert" className="data-mono mt-6 border border-sodium/60 p-4 text-data text-sodium">
          {serverError}
        </p>
      ) : null}

      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => go(step - 1, "back")}
            className="display-cond border border-chalk/30 px-6 py-3.5 text-data-s tracking-[0.16em] text-chalk/80 transition-colors hover:border-sodium hover:text-sodium"
          >
            ← Back
          </button>
        ) : (
          <span />
        )}
        {isContact ? (
          <button
            type="submit"
            disabled={submitting}
            className="display-cond bg-sodium px-8 py-4 text-data tracking-[0.16em] text-night transition-colors hover:bg-chalk disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send it in"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => advanceFromChoice(steps[step], step)}
            className="display-cond bg-sodium px-8 py-4 text-data tracking-[0.16em] text-night transition-colors hover:bg-chalk"
          >
            Continue →
          </button>
        )}
      </div>
    </form>
  );
}

const inputCls =
  "data-mono w-full border border-chalk/30 bg-transparent px-4 py-3 text-data text-chalk placeholder:text-grease focus-visible:border-sodium aria-[invalid=true]:border-sodium";

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="display-cond mb-2 block text-[11px] tracking-[0.18em] text-chalk/70">
        {label}
        {optional ? <span className="ml-2 text-grease">OPTIONAL</span> : null}
      </span>
      {children}
      {error ? (
        <span role="alert" className="data-mono mt-1.5 block text-data-s text-sodium">
          {error}
        </span>
      ) : null}
    </label>
  );
}
