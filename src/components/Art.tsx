import { site, type Book } from "@/lib/site";

/* ════════════════════════════════════════════════════════════
   Arch scenes — hand-built SVG illustrations (no external images)
   ════════════════════════════════════════════════════════════ */

export type SceneVariant = "quran" | "mosque" | "kids" | "sisters" | "globe";

const ARCH =
  "M36 692V318C36 196 106 108 210 74C251 60 281 46 300 22C319 46 349 60 390 74C494 108 564 196 564 318V692Z";

function Sparkle({
  x,
  y,
  scale = 1,
  opacity = 0.7,
}: {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <path
      d="M0 -7 1.7 -1.7 7 0 1.7 1.7 0 7 -1.7 1.7 -7 0 -1.7 -1.7Z"
      fill="#e8d19b"
      opacity={opacity}
      transform={`translate(${x} ${y}) scale(${scale})`}
    />
  );
}

function Lantern({ x, y, scale = 1, chain = 36 }: { x: number; y: number; scale?: number; chain?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <line x1="0" y1={-chain} x2="0" y2="8" stroke="#dbbc72" strokeWidth="1" opacity="0.4" />
      <ellipse cx="0" cy="52" rx="44" ry="48" fill="#dbbc72" opacity="0.07" />
      <path d="M-15 8h30l5 8H-20z" fill="#cda95a" opacity="0.85" />
      <path d="M-13 18h26l6 34-8 12h-22l-8-12z" fill="#0b2b22" stroke="#dbbc72" strokeWidth="1.1" />
      <path d="M-7 20v43M7 20v43" stroke="#dbbc72" strokeWidth="0.7" opacity="0.4" />
      <circle cx="0" cy="42" r="7" fill="#e8d19b" opacity="0.35" />
      <path d="M-10 66h20l-4 7h-12z" fill="#cda95a" opacity="0.8" />
    </g>
  );
}

function Crescent({ id, x = 300, y = 150, size = 30 }: { id: string; x?: number; y?: number; size?: number }) {
  const maskId = `${id}-crescent`;
  return (
    <>
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="720">
        <rect width="600" height="720" fill="black" />
        <circle cx={x} cy={y} r={size} fill="white" />
        <circle cx={x + size * 0.44} cy={y - size * 0.3} r={size * 0.9} fill="black" />
      </mask>
      <g>
        <circle cx={x} cy={y} r={size * 1.9} fill="#dbbc72" opacity="0.06" />
        <rect width="600" height="720" fill="#dbbc72" mask={`url(#${maskId})`} />
      </g>
    </>
  );
}

