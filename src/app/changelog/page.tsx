import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "../components/ContentPage";

const releases = [
  {
    version: "1.0.3",
    date: "June 4, 2026",
    label: "Transcription and GPU mode fix",
    summary:
      "This update fixes clean-install transcription setup and makes the GPU/CPU setting apply consistently to local processing.",
    changes: [
      "Fixed the transcription model mismatch so the app transcribes with the same Whisper model that onboarding downloads and verifies.",
      "Fixed Whisper model checks and downloads so they respect the user's selected model storage folder.",
      "Fixed the Settings local-model download button so it downloads local clip-finding AI models instead of calling the transcription-engine downloader.",
      "Fixed the processing pipeline so the selected local processing device is passed to Whisper transcription instead of always using Auto.",
      "Changed forced GPU mode so transcription fails with a clear CUDA error instead of silently falling back to CPU.",
    ],
    notes: [
      "If ClipShip still says the transcription model is missing after updating, open Settings and download the transcription engine once.",
      "Auto mode can still choose the safest available device. GPU mode now means GPU is required.",
    ],
  },
  {
    version: "1.0.1",
    date: "June 4, 2026",
    label: "Stability update",
    summary:
      "This update focuses on the two issues reported after launch: local AI device mode and the unsaved-project close prompt.",
    changes: [
      "Fixed Local AI processing mode so choosing CPU actually forces the clip-selection AI to run on CPU.",
      "Kept transcription device selection separate, so Whisper can still use GPU automatically when it is safe while CPU mode controls the local AI clip finder.",
      "Added stricter GPU mode behavior. If GPU mode is selected and CUDA is not really being used, ClipShip fails clearly instead of silently falling back.",
      "Reduced Settings flicker by preloading hardware and CUDA status when the app starts.",
      "Improved the unsaved-project close prompt so the app cleanup waits until the window is really closing.",
      "Cleaned up local AI error messages so failed model/server startup is easier to understand.",
    ],
    notes: [
      "First-time setup still needs internet for the bundled model, transcription runtime, and optional CUDA downloads.",
      "Windows SmartScreen may still warn on install because ClipShip does not yet have an EV code-signing certificate.",
    ],
  },
  {
    version: "1.0.0",
    date: "May 21, 2026",
    label: "Public launch",
    summary:
      "The first public Windows release of ClipShip, a local AI clip generator for turning long talking-head videos into short-form clips.",
    changes: [
      "Local video processing for transcription, clip selection, face-tracking vertical crop, captions, and export.",
      "Free tier with 720p exports and a Pro tier with 1080p exports, no watermark, and custom caption styles.",
      "One-time Pro license with update support instead of a monthly subscription.",
      "Auto-updater support for future Windows releases.",
    ],
    notes: [
      "ClipShip is a public v1 desktop app. Bug reports and feature requests go to hello@clipship.co.",
    ],
  },
];

export const metadata: Metadata = {
  title: "ClipShip Changelog - What's New",
  description:
    "ClipShip release notes and product updates. See what's new in each Windows desktop app update.",
  alternates: {
    canonical: "/changelog",
  },
};

export default function Changelog() {
  return (
    <ContentPage
      title="ClipShip changelog"
      description="What's new, what changed, and what to know before updating."
      badge="Product updates"
    >
      <p>
        ClipShip updates are shipped through the desktop app's built-in updater. When an update is
        available, the app shows an update prompt with a link back to this page.
      </p>

      <p>
        If an update does not install correctly, or if a bug is still reproducible after updating,
        email <a href="mailto:hello@clipship.co">hello@clipship.co</a> with the app version and what
        you were trying to do.
      </p>

      <div className="not-prose my-10 flex flex-wrap gap-3">
        {releases.map((release) => (
          <a
            key={release.version}
            href={`#v${release.version}`}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-violet-400/40 hover:text-white"
          >
            v{release.version}
          </a>
        ))}
      </div>

      {releases.map((release) => (
        <section key={release.version} id={`v${release.version}`} className="scroll-mt-28">
          <h2>
            v{release.version}: {release.label}
          </h2>
          <p className="text-sm text-zinc-500">{release.date}</p>
          <p>{release.summary}</p>

          <h3>Changes</h3>
          <ul>
            {release.changes.map((change) => (
              <li key={change}>{change}</li>
            ))}
          </ul>

          <h3>Notes</h3>
          <ul>
            {release.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      ))}

      <h2>Latest download</h2>
      <p>
        New installs can always download the latest Windows installer from{" "}
        <Link href="/">the ClipShip homepage</Link>.
      </p>
    </ContentPage>
  );
}
