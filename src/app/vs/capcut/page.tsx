import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs CapCut (2026): Purpose-Built AI vs General Editor",
  description:
    "ClipShip vs CapCut compared. One is built for talking-head creators, the other is a general-purpose editor. Features, pricing, privacy concerns, and honest recommendations.",
};

const data: ComparisonData = {
  competitor: "CapCut",
  competitorTagline:
    "CapCut is a full timeline editor with AI features bolted on. ClipShip is purpose-built for talking-head creators who don\u2019t want to touch a timeline.",
  verdict:
    "CapCut is versatile and popular. ClipShip is specialized and automatic. If you make talking-head content, ClipShip gets you from raw recording to finished videos with zero editing skills.",
  verdictDetail:
    "Worth noting: CapCut is owned by ByteDance (TikTok\u2019s parent company). Your footage is processed through their servers. ClipShip runs entirely on your PC.",
  clipshipPrice: "$79\u201399",
  competitorPrice: "$15\u2013$20/mo",
  features: [
    { feature: "Automated full edit", clipship: "yes", competitor: "no" },
    { feature: "AI clip extraction", clipship: "yes", competitor: "no" },
    { feature: "Local processing", clipship: "yes", competitor: "partial" },
    { feature: "Timeline editor", clipship: "no", competitor: "yes" },
    { feature: "Creative effects/filters", clipship: "no", competitor: "yes" },
    { feature: "Auto captions", clipship: "yes", competitor: "yes" },
    { feature: "Silence removal", clipship: "yes", competitor: "partial" },
    { feature: "Templates library", clipship: "partial", competitor: "yes" },
    { feature: "One-time pricing", clipship: "yes", competitor: "no" },
    { feature: "Data privacy", clipship: "yes", competitor: "no" },
    { feature: "Free tier", clipship: "Unlimited, 720p", competitor: "Limited, watermark" },
  ],
  clipshipWins: [
    {
      title: "Zero learning curve",
      detail: "Drop in a recording, get finished videos. No timeline, no learning CapCut\u2019s interface, no manual editing decisions.",
    },
    {
      title: "Automatic clip extraction",
      detail: "AI finds your best 30\u201390 second moments and formats them for every platform. CapCut has no clip extraction.",
    },
    {
      title: "Privacy",
      detail: "Everything stays on your PC. CapCut is owned by ByteDance\u2014your footage goes through their cloud. For sensitive content, this matters.",
    },
    {
      title: "Pricing",
      detail: "CapCut Pro is now $180/year. ClipShip Pro is $79\u201399 once. You save money from month one.",
    },
  ],
  competitorWins: [
    {
      title: "Creative versatility",
      detail: "Full timeline editor with effects, transitions, filters, text animations, and a massive template library. Great for creative short-form content.",
    },
    {
      title: "Music and sound effects",
      detail: "Large built-in library of royalty-free music, sound effects, and audio tools.",
    },
    {
      title: "Multi-format editing",
      detail: "Works for any video type\u2014vlogs, montages, music videos, not just talking-head. ClipShip is specialized.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You make talking-head content (YouTube, courses, coaching) and want the edit automated. You value privacy and want to pay once instead of monthly.",
    competitor:
      "You create diverse content types and enjoy the creative editing process. You want effects, transitions, and full creative control over your videos.",
  },
  bottomLine:
    "CapCut is a great general editor. ClipShip is a specialized pipeline for talking-head creators. If you spend hours cutting dead air and reformatting for multiple platforms, ClipShip eliminates that work entirely. If you enjoy the creative editing process, CapCut gives you more tools to play with.",
};

export default function VsCapCut() {
  return <ComparisonPage data={data} />;
}
