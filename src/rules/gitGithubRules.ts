import type { Lang } from '../i18n';

/*
 * Text of the Git & GitHub Study Jam rules page, in English and Vietnamese.
 * Keep the English and Vietnamese text in step when a rule changes.
 * In any text, **like this** is shown in bold.
 */

/** The Google Form where teams register for the Study Jam. */
export const REGISTER_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSctnyVy4a5bC0T536v4GISt37yxGLzotvB0ic6Y8ZP2UP-avw/viewform?usp=dialog';

export type Block =
  | { kind: 'p'; text: string }
  /** 'check' = a condition to meet, 'cross' = something not allowed. */
  | { kind: 'list'; mark?: 'dot' | 'check' | 'cross'; items: string[] }
  /** Numbered steps. A step can have its own short list. */
  | { kind: 'steps'; items: { text: string; items?: string[] }[] }
  /** A highlighted warning box. */
  | { kind: 'warn'; title: string; blocks: Block[] }
  /** The bonus points for the earliest teams. */
  | { kind: 'ranking'; head: [string, string]; rows: [string, string][] }
  | { kind: 'cards'; items: { title: string; text: string }[] };

export interface Sub {
  /** Number shown before the heading, such as "1.1". */
  n: string;
  h: string;
  blocks: Block[];
}

export interface Section {
  /** Used in the link to this section, such as #scoring. The same in both languages. */
  id: string;
  n: string;
  h: string;
  subs: Sub[];
}

export interface RulesText {
  /** Browser tab title. */
  docTitle: string;
  back: string;
  eyebrow: string;
  title: string;
  lead: string;
  facts: { label: string; value: string }[];
  contents: string;
  sections: Section[];
  register: string;
  /** Read by screen readers after the register button. */
  newTab: string;
  copyLink: string;
  copied: string;
}

