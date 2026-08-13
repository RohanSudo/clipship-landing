"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  Copy,
  MousePointerClick,
  LogOut,
  ShieldCheck,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";

const API_BASE = "https://api.clipship.co";
const SESSION_KEY = "clipship_creator_portal_session";

type Balance = { currency: string; pending: number; available: number; paid: number };
type Commission = {
  product_kind: "pro_monthly" | "pro_lifetime";
  gross_amount_minor: number;
  currency: string;
  commission_amount_minor: number;
  status: "pending" | "review" | "available" | "paid" | "reversed";
  created_at: number;
  available_at: number;
};
type Payout = {
  amount_minor: number;
  currency: string;
  method: string;
  external_reference: string;
  paid_at: number;
};
type Summary = {
  partner: {
    displayName: string;
    code: string;
    slug: string;
    rewardModel: "commission" | "lifetime_license";
    commissionPercent: number;
    link: string;
  };
  funnel: {
    clicks: number;
    signups: number;
    paidConversions: number;
    clickToPaidPercent: number;
    signupToPaidPercent: number;
  };
  balances: Balance[];
  recentCommissions: Commission[];
  payouts: Payout[];
};

const PREVIEW_SUMMARY: Summary = {
  partner: {
    displayName: "Ethan",
    code: "ETHAN25",
    slug: "ethan",
    rewardModel: "commission",
    commissionPercent: 25,
    link: "https://clipship.co/c/ethan",
  },
  funnel: {
    clicks: 184,
    signups: 41,
    paidConversions: 6,
    clickToPaidPercent: 3.26,
    signupToPaidPercent: 14.63,
  },
  balances: [{ currency: "USD", pending: 125, available: 2475, paid: 4950 }],
  recentCommissions: [
    {
      product_kind: "pro_monthly",
      gross_amount_minor: 500,
      currency: "USD",
      commission_amount_minor: 125,
      status: "pending",
      created_at: Date.UTC(2026, 7, 13),
      available_at: Date.UTC(2026, 7, 20),
    },
    {
      product_kind: "pro_lifetime",
      gross_amount_minor: 9900,
      currency: "USD",
      commission_amount_minor: 2475,
      status: "available",
      created_at: Date.UTC(2026, 7, 11),
      available_at: Date.UTC(2026, 7, 18),
    },
  ],
  payouts: [{ amount_minor: 4950, currency: "USD", method: "Wise", external_reference: "Paid", paid_at: Date.UTC(2026, 7, 5) }],
};

function money(amountMinor: number, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amountMinor / 100);
}

function date(value: number) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(value);
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
      <Image src="/icon.svg" width={28} height={28} alt="" aria-hidden />
      <span className="text-lg font-bold text-white">ClipShip</span>
    </Link>
  );
}

