import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";
import { AnswerBox, ClusterLinks, ProofFigure } from "../components/SeoBlocks";

export const metadata: Metadata = {
  title: "How ClipShip Works: Clips, Headlines, Hooks, and Captions",
  description:
    "A visual guide to importing a long video, finding clips, editing on-video headlines, understanding spoken openings and post captions, and exporting in ClipShip.",
  alternates: { canonical: "https://clipship.co/how-clipship-works" },
  openGraph: {
    title: "How ClipShip Works",
    description: "A visual guide to ClipShip's local AI clipping workflow and review controls.",
    url: "https://clipship.co/how-clipship-works",
    type: "article",
    images: [{
      url: "https://clipship.co/seo/clipship-headline-editor.png",
      width: 1200,
      height: 800,
      alt: "ClipShip review screen with editable headline controls",
    }],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to turn a long video into short clips with ClipShip",
  description: "Import, analyze, review, and export short-form clips in the ClipShip desktop app.",
  step: [
    { "@type": "HowToStep", name: "Import a video", text: "Choose a local video or paste a supported YouTube, Twitch, or Kick link." },
    { "@type": "HowToStep", name: "Choose the clip brief", text: "Set the content genre, target clip length, target clip count, and caption style." },
    { "@type": "HowToStep", name: "Run local AI", text: "ClipShip transcribes the video, identifies clip-worthy moments, and creates reviewable vertical clips." },
    { "@type": "HowToStep", name: "Review each clip", text: "Adjust trim points, reframing, word-level captions, and the optional on-video headline." },
    { "@type": "HowToStep", name: "Export", text: "Export one clip or a selected batch to the computer." },
  ],
};

export default function HowClipShipWorksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ContentPage
        title="How ClipShip works"
        description="A practical guide to the workflow and the labels you see while turning a long recording into short clips."
        badge="Product guide"
      >
        <AnswerBox title="ClipShip handles the repetitive clipping work, then leaves the final choice to you.">
          <p>
            Import a long spoken video, tell ClipShip what kind of moments you want, let the AI propose clips,
            then review the framing, words, headline, and export before anything is published.
          </p>
        </AnswerBox>

        <h2>1. Import the source video</h2>
        <p>
          Choose a video on your computer or paste a supported YouTube video, YouTube Short, Twitch VOD,
          Twitch clip, or Kick clip link. Unsupported websites, live streams, and channel pages are rejected
          before processing starts.
        </p>

        <h2>2. Tell the AI what kind of clips to find</h2>
        <p>
          Choose the content genre, preferred clip length, target number of clips, and caption style. You can
          also limit processing to part of a long recording and enable AI-generated on-video headlines.
        </p>
        <ProofFigure
          src="/seo/clipship-style-controls.png"
          alt="ClipShip style screen with genre, clip length, target clips, headline toggle, and caption styles"
          width={1200}
          height={800}
          priority
          caption="The setup screen controls what the AI looks for and how the generated clips should be presented."
        />

        <h2>3. Let ClipShip process the video</h2>
        <p>
          ClipShip creates a timed transcript, looks for standalone moments, reframes the selected speaker for
          vertical video, and prepares word-level captions. In Local AI mode this work stays on the device. In
          optional API mode, the video stays local but transcript text is sent directly to the selected provider.
        </p>

        <h2>4. Review the generated clips</h2>
        <p>
          The review screen is where you make the output yours. Play each clip, move the in and out points,
          choose smart reframing or full frame, edit caption words, and turn the optional headline on or off.
        </p>
        <ProofFigure
          src="/seo/clipship-headline-editor.png"
          alt="ClipShip review screen showing a generated clip and editable headline controls"
          width={1200}
          height={800}
          caption="The headline is the large title rendered on the video. It is separate from subtitles and from the text used when posting."
        />

        <h2>What do headline, spoken opening, post caption, and captions mean?</h2>
        <table>
          <thead>
            <tr><th>Label</th><th>What it means</th><th>Where viewers see it</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Headline</td>
              <td>A short title for the clip. You can edit its text, style, position, size, and colors.</td>
              <td>Rendered on the video when the headline toggle is enabled.</td>
            </tr>
            <tr>
              <td>Spoken opening</td>
              <td>The first short sentence already spoken at the beginning of the selected clip.</td>
              <td>In the clip audio. ClipShip shows it as context and does not replace the speaker&apos;s words.</td>
            </tr>
            <tr>
              <td>Post caption</td>
              <td>A suggested sentence or two to accompany the clip when you publish it.</td>
              <td>In the social post description, not burned into the video.</td>
            </tr>
            <tr>
              <td>Word-level captions</td>
              <td>The timed subtitles created from the transcript. Each word can be corrected in review.</td>
              <td>Rendered into the exported video using the selected caption style.</td>
            </tr>
          </tbody>
        </table>

        <h2>What does “Generate 3 options” do?</h2>
        <p>
          It creates three alternative packaging ideas for the current clip: direct, curiosity, and bold. Each
          option contains a replacement headline and post caption. It does not alter the spoken opening or the
          clip boundaries, and nothing changes until you choose an option.
        </p>

        <h2>5. Export one clip or a batch</h2>
        <p>
          Export the active clip or select several clips for batch export. ClipShip renders your trim, framing,
          headline, and caption choices into the finished files saved on your computer.
        </p>

        <ClusterLinks current="/how-clipship-works" />
      </ContentPage>
    </>
  );
}
