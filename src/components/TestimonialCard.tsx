import { Quote } from "./Icons";
import { Stars } from "./ui";
import type { Testimonial } from "@/lib/site";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="card card-hover relative flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <Quote className="h-7 w-7 text-brass-400/80" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-brass-600">
          {testimonial.course}
        </span>
      </div>
      <blockquote className="mt-4 flex-1 text-[13.5px] leading-[1.85] text-ink-700">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center gap-3 border-t border-ivory-200 pt-5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-brass-400/30 bg-forest-900 text-[10.5px] font-semibold tracking-[0.05em] text-brass-200">
          {testimonial.initials}
        </span>
        <div className="min-w-0">
          <figcaption className="font-serif text-[17px] leading-tight text-forest-950">
            {testimonial.name}
          </figcaption>
          <p className="mt-0.5 truncate text-[10px] uppercase tracking-[0.08em] text-ink-400">
            {testimonial.location}
          </p>
        </div>
        <Stars rating={testimonial.rating} className="ml-auto shrink-0" />
      </div>
    </figure>
  );
}
