/* eslint-disable @next/next/no-html-link-for-pages -- Intentional full-document navigation at the privacy boundary. */
import type { Metadata } from "next";
import Image from "next/image";
import { supportIntakeConfig } from "@/lib/support-intake-config";
import SupportForm from "./SupportForm";

const description = "Get help with ClipShip. Report a problem, ask about your license, or suggest a feature. Review any diagnostics before sharing them.";

export const metadata: Metadata = {
  title: "Get help with ClipShip",
  description,
  alternates: { canonical: "https://clipship.co/support" },
  openGraph: { title: "Get help with ClipShip", description, url: "https://clipship.co/support", type: "website", images: ["https://clipship.co/opengraph-image"] },
  twitter: { card: "summary_large_image", title: "Get help with ClipShip", description, images: ["https://clipship.co/twitter-image"] },
};

export default function SupportPage() {
  const intake = supportIntakeConfig();
  return (
    <>
      <a href="#support-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-3 focus:text-zinc-950">Skip to support</a>
      <nav aria-label="Main" className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-5">
          <a href="/" className="flex items-center gap-2.5 rounded-sm text-lg font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
            <Image src="/icon.svg" alt="" width={28} height={28} />ClipShip
          </a>
          <a href="/how-clipship-works" className="rounded-sm text-sm text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">Product guide</a>
        </div>
      </nav>
      <main id="support-content" className="mx-auto max-w-5xl px-6 pb-20 pt-14 sm:pt-20">
        <header className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold text-violet-300">ClipShip support</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Get help with ClipShip.</h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">Something not working? Tell us what happened, ask about your license, or share a feature request.</p>
        </header>
        <div className="mt-12 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <section aria-labelledby="contact-title">
            <h2 id="contact-title" className="text-2xl font-bold text-white">Contact support</h2>
            {intake && <SupportForm {...intake} />}
            <p className="mt-4 leading-relaxed text-zinc-300">Email <a href="mailto:hello@clipship.co" className="font-medium text-violet-300 underline underline-offset-4 hover:text-violet-200">hello@clipship.co</a> with your question. For account or purchase help, use the email address associated with ClipShip.</p>
            <a href="mailto:hello@clipship.co?subject=ClipShip%20support" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">Open an email draft</a>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">This opens your mail app. Nothing is sent until you review it and press Send. No mail app? Copy the address into your usual email service.</p>
          </section>
          <section aria-labelledby="include-title">
            <h2 id="include-title" className="text-xl font-bold text-white">What helps us investigate</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-zinc-300 marker:text-violet-400">
              <li>What you were trying to do and what happened instead.</li>
              <li>The exact error message, if one appeared.</li>
              <li>Your ClipShip version and whether you use Windows or Mac.</li>
              <li>Steps that make the problem happen again, if you know them.</li>
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">For a payment issue, include the order reference if available. Never send your password, API keys, full card number, or license key.</p>
          </section>
        </div>
        <section aria-labelledby="diagnostics-title" className="mt-12 border-t border-white/10 pt-8">
          <h2 id="diagnostics-title" className="text-xl font-bold text-white">Diagnostics are optional</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-zinc-300">If the app opens, use Help &amp; Support to review and copy its diagnostic report. It filters known sensitive details, but please read it and remove anything private before including it in your message. You can still ask for help without a report.</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-zinc-300">This page does not read your app, clipboard, logs, files, videos, or transcripts. Website analytics and session recording do not run here. Do not send source footage or unedited logs.</p>
          <a href="/privacy" className="mt-4 inline-block rounded-sm text-sm text-violet-300 underline underline-offset-4 hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300">How support information is handled</a>
        </section>
      </main>
      <footer className="border-t border-white/10 px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 text-sm text-zinc-400">
          <span>&copy; ClipShip 2026</span>
          <nav aria-label="Footer" className="flex flex-wrap gap-5">
            <a href="/changelog" className="hover:text-white">Changelog</a>
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
