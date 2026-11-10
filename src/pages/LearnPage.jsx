import LearnCurriculumSection from "../components/learn/LearnCurriculumSection";
import LearnFieldSection from "../components/learn/LearnFieldSection";
import LearnHeroSection from "../components/learn/LearnHeroSection";
import LearnInsightsSection from "../components/learn/LearnInsightsSection";
import LearnKnowledgeSection from "../components/learn/LearnKnowledgeSection";
import LearnLatestSection from "../components/learn/LearnLatestSection";
import LearnResearchSection from "../components/learn/LearnResearchSection";

export default function LearnPage() {
  return (
    <>
      <LearnHeroSection />
      <LearnLatestSection />
      <LearnFieldSection />
      <LearnInsightsSection />
      <LearnCurriculumSection />
      <LearnResearchSection />
      <LearnKnowledgeSection />
    </>
  );
}
