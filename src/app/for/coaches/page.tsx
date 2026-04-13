import type { Metadata } from "next";
import ContentPage from "../../components/ContentPage";

export const metadata: Metadata = {
  title: "ClipShip for Coaches and Consultants - Content from Every Call",
  description:
    "Turn your coaching sessions and webinars into edited content and social media clips. Private, local processing. Your client content stays on your machine.",
};

export default function ForCoaches() {
  return (
    <ContentPage
      title="ClipShip for Coaches and Consultants"
      description="Every coaching call, webinar, and presentation is content waiting to be repurposed."
    >
      <h2>You already have the content</h2>
      <p>
        As a coach or consultant, you talk for a living. Group calls, webinars, Q&A sessions,
        presentations. Every one of these is a goldmine of content. The problem is not creating
        content. It is extracting and editing it.
      </p>
      <p>
        You do not have 6 hours to edit each recording. You have clients to serve.
      </p>

      <h2>What ClipShip does for coaches</h2>
      <ul>
        <li><strong>Record your session as usual:</strong> Zoom, Google Meet, in-person, any setup</li>
        <li><strong>Drop the recording into ClipShip:</strong> AI transcribes and analyzes your content</li>
        <li><strong>Get clips automatically:</strong> The AI finds your best teaching moments, sharpest insights, and most quotable statements</li>
        <li><strong>Post to social media:</strong> Clips formatted for LinkedIn, Instagram Reels, TikTok, YouTube Shorts</li>
      </ul>

      <h2>Client confidentiality is non-negotiable</h2>
      <p>
        Coaches handle sensitive client conversations. Business strategies, personal challenges,
        financial details. Uploading these recordings to a cloud editing service is a risk.
      </p>
      <p>
        ClipShip runs entirely on your computer. Your recordings, transcripts, and clips never
        leave your machine. No cloud uploads. No third-party access. Use it with full confidence,
        even for private coaching sessions.
      </p>
      <p>
        Of course, only repurpose content you have permission to share publicly. ClipShip gives
        you the tool. The judgment of what to post is yours.
      </p>

      <h2>Content strategy on autopilot</h2>
      <p>
        Most coaches know they should post on social media. Few have time to edit and repurpose
        their content consistently. ClipShip changes the equation:
      </p>
      <ul>
        <li>One 60-minute webinar gives you 3-5 social media clips</li>
        <li>Each clip has a title, hook, and captions ready to go</li>
        <li>Post one clip per day and you have a week of content from a single session</li>
      </ul>

      <h2>Works for every coaching format</h2>
      <ul>
        <li><strong>1-on-1 coaching calls</strong> (with client permission)</li>
        <li><strong>Group coaching sessions</strong></li>
        <li><strong>Webinars and workshops</strong></li>
        <li><strong>Keynote presentations</strong></li>
        <li><strong>Podcast interviews</strong></li>
        <li><strong>Q&A sessions</strong></li>
      </ul>

      <h2>Multi-language support</h2>
      <p>
        Coach clients internationally? ClipShip supports transcription and captions in 99 languages.
        Most competing tools only work in English. If you coach in Spanish, Portuguese, Hindi, or any
        other language, ClipShip handles it.
      </p>

      <h2>Pricing that respects your business model</h2>
      <p>
        Coaches charge per session, not per month. Your tools should work the same way. ClipShip
        Free processes unlimited recordings at 720p. ClipShip Pro is a one-time $79-99 purchase.
        No monthly drain on your business expenses.
      </p>
    </ContentPage>
  );
}
