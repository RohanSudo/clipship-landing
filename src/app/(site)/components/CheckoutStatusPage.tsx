import Link from "next/link";

type CheckoutStatusPageProps = {
  variant: "success" | "cancelled";
};

function LogoIcon() {
  return (
    <svg viewBox="0 0 64 64" className="size-8" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="checkout-logo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#checkout-logo)" opacity="0.9" />
    </svg>
  );
}

function StatusIcon({ variant }: CheckoutStatusPageProps) {
  if (variant === "success") {
    return (
      <div className="flex size-14 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
        <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex size-14 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800/70 text-zinc-300">
      <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="m7 7 10 10M17 7 7 17" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function CheckoutStatusPage({ variant }: CheckoutStatusPageProps) {
  const isSuccess = variant === "success";

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-[#09090b] text-zinc-100">
      <div className="dot-grid pointer-events-none fixed inset-0 z-0" />

      <header className="relative z-10 border-b border-white/5 bg-[#09090b]/90">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
            <LogoIcon />
            <span className="text-lg font-bold text-white transition-colors group-hover:text-violet-300">ClipShip</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400">
            Back to website
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 items-center px-6 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <StatusIcon variant={variant} />

          <h1 className="mt-7 max-w-2xl text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {isSuccess ? "Payment received" : "Checkout cancelled"}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-zinc-300">
            {isSuccess
              ? "Your checkout is complete. ClipShip is waiting for the secure payment confirmation that updates your account."
              : "No purchase was completed, and your current ClipShip plan has not changed."}
          </p>

          {isSuccess ? (
            <section className="mt-10 border-y border-white/10 py-7" aria-labelledby="next-step-heading">
              <h2 id="next-step-heading" className="text-lg font-semibold text-white">Return to the ClipShip desktop app</h2>
              <p className="mt-3 max-w-2xl text-pretty leading-7 text-zinc-400">
                ClipShip refreshes your plan automatically after checkout for up to two minutes. Pro will unlock, or your extra device slot will appear, as soon as the signed confirmation from Dodo Payments reaches ClipShip.
              </p>
              <p className="mt-3 max-w-2xl text-pretty leading-7 text-zinc-400">
                If the plan has not updated after two minutes, open <strong className="font-semibold text-zinc-200">Settings &gt; Account</strong> and use <strong className="font-semibold text-zinc-200">Recheck</strong> beside your plan. Your receipt will arrive by email.
              </p>
            </section>
          ) : (
            <section className="mt-10 border-y border-white/10 py-7" aria-labelledby="cancel-detail-heading">
              <h2 id="cancel-detail-heading" className="text-lg font-semibold text-white">Nothing was changed</h2>
              <p className="mt-3 max-w-2xl text-pretty leading-7 text-zinc-400">
                You can return to ClipShip and continue with your current plan, or review the monthly and lifetime Pro options whenever you are ready.
              </p>
            </section>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
            >
              Back to ClipShip
            </Link>
            {!isSuccess && (
              <Link
                href="/#pricing"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-400"
              >
                View Pro plans
              </Link>
            )}
          </div>

          <p className="mt-8 text-sm leading-6 text-zinc-500">
            Need help? Email <a href="mailto:hello@clipship.co" className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-white">hello@clipship.co</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
