import Link from "next/link";
import { ArrowRight, Check, Star } from "./Icons";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { plans } from "@/lib/site";

/** Fee plans: free trial first, then the three paid plans. */
export default function PricingPlans({ showHead = true }: { showHead?: boolean }) {
  return (
    <div>
      {showHead ? (
        <Reveal>
          <SectionHead
            eyebrow="Fee plans"
            title={
              <>
                Start free. <em className="italic text-brass-600">Grow steadily.</em>
              </>
            }
            description="Begin with three free classes. If it feels right, choose the weekly plan that suits your family — 1-on-1 live lessons on Zoom, every time."
          />
        </Reveal>
      ) : null}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, i) => {
          const isFree = plan.priceUsd === 0;
          const featured = !!plan.featured;

          return (
            <Reveal key={plan.id} delay={i * 80} className="h-full">
              <article
                className={`ornate relative flex h-full flex-col overflow-hidden rounded-[12px] p-6 transition duration-500 hover:-translate-y-1 ${
                  featured
                    ? "bg-forest-950 text-ivory-100 shadow-[0_30px_60px_-36px_rgba(8,36,30,0.75)] ring-1 ring-brass-400/40"
                    : "border border-ivory-300 bg-ivory-50 hover:border-brass-400/70 hover:shadow-[0_24px_50px_-34px_rgba(8,36,30,0.45)]"
                }`}
              >
                {featured ? (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-brass-300/40 bg-brass-400/15 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-brass-200">
                    <Star className="h-3 w-3" />
                    Most popular
                  </span>
                ) : null}
                {isFree ? (
                  <span className="absolute right-5 top-5 rounded-full border border-brass-400/40 bg-brass-50 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-brass-700">
                    Start here
                  </span>
                ) : null}

                <p
                  className={`text-[9.5px] font-semibold uppercase tracking-[0.2em] ${
                    featured ? "text-brass-300" : "text-brass-600"
                  }`}
                >
                  {isFree ? "No commitment" : plan.schedule}
                </p>
                <h3
                  className={`mt-2 pr-20 font-serif text-[22px] leading-tight ${
                    featured ? "text-ivory-50" : "text-forest-950"
                  }`}
                >
                  {plan.name}
                </h3>

                <div className="mt-5 flex items-end gap-2">
                  <span
                    className={`font-serif text-[40px] leading-none ${
                      featured ? "text-ivory-50" : "text-forest-950"
                    }`}
                  >
                    {isFree ? "Free" : `$${plan.priceUsd}`}
                  </span>
                  {!isFree ? (
                    <span className={`pb-1 text-[12px] ${featured ? "text-ivory-200/70" : "text-ink-500"}`}>
                      / £{plan.priceGbp}
                    </span>
                  ) : null}
                </div>
                <p className={`mt-1 text-[10.5px] ${featured ? "text-ivory-200/60" : "text-ink-400"}`}>
                  {isFree ? "3 classes · no card required" : "per month · billed monthly"}
                </p>

                <div
                  className={`mt-5 rounded-[8px] border px-4 py-3 text-[11px] ${
                    featured ? "border-ivory-100/15 text-ivory-200/75" : "border-ivory-300 text-ink-500"
                  }`}
                >
                  <p>{plan.duration}</p>
                  <p className="mt-1">{plan.platform}</p>
                </div>

                <p className={`mt-5 text-[12.5px] leading-[1.75] ${featured ? "text-ivory-200/70" : "text-ink-500"}`}>
                  {plan.description}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-ivory-300/40 pt-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-[11.5px] leading-relaxed ${
                        featured ? "text-ivory-200/75" : "text-ink-500"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? "text-brass-300" : "text-brass-600"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={isFree ? "/free-trial" : `/checkout?plan=${plan.id}`}
                  className={`btn mt-6 w-full ${
                    isFree ? "btn-primary" : featured ? "btn-gold" : "btn-outline"
                  }`}
                >
                  {isFree ? "Book 3 free classes" : "Choose this plan"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <p className="text-[11.5px] leading-relaxed text-ink-500">
            All plans include live one-to-one lessons, a personal learning plan and no registration fee.
          </p>
          <p className="text-[11px] text-ink-400">
            Not sure which to pick?{" "}
            <Link
              href="/free-trial"
              className="font-semibold text-brass-700 underline decoration-brass-400/60 underline-offset-2 hover:text-brass-600"
            >
              Start with the free trial
            </Link>{" "}
            — we will guide you.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
