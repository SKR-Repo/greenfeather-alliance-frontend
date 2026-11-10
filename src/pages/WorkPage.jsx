import WorkHeroSection from "../components/work/WorkHeroSection";
import WorkIssueSection from "../components/work/WorkIssueSection";
import WorkRegionsSection from "../components/work/WorkRegionsSection";
import WorkSolutionsSection from "../components/work/WorkSolutionsSection";
import WorkSupportSection from "../components/work/WorkSupportSection";
import { WORK_ISSUES } from "../data/workSections";

export default function WorkPage() {
  return (
    <>
      <WorkHeroSection />
      <WorkSolutionsSection />

      {/* sections 3-6: image side alternates (left, right, left, right) */}
      {WORK_ISSUES.map((issue, i) => (
        <WorkIssueSection key={issue.id} issue={issue} reverse={i % 2 === 1} />
      ))}

      <WorkRegionsSection />
      <WorkSupportSection />
    </>
  );
}
