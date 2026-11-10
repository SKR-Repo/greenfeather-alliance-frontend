import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

// New page => start at the top (but keep #hash anchors working).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/**
 * Shell shared by every page:  Navbar (floats over the hero)  →  page  →  Footer.
 * <Outlet /> is where the matched route's page renders.
 */
export default function Layout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white font-body text-ra-ink">
      <ScrollToTop />
      <Navbar />
      <main className="relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