function QuranMotif({ id }: { id: string }) {
  return (
    <>
      <Crescent id={id} x={300} y={168} size={28} />
      <Sparkle x={356} y={140} scale={0.9} />
      <Sparkle x={182} y={126} scale={0.65} opacity={0.5} />
      <Sparkle x={428} y={196} scale={0.55} opacity={0.45} />
      <Sparkle x={142} y={248} scale={0.45} opacity={0.4} />
      <Lantern x={124} y={96} scale={0.92} />
      <Lantern x={476} y={96} scale={0.92} />

      {/* floor light */}
      <ellipse cx="300" cy="630" rx="190" ry="34" fill="#dbbc72" opacity="0.08" />
      <ellipse cx="300" cy="628" rx="140" ry="16" fill="#000" opacity="0.22" />

      {/* rehal */}
      <g strokeLinecap="round">
        <path d="M226 632 376 508" stroke="#5d4326" strokeWidth="13" />
        <path d="M374 632 224 508" stroke="#5d4326" strokeWidth="13" />
        <path d="M226 632 376 508" stroke="#97733f" strokeWidth="4" opacity="0.8" />
        <path d="M374 632 224 508" stroke="#97733f" strokeWidth="4" opacity="0.8" />
        <circle cx="300" cy="570" r="7" fill="#cda95a" opacity="0.6" />
      </g>

      {/* book covers */}
      <path
        d="M300 516C250 486 190 478 128 498v94c66-18 124-8 172 24Z"
        fill="#0b2b22"
        stroke="#cda95a"
        strokeWidth="1.2"
      />
      <path
        d="M300 516c50-30 110-38 172-18v94c-66-18-124-8-172 24Z"
        fill="#0b2b22"
        stroke="#cda95a"
        strokeWidth="1.2"
      />

      {/* page stack */}
      <path d="M300 510c-50-28-108-36-164-17v92c62-18 120-8 164 22Z" fill="#ddc9a3" />
      <path d="M300 510c50-28 108-36 164-17v92c-62-18-120-8-164 22Z" fill="#d6c098" />

      {/* open pages */}
      <path d="M300 504c-50-28-106-36-158-17v88c58-17 114-7 158 22Z" fill={`url(#${id}-page)`} />
      <path d="M300 504c50-28 106-36 158-17v88c-58-17-114-7-158 22Z" fill={`url(#${id}-page)`} />

      {/* script lines */}
      <g stroke="#a3803f" strokeWidth="2" strokeLinecap="round" opacity="0.42" fill="none">
        <path d="M172 534c38-9 78-2 116 17" />
        <path d="M168 552c38-9 78-2 118 17" />
        <path d="M166 570c38-9 78-2 120 17" />
        <path d="M170 588c38-9 78-2 120 16" />
        <path d="M428 534c-38-9-78-2-116 17" />
        <path d="M432 552c-38-9-78-2-118 17" />
        <path d="M434 570c-38-9-78-2-120 17" />
        <path d="M430 588c-38-9-78-2-120 16" />
      </g>

      {/* spine ornament */}
      <path d="M300 556l6 8-6 8-6-8Z" fill="#cda95a" opacity="0.85" />
      <path d="M300 500v112" stroke="#b48d45" strokeWidth="1" opacity="0.35" />

      {/* olive sprigs */}
      <g stroke="#9db79d" strokeWidth="1.2" fill="#9db79d" opacity="0.42">
        <path d="M78 656c14-34 38-54 72-64" fill="none" />
        <ellipse cx="98" cy="628" rx="10" ry="4" transform="rotate(-38 98 628)" />
        <ellipse cx="120" cy="608" rx="10" ry="4" transform="rotate(-30 120 608)" />
        <ellipse cx="144" cy="594" rx="9" ry="3.6" transform="rotate(-16 144 594)" />
        <path d="M522 656c-14-34-38-54-72-64" fill="none" />
        <ellipse cx="502" cy="628" rx="10" ry="4" transform="rotate(38 502 628)" />
        <ellipse cx="480" cy="608" rx="10" ry="4" transform="rotate(30 480 608)" />
        <ellipse cx="456" cy="594" rx="9" ry="3.6" transform="rotate(16 456 594)" />
      </g>
    </>
  );
}

function MosqueMotif({ id }: { id: string }) {
  return (
    <>
      <Crescent id={id} x={300} y={132} size={20} />
      <Sparkle x={382} y={154} scale={0.7} />
      <Sparkle x={212} y={166} scale={0.55} opacity={0.5} />

      <Lantern x={232} y={128} scale={0.72} chain={28} />
      <Lantern x={300} y={112} scale={0.9} chain={24} />
      <Lantern x={368} y={128} scale={0.72} chain={28} />

      {/* mihrab */}
      <path
        d="M182 636V414c0-88 52-146 118-146s118 58 118 146v222Z"
        fill="#0b3027"
        stroke="#cda95a"
        strokeWidth="1.2"
      />
      <path
        d="M210 636V420c0-74 40-126 90-126s90 52 90 126v216Z"
        fill="none"
        stroke="#dbbc72"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M238 636V428c0-60 28-102 62-102s62 42 62 102v208Z"
        fill="none"
        stroke="#dbbc72"
        strokeWidth="0.8"
        opacity="0.25"
      />

      {/* geometric star */}
      <g transform="translate(300 392)" stroke="#dbbc72" fill="none" strokeWidth="1" opacity="0.65">
        <rect x="-34" y="-34" width="68" height="68" />
        <rect x="-34" y="-34" width="68" height="68" transform="rotate(45)" />
        <circle r="12" />
        <path d="M0 -48V48M-48 0H48" opacity="0.4" />
      </g>

      {/* prayer rug */}
      <g>
        <path d="M198 656v-38c0-9 7-14 16-14h172c9 0 16 5 16 14v38Z" fill="#b7794f" opacity="0.35" />
        <path
          d="M214 652v-30c0-6 5-10 12-10h148c7 0 12 4 12 10v30"
          fill="none"
          stroke="#e8d19b"
          strokeWidth="1"
          opacity="0.5"
        />
        <path d="M226 626h148" stroke="#e8d19b" strokeWidth="0.8" opacity="0.35" />
        <g stroke="#e8d19b" strokeWidth="0.8" opacity="0.3">
          <path d="M202 658h12M222 658h12M242 658h12M262 658h12M282 658h12M302 658h12M322 658h12M342 658h12M362 658h12M382 658h12" />
        </g>
      </g>
    </>
  );
}

