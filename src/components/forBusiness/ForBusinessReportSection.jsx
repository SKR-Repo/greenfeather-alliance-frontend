import { Link } from "react-router-dom";
import { FOR_BUSINESS_REPORT } from "../../data/forBusinessSections";
import { ChevronRight } from "../common/Icons";

/*
  For Business section 2 — slim amber (#F6B939) annual-report strip directly under the hero.
  One centred line: report icon · sentence · blue "Read the report >" link.
  Desktop (lg+) sizes are in vw (measured at 1896px wide): text 1.58vw, icon 1.65vw, 4.1vw padding
  above and below. On mobile the icon sits beside the (wrapping) text, left aligned.
*/
const ReportIcon = ({ className }) => (
  <svg viewBox="0 0 32 32" aria-hidden className={className}>
    {/* paper */}
    <rect x="8" y="2" width="21" height="23" rx="3.5" fill="currentColor" />
    {/* text lines */}
    <path d="M14 9h11M14 14h11M14 19h6" stroke="#f6b939" strokeWidth="2.2" strokeLinecap="round" />
    {/* rolled bottom-left corner (outlined in the strip colour so it reads as a separate roll) */}
    <rect x="2" y="21" width="21" height="9" rx="4.5" fill="currentColor" stroke="#f6b939" strokeWidth="2" />
  </svg>
);

export default function ForBusinessReportSection() {
  const { text, linkLabel, href } = FOR_BUSINESS_REPORT;

  return (
    <section aria-label="Annual report" className="relative bg-[#f6b939] text-[#111]">
      <div className="mx-auto flex items-start justify-center gap-4 px-6 py-8 sm:py-10 lg:items-center lg:gap-[1.5vw] lg:px-[4vw] lg:py-[4.1vw]">
        <ReportIcon className="mt-0.5 size-7 shrink-0 sm:size-8 lg:mt-0 lg:size-[1.65vw]" />

        <p className="text-base leading-[1.5] sm:text-lg lg:text-[1.58vw]">
          {text}{" "}
          <Link
            to={href}
            className="group inline-flex items-center whitespace-nowrap text-[#1f56c3] underline-offset-4 transition-colors hover:underline"
          >
            {linkLabel}
            <ChevronRight
              strokeWidth={2.2}
              className="ml-[0.2em] size-[0.7em] transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </p>
      </div>
    </section>
  );
}
