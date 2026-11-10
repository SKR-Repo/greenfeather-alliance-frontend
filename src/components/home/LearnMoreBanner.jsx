import { LEARN_MORE } from "../../data/homeSections";
import SmartLink from "../common/SmartLink";

/*
  Home section 11 (last) — rounded photo card, text pinned to the bottom-left over a green veil.
  The thin line under it (border-b) is the divider between the home page and the footer.
  Desktop: 1.3vw gutter, card height 57.8vw, text inset 2.5vw (measured at 1903px wide).
*/
export default function LearnMoreBanner() {
  const { image, alt, title, text, linkLabel, href } = LEARN_MORE;

  return (
    <section aria-labelledby="learn-more-title" className="relative z-10 border-b border-black/10 bg-white px-6 pb-8 pt-4 sm:px-8 sm:pb-10 lg:px-[1.3vw] lg:pb-[3.9vw] lg:pt-[3.7vw]">
      <div className="relative isolate flex min-h-[150vw] items-end overflow-hidden rounded-[22px] sm:min-h-[70vw] lg:min-h-[57.8vw] lg:rounded-[1.6vw]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover object-[18%_center] lg:object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(16,63,60,0.93),rgba(16,63,60,0.55)_40%,rgba(16,63,60,0.08)_72%,rgba(16,63,60,0)_100%)]"
        />

        <div className="w-full px-4 pb-4 text-white sm:px-8 sm:pb-8 lg:px-[2.5vw] lg:pb-[2.5vw]">
          <h2 id="learn-more-title" className="max-w-[16rem] font-body text-2xl font-semibold leading-[1.2] tracking-tight sm:max-w-none sm:text-4xl lg:text-[2.65vw]">
            {title}
          </h2>
          <p className="mt-3 text-base leading-[1.5] sm:text-lg lg:mt-[1.2vw] lg:text-[1.6vw]">{text}</p>
          <SmartLink
            href={href}
            className="mt-6 inline-flex h-[3.2rem] items-center rounded-[4px] bg-ra-yellow px-3 text-[0.98rem] font-semibold text-ra-teal transition-[filter,transform] duration-300 hover:brightness-95 active:scale-[0.98] sm:px-5 sm:text-lg lg:mt-[2.1vw] lg:h-[4.4vw] lg:rounded-[0.25vw] lg:px-[1vw] lg:text-[1.3vw]"
          >
            {linkLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
