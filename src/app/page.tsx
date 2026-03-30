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
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, { duration: 2, ease: "easeOut" });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [isInView, count, target, rounded]);

  return <span ref={ref}>{display}</span>;
}

/* ────────────────────────────────────────────────
   WAVEFORM ANIMATION (shows silence removal)
   ──────────────────────────────────────────────── */

function WaveformAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [phase, setPhase] = useState(0); // 0=raw, 1=detected, 2=cut

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  const bars = Array.from({ length: 80 }, (_, i) => {
    const isSilent = (i >= 15 && i <= 22) || (i >= 45 && i <= 55) || (i >= 68 && i <= 73);
    const height = isSilent ? 3 + Math.random() * 3 : 8 + Math.random() * 28;
    return { height, isSilent };
  });

  return (
    <div ref={ref} className="flex items-center justify-center gap-[2px] h-16 overflow-hidden">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          initial={{ height: 2, opacity: 0 }}
          animate={{
            height: phase >= 2 && bar.isSilent ? 0 : bar.height,
            width: phase >= 2 && bar.isSilent ? 0 : 3,
            opacity: isInView ? (phase >= 2 && bar.isSilent ? 0 : 1) : 0,
            marginRight: phase >= 2 && bar.isSilent ? 0 : 1,
            backgroundColor:
              phase >= 1 && bar.isSilent
                ? "rgb(239 68 68)"
                : "rgb(124 58 237)",
          }}
          transition={{
            duration: phase === 0 ? 0.3 : 0.5,
            delay: phase === 0 ? i * 0.01 : phase >= 2 && bar.isSilent ? i * 0.005 : 0,
          }}
        />
      ))}
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

  const steps = ["Drop footage", "Removing silence...", "Applying style...", "Ready to ship"];
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
                    <p className="text-sm text-zinc-400">Drop your footage here</p>
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
                      <span className="text-sm text-zinc-300">Removing silence...</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "35%" }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <WaveformAnimation />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="w-full max-w-sm flex flex-col items-center">
                    <p className="text-sm text-zinc-300 mb-4">Choose your editing style</p>
                    <div className="flex gap-3 justify-center">
                      {[
                        { name: "Confident", desc: "Tight cuts, bold" },
                        { name: "Clean", desc: "Professional" },
                        { name: "High Energy", desc: "Fast-paced" },
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
                    <p className="text-sm text-zinc-300 mb-4">Edit complete. Ship it?</p>
                    <div className="flex gap-3 justify-center flex-wrap">
                      {["YouTube", "TikTok", "Instagram"].map((p, i) => (
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
    try {
      const res = await fetch(
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
      );
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll let you know when ClipShip is ready.");
        setName("");
        setEmail("");
      } else {
        throw new Error("Failed");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
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
              Stop editing.
              <br />
              <span className="gradient-text">Start shipping.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-lg mx-auto mb-12 space-y-3">
              <p className="text-lg text-zinc-400 leading-relaxed">
                Drop your raw talking-head footage in.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Pick a style. Get platform-ready videos out.
              </p>
              <p className="text-lg text-zinc-200 font-medium mt-4">
                No timeline. No cloud. No subscription.
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
              Editing is the bottleneck.
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">
              You record great content. Then spend more time editing than creating.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { target: 6, prefix: "", suffix: "+ hrs", label: "spent editing each video" },
              { target: 200, prefix: "$", suffix: "", label: "per video if you hire an editor" },
              { target: 50, prefix: "$", suffix: "/mo", label: "for cloud AI tools with generic output" },
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
              Raw footage to published video. No editing skills required.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Drop your footage",
                desc: "Drag and drop your raw camera files. Single camera or multi-camera setups both work.",
              },
              {
                num: "2",
                title: "Pick a style",
                desc: "Confident, Clean, High Energy, and more. AI handles cuts, zooms, captions, and audio.",
              },
              {
                num: "3",
                title: "Ship everywhere",
                desc: "One click to reformat and upload to YouTube, TikTok, Instagram, and LinkedIn.",
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
              Everything happens on your machine.
            </h2>
            <p className="text-zinc-400 text-center mb-16 max-w-lg mx-auto">
              No cloud. No upload limits. No monthly fee eating your margins.
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
              desc="Your videos never leave your computer. AI runs on your hardware. Private by default."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>}
              title="Style Templates"
              desc="Confident tight cuts. Clean professional look. High energy with captions. Multiple styles included, more coming."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>}
              title="One-Click Upload"
              desc="Auto-reformat for each platform. Upload to YouTube, TikTok, Instagram in one click. Your account, your quota."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>}
              title="Smart Captions"
              desc="Auto-generated captions with word-level timing and keyword highlights. Fix typos directly, no re-processing."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" /></svg>}
              title="Multi-Camera Sync"
              desc="Drop two camera files, ClipShip syncs them automatically using audio matching. Cuts between angles like a pro editor."
            />
            <FeatureCard
              icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" /></svg>}
              title="99 Languages"
              desc="Transcription and captions in 99 languages out of the box. Most competitors are English-only."
            />
          </motion.div>
        </div>
      </section>

      {/* ── Comparison ── */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              How ClipShip compares.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl bg-[#18181b]/60 border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left py-4 px-6 text-zinc-500 font-medium" />
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">Gling</th>
                      <th className="text-center py-4 px-4 text-zinc-500 font-medium">Descript</th>
                      <th className="text-center py-4 px-4">
                        <span className="gradient-text font-bold">ClipShip</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-400">
                    {[
                      ["Price", "$18-50/mo", "$24-50/mo", "Free / one-time"],
                      ["Processing", "Cloud only", "Cloud only", "Your PC (offline)"],
                      ["Privacy", "Videos uploaded to cloud", "Videos uploaded to cloud", "Never leaves your machine"],
                      ["Editing styles", "One algorithm", "Basic templates", "Multiple named styles"],
                      ["Upload to platforms", "No", "No", "YouTube, TikTok, IG, LinkedIn"],
                      ["Multi-camera", "No", "No", "Auto-sync + smart cuts"],
                      ["Languages", "English only", "24 languages", "99 languages"],
                    ].map(([feature, gling, descript, clipship], i) => (
                      <tr key={i} className="border-b border-white/5 last:border-0">
                        <td className="py-3 px-6 text-zinc-300">{feature}</td>
                        <td className="py-3 px-4 text-center">{gling}</td>
                        <td className="py-3 px-4 text-center">{descript}</td>
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

      {/* ── Bottom CTA ── */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get early access.
            </h2>
            <p className="text-zinc-400 mb-8">
              Be the first to try ClipShip when it launches. Early users get special pricing.
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
      <footer className="border-t border-white/5 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-5 h-5" />
            <span className="text-sm text-zinc-500">ClipShip</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/ClipShipApp" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com/ClipShipApp" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} ClipShip. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
