import type { Metadata } from "next";
import Link from "next/link";
import { geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://clipship.co"),
  title: "Page not found | ClipShip",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return <html lang="en" className={geistSans.variable}><body className="min-h-screen bg-[#09090b] p-8 text-zinc-100"><main className="mx-auto max-w-xl py-20"><h1 className="text-3xl font-bold">Page not found</h1><p className="mt-4 text-zinc-300">This page does not exist. You can return to ClipShip or get help.</p><div className="mt-6 flex gap-6 text-violet-300 underline underline-offset-4"><Link href="/">Homepage</Link><Link href="/support">Support</Link></div></main></body></html>;
}
