import { GIVE_ALLIANCE } from "../../data/getInvolvedSections";
import SmartLink from "../common/SmartLink";

/*
  Get Involved section 9 — rounded forest-photo card with a PARALLAX background.

  Same technique as ParallaxHero / WorkRegionsSection already used on the site: the photo is a
  `position: fixed` layer and the card is clipped with a rounded `clip-path`, so the card glides
  over a frozen photo while you scroll (fixed <img> instead of background-attachment: fixed,
  which is broken on iOS). A dark-green veil from the bottom keeps the copy readable.
  Copy is pinned bottom-left. Desktop sizes are in vw (measured at 1900px): card 53vw high.
*/
export default function GetInvolvedAllianceSection() {
  const { image, title, text, buttonLabel, buttonHref } = GIVE_ALLIANCE;

  return (
    <section
      aria-labelledby="give-alliance-title"
      className="relative z-10 bg-white px-6 pb-3 pt-3 lg:px-[1.3vw] lg:pb-[2vw] lg:pt-[1.3vw]"
    >
      <div className="relative isolate flex min-h-[150vw] items-end rounded-3xl bg-ra-teal [clip-path:inset(0_round_1.5rem)] sm:min-h-[70vw] lg:min-h-[53vw] lg:rounded-[1.5vw] lg:[clip-path:inset(0_round_1.5vw)]">
        {/* frozen photo layer */}
        <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh">
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-[30%_center] lg:object-center"
          />
        </div>
        {/* readability veil (moves with the card) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-[5] bg-[linear-gradient(to_top,rgba(16,63,60,0.92),rgba(16,63,60,0.55)_38%,rgba(16,63,60,0.08)_70%,rgba(16,63,60,0)_100%)]"
        />

        <div className="w-full px-3 pb-4 text-white sm:px-8 sm:pb-8 lg:px-[2.5vw] lg:pb-[2.5vw]">
          <h2
            id="give-alliance-title"
            className="text-[26px] font-semibold leading-[1.18] tracking-tight sm:text-4xl lg:text-[2.95vw] lg:leading-[1.2]"
          >
            {title}
          </h2>
          <p className="mt-4 text-base leading-[1.5] sm:text-lg lg:mt-[1.5vw] lg:max-w-[68vw] lg:text-[1.58vw]">
            {text}
          </p>
          <SmartLink
            href={buttonHref}
            className="mt-5 inline-flex h-[51px] items-center rounded-[4px] bg-ra-yellow px-[13px] text-[13px] font-semibold text-ra-teal transition-[filter,transform] duration-300 hover:-translate-y-px hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[15px] lg:mt-[1.6vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
