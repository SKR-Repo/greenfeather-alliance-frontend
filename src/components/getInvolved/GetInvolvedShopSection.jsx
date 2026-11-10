import { useCallback, useEffect, useRef, useState } from "react";
import { GIVE_SHOP } from "../../data/getInvolvedShop";
import useInView from "../../hooks/useInView";
import SmartLink from "../common/SmartLink";
import { ArrowIcon, CartIcon, ExternalIcon } from "./ShopIcons";

/*
  Get Involved section 6 — "Shop the Rainforest Alliance".
  Header (cart icon, title, text) + a horizontal row of 6 product cards (4 visible on desktop,
  1 on phones), then "View the store" on the left and ‹ › arrows on the right.

  Behaviour
   - arrows glide the row by half the visible cards (2 on desktop, 1 on phones); an arrow dims
     at its end of the row
   - useInView: every time the row enters the screen it glides on its own to the LAST cards
     (after a short pause); when it is completely off screen it silently resets to the first
     cards, so the intro replays on every visit
   - touching / wheeling the row cancels the automatic glide
   - each card has a label button (white → teal on hover) that opens that product; the photo
     zooms a little on hover
  Desktop (lg+) sizes are vw (measured at 1896px): 23.4vw cards, 1.9vw gap, 34vw tall.
*/
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export default function GetInvolvedShopSection() {
  const { title, text, storeLabel, storeHref, cards } = GIVE_SHOP;
  const rowRef = useRef(null);
  const scrollerRef = useRef(null);
  const raf = useRef(0);
  const inView = useInView(rowRef, 0.35);
  const [edge, setEdge] = useState({ start: true, end: false });

  const cancel = useCallback(() => {
    cancelAnimationFrame(raf.current);
    raf.current = 0;
  }, []);

  // eased glide to `target` scrollLeft (snap is paused while it runs so it can't fight the animation)
  const glideTo = useCallback(
    (target, duration = 900) => {
      const el = scrollerRef.current;
      if (!el) return;
      cancel();
      const from = el.scrollLeft;
      const to = Math.max(0, Math.min(target, el.scrollWidth - el.clientWidth));
      if (Math.abs(to - from) < 1) return;
      el.style.scrollSnapType = "none";
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / duration);
        el.scrollLeft = from + (to - from) * easeInOutCubic(p);
        if (p < 1) raf.current = requestAnimationFrame(step);
        else {
          raf.current = 0;
          el.style.scrollSnapType = "";
        }
      };
      raf.current = requestAnimationFrame(step);
    },
    [cancel],
  );

  const sync = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const start = el.scrollLeft <= 2;
    const end = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2;
    setEdge((e) => (e.start === start && e.end === end ? e : { start, end }));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    // a finger / wheel on the row takes over from the automatic glide
    el.addEventListener("pointerdown", cancel);
    el.addEventListener("wheel", cancel, { passive: true });
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      el.removeEventListener("pointerdown", cancel);
      el.removeEventListener("wheel", cancel);
      cancel();
    };
  }, [sync, cancel]);

  // enter → glide to the last cards; fully off screen → back to the first cards
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;
    if (!inView) {
      cancel();
      el.scrollLeft = 0;
      return undefined;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const t = setTimeout(() => glideTo(el.scrollWidth, 1300), 650);
    return () => clearTimeout(t);
  }, [inView, glideTo, cancel]);

  const page = (dir) => {
    const el = scrollerRef.current;
    if (!el || el.children.length < 2) return;
    const pitch = el.children[1].offsetLeft - el.children[0].offsetLeft;
    const visible = Math.max(1, Math.floor((el.clientWidth + 8) / pitch));
    const cardsPerClick = Math.max(1, Math.floor(visible / 2));
    const max = el.scrollWidth - el.clientWidth;
    let target = el.scrollLeft + dir * cardsPerClick * pitch;
    // a leftover sliver at either end isn't worth a whole extra click: finish at the edge
    if (max - target < pitch * 0.5) target = max;
    if (target < pitch * 0.5) target = 0;
    glideTo(target, 800);
  };

  const arrowCls =
    "grid size-14 place-items-center rounded-[4px] bg-[#175259] text-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.35)] transition-[opacity,transform,filter] duration-300 enabled:cursor-pointer enabled:hover:-translate-y-0.5 enabled:hover:brightness-125 enabled:active:translate-y-0 disabled:opacity-40 lg:size-[4.4vw] lg:rounded-[0.3vw]";

  return (
    <section aria-labelledby="give-shop-title" className="relative z-10 bg-white pb-10 pt-12 text-ra-teal lg:pb-[6vw] lg:pt-[4vw]">
      <div className="px-6 lg:pl-[17.4vw] lg:pr-0">
        <CartIcon className="h-14 w-[60px] text-[#175259] lg:h-[4.9vw] lg:w-[5.3vw]" />
        <h2
          id="give-shop-title"
          className="mt-6 text-[28px] font-semibold leading-[1.2] text-[#175259] sm:text-4xl lg:mt-[2vw] lg:text-[3.75vw]"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-[40rem] text-base leading-[1.55] text-[#0b2a2d] sm:text-lg lg:mt-[1.5vw] lg:max-w-[66vw] lg:text-[1.58vw] lg:leading-[1.43]">
          {text}
        </p>
      </div>

      <div ref={rowRef} className="mt-8 lg:mt-[3.2vw]">
        <ul
          ref={scrollerRef}
          aria-label="Shop categories"
          className="flex snap-x snap-proximity gap-6 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-1 [scrollbar-width:none] lg:scroll-px-[1vw] lg:gap-[1.9vw] lg:px-[1vw] lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <li
              key={card.id}
              className="group relative aspect-[444/644] w-[calc(100vw-24px)] shrink-0 snap-start overflow-hidden bg-[#e8eeee] sm:w-[46vw] lg:w-[23.4vw]"
            >
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
              />
              <SmartLink
                href={card.href}
                aria-label={`Shop ${card.label}`}
                className="absolute bottom-4 left-4 flex h-[53px] items-center rounded-[4px] bg-white px-4 text-[15px] font-medium text-[#0b3b40] shadow-[0_4px_14px_-4px_rgba(0,0,0,0.35)] transition-colors duration-300 hover:bg-[#175259] hover:text-white focus-visible:bg-[#175259] focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:bottom-[1.6vw] lg:left-[1.63vw] lg:h-[4.4vw] lg:rounded-[0.3vw] lg:px-[1vw] lg:text-[1.4vw]"
              >
                {card.label}
              </SmartLink>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-4 px-8 lg:mt-[1.6vw] lg:px-[1.9vw]">
          <SmartLink
            href={storeHref}
            className="inline-flex min-h-14 w-28 items-center justify-between gap-1 rounded-[4px] bg-[#175259] px-3 py-2 text-[15px] font-semibold leading-tight text-white shadow-[0_6px_16px_-4px_rgba(0,0,0,0.35)] transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-125 sm:w-auto sm:gap-3 sm:px-4 sm:text-[17px] lg:h-[4.4vw] lg:gap-[0.2vw] lg:rounded-[0.3vw] lg:px-[1vw] lg:py-0 lg:text-[1.4vw]"
          >
            <span>{storeLabel}</span>
            <ExternalIcon className="size-4 shrink-0 self-start sm:self-auto lg:size-[1.5vw]" />
          </SmartLink>

          <div className="flex gap-4 lg:gap-[1.27vw]">
            <button type="button" aria-label="Previous products" disabled={edge.start} onClick={() => page(-1)} className={arrowCls}>
              <ArrowIcon dir="left" className="size-6 lg:size-[1.9vw]" />
            </button>
            <button type="button" aria-label="Next products" disabled={edge.end} onClick={() => page(1)} className={arrowCls}>
              <ArrowIcon dir="right" className="size-6 lg:size-[1.9vw]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
