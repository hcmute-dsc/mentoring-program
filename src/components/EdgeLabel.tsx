import { useLayoutEffect, useRef, useState } from 'react';

interface Box { x: number; y: number; width: number; height: number }

/**
 * A text label placed at the middle of a path, on a small background box.
 * It measures the path and the text after render, so the box fits the text.
 */
export function EdgeLabel({ d, label }: { d: string; label: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [pt, setPt] = useState<{ x: number; y: number } | null>(null);
  const [box, setBox] = useState<Box | null>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const p = path.getPointAtLength(path.getTotalLength() / 2);
    setPt({ x: p.x, y: p.y });
  }, [d]);

  useLayoutEffect(() => {
    const measure = () => {
      const tx = textRef.current;
      if (!tx) return;
      const bb = tx.getBBox();
      setBox({ x: bb.x - 5, y: bb.y - 2, width: bb.width + 10, height: bb.height + 4 });
    };
    measure();
    // Re-measure once the web fonts load, because the text width changes.
    let alive = true;
    document.fonts?.ready.then(() => { if (alive) measure(); });
    return () => { alive = false; };
  }, [pt, label]);

  return (
    <g className="elabel">
      {/* Invisible copy of the path, used only to find its middle point. */}
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      {pt && (
        <>
          {box && <rect rx={4} x={box.x} y={box.y} width={box.width} height={box.height} />}
          <text ref={textRef} x={pt.x} y={pt.y + 4} textAnchor="middle">{label}</text>
        </>
      )}
    </g>
  );
}
