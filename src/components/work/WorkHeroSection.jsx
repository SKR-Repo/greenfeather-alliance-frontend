import { ASSETS } from "../../constants/assets";
import { WORK_HERO } from "../../data/workSections";
import ParallaxHero from "../common/ParallaxHero";

/*
  Our Work hero — same walk-over structure as the Home hero (ParallaxHero), different photo + copy.

  Desktop (lg+) sizes are in vw so it scales like the live site:
    headline 6.3vw / 6.34vw line pitch, left edge 10.8vw (3 fixed lines),
    description 1.58vw Poppins, max ≈ 56vw wide.
  The first screen is exactly one viewport tall with the text anchored to its bottom;
  the extra bottom padding makes the hero run a little past the fold, like the live page.
  Mobile / tablet use the same face at ~9.4vw so the headline wraps like the live site
  (PEOPLE AND / NATURE / THRIVING IN / HARMONY).
*/
export default function WorkHeroSection() {
  const { alt, titleLines, text } = WORK_HERO;

  return (
    <ParallaxHero
      image={ASSETS.workHero}
      alt={alt}
      imageClassName="object-[72%_center]"
      contentClassName="pb-0"
    >
      <div className="flex min-h-svh items-end pb-12 pt-40 lg:pb-0 lg:pt-0">
        <div className="w-full pl-[11vw] pr-6 lg:pl-[10.8vw] lg:pr-0">
          <h1 className="max-w-[7.2em] font-hero text-[clamp(2rem,9.4vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white lg:max-w-none lg:text-[6.3vw] lg:leading-[6.34vw] lg:tracking-[-0.045em]">
            {titleLines.map((line) => (
              <span key={line} className="lg:block">
                {line}{" "}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[34rem] text-xl leading-[1.5] text-white md:max-w-[44rem] lg:mt-[1.8vw] lg:max-w-[56vw] lg:text-[1.58vw]">
            {text}
          </p>
        </div>
      </div>

      {/* runs the hero a little past the first screen on desktop */}
      <div aria-hidden className="hidden lg:block lg:h-[14vw]" />
    </ParallaxHero>
  );
}
