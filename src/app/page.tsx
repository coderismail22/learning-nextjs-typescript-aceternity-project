import { SpotlightPreview } from "@/components/SpotlightPreview";
import { CourseList } from "@/components/CourseList";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";

export default function Home() {
  return (
    <main className="p-4">
      <SpotlightPreview />
      <CourseList />
      <StickyScrollRevealDemo />
      <InfiniteMovingCardsDemo />
      <CardHoverEffectDemo />
      <WavyBackgroundDemo />
    </main>
  );
}
