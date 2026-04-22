import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clipship.co";
  const now = new Date();

  return [
    // Main pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Comparison pages (primary: direct clip-generator competitors)
    { url: `${baseUrl}/vs/opus-clip`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/vs/heygen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // Comparison pages (secondary: adjacent tools with search-intent overlap)
    { url: `${baseUrl}/vs/descript`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/gling`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/vs/capcut`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Audience pages
    { url: `${baseUrl}/for/youtubers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/course-creators`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for/coaches`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Blog / SEO content
    { url: `${baseUrl}/blog/best-ai-video-clip-generators-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-make-clips-from-talking-head-videos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/best-free-video-editing-software-youtubers-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal / trust pages
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
