import type { Metadata } from "next";
import ContentPage from "../../components/ContentPage";

export const metadata: Metadata = {
  title: "How to Make Clips from Talking-Head Videos (2026 Guide)",
  description:
    "Step-by-step guide to extracting short-form clips from talking-head recordings. Manual methods, AI tools, and tips for finding the best moments for Reels, Shorts, and TikTok.",
};

export default function HowToMakeClips() {
  return (
    <ContentPage
      title="How to Make Clips from Talking-Head Videos (2026 Guide)"
      description="You recorded a 20-minute video. Now you need 3-5 clips for social media. Here is how to find and create them."
    >
      <h2>Why clips matter more than long-form</h2>
      <p>
        Short-form content drives discovery. A 60-second clip on Reels or TikTok reaches people who
        would never find your 20-minute YouTube video. Clips are how new audiences find you.
      </p>
      <p>
        The challenge: finding the right 60 seconds out of a 20-minute recording. And then formatting
        it correctly for each platform.
      </p>

      <h2>What makes a good clip</h2>
      <p>A clip that performs well on short-form platforms has:</p>
      <ul>
        <li><strong>A strong hook in the first 3 seconds.</strong> The opening sentence must make someone stop scrolling. A question, a bold claim, or a surprising fact.</li>
        <li><strong>One complete thought.</strong> The clip should make sense on its own without needing context from the full video.</li>
        <li><strong>Energy and emotion.</strong> Flat, monotone sections do not perform. Look for moments where you are passionate, surprised, or emphatic.</li>
        <li><strong>A natural ending.</strong> The clip should not feel like it was chopped mid-sentence. End on a conclusion, a punchline, or a call to action.</li>
      </ul>

      <h2>Method 1: Manual clipping (free, slow)</h2>
      <p>
        Watch your full video and note timestamps where good moments happen. Then use any editor
        (CapCut, Premiere, DaVinci Resolve) to cut those sections and export as vertical clips.
      </p>
      <p><strong>Steps:</strong></p>
      <ol>
        <li>Watch your recording at 1.5x speed</li>
        <li>Note timestamps of strong moments (opinions, stories, tips, funny lines)</li>
        <li>Import into an editor, cut each clip (30-90 seconds)</li>
        <li>Crop to 9:16 vertical (center on your face)</li>
        <li>Add captions (CapCut or Descript can auto-generate these)</li>
        <li>Export each clip separately</li>
      </ol>
      <p>
        <strong>Time required:</strong> 1-3 hours per video depending on length. Works but does not scale.
      </p>

      <h2>Method 2: AI clip extraction (faster)</h2>
      <p>
        AI tools can analyze your transcript and find the best moments automatically. They look for
        complete thoughts, strong openings, and emotional peaks.
      </p>
      <p><strong>How it works:</strong></p>
      <ol>
        <li>Upload or import your video into an AI clip tool</li>
        <li>The AI transcribes the audio with word-level timing</li>
        <li>It analyzes the transcript for clip-worthy moments</li>
        <li>Each clip gets a title, hook, and confidence score</li>
        <li>The tool formats clips as vertical videos with captions</li>
      </ol>
      <p>
        <strong>Time required:</strong> 5-15 minutes. The AI does the heavy lifting.
      </p>

      <h2>Tools for AI clip extraction</h2>
      <ul>
        <li><strong>ClipShip</strong> (local, free tier available) runs on your PC. Also edits the full video. 99 languages.</li>
        <li><strong>OpusClip</strong> (cloud, $29/month) paste a YouTube link, get clips. Good virality scoring.</li>
        <li><strong>Descript</strong> (cloud, $24+/month) text-based editor. Manual clip selection but good transcript tools.</li>
      </ul>

      <h2>Tips for better clips</h2>
      <ul>
        <li><strong>Record with clips in mind.</strong> When you make a strong point, pause briefly before and after. This gives the AI (or you) clean cut points.</li>
        <li><strong>Start strong.</strong> If your video starts with "Hey guys, so today I wanted to talk about..." that is not a clip. Start each section with the point, not the preamble.</li>
        <li><strong>One idea per clip.</strong> Do not try to pack a full tutorial into 60 seconds. One tip, one story, one opinion per clip.</li>
        <li><strong>Test 5, keep 3.</strong> Extract 5 clips, post the best 3. See which performs, learn what your audience responds to.</li>
        <li><strong>Captions are mandatory.</strong> 85% of social media video is watched with sound off. If your clip has no captions, most people scroll past.</li>
      </ul>

      <h2>Platform formatting cheat sheet</h2>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Aspect ratio</th>
            <th>Max length</th>
            <th>Caption style</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>YouTube Shorts</td><td>9:16</td><td>3 minutes</td><td>Bold, centered</td></tr>
          <tr><td>Instagram Reels</td><td>9:16</td><td>15 minutes</td><td>Bold with highlights</td></tr>
          <tr><td>TikTok</td><td>9:16</td><td>60 minutes</td><td>Bold with emoji</td></tr>
          <tr><td>LinkedIn Video</td><td>9:16 or 1:1</td><td>15 minutes</td><td>Clean, professional</td></tr>
        </tbody>
      </table>

      <h2>Bottom line</h2>
      <p>
        Every talking-head video has 3-5 clips hiding inside it. Finding them manually takes hours.
        AI tools find them in minutes. The fastest path: record once, let AI find your best moments,
        post clips across all platforms. That is how solo creators scale their content without
        scaling their time.
      </p>
    </ContentPage>
  );
}
