import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "../components/ContentPage";

const releases = [
  {
    version: "1.0.7",
    date: "July 22, 2026",
    label: "Monthly Pro plan and billing choices",
    summary:
      "This update adds a $5 founding monthly plan alongside the existing $99 lifetime license, with the same Pro features on either plan.",
    changes: [
      "Added a $5-per-month founding Pro plan for the first 50 paid subscribers. Founding subscribers keep that price while their subscription remains continuously active.",
      "Kept the $99 one-time lifetime license as a separate option with no recurring charge.",
      "Changed the in-app Upgrade action to show a monthly-versus-lifetime plan chooser before opening checkout.",
      "Added billing details in Settings so monthly subscribers can see their plan state and open the secure billing portal to manage or cancel their subscription.",
      "Added a switch-to-lifetime option for monthly subscribers. The monthly subscription is cancelled after the lifetime payment succeeds.",
      "Improved the post-checkout license refresh so newly activated Pro access and additional device slots appear without relying on stale app state.",
    ],
    notes: [
      "Monthly and lifetime licenses unlock the same Pro features: watermark-free 1080p exports and custom caption styles, with one active device included.",
      "Existing lifetime licenses are unchanged. No current lifetime customer is moved to a subscription.",
      "The $5 founding rate is retained only while the subscription remains active. Cancelling and joining again later may mean paying the then-current monthly price.",
      "ClipShip still processes videos locally on your PC. The new subscription option changes billing, not where your videos or AI processing run.",
    ],
  },
  {
    version: "1.0.6",
    date: "July 7, 2026",
    label: "AI analysis recovery fix",
    summary:
      "This update improves the AI clip-selection step when a local model returns malformed or overlapping clip candidates.",
    changes: [
      "Added recovery for overlapping AI-selected segments inside the same clip instead of failing the whole run.",
      "Added a compact JSON retry when the AI returns malformed or truncated clip data.",
      "Improved validation so ClipShip can keep a usable imperfect clip instead of returning zero clips after analysis.",
      "Fixed Sentry diagnostics so local AI errors are tagged as local instead of being mislabeled as Gemini.",
    ],
    notes: [
      "This fix targets analysis failures where the app said AI returned clips but all were dropped during validation.",
      "The app still keeps strict validation first. The recovery path only runs when strict validation would otherwise leave the user with no clips.",
      "If AI analysis still fails, email hello@clipship.co with the crash report so the exact transcript/model behavior can be inspected.",
    ],
  },
  {
    version: "1.0.5",
    date: "June 6, 2026",
    label: "Caption export fix",
    summary:
      "This update fixes exports that failed after clip processing completed because the caption renderer was missing on clean Windows installs.",
    changes: [
      "Bundled the local caption-rendering runtime into the Windows installer instead of depending on a globally installed HyperFrames command.",
      "Bundled the headless browser runtime used for animated caption overlays during export.",
      "Changed the export path so ClipShip prefers its bundled renderer first and only falls back to global commands on development machines.",
      "Improved the missing-runtime error message so future packaging issues are easier to diagnose.",
    ],
    notes: [
      "This is the fix for exports that failed with HyperFrames CLI not found after processing clips successfully.",
      "No manual npm install or command-line setup is required on your PC.",
      "The installer is larger in this version because the caption export renderer now ships with ClipShip.",
    ],
  },
  {
    version: "1.0.4",
    date: "June 6, 2026",
    label: "RTX 50-series GPU compatibility build",
    summary:
      "This update adds a separate Blackwell CUDA runtime path for RTX 50-series GPUs and improves GPU runtime diagnostics.",
    changes: [
      "Added RTX 50-series / Blackwell GPU detection so ClipShip downloads a newer CUDA runtime pack instead of reusing the older legacy CUDA stack.",
      "Kept RTX 20/30/40-series cards on the existing legacy CUDA runtime path so older supported GPUs do not receive an unnecessary runtime change.",
      "Separated the Blackwell CUDA files into their own local folder to avoid stale DLLs from the legacy runtime mixing with the newer runtime.",
      "Updated transcription and local AI startup logs to include GPU name, runtime flavor, and runtime version.",
      "Improved runtime-pack handling so downloadable CUDA zips stay outside the Windows installer bundle.",
    ],
    notes: [
      "RTX 50-series support depends on the installed NVIDIA driver and the external CUDA pack downloaded from ClipShip's CDN.",
      "If you are testing on an RTX 50-series card, open Settings and set Local processing device to GPU before starting the run.",
      "If it still fails, email hello@clipship.co with the crash report so the exact GPU/runtime error can be inspected.",
    ],
  },
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
