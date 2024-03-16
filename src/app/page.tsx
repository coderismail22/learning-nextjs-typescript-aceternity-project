import Image from "next/image";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { CourseList } from "@/components/CourseList";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";

export default function Home() {
  return (
    <main className="p-4">
      <SpotlightPreview />
      <CourseList />
      <StickyScrollRevealDemo />
      <InfiniteMovingCardsDemo />
      {/* USE "INFINITE MOVING CARDS" */}
    </main>
  );
}
