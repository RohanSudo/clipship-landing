import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ClipShip - Record once. Get everything. Edit + clips for every platform.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Logo icon */}
        <svg
          viewBox="0 0 64 64"
          width="80"
          height="80"
          style={{ marginBottom: 32 }}
        >
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#g)" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          One recording. Edited video + clips.
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#a1a1aa",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          Drop your talking-head video in. Get an edited YouTube video + clips for Reels, Shorts, TikTok.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 18,
              color: "#71717a",
            }}
          >
            clipship.co
          </div>
          <div
            style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "#3f3f46",
            }}
          />
          <div
            style={{
              fontSize: 18,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            No cloud. No subscription.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
