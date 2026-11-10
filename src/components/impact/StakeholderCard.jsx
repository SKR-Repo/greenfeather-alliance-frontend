import { useState } from "react";
import { CheckCircleIcon, StatIcon } from "./ImpactIcons";

/*
  One card of "The power of our alliance".

  FRONT: image · title · text · 1–2 stat rows ("highlighters")
  BACK : "Benefits for …" + check list (opens with the + button, closes with the ×)

  Both faces sit in the SAME grid cell, so the card is always as tall as its tallest face
  (no overflow on phones where the benefit lists are long) and every card in the rail
  stretches to the same height.

  Transition (≈ 0.6s, staggered): the front softly fades, drifts up and shrinks a hair while
  the back fades in and its list items slide up one after another; the + turns 45° into a ×.
  Reduced motion → plain, instant swap.

  Sizes: phones use px/rem, lg+ scale with the screen in vw (measured on the live site at 1900px).
*/
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

function Stat({ stat }) {
  return (
    <li className="flex items-start gap-3 border-t border-[#17545b]/20 py-4 lg:gap-[0.75vw] lg:py-[1.32vw]">
      <StatIcon
        name={stat.icon}
        className="mt-[1px] size-8 shrink-0 text-ra-teal lg:mt-[-0.05vw] lg:size-[2.45vw]"
      />
      <p className="text-[1.05rem] leading-[1.45] text-[#0c2f33] lg:text-[max(1rem,1.58vw)] lg:leading-[1.2]">
        <strong className="font-semibold">{stat.bold}</strong> {stat.text}
        <sup className="ml-[1px] align-super text-[0.6em] font-medium leading-none text-[#1f56c3]">
          {stat.sup}
        </sup>
      </p>
    </li>
  );
}

export default function StakeholderCard({ card, shown, index }) {
  const [open, setOpen] = useState(false);
  const { id, image, alt, title, text, stats, benefitsTitle, benefits } = card;
  const panelId = `${id}-benefits`;

  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      style={{ transitionDelay: shown ? `${index * 90}ms` : "0ms" }}
      className={`relative flex w-[calc(100vw-22px)] shrink-0 snap-center flex-col rounded-[28px] bg-[#e8eded] p-9 pb-[6.2rem] transition-[opacity,transform] duration-[900ms] ${EASE} motion-reduce:transition-none sm:w-[30rem] md:w-[34rem] md:p-12 md:pb-[7rem] lg:w-[39.5vw] lg:snap-align-none lg:rounded-[2.6vw] lg:p-[3.15vw] lg:pb-[7.6vw] ${
        shown ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
    >
      <div className="grid flex-1">
        {/* ───────── FRONT ───────── */}
        <div
          inert={open}
          className={`[grid-area:1/1] transition-[opacity,transform] duration-[600ms] ${EASE} motion-reduce:transition-none ${
            open ? "-translate-y-3 scale-[0.985] opacity-0" : "translate-y-0 scale-100 opacity-100 delay-[180ms]"
          }`}
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="aspect-[1.77] w-full rounded-[18px] object-cover lg:rounded-[1.5vw]"
          />

          <h3
            id={`${id}-title`}
            className="mt-7 text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-[#0f2f31] lg:mt-[2vw] lg:text-[max(1.5rem,2.15vw)]"
          >
            {title}
          </h3>

          <p className="mt-5 text-base leading-[1.6] text-[#0c2f33] lg:mt-[2.3vw] lg:text-[max(0.95rem,1.25vw)] lg:leading-[1.52]">
            {text}
          </p>

          <ul className="mt-6 lg:mt-[1.95vw]">
            {stats.map((s) => (
              <Stat key={s.text} stat={s} />
            ))}
          </ul>
        </div>

        {/* ───────── BACK ───────── */}
        <div
          id={panelId}
          inert={!open}
          aria-hidden={!open}
          className={`[grid-area:1/1] transition-opacity duration-[500ms] ${EASE} motion-reduce:transition-none lg:pt-[1.1vw] ${
            open ? "opacity-100 delay-[160ms]" : "pointer-events-none opacity-0"
          }`}
        >
          <h3
            style={{ transitionDelay: open ? "200ms" : "0ms" }}
            className={`text-[1.2rem] font-semibold leading-[1.3] text-[#0f2f31] transition-[opacity,transform] duration-[600ms] ${EASE} motion-reduce:transition-none lg:text-[max(1.15rem,1.42vw)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {benefitsTitle}
          </h3>

          <ul className="mt-5 space-y-5 lg:mt-[1.55vw] lg:space-y-[1.26vw]">
            {benefits.map((b, i) => (
              <li
                key={b}
                style={{ transitionDelay: open ? `${280 + i * 70}ms` : "0ms" }}
                className={`flex items-start gap-4 transition-[opacity,transform] duration-[650ms] ${EASE} motion-reduce:transition-none lg:gap-[1.1vw] ${
                  open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
              >
                <CheckCircleIcon className="mt-[2px] size-6 shrink-0 text-ra-teal lg:mt-[0.2vw] lg:size-[1.3vw] lg:min-h-5 lg:min-w-5" />
                <span className="text-base leading-[1.55] text-[#0c2f33] lg:text-[max(0.95rem,1.25vw)] lg:leading-[1.52]">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* + / × toggle — the plus rotates 45° into a cross */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? `Close ${title} benefits` : `Show benefits for ${title}`}
        className="group absolute bottom-7 right-7 grid size-[54px] cursor-pointer place-items-center rounded-[5px] bg-ra-teal text-white transition-colors duration-300 hover:bg-[#0f3f45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ra-teal lg:bottom-[3.25vw] lg:right-[3.78vw] lg:size-[4.3vw] lg:min-h-12 lg:min-w-12 lg:rounded-[0.35vw]"
      >
        <span
          aria-hidden
          className={`relative block size-[22px] transition-transform duration-500 ${EASE} motion-reduce:transition-none lg:size-[1.3vw] lg:min-h-4 lg:min-w-4 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current" />
          <span className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 bg-current" />
        </span>
      </button>
    </article>
  );
}
