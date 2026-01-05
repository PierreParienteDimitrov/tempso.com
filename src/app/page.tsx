import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ScreensSection } from "@/components/sections/ScreensSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { DevSection } from "@/components/sections/DevSection";
import { ComingSoonSection } from "@/components/sections/ComingSoonSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ScreensSection />
      <MissionSection />
      <DevSection />
      <ComingSoonSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
