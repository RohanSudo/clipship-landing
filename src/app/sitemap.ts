import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clipship.co";
  const updated20260527 = new Date("2026-05-27T00:00:00.000Z");
  const updated20260522 = new Date("2026-05-22T00:00:00.000Z");
  const updated20260521 = new Date("2026-05-21T00:00:00.000Z");
  const updated20260520 = new Date("2026-05-20T00:00:00.000Z");
  const updated20260604 = new Date("2026-06-04T00:00:00.000Z");

  return [
    // Main pages
    { url: baseUrl, lastModified: updated20260522, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/changelog`, lastModified: updated20260604, changeFrequency: "monthly", priority: 0.5 },

    // Comparison pages (primary: direct clip-generator competitors)
    { url: `${baseUrl}/vs/opus-clip`, lastModified: updated20260527, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/vs/heygen`, lastModified: updated20260521, changeFrequency: "monthly", priority: 0.8 },
    // Comparison pages (secondary: adjacent tools with search-intent overlap)
    { url: `${baseUrl}/vs/descript`, lastModified: updated20260521, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/vs/gling`, lastModified: updated20260521, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/vs/capcut`, lastModified: updated20260521, changeFrequency: "monthly", priority: 0.6 },

    // High-intent SEO pages around ClipShip's local/no-upload differentiator
    { url: `${baseUrl}/local-ai-video-clip-generator`, lastModified: updated20260527, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/no-upload-opusclip-alternative`, lastModified: updated20260527, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/youtube-to-shorts-clip-maker`, lastModified: updated20260527, changeFrequency: "monthly", priority: 0.9 },

    // Audience pages
    { url: `${baseUrl}/for/youtubers`, lastModified: updated20260522, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/course-creators`, lastModified: updated20260522, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/coaches`, lastModified: updated20260522, changeFrequency: "monthly", priority: 0.8 },

    // Blog / SEO content
    { url: `${baseUrl}/blog/best-ai-video-clip-generators-2026`, lastModified: updated20260520, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/how-to-make-clips-from-talking-head-videos`, lastModified: updated20260520, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog/best-free-video-editing-software-youtubers-2026`, lastModified: updated20260520, changeFrequency: "monthly", priority: 0.6 },

    // Legal / trust pages
    { url: `${baseUrl}/privacy`, lastModified: updated20260521, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: updated20260521, changeFrequency: "yearly", priority: 0.4 },
  ];
}
