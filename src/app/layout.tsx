import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClipShip  | Auto-edit talking-head videos. Ship to every platform.",
  description:
    "Desktop app that turns raw talking-head footage into edited, platform-ready videos. Drop files in, pick a style, ship to YouTube, TikTok, Instagram. No timeline, no cloud, no subscription.",
  openGraph: {
    title: "ClipShip  | Stop editing. Start shipping.",
    description:
      "Desktop app that auto-edits your talking-head videos. Local AI, no subscription, one-time purchase.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipShip  | Stop editing. Start shipping.",
    description:
      "Desktop app that auto-edits your talking-head videos. Local AI, no subscription.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w2oobyx4su");`}
      </Script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
