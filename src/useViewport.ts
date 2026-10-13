import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';

export interface View {
  k: number;
  x: number;
  y: number;
}

/** A rectangle: in map units for a block, in screen pixels for an area of the screen. */
export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

export const MIN_ZOOM = 0.25;
export const MAX_ZOOM = 2.5;
/** Zoom factors for one step of the zoom buttons and the + / - keys. */
export const ZOOM_IN = 1.25;
export const ZOOM_OUT = 1 / ZOOM_IN;

export const clamp = (v: number) => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, v));

/** Space kept free around the map edges, in screen pixels. */
export const EDGE = 20;
/** Space for the zoom controls at the bottom of the screen. */
export const CONTROLS_SPACE = 70;
/** Top space used before the top bar can be measured. */
const DEFAULT_TOP = 90;

/** Screen space taken by the top bar, measured so a wrapped title is counted too. */
export const topSpace = (topbar: HTMLElement | null) =>
  topbar ? topbar.offsetTop + topbar.offsetHeight + 12 : DEFAULT_TOP;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Pan and zoom state for the map.
 * `viewRef` always holds the latest view, so event handlers never read stale values.
 * `target` holds where a running animation ends, so a new step starts from there, not from a frame halfway.
 * `touched` turns true once the user moves or zooms the map; after that, resizes no longer refit.
 * Only user actions go through `moveTo`, `zoomAt`, `reveal` and `markTouched`, so those set `touched`.
 * `byUser` is true when the last view change came from the user, so screen readers announce only those zooms.
 */
export function useViewport(
  svgRef: RefObject<SVGSVGElement>,
  worldRef: RefObject<SVGGElement>,
  topbarRef: RefObject<HTMLElement>,
) {
  const [view, setViewState] = useState<View>({ k: 1, x: 0, y: 0 });
  const viewRef = useRef(view);
  const anim = useRef<number | null>(null);
  const target = useRef<View | null>(null);
  const touched = useRef(false);
  const byUser = useRef(false);

  const setView = useCallback((v: View) => {
    viewRef.current = v;
    setViewState(v);
  }, []);

  const stopAnim = useCallback(() => {
    if (anim.current !== null) {
      cancelAnimationFrame(anim.current);
      anim.current = null;
    }
    target.current = null;
  }, []);

  /** Where the view is going: the end of the running animation, or the current view. */
  const goal = () => target.current ?? viewRef.current;

  const animateTo = useCallback((k: number, x: number, y: number) => {
    stopAnim();
    if (prefersReducedMotion()) { setView({ k, x, y }); return; }
    target.current = { k, x, y };
    const s = viewRef.current;
    const t0 = performance.now();
    const dur = 260;
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setView({ k: s.k + (k - s.k) * e, x: s.x + (x - s.x) * e, y: s.y + (y - s.y) * e });
      if (p < 1) anim.current = requestAnimationFrame(step);
      else { anim.current = null; target.current = null; }
    };
    anim.current = requestAnimationFrame(step);
  }, [setView, stopAnim]);

  // Stop a running animation when the map unmounts.
  useEffect(() => stopAnim, [stopAnim]);

  /** Move the map to `v` because the user dragged or pinched it. */
  const moveTo = useCallback((v: View) => {
    touched.current = true;
    byUser.current = true;
    setView(v);
  }, [setView]);

  /**
   * Zoom by `factor`, keeping the screen point (px, py) still. Used only for user zooms.
   * An animated step starts from the end of the running animation, so quick presses add up fully.
   * A step without animation stops the running one and starts from what is on screen.
   */
  const zoomAt = useCallback((px: number, py: number, factor: number, animated: boolean) => {
    touched.current = true;
    byUser.current = true;
    const v = animated ? goal() : viewRef.current;
    const k = clamp(v.k * factor);
    const x = px - (px - v.x) * (k / v.k);
    const y = py - (py - v.y) * (k / v.k);
    if (animated) animateTo(k, x, y);
    else { stopAnim(); setView({ k, x, y }); }
  }, [animateTo, setView, stopAnim]);

  /**
   * Move the map so the box `b`, in map units, lies inside `area`, in screen pixels.
   * On each axis where it does not, the box is centred in the area.
   * If the box is bigger than the area, the map also zooms out (down to MIN_ZOOM) so it fits.
   */
  const reveal = useCallback((b: Box, area: Box) => {
    const v = goal();
    const k = Math.max(MIN_ZOOM, Math.min(v.k, area.w / b.w, area.h / b.h));
    const zoomed = k !== v.k;
    const left = b.x * k + v.x, top = b.y * k + v.y;
    const w = b.w * k, h = b.h * k;
    let { x, y } = v;
    // After a zoom-out the old position means nothing, so centre the box on both axes.
    if (zoomed || left < area.x || left + w > area.x + area.w) x += area.x + (area.w - w) / 2 - left;
    if (zoomed || top < area.y || top + h > area.y + area.h) y += area.y + (area.h - h) / 2 - top;
    if (!zoomed && x === v.x && y === v.y) return;
    touched.current = true;
    byUser.current = true;
    animateTo(k, x, y);
  }, [animateTo]);

  /** Zoom from the centre of the screen. */
  const zoomCenter = useCallback((factor: number) => {
    const svg = svgRef.current;
    if (!svg) return;
    const r = svg.getBoundingClientRect();
    zoomAt(r.width / 2, r.height / 2, factor, true);
  }, [svgRef, zoomAt]);

  /**
   * Fit all visible blocks inside `area`, in screen pixels.
   * Without `area`, use the whole screen, leaving room for the top bar and controls.
   * `auto` is true for the fit on page load and resize, which the user did not ask for.
   */
  const fit = useCallback((animated: boolean, area?: Box, auto = false) => {
    const svg = svgRef.current;
    const world = worldRef.current;
    if (!svg || !world) return;
    const bb = world.getBBox();
    if (!bb.width || !bb.height) return;
    let a = area;
    if (!a) {
      const r = svg.getBoundingClientRect();
      const top = topSpace(topbarRef.current);
      a = { x: EDGE, y: top, w: r.width - EDGE * 2, h: r.height - top - CONTROLS_SPACE };
    }
    const k = clamp(Math.min(a.w / bb.width, a.h / bb.height));
    byUser.current = !auto;
    const x = a.x + (a.w - bb.width * k) / 2 - bb.x * k;
    const y = a.y + (a.h - bb.height * k) / 2 - bb.y * k;
    if (animated) animateTo(k, x, y);
    else { stopAnim(); setView({ k, x, y }); }
  }, [svgRef, worldRef, topbarRef, animateTo, setView, stopAnim]);

  /** Count a user action that does not move the map (such as opening a block), so resizes stop refitting. */
  const markTouched = useCallback(() => { touched.current = true; }, []);

  /** The fit on page load, font load and resize. It does nothing once the user has used the map. */
  const autoFit = useCallback(() => { if (!touched.current) fit(false, undefined, true); }, [fit]);

  return { view, viewRef, byUser, stopAnim, animateTo, moveTo, zoomAt, reveal, zoomCenter, fit, autoFit, markTouched };
}

export type Viewport = ReturnType<typeof useViewport>;
