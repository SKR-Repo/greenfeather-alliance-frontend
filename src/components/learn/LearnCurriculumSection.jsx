import { LEARN_CURRICULUM } from "../../data/learnSections";
import SmartLink from "../common/SmartLink";

/*
  Learn section 5 — sage (#F4F8EA) rounded panel: rounded photo on the left, text on the right.
  Desktop (lg+): two equal columns, sizes in vw (measured at 1900px wide): 1.3vw page gutter,
  2.5vw side padding, 3.8vw between the columns, photo 3:2 with a 0.75vw radius, title 2.8vw, text 1.58vw.
  The text block is centred against the photo. Mobile: photo on top, then title, text and button.
*/
export default function LearnCurriculumSection() {
  const { image, alt, title, text, linkLabel, href } = LEARN_CURRICULUM;

  return (
    <section aria-labelledby="learn-curriculum-title" className="relative z-10 bg-white px-6 pb-8 pt-6 lg:px-[1.3vw] lg:pb-[3vw] lg:pt-[3vw]">
      <div className="grid items-center gap-8 rounded-3xl bg-[#f4f8ea] px-8 py-9 lg:grid-cols-2 lg:gap-[3.8vw] lg:rounded-[1.4vw] lg:px-[2.5vw] lg:py-[4.1vw]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="aspect-[3/2] w-full rounded-2xl object-cover lg:rounded-[0.75vw]"
        />

        <div>
          <h2
            id="learn-curriculum-title"
            className="font-body text-[1.4rem] font-semibold leading-[1.33] tracking-tight text-ra-teal sm:text-4xl lg:text-[2.8vw] lg:leading-[1.28]"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-[1.5] text-[#0d2d30] sm:text-lg lg:mt-[1.9vw] lg:text-[1.58vw]">{text}</p>
          <SmartLink
            href={href}
            className="mt-12 inline-flex h-[3.2rem] items-center rounded-[4px] bg-ra-teal px-5 text-[0.95rem] font-semibold text-white transition-[filter,transform] duration-300 hover:brightness-125 active:scale-[0.98] sm:text-base lg:mt-[3.8vw] lg:h-[4.4vw] lg:rounded-[0.25vw] lg:px-[1vw] lg:text-[1.3vw]"
          >
            {linkLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