function KidsMotif({ id }: { id: string }) {
  return (
    <>
      <Crescent id={id} x={300} y={156} size={32} />
      <Sparkle x={218} y={124} scale={0.9} />
      <Sparkle x={386} y={132} scale={0.7} />
      <Sparkle x={442} y={220} scale={0.6} opacity={0.5} />
      <Sparkle x={158} y={214} scale={0.6} opacity={0.5} />
      <Sparkle x={352} y={238} scale={0.5} opacity={0.45} />
      <Lantern x={470} y={198} scale={0.62} chain={24} />

      {/* clouds */}
      <g fill="#e8d19b" opacity="0.08">
        <ellipse cx="182" cy="318" rx="46" ry="15" />
        <ellipse cx="212" cy="310" rx="32" ry="13" />
        <ellipse cx="418" cy="300" rx="40" ry="13" />
        <ellipse cx="388" cy="308" rx="26" ry="11" />
      </g>

      {/* mat */}
      <path d="M166 634h268v-42c0-9-7-14-16-14H182c-9 0-16 5-16 14Z" fill="#b7794f" opacity="0.25" />
      <path d="M182 630v-38c0-5 4-8 9-8h218c5 0 9 3 9 8v38" fill="none" stroke="#dbbc72" strokeWidth="1" opacity="0.4" />

      {/* alphabet blocks */}
      <g>
        {[
          { x: 176, y: 556, rot: -6, letter: "أ" },
          { x: 250, y: 574, rot: 4, letter: "ب" },
          { x: 328, y: 552, rot: -3, letter: "ت" },
        ].map((b) => (
          <g key={b.letter} transform={`translate(${b.x} ${b.y}) rotate(${b.rot})`}>
            <rect width="68" height="68" rx="8" fill="#efe1c1" stroke="#cda95a" strokeWidth="1.1" />
            <rect x="6" y="6" width="56" height="56" rx="5" fill="none" stroke="#cda95a" strokeWidth="0.7" opacity="0.5" />
            <text
              x="34"
              y="48"
              textAnchor="middle"
              fontSize="34"
              fontWeight="700"
              fill="#155040"
              style={{ fontFamily: "var(--font-arabic), serif" }}
            >
              {b.letter}
            </text>
          </g>
        ))}
      </g>

      {/* little open book */}
      <g transform="translate(386 596)">
        <path d="M0 8c-12-8-28-10-42-5v34c14-5 30-3 42 5Z" fill="#f6ecd7" stroke="#cda95a" strokeWidth="0.9" />
        <path d="M0 8c12-8 28-10 42-5v34c-14-5-30-3-42 5Z" fill="#f6ecd7" stroke="#cda95a" strokeWidth="0.9" />
        <path d="M0 8v34" stroke="#b48d45" strokeWidth="0.8" />
      </g>

      {/* stars on strings */}
      <g opacity="0.5">
        <path d="M120 288v58M120 346l-8 34" stroke="#dbbc72" strokeWidth="0.7" fill="none" />
        <path d="M128 372 131 380l8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#dbbc72" />
      </g>
    </>
  );
}

