import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ASSETS } from "../../constants/assets";
import { giveLink, languages, mainNav } from "../../data/navigation";
import { ChevronDown, CloseIcon, MenuIcon, SearchIcon } from "../common/Icons";
import DesktopMegaMenu from "./navbar/DesktopMegaMenu";
import MobileMenu from "./navbar/MobileMenu";

const CLOSE_DELAY = 140; // ms grace period so the pointer can travel nav item -> panel
// Pages whose top area is pale (not a dark photo): the bar switches to brand-teal text / logo.
const LIGHT_ROUTES = ["/our-impact", "/learn", "/get-started", "/for-business/work-with-us"];
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

/*
  DESKTOP SIZING — one scale unit `--u` (set on <header>) drives every desktop
  measurement, so the bar keeps the live site's proportions at any width.
    --u = 1vw, clamped to 11px … 15px   (at a 1280px viewport: 1u = 12.8px)
  Every number below was measured from the live site's screenshot
  (px in the 1896px-wide capture ÷ 18.96 = value in `u`).
*/
// Top-level nav link / dropdown trigger: 14px Poppins Medium, 80px-tall hit box.
const navItemCls = (active, hasChevron = false, light = false) =>
  `inline-flex h-[calc(var(--u)*4.22)] items-center gap-[calc(var(--u)*0.43)] whitespace-nowrap rounded-md pl-[calc(var(--u)*1.05)] text-[length:calc(var(--u)*1.087)] font-medium leading-none ${
    light && !active ? "text-ra-teal hover:text-white" : "text-white"
  } transition-colors duration-200 ${
    hasChevron ? "pr-[calc(var(--u)*0.32)]" : "pr-[calc(var(--u)*1.05)]"
  } ${active ? "bg-ra-teal cursor-pointer" : "hover:bg-ra-teal"}`;

// Thin chevron: 14px wide visible shape, 1.7 stroke.
const chevronCls = (open) =>
  `size-[calc(var(--u)*1.48)] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`;

