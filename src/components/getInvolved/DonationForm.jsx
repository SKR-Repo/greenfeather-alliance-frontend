import { useRef, useState } from "react";
import { GIVE_FORM } from "../../data/getInvolvedSections";
import { DEFAULT_CURRENCY, currencySymbol, formatAmount } from "../../data/currencies";
import CurrencyPicker from "./CurrencyPicker";
import DedicateDonation from "./DedicateDonation";

/*
  Donation card for the Get Involved hero.
   - toggle: Give once / Monthly (each has its own preset amounts + "suggested" tag)
   - preset buttons or a typed custom amount (the ".00" is fixed), currency picker, dedication
   - the big button reads "Choose an amount" until an amount exists, then "Give $200" / "Give $25 monthly"
  Desktop (lg+) sizes are in vw, measured at a 1894px-wide screen (card 38.9vw wide, 50.3vw tall).
*/
const HeartIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M12 21.2 10.6 20C5.4 15.3 2 12.2 2 8.5 2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3 19.6 3 22 5.4 22 8.5c0 3.7-3.4 6.8-8.6 11.5L12 21.2Z" />
  </svg>
);

const toggleBase =
  "flex h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full text-base font-semibold transition-colors duration-300 lg:h-[4.1vw] lg:gap-[0.6vw] lg:text-[1.27vw]";

export default function DonationForm() {
  const { modes, chooseLabel, donateUrl } = GIVE_FORM;
  const [mode, setMode] = useState("once");
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [amount, setAmount] = useState("");
  const [dedication, setDedication] = useState(null);
  const amountRef = useRef(null);

  const cfg = modes[mode];
  const value = Number(amount);
  const ready = value > 0;

  const switchMode = (next) => {
    if (next === mode) return;
    setMode(next);
    setAmount("");
  };

  const onCta = () => {
    if (!ready) {
      amountRef.current?.focus();
      return;
    }
    window.open(donateUrl, "_blank", "noopener,noreferrer");
  };

  const ctaText = ready
    ? `Give ${formatAmount(currency, value)}${mode === "monthly" ? " monthly" : ""}`
    : chooseLabel;

  return (
    <div className="flex min-h-[32rem] flex-col rounded-[1.25rem] bg-white p-6 text-[#222] shadow-[0_10px_40px_rgba(0,0,0,0.18)] lg:min-h-[50.3vw] lg:rounded-[1.5vw] lg:p-[1.9vw]">
      {/* Give once / Monthly */}
      <div role="group" aria-label="Donation frequency" className="flex">
        <button
          type="button"
          aria-pressed={mode === "once"}
          onClick={() => switchMode("once")}
          className={`${toggleBase} ${mode === "once" ? "bg-ra-teal text-white" : "bg-[#bfbfbf] text-[#222] hover:bg-[#b3b3b3]"}`}
        >
          {modes.once.label}
        </button>
        <button
          type="button"
          aria-pressed={mode === "monthly"}
          onClick={() => switchMode("monthly")}
          className={`${toggleBase} ${mode === "monthly" ? "bg-ra-teal text-white" : "bg-[#f4f4f4] text-[#222] hover:bg-[#ebebeb]"}`}
        >
          {modes.monthly.label}
          <HeartIcon className={`size-4 lg:size-[1.15vw] ${mode === "monthly" ? "text-white" : "text-ra-teal"}`} />
        </button>
      </div>

      <p className="mt-5 text-center text-sm lg:mt-[1.7vw] lg:text-[1.1vw]">
        Choose an amount to donate <strong className="font-bold">{cfg.adverb}</strong>
      </p>

      {/* preset amounts */}
      <div className="mt-3 grid grid-cols-3 gap-x-2 gap-y-2.5 lg:mt-[1.15vw] lg:gap-x-[0.63vw] lg:gap-y-[0.7vw]">
        {cfg.amounts.map((n) => {
          const selected = value === n;
          return (
            <div key={n} className="relative">
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => setAmount(String(n))}
                className={`h-[3.1rem] w-full rounded-xl border text-[1.05rem] font-bold transition-[border-color,background-color,box-shadow] duration-200 lg:h-[3.9vw] lg:rounded-[0.75vw] lg:text-[1.27vw] ${
                  selected
                    ? "border-ra-teal bg-[#eef6f7] shadow-[inset_0_0_0_1px_#17545b]"
                    : "border-[#d9d9d9] bg-white hover:border-ra-teal/60 hover:bg-[#f8fbfb]"
                }`}
              >
                {formatAmount(currency, n)}
              </button>
              {n === cfg.suggested && (
                <span className="pointer-events-none absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-1/2 items-center gap-1 whitespace-nowrap rounded-[4px] bg-[#cfeaee] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wide text-[#0d2d30] lg:gap-[0.3vw] lg:px-[0.6vw] lg:py-[0.15vw] lg:text-[0.74vw]">
                  <HeartIcon className="size-2.5 text-ra-teal lg:size-[0.75vw]" />
                  Suggested
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* custom amount + currency */}
      <div className="relative mt-3 flex h-[3.3rem] items-center rounded-xl border border-[#d9d9d9] px-4 lg:mt-[0.7vw] lg:h-[4.2vw] lg:rounded-[0.75vw] lg:px-[1.35vw]">
        <span className="text-[1.05rem] font-bold lg:text-[1.3vw]" aria-hidden>
          {currencySymbol(currency)}
        </span>
        <input
          ref={amountRef}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          aria-label={`Donation amount in ${currency}`}
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/\D/g, "").slice(0, 9))}
          className="min-w-0 flex-1 bg-transparent text-right text-2xl font-bold outline-none lg:text-[1.9vw]"
        />
        <span className="text-2xl font-bold lg:text-[1.9vw]" aria-hidden>
          .00
        </span>
        <CurrencyPicker value={currency} onChange={setCurrency} />
      </div>

      <div className="mt-9 lg:mt-[3.4vw]">
        <DedicateDonation value={dedication} onChange={setDedication} />
      </div>

      <button
        type="button"
        onClick={onCta}
        className="mt-auto h-[3.3rem] w-full rounded-xl bg-ra-teal text-xl font-bold text-white transition-[filter,transform] duration-300 hover:brightness-125 active:scale-[0.99] lg:h-[4.2vw] lg:rounded-[0.8vw] lg:text-[1.37vw]"
      >
        {ctaText}
      </button>
    </div>
  );
}
