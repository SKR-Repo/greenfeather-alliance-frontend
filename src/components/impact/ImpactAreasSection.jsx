import { useCallback, useEffect, useRef, useState } from "react";
import { AREA_GROUPS, AREA_TOPICS, IMPACT_AREAS } from "../../data/impactAreas";
import AreaIcon from "./AreaIcons";
import AreaTopic from "./AreaTopic";

/*
  Our Impact section 4 — "Our areas of impact".

  Layout
    lg+  : left = sticky tab list (Nature / People groups), right = all 5 topics stacked.
    < lg : a sticky bar shows the current topic (+ NATURE / PEOPLE chip); tapping it opens the tab list.

  Behaviour
    - clicking a tab smooth-scrolls the right column to that topic (the URL hash follows)
    - scroll-spy: the topic crossing the middle of the screen becomes active → its tab turns into a white
      pill and the WHOLE section background fades (0.7s) to that topic's colour
    - opening the page with a hash (…#strengthening-rights) jumps straight to that topic
*/
export default function ImpactAreasSection() {
  const { title, text } = IMPACT_AREAS;
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const gridRef = useRef(null);

  const topic = AREA_TOPICS[active];

  /* scroll-spy */
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const grid = gridRef.current;
      if (!grid) return;
      const line = window.innerHeight * 0.5;
      let idx = 0;
      AREA_TOPICS.forEach((t, i) => {
        const el = document.getElementById(t.id);
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      setActive((prev) => (prev === idx ? prev : idx));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = useCallback((id, behavior = "smooth") => {
    document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
  }, []);

  const onTab = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    goTo(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  /* deep link */
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!AREA_TOPICS.some((t) => t.id === hash)) return undefined;
    const t = setTimeout(() => goTo(hash, "auto"), 300);
    return () => clearTimeout(t);
  }, [goTo]);

  /* tab list (same markup for the desktop column and the mobile dropdown) */
  const renderTabs = (mobile) =>
    Object.entries(AREA_GROUPS).map(([key, label]) => (
      <div key={key} className={mobile ? "mt-5 first:mt-0" : "mt-[3.6vw] first:mt-0"}>
        <p className="text-[0.8rem] font-bold uppercase tracking-wide text-black lg:ml-[1.85vw] lg:text-[max(0.8rem,1.28vw)] lg:font-extrabold">
          {label}
        </p>
        <ul className={mobile ? "mt-3 space-y-1" : "mt-[1.05vw] space-y-[1.2vw]"}>
          {AREA_TOPICS.map((t, i) =>
            t.group !== key ? null : (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  onClick={(e) => onTab(e, t.id)}
                  aria-current={active === i ? "true" : undefined}
                  className={`flex items-center gap-3 rounded-[14px] py-3 pl-2.5 pr-4 text-[1rem] leading-[1.3] text-[#0c2f33] transition-[background-color,box-shadow] duration-500 lg:max-w-full lg:gap-[0.65vw] lg:rounded-[1.5vw] lg:py-[1.1vw] lg:pl-[1.9vw] lg:pr-[1.9vw] lg:text-[max(0.95rem,1.45vw)] ${
                    active === i
                      ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.06)]"
                      : "bg-transparent hover:bg-white/50"
                  } ${mobile ? "" : "w-fit"}`}
                >
                  <AreaIcon
                    name={t.icon}
                    style={{ "--icon-cut": active === i ? "#fff" : topic.theme.bg }}
                    className="size-7 shrink-0 text-[#0f3a3f] lg:size-[2.3vw]"
                  />
                  <span>{t.tab}</span>
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    ));

  return (
    <section
      id="impact-areas"
      aria-labelledby="impact-areas-title"
      style={{ backgroundColor: topic.theme.bg }}
      className="relative transition-colors duration-700 ease-out"
    >
      {/* heading + intro */}
      <header className="px-6 pb-14 pt-20 text-center sm:px-10 lg:px-[4vw] lg:pb-[8.7vw] lg:pt-[7.6vw]">
        <h2
          id="impact-areas-title"
          className="font-hero text-[2.6rem] font-black uppercase leading-[1.02] tracking-[-0.06em] text-[#0f2d6b] sm:text-6xl lg:text-[4.7vw] lg:tracking-[-0.07em]"
        >
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-[34rem] text-[1rem] leading-[1.6] text-[#0b2d73] sm:max-w-2xl sm:text-lg lg:mt-[2.4vw] lg:max-w-[66vw] lg:text-[1.58vw] lg:leading-[1.5]">
          {text}
        </p>
      </header>

      {/* mobile / tablet sticky topic bar */}
      <div
        style={{ backgroundColor: topic.theme.bg }}
        className="sticky top-0 z-40 transition-colors duration-700 lg:hidden"
      >
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="impact-areas-menu"
          className="flex w-full items-center gap-3 border-b border-black/10 px-5 py-4 text-left"
        >
          <AreaIcon name={topic.icon} style={{ color: topic.theme.ink, "--icon-cut": topic.theme.bg }} className="size-6 shrink-0" />
          <span className="min-w-0 flex-1 truncate font-body text-[0.8rem] font-bold uppercase tracking-wide text-[#0b2a2d]">
            {topic.tab}
          </span>
          <span className="rounded-md bg-black/[0.07] px-2.5 py-1 text-[0.7rem] font-bold uppercase text-[#0b2a2d]">
            {AREA_GROUPS[topic.group]}
          </span>
          <AreaIcon
            name="chevron"
            className={`size-5 shrink-0 text-[#0b2a2d] transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
          />
        </button>
        <div
          id="impact-areas-menu"
          style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
          className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        >
          <div className="overflow-hidden">
            <nav aria-label="Areas of impact" className="px-5 pb-6 pt-5">
              {renderTabs(true)}
            </nav>
          </div>
        </div>
      </div>

      {/* tabs + topics */}
      <div
        ref={gridRef}
        className="px-5 pb-20 pt-10 sm:px-8 md:px-10 lg:grid lg:grid-cols-[28.7vw_1fr] lg:items-start lg:gap-0 lg:px-0 lg:pb-[9.7vw] lg:pl-[1.6vw] lg:pr-[3vw] lg:pt-0"
      >
        <nav
          aria-label="Areas of impact"
          className="sticky top-[4.6vw] hidden self-start pt-[4.3vw] lg:block"
        >
          {renderTabs(false)}
        </nav>

        <div className="space-y-24 lg:space-y-[11vw]">
          {AREA_TOPICS.map((t) => (
            <AreaTopic key={t.id} topic={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
