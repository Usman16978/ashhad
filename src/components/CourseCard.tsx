import Link from "next/link";
import { ArrowUpRight, Calendar, CourseGlyph, Users } from "./Icons";
import type { Course } from "@/lib/site";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article
      id={course.id}
      className="ornate group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[10px] border border-ivory-300 bg-ivory-50 p-5 transition duration-500 sm:p-6 hover:-translate-y-1 hover:border-brass-400/60 hover:shadow-[0_26px_50px_-34px_rgba(8,36,30,0.5)]"
    >
      <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-brass-400 to-brass-600 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-brass-400/30 bg-brass-50 text-brass-700 transition-colors duration-500 group-hover:border-brass-500/60 group-hover:bg-brass-100">
          <CourseGlyph name={course.icon} className="h-5 w-5" />
        </span>
        <span className="text-right text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-400">
          {course.level}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-[21px] leading-tight text-forest-950 sm:text-[24px]">{course.title}</h3>
      <p className="mt-2.5 flex-1 text-[13px] leading-[1.8] text-ink-500">{course.description}</p>

      <div className="mt-5 space-y-2 border-t border-ivory-200 pt-4">
        <p className="flex items-center gap-2 text-[11px] text-ink-500">
          <Calendar className="h-3.5 w-3.5 text-brass-600" />
          {course.format}
        </p>
        <p className="flex items-center gap-2 text-[11px] text-ink-500">
          <Users className="h-3.5 w-3.5 text-brass-600" />
          {course.ages}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <Link href="/free-trial" className="link-underline">
          Book a free trial
        </Link>
        <Link
          href="/free-trial"
          aria-label={`Book a free trial for ${course.title}`}
          className="grid h-8 w-8 place-items-center rounded-full border border-forest-900/15 text-forest-800 transition-colors duration-300 group-hover:border-forest-900 group-hover:bg-forest-900 group-hover:text-ivory-50"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
