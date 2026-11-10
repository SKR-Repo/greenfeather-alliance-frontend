/*
  Small line icons used by the stakeholder cards (24×24 grid, currentColor strokes).
  Kept local to the Impact page so the shared Icons.jsx is not touched.
*/
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const PATHS = {
  sprout: (
    <>
      <path d="M2.5 20.5h19" />
      <path d="M12 20.5V11" />
      <path d="M12 11c0-3 2-5 5.5-5 0 3.2-2 5-5.5 5Z" />
      <path d="M12 14.5c0-2.4-1.7-4-4.8-4 0 2.6 1.8 4 4.8 4Z" />
      <path d="M5 20.5v-3.2M4 15.3c.4-.9 1.1-1.3 2-1.3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="7.5" r="3.2" />
      <path d="M2.8 18.8c0-2.6 2.5-4.3 6.2-4.3s6.2 1.7 6.2 4.3v.7H2.8Z" />
      <path d="M14.6 4.6a3 3 0 0 1 0 5.8" />
      <path d="M17.6 14.8c1.9.6 3.1 1.9 3.1 3.9" />
    </>
  ),
  building: (
    <>
      <path d="M3 21V3.5h6.5V8l5-2.5V21" />
      <path d="M14.5 21V8.5H21V21Z" />
      <path d="M2 21h20" />
      <path d="M6.2 12h.01M6.2 15.5h.01M10.5 15.5h.01M17.6 12h.01M17.6 15.5h.01" strokeWidth="2" />
    </>
  ),
  bag: (
    <>
      <path d="M8.6 6.8V5.2a3.4 3.4 0 0 1 6.8 0v1.6" />
      <path d="M6.2 6.8h11.6l1.5 12.4a1.6 1.6 0 0 1-1.6 1.8H6.3a1.6 1.6 0 0 1-1.6-1.8Z" />
      <path d="M8.2 11.5h7.6" />
    </>
  ),
  document: (
    <>
      <path d="M6 2.8h8.2L19.2 8v11.4a1.8 1.8 0 0 1-1.8 1.8H6.6a1.8 1.8 0 0 1-1.8-1.8V4.6A1.8 1.8 0 0 1 6 2.8Z" />
      <path d="M14 2.8V8h5.2" />
      <path d="M8.4 12.5h7.2M8.4 16h7.2" />
    </>
  ),
};

export function StatIcon({ name, className = "" }) {
  return (
    <svg {...base} className={className}>
      {PATHS[name]}
    </svg>
  );
}

export function CheckCircleIcon({ className = "" }) {
  return (
    <svg {...base} strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="m8 12.4 2.9 2.8L16.2 9.6" />
    </svg>
  );
}
