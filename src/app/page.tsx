import Image from "next/image";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { CourseList } from "@/components/CourseList";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";

export default function Home() {
  return (
    <main className="p-4">
      <SpotlightPreview />
      <CourseList />
      <StickyScrollRevealDemo />
      {/* USE "INFINITE MOVING CARDS" */}
    </main>
  );
}
