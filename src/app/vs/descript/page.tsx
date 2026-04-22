import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs Descript (2026): Clip Generator vs Text Editor",
  description:
    "ClipShip extracts vertical viral clips from long recordings. Descript is a text-based long-form editor with AI assists. Different jobs—here’s which one you need.",
};

const data: ComparisonData = {
  competitor: "Descript",
  competitorTagline:
    "Descript is a text-based video and podcast editor where you control every cut. ClipShip is a clip generator that finds the best 30–90 second moments and formats them for short-form platforms.",
  verdict:
    "Descript gives you a full editing suite. ClipShip gives you a grid of ready-to-post vertical clips. If you need clips, you want ClipShip. If you need a text-based editor for long-form or podcasts, you want Descript.",
  verdictDetail:
    "These solve different problems. Descript is for editing; ClipShip is for clipping. Descript’s built-in clip-extraction (Underlord) is secondary to the editor. ClipShip is built around clip extraction from the ground up.",
  features: [
    { feature: "Short-form clip extraction", clipship: "yes", competitor: "partial" },
    { feature: "Prompt-based clip search", clipship: "yes", competitor: "partial" },
    { feature: "Face tracking + vertical format", clipship: "yes", competitor: "partial" },
    { feature: "Multi-speaker handling", clipship: "yes", competitor: "yes" },
    { feature: "Word-level captions", clipship: "yes", competitor: "yes" },
    { feature: "Text-based editing", clipship: "no", competitor: "yes" },
    { feature: "Screen recording", clipship: "no", competitor: "yes" },
    { feature: "Eye contact AI", clipship: "no", competitor: "yes" },
    { feature: "Team collaboration", clipship: "no", competitor: "yes" },
    { feature: "Local processing", clipship: "yes", competitor: "no" },
    { feature: "One-time price", clipship: "yes", competitor: "no" },
    { feature: "Unlimited processing", clipship: "yes", competitor: "no" },
  ],
  clipshipWins: [
    {
      title: "Built for clips, not editing",
      detail:
        "Descript’s clip extraction (Underlord) is a feature inside an editor. ClipShip is purpose-built for clip extraction—face tracking, vertical output, multi-speaker detection, and prompt-based search are the core, not add-ons.",
    },
    {
      title: "Your footage never uploads",
      detail:
        "Descript processes everything through their cloud. For sensitive content—coaching, consulting, course material—that’s a risk. ClipShip runs entirely on your PC.",
    },
    {
      title: "One-time price, no subscription",
      detail:
        "Descript plans run $24–$65/mo with hour caps. ClipShip is paid once, used forever. Four months of Descript roughly equals a lifetime license.",
    },
    {
      title: "No caps on processing",
      detail:
        "Descript meters by transcription hours. ClipShip has no caps—batch a full quarter of recordings in one sitting.",
    },
  ],
  competitorWins: [
    {
      title: "Full text-based editing",
      detail:
        "If you want to edit a long podcast or interview by editing its transcript, Descript is unmatched. ClipShip doesn’t do long-form editing.",
    },
    {
      title: "Screen recording + eye contact AI",
      detail:
        "Built-in screen recording and AI eye-contact correction for anyone who records off-camera glances. ClipShip doesn’t have these.",
    },
    {
      title: "Team collaboration",
      detail:
        "Multiple editors can work on the same project with comments and version history. ClipShip is a single-user desktop app.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You record long-form talking-head content (podcasts, webinars, interviews) and want the best 30–90 second clips auto-extracted for short-form platforms. Especially if you care about privacy or don’t want another subscription.",
    competitor:
      "You need to edit long-form content in a text-based editor, collaborate with a team, or use features like AI eye contact and built-in screen recording.",
  },
  bottomLine:
    "Descript is a powerful editor with clip extraction bolted on. ClipShip is a purpose-built clip generator. If your bottleneck is finding and posting clips, ClipShip is built for that job. If your bottleneck is editing, Descript is the editor.",
};

export default function VsDescript() {
  return <ComparisonPage data={data} />;
}
