import { useId } from "react";

// Stand-in for the official "Rainforest Alliance Certified" seal.
// To use the real artwork: drop the file in /public/images/ra_seal.svg and
// replace this component's body with <img src="/images/ra_seal.svg" ... />.
export default function SealBadge({ className = "size-20" }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Rainforest Alliance Certified seal"
      className={`text-ra-teal ${className}`}
    >
      <defs>
        <path id={id} d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
      </defs>
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text fill="currentColor" fontSize="8.4" fontWeight="700" fontFamily="Poppins, sans-serif">
        <textPath href={`#${id}`} textLength="232" lengthAdjust="spacing">
          RAINFOREST ALLIANCE • PEOPLE &amp; NATURE •
        </textPath>
      </text>
      {/* simplified frog */}
      <g fill="currentColor">
        <ellipse cx="50" cy="56" rx="13" ry="9" />
        <circle cx="50" cy="45" r="8" />
        <path d="M37 60c-6 1-9 5-9 8 4-1 8-3 11-6zM63 60c6 1 9 5 9 8-4-1-8-3-11-6z" />
      </g>
      <circle cx="46" cy="42" r="2.2" fill="#e7edee" />
      <circle cx="54" cy="42" r="2.2" fill="#e7edee" />
    </svg>
  );
}
