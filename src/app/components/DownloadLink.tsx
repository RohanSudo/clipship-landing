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
}: {
  source: string;
  className: string;
  children: ReactNode;
  platform?: DownloadPlatform;
}) {
  return (
    <a
      href={downloadFallbackUrl(source, platform)}
      onClick={(event) => {
        event.currentTarget.href = buildDownloadUrl(source, platform);
        trackDownloadClick(source, platform);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
