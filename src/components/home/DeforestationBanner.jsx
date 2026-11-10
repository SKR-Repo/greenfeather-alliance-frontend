import { DEFORESTATION } from "../../data/homeSections";

/*
  Home section 3 (part 1) — rounded forest photo card with centred headline + text.
  The photo scrolls with the card (as on the live site). A soft veil keeps white
  text readable on the bright forest side.
  White page gutter around the card is 1.3vw on desktop, 16px on mobile.
*/
export default function DeforestationBanner() {
  const { image, alt, title, text } = DEFORESTATION;

  return (
    <section className="relative bg-white px-4 pt-8 sm:px-5 sm:pt-10 lg:px-[1.3vw] lg:pt-[3.8vw]">
      <div className="relative isolate flex min-h-[135vw] items-center justify-center overflow-hidden rounded-[22px] sm:min-h-[70vw] lg:min-h-[58vw] lg:rounded-[1.6vw]">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/20 lg:bg-black/10" />

        <div className="mx-auto max-w-[19rem] px-1 text-center text-white sm:max-w-xl lg:max-w-none lg:w-[56vw]">
          <h2 className="font-body text-[1.9rem] font-semibold leading-[1.18] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.25)] sm:text-4xl lg:text-[3.9vw] lg:leading-[1.22]">
            {title}
          </h2>
          <p className="mx-auto mt-6 text-[0.98rem] leading-[1.6] [text-shadow:0_1px_14px_rgba(0,0,0,0.4)] sm:text-lg lg:mt-[1.6vw] lg:w-[54vw] lg:text-[1.56vw] lg:leading-[1.52]">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
