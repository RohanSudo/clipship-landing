import DownloadLink from "./DownloadLink";

function WindowsMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor">
      <path d="M2.5 4.2 10.8 3v8.1H2.5V4.2Zm9.5-1.4L21.5 1.5v9.6H12V2.8ZM2.5 12.3h8.3v8.1l-8.3-1.2v-6.9Zm9.5 0h9.5v9.6L12 20.6v-8.3Z" />
    </svg>
  );
}

function AppleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0" fill="currentColor">
      <path d="M16.7 12.7c0-2.4 2-3.6 2.1-3.7a4.6 4.6 0 0 0-3.6-2c-1.5-.2-3 .9-3.8.9-.8 0-2-1-3.3-.9a4.8 4.8 0 0 0-4 2.5c-1.7 3-.4 7.3 1.2 9.7.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.2-1.2 3-2.4a10.6 10.6 0 0 0 1.4-2.9 4.2 4.2 0 0 1-2.6-3.6ZM14.2 5.4a4.1 4.1 0 0 0 1-3 4.2 4.2 0 0 0-2.8 1.4 3.9 3.9 0 0 0-1 2.9 3.5 3.5 0 0 0 2.8-1.3Z" />
    </svg>
  );
}

export default function PlatformDownloadButtons({
  source,
  variant = "standard",
  className = "",
}: {
  source: string;
  variant?: "hero" | "standard" | "compact";
  className?: string;
}) {
  const detailed = variant === "hero";
  const compact = variant === "compact";
  const buttonBaseClass = compact
    ? "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-violet-400/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
    : "inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border px-5 py-3.5 text-left shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400";
  const windowsButtonClass = compact
    ? buttonBaseClass
    : `${buttonBaseClass} border-white/15 bg-white text-zinc-950 hover:bg-zinc-100`;
  const macButtonClass = compact
    ? buttonBaseClass
    : `${buttonBaseClass} border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800`;

  return (
    <div
      id={source === "hero" ? "downloads" : undefined}
      className={`grid w-full gap-3 sm:grid-cols-2 ${detailed ? "mx-auto max-w-[650px]" : "mx-auto max-w-lg"} ${className}`}
    >
      <DownloadLink source={`${source}-windows`} platform="windows" className={windowsButtonClass}>
        <WindowsMark />
        <span className={detailed ? "flex flex-col leading-none" : "leading-none"}>
          <span>{compact ? "Windows" : "Download for Windows"}</span>
          {detailed && <span className="mt-1 text-xs font-medium text-zinc-500">Windows 10 and 11</span>}
        </span>
      </DownloadLink>
      <DownloadLink
        source={`${source}-macos`}
        platform="macos"
        className={macButtonClass}
      >
        <AppleMark />
        <span className={detailed ? "flex flex-col leading-none" : "leading-none"}>
          <span>{compact ? "macOS" : "Download for macOS"}</span>
          {detailed && <span className="mt-1 text-xs font-medium text-zinc-400">Apple Silicon, macOS 15+</span>}
        </span>
      </DownloadLink>
    </div>
  );
}
