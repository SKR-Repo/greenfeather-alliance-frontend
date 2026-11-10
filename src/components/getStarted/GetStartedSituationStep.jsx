import { useRef, useState } from "react";
import { SITUATION_STEP, SITUATIONS } from "../../data/getStartedSections";
import { ButtonRow, Fieldset, RadioItem, StepButton } from "./FormControls";
import { focusFirstError, validateSituation } from "./formUtils";

/** Step 2 — "What option best describes your situation?" (single choice). */
export default function GetStartedSituationStep({ data, onChange, onPrev, onNext }) {
  const form = useRef(null);
  const [attempted, setAttempted] = useState(false);
  const errors = attempted ? validateSituation(data) : {};

  const submit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(validateSituation(data)).length) return focusFirstError(form.current);
    onNext();
  };

  return (
    <form
      ref={form}
      noValidate
      onSubmit={submit}
      data-step-title
      tabIndex={-1}
      aria-label="Step 2 of 4: your situation"
      className="outline-none transition-[opacity,transform] duration-500 starting:translate-y-2 starting:opacity-0"
    >
      <Fieldset big required legend={SITUATION_STEP.title} id="situation" error={errors.situation}>
        <div className="flex flex-col gap-5 lg:gap-[calc(var(--g)*0.9)]">
          {SITUATIONS.map((s) => (
            <RadioItem
              key={s.id}
              name="situation"
              value={s.id}
              label={s.label}
              checked={data.situation === s.id}
              // picking a different path clears answers that only belong to the old one
              onChange={() => onChange({ situation: s.id, ...(s.askCertification ? {} : { certifications: [] }) })}
            />
          ))}
        </div>
      </Fieldset>
      <ButtonRow>
        <StepButton onClick={onPrev}>Previous</StepButton>
        <StepButton type="submit">Next</StepButton>
      </ButtonRow>
    </form>
  );
}
