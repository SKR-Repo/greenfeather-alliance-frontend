import { useEffect, useRef, useState } from "react";
import useInView from "../../hooks/useInView";
import AreaIcon, { InfoDot } from "./AreaIcons";

/*
  One topic of "Our areas of impact" (right-hand column):
    icon · title · text → big-number card (number + video/photo) → "2030 goal" card → accordion rows

  Phones / tablets: everything stacks. lg+: sizes scale with the screen in vw (measured on the
  live site at 1900px wide). All colours come from `topic.theme`.
*/
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function Rich({ parts }) {
  const list = Array.isArray(parts) ? parts : [parts];
  return list.map((p, i) => {
    if (typeof p === "string") return <span key={i}>{p}</span>;
    if (p.sub) return <sub key={i} className="text-[0.6em]">{p.sub}</sub>;
    if (p.b) return <strong key={i} className="font-semibold">{p.b}</strong>;
    if (p.br) return <br key={i} />;
    return null;
  });
}

/* scroll-in reveal (once) */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: on ? `${delay}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-[900ms] ${EASE} motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* video plays only while on screen */
function AutoVideo({ src, className }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) el.play().catch(() => {});
      else el.pause();
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} src={src} muted loop playsInline preload="metadata" aria-hidden className={className} />;
}

/* ───────────── card 1 : big number + media ───────────── */
function StatCard({ stat, theme }) {
  const { icon, number, bold, text, media, caption, captionDark, tint } = stat;
  return (
    <div className="grid overflow-hidden rounded-[24px] md:grid-cols-2 lg:h-[33.4vw] lg:rounded-[2.3vw]">
      {/* left : number */}
      <div
        style={{ backgroundColor: theme.card1, "--icon-cut": theme.card1, "--info-ink": theme.card1 }}
        className="relative flex min-h-[21rem] flex-col justify-end px-7 pb-8 pt-24 text-white lg:min-h-0 lg:px-[2.3vw] lg:pb-[2.9vw] lg:pt-[2vw]"
      >
        <InfoDot className="absolute right-5 top-5 size-[18px] md:hidden" />
        <InfoDot className="absolute right-[2.1vw] top-[1.5vw] hidden size-[1.7vw] md:block" />
        <AreaIcon name={icon} className="size-[4.4rem] text-white lg:size-[5.8vw]" />
        <p className="mt-6 text-[4.2rem] font-extrabold leading-[1.02] tracking-[-0.035em] lg:mt-[3.2vw] lg:text-[6vw]">
          {number}
        </p>
        <p className="mt-2 text-[1.2rem] leading-[1.5] lg:mt-[0.5vw] lg:max-w-[25vw] lg:text-[max(1.05rem,1.8vw)] lg:leading-[1.45]">
          {bold && <strong className="font-semibold">{bold}</strong>}
          {text}
        </p>
      </div>

      {/* right : photo / video + caption */}
      <div className="relative min-h-[19rem] overflow-hidden bg-black lg:min-h-0">
        {media.type === "video" ? (
          <AutoVideo src={media.src} className="absolute inset-0 size-full object-cover grayscale" />
        ) : (
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 size-full object-cover ${tint === "full" ? "grayscale" : ""}`}
          />
        )}
        {tint === "full" ? (
          <div aria-hidden style={{ backgroundColor: theme.overlay }} className="absolute inset-0 mix-blend-multiply" />
        ) : (
          <div
            aria-hidden
            style={{ background: `linear-gradient(to top, ${theme.overlay} 0%, ${theme.overlay} 42%, ${theme.overlay}00 78%)` }}
            className="absolute inset-0"
          />
        )}
        <p
          style={{ color: captionDark ? theme.card1 : "#fff" }}
          className="absolute inset-x-7 bottom-8 text-[1.1rem] leading-[1.6] lg:inset-x-[3.2vw] lg:bottom-[2.9vw] lg:text-[max(0.95rem,1.4vw)] lg:leading-[1.65]"
        >
          <Rich parts={caption} />
        </p>
      </div>
    </div>
  );
}

