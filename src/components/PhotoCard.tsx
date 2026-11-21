import Image from "next/image";

/** Responsive photograph card: compact on phones, wider on larger screens. */
export default function PhotoCard({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`group relative w-full overflow-hidden rounded-[14px] bg-ivory-100 ring-1 ring-ivory-300 ${className}`}>
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05] ${imageClassName}`}
        />
      </div>
    </div>
  );
}
