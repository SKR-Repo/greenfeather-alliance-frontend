import { ASSETS } from "../../constants/assets";
import { WORK_REGIONS } from "../../data/workSections";
import SmartLink from "../common/SmartLink";

/*
  Our Work section 7 — rounded sage card with the world map as a PARALLAX background.

  Same trick as ParallaxHero: the map is a `position: fixed` layer and the card is clipped with
  `clip-path` (rounded), so while you scroll the card slides over a frozen map.
  A sage fade on the left keeps the copy readable; the map shows through on the right
  (desktop) / behind the text (mobile).
  Content is bottom-aligned (like the live site). Desktop sizes are in vw.
*/
export default function WorkRegionsSection() {
  const { tag, title, text, buttonLabel, buttonHref, imageAlt } = WORK_REGIONS;

  return (
    <section aria-labelledby="work-regions-title" className="px-6 py-6 lg:px-[1.3vw] lg:py-[1.3vw]">
      <div className="relative isolate rounded-3xl bg-[#e8eeee] text-ra-teal [clip-path:inset(0_round_1.5rem)] lg:rounded-[1.5vw] lg:[clip-path:inset(0_round_1.5vw)]">
        {/* frozen map layer */}
        <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh">
          <img
            src={ASSETS.workRegionsMap}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-[78%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(232,238,238,0.9)_0%,rgba(232,238,238,0.45)_60%,rgba(232,238,238,0)_100%)] lg:bg-[linear-gradient(90deg,#e8eeee_0%,rgba(232,238,238,0.88)_30%,rgba(232,238,238,0)_55%)]" />
        </div>

        <div className="relative z-10 flex flex-col justify-end px-3 pb-5 pt-8 lg:min-h-[36.3vw] lg:p-[2.5vw]">
          <p className="text-sm font-semibold uppercase leading-none lg:text-[1.1vw]">{tag}</p>

          <h2
            id="work-regions-title"
            className="mt-5 text-[26px] font-semibold leading-[1.15] lg:mt-[1.6vw] lg:text-[2.83vw] lg:leading-[1.26]"
          >
            {title}
          </h2>

          <p className="mt-4 text-base leading-[1.5] sm:text-lg lg:mt-[1.4vw] lg:max-w-[46vw] lg:text-[1.58vw]">
            {text}
          </p>

          <SmartLink
            href={buttonHref}
            className="mt-4 inline-flex h-[51px] w-fit items-center rounded-[4px] bg-ra-teal px-[13px] text-[13px] font-semibold text-white transition-colors hover:bg-[#0f3d43] lg:mt-[1.6vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
