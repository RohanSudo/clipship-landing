import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Creator Partner Programme Terms - ClipShip",
  description: "How ClipShip creator links, attribution, commissions, reversals, and payouts work.",
  robots: { index: false, follow: false },
};

export default function CreatorTermsPage() {
  return (
    <ContentPage title="Creator Partner Programme" description="Transparent attribution and payout rules for approved ClipShip creators." badge="Partner terms" cta={{ title: "Already a creator partner?", description: "Open your private dashboard to see verified clicks, attributed accounts, paid conversions, commission, and payouts.", label: "Open partner portal", href: "/partners" }}>
      <h2 id="attribution">How attribution works</h2>
      <ol>
        <li><strong>A visitor opens your unique link.</strong> ClipShip records a verified click ID and your creator code. Automated crawlers are excluded from the verified-click total.</li>
        <li><strong>The download request records that attribution.</strong> The creator code and click ID are logged by ClipShip when the visitor requests the Windows or macOS download. The installer itself is identical for every customer and contains no buyer-specific data.</li>
        <li><strong>The first eligible ClipShip account is locked to you.</strong> ClipShip can match a recent download to account creation when it comes from the same public network and points unambiguously to one creator. Shared networks, VPN changes, privacy tools, and delayed signup can prevent an automatic match, so ClipShip refuses to guess. The creator-code fallback will be available before the first creator offer is activated. A buyer can be attributed to only one creator.</li>
        <li><strong>Checkout metadata is added by ClipShip&apos;s server.</strong> The desktop app cannot invent or alter the commission record.</li>
        <li><strong>A commission appears only after a verified payment.</strong> ClipShip creates commission only when Dodo Payments sends a valid signed payment webhook for an attributed ClipShip purchase.</li>
      </ol>
      <p>
        Code-only signups and purchases can convert without a recorded link click, so paid conversions may occasionally be higher than the number implied by link clicks alone. The dashboard reports clicks, accounts, and payments separately instead of hiding that distinction.
      </p>

      <h2>What creators can see</h2>
      <p>
        The private portal shows verified link clicks, attributed ClipShip accounts, paid conversions, conversion rates, order values, commission amounts, status, availability dates, and payout records. It never shows buyer names, email addresses, account IDs, device details, or payment information.
      </p>

      <h2>Creator reward choice</h2>
      <p>
        Before publishing ClipShip content, each creator chooses one reward model: a ClipShip Lifetime Pro license or sales commission. The two rewards are not combined. Commission partners receive 25% of completed attributed ClipShip Pro payments unless a separate written agreement says otherwise.
      </p>

      <h2>Pending, available, and paid commission</h2>
      <p>
        A verified payment begins as pending. It becomes available after ClipShip&apos;s seven-day refund window. Refunds, chargebacks, disputes, duplicate payments, self-referrals, shared-device abuse, and fraudulent activity do not qualify and may reverse or place commission under review.
      </p>
      <p>
        During the pilot programme, available commission is paid manually through Wise or PayPal using the payout details agreed with the creator. Every completed payout is added to the portal ledger with its amount, method, date, and reference. There is no minimum payout threshold during the pilot.
      </p>

      <h2>Creator disclosure</h2>
      <p>
        Creators must disclose the affiliate relationship clearly wherever required by the platform or applicable advertising rules. Reviews and demonstrations must reflect the creator&apos;s real experience with ClipShip. ClipShip does not require a positive review.
      </p>

      <h2>Changes and closure</h2>
      <p>
        Either side may end the partnership. Already available commission remains payable, while pending commission remains subject to refunds, disputes, fraud checks, and the agreed hold. Material programme changes will be communicated before they apply to future referrals.
      </p>

      <h2>Questions</h2>
      <p>Email <a href="mailto:hello@clipship.co">hello@clipship.co</a>.</p>
    </ContentPage>
  );
}
