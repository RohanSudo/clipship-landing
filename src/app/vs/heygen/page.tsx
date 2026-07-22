import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs HeyGen Highlights: HeyGen Alternative (2026)",
  description:
    "Local HeyGen Instant Highlights alternative. Both repurpose long videos into short-form clips. HeyGen has stronger search control and translation; ClipShip runs on your PC without usage credits.",
  alternates: {
    canonical: "https://clipship.co/vs/heygen",
  },
};

const data: ComparisonData = {
  competitor: "HeyGen Highlights",
  competitorTagline:
    "HeyGen Instant Highlights V2 repurposes long videos into short-form clips in the cloud. Its stronger extras are search control and translation. ClipShip focuses on local AI clip suggestions on your PC without usage credits.",
  verdict:
    "HeyGen Instant Highlights V2 is a cloud clip generator. ClipShip is the local alternative for AI clip suggestions, face tracking, multi-speaker handling, and captions.",
  verdictDetail:
    "The split is simple: HeyGen processes on its servers with monthly credits. ClipShip processes on your PC and offers monthly or one-time Pro without clip credits.",
  features: [
    { feature: "AI clip suggestions", clipship: "yes", competitor: "yes" },
    { feature: "Prompt-based clip search", clipship: "no", competitor: "yes" },
    { feature: "Face tracking", clipship: "yes", competitor: "yes" },
    { feature: "Multi-speaker handling", clipship: "yes", competitor: "yes" },
    { feature: "Word-level captions", clipship: "yes", competitor: "yes" },
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
      title: "No clip credits, with a lifetime option",
      detail:
        "HeyGen’s plans run $24/mo and up with credit caps. ClipShip starts at $5/month for founding subscribers and also offers a $99 lifetime option without clip credits.",
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
      "You care about privacy, want to clip unlimited recordings on your own machine, and prefer a low monthly price or a lifetime option. Especially if your content is sensitive or you travel without reliable internet.",
    competitor:
      "You need to translate clips into 175+ languages as part of the clip flow, you want 4K upscaling built in, or you’re already using HeyGen for AI avatars and want everything in one cloud workspace.",
  },
  bottomLine:
    "HeyGen Instant Highlights V2 and ClipShip do the same core job. If cloud processing and translation are a fit, HeyGen is strong. If local processing, no usage credits, and payment choice matter more, ClipShip is the cleaner buy.",
};

export default function VsHeyGen() {
  return <ComparisonPage data={data} />;
}
