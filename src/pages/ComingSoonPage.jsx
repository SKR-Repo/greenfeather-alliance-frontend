import { Link, useLocation } from "react-router-dom";
import { ASSETS } from "../constants/assets";
import ParallaxHero from "../components/common/ParallaxHero";

const toTitle = (pathname) => {
  const last = pathname.split("/").filter(Boolean).pop() ?? "Page";
  return last.replace(/-/g, " ");
};

/**
 * Temporary page for every route we haven't built yet (all navbar/footer links
 * land here). It also shows how an INNER page reuses <ParallaxHero /> with a
 * shorter height. Delete once the real pages exist.
 */
export default function ComingSoonPage() {
  const { pathname } = useLocation();
  const title = toTitle(pathname);

  return (
    <>
      <ParallaxHero image={ASSETS.homeHero} className="min-h-[65svh]" imageClassName="object-[68%_center]">
        <h1 className="px-6 font-display text-[clamp(2rem,5vw,6rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] text-white md:pl-[10.8vw]">
          {title}
        </h1>
      </ParallaxHero>

      <section className="relative bg-white px-6 py-24 text-center">
        <p className="text-lg text-ra-ink">This page is coming soon.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-md bg-ra-teal px-8 py-3.5 font-semibold text-white transition-colors hover:bg-ra-ink"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}
