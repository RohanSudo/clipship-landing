import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "../../components/ContentPage";
import PlatformDownloadButtons from "../../components/PlatformDownloadButtons";

type ReferralLandingProps = {
  params: Promise<{ code: string }>;
};

function validCode(value: string): string | null {
  const normalized = value.trim().toUpperCase();
  return /^CSP[A-Z0-9]{7}$/.test(normalized) ? normalized : null;
}

export const metadata: Metadata = {
  title: "You Have 20% Off ClipShip Lifetime Pro",
  description: "Download ClipShip and get 20% off your first Lifetime Pro purchase through this referral.",
  robots: { index: false, follow: false },
};

export default async function ReferralLanding({ params }: ReferralLandingProps) {
  const referralCode = validCode((await params).code);
  if (!referralCode) notFound();

  return (
    <ContentPage
      title="You have 20% off ClipShip Lifetime Pro."
      description="Download ClipShip through this page, create your account, and the lifetime discount will be ready when you upgrade in the app."
      badge="Referred by a ClipShip user"
      cta={{
        title: "Questions before you download?",
        description: "See the complete referral rules, including eligibility, the refund window, and how the referrer is rewarded.",
        label: "Read the referral rules",
        href: "/referral",
      }}
    >
      <h2>Choose your computer</h2>
      <p>
        ClipShip runs on Windows 10 or 11 and Apple Silicon Macs running macOS 15 or newer.
        Your source footage stays on your computer in Local AI mode.
      </p>
      <div className="not-prose my-10">
        <PlatformDownloadButtons source="referral-landing" variant="hero" referralCode={referralCode} />
      </div>
      <h2>How the discount is applied</h2>
      <p>
        Finish account setup in ClipShip, then choose Lifetime Pro from the upgrade screen. The app
        validates this referral and sends you to a checkout with 20% already applied. The offer is
        for a first lifetime purchase and cannot be combined with another discount.
      </p>
      <p><strong>Referral code:</strong> {referralCode}</p>
    </ContentPage>
  );
}
