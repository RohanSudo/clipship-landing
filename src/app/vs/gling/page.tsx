import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs Gling (2026): Which Talking-Head Video Editor Is Better?",
  description:
    "Honest comparison of ClipShip and Gling for editing talking-head videos. Pricing, features, local vs cloud, and which one is right for you.",
};

const data: ComparisonData = {
  competitor: "Gling",
  competitorTagline:
    "Both tools help solo creators edit talking-head videos faster. But they take very different approaches. Here\u2019s an honest comparison.",
  verdict:
    "Gling removes silences and mistakes from your videos. ClipShip does that AND finds the best clips for short-form platforms.",
  verdictDetail:
    "The biggest difference: Gling is cloud-only (your footage uploads to their servers). ClipShip runs entirely on your PC. Your videos never leave your machine.",
  features: [
    { feature: "Silence removal", clipship: "yes", competitor: "yes" },
    { feature: "Full video edit", clipship: "yes", competitor: "yes" },
    { feature: "Short-form clip extraction", clipship: "yes", competitor: "no" },
    { feature: "Captions (burned in)", clipship: "yes", competitor: "SRT export" },
    { feature: "Local processing", clipship: "yes", competitor: "no" },
    { feature: "Multi-language (99)", clipship: "yes", competitor: "no" },
    { feature: "AI B-roll generation", clipship: "partial", competitor: "yes" },
    { feature: "Premiere/Resolve export", clipship: "no", competitor: "yes" },
    { feature: "Unlimited processing", clipship: "yes", competitor: "no" },
  ],
  clipshipWins: [
    {
      title: "Privacy",
      detail: "Your footage stays on your machine. No uploads to anyone\u2019s servers. Essential for coaching calls, course material, and client work.",
    },
    {
      title: "Short-form clips",
      detail: "Gling only gives you an edited long-form video. ClipShip also finds the best 30\u201390 second moments and formats them for Reels, Shorts, and TikTok.",
    },
    {
      title: "Language support",
      detail: "Gling only works in English. ClipShip supports 99 languages for transcription and captions.",
    },
  ],
  competitorWins: [
    {
      title: "Established workflow",
      detail: "Gling has been around longer and has a polished cloud workflow with Premiere Pro and DaVinci Resolve integration.",
    },
    {
      title: "AI B-roll + speech enhancement",
      detail: "Their AI B-roll generation and speech enhancement features are genuinely useful for YouTube videos.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You record talking-head videos and want the full edit done for you, plus clips for short-form platforms. Especially if you care about privacy or create content in languages other than English.",
    competitor:
      "You want silence removal as part of a Premiere/Resolve workflow. If you already edit in a traditional timeline and just want the grunt work automated.",
  },
  bottomLine:
    "Gling is a good silence remover. ClipShip is a full editing pipeline that also extracts clips. If editing is your bottleneck and you want one tool that handles everything from raw footage to published content across all platforms, ClipShip is the more complete solution.",
};

export default function VsGling() {
  return <ComparisonPage data={data} />;
}
