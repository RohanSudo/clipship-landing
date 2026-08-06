import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";
import { AnswerBox, ClusterLinks, ProofFigure } from "../components/SeoBlocks";

export const metadata: Metadata = {
  title: "How ClipShip Works: Reframing, Headlines, Captions, and Export",
  description:
    "A visual guide to importing a long video, finding clips, using Smart Reframe, editing headlines and captions, and exporting or posting from ClipShip.",
  alternates: { canonical: "https://clipship.co/how-clipship-works" },
  openGraph: {
    title: "How ClipShip Works",
    description: "A visual guide to ClipShip's local AI clipping workflow, review controls, Smart Reframe, headlines, captions, and export.",
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
    { "@type": "HowToStep", name: "Review each clip", text: "Adjust trim points, choose Smart Reframe or Full frame, edit word-level captions, and customize the optional on-video headline." },
    { "@type": "HowToStep", name: "Export or post", text: "Export one clip or a selected batch to the computer, or render and post a clip to a connected YouTube account." },
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
          choose Smart Reframe or Full frame, edit caption words, and turn the optional on-video headline on or off.
        </p>
        <ProofFigure
          src="/seo/clipship-headline-editor.png"
          alt="ClipShip review screen showing a generated clip and editable headline controls"
          width={1200}
          height={800}
          caption="The headline is the large title rendered on the video. It is separate from subtitles and from the text used when posting."
        />

        <h2>What do the review controls change?</h2>
        <table>
          <thead>
            <tr><th>Control</th><th>What it changes</th><th>Important detail</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Set In / Set Out</td>
              <td>Moves the beginning or end of the active clip to the current playhead position.</td>
              <td>It changes only that clip. Preview the new boundaries before exporting.</td>
            </tr>
            <tr>
              <td>Smart Reframe</td>
              <td>Follows a clearly detected speaker while creating a vertical clip. Graphics or sections without a reliable face use a blurred full-frame background.</td>
              <td>After changing the reframe mode, use the re-render button to rebuild that clip&apos;s video.</td>
            </tr>
            <tr>
              <td>Full frame</td>
              <td>Keeps the entire source frame visible and fills the unused vertical space with a blurred background.</td>
              <td>Use it when automatic face framing removes something important from the original shot.</td>
            </tr>
            <tr>
              <td>Apply appearance to all clips</td>
              <td>Copies the active headline&apos;s style, position, size, text color, and outline or box color across the batch.</td>
              <td>It does not copy the headline wording or turn headlines on or off for other clips.</td>
            </tr>
          </tbody>
        </table>

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

        <h2>What does &ldquo;Generate 3 options&rdquo; do?</h2>
        <p>
          It creates three alternative packaging ideas for the current clip: direct, curiosity, and bold. Each
          option contains a replacement headline and post caption. It does not alter the spoken opening or the
          clip boundaries, and nothing changes until you choose an option.
        </p>

        <h2>5. Export or post the finished clips</h2>
        <p>
          Choose 720p or 1080p, then export the active clip or select several clips for batch export. ClipShip
          renders your trim, reframing, on-video headline, and caption choices into the files saved on your
          computer. The progress window shows which clip and render stage is currently running.
        </p>
        <p>
          A connected YouTube account can receive the active clip directly from the review screen. ClipShip must
          render the finished video before uploading it, so direct posting includes both render time and upload
          time. Exporting locally stops after the render, which is why it usually finishes sooner.
        </p>

        <ClusterLinks current="/how-clipship-works" />
      </ContentPage>
    </>
  );
}
