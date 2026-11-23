import Link from "next/link";
import { ArrowRight, Check, Star } from "./Icons";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { plans } from "@/lib/site";

/** Three monthly fee plans, each with a request-to-buy flow. */
export default function PricingPlans({ showHead = true }: { showHead?: boolean }) {
  return (
    <div>
      {showHead ? (
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="Fee plans"
              title={
                <>
                  Simple plans. <em className="italic text-brass-600">Real progress.</em>
                </>
              }
              description="Choose the weekly plan that suits your family — live, one-to-one lessons on Zoom with a dedicated teacher. New here? Start with three free classes first."
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Link href="/pricing" className="link-underline shrink-0">
                Full fee plans guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/free-trial" className="link-underline shrink-0 text-ink-500">
                Book 3 free classes first
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      ) : null}

      <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:mt-10 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
        {plans.map((plan, i) => {
          const featured = !!plan.featured;

          return (
            <Reveal
              key={plan.id}
              delay={i * 90}
              className="h-full w-[84%] min-w-[84%] shrink-0 snap-center sm:w-[60%] sm:min-w-[60%] md:w-auto md:min-w-0 md:shrink"
            >
              <article
                className={`ornate relative flex h-full flex-col overflow-hidden rounded-[12px] p-5 transition duration-500 hover:-translate-y-1 sm:p-6 ${
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

                <p
                  className={`text-[9.5px] font-semibold uppercase tracking-[0.2em] ${
                    featured ? "text-brass-300" : "text-brass-600"
                  }`}
                >
                  {plan.schedule}
                </p>
                <h3
                  className={`mt-2 font-serif text-[22px] leading-tight ${
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
                    ${plan.priceUsd}
                  </span>
                  <span className={`pb-1 text-[12px] ${featured ? "text-ivory-200/70" : "text-ink-500"}`}>
                    / £{plan.priceGbp}
                  </span>
                </div>
                <p className={`mt-1 text-[10.5px] ${featured ? "text-ivory-200/60" : "text-ink-400"}`}>
                  per month · billed monthly
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
                  href={`/checkout?plan=${plan.id}`}
                  className={`btn mt-6 w-full ${featured ? "btn-gold" : "btn-outline"}`}
                >
                  Choose this plan
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>

      {showHead ? (
        <div className="mt-1 flex justify-center md:hidden">
          <Link href="/pricing" className="btn btn-outline w-full max-w-xs">
            Compare all plans
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}

      <Reveal>
        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <p className="text-[11.5px] leading-relaxed text-ink-500">
            All plans include live one-to-one lessons, a personal learning plan and no registration fee.
          </p>
          <p className="text-[11px] text-ink-400">
            New to us?{" "}
            <Link
              href="/free-trial"
              className="font-semibold text-brass-700 underline decoration-brass-400/60 underline-offset-2 hover:text-brass-600"
            >
              Book three free classes
            </Link>{" "}
            before choosing a plan.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
