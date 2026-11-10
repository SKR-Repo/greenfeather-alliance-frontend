import { Link } from "react-router-dom";
import { FOR_BUSINESS_SERVICES } from "../../data/forBusinessSections";
import { ChevronRight } from "../common/Icons";
import { SERVICE_ICONS } from "./ServiceIcons";

/*
  For Business section 5 — "Other services".

  Same pale dotted page as the certification section (#F4F7EA + #E9EFDD dots on a fixed, clipped
  layer = parallax). Title, description, then FOUR white cards stacked in one centred column
  (43.5vw wide on desktop, full width up to 34rem on small screens).

  Card: icon on top, title, description, bold blue link. Desktop sizes are in vw (measured at
  1896px wide); the per-card gaps live in data/forBusinessSections.js (descGap / linkGap).
*/
function ServiceCard({ card }) {
  const { icon, title, text, linkLabel, href, descGap = "lg:mt-[2.75vw]", linkGap = "lg:mt-[5.35vw]" } = card;
  const Icon = SERVICE_ICONS[icon];

  return (
    <article className="flex flex-col rounded-[19px] bg-white px-[2.4rem] pb-6 pt-6 shadow-[0_2px_10px_rgba(23,84,91,0.14)] lg:rounded-[1.6vw] lg:px-[3.75vw] lg:pb-[2vw] lg:pt-[2.3vw]">
      <Icon className="size-[4.25rem] text-ra-teal lg:size-[5.4vw]" />

      <h3 className="mt-[3.9rem] font-body text-[1.3rem] font-semibold leading-[1.2] tracking-[-0.01em] text-ra-teal lg:mt-[5.3vw] lg:text-[2.25vw] lg:leading-[1.23]">
        {title}
      </h3>

      <p className={`mt-9 text-[14px] leading-[1.5] text-[#0d2d30] lg:text-[1.11vw] ${descGap}`}>{text}</p>

      <Link
        to={href}
        className={`group mt-12 inline-flex items-center self-start text-[15px] font-semibold leading-[1.5] text-[#1a52c2] transition-colors hover:underline hover:underline-offset-4 lg:text-[1.615vw] ${linkGap}`}
      >
        {linkLabel}
        <ChevronRight
          strokeWidth={3.6}
          className="ml-[0.3em] size-[0.72em] transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}

export default function ForBusinessServicesSection() {
  const { title, text, cards } = FOR_BUSINESS_SERVICES;

  return (
    <section
      aria-labelledby="fb-services-title"
      className="relative isolate overflow-hidden bg-[#f4f7ea] px-[2.2rem] pb-10 pt-24 text-center [clip-path:inset(0)] lg:px-0 lg:pb-[5.2vw] lg:pt-[7.7vw]"
    >
      {/* frozen dot grid (parallax) — same as the certification section */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh bg-[radial-gradient(#e9efdd_1.7px,transparent_2.1px)] [background-size:22.5px_23.5px]"
      />

      <h2
        id="fb-services-title"
        className="mx-auto max-w-[17rem] font-body text-[clamp(1.9rem,12.4vw,2.9rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-ra-teal sm:max-w-[34rem] lg:max-w-[80vw] lg:text-[5.1vw] lg:leading-[1.21] lg:tracking-normal"
      >
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-[13.8rem] text-base leading-[1.5] text-[#0d2d30] sm:max-w-[34rem] sm:text-lg lg:mt-[1.8vw] lg:max-w-[62.8vw] lg:text-[1.58vw]">
        {text}
      </p>

      <div className="mx-auto mt-10 flex max-w-[34rem] flex-col gap-3 text-left lg:mt-[1.6vw] lg:max-w-none lg:w-[43.5vw] lg:gap-[0.63vw]">
        {cards.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
