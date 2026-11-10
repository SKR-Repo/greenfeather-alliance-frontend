/*
  Line icons for the "Other services" cards (teal, drawn on a 100x100 grid, they scale with the
  size you give them). To use the live site's own artwork instead, drop the files into
  /public/images and swap the matching entry for <img src="/images/..." />.
*/
const base = {
  viewBox: "0 0 100 100",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/* globe wrapped by arrows + three cubes = supply chain */
const Cube = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <path d="M0 -9 8 -4.5 8 4.5 0 9 -8 4.5 -8 -4.5z" />
    <path d="M-8 -4.5 0 0 8 -4.5M0 0v9" />
  </g>
);
export const SourcingIcon = (props) => (
  <svg {...base} strokeWidth="2.4" {...props}>
    <circle cx="50" cy="52" r="17" />
    <ellipse cx="50" cy="52" rx="8" ry="17" />
    <path d="M33.5 52h33M35.5 43.5h29M35.5 60.5h29M50 35v34" />
    <Cube x={50} y={13} />
    <Cube x={13} y={81} />
    <Cube x={87} y={81} />
    {/* arrows */}
    <path d="M32 19Q15 30 17 60M13 56l4 5 4-5" />
    <path d="M68 19Q85 30 83 60M79 56l4 5 4-5" />
    <path d="M30 95Q50 102 70 95M35 99l-5-4 5-4M65 99l5-4-5-4" />
  </svg>
);

/* two speech bubbles */
export const AdvisoryIcon = (props) => (
  <svg {...base} strokeWidth="5.2" {...props}>
    <path d="M22 8h36a15 15 0 0 1 15 15v10a15 15 0 0 1-15 15h-5L36 61V48h-14A15 15 0 0 1 7 33V23A15 15 0 0 1 22 8z" />
    <path d="M78 34a15 15 0 0 1 15 15v10a15 15 0 0 1-9 13.8L88 92 70 80H52a15 15 0 0 1-9-3" />
  </svg>
);

/* clipboard with a checklist */
export const ProjectsIcon = (props) => (
  <svg {...base} strokeWidth="3.4" {...props}>
    <path d="M32 17H24v76h52V17h-8" />
    <rect x="36" y="9" width="28" height="15" rx="3" />
    <path d="M33 42l4.5 4.5L46 36M54 41h14M33 59l4.5 4.5L46 53M54 58h14M33 76l4.5 4.5L46 70M54 75h14" />
  </svg>
);

/* sprout growing from an open hand */
export const PartnershipsIcon = (props) => (
  <svg {...base} strokeWidth="5" {...props}>
    <path d="M50 66V42" />
    <path d="M50 46C36 46 29 38 30 26c13-1 20 7 20 20zM50 46c14 0 21-8 20-20-13-1-20 7-20 20z" />
    <path d="M6 84h20M26 76l14-3h16c5 0 6 7 1 7H44M56 73l18-7c4-1 7 3 4 6L58 90H26" />
  </svg>
);

export const SERVICE_ICONS = {
  sourcing: SourcingIcon,
  advisory: AdvisoryIcon,
  projects: ProjectsIcon,
  partnerships: PartnershipsIcon,
};
