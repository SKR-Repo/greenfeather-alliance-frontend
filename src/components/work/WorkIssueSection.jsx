import { useRef } from "react";
import useInView from "../../hooks/useInView";
import SmartLink from "../common/SmartLink";

/*
  Our Work sections 3-6 — one white row: rounded square image + text (tag, title, copy, link buttons).
  `reverse` puts the image on the RIGHT (desktop). Mobile / tablet: image on top, text below.

  Image zoom: starts zoomed in (scale-[1.35]), eases out to normal when the row scrolls into view
  and holds; resets when the row is completely off screen so it replays on the next visit.
  Desktop sizes are in vw (side padding 3.8vw, 3.8vw gap, two equal columns → 44vw square image).
*/
function ScrollIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M8 3.5h9.5a1.5 1.5 0 0 1 1.5 1.5v12" />
      <path d="M8 3.5A2.5 2.5 0 0 0 5.5 6v11a3 3 0 0 0 3 3h10a2.5 2.5 0 0 0 2.5-2.5V17H9" />
      <path d="M9 8.5h6.5M9 12h6.5" />
    </svg>
  );
}

export default function WorkIssueSection({ issue, reverse = false }) {
  const { id, tag, title, text, image, imageAlt, links } = issue;
  const ref = useRef(null);
  const inView = useInView(ref, 0.35);
  const titleId = `work-issue-${id}-title`;

  return (
    <section ref={ref} aria-labelledby={titleId} className="bg-white text-ra-teal">
      <div className="mx-auto grid max-w-[34rem] gap-14 px-14 py-12 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-[3.8vw] lg:px-[3.8vw] lg:py-[2.5vw]">
        {/* image */}
        <div
          className={`aspect-square w-full overflow-hidden rounded-3xl bg-[#e8eeee] lg:rounded-[1.5vw] ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className={`h-full w-full origin-center object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none ${
              inView ? "scale-100" : "scale-[1.35] motion-reduce:scale-100"
            }`}
          />
        </div>

        {/* text */}
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase leading-none lg:text-[1.1vw]">{tag}</p>

          <h2
            id={titleId}
            className="mt-10 text-[26px] font-semibold leading-[1.15] lg:mt-[2.2vw] lg:max-w-[44vw] lg:text-[2.85vw] lg:leading-[1.26]"
          >
            {title}
          </h2>

          <p className="mt-6 text-base leading-[1.5] sm:text-lg lg:mt-[2vw] lg:max-w-[44vw] lg:text-[1.58vw]">
            {text.map((part, i) =>
              typeof part === "string" ? <span key={i}>{part}</span> : <em key={i}>{part.em}</em>,
            )}
          </p>

          <ul className="mt-8 flex flex-col items-start gap-[9px] lg:mt-[1.9vw] lg:gap-[0.6vw]">
            {links.map(({ label, href }) => (
              <li key={href}>
                <SmartLink
                  href={href}
                  className="group inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#e4e6e6] bg-[#f7f7f7] px-[10px] text-[12px] leading-none text-[#0b1f21] shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-[box-shadow,transform,background-color] duration-300 ease-out hover:-translate-y-px hover:bg-[#f9f9f9] hover:shadow-[0_0_2px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.1),0_7px_10px_-3px_rgba(0,0,0,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ra-teal lg:h-[3.1vw] lg:gap-[0.55vw] lg:rounded-[0.3vw] lg:px-[0.7vw] lg:text-[0.94vw]"
                >
                  <ScrollIcon className="size-4 shrink-0 lg:size-[1.15vw]" />
                  <span>
                    <strong className="font-semibold">{label}</strong> • Learn more →
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
