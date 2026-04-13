import type { Metadata } from "next";
import BlogArticlePage, {
  Section,
  Paragraph,
  BulletList,
  NumberedList,
  ComparisonTable,
  Callout,
  RecommendationCard,
} from "../../components/BlogArticlePage";

export const metadata: Metadata = {
  title: "How to Make Clips from Talking-Head Videos (2026 Guide)",
  description:
    "Step-by-step guide to extracting short-form clips from talking-head recordings. Manual methods, AI tools, and tips for finding the best moments for Reels, Shorts, and TikTok.",
};

export default function HowToMakeClips() {
  return (
    <BlogArticlePage
      title="How to Make Clips from Talking-Head Videos"
      description="You recorded a 20-minute video. Now you need 3\u20135 clips for social media. Here\u2019s how to find and create them."
      badge="Guide"
    >
      <Section title="Why clips matter more than long-form">
        <Paragraph>
          Short-form content drives discovery. A 60-second clip on Reels or TikTok reaches people who
          would never find your 20-minute YouTube video. Clips are how new audiences find you.
        </Paragraph>
        <Paragraph>
          The challenge: finding the right 60 seconds out of a 20-minute recording. And then formatting
          it correctly for each platform.
        </Paragraph>
      </Section>

      <Section title="What makes a good clip">
        <Callout>
          A clip that performs well on short-form platforms has four key ingredients. Miss any one of them and
          engagement drops.
        </Callout>
        <BulletList items={[
          <><strong className="text-white">A strong hook in the first 3 seconds.</strong> The opening sentence must make someone stop scrolling. A question, a bold claim, or a surprising fact.</>,
          <><strong className="text-white">One complete thought.</strong> The clip should make sense on its own without needing context from the full video.</>,
          <><strong className="text-white">Energy and emotion.</strong> Flat, monotone sections don&apos;t perform. Look for moments where you&apos;re passionate, surprised, or emphatic.</>,
          <><strong className="text-white">A natural ending.</strong> The clip shouldn&apos;t feel chopped mid-sentence. End on a conclusion, a punchline, or a call to action.</>,
        ]} />
      </Section>

      <Section title="Method 1: Manual clipping (free, slow)">
        <Paragraph>
          Watch your full video and note timestamps where good moments happen. Then use any editor
          (CapCut, Premiere, DaVinci Resolve) to cut those sections and export as vertical clips.
        </Paragraph>
        <NumberedList items={[
          "Watch your recording at 1.5x speed",
          "Note timestamps of strong moments (opinions, stories, tips, funny lines)",
          "Import into an editor, cut each clip (30\u201390 seconds)",
          "Crop to 9:16 vertical (center on your face)",
          "Add captions (CapCut or Descript can auto-generate these)",
          "Export each clip separately",
        ]} />
        <Callout>
          <strong className="text-white">Time required:</strong> 1\u20133 hours per video depending on length. Works but doesn&apos;t scale.
        </Callout>
      </Section>

      <Section title="Method 2: AI clip extraction (faster)">
        <Paragraph>
          AI tools can analyze your transcript and find the best moments automatically. They look for
          complete thoughts, strong openings, and emotional peaks.
        </Paragraph>
        <NumberedList items={[
          "Upload or import your video into an AI clip tool",
          "The AI transcribes the audio with word-level timing",
          "It analyzes the transcript for clip-worthy moments",
          "Each clip gets a title, hook, and confidence score",
          "The tool formats clips as vertical videos with captions",
        ]} />
        <Callout>
          <strong className="text-white">Time required:</strong> 5\u201315 minutes. The AI does the heavy lifting.
        </Callout>

        <h3 className="text-lg font-bold text-white mt-8 mb-4">Tools for AI clip extraction</h3>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <RecommendationCard
            condition="ClipShip"
            recommendation="Local, free tier. Also edits the full video. 99 languages."
            highlighted
          />
          <RecommendationCard
            condition="OpusClip"
            recommendation="Cloud, $29/mo. Paste a YouTube link, get clips. Good virality scoring."
          />
          <RecommendationCard
            condition="Descript"
            recommendation="Cloud, $24+/mo. Text-based editor with good transcript tools."
          />
        </div>
      </Section>

      <Section title="Tips for better clips">
        <BulletList items={[
          <><strong className="text-white">Record with clips in mind.</strong> When you make a strong point, pause briefly before and after. This gives the AI (or you) clean cut points.</>,
          <><strong className="text-white">Start strong.</strong> If your video starts with &ldquo;Hey guys, so today I wanted to talk about...&rdquo; that&apos;s not a clip. Start each section with the point, not the preamble.</>,
          <><strong className="text-white">One idea per clip.</strong> Don&apos;t pack a full tutorial into 60 seconds. One tip, one story, one opinion per clip.</>,
          <><strong className="text-white">Test 5, keep 3.</strong> Extract 5 clips, post the best 3. See which performs, learn what your audience responds to.</>,
          <><strong className="text-white">Captions are mandatory.</strong> 85% of social media video is watched with sound off. No captions means most people scroll past.</>,
        ]} />
      </Section>

      <Section title="Platform formatting cheat sheet">
        <ComparisonTable
          headers={["Platform", "Aspect Ratio", "Max Length", "Caption Style"]}
          rows={[
            { feature: "YouTube Shorts", values: ["9:16", "3 minutes", "Bold, centered"] },
            { feature: "Instagram Reels", values: ["9:16", "15 minutes", "Bold with highlights"] },
            { feature: "TikTok", values: ["9:16", "60 minutes", "Bold with emoji"] },
            { feature: "LinkedIn Video", values: ["9:16 or 1:1", "15 minutes", "Clean, professional"] },
          ]}
        />
      </Section>

      <Section title="Bottom line">
        <Paragraph>
          Every talking-head video has 3&ndash;5 clips hiding inside it. Finding them manually takes hours.
          AI tools find them in minutes. The fastest path: record once, let AI find your best moments,
          post clips across all platforms. That&apos;s how solo creators scale their content without
          scaling their time.
        </Paragraph>
      </Section>
    </BlogArticlePage>
  );
}
