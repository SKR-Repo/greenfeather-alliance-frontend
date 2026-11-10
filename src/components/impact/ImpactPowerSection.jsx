import { useCallback, useEffect, useRef, useState } from "react";
import { IMPACT_CARDS, IMPACT_POWER } from "../../data/impactSections";
import StakeholderCard from "./StakeholderCard";

/*
  Our Impact section 3 — "The power of our alliance" (white background).

  - 5 tabs + a slim line under them. Clicking a tab smooth-scrolls the horizontal card rail so that
    card lands in the CENTRE (the browser clamps it at the ends, e.g. the first / last card).
    The URL hash (#producers …) follows the tab, and opening the page with a hash does the same.
  - Rail: native horizontal scrolling (touch / trackpad / scrollbar). Phones snap one card at a time,
    desktop scrolls freely (snap is off so a centred card is not pulled back).
  - Desktop is laid out in vw (title + tabs + first card share the 16.7vw left edge, two cards visible).
  - Title, tabs and cards reveal once, the cards sliding in one after another.
*/
const scrollBehavior = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export default function ImpactPowerSection() {
  const { id, title } = IMPACT_POWER;
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const [shown, setShown] = useState(false);

  // reveal once, when ~15% of the section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const centerCard = useCallback((cardId, behavior = scrollBehavior()) => {
    const rail = railRef.current;
    const card = rail?.querySelector(`#${cardId}`);
    if (!rail || !card) return false;
    const left = card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2;
    rail.scrollTo({ left: Math.max(0, left), behavior });
    return true;
  }, []);

  const onTab = (e, cardId) => {
    e.preventDefault();
    centerCard(cardId);
    window.history.replaceState(null, "", `#${cardId}`);
  };

  // deep link: /our-impact#donors → bring the section into view and centre that card
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!IMPACT_CARDS.some((c) => c.id === hash)) return undefined;
    const t = setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
      centerCard(hash, "auto");
    }, 250);
    return () => clearTimeout(t);
  }, [centerCard]);

  const reveal = (delay = 0) => ({
    style: { transitionDelay: shown ? `${delay}ms` : "0ms" },
    className: `transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
      shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    }`,
  });

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby="impact-power-title"
      className="relative bg-white pb-16 pt-14 text-ra-teal sm:pb-20 sm:pt-20 lg:pb-[6vw] lg:pt-[5.2vw]"
    >
      <div className="lg:pl-[16.7vw] lg:pr-[4vw]">
        <h2
          id="impact-power-title"
          {...reveal(0)}
          className={`px-6 text-[2.1rem] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:px-0 lg:text-[3.8vw] lg:leading-[1.1] ${reveal(0).className}`}
        >
          {title}
        </h2>

        {/* tabs */}
        <nav
          aria-label="Jump to a stakeholder"
          style={reveal(120).style}
          className={`mt-7 lg:mt-[1.6vw] lg:w-fit ${reveal(120).className}`}
        >
          <ul className="flex overflow-x-auto border-b border-[#17545b]/25 px-3 [scrollbar-width:none] sm:px-5 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
            {IMPACT_CARDS.map((c) => (
              <li key={c.id} className="shrink-0">
                <a
                  href={`#${c.id}`}
                  onClick={(e) => onTab(e, c.id)}
                  className="block px-3 py-4 text-[1rem] leading-[1.5] text-[#0f3a3f] transition-colors hover:text-ra-teal hover:underline hover:underline-offset-[6px] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ra-teal sm:px-5 sm:text-[1.1rem] lg:px-[1.26vw] lg:py-[1vw] lg:text-[max(0.95rem,1.26vw)]"
                >
                  {c.tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* card rail */}
      <div
        ref={railRef}
        tabIndex={-1}
        className="relative mt-8 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto overscroll-x-contain scroll-smooth px-[11px] pb-5 [scrollbar-color:#9a9a9a_#f4f4f4] [scrollbar-width:thin] sm:gap-5 sm:px-6 md:px-10 lg:mt-[4.2vw] lg:snap-none lg:gap-[1.9vw] lg:px-0 lg:pb-[1.2vw] lg:pl-[16.7vw] lg:pr-[18vw]"
      >
        {IMPACT_CARDS.map((card, i) => (
          <StakeholderCard key={card.id} card={card} index={i} shown={shown} />
        ))}
      </div>
    </section>
  );
}
