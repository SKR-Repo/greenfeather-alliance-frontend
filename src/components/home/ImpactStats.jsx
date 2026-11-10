import { STATS_COLUMNS } from "../../data/homeSections";

/*
  Home section 5 — grey rounded panel with the six impact numbers.
  Desktop (lg+): 3 columns × 2 stats, left aligned. Everything is in vw so the panel
  scales exactly like the live site (measured at 1898px wide).
  Mobile / tablet: one centred column (10.8 → 9,736 → 11.9 → 66,000 → US$2.3 → 814,570).
  Line breaks inside a label come from "\n" in the data (whitespace-pre-line).
*/
function Stat({ value, unit, label }) {
  return (
    <div className="text-center lg:text-left">
      <p className="flex flex-wrap items-baseline justify-center gap-x-[0.3em] font-body font-semibold leading-none tracking-tight text-[#0f2b2e] lg:justify-start lg:gap-x-[0.9vw]">
        <span className="text-[clamp(3.25rem,15vw,4.75rem)] sm:text-7xl lg:text-[5.6vw]">{value}</span>
        {unit && (
          <span className="text-[0.95rem] font-bold uppercase tracking-normal sm:text-lg lg:text-[1.3vw]">
            {unit}
          </span>
        )}
      </p>
      <p className="mx-auto mt-3 max-w-[20rem] whitespace-pre-line text-[1.05rem] leading-[1.5] text-[#0f2b2e] sm:max-w-sm sm:text-xl lg:mx-0 lg:mt-[0.9vw] lg:max-w-[25.5vw] lg:text-[1.65vw] lg:leading-[1.45]">
        {label}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section aria-label="Our impact in numbers" className="relative z-10 bg-white px-6 pb-4 sm:px-8 lg:px-[1.26vw] lg:pb-[2.2vw]">
      <div className="mx-auto grid max-w-[120rem] gap-14 rounded-[22px] bg-[#e8eded] px-6 py-14 sm:px-10 sm:py-16 lg:max-w-none lg:grid-cols-[32vw_32vw_1fr] lg:gap-y-0 lg:rounded-[1.6vw] lg:px-[2.5vw] lg:pb-[4.3vw] lg:pt-[3vw]">
        {STATS_COLUMNS.map((column, i) => (
          <div key={i} className="flex flex-col gap-14 lg:gap-[4.5vw]">
            {column.map((stat) => (
              <Stat key={stat.value} {...stat} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
