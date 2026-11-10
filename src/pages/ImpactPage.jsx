import ImpactAllianceSection from "../components/impact/ImpactAllianceSection";
import ImpactAreasSection from "../components/impact/ImpactAreasSection";
import ImpactHeroSection from "../components/impact/ImpactHeroSection";
import ImpactPowerSection from "../components/impact/ImpactPowerSection";
import ImpactReportSection from "../components/impact/ImpactReportSection";
import ImpactTransformSection from "../components/impact/ImpactTransformSection";

export default function ImpactPage() {
  return (
    <>
      <ImpactHeroSection />
      <ImpactAllianceSection />
      <ImpactPowerSection />
      <ImpactAreasSection />
      <ImpactTransformSection />
      <ImpactReportSection />
    </>
  );
}
