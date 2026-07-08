const ATTRIBUTION_KEY = "clipship_first_touch_attribution_v1";
const ATTRIBUTION_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const DOWNLOAD_BASE_URL = "https://api.clipship.co/download/windows";

type AttributionRecord = {
  createdAt: number;
  landingPath: string;
  referrerHost: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

function clean(value: string | null | undefined, maxLength: number): string {
  return (value || "")
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength);
}

function currentPath(): string {
  if (typeof window === "undefined") return "/";
  return clean(`${window.location.pathname}${window.location.search}`, 300) || "/";
}

function externalReferrerHost(): string {
  if (typeof document === "undefined" || !document.referrer) return "";
  try {
    const referrer = new URL(document.referrer);
    if (referrer.hostname === window.location.hostname) return "";
    return clean(referrer.hostname, 160);
  } catch {
    return "";
  }
}

function readCurrentUtm(): Omit<AttributionRecord, "createdAt" | "landingPath" | "referrerHost"> {
  const params = typeof window === "undefined"
    ? new URLSearchParams()
    : new URLSearchParams(window.location.search);

  return {
    utmSource: clean(params.get("utm_source"), 120),
    utmMedium: clean(params.get("utm_medium"), 120),
    utmCampaign: clean(params.get("utm_campaign"), 160),
    utmTerm: clean(params.get("utm_term"), 160),
    utmContent: clean(params.get("utm_content"), 160),
  };
}

function readStoredAttribution(now: number): AttributionRecord | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AttributionRecord;
    if (!parsed.createdAt || now - parsed.createdAt > ATTRIBUTION_MAX_AGE_MS) {
      localStorage.removeItem(ATTRIBUTION_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function captureAttribution(): AttributionRecord | null {
  if (typeof window === "undefined") return null;

  const now = Date.now();
  const stored = readStoredAttribution(now);
  if (stored) return stored;

  const record: AttributionRecord = {
    createdAt: now,
    landingPath: currentPath(),
    referrerHost: externalReferrerHost(),
    ...readCurrentUtm(),
  };

  try {
    localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(record));
  } catch {
    // If storage is disabled, downloads still work with per-click data.
  }

  return record;
}

export function buildDownloadUrl(ctaSource: string): string {
  const firstTouch = captureAttribution();
  const currentUtm = readCurrentUtm();
  const params = new URLSearchParams({
    cta: clean(ctaSource, 120),
    current_path: currentPath(),
  });

  const add = (key: string, value: string | undefined | null) => {
    const cleaned = clean(value, key.includes("path") ? 300 : 160);
    if (cleaned) params.set(key, cleaned);
  };

  add("landing_path", firstTouch?.landingPath);
  add("referrer_host", firstTouch?.referrerHost);
  add("utm_source", firstTouch?.utmSource || currentUtm.utmSource);
  add("utm_medium", firstTouch?.utmMedium || currentUtm.utmMedium);
  add("utm_campaign", firstTouch?.utmCampaign || currentUtm.utmCampaign);
  add("utm_term", firstTouch?.utmTerm || currentUtm.utmTerm);
  add("utm_content", firstTouch?.utmContent || currentUtm.utmContent);

  return `${DOWNLOAD_BASE_URL}?${params.toString()}`;
}

export function downloadFallbackUrl(ctaSource: string): string {
  const params = new URLSearchParams({ cta: clean(ctaSource, 120) });
  return `${DOWNLOAD_BASE_URL}?${params.toString()}`;
}

export function trackDownloadClick(ctaSource: string) {
  if (typeof window === "undefined") return;
  const firstTouch = captureAttribution();
  window.gtag?.("event", "download_click", {
    event_category: "download",
    event_label: ctaSource,
    cta_source: ctaSource,
    traffic_source: firstTouch?.utmSource || firstTouch?.referrerHost || "direct",
    landing_path: firstTouch?.landingPath || currentPath(),
  });
  window.clarity?.("event", "download_click");
}
