import { ASSETS } from "../../constants/assets";
import { GIVE_HERO } from "../../data/getInvolvedSections";
import ParallaxHero from "../common/ParallaxHero";
import DonationForm from "./DonationForm";

/*
  Get Involved hero — same walk-over structure as the Home / Work heroes (ParallaxHero), ocean photo.

  Desktop (lg+), sizes in vw (measured at 1894px wide):
    left  : headline 6.3vw / 6.34vw line pitch (3 fixed lines, white + aqua), text 1.58vw Poppins,
            anchored to the bottom of the first screen
    right : donation card 38.9vw wide, its top at 16.3vw; it is taller than the first screen, so the
            hero runs past the fold and the next section walks over the photo after the card.
  Mobile / tablet: headline, text, then the donation card stacked.
*/
export default function GetInvolvedHeroSection() {
  const { alt, titleLines, text } = GIVE_HERO;

  return (
    <ParallaxHero image={ASSETS.getInvolvedHero} alt={alt} imageClassName="object-center" contentClassName="pb-0">
      <div className="pb-12 lg:grid lg:grid-cols-[1fr_38.9vw] lg:items-start lg:pb-[4.2vw] lg:pl-[10.8vw] lg:pr-[10.6vw]">
        <div className="flex min-h-svh items-end pb-6 pl-[11vw] pr-6 pt-40 lg:h-svh lg:min-h-[44rem] lg:p-0 lg:pr-[0.8vw]">
          <div>
            <h1 className="font-hero text-[clamp(2rem,9.4vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] lg:whitespace-nowrap lg:text-[6.3vw] lg:leading-[6.34vw] lg:tracking-[-0.08em]">
              {titleLines.map((line, i) => (
                <span
                  key={line.text}
                  className={`${i === 0 ? "block" : "lg:block"} ${line.tone === "aqua" ? "text-[#90faf3]" : "text-white"}`}
                >
                  {line.text}{" "}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-[34rem] text-xl leading-[1.5] text-white md:max-w-[44rem] lg:mt-[3.2vw] lg:max-w-none lg:text-[1.58vw]">
              {text}
            </p>
          </div>
        </div>

        <div className="mx-[11vw] mt-8 lg:mx-0 lg:mt-[16.3vw]">
          <DonationForm />
        </div>
      </div>
    </ParallaxHero>
  );
}