/**
 * Transparent header that floats over the hero image (position: absolute, so it
 * scrolls away together with the hero content — exactly like the live site).
 *
 * Desktop (lg+): links, hover mega menus, language switcher, Give, animated search.
 * Mobile  (<lg): burger + logo + Give, full-screen accordion menu.
 */
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null); // 'involved' | 'business' | 'language' | null
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [query, setQuery] = useState("");

  const closeTimer = useRef(null);
  const searchInput = useRef(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const openMenu = useCallback((id) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(id);
  }, []);

  const scheduleClose = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY);
  }, []);

  const closeAll = useCallback(() => {
    clearTimeout(closeTimer.current);
    setActiveMenu(null);
    setSearchOpen(false);
    setMobileOpen(false);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((open) => {
      if (!open) window.scrollTo({ top: 0 }); // header scrolls away, so anchor it first
      return !open;
    });
  };

  const openSearch = () => {
    setActiveMenu(null);
    setSearchOpen(true);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
    closeAll();
  };

  // Esc closes everything.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Leaving the mobile breakpoint closes the mobile menu.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setMobileOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Focus the search field once the reveal animation is underway.
  useEffect(() => {
    if (!searchOpen) return;
    const t = setTimeout(() => searchInput.current?.focus(), 300);
    return () => clearTimeout(t);
  }, [searchOpen]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const light = LIGHT_ROUTES.includes(pathname.replace(/\/$/, "")) && !mobileOpen;

  return (
    <header
      className="absolute inset-x-0 top-0 z-50 [--u:clamp(11px,1vw,15px)]"
      onMouseEnter={() => clearTimeout(closeTimer.current)}
      onMouseLeave={scheduleClose}
    >
      {/* The hosted logo file is white; this recolours it to brand yellow, like the live site. */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="ra-logo-teal" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 0.09  0 0 0 0 0.329  0 0 0 0 0.357  0 0 0 1 0" />
        </filter>
        <filter id="ra-logo-yellow" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 0.882  0 0 0 0 0.18  0 0 0 1 0" />
        </filter>
      </svg>

      {/* desktop only: soft dark veil behind the nav (live site: ~24% black fading out in ~95px) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 hidden h-[calc(var(--u)*7.4)] bg-linear-to-b from-black/25 via-black/20 to-transparent ${light ? "" : "lg:block"}`}
      />

      {/* ───────────── top bar ───────────── */}
      <div
        className={`relative z-10 transition-colors duration-300 ${
          mobileOpen
            ? "bg-linear-to-r from-[#1e4b2b] to-[#4c6a14] lg:bg-none"
            : light
              ? "lg:bg-none"
              : "bg-linear-to-b from-black/40 to-transparent lg:bg-none"
        }`}
      >
        {/* desktop bar: 104px tall (mega menus start right below it), content centred ~4px above middle */}
        <div className="flex h-[66px] items-center gap-3 px-4 lg:h-[calc(var(--u)*5.485)] lg:gap-0 lg:pb-[calc(var(--u)*0.32)] lg:pl-[calc(var(--u)*1.27)] lg:pr-[calc(var(--u)*2.75)]">
          {/* burger (mobile) */}
          <button
            type="button"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className={`grid size-10 shrink-0 place-items-center lg:hidden ${light ? "text-ra-teal" : "text-ra-yellow"}`}
          >
            {mobileOpen ? <CloseIcon className="size-7" /> : <MenuIcon className="size-8" />}
          </button>

          {/* logo (always visible, even while searching) */}
          <Link to="/" onClick={closeAll} aria-label="Rainforest Alliance — home" className="shrink-0">
            <img
              src={ASSETS.logo}
              alt="Rainforest Alliance"
              style={{ filter: light ? "url(#ra-logo-teal)" : "url(#ra-logo-yellow)" }}
              className="h-10 w-auto sm:h-11 lg:h-auto lg:w-[calc(var(--u)*9.1)]"
              width="176"
              height="56"
            />
          </Link>

          {/* Give (mobile) */}
          <Link
            to={giveLink.href}
            onClick={closeAll}
            className={`ml-auto inline-flex h-11 w-[8.5rem] items-center justify-center rounded-md text-[15px] font-semibold transition-colors lg:hidden ${
              light ? "bg-ra-teal text-white hover:bg-ra-ink" : "bg-ra-yellow text-ra-teal hover:bg-white"
            }`}
          >
            {giveLink.label}
          </Link>

          {/* ───────────── desktop area ───────────── */}
          <div className="relative ml-auto hidden h-full min-w-0 flex-1 items-center justify-end lg:flex">
            {/* nav items — fade/slide away while searching */}
            <div
              inert={searchOpen}
              className={`flex items-center gap-[calc(var(--u)*1.27)] transition-[opacity,transform] duration-500 ${EASE} ${
                searchOpen ? "pointer-events-none translate-x-10 opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              <ul className="flex items-center gap-[calc(var(--u)*1.2)]">
                {mainNav.map((item) =>
                  item.menu ? (
                    <li key={item.id} onMouseEnter={() => openMenu(item.id)}>
                      <button
                        type="button"
                        aria-expanded={activeMenu === item.id}
                        aria-controls={`mega-${item.id}`}
                        onClick={() => setActiveMenu((cur) => (cur === item.id ? null : item.id))}
                        className={navItemCls(activeMenu === item.id, true, light)}
                      >
                        {item.label}
                        <ChevronDown strokeWidth={1.7} className={chevronCls(activeMenu === item.id)} />
                      </button>
                    </li>
                  ) : (
                    <li key={item.id} onMouseEnter={() => setActiveMenu(null)}>
                      <Link to={item.href} onClick={closeAll} className={navItemCls(false, false, light)}>
                        {item.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>

              {/* language switcher */}
              <div className="relative" onMouseEnter={() => openMenu("language")}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={activeMenu === "language"}
                  onClick={() => setActiveMenu((cur) => (cur === "language" ? null : "language"))}
                  className={`cursor-pointer inline-flex h-[calc(var(--u)*4.11)] items-center gap-[calc(var(--u)*0.43)] whitespace-nowrap rounded-md pl-[calc(var(--u)*1.05)] pr-[calc(var(--u)*0.65)] text-[length:calc(var(--u)*1.087)] font-medium leading-none backdrop-blur-sm transition-colors hover:bg-ra-teal hover:text-white ${
                    light ? "bg-ra-ink/10 text-ra-teal" : "bg-white/15 text-white"
                  }`}
                >
                  {language.code}
                  <ChevronDown strokeWidth={1.7} className={chevronCls(activeMenu === "language")} />
                </button>
                <ul
                  role="listbox"
                  inert={activeMenu !== "language"}
                  className={`absolute right-0 top-full z-20 mt-2 w-48 overflow-hidden rounded-lg bg-white py-2 shadow-2xl transition-[opacity,transform,visibility] duration-250 ${EASE} ${
                    activeMenu === "language"
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  {languages.map((l) => (
                    <li key={l.code} role="option" aria-selected={l.code === language.code}>
                      <button
                        type="button"
                        onClick={() => {
                          setLanguage(l);
                          setActiveMenu(null);
                        }}
                        className={`flex w-full items-center justify-between px-5 py-2.5 text-left text-[15px] transition-colors hover:bg-ra-sage ${
                          l.code === language.code ? "font-semibold text-ra-teal" : "text-ra-ink"
                        }`}
                      >
                        {l.label}
                        <span className="text-xs text-ra-ink/50">{l.code}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Give */}
              <Link
                to={giveLink.href}
                onClick={closeAll}
                onMouseEnter={() => setActiveMenu(null)}
                className={`inline-flex h-[calc(var(--u)*4.43)] w-[calc(var(--u)*11.5)] items-center justify-center whitespace-nowrap rounded-md text-[length:calc(var(--u)*1.27)] font-semibold leading-none transition-colors duration-200 ${
                  light ? "bg-ra-teal text-white hover:bg-ra-ink" : "bg-ra-yellow text-ra-teal hover:bg-white"
                }`}
              >
                {giveLink.label}
              </Link>

              {/* search trigger — layout box = the icon; the negative margin keeps a roomy click area */}
              <button
                type="button"
                onClick={openSearch}
                aria-label="Open search"
                className={`-ml-[calc(var(--u)*0.66)] -mr-[calc(var(--u)*0.5)] grid size-[calc(var(--u)*2.63)] place-items-center rounded-md transition-transform duration-300 hover:scale-110 cursor-pointer ${light ? "text-ra-teal" : "text-white"}`}
              >
                <SearchIcon className="size-[calc(var(--u)*1.78)]" />
              </button>
            </div>

            {/* search field — reveals from the right edge towards the logo */}
            <form
              role="search"
              onSubmit={submitSearch}
              inert={!searchOpen}
              className={`absolute inset-y-0 left-6 right-0 flex items-center gap-3 transition-[clip-path,opacity] duration-[650ms] ${EASE} ${
                searchOpen
                  ? "opacity-100 [clip-path:inset(0_0_0_0)]"
                  : "opacity-0 [clip-path:inset(0_0_0_100%)]"
              }`}
            >
              <label htmlFor="site-search" className="sr-only">
                Search Rainforest Alliance
              </label>
              <div className="relative flex-1">
                <input
                  id="site-search"
                  ref={searchInput}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search Rainforest Alliance"
                  className="h-14 w-full rounded-md bg-white pl-6 pr-16 text-lg text-ra-ink shadow-xl outline-none placeholder:text-ra-ink/50 focus:ring-4 focus:ring-ra-yellow/80"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="absolute inset-y-0 right-0 grid w-16 place-items-center text-ra-teal transition-transform hover:scale-110"
                >
                  <SearchIcon className="size-6" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className={`grid size-12 shrink-0 place-items-center rounded-md transition-colors ${
                  light ? "text-ra-teal hover:bg-ra-teal/10" : "text-white hover:bg-white/15"
                }`}
              >
                <CloseIcon className="size-6 cursor-pointer" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ───────────── dropdown layers ───────────── */}
      <DesktopMegaMenu activeMenu={activeMenu} onNavigate={closeAll} />

      <MobileMenu
        open={mobileOpen}
        onNavigate={closeAll}
        query={query}
        onQueryChange={setQuery}
        onSearch={submitSearch}
        language={language}
        onLanguageChange={setLanguage}
      />
    </header>
  );
}
