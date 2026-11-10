import { useRef, useState } from "react";
import useCountries from "../../hooks/useCountries";
import { DETAILS_STEP, SITUATIONS } from "../../data/getStartedSections";
import { ButtonRow, CheckboxItem, Fieldset, SelectField, StepButton, TextArea, TextInput } from "./FormControls";
import { focusFirstError, toggle, validateDetails } from "./formUtils";

const LIST = "flex flex-col gap-3 lg:gap-[calc(var(--g)*0.55)]";

/** Step 4 — the full details form. Submits through `onSubmit` (async). */
export default function GetStartedDetailsStep({ data, onChange, onPrev, onSubmit, submitting, submitError }) {
  const countries = useCountries();
  const form = useRef(null);
  const [attempted, setAttempted] = useState(false);
  const errors = attempted ? validateDetails(data) : {};
  const askCertification = SITUATIONS.find((s) => s.id === data.situation)?.askCertification;

  const submit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (Object.keys(validateDetails(data)).length) return focusFirstError(form.current);
    onSubmit();
  };

  const set = (key) => (e) => onChange({ [key]: e.target.value });

  return (
    <form
      ref={form}
      noValidate
      onSubmit={submit}
      data-step-title
      tabIndex={-1}
      aria-label="Step 4 of 4: your company details"
      className="flex flex-col gap-7 outline-none transition-[opacity,transform] duration-500 starting:translate-y-2 starting:opacity-0 lg:gap-[max(32px,calc(var(--g)*2))]"
    >
      {askCertification && (
        <Fieldset legend={DETAILS_STEP.certificationQuestion} hint={DETAILS_STEP.certificationHint} id="certifications">
          <div className={LIST}>
            {DETAILS_STEP.certifications.map((c) => (
              <CheckboxItem
                key={c}
                name="certifications"
                value={c}
                label={c}
                checked={data.certifications.includes(c)}
                onChange={() => onChange({ certifications: toggle(data.certifications, c) })}
              />
            ))}
          </div>
        </Fieldset>
      )}

      <TextInput id="company" required label="What’s the name of your company?" autoComplete="organization" value={data.company} error={errors.company} onChange={set("company")} />

      <TextInput id="job-title" label="What’s your job title?" autoComplete="organization-title" value={data.jobTitle} onChange={set("jobTitle")} />

      <SelectField
        id="country"
        required
        label="Which country are your operations based in?"
        hint={DETAILS_STEP.countryHint}
        options={countries}
        value={data.country}
        error={errors.country}
        onChange={set("country")}
      />

      <Fieldset required legend="Which crop(s) do you source?" id="crops" error={errors.crops}>
        <div className={LIST}>
          {DETAILS_STEP.crops.map((c) => (
            <CheckboxItem
              key={c}
              name="crops"
              value={c}
              label={c}
              checked={data.crops.includes(c)}
              onChange={() => onChange({ crops: toggle(data.crops, c) })}
            />
          ))}
        </div>
      </Fieldset>

      <SelectField
        id="revenue"
        required
        label="What is your company’s yearly revenue, approximately?"
        options={DETAILS_STEP.revenues}
        value={data.revenue}
        error={errors.revenue}
        onChange={set("revenue")}
      />

      <TextArea id="comments" label="Do you have any additional comments or questions?" value={data.comments} onChange={set("comments")} />

      <TextInput
        id="email"
        required
        type="email"
        autoComplete="email"
        label="What’s your email address?"
        hint={DETAILS_STEP.emailHint}
        value={data.email}
        error={errors.email}
        onChange={set("email")}
      />

      <CheckboxItem name="consent" label={DETAILS_STEP.consent} checked={data.consent} onChange={(e) => onChange({ consent: e.target.checked })} />

      <div>
        {submitError && (
          <p role="alert" className="mb-4 rounded-[5px] border border-red-600/40 bg-red-50 px-4 py-3 text-[15px] font-medium text-red-800">
            {submitError}
          </p>
        )}
        <ButtonRow>
          <StepButton onClick={onPrev} disabled={submitting}>
            Previous
          </StepButton>
          <StepButton type="submit" loading={submitting}>
            {submitting ? "Submitting…" : "Submit"}
          </StepButton>
        </ButtonRow>
      </div>
    </form>
  );
}
