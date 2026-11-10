import { useEffect, useRef, useState } from "react";
import { GIVE_FORM } from "../../data/getInvolvedSections";
import { ChevronDown } from "../common/Icons";

/*
  "Dedicate my donation" pill. Click -> a panel opens UPWARD from the pill (it keeps its bottom edge),
  with In honor of / In memory of, a Name field and "Remove dedication".
  Press Enter in the name field to save: the panel closes by itself and the pill reads
  "Dedicated to <name>". Click the pill again to edit; "Remove dedication" clears it.
*/
const T = GIVE_FORM.dedicate;
const pillCls =
  "flex h-[2.6rem] w-full items-center justify-center gap-3 text-base font-semibold text-[#222] lg:h-[3.27vw] lg:gap-[0.9vw] lg:text-[1.27vw]";

function Radio({ id, checked, onChange, children }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-2.5 text-base text-[#333] lg:gap-[0.8vw] lg:text-[1.27vw]">
      <input
        id={id}
        type="radio"
        name="dedication-kind"
        checked={checked}
        onChange={onChange}
        className="size-5 shrink-0 cursor-pointer appearance-none rounded-full border border-[#767676] bg-white transition-colors checked:border-ra-teal checked:bg-[radial-gradient(circle,#17545b_50%,#fff_56%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b5fd9] lg:size-[1.55vw]"
      />
      {children}
    </label>
  );
}

export default function DedicateDonation({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState(value?.kind ?? "honor");
  const [name, setName] = useState(value?.name ?? "");
  const rootRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
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

  const openPanel = () => {
    setKind(value?.kind ?? "honor");
    setName(value?.name ?? "");
    setOpen(true);
  };

  const save = (e) => {
    e.preventDefault();
    const clean = name.trim();
    if (!clean) return;
    onChange({ kind, name: clean });
    setOpen(false);
  };

  const remove = () => {
    onChange(null);
    setName("");
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative h-[2.6rem] lg:h-[3.27vw]">
      <button
        type="button"
        aria-expanded={open}
        onClick={openPanel}
        className={`${pillCls} rounded-full border border-[#d9d9d9] bg-white transition-colors hover:bg-[#f7f7f7]`}
      >
        {value ? `${T.buttonDone} ${value.name}` : T.button}
        <ChevronDown strokeWidth={2.2} className="size-5 lg:size-[1.3vw]" />
      </button>

      {open && (
        <div className="absolute inset-x-0 bottom-0 z-20 rounded-[1.25rem] border border-[#d9d9d9] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.12)] lg:rounded-[1.6vw]">
          <button type="button" aria-expanded onClick={() => setOpen(false)} className={`${pillCls} rounded-t-[1.25rem] lg:rounded-t-[1.6vw]`}>
            {T.button}
            <ChevronDown strokeWidth={2.2} className="size-5 rotate-180 lg:size-[1.3vw]" />
          </button>

          <form onSubmit={save} className="px-4 pb-4 lg:px-[1.3vw] lg:pb-[1.1vw]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:gap-x-[2.3vw]">
              <Radio id="dedicate-honor" checked={kind === "honor"} onChange={() => setKind("honor")}>
                {T.honor}
              </Radio>
              <Radio id="dedicate-memory" checked={kind === "memory"} onChange={() => setKind("memory")}>
                {T.memory}
              </Radio>
            </div>

            <label htmlFor="dedicate-name" className="mt-4 block rounded-xl border border-[#c9c9c9] px-3 pb-2 pt-1.5 transition-shadow focus-within:border-ra-teal focus-within:ring-2 focus-within:ring-ra-teal/30 lg:mt-[1vw] lg:rounded-[0.9vw] lg:px-[1.3vw] lg:pb-[0.7vw] lg:pt-[0.55vw]">
              <span className="block text-xs text-[#707070] lg:text-[0.9vw]">{T.nameLabel}</span>
              <input
                id="dedicate-name"
                ref={inputRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
                maxLength={80}
                className="block w-full bg-transparent text-base text-[#222] outline-none lg:text-[1.27vw]"
              />
            </label>

            <p className="mt-2 text-[0.8rem] text-[#707070] lg:mt-[0.5vw] lg:text-[1vw]">
              {T.hintBefore}
              <strong className="font-semibold">{T.hintLink}</strong>.
            </p>

            {/* guarantees Enter submits in every browser; hidden visually, still reachable by keyboard / screen readers */}
            <button type="submit" className="sr-only">
              Save dedication
            </button>

            <button
              type="button"
              onClick={remove}
              className="mx-auto mt-4 block text-base text-[#333] underline-offset-4 hover:underline lg:mt-[1.6vw] lg:text-[1.15vw]"
            >
              {T.remove}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
