import CropsSection from "../components/home/CropsSection";
import DeforestationBanner from "../components/home/DeforestationBanner";
import GetInvolved from "../components/home/GetInvolved";
import HeroSection from "../components/home/HeroSection";
import ImpactStats from "../components/home/ImpactStats";
import LatestArticles from "../components/home/LatestArticles";
import LearnMoreBanner from "../components/home/LearnMoreBanner";
import ProductsSection from "../components/home/ProductsSection";
import ReportBanner from "../components/home/ReportBanner";
import SealsBanner from "../components/home/SealsBanner";
import SignupSection from "../components/home/SignupSection";

/**
 * Landing page = an ordered list of sections.
 * Add the next sections below <HeroSection /> as we build them
 * (each section must have its own solid background so it "walks over" the hero).
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReportBanner />
      <DeforestationBanner />
      <CropsSection />

      <ImpactStats /> 
      <SealsBanner />
      <ProductsSection />
      <GetInvolved />

      <SignupSection />
      <LatestArticles />
      <LearnMoreBanner />

      {/* TEMPORARY — lets you test the scroll effect. Replace with the real sections. */}
      {/* <section className="relative bg-white px-6 py-32 text-center">
        <p className="mx-auto max-w-2xl font-display text-3xl font-extrabold uppercase tracking-tight text-ra-teal md:text-5xl">
          Next sections go here
        </p>
        <div className="h-[60vh]" />
      </section> */}
    </>
  );
}
