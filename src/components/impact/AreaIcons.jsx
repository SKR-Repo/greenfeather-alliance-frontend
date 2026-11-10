/*
  Line icons for the "Our areas of impact" section (24×24 grid, currentColor).
  Local to the Impact page so the shared Icons.jsx stays untouched.
*/
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

const ICONS = {
  /* tab / topic icons */
  globe: (
    <>
      <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" />
      <path d="M7 8.5c1.5-.3 2.6.3 3 1.4.4 1.2-.4 1.9-1.4 2.3-.9.4-1.2 1.2-.7 2.2M13.5 6.5c1 .4 1.5 1.2 2.4 1.4 1 .2 1.7-.3 2.2-1M14 13.5c.9-.4 2-.2 2.6.6.6.8.4 1.9-.3 2.6" stroke="var(--icon-cut, #fff)" strokeWidth="1.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.6 4.4 5.4v6.2c0 4.8 3.1 8.3 7.6 9.8 4.5-1.5 7.6-5 7.6-9.8V5.4Z" />
      <path d="M12 7.2v9.2M8.9 11l3.1-3.8 3.1 3.8M9.4 14.2 12 11l2.6 3.2" />
    </>
  ),
  wheat: (
    <>
      <path d="M12 3v11" />
      <path d="M12 5.2c-1.9 0-3 1.2-3 3 1.9 0 3-1.2 3-3Zm0 0c1.9 0 3 1.2 3 3-1.9 0-3-1.2-3-3ZM12 9.6c-1.9 0-3 1.2-3 3 1.9 0 3-1.2 3-3Zm0 0c1.9 0 3 1.2 3 3-1.9 0-3-1.2-3-3Z" />
      <path d="M4 13.5c0 4.1 3.6 7.1 8 7.1s8-3 8-7.1" />
    </>
  ),
  rights: (
    <>
      <circle cx="17.6" cy="4.6" r="1.7" />
      <path d="M14 8.4 11.2 13l3.6 1.7-1.2 4.8" />
      <path d="M3 7.5 7 19.5h14M3 7.5l3.4-1.2M10.6 10.2 8.6 8.8" />
    </>
  ),
  livelihood: (
    <>
      <circle cx="12" cy="5.4" r="2.6" />
      <path d="M8.2 20.4a4.6 4.6 0 0 1-2-6.6c.9-1.9 3.1-2.9 5.8-2.9s4.9 1 5.8 2.9a4.6 4.6 0 0 1-2 6.6Z" />
      <path d="m12 18.3-2.1-2.1a1.4 1.4 0 0 1 2.1-1.8 1.4 1.4 0 0 1 2.1 1.8Z" fill="currentColor" />
    </>
  ),

  /* big-number card icons (drawn to be used in white) */
  factory: (
    <>
      <path d="M3 11.2c0-.8.6-1.4 1.4-1.4h.9l4.1 2.2V9.8l3.7 2.1V9.8h.1c.8 0 1.4.6 1.4 1.4v8.4c0 .8-.6 1.4-1.4 1.4H4.4c-.8 0-1.4-.6-1.4-1.4Z" fill="currentColor" stroke="none" />
      <path d="M16.2 8.2 17 2.6c.1-.5.9-.5 1 0l.8 5.6Z" fill="currentColor" stroke="none" />
      <path d="M7.4 15.4v1.8M10.6 15.4v1.8M13.8 15.4v1.8" stroke="var(--icon-cut, #1952c2)" strokeWidth="1.8" />
    </>
  ),
  sprout: (
    <>
      <path d="M11 21V10.5M11 10.5C11 7 13 5 16.4 5c.1 3.6-2 5.5-5.4 5.5Z" />
      <path d="M11 14.5C11 11.7 9 10 5.6 10 5.5 13 7.4 14.5 11 14.5Z" />
      <path d="M3.5 21h17" />
      <path d="M17.8 21v-4.6M17.8 16.4c0-1.9 1.2-3 3.2-3 0 2-1.1 3-3.2 3Z" />
    </>
  ),
  people: (
    <>
      <circle cx="9.4" cy="7.2" r="3.4" />
      <path d="M2.8 19.6c0-2.2 2-3.6 4.6-3.6h4c2.6 0 4.6 1.4 4.6 3.6v.4H2.8Z" />
      <path d="M15.4 4a3.4 3.4 0 0 1 .6 6.7M18.2 15.8c1.7.5 2.9 1.7 2.9 3.4v.4h-2.5" />
    </>
  ),
  chevrons: (
    <>
      <path d="m5 9.5 7-6 7 6" strokeWidth="1.9" />
      <path d="m5 14.5 7-6 7 6" opacity=".6" strokeWidth="1.9" />
      <path d="m5 19.5 7-6 7 6" opacity=".35" strokeWidth="1.9" />
    </>
  ),

  /* accordion row icons */
  pin: (
    <>
      <path d="M12 21.2c-4.2-3.6-6.5-6.6-6.5-9.7a6.5 6.5 0 0 1 13 0c0 3.1-2.3 6.1-6.5 9.7Z" />
      <circle cx="12" cy="10.8" r="2.4" />
    </>
  ),
  handHeart: (
    <>
      <path d="M3 15.6h2.8c1.5 0 2.4.5 3.4 1.2l3.2.2c1.4 0 1.4 1.7 0 1.7H9.6" />
      <path d="m5.8 15.6 4.6-1.4c1.2-.4 2 .2 2.7 1l5.7-3.4c1.2-.7 2.2.8 1.2 1.7L12.4 20c-.9.7-1.8.8-3 .5L5.8 19.4" />
      <path d="m14.6 9.4-2.2-2.1a1.7 1.7 0 0 1 2.2-2.6c.5-.5 1.2-.5 1.8 0a1.7 1.7 0 0 1 .4 2.6Z" />
    </>
  ),
  badge: (
    <>
      <path d="M12 2.8 14.4 4l2.7-.1 1.3 2.4 2.1 1.7-.6 2.6.6 2.6-2.1 1.7-1.3 2.4-2.7-.1L12 18.4 9.6 17.2l-2.7.1-1.3-2.4L3.5 13.2l.6-2.6-.6-2.6L5.6 6.3l1.3-2.4 2.7.1Z" transform="translate(0 .4) scale(.97) translate(.35 0)" />
      <path d="m8.6 11.6 2.3 2.3 4.5-4.6" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 3.5h11a1.5 1.5 0 0 1 1.5 1.5v11.5a3 3 0 0 1-3 3H8.5a3 3 0 0 1-3-3V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M9 8.2h7M9 11.4h7M9 14.6h4.2" />
    </>
  ),
  pencil: (
    <>
      <path d="m4 20 1-4.2L16.6 4.2a1.9 1.9 0 0 1 2.7 0l.5.5a1.9 1.9 0 0 1 0 2.7L8.2 19Z" />
      <path d="m14.6 6.2 3.2 3.2M4 20l4.2-1" />
    </>
  ),
  personHeart: (
    <>
      <circle cx="12" cy="5.4" r="2.6" />
      <path d="M8.2 20.4a4.6 4.6 0 0 1-2-6.6c.9-1.9 3.1-2.9 5.8-2.9s4.9 1 5.8 2.9a4.6 4.6 0 0 1-2 6.6Z" />
      <path d="m12 18.3-2.1-2.1a1.4 1.4 0 0 1 2.1-1.8 1.4 1.4 0 0 1 2.1 1.8Z" fill="currentColor" />
    </>
  ),
  alert: (
    <>
      <path d="M10.4 4.6a1.9 1.9 0 0 1 3.2 0l7.4 12.8c.7 1.3-.2 2.9-1.6 2.9H4.6c-1.4 0-2.3-1.6-1.6-2.9Z" />
      <path d="M12 9.6v4.4M12 17.2h.01" strokeWidth="2" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="8" rx="2.2" />
      <circle cx="17" cy="7" r="3.5" />
      <circle cx="7" cy="17" r="3.5" />
      <rect x="13.5" y="13" width="7" height="7.5" rx="2.2" />
    </>
  ),

  /* ui */
  flag: (
    <>
      <path d="M5.5 21.5V3.8c4-1.5 6.5 1.6 10.5.6 1.4-.4 2.3-.8 2.8-1.1v9.6c-.5.3-1.4.8-2.8 1.1-4 1-6.5-2.1-10.5-.6" />
    </>
  ),
  chevron: <path d="m6 9.5 6 6 6-6" strokeWidth="2" />,
};

export default function AreaIcon({ name, className = "", style }) {
  return (
    <svg {...base} className={className} style={style}>
      {ICONS[name]}
    </svg>
  );
}

export function InfoDot({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <path d="M12 10.6v6.2" stroke="var(--info-ink, #1952c2)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12" cy="7.2" r="1.4" fill="var(--info-ink, #1952c2)" />
    </svg>
  );
}
