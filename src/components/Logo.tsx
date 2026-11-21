import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/images/academy-logo-sm.webp"
        alt={`${site.shortName} logo`}
        width={52}
        height={52}
        priority
        className="h-[52px] w-[52px] shrink-0 rounded-full object-contain shadow-[0_8px_18px_-10px_rgba(8,36,30,0.6)] transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[20px] font-semibold tracking-[0.01em] sm:text-[23px] ${
            light ? "text-ivory-50" : "text-forest-950"
          }`}
        >
          {site.shortName}
        </span>
        <span
          className={`mt-[5px] text-[7px] font-semibold uppercase tracking-[0.2em] sm:text-[7.5px] sm:tracking-[0.24em] ${
            light ? "text-brass-300" : "text-brass-600"
          }`}
        >
          International Taleem-ul-Qur&rsquo;an
        </span>
      </span>
    </Link>
  );
}
