import { useEffect, useRef } from "react";
import { ASSETS } from "../../constants/assets";
import { IMPACT_ALLIANCE } from "../../data/impactSections";
import useInView from "../../hooks/useInView";

const DURATION = 2400; // ms
const nf = new Intl.NumberFormat("en-US");

/*
  Our Impact section 2 — "We are a global alliance of 14,147,861 people…"
  The big number counts up from 0 EVERY time the section scrolls into view (and resets to 0
  once it is fully off screen). The text is written straight into the DOM from a rAF loop, so
  there are no React re-renders while it counts. Reduced motion shows the final number at once.
  Background: the pale-blue frog artwork, covering the whole section (anchored to the bottom).
*/
export default function ImpactAllianceSection() {
  const { id, intro, count, outro } = IMPACT_ALLIANCE;
  const sectionRef = useRef(null);
  const numberRef = useRef(null);
  const inView = useInView(sectionRef, 0.35);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = nf.format(count);
      return undefined;
    }
    if (!inView) {
      el.textContent = "0";
      return undefined;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = nf.format(Math.round(count * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, count]);

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby="impact-alliance-title"
      className="relative isolate flex min-h-svh scroll-mt-0 flex-col items-center justify-center overflow-hidden bg-[#e1e8f7] px-6 py-16 text-center text-[#0b2a6b] lg:px-[4vw]"
    >
      <img
        src={ASSETS.impactAlliance}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
      />

      <h2 id="impact-alliance-title" className="sr-only">
        {intro} {nf.format(count)} people
      </h2>

      <p aria-hidden className="max-w-[16rem] text-[26px] font-semibold leading-[1.5] sm:max-w-none lg:text-[2.05vw]">
        {intro}
      </p>

      <p
        aria-hidden
        ref={numberRef}
        className="mt-12 font-hero text-[15vw] font-black leading-none tabular-nums tracking-[-0.01em] text-[#1a53c4] lg:mt-[5vw] lg:text-[12vw] lg:tracking-[0.008em]"
      >
        {nf.format(count)}
      </p>

      <p className="mt-12 max-w-[18rem] text-[26px] font-semibold leading-[1.5] sm:max-w-none lg:mt-[4.5vw] lg:max-w-[78vw] lg:text-[1.92vw] lg:leading-[1.78]">
        {outro.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <sup key={i} className="text-[0.55em] font-medium text-[#1a53c4]">
              {part.sup}
            </sup>
          ),
        )}
      </p>
    </section>
  );
}
