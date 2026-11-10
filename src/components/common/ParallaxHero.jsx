/**
 * Reusable hero for EVERY page (home + inner pages).
 *
 * The "walk-over" effect:
 *  - the background image is `position: fixed`, so it never moves
 *  - the section is clipped with `clip-path: inset(0)`, so the fixed image is
 *    only visible INSIDE this section's box
 *  - the hero text scrolls up normally and the next section simply arrives
 *    from below, so it looks like content walking over a frozen image
 *  - (uses a fixed <img> instead of `background-attachment: fixed`, which is
 *    broken on iOS Safari)
 *
 * Props
 *  image        – background image URL
 *  alt          – accessible description (use "" if purely decorative)
 *  className    – override height, e.g. "min-h-[60svh]" for inner pages
 *  imageClassName – tweak focal point, e.g. "object-[30%_center]"
 *  contentClassName – spacing of the content block (bottom padding etc.)
 *  children     – hero content (headline etc.), aligned to the bottom
 */
export default function ParallaxHero({
  image,
  alt = "",
  className = "min-h-svh",
  imageClassName = "object-[68%_center]",
  contentClassName = "pb-[clamp(3rem,9svh,5.5rem)] pt-40",
  children,
}) {
  return (
    <section
      className={`relative isolate flex flex-col justify-end overflow-hidden bg-ra-teal [clip-path:inset(0)] ${className}`}
    >
      {/* frozen background layer */}
      <div aria-hidden={alt === ""} className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh">
        <img
          src={image}
          alt={alt}
          fetchPriority="high"
          decoding="async"
          className={`h-full w-full object-cover ${imageClassName}`}
        />
        {/* mobile readability veil. Desktop shows the photo untouched (the navbar adds its own light veil). */}
        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/0 to-black/30 lg:hidden" />
      </div>

      <div className={`relative z-10 w-full ${contentClassName}`}>{children}</div>
    </section>
  );
}
