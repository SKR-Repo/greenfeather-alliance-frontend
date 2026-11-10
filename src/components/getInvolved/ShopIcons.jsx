// Icons for the Get Involved shop section. Size + colour come from className (currentColor).
export const CartIcon = (props) => (
  <svg viewBox="0 0 64 60" fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M3 4.5h9.5l9.5 35.5h31" />
    <path d="M15.5 14.5H60l-5.2 25" />
    <circle cx="26" cy="53" r="2.4" fill="currentColor" />
    <circle cx="47" cy="53" r="2.4" fill="currentColor" />
  </svg>
);

export const ExternalIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d="M18 13.5V19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H11" />
    <path d="M15 3.5h5.5V9M20.5 3.5 11 13" />
  </svg>
);

export const ArrowIcon = ({ dir = "right", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <path d={dir === "right" ? "M4 12h16m-6-6 6 6-6 6" : "M20 12H4m6-6-6 6 6 6"} />
  </svg>
);
