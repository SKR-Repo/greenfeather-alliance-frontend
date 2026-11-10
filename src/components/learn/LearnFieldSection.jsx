import { LEARN_FIELD } from "../../data/learnSections";
import SmartLink from "../common/SmartLink";

/*
  Learn section 3 — small rounded sage (#F4F8EA) banner: title, text, button, all left aligned.
  Desktop (lg+) sizes are in vw, measured at 1900px wide: 1.3vw page gutter, 2.5vw inner padding,
  title 2.7vw, text 1.58vw. Mobile: 24px gutter, 32px inner padding.
*/
export default function LearnFieldSection() {
  const { title, text, linkLabel, href } = LEARN_FIELD;

  return (
    <section aria-labelledby="learn-field-title" className="relative z-10 bg-white px-6 pb-10 pt-6 lg:px-[1.3vw] lg:pb-[4.9vw] lg:pt-[4.9vw]">
      <div className="rounded-3xl bg-[#f4f8ea] px-8 pb-10 pt-9 lg:rounded-[1.4vw] lg:px-[2.5vw] lg:pb-[2.5vw] lg:pt-[2.7vw]">
        <h2
          id="learn-field-title"
          className="font-body text-[1.4rem] font-semibold leading-[1.33] tracking-tight text-ra-teal sm:text-4xl lg:text-[2.7vw] lg:leading-[1.2]"
        >
          {title}
        </h2>
        <p className="mt-5 text-base leading-[1.5] text-[#0d2d30] sm:text-lg lg:mt-[2.1vw] lg:text-[1.58vw]">{text}</p>
        <SmartLink
          href={href}
          className="mt-12 inline-flex h-[3.2rem] items-center rounded-[4px] bg-ra-teal px-5 text-[0.95rem] font-semibold text-white transition-[filter,transform] duration-300 hover:brightness-125 active:scale-[0.98] sm:text-base lg:mt-[3.8vw] lg:h-[4.4vw] lg:rounded-[0.25vw] lg:px-[1vw] lg:text-[1.3vw]"
        >
          {linkLabel}
        </SmartLink>
      </div>
    </section>
  );
}
