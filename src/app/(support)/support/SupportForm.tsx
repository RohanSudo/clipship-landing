"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { interpretSupportResponse } from "@/lib/support-response";

type Turnstile = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }
type Payload = { schemaVersion: 1; product: "clipship"; email: string; subject: string; details: string; appVersion: string; platform: string; consent: true };
type Attempt = { key: string; payload: Payload; uncertain: boolean };
const pendingKey = "clipship_pending_support_v1";
type PendingMarker = { key: string; reference?: string };
const inputClass = "mt-2 w-full rounded-lg border border-zinc-600 bg-zinc-950 px-3 py-2.5 text-base text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:text-zinc-400";

export default function SupportForm({ endpoint, siteKey }: { endpoint: string; siteKey: string }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | undefined>(undefined);
  const attempt = useRef<Attempt | null>(null);
  const inFlight = useRef(false);
  const statusBox = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [locked, setLocked] = useState(false);
  const [created, setCreated] = useState(false);
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");
  const [storageReady, setStorageReady] = useState(false);
  const [recovery, setRecovery] = useState<PendingMarker | null>(null);

  useEffect(() => {
    const restore = () => {
      try {
        const raw = localStorage.getItem(pendingKey);
        if (raw && !attempt.current) {
          const saved = JSON.parse(raw) as PendingMarker;
          if (typeof saved.key !== "string" || !/^\d{13}\.[0-9a-f-]{36}$/.test(saved.key)) throw new Error("Invalid marker");
          setRecovery({ key: saved.key, reference: typeof saved.reference === "string" && /^SC-[0-9a-f-]{36}$/.test(saved.reference) ? saved.reference : undefined });
        }
        setStorageReady(true);
      } catch { setMessage("This browser cannot safely keep a pending-request marker. Please email hello@clipship.co instead."); }
    };
    queueMicrotask(restore);
    window.addEventListener("storage", restore);
    return () => window.removeEventListener("storage", restore);
  }, []);

  function savePending(marker: PendingMarker) {
    localStorage.setItem(pendingKey, JSON.stringify(marker));
  }

  useEffect(() => {
    if (!scriptReady || !container.current || !window.turnstile) return;
    widget.current = window.turnstile.render(container.current, {
      sitekey: siteKey, action: "support_intake", cData: "clipship", theme: "dark", size: "flexible",
      callback: (nextToken: string) => setToken(nextToken),
      "expired-callback": () => setToken(""),
      "error-callback": () => { setToken(""); setMessage("The security check is unavailable. Please try it again or email hello@clipship.co."); },
    });
    return () => { if (widget.current !== undefined) window.turnstile?.remove(widget.current); widget.current = undefined; };
  }, [scriptReady, siteKey]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current || created || !token || !storageReady || recovery) return;
    if (!attempt.current) {
      const data = new FormData(event.currentTarget);
      const field = (name: string) => String(data.get(name) ?? "").trim().normalize("NFC");
      attempt.current = { key: `${Date.now()}.${crypto.randomUUID()}`, uncertain: false, payload: {
        schemaVersion: 1, product: "clipship", email: field("email"), subject: field("subject"), details: field("details"),
        appVersion: field("appVersion"), platform: field("platform"), consent: true,
      } };
    }
    const current = attempt.current;
    try {
      const other = localStorage.getItem(pendingKey);
      if (other && JSON.parse(other).key !== current.key) {
        setRecovery(JSON.parse(other));
        return;
      }
      savePending({ key: current.key, ...(reference ? { reference } : {}) });
    } catch {
      attempt.current = null;
      setStorageReady(false);
      setMessage("This browser cannot safely keep a pending-request marker. Please email hello@clipship.co instead.");
      return;
    }
    inFlight.current = true;
    setBusy(true); setLocked(true); setMessage("Sending your request. Please keep this page open.");
    try {
      const result = await fetch(endpoint, {
        method: "POST", credentials: "omit", cache: "no-store", referrerPolicy: "no-referrer", redirect: "error",
        headers: { "Content-Type": "application/json", "Idempotency-Key": current.key },
        body: JSON.stringify({ ...current.payload, turnstileToken: token }),
        signal: AbortSignal.timeout(25000),
      });
      const outcome = interpretSupportResponse(result.status, await result.json());
      if (outcome.kind === "created") {
        localStorage.removeItem(pendingKey);
        setCreated(true); setReference(outcome.reference);
        setMessage("Your support request was created. An email confirmation has not been verified. Keep the reference below for follow-up.");
      } else if (outcome.kind === "unconfirmed") {
        savePending({ key: current.key, reference: outcome.reference });
        current.uncertain = true; setReference(outcome.reference);
        setMessage("We received a submission attempt, but could not confirm that a ticket was created. Keep this reference. Check the same submission again or email support; do not start a duplicate request.");
      } else {
        if (outcome.kind === "uncertain") current.uncertain = true;
        if (!current.uncertain) { localStorage.removeItem(pendingKey); attempt.current = null; setLocked(false); }
        setMessage(outcome.message);
      }
    } catch {
      current.uncertain = true;
      setMessage("The connection ended before we could confirm the result. Keep this page open and check the same submission again, or email support. Do not start a duplicate request.");
    } finally {
      inFlight.current = false; setBusy(false); setToken("");
      if (widget.current !== undefined) window.turnstile?.reset(widget.current);
      statusBox.current?.focus();
    }
  }

  return (
    <form onSubmit={submit} aria-label="ClipShip support request" className="mt-6 space-y-5">
      <fieldset disabled={locked || busy || !storageReady || !!recovery} className="space-y-5">
        <legend className="sr-only">Your support request</legend>
        <label className="block text-sm font-medium">Your email<input name="email" type="email" autoComplete="email" required minLength={3} maxLength={254} className={inputClass} /></label>
        <label className="block text-sm font-medium">Subject<input name="subject" required minLength={3} maxLength={160} className={inputClass} /></label>
        <label className="block text-sm font-medium">What happened?<textarea name="details" required minLength={20} maxLength={6000} rows={6} aria-describedby="support-details-help" className={inputClass} /></label>
        <p id="support-details-help" className="text-sm leading-relaxed text-zinc-400">20–6,000 characters. Describe the problem in your own words. Do not paste raw logs, transcripts, private file paths, passwords, keys, or payment details.</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium">App version (optional)<input name="appVersion" maxLength={80} className={inputClass} /></label>
          <label className="block text-sm font-medium">Platform (optional)<select name="platform" className={inputClass}><option value="">Choose a platform</option><option>Windows</option><option>macOS</option></select></label>
        </div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"><input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-violet-500" />I have reviewed this message and agree to share it with ClipShip support to investigate and reply.</label>
      </fieldset>
      <p className="text-sm leading-relaxed text-zinc-400">Your message is handled using Atlassian Jira Service Management. Cloudflare Turnstile checks for spam. This does not sign you up for a newsletter. <a href="/privacy" className="text-violet-300 underline underline-offset-4">Privacy details</a></p>
      {!created && <div ref={container} />}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setScriptReady(true)} onError={() => setMessage("The security check could not load. You can still email hello@clipship.co.")} />
      <div ref={statusBox} role="status" aria-live="polite" tabIndex={-1} className="space-y-2 rounded-sm text-sm leading-relaxed focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
        {message && <p>{message}</p>}
        {reference && <p className="break-all">Reference: <strong>{reference}</strong></p>}
        {locked && !created && !reference && attempt.current && <p className="break-all">Submission ID: <strong>{attempt.current.key}</strong></p>}
        {recovery && <><p>An earlier submission is still unconfirmed. To avoid creating another ticket, new submissions are paused in this browser. Email hello@clipship.co with the reference below so support can check it.</p><p className="break-all">{recovery.reference ? "Reference" : "Submission ID"}: <strong>{recovery.reference ?? recovery.key}</strong></p></>}
      </div>
      {!created && <button type="submit" disabled={busy || !token || !storageReady || !!recovery} className="min-h-11 rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300 disabled:cursor-not-allowed disabled:opacity-50">{busy ? "Sending…" : locked ? "Check the same submission" : "Send support request"}</button>}
      <p className="text-sm leading-relaxed text-zinc-400">Your draft email and message are not saved to browser storage. We save only an opaque pending-request identifier to prevent accidental duplicates after a refresh. Keep this page open if the result is unconfirmed. You can always use the email option below.</p>
    </form>
  );
}
