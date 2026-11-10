import GetInvolvedHeroSection from "../components/getInvolved/GetInvolvedHeroSection";
import ProductsSection from "../components/home/ProductsSection";
import SignupSection from "../components/home/SignupSection";
import GetInvolvedDonateSection from "../components/getInvolved/GetInvolvedDonateSection";
import GetInvolvedFundraiserSection from "../components/getInvolved/GetInvolvedFundraiserSection";
import GetInvolvedShopSection from "../components/getInvolved/GetInvolvedShopSection";
import GetInvolvedEverydaySection from "../components/getInvolved/GetInvolvedEverydaySection";
import GetInvolvedGiftSection from "../components/getInvolved/GetInvolvedGiftSection";
import GetInvolvedAllianceSection from "../components/getInvolved/GetInvolvedAllianceSection";
import GetInvolvedFaqSection from "../components/getInvolved/GetInvolvedFaqSection";

/*
  Get Involved page = donation hero + the SAME <ProductsSection /> the Home page uses
  (rotating product grid + "Find products near you"), imported — not copied.
*/
export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedHeroSection />
      <ProductsSection />
      <SignupSection />
      <GetInvolvedDonateSection />
      <GetInvolvedFundraiserSection />
      <GetInvolvedShopSection />
      <GetInvolvedEverydaySection />
      <GetInvolvedGiftSection />
      <GetInvolvedAllianceSection />
      <GetInvolvedFaqSection />
    </>
  );
}
