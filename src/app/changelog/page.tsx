import type { Metadata } from "next";
import Link from "next/link";
import ContentPage from "../components/ContentPage";

const releases = [
  {
    version: "1.0.21",
    date: "August 18, 2026",
    label: "Safer processing recovery and clearer errors",
    summary:
      "This update stops stalled local AI analysis cleanly, recovers more usable clips from imperfect AI timestamps, and gives clearer storage and export errors.",
    changes: [
      "Stopped a local AI request after its 10-minute inference limit instead of retrying the same stalled request and making the run appear frozen.",
      "Added one focused retry with stricter timestamp rules when every AI-selected clip fails validation.",
      "Added a safe relaxed-validation recovery for imperfect but still usable clip segments instead of dropping the entire result immediately.",
      "Verified that the selected storage folder is writable before starting multi-gigabyte model downloads, with clear permission and disk-space guidance when it is not.",
      "Hardened Copy crash log so clipboard focus failures fall back safely and show a useful retry message instead of failing silently.",
      "Added privacy-safe analysis and export diagnostics that include the failed stage, model, device, and error category while removing local file paths.",
    ],
    notes: [
      "The source video, transcript, and AI analysis remain on the computer when Local AI is selected.",
      "The added diagnostics do not include source video contents, transcript contents, model contents, or local filesystem paths.",
      "This release does not change pricing, Dodo products, subscriptions, referrals, device limits, billing, or existing customer access.",
    ],
  },
  {
    version: "1.0.20",
    date: "August 17, 2026",
    label: "Reliable language selection and AI clip recovery",
    summary:
      "This update keeps the selected spoken language attached to the project and recovers when a local AI model initially selects no clips.",
    changes: [
      "Kept the spoken-language selection stable when moving between clip setup and processing instead of allowing the screen to reset it silently.",
      "Added a processing-stage language indicator so the selected transcription language is visible before captions are generated.",
      "Added a fail-closed check that stops the run if the transcription engine reports a different forced language than the one requested.",
      "Changed valid empty AI results so they are recognized as no clip selection instead of being reported as malformed JSON.",
      "Added a focused second AI pass that selects the strongest available moment when the first pass returns no clips.",
      "Added a clear recovery message when a video still produces no usable clips after both analysis passes.",
    ],
    notes: [
      "Genre changes what kinds of moments ClipShip prioritizes. It does not change the spoken language used for transcription.",
      "The source video, transcript, and AI analysis remain on the computer when Local AI is selected.",
      "This release does not change pricing, Dodo products, subscriptions, referrals, device limits, billing, or existing customer access.",
    ],
  },
  {
    version: "1.0.19",
    date: "August 16, 2026",
    label: "Safer 4K transcription and clearer clip setup",
    summary:
      "This update prevents local AI and transcription from competing for graphics memory, makes 4K sources safer to process, and adds clearer controls for the clips ClipShip should create.",
    changes: [
      "Changed transcription to work from a temporary 16 kHz mono audio file instead of decoding the original video container inside the transcription engine.",
      "Added an exclusive transcription lock so the local language model is fully stopped before transcription starts and cannot reload until transcription finishes.",
      "Added automatic CPU fallback when available NVIDIA graphics memory is too low for reliable transcription, with a clear warning when forced GPU mode cannot run safely.",
      "Added a spoken-language selector so the transcription engine can use the correct language hint instead of relying only on automatic detection.",
      "Added a real Smart Mix or Keep Full Frame choice to clip setup and carried that choice through analysis, review, and rendering.",
      "Added cleanup for temporary transcription audio even when a run is cancelled or fails.",
    ],
    notes: [
      "The source video remains on the computer. The temporary transcription audio is local and is removed after the run.",
      "On Apple Silicon, ClipShip continues to use MLX Whisper and Metal. On Windows, GPU transcription remains available when the selected mode and available graphics memory can support it safely.",
      "This release does not change pricing, Dodo products, subscriptions, referrals, device limits, billing, or existing customer access.",
    ],
  },
  {
    version: "1.0.18",
    date: "August 15, 2026",
    label: "Reliable transcription engine setup",
    summary:
      "This update makes the first transcription-engine download resilient to interrupted connections and shows a useful error when setup cannot continue.",
    changes: [
      "Added bounded retries and resumable downloads for temporary connection failures during transcription-engine setup.",
      "Added a complete-file verification step so onboarding cannot continue with a partial or damaged transcription model.",
      "Added clear inline recovery messages for network, TLS, storage, server, and bundled-runtime failures instead of returning to an unchanged setup screen.",
      "Added privacy-safe failure categories to crash reporting so setup problems can be diagnosed without collecting file paths, model contents, or personal data.",
      "Added a bundled-runtime check before downloading so an incomplete installation is identified immediately with the correct reinstall guidance.",
    ],
    notes: [
      "Existing complete transcription models remain in place and are not downloaded again.",
      "Windows continues to use Faster-Whisper and Apple Silicon Macs continue to use MLX Whisper; the recovery behavior is shared across both platforms.",
      "This release does not change pricing, Dodo products, subscriptions, referrals, device limits, billing, or existing customer access.",
    ],
  },
  {
    version: "1.0.17",
    date: "August 14, 2026",
    label: "Offer codes and creator attribution",
    summary:
      "This update adds a durable offer-code fallback for creator referrals and enforces ClipShip's founder lifetime allocation at checkout.",
    changes: [
      "Added one optional Offer code field during account setup for referral, creator-partner, and future promotional codes.",
      "Added the same optional Offer code field before Pro checkout so attribution can be recovered even when a download and later signup happen on different networks.",
      "Added a 14-day Pro trial for valid creator-partner offers while keeping the normal ClipShip trial at seven days.",
      "Added automatic recent-link detection where the match is unambiguous, with the visible offer code as the reliable fallback.",
      "Added automatic-link and offer-code attribution counts to the creator dashboard alongside verified clicks, accounts, conversions, and commission entries.",
      "Enforced the $99 founder lifetime allocation atomically for the first 100 eligible lifetime purchases, then switched new lifetime checkouts to the $149 standard product.",
    ],
    notes: [
      "The installer is identical for every customer and contains no buyer-specific or creator-specific data.",
      "Creating another account on the same computer does not restart or extend a used trial.",
      "Existing subscriptions, existing lifetime licenses, device limits, signed-webhook activation, and customer access are unchanged.",
    ],
  },
  {
    version: "1.0.16",
    date: "August 13, 2026",
    label: "Safer Windows updates and AI provider repairs",
    summary:
      "This update prevents incomplete Windows reinstalls and repairs the provider failures found in recent production diagnostics.",
    changes: [
      "Changed the Windows installer to detect and close only stale ClipShip runtime processes before replacing bundled files.",
      "Removed the installer Ignore path that could leave Python DLLs missing and make ClipShip fail to open after an update.",
      "Added a release-blocking import check for the exact bundled transcription, local AI, SSL, database, vision, and media runtime components.",
      "Reduced Groq request sizes for lower free-tier token limits and added bounded retry guidance for rate-limited requests.",
      "Made local AI failures report the actual model or runtime loading problem instead of incorrectly saying that the server is unreachable.",
      "Removed Gemini's unbundled Python SDK dependency, replaced retired Gemini 2.0 defaults, and migrated saved retired defaults to Gemini 3.1 Flash-Lite.",
    ],
    notes: [
      "The locked-DLL installer failure affected Windows reinstalls and updates only. The macOS DMG does not use NSIS or Windows Python DLLs.",
      "The shared Groq, Gemini, and local AI error repairs are included in both the Windows and macOS builds.",
      "This release does not change the current $99 lifetime charge, Dodo products, subscriptions, referrals, device limits, billing, or existing customer access.",
    ],
  },
  {
    version: "1.0.15",
    date: "August 11, 2026",
    label: "Recovery and CPU stability",
    summary:
      "This update fixes two Windows failures found in production diagnostics and makes error reporting more accurate.",
    changes: [
      "Fixed recovered-session cleanup when Windows briefly keeps a project file open after a preview or process exits.",
      "Changed the Discard action to show a useful retry message instead of producing an unhandled app error if a file remains locked.",
      "Isolated explicit CPU transcription from optional NVIDIA CUDA runtime files that could crash the CPU process on some Windows systems.",
      "Stopped provider rate limits and quota responses from being reported as ClipShip crashes while keeping the error visible in the app.",
      "Completed privacy-safe export milestone tracking for people who opted into anonymous usage statistics.",
    ],
    notes: [
      "The macOS build is updated to the same version so both signed updater channels remain aligned. Its Metal and MLX processing architecture is unchanged.",
      "Anonymous product analytics still excludes account identity, file names, paths, source URLs, transcripts, prompts, API keys, clip text, and exported media.",
      "This release does not change pricing, products, subscriptions, referrals, device limits, billing, or existing customer access.",
    ],
  },
  {
    version: "1.0.14",
    date: "August 7, 2026",
    label: "Clearer Free and Pro feature boundaries",
    summary:
      "This update keeps ClipShip's original Free workflow intact while moving the newer workflow controls and publishing tools into Pro.",
    changes: [
      "Added clear Pro locks and upgrade actions for manual target clip counts, on-video headlines, and generated posting copy.",
      "Kept automatic clip finding, built-in caption styles, editing and reframing, and 720p watermarked exports available on Free.",
      "Added native entitlement checks so paid processing and export features cannot be unlocked by changing the interface alone.",
      "Made Free processing fall back to automatic clip counts and made Free exports omit previously saved paid headline overlays.",
      "Cleared paid export caches when an account's entitlement changes so an expired trial cannot reuse a prior Pro render.",
    ],
    notes: [
      "The seven-day trial still includes every Pro feature.",
      "Existing Pro subscribers and Lifetime Pro owners keep the same features and billing terms.",
      "This release does not change prices, product IDs, subscriptions, referrals, device limits, or existing customer access.",
    ],
  },
  {
    version: "1.0.13",
    date: "August 7, 2026",
    label: "Give 20%, get 20% referrals",
    summary:
      "This update adds a referral program for the ClipShip lifetime license, with a reward for both the buyer and the person who referred them.",
    changes: [
      "Added a personal referral code and shareable link in Settings.",
      "Added 20% off a first Lifetime Pro purchase for an eligible referred buyer.",
      "Added one 20% Lifetime Pro discount for referrers on Free, Trial, or Monthly after the referred purchase clears its refund window.",
      "Added banked permanent device slots for later rewards, which activate automatically after the referrer owns Lifetime Pro.",
      "Added referral status, successful-referral count, remaining rewards, and available-discount status in Settings.",
      "Added repeat-device signup risk records for internal review without blocking legitimate account access or purchases.",
    ],
    notes: [
      "Referral discounts apply only to the $99 lifetime license. The $5 monthly plan and extra-slot purchases are not discounted.",
      "Rewards become available after the referred buyer's seven-day refund window and are limited to three successful referrals per account: at most one Lifetime discount, followed by device slots.",
      "Self-referrals, shared-device referrals, discount stacking, refunded payments, disputes, and chargebacks do not qualify.",
      "The signed Dodo webhook remains the only authority for activating Pro access and qualifying referral rewards.",
    ],
  },
  {
    version: "1.0.12",
    date: "August 6, 2026",
    label: "ClipShip for macOS and safer offline access",
    summary:
      "This update brings ClipShip to Apple Silicon Macs, strengthens license verification, and fixes the model, export, project, and progress issues found during Mac testing.",
    changes: [
      "Added the first public Apple Silicon macOS build for macOS 15 and newer, distributed as a signed and Apple-notarized drag-to-Applications DMG.",
      "Added native Mac transcription through MLX and local clip analysis through llama.cpp Metal, with unified-memory checks before processing.",
      "Added signed automatic updates for macOS through the same ClipShip update channel used by Windows.",
      "Made the Whisper onboarding download use ClipShip's managed model cache with visible checking, downloading, verifying, ready, and error states.",
      "Fixed custom caption styles in final Mac exports, Command-V in text and API-key fields, stale pipeline reuse after changing AI mode, and unsaved-project prompts.",
      "Added truthful transcription, analysis, render, export, and YouTube-upload stage feedback, plus consistent bulk-export counts.",
      "Improved cancellation and failure reporting so intentional stops are not reported as crashes and provider-key errors remain understandable.",
      "Added editable spoken openings, short on-video headlines, and post captions with Direct, Curiosity, and Bold alternatives grounded in the transcript.",
      "Added optional privacy-safe product milestones that exclude account identity, file names, video content, transcripts, captions, prompts, and API keys.",
      "Changed paid Pro and Pro trial access to require a successful online license check at least once every 24 hours, including while the app remains open.",
    ],
    notes: [
      "The free trial still lasts seven calendar days. The 24-hour rule is the maximum time Pro or trial features can continue without a successful online verification.",
      "When the seven-day trial ends, ClipShip continues on the Free plan after the next successful license check. Free accounts retain a seven-day offline window.",
      "The Mac release supports Apple Silicon only. Intel Macs are not supported in this release.",
      "The first model download and online features still require internet. Local AI mode continues to process the source video, transcript, captions, and exports on the device.",
      "Windows receives the shared workflow, diagnostics, and licensing fixes. Its existing CUDA and CPU processing architecture is unchanged.",
    ],
  },
  {
    version: "1.0.11",
    date: "July 27, 2026",
    label: "More clips and editable headlines",
    summary:
      "This update gives you direct control over how many clips ClipShip looks for and adds export-ready headlines that stay editable per clip.",
    changes: [
      "Added Auto, up to 5, up to 10, up to 15, and up to 20 clip targets before processing.",
      "Made Auto scale the target to the source video's duration instead of using one fixed count for every video.",
      "Improved larger runs by analyzing the transcript in smaller reliable batches, retrying malformed AI responses per batch, and balancing picks across the full video.",
      "Added an option to start every generated clip with an AI-generated headline based on its clip title.",
      "Added independent headline text, visibility, style, position, size, text color, and accent color controls for every clip.",
      "Added Bold, Clean, and Boxed headline styles plus an Apply appearance to all clips action that keeps each clip's own text and visibility setting.",
      "Added headline rendering to final exports with matching live preview placement.",
    ],
    notes: [
      "Clip targets are maximums. ClipShip can return fewer when the source does not contain enough distinct usable moments.",
      "Choosing more clips increases local AI analysis and rendering time, especially on CPU-only systems.",
      "Headlines are stored separately from captions, so they can be used even when animated captions are turned off.",
    ],
  },
  {
    version: "1.0.10",
    date: "July 25, 2026",
    label: "Twitch and Kick video imports",
    summary:
      "This update expands link imports beyond YouTube while making the supported video sources and limitations explicit.",
    changes: [
      "Added imports for Twitch VODs and clips.",
      "Added imports for Kick clips.",
      "Replaced the YouTube-only link option with one video-link importer that identifies the supported platform automatically.",
      "Added clear YouTube, Twitch, and Kick source labels beside the link field.",
      "Rejects live streams, unsupported websites, lookalike domains, and non-video profile or channel pages before downloading.",
      "Updated and pinned the bundled video downloader to the tested 2026.07.04 release with checksum verification.",
    ],
    notes: [
      "Supported links are YouTube videos and Shorts, Twitch VODs and clips, and Kick clips.",
      "Kick VOD imports are temporarily unavailable because Kick's current VOD metadata endpoint is not working with the downloader.",
      "Only import videos you own or have permission to use.",
    ],
  },
  {
    version: "1.0.9",
    date: "July 24, 2026",
    label: "Account and checkout protection",
    summary:
      "This update closes an account-state gap that could let an incomplete signup enter ClipShip before the product account was created.",
    changes: [
      "Allows only verified trial, free, or active license states to enter the application.",
      "Blocks unknown or incomplete account states instead of treating them as usable licenses.",
      "Prevents the Pro plan chooser from opening until the ClipShip account and license have been verified.",
      "Returns incomplete accounts to signup if checkout discovers that the product account is missing.",
      "Fixes the required-update action so it opens the built-in updater even when that version was previously skipped.",
    ],
    notes: [
      "The checkout backend already prevented incomplete accounts from being charged. This release also prevents those accounts from reaching checkout in the first place.",
      "No payment, subscription, or existing license data is changed by installing this update.",
    ],
  },
  {
    version: "1.0.8",
    date: "July 22, 2026",
    label: "Safer account setup and upgrades",
    summary:
      "This update makes account and license state clearer before an upgrade, preventing a payment from being started before ClipShip can attach it to the correct account.",
    changes: [
      "Returns incomplete accounts to the signup flow instead of leaving Settings on an unknown plan status.",
      "Shows the account setup error directly in Settings so the next required step is clear.",
      "Hides upgrade actions until account setup and license verification are complete.",
      "Prevents checkout from starting when the signed-in account does not yet exist in ClipShip's license database.",
      "Reconciles older accounts safely when Firebase identity details have changed but the verified email uniquely matches the existing ClipShip account.",
    ],
    notes: [
      "No payment or license data is changed by installing this update.",
    ],
  },
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
    "ClipShip release notes and product updates. See what's new in each desktop app update.",
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
        ClipShip updates are shipped through the desktop app&apos;s built-in updater. When an update is
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
        New installs can always choose the latest Windows or Apple Silicon macOS installer from{" "}
        <Link href="/">the ClipShip homepage</Link>.
      </p>
    </ContentPage>
  );
}
