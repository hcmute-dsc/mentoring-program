import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Controls } from './components/Controls';
import { DetailPanel } from './components/DetailPanel';
import { MapCanvas } from './components/MapCanvas';
import { ThemeToggle } from './components/ThemeToggle';
import { WhatsNew } from './components/WhatsNew';
import { byId, rowHeads, rowOf } from './graph';
import { useTheme } from './useTheme';
import { CONTROLS_SPACE, EDGE, topSpace, useViewport, ZOOM_IN, ZOOM_OUT, type Box } from './useViewport';

/** True when the panel is a bottom sheet (phones). styles.css sets --sheet, so the breakpoint lives only there. */
const isSheet = (panel: HTMLElement) => getComputedStyle(panel).getPropertyValue('--sheet').trim() === '1';
/** If less height than this is left under the top bar, a revealed block may go under the top bar. */
const MIN_AREA_H = 80;

const allRows = (open: boolean) => Object.fromEntries(rowHeads.map((h) => [h, open]));

export default function App() {
  const svgRef = useRef<SVGSVGElement>(null);
  const worldRef = useRef<SVGGElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const topbarRef = useRef<HTMLDivElement>(null);
  const vp = useViewport(svgRef, worldRef, topbarRef);
  const { view, reveal, zoomCenter, fit, autoFit, markTouched } = vp;
  const { theme, toggleTheme } = useTheme();

  // Timelines start collapsed.
  const [rowOpen, setRowOpen] = useState<Record<string, boolean>>(() => allRows(false));
  // Selected block (null = panel closed) and the last opened block (kept for the slide-out).
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [panelId, setPanelId] = useState<string | null>(null);
  // Bumped on every open, so re-opening the same block still scrolls the panel and recentres.
  const [openSeq, setOpenSeq] = useState(0);

  const anyRowOpen = rowHeads.some((h) => rowOpen[h]);

  const openNode = useCallback(
    (id: string) => {
      if (!byId[id]?.d) return;
      // Opening a block counts as using the map, so a resize no longer refits it and hides the block.
      markTouched();
      setSelectedId(id);
      setPanelId(id);
      setOpenSeq((s) => s + 1);
    },
    [markTouched],
  );

  const closePanel = useCallback(() => setSelectedId(null), []);

  const setRows = useCallback(
    (heads: string[], open: boolean) => {
      setRowOpen((prev) => ({ ...prev, ...Object.fromEntries(heads.map((h) => [h, open])) }));
      // Close the panel if its block is being hidden.
      if (!open && selectedId && heads.includes(rowOf[selectedId])) closePanel();
    },
    [selectedId, closePanel],
  );
  // Stable between pan and zoom frames, so the memoized map layers do not re-render.
  const toggleRow = useCallback((head: string) => setRows([head], !rowOpen[head]), [setRows, rowOpen]);
  const toggleAllRows = () => setRows(rowHeads, !anyRowOpen);

  /** The screen area (pixels) not under the top bar, the zoom controls or, if `panelOpen`, the panel. */
  const freeArea = useCallback((panelOpen: boolean): Box | undefined => {
    const svg = svgRef.current;
    const panel = panelRef.current;
    if (!svg) return undefined;
    const r = svg.getBoundingClientRect();
    // Keep the same space for the zoom controls as fit does. The area below leaves EDGE more, so add it back.
    let right = r.width,
      bottom = r.height - CONTROLS_SPACE + EDGE;
    if (panelOpen && panel) {
      // A side panel on wide screens, a bottom sheet on phones. offsetLeft and offsetTop ignore the slide-in transform.
      // The sheet covers the controls, so its top edge is the limit.
      if (isSheet(panel)) bottom = Math.min(bottom, panel.offsetTop - 12);
      else right = panel.offsetLeft - 12;
    }
    let top = topSpace(topbarRef.current);
    // On a short screen with the sheet open, little room is left. Covering the top bar is better than covering the block.
    if (bottom - top - EDGE < MIN_AREA_H) top = EDGE;
    return { x: EDGE, y: top, w: right - EDGE * 2, h: bottom - top - EDGE };
  }, []);

  /** Move the map so the box `b` (map units) is inside the free area. */
  const showBox = useCallback(
    (b: Box, panelOpen: boolean) => {
      const area = freeArea(panelOpen);
      if (area) reveal(b, area);
    },
    [freeArea, reveal],
  );

  const showFocused = useCallback((b: Box) => showBox(b, selectedId !== null), [showBox, selectedId]);

  /** Fit the map into the free area, so an open panel does not cover part of it. */
  const fitMap = useCallback(() => fit(true, freeArea(selectedId !== null)), [fit, freeArea, selectedId]);

  /* On open: move focus into the panel, and move the map so the panel does not cover the block. */
  useLayoutEffect(() => {
    if (!openSeq || !selectedId) return;
    const panel = panelRef.current;
    if (!panel) return;
    panel.scrollTop = 0;
    panel.focus({ preventScroll: true });
    showBox(byId[selectedId], true);
    // Runs only when a block is opened.
  }, [openSeq]);

  /* On close: if focus was in the panel, give it back to the block that opened it. */
  useLayoutEffect(() => {
    if (selectedId || !panelId || !panelRef.current?.contains(document.activeElement)) return;
    svgRef.current?.querySelector<SVGGElement>(`[data-id="${panelId}"]`)?.focus({ preventScroll: true });
    // Runs only when the selection changes.
  }, [selectedId]);

  /* Start: fit the map, and refit on resize or font load until the user moves the map. */
  useLayoutEffect(() => {
    autoFit();
    window.addEventListener('resize', autoFit);
    let alive = true;
    document.fonts?.ready.then(() => {
      if (alive) autoFit();
    });
    return () => {
      alive = false;
      window.removeEventListener('resize', autoFit);
    };
  }, [autoFit]);

  /* Keyboard shortcuts: + / - zoom, 0 fits, Escape closes the panel. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /input|textarea/i.test(t.tagName)) return;
      // Keys inside a popup (such as "What's new") belong to it. Escape there closes only the popup.
      if (t?.closest?.('dialog')) return;
      // Leave browser shortcuts (such as Ctrl/Cmd + '+' for page zoom) to the browser.
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === '+' || e.key === '=') zoomCenter(ZOOM_IN);
      else if (e.key === '-' || e.key === '_') zoomCenter(ZOOM_OUT);
      else if (e.key === '0') fitMap();
      else if (e.key === 'Escape') closePanel();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [zoomCenter, fitMap, closePanel]);

  return (
    <div className="app">
      <MapCanvas
        svgRef={svgRef}
        worldRef={worldRef}
        vp={vp}
        rowOpen={rowOpen}
        selectedId={selectedId}
        onOpenNode={openNode}
        onToggleRow={toggleRow}
        onBackgroundClick={closePanel}
        onFocusBox={showFocused}
      />

      <div className="topbar" ref={topbarRef}>
        <h1>HCMUTE DSC Mentoring Program</h1>
        <p>Click a block to see details.</p>
        <p className="long">Scroll to zoom. Drag to move.</p>
      </div>

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {/* The zoom controls on the left, the version tag on the right. The tag moves above them if the row is too narrow. */}
      <div className="bottombar">
        <Controls
          zoom={view.k}
          zoomByUser={vp.byUser}
          anyRowOpen={anyRowOpen}
          onZoomOut={() => zoomCenter(ZOOM_OUT)}
          onZoomIn={() => zoomCenter(ZOOM_IN)}
          onFit={fitMap}
          onToggleRows={toggleAllRows}
        />
        <WhatsNew />
      </div>

      <DetailPanel
        ref={panelRef}
        node={panelId ? byId[panelId] : null}
        open={selectedId !== null}
        onClose={closePanel}
      />
    </div>
  );
}
