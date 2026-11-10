import { useEffect, useRef } from "react";
import { THANK_YOU } from "../../data/getStartedSections";

/*
  Final screen: replaces the whole section (heading + form) like the live site's thank-you page.
  Desktop measures (1893px capture): column ≈ 36vw, centred; title ≈ 2.4vw; text ≈ 1.2vw.
*/
export default function GetStartedThankYou({ onReturn }) {
  const heading = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    heading.current?.focus({ preventScroll: true });
  }, []);

  return (
    <div className="mx-auto w-full max-w-[44rem] px-5 sm:px-8 lg:w-[clamp(560px,36.5vw,700px)] lg:max-w-none lg:px-0 lg:pt-[calc(var(--g)*1.4)]">
      <h1
        ref={heading}
        tabIndex={-1}
        className="font-hero text-[clamp(2.25rem,10vw,3rem)] font-black uppercase leading-none tracking-[-0.045em] text-ra-teal outline-none lg:text-[length:calc(var(--g)*2.45)]"
      >
        {THANK_YOU.title}
      </h1>
      <p className="mt-6 text-lg leading-[1.55] text-ra-ink lg:mt-[calc(var(--g)*2.3)] lg:text-[length:max(17px,calc(var(--g)*1.2))]">
        {THANK_YOU.textBefore}{" "}
        <a href={`mailto:${THANK_YOU.email}`} className="text-[#1d4ed8] underline underline-offset-2 hover:text-ra-teal">
          {THANK_YOU.email}
        </a>
        .
      </p>
      <button
        type="button"
        onClick={onReturn}
        className="mt-6 cursor-pointer text-lg text-[#1d4ed8] underline underline-offset-2 hover:text-ra-teal lg:mt-[calc(var(--g)*1.2)] lg:text-[length:max(17px,calc(var(--g)*1.2))]"
      >
        {THANK_YOU.returnLabel}
      </button>
    </div>
  );
}