function SistersMotif({ id }: { id: string }) {
  const beads = [
    [126, 420],
    [142, 448],
    [160, 474],
    [182, 496],
    [208, 514],
    [236, 526],
    [266, 532],
    [296, 534],
    [326, 530],
    [354, 520],
    [380, 504],
    [402, 484],
    [420, 460],
    [434, 432],
    [444, 402],
  ];
  return (
    <>
      <Crescent id={id} x={300} y={138} size={18} />
      <Sparkle x={372} y={146} scale={0.6} />
      <Sparkle x={224} y={154} scale={0.5} opacity={0.5} />

      {/* rosette */}
      <g transform="translate(300 316)" stroke="#dbbc72" fill="none" opacity="0.55">
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="0" cy="-46" rx="17" ry="46" transform={`rotate(${i * 45})`} strokeWidth="1" />
        ))}
        <circle r="16" />
        <circle r="4" fill="#dbbc72" />
      </g>

      {/* prayer beads */}
      <g opacity="0.7">
        <path
          d="M126 420c8 46 40 82 90 100s76 14 122-6 64-50 76-88"
          fill="none"
          stroke="#cda95a"
          strokeWidth="1"
          opacity="0.5"
        />
        {beads.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 4 === 0 ? 4.4 : 3.4} fill="#dbbc72" opacity="0.75" />
        ))}
      </g>

      {/* closed Qur'an */}
      <g transform="translate(300 596)">
        <ellipse cx="0" cy="40" rx="92" ry="12" fill="#000" opacity="0.2" />
        <path d="M-78-32h156v72h-156Z" fill="#0b2b22" stroke="#cda95a" strokeWidth="1.3" />
        <path d="M-70-24h140v56h-140Z" fill="none" stroke="#cda95a" strokeWidth="0.8" opacity="0.55" />
        <path d="M-6-32h12v72h-12Z" fill="#0f3a2e" stroke="#cda95a" strokeWidth="0.7" opacity="0.7" />
        <g transform="translate(0 88)" stroke="#cda95a" strokeWidth="0.8" opacity="0.35">
          <path d="M-78-8h156" />
          <path d="M-90 2h12M-72 2h10M-56 2h10M-40 2h10M-24 2h10M-8 2h10M8 2h10M24 2h10M40 2h10M56 2h10M72 2h10M86 2h8" />
        </g>
      </g>

      {/* rose sprigs */}
      <g stroke="#9db79d" strokeWidth="1.2" fill="#9db79d" opacity="0.35">
        <path d="M96 640c22-30 52-44 86-46" fill="none" />
        <ellipse cx="124" cy="614" rx="9" ry="4" transform="rotate(-34 124 614)" />
        <ellipse cx="152" cy="600" rx="9" ry="4" transform="rotate(-18 152 600)" />
        <path d="M504 640c-22-30-52-44-86-46" fill="none" />
        <ellipse cx="476" cy="614" rx="9" ry="4" transform="rotate(34 476 614)" />
        <ellipse cx="448" cy="600" rx="9" ry="4" transform="rotate(18 448 600)" />
      </g>
    </>
  );
}

