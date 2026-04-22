import type { Metadata } from "next";
import AudiencePage, { type AudienceData } from "../../components/AudiencePage";

export const metadata: Metadata = {
  title: "ClipShip for Course Creators: Promo Clips From Lessons",
  description:
    "Turn every course lesson into a week of promo clips. Local AI finds the best moments, formats them for social. Your unreleased lesson IP never leaves your PC.",
};

const data: AudienceData = {
  audience: "Course Creators",
  headline: "Promo clips from every lesson. Without uploading your course.",
  subheadline:
    "Your course sells when people see your teaching on social. ClipShip finds the best 30–90 second moments from each lesson recording, formats them for short-form, and keeps your IP on your machine.",
  painPoint: { stat: "30+", label: "promo clips hiding in a 10-lesson course" },
  problem: "The course creator’s social-content gap",
  problemDetail:
    "You recorded 10 lessons for your course. Each one is 20–40 minutes of real teaching. Inside each lesson are 3–5 moments that would sell the course on Instagram, TikTok, and YouTube Shorts—the “aha” insights, the contrarian takes, the hot examples. But extracting those moments takes hours per lesson, and you don’t want to upload unreleased course content to a cloud clip generator. So the promo clips never get made. And the course sits without the social fuel it needs.",
  features: [
    {
      icon: "clips",
      title: "Auto-extract teaching moments",
      detail: "AI finds the 3–5 strongest moments from each lesson—the insights, the stories, the contrarian takes. The stuff that sells the course.",
    },
    {
      icon: "zoom",
      title: "Prompt-based search",
      detail: "Type what you want: “the aha moments,” “the examples,” “when I break down the framework.” The AI pulls those specifically.",
    },
    {
      icon: "shield",
      title: "Course IP stays private",
      detail: "Your unreleased lessons never leave your machine. No cloud uploads, no third-party access. Process with confidence.",
    },
    {
      icon: "captions",
      title: "Captions in 99 languages",
      detail: "Word-level captions with keyword highlights. Accessible clips in any language your audience speaks.",
    },
    {
      icon: "format",
      title: "Vertical 9:16 ready to post",
      detail: "Face-tracked crop keeps you centered. Clips formatted for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn.",
    },
    {
      icon: "users",
      title: "Multi-speaker support",
      detail: "Interview or conversation format? AI tracks whoever is talking so each speaker stays in frame.",
    },
  ],
  output: {
    label: "One lesson recording gives you",
    formats: [
      "3–5 vertical promo clips per lesson",
      "Each clip with title, hook, and captions baked in",
      "Ready for Instagram Reels, TikTok, YouTube Shorts, LinkedIn",
      "Works with Teachable, Kajabi, Thinkific, Udemy, Skillshare",
    ],
  },
  whyLocal: {
    title: "Why privacy matters for course content",
    detail:
      "Your course content is your intellectual property. It’s what you sell. Uploading unreleased lessons to a cloud clip generator means trusting a third party with your revenue source. ClipShip processes everything on your computer. Your lessons never leave your machine. No cloud uploads, no third-party access, no risk of leaks.",
  },
  builtFor:
    "Your course sells itself when people see your best moments on social media. ClipShip finds those moments automatically and formats them for every platform—while keeping your unreleased lessons entirely on your machine. Stop stockpiling content you can’t safely clip, and start shipping promos from every lesson you record.",
};

export default function ForCourseCreators() {
  return <AudiencePage data={data} />;
}
