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
  title: "ClipShip | Edited video + clips from one recording. Runs locally.",
  description:
    "Desktop app for talking-head creators. Drop your recording in, get an edited YouTube video plus short clips for Reels, Shorts, and TikTok. Local AI on your PC. No cloud, no subscription.",
  openGraph: {
    title: "ClipShip | One recording. Edited video + clips for every platform.",
    description:
      "Drop your talking-head video in. Get an edited YouTube video + short clips for Reels, Shorts, TikTok. Local AI, no cloud, no subscription.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipShip | One recording. Edited video + clips for every platform.",
    description:
      "Drop your talking-head video in. Get an edited YouTube video + short clips for Reels, Shorts, TikTok. Local AI, no cloud, no subscription.",
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
      <script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ClipShip",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Windows",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free forever with local AI. Pro upgrade available."
        },
        "description": "Desktop app that edits your talking-head video and finds the best clips for Reels, Shorts, and TikTok. Runs locally on your PC with AI. No cloud, no subscription.",
        "url": "https://clipship.co",
        "image": "https://clipship.co/opengraph-image",
        "author": {
          "@type": "Organization",
          "name": "ClipShip",
          "url": "https://clipship.co"
        }
      }` }} />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w2oobyx4su");`}
      </Script>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
