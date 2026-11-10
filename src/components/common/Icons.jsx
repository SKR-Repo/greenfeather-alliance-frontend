// Tiny stroke icon set (no extra dependency). Size/colour come from className.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ChevronDown = (props) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronRight = (props) => (
  <svg {...base} strokeWidth={2.6} {...props}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export const SearchIcon = (props) => (
  <svg {...base} strokeWidth={2.4} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg {...base} strokeWidth={2.6} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg {...base} strokeWidth={3} {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);
