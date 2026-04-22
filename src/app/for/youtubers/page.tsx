import type { Metadata } from "next";
import AudiencePage, { type AudienceData } from "../../components/AudiencePage";

export const metadata: Metadata = {
  title: "ClipShip for YouTubers: Auto Shorts From Long Uploads",
  description:
    "Turn every long YouTube upload into 10–15 vertical Shorts, Reels, and TikToks automatically. Local AI clip generator, prompt-based search, runs on your PC.",
};

const data: AudienceData = {
  audience: "YouTubers",
  headline: "Every long upload hides 10 Shorts.",
  subheadline:
    "You already did the hard part—recording 20 minutes of great content. ClipShip finds the 10–15 moments inside it worth posting as Shorts, Reels, and TikTok.",
  painPoint: { stat: "10–15", label: "Shorts hiding in every long-form upload" },
  problem: "The problem every YouTuber knows",
  problemDetail:
    "You uploaded a 20-minute video. It did okay. But inside that video are 10–15 moments that would crush on Shorts, Reels, and TikTok—if only you had time to find them, cut them, reformat them, and caption them. So you post one Short a week. Maybe. The algorithm rewards consistency and you can’t keep up. Meanwhile your best content sits unused.",
  features: [
    {
      icon: "clips",
      title: "Finds your best moments",
      detail: "AI reads your transcript and picks the 10–15 strongest 30–90 second moments—strong hooks, complete thoughts, emotional peaks.",
    },
    {
      icon: "zoom",
      title: "Prompt-based clip search",
      detail: "Type what you want: “the stories,” “the hot takes,” “when I get fired up.” The AI pulls those moments out specifically.",
    },
    {
      icon: "captions",
      title: "Word-level captions baked in",
      detail: "Karaoke, Beast, Hormozi, Clean. Pick a style and captions burn into every clip with word-by-word highlights.",
    },
    {
      icon: "users",
      title: "Multi-speaker handling",
      detail: "Interview, podcast, panel? AI detects each speaker and tracks whoever is talking so no one gets cropped out of the frame.",
    },
    {
      icon: "format",
      title: "Vertical 9:16 out of the box",
      detail: "Face-tracked crop keeps the speaker centered. Clips ready for YouTube Shorts, Reels, and TikTok with no manual reframing.",
    },
    {
      icon: "globe",
      title: "99 languages",
      detail: "Transcription and captions in 99 languages. Most clip generators cap at 20.",
    },
  ],
  output: {
    label: "One long upload gives you",
    formats: [
      "10–15 vertical clips (9:16) with captions baked in",
      "Each clip with a title and hook suggestion",
      "Ready for YouTube Shorts, Instagram Reels, TikTok",
      "Stored on your disk, yours forever",
    ],
  },
  whyLocal: {
    title: "Why local matters for YouTubers",
    detail:
      "Cloud clip generators upload every minute of your footage to their servers. That means waiting for uploads on every recording, trusting them with unreleased content, and living with their credit caps. ClipShip runs on your PC. Processing starts instantly. No upload wait. No caps. No one else touches your footage. Works offline—batch clips on a plane, in a cafe, wherever you work.",
  },
  builtFor:
    "ClipShip is built for the format YouTubers use most: one person talking to camera. The AI understands speech patterns, knows what hooks look like, and picks moments that stand on their own as clips. If your content is you sharing knowledge, telling stories, or teaching your audience, ClipShip turns your long uploads into a month of short-form content—automatically.",
};

export default function ForYouTubers() {
  return <AudiencePage data={data} />;
}
