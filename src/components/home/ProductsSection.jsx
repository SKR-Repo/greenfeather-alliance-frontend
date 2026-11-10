import { useEffect, useRef, useState } from "react";
import { FIND_PRODUCTS, PRODUCT_IMAGES, PRODUCT_ROTATE_MS } from "../../data/homeSections";
import { ChevronRight } from "../common/Icons";
import SmartLink from "../common/SmartLink";

/*
  Home section 7 — LEFT: 2×2 grid of product photos that swap one tile at a time
  (tile 1 → 2 → 3 → 4 → 1 … forever, every PRODUCT_ROTATE_MS). RIGHT: headline, text, button.
  Mobile: grid on top, text below.

  Rotation rules
    - each tick the next tile in order receives the next image of PRODUCT_IMAGES (wraps around)
    - an image is never shown in two tiles at once (list needs >= 5 images)
    - pauses while the section is off-screen / tab hidden, and is off for "reduce motion"
*/
const TILES = 4;
const FADE_MS = 700;

function useProductRotation(images, intervalMs, active) {
  const [slots, setSlots] = useState(() => Array.from({ length: TILES }, (_, i) => i % images.length));
  const cursor = useRef({ tick: 0, next: TILES });

  useEffect(() => {
    if (!active || images.length <= TILES) return undefined;
    const id = setInterval(() => {
      const c = cursor.current;
      const tile = c.tick % TILES;
      const image = c.next % images.length;
      c.tick += 1;
      c.next += 1;
      setSlots((prev) => prev.map((v, i) => (i === tile ? image : v)));
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs, active]);

  return slots;
}

// One grid cell: the previous picture stays underneath while the new one fades in on top.
function Tile({ image }) {
  const [layers, setLayers] = useState({ current: image, previous: null });
  const topRef = useRef(null);

  if (image.src !== layers.current.src) {
    setLayers({ current: image, previous: layers.current });
  }

  useEffect(() => {
    if (!layers.previous) return;
    topRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: FADE_MS,
      easing: "ease-out",
    });
  }, [layers.current.src, layers.previous]);

  return (
    <div className="relative aspect-square overflow-hidden rounded-[14px] lg:rounded-[1.2vw]">
      {layers.previous && (
        <img
          src={layers.previous.src}
          alt=""
          aria-hidden
          draggable={false}
          className="absolute inset-0 size-full object-cover"
        />
      )}
      <img
        key={layers.current.src}
        ref={topRef}
        src={layers.current.src}
        alt={layers.current.alt}
        draggable={false}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}

export default function ProductsSection() {
  const { title, text, linkLabel, href } = FIND_PRODUCTS;
  const rootRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [tabVisible, setTabVisible] = useState(() => !document.hidden);
  const [reduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  // warm the browser cache so a swap never shows a blank tile
  useEffect(() => {
    PRODUCT_IMAGES.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const slots = useProductRotation(PRODUCT_IMAGES, PRODUCT_ROTATE_MS, inView && tabVisible && !reduced);

  return (
    <section
      ref={rootRef}
      aria-labelledby="find-products-title"
      className="relative z-10 bg-white px-[14vw] py-16 sm:px-12 sm:py-20 lg:px-[3.8vw] lg:py-[6.3vw]"
    >
      <div className="mx-auto grid max-w-md items-center gap-14 sm:max-w-xl lg:max-w-none lg:grid-cols-[46vw_1fr] lg:gap-[3.8vw]">
        <div className="grid grid-cols-2 gap-[7%] lg:gap-[1.85vw]" aria-label="Rainforest Alliance Certified products">
          {slots.map((imageIndex, tile) => (
            <Tile key={tile} image={PRODUCT_IMAGES[imageIndex]} />
          ))}
        </div>

        <div>
          <h2
            id="find-products-title"
            className="font-body text-2xl font-semibold leading-[1.25] tracking-tight text-ra-teal sm:text-4xl lg:max-w-[40vw] lg:text-[2.95vw] lg:leading-[1.2]"
          >
            {title}
          </h2>
          <p className="mt-6 text-base leading-[1.6] text-[#0d2d30] sm:text-lg lg:mt-[1.7vw] lg:max-w-[40vw] lg:text-[1.58vw] lg:leading-[1.5]">
            {text}
          </p>
          <SmartLink
            href={href}
            className="group mt-9 inline-flex items-center rounded-[4px] bg-ra-teal px-5 py-4 font-body text-base font-semibold leading-snug text-white transition-[filter,transform] duration-300 hover:brightness-125 active:scale-[0.98] sm:px-6 sm:text-lg lg:mt-[3.6vw] lg:rounded-[0.25vw] lg:px-[1vw] lg:py-[1.7vw] lg:text-[1.3vw]"
          >
            <span>
              {linkLabel}
              <ChevronRight
                strokeWidth={3}
                className="ml-[0.35em] inline size-[0.8em] align-[-0.05em] transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
