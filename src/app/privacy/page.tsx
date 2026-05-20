import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy - ClipShip",
  description: "ClipShip privacy policy. Your videos stay on your computer. We do not collect or transmit your content.",
};

export default function Privacy() {
  return (
    <ContentPage title="Privacy Policy" description="Last updated: May 2026" badge="Legal">
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
        <li>If you download ClipShip, we record a download click with UTM/referrer data, country, browser user agent, and a daily hashed IP signal. We do not store raw IP addresses in the download table.</li>
        <li>If you sign up for updates or email support, we collect the email address and message details you provide.</li>
        <li>We use Microsoft Clarity for anonymous website analytics (page views, scroll depth). No personal data is shared.</li>
        <li>We may use Google Analytics 4 for aggregate website and download-click analytics.</li>
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

      <h2>How we protect your data</h2>
      <p>
        We implement industry-standard security measures to protect the confidentiality, integrity, and
        availability of the data we handle on your behalf. Sensitive data &mdash; including OAuth tokens
        for connected accounts (YouTube, Instagram, TikTok), API keys for AI providers, and account
        credentials &mdash; is protected at every layer:
      </p>
      <ul>
        <li>
          <strong>Encryption in transit.</strong> All communication between the ClipShip desktop app,
          our Cloudflare-hosted API, and connected platforms (Google APIs, Meta Graph API, TikTok
          Content Posting API, AI providers) is encrypted using HTTPS with TLS 1.2 or higher. No
          ClipShip data is ever transmitted over unencrypted channels.
        </li>
        <li>
          <strong>Encryption at rest.</strong> All persistent data on our infrastructure (Cloudflare
          D1 database for license records, Cloudflare R2 for temporary upload-bridge files) is
          encrypted at rest with AES-256 by Cloudflare. OAuth tokens for your connected social
          accounts and your AI provider API keys are stored on YOUR computer in your operating
          system&apos;s secure credential store (Windows Credential Manager, macOS Keychain, or
          Linux Secret Service), which is itself encrypted by the operating system.
        </li>
        <li>
          <strong>Authentication and access control.</strong> User sign-in is handled by Firebase
          Authentication (by Google), which manages password hashing and session lifecycles to
          industry standards. Every authenticated request from the desktop app to our API is
          verified using a signed Firebase JWT token; we reject any request whose signature does
          not validate. Internal access to user records is limited to the minimum number of
          engineers required to operate the service, audited on every access.
        </li>
        <li>
          <strong>Webhook authenticity.</strong> Payment webhooks (Dodo Payments) and other
          inbound automated events are verified using HMAC-SHA256 signatures before any
          state-changing operation runs. Tampered or replayed events are rejected.
        </li>
        <li>
          <strong>Sensitive-token isolation.</strong> Your AI provider API keys and your social
          media OAuth tokens never leave your computer. They are stored in your operating
          system&apos;s secure credential store and used only to make direct calls from your
          machine to the relevant platform&apos;s API. They are never transmitted to, processed by,
          or logged by ClipShip&apos;s servers under any circumstance.
        </li>
        <li>
          <strong>Data minimization.</strong> Your videos, audio, transcripts, and editing data
          are processed entirely on your own computer and are never uploaded to our servers. The
          less sensitive data we collect, the less is at risk; we deliberately minimize our
          server-side footprint.
        </li>
        <li>
          <strong>Network protection.</strong> Our API endpoints sit behind Cloudflare&apos;s
          DDoS protection and Web Application Firewall. Rate limits and abuse heuristics block
          automated attacks before they reach application logic.
        </li>
        <li>
          <strong>Operational security.</strong> Production credentials (API keys, signing keys,
          webhook secrets) are stored as encrypted secrets in our infrastructure provider and are
          never embedded in the source code or shipped with the desktop installer.
        </li>
        <li>
          <strong>Breach notification.</strong> If we become aware of a data breach that affects
          your personal information, we will notify affected users by email within 72 hours of
          discovery and provide guidance on protective steps you can take.
        </li>
      </ul>
      <p>
        No method of transmission or storage on the internet is 100% secure, and we cannot guarantee
        absolute security. We continuously evaluate and improve our security practices. If you
        discover a vulnerability, please report it responsibly to
        {" "}<a href="mailto:hello@clipship.co">hello@clipship.co</a>.
      </p>

      <h2>How we use your data</h2>
      <ul>
        <li>Email (account, newsletter, or purchaser): to send product updates, license keys, and support replies. Never sold to third parties.</li>
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
        <li><strong>Google Analytics 4</strong> (aggregate website analytics, if enabled)</li>
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
