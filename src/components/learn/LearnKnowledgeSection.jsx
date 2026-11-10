import { LEARN_KNOWLEDGE } from "../../data/learnSections";
import SmartLink from "../common/SmartLink";

/*
  Learn section 7 (last) — rounded banner: a green banana-leaf photo as the background, the text pinned
  to the bottom-left over a dark-green veil, and a yellow button. No parallax — the photo is static.
  The thin line under it (border-b) is the divider between the page and the footer.
  Desktop (lg+): sizes in vw (measured at 1900px wide): 1.3vw page gutter, card 58.1vw tall, text inset
  2.5vw, title 2.7vw, text 1.58vw. Mobile: 24px gutter, text inset 12px.
*/
export default function LearnKnowledgeSection() {
  const { image, title, text, linkLabel, href } = LEARN_KNOWLEDGE;

  return (
    <section aria-labelledby="learn-knowledge-title" className="relative z-10 border-b border-black/10 bg-white px-6 pb-8 pt-4 sm:px-8 sm:pb-10 lg:px-[1.3vw] lg:pb-[3.8vw] lg:pt-[2.8vw]">
      <div className="relative isolate flex min-h-[150vw] items-end overflow-hidden rounded-3xl sm:min-h-[70vw] lg:min-h-[58.1vw] lg:rounded-[1.4vw]">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(30,75,55,0.96),rgba(30,75,55,0.6)_30%,rgba(30,75,55,0.1)_58%,rgba(30,75,55,0)_100%)]"
        />

        <div className="w-full px-3 pb-3 text-white sm:px-8 sm:pb-8 lg:px-[2.5vw] lg:pb-[2.5vw]">
          <h2
            id="learn-knowledge-title"
            className="font-body text-[1.4rem] font-semibold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.7vw]"
          >
            {title}
          </h2>
          <p className="mt-5 text-base leading-[1.5] sm:text-lg lg:mt-[1.5vw] lg:text-[1.58vw]">{text}</p>
          <SmartLink
            href={href}
            className="mt-4 inline-flex h-[3.2rem] items-center rounded-[4px] bg-ra-yellow px-5 text-[0.95rem] font-semibold text-ra-teal transition-[filter,transform] duration-300 hover:brightness-95 active:scale-[0.98] sm:text-base lg:mt-[1.6vw] lg:h-[4.4vw] lg:rounded-[0.25vw] lg:px-[1vw] lg:text-[1.3vw]"
          >
            {linkLabel}
          </SmartLink>
        </div>
      </div>
    </section>
  );
}
