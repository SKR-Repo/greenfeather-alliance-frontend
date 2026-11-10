import { Link } from "react-router-dom";
import { ASSETS } from "../../constants/assets";
import { FOR_BUSINESS_HERO } from "../../data/forBusinessSections";
import ParallaxHero from "../common/ParallaxHero";

/*
  For Business hero — same walk-over structure as the Home / Our Work heroes (ParallaxHero:
  frozen photo, the next section walks over it). Default navbar style (transparent over the photo).

  Unlike the Work hero the text is NOT pinned to the bottom of the first screen: the headline starts
  ≈ 42% down the first screen and the block simply runs past the fold (button just under it), like
  the live page. So the spacing is top padding, not min-height.

  Desktop (lg+) sizes are in vw (measured at 1896px wide):
    headline 5.5vw / 5.55vw line pitch, left edge 10.8vw, 3 fixed lines
    description 1.58vw Poppins (≈ 51vw wide so it breaks after "…ones that" / "…call to work")
    button 4.43vw high, 1.27vw text — same measures as the navbar "Give" button.
  Mobile / tablet: headline ≈ 9.4vw so it wraps TRANSFORMING / MARKETS / FOR A BETTER / FUTURE.
*/
// per-line tracking = optical fit so each desktop line is as wide as on the live site
const LINE_TRACKING = ["lg:tracking-[-0.086em]", "lg:tracking-[-0.099em]"];
const YELLOW_TRACKING = "lg:tracking-[-0.081em]";

/*
  Dark overlay over the photo so the bright pulp / skin highlights don't fight the white text.
  It is `fixed` like the photo itself (so it stays put during the walk-over) and is clipped to the
  hero by ParallaxHero. TUNE THE DARKNESS HERE: bg-black/40 -> /30 lighter, /50 darker.
*/
const OVERLAY = "bg-black/40";

export default function ForBusinessHeroSection() {
  const { alt, titleWhite, titleYellow, text, button } = FOR_BUSINESS_HERO;

  return (
    <ParallaxHero
      image={ASSETS.forBusinessHero}
      alt={alt}
      imageClassName="object-center"
      contentClassName="pb-0"
    >
      <div aria-hidden className={`pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh ${OVERLAY}`} />

      <div className="pb-16 pl-[11vw] pr-6 pt-[52svh] md:pt-[44svh] lg:pb-[9vw] lg:pl-[10.8vw] lg:pr-0 lg:pt-[20.5vw]">
        <h1 className="max-w-[7.2em] font-hero text-[clamp(2rem,9.4vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white lg:max-w-none lg:text-[5.5vw] lg:leading-[5.55vw] lg:tracking-[-0.06em]">
          {titleWhite.map((line, i) => (
            <span key={line} className={`lg:block ${LINE_TRACKING[i] ?? ""}`}>
              {line}{" "}
            </span>
          ))}
          <span className={`block text-ra-yellow ${YELLOW_TRACKING}`}>{titleYellow}</span>
        </h1>

        <p className="mt-9 max-w-[17rem] text-base leading-[1.5] text-white sm:max-w-[34rem] sm:text-lg lg:mt-[2.6vw] lg:max-w-[51vw] lg:text-[1.58vw]">
          {text}
        </p>

        <Link
          to={button.href}
          className="mt-7 inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md bg-ra-yellow px-6 text-base font-semibold leading-none text-ra-teal transition-colors duration-200 hover:bg-white sm:h-14 sm:text-lg lg:mt-[1.6vw] lg:h-[4.43vw] lg:px-[1.03vw] lg:text-[1.27vw]"
        >
          {button.label}
        </Link>
      </div>
    </ParallaxHero>
  );
}
