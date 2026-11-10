import { IMPACT_REPORT } from "../../data/impactClosing";
import SmartLink from "../common/SmartLink";

function ScrollIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d="M8 3.5h9.5a1.5 1.5 0 0 1 1.5 1.5v12" />
      <path d="M8 3.5A2.5 2.5 0 0 0 5.5 6v11a3 3 0 0 0 3 3h10a2.5 2.5 0 0 0 2.5-2.5V17H9" />
      <path d="M9 8.5h6.5M9 12h6.5" />
    </svg>
  );
}

/*
  Our Impact section 6 — annual-report teaser (image left / copy right; image on top on mobile)
  followed by the numbered footnotes 1-9. White background.
  Desktop sizes are in vw: content 78vw wide, footnotes start at 16.8vw (same as "The power of our alliance").
*/
export default function ImpactReportSection() {
  const { image, imageAlt, title, text, buttonLabel, buttonHref, footnotes } = IMPACT_REPORT;

  return (
    <section aria-labelledby="impact-report-title" className="bg-white pb-14 pt-12 border-b border-black/10 text-ra-teal lg:pb-[5vw] lg:pt-[4vw]">
      <div className="mx-auto flex max-w-[40rem] flex-col gap-16 px-4 lg:max-w-none lg:flex-row lg:items-center lg:gap-[2.4vw] lg:px-[10.9vw]">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className="aspect-[1.337/1] w-full rounded-xl object-cover lg:w-[35.6vw] lg:shrink-0 lg:rounded-[0.7vw]"
        />

        <div className="px-10 lg:px-0">
          <ScrollIcon className="size-14 lg:size-[4.7vw]" />
          <h2 id="impact-report-title" className="mt-4 text-[26px] font-semibold leading-[1.2] lg:mt-[1.4vw] lg:text-[2.85vw]">
            {title}
          </h2>
          <p className="mt-4 text-base leading-[1.5] text-[#0b1f21] lg:mt-[1.3vw] lg:max-w-[37vw] lg:text-[1.58vw]">{text}</p>
          <SmartLink
            href={buttonHref}
            className="mt-5 inline-flex h-[51px] items-center rounded-[4px] bg-[#175259] px-[13px] text-[13px] font-semibold text-white transition-colors hover:bg-[#0f3d43] lg:mt-[1.6vw] lg:h-[4.4vw] lg:rounded-[0.35vw] lg:px-[1vw] lg:text-[1.28vw]"
          >
            {buttonLabel}
          </SmartLink>
        </div>
      </div>

      <ol aria-label="Footnotes" className="mx-auto mt-20 max-w-[40rem] px-4 text-[13px] leading-[1.5] text-[#0b1f21] lg:mt-[10vw] lg:max-w-[65vw] lg:px-0 lg:text-[1vw] lg:leading-[1.55] lg:[margin-left:16.8vw]">
        {footnotes.map((note, i) => (
          <li key={i} id={`footnote-${i + 1}`} className="mb-4 lg:mb-[1vw]">
            {i + 1}: {note}
          </li>
        ))}
      </ol>
    </section>
  );
}
