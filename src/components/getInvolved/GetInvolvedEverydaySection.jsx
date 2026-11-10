import { useRef } from "react";
import { GIVE_EVERYDAY } from "../../data/getInvolvedShop";
import useInView from "../../hooks/useInView";
import SmartLink from "../common/SmartLink";

/*
  Get Involved section 7 — "Everyday actions": white row, copy on the LEFT (title, text, teal
  button) and a rounded square photo on the RIGHT. Same grid as the fundraiser row above it
  (3.8vw gutters + gap, two equal columns) mirrored, with the same useInView zoom-out: the photo
  starts zoomed in, eases to normal on entering and resets once it is completely off screen.
  Phones / tablets: photo on top, copy below (swap the two `order-*` pairs to put the copy first).
*/
export default function GetInvolvedEverydaySection() {
  const { image, imageAlt, title, text, buttonLabel, buttonHref } = GIVE_EVERYDAY;
  const ref = useRef(null);
  const inView = useInView(ref, 0.35);

  return (
    <section ref={ref} aria-labelledby="give-everyday-title" className="relative z-10 bg-white text-ra-teal">
      <div className="mx-auto grid max-w-[34rem] gap-14 px-14 py-12 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-[3.8vw] lg:px-[3.8vw] lg:py-[2.6vw] lg:pb-[5vw]">
        {/* copy (left on desktop) */}
        <div className="order-2 min-w-0 lg:order-1">
          <h2 id="give-everyday-title" className="text-[26px] font-semibold leading-[1.15] lg:max-w-[44vw] lg:text-[2.83vw] lg:leading-[1.23]">
            {title}
          </h2>
          <p className="mt-6 text-base leading-[1.5] text-[#0d3a3f] sm:text-lg lg:mt-[2vw] lg:max-w-[44vw] lg:text-[1.58vw]">{text}</p>
          <SmartLink
            href={buttonHref}
            className="mt-8 inline-flex h-[51px] items-center rounded-[4px] bg-ra-teal px-[13px] text-[13px] font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-ra-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ra-teal sm:text-[15px] lg:mt-[3.8vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>

        {/* image (right on desktop) */}
        <div className="order-1 aspect-square w-full overflow-hidden rounded-3xl bg-[#e8eeee] lg:order-2 lg:rounded-[1.5vw]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full origin-center object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
              inView ? "scale-100" : "scale-[1.35] motion-reduce:scale-100"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
