import Link from "next/link";
import { ArrowRight, Check, Star } from "./Icons";
import Reveal from "./Reveal";
import { SectionHead } from "./ui";
import { plans, type Plan } from "@/lib/site";

function Price({ plan, featured }: { plan: Plan; featured: boolean }) {
  return (
    <div className="mt-4 flex items-end gap-2">
      <span className={`font-serif text-[40px] leading-none ${featured ? "text-ivory-50" : "text-forest-950"}`}>
        ${plan.priceUsd}
      </span>
      <span className={`pb-1 text-[12px] ${featured ? "text-ivory-200/70" : "text-ink-500"}`}>
        / £{plan.priceGbp} per month
      </span>
    </div>
  );
}

function FeatureList({ plan, featured, className = "" }: { plan: Plan; featured: boolean; className?: string }) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {plan.features.map((feature) => (
        <li
          key={feature}
          className={`flex items-start gap-2.5 text-[11.5px] leading-relaxed ${
            featured ? "text-ivory-200/75" : "text-ink-500"
          }`}
        >
          <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${featured ? "text-brass-300" : "text-brass-600"}`} />
          {feature}
        </li>
      ))}
    </ul>
  );
}

function PlanBadge({ featured }: { featured: boolean }) {
  if (!featured) return null;
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-brass-300/40 bg-brass-400/15 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-brass-200">
      <Star className="h-3 w-3" />
      Most popular
    </span>
  );
}

export default function PricingPlans({
  showHead = true,
  layout = "grid",
}: {
  showHead?: boolean;
  layout?: "grid" | "stack";
}) {
  const stacked = layout === "stack";

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
              <Link href="/pricing" className="link-underline hidden shrink-0 md:inline-flex">
                View all plans
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

      {stacked ? (
        <div className="mt-8 space-y-5 md:mt-10">
          {plans.map((plan, i) => {
            const featured = !!plan.featured;
            return (
              <Reveal key={plan.id} delay={i * 70}>
                <article
                  className={`ornate relative overflow-hidden rounded-[14px] p-6 sm:p-8 ${
                    featured
                      ? "bg-forest-950 text-ivory-100 shadow-[0_30px_60px_-36px_rgba(8,36,30,0.75)] ring-1 ring-brass-400/40"
                      : "border border-ivory-300 bg-ivory-50"
                  }`}
                >
                  <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr_auto] lg:items-center lg:gap-10">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <p
                          className={`text-[9.5px] font-semibold uppercase tracking-[0.2em] ${
                            featured ? "text-brass-300" : "text-brass-600"
                          }`}
                        >
                          {plan.schedule}
                        </p>
                        <PlanBadge featured={featured} />
                      </div>
                      <h3
                        className={`mt-2 font-serif text-[26px] leading-tight ${
                          featured ? "text-ivory-50" : "text-forest-950"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <Price plan={plan} featured={featured} />
                      <p
                        className={`mt-3 max-w-md text-[13px] leading-[1.8] ${
                          featured ? "text-ivory-200/70" : "text-ink-500"
                        }`}
                      >
                        {plan.description}
                      </p>
                      <div
                        className={`mt-4 inline-flex flex-wrap gap-x-4 gap-y-1 rounded-[8px] border px-4 py-2.5 text-[10.5px] ${
                          featured ? "border-ivory-100/15 text-ivory-200/70" : "border-ivory-300 text-ink-500"
                        }`}
                      >
                        <span>{plan.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span>{plan.platform}</span>
                      </div>
                    </div>

                    <FeatureList
                      plan={plan}
                      featured={featured}
                      className={`border-t pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 ${
                        featured ? "border-ivory-100/15" : "border-ivory-200"
                      }`}
                    />

                    <div className="lg:w-[190px] lg:text-right">
                      <Link
                        href={`/checkout?plan=${plan.id}`}
                        className={`btn w-full ${featured ? "btn-gold" : "btn-outline"}`}
                      >
                        Choose this plan
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <p className={`mt-3 text-[10px] leading-relaxed ${featured ? "text-ivory-200/50" : "text-ink-400"}`}>
                        Secure your teacher &amp; start date on WhatsApp.
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      ) : (
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
                  <div className="flex min-h-[22px] items-center justify-between gap-2">
                    <p
                      className={`text-[9.5px] font-semibold uppercase tracking-[0.2em] ${
                        featured ? "text-brass-300" : "text-brass-600"
                      }`}
                    >
                      {plan.schedule}
                    </p>
                    <PlanBadge featured={featured} />
                  </div>
                  <h3
                    className={`mt-2 font-serif text-[22px] leading-tight ${
                      featured ? "text-ivory-50" : "text-forest-950"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <Price plan={plan} featured={featured} />

                  <div
                    className={`mt-4 rounded-[8px] border px-4 py-3 text-[11px] ${
                      featured ? "border-ivory-100/15 text-ivory-200/75" : "border-ivory-300 text-ink-500"
                    }`}
                  >
                    <p>{plan.duration}</p>
                    <p className="mt-1">{plan.platform}</p>
                  </div>

                  <p
                    className={`mt-4 text-[12.5px] leading-[1.75] ${
                      featured ? "text-ivory-200/70" : "text-ink-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <FeatureList
                    plan={plan}
                    featured={featured}
                    className={`mt-4 flex-1 border-t pt-4 ${featured ? "border-ivory-100/15" : "border-ivory-200"}`}
                  />

                  <Link
                    href={`/checkout?plan=${plan.id}`}
                    className={`btn mt-5 w-full ${featured ? "btn-gold" : "btn-outline"}`}
                  >
                    Choose this plan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      )}

      {showHead ? (
        <div className="mt-4 flex justify-center md:hidden">
          <Link href="/pricing" className="btn btn-outline w-full max-w-xs">
            View all plans
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
