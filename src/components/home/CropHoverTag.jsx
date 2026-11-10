import { forwardRef } from "react";
import { createPortal } from "react-dom";

/*
  Floating info tag shown while the mouse is over a crop image (desktop).
  Sizes copied from the live site (1898px wide): tag 35.7vw wide, 1.2vw radius,
  title 1.3vw semibold, text 1.2vw. Rendered through a portal into <body> so the
  parent's scroll-drift transform can never offset it. Its position is written
  directly by the parent (no re-render per mouse-move).
*/
const CropHoverTag = forwardRef(function CropHoverTag({ crop, visible }, ref) {
  return createPortal(
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[60] hidden w-[35.7vw] rounded-[1.2vw] bg-[#e8eded] px-[1.3vw] pb-[1.55vw] pt-[1.65vw] transition-opacity duration-200 lg:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate3d(-999px,-999px,0)" }}
    >
      {crop && (
        <>
          <p className="font-body text-[max(0.95rem,1.3vw)] font-semibold leading-[1.3] text-ra-teal">
            {crop.title}
          </p>
          <p className="mt-[1.05vw] font-body text-[max(0.85rem,1.2vw)] leading-[1.42] text-[#0d2d30]">
            {crop.description}
          </p>
        </>
      )}
    </div>,
    document.body,
  );
});

export default CropHoverTag;
