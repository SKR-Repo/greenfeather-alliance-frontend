import { Link } from "react-router-dom";
import { mainNav } from "../../../data/navigation";
import { ChevronRight } from "../../common/Icons";
import SealBadge from "../../common/SealBadge";

// Small "label ›" link used all over the panels.
const ArrowLink = ({ to, onClick, className = "", children }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`group inline-flex items-center gap-1.5 underline-offset-[6px] decoration-2 hover:underline ${className}`}
  >
    {children}
    <ChevronRight className="size-[0.62em] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
);

function Panel({ menu, open, onNavigate }) {
  const { side, heading, links, promo, seal } = menu;

  return (
    <div className="grid grid-cols-[28fr_36fr_36fr]">
      {/* ── left column (sage) ───────────────────────────── */}
      <aside className="row-span-2 bg-ra-sage px-[clamp(1.5rem,2.85vw,3.5rem)] pb-12 pt-[clamp(2rem,3.9vw,4.5rem)]">
        {side.type === "featured" ? (
          <>
            <SealBadge className="size-[clamp(4rem,4.75vw,5.75rem)]" />
            <ArrowLink
              to={side.href}
              onClick={onNavigate}
              className="mt-[clamp(1rem,2vw,2.25rem)] text-[clamp(1.2rem,1.55vw,1.9rem)] font-semibold text-ra-teal"
            >
              {side.title}
            </ArrowLink>
            <p className="mt-4 max-w-[19rem] text-[clamp(0.9rem,1.1vw,1.3rem)] leading-relaxed text-ra-ink">
              {side.description}
            </p>
          </>
        ) : (
          <>
            <p className="text-[clamp(1rem,1.3vw,1.5rem)] font-bold text-ra-ink">{side.title}</p>
            <ul className="mt-[clamp(1rem,1.7vw,2rem)] flex flex-col gap-[clamp(0.9rem,1.5vw,1.7rem)]">
              {side.links.map((l) => (
                <li key={l.href}>
                  <ArrowLink
                    to={l.href}
                    onClick={onNavigate}
                    className="text-[clamp(0.95rem,1.2vw,1.4rem)] text-ra-ink"
                  >
                    {l.label}
                  </ArrowLink>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      {/* ── centre column (links) ────────────────────────── */}
      <div className="px-[clamp(1.5rem,2.85vw,3.5rem)] pb-10 pt-[clamp(2.25rem,3.9vw,4.5rem)]">
        <ArrowLink
          to={heading.href}
          onClick={onNavigate}
          className="text-[clamp(1.35rem,1.75vw,2.1rem)] font-bold text-ra-teal"
        >
          {heading.label}
        </ArrowLink>
        <ul className="mt-[clamp(1.25rem,2vw,2.4rem)] flex flex-col gap-[clamp(0.9rem,1.75vw,2.1rem)]">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${110 + i * 45}ms` : "0ms" }}
              className={`transition-[opacity,transform] duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <ArrowLink
                to={l.href}
                onClick={onNavigate}
                className="text-[clamp(1rem,1.3vw,1.55rem)] text-ra-ink hover:text-ra-teal"
              >
                {l.label}
              </ArrowLink>
            </li>
          ))}
        </ul>
      </div>

      {/* ── right column (yellow promo card) ─────────────── */}
      <div className="p-[clamp(1rem,1.25vw,1.5rem)]">
        <div className="rounded-xl bg-ra-yellow p-[clamp(1.25rem,1.6vw,1.9rem)]">
          <h3 className="text-[clamp(0.95rem,1.3vw,1.55rem)] font-semibold uppercase tracking-wide text-ra-teal">
            {promo.title}
          </h3>
          <p className="mt-[clamp(0.75rem,1.2vw,1.4rem)] text-[clamp(1rem,1.38vw,1.65rem)] leading-snug text-ra-teal/90">
            {promo.text}
          </p>
          <Link
            to={promo.cta.href}
            onClick={onNavigate}
            className="group mt-[clamp(1.25rem,2vw,2.4rem)] inline-flex items-center gap-2 rounded-md bg-ra-teal px-[clamp(1rem,1.3vw,1.6rem)] py-[clamp(0.8rem,1.3vw,1.6rem)] text-[clamp(0.9rem,1.05vw,1.25rem)] font-semibold text-white transition-colors duration-300 hover:bg-ra-ink"
          >
            {promo.cta.label}
            <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* ── optional seal strip (For Business) ───────────── */}
      {seal && (
        <div className="col-span-2 col-start-2 px-[clamp(1rem,1.25vw,1.5rem)] pb-[clamp(1rem,1.25vw,1.5rem)]">
          <Link
            to={seal.href}
            onClick={onNavigate}
            className="group flex items-center gap-[clamp(1rem,1.6vw,2rem)] rounded-xl bg-ra-sage px-[clamp(1rem,1.5vw,1.8rem)] py-[clamp(1rem,1.5vw,1.8rem)] transition-colors duration-300 hover:bg-[#dbe5e6]"
          >
            <SealBadge className="size-[clamp(3.5rem,5.2vw,6.25rem)] shrink-0" />
            <div className="flex-1">
              <p className="text-[clamp(0.75rem,0.95vw,1.1rem)] font-semibold uppercase tracking-wide text-ra-teal">
                {seal.title}
              </p>
              <p className="mt-1 text-[clamp(0.8rem,1.05vw,1.25rem)] leading-snug text-ra-teal/90">
                {seal.text}
              </p>
            </div>
            <ChevronRight className="size-4 shrink-0 text-ra-teal transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      )}
    </div>
  );
}

/**
 * Full-width dropdown panels, one per nav item that has `menu` data.
 * They stay mounted and are faded / slid in with CSS, which is what makes the
 * open + close feel smooth (no mount/unmount flicker).
 */
export default function DesktopMegaMenu({ activeMenu, onNavigate }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-[calc(var(--u)*5.485)] z-0 hidden lg:block">
      {mainNav
        .filter((item) => item.menu)
        .map((item) => {
          const open = activeMenu === item.id;
          return (
            <div
              key={item.id}
              id={`mega-${item.id}`}
              inert={!open}
              className={`absolute inset-x-0 top-0 bg-white shadow-[0_40px_70px_-30px_rgba(0,0,0,0.45)] transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open
                  ? "pointer-events-auto visible translate-y-0 opacity-100"
                  : "invisible -translate-y-3 opacity-0"
              }`}
            >
              <Panel menu={item.menu} open={open} onNavigate={onNavigate} />
            </div>
          );
        })}
    </div>
  );
}
