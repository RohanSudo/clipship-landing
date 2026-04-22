import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs CapCut (2026): AI Clip Generator vs Editor",
  description:
    "ClipShip auto-extracts viral clips from long recordings. CapCut is a general-purpose timeline editor. Different tools—here’s which one fits your workflow.",
};

const data: ComparisonData = {
  competitor: "CapCut",
  competitorTagline:
    "CapCut is a full timeline editor with AI features bolted on. ClipShip is an AI clip generator—drop in a long recording, get vertical clips out automatically, no timeline needed.",
  verdict:
    "CapCut is a versatile editor you drive manually. ClipShip automatically extracts clips from long recordings. If you want automation for talking-head content, ClipShip. If you want manual creative control, CapCut.",
  verdictDetail:
    "Worth noting: CapCut is owned by ByteDance (TikTok’s parent). Cloud features route your footage through their servers. ClipShip runs entirely on your PC.",
  features: [
    { feature: "Automatic clip extraction", clipship: "yes", competitor: "no" },
    { feature: "Prompt-based clip search", clipship: "yes", competitor: "no" },
    { feature: "Face tracking + vertical format", clipship: "yes", competitor: "partial" },
    { feature: "Multi-speaker handling", clipship: "yes", competitor: "no" },
    { feature: "Word-level captions", clipship: "yes", competitor: "yes" },
    { feature: "Timeline editor", clipship: "no", competitor: "yes" },
    { feature: "Creative effects/filters", clipship: "no", competitor: "yes" },
    { feature: "Music and sound library", clipship: "no", competitor: "yes" },
    { feature: "Local processing (no cloud)", clipship: "yes", competitor: "partial" },
    { feature: "Data privacy", clipship: "yes", competitor: "no" },
    { feature: "One-time price", clipship: "yes", competitor: "no" },
    { feature: "Unlimited processing", clipship: "yes", competitor: "no" },
  ],
  clipshipWins: [
    {
      title: "Auto clip extraction",
      detail:
        "CapCut can cut clips—but you do the work, frame by frame. ClipShip analyzes your transcript, finds the 10–15 best moments, and formats each one automatically.",
    },
    {
      title: "Privacy by default",
      detail:
        "CapCut is owned by ByteDance. Their cloud features process your footage through their servers. ClipShip keeps everything on your PC—necessary for sensitive content.",
    },
    {
      title: "One-time price, no subscription",
      detail:
        "CapCut Pro is $20/mo. ClipShip is paid once. After five months of CapCut you’ve spent more than ClipShip costs for life.",
    },
    {
      title: "No learning curve",
      detail:
        "CapCut requires you to learn timelines, transitions, and effects. ClipShip requires you to drop a file and pick a caption style.",
    },
  ],
  competitorWins: [
    {
      title: "Creative versatility",
      detail:
        "Full timeline editor with effects, transitions, filters, text animations, and a massive template library. Perfect for creative short-form content beyond talking-head.",
    },
    {
      title: "Built-in music and sound effects",
      detail:
        "Large library of royalty-free music and sound effects. ClipShip doesn’t ship a music library.",
    },
    {
      title: "Works for any content type",
      detail:
        "Vlogs, montages, music videos, memes—CapCut handles any format. ClipShip is specialized for talking-head.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You record talking-head content (YouTube, podcasts, courses, coaching) and want the clip extraction automated. You value privacy and don’t want another subscription.",
    competitor:
      "You create diverse content types, enjoy hands-on editing, want access to templates and effects, and are OK with cloud processing through ByteDance.",
  },
  bottomLine:
    "CapCut is a great general editor for people who enjoy editing. ClipShip is an AI clip generator for people who don’t. If you’re sitting on hours of talking-head recordings and want clips out without touching a timeline, ClipShip does that job in one step.",
};

export default function VsCapCut() {
  return <ComparisonPage data={data} />;
}