/* ───────────── card 2 : "xx% of the way" + 2030 goal graph ───────────── */
function GoalCard({ goal, theme }) {
  const ref = useRef(null);
  const seen = useInView(ref, 0.45); // bar fills each time the card scrolls into view
  const pct = goal.percent;

  return (
    <div
      ref={ref}
      style={{ backgroundColor: theme.card2, color: theme.accent }}
      className="grid overflow-hidden rounded-[24px] md:grid-cols-2 lg:h-[33.4vw] lg:rounded-[2.3vw]"
    >
      <div className="flex min-h-[14rem] flex-col justify-end px-7 pb-8 pt-10 lg:min-h-0 lg:px-[2.3vw] lg:pb-[2.9vw]">
        <AreaIcon name="flag" className="size-10 lg:size-[2.6vw]" />
        <p className="mt-4 text-[2.2rem] font-semibold leading-[1.22] tracking-[-0.01em] lg:mt-[1vw] lg:text-[2.75vw] lg:leading-[1.25]">
          {pct}% of the way
          <br />
          toward our goal
        </p>
      </div>

      <div className="p-4 lg:p-[1.85vw]">
        <div
          style={{ backgroundColor: theme.sub }}
          className="flex h-full min-h-[22rem] flex-col rounded-[22px] px-6 pb-8 pt-7 lg:min-h-0 lg:rounded-[2.1vw] lg:px-[2.3vw] lg:pb-[2.2vw] lg:pt-[2vw]"
        >
          <h4 className="text-[1.5rem] font-semibold uppercase leading-none lg:text-[1.9vw]">2030 Goal</h4>
          <p className="mt-3 text-[0.98rem] leading-[1.55] text-[#10302f] lg:mt-[0.8vw] lg:text-[max(0.85rem,1.03vw)] lg:leading-[1.6]">
            {goal.text}
          </p>

          {/* graph */}
          <div className="relative mt-auto pt-10 lg:pt-[2vw]">
            <p className="mb-2 pr-0 text-right text-[0.85rem] lg:mb-[0.45vw] lg:text-[max(0.75rem,0.95vw)]">100% by 2030</p>
            <div className="relative">
              {/* tick for 100% */}
              <span aria-hidden style={{ backgroundColor: theme.accent }} className="absolute -top-[2.4rem] right-0 h-[2.4rem] w-px lg:-top-[3.1vw] lg:h-[3.1vw]" />
              <div style={{ backgroundColor: theme.card2 }} className="h-12 w-full overflow-hidden rounded-[10px] lg:h-[3.8vw] lg:rounded-[0.8vw]">
                <div
                  style={{ width: seen ? `${pct}%` : "0%", backgroundColor: theme.accent }}
                  className="h-full rounded-[10px] transition-[width] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:rounded-[0.8vw]"
                />
              </div>
              {/* tick + label for "xx% in 2025" */}
              <span
                aria-hidden
                style={{ left: seen ? `${pct}%` : "0%", backgroundColor: theme.accent }}
                className="absolute top-0 h-[4.4rem] w-px transition-[left] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:h-[5.6vw]"
              />
              <p
                style={{ left: seen ? `${pct}%` : "0%" }}
                className="absolute top-[3.7rem] -translate-x-full whitespace-nowrap pr-2 text-[0.85rem] transition-[left] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:top-[4.5vw] lg:pr-[0.5vw] lg:text-[max(0.75rem,0.95vw)]"
              >
                {pct}% in 2025
              </p>
            </div>
            <div className="h-9 lg:h-[2.6vw]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── accordion rows (one open at a time) ───────────── */
function Rows({ rows, theme }) {
  const firstOpen = rows.findIndex((r) => r.body);
  const [open, setOpen] = useState(firstOpen);

  return (
    <ul className="space-y-3 lg:space-y-[1.4vw]">
      {rows.map((r, i) => {
        const expandable = Boolean(r.body);
        const isOpen = expandable && open === i;
        const head = (
          <>
            <AreaIcon name={r.icon} className="mt-[3px] size-7 shrink-0 lg:mt-[0.45vw] lg:size-[2.2vw]" />
            <span className="min-w-0 flex-1 text-[1.15rem] leading-[1.45] lg:text-[max(1rem,1.78vw)] lg:leading-[1.6]">
              <strong className="font-semibold">{r.bold}</strong>
              {r.text ? ` ${r.text}` : ""}
            </span>
            {expandable && (
              <AreaIcon
                name="chevron"
                className={`mt-[6px] size-5 shrink-0 transition-transform duration-500 ${EASE} lg:mt-[0.8vw] lg:size-[1.3vw] ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </>
        );
        const headClass = "flex w-full items-start gap-4 px-5 py-5 text-left lg:gap-[1.2vw] lg:px-[1.95vw] lg:py-[1.9vw]";
        return (
          <li
            key={r.text + r.bold}
            style={{ backgroundColor: theme.row, color: theme.rowInk }}
            className="overflow-hidden rounded-[18px] lg:rounded-[1.7vw]"
          >
            {expandable ? (
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className={`${headClass} cursor-pointer`}
              >
                {head}
              </button>
            ) : (
              <div className={headClass}>{head}</div>
            )}
            {expandable && (
              <div
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                className={`grid transition-[grid-template-rows] duration-500 ${EASE} motion-reduce:transition-none`}
              >
                <div className="overflow-hidden">
                  <p
                    className={`border-t px-5 pb-6 pt-4 text-[1rem] leading-[1.6] transition-opacity duration-500 motion-reduce:transition-none lg:px-[1.95vw] lg:pb-[2vw] lg:pt-[1.1vw] lg:text-[max(0.9rem,1.5vw)] lg:leading-[1.6] ${
                      isOpen ? "opacity-100 delay-150" : "opacity-0"
                    }`}
                    style={{ borderColor: `${theme.rowInk}1a` }}
                  >
                    {r.body}
                  </p>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function AreaTopic({ topic }) {
  const { id, title, icon, text, theme, stat, goal, rows } = topic;
  return (
    <article id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 lg:scroll-mt-[4vw]">
      <Reveal>
        <AreaIcon name={icon} style={{ color: theme.ink, "--icon-cut": theme.bg }} className="size-12 lg:size-[3.2vw]" />
        <h3
          id={`${id}-title`}
          style={{ color: theme.ink }}
          className="mt-3 font-hero text-[2.15rem] font-black uppercase leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:mt-[0.8vw] lg:text-[3.2vw] lg:tracking-[-0.07em]"
        >
          {title}
        </h3>
        <p className="mt-5 text-[1rem] leading-[1.65] text-[#0c2f33] lg:mt-[1.2vw] lg:text-[max(0.95rem,1.5vw)] lg:leading-[1.6]">
          <Rich parts={text} />
        </p>
      </Reveal>

      <Reveal className="mt-8 lg:mt-[1.6vw]" delay={80}>
        <StatCard stat={stat} theme={theme} />
      </Reveal>
      <Reveal className="mt-4 lg:mt-[1.4vw]" delay={80}>
        <GoalCard goal={goal} theme={theme} />
      </Reveal>

      {rows.length > 0 && (
        <Reveal className="mt-5 lg:mt-[2.5vw]" delay={80}>
          <Rows rows={rows} theme={theme} />
        </Reveal>
      )}
    </article>
  );
}
