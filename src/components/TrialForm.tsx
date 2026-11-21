"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown, WhatsApp } from "./Icons";
import { countries, courses, site, timeSlots, whatsappLink } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const ageGroups = ["Under 5", "5 – 8 years", "9 – 12 years", "13 – 17 years", "18+ / Adult"];

export default function TrialForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [reference, setReference] = useState("");
  const [course, setCourse] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setName(String(data.studentName ?? ""));
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        reference?: string;
        firstName?: string;
        course?: string;
        preferredTime?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.message ?? "Something went wrong. Please try again.");
      }
      setReference(json.reference ?? "");
      setCourse(json.course ?? "");
      setPreferredTime(json.preferredTime ?? "");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card overflow-hidden">
        <div className="border-b border-forest-200 bg-forest-50 px-6 py-8 text-center sm:px-10 sm:py-10">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-forest-300 bg-white text-forest-700">
            <Check className="h-8 w-8" />
          </div>
          <p className="eyebrow mt-5 justify-center">Request received</p>
          <h3 className="display-3 mt-3">
            Your 3 free trial classes are confirmed{name ? `, ${name.split(" ")[0]}` : ""}!
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-[13.5px] leading-relaxed text-ink-500">
            JazakAllahu khairan. A confirmation message has been sent to your email and our admissions
            team will message you on WhatsApp within one working day to confirm your teacher and
            class time — in shaa Allah.
          </p>
        </div>

        <div className="px-6 py-6 sm:px-10">
          <div className="grid gap-3 rounded-[10px] border border-ivory-300 bg-ivory-50 p-5 text-[12px] sm:grid-cols-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">Course</p>
              <p className="mt-1 font-serif text-[16px] leading-tight text-forest-950">{course || "—"}</p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">Preferred time</p>
              <p className="mt-1 font-serif text-[16px] leading-tight text-forest-950">{preferredTime || "—"}</p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">Reference</p>
              <p className="mt-1 font-serif text-[16px] leading-tight text-brass-700">{reference || "—"}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink(
                `Assalamu alaikum, I have just submitted a free trial request${reference ? ` (${reference})` : ""} for ${name || "my child"}. Please confirm my 3 free classes.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsApp className="h-4 w-4" />
              Confirm on WhatsApp
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setName("");
                setReference("");
                setCourse("");
                setPreferredTime("");
              }}
              className="btn btn-outline"
            >
              Submit another request
            </button>
          </div>

          <div className="mt-6 rounded-[8px] border border-brass-400/30 bg-brass-50/60 px-5 py-4 text-center">
            <p className="font-serif text-[17px] text-forest-950">3 complete lessons · 100% free · no card required</p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-500">
              Questions? Call{" "}
              <a href={`tel:${site.phoneHref}`} className="font-semibold text-forest-800">
                {site.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-forest-800">
                {site.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl text-forest-950">Book your free trial</h2>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">
            Three complete lessons, completely free. No card required.
          </p>
        </div>
        <span className="hidden shrink-0 rounded-full border border-brass-400/40 bg-brass-50 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-brass-700 sm:inline-block">
          3 classes free
        </span>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="studentName" className="label">
            Student name <span className="text-brass-600">*</span>
          </label>
          <input
            id="studentName"
            name="studentName"
            required
            autoComplete="name"
            placeholder="e.g. Fatima Ahmed"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="parentName" className="label">
            Parent / guardian
          </label>
          <input
            id="parentName"
            name="parentName"
            autoComplete="name"
            placeholder="If the student is a child"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email address <span className="text-brass-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="phone" className="label">
            WhatsApp / phone <span className="text-brass-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+1 555 000 0000"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="country" className="label">
            Country <span className="text-brass-600">*</span>
          </label>
          <div className="relative">
            <select id="country" name="country" required defaultValue="" className="field appearance-none pr-10">
              <option value="" disabled>
                Select your country
              </option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          </div>
        </div>

        <div>
          <label htmlFor="studentAge" className="label">
            Student age <span className="text-brass-600">*</span>
          </label>
          <div className="relative">
            <select id="studentAge" name="studentAge" required defaultValue="" className="field appearance-none pr-10">
              <option value="" disabled>
                Select age group
              </option>
              {ageGroups.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="course" className="label">
            Course of interest <span className="text-brass-600">*</span>
          </label>
          <div className="relative">
            <select id="course" name="course" required defaultValue="" className="field appearance-none pr-10">
              <option value="" disabled>
                Which course would you like to start with?
              </option>
              {courses.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet — please advise me</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="preferredTime" className="label">
            Preferred class time <span className="text-brass-600">*</span>
          </label>
          <div className="relative">
            <select
              id="preferredTime"
              name="preferredTime"
              required
              defaultValue=""
              className="field appearance-none pr-10"
            >
              <option value="" disabled>
                Your local time — we cover every time zone
              </option>
              {timeSlots.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="label">
            Anything we should know?
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Current level, learning goals, preferred teacher gender, etc."
            className="field resize-none"
          />
        </div>

        {/* honeypot */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" ? (
        <div className="mt-5 rounded-[5px] border border-red-200 bg-red-50 px-4 py-3 text-[12.5px] leading-relaxed text-red-700">
          {error} You can also{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >
            message us on WhatsApp
          </a>
          .
        </div>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary mt-6 w-full">
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory-100/40 border-t-ivory-50" />
            Sending your request…
          </>
        ) : (
          <>
            Request my 3 free classes
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-[10.5px] leading-relaxed text-ink-400">
        By submitting this form you agree to be contacted about your trial. We never share your
        details. Questions?{" "}
        <Link href="/contact" className="underline decoration-brass-400/60 underline-offset-2 hover:text-forest-800">
          Contact our team
        </Link>
        .
      </p>
    </form>
  );
}
