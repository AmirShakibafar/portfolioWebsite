import CtaSection from "@/components/CtaSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import { RecomendationsSection } from "@/components/RecomendationsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection/>
      <RecomendationsSection/>
      <CtaSection/>
    </>
  );
}
