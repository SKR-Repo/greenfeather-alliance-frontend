import { SEALS } from "../../data/homeSections";
import { ChevronRight } from "../common/Icons";
import SmartLink from "../common/SmartLink";

/*
  Home section 6 — dark teal (#17525A) band: product photo flush with the top edge,
  centred headline + paragraph + yellow button.
  Mobile text column is deliberately narrow (13.5rem) like the live mobile layout;
  it opens up at sm and becomes vw-based on desktop (1898px reference).
*/
export default function SealsBanner() {
  const { image, alt, title, text, linkLabel, href } = SEALS;

  return (
    <section aria-labelledby="seals-title" className="relative z-10 bg-[#17525a] pb-16 text-center text-white sm:pb-20 lg:pb-[6.5vw]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="mx-auto block h-auto w-[80%] max-w-3xl lg:w-[69.5vw] lg:max-w-none"
      />

      <div className="mx-auto mt-8 max-w-[13.5rem] sm:mt-10 sm:max-w-xl lg:mt-[2.6vw] lg:max-w-none">
        <h2
          id="seals-title"
          className="mx-auto font-body text-2xl font-semibold leading-[1.25] tracking-tight sm:text-4xl lg:w-[56vw] lg:text-[3vw] lg:leading-[1.22]"
        >
          {title}
        </h2>
        <p className="mx-auto mt-8 text-base leading-[1.55] sm:text-lg lg:mt-[3.4vw] lg:w-[58vw] lg:text-[1.58vw] lg:leading-[1.5]">
          {text}
        </p>
      </div>

      <SmartLink
        href={href}
        className="group mt-9 inline-flex max-w-[19rem] items-center justify-center rounded-[4px] bg-ra-yellow px-5 py-4 text-center font-body text-base font-semibold leading-snug text-ra-teal transition-[filter,transform] duration-300 hover:brightness-95 active:scale-[0.98] sm:max-w-none sm:px-6 sm:text-lg lg:mt-[3.3vw] lg:rounded-[0.25vw] lg:px-[1.05vw] lg:py-[1.7vw] lg:text-[1.3vw]"
      >
        <span>
          {linkLabel}
          <ChevronRight
            strokeWidth={3}
            className="ml-[0.35em] inline size-[0.8em] align-[-0.05em] transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </SmartLink>
    </section>
  );
}
