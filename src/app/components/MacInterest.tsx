"use client";

import { useEffect, useState } from "react";
import { platformInterestPayload, trackPlatformInterest } from "../lib/download-attribution";

const STORAGE_KEY = "clipship_macos_interest_v1";

export default function MacInterest({ source }: { source: string }) {
  const [isMac, setIsMac] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    // iPhone and iPad user agents contain "like Mac OS X". Exclude them so
    // mobile visitors do not pollute macOS demand data.
    const isAppleMobile = /iphone|ipad|ipod/.test(userAgent)
      || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isMacDesktop = /macintosh|mac os x/.test(userAgent)
      || navigator.platform.toLowerCase().includes("mac");
    setIsMac(!isAppleMobile && isMacDesktop);
    try {
      if (localStorage.getItem(STORAGE_KEY) === "saved") setStatus("saved");
    } catch {
      // Interest can still be recorded when browser storage is disabled.
    }
  }, []);

  if (!isMac) return null;

  async function recordInterest() {
    if (status === "saving" || status === "saved") return;
    setStatus("saving");
    try {
      const response = await fetch("https://api.clipship.co/analytics/platform-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: "macos",
          ...platformInterestPayload(),
        }),
      });
      if (!response.ok) throw new Error("request failed");
      trackPlatformInterest("macos", source);
      try { localStorage.setItem(STORAGE_KEY, "saved"); } catch {}
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <p className="mt-4 text-sm text-zinc-500" aria-live="polite">
      {status === "saved" ? (
        "macOS interest recorded. Thank you."
      ) : (
        <>
          Using a Mac?{" "}
          <button
            type="button"
            onClick={recordInterest}
            disabled={status === "saving"}
            className="cursor-pointer font-medium text-zinc-300 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white disabled:cursor-wait disabled:opacity-60"
          >
            {status === "saving" ? "Recording..." : status === "error" ? "Try again" : "Tell me you want a macOS version"}
          </button>
        </>
      )}
    </p>
  );
}
