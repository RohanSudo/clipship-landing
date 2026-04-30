"use client";

// OAuth bridge page for Instagram (Meta).
//
// Why this exists: Meta's OAuth flow rejects http://localhost as a
// redirect URI - they require HTTPS on a domain we control. ClipShip
// is a desktop app that needs to capture the auth code via a local
// loopback listener. The fix is the standard "OAuth bridge" pattern:
//
//   1. ClipShip opens browser to Instagram OAuth, redirect_uri set
//      to https://clipship.co/oauth/instagram
//   2. User authorizes; Instagram redirects to this page with
//      ?code=XYZ&state=STATE
//   3. We parse `state` (which ClipShip embedded the local port
//      into) and JS-redirect to http://localhost:PORT/?code=...&state=...
//   4. ClipShip's local listener captures it
//
// The state parameter encodes the local port via a small JSON blob
// base64url'd, so this page can decode and route. If state parsing
// fails (unexpected format, attempted CSRF) we show an error UI
// instead of redirecting.

import { useEffect, useState } from "react";

type State = "pending" | "redirecting" | "error";

function decodeState(raw: string): { port: number } | null {
  // State format ClipShip uses: base64url-encoded JSON { port: number, nonce: string }.
  // If decoding fails or required fields missing, return null.
  try {
    // Convert base64url -> base64
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

export default function InstagramOAuthBridgePage() {
  const [status, setStatus] = useState<State>("pending");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    const oauthError = params.get("error");
    const oauthErrorDesc = params.get("error_description");

    if (oauthError) {
      setErrorMsg(`Instagram returned: ${oauthErrorDesc || oauthError}`);
      setStatus("error");
      return;
    }

    if (!code || !state) {
      setErrorMsg("This URL is missing the auth code or state. If you opened it manually, that's expected — only the live OAuth flow has these.");
      setStatus("error");
      return;
    }

    const decoded = decodeState(state);
    if (!decoded) {
      setErrorMsg("State parameter could not be decoded. Try connecting Instagram from ClipShip again.");
      setStatus("error");
      return;
    }

    // Build the localhost URL with the same code+state and redirect.
    // Using window.location.replace so the bridge page isn't kept in
    // browser history (user back-button doesn't return to a stale OAuth response).
    const target = `http://localhost:${decoded.port}/?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`;
    setStatus("redirecting");
    // Small delay so the user sees the "Returning to ClipShip..." message
    // and isn't surprised by the protocol switch from https to http localhost.
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
              background: "linear-gradient(135deg, rgba(232,121,164,0.18), rgba(232,121,164,0.04))",
              border: "1px solid rgba(232,121,164,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 24,
              fontSize: 26,
              color: "#e879a4",
            }}
          >
            ↩
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>Returning to ClipShip</h1>
          <p style={{ color: "#a1a1aa", fontSize: 14, maxWidth: 420 }}>
            Instagram authorized. Switching back to the app — you can close this tab if it doesn&apos;t happen automatically.
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
          <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>Instagram connect didn&apos;t complete</h1>
          <p style={{ color: "#a1a1aa", fontSize: 14, maxWidth: 480, lineHeight: 1.6, marginBottom: 16 }}>
            {errorMsg}
          </p>
          <p style={{ color: "#52525b", fontSize: 13 }}>
            You can close this tab and try again from inside ClipShip.
          </p>
        </>
      )}

      {status === "pending" && (
        <p style={{ color: "#71717a", fontSize: 14 }}>Verifying Instagram response…</p>
      )}
    </div>
  );
}
