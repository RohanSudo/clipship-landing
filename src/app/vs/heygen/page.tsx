import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs HeyGen Highlights: HeyGen Alternative (2026)",
  description:
    "Local HeyGen Instant Highlights alternative. Both find viral clips in long videos with prompt search and face tracking. ClipShip runs on your PC, one-time price.",
};

const data: ComparisonData = {
  competitor: "HeyGen Highlights",
  competitorTagline:
    "HeyGen Instant Highlights V2 finds viral clips inside long videos using prompt-based search. ClipShip does the same thing on your PC, with a one-time price.",
  verdict:
    "HeyGen Instant Highlights V2 is a cloud clip generator. ClipShip is the local alternative with the same core flow—prompt-based search, face tracking, multi-speaker handling, captions.",
  verdictDetail:
    "The split is simple: HeyGen charges per-month and processes on their servers. ClipShip is a one-time price and processes on your PC. Same job, different trust model.",
  features: [
    { feature: "Prompt-based clip search", clipship: "yes", competitor: "yes" },
    { feature: "Face tracking", clipship: "yes", competitor: "yes" },
    { feature: "Multi-speaker handling", clipship: "yes", competitor: "yes" },
    { feature: "Word-level captions", clipship: "yes", competitor: "yes" },
    { feature: "Virality score", clipship: "yes", competitor: "partial" },
    { feature: "Local processing", clipship: "yes", competitor: "no" },
    { feature: "One-time price", clipship: "yes", competitor: "no" },
    { feature: "Translate to 175+ languages", clipship: "no", competitor: "yes" },
    { feature: "4K upscale", clipship: "no", competitor: "yes" },
    { feature: "Unlimited usage", clipship: "yes", competitor: "no" },
    { feature: "Works offline", clipship: "yes", competitor: "no" },
  ],
  clipshipWins: [
    {
      title: "Your footage never uploads",
      detail:
        "HeyGen processes every clip on their servers. For coaching calls, course recordings, consulting sessions, and anything with sensitive material, that’s a non-starter. ClipShip runs entirely on your machine.",
    },
    {
      title: "One-time price vs subscription",
      detail:
        "HeyGen’s plans run $24/mo and up, billed monthly with credit caps. Four months of HeyGen roughly equals the entire lifetime price of ClipShip. After that, ClipShip is free to keep using forever.",
    },
    {
      title: "No credits, no caps",
      detail:
        "HeyGen meters usage by credits. Run out of credits mid-month and you wait or upgrade. ClipShip processes as many recordings as your disk can hold.",
    },
    {
      title: "Works offline",
      detail:
        "Travelling, on a plane, in a hotel with flaky WiFi? HeyGen needs upload bandwidth. ClipShip just needs your laptop.",
    },
  ],
  competitorWins: [
    {
      title: "Translate to 175+ languages",
      detail:
        "HeyGen can translate your clips into 175+ languages in the same workflow. ClipShip transcribes in 99 but doesn’t translate. If global reach is your priority, HeyGen has the feature.",
    },
    {
      title: "4K upscale included",
      detail:
        "HeyGen bundles 4K upscaling with the clip generation flow. ClipShip outputs at source resolution and doesn’t upscale.",
    },
    {
      title: "Brand-avatar ecosystem",
      detail:
        "HeyGen’s bigger play is AI avatars. If you also need avatar videos or talking-head synthesis, their ecosystem is broader.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You care about privacy, you don’t want a subscription, and you want to clip unlimited recordings on your own machine. Especially if your content is sensitive (coaching, consulting, course material) or you’re travelling without reliable internet.",
    competitor:
      "You need to translate clips into 175+ languages as part of the clip flow, you want 4K upscaling built in, or you’re already using HeyGen for AI avatars and want everything in one cloud workspace.",
  },
  bottomLine:
    "HeyGen Instant Highlights V2 and ClipShip do the same core job. If cloud + subscription + translation is a fit for you, HeyGen is a strong choice. If local + one-time + privacy is what you want, ClipShip is the cleaner buy.",
};

export default function VsHeyGen() {
  return <ComparisonPage data={data} />;
}
