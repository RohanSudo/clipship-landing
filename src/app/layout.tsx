import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import AttributionCapture from "./components/AttributionCapture";
import "./globals.css";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-K0DSFVRC50";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ClipShip",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "AI video clip generator",
    operatingSystem: "Windows",
    url: "https://clipship.co",
    downloadUrl: "https://api.clipship.co/download/windows",
    image: "https://clipship.co/opengraph-image",
    description:
      "ClipShip is a local AI video clip generator for Windows. It turns long talking-head recordings into ready-to-post clips for YouTube Shorts, Instagram Reels, TikTok, and LinkedIn while keeping source footage on the user's computer.",
    featureList: [
      "Local AI clip selection",
      "YouTube link import",
      "Word-level captions",
      "Custom styled captions",
      "Face-tracking vertical reframe",
      "1080p Pro exports",
      "Free tier with 720p exports",
    ],
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier with unlimited local processing, 720p exports, and ClipShip watermark.",
      },
      {
        "@type": "Offer",
        price: "5",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "5",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
        description: "ClipShip Pro founding subscription is $5 per month for the first 50 paid subscribers. The rate remains while the subscription stays active.",
      },
      {
        "@type": "Offer",
        price: "99",
        priceCurrency: "USD",
        description: "ClipShip Pro is $99 one-time for one device. Includes no watermark, 1080p exports, and custom caption styles.",
      },
    ],
    author: {
      "@type": "Organization",
      name: "ClipShip",
      url: "https://clipship.co",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ClipShip",
    url: "https://clipship.co",
    logo: "https://clipship.co/icon.svg",
    sameAs: [
      "https://x.com/ClipShipApp",
      "https://instagram.com/ClipShipApp",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ClipShip",
    url: "https://clipship.co",
    description:
      "Official website for ClipShip, a local AI video clip generator and no-upload OpusClip alternative for Windows.",
  },
];

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
      "Local alternative to OpusClip and HeyGen Instant Highlights. Repurpose long recordings into ready-to-post clips for Reels, Shorts, and TikTok. Monthly or one-time Pro.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipShip | Local AI Video Repurposing. Long videos in, clips out.",
    description:
      "Local alternative to OpusClip and HeyGen Instant Highlights. Repurpose long recordings into ready-to-post clips for Reels, Shorts, and TikTok. Monthly or one-time Pro.",
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
      data-scroll-behavior="smooth"
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <script id="schema-markup" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <AttributionCapture />
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
