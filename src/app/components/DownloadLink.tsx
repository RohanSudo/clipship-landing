"use client";

import type { ReactNode } from "react";
import {
  buildDownloadUrl,
  downloadFallbackUrl,
  trackDownloadClick,
  type DownloadPlatform,
} from "../lib/download-attribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export default function DownloadLink({
  source,
  className,
  children,
  platform = "windows",
  referralCode = "",
  creatorCode = "",
  creatorClickId = "",
}: {
  source: string;
  className: string;
  children: ReactNode;
  platform?: DownloadPlatform;
  referralCode?: string;
  creatorCode?: string;
  creatorClickId?: string;
}) {
  return (
    <a
      href={downloadFallbackUrl(source, platform, referralCode, creatorCode, creatorClickId)}
      onClick={(event) => {
        event.currentTarget.href = buildDownloadUrl(source, platform, referralCode, creatorCode, creatorClickId);
        trackDownloadClick(source, platform);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