export default function PartnerPortal() {
  const [token, setToken] = useState("");
  const [summary, setSummary] = useState<Summary | null>(null);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<"link" | "code" | null>(null);

  useEffect(() => {
    const preview = window.location.hostname === "localhost" && new URLSearchParams(window.location.search).get("preview") === "1";
    if (preview) {
      setSummary(PREVIEW_SUMMARY);
      return;
    }
    const stored = window.sessionStorage.getItem(SESSION_KEY) || "";
    if (stored) setToken(stored);
  }, []);

  useEffect(() => {
    if (!token) return;
    fetch(`${API_BASE}/creator/portal/summary`, { headers: { Authorization: `Bearer ${token}` } })
      .then(async (response) => {
        if (!response.ok) throw new Error(response.status === 401 ? "Your session expired. Sign in again." : "The dashboard could not be loaded.");
        return response.json() as Promise<Summary>;
      })
      .then(setSummary)
      .catch((reason: Error) => {
        window.sessionStorage.removeItem(SESSION_KEY);
        setToken("");
        setError(reason.message);
      });
  }, [token]);

  async function requestCode(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE}/creator/portal/send-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const payload = await response.json() as { error?: string };
      if (!response.ok) throw new Error(payload.error || "The code could not be sent.");
      setStep("code");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "The code could not be sent.");
    } finally {
      setBusy(false);
    }
  }

  async function verifyCode(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE}/creator/portal/verify-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });
      const payload = await response.json() as { token?: string; error?: string };
      if (!response.ok || !payload.token) throw new Error(payload.error || "That code is invalid or expired.");
      window.sessionStorage.setItem(SESSION_KEY, payload.token);
      setToken(payload.token);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "That code is invalid or expired.");
    } finally {
      setBusy(false);
    }
  }

  async function signOut() {
    if (token) {
      await fetch(`${API_BASE}/creator/portal/sign-out`, { method: "POST", headers: { Authorization: `Bearer ${token}` } }).catch(() => undefined);
    }
    window.sessionStorage.removeItem(SESSION_KEY);
    setToken("");
    setSummary(null);
    setStep("email");
    setCode("");
  }

  async function copyValue(target: "link" | "code") {
    if (!summary) return;
    await navigator.clipboard.writeText(target === "link" ? summary.partner.link : summary.partner.code);
    setCopied(target);
    window.setTimeout(() => setCopied(null), 1600);
  }

  if (!summary) {
    return (
      <main className="min-h-screen bg-[#09090b] text-zinc-100">
        <header className="border-b border-white/10 px-6 py-4">
          <div className="mx-auto flex max-w-5xl items-center gap-4">
            <Logo />
            <span className="h-6 w-px bg-white/10" />
            <span className="text-sm text-zinc-400">Creator Partner</span>
          </div>
        </header>
        <section className="mx-auto flex min-h-[calc(100vh-65px)] max-w-5xl items-center px-6 py-16">
          <div className="w-full max-w-md">
            <p className="mb-3 text-sm font-medium text-violet-400">Creator Partner Portal</p>
            <h1 className="text-3xl font-bold text-white">See every attributed result.</h1>
            <p className="mt-4 leading-7 text-zinc-400">
              Sign in with the email enrolled in the programme. No password is required.
            </p>
            <form onSubmit={step === "email" ? requestCode : verifyCode} className="mt-8 space-y-5" aria-busy={busy}>
              <div>
                <label htmlFor="partner-email" className="mb-2 block text-sm font-medium text-zinc-200">Email address</label>
                <input
                  id="partner-email"
                  type="email"
                  required
                  autoComplete="email"
                  disabled={step === "code"}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 w-full rounded-lg border border-white/15 bg-[#111114] px-4 text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 disabled:opacity-60"
                />
              </div>
              {step === "code" && (
                <div>
                  <label htmlFor="partner-code" className="mb-2 block text-sm font-medium text-zinc-200">Six-digit email code</label>
                  <input
                    id="partner-code"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                    pattern="[0-9]{6}"
                    maxLength={6}
                    value={code}
                    onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))}
                    aria-describedby="code-help"
                    className="h-12 w-full rounded-lg border border-white/15 bg-[#111114] px-4 font-mono text-lg tracking-[0.28em] text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
                  />
                  <p id="code-help" className="mt-2 text-xs text-zinc-500">The code expires after 15 minutes.</p>
                </div>
              )}
              {error && <p role="alert" className="text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={busy}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 font-semibold text-white transition hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 disabled:cursor-wait disabled:opacity-60"
              >
                {busy ? "Please wait..." : step === "email" ? "Email me a sign-in code" : "Open my dashboard"}
                {!busy && <ArrowRight className="h-4 w-4" aria-hidden />}
              </button>
              {step === "code" && (
                <button type="button" onClick={() => { setStep("email"); setCode(""); setError(""); }} className="text-sm text-zinc-400 underline-offset-4 hover:text-white hover:underline">
                  Use a different email
                </button>
              )}
            </form>
            <p className="mt-8 text-xs leading-5 text-zinc-500">
              Access is limited to approved ClipShip creator partners. Read the <Link href="/creator-terms" className="text-zinc-300 underline underline-offset-4">programme terms</Link>.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return <Dashboard summary={summary} copied={copied} onCopy={copyValue} onSignOut={signOut} />;
}

