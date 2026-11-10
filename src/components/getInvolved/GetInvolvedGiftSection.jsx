import { GIVE_GIFT } from "../../data/getInvolvedSections";
import SmartLink from "../common/SmartLink";

/*
  Get Involved section 8 — small rounded sage card: title, text and one teal button.
  Measured on the live site at 1900px: 1.3vw gutter, card padding 2.5vw, title 2.83vw, text 1.58vw,
  button 4.4vw high. Phones: 24px gutter, 32px padding, 26px title, 16px text.
*/
export default function GetInvolvedGiftSection() {
  const { title, text, buttonLabel, buttonHref } = GIVE_GIFT;

  return (
    <section
      aria-labelledby="give-gift-title"
      className="relative z-10 bg-white px-6 pb-3 pt-4 lg:px-[1.3vw] lg:pb-[3vw] lg:pt-[1.3vw]"
    >
      <div className="rounded-3xl bg-[#e8eeee] px-8 py-8 text-ra-teal lg:rounded-[1.5vw] lg:px-[2.5vw] lg:py-[2.5vw]">
        <h2
          id="give-gift-title"
          className="text-[26px] font-semibold leading-[1.15] lg:text-[2.83vw] lg:leading-[1.23]"
        >
          {title}
        </h2>
        <p className="mt-6 text-base leading-[1.5] text-[#0d3a3f] sm:text-lg lg:mt-[2vw] lg:text-[1.58vw]">
          {text}
        </p>
        <SmartLink
          href={buttonHref}
          className="mt-12 inline-flex h-[51px] items-center rounded-[4px] bg-ra-teal px-[13px] text-[13px] font-semibold text-white transition-[background-color,transform] duration-300 hover:-translate-y-px hover:bg-[#0f3d43] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ra-teal sm:mt-14 sm:text-[15px] lg:mt-[3.8vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
        >
          {buttonLabel}
        </SmartLink>
      </div>
    </section>
  );
}
