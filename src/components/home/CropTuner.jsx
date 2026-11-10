import { useState } from "react";

/*
  DEV HELPER — only mounted when the URL contains ?tune  (e.g. http://localhost:5173/?tune)
  Drag an image to move it · click to select · then:
     + / -   resize        [ / ]   rotate        arrow keys   nudge (hold Shift = bigger steps)
  Press "Copy" and paste the result over FLOATERS in src/data/homeSections.js.
  Nothing here ships to normal visitors (no ?tune → this file is never rendered).
*/
const n = (v) => parseFloat(v);
const r = (v) => Math.round(v * 100) / 100;

function toConfigLine(it) {
  const parts = [
    `id: "${it.id}"`,
    `crop: "${it.crop}"`,
    `src: ${JSON.stringify(it.src)}`,
    `style: { left: "${r(n(it.style.left))}vw", top: "${r(n(it.style.top))}vw", width: "${r(n(it.style.width))}vw" }`,
    `speed: ${it.speed}`,
  ];
  if (it.rotate) parts.push(`rotate: ${r(it.rotate)}`);
  if (it.flip) parts.push("flip: true");
  if (it.blur) parts.push(`blur: ${it.blur}`);
  return `  { ${parts.join(", ")} },`;
}

export default function CropTuner({ items, selected }) {
  const [copied, setCopied] = useState(false);
  const sel = items.find((i) => i.id === selected);
  const text = `export const FLOATERS = [\n${items.map(toConfigLine).join("\n")}\n];`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.prompt("Copy this:", text);
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-[80] w-72 rounded-xl bg-black/85 p-3 font-mono text-[11px] leading-snug text-white shadow-2xl">
      <p className="mb-1 font-semibold text-ra-yellow">Crop tuner</p>
      <p className="opacity-80">drag = move · +/- size · [ ] rotate · arrows nudge</p>
      <p className="mt-2 min-h-8">
        {sel
          ? `${sel.id}: left ${r(n(sel.style.left))} · top ${r(n(sel.style.top))} · w ${r(n(sel.style.width))} · rot ${r(sel.rotate || 0)}`
          : "Click an image to select it"}
      </p>
      <button
        type="button"
        onClick={copy}
        className="mt-2 w-full rounded-md bg-ra-yellow px-2 py-1.5 font-sans text-xs font-semibold text-ra-teal"
      >
        {copied ? "Copied ✓" : "Copy FLOATERS config"}
      </button>
    </div>
  );
}
