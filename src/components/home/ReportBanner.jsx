import { Link } from "react-router-dom";
import { ANNUAL_REPORT } from "../../data/homeSections";
import { ChevronRight } from "../common/Icons";

/*
  Home section 2 — yellow annual-report strip, directly under the hero.
  Mobile: image on top, text below (stacked).  Desktop (lg+): image left, text right.
  Desktop sizes are in vw so the strip scales exactly like the live site.
*/
export default function ReportBanner() {
  const { image, alt, title, text, linkLabel, href } = ANNUAL_REPORT;

  return (
    <section
      aria-labelledby="annual-report-title"
      className="relative bg-[#ffe030] text-ra-teal"
    >
      <div className="mx-auto flex flex-col gap-6 px-9 py-12 sm:px-12 md:flex-row md:items-center md:gap-8 md:py-10 lg:gap-[1.9vw] lg:px-[4.5vw] lg:py-[3.4vw]">
        <Link
          to={href}
          aria-label={title}
          className="group block shrink-0 overflow-hidden rounded-[18px] md:w-[30%] lg:w-[15.1vw] lg:rounded-[0.85vw]"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="aspect-[1.92/1] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        <div className="min-w-0">
          <h2
            id="annual-report-title"
            className="font-body text-[1.6rem] font-semibold leading-[1.25] tracking-tight sm:text-3xl lg:text-[2.29vw] lg:leading-[1.2]"
          >
            {title}
          </h2>

          <p className="mt-5 text-[1.15rem] leading-[1.6] sm:text-xl lg:mt-[1.75vw] lg:text-[1.55vw] lg:leading-[1.4]">
            {text}{" "}
            <Link
              to={href}
              className="group inline-flex items-center whitespace-nowrap underline underline-offset-[5px] decoration-1 transition-opacity hover:opacity-75"
            >
              {linkLabel}
              <ChevronRight
                strokeWidth={2.2}
                className="ml-[0.15em] size-[0.8em] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
