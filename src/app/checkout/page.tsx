import type { Metadata } from "next";
import Link from "next/link";
import CheckoutForm from "@/components/CheckoutForm";
import { getPlan } from "@/lib/site";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Choose Your Plan",
  description: "Request your monthly Qur'an class plan and our admissions team will confirm payment details and your first class.",
};

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planId } = await searchParams;
  const plan = getPlan(planId);

  if (!plan || plan.priceUsd === 0) {
    return (
      <section className="section bg-ivory-50">
        <div className="container-x mx-auto max-w-xl rounded-[12px] border border-ivory-300 bg-ivory-50 p-8 text-center">
          <p className="eyebrow justify-center">Choose a plan</p>
          <h1 className="display-3 mt-4">Select a monthly plan first</h1>
          <p className="lead mt-3">
            Pick one of our paid plans and we will guide you through the next step. The free trial
            needs no plan at all.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/pricing" className="btn btn-primary">
              See fee plans
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/free-trial" className="btn btn-outline">
              Book free trial
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-ivory-50">
      <div className="container-x">
        <CheckoutForm plan={plan} />
      </div>
    </section>
  );
}
