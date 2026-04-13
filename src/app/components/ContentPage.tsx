"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function LogoIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#nav-grad)" opacity="0.9" />
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

export default function ContentPage({
  children,
  title,
  description,
  badge,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  badge?: string;
}) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="ambient-glow-violet" />
      <div className="ambient-glow-cyan" />

      {/* Dot grid */}
      <div className="fixed inset-0 dot-grid pointer-events-none z-0" />

      {/* Nav */}
      <nav className="relative z-10 border-b border-white/5 backdrop-blur-md bg-[#09090b]/80 sticky top-0">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
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

      {/* Hero header */}
      <header className="relative z-10 pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            {badge && (
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full mb-6">
                {badge}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight max-w-3xl">
              {title}
            </h1>
          </FadeIn>
          {description && (
            <FadeIn delay={0.1}>
              <p className="text-lg sm:text-xl text-zinc-400 mt-6 leading-relaxed max-w-2xl">
                {description}
              </p>
            </FadeIn>
          )}
          {/* Decorative line */}
          <FadeIn delay={0.2}>
            <div className="mt-10 h-px bg-gradient-to-r from-violet-500/40 via-cyan-500/20 to-transparent" />
          </FadeIn>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.15}>
            <article className="
              prose prose-invert prose-zinc max-w-none
              prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-14 prose-h2:mb-5
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-zinc-300 prose-p:leading-[1.8] prose-p:mb-5 prose-p:text-[16px]
              prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300
              prose-strong:text-white prose-strong:font-semibold
              prose-li:text-zinc-300 prose-li:leading-[1.8]
              prose-ul:space-y-2
              prose-table:border-zinc-800/50 prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:text-zinc-200 prose-th:font-semibold prose-th:bg-white/5 prose-th:border-zinc-800/50 prose-th:px-5 prose-th:py-3.5 prose-th:text-sm
              prose-td:text-zinc-400 prose-td:border-zinc-800/50 prose-td:px-5 prose-td:py-3.5 prose-td:text-sm
            ">
              {children}
            </article>
          </FadeIn>
        </div>
      </main>

      {/* CTA */}
      <section className="relative z-10 px-6 pb-20">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <div className="relative p-10 sm:p-14 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.07] to-cyan-500/[0.03] text-center overflow-hidden">
              {/* CTA glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Try ClipShip for free
                </h2>
                <p className="text-zinc-400 mb-8 max-w-lg mx-auto leading-relaxed">
                  Record once. Get an edited video + clips for every platform. Runs on your PC. No cloud. No subscription.
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
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-zinc-500">
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
