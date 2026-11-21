import Image from "next/image";
import { Stars } from "./ui";
import Tilt3D from "./Tilt3D";

/**
 * Home hero: a single open Qur'an cut-out (no background).
 * Tilts gently toward the pointer on hover and floats slowly.
 */
export default function QuranHeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        className="pointer-events-none absolute left-1/2 top-[48%] h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass-200/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="animate-float relative">
        <Tilt3D className="relative aspect-[4/3] w-full">
          <Image
            src="/images/quran-rehal-cutout.webp"
            alt="An open Qur'an resting on a wooden rehal"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 560px"
            className="object-contain drop-shadow-[0_18px_24px_rgba(8,36,30,0.25)]"
          />
        </Tilt3D>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
        <Stars rating={5} />
        <span className="text-[10.5px] font-semibold text-forest-950">4.9/5</span>
        <span className="text-[10px] text-ink-400">from 120+ parents</span>
      </div>
    </div>
  );
}
