import Image from "next/image";

export type QuranArtVariant = "plain" | "parchment" | "dusk" | "ink" | "sand";

const panels: Record<Exclude<QuranArtVariant, "plain">, string> = {
  parchment: "bg-ivory-50 ring-1 ring-ivory-300",
  dusk: "bg-gradient-to-br from-[#2b1c33] via-[#1d1323] to-[#0d0812] ring-1 ring-brass-300/20",
  ink: "bg-gradient-to-br from-[#1b2a39] via-[#101b27] to-[#070c12] ring-1 ring-brass-300/20",
  sand: "bg-gradient-to-br from-[#f0e2c8] via-[#e8d4ad] to-[#d8bd8e] ring-1 ring-brass-500/30",
};

/**
 * The one 3D Qur'an artwork, presented in a few distinct designs so repeated
 * use across sections never looks copy-pasted.
 */
export default function QuranArtwork({
  ratio = "aspect-[4/3]",
  className = "",
  sizes = "(max-width: 1024px) 90vw, 480px",
  priority = false,
  alt = "An open Qur'an",
  float = false,
  variant = "plain",
}: {
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
  float?: boolean;
  variant?: QuranArtVariant;
}) {
  const decorated = variant !== "plain";

  return (
    <div
      className={`relative w-full ${ratio} ${className} ${
        decorated ? `overflow-hidden rounded-[16px] ${panels[variant]}` : ""
      }`}
    >
      {decorated && (
        <>
          <div className="bg-geo-light pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div
            className="pointer-events-none absolute inset-[10px] rounded-[10px] border border-brass-400/25"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute right-4 top-4 h-2 w-2 rotate-45 border border-brass-400/70"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute bottom-4 left-4 h-2 w-2 rotate-45 border border-brass-400/70"
            aria-hidden="true"
          />
        </>
      )}
      <div className={`relative h-full w-full ${float ? "animate-float" : ""} ${decorated ? "p-6 sm:p-8" : ""}`}>
        <div className="relative h-full w-full">
          <Image
            src="/images/quran-rehal-cutout.webp"
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-contain transition-transform duration-700 ease-out ${
              variant === "dusk" || variant === "ink"
                ? "drop-shadow-[0_18px_24px_rgba(0,0,0,0.45)]"
                : "drop-shadow-[0_18px_24px_rgba(8,36,30,0.22)]"
            } group-hover:scale-[1.04]`}
          />
        </div>
      </div>
    </div>
  );
}
