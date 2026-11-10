import { useEffect, useState } from "react";

/**
 * true while `ref`'s element is on screen (re-evaluated on every enter / leave).
 *  - enterRatio: how much of the element must be visible before it counts as "in"
 *  - it only flips back to false once the element is COMPLETELY off screen, so the
 *    state doesn't flicker while the user hovers near the edge
 */
export default function useInView(ref, enterRatio = 0.4) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= enterRatio) setInView(true);
        else if (!entry.isIntersecting) setInView(false);
      },
      { threshold: [0, enterRatio] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, enterRatio]);

  return inView;
}