export const rules: Record<Lang, RulesText> = {
  en: {
    docTitle: 'Git & GitHub Study Jam – Rules',
    back: 'Study Jam map',
    eyebrow: 'Git & GitHub Study Jam',
    title: 'Program rules',
    lead: 'Teams build one project and manage its source code with Git and GitHub. Read these rules before you submit your first task.',
    facts: [
      { label: 'Duration', value: 'Nov 22 – Dec 13, 2026 · 3 weeks' },
      { label: 'Closing ceremony', value: 'Sunday, Dec 20, 2026 (tentative)' },
      { label: 'Format', value: 'Team competition, 3–5 members per team' },
      { label: 'Task', value: 'Build a project (website/software) and manage the source code with Git and GitHub' },
      { label: 'Submission', value: 'Through a Google Form provided by the organizers' },
    ],
    contents: 'On this page',
    register: 'Register',
    newTab: '(opens in a new tab)',
    copyLink: 'Copy link',
    copied: 'Link copied',
    sections: [
      {
        id: 'participation',
        n: '1',
        h: 'Participation format',
        subs: [
          {
            n: '1.1',
            h: 'Duration and participants',
            blocks: [
              {
                kind: 'list',
                items: [
                  'The program runs from **November 22, 2026** to **December 13, 2026** (3 weeks in total).',
                  'The **closing ceremony** is planned for one week later, on **Sunday, December 20, 2026 (tentative)**.',
                  'Students join as teams. Each team has **3 to 5 members**.',
                ],
              },
            ],
          },
          {
            n: '1.2',
            h: 'Practical work',
            blocks: [
              {
                kind: 'list',
                items: [
                  'Teams build one project (website/software) throughout the program.',
                  'Teams use Git and GitHub to manage their source code.',
                ],
              },
            ],
          },
          {
            n: '1.3',
            h: 'Weekly process',
            blocks: [
              {
                kind: 'steps',
                items: [
                  { text: 'The organizers give teams a task for the week.' },
                  {
                    text: 'Teams complete the task and submit their work through the Google Form provided by the organizers, within the given time.',
                  },
                  {
                    text: "After the submission period, the organizers grade the work based on two factors: the task requirements and each team's submission time (see Section 2).",
                  },
                  {
                    text: 'Every **Sunday**, the organizers hold an online meeting. In this meeting:',
                    items: [
                      'The instructor presents theory.',
                      "The instructor answers teams' questions about the task.",
                      'The **top 3 teams with the highest scores of the week** have their work reviewed in detail by the instructor, who gives feedback and suggests fixes (if any).',
                    ],
                  },
                  { text: 'After the meeting, the organizers announce the task for the next week.' },
                ],
              },
            ],
          },
          {
            n: '1.4',
            h: 'Rules after submission',
            blocks: [
              {
                kind: 'warn',
                title: 'No changes after you submit',
                blocks: [
                  {
                    kind: 'p',
                    text: 'After submitting, teams must **not make any change at all** to the submitted branch or Pull Request. Prohibited changes include, but are not limited to:',
                  },
                  {
                    kind: 'list',
                    mark: 'cross',
                    items: [
                      'Pushing new commits.',
                      'Force pushing.',
                      'Editing the description or title of the Pull Request.',
                      'Changing the commit history.',
                    ],
                  },
                ],
              },
            ],
          },
          {
            n: '1.5',
            h: 'Rewards',
            blocks: [
              {
                kind: 'p',
                text: 'After the program ends, teams receive rewards based on their results across all tasks (see Section 3).',
              },
            ],
          },
        ],
      },
      {
        id: 'scoring',
        n: '2',
        h: 'Scoring method',
        subs: [
          {
            n: '2.1',
            h: 'Conditions for grading',
            blocks: [
              { kind: 'p', text: "A team's work is graded only if it meets **ALL** of the following conditions:" },
              {
                kind: 'list',
                mark: 'check',
                items: ['The work is submitted within the given time.', 'The work is not edited after submission.'],
              },
            ],
          },
          {
            n: '2.2',
            h: 'How points are calculated',
            blocks: [
              {
                kind: 'cards',
                items: [
                  {
                    title: 'Requirement points',
                    text: 'For each task requirement that a team meets, the team earns **+1 point**. For special cases, bonus points are calculated in a different way and are described in the task.',
                  },
                  {
                    title: 'Ranking points',
                    text: 'Given to the 3 teams that submit through the Google Form earliest. Condition: the team must complete **more than 50%** of the task requirements.',
                  },
                ],
              },
              {
                kind: 'ranking',
                head: ['Submission rank', 'Bonus points'],
                rows: [
                  ['1st earliest team', '+3'],
                  ['2nd earliest team', '+2'],
                  ['3rd earliest team', '+1'],
                ],
              },
            ],
          },
          {
            n: '2.3',
            h: 'Cancellation of results',
            blocks: [
              {
                kind: 'warn',
                title: 'Edits after submission cancel the week',
                blocks: [
                  {
                    kind: 'list',
                    items: [
                      "If the organizers find any edit to a team's work (on the submitted branch/PR) after the Google Form submission time, and the instructor did not request it, **the team's result for that week is cancelled**.",
                      'In this case, the ranking points of the other teams are recalculated according to Section 2.2.',
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'prizes',
        n: '3',
        h: 'Prize structure',
        subs: [
          {
            n: '',
            h: '',
            blocks: [
              {
                kind: 'cards',
                items: [
                  { title: 'Certificate', text: '**All participants** receive a certificate from the organizers.' },
                  {
                    title: 'Cash prizes',
                    text: 'Teams that place **first, second, and third** receive cash prizes.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  vi: {
    docTitle: 'Thể lệ Git & GitHub Study Jam',
    back: 'Bản đồ Study Jam',
    eyebrow: 'Git & GitHub Study Jam',
    title: 'Thể lệ chương trình',
    lead: 'Các nhóm xây dựng một dự án và quản lý mã nguồn bằng Git – GitHub. Hãy đọc kỹ thể lệ trước khi nộp nhiệm vụ đầu tiên.',
    facts: [
      { label: 'Thời gian', value: '22/11/2026 – 13/12/2026 · 3 tuần' },
      { label: 'Lễ bế mạc', value: 'Chủ nhật, 20/12/2026 (dự kiến)' },
      { label: 'Hình thức', value: 'Thi đấu theo nhóm, 3 – 5 thành viên mỗi nhóm' },
      { label: 'Nội dung', value: 'Xây dựng một dự án (website/phần mềm) và quản lý mã nguồn bằng Git – GitHub' },
      { label: 'Nộp bài', value: 'Qua Google Form do ban tổ chức cung cấp' },
    ],
    contents: 'Mục lục',
    register: 'Đăng ký tham gia',
    newTab: '(mở trong thẻ mới)',
    copyLink: 'Sao chép liên kết',
    copied: 'Đã sao chép',
    sections: [
      {
        id: 'participation',
        n: '1',
        h: 'Hình thức tham gia',
        subs: [
          {
            n: '1.1',
            h: 'Thời gian và thành phần tham gia',
            blocks: [
              {
                kind: 'list',
                items: [
                  'Chương trình diễn ra từ ngày **22/11/2026** đến ngày **13/12/2026** (tổng thời gian: 3 tuần).',
                  '**Lễ bế mạc** diễn ra sau đó một tuần, vào **Chủ nhật, ngày 20/12/2026 (dự kiến)**.',
                  'Sinh viên tham gia theo nhóm. Mỗi nhóm gồm **từ 3 đến 5 thành viên**.',
                ],
              },
            ],
          },
          {
            n: '1.2',
            h: 'Nội dung thực hành',
            blocks: [
              {
                kind: 'list',
                items: [
                  'Các nhóm xây dựng một dự án (website/phần mềm) xuyên suốt chương trình.',
                  'Các nhóm sử dụng Git – GitHub để quản lý mã nguồn.',
                ],
              },
            ],
          },
          {
            n: '1.3',
            h: 'Quy trình mỗi tuần',
            blocks: [
              {
                kind: 'steps',
                items: [
                  { text: 'Ban tổ chức đưa ra nhiệm vụ của tuần cho các nhóm.' },
                  {
                    text: 'Các nhóm thực hiện nhiệm vụ và nộp bài qua Google Form do ban tổ chức cung cấp, trong thời gian quy định.',
                  },
                  {
                    text: 'Sau thời gian nộp bài, ban tổ chức chấm điểm dựa trên hai yếu tố: yêu cầu của nhiệm vụ và thời gian nộp bài của từng nhóm (xem chi tiết tại mục 2).',
                  },
                  {
                    text: 'Vào **Chủ nhật** hằng tuần, ban tổ chức tổ chức một cuộc họp trực tuyến. Trong buổi họp:',
                    items: [
                      'Người hướng dẫn trình bày lý thuyết.',
                      'Người hướng dẫn giải đáp thắc mắc của các nhóm trong quá trình thực hiện nhiệm vụ.',
                      '**Top 3 nhóm có điểm cao nhất tuần** được người hướng dẫn xem bài chi tiết và góp ý sửa lỗi (nếu có).',
                    ],
                  },
                  { text: 'Sau cuộc họp, ban tổ chức thông báo nhiệm vụ của tuần kế tiếp.' },
                ],
              },
            ],
          },
          {
            n: '1.4',
            h: 'Quy định sau khi nộp bài',
            blocks: [
              {
                kind: 'warn',
                title: 'Không thay đổi sau khi nộp',
                blocks: [
                  {
                    kind: 'p',
                    text: 'Sau khi nộp bài, các nhóm **tuyệt đối không được thực hiện bất kỳ thay đổi nào** trên branch hoặc Pull Request đã nộp. Các thay đổi bị cấm bao gồm nhưng không giới hạn ở:',
                  },
                  {
                    kind: 'list',
                    mark: 'cross',
                    items: [
                      'Push commit mới.',
                      'Force push.',
                      'Chỉnh sửa mô tả hoặc tên Pull Request.',
                      'Thay đổi lịch sử commit.',
                    ],
                  },
                ],
              },
            ],
          },
          {
            n: '1.5',
            h: 'Khen thưởng',
            blocks: [
              {
                kind: 'p',
                text: 'Sau khi chương trình kết thúc, các nhóm được nhận thưởng dựa trên thành tích thực hiện các nhiệm vụ (xem chi tiết tại mục 3).',
              },
            ],
          },
        ],
      },
      {
        id: 'scoring',
        n: '2',
        h: 'Cách thức tính điểm',
        subs: [
          {
            n: '2.1',
            h: 'Điều kiện được chấm bài',
            blocks: [
              { kind: 'p', text: 'Nhóm chỉ được chấm bài khi thoả mãn **TẤT CẢ** các điều kiện sau:' },
              {
                kind: 'list',
                mark: 'check',
                items: ['Nộp bài đúng thời gian quy định.', 'Không chỉnh sửa bài làm sau khi nộp.'],
              },
            ],
          },
          {
            n: '2.2',
            h: 'Cách tính điểm',
            blocks: [
              {
                kind: 'cards',
                items: [
                  {
                    title: 'Điểm yêu cầu',
                    text: 'Mỗi yêu cầu của nhiệm vụ mà nhóm đạt được sẽ được **+1 điểm**. Đối với các trường hợp đặc biệt, điểm cộng được tính theo cách khác và được mô tả cụ thể trong nhiệm vụ.',
                  },
                  {
                    title: 'Điểm thứ hạng',
                    text: 'Được cộng cho 3 nhóm nộp bài qua Google Form sớm nhất. Điều kiện: nhóm phải hoàn thành **trên 50%** số lượng yêu cầu của nhiệm vụ.',
                  },
                ],
              },
              {
                kind: 'ranking',
                head: ['Thứ hạng nộp bài', 'Điểm cộng'],
                rows: [
                  ['Nhóm nộp sớm thứ 1', '+3'],
                  ['Nhóm nộp sớm thứ 2', '+2'],
                  ['Nhóm nộp sớm thứ 3', '+1'],
                ],
              },
            ],
          },
          {
            n: '2.3',
            h: 'Huỷ kết quả',
            blocks: [
              {
                kind: 'warn',
                title: 'Chỉnh sửa sau khi nộp sẽ bị huỷ kết quả tuần',
                blocks: [
                  {
                    kind: 'list',
                    items: [
                      'Nếu ban tổ chức phát hiện bất kỳ chỉnh sửa nào trên branch/PR đã nộp kể từ thời điểm nộp Google Form, mà không có yêu cầu từ người hướng dẫn, thì **kết quả của tuần đó bị huỷ**.',
                      'Khi đó, điểm cộng thứ hạng của các nhóm còn lại sẽ được cập nhật lại theo cách tính ở mục 2.2.',
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'prizes',
        n: '3',
        h: 'Cơ cấu giải thưởng',
        subs: [
          {
            n: '',
            h: '',
            blocks: [
              {
                kind: 'cards',
                items: [
                  {
                    title: 'Giấy chứng nhận',
                    text: '**Tất cả thành viên** tham gia đều nhận được giấy chứng nhận từ ban tổ chức.',
                  },
                  {
                    title: 'Giải thưởng hiện kim',
                    text: 'Các nhóm đạt **hạng nhất, hạng nhì và hạng ba** nhận được phần thưởng hiện kim.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
