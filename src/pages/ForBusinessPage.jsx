import ForBusinessBannerSection from "../components/forBusiness/ForBusinessBannerSection";
import ForBusinessCertificationSection from "../components/forBusiness/ForBusinessCertificationSection";
import ForBusinessHeroSection from "../components/forBusiness/ForBusinessHeroSection";
import ForBusinessReportSection from "../components/forBusiness/ForBusinessReportSection";
import ForBusinessServicesSection from "../components/forBusiness/ForBusinessServicesSection";

/**
 * For Business page = an ordered list of sections.
 * Add the next sections below <ForBusinessServicesSection /> as we build them
 * (each section must have its own solid background so it "walks over" the hero).
 */
export default function ForBusinessPage() {
  return (
    <>
      <ForBusinessHeroSection />
      <ForBusinessReportSection />
      <ForBusinessCertificationSection />
      <ForBusinessBannerSection />
      <ForBusinessServicesSection />
    </>
  );
}
