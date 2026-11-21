"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown, WhatsApp } from "./Icons";
import { site, whatsappLink } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const subjects = [
  "Admissions & free trial",
  "Fees and payment plans",
  "Course information",
  "Technical support",
  "Feedback or complaint",
  "Something else",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.message ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex min-h-[420px] flex-col items-center justify-center p-8 text-center sm:p-10">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-forest-200 bg-forest-50 text-forest-700">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="display-3 mt-6">Message received.</h3>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-ink-500">
          Thank you for getting in touch. A member of our team will reply within one working day,
          in shaa Allah. For anything urgent, WhatsApp is the fastest way to reach us.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <WhatsApp className="h-4 w-4" />
            Chat on WhatsApp
          </a>
          <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline">
            Send another message
          </button>
        </div>
        <p className="mt-6 text-[11px] text-ink-400">
          Or email us directly at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-forest-800">
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <h2 className="font-serif text-2xl text-forest-950">Send us a message</h2>
      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
        Tell us what you need. We usually reply within one working day.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">
            Your name <span className="text-brass-600">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Full name" className="field" />
        </div>
        <div>
          <label htmlFor="contactEmail" className="label">
            Email address <span className="text-brass-600">*</span>
          </label>
          <input
            id="contactEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="contactPhone" className="label">
            Phone / WhatsApp
          </label>
          <input
            id="contactPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="subject" className="label">
            Subject <span className="text-brass-600">*</span>
          </label>
          <div className="relative">
            <select id="subject" name="subject" required defaultValue="" className="field appearance-none pr-10">
              <option value="" disabled>
                What is this about?
              </option>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contactMessage" className="label">
            Message <span className="text-brass-600">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            required
            rows={5}
            placeholder="How can we help?"
            className="field resize-none"
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" ? (
        <div className="mt-5 rounded-[5px] border border-red-200 bg-red-50 px-4 py-3 text-[12.5px] leading-relaxed text-red-700">
          {error} You can also{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
            message us on WhatsApp
          </a>
          .
        </div>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-6 w-full">
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory-100/40 border-t-ivory-50" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