function Dashboard({
  summary,
  copied,
  onCopy,
  onSignOut,
}: {
  summary: Summary;
  copied: "link" | "code" | null;
  onCopy: (target: "link" | "code") => void;
  onSignOut: () => void;
}) {
  const primary = summary.balances.find((item) => item.currency === "USD") || summary.balances[0] || { currency: "USD", pending: 0, available: 0, paid: 0 };
  const activity = useMemo(() => {
    const commissions = summary.recentCommissions.map((item) => ({ type: "commission" as const, timestamp: item.created_at, item }));
    const payouts = summary.payouts.map((item) => ({ type: "payout" as const, timestamp: item.paid_at, item }));
    return [...commissions, ...payouts].sort((a, b) => b.timestamp - a.timestamp);
  }, [summary]);

  const metrics = [
    { label: "Verified link clicks", value: summary.funnel.clicks, icon: MousePointerClick, color: "text-violet-400", line: "bg-violet-500" },
    { label: "ClipShip accounts", value: summary.funnel.signups, icon: UserRound, color: "text-violet-300", line: "bg-violet-400" },
    { label: "Paid conversions", value: summary.funnel.paidConversions, icon: CircleDollarSign, color: "text-blue-400", line: "bg-blue-500" },
    { label: "Signup-to-paid", value: `${summary.funnel.signupToPaidPercent}%`, icon: TrendingUp, color: "text-cyan-400", line: "bg-cyan-500" },
  ];

  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between">
          <div className="flex items-center gap-4"><Logo /><span className="h-6 w-px bg-white/10" /><span className="text-sm text-zinc-400">Creator Partner</span></div>
          <button onClick={onSignOut} className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
            <LogOut className="h-4 w-4" aria-hidden /> Sign out
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1360px] px-6 py-12">
        <h1 className="text-3xl font-bold text-white">Welcome back, {summary.partner.displayName}.</h1>
        <p className="mt-2 text-zinc-400">Track your funnel performance and commissions.</p>

        <section className="mt-7 grid items-center gap-6 rounded-lg border border-white/15 bg-[#101014] px-7 py-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-0" aria-label="Partner link and code">
          <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center sm:justify-between xl:pr-7">
            <div className="min-w-0">
              <p className="text-sm text-zinc-400">Your partner link</p>
              <p className="mt-2 break-all text-lg font-semibold text-blue-400">{summary.partner.link}</p>
            </div>
            <button onClick={() => onCopy("link")} className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-blue-500 bg-blue-500/10 px-5 font-semibold text-white transition hover:bg-blue-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
              {copied === "link" ? <Check className="h-5 w-5" aria-hidden /> : <Copy className="h-5 w-5" aria-hidden />}
              {copied === "link" ? "Copied" : "Copy link"}
            </button>
          </div>
          <div className="flex min-w-0 flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between xl:border-l xl:border-t-0 xl:pl-7 xl:pt-0">
            <div className="min-w-0">
              <p className="text-sm text-zinc-400">Your creator code</p>
              <p className="mt-2 text-lg font-bold text-violet-400">{summary.partner.code}</p>
            </div>
            <button onClick={() => onCopy("code")} className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg border border-violet-500 bg-violet-500/10 px-5 font-semibold text-white transition hover:bg-violet-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400">
              {copied === "code" ? <Check className="h-5 w-5" aria-hidden /> : <Copy className="h-5 w-5" aria-hidden />}
              {copied === "code" ? "Copied" : "Copy code"}
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-7 sm:grid-cols-2 xl:grid-cols-4" aria-label="Attribution funnel">
          {metrics.map((metric) => (
            <div key={metric.label} className="relative pb-5">
              <p className="text-sm text-zinc-400">{metric.label}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-5xl font-semibold text-white">{metric.value}</p>
                <metric.icon className={`h-7 w-7 ${metric.color}`} aria-hidden />
              </div>
              <span className={`absolute inset-x-0 bottom-0 h-0.5 ${metric.line}`} />
            </div>
          ))}
        </section>

        <section className="mt-10 overflow-hidden rounded-lg border border-white/15 bg-[#101014]">
          <div className="flex flex-col gap-6 border-b border-white/10 px-7 py-6 lg:flex-row lg:items-center lg:justify-between">
            <div><h2 className="text-xl font-semibold text-white">Commission activity</h2><p className="mt-1 text-sm text-zinc-500">Buyer identities are never shown.</p></div>
            <dl className="grid grid-cols-3 gap-8">
              <div><dt className="text-xs text-zinc-500">Available</dt><dd className="mt-1 text-xl font-semibold text-emerald-400">{money(primary.available, primary.currency)}</dd></div>
              <div><dt className="text-xs text-zinc-500">Pending</dt><dd className="mt-1 text-xl font-semibold text-amber-300">{money(primary.pending, primary.currency)}</dd></div>
              <div><dt className="text-xs text-zinc-500">Paid</dt><dd className="mt-1 text-xl font-semibold text-blue-400">{money(primary.paid, primary.currency)}</dd></div>
            </dl>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[780px] text-left text-sm">
              <thead className="border-b border-white/10 text-zinc-500"><tr><th className="px-7 py-4 font-medium">Date</th><th className="px-5 py-4 font-medium">Type</th><th className="px-5 py-4 font-medium">Plan</th><th className="px-5 py-4 font-medium">Order amount</th><th className="px-5 py-4 font-medium">Commission</th><th className="px-7 py-4 font-medium">Status</th></tr></thead>
              <tbody className="divide-y divide-white/10">
                {activity.length === 0 && <tr><td colSpan={6} className="px-7 py-12 text-center text-zinc-500">No commission activity yet. Clicks and attributed accounts still appear in the funnel above.</td></tr>}
                {activity.map((entry, index) => entry.type === "commission" ? (
                  <tr key={`commission-${entry.timestamp}-${index}`} className="text-zinc-300">
                    <td className="px-7 py-5">{date(entry.item.created_at)}</td>
                    <td className="px-5 py-5">{entry.item.product_kind === "pro_monthly" ? "Monthly commission" : "Lifetime commission"}</td>
                    <td className="px-5 py-5 text-white">{entry.item.product_kind === "pro_monthly" ? "Pro monthly" : "Pro lifetime"}</td>
                    <td className="px-5 py-5">{money(entry.item.gross_amount_minor, entry.item.currency)}</td>
                    <td className="px-5 py-5 font-medium text-white">{money(entry.item.commission_amount_minor, entry.item.currency)}</td>
                    <td className="px-7 py-5"><Status commission={entry.item} /></td>
                  </tr>
                ) : (
                  <tr key={`payout-${entry.timestamp}-${index}`} className="text-zinc-300">
                    <td className="px-7 py-5">{date(entry.item.paid_at)}</td><td className="px-5 py-5">Payout</td><td className="px-5 py-5">-</td><td className="px-5 py-5">-</td><td className="px-5 py-5 font-medium text-white">{money(entry.item.amount_minor, entry.item.currency)}</td><td className="px-7 py-5"><span className="text-blue-400">Paid via {entry.item.method}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 px-7 py-5 text-xs leading-5 text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>Commission becomes available after the seven-day refund window.</p>
            <Link href="/creator-terms#attribution" className="inline-flex items-center gap-2 text-zinc-300 underline-offset-4 hover:text-white hover:underline"><ShieldCheck className="h-4 w-4" aria-hidden />How attribution is verified</Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Status({ commission }: { commission: Commission }) {
  if (commission.status === "pending") return <span className="text-amber-300">Pending until {date(commission.available_at)}</span>;
  if (commission.status === "review") return <span className="text-amber-300">Under review</span>;
  if (commission.status === "available") return <span className="text-emerald-400">Available</span>;
  if (commission.status === "paid") return <span className="text-blue-400">Paid</span>;
  return <span className="text-zinc-500">Reversed</span>;
}
