import { useEffect, useState } from "react";
import { ASSETS } from "../../constants/assets";
import { IMPACT_HERO } from "../../data/impactSections";

/*
  Our Impact hero — NOT the walk-over ParallaxHero. The page sits on pale blue (#E1E8F7), the
  navbar floats over that blue, and the photo lives in a rounded card below it.

  - title "OUR" (white) + "IMPACT" (yellow): stacked on mobile, one line on desktop
  - on load the photo fades in; the arrow button appears after ~2s
  - the yellow arrow button bounces forever and smooth-scrolls to the next section
  Desktop sizes are in vw (the card is ≈ 98vw wide, one screen tall).
*/
export default function ImpactHeroSection() {
  const { titleTop, titleBottom, text, edition, nextId } = IMPACT_HERO;
  const [ready, setReady] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    const t = setTimeout(() => setShowArrow(true), 2000); // arrow appears ~2s after load, like the live site
    return () => {
      cancelAnimationFrame(id);
      clearTimeout(t);
    };
  }, []);

  const goNext = () => document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      aria-labelledby="impact-hero-title"
      className="bg-[#e1e8f7] px-4 pb-4 pt-[calc(66px+1.75rem)] lg:px-[0.4vw] lg:pb-[0.4vw] lg:pt-[calc(clamp(11px,1vw,15px)*5.485+1.75rem)]"
    >
      <div className="relative isolate flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-start overflow-hidden rounded-[14px] bg-[#e1e8f7] px-[14vw] pb-28 pt-[30vw] text-center text-white lg:min-h-[51.2vw] lg:rounded-[0.8vw] lg:px-[4vw] lg:pb-[7vw] lg:pt-[11.7vw]">
        {/* photo + readability veil */}
        <img
          src={ASSETS.impactHero}
          alt=""
          decoding="async"
          fetchPriority="high"
          className={`absolute inset-0 -z-10 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/30" />

        <h1
          id="impact-hero-title"
          className="flex flex-col items-center font-hero text-[19vw] font-black uppercase leading-[1] tracking-[-0.065em] sm:text-[17vw] lg:flex-row lg:gap-[2.9vw] lg:text-[13.7vw] lg:leading-[0.95] lg:tracking-[-0.09em]"
        >
          <span>{titleTop}</span>
          <span className="text-ra-yellow">{titleBottom}</span>
        </h1>

        <p className="mt-10 max-w-[22rem] text-base leading-[1.5] sm:max-w-[34rem] sm:text-lg lg:mt-[2.55vw] lg:max-w-[76vw] lg:text-[1.58vw]">
          {text}
        </p>

        <p className="mt-6 text-[13px] uppercase leading-none lg:mt-[1.7vw] lg:text-[1.05vw]">{edition}</p>

        <button
          type="button"
          onClick={goNext}
          aria-label="Scroll to the next section"
          className={`absolute bottom-8 left-1/2 grid h-[46px] w-[58px] -translate-x-1/2 cursor-pointer place-items-center rounded-full bg-[#ffe030] text-ra-teal shadow-md transition-[opacity,background-color] duration-700 hover:bg-white lg:bottom-[3.75vw] lg:h-[3.1vw] lg:w-[4vw] ${
            showArrow ? "animate-bounce opacity-100 motion-reduce:animate-none" : "pointer-events-none opacity-0"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-5 lg:size-[1.4vw]">
            <path d="M12 4v16M5 13l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
