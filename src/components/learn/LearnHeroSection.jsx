import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ASSETS } from "../../constants/assets";
import { LEARN_HERO } from "../../data/learnSections";
import { SearchIcon } from "../common/Icons";

/*
  Learn hero — NOT the walk-over ParallaxHero. A pale (#F4F9EA) page with a dot grid (#E1E6D1) and the
  big pale frog artwork pinned to the right; everything is centred: icon, title, text, search.
  The navbar floats over this pale hero in its "light" style (teal logo / links / Give button) because
  "/learn" is listed in LIGHT_ROUTES in components/layout/Navbar.jsx.

  Desktop (lg+) sizes are in vw (measured at 1896px wide): title 5.2vw, text 1.58vw, search 34.3vw wide.
  Mobile / tablet: same stack, rem sizes.
*/
const ScrollIcon = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={className}
  >
    <path d="M15 33V9a4 4 0 0 1 4-4h17a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H9a4 4 0 0 1 0-8h6" />
    <path d="M22 14h12M22 21h6" />
  </svg>
);

export default function LearnHeroSection() {
  const { title, text, searchLabel } = LEARN_HERO;
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <section
      aria-labelledby="learn-hero-title"
      className="relative isolate overflow-hidden bg-[#f4f9ea] bg-[radial-gradient(#e1e6d1_1.6px,transparent_1.7px)] [background-size:26px_26px] px-[11vw] pb-16 pt-[10.3rem] text-center lg:px-[4vw] lg:pb-[6vw] lg:pt-[12.5vw]"
    >
      {/* pale frog artwork, pinned to the right edge at full hero height */}
      <img
        src={ASSETS.learnHero}
        alt=""
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-auto max-w-none select-none"
      />

      <ScrollIcon className="mx-auto size-[3.8rem] text-ra-teal lg:size-[4.85vw]" />

      <h1
        id="learn-hero-title"
        className="mt-8 font-hero text-[1.75rem] font-black uppercase leading-[1.3] tracking-[-0.03em] text-ra-teal sm:text-5xl lg:mt-[4.5vw] lg:whitespace-nowrap lg:text-[5.2vw] lg:leading-none lg:tracking-[-0.06em]"
      >
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-[22rem] text-base leading-[1.5] text-[#0d2d30] sm:max-w-2xl sm:text-lg lg:mt-[4vw] lg:max-w-[67vw] lg:text-[1.58vw]">
        {text}
      </p>

      <form
        role="search"
        onSubmit={submit}
        className="mx-auto mt-24 flex max-w-[22rem] items-stretch gap-2.5 sm:max-w-md lg:mt-[7.9vw] lg:w-[34.3vw] lg:max-w-none lg:gap-[0.7vw]"
      >
        <label htmlFor="learn-search" className="sr-only">
          {searchLabel}
        </label>
        <input
          id="learn-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchLabel}
          autoComplete="off"
          className="h-11 min-w-0 flex-1 rounded-[4px] border border-[#dcdfd2] bg-white px-3 text-sm text-[#0d2d30] outline-none placeholder:text-[#777] focus:border-ra-teal focus:ring-4 focus:ring-ra-teal/25 sm:h-12 sm:text-base lg:h-[3.8vw] lg:px-[0.7vw] lg:text-[1.64vw]"
        />
        <button
          type="submit"
          aria-label="Search"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[4px] bg-ra-teal text-white transition-[filter,transform] duration-300 hover:brightness-125 active:scale-95 sm:h-12 sm:w-12 lg:h-[3.8vw] lg:w-[3.3vw]"
        >
          <SearchIcon className="size-5 lg:size-[1.5vw]" />
        </button>
      </form>
    </section>
  );
}
