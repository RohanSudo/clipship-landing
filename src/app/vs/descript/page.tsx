import type { Metadata } from "next";
import ComparisonPage, { type ComparisonData } from "../../components/ComparisonPage";

export const metadata: Metadata = {
  title: "ClipShip vs Descript (2026): Automated Pipeline vs Full Editor",
  description:
    "ClipShip vs Descript compared. One automates your edit, the other gives you a text-based editor. Features and which approach is right for you.",
};

const data: ComparisonData = {
  competitor: "Descript",
  competitorTagline:
    "Descript is a powerful text-based editor where you control every cut. ClipShip is an automated pipeline where AI makes the decisions for you.",
  verdict:
    "Descript gives you a full editing suite with AI assists. ClipShip automates the entire edit so you don\u2019t have to touch a timeline.",
  verdictDetail:
    "If you want creative control over every cut, Descript is the better choice. If you want to drop in a recording and get finished videos out, ClipShip saves you hours.",
  features: [
    { feature: "Automated full edit", clipship: "yes", competitor: "no" },
    { feature: "Text-based editing", clipship: "no", competitor: "yes" },
    { feature: "AI clip extraction", clipship: "yes", competitor: "no" },
    { feature: "Silence removal", clipship: "yes", competitor: "yes" },
    { feature: "Filler word removal", clipship: "yes", competitor: "yes" },
    { feature: "Local processing", clipship: "yes", competitor: "no" },
    { feature: "Team collaboration", clipship: "no", competitor: "yes" },
    { feature: "Screen recording", clipship: "no", competitor: "yes" },
    { feature: "Eye contact AI", clipship: "no", competitor: "yes" },
    { feature: "Unlimited processing", clipship: "yes", competitor: "no" },
  ],
  clipshipWins: [
    {
      title: "Zero editing required",
      detail: "Drop in your recording, ClipShip handles everything. No timeline, no decisions, no learning curve. Descript still requires you to make every edit.",
    },
    {
      title: "Clip extraction",
      detail: "ClipShip finds the best 30\u201390 second moments for short-form. Descript has no automatic clip generation.",
    },
    {
      title: "Privacy",
      detail: "Everything runs on your PC. Descript processes through their cloud servers.",
    },
  ],
  competitorWins: [
    {
      title: "Creative control",
      detail: "Full text-based editing with timeline, transitions, effects, and granular control over every aspect of your video.",
    },
    {
      title: "Team collaboration",
      detail: "Multiple editors can work on the same project. Comments, version history, shared workspaces.",
    },
    {
      title: "Screen recording + eye contact",
      detail: "Built-in screen recording and AI eye contact correction\u2014features ClipShip doesn\u2019t have.",
    },
  ],
  whoShouldUse: {
    clipship:
      "You\u2019re a solo creator who records talking-head videos and wants the edit done for you automatically. You don\u2019t want to learn an editor or spend time on a timeline.",
    competitor:
      "You\u2019re part of a team that needs collaborative editing with full creative control. You enjoy the editing process and want fine-grained decisions.",
  },
  bottomLine:
    "Descript is a powerful editor for people who want control. ClipShip is for creators who want to skip the editing entirely. Different tools for different workflows\u2014but if your bottleneck is time spent editing, ClipShip eliminates it.",
};

export default function VsDescript() {
  return <ComparisonPage data={data} />;
}
