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
  title: "ClipShip: Local AI Clip Generator | OpusClip Alternative",
  description:
    "Local AI clip generator for long talking-head recordings. Finds 10–15 viral clips per video, formats them for Reels, Shorts, TikTok. OpusClip & HeyGen alternative.",
  openGraph: {
    title: "ClipShip | Local AI Clip Generator. Long videos in, viral clips out.",
    description:
      "Local alternative to OpusClip and HeyGen Instant Highlights. AI finds viral clips in your long recordings, formats them for Reels, Shorts, and TikTok. One-time price.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipShip | Local AI Clip Generator. Long videos in, viral clips out.",
    description:
      "Local alternative to OpusClip and HeyGen Instant Highlights. AI finds viral clips in your long recordings, formats them for Reels, Shorts, and TikTok. One-time price.",
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
        "description": "Desktop app that extracts the best viral clips from your long talking-head recordings and formats them for Reels, Shorts, and TikTok. Local alternative to OpusClip and HeyGen Instant Highlights. Runs on your PC with AI. No cloud, no subscription.",
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
