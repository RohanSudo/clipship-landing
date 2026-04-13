import type { Metadata } from "next";
import AudiencePage, { type AudienceData } from "../../components/AudiencePage";

export const metadata: Metadata = {
  title: "ClipShip for Course Creators - Edit Lessons and Promote on Social",
  description:
    "Turn your course recordings into polished lessons and promotional clips. Local AI editing, no cloud uploads. Keep your course content private and secure.",
};

const data: AudienceData = {
  audience: "Course Creators",
  headline: "Edit 30 lessons without losing your mind.",
  subheadline:
    "Your course content is valuable. Edit it faster without uploading to someone else\u2019s servers. One recording gives you a polished lesson + promotional clips.",
  painPoint: { stat: "60\u2013120hrs", label: "to edit a 30-lesson course manually" },
  problem: "The course creator\u2019s editing bottleneck",
  problemDetail:
    "You recorded 30 lessons for your course. Each one needs dead air removed, sections tightened, captions added. At 2\u20134 hours per lesson, that\u2019s 60\u2013120 hours of editing for one course. Then you need promotional clips for social media to actually sell the course. Another round of editing for each platform.",
  features: [
    {
      icon: "book",
      title: "Batch process lessons",
      detail: "Drop each lesson recording in, get polished output. Process your entire course without the editing marathon.",
    },
    {
      icon: "scissors",
      title: "Automatic silence removal",
      detail: "Tighten your delivery without manual cutting. Dead air and false starts disappear.",
    },
    {
      icon: "captions",
      title: "Captions for accessibility",
      detail: "99 languages supported, word-level timing. Make your course accessible to everyone.",
    },
    {
      icon: "clips",
      title: "Promotional clips",
      detail: "AI finds the most engaging 30\u201390 second moments from each lesson. Perfect for social media teasers.",
    },
    {
      icon: "format",
      title: "Multi-platform formatting",
      detail: "One lesson gives you content for your course platform, YouTube, Instagram Reels, and TikTok.",
    },
    {
      icon: "shield",
      title: "Your IP stays private",
      detail: "Your course content is your revenue source. It never leaves your machine. No cloud uploads, no third-party access.",
    },
  ],
  output: {
    label: "One lesson recording gives you",
    formats: [
      "A polished lesson video for your course platform",
      "3\u20135 teaser clips showcasing your teaching style",
      "Captioned clips for Instagram, TikTok, YouTube Shorts",
      "Works with Teachable, Kajabi, Thinkific, Udemy, Skillshare",
    ],
  },
  whyLocal: {
    title: "Why privacy matters for course content",
    detail:
      "Your course content is your intellectual property. It\u2019s what you sell. Uploading unreleased lessons to a cloud editing tool means trusting a third party with your revenue source. ClipShip processes everything on your computer. Your lessons never leave your machine. No cloud uploads, no third-party access, no risk of leaks. Edit with confidence.",
  },
  builtFor:
    "Your course sells itself when people see your best moments on social media. ClipShip finds those moments automatically and formats them for every platform. Stop spending weeks editing and start spending that time creating your next course.",
};

export default function ForCourseCreators() {
  return <AudiencePage data={data} />;
}
