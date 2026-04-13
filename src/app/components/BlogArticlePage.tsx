"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function LogoIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="nav-grad-blog" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#nav-grad-blog)" opacity="0.9" />
    </svg>
  );
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 200, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Reusable blog building blocks ── */

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <section className="mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 tracking-tight">{title}</h2>
        {children}
      </section>
    </FadeIn>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-zinc-300 leading-[1.8] text-[16px] mb-5">{children}</p>;
}

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5 mb-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-zinc-300 text-[15px] leading-relaxed">
          <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-violet-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="space-y-3 mb-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-4 text-zinc-300 text-[15px] leading-relaxed">
          <span className="shrink-0 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-violet-400">
            {i + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}

export type ToolCardData = {
  rank: number;
  name: string;
  tagline: string;
  highlight?: boolean;
  details: { label: string; value: string }[];
};

export function ToolCard({ tool }: { tool: ToolCardData }) {
  return (
    <FadeIn delay={tool.rank * 0.05}>
      <div className={`p-6 rounded-2xl border ${
        tool.highlight
          ? "border-violet-500/30 bg-violet-500/[0.05]"
          : "border-zinc-800 bg-white/[0.02]"
      } hover:border-violet-500/20 transition-colors`}>
        <div className="flex items-start gap-4 mb-4">
          <span className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-extrabold ${
            tool.highlight
              ? "bg-violet-500/20 text-violet-300"
              : "bg-white/5 text-zinc-400"
          }`}>
            {tool.rank}
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">{tool.name}</h3>
            {tool.highlight && (
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded mt-1">
                Editor&apos;s Pick
              </span>
            )}
          </div>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed mb-4">{tool.tagline}</p>
        <div className="grid grid-cols-2 gap-3">
          {tool.details.map((d, i) => (
            <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 mb-1">{d.label}</p>
              <p className="text-sm text-zinc-200 font-medium">{d.value}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export type ComparisonRow = {
  feature: string;
  values: string[];
};

export function ComparisonTable({
  headers,
  rows,
  highlightCol,
}: {
  headers: string[];
  rows: ComparisonRow[];
  highlightCol?: number;
}) {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-zinc-800/60 overflow-hidden bg-white/[0.015] overflow-x-auto mb-8">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-zinc-800/60 bg-white/[0.03]">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`text-left px-5 py-3.5 font-semibold text-sm ${
                    i === highlightCol ? "text-violet-400" : i === 0 ? "text-zinc-300" : "text-zinc-400"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-zinc-800/40 last:border-0 hover:bg-white/[0.02] transition-colors">
                <td className="px-5 py-3.5 text-zinc-300 font-medium">{row.feature}</td>
                {row.values.map((v, vi) => (
                  <td
                    key={vi}
                    className={`px-5 py-3.5 ${
                      vi + 1 === highlightCol ? "text-violet-300" : "text-zinc-400"
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  );
}

export function RecommendationCard({
  condition,
  recommendation,
  highlighted,
}: {
  condition: string;
  recommendation: string;
  highlighted?: boolean;
}) {
  return (
    <div className={`p-5 rounded-xl border ${
      highlighted
        ? "border-violet-500/25 bg-violet-500/[0.05]"
        : "border-zinc-800 bg-white/[0.02]"
    }`}>
      <p className={`text-sm font-semibold mb-1.5 ${highlighted ? "text-violet-300" : "text-zinc-300"}`}>
        {condition}
      </p>
      <p className="text-sm text-zinc-400 leading-relaxed">{recommendation}</p>
    </div>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn>
      <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.03] mb-8">
        <div className="flex items-start gap-3">
          <span className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <div className="text-sm text-zinc-300 leading-relaxed">{children}</div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Main blog layout ── */

export default function BlogArticlePage({
  children,
  title,
  description,
  badge = "Blog",
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="ambient-glow-violet" />
      <div className="ambient-glow-cyan" />
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />

      {/* Nav */}
      <nav className="relative z-10 border-b border-white/5 backdrop-blur-md bg-[#09090b]/80 sticky top-0">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <LogoIcon />
            <span className="font-bold text-white text-lg tracking-tight group-hover:text-violet-300 transition-colors">
              ClipShip
            </span>
          </Link>
          <Link
            href="/#waitlist"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] active:scale-95"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10 pt-16 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full mb-6">
              {badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
              {title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-zinc-400 mt-5 leading-relaxed max-w-2xl">
              {description}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-8 h-px bg-gradient-to-r from-violet-500/40 via-cyan-500/20 to-transparent" />
          </FadeIn>
        </div>
      </header>

      {/* Article content */}
      <main className="relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* CTA */}
      <section className="relative z-10 px-6 pb-20">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="relative p-10 sm:p-14 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.07] to-cyan-500/[0.03] text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Try ClipShip for free
                </h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
                  Record once. Get an edited video + clips for every platform. Runs on your PC.
                </p>
                <Link
                  href="/#waitlist"
                  className="inline-block text-sm font-semibold px-8 py-3.5 rounded-lg bg-violet-600 hover:bg-violet-500 transition-all hover:shadow-[0_0_24px_rgba(124,58,237,0.35)] active:scale-95"
                >
                  Join the early access waitlist
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-zinc-500">
          <span>&copy; ClipShip 2026</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
