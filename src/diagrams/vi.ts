import type { Detail, Diagram, MapNode } from '../types';
import { mentoringVi } from './viMentoring';

/** What a Vietnamese map changes in a block. Anything not listed stays as it is. */
type NodeText = Pick<Partial<MapNode>, 't' | 's'> & { d?: Partial<Detail> };

export interface Translation {
  name: string;
  /** Edge labels, by their English text. */
  labels?: Record<string, string>;
  nodes: Record<string, NodeText>;
}

/** Vietnamese text of the maps, by map id. A map that is not here stays in English. */
const translations: Record<string, Translation> = {
  mentoring: mentoringVi,
  'git-study-jam': {
    name: 'Study Jam',
    nodes: {
      root: {
        t: 'Study Jam',
        s: '2 nhánh',
        d: {
          tag: 'Tổng quan',
          title: 'Study Jam',
          text: 'Cùng học theo nhóm. Study Jam có hai nhánh: Git & GitHub, và Docker.',
          groups: [
            { h: 'Các nhánh', items: ['Git & GitHub: 5 tuần', 'Docker: 2 tuần'] },
            {
              h: 'Lộ trình Git & GitHub',
              items: [
                'Tuần 1 · Khởi động: kiến thức cơ bản về Git và GitHub',
                'Tuần 2 · Trang chủ: nhánh và pull request',
                'Tuần 3 · Giới thiệu: nhiều nhánh cùng lúc',
                'Tuần 4 · Liên hệ: review code và merge',
                'Tuần 5 · Bế mạc: tổng kết và trình diễn',
              ],
            },
          ],
        },
      },
      's-time': {
        t: 'Git & GitHub',
        s: '5 tuần',
        d: {
          tag: 'Nhánh 1',
          title: 'Git & GitHub',
          text: 'Mỗi nhóm cùng xây một website nhỏ, từng trang một. Năm tuần, từ buổi khởi động đến buổi bế mạc. Mỗi tuần thêm một phần mới của quy trình Git và GitHub.',
        },
      },
      's-docker': {
        t: 'Docker',
        s: '2 tuần',
        d: {
          tag: 'Nhánh 2',
          title: 'Docker',
          text: 'Đóng gói ứng dụng vào container và đưa lên tự động. Hai tuần, dựa trên khóa học DevOps, dùng một ứng dụng xuyên suốt: Club Management API.',
          groups: [
            {
              h: 'Ba giai đoạn',
              items: [
                'Giai đoạn 1 · Nền tảng: quy trình DevOps và môi trường lập trình',
                'Giai đoạn 2 · Container: Docker và Compose',
                'Giai đoạn 3 · CI/CD: kiểm thử và build tự chạy',
              ],
            },
            {
              h: 'Lộ trình',
              items: [
                'Tuần 1 · Nền tảng và Docker: chạy và build container',
                'Tuần 2 · Compose và CI/CD: nhiều container, rồi tự động hóa',
              ],
            },
          ],
        },
      },
      wk1: {
        t: 'Tuần 1 · Khởi động',
        s: 'Git và GitHub cơ bản',
        d: {
          tag: 'Tuần 1',
          title: 'Khởi động',
          sub: 'Git và GitHub cơ bản',
          text: 'Làm quen với nhóm và chuẩn bị dùng Git và GitHub.',
          groups: [
            {
              h: 'Bạn học được gì',
              items: [
                'Version control là gì, và vì sao các nhóm dùng nó',
                'Khác nhau giữa Git (công cụ) và GitHub (website lưu trữ code)',
                'Cài Git và đặt tên, email',
                'Tạo tài khoản GitHub',
                'Repository: tạo mới và clone về máy',
              ],
            },
          ],
        },
      },
      wk2: {
        t: 'Tuần 2 · Trang chủ',
        s: 'Nhánh và pull request',
        d: {
          tag: 'Tuần 2',
          title: 'Trang chủ',
          sub: 'Nhánh và pull request',
          text: 'Trưởng nhóm khởi tạo codebase, và một thành viên làm trang Trang chủ.',
          groups: [
            {
              h: 'Bạn học được gì',
              items: [
                'Tạo nhánh từ main, hoặc từ một nhánh khác',
                'Commit thay đổi với thông điệp rõ ràng bằng tiếng Anh',
                'Push nhánh lên GitHub',
                'Mở pull request vào main, có tiêu đề và mô tả',
              ],
            },
          ],
        },
      },
      wk3: {
        t: 'Tuần 3 · Giới thiệu',
        s: 'Nhiều nhánh cùng lúc',
        d: {
          tag: 'Tuần 3',
          title: 'Trang giới thiệu',
          sub: 'Nhiều nhánh cùng lúc',
          text: 'Mỗi thành viên thêm một phần giới thiệu về mình vào cùng một trang.',
          groups: [
            {
              h: 'Bạn học được gì',
              items: [
                'Làm việc trên nhánh của mình khi đồng đội làm trên nhánh của họ',
                'Theo quy tắc đặt tên nhánh, ví dụ feature/about-<mã số sinh viên>',
                'Mở nhiều pull request vào main cùng lúc, mỗi thành viên một cái',
                'Lấy main mới nhất và sửa xung đột merge khi hai người cùng sửa một file',
              ],
            },
          ],
        },
      },
      wk4: {
        t: 'Tuần 4 · Liên hệ',
        s: 'Review code và merge',
        d: {
          tag: 'Tuần 4',
          title: 'Trang liên hệ',
          sub: 'Review code và merge',
          text: 'Một thành viên làm trang Liên hệ, và trưởng nhóm review.',
          groups: [
            {
              h: 'Bạn học được gì',
              items: [
                'Thêm người review vào pull request',
                'Review code: bình luận, duyệt, hoặc yêu cầu sửa. "LGTM" nghĩa là "Looks Good To Me" (trông ổn rồi).',
                'Cập nhật pull request bằng commit mới trên cùng nhánh',
                'Merge pull request vào main',
                'Xóa nhánh sau khi merge',
              ],
            },
          ],
        },
      },
      wk5: {
        t: 'Tuần 5 · Bế mạc',
        s: 'Tổng kết và trình diễn',
        d: {
          tag: 'Tuần 5',
          title: 'Bế mạc',
          sub: 'Tổng kết và trình diễn',
          text: 'Các nhóm giới thiệu website của mình và nhìn lại những gì đã học.',
          groups: [
            {
              h: 'Bạn học được gì',
              items: [
                'Quy trình đầy đủ của nhóm: nhánh, commit, push, pull request, review, merge',
                'Đọc lịch sử của repository: commit, pull request, và ai đã sửa gì',
                'Trình bày sản phẩm của nhóm và lịch sử của nó trên GitHub',
              ],
            },
          ],
        },
      },
      dk1: {
        t: 'Tuần 1 · Nền tảng và Docker',
        s: 'Chạy và build container',
        d: {
          tag: 'Tuần 1',
          title: 'Nền tảng và Docker',
          sub: 'Chạy và build container',
          text: 'Chuẩn bị môi trường, rồi học chạy và build container.',
          groups: [
            {
              h: 'Giai đoạn 1 · Nền tảng',
              items: [
                'Quy trình DevOps: ứng dụng đi từ máy bạn lên server như thế nào',
                'Môi trường lập trình chạy được: terminal, WSL2 và Git',
              ],
            },
            {
              h: 'Giai đoạn 2 · Docker',
              items: [
                'Container so với máy ảo; image, container và registry',
                'Các lệnh Docker: run, ps, logs, exec và stop',
                'Viết Dockerfile cho API Node.js',
              ],
            },
          ],
        },
      },
      dk2: {
        t: 'Tuần 2 · Compose và CI/CD',
        s: 'Nhiều container, rồi tự động hóa',
        d: {
          tag: 'Tuần 2',
          title: 'Compose và CI/CD',
          sub: 'Nhiều container, rồi tự động hóa',
          text: 'Chạy cả hệ thống bằng một lệnh, rồi để GitHub build giúp bạn.',
          groups: [
            {
              h: 'Giai đoạn 2 · Compose',
              items: [
                'Docker Compose: service, network và volume',
                'Chạy web, API và PostgreSQL cùng nhau, và giữ lại dữ liệu',
              ],
            },
            {
              h: 'Giai đoạn 3 · CI/CD',
              items: [
                'CI/CD là gì, và một pipeline trông như thế nào',
                'Workflow GitHub Actions chạy kiểm thử mỗi lần push',
                'Build Docker image và publish lên GHCR',
              ],
            },
          ],
        },
      },
    },
  },
};

/** The map in Vietnamese. A map or block without a translation stays in English. */
export function toVietnamese(diagram: Diagram): Diagram {
  const tr = translations[diagram.id];
  if (!tr) return diagram;
  return {
    ...diagram,
    name: tr.name,
    edges: diagram.edges.map((e) => (e.label && tr.labels?.[e.label] ? { ...e, label: tr.labels[e.label] } : e)),
    nodes: diagram.nodes.map((n) => {
      const t = tr.nodes[n.id];
      if (!t) return n;
      return { ...n, t: t.t ?? n.t, s: t.s ?? n.s, d: n.d && t.d ? { ...n.d, ...t.d } : n.d };
    }),
  };
}
