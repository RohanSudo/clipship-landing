import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "YouTube to Shorts Clip Maker for Talking-Head Videos | ClipShip",
  description:
    "Turn long YouTube videos and talking-head recordings into YouTube Shorts, Reels, and TikToks. ClipShip finds clips, reframes vertically, and adds captions.",
  alternates: {
    canonical: "https://clipship.co/youtube-to-shorts-clip-maker",
  },
  openGraph: {
    title: "YouTube to Shorts Clip Maker for Talking-Head Videos | ClipShip",
    description:
      "Repurpose long YouTube videos into short-form clips with local AI on Windows.",
    url: "https://clipship.co/youtube-to-shorts-clip-maker",
    type: "article",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I turn a YouTube video into Shorts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To turn a YouTube video into Shorts, import the video or paste the YouTube link into a clip-making tool, identify standalone moments, crop or reframe to 9:16, add captions, and export each clip as a vertical video.",
      },
    },
    {
      "@type": "Question",
      name: "Can ClipShip make Shorts from YouTube links?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClipShip supports YouTube link import and local file import, then uses AI to suggest clips and format them for YouTube Shorts, Instagram Reels, TikTok, and LinkedIn.",
      },
    },
    {
      "@type": "Question",
      name: "What type of YouTube videos work best?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ClipShip works best with talking-head videos such as podcasts, interviews, course lessons, webinars, coaching videos, educational videos, and solo commentary.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to turn a YouTube video into Shorts",
  description:
    "A simple workflow for turning long talking-head YouTube videos into vertical Shorts using ClipShip.",
  totalTime: "PT15M",
  step: [
    {
      "@type": "HowToStep",
      name: "Import the video",
      text: "Paste a YouTube link into ClipShip or import a local video file.",
    },
    {
      "@type": "HowToStep",
      name: "Let AI find clips",
      text: "ClipShip transcribes the video and suggests standalone short-form moments.",
    },
    {
      "@type": "HowToStep",
      name: "Review the clips",
      text: "Open the suggested clips, trim if needed, and pick the strongest moments.",
    },
    {
      "@type": "HowToStep",
      name: "Export vertical videos",
      text: "Export clips in 9:16 format with captions for YouTube Shorts, Reels, TikTok, or LinkedIn.",
    },
  ],
};

export default function YouTubeToShortsClipMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="YouTube to Shorts clip maker for talking-head videos"
        description="Repurpose long YouTube videos into short-form clips without manually hunting through the timeline."
        badge="YouTube to Shorts"
      >
        <p>
          <strong>ClipShip turns long YouTube videos and talking-head recordings into Shorts, Reels, and TikToks.</strong>
          Paste a YouTube link or import a local file, let AI find clip-worthy moments, review the suggested clips,
          and export vertical videos with captions.
        </p>

        <p>
          It is built for creators who record long videos once and want multiple short-form posts from the same
          recording without manually scrubbing through the entire timeline.
        </p>

        <h2>How to turn a YouTube video into Shorts</h2>
        <ol>
          <li><strong>Paste the YouTube link.</strong> ClipShip imports the video so you can work from the full recording.</li>
          <li><strong>Transcribe the recording.</strong> The app creates a timed transcript for clip selection and captions.</li>
          <li><strong>Find short-form moments.</strong> AI looks for complete points, hooks, stories, opinions, and useful segments.</li>
          <li><strong>Review and trim.</strong> Keep the clips that work on their own and adjust the cut if needed.</li>
          <li><strong>Export vertical clips.</strong> Save the clips in 9:16 format with captions for Shorts, Reels, TikTok, or LinkedIn.</li>
        </ol>

        <h2>What kinds of YouTube videos work best?</h2>
        <p>
          ClipShip is designed for talking-head and conversation-based content. The AI has clearer signals when the
          video contains spoken points, lessons, stories, opinions, advice, or arguments that can stand alone as a
          short clip.
        </p>

        <table>
          <thead>
            <tr>
              <th>Good fit</th>
              <th>Why it works</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Podcasts</td>
              <td>Strong opinions, questions, stories, and guest answers often work as standalone clips.</td>
            </tr>
            <tr>
              <td>Course lessons</td>
              <td>Individual tips and teaching moments can become educational Shorts.</td>
            </tr>
            <tr>
              <td>Coaching videos</td>
              <td>Advice, objections, and problem-solving moments can be repurposed.</td>
            </tr>
            <tr>
              <td>Webinars</td>
              <td>Examples, frameworks, and answer sections can become short clips.</td>
            </tr>
            <tr>
              <td>Solo commentary</td>
              <td>Opinions and concise explanations can work well on short-form platforms.</td>
            </tr>
          </tbody>
        </table>

        <h2>Why use AI instead of clipping manually?</h2>
        <p>
          Manual clipping works, but it does not scale well. You have to watch the whole video, write down timestamps,
          cut each section, crop it vertically, add captions, and export everything one by one. AI clip extraction
          compresses that workflow by finding candidate moments first.
        </p>

        <h2>ClipShip is not for every video type</h2>
        <p>
          ClipShip is not built for cinematic vlogs, dance videos, music videos, or montage-heavy footage. Those need
          a creative editor. ClipShip is for spoken content where the value is in what the person says.
        </p>

        <h2>Related pages</h2>
        <ul>
          <li><a href="/blog/how-to-make-clips-from-talking-head-videos">How to make clips from talking-head videos</a></li>
          <li><a href="/local-ai-video-clip-generator">Local AI video clip generator</a></li>
          <li><a href="/for/youtubers">ClipShip for YouTubers</a></li>
          <li><a href="/blog/best-ai-video-clip-generators-2026">Best AI video clip generators</a></li>
        </ul>

        <h2>FAQ</h2>
        <h3>Does ClipShip make clips from any YouTube video?</h3>
        <p>
          ClipShip works best on talking-head videos. If the video is mostly music, montage, gaming highlights, or
          visual action with little speech, a manual editor may be better.
        </p>

        <h3>Can I edit the suggested clips?</h3>
        <p>
          Yes. ClipShip suggests clips, but you can review them, trim them, change caption styling, and export the
          versions you actually want to post.
        </p>

        <h3>Does this only work for YouTube Shorts?</h3>
        <p>
          No. The same vertical clips can also be used for Instagram Reels, TikTok, and LinkedIn.
        </p>
      </ContentPage>
    </>
  );
}
