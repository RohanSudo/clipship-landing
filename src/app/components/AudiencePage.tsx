"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function LogoIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="nav-grad-for" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#nav-grad-for)" opacity="0.9" />
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

export type AudienceFeature = {
  icon: string;
  title: string;
  detail: string;
};

export type AudienceData = {
  audience: string;
  headline: string;
  subheadline: string;
  painPoint: { stat: string; label: string };
  problem: string;
  problemDetail: string;
  features: AudienceFeature[];
  output: { label: string; formats: string[] };
  whyLocal: { title: string; detail: string };
  builtFor: string;
};

const iconMap: Record<string, React.ReactNode> = {
  scissors: <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-7 7m7-7l7 7M5.636 5.636a2 2 0 113-3 2 2 0 01-3 3zM16.95 16.95a2 2 0 113-3 2 2 0 01-3 3z" />,
  zoom: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />,
  captions: <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />,
  clips: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
  format: <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />,
  shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  globe: <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  music: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />,
  clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  users: <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  book: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
};

function FeatureIcon({ icon }: { icon: string }) {
  const path = iconMap[icon] || iconMap.clips;
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      {path}
    </svg>
  );
}

export default function AudiencePage({ data }: { data: AudienceData }) {
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
      <header className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full mb-6">
              For {data.audience}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto">
              {data.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg sm:text-xl text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
              {data.subheadline}
            </p>
          </FadeIn>

          {/* Pain point stat */}
          <FadeIn delay={0.2}>
            <div className="mt-12 inline-flex items-center gap-4 px-8 py-5 rounded-2xl border border-red-500/20 bg-red-500/[0.05]">
              <span className="text-4xl font-extrabold text-red-400">{data.painPoint.stat}</span>
              <span className="text-sm text-zinc-400 text-left leading-snug max-w-[160px]">{data.painPoint.label}</span>
            </div>
          </FadeIn>
        </div>
      </header>

      {/* The problem */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">{data.problem}</h2>
            <p className="text-zinc-300 leading-[1.8] text-[16px]">{data.problemDetail}</p>
          </div>
        </FadeIn>
      </section>

      {/* Features grid */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 max-w-3xl mx-auto">What ClipShip does for you</h2>
        </FadeIn>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.features.map((feat, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div className="p-6 rounded-xl border border-zinc-800 bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/[0.03] transition-all group h-full">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-4 group-hover:bg-violet-500/20 transition-colors">
                  <FeatureIcon icon={feat.icon} />
                </div>
                <h3 className="font-semibold text-white mb-2">{feat.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{feat.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Output formats */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.03]">
            <h2 className="text-xl font-bold text-white mb-4">{data.output.label}</h2>
            <div className="flex flex-wrap gap-3">
              {data.output.formats.map((fmt, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300">
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Why local */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">{data.whyLocal.title}</h2>
            <p className="text-zinc-300 leading-[1.8] text-[16px]">{data.whyLocal.detail}</p>
          </div>
        </FadeIn>
      </section>

      {/* Built for */}
      <section className="relative z-10 px-6 pb-16">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">Built for {data.audience.toLowerCase()}</h2>
            <p className="text-zinc-300 leading-[1.8] text-[16px]">{data.builtFor}</p>
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
