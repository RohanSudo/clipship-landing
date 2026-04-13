import type { Metadata } from "next";
import AudiencePage, { type AudienceData } from "../../components/AudiencePage";

export const metadata: Metadata = {
  title: "ClipShip for Coaches and Consultants - Content from Every Call",
  description:
    "Turn your coaching sessions and webinars into edited content and social media clips. Private, local processing. Your client content stays on your machine.",
};

const data: AudienceData = {
  audience: "Coaches & Consultants",
  headline: "Every call is content. Stop wasting it.",
  subheadline:
    "You talk for a living. Every coaching call, webinar, and presentation is a goldmine of content waiting to be repurposed. ClipShip does the extraction for you.",
  painPoint: { stat: "6hrs", label: "to manually edit and clip each recording" },
  problem: "You already have the content",
  problemDetail:
    "As a coach or consultant, you talk for a living. Group calls, webinars, Q&A sessions, presentations. Every one of these is a goldmine of content. The problem isn\u2019t creating content\u2014it\u2019s extracting and editing it. You don\u2019t have 6 hours to edit each recording. You have clients to serve.",
  features: [
    {
      icon: "clips",
      title: "Automatic clip extraction",
      detail: "AI finds your best teaching moments, sharpest insights, and most quotable statements from any recording.",
    },
    {
      icon: "shield",
      title: "Client confidentiality",
      detail: "Recordings never leave your machine. No cloud uploads. No third-party access. Use it with full confidence.",
    },
    {
      icon: "captions",
      title: "Captions in 99 languages",
      detail: "Coach clients internationally? Transcription and captions in 99 languages. Most tools only do English.",
    },
    {
      icon: "format",
      title: "Every platform covered",
      detail: "Clips formatted for LinkedIn, Instagram Reels, TikTok, and YouTube Shorts. Post one per day for a week of content.",
    },
    {
      icon: "users",
      title: "Works for every format",
      detail: "1-on-1 calls, group sessions, webinars, keynotes, podcasts, Q&A sessions. If you\u2019re talking, ClipShip can clip it.",
    },
    {
      icon: "clock",
      title: "Content strategy on autopilot",
      detail: "One 60-minute webinar gives you 3\u20135 social clips. Each with title, hook, and captions ready to post.",
    },
  ],
  output: {
    label: "One coaching session gives you",
    formats: [
      "3\u20135 social media clips with titles and hooks",
      "Captioned clips for LinkedIn, Instagram, TikTok",
      "YouTube Shorts from your best moments",
      "A week of content from a single session",
    ],
  },
  whyLocal: {
    title: "Client confidentiality is non-negotiable",
    detail:
      "Coaches handle sensitive client conversations. Business strategies, personal challenges, financial details. Uploading these recordings to a cloud editing service is a risk. ClipShip runs entirely on your computer. Your recordings, transcripts, and clips never leave your machine. Of course, only repurpose content you have permission to share publicly. ClipShip gives you the tool\u2014the judgment of what to post is yours.",
  },
  builtFor:
    "Most coaches know they should post on social media. Few have time to edit and repurpose content consistently. ClipShip changes the equation\u2014drop in your session recording, get clips out, post them throughout the week. Your expertise is already there. ClipShip just helps people see it.",
};

export default function ForCoaches() {
  return <AudiencePage data={data} />;
}
