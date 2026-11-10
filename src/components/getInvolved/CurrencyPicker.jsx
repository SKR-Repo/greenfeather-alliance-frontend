import { useEffect, useRef, useState } from "react";
import { CURRENCIES, DEFAULT_CURRENCY } from "../../data/currencies";
import { ChevronDown } from "../common/Icons";

/*
  Currency selector that straddles the bottom border of the amount field.
  Click it -> a scrollable panel opens under the field ("Suggested for you" + "All currencies").
  Closes on pick, outside click or Escape.
*/
function Flag({ src }) {
  return (
    <span className="relative inline-block size-5 shrink-0 overflow-hidden rounded-full bg-[#c4c4c4] lg:size-[1.3vw]">
      <img
        src={src}
        alt=""
        loading="lazy"
        draggable={false}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="absolute inset-0 size-full object-cover"
      />
    </span>
  );
}

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="size-5 shrink-0 text-[#222] lg:size-[1.2vw]">
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

function Option({ currency, selected, onPick }) {
  return (
    <li role="option" aria-selected={selected}>
      <button
        type="button"
        onClick={() => onPick(currency.code)}
        className="flex h-12 w-full items-center gap-3 px-5 text-left text-[0.95rem] transition-colors hover:bg-[#f4f4f4] lg:h-[2.9vw] lg:gap-[0.9vw] lg:px-[1.6vw] lg:text-[1.1vw]"
      >
        <Flag src={currency.flag} />
        <span className="font-bold text-[#222]">{currency.code}</span>
        <span className="min-w-0 flex-1 truncate text-[#666]">{currency.name}</span>
        {selected && <Check />}
      </button>
    </li>
  );
}

const heading = "px-5 pb-1 pt-5 text-[0.8rem] uppercase tracking-[0.08em] text-[#707070] lg:px-[1.6vw] lg:pb-[0.3vw] lg:pt-[1.4vw] lg:text-[1vw]";

export default function CurrencyPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const current = CURRENCIES.find((c) => c.code === value) ?? CURRENCIES[0];
  const suggested = CURRENCIES.find((c) => c.code === DEFAULT_CURRENCY);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const pick = (code) => {
    onChange(code);
    setOpen(false);
  };

  return (
    <div ref={rootRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Currency: ${current.code}`}
        onClick={() => setOpen((o) => !o)}
        className={`absolute bottom-0 left-4 flex translate-y-1/2 items-center gap-1.5 rounded-full px-2 py-0.5 text-[0.95rem] font-semibold text-[#555] transition-colors lg:left-[1.4vw] lg:gap-[0.45vw] lg:px-[0.6vw] lg:py-[0.15vw] lg:text-[1.2vw] ${open ? "bg-[#efefef]" : "bg-white hover:bg-[#f4f4f4]"}`}
      >
        <Flag src={current.flag} />
        {current.code}
        <ChevronDown strokeWidth={2.2} className={`size-3.5 text-[#777] transition-transform duration-300 lg:size-[0.85vw] ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+1.6rem)] z-30 h-[22rem] overflow-y-auto overscroll-contain rounded-xl border border-[#dcdcdc] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.18)] lg:top-[calc(100%+1.9vw)] lg:h-[24vw] lg:rounded-[0.9vw]">
          <p className={heading}>Suggested for you</p>
          <ul role="listbox" aria-label="Suggested currency">
            <Option currency={suggested} selected={value === suggested.code} onPick={pick} />
          </ul>
          <hr className="mx-4 mt-1 border-[#dcdcdc] lg:mx-[0.7vw]" />
          <p className={heading}>All currencies</p>
          <ul role="listbox" aria-label="All currencies" className="pb-2">
            {CURRENCIES.map((c) => (
              <Option key={c.code} currency={c} selected={value === c.code} onPick={pick} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
