import { ASSETS } from "../../constants/assets";
import { FOR_BUSINESS_BANNER } from "../../data/forBusinessSections";

/*
  For Business section 4 — full-width photo strip, no text, sitting flush between the certification
  section above and "Other services" below (no gap).

  Parallax = the same walk-over trick as ParallaxHero: the photo is `position: fixed` (sized to the
  viewport, object-cover) and the section clips it with clip-path, so the picture stays still while
  the strip scrolls past like a window. Unlike the heroes there is NO dark veil here.

  Height: 34.1vw on desktop (≈ 647px at 1896px wide), 27rem (≈ 430px) on phones.
*/
export default function ForBusinessBannerSection() {
  const { alt } = FOR_BUSINESS_BANNER;

  return (
    <section
      aria-label={alt}
      className="relative isolate h-[27rem] overflow-hidden bg-[#f4f7ea] [clip-path:inset(0)] md:h-[32rem] lg:h-[34.1vw]"
    >
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh">
        <img
          src={ASSETS.forBusinessBanner}
          alt=""
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
}
