import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";
import { AnswerBox, ClusterLinks, ProofFigure } from "../components/SeoBlocks";

export const metadata: Metadata = {
  title: "Twitch VOD to Shorts Clip Maker for Windows | ClipShip",
  description:
    "Turn a Twitch VOD or clip into vertical Shorts, Reels, and TikToks. ClipShip finds spoken highlights locally on your Windows PC.",
  alternates: { canonical: "https://clipship.co/twitch-vod-to-shorts" },
  openGraph: {
    title: "Twitch VOD to Shorts Clip Maker for Windows | ClipShip",
    description: "Import a Twitch VOD or clip, find spoken highlights, add captions, and export vertical clips on Windows.",
    url: "https://clipship.co/twitch-vod-to-shorts",
    type: "article",
    images: [{ url: "https://clipship.co/opengraph-image", width: 1200, height: 630, alt: "ClipShip Twitch VOD to Shorts workflow" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can ClipShip turn a Twitch VOD into Shorts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClipShip can import Twitch VOD and clip links, find spoken moments, add captions, reframe vertically, and export clips on Windows.",
      },
    },
    {
      "@type": "Question",
      name: "Does ClipShip support Twitch live streams?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ClipShip imports completed Twitch VODs and Twitch clips. Live streams must finish before they can be imported.",
      },
    },
    {
      "@type": "Question",
      name: "Does Twitch footage stay local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Twitch link needs internet to fetch the source video. After import, transcription, clip selection, captions, reframing, and export run on the Windows PC.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Twitch VOD to Shorts Clip Maker for Windows",
  datePublished: "2026-08-03",
  dateModified: "2026-08-03",
  mainEntityOfPage: "https://clipship.co/twitch-vod-to-shorts",
  author: { "@id": "https://clipship.co/#organization" },
  about: { "@id": "https://clipship.co/#software" },
};

export default function TwitchVodToShortsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContentPage
        title="Twitch VOD to Shorts clip maker for Windows"
        description="Import a completed Twitch VOD or Twitch clip, find the strongest spoken moments, and export vertical clips with captions."
        badge="Twitch to Shorts"
      >
        <AnswerBox title="ClipShip turns completed Twitch videos into short-form clips.">
          <p>
            Paste a Twitch VOD or clip link into ClipShip. The app downloads the source, transcribes it, suggests
            standalone moments, reframes the speaker, adds captions, and exports vertical videos on your Windows PC.
          </p>
          <p>
            It works best for streams with clear speech: debates, interviews, commentary, podcasts, tutorials,
            reactions, and creator conversations. It is not an automatic gameplay montage detector.
          </p>
        </AnswerBox>

        <ProofFigure
          src="/seo/clipship-drop-loop.gif"
          alt="ClipShip turning a long spoken video into several short vertical clips"
          width={960}
          height={540}
          priority
          caption="A supported video link enters the same review and export workflow as a local recording."
        />

        <h2>How to turn a Twitch VOD into Shorts</h2>
        <ol>
          <li><strong>Copy the completed Twitch VOD or clip link.</strong> Live streams are not supported while they are still running.</li>
          <li><strong>Paste the link into ClipShip.</strong> The importer verifies that it is a supported Twitch video page.</li>
          <li><strong>Choose how many candidate clips you want.</strong> A longer debate or interview can produce a wider shortlist.</li>
          <li><strong>Let ClipShip analyze the spoken content.</strong> Transcription and clip selection run in the desktop workflow.</li>
          <li><strong>Review the suggestions.</strong> Trim clips, correct caption text, and edit the AI-generated headline.</li>
          <li><strong>Export vertical videos.</strong> Save captioned 9:16 clips for Shorts, Reels, TikTok, or other platforms.</li>
        </ol>

        <h2>What Twitch content works best?</h2>
        <table>
          <thead><tr><th>Good fit</th><th>Why</th><th>Example output</th></tr></thead>
          <tbody>
            <tr><td>Debates and interviews</td><td>Arguments and answers can stand alone.</td><td>A 45-second opinion or rebuttal.</td></tr>
            <tr><td>Commentary streams</td><td>The value is carried by speech.</td><td>A clear take with its own setup and payoff.</td></tr>
            <tr><td>Tutorials and coaching</td><td>Individual lessons become useful short clips.</td><td>One practical tip or explanation.</td></tr>
            <tr><td>Podcasts on Twitch</td><td>Guest stories and answers create natural moments.</td><td>A concise story or insight.</td></tr>
          </tbody>
        </table>

        <h2>What ClipShip does not support</h2>
        <p>
          ClipShip does not import active live streams, channel pages, or unrelated websites. It also does not look
          for visual gameplay highlights such as kills, goals, or speedrun splits. Its clip finder is built around
          spoken ideas and conversations.
        </p>

        <h2>Supported video links</h2>
        <ul>
          <li>YouTube videos and Shorts</li>
          <li>Twitch VODs and Twitch clips</li>
          <li>Kick clips</li>
        </ul>
        <p>
          Kick VOD import is currently unavailable because the source metadata required by the downloader is not
          reliable. ClipShip rejects unsupported links before processing instead of accepting an unknown website and failing later.
        </p>

        <h2>Does Twitch footage stay local?</h2>
        <p>
          Fetching a Twitch link requires internet. Once the source file has been imported, ClipShip performs the
          transcription, clip selection, vertical reframing, captions, headline rendering, and export on your PC.
          ClipShip does not upload your imported source video to its own processing server.
        </p>

        <ClusterLinks current="/twitch-vod-to-shorts" />

        <h2>FAQ</h2>
        <h3>Can I paste any Twitch URL?</h3>
        <p>No. Use a direct completed VOD or clip URL. Live, profile, category, and channel pages are rejected.</p>
        <h3>Can ClipShip find more than a few clips from a long stream?</h3>
        <p>Yes. You can raise the target clip count before analysis when a long debate, podcast, or interview has many usable moments.</p>
        <h3>Can I change the clip headline?</h3>
        <p>Yes. ClipShip generates editable headlines, and you can apply a consistent headline style across the exported batch.</p>
      </ContentPage>
    </>
  );
}
