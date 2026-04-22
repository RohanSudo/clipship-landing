import type { Metadata } from "next";
import AudiencePage, { type AudienceData } from "../../components/AudiencePage";

export const metadata: Metadata = {
  title: "ClipShip for Coaches: Clips From Every Coaching Call",
  description:
    "Turn coaching sessions, webinars, and keynotes into social clips without uploading client recordings. Local AI clip generator, prompt-based search, 99 languages.",
};

const data: AudienceData = {
  audience: "Coaches & Consultants",
  headline: "Every call is content. Stop wasting it.",
  subheadline:
    "You talk for a living. Every coaching call, webinar, and keynote holds 10+ clip-worthy moments. ClipShip extracts them automatically—on your machine, never in the cloud.",
  painPoint: { stat: "10+", label: "clip-worthy moments in every 60-min call" },
  problem: "You already have the content",
  problemDetail:
    "Group calls, webinars, Q&A sessions, keynotes, podcast appearances. Every one of these is a goldmine of teachable moments. The problem isn’t creating content—it’s extracting it. You don’t have 3 hours to scrub through recordings. And you definitely don’t want to upload client conversations to a cloud clip generator. So the content just piles up.",
  features: [
    {
      icon: "clips",
      title: "Automatic clip extraction",
      detail: "AI finds your sharpest insights, most quotable statements, and strongest teaching moments from any recording.",
    },
    {
      icon: "zoom",
      title: "Prompt-based clip search",
      detail: "Type what you want: “the hot takes,” “the frameworks,” “when I push back on something.” The AI pulls those moments out.",
    },
    {
      icon: "shield",
      title: "Client confidentiality",
      detail: "Recordings never leave your machine. No cloud uploads. No third-party access. Use it with full confidence—even for recordings you can’t post.",
    },
    {
      icon: "users",
      title: "Multi-speaker handling",
      detail: "1-on-1 calls, group sessions, interview podcasts, panels. AI detects each speaker and tracks whoever is talking so the frame never feels wrong.",
    },
    {
      icon: "captions",
      title: "Captions in 99 languages",
      detail: "Coach clients internationally? Word-level captions in 99 languages. Most tools only do English.",
    },
    {
      icon: "clock",
      title: "A week of content from one session",
      detail: "One 60-minute call gives you 5+ vertical clips, each with title, hook, and captions—enough to post daily for a week.",
    },
  ],
  output: {
    label: "One coaching session gives you",
    formats: [
      "5–10 vertical clips with title and hook suggestions",
      "Captioned clips for LinkedIn, Instagram, TikTok",
      "YouTube Shorts from your best moments",
      "A week of content from a single session",
    ],
  },
  whyLocal: {
    title: "Client confidentiality is non-negotiable",
    detail:
      "Coaches and consultants handle sensitive conversations—business strategies, personal challenges, financial details. Uploading these recordings to a cloud clip generator is a risk. ClipShip runs entirely on your computer. Recordings, transcripts, and clips never leave your machine. Of course, only post content you have permission to share—ClipShip gives you the tool; the judgment of what to post stays with you.",
  },
  builtFor:
    "Most coaches know they should post on social media. Few have time to extract and repurpose content consistently. ClipShip changes the equation—drop in your session recording, get clips out, post them throughout the week. Your expertise is already there. ClipShip just helps people see it.",
};

export default function ForCoaches() {
  return <AudiencePage data={data} />;
}
