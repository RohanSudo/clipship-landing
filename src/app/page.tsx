"use client";

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: Record<string, unknown>) => void;
      reset: (element: HTMLElement) => void;
    };
  }
}

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────
   LOGO
   ──────────────────────────────────────────────── */

function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path
        d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z"
        fill="url(#logo-grad)"
        opacity="0.9"
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────
   REUSABLE ANIMATIONS
   ──────────────────────────────────────────────── */

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 200, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

/* ────────────────────────────────────────────────
   ANIMATED COUNTER (counts up on scroll)
   ──────────────────────────────────────────────── */

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(eased * target);
        setDisplay(`${prefix}${value}${suffix}`);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [isInView, target, prefix, suffix]);

  return <span ref={ref}>{display}</span>;
}

/* ────────────────────────────────────────────────
   CLIP FINDER ANIMATION (AI scans long recording, highlights clips)
   ──────────────────────────────────────────────── */

function ClipFinderAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [phase, setPhase] = useState(0); // 0=loaded, 1=scanning, 2=clips found

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  // Three clip regions within the 80-bar "long recording" timeline.
  // Bars inside these ranges are the "viral moments" the AI finds.
  const clipRegions = [
    { start: 9, end: 17, label: "CLIP 1" },
    { start: 34, end: 44, label: "CLIP 2" },
    { start: 60, end: 69, label: "CLIP 3" },
  ];
  const inClip = (i: number) =>
    clipRegions.some((r) => i >= r.start && i <= r.end);

  const bars = Array.from({ length: 80 }, (_, i) => {
    // Clip-worthy moments have higher amplitude (more energy in the speech)
    const height = inClip(i) ? 14 + Math.random() * 22 : 6 + Math.random() * 16;
    return { height };
  });

  return (
    <div
      ref={ref}
      className="relative flex items-end justify-center gap-[2px] h-16"
    >
      {/* Scanner line that sweeps across during phase 1 */}
      {phase >= 1 && (
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] rounded-full pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(124,58,237,0.9), transparent)",
            boxShadow: "0 0 12px rgba(124,58,237,0.6)",
          }}
          initial={{ left: "0%", opacity: 0 }}
          animate={{
            left: phase >= 2 ? "100%" : "100%",
            opacity: phase >= 2 ? 0 : [0, 1, 1, 0.8],
          }}
          transition={{ duration: 1.4, ease: "linear" }}
        />
      )}

      {/* Clip labels — float above the clip regions in phase 2 */}
      {phase >= 2 &&
        clipRegions.map((r, ri) => {
          const mid = (r.start + r.end) / 2;
          const leftPct = (mid / 80) * 100;
          return (
            <motion.div
              key={ri}
              className="absolute -top-5 text-[9px] font-bold tracking-wider text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 rounded px-1.5 py-0.5 whitespace-nowrap -translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.12 * ri, type: "spring" as const, damping: 14 }}
              style={{ left: `${leftPct}%` }}
            >
              {r.label}
            </motion.div>
          );
        })}

      {bars.map((bar, i) => {
        const isClipBar = inClip(i);
        // Scanner position drives "scanned so far" state during phase 1
        const scanThreshold = phase === 1 ? (i / 80) : 1;
        const scanned = phase >= 2 || (phase === 1 && scanThreshold < 1);
        return (
          <motion.div
            key={i}
            className="rounded-full"
            initial={{ height: 2, opacity: 0 }}
            animate={{
              height: phase >= 2 && isClipBar ? bar.height * 1.15 : bar.height,
              width: 3,
              opacity: isInView ? 1 : 0,
              backgroundColor:
                phase >= 2 && isClipBar
                  ? "rgb(34 211 238)" // cyan-400 — "found clip"
                  : scanned
                  ? "rgb(124 58 237)" // violet-600 — "analyzed"
                  : "rgb(113 113 122)", // zinc-500 — "unanalyzed"
              boxShadow:
                phase >= 2 && isClipBar
                  ? "0 0 8px rgba(34,211,238,0.5)"
                  : "none",
            }}
            transition={{
              duration: phase === 0 ? 0.3 : 0.4,
              delay: phase === 0 ? i * 0.01 : phase === 1 ? (i / 80) * 1.4 : 0,
            }}
          />
        );
      })}
    </div>
  );
}

