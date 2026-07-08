"use client";

import type { ReactNode } from "react";
import { buildDownloadUrl, downloadFallbackUrl, trackDownloadClick } from "../lib/download-attribution";

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
}: {
  source: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={downloadFallbackUrl(source)}
      onClick={(event) => {
        event.currentTarget.href = buildDownloadUrl(source);
        trackDownloadClick(source);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
