// Shared class strings for the Get Started form (desktop sizes use the `--g` unit set by <GetStartedSection>).
// big question title (steps 1 & 2)  /  regular label (final form)
export const TITLE_BIG = "text-[1.25rem] leading-snug lg:text-[length:max(19px,calc(var(--g)*1.74))]";
export const TITLE = "text-[1.0625rem] leading-snug lg:text-[length:max(17px,calc(var(--g)*1.4))]";

const BORDER = "border-[#d6dddd]";
export const controlCls = (error) =>
  `h-12 w-full rounded-[5px] border bg-white px-3.5 text-base text-ra-ink outline-none transition-shadow placeholder:text-[#767676] focus:border-ra-teal focus:ring-[3px] focus:ring-ra-teal/25 lg:h-[max(48px,calc(var(--g)*3.15))] lg:px-[max(14px,calc(var(--g)*0.65))] lg:text-[length:max(16px,calc(var(--g)*1.26))] ${
    error ? "border-red-600" : BORDER
  }`;
