import { SITUATIONS } from "../../data/getStartedSections";
import SmartLink from "../common/SmartLink";
import { ButtonRow, StepButton } from "./FormControls";
import { TITLE } from "./formStyles";

const BODY = "text-base leading-[1.55] text-ra-ink lg:text-[length:max(16px,calc(var(--g)*1.3))]";

/** Step 3 — information panel for the situation chosen in step 2. */
export default function GetStartedInfoStep({ situationId, onPrev, onNext }) {
  const { info } = SITUATIONS.find((s) => s.id === situationId) ?? SITUATIONS[0];

  return (
    <section
      data-step-title
      tabIndex={-1}
      aria-label="Step 3 of 4: what we offer"
      className="outline-none transition-[opacity,transform] duration-500 starting:translate-y-2 starting:opacity-0"
    >
      <h3 className="font-semibold text-ra-teal text-[1.5rem] leading-tight lg:text-[length:max(22px,calc(var(--g)*2.1))]">{info.title}</h3>
      <p className={`mt-3 lg:mt-[calc(var(--g)*0.8)] ${BODY}`}>{info.intro}</p>

      {info.items.map((item) => (
        <div key={item.label} className="mt-5 lg:mt-[calc(var(--g)*1.1)]">
          <SmartLink
            href={item.href}
            className="text-[1.0625rem] font-semibold text-[#1d4ed8] underline underline-offset-2 hover:text-ra-teal lg:text-[length:max(17px,calc(var(--g)*1.4))]"
          >
            {item.label}
          </SmartLink>
          <p className={`mt-1 ${BODY}`}>{item.text}</p>
        </div>
      ))}

      {info.bullets && (
        <ul className="mt-5 list-disc space-y-4 pl-6 marker:text-ra-ink lg:mt-[calc(var(--g)*1.1)] lg:space-y-[calc(var(--g)*0.9)] lg:pl-[calc(var(--g)*1.9)]">
          {info.bullets.map((b) => (
            <li key={b} className={`pl-1 ${BODY}`}>
              {b}
            </li>
          ))}
        </ul>
      )}

      <p className={`mt-6 font-bold text-ra-teal lg:mt-[calc(var(--g)*1.2)] ${TITLE}`}>
        {info.closing}
      </p>

      <ButtonRow>
        <StepButton onClick={onPrev}>Previous</StepButton>
        <StepButton onClick={onNext}>Next</StepButton>
      </ButtonRow>
    </section>
  );
}
