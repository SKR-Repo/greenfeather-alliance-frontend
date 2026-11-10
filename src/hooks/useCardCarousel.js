import { useCallback, useEffect, useRef, useState } from "react";

/*
  Paging engine for the article-card carousels (used by LearnInsightsSection).

  Attach `viewportRef` to the clipping wrapper and `trackRef` to the <ul> that holds the cards, apply
  `offset` as translateX(-offset px) on the track, and spread `swipe` on the wrapper.

  Every step moves by the number of FULLY visible cards; the last position is the one where the final card
  is flush with the right edge. The arrows never disable: go(1) after the last position wraps to the first
  and go(-1) before the first wraps to the last. Positions are measured from the DOM (ResizeObserver),
  so every screen size works. Dragging / swiping more than 50px also pages.
*/
export default function useCardCarousel() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const drag = useRef({ x: 0, moved: false });
  const [positions, setPositions] = useState([0]);
  const [index, setIndex] = useState(0);

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

  const swipe = {
    onPointerDown: (e) => {
      drag.current = { x: e.clientX, moved: false };
    },
    onPointerUp: (e) => {
      const dx = e.clientX - drag.current.x;
      if (Math.abs(dx) > 50) {
        drag.current.moved = true;
        go(dx < 0 ? 1 : -1);
      }
    },
    // a drag must not count as a click on a card link
    onClickCapture: (e) => {
      if (drag.current.moved) {
        e.preventDefault();
        drag.current.moved = false;
      }
    },
  };

  return { viewportRef, trackRef, offset: positions[current], go, swipe };
}
