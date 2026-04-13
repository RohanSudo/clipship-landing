import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs OpusClip (2026): Local vs Cloud Clip Generator",
  description:
    "ClipShip vs OpusClip compared. One runs locally, one is cloud-only. Features, pricing, privacy, and which clip generator is right for you.",
};

const data: ComparisonData = {
  competitor: "OpusClip",
  competitorTagline:
    "OpusClip is the most popular cloud clip generator. ClipShip does the same thing locally on your PC\u2014and also edits the full video.",
  verdict:
    "OpusClip is a cloud-based clip generator. ClipShip runs locally and also edits the full video\u2014not just clips.",
  verdictDetail:
    "If you only need clips from existing YouTube videos, OpusClip is convenient. If you want full edit + clips from raw footage with total privacy, ClipShip is the better deal.",
  features: [
    { feature: "AI clip extraction", clipship: "yes", competitor: "yes" },
    { feature: "Full video edit", clipship: "yes", competitor: "no" },
    { feature: "Local processing", clipship: "yes", competitor: "no" },
    { feature: "Virality scoring", clipship: "yes", competitor: "yes" },
    { feature: "Auto captions", clipship: "yes", competitor: "yes" },
    { feature: "Social scheduling", clipship: "partial", competitor: "yes" },
    { feature: "Paste YouTube link", clipship: "no", competitor: "yes" },
    { feature: "Clips never expire", clipship: "yes", competitor: "no" },
    { feature: "Unlimited processing", clipship: "yes", competitor: "no" },
  ],
  clipshipWins: [
    {
      title: "Full edit + clips",
      detail: "OpusClip only generates clips. ClipShip also edits your full video\u2014silence removal, zoom cuts, captions\u2014all from one recording.",
    },
    {
      title: "Privacy",
      detail: "Your footage never leaves your PC. OpusClip requires uploading to their cloud servers.",
    },
    {
      title: "No expiring clips",
      detail: "OpusClip free clips expire after 3 days. ClipShip clips are yours forever, stored on your machine.",
    },
    {
      title: "No usage limits",
      detail: "OpusClip caps you at credits. ClipShip processes unlimited videos with no caps.",
    },
  ],
  competitorWins: [
    {
      title: "Paste a YouTube link",
      detail: "OpusClip can pull clips from any public YouTube video by URL. No need to have the source file.",
    },
    {
      title: "Social scheduling",
      detail: "Built-in scheduling to post clips directly to social platforms. ClipShip\u2019s scheduling is still in development.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You record your own talking-head videos and want both the full edit and clips from raw footage. You value privacy and local processing.",
    competitor:
      "You want to repurpose existing YouTube videos into clips without downloading source files. You\u2019re OK with cloud processing.",
  },
  bottomLine:
    "OpusClip is a solid cloud clip generator. ClipShip is a full local editing pipeline that also extracts clips. If you create original content and want everything from one tool with total privacy, ClipShip is the more complete choice.",
};

export default function VsOpusClip() {
  return <ComparisonPage data={data} />;
}
