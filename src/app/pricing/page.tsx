import Link from "next/link";
import type { Metadata } from "next";
import Faq from "@/components/Faq";
import PricingPlans from "@/components/PricingPlans";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead, Tick } from "@/components/ui";
import { ArrowRight } from "@/components/Icons";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fee Plans",
  description:
    "Simple monthly fee plans for one-to-one online Qur'an classes — Basic Starter, Standard Popular and Premium Intensive. Start with three free classes first.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Fee Plans"
        eyebrow="Fee plans"
        title={
          <>
            Honest pricing.
            <br />
            <em className="italic text-brass-600">Real value.</em>
          </>
        }
        description="Every plan is live, one-to-one and built around your week. Begin with three free classes — choose a monthly plan only when you are ready."
        artTone="forest"
      >
        <Link href="/free-trial" className="btn btn-primary">
          Book 3 free classes
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Ask a question
        </Link>
      </PageHero>

      <section className="section bg-ivory-50">
        <div className="container-x">
          <PricingPlans showHead={false} />
        </div>
      </section>

      <section className="section border-y border-ivory-300 bg-ivory-100">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="Good to know"
              title={
                <>
                  Simple terms,
                  <br />
                  <em className="italic text-brass-600">no surprises</em>
                </>
              }
              description="Fees are quoted clearly before you begin. There are no registration charges or hidden extras."
            />
            <ul className="mt-6 space-y-3">
              <Tick>No registration fee or joining charges</Tick>
              <Tick>Switch plans or pause with one month&rsquo;s notice</Tick>
              <Tick>Fees shown in USD and GBP for your convenience</Tick>
              <Tick>Payment details shared directly by our admissions team</Tick>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <p className="eyebrow">Common questions</p>
              <h2 className="display-3 mt-3">Before you choose a plan</h2>
              <Faq items={[faqs[0], faqs[5], faqs[4], faqs[3]]} className="mt-6" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Try before you choose"
        title="Start with three free classes. Decide with confidence."
        description="Meet your teacher, experience a real lesson and see which plan fits — no card, no pressure."
      />
    </>
  );
}
