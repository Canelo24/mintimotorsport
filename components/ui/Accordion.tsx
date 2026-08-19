"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

/**
 * FAQ accordion — native disclosure semantics, keyboard reachable,
 * height animation via grid-rows trick (transform/opacity-safe).
 */
export function Accordion({ items, dark }: { items: Item[]; dark?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className={`divide-y rule border-y ${dark ? "text-chalk" : "text-night"}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const btnId = `${base}-btn-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span
                    className={`data-mono text-data-s ${dark ? "text-sodium" : "text-murram"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lead font-semibold">{item.q}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`data-mono shrink-0 text-lead transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className={`max-w-2xl pb-6 pl-9 ${dark ? "text-chalk/75" : "text-night/75"}`}>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
