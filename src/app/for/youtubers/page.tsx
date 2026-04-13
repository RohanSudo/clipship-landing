import type { Metadata } from "next";
import AudiencePage, { type AudienceData } from "../../components/AudiencePage";

export const metadata: Metadata = {
  title: "ClipShip for YouTubers - Edit Talking-Head Videos in Minutes",
  description:
    "Stop spending 4-8 hours editing each YouTube video. ClipShip uses local AI to edit your talking-head recordings and find the best clips for Shorts. No cloud, no subscription.",
};

const data: AudienceData = {
  audience: "YouTubers",
  headline: "Stop editing. Start uploading.",
  subheadline:
    "You record great content. Editing shouldn\u2019t take longer than recording. Drop your talking-head video in, get a full edit + Shorts out.",
  painPoint: { stat: "4\u20138hrs", label: "spent editing each talking-head video" },
  problem: "The problem every YouTuber knows",
  problemDetail:
    "You hit record. Talk for 20 minutes. Great content, real value, solid energy. Then you open Premiere and spend the next 4\u20138 hours cutting dead air, adding zoom cuts, syncing captions, and reformatting for Shorts. The recording took 20 minutes. The edit takes a full workday. Something is broken.",
  features: [
    {
      icon: "scissors",
      title: "Removes dead air and mistakes",
      detail: "AI analyzes your transcript and cuts silences, filler words, and false starts automatically.",
    },
    {
      icon: "zoom",
      title: "Adds zoom cuts",
      detail: "Punches in at the right moments\u2014emphasis, emotion, transitions\u2014so the video feels dynamic.",
    },
    {
      icon: "captions",
      title: "Generates captions",
      detail: "Word-level timing with keyword highlights. Burned into the video, ready for every platform.",
    },
    {
      icon: "clips",
      title: "Finds your best clips",
      detail: "AI picks the 3\u20135 most engaging 30\u201390 second moments for YouTube Shorts, with titles and hooks.",
    },
    {
      icon: "format",
      title: "Formats for every platform",
      detail: "One recording gives you 16:9 for YouTube, 9:16 for Shorts, Reels, and TikTok.",
    },
    {
      icon: "globe",
      title: "99 languages",
      detail: "Transcription and captions in 99 languages. Create for any audience, anywhere.",
    },
  ],
  output: {
    label: "One recording, all platforms",
    formats: [
      "Full edited video (16:9) for YouTube",
      "3\u20135 short clips (9:16) for YouTube Shorts",
      "Same clips formatted for Instagram Reels",
      "Same clips formatted for TikTok",
    ],
  },
  whyLocal: {
    title: "Why local matters for YouTubers",
    detail:
      "Cloud tools upload your footage to their servers. That means waiting for uploads, hoping their servers are fast, and trusting them with your unreleased content. ClipShip runs on your PC. Processing starts instantly. No upload wait. No one else touches your footage. And it works offline\u2014edit on a plane, in a cafe, or anywhere without reliable internet.",
  },
  builtFor:
    "ClipShip is not a general-purpose editor. It\u2019s built specifically for the format YouTubers use most: one person talking to camera. The AI understands speech patterns, knows where emphasis lands, and picks zoom and cut points that feel natural. If your content is you sharing knowledge, telling stories, or teaching your audience, ClipShip is built for you.",
};

export default function ForYouTubers() {
  return <AudiencePage data={data} />;
}
