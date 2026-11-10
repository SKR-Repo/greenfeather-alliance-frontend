import { IMPACT_TRANSFORM } from "../../data/impactClosing";
import { ChevronRight } from "../common/Icons";
import SmartLink from "../common/SmartLink";

/* Big (≈7vw) brand-teal line icons for the two cards. */
function BigIcon({ name, className = "" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 5, strokeLinecap: "round", strokeLinejoin: "round" };
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={className}>
      {name === "checklist" ? (
        <g {...common}>
          <rect x="5" y="6" width="17" height="17" rx="4" />
          <path d="m5 44 8 8 13-15" />
          <path d="M33 14.5h26M33 34h26M33 53h26" />
        </g>
      ) : (
        <g {...common}>
          <circle cx="32" cy="22" r="18" />
          <path d="m21 38-6 21 17-6 17 6-6-21" />
        </g>
      )}
    </svg>
  );
}

/*
  Our Impact section 5 — centred title + intro (with two inline links) and two sage cards.
  Desktop (lg+): the pair is 78vw wide, centred; sizes are in vw like the rest of the page.
  Mobile: cards stack, copy stays centred.
*/
export default function ImpactTransformSection() {
  const { title, text, cards } = IMPACT_TRANSFORM;

  return (
    <section aria-labelledby="impact-transform-title" className="bg-white px-4 pb-10 pt-14 text-center text-ra-teal lg:px-0 lg:pb-[6vw] lg:pt-[7.5vw]">
      <h2
        id="impact-transform-title"
        className="mx-auto max-w-[17.5rem] text-[34px] font-semibold leading-[1.27] sm:max-w-[34rem] lg:max-w-[60vw] lg:text-[4.1vw] lg:leading-[1.25]"
      >
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-[40rem] text-base leading-[1.5] text-[#0b1f21] lg:mt-[1.7vw] lg:max-w-[67vw] lg:text-[1.58vw]">
        {text.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <SmartLink key={i} href={part.href} className="text-[#1f4fc9] underline transition-opacity hover:opacity-75">
              {part.link}
            </SmartLink>
          ),
        )}
      </p>

      <ul className="mx-auto mt-8 grid max-w-[40rem] gap-2.5 lg:mt-[1.3vw] lg:max-w-none lg:grid-cols-2 lg:gap-[0.8vw] lg:px-[10.9vw]">
        {cards.map(({ id, icon, title: cardTitle, text: cardText, linkLabel, href }) => (
          <li key={id} className="flex flex-col items-center rounded-xl bg-[#e8eeee] px-6 pb-10 pt-9 lg:rounded-[1.1vw] lg:px-[3vw] lg:pb-[3.6vw] lg:pt-[2.5vw]">
            <BigIcon name={icon} className="size-20 text-[#175259] lg:size-[7.2vw]" />

            <h3 className="mt-8 max-w-[17rem] text-xl font-semibold leading-tight text-[#0b0b0b] lg:mt-[3.8vw] lg:max-w-[34vw] lg:text-[2.2vw] lg:leading-[1.27]">
              {cardTitle}
            </h3>
            <p className="mt-3 text-sm leading-[1.5] text-[#0b1f21] lg:mt-[1vw] lg:text-[1.1vw] lg:leading-[1.5]">{cardText}</p>

            <SmartLink
              href={href}
              className="group mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#1f4fc9] lg:mt-[3.4vw] lg:gap-[0.4vw] lg:text-[1.2vw]"
            >
              <span className="underline-offset-4 group-hover:underline">{linkLabel}</span>
              <ChevronRight strokeWidth={2.6} className="size-[0.9em] transition-transform duration-300 group-hover:translate-x-1" />
            </SmartLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
