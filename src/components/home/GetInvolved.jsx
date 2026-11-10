import { GET_INVOLVED } from "../../data/homeSections";
import { ChevronRight } from "../common/Icons";
import SmartLink from "../common/SmartLink";

/*
  Home section 8 — "Other ways to get involved": title + ONE row of 3 icon links.
  Mobile: the three links stack in a single centred column.
  The outline icons are drawn here (48×48 viewBox, round caps) so no image files are needed.
*/
const ICONS = {
  card: (
    <>
      <rect x="5" y="9" width="38" height="30" rx="8.5" />
      <path d="M5 19h38M12 29h5" />
    </>
  ),
  users: (
    <>
      <circle cx="18" cy="12.5" r="8.5" />
      <rect x="4" y="29" width="29" height="12" rx="6" />
      <path d="M32 5.5a8.5 8.5 0 0 1 0 14M40 29.5a6.5 6.5 0 0 1 0 11.5" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.6a2 2 0 0 1 2 1.6L13.5 28a2.2 2.2 0 0 0 2.1 1.7l17.4.8a2.3 2.3 0 0 0 2.3-1.7l3.2-12.6a2.5 2.5 0 0 0-2.4-3.1H19" />
      <circle cx="16" cy="40.5" r="1.4" fill="currentColor" />
      <circle cx="33" cy="40.5" r="1.4" fill="currentColor" />
    </>
  ),
};

function LinkIcon({ name }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="size-28 text-ra-teal transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105 sm:size-32 lg:size-[9vw]"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function GetInvolved() {
  const { title, links } = GET_INVOLVED;

  return (
    <section aria-labelledby="get-involved-title" className="relative z-10 overflow-x-clip bg-white px-6 py-16 text-center sm:py-20 lg:px-0 lg:pb-[8vw] lg:pt-[7vw]">
      <h2
        id="get-involved-title"
        className="font-body text-[1.45rem] font-semibold leading-tight tracking-tight text-ra-teal sm:text-4xl lg:text-[2.75vw]"
      >
        {title}
      </h2>

      <ul className="mt-12 flex flex-col items-center gap-10 sm:mt-14 lg:mt-[5vw] lg:grid lg:grid-cols-3 lg:items-start lg:gap-0">
        {links.map(({ icon, label, href }) => (
          <li key={label}>
            <SmartLink href={href} className="group flex flex-col items-center gap-4 outline-offset-8 lg:gap-[2vw]">
              <LinkIcon name={icon} />
              <span className="inline-flex items-center font-body text-[1.35rem] font-semibold leading-none text-[#1f56c3] group-hover:underline group-hover:underline-offset-[6px] sm:text-2xl lg:text-[2.1vw]">
                {label}
                <ChevronRight
                  strokeWidth={3}
                  className="ml-[0.3em] size-[0.7em] transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </SmartLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