/* ────────────────────────────────────────────────
   FAKE APP MOCKUP (cycles through states)
   ──────────────────────────────────────────────── */

function AppMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => setStep((s) => (s + 1) % 4), 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  const steps = ["Drop recording", "Finding clips...", "Applying style...", "Ready to post"];
  const progress = [0, 35, 78, 100];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotateX: 15, scale: 0.9 }}
      animate={isInView ? { opacity: 1, rotateX: 0, scale: 1 } : {}}
      transition={{ duration: 1.2, type: "spring", damping: 20 }}
      style={{ perspective: 1200 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="rounded-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_20px_80px_-20px_rgba(124,58,237,0.25)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-950">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-zinc-500 ml-2">ClipShip</span>
        </div>

        {/* App content - FIXED HEIGHT to prevent resizing */}
        <div className="p-6 h-[300px] sm:h-[340px] flex flex-col items-center justify-center">
          <div className="flex-1 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col items-center text-center"
              >
                {step === 0 && (
                  <div className="border-2 border-dashed border-white/10 rounded-xl px-12 py-10">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <svg className="w-10 h-10 mx-auto text-violet-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                    </motion.div>
                    <p className="text-sm text-zinc-400">Drop your recording here</p>
                    <p className="text-xs text-zinc-600 mt-1">MP4, MOV, MKV up to 2 hours</p>
                  </div>
                )}

                {step === 1 && (
                  <div className="w-full max-w-sm flex flex-col items-center">
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-8 h-8 shrink-0 rounded-full border-2 border-violet-500 border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="text-sm text-zinc-300">Finding your best clips...</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "35%" }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                      />
                    </div>
                    <div className="mt-4 w-full pt-5">
                      <ClipFinderAnimation />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="w-full max-w-sm flex flex-col items-center">
                    <p className="text-sm text-zinc-300 mb-4">Pick your caption style</p>
                    <div className="flex gap-3 justify-center">
                      {[
                        { name: "Karaoke", desc: "Word-by-word" },
                        { name: "Beast", desc: "Bold highlights" },
                        { name: "Clean", desc: "Minimal" },
                      ].map((style, i) => (
                        <motion.div
                          key={style.name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            borderColor: i === 0 ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.05)",
                          }}
                          transition={{ delay: 0.1 + i * 0.15, type: "spring" as const }}
                          className="px-4 py-3 rounded-lg bg-white/[0.03] border text-center cursor-default"
                        >
                          <p className="text-xs font-medium text-white">{style.name}</p>
                          <p className="text-[10px] text-zinc-500 mt-0.5">{style.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mt-4">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                        initial={{ width: "35%" }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
                      className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4"
                    >
                      <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <p className="text-sm text-zinc-300 mb-4">12 clips ready. Post them?</p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      {["Reels", "Shorts", "TikTok"].map((p, i) => (
                        <motion.div
                          key={p}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + i * 0.1, type: "spring" as const }}
                          className="px-4 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300"
                        >
                          {p}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Step indicators */}
          <div className="flex gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === step ? "bg-violet-400" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────
   WAITLIST FORM
   ──────────────────────────────────────────────── */

function WaitlistForm({ id = "hero" }: { id?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderWidget = () => {
      if (turnstileRef.current && window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACxc6UKqbS7BFgbT",
          callback: (token: string) => setTurnstileToken(token),
          "expired-callback": () => setTurnstileToken(""),
          theme: "dark",
          size: "flexible",
        });
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    if (!turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification.");
      return;
    }
    setStatus("loading");
    // Show success immediately, don't wait for n8n to finish processing
    fetch(
      "https://auto.brandjetmedia.com/webhook/wip/clipship-signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          project: "clipship",
          source: `landing-page-${id}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          turnstileToken,
        }),
      }
    ).catch(() => {}); // Fire and forget, n8n processes in background
    setStatus("success");
    setMessage("You're on the list. We'll let you know when ClipShip is ready.");
    setName("");
    setEmail("");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-6 py-4 text-emerald-400"
      >
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-sm">{message}</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="glow-input sm:w-[40%] px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder:text-zinc-500 outline-none transition-all text-sm"
        />
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glow-input flex-1 px-4 py-3 rounded-xl bg-[#18181b] border border-[#27272a] text-white placeholder:text-zinc-500 outline-none transition-all text-sm"
        />
      </div>
      <div ref={turnstileRef} className="flex justify-center" />
      <button
        type="submit"
        disabled={status === "loading" || !turnstileToken}
        className="w-full px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all disabled:opacity-50 cursor-pointer"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && <p className="text-red-400 text-xs mt-1">{message}</p>}
    </form>
  );
}

/* ────────────────────────────────────────────────
   FEATURE CARD
   ──────────────────────────────────────────────── */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={staggerItem}>
      <div className="group rounded-2xl bg-[#18181b]/60 border border-white/5 p-6 hover:border-violet-500/20 transition-all duration-300 h-full hover:shadow-[0_0_40px_-12px_rgba(124,58,237,0.15)]">
        <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4 group-hover:bg-violet-500/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="dot-grid relative">
      {/* Ambient glow */}
      <div className="ambient-glow-violet" />
      <div className="ambient-glow-cyan" />

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#09090b]/90 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LogoIcon className="w-6 h-6" />
            <span className="font-semibold text-white tracking-tight text-sm">ClipShip</span>
          </div>
          <a
            href="#waitlist"
            className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-violet-500/30 transition-all"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative z-10 overflow-hidden">
        {/* Animated orbs in background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "rgba(124, 58, 237, 0.12)" }}
            animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[15%] right-[10%] w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ background: "rgba(6, 182, 212, 0.1)" }}
            animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[40%] right-[30%] w-[350px] h-[350px] rounded-full blur-3xl"
            style={{ background: "rgba(59, 130, 246, 0.08)" }}
            animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center relative">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 mb-10">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-sm text-violet-300">Coming soon. Join the waitlist.</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              Long videos in.
              <br />
              <span className="gradient-text">Viral clips out.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-lg mx-auto mb-12 space-y-3">
              <p className="text-lg text-zinc-400 leading-relaxed">
                Drop a 90-minute recording in. AI finds the 10-15 clips hiding inside it.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Vertical-formatted, captioned, face-tracked, ready for Reels, Shorts, and TikTok.
              </p>
              <p className="text-lg text-zinc-200 font-medium mt-4">
                Runs on your PC. No cloud. One-time price.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex justify-center" id="waitlist">
              <WaitlistForm id="hero" />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-sm text-zinc-500 mt-5">
              Free forever plan available. Your data stays on your machine.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── App Mockup (the hero visual) ── */}
      <section className="pb-24 px-6 -mt-12 relative z-10">
        <AppMockup />
      </section>

      {/* ── Problem ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              The cloud-clip-tool tax.
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">
              OpusClip, HeyGen, and similar solved clip extraction — by charging a subscription, capping your usage, and holding your footage on their servers.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { target: 3, prefix: "", suffix: " days", label: "until free OpusClip clips expire and vanish" },
              { target: 29, prefix: "$", suffix: "/mo", label: "for OpusClip, HeyGen, and similar" },
              { target: 100, prefix: "", suffix: "%", label: "of your footage uploaded to their servers" },
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.1}>
                <div className="rounded-2xl bg-[#18181b]/60 border border-white/5 p-8 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">
                    <AnimatedCounter target={item.target} prefix={item.prefix} suffix={item.suffix} />
                  </div>
                  <p className="text-zinc-400 text-sm">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Three steps. That&apos;s it.
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">
              Long recording to posted clips. No timeline. No editing skills required.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Drop your recording",
                desc: "Long-form talking-head, webinar, podcast, or interview. Up to 2 hours per file.",
              },
              {
                num: "2",
                title: "Pick your style",
                desc: "Karaoke, Beast, Hormozi, Clean, and more caption styles. Optionally prompt the AI for the moments you want.",
              },
              {
                num: "3",
                title: "Post everywhere",
                desc: "Vertical 9:16 clips with captions baked in. Save to disk or post straight to Reels, Shorts, and TikTok.",
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={0.1 + i * 0.15}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-[0_0_30px_-5px_rgba(124,58,237,0.4)]">
                    {step.num}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Everything OpusClip does. On your PC.
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">
              Prompt-based clip search, face tracking, multi-speaker handling, word-level captions. No cloud. No upload limits. No monthly fee.
            </p>
          </FadeIn>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="100% Local Processing"
              desc="Your recordings never leave your PC. Transcription, analysis, and rendering all run on your hardware. Private by default."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
              title="Prompt-Based Clip Search"
              desc="Type what you want — &ldquo;find the funny moments,&rdquo; &ldquo;the parts about startups,&rdquo; &ldquo;when I get fired up&rdquo; — and the AI pulls them out for you."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>}
              title="Face Tracking"
              desc="Vertical 9:16 clips that stay locked on the speaker&rsquo;s face. Never a half-head, never a cropped-out moment."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              title="Multi-Speaker Handling"
              desc="Podcasts, interviews, panels. ClipShip detects each speaker and tracks whoever is talking so no one gets cropped out."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>}
              title="Word-Level Captions"
              desc="Karaoke, Beast, Hormozi, Clean styles. Word-by-word highlights baked in. Fix typos directly, no re-processing."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="99 Languages"
              desc="Transcription and captions in 99 languages out of the box. Most clip generators cap at 20 languages."
            />
          </motion.div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              ClipShip vs OpusClip vs HeyGen.
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-xl mx-auto">
              The two big cloud clip generators, side-by-side with the local alternative.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-[#18181b]/60 border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-4 px-6 text-zinc-500 font-medium" />
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">
                        <Link
                          href="/vs/opus-clip"
                          className="inline-flex items-center gap-1 hover:text-violet-300 transition-colors group"
                        >
                          OpusClip
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                        </Link>
                      </th>
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">
                        <Link
                          href="/vs/heygen"
                          className="inline-flex items-center gap-1 hover:text-violet-300 transition-colors group"
                        >
                          HeyGen Highlights
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                        </Link>
                      </th>
                      <th className="text-center py-4 px-4">
                        <span className="gradient-text font-bold">ClipShip</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    {[
                      ["Pricing", "$29/mo subscription", "$24+/mo subscription", "One-time, lifetime"],
                      ["Processing", "Cloud upload", "Cloud upload", "Your PC (offline)"],
                      ["Privacy", "Your footage on their servers", "Your footage on their servers", "Never leaves your machine"],
                      ["Clip extraction", "Virality score", "Prompt-based", "Prompt-based + score"],
                      ["Face tracking", "Yes", "Yes", "Yes"],
                      ["Multi-speaker", "Partial", "Yes", "Yes"],
                      ["Caption styles", "Preset library", "Preset library", "4 word-level styles"],
                      ["Languages", "20+", "175+ (translate)", "99 (transcribe)"],
                      ["Usage cap", "Minutes/credits per month", "Credits per month", "Unlimited"],
                    ].map(([feature, opus, heygen, clipship], i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0">
                        <td className="py-3 px-6 text-zinc-300">{feature}</td>
                        <td className="py-3 px-4 text-center">{opus}</td>
                        <td className="py-3 px-4 text-center">{heygen}</td>
                        <td className="py-3 px-4 text-center text-white font-medium">{clipship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Dig deeper (internal links for SEO + navigation) ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Dig deeper.
            </h2>
            <p className="text-zinc-400 text-center mb-14 max-w-lg mx-auto">
              Honest comparisons, audience breakdowns, and guides.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={0.05}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4">Compare</h3>
              <ul className="space-y-2.5">
                <li><Link href="/vs/opus-clip" className="text-sm text-zinc-300 hover:text-white transition-colors">ClipShip vs OpusClip →</Link></li>
                <li><Link href="/vs/heygen" className="text-sm text-zinc-300 hover:text-white transition-colors">ClipShip vs HeyGen Highlights →</Link></li>
                <li><Link href="/vs/descript" className="text-sm text-zinc-300 hover:text-white transition-colors">ClipShip vs Descript →</Link></li>
                <li><Link href="/vs/gling" className="text-sm text-zinc-300 hover:text-white transition-colors">ClipShip vs Gling →</Link></li>
                <li><Link href="/vs/capcut" className="text-sm text-zinc-300 hover:text-white transition-colors">ClipShip vs CapCut →</Link></li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">Built for</h3>
              <ul className="space-y-2.5">
                <li><Link href="/for/youtubers" className="text-sm text-zinc-300 hover:text-white transition-colors">YouTubers →</Link></li>
                <li><Link href="/for/course-creators" className="text-sm text-zinc-300 hover:text-white transition-colors">Course creators →</Link></li>
                <li><Link href="/for/coaches" className="text-sm text-zinc-300 hover:text-white transition-colors">Coaches &amp; consultants →</Link></li>
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Read</h3>
              <ul className="space-y-2.5">
                <li><Link href="/blog/best-ai-video-clip-generators-2026" className="text-sm text-zinc-300 hover:text-white transition-colors">Best AI video clip generators 2026 →</Link></li>
                <li><Link href="/blog/how-to-make-clips-from-talking-head-videos" className="text-sm text-zinc-300 hover:text-white transition-colors">How to make clips from talking-head videos →</Link></li>
                <li><Link href="/blog/best-free-video-editing-software-youtubers-2026" className="text-sm text-zinc-300 hover:text-white transition-colors">Best free video editing software 2026 →</Link></li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get early access.
            </h2>
            <p className="text-zinc-400 mb-8">
              Be the first to try ClipShip when it launches. Early users get exclusive access.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex justify-center">
              <WaitlistForm id="bottom" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 pt-16 pb-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Link grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <LogoIcon className="w-6 h-6" />
                <span className="font-semibold text-white text-sm">ClipShip</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                Local AI clip generator. Long videos in, viral clips out. Runs on your PC, one-time price.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <a href="https://x.com/ClipShipApp" target="_blank" rel="noopener noreferrer" aria-label="Follow ClipShip on X" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://instagram.com/ClipShipApp" target="_blank" rel="noopener noreferrer" aria-label="Follow ClipShip on Instagram" className="text-zinc-600 hover:text-zinc-300 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Compare column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Compare</h4>
              <ul className="space-y-2.5">
                <li><Link href="/vs/opus-clip" className="text-sm text-zinc-500 hover:text-white transition-colors">vs OpusClip</Link></li>
                <li><Link href="/vs/heygen" className="text-sm text-zinc-500 hover:text-white transition-colors">vs HeyGen Highlights</Link></li>
                <li><Link href="/vs/descript" className="text-sm text-zinc-500 hover:text-white transition-colors">vs Descript</Link></li>
                <li><Link href="/vs/gling" className="text-sm text-zinc-500 hover:text-white transition-colors">vs Gling</Link></li>
                <li><Link href="/vs/capcut" className="text-sm text-zinc-500 hover:text-white transition-colors">vs CapCut</Link></li>
              </ul>
            </div>

            {/* Built for column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Built for</h4>
              <ul className="space-y-2.5">
                <li><Link href="/for/youtubers" className="text-sm text-zinc-500 hover:text-white transition-colors">YouTubers</Link></li>
                <li><Link href="/for/course-creators" className="text-sm text-zinc-500 hover:text-white transition-colors">Course creators</Link></li>
                <li><Link href="/for/coaches" className="text-sm text-zinc-500 hover:text-white transition-colors">Coaches</Link></li>
              </ul>
            </div>

            {/* Read column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Read</h4>
              <ul className="space-y-2.5">
                <li><Link href="/blog/best-ai-video-clip-generators-2026" className="text-sm text-zinc-500 hover:text-white transition-colors">Best AI clip generators</Link></li>
                <li><Link href="/blog/how-to-make-clips-from-talking-head-videos" className="text-sm text-zinc-500 hover:text-white transition-colors">How to make clips</Link></li>
                <li><Link href="/blog/best-free-video-editing-software-youtubers-2026" className="text-sm text-zinc-500 hover:text-white transition-colors">Best free editors</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <p>&copy; {new Date().getFullYear()} ClipShip. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
