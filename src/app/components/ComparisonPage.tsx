"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function LogoIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="nav-grad-vs" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#nav-grad-vs)" opacity="0.9" />
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

/* ── Check / Cross icons ── */
function Check() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}
function Cross() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/15 text-red-400">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}
function Partial() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/15 text-amber-400">
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    </span>
  );
}

export type FeatureRow = {
  feature: string;
  clipship: "yes" | "no" | "partial" | string;
  competitor: "yes" | "no" | "partial" | string;
};

export type ComparisonData = {
  competitor: string;
  competitorTagline: string;
  verdict: string;
  verdictDetail: string;
  features: FeatureRow[];
  clipshipWins: { title: string; detail: string }[];
  competitorWins: { title: string; detail: string }[];
  whoShouldUse: { clipship: string; competitor: string };
  bottomLine: string;
};

function StatusCell({ value }: { value: string }) {
  if (value === "yes") return <Check />;
  if (value === "no") return <Cross />;
  if (value === "partial") return <Partial />;
  return <span className="text-sm text-zinc-300">{value}</span>;
}

export default function ComparisonPage({
  data,
}: {
  data: ComparisonData;
}) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="ambient-glow-violet" />
      <div className="ambient-glow-cyan" />
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />

      {/* Nav */}
      <nav className="relative z-10 border-b border-white/5 backdrop-blur-md bg-[#09090b]/80 sticky top-0">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
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
      <header className="relative z-10 pt-16 pb-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full mb-6">
              Comparison
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              ClipShip <span className="text-zinc-500">vs</span> {data.competitor}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              {data.competitorTagline}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* Quick verdict */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn delay={0.15}>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04]">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1 w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-2">Quick Verdict</h2>
                <p className="text-zinc-300 leading-relaxed">{data.verdict}</p>
                <p className="text-zinc-400 leading-relaxed mt-3">{data.verdictDetail}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Feature comparison table */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Feature Comparison</h2>
            <div className="rounded-2xl border border-zinc-800/60 overflow-hidden bg-white/[0.015]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800/60 bg-white/[0.03]">
                    <th className="text-left px-6 py-4 font-semibold text-zinc-300">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-violet-400 w-36">ClipShip</th>
                    <th className="text-center px-6 py-4 font-semibold text-zinc-400 w-36">{data.competitor}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.features.map((row, i) => (
                    <tr key={i} className="border-b border-zinc-800/40 last:border-0 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-zinc-300">{row.feature}</td>
                      <td className="px-6 py-4 text-center"><StatusCell value={row.clipship} /></td>
                      <td className="px-6 py-4 text-center"><StatusCell value={row.competitor} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Wins sections */}
      <section className="relative z-10 px-6 pb-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* ClipShip wins */}
          <FadeIn>
            <div>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                Where ClipShip wins
              </h2>
              <div className="space-y-4">
                {data.clipshipWins.map((win, i) => (
                  <div key={i} className="p-5 rounded-xl border border-violet-500/15 bg-violet-500/[0.03]">
                    <p className="font-semibold text-white mb-1.5">{win.title}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{win.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Competitor wins */}
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                Where {data.competitor} wins
              </h2>
              <div className="space-y-4">
                {data.competitorWins.map((win, i) => (
                  <div key={i} className="p-5 rounded-xl border border-zinc-800 bg-white/[0.02]">
                    <p className="font-semibold text-white mb-1.5">{win.title}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{win.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who should use */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
            <div className="p-6 rounded-xl border border-zinc-800 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-violet-400 uppercase tracking-wider mb-3">Use ClipShip if</h3>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{data.whoShouldUse.clipship}</p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-800 bg-white/[0.02]">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-3">Use {data.competitor} if</h3>
              <p className="text-zinc-300 leading-relaxed text-[15px]">{data.whoShouldUse.competitor}</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Bottom line */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-zinc-800 bg-white/[0.02]">
            <h2 className="text-xl font-bold text-white mb-3">Bottom Line</h2>
            <p className="text-zinc-300 leading-relaxed">{data.bottomLine}</p>
          </div>
        </FadeIn>
      </section>

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
                  Turn long videos into viral clips. Local AI, no cloud, one-time price.
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
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-zinc-500">
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
