export type Lang = 'en' | 'vi';

export const LANGS: Lang[] = ['en', 'vi'];

/** Text of the interface around the map. The text inside the maps is translated in diagrams/vi.ts. */
export interface Ui {
  hint: string;
  hintLong: string;
  mapLabel: string;
  mapAria: (name: string) => string;
  themeTo: (next: 'light' | 'dark') => string;
  langTo: string;
  langShort: string;
  zoomControls: string;
  zoomOut: string;
  zoomIn: string;
  zoom: string;
  fit: string;
  showRows: (name: string) => string;
  hideRows: (name: string) => string;
  /** Names a diagram gives to its rows, by their English name. */
  rowNames: Record<string, string>;
  showOrHide: (name: string) => string;
  close: string;
  required: string;
  example: string;
  whatsNew: string;
  version: (v: string) => string;
  noNotes: string;
  earlier: string;
}

export const ui: Record<Lang, Ui> = {
  en: {
    hint: 'Click a block to see details.',
    hintLong: 'Scroll to zoom. Drag to move.',
    mapLabel: 'Map',
    mapAria: (name) => `Map of the ${name}. Select a block to read its details.`,
    themeTo: (next) => `Switch to ${next} theme`,
    langTo: 'Switch to Vietnamese',
    langShort: 'VI',
    zoomControls: 'Zoom controls',
    zoomOut: 'Zoom out',
    zoomIn: 'Zoom in',
    zoom: 'Zoom',
    fit: 'Fit',
    showRows: (name) => 'Show ' + name,
    hideRows: (name) => 'Hide ' + name,
    rowNames: {},
    showOrHide: (name) => 'Show or hide ' + name,
    close: 'Close',
    required: 'Required',
    example: 'Example',
    whatsNew: "What's new",
    version: (v) => `Version ${v}. What's new`,
    noNotes: 'No notes for this version yet.',
    earlier: 'Earlier versions',
  },
  vi: {
    hint: 'Nhấp vào một khối để xem chi tiết.',
    hintLong: 'Cuộn để phóng to, kéo để di chuyển.',
    mapLabel: 'Bản đồ',
    mapAria: (name) => `Bản đồ ${name}. Chọn một khối để đọc chi tiết.`,
    themeTo: (next) => (next === 'dark' ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng'),
    langTo: 'Chuyển sang tiếng Anh',
    langShort: 'EN',
    zoomControls: 'Điều khiển thu phóng',
    zoomOut: 'Thu nhỏ',
    zoomIn: 'Phóng to',
    zoom: 'Thu phóng',
    fit: 'Vừa khung',
    showRows: (name) => 'Hiện ' + name,
    hideRows: (name) => 'Ẩn ' + name,
    rowNames: { timelines: 'lộ trình' },
    showOrHide: (name) => 'Hiện hoặc ẩn ' + name,
    close: 'Đóng',
    required: 'Bắt buộc',
    example: 'Ví dụ',
    whatsNew: 'Có gì mới',
    version: (v) => `Phiên bản ${v}. Có gì mới`,
    noNotes: 'Phiên bản này chưa có ghi chú.',
    earlier: 'Các phiên bản trước',
  },
};
