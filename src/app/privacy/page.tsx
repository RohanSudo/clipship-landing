import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy - ClipShip",
  description: "ClipShip privacy policy. Your videos stay on your computer. We do not collect or transmit your content.",
};

export default function Privacy() {
  return (
    <ContentPage title="Privacy Policy" description="Last updated: April 2026" badge="Legal">
      <h2>The short version</h2>
      <p>
        ClipShip processes your videos entirely on your computer. Your footage, audio, and transcripts
        never leave your machine. We do not upload, store, or access your content.
      </p>

      <h2>What ClipShip collects</h2>
      <p><strong>When using the desktop app (ClipShip Local):</strong></p>
      <ul>
        <li>No video or audio content is transmitted anywhere</li>
        <li>No transcripts are sent to our servers</li>
        <li>If you opt in to anonymous analytics, we collect: app version, OS, basic usage counts (videos processed). No content, no identifying information.</li>
        <li>If you use the "Connect your AI account" option, your API key is stored in your operating system's secure keychain (Windows Credential Manager / macOS Keychain / Linux Secret Service). The key is sent directly from your computer to the AI provider (OpenAI, Claude, Gemini, Groq, or OpenRouter). We never see, collect, or transmit your key.</li>
        <li>For purchase verification and license activation, we collect your email address, a non-reversible hardware fingerprint (used to enforce one license per device), and the device hostname (so you can identify which machine to sign out when switching devices).</li>
      </ul>

      <p><strong>When using clipship.co (this website):</strong></p>
      <ul>
        <li>If you join the waitlist, we collect your name and email address</li>
        <li>We use Microsoft Clarity for anonymous website analytics (page views, scroll depth). No personal data is shared.</li>
        <li>We use Cloudflare Turnstile for spam protection on forms</li>
      </ul>

      <h2>Connected social media accounts (YouTube, Instagram, TikTok)</h2>
      <p>
        ClipShip lets you publish your edited clips directly to YouTube Shorts, Instagram Reels, and TikTok.
        To enable this, you connect each platform via that platform's own OAuth flow. Here is exactly what
        we do with the data:
      </p>

      <h3>What we access</h3>
      <ul>
        <li><strong>YouTube</strong> (via Google APIs): your channel name and ID (so we can show you which channel is connected), and permission to upload videos to your channel.</li>
        <li><strong>Instagram</strong> (via Meta Graph API): your Instagram Business or Creator account profile (name, ID), and permission to publish content (Reels) to your account.</li>
        <li><strong>TikTok</strong> (via TikTok Content Posting API): your TikTok username and profile, and permission to publish videos to your account.</li>
      </ul>
      <p>
        We never access your watch history, search history, contacts, messages, or any data unrelated to publishing
        clips you created in ClipShip. We never read existing content from your account beyond confirming the account is connected.
      </p>

      <h3>What we store</h3>
      <ul>
        <li><strong>OAuth tokens</strong> (the credentials each platform issues to authorize ClipShip to post on your behalf): stored encrypted in your operating system's secure credential store on your computer. Tokens are NOT transmitted to our servers.</li>
        <li><strong>Connected username/handle</strong>: stored locally so the app can show "Connected as @yourname". Not transmitted to our servers.</li>
      </ul>

      <h3>What we transmit, when, and to whom</h3>
      <p>
        When you click "Post to YouTube" / "Post to Instagram" / "Post to TikTok", ClipShip on your computer
        sends the video file, your caption, and your OAuth token directly to that platform's API. No data
        passes through our servers in this flow. Each post is initiated by an explicit user click — we never
        post automatically, on a schedule, or in the background.
      </p>

      <h3>Limited Use compliance (Google API Services)</h3>
      <p>
        ClipShip&apos;s use of information received from Google APIs adheres to the
        {" "}<a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>,
        including the Limited Use requirements. Specifically:
      </p>
      <ul>
        <li>We only request the minimum scopes required for the feature you initiate (uploading clips you generated).</li>
        <li>We do not transfer your YouTube data to third parties.</li>
        <li>We do not use your YouTube data for advertising, analytics, or training AI/ML models.</li>
        <li>Your YouTube data is not read or accessed by humans on our team.</li>
      </ul>

      <h3>How to disconnect a connected account</h3>
      <p>
        Open ClipShip → Settings → Social Accounts → Disconnect next to the platform. This deletes the OAuth token
        from your computer. You can also revoke access directly from each platform&apos;s dashboard:
      </p>
      <ul>
        <li>YouTube/Google: <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">myaccount.google.com/permissions</a></li>
        <li>Instagram: <a href="https://accountscenter.instagram.com/apps_and_websites/active/" target="_blank" rel="noopener noreferrer">accountscenter.instagram.com/apps_and_websites/active</a></li>
        <li>TikTok: TikTok app → Settings → Privacy → Manage Connected Apps</li>
      </ul>

      <h2>How we use your data</h2>
      <ul>
        <li>Email (waitlist or purchaser): to send product updates, license keys, and support replies. Never sold to third parties.</li>
        <li>Hardware fingerprint: to enforce one license per device per the licensing terms you agreed to at purchase.</li>
        <li>Anonymous analytics (opt-in): to understand which features matter most. Aggregate only.</li>
      </ul>

      <h2>Third-party services we use</h2>
      <ul>
        <li><strong>Cloudflare</strong> (DNS, CDN, spam protection, license verification API)</li>
        <li><strong>Vercel</strong> (website hosting)</li>
        <li><strong>Firebase Auth</strong> (account sign-in, by Google)</li>
        <li><strong>Resend</strong> (transactional email delivery)</li>
        <li><strong>Dodo Payments</strong> (payment processing)</li>
        <li><strong>Microsoft Clarity</strong> (website analytics, anonymous)</li>
      </ul>
      <p>None of these services have access to your video content, editing data, or social-media OAuth tokens.</p>

      <h2>Your rights and data deletion</h2>
      <p>
        You can request deletion of your account data (email, license records, device fingerprint, hardware metadata) at any time by emailing
        {" "}<a href="mailto:hello@clipship.co">hello@clipship.co</a>. We will delete your data within 30 days of receiving the request.
      </p>
      <p>
        Since the desktop app processes video content entirely locally and stores OAuth tokens on your own computer,
        there is no video data, transcript data, or social-media OAuth token data on our servers to delete.
        Disconnecting a social account from ClipShip Settings, or revoking access from the platform&apos;s dashboard,
        immediately stops all access.
      </p>

      <h2>Children&apos;s privacy</h2>
      <p>
        ClipShip is not directed at children under 13 (or under 16 in the EU). We do not knowingly collect data
        from children. If you believe a child has registered for ClipShip, contact us and we will delete their data.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this privacy policy from time to time. Significant changes will be communicated via email
        to registered users and via an in-app notice. Last updated date at the top of this page reflects the most
        recent change.
      </p>

      <h2>Contact</h2>
      <p>Questions about privacy? Email <a href="mailto:hello@clipship.co">hello@clipship.co</a>.</p>
    </ContentPage>
  );
}
