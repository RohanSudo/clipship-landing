import type { Metadata } from "next";
import ContentPage from "../../components/ContentPage";

export const metadata: Metadata = {
  title: "ClipShip for YouTubers - Edit Talking-Head Videos in Minutes",
  description:
    "Stop spending 4-8 hours editing each YouTube video. ClipShip uses local AI to edit your talking-head recordings and find the best clips for Shorts. No cloud, no subscription.",
};

export default function ForYouTubers() {
  return (
    <ContentPage
      title="ClipShip for YouTubers"
      description="You record great content. Editing shouldn't take longer than recording."
    >
      <h2>The problem every YouTuber knows</h2>
      <p>
        You hit record. Talk for 20 minutes. Great content, real value, solid energy. Then you open
        Premiere and spend the next 4-8 hours cutting dead air, adding zoom cuts, syncing captions,
        and reformatting for Shorts.
      </p>
      <p>
        The recording took 20 minutes. The edit takes a full workday. Something is broken.
      </p>

      <h2>What ClipShip does for you</h2>
      <p>Drop your raw talking-head recording into ClipShip. The AI handles everything:</p>
      <ul>
        <li><strong>Removes dead air and mistakes</strong> automatically based on your transcript</li>
        <li><strong>Adds zoom cuts</strong> at the right moments (emphasis, emotion, transitions)</li>
        <li><strong>Generates captions</strong> with word-level timing and keyword highlights</li>
        <li><strong>Finds your best clips</strong> for YouTube Shorts (30-90 seconds, with titles and hooks)</li>
        <li><strong>Formats for every platform</strong> in one click</li>
      </ul>

      <h2>One recording, all platforms</h2>
      <p>
        From a single talking-head recording, ClipShip gives you:
      </p>
      <ul>
        <li>Full edited video (16:9) for your YouTube channel</li>
        <li>3-5 short clips (9:16) ready for YouTube Shorts</li>
        <li>Same clips formatted for Instagram Reels and TikTok</li>
      </ul>
      <p>
        That is an entire week of content from one recording session.
      </p>

      <h2>Why local matters for YouTubers</h2>
      <p>
        Cloud tools upload your footage to their servers. That means waiting for uploads,
        hoping their servers are fast, and trusting them with your unreleased content.
      </p>
      <p>
        ClipShip runs on your PC. Processing starts instantly. No upload wait. No one else
        touches your footage. And it works offline, so you can edit on a plane, in a cafe,
        or anywhere without reliable internet.
      </p>

      <h2>Pricing that makes sense for creators</h2>
      <p>
        Most AI editing tools charge $20-50 per month. That is $240-600 per year, every year.
      </p>
      <p>
        ClipShip Free lets you process unlimited videos at 720p. ClipShip Pro is a one-time
        $79-99 purchase for 4K exports, no watermark, and all platform uploads. No recurring fees.
      </p>

      <h2>Built for talking-head creators</h2>
      <p>
        ClipShip is not a general-purpose editor. It is built specifically for the format
        YouTubers use most: one person talking to camera. The AI understands speech patterns,
        knows where emphasis lands, and picks zoom and cut points that feel natural.
      </p>
      <p>
        If your content is you sharing knowledge, telling stories, or teaching your audience,
        ClipShip is built for you.
      </p>
    </ContentPage>
  );
}
