import type { Metadata } from "next";
import { geistSans, geistMono } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clipship.co"),
  referrer: "no-referrer",
  icons: { icon: "/icon.svg", shortcut: "/favicon.ico" },
};

// This must remain a separate ROOT layout, not a child of the marketing layout.
// Cross-root navigation loads a fresh document without GA, Clarity or attribution.
export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      </head>
      <body className="min-h-full bg-[#09090b] text-zinc-100">{children}</body>
    </html>
  );
}
