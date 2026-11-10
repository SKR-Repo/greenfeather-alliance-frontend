import { useRef } from "react";
import { ASSETS } from "../../constants/assets";
import { GIVE_FUNDRAISER } from "../../data/getInvolvedSections";
import useInView from "../../hooks/useInView";
import SmartLink from "../common/SmartLink";
import { PeopleIcon } from "./GiveIcons";

/*
  Get Involved section 5 — "Start a fundraiser": white row, rounded square photo left, copy right
  (people icon, title, text, teal button). Same grid + zoom-out-on-scroll as WorkIssueSection
  (useInView): the photo starts zoomed in, eases to normal when the row enters the screen, and
  resets once it is completely off screen. Mobile / tablet: photo on top, copy below.
  Desktop sizes are vw-based (measured at 1897px wide): 3.8vw gutters + gap, 44vw square photo.
*/
export default function GetInvolvedFundraiserSection() {
  const { imageAlt, title, text, buttonLabel, buttonHref } = GIVE_FUNDRAISER;
  const ref = useRef(null);
  const inView = useInView(ref, 0.35);

  return (
    <section
      ref={ref}
      aria-labelledby="give-fundraiser-title"
      className="relative z-10 bg-white text-ra-teal"
    >
      <div className="mx-auto grid max-w-[34rem] gap-14 px-14 py-12 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-[3.8vw] lg:px-[3.8vw] lg:py-[2.5vw] lg:pb-[8vw]">
        {/* image */}
        <div className="aspect-square w-full overflow-hidden rounded-3xl bg-[#e8eeee] lg:rounded-[1.5vw]">
          <img
            src={ASSETS.getInvolvedFundraiser}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full origin-center object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
              inView ? "scale-100" : "scale-[1.35] motion-reduce:scale-100"
            }`}
          />
        </div>

        {/* content */}
        <div className="min-w-0">
          <PeopleIcon className="ml-3 h-[38px] w-14 lg:ml-[0.95vw] lg:h-[3vw] lg:w-[4.5vw]" />

          <h2
            id="give-fundraiser-title"
            className="mt-[4.5rem] text-[26px] font-semibold leading-[1.15] lg:mt-[5.4vw] lg:max-w-[44vw] lg:text-[2.83vw] lg:leading-[1.26]"
          >
            {title}
          </h2>

          <p className="mt-6 text-base leading-[1.5] sm:text-lg lg:mt-[2vw] lg:max-w-[44vw] lg:text-[1.58vw]">
            {text}
          </p>

          <SmartLink
            href={buttonHref}
            className="mt-8 inline-flex h-[51px] items-center rounded-[4px] bg-ra-teal px-[13px] text-[13px] font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-ra-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ra-teal sm:text-[15px] lg:mt-[3.8vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
