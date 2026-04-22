import type { Metadata } from "next";
import BlogArticlePage, {
  Section,
  Paragraph,
  BulletList,
  ToolCard,
  ComparisonTable,
  RecommendationCard,
} from "../../components/BlogArticlePage";

export const metadata: Metadata = {
  title: "Best Free Video Editing Software for YouTubers (2026)",
  description:
    "The best free video tools for YouTube creators in 2026. From full timeline editors to AI clip generators. Honest reviews with pricing and limitations.",
};

export default function BestFreeEditors() {
  return (
    <BlogArticlePage
      title="Best Free Video Editing Software for YouTubers (2026)"
      description="You shouldn't need to pay a fortune to edit YouTube videos—or to clip them. Here are the best free options in 2026."
      badge="Blog"
    >
      <Section title="Two different jobs">
        <Paragraph>
          Most YouTube creators actually have two jobs:
        </Paragraph>
        <BulletList items={[
          <><strong className="text-white">Editing</strong>: turning raw footage into a finished long-form video (cuts, captions, B-roll, sound).</>,
          <><strong className="text-white">Clipping</strong>: turning that finished video into short-form clips for Shorts, Reels, and TikTok.</>,
        ]} />
        <Paragraph>
          Most &ldquo;video editor&rdquo; lists only cover job one. This list covers both—so you can pick the
          right free tool for the job you actually have.
        </Paragraph>
      </Section>

      <div className="space-y-5 mb-14">
        <ToolCard
          tool={{
            rank: 1,
            name: "ClipShip (Free tier)",
            tagline: "Not a general editor—a clip generator. Drop a long recording in, AI finds the 10–15 best moments, formats them as vertical clips with captions baked in. Runs locally on your PC, no cloud upload.",
            highlight: true,
            details: [
              { label: "Free tier", value: "Unlimited clips, watermark" },
              { label: "Best feature", value: "Prompt-based clip search, face tracking" },
              { label: "Limitation", value: "Clip extraction only, not a full editor" },
              { label: "Platform", value: "Windows desktop (local)" },
            ],
          }}
        />
        <ToolCard
          tool={{
            rank: 2,
            name: "DaVinci Resolve (Free)",
            tagline: "Professional editor used in Hollywood. The free version has nearly every feature most YouTubers need for full edits. Steep learning curve but unmatched capability.",
            details: [
              { label: "Free tier", value: "Full editor, color grading, up to 4K" },
              { label: "Best feature", value: "Professional color correction" },
              { label: "Limitation", value: "Steep learning curve. Manual everything." },
              { label: "Platform", value: "Windows, Mac, Linux" },
            ],
          }}
        />
        <ToolCard
          tool={{
            rank: 3,
            name: "CapCut (Free tier)",
            tagline: "Beginner-friendly with templates, auto-captions, and effects. Great for creators who edit on both desktop and mobile.",
            details: [
              { label: "Free tier", value: "1080p, basic effects, auto-captions" },
              { label: "Best feature", value: "Template library and ease of use" },
              { label: "Limitation", value: "ByteDance ownership, privacy concerns" },
              { label: "Platform", value: "Windows, Mac, iOS, Android, Web" },
            ],
          }}
        />
        <ToolCard
          tool={{
            rank: 4,
            name: "Gling (Free tier)",
            tagline: "Does one thing well: removes silences and mistakes from talking-head videos and exports a timeline for Premiere or Resolve. Not a clip generator—a cleanup tool for full edits.",
            details: [
              { label: "Free tier", value: "1 hr/month, watermark" },
              { label: "Best feature", value: "Silence detection + NLE export" },
              { label: "Limitation", value: "English only. No clip extraction." },
              { label: "Platform", value: "Cloud (web-based)" },
            ],
          }}
        />
        <ToolCard
          tool={{
            rank: 5,
            name: "Shotcut (Free, open source)",
            tagline: "100% free with no watermarks, no tier limits, no account needed. Open-source timeline editor with support for nearly every video format.",
            details: [
              { label: "Free tier", value: "Everything. No paid tier exists." },
              { label: "Best feature", value: "Completely free forever, no catches" },
              { label: "Limitation", value: "Dated interface. No AI features." },
              { label: "Platform", value: "Windows, Mac, Linux" },
            ],
          }}
        />
      </div>

      <Section title="Quick comparison">
        <ComparisonTable
          headers={["Tool", "Job", "AI automation", "Free limit"]}
          highlightCol={1}
          rows={[
            { feature: "ClipShip", values: ["Clip extraction", "Full", "Unlimited (watermark)"] },
            { feature: "DaVinci Resolve", values: ["Full editing", "None", "Nearly everything"] },
            { feature: "CapCut", values: ["Full editing", "Partial", "1080p + watermark"] },
            { feature: "Gling", values: ["Silence removal", "Silence only", "1 hr/month"] },
            { feature: "Shotcut", values: ["Full editing", "None", "Everything"] },
          ]}
        />
      </Section>

      <Section title="Which should you pick?">
        <div className="grid sm:grid-cols-2 gap-4">
          <RecommendationCard
            condition="You want short-form clips from long uploads"
            recommendation="ClipShip Free. It doesn’t edit full videos—it finds the best 30–90 second moments inside them and formats them as vertical clips with captions. No cloud upload, unlimited usage."
            highlighted
          />
          <RecommendationCard
            condition="You want a full long-form editor"
            recommendation="DaVinci Resolve. Professional-grade, free, and covers everything—but you do the work. Best for YouTubers who enjoy editing."
          />
          <RecommendationCard
            condition="Beginner doing mixed content"
            recommendation="CapCut. Versatile with templates and effects. Accept that ByteDance processes your footage through cloud features."
          />
          <RecommendationCard
            condition="Just need silence removal for Premiere/Resolve"
            recommendation="Gling. Exports a clean timeline to your NLE. Doesn’t do short-form clips."
          />
        </div>
        <div className="mt-4">
          <RecommendationCard
            condition="Absolute zero-cost full editor, no compromises"
            recommendation="Shotcut. Completely free, open source, no account needed. Dated UI and no AI—but every feature is unlocked."
          />
        </div>
      </Section>

      <Section title="The honest take">
        <Paragraph>
          If you only post long-form YouTube videos, you want a traditional editor like DaVinci Resolve.
          If you also need short-form clips for Shorts, Reels, and TikTok (and you should—that&apos;s where
          new audiences find you), you need a separate tool for that job. ClipShip does that job on
          your PC with no subscription and no upload wait.
        </Paragraph>
      </Section>
    </BlogArticlePage>
  );
}
