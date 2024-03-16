import Image from "next/image";
import { SpotlightPreview } from "@/components/SpotLightPreview";
import { CourseList } from "@/components/CourseList";

export default function Home() {
  return (
    <main className="p-4">
      <SpotlightPreview />
      <CourseList />
      {/* USE "INFINITE MOVING CARDS" */}
    </main>
  );
}
