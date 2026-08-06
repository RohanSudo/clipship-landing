import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";
import MacInterest from "../components/MacInterest";
import { AnswerBox, ClusterLinks, ProofFigure } from "../components/SeoBlocks";

export const metadata: Metadata = {
  title: "ClipShip for macOS: Local OpusClip Alternative (Private QA)",
  description:
    "ClipShip for macOS is in private QA for Apple Silicon. See the tested local AI workflow, current release status, and how to record interest.",
  alternates: { canonical: "https://clipship.co/mac" },
  openGraph: {
    title: "ClipShip for macOS: Local OpusClip Alternative (Private QA)",
    description:
      "A local-first AI clip generator for Apple Silicon Macs is now in private QA.",
    url: "https://clipship.co/mac",
    type: "website",
    images: [{
      url: "https://clipship.co/opengraph-image",
      width: 1200,
      height: 630,
      alt: "ClipShip for macOS private QA",
    }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ClipShip available for macOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not publicly yet. The Apple Silicon build is in private QA while installation, model downloads, transcription, local clip analysis, captions, and export are tested end to end.",
      },
    },
    {
      "@type": "Question",
      name: "Does ClipShip use Apple Silicon for local AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The current QA build uses MLX Whisper with Apple Metal for local transcription and llama.cpp with Metal acceleration for local clip analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Will ClipShip upload videos from a Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Local AI mode keeps the source video, transcript, clip selection, captions, and rendering on the Mac. Optional API mode keeps the video local but sends transcript text directly to the AI provider chosen by the user.",
      },
    },
  ],
};

export default function MacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        title="ClipShip for macOS is in private QA"
        description="A local OpusClip alternative for Apple Silicon Macs is being tested now. The public download is not available yet."
        badge="macOS status"
        cta={{
          title: "Follow the macOS release",
          description: "Record your interest so I can measure real Mac demand while the private QA build is being finished.",
          label: "Back to ClipShip",
          href: "/",
        }}
      >
        <AnswerBox title="The Mac version is real, but it is not a public release yet.">
          <p>
            The current build runs on Apple Silicon and is going through end-to-end testing. Installation,
            first-time model setup, transcription, local AI clip selection, headline and caption editing,
            rendering, export, and clean uninstall all need to pass before the download button goes live.
          </p>
          <MacInterest source="mac-page" alwaysShow />
        </AnswerBox>

        <h2>How the local AI pipeline uses Apple Silicon</h2>
        <table>
          <thead>
            <tr><th>Stage</th><th>Current Mac implementation</th><th>Where it runs</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Transcription</td>
              <td>MLX Whisper</td>
              <td>On the Mac with Apple Metal acceleration</td>
            </tr>
            <tr>
              <td>Clip selection</td>
              <td>Qwen through llama.cpp</td>
              <td>On the Mac with Metal acceleration</td>
            </tr>
            <tr>
              <td>Face tracking, captions, and rendering</td>
              <td>Bundled desktop pipeline</td>
              <td>On the Mac</td>
            </tr>
          </tbody>
        </table>

        <h2>What unified memory changes</h2>
        <p>
          Apple Silicon uses one shared memory pool for the CPU, GPU, and local AI workloads. That can reduce
          data copying between separate memory pools, but ClipShip still has to leave enough memory for macOS
          and other open applications. The QA build checks available memory before loading a local model and
          warns when the selected model would leave too little headroom.
        </p>

        <ProofFigure
          src="/seo/clipship-style-controls.png"
          alt="ClipShip local clip controls and caption style selection"
          width={1200}
          height={800}
          caption="The Mac build shares ClipShip's guided clip setup and caption workflow while using a Mac-specific local AI runtime."
        />

        <h2>Privacy boundary on macOS</h2>
        <p>
          In Local AI mode, the source video, transcript, clip selection, captions, and rendered exports stay
          on the Mac. In optional API mode, the source video still stays local, but transcript text is sent
          directly to the AI provider selected by the user with their own API key. ClipShip does not proxy or
          store that key on its servers.
        </p>

        <h2>Current release status</h2>
        <ul>
          <li>Target platform for the first public Mac release: Apple Silicon.</li>
          <li>Distribution target: a signed and notarized DMG downloaded from this website.</li>
          <li>Current stage: private QA. There is no public Mac installer link yet.</li>
          <li>Final minimum-memory guidance will be published after QA across the supported local models.</li>
        </ul>

        <ClusterLinks current="/mac" />
      </ContentPage>
    </>
  );
}
