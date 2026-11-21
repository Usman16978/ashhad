import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M5.5 3.5h3l1.4 4-2 1.5a13 13 0 0 0 6.1 6.1l1.5-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </svg>
  );
}

export function Calendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function Star({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m12 2.6 2.8 6.1 6.6.7-4.9 4.5 1.4 6.5L12 17l-5.9 3.4 1.4-6.5-4.9-4.5 6.6-.7Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Quote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.5 5C6.4 6.4 4.5 9 4.5 12.2c0 3.6 2 6.3 4.6 6.3 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-3-2.9-3-.4 0-.8 0-1 .1.3-1.6 1.4-3 3.2-4L9.5 5Zm9 0c-3.1 1.4-5 4-5 7.2 0 3.6 2 6.3 4.6 6.3 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-3-2.9-3-.4 0-.8 0-1 .1.3-1.6 1.4-3 3.2-4L18.5 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5Z" fill="currentColor" />
    </svg>
  );
}

export function Book(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 6.5C10 4.8 7 4.5 3.5 5v14c3.5-.5 6.5-.2 8.5 1.5 2-1.7 5-2 8.5-1.5V5C17 4.5 14 4.8 12 6.5Z" />
      <path d="M12 6.5v14" />
    </svg>
  );
}

export function Bookmark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M6 3.5h12v17l-6-4-6 4Z" />
    </svg>
  );
}

export function Heart(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 7.6a4.1 4.1 0 0 1 7.5 3c0 5-7.5 9.4-7.5 9.4Z" />
    </svg>
  );
}

export function Users(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.2 2.7-5.3 6-5.3s6 2.1 6 5.3" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 14.9c2.1.5 3.5 2.2 3.5 5.1" />
    </svg>
  );
}

export function User(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9.5h17M3.5 14.5h17M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.1 7.5 9.5 4.3-1.4 7.5-4.9 7.5-9.5V6Z" />
      <path d="m8.8 11.8 2.2 2.2 4.2-4.3" />
    </svg>
  );
}

export function Video(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3" y="6" width="12" height="12" rx="2" />
      <path d="m15 10 6-3v10l-6-3" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M12 3c-.8 4.6-3.4 7.2-8 8 4.6.8 7.2 3.4 8 8 .8-4.6 3.4-7.2 8-8-4.6-.8-7.2-3.4-8-8Z" />
    </svg>
  );
}

export function Moon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5Z" />
      <path d="M6 11.2V16c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.8M21.5 9v5" />
    </svg>
  );
}

export function Award(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
    </svg>
  );
}

export function WhatsApp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.94L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 0 1 6.87 12.4 8.1 8.1 0 0 1-10.94 2.4l-.35-.21-3.05.88.9-2.96-.23-.37A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 4.1c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.75 2.79 4.32 3.8 2.13.84 2.56.67 3.02.63.46-.04 1.5-.61 1.71-1.2.21-.6.21-1.11.15-1.21-.06-.1-.23-.17-.48-.29-.25-.13-1.5-.74-1.73-.82-.23-.09-.4-.13-.57.12-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.38-.78-1.88-.2-.5-.41-.43-.57-.44h-.5Z" />
    </svg>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.7-.1-1.5-.2-2.3-.2-2.3 0-3.8 1.4-3.8 3.9V11H8v2.8h2.3V21h3.2Z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9 5.5 3-5.5 3Z" fill="currentColor" />
    </svg>
  );
}

export type CourseIconName =
  | "qaida"
  | "tajweed"
  | "hifz"
  | "tafseer"
  | "kids"
  | "sisters"
  | "arabic"
  | "studies";

export function CourseGlyph({ name, ...props }: IconProps & { name: CourseIconName }) {
  switch (name) {
    case "qaida":
      return <Book {...props} />;
    case "tajweed":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
          <path d="M4 12c2-4 4-4 6 0s4 4 6 0 4-4 4 0" />
          <path d="M4 17c2-3.2 4-3.2 6 0s4 3.2 6 0 4-3.2 4 0" />
          <circle cx="12" cy="6" r="2.2" />
        </svg>
      );
    case "hifz":
      return <Bookmark {...props} />;
    case "tafseer":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
          <circle cx="10.5" cy="10.5" r="6" />
          <path d="m15 15 5 5M8 10.5h5M10.5 8v5" />
        </svg>
      );
    case "kids":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M8.5 10h.01M15.5 10h.01M8.5 14.5c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2" />
        </svg>
      );
    case "sisters":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
          <path d="M12 3c2.2 2.4 3.3 4.7 3.3 7a3.3 3.3 0 0 1-6.6 0c0-2.3 1.1-4.6 3.3-7Z" />
          <path d="M12 13.3V21M8.5 17.5h7" />
        </svg>
      );
    case "arabic":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
          <path d="M6 18c2.5 0 3.5-2 3.5-5.5S11 7 13.5 7s3.5 2 3.5 4.5" />
          <path d="M5.5 20h13" />
          <circle cx="19.5" cy="8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "studies":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
          <path d="M5 20V10a7 7 0 0 1 14 0v10" />
          <path d="M9 20v-6a3 3 0 0 1 6 0v6M3 20h18" />
        </svg>
      );
  }
}
