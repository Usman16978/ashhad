"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown, Shield, WhatsApp } from "./Icons";
import { countries, site, whatsappLink, type Plan } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function CheckoutForm({ plan }: { plan: Plan }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [firstName, setFirstName] = useState("");

  const price = `$${plan.priceUsd} / £${plan.priceGbp}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setFirstName(String(data.name ?? "").split(" ")[0]);
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, planId: plan.id }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
        reference?: string;
        firstName?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.message ?? "Something went wrong. Please try again.");
      }
      setReference(json.reference ?? "");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card mx-auto max-w-2xl overflow-hidden">
        <div className="border-b border-forest-200 bg-forest-50 px-6 py-9 text-center sm:px-10">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-forest-300 bg-white text-forest-700">
            <Check className="h-8 w-8" />
          </div>
          <p className="eyebrow mt-5 justify-center">Plan requested</p>
          <h1 className="display-3 mt-3">
            You&rsquo;re one step away{firstName ? `, ${firstName}` : ""}.
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-[13.5px] leading-relaxed text-ink-500">
            We have received your request for <strong>{plan.name}</strong>. Our admissions team will
            message you on WhatsApp within one working day with the payment details, your teacher
            and your first class time — in shaa Allah.
          </p>
        </div>

        <div className="px-6 py-7 sm:px-10">
          <div className="grid gap-3 rounded-[10px] border border-ivory-300 bg-ivory-50 p-5 text-[12px] sm:grid-cols-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">Plan</p>
              <p className="mt-1 font-serif text-[16px] leading-tight text-forest-950">{plan.name}</p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">Monthly fee</p>
              <p className="mt-1 font-serif text-[16px] leading-tight text-forest-950">{price}</p>
            </div>
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">Reference</p>
              <p className="mt-1 font-serif text-[16px] leading-tight text-brass-700">{reference || "—"}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink(
                `Assalamu alaikum, I have requested the ${plan.name} (${price} per month)${
                  reference ? `, reference ${reference}` : ""
                }. Please send the payment details and my first class time.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <WhatsApp className="h-4 w-4" />
              Confirm &amp; pay on WhatsApp
            </a>
            <Link href="/pricing" className="btn btn-outline">
              Back to fee plans
            </Link>
          </div>

          <p className="mt-6 text-center text-[11px] leading-relaxed text-ink-400">
            No payment is taken on this website. Payment details are shared directly by our admissions
            team after your request. Questions? Call{" "}
            <a href={`tel:${site.phoneHref}`} className="font-semibold text-forest-800">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
      {/* Plan summary */}
      <aside className="h-fit rounded-[12px] bg-forest-950 p-7 text-ivory-100 ring-1 ring-brass-400/30">
        <p className="text-[9.5px] font-semibold uppercase tracking-[0.2em] text-brass-300">
          Your selection
        </p>
        <h1 className="mt-3 font-serif text-[28px] leading-tight text-ivory-50">{plan.name}</h1>
        <div className="mt-5 flex items-end gap-2">
          <span className="font-serif text-[42px] leading-none text-ivory-50">${plan.priceUsd}</span>
          <span className="pb-1 text-[12px] text-ivory-200/70">/ £{plan.priceGbp} per month</span>
        </div>
        <p className="mt-2 text-[11px] text-ivory-200/60">{plan.schedule} · {plan.duration}</p>

        <ul className="mt-6 space-y-2.5 border-t border-ivory-100/15 pt-6">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-ivory-200/75">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-300" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-start gap-2.5 rounded-[8px] border border-ivory-100/15 p-4 text-[11px] leading-relaxed text-ivory-200/60">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
          No payment is taken here. Our team confirms the details on WhatsApp first.
        </div>
        <Link href="/pricing" className="link-underline mt-5 inline-flex text-ivory-200/70">
          Change plan
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </aside>

      {/* Request form */}
      <form onSubmit={onSubmit} className="card p-6 sm:p-8">
        <p className="eyebrow">Almost there</p>
        <h2 className="font-serif text-[26px] leading-tight text-forest-950">Confirm your details</h2>
        <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
          Fill this in and we will contact you on WhatsApp to complete your plan.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label">Full name <span className="text-brass-600">*</span></label>
            <input id="name" name="name" required autoComplete="name" placeholder="Your name" className="field" />
          </div>
          <div>
            <label htmlFor="phone" className="label">WhatsApp / phone <span className="text-brass-600">*</span></label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+92 300 0000000" className="field" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="label">Email address <span className="text-brass-600">*</span></label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="field" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="country" className="label">Country <span className="text-brass-600">*</span></label>
            <div className="relative">
              <select id="country" name="country" required defaultValue="" className="field appearance-none pr-10">
                <option value="" disabled>Select your country</option>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="label">Anything we should know?</label>
            <textarea id="message" name="message" rows={3} placeholder="Student age, preferred teacher, class timings…" className="field resize-none" />
          </div>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input id="company" name="company" tabIndex={-1} autoComplete="off" />
          </div>
        </div>

        {status === "error" ? (
          <div className="mt-5 rounded-[5px] border border-red-200 bg-red-50 px-4 py-3 text-[12.5px] leading-relaxed text-red-700">
            {error} You can also{" "}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              message us on WhatsApp
            </a>.
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
              Request {plan.name}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        <p className="mt-4 text-center text-[10.5px] leading-relaxed text-ink-400">
          This is a request, not a payment. We never share your details.
        </p>
      </form>
    </div>
  );
}
