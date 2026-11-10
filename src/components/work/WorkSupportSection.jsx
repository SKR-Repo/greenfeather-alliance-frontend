import { ASSETS } from "../../constants/assets";
import { WORK_SUPPORT } from "../../data/workSections";
import SmartLink from "../common/SmartLink";

/*
  Our Work section 8 (last) — rounded photo card, copy + yellow button anchored bottom-left
  over a dark gradient. Mobile: tall portrait card; desktop: ≈1.675 : 1 (97vw wide).
*/
export default function WorkSupportSection() {
  const { title, text, buttonLabel, buttonHref, imageAlt } = WORK_SUPPORT;

  return (
    <section aria-labelledby="work-support-title" className="relative z-10 border-b border-black/10 bg-white px-6 pb-8 pt-4 sm:px-8 sm:pb-10 lg:px-[1.3vw] lg:pb-[3.9vw] lg:pt-[3.7vw]">
      <div className="relative isolate flex min-h-[36rem] items-end overflow-hidden rounded-3xl bg-ra-teal text-white lg:aspect-[1.675/1] lg:min-h-0 lg:rounded-[1.5vw]">
        <img
          src={ASSETS.workSupport}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[62%_center] lg:object-[center_35%]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        <div className="w-full px-3 pb-3 lg:p-[2.5vw]">
          <h2
            id="work-support-title"
            className="text-[26px] font-semibold leading-[1.15] lg:text-[2.83vw] lg:leading-[1.26]"
          >
            {title}
          </h2>

          <p className="mt-4 text-base leading-[1.5] sm:text-lg lg:mt-[1.3vw] lg:text-[1.58vw]">{text}</p>

          <SmartLink
            href={buttonHref}
            className="mt-4 inline-flex h-[51px] items-center rounded-[4px] bg-[#ffe030] px-[13px] text-[13px] font-semibold text-ra-teal transition-[filter] hover:brightness-95 lg:mt-[1.6vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
