import { useRef, useState } from "react";
import { NAME_STEP } from "../../data/getStartedSections";
import { ButtonRow, Fieldset, StepButton, TextInput } from "./FormControls";
import { focusFirstError, validateName } from "./formUtils";

/** Step 1 — first + last name. */
export default function GetStartedNameStep({ data, onChange, onNext }) {
  const form = useRef(null);
  const [attempted, setAttempted] = useState(false);
  const errors = attempted ? validateName(data) : {};

  const submit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(validateName(data)).length) return focusFirstError(form.current);
    onNext();
  };

  return (
    <form
      ref={form}
      noValidate
      onSubmit={submit}
      data-step-title
      tabIndex={-1}
      aria-label="Step 1 of 4: your name"
      className="outline-none transition-[opacity,transform] duration-500 starting:translate-y-2 starting:opacity-0"
    >
      <Fieldset big required legend={NAME_STEP.title} id="name">
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-[calc(var(--g)*1)]">
          <TextInput
            id="first-name"
            hideLabel
            label="First name"
            placeholder="First name"
            autoComplete="given-name"
            value={data.firstName}
            error={errors.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
          />
          <TextInput
            id="last-name"
            hideLabel
            label="Last name"
            placeholder="Last name"
            autoComplete="family-name"
            value={data.lastName}
            error={errors.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
          />
        </div>
      </Fieldset>
      <ButtonRow>
        <StepButton type="submit">Next</StepButton>
      </ButtonRow>
    </form>
  );
}
