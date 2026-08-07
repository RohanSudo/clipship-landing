import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "ClipShip Referral Program: Give 20%, Get 20%",
  description: "Refer a creator to ClipShip Lifetime Pro. They get 20% off, while you earn a lifetime discount and then bank extra device slots.",
  alternates: { canonical: "https://clipship.co/referral" },
};

export default function ReferralPage() {
  return (
    <ContentPage
      title="Give 20%. Get 20%."
      description="Help another creator own their clipping software, and ClipShip rewards both of you."
      badge="Referral program"
      cta={{
        title: "Your referral link is inside ClipShip",
        description: "Open Settings, find Referral program, and copy your personal link. The app also shows your successful referrals and available rewards.",
        label: "Download ClipShip",
        href: "/#downloads",
      }}
    >
      <h2>How it works</h2>
      <ol>
        <li>Open ClipShip Settings and copy your personal referral link.</li>
        <li>Your friend downloads ClipShip through that link and creates their account.</li>
        <li>When they choose Lifetime Pro, ClipShip validates the referral and applies 20% off the $99 price automatically.</li>
        <li>Their signed payment starts a seven-day reward hold, matching ClipShip&apos;s refund window.</li>
        <li>After that hold, your reward appears automatically. You do not need to enter a Dodo coupon.</li>
      </ol>

      <h2>What you earn</h2>
      <table>
        <thead>
          <tr><th>Your situation</th><th>Your reward</th></tr>
        </thead>
        <tbody>
          <tr><td>First reward while on Free, Trial, or Monthly</td><td>20% off your Lifetime Pro purchase</td></tr>
          <tr><td>Later rewards before you own Lifetime</td><td>Banked device slots that activate after you buy Lifetime</td></tr>
          <tr><td>Rewards after you own Lifetime Pro</td><td>One permanent extra device slot per successful referral, normally $25 each</td></tr>
        </tbody>
      </table>

      <h2>How to claim your reward</h2>
      <p>
        Open ClipShip Settings to see your successful referrals and available rewards. Your first
        earned Lifetime discount is applied automatically when you choose Lifetime Pro. You do not
        need to copy or enter a separate Dodo coupon code.
      </p>
      <p>
        If you earn more rewards before buying Lifetime, ClipShip banks them as device slots. Once
        your Lifetime purchase is confirmed, those slots activate automatically. If you already own
        Lifetime, each cleared reward is added directly to your device allowance.
      </p>

      <h2>What your friend gets</h2>
      <p>
        Your friend receives 20% off their first Lifetime Pro purchase. The referral does not discount
        the $5 monthly plan or extra device slots, and it cannot be combined with another ClipShip discount.
      </p>

      <h2>Fair-use rules</h2>
      <ul>
        <li>Up to three successful referral rewards per account: one Lifetime discount at most, with later rewards issued as device slots.</li>
        <li>No self-referrals or referrals between accounts on the same device.</li>
        <li>The referred account must be a new Lifetime Pro buyer.</li>
        <li>Rewards clear after the seven-day refund window.</li>
        <li>Refunded, disputed, or charged-back purchases do not earn rewards.</li>
      </ul>
    </ContentPage>
  );
}
