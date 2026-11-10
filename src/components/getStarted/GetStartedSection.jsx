import { useCallback, useEffect, useRef, useState } from "react";
import { DETAILS_STEP, GET_STARTED_INTRO } from "../../data/getStartedSections";
import { submitGetStarted } from "../../services/getStarted";
import GetStartedDetailsStep from "./GetStartedDetailsStep";
import GetStartedInfoStep from "./GetStartedInfoStep";
import GetStartedNameStep from "./GetStartedNameStep";
import GetStartedSituationStep from "./GetStartedSituationStep";
import GetStartedThankYou from "./GetStartedThankYou";
import { INITIAL_DATA } from "./formUtils";

/*
  Get Started — the only section of the page: white background, intro copy, then a sage (#E8EEEE)
  card that walks through 4 steps in place  (name → situation → what we offer → details),
  and finally swaps the whole section for the "Thank you" message.

  The navbar is absolutely positioned (it floats over page tops), so this section keeps the
  clearance for it in its own top padding. Navbar = light style: see LIGHT_ROUTES in Navbar.jsx.

  Desktop (lg+) sizes use `--g` = 1vw clamped to 10px…19px, i.e. 1g = 19px on the 1900px capture
  the numbers were measured from (container 1002px ≈ 52.7g, headline 4g, body 1.58g, card padding 2.5g).
*/
const CARD_BG = "bg-[#e8eeee]";

export default function GetStartedSection() {
  const [step, setStep] = useState(0); // 0 name · 1 situation · 2 info · 3 details
  const [data, setData] = useState(INITIAL_DATA);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

  const card = useRef(null);
  const lastStep = useRef(step);

  const update = useCallback((patch) => setData((d) => ({ ...d, ...patch })), []);

  // New step: move keyboard focus into it and keep the card on screen.
  useEffect(() => {
    if (lastStep.current === step) return;
    lastStep.current = step;
    const el = card.current;
    el?.querySelector("[data-step-title]")?.focus({ preventScroll: true });
    if (el && el.getBoundingClientRect().top < 80) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitGetStarted(data);
      setDone(true);
    } catch {
      setSubmitError("failed");
    } finally {
      setSubmitting(false);
    }
  };

  const restart = () => {
    setData(INITIAL_DATA);
    setStep(0);
    lastStep.current = 0;
    setDone(false);
  };

  return (
    <section
      aria-label="Get started with the Rainforest Alliance"
      className="relative bg-white pb-16 pt-[6.5rem] [--g:clamp(10px,1vw,19px)] lg:pb-[calc(var(--g)*6)] lg:pt-[calc(var(--g)*11.2)]"
    >
      {done ? (
        <GetStartedThankYou onReturn={restart} />
      ) : (
        <div className="mx-auto w-full max-w-[44rem] px-5 sm:px-8 lg:w-[clamp(640px,52.7vw,1002px)] lg:max-w-none lg:px-0">
          <h1 className="font-hero text-[clamp(2.1rem,9.6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-[-0.045em] text-ra-teal lg:text-[length:calc(var(--g)*4)] lg:leading-[calc(var(--g)*3.8)] lg:tracking-[-0.06em]">
            {GET_STARTED_INTRO.title}
          </h1>

          <div className="mt-7 space-y-5 text-base leading-[1.5] text-ra-ink sm:text-lg lg:mt-[calc(var(--g)*3.4)] lg:space-y-[calc(var(--g)*1.6)] lg:text-[length:max(16px,calc(var(--g)*1.58))]">
            {GET_STARTED_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>{GET_STARTED_INTRO.formLead}</p>
          </div>

          <div
            ref={card}
            className={`mt-6 scroll-mt-24 rounded-xl ${CARD_BG} px-5 py-8 sm:px-8 sm:py-10 lg:mt-[calc(var(--g)*1.9)] lg:rounded-[calc(var(--g)*0.65)] lg:px-[calc(var(--g)*2.5)] lg:py-[calc(var(--g)*4.3)]`}
          >
            {/* key = remount => each step plays its own small entrance */}
            {step === 0 && <GetStartedNameStep key="name" data={data} onChange={update} onNext={next} />}
            {step === 1 && <GetStartedSituationStep key="situation" data={data} onChange={update} onPrev={prev} onNext={next} />}
            {step === 2 && <GetStartedInfoStep key="info" situationId={data.situation} onPrev={prev} onNext={next} />}
            {step === 3 && (
              <GetStartedDetailsStep
                key="details"
                data={data}
                onChange={update}
                onPrev={prev}
                onSubmit={submit}
                submitting={submitting}
                submitError={submitError && DETAILS_STEP.submitError}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
