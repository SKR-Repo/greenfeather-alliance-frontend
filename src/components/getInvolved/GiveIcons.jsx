/*
  Line icons for the Get Involved banners (white card on the donate banner, teal people on the
  fundraiser row). Size comes from className; colour from currentColor.
*/
export const CardIcon = (props) => (
  <svg viewBox="0 0 72 58" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <rect x="2.5" y="2.5" width="67" height="53" rx="16" />
    <path d="M3 21h66" />
    <path d="M14 39h8" />
  </svg>
);

export const PeopleIcon = (props) => (
  <svg viewBox="0 0 86 58" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    <circle cx="25" cy="12" r="9.5" />
    <circle cx="60" cy="12" r="9.5" />
    <path d="M3 55v-7a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v7" />
    <path d="M58 36h12a12 12 0 0 1 12 12v7" />
  </svg>
);
