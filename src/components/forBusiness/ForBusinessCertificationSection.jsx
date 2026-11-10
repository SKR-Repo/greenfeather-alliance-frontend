import { Link } from "react-router-dom";
import { ASSETS } from "../../constants/assets";
import { FOR_BUSINESS_CERTIFICATION } from "../../data/forBusinessSections";

/*
  For Business section 3 — "World leaders in agricultural certification".

  Pale green page (#F4F7EA) with a dot grid (#E9EFDD). The dots are painted on a `fixed` layer that
  the section clips (same trick as ParallaxHero), so they stay put while the text and the cards
  scroll over them = the parallax effect. (A fixed layer, not background-attachment: fixed,
  because that one is broken on iOS Safari.)

  Order: animated seals gif -> title -> description -> two white cards side by side.
  Desktop (lg+) sizes are in vw (measured at 1896px wide); below lg the cards stack.
  In each card the logo sits at the top and the button at the bottom; title + description sit in
  between, vertically centred a little above the middle (so a 2-line and a 3-line title line up
  with their buttons exactly like the live site).
*/
function CertificationCard({ card }) {
  const { logo, logoAlt, logoClassName, title, text, buttonLabel, href } = card;

  return (
    <article className="flex flex-col rounded-[19px] bg-white px-[2.4rem] pb-5 pt-5 shadow-[0_2px_10px_rgba(23,84,91,0.14)] lg:rounded-[1.6vw] lg:px-[3.75vw] lg:pb-[5.2vw] lg:pt-[1.95vw]">
      <img
        src={logo}
        alt={logoAlt}
        loading="lazy"
        decoding="async"
        className={`w-auto self-start ${logoClassName}`}
      />

      {/* title + description: spacers share the free height 3 : 5 (a bit more room below) */}
      <div className="flex flex-1 flex-col">
        <div className="min-h-[3.9rem] flex-[3_1_0%] lg:min-h-[3.85vw] lg:flex-[3_1_3.85vw]" />
        <div>
          <h3 className="font-body text-[1.55rem] font-semibold leading-[1.2] tracking-[-0.01em] text-ra-teal lg:max-w-[32.1vw] lg:text-[2.7vw] lg:leading-[1.23]">
            {title}
          </h3>
          <p className="mt-9 text-[14px] leading-[1.5] text-[#0d2d30] lg:mt-[2.8vw] lg:text-[1.11vw] lg:leading-[1.5]">
            {text}
          </p>
        </div>
        <div className="min-h-12 flex-[5_1_0%] lg:min-h-[4.75vw] lg:flex-[5_1_4.75vw]" />
      </div>

      <Link
        to={href}
        className="flex h-[3.2rem] items-center justify-center rounded-[4px] bg-ra-teal px-3 text-center text-[13px] font-semibold leading-none text-white transition-colors duration-200 hover:bg-ra-ink sm:text-sm lg:h-[4.43vw] lg:rounded-[0.32vw] lg:text-[1.27vw]"
      >
        {buttonLabel}
      </Link>
    </article>
  );
}

export default function ForBusinessCertificationSection() {
  const { title, text, sealsAlt, cards } = FOR_BUSINESS_CERTIFICATION;

  return (
    <section
      aria-labelledby="fb-certification-title"
      className="relative isolate overflow-hidden bg-[#f4f7ea] px-[2.2rem] pb-10 pt-[5.5rem] text-center [clip-path:inset(0)] lg:px-0 lg:pb-[5.2vw] lg:pt-[6.7vw]"
    >
      {/* frozen dot grid (parallax) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh bg-[radial-gradient(#e9efdd_1.7px,transparent_2.1px)] [background-size:22.5px_23.5px]"
      />

      <img
        src={ASSETS.forBusinessSeals}
        alt={sealsAlt}
        decoding="async"
        className="mx-auto size-[5.75rem] object-contain lg:size-[7.3vw]"
      />

      <h2
        id="fb-certification-title"
        className="mx-auto mt-3 max-w-[17rem] font-body text-[clamp(1.9rem,12.4vw,2.9rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-ra-teal sm:max-w-[34rem] lg:mt-[1.7vw] lg:max-w-[80vw] lg:text-[5.1vw] lg:leading-[1.21] lg:tracking-normal"
      >
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-[14rem] text-left text-base leading-[1.5] text-[#0d2d30] sm:max-w-[34rem] sm:text-lg lg:mt-[2vw] lg:max-w-[62.8vw] lg:text-[1.58vw]">
        {text}
      </p>

      <div className="mx-auto mt-9 grid max-w-[34rem] grid-cols-1 gap-3 text-left lg:mt-[1.6vw] lg:max-w-none lg:grid-cols-2 lg:gap-[0.63vw] lg:px-[9.55vw]">
        {cards.map((card) => (
          <CertificationCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
