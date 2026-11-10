import { useRef } from "react";
import { ASSETS } from "../../constants/assets";
import { WORK_SOLUTIONS } from "../../data/workSections";
import useInView from "../../hooks/useInView";
import SmartLink from "../common/SmartLink";

/*
  Our Work section 2 — rounded sage card, text left / image right.
  Mobile: the image stacks ABOVE the text inside the card.

  Zoom effect: the image starts zoomed in (scale-[1.35]). When the section scrolls into view it
  eases out to its normal size and holds; when the section is fully out of view it resets, so
  the zoom-out plays again on the next visit. (Disabled for prefers-reduced-motion.)
  Desktop sizes are in vw to match the live site (card inner padding 2.5vw, image 44.4vw square).
*/
export default function WorkSolutionsSection() {
  const { title, intro, linkLabel, linkHref, outro, buttonLabel, buttonHref, imageAlt } = WORK_SOLUTIONS;
  const ref = useRef(null);
  const inView = useInView(ref, 0.35);
  const image = ASSETS.workSolutions;

  return (
    <section ref={ref} aria-labelledby="work-solutions-title" className="px-6 py-6 lg:px-[1.3vw] lg:py-[1.3vw]">
      <div className="flex flex-col gap-10 rounded-3xl bg-[#e8eeee] p-8 text-ra-teal lg:flex-row-reverse lg:items-center lg:gap-[3vw] lg:rounded-[1.5vw] lg:p-[2.5vw]">
        {/* image */}
        <div className="aspect-square w-full shrink-0 overflow-hidden rounded-3xl bg-[#e8eeee] lg:w-[44.4vw] lg:rounded-[1.5vw]">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className={`h-full w-full origin-center object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
                inView ? "scale-100" : "scale-[1.35] motion-reduce:scale-100"
              }`}
            />
          ) : (
            <div aria-hidden className="h-full w-full bg-linear-to-br from-[#dfe8e8] to-[#eef3f3]" />
          )}
        </div>

        {/* text */}
        <div className="min-w-0 lg:flex-1">
          <h2
            id="work-solutions-title"
            className="max-w-[42vw] text-[26px] font-semibold leading-[1.15] max-lg:max-w-none lg:text-[2.85vw] lg:leading-[1.26]"
          >
            {title}
          </h2>

          <p className="mt-6 text-base leading-[1.5] sm:text-lg lg:mt-[2vw] lg:max-w-[44vw] lg:text-[1.58vw]">
            {intro}
            <SmartLink href={linkHref} className="underline underline-offset-[0.2em] transition-opacity hover:opacity-70">
              {linkLabel}
            </SmartLink>
            {outro}
          </p>

          <SmartLink
            href={buttonHref}
            className="mt-12 inline-flex h-[51px] items-center rounded-[4px] bg-ra-teal px-[13px] text-[13px] font-semibold text-white transition-colors hover:bg-[#0f3d43] lg:mt-[3.6vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
