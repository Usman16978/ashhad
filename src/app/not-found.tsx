import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Ornament } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ivory-100">
      <div className="pointer-events-none absolute inset-0 bg-geo opacity-40" aria-hidden="true" />
      <div className="container-x relative flex min-h-[68vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-serif text-[clamp(4rem,12vw,8rem)] leading-none text-brass-500/40">404</p>
        <h1 className="display-2 mt-2">This page has wandered off.</h1>
        <p className="lead mx-auto mt-4 max-w-md">
          The page you are looking for may have moved. Return to the home page, or explore our courses
          and free trial.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/courses" className="btn btn-outline">
            View courses
          </Link>
        </div>
        <Ornament className="mt-10" />
      </div>
    </section>
  );
}
