import { useState } from "react";
import { Link } from "react-router-dom";
import { mainNav, languages } from "../../../data/navigation";
import Collapsible from "../../common/Collapsible";
import { ChevronDown, ChevronRight, SearchIcon } from "../../common/Icons";
import SealBadge from "../../common/SealBadge";

const rowCls =
  "flex w-full items-center justify-between border-b border-ra-teal/20 px-4 py-[15px] text-left text-[15px] text-ra-teal";

const SubLink = ({ to, onClick, className = "", children }) => (
  <Link to={to} onClick={onClick} className={`flex items-center gap-1.5 ${className}`}>
    {children}
    <ChevronRight className="size-2.5" />
  </Link>
);

function SubMenu({ menu, onNavigate }) {
  return (
    <div className="bg-white px-4 pb-6 pt-5">
      <SubLink to={menu.heading.href} onClick={onNavigate} className="py-2 text-[15px] font-bold text-ra-teal">
        {menu.heading.label}
      </SubLink>
      <ul className="mt-1">
        {menu.links.map((l) => (
          <li key={l.href}>
            <SubLink to={l.href} onClick={onNavigate} className="py-2.5 text-[14px] text-ra-ink">
              {l.label}
            </SubLink>
          </li>
        ))}
      </ul>

      <div className="mt-5 rounded-xl bg-ra-yellow p-5">
        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ra-teal">{menu.promo.title}</h3>
        <p className="mt-2.5 text-[14px] leading-snug text-ra-teal/90">{menu.promo.text}</p>
        <Link
          to={menu.promo.cta.href}
          onClick={onNavigate}
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-ra-teal px-4 py-3 text-[13px] font-semibold text-white"
        >
          {menu.promo.cta.label}
          <ChevronRight className="size-3" />
        </Link>
      </div>

      {menu.side.type === "links" && (
        <div className="mt-6">
          <p className="text-[13px] font-bold text-ra-ink">{menu.side.title}</p>
          <ul className="mt-1">
            {menu.side.links.map((l) => (
              <li key={l.href}>
                <SubLink to={l.href} onClick={onNavigate} className="py-2.5 text-[14px] text-ra-ink">
                  {l.label}
                </SubLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {menu.side.type === "featured" && (
        <Link
          to={menu.side.href}
          onClick={onNavigate}
          className="mt-5 flex flex-col items-center rounded-xl bg-ra-sage p-5 text-center"
        >
          <SealBadge className="size-16" />
          <span className="mt-3 text-[15px] font-semibold text-ra-teal">{menu.side.title} ›</span>
          <span className="mt-1 text-[13px] leading-snug text-ra-ink">{menu.side.description}</span>
        </Link>
      )}

      {menu.seal && (
        <Link
          to={menu.seal.href}
          onClick={onNavigate}
          className="mt-5 flex flex-col gap-2 rounded-xl bg-ra-sage p-5"
        >
          <SealBadge className="mx-auto size-16" />
          <span className="text-[12px] font-semibold uppercase tracking-wide text-ra-teal">{menu.seal.title}</span>
          <span className="text-[12.5px] leading-snug text-ra-teal/90">{menu.seal.text}</span>
        </Link>
      )}
    </div>
  );
}

/**
 * Full-screen mobile / tablet menu (< lg). Sits under the header bar.
 * Accordions animate with Collapsible; only one section is open at a time.
 */
export default function MobileMenu({
  open,
  onNavigate,
  query,
  onQueryChange,
  onSearch,
  language,
  onLanguageChange,
}) {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded((cur) => (cur === id ? null : id));

  return (
    <div
      id="mobile-menu"
      inert={!open}
      className={`absolute inset-x-0 top-[66px] z-0 h-[calc(100svh-66px)] overflow-y-auto overscroll-contain bg-ra-sage transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden ${
        open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
      }`}
    >
      <form role="search" onSubmit={onSearch} className="px-4 pb-6 pt-8">
        <label htmlFor="mobile-search" className="sr-only">
          Search Rainforest Alliance
        </label>
        <div className="relative">
          <input
            id="mobile-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search Rainforest Alliance"
            className="h-11 w-full rounded-md border border-ra-teal/10 bg-white pl-3 pr-11 text-[14px] text-ra-ink outline-none placeholder:text-ra-ink/55 focus:ring-2 focus:ring-ra-teal/40"
          />
          <button type="submit" aria-label="Search" className="absolute inset-y-0 right-0 grid w-11 place-items-center text-ra-ink">
            <SearchIcon className="size-4" />
          </button>
        </div>
      </form>

      <nav aria-label="Mobile" className="border-t border-ra-teal/20 pb-24">
        <ul>
          {mainNav.map((item) =>
            item.menu ? (
              <li key={item.id}>
                <button
                  type="button"
                  className={`${rowCls} ${expanded === item.id ? "bg-ra-sage" : ""}`}
                  aria-expanded={expanded === item.id}
                  onClick={() => toggle(item.id)}
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${expanded === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                <Collapsible open={expanded === item.id}>
                  <SubMenu menu={item.menu} onNavigate={onNavigate} />
                </Collapsible>
              </li>
            ) : (
              <li key={item.id}>
                <Link to={item.href} onClick={onNavigate} className={rowCls}>
                  {item.label}
                </Link>
              </li>
            ),
          )}

          <li>
            <button
              type="button"
              className={rowCls}
              aria-expanded={expanded === "lang"}
              onClick={() => toggle("lang")}
            >
              {language.label}
              <ChevronDown
                className={`size-4 transition-transform duration-300 ${expanded === "lang" ? "rotate-180" : ""}`}
              />
            </button>
            <Collapsible open={expanded === "lang"}>
              <ul className="bg-white px-4 py-2">
                {languages.map((l) => (
                  <li key={l.code}>
                    <button
                      type="button"
                      onClick={() => {
                        onLanguageChange(l);
                        setExpanded(null);
                      }}
                      className={`w-full py-2.5 text-left text-[14px] ${
                        l.code === language.code ? "font-semibold text-ra-teal" : "text-ra-ink"
                      }`}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </Collapsible>
          </li>
        </ul>
      </nav>
    </div>
  );
}
