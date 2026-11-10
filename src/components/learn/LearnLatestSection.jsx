import { useCallback, useEffect, useRef, useState } from "react";
import { LEARN_LATEST } from "../../data/learnSections";
import SmartLink from "../common/SmartLink";

/*
  Learn section 2 — "The Latest": title + text above a 4-card article carousel.
  Same engine as the Home page's "Our latest" carousel (components/home/LatestArticles.jsx), kept as its
  own component so that one stays untouched.

  Paging: each click moves by the number of FULLY visible cards. With 4 cards on desktop that is
  view 1 = cards 1-3 (+ half of card 4), view 2 = card 4 fully visible (flush with the right edge).
  The arrows never disable — after the last view they wrap back to the first (and the left arrow wraps
  to the last). Positions are measured from the DOM, so every screen size works (mobile: 1 card per
  click, tablet: 2). Swipe / drag also pages.

  Hover: only the left / right (half the gap) and bottom (a crisp line) get a shadow — a box-shadow
  clipped at the card's top edge by `clip-path` on the <li>.
*/
const ArrowIcon = ({ dir }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-7 lg:size-[1.9vw]">
    {dir === "left" ? <path d="M19 12H5M11 6l-6 6 6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
  </svg>
);

const arrowBtn =
  "grid size-14 shrink-0 place-items-center rounded-[4px] bg-ra-teal text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-[filter,transform] duration-300 hover:brightness-125 active:scale-95 lg:size-[4.4vw] lg:rounded-[0.25vw]";

export default function LearnLatestSection() {
  const { title, text, moreLabel, moreHref, articles } = LEARN_LATEST;
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const drag = useRef({ x: 0, moved: false });
  const [positions, setPositions] = useState([0]);
  const [index, setIndex] = useState(0);

  // measure the paging positions (px) whenever the viewport size changes
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const measure = () => {
      const cards = track.children;
      if (cards.length < 2) return;
      const first = cards[0].offsetLeft;
      const pitch = cards[1].offsetLeft - first;
      const gap = pitch - cards[0].offsetWidth;
      const max = Math.max(0, track.offsetWidth - viewport.clientWidth);
      const perView = Math.max(1, Math.floor((viewport.clientWidth - first + gap) / pitch));
      const list = [];
      for (let i = 0; ; i += 1) {
        const offset = i * perView * pitch;
        if (offset >= max - 1) {
          list.push(max);
          break;
        }
        list.push(offset);
      }
      setPositions(list);
    };

    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    return () => ro.disconnect();
  }, []);

  const current = Math.min(index, positions.length - 1);
  const go = useCallback(
    (step) => setIndex((current + step + positions.length) % positions.length),
    [current, positions.length],
  );

  // swipe support (touch + mouse drag)
  const onPointerDown = (e) => {
    drag.current = { x: e.clientX, moved: false };
  };
  const onPointerUp = (e) => {
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 50) {
      drag.current.moved = true;
      go(dx < 0 ? 1 : -1);
    }
  };
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      drag.current.moved = false;
    }
  };

  return (
    <section aria-labelledby="learn-latest-title" className="relative z-10 overflow-x-clip bg-white pb-6 pt-16 sm:pt-20 lg:pb-[3.2vw] lg:pt-[3.5vw]">
      <div className="pl-[2px] sm:pl-6 lg:pl-[17.3vw]">
        <h2
          id="learn-latest-title"
          className="font-body text-[2.75rem] font-semibold leading-none tracking-tight text-ra-teal sm:text-6xl lg:text-[3.35vw]"
        >
          {title}
        </h2>
        <p className="mt-4 text-base leading-[1.5] text-[#0d2d30] sm:text-xl lg:mt-[1.9vw] lg:text-[1.55vw]">{text}</p>
      </div>

      <div
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onClickCapture={onClickCapture}
        className="mt-8 touch-pan-y overflow-x-clip pb-8 lg:mt-[3.2vw] lg:pb-[2vw]"
      >
        <ul
          ref={trackRef}
          className="relative flex w-max gap-6 px-4 transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] will-change-transform sm:px-6 lg:gap-[1.9vw] lg:pl-[1vw] lg:pr-0"
          style={{ transform: `translate3d(${-positions[current]}px,0,0)` }}
        >
          {articles.map((a) => (
            <li
              key={a.href}
              className="flex w-[82vw] max-w-[24rem] shrink-0 [clip-path:inset(0_-12px_-26px_-12px)] sm:w-[42vw] sm:max-w-none lg:w-[25.65vw] lg:[clip-path:inset(0_-0.95vw_-1.7vw_-0.95vw)]"
            >
              <SmartLink
                href={a.href}
                draggable={false}
                className="group flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_1px_4px_rgba(0,0,0,0.14)] outline-none transition-shadow duration-500 hover:shadow-[0_0_26px_rgba(0,0,0,0.2),0_3px_2px_-1px_rgba(0,0,0,0.3)] focus-visible:shadow-[0_0_26px_rgba(0,0,0,0.2),0_3px_2px_-1px_rgba(0,0,0,0.3)] lg:rounded-[0.5vw]"
              >
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="aspect-[489/276] w-full object-cover"
                />
                <div className="flex min-h-[13.5rem] flex-1 flex-col px-6 pb-6 pt-8 lg:min-h-[17vw] lg:px-[1.9vw] lg:pb-[2vw] lg:pt-[2.3vw]">
                  <h3 className="font-body text-[1.05rem] font-semibold leading-[1.2] text-ra-teal sm:text-xl lg:text-[1.7vw] lg:leading-[1.17]">
                    {a.title}
                  </h3>
                  <p className="mt-auto pt-4 text-[0.9rem] text-[#555] lg:text-[1.05vw]">{a.date}</p>
                </div>
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-[2vw]">
        <SmartLink
          href={moreHref}
          className="inline-flex min-h-14 items-center rounded-[4px] bg-ra-teal px-4 py-2 text-base font-semibold leading-snug text-white shadow-[0_2px_6px_rgba(0,0,0,0.25)] transition-[filter,transform] duration-300 hover:brightness-125 active:scale-[0.98] sm:px-5 sm:text-lg lg:h-[4.4vw] lg:min-h-0 lg:rounded-[0.25vw] lg:px-[1vw] lg:py-0 lg:text-[1.3vw]"
        >
          {moreLabel}
        </SmartLink>

        <div className="flex shrink-0 gap-4 lg:gap-[1.26vw]">
          <button type="button" aria-label="Previous articles" onClick={() => go(-1)} className={arrowBtn}>
            <ArrowIcon dir="left" />
          </button>
          <button type="button" aria-label="Next articles" onClick={() => go(1)} className={arrowBtn}>
            <ArrowIcon dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
