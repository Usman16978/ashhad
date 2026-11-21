import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Learn Qur'an online with expert Hafiz teachers`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f322a",
          padding: "60px 72px",
          position: "relative",
          fontFamily: "Georgia, serif",
          color: "#faf5ea",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "1px solid rgba(219,188,114,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -40,
            top: -40,
            width: 320,
            height: 320,
            borderRadius: 9999,
            border: "1px solid rgba(219,188,114,0.14)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, letterSpacing: 0.5 }}>{site.shortName}</span>
          <span
            style={{
              fontSize: 11,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#dbbc72",
              marginTop: 6,
            }}
          >
            International Taleem-ul-Qur&apos;an Academy
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 17,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#dbbc72",
            }}
          >
            Online Qur&apos;an Academy
          </span>
          <span
            style={{
              fontSize: 66,
              lineHeight: 1.08,
              maxWidth: 940,
              marginTop: 18,
              letterSpacing: -1,
            }}
          >
            Learn Qur&apos;an online with expert Hafiz teachers
          </span>
          <span style={{ fontSize: 22, color: "#b5d7c8", marginTop: 22 }}>
            One-to-one live classes · 3 free trial lessons · Ages 4+
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(219,188,114,0.3)",
            paddingTop: 22,
            fontSize: 17,
            color: "#b5d7c8",
          }}
        >
          <span>al-ashhad-quran-academy.vercel.app</span>
          <span style={{ color: "#dbbc72" }}>Book your free trial</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
