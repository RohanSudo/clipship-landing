import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";
import { AnswerBox, ClusterLinks, ProofFigure } from "../components/SeoBlocks";

export const metadata: Metadata = {
  title: "Long Video to Shorts AI Clip Maker | ClipShip",
  description:
    "Turn long YouTube videos and talking-head recordings into Shorts, Reels, and TikToks. ClipShip finds clips, reframes vertically, and adds captions.",
  alternates: {
    canonical: "https://clipship.co/youtube-to-shorts-clip-maker",
  },
  openGraph: {
    title: "Long Video to Shorts AI Clip Maker | ClipShip",
    description:
      "Repurpose long YouTube videos into short-form clips with local AI on Windows.",
    url: "https://clipship.co/youtube-to-shorts-clip-maker",
    type: "article",
    images: [
      {
        url: "https://clipship.co/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ClipShip YouTube to Shorts clip maker",
      },
    ],
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Long Video to Shorts AI Clip Maker",
  description:
    "How to repurpose YouTube videos and talking-head recordings into vertical short-form clips with ClipShip.",
  datePublished: "2026-05-21",
  dateModified: "2026-07-02",
  author: {
    "@type": "Organization",
    name: "ClipShip",
    url: "https://clipship.co",
  },
  mainEntityOfPage: "https://clipship.co/youtube-to-shorts-clip-maker",
};

export default function YouTubeToShortsClipMakerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="Long video to Shorts AI clip maker"
        description="Repurpose long YouTube videos into short-form clips without manually hunting through the timeline."
        badge="YouTube to Shorts"
      >
        <AnswerBox title="ClipShip helps turn long YouTube-style videos into vertical clips.">
          <p>
            Paste a YouTube link or import a local video, let ClipShip find candidate moments, review the clips,
            and export vertical videos with captions for YouTube Shorts, Instagram Reels, TikTok, and LinkedIn.
          </p>
          <p>
            It works best when the original video is spoken content: podcasts, interviews, course lessons, webinars,
            coaching videos, educational videos, or solo commentary.
          </p>
        </AnswerBox>

        <ProofFigure
          src="/seo/clipship-drop-loop.gif"
          alt="Animated ClipShip workflow showing a video being converted into multiple short clips"
          width={960}
          height={540}
          priority
          caption="Instead of scrubbing the full timeline manually, ClipShip gives you candidate clips to review."
        />

        <h2>How to turn a YouTube video into Shorts</h2>
        <ol>
          <li><strong>Paste the YouTube link or import the file.</strong> ClipShip starts from the full recording.</li>
          <li><strong>Transcribe the recording.</strong> The app creates a timed transcript for clip selection and captions.</li>
          <li><strong>Find short-form moments.</strong> AI looks for complete points, hooks, stories, opinions, and useful segments.</li>
          <li><strong>Review and trim.</strong> Keep the clips that work on their own and adjust the cut if needed.</li>
          <li><strong>Style captions.</strong> Pick or customize caption styles before export.</li>
          <li><strong>Export vertical clips.</strong> Save 9:16 clips for Shorts, Reels, TikTok, or LinkedIn.</li>
        </ol>

        <h2>Long video to Shorts AI works best when the video is spoken</h2>
        <p>
          ClipShip is strongest when the source video has clear speech: a podcast answer, a teaching section, a
          coaching explanation, a webinar example, or a solo commentary segment. The AI can use the transcript to
          find complete ideas instead of only looking for random visual cuts.
        </p>
        <p>
          This is different from text-to-video generators. ClipShip does not invent a new AI video from a prompt. It
          finds short-form moments inside footage you already recorded.
        </p>

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
              <th>Example clip angle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Podcasts</td>
              <td>Questions, stories, and guest answers often work as standalone clips.</td>
              <td>A strong opinion or practical advice from one answer.</td>
            </tr>
            <tr>
              <td>Course lessons</td>
              <td>Individual tips and teaching moments can become educational Shorts.</td>
              <td>A 45-second explanation of one concept.</td>
            </tr>
            <tr>
              <td>Coaching videos</td>
              <td>Advice, objections, and problem-solving moments can be repurposed.</td>
              <td>A client problem and the direct answer.</td>
            </tr>
            <tr>
              <td>Webinars</td>
              <td>Examples, frameworks, and answer sections can become short clips.</td>
              <td>A short framework from the middle of the webinar.</td>
            </tr>
            <tr>
              <td>Solo commentary</td>
              <td>Opinions and concise explanations can work well on short-form platforms.</td>
              <td>A clear take that does not need the full original video.</td>
            </tr>
          </tbody>
        </table>

        <ProofFigure
          src="/seo/clipship-caption-styles.png"
          alt="ClipShip caption style options for short-form video exports"
          width={1080}
          height={1920}
          orientation="portrait"
          caption="Pro users can create and save custom caption styles, which matters when every clip needs to look consistent."
        />

        <h2>Why use AI instead of clipping manually?</h2>
        <p>
          Manual clipping works, but it does not scale well. You have to watch the whole video, write down timestamps,
          cut each section, crop it vertically, add captions, and export everything one by one. AI clip extraction
          compresses that workflow by finding candidate moments first.
        </p>

        <h2>ClipShip is not for every video type</h2>
        <p>
          ClipShip is not built for cinematic vlogs, dance videos, music videos, gaming montages, or footage where
          the value is mostly visual action. Those need a creative editor. ClipShip is for spoken content where the
          value is in what the person says.
        </p>

        <h2>Local files vs YouTube links</h2>
        <p>
          Local file processing is the no-upload workflow. YouTube link import naturally needs internet because the
          app has to fetch the source video first. After import, ClipShip gives you the same review, caption, and
          export workflow inside the desktop app.
        </p>

        <ClusterLinks current="/youtube-to-shorts-clip-maker" />

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
