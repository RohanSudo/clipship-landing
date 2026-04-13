import Link from "next/link";

export default function ContentPage({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      {/* Nav */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 64 64" className="w-7 h-7" fill="none">
              <defs>
                <linearGradient id="nav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <path d="M12 8 L52 32 L12 56 L12 38 L32 32 L12 26 Z" fill="url(#nav-grad)" opacity="0.9" />
            </svg>
            <span className="font-bold text-white">ClipShip</span>
          </Link>
          <Link
            href="/#waitlist"
            className="text-sm font-medium px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{title}</h1>
        {description && (
          <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-2xl">{description}</p>
        )}
        <article className="prose prose-invert prose-zinc max-w-none
          prose-headings:text-white prose-headings:font-semibold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-violet-400 prose-a:no-underline hover:prose-a:text-violet-300
          prose-strong:text-white
          prose-li:text-zinc-300
          prose-table:border-zinc-800
          prose-th:text-zinc-300 prose-th:border-zinc-800 prose-th:px-4 prose-th:py-3
          prose-td:text-zinc-400 prose-td:border-zinc-800 prose-td:px-4 prose-td:py-3
        ">
          {children}
        </article>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-xl border border-violet-500/20 bg-violet-500/5 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Try ClipShip for free</h2>
          <p className="text-zinc-400 mb-6">Record once. Get an edited video + clips for every platform. Runs on your PC.</p>
          <Link
            href="/#waitlist"
            className="inline-block text-sm font-medium px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors"
          >
            Join the early access waitlist
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-zinc-600">
          <span>ClipShip 2026</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-400">Privacy</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
