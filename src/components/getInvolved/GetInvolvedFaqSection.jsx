import { useState } from "react";
import { GIVE_FAQ } from "../../data/getInvolvedSections";
import Collapsible from "../common/Collapsible";
import { ChevronDown } from "../common/Icons";

/*
  Get Involved section 10 — FAQ accordion. Every question starts CLOSED; click to read the answer.
  Set SINGLE_OPEN = false to let several answers stay open at once.
  Desktop (measured at 1900px): list 54.2vw wide and centred, rows 4.5vw high with 0.35vw gaps,
  question 1.26vw semibold, answer 1.5vw.
*/
const SINGLE_OPEN = true;

export default function GetInvolvedFaqSection() {
  const { title, items } = GIVE_FAQ;
  const [open, setOpen] = useState(() => new Set()); // nothing open at first

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(SINGLE_OPEN ? [] : prev);
      if (!prev.has(i)) next.add(i);
      return next;
    });

  return (
    <section
      aria-labelledby="give-faq-title"
      className="relative z-10 bg-white px-4 pb-14 pt-12 border-b border-black/10 text-ra-teal sm:px-8 sm:pb-16 sm:pt-16 lg:px-0 lg:pb-[6vw] lg:pt-[5.2vw]"
    >
      <h2
        id="give-faq-title"
        className="text-center text-[26px] font-semibold leading-[1.2] sm:text-4xl lg:text-[2.95vw]"
      >
        {title}
      </h2>

      <ul className="mx-auto mt-8 max-w-3xl space-y-2 sm:mt-10 lg:mt-[2.7vw] lg:max-w-none lg:w-[54.2vw] lg:space-y-[0.35vw]">
        {items.map((item, i) => {
          const isOpen = open.has(i);
          return (
            <li
              key={item.q}
              className={`overflow-hidden rounded-[4px] border bg-white transition-shadow duration-300 ${
                isOpen
                  ? "border-[#c9d1d3] shadow-[0_2px_8px_rgba(16,63,60,0.12)]"
                  : "border-[#d6dcde] shadow-[0_1px_3px_rgba(16,63,60,0.1)] hover:shadow-[0_2px_6px_rgba(16,63,60,0.14)]"
              }`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-[0.98rem] font-semibold leading-[1.4] text-[#0d3a3f] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ra-teal sm:px-7 sm:text-lg lg:min-h-[4.5vw] lg:gap-[2vw] lg:px-[1.95vw] lg:py-[1.1vw] lg:text-[1.26vw]"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    strokeWidth={2.4}
                    className={`size-5 shrink-0 text-ra-teal transition-transform duration-300 lg:size-[1.15vw] ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </h3>

              <Collapsible open={isOpen}>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="mx-px border-t border-black/[0.05] px-5 pb-7 pt-5 sm:px-7 lg:px-[1.37vw] lg:pb-[2.9vw] lg:pt-[1.3vw]"
                >
                  <p className="text-base leading-[1.6] text-[#0d3a3f] sm:text-lg lg:text-[1.5vw] lg:leading-[1.58]">
                    {item.a}
                  </p>
                </div>
              </Collapsible>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
