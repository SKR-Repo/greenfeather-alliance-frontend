import { ASSETS } from "../../constants/assets";
import { GIVE_DONATE } from "../../data/getInvolvedSections";
import SmartLink from "../common/SmartLink";
import { CardIcon } from "./GiveIcons";

/*
  Get Involved section 4 — "Donate today": static photo background (NO parallax), dark veil,
  everything centred: card icon, title, copy, then two yellow buttons on one line.
  Mobile: narrow text column (px-14); the buttons wrap onto two rows when they don't fit.
  Desktop sizes are vw-based (measured at 1897px wide): 7.6vw top/bottom padding, 3.8vw icon,
  2.83vw title, 1.58vw copy, 4.4vw-tall buttons with a 0.8vw gap.
*/
export default function GetInvolvedDonateSection() {
  const { alt, title, text, buttons } = GIVE_DONATE;

  return (
    <section
      aria-labelledby="give-donate-title"
      className="relative z-10 isolate overflow-hidden bg-ra-teal text-center text-white mt-10"
    >
      <img
        src={ASSETS.getInvolvedDonate}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-auto flex max-w-[34rem] flex-col items-center px-14 py-16 lg:max-w-none lg:px-[3.8vw] lg:py-[7.6vw]">
        <CardIcon className="h-[39px] w-12 lg:h-[3.05vw] lg:w-[3.8vw]" />

        <h2
          id="give-donate-title"
          className="mt-12 text-[40px] font-semibold leading-[1.1] lg:mt-[4.4vw] lg:text-[2.83vw] lg:leading-[1.26]"
        >
          {title}
        </h2>

        <p className="mt-10 text-base leading-[1.5] sm:text-lg lg:mt-[4.4vw] lg:max-w-[68vw] lg:text-[1.58vw] lg:leading-[1.5]">
          {text}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 lg:mt-[3.2vw] lg:gap-[0.8vw]">
          {buttons.map(({ label, href }) => (
            <SmartLink
              key={label}
              href={href}
              className="inline-flex h-[51px] items-center rounded-[4px] bg-[#ffe030] px-[13px] text-[13px] font-semibold text-ra-teal transition-[filter,transform] duration-300 hover:-translate-y-px hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[15px] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1.05vw] lg:text-[1.28vw]"
            >
              {label}
            </SmartLink>
          ))}
        </div>
      </div>
    </section>
  );
}
