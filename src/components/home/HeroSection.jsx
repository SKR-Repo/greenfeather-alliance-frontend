import { Link } from "react-router-dom";
import { ASSETS } from "../../constants/assets";
import ParallaxHero from "../common/ParallaxHero";
import { ChevronRight } from "../common/Icons";
import SealBadge from "../common/SealBadge";

/*
  Headline sizing (desktop, lg+) is in vw so it scales with the page exactly like the
  live site: 5.5vw type, 5.55vw line pitch, 10.7vw left edge, tight tracking.
  Mobile / tablet keep the original Montserrat styling.

  Seal strip (below the headline):
   - desktop (lg+): sits just BELOW the first screen, still over the frozen photo — a frosted
     pill, flush with the right edge, sized by its content (≈39vw wide). Every size is in vw
     (seal 4.95vw, text 1.1vw) so it scales with the headline.
   - mobile / tablet: a full-width sage bar attached to the bottom of the hero.
*/
function SealStrip() {
  return (
    <aside
      aria-label="About the Rainforest Alliance Certified seal"
      className="bg-ra-sage lg:flex lg:justify-end lg:bg-transparent lg:pb-[6.2vw] lg:pt-[1.5vw]"
    >
      <div className="flex items-center gap-4 px-4 py-4 sm:px-6 lg:w-max lg:gap-[1.37vw] lg:rounded-l-full lg:bg-[rgba(250,250,247,0.8)] lg:py-[1vw] lg:pl-[1vw] lg:pr-[1.5vw] lg:backdrop-blur-sm">
        <SealBadge className="size-14 shrink-0 sm:size-16 lg:size-[4.95vw]" />

        <p className="text-[13px] leading-snug text-[#0d2d30] sm:text-sm lg:text-[1.1vw] lg:leading-[1.5] lg:whitespace-nowrap">
          When you choose products with our little green frog,
          <br className="hidden lg:block" /> you’re supporting a better world for people and nature.
          <br className="hidden lg:block" />{" "}
          <Link
            to="/what-our-seal-means"
            className="group inline-flex items-center gap-[0.15em] text-[#1f56c3] underline-offset-4 transition-colors hover:underline"
          >
            Discover what’s behind the seals
            <ChevronRight
              strokeWidth={2.2}
              className="size-[0.62em] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </p>
      </div>
    </aside>
  );
}

export default function HeroSection() {
  return (
    <ParallaxHero
      image={ASSETS.homeHero}
      alt="A red-eyed tree frog clinging to a branch in the rainforest"
      contentClassName="pb-0"
    >
      {/* First screen: exactly one viewport tall, headline anchored to its bottom. */}
      <div className="flex min-h-svh items-end pb-[clamp(3rem,9svh,5.5rem)] pt-40 lg:pb-[6.4svh] lg:pt-0">
        <h1 className="w-full pl-[13vw] pr-6 font-display text-[clamp(2rem,5.65vw,8rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] md:pl-[10.8vw] lg:pl-[10.7vw] lg:font-hero lg:text-[5.5vw] lg:font-black lg:leading-[5.55vw] lg:tracking-[-0.06em]">
          {/* per-line tracking = optical fit so each line is exactly as wide as on the live site (desktop only) */}
          <span className="block text-white lg:tracking-[-0.052em]">Guardians of</span>
          <span className="block text-white lg:tracking-[-0.079em]">Forests.</span>
          <span className="block text-ra-yellow lg:tracking-[-0.067em]">Advocates for</span>
          <span className="block text-ra-yellow lg:tracking-[-0.094em]">Farmers.</span>
        </h1>
      </div>

      <SealStrip />
    </ParallaxHero>
  );
}