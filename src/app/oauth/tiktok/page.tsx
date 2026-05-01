"use client";

// OAuth bridge page for TikTok.
//
// Same pattern as /oauth/instagram. TikTok's OAuth was failing on
// http://localhost loopback redirects (despite the dashboard
// accepting wildcard ports). Switching to the HTTPS bridge pattern
// removes the localhost question entirely:
//
//   1. ClipShip opens browser to TikTok OAuth, redirect_uri set to
//      https://clipship.co/oauth/tiktok
//   2. User authorizes; TikTok redirects to this page with
//      ?code=XYZ&state=STATE (state is base64url JSON {port, nonce})
//   3. We decode state to get the local port, JS-redirect to
//      http://localhost:PORT/?code=...&state=...
//   4. ClipShip's local listener captures it
//
// State decoding mirrors the Instagram bridge exactly. If decoding
// fails (manual visit, broken state) we show a friendly error.

import { useEffect, useState } from "react";

type State = "pending" | "redirecting" | "error";

function decodeState(raw: string): { port: number } | null {
  try {
    const base64 = raw.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
    const decoded = atob(padded);
    const parsed = JSON.parse(decoded) as { port?: number; nonce?: string };
    if (typeof parsed.port !== "number" || parsed.port < 1 || parsed.port > 65535) {
      return null;
    }
    return { port: parsed.port };
  } catch {
    return null;
  }
}

export default function TikTokOAuthBridgePage() {
  const [status, setStatus] = useState<State>("pending");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    const oauthError = params.get("error");
    const oauthErrorDesc = params.get("error_description");

    if (oauthError) {
      setErrorMsg(`TikTok returned: ${oauthErrorDesc || oauthError}`);
      setStatus("error");
      return;
    }

    if (!code || !state) {
      setErrorMsg("This URL is missing the auth code or state. If you opened it manually, that's expected.");
      setStatus("error");
      return;
    }

    const decoded = decodeState(state);
    if (!decoded) {
      setErrorMsg("State parameter could not be decoded. Try connecting TikTok from ClipShip again.");
      setStatus("error");
      return;
    }

    const target = `http://localhost:${decoded.port}/?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`;
    setStatus("redirecting");
    window.setTimeout(() => {
      window.location.replace(target);
    }, 400);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "#fff",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
      }}
    >
      {status === "redirecting" && (
        <>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(228,228,231,0.18), rgba(228,228,231,0.04))",
              border: "1px solid rgba(228,228,231,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              fontSize: 26,
              color: "#e4e4e7",
            }}
          >
            ↩
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>Returning to ClipShip</h1>
          <p style={{ color: "#a1a1aa", fontSize: 14, maxWidth: 420 }}>
            TikTok authorized. Switching back to the app, you can close this tab if it doesn&apos;t happen automatically.
          </p>
        </>
      )}

      {status === "error" && (
        <>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "rgba(239,68,68,0.12)",
              border: "1px solid rgba(239,68,68,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              fontSize: 26,
              color: "#ef4444",
            }}
          >
            !
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>TikTok connect didn&apos;t complete</h1>
          <p style={{ color: "#a1a1aa", fontSize: 14, maxWidth: 480, lineHeight: 1.6, marginBottom: 16 }}>
            {errorMsg}
          </p>
          <p style={{ color: "#52525b", fontSize: 13 }}>
            You can close this tab and try again from inside ClipShip.
          </p>
        </>
      )}

      {status === "pending" && (
        <p style={{ color: "#71717a", fontSize: 14 }}>Verifying TikTok response…</p>
      )}
    </div>
  );
}