function GlobeMotif() {
  return (
    <>
      <Sparkle x={182} y={164} scale={0.7} />
      <Sparkle x={420} y={190} scale={0.55} opacity={0.5} />
      <Sparkle x={402} y={306} scale={0.5} opacity={0.4} />
      <g transform="translate(300 388)">
        <circle r="126" fill="#0b3027" stroke="#cda95a" strokeWidth="1.1" />
        <ellipse rx="126" ry="50" fill="none" stroke="#dbbc72" strokeWidth="0.9" opacity="0.45" />
        <ellipse rx="82" ry="126" fill="none" stroke="#dbbc72" strokeWidth="0.9" opacity="0.35" />
        <ellipse rx="34" ry="126" fill="none" stroke="#dbbc72" strokeWidth="0.7" opacity="0.3" />
        <ellipse rx="126" ry="90" fill="none" stroke="#dbbc72" strokeWidth="0.6" opacity="0.2" />
        <circle r="142" fill="none" stroke="#dbbc72" strokeWidth="0.8" opacity="0.25" strokeDasharray="2 8" />

        {/* dotted landmasses */}
        <g fill="#dbbc72" opacity="0.6">
          {[
            [-58, -62], [-48, -52], [-38, -60], [-30, -46],
            [-14, -70], [-2, -62], [10, -76], [24, -58],
            [36, -44], [50, -36], [60, -20], [48, -6],
            [30, 2], [18, 16], [8, 30], [-4, 44],
            [-26, 22], [-38, 10], [-50, -6], [-62, -18],
            [70, 22], [80, 38], [64, 50], [42, 58],
            [-72, 48], [-60, 64], [-44, 72], [-20, 62],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2.6 : 1.8} />
          ))}
        </g>

        {/* pins */}
        <g fill="#e8d19b">
          <path d="M-40-24c0-8 12-8 12 0 0 5-6 12-6 12s-6-7-6-12Z" />
          <path d="M46 8c0-8 12-8 12 0 0 5-6 12-6 12S46 13 46 8Z" />
          <path d="M-14 48c0-8 12-8 12 0 0 5-6 12-6 12s-6-7-6-12Z" />
        </g>
      </g>
      <g stroke="#dbbc72" strokeWidth="0.8" fill="none" opacity="0.25">
        <ellipse cx="300" cy="638" rx="150" ry="16" />
        <ellipse cx="300" cy="638" rx="104" ry="10" />
      </g>
    </>
  );
}

