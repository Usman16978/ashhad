"use client";

import { useState } from "react";
import { faqs } from "@/lib/site";

export default function Faq({ items = faqs, className = "" }: { items?: typeof faqs; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={`divide-y divide-ivory-300 border-y border-ivory-300 ${className}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="group flex w-full items-center justify-between gap-5 py-5 text-left"
              >
                <span
                  className={`font-serif text-[19px] leading-snug transition-colors sm:text-[21px] ${
                    isOpen ? "text-forest-950" : "text-forest-950/85 group-hover:text-brass-600"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`relative grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-forest-800 bg-forest-900 text-ivory-50"
                      : "border-ivory-400 text-forest-800 group-hover:border-brass-500"
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className={`absolute h-3 w-px bg-current transition-opacity ${isOpen ? "opacity-100" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pr-10 text-[13.5px] leading-[1.85] text-ink-500">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
