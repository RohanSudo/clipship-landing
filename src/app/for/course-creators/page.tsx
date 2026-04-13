import type { Metadata } from "next";
import ContentPage from "../../components/ContentPage";

export const metadata: Metadata = {
  title: "ClipShip for Course Creators - Edit Lessons and Promote on Social",
  description:
    "Turn your course recordings into polished lessons and promotional clips. Local AI editing, no cloud uploads. Keep your course content private and secure.",
};

export default function ForCourseCreators() {
  return (
    <ContentPage
      title="ClipShip for Course Creators"
      description="Your course content is valuable. Edit it faster without uploading to someone else's servers."
    >
      <h2>The course creator's editing bottleneck</h2>
      <p>
        You recorded 30 lessons for your course. Each one needs dead air removed, sections tightened,
        captions added. At 2-4 hours per lesson, that is 60-120 hours of editing for one course.
      </p>
      <p>
        Then you need promotional clips for social media to actually sell the course.
        Another round of editing for each platform.
      </p>

      <h2>What ClipShip does for course creators</h2>
      <ul>
        <li><strong>Batch process lessons:</strong> Drop each lesson recording in, get polished output</li>
        <li><strong>Automatic silence removal:</strong> Tighten your delivery without manual cutting</li>
        <li><strong>Captions for accessibility:</strong> 99 languages supported, word-level timing</li>
        <li><strong>Promotional clips:</strong> AI finds the most engaging 30-90 second moments from each lesson</li>
        <li><strong>Multi-platform formatting:</strong> One lesson gives you YouTube content, Instagram Reels, TikTok clips</li>
      </ul>

      <h2>Why privacy matters for course content</h2>
      <p>
        Your course content is your intellectual property. It is what you sell. Uploading unreleased
        lessons to a cloud editing tool means trusting a third party with your revenue source.
      </p>
      <p>
        ClipShip processes everything on your computer. Your lessons never leave your machine.
        No cloud uploads, no third-party access, no risk of leaks. Edit with confidence.
      </p>

      <h2>Turn lessons into marketing content</h2>
      <p>
        The hardest part of selling a course is marketing it. ClipShip helps by finding the best
        moments from each lesson and formatting them as social media clips.
      </p>
      <p>
        One lesson recording gives you:
      </p>
      <ul>
        <li>A polished lesson video for your course platform</li>
        <li>3-5 teaser clips that showcase your teaching style</li>
        <li>Captioned clips ready for Instagram, TikTok, and YouTube Shorts</li>
      </ul>
      <p>
        Your course sells itself when people see your best moments on social media.
      </p>

      <h2>Works with any course platform</h2>
      <p>
        ClipShip exports standard MP4 files. Upload to Teachable, Kajabi, Thinkific, Udemy,
        Skillshare, or any platform that accepts video. No lock-in, no proprietary formats.
      </p>

      <h2>Pricing for course creators</h2>
      <p>
        Hiring an editor for 30 lessons costs $1,500-6,000. Cloud AI tools charge $20-50 per month
        forever. ClipShip Free handles unlimited lessons at 720p. ClipShip Pro is $79-99 once for
        4K and all features. The math is simple.
      </p>
    </ContentPage>
  );
}
