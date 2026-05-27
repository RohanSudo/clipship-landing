import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type ProofFigureProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  orientation?: "wide" | "portrait";
  priority?: boolean;
};

export function AnswerBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="not-prose my-9 rounded-2xl border border-violet-500/25 bg-violet-500/[0.06] p-6 sm:p-7">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-violet-300">
        Direct answer
      </p>
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">{title}</h2>
      <div className="space-y-4 text-[16px] leading-8 text-zinc-300">{children}</div>
    </section>
  );
}

export function ProofFigure({
  src,
  alt,
  caption,
  width,
  height,
  orientation = "wide",
  priority = false,
}: ProofFigureProps) {
  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-zinc-800/70 bg-zinc-950/70 shadow-2xl shadow-black/30">
      <div className="flex justify-center bg-black/20">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 960px, 100vw"
          unoptimized={src.endsWith(".gif")}
          priority={priority}
          className={
            orientation === "portrait"
              ? "h-auto max-h-[760px] w-auto max-w-full"
              : "h-auto w-full"
          }
        />
      </div>
      <figcaption className="border-t border-zinc-800/70 px-4 py-3 text-sm leading-6 text-zinc-400">
        {caption}
      </figcaption>
    </figure>
  );
}

const clusterLinks = [
  {
    href: "/no-upload-opusclip-alternative",
    title: "No-upload OpusClip alternative",
    detail: "The main comparison page for creators who want OpusClip-style clipping without uploading source footage.",
  },
  {
    href: "/local-ai-video-clip-generator",
    title: "Local AI video clip generator",
    detail: "A focused explanation of ClipShip's local Windows workflow and when local AI is the right fit.",
  },
  {
    href: "/youtube-to-shorts-clip-maker",
    title: "YouTube to Shorts clip maker",
    detail: "A practical page for turning YouTube and talking-head videos into vertical clips.",
  },
  {
    href: "/vs/opus-clip",
    title: "ClipShip vs OpusClip",
    detail: "The full side-by-side comparison between ClipShip and the best-known cloud clip generator.",
  },
];

export function ClusterLinks({ current }: { current?: string }) {
  return (
    <section className="not-prose my-12 rounded-2xl border border-zinc-800/70 bg-white/[0.025] p-6 sm:p-7">
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
        Related ClipShip guides
      </p>
      <h2 className="mb-5 text-2xl font-bold tracking-tight text-white">
        Keep exploring the local clip workflow
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {clusterLinks
          .filter((link) => link.href !== current)
          .map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 transition-colors hover:border-violet-500/40 hover:bg-violet-500/[0.04]"
            >
              <p className="font-semibold text-white">{link.title}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{link.detail}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
