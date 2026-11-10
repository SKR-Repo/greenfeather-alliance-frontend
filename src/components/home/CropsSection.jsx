import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CARDS_FIRST,
  CARDS_SECOND,
  CROPS,
  CROPS_INTRO,
  FLOATERS,
  IMPACT,
} from "../../data/homeSections";
import useScrollDrift from "../../hooks/useScrollDrift";
import { ChevronRight } from "../common/Icons";
import CropHoverTag from "./CropHoverTag";
import CropTuner from "./CropTuner";

/*
  Home section 3 (part 2) — the crops "art" block.

  DESKTOP (lg+): bananas / cocoa / coffee / tea are absolutely positioned floating
  images at the left & right edges (positions live in data/homeSections.js, in vw).
  They drift smoothly on scroll (useScrollDrift) and show a follow-the-cursor tag on hover.

  MOBILE / TABLET: the floating images are hidden and replaced by 4 stacked cards
  (image + title + text + "Explore our work in …" link), exactly like the live mobile site.

  The block starts at the bottom edge of the forest banner; the first banana
  intentionally overlaps it (negative top), so this block sits above it (z-10).
*/

/* ---------- shared text block (heading + paragraph + underlined link) ---------- */
function CentreBlock({ title, text, linkLabel, href, className = "" }) {
  // Desktop sizes measured on the live site at 1898px: heading 2.85vw / 1.22, text 1.56vw / 1.57, link 1.57vw
  return (
    <div className={`relative z-[5] mx-auto text-center lg:w-[58vw] ${className}`}>
      <h2 className="mx-auto max-w-[21rem] font-body text-[1.65rem] font-semibold leading-[1.22] tracking-tight text-ra-teal sm:max-w-xl sm:text-4xl lg:max-w-none lg:text-[2.85vw] lg:leading-[1.22]">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-[21rem] text-[0.98rem] leading-[1.65] text-[#0d2d30] sm:max-w-xl sm:text-lg lg:mt-[1.4vw] lg:max-w-none lg:text-[1.56vw] lg:leading-[1.57]">
        {text}
      </p>
      <Link
        to={href}
        className="group mt-6 inline-flex items-center text-base text-ra-teal underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-70 lg:mt-[1.6vw] lg:text-[1.57vw]"
      >
        {linkLabel}
        <ChevronRight
          strokeWidth={2.2}
          className="ml-[0.15em] size-[0.8em] transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}

/* ---------- mobile / tablet card ---------- */
function CropCard({ crop, imageSide }) {
  const imageLeft = imageSide === "left";
  return (
    <article className="relative flex items-center gap-4 rounded-[20px] bg-[#e8eded] px-6 py-7 sm:gap-6 sm:px-8">
      <img
        src={crop.cardImage}
        alt=""
        loading="lazy"
        decoding="async"
        className={`pointer-events-none h-auto w-[34%] max-w-[9rem] shrink-0 object-contain sm:max-w-[11rem] ${
          imageLeft ? "order-first -ml-9 sm:-ml-10" : "order-last -mr-9 sm:-mr-10"
        }`}
      />
      <div className="min-w-0 flex-1">
        <h3 className="text-[1.05rem] font-semibold text-ra-teal">{crop.title}</h3>
        <p className="mt-3 text-[0.95rem] leading-[1.55] text-[#0d2d30]">{crop.description}</p>
        <Link
          to={crop.href}
          className="group mt-3 inline-flex items-baseline gap-1 text-[0.95rem] font-semibold leading-snug text-[#1f56c3] hover:underline"
        >
          <span>
            {crop.linkLabel}
            <ChevronRight className="ml-1 inline size-[0.7em] transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </article>
  );
}

function CardGroup({ keys, startSide }) {
  return (
    <div className="mx-auto grid max-w-5xl gap-5 px-6 sm:grid-cols-2 sm:px-10 lg:hidden">
      {keys.map((key, i) => {
        const side = (i % 2 === 0) === (startSide === "left") ? "left" : "right";
        return <CropCard key={key} crop={CROPS[key]} imageSide={side} />;
      })}
    </div>
  );
}

/* ---------- desktop floating image ---------- */
function Floater({ item, tune, selected, onEnter, onMove, onLeave, onTuneDown }) {
  const crop = CROPS[item.crop];
  const transform = [item.rotate ? `rotate(${item.rotate}deg)` : "", item.flip ? "scaleX(-1)" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    // static wrapper (positioned) → first child is moved by useScrollDrift
    <div data-drift={item.speed} className="absolute hidden lg:block" style={item.style}>
      <div className="will-change-transform">
        <Link
          to={crop.href}
          aria-label={crop.title}
          onMouseEnter={tune ? undefined : () => onEnter(crop)}
          onMouseMove={tune ? undefined : onMove}
          onMouseLeave={tune ? undefined : onLeave}
          onFocus={tune ? undefined : () => onEnter(crop)}
          onBlur={tune ? undefined : onLeave}
          onPointerDown={tune ? (e) => onTuneDown(e, item.id) : undefined}
          onClick={tune ? (e) => e.preventDefault() : undefined}
          className={`group block outline-none ${tune ? "cursor-move touch-none" : ""} ${
            tune && selected ? "outline-2 outline-dashed outline-red-500" : tune ? "outline-1 outline-dashed outline-sky-400/60" : ""
          }`}
        >
          <img
            src={item.src}
            alt=""
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`block h-auto w-full select-none transition-transform duration-500 ease-out ${
              tune ? "" : "group-hover:scale-[1.045] group-focus-visible:scale-[1.045]"
            }`}
            style={{
              transform: transform || undefined,
              filter: item.blur ? `blur(${item.blur}px)` : undefined,
            }}
          />
        </Link>
      </div>
    </div>
  );
}

const num = (v) => parseFloat(v);

export default function CropsSection() {
  const rootRef = useRef(null);
  const tagRef = useRef(null);
  const [active, setActive] = useState(null); // crop shown in the tag
  const [visible, setVisible] = useState(false);

  // ?tune → live editor for image positions (see CropTuner.jsx). Normal visitors never see it.
  const tune = useMemo(() => new URLSearchParams(window.location.search).has("tune"), []);
  const [items, setItems] = useState(FLOATERS);
  const [selected, setSelected] = useState(null);

  useScrollDrift(rootRef, !tune);

  /* ---- hover tag: sits above-right of the cursor, like the live site ---- */
  const place = useCallback((x, y) => {
    const tag = tagRef.current;
    if (!tag) return;
    const vw = window.innerWidth / 100;
    const dx = 0.63 * vw; // horizontal gap from the cursor
    const dy = 3.27 * vw; // tag bottom edge sits this far above the cursor
    const w = tag.offsetWidth;
    const h = tag.offsetHeight;
    let left = x + dx;
    if (left + w > window.innerWidth - 8) left = x - dx - w; // flip near the right edge
    let top = y - dy - h;
    if (top < 8) top = y + dy; // flip below the cursor near the top edge
    tag.style.transform = `translate3d(${Math.max(8, left)}px, ${top}px, 0)`;
  }, []);

  const onEnter = useCallback((crop) => {
    setActive(crop);
    setVisible(true);
  }, []);
  const onMove = useCallback((e) => place(e.clientX, e.clientY), [place]);
  const onLeave = useCallback(() => setVisible(false), []);

  /* ---- tune mode: drag + keyboard ---- */
  const patch = useCallback(
    (id, fn) => setItems((list) => list.map((it) => (it.id === id ? fn(it) : it))),
    [],
  );

  const onTuneDown = useCallback(
    (e, id) => {
      e.preventDefault();
      setSelected(id);
      const it = items.find((i) => i.id === id);
      const vw = window.innerWidth / 100;
      const sx = e.clientX;
      const sy = e.clientY;
      const l0 = num(it.style.left);
      const t0 = num(it.style.top);
      const move = (ev) =>
        patch(id, (cur) => ({
          ...cur,
          style: {
            ...cur.style,
            left: `${l0 + (ev.clientX - sx) / vw}vw`,
            top: `${t0 + (ev.clientY - sy) / vw}vw`,
          },
        }));
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    },
    [items, patch],
  );

  useEffect(() => {
    if (!tune || !selected) return undefined;
    const onKey = (e) => {
      const step = e.shiftKey ? 0.5 : 0.1;
      const k = e.key;
      const arrows = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
      if (arrows[k]) {
        e.preventDefault();
        const [dx, dy] = arrows[k];
        patch(selected, (c) => ({
          ...c,
          style: { ...c.style, left: `${num(c.style.left) + dx}vw`, top: `${num(c.style.top) + dy}vw` },
        }));
      } else if (k === "+" || k === "=" || k === "-" || k === "_") {
        const d = k === "+" || k === "=" ? 0.5 : -0.5;
        patch(selected, (c) => ({ ...c, style: { ...c.style, width: `${num(c.style.width) + d}vw` } }));
      } else if (k === "[" || k === "]") {
        patch(selected, (c) => ({ ...c, rotate: (c.rotate || 0) + (k === "]" ? 1 : -1) }));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tune, selected, patch]);

  return (
    <section
      ref={rootRef}
      aria-label="Our crops and global impact"
      // overflow-x-clip: images bleed off the screen edges without causing a horizontal scrollbar
      // lg:pt-[25vw] → first heading's first line sits 26.8vw below the forest banner, like the live site
      className="relative z-10 overflow-x-clip bg-white pb-16 pt-14 sm:pb-20 sm:pt-16 lg:pb-[8vw] lg:pt-[25vw]"
    >
      {/* DESKTOP floating images */}
      {items.map((item) => (
        <Floater
          key={item.id}
          item={item}
          tune={tune}
          selected={selected === item.id}
          onEnter={onEnter}
          onMove={onMove}
          onLeave={onLeave}
          onTuneDown={onTuneDown}
        />
      ))}
      {!tune && <CropHoverTag ref={tagRef} crop={active} visible={visible} />}
      {tune && <CropTuner items={items} selected={selected} />}

      {/* MOBILE cards: banana + cocoa → heading → coffee + tea → impact */}
      <CardGroup keys={CARDS_FIRST} startSide="left" />

      <CentreBlock {...CROPS_INTRO} className="mt-14 px-6 sm:mt-16 lg:mt-0 lg:px-0" />

      <CardGroup keys={CARDS_SECOND} startSide="left" />

      <CentreBlock {...IMPACT} className="mt-14 px-6 sm:mt-16 lg:mt-[29.3vw] lg:px-0" />
    </section>
  );
}
