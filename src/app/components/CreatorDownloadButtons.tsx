"use client";

import { useEffect, useState } from "react";
import PlatformDownloadButtons from "./PlatformDownloadButtons";

const API_BASE = "https://api.clipship.co";

function referrerHost() {
  if (!document.referrer) return "";
  try {
    return new URL(document.referrer).hostname;
  } catch {
    return "";
  }
}

export default function CreatorDownloadButtons({
  creatorCode,
  creatorSlug,
}: {
  creatorCode: string;
  creatorSlug: string;
}) {
  const [clickId, setClickId] = useState("");

  useEffect(() => {
    const id = crypto.randomUUID();
    fetch(`${API_BASE}/creator/click`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creatorCode,
        clickId: id,
        landingPath: window.location.pathname,
        referrerHost: referrerHost(),
        utmSource: new URLSearchParams(window.location.search).get("utm_source") || "",
        utmMedium: new URLSearchParams(window.location.search).get("utm_medium") || "creator",
        utmCampaign: new URLSearchParams(window.location.search).get("utm_campaign") || `creator-${creatorSlug}`,
      }),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Creator click was not accepted");
        const payload = await response.json() as { clickId?: string };
        const acceptedId = payload.clickId || id;
        setClickId(acceptedId);
      })
      .catch(() => {
        // Downloads still carry the creator code if click telemetry is
        // blocked. Account attribution can therefore fall back safely.
        setClickId("");
      });
  }, [creatorCode, creatorSlug]);

  return (
    <PlatformDownloadButtons
      source={`creator-${creatorSlug}`}
      variant="hero"
      creatorCode={creatorCode}
      creatorClickId={clickId}
    />
  );
}
