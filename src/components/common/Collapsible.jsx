// Smooth height animation without measuring: grid-template-rows 0fr -> 1fr.
// Used by the mobile menu accordions and the mobile footer accordions.
export default function Collapsible({ open, children, className = "" }) {
  return (
    <div
      inert={!open}
      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      } ${className}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