export function ArchScene({
  variant = "quran",
  className = "",
  label,
  preserveAspectRatio = "xMidYMid meet",
}: {
  variant?: SceneVariant;
  className?: string;
  label?: string;
  preserveAspectRatio?: string;
}) {
  const id = `scene-${variant}`;
  return (
    <svg
      viewBox="0 0 600 720"
      className={className}
      role="img"
      aria-label={label ?? "Decorative Islamic arch illustration"}
      preserveAspectRatio={preserveAspectRatio}
    >
      <defs>
        <linearGradient id={`${id}-wall`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c5a48" />
          <stop offset="0.55" stopColor="#123f33" />
          <stop offset="1" stopColor="#092a21" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="60%" r="55%">
          <stop offset="0" stopColor="#dbbc72" stopOpacity="0.22" />
          <stop offset="1" stopColor="#dbbc72" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-page`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fdf8ec" />
          <stop offset="1" stopColor="#e9d8b8" />
        </linearGradient>
        <pattern id={`${id}-geo`} width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#e8d19b" strokeOpacity="0.09" strokeWidth="0.8">
            <path d="M32 6 39 25 58 32 39 39 32 58 25 39 6 32 25 25Z" />
            <rect x="20" y="20" width="24" height="24" />
            <circle cx="32" cy="32" r="2.5" />
          </g>
        </pattern>
        <clipPath id={`${id}-clip`}>
          <path d={ARCH} />
        </clipPath>
      </defs>

      <path d={ARCH} fill={`url(#${id}-wall)`} />

      <g clipPath={`url(#${id}-clip)`}>
        <rect x="36" y="0" width="528" height="720" fill={`url(#${id}-geo)`} />
        <ellipse cx="300" cy="520" rx="280" ry="240" fill={`url(#${id}-glow)`} />
        <path d="M36 607h528" stroke="#dbbc72" strokeOpacity="0.15" />
        <path d="M36 607h528v85H36z" fill="#08241e" opacity="0.5" />

        {variant === "quran" && <QuranMotif id={id} />}
        {variant === "mosque" && <MosqueMotif id={id} />}
        {variant === "kids" && <KidsMotif id={id} />}
        {variant === "sisters" && <SistersMotif id={id} />}
        {variant === "globe" && <GlobeMotif />}
      </g>

      <path d={ARCH} fill="none" stroke="#dbbc72" strokeWidth="1.5" opacity="0.8" />
      <path
        d={ARCH}
        fill="none"
        stroke="#dbbc72"
        strokeWidth="0.9"
        opacity="0.25"
        transform="translate(300 360) scale(0.955) translate(-300 -360)"
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   Stylised map
   ════════════════════════════════════════════════════════════ */

export function MapArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="A stylised map showing the academy's location"
    >
      <rect width="640" height="400" fill="#efe6d3" />

      {/* park / blocks */}
      <g fill="#e5dcc5">
        <rect x="42" y="42" width="118" height="82" rx="6" />
        <rect x="216" y="34" width="96" height="58" rx="5" />
        <rect x="336" y="44" width="120" height="74" rx="6" />
        <rect x="42" y="150" width="86" height="64" rx="5" />
        <rect x="246" y="150" width="120" height="72" rx="6" />
        <rect x="452" y="140" width="140" height="58" rx="5" />
        <rect x="66" y="246" width="130" height="86" rx="6" />
        <rect x="266" y="246" width="90" height="70" rx="5" />
        <rect x="430" y="236" width="158" height="96" rx="6" />
      </g>

      <g fill="#dfd4bb" opacity="0.85">
        <rect x="312" y="120" width="64" height="34" rx="4" />
        <rect x="166" y="92" width="70" height="42" rx="4" />
        <rect x="462" y="312" width="72" height="44" rx="4" />
      </g>

      {/* river */}
      <path
        d="M-20 352C90 330 176 372 286 350s164-66 374-34v104H-20Z"
        fill="#d3e0d5"
      />
      <path
        d="M-20 366C90 344 176 386 286 364s164-66 374-34"
        fill="none"
        stroke="#bcd0c2"
        strokeWidth="1.4"
      />

      {/* roads */}
      <g stroke="#fbf6ea" strokeWidth="18" strokeLinecap="round">
        <path d="M-20 128 660 96" />
        <path d="M128 -20 182 420" />
        <path d="M-20 236 660 208" />
        <path d="M430 -20 402 420" />
        <path d="M552 18 574 330" />
      </g>
      <g stroke="#f7f0e1" strokeWidth="6" strokeLinecap="round" opacity="0.9">
        <path d="M-20 182 660 156" />
        <path d="M84 60 104 330" />
        <path d="M250 -10 268 330" />
        <path d="M330 60 344 330" />
        <path d="M480 40 498 320" />
      </g>

      {/* subtle avenue names */}
      <g fill="#b3a488" fontSize="7" fontFamily="Arial, sans-serif" letterSpacing="1.6">
        <text x="36" y="124">CRESCENT AVENUE</text>
        <text x="452" y="204" transform="rotate(-2 452 204)">MARKET STREET</text>
      </g>

      {/* location pin */}
      <g>
        <ellipse cx="322" cy="232" rx="26" ry="8" fill="#173a2e" opacity="0.18" />
        <circle cx="322" cy="190" r="30" fill="none" stroke="#b48d45" strokeWidth="1" opacity="0.35" />
        <circle cx="322" cy="190" r="20" fill="none" stroke="#b48d45" strokeWidth="1" opacity="0.5" />
        <path
          d="M322 148c-15 0-27 12-27 27 0 20 27 47 27 47s27-27 27-47c0-15-12-27-27-27Z"
          fill="#0f322a"
          stroke="#dbbc72"
          strokeWidth="1.6"
        />
        <circle cx="322" cy="175" r="8" fill="#dbbc72" />
        <path
          d="M322 175c-1.2 3-2.8 4.5-5.7 5.6 2.9 1 4.5 2.6 5.7 5.6 1.2-3 2.8-4.6 5.7-5.6-2.9-1.1-4.5-2.6-5.7-5.6Z"
          fill="#0f322a"
        />
      </g>

      {/* compass */}
      <g transform="translate(584 52)" opacity="0.55">
        <circle r="16" fill="none" stroke="#9c8b6c" strokeWidth="0.9" />
        <path d="M0-11 4 0 0 11-4 0Z" fill="#9c8b6c" />
        <text x="0" y="-20" textAnchor="middle" fontSize="7" fill="#9c8b6c">
          N
        </text>
      </g>
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   Book covers
   ════════════════════════════════════════════════════════════ */

const coverTones = {
  parchment: {
    bg: "linear-gradient(150deg,#fbf4e2 0%,#f1e3c5 55%,#e2cea3 100%)",
    fg: "#0f322a",
    muted: "#8a6b35",
    line: "rgba(150,112,47,0.35)",
    spine: "rgba(120,86,40,0.18)",
  },
  forest: {
    bg: "linear-gradient(150deg,#1a5747 0%,#0f3d30 55%,#08241e 100%)",
    fg: "#f7eedb",
    muted: "#dbbc72",
    line: "rgba(219,188,114,0.45)",
    spine: "rgba(0,0,0,0.35)",
  },
  sand: {
    bg: "linear-gradient(150deg,#f2e6cc 0%,#e6d3ac 60%,#d5ba88 100%)",
    fg: "#3d2f1c",
    muted: "#8a6b35",
    line: "rgba(138,107,53,0.35)",
    spine: "rgba(120,86,40,0.16)",
  },
  clay: {
    bg: "linear-gradient(150deg,#f5e6d7 0%,#e8cfb8 55%,#d6b193 100%)",
    fg: "#4a2a18",
    muted: "#9c5f39",
    line: "rgba(156,95,57,0.35)",
    spine: "rgba(120,60,30,0.16)",
  },
};

export function BookCover({ book, className = "" }: { book: Book; className?: string }) {
  const t = coverTones[book.tone];
  return (
    <div
      className={`relative aspect-[3/4] overflow-hidden rounded-[5px] shadow-[0_24px_45px_-28px_rgba(8,36,30,0.55)] ${className}`}
      style={{ background: t.bg, color: t.fg }}
    >
      {/* spine */}
      <div
        className="absolute inset-y-0 left-0 w-[8%]"
        style={{ background: `linear-gradient(90deg, ${t.spine}, transparent)` }}
      />
      <div className="absolute inset-y-0 left-[8%] w-px bg-white/20" />

      {/* frame */}
      <div
        className="absolute inset-x-[9%] inset-y-[7%] rounded-[2px] border"
        style={{ borderColor: t.line }}
      >
        <div
          className="absolute inset-[5px] rounded-[1px] border"
          style={{ borderColor: t.line, opacity: 0.55 }}
        />
      </div>

      <div className="relative flex h-full flex-col items-center px-[17%] py-[12%] text-center">
        <span
          className="text-[7px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: t.muted }}
        >
          {book.tag}
        </span>

        <svg viewBox="0 0 24 24" className="mt-3 h-4 w-4" fill="currentColor" style={{ color: t.muted }}>
          <path d="M12 2c-.8 5.8-4.2 9.2-10 10 5.8.8 9.2 4.2 10 10 .8-5.8 4.2-9.2 10-10-5.8-.8-9.2-4.2-10-10Z" />
        </svg>

        <div className="mt-auto">
          <p className="font-serif text-[clamp(1rem,2.1vw,1.35rem)] font-semibold leading-[1.1]">
            {book.title}
          </p>
          <div className="mx-auto my-2.5 h-px w-8" style={{ background: t.muted, opacity: 0.6 }} />
          <p className="text-[8px] uppercase leading-[1.6] tracking-[0.12em]" style={{ color: t.muted }}>
            {book.subtitle}
          </p>
        </div>

        <p
          className="mt-auto pt-4 font-arabic text-[26px] leading-none"
          style={{ color: t.muted }}
          lang="ar"
          dir="rtl"
        >
          {book.glyph}
        </p>

        <p
          className="mt-3 text-[6.5px] font-semibold uppercase tracking-[0.24em]"
          style={{ color: t.muted }}
        >
          {site.shortName} Publications
        </p>
      </div>

      {/* glossy edge */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
    </div>
  );
}
