import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";
import DownloadLink from "../components/DownloadLink";
import { AnswerBox, ClusterLinks, ProofFigure } from "../components/SeoBlocks";

const pageUrl = "https://clipship.co/mac";
const downloadUrl = "https://api.clipship.co/download/macos";

export const metadata: Metadata = {
  title: "ClipShip for Mac: Local AI OpusClip Alternative",
  description:
    "Download ClipShip for Apple Silicon Mac. Turn long videos into captioned vertical clips with local AI, Apple Metal acceleration, and no source-video upload.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "ClipShip for Mac: Local AI Video Clipper",
    description:
      "A no-upload OpusClip alternative for Apple Silicon Macs. Local transcription, clip selection, captions, reframing, and export.",
    url: pageUrl,
    type: "website",
    images: [{
      url: "https://clipship.co/opengraph-image",
      width: 1200,
      height: 630,
      alt: "ClipShip local AI video clipper for Apple Silicon Mac",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClipShip for Mac: Local AI Video Clipper",
    description:
      "Turn long spoken videos into short clips on an Apple Silicon Mac without uploading the source footage.",
    images: ["https://clipship.co/opengraph-image"],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ClipShip for macOS",
  applicationCategory: "MultimediaApplication",
  applicationSubCategory: "AI video clip generator",
  operatingSystem: "macOS 15 or newer on Apple Silicon",
  url: pageUrl,
  downloadUrl,
  description:
    "ClipShip is a local AI video clipper for Apple Silicon Macs that turns long spoken videos into captioned vertical clips while keeping source footage on the Mac.",
  softwareVersion: "1.0.12",
  processorRequirements: "Apple Silicon (M1 or newer)",
  memoryRequirements: "16 GB unified memory recommended",
  isAccessibleForFree: true,
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Forever-free tier after a 7-day Pro trial." },
    { "@type": "Offer", price: "5", priceCurrency: "USD", description: "Founding Pro subscription billed monthly." },
    { "@type": "Offer", price: "99", priceCurrency: "USD", description: "One-time ClipShip Pro license." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is ClipShip available for Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClipShip 1.0.12 is available for Apple Silicon Macs running macOS 15 or newer as a signed and Apple-notarized DMG.",
      },
    },
    {
      "@type": "Question",
      name: "Does ClipShip support Intel Macs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The first public Mac release supports Apple Silicon Macs with an M1, M2, M3, M4, or newer Apple chip. Intel Macs are not supported.",
      },
    },
    {
      "@type": "Question",
      name: "Does ClipShip use Apple Silicon for local AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ClipShip uses MLX Whisper with Apple Metal for local transcription and llama.cpp with Metal acceleration for local clip analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Does ClipShip upload videos from a Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Local AI mode, the source video, transcript, clip selection, captions, and rendered exports stay on the Mac. Optional API mode keeps the video local but sends transcript text directly to the provider selected by the user.",
      },
    },
  ],
};

export default function MacPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContentPage
        title="Local AI video clipping, built for Apple Silicon"
        description="ClipShip for Mac turns long spoken videos into captioned vertical clips without uploading the source footage. The first public release supports Apple Silicon and macOS 15 or newer."
        badge="Available for macOS"
      >
        <AnswerBox title="ClipShip is now available for Apple Silicon Macs.">
          <p>
            Download the signed and Apple-notarized DMG, drag ClipShip into Applications, and start with a
            7-day Pro trial. The app downloads its local AI models during onboarding so you can see what is
            being stored on your Mac.
          </p>
          <DownloadLink
            source="mac-page-primary"
            platform="macos"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Download ClipShip for macOS
          </DownloadLink>
          <p className="text-sm text-zinc-400">Apple Silicon only. macOS 15 or newer.</p>
        </AnswerBox>

        <h2>What runs locally on the Mac</h2>
        <table>
          <thead>
            <tr><th>Stage</th><th>Mac implementation</th><th>Privacy boundary</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Transcription</td>
              <td>MLX Whisper with Apple Metal</td>
              <td>Audio and transcript stay on the Mac in Local AI mode.</td>
            </tr>
            <tr>
              <td>Clip selection</td>
              <td>Qwen through llama.cpp with Metal acceleration</td>
              <td>Transcript analysis stays on the Mac in Local AI mode.</td>
            </tr>
            <tr>
              <td>Captions, face tracking, and export</td>
              <td>Bundled desktop rendering pipeline</td>
              <td>Source footage and rendered files stay on the Mac.</td>
            </tr>
          </tbody>
        </table>

        <h2>Why Apple unified memory matters</h2>
        <p>
          Apple Silicon lets the CPU, GPU, and local AI workloads share one memory pool. ClipShip checks the
          available unified memory before loading a model and recommends an option that leaves room for macOS.
          Closing memory-heavy apps can make larger local models and long exports more reliable.
        </p>

        <ProofFigure
          src="/seo/clipship-headline-editor.png"
          alt="ClipShip review screen with an editable on-video headline and caption controls"
          width={1200}
          height={800}
          caption="Review AI-selected clips, adjust the trim, edit the on-video headline, choose caption styling, and export from one desktop workflow."
          priority
        />

        <h2>Mac requirements</h2>
        <ul>
          <li>Apple Silicon Mac with an M1, M2, M3, M4, or newer Apple chip.</li>
          <li>macOS 15 or newer.</li>
          <li>16 GB unified memory recommended for the smoothest local AI workflow.</li>
          <li>Internet required for first setup, model downloads, sign-in, daily license verification, updates, link imports, and publishing.</li>
          <li>Intel Macs and Linux are not supported.</li>
        </ul>

        <h2>Installation and updates</h2>
        <ol>
          <li>Open the downloaded DMG.</li>
          <li>Drag ClipShip into the Applications folder shown in the installer window.</li>
          <li>Open ClipShip from Applications and complete the guided model setup.</li>
          <li>Eject the ClipShip disk image from Finder after installation.</li>
        </ol>
        <p>
          Future releases use ClipShip&apos;s signed in-app updater. The app verifies the update signature before
          installation, then relaunches the new version from Applications.
        </p>

        <h2>Local AI and optional API mode</h2>
        <p>
          Local AI mode keeps transcription and clip selection on the Mac. Optional API mode keeps the source
          video local but sends transcript text directly to the provider selected by the user. API keys are stored
          in macOS Keychain and are not sent to ClipShip&apos;s servers.
        </p>

        <ClusterLinks current="/mac" />
      </ContentPage>
    </>
  );
}
