import { useEffect } from "react";

/**
 * Premium scroll-drift for floating images (desktop only).
 *
 * Put `data-drift="0.15"` on a STATIC wrapper element inside `containerRef`.
 * The wrapper's FIRST CHILD is the thing that actually moves (translateY).
 * While the page scrolls down, each child lags slightly behind the page, so it
 * looks like it is gliding down. Different speeds per image give a depth feel.
 *
 *  - zero React re-renders: transforms are written straight to the DOM in a rAF loop
 *  - eased (lerp) so motion stays buttery even with mouse-wheel "steps"
 *  - disabled under 1024px and when the user prefers reduced motion
 *  - only elements near the viewport are measured (cheap)
 */
const EASE = 0.12; // lower = floatier, higher = snappier
const MAX_SHIFT = 260; // px safety clamp

export default function useScrollDrift(containerRef, enabled = true) {
  useEffect(() => {
    const root = containerRef.current;
    if (!root || !enabled) return undefined;

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    let items = [];
    let raf = 0;
    let active = false;

    const collect = () => {
      items = Array.from(root.querySelectorAll("[data-drift]")).map((wrap) => ({
        wrap,
        el: wrap.firstElementChild,
        speed: parseFloat(wrap.dataset.drift) || 0,
        current: 0,
      }));
    };

    const reset = () => items.forEach((i) => i.el && (i.el.style.transform = ""));

    const tick = () => {
      const vh = window.innerHeight;
      let moving = false;

      for (const it of items) {
        const r = it.wrap.getBoundingClientRect();
        if (r.bottom < -400 || r.top > vh + 400) continue; // far away → skip

        // distance of the element's centre from the viewport centre
        const progress = vh / 2 - (r.top + r.height / 2);
        let target = progress * it.speed;
        target = Math.max(-MAX_SHIFT, Math.min(MAX_SHIFT, target));

        const next = it.current + (target - it.current) * EASE;
        if (Math.abs(target - next) > 0.15) moving = true;
        it.current = Math.abs(target - next) <= 0.15 ? target : next;
        it.el.style.transform = `translate3d(0, ${it.current.toFixed(2)}px, 0)`;
      }

      raf = moving ? requestAnimationFrame(tick) : 0;
    };

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const enable = () => {
      if (active) return;
      active = true;
      collect();
      window.addEventListener("scroll", kick, { passive: true });
      window.addEventListener("resize", kick);
      kick();
    };

    const disable = () => {
      if (!active) return;
      active = false;
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      cancelAnimationFrame(raf);
      raf = 0;
      reset();
    };

    const sync = () => (desktop.matches && !reduced.matches ? enable() : disable());
    sync();
    desktop.addEventListener("change", sync);
    reduced.addEventListener("change", sync);

    return () => {
      desktop.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
      disable();
    };
  }, [containerRef, enabled]);
}
