import { ChevronDown } from "../common/Icons";
import { TITLE, TITLE_BIG, controlCls } from "./formStyles";

/*
  Shared form pieces for the Get Started wizard. All desktop (lg+) sizes use the `--g` scale unit
  that <GetStartedSection> sets (= 1vw clamped to 10px…19px, measured from the live site's 1900px
  capture) with a pixel floor (`max(…px, …)`) so nothing gets too small on a 1024px laptop.
*/

export const Required = () => (
  <>
    <span aria-hidden className="ml-0.5 align-top text-[0.7em] font-bold text-red-600">
      *
    </span>
    <span className="sr-only"> (required)</span>
  </>
);

export function FieldError({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm font-medium text-red-700 lg:text-[length:max(14px,calc(var(--g)*0.9))]">
      {children}
    </p>
  );
}

export const Hint = ({ id, children }) => (
  <p id={id} className="mt-2 text-[13px] leading-snug text-ra-ink/80 lg:text-[length:max(13px,calc(var(--g)*0.82))]">
    {children}
  </p>
);

/** Label + control + hint + error, wired together for screen readers. */
export function Field({ id, label, required, hint, error, big, hideLabel, children }) {
  return (
    <div>
      <label htmlFor={id} className={hideLabel ? "sr-only" : `mb-3 block font-semibold text-ra-teal lg:mb-[calc(var(--g)*0.6)] ${big ? TITLE_BIG : TITLE}`}>
        {label}
        {required && <Required />}
      </label>
      {children}
      {hint && <Hint id={`${id}-hint`}>{hint}</Hint>}
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </div>
  );
}

const describe = (id, hint, error) => [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;

export function TextInput({ id, label, required, hint, error, big, hideLabel, ...rest }) {
  return (
    <Field id={id} label={label} required={required} hint={hint} error={error} big={big} hideLabel={hideLabel}>
      <input id={id} aria-invalid={!!error} aria-describedby={describe(id, hint, error)} className={controlCls(error)} {...rest} />
    </Field>
  );
}

export function SelectField({ id, label, required, hint, error, options, value, onChange }) {
  return (
    <Field id={id} label={label} required={required} hint={hint} error={error}>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={describe(id, hint, error)}
          className={`${controlCls(error)} cursor-pointer appearance-none pr-11 ${value ? "" : "text-[#555]"}`}
        >
          <option value="">Select</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-5 -translate-y-1/2 text-ra-ink lg:size-[max(20px,calc(var(--g)*1.2))]" />
      </div>
    </Field>
  );
}

export function TextArea({ id, label, ...rest }) {
  return (
    <Field id={id} label={label}>
      <textarea
        id={id}
        rows={4}
        className={`${controlCls(false)} !h-auto min-h-32 resize-y py-3 leading-snug lg:min-h-[calc(var(--g)*8.5)]`}
        {...rest}
      />
    </Field>
  );
}

/** Group of checkboxes / radios with a visible legend. */
export function Fieldset({ legend, required, hint, error, big, id, children, className = "" }) {
  return (
    <fieldset data-invalid={error ? "true" : undefined} aria-describedby={describe(id, hint, error)} className={`min-w-0 ${className}`}>
      <legend className={`mb-3 font-semibold text-ra-teal lg:mb-[calc(var(--g)*0.6)] ${big ? TITLE_BIG : TITLE}`}>
        {legend}
        {required && <Required />}
      </legend>
      {children}
      {hint && <Hint id={`${id}-hint`}>{hint}</Hint>}
      <FieldError id={`${id}-error`}>{error}</FieldError>
    </fieldset>
  );
}

const CheckIcon = (props) => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="m3.5 8.5 3 3 6-7" />
  </svg>
);

/** Square checkbox — native input (keyboard + screen reader) under a custom skin. */
export function CheckboxItem({ label, checked, onChange, name, value }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 lg:gap-[calc(var(--g)*0.6)]">
      <span className="relative grid size-5 shrink-0 place-items-center lg:size-[max(20px,calc(var(--g)*1.1))]">
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer absolute inset-0 size-full cursor-pointer appearance-none rounded-[3px] border border-[#8e9c9d] bg-white transition-colors checked:border-ra-teal checked:bg-ra-teal focus-visible:ring-[3px] focus-visible:ring-ra-teal/35"
        />
        <CheckIcon className="pointer-events-none relative size-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100 lg:size-[max(14px,calc(var(--g)*0.8))]" />
      </span>
      <span className="text-base leading-snug text-ra-ink lg:text-[length:max(16px,calc(var(--g)*1.15))]">{label}</span>
    </label>
  );
}

/** Round radio — the big option list of step 2. */
export function RadioItem({ label, checked, onChange, name, value }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 lg:gap-[calc(var(--g)*0.65)]">
      <span className="relative grid size-6 shrink-0 place-items-center lg:size-[max(24px,calc(var(--g)*1.45))]">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer absolute inset-0 size-full cursor-pointer appearance-none rounded-full border border-[#8e9c9d] bg-white transition-colors checked:border-ra-teal focus-visible:ring-[3px] focus-visible:ring-ra-teal/35"
        />
        <span className="pointer-events-none size-3 scale-0 rounded-full bg-ra-teal transition-transform duration-200 peer-checked:scale-100 lg:size-[calc(var(--g)*0.75)]" />
      </span>
      <span className="text-[1.0625rem] leading-[1.4] text-ra-ink lg:text-[length:max(17px,calc(var(--g)*1.47))]">{label}</span>
    </label>
  );
}

/** Teal action button (Next / Previous / Submit). */
export function StepButton({ children, loading = false, ...rest }) {
  return (
    <button
      type="button"
      disabled={loading}
      className="inline-flex h-12 min-w-[5.5rem] cursor-pointer items-center justify-center whitespace-nowrap rounded-[5px] bg-ra-teal px-6 text-base font-semibold leading-none text-white transition-colors duration-200 hover:bg-ra-ink focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ra-teal disabled:cursor-wait disabled:opacity-70 lg:h-[max(48px,calc(var(--g)*4.4))] lg:px-[max(24px,calc(var(--g)*1))] lg:text-[length:max(16px,calc(var(--g)*1.27))]"
      {...rest}
    >
      {children}
    </button>
  );
}

export const ButtonRow = ({ children }) => (
  <div className="mt-8 flex flex-wrap gap-3 lg:mt-[calc(var(--g)*1.75)] lg:gap-[calc(var(--g)*1.1)]">{children}</div>
);
