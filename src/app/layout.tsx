import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-K0DSFVRC50";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clipship.co"),
  title: "ClipShip: Local AI Video Repurposing | OpusClip Alternative",
  description:
    "Repurpose long talking-head recordings into 10-15 ready-to-post clips for Reels, Shorts, and TikTok. Runs locally on your PC. OpusClip and HeyGen alternative.",
  openGraph: {
    title: "ClipShip | Local AI Video Repurposing. Long videos in, clips out.",
    description:
      "Local alternative to OpusClip and HeyGen Instant Highlights. Repurpose long recordings into ready-to-post clips for Reels, Shorts, and TikTok. One-time price.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipShip | Local AI Video Repurposing. Long videos in, clips out.",
    description:
      "Local alternative to OpusClip and HeyGen Instant Highlights. Repurpose long recordings into ready-to-post clips for Reels, Shorts, and TikTok. One-time price.",
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
      <head>
        <script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "ClipShip",
          "applicationCategory": "MultimediaApplication",
          "operatingSystem": "Windows",
          "offers": {
            "@type": "Offer",
            "price": "99",
            "priceCurrency": "USD",
            "description": "ClipShip Pro is $99 one-time for one device. Free tier available after the 7-day Pro trial."
          },
          "description": "Desktop app that repurposes long talking-head recordings into ready-to-post clips for Reels, Shorts, and TikTok. Local alternative to OpusClip and HeyGen Instant Highlights. Runs on your PC with AI. No cloud, no subscription.",
          "url": "https://clipship.co",
          "image": "https://clipship.co/opengraph-image",
          "author": {
            "@type": "Organization",
            "name": "ClipShip",
            "url": "https://clipship.co"
          }
        }` }} />
      </head>
      <body className="min-h-full flex flex-col">
        {gaMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        )}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w2oobyx4su");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
