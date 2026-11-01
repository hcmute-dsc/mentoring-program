export interface Release {
  version: string;
  /** Release date, YYYY-MM-DD. */
  date: string;
  /** What is new, one short sentence each. */
  items: string[];
  /** The same notes in Vietnamese. Without it the English notes are shown. */
  vi?: string[];
}

/**
 * Release notes, newest first. The "What's new" popup (click the version tag) shows them.
 * When you raise the version in package.json, add an entry here for it.
 */
export const releases: Release[] = [
  {
    version: '2.1.0',
    date: '2026-11-01',
    items: [
      'Switch between English and Vietnamese with the EN | VI button in the top-right corner. Your choice is saved in this browser.',
      'The Study Jam map has two tracks now: Git & GitHub, and Docker.',
    ],
    vi: [
      'Chuyển giữa tiếng Anh và tiếng Việt bằng nút EN | VI ở góc trên bên phải. Lựa chọn được lưu trong trình duyệt này.',
      'Bản đồ Study Jam giờ có hai nhánh: Git & GitHub, và Docker.',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-10-15',
    items: [
      'A new map: the Git & GitHub Study Jam timeline, from the kickoff to the closing ceremony.',
      'Pick the map in the dropdown at the top-left.',
    ],
    vi: [
      'Một bản đồ mới: lộ trình Study Jam, từ buổi khởi động đến buổi bế mạc.',
      'Chọn bản đồ trong danh sách thả xuống ở góc trên bên trái.',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-10-14',
    items: [
      'Switch between the light and dark theme with the button in the top-right corner.',
      'The site follows your system theme until you pick one. Your choice is saved in this browser.',
      'Click the version tag to see what is new in each version.',
    ],
    vi: [
      'Chuyển giữa giao diện sáng và tối bằng nút ở góc trên bên phải.',
      'Trang theo giao diện của hệ thống cho đến khi bạn chọn. Lựa chọn được lưu trong trình duyệt này.',
      'Nhấp vào nhãn phiên bản để xem mỗi phiên bản có gì mới.',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-10-13',
    items: [
      'An interactive map of the mentoring program. Click a block to see its details.',
      'Drag to move the map. Scroll or pinch to zoom. "Fit" shows the whole map.',
      'Show or hide the timeline phases of each group.',
      'Team-based groups, and notes that mark the required steps.',
      'Keys: + / - zoom, 0 fits the map, Esc closes the panel.',
    ],
    vi: [
      'Bản đồ tương tác của chương trình mentoring. Nhấp vào một khối để xem chi tiết.',
      'Kéo để di chuyển bản đồ. Cuộn hoặc chụm để phóng to. "Vừa khung" hiện toàn bộ bản đồ.',
      'Hiện hoặc ẩn các giai đoạn của lộ trình trong từng nhóm.',
      'Nhóm theo đội, và ghi chú đánh dấu các bước bắt buộc.',
      'Phím: + / - phóng to, thu nhỏ, 0 vừa khung, Esc đóng bảng.',
    ],
  },
];
