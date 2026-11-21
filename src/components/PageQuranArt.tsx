import Image from "next/image";

export type PageArtTone = "forest" | "jade" | "night" | "ember" | "ink" | "moss" | "plum";

/** Same Qur'an image on every page, shown plainly — no green panel or shade. */
export default function PageQuranArt({
  tone: _tone = "forest",
}: {
  tone?: PageArtTone;
}) {
  return (
    <div className="group relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[460px]">
      <Image
        src="/images/quran-rehal-cutout.webp"
        alt="An open Qur'an"
        fill
        sizes="280px"
        className="object-contain drop-shadow-[0_18px_24px_rgba(8,36,30,0.22)] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    </div>
  );
}
