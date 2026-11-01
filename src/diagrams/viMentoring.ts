import type { Translation } from './vi';

const REC = 'Cuối giai đoạn này, hãy quay lại buổi thuyết trình và gửi video cho mentor.';
const REC_REVIEW = 'Cuối giai đoạn này, hãy quay lại một buổi review của đội và gửi video cho mentor.';
const ARTICLES = 'Giải thích được ý tưởng, code và tốc độ một cách rõ ràng';
const PASS_TOPICS = 'Bạn đã giải bài ở mọi chủ đề';
const PASS_REVIEW = 'Bạn đã giải thích ít nhất một lời giải trong buổi review của đội';
const WEEKLY_REVIEW = 'Trong buổi review hằng tuần của đội, lần lượt giải thích lời giải của mình';
const BUILD_PASS = 'Đội đã trình bày trong demo day';

export const mentoringVi: Translation = {
  name: 'Chương trình Mentoring',
  labels: { 'next Monday': 'thứ Hai tới' },
  nodes: {
    root: {
      t: 'HCMUTE DSC Mentoring',
      s: '16 tuần',
      d: {
        tag: 'Tổng quan',
        title: 'Chương trình HCMUTE DSC Mentoring',
        text: 'Chương trình kéo dài 16 tuần. Thành viên học cùng mentor trong một trong ba nhóm. Ở mọi nhóm, thành viên làm việc theo đội 3–5 người. Mỗi nhóm có mục tiêu riêng, và mỗi đội trình bày thành quả của mình trong demo day.',
        groups: [
          {
            h: 'Mục tiêu của các nhóm',
            items: [
              'A1 · Nền tảng lập trình: đội xây một ứng dụng console dùng lớp (class) và cơ sở dữ liệu',
              'A2 · Giải quyết vấn đề: đội giải bài mỗi tuần, và giải thích một bài khó',
              'B1 · Dự án nhóm: đội xây một ứng dụng web và đưa lên mạng',
            ],
          },
          {
            h: 'Thông tin chính',
            items: [
              '16 tuần (một học kỳ)',
              'Mỗi thành viên học 1 nhóm trong mỗi học kỳ',
              'Đội 3–5 thành viên ở mọi nhóm',
              'Tự học dưới 3 giờ mỗi tuần',
              '6 buổi gặp mặt, khoảng 1–2 buổi mỗi tháng',
              'Mỗi đội trình bày trong demo day, và từng thành viên trình bày phần của mình',
            ],
          },
        ],
      },
    },
    's-groups': {
      t: 'Track và nhóm',
      s: '2 track · 3 nhóm',
      d: {
        tag: 'Cấu trúc',
        text: 'Có ba nhóm: A1 và A2 thuộc Track A, và B1 thuộc Track B. Mỗi thành viên tham gia một nhóm và ở lại nhóm đó suốt học kỳ. Trong mỗi nhóm, thành viên làm việc theo đội 3–5 người. Dự án của mỗi đội tương ứng khoảng 40 giờ làm việc cho mỗi thành viên. Mỗi nhóm có lộ trình riêng.',
        groups: [
          {
            h: 'Làm việc đội ở mọi nhóm',
            items: [
              'Mỗi đội có 3–5 thành viên',
              'Mỗi thành viên phụ trách một phần việc rõ ràng',
              'Cả đội dùng chung một repository code',
              'Các thành viên review công việc của nhau',
            ],
          },
        ],
      },
    },
    's-week': {
      t: 'Nhịp tuần',
      s: 'Trực tuyến, mỗi tuần',
      d: {
        tag: 'Mỗi tuần',
        text: 'Một nhịp làm việc ngắn giúp mọi người hoạt động đều giữa các buổi gặp. Chỉ mất vài phút.',
        groups: [
          {
            h: 'Công cụ',
            items: [
              'Discord hoặc Messenger: nhóm chat của đội và của nhóm để hỏi đáp và cập nhật',
              'Một dịch vụ lưu trữ code, như GitHub hoặc GitLab: chứa code',
              'Google Meet: họp trực tuyến',
            ],
          },
        ],
      },
    },
    trackA: {
      t: 'Track A',
      s: 'Nền tảng',
      d: {
        tag: 'Track A',
        text: 'Dành cho sinh viên năm 1 và năm 2. Học kiến thức cơ bản trong một đội trước khi xây dự án thật.',
        groups: [
          {
            h: 'Chủ đề',
            items: [
              'Cấu trúc dữ liệu và giải thuật (DSA)',
              'Lập trình hướng đối tượng (OOP)',
              'Ngôn ngữ truy vấn có cấu trúc (SQL)',
            ],
          },
        ],
      },
    },
    trackB: {
      t: 'Track B',
      s: 'Phát triển phần mềm',
      d: {
        tag: 'Track B',
        text: 'Dành cho sinh viên năm 3 và năm 4. Trải nghiệm thực tế khi xây phần mềm trong một đội.',
        groups: [
          {
            h: 'Chủ đề',
            items: ['Phát triển web backend', 'Phát triển web frontend', 'Phát triển ứng dụng di động'],
          },
        ],
      },
    },
    moveup: {
      t: 'Lên B · kiểm tra',
      d: {
        tag: 'Tham gia',
        title: 'Lên Track B',
        text: 'Sinh viên năm 1 hoặc năm 2 giỏi có thể vào Track B. Để vào, bạn trình bày một dự án của riêng mình có dùng kiến thức nền tảng. Mentor xem dự án để kiểm tra kỹ năng của bạn.',
        groups: [
          {
            h: 'Cần trình bày gì',
            items: [
              'Một dự án do chính bạn làm',
              'Có dùng kiến thức nền tảng, như OOP, SQL hoặc DSA',
              'Bạn giải thích được nó hoạt động ra sao và vì sao bạn làm như vậy',
            ],
          },
        ],
      },
    },
    joinA: {
      t: 'Vào A · không cần',
      d: {
        tag: 'Tham gia',
        title: 'Vào Track A sau',
        text: 'Sinh viên năm 3 hoặc năm 4 có thể vào Track A để có nền tảng vững hơn. Không cần kiểm tra.',
      },
    },
    a1: {
      t: 'A1 · Nền tảng lập trình',
      s: 'OOP + SQL',
      d: {
        tag: 'A1 · Track A',
        title: 'Nền tảng lập trình',
        sub: 'OOP + SQL',
        text: 'Một đội 3–5 người xây một ứng dụng console nhỏ. Ứng dụng dùng lớp (class) và lưu dữ liệu trong cơ sở dữ liệu. Ứng dụng console chạy trong cửa sổ terminal với menu chữ.',
        groups: [
          { h: 'Ý tưởng gợi ý', items: ['Quản lý thư viện', 'Theo dõi điểm sinh viên', 'Quản lý sự kiện CLB'] },
          {
            h: 'Làm việc đội',
            items: [
              'Đội chia ứng dụng thành các phần, ví dụ chức năng về sách hoặc về mượn sách. Mỗi thành viên xây một hoặc nhiều phần.',
              'Cả đội dùng chung một repository code',
              'Các thành viên review code của nhau trước khi merge',
            ],
          },
          {
            h: 'Điều kiện đạt',
            items: [
              'Từ 3 lớp trở lên',
              'Từ 3 bảng cơ sở dữ liệu trở lên',
              'Tạo, đọc, sửa và xóa dữ liệu',
              'Mỗi thành viên giải thích được phần của mình',
            ],
          },
        ],
      },
    },
    a2: {
      t: 'A2 · Giải quyết vấn đề',
      s: 'DSA',
      d: {
        tag: 'A2 · Track A',
        title: 'Giải quyết vấn đề',
        sub: 'DSA',
        text: 'Một đội 3–5 người cùng giải bài. Mỗi tuần, đội chọn 3–5 bài. Từng thành viên tự giải, sau đó cả đội so sánh các lời giải. DSA là Cấu trúc dữ liệu và giải thuật. Các chủ đề đi theo thứ tự, từ dễ đến khó.',
        groups: [
          {
            h: 'Thứ tự chủ đề',
            items: [
              'Mảng',
              'Chuỗi',
              'Stack và queue',
              'Đệ quy',
              'Bảng băm (hash table)',
              'Sắp xếp và tìm kiếm',
              'Cây',
              'Đồ thị',
              'Quy hoạch động (cơ bản)',
            ],
          },
          {
            h: 'Làm việc đội',
            items: [
              'Một buổi review đội hằng tuần: thành viên giải thích lời giải và so sánh ý tưởng',
              'Các thành viên lần lượt dẫn buổi review',
              'Đội giữ mọi lời giải trong một repository code chung',
            ],
          },
          {
            h: 'Dự án đội (tùy chọn)',
            items: [
              'Một chương trình cho thấy từng bước các phương pháp sắp xếp hoặc tìm kiếm hoạt động ra sao. Mỗi thành viên xây một phương pháp.',
            ],
          },
          {
            h: 'Điều kiện đạt',
            items: [
              'Đội giải thích cách giải một bài khó',
              'Trình bày ý tưởng và code',
              'Giải thích vì sao lời giải đủ nhanh',
              'Mỗi thành viên giải thích một phần của bài nói và trả lời được câu hỏi về cả lời giải',
              'Tham gia các buổi review đội hằng tuần',
            ],
          },
        ],
      },
    },
    b1: {
      t: 'B1 · Dự án nhóm',
      s: 'Backend + Frontend',
      d: {
        tag: 'B1 · Track B',
        title: 'Dự án nhóm',
        sub: 'Backend + Frontend (Mobile tùy chọn)',
        text: 'Một đội 3–5 người xây một ứng dụng web. Mỗi thành viên nhận một vai trò: backend, frontend, hoặc mobile (tùy chọn).',
        groups: [
          {
            h: 'Ý tưởng gợi ý',
            items: ['Website CLB có đăng ký sự kiện', 'Tìm nhóm học', 'Ứng dụng chia chi phí'],
          },
          {
            h: 'Điều kiện đạt',
            items: [
              'Đăng nhập',
              'Từ 2 chức năng chính trở lên',
              'Một API chạy được (các quy tắc để ứng dụng xin dữ liệu từ backend)',
              'Ứng dụng đã lên mạng để người khác dùng thử',
            ],
          },
        ],
      },
    },
    a1t: {
      t: 'Lộ trình A1',
      s: '6 giai đoạn',
      d: {
        tag: 'Lịch A1',
        sub: 'Cho nhóm A1',
        text: 'Thành viên làm việc theo đội 3–5 người. Học OOP trước, rồi SQL. Sau đó mỗi đội chọn một ý tưởng dự án và dùng cả hai kỹ năng để cùng xây một ứng dụng console. Giai đoạn xây dựng dài nhất, vì ứng dụng ghép hai kỹ năng và phần của từng thành viên.',
      },
    },
    a1p1: {
      t: 'Khởi động',
      s: '~1 tuần',
      d: {
        tag: 'A1 · Giai đoạn 1 · ~1 tuần',
        text: 'Lập đội và chuẩn bị máy tính của bạn.',
        groups: [
          {
            h: 'Mục tiêu',
            items: ['Lập đội 3–5 người', 'Nắm mục tiêu A1 và điều kiện đạt', 'Chuẩn bị máy tính để lập trình'],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Vào nhóm chat của nhóm và gặp mentor',
              'Tạo nhóm chat của đội',
              'Cài trình soạn thảo code và ngôn ngữ mà đội dùng',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [
              'Đội của bạn được đăng trong nhóm chat của nhóm',
              'Mọi thành viên chạy được một chương trình "Hello, world" đơn giản',
            ],
          },
        ],
      },
    },
    a1p2: {
      t: 'Học OOP',
      s: '~3 tuần',
      d: {
        tag: 'A1 · Giai đoạn 2 · ~3 tuần',
        note: REC,
        text: 'Học cách tổ chức code bằng lớp (class) và đối tượng (object). OOP là Lập trình hướng đối tượng.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Viết một lớp có trường và phương thức',
              'Tạo các đối tượng phối hợp với nhau',
              'Dùng đóng gói và kế thừa trong các trường hợp đơn giản',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Bắt đầu với lớp, đối tượng, hàm khởi tạo và phương thức',
              'Rồi học đóng gói: trường private, getter và setter',
              'Cuối cùng học kế thừa và interface đơn giản',
              'Làm các bài tập nhỏ, như lớp Student hoặc lớp BankAccount',
              'Review code bài tập của nhau trong đội',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [
              'Mỗi thành viên đã trình bày ngắn trước đội để giải thích các lớp thực hành của mình',
              'Mỗi thành viên đã viết các lớp thực hành phối hợp được với nhau',
            ],
          },
        ],
      },
    },
    a1p3: {
      t: 'Học SQL',
      s: '~3 tuần',
      d: {
        tag: 'A1 · Giai đoạn 3 · ~3 tuần',
        note: REC,
        text: 'Học cách lưu và đọc dữ liệu trong cơ sở dữ liệu. SQL là ngôn ngữ bạn dùng để nói chuyện với cơ sở dữ liệu.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Tạo bảng có khóa chính và khóa ngoại',
              'Viết truy vấn SELECT, INSERT, UPDATE và DELETE',
              'Nối hai bảng trong một truy vấn',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Cài một cơ sở dữ liệu, như SQLite hoặc MySQL',
              'Luyện truy vấn trên một cơ sở dữ liệu mẫu',
              'Thiết kế 3 bảng cho một ví dụ nhỏ, như thư viện',
              'Vẽ cách các bảng liên kết với nhau',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [
              'Các bảng thực hành của bạn đã được tạo trong cơ sở dữ liệu',
              'Mỗi thành viên đã trình bày ngắn trước đội để giải thích các bảng và truy vấn thực hành của mình',
            ],
          },
        ],
      },
    },
    a1p4: {
      t: 'Xây ứng dụng',
      s: '~6 tuần',
      d: {
        tag: 'A1 · Giai đoạn 4 · ~6 tuần',
        text: 'Chọn ý tưởng dự án, rồi ghép các lớp của mọi người và cơ sở dữ liệu thành một ứng dụng chạy được.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Cùng đội chọn một ý tưởng dự án',
              'Kết nối chương trình với cơ sở dữ liệu',
              'Tạo, đọc, sửa và xóa dữ liệu từ ứng dụng',
              'Xây một menu chữ đơn giản',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Cùng chọn ý tưởng: quản lý thư viện, theo dõi điểm, quản lý sự kiện CLB, hoặc ý tưởng của riêng bạn',
              'Chia ứng dụng thành các phần và quyết định ai xây phần nào',
              'Thiết kế các lớp chính và từ 3 bảng trở lên, và nhờ mentor review',
              'Thêm từng chức năng một, ví dụ "Thêm sách", rồi "Liệt kê sách"',
              'Kiểm thử từng chức năng trước khi làm chức năng tiếp theo',
              'Review code của nhau trước khi merge',
              'Đặt mục tiêu tuần cho đội và cùng kiểm tra',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Tạo, đọc, sửa và xóa đều chạy được', 'Ứng dụng đạt điều kiện: từ 3 lớp và từ 3 bảng trở lên'],
          },
        ],
      },
    },
    a1p5: {
      t: 'Hoàn thiện',
      s: '~1 tuần',
      d: {
        tag: 'A1 · Giai đoạn 5 · ~1 tuần',
        text: 'Làm cho ứng dụng ổn định và sẵn sàng để trình bày.',
        groups: [
          { h: 'Mục tiêu', items: ['Sửa các lỗi chính', 'Viết README rõ ràng', 'Lên kế hoạch demo ngắn'] },
          {
            h: 'Việc cần làm',
            items: [
              'Nhờ một đội khác dùng thử ứng dụng và báo vấn đề',
              'Sửa lỗi, bắt đầu từ những lỗi làm ứng dụng bị sập',
              'Viết README: ứng dụng làm gì, chạy thế nào, và ai làm gì',
              'Lên kế hoạch demo: trình bày những chức năng nào, theo thứ tự nào, và ai trình bày từng chức năng',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Ứng dụng chạy không bị sập', 'README nằm trong repository code của đội', 'Đội đã tập demo'],
          },
        ],
      },
    },
    a1p6: {
      t: 'Demo day',
      s: '~2 tuần',
      d: {
        tag: 'A1 · Giai đoạn 6 · ~2 tuần',
        text: 'Cả đội trình bày ứng dụng trước CLB và học từ phản hồi. Các alumni chấm dự án.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Trình bày ứng dụng rõ ràng',
              'Giải thích một lựa chọn thiết kế của đội',
              'Thu thập phản hồi cho bước tiếp theo',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Trình diễn trực tiếp các chức năng chính',
              'Mỗi thành viên giải thích phần của mình',
              'Giải thích các lớp và bảng kết nối với nhau thế nào',
              'Trả lời câu hỏi của alumni và các thành viên',
              'Ghi lại phản hồi và một điều cần cải thiện',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [BUILD_PASS, 'Mỗi thành viên biết bước học tiếp theo của mình'],
          },
        ],
      },
    },
    a2t: {
      t: 'Lộ trình A2',
      s: '8 giai đoạn',
      d: {
        tag: 'Lịch A2',
        sub: 'Cho nhóm A2',
        text: 'Thành viên làm việc theo đội 3–5 người. Mỗi đội giải 3–5 bài mỗi tuần và đi theo thứ tự chủ đề, từ dễ đến khó. Mỗi tuần kết thúc bằng một buổi review lời giải của đội. Chủ đề cuối, quy hoạch động, khó nhất, nên giai đoạn này chỉ học phần cơ bản. Những tuần cuối dành cho ôn tập và bài nói của đội trong demo day.',
      },
    },
    a2p1: {
      t: 'Khởi động',
      s: '~1 tuần',
      d: {
        tag: 'A2 · Giai đoạn 1 · ~1 tuần',
        text: 'Lập đội, lên kế hoạch cho học kỳ và sẵn sàng giải bài.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Lập đội 3–5 người',
              'Nắm mục tiêu A2 và điều kiện đạt',
              'Chọn một ngôn ngữ lập trình cho cả đội',
              'Tạo tài khoản trên một trang luyện tập',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Gặp đội và mentor',
              'Cả đội chọn một ngôn ngữ và dùng suốt học kỳ. Dùng một ngôn ngữ giúp review code dễ hơn.',
              'Đăng ký trên một trang luyện tập, như LeetCode hoặc HackerRank',
              'Tạo repository code chung cho các lời giải của đội',
              'Chọn giờ cho buổi review đội hằng tuần và ai dẫn đầu tiên',
              'Giải 3 bài khởi động dễ',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Mọi thành viên đã giải các bài khởi động', 'Đội đã gửi bản cập nhật tuần đầu tiên cho mentor'],
          },
        ],
      },
    },
    a2p2: {
      t: 'Cấu trúc cơ bản',
      s: '~3 tuần',
      d: {
        tag: 'A2 · Giai đoạn 2 · ~3 tuần',
        note: REC_REVIEW,
        text: 'Học các cách cơ bản để lưu dữ liệu, và ý tưởng của đệ quy. Bốn chủ đề trong khoảng 3 tuần. Mảng và chuỗi có thể chung một tuần.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Dùng mảng và chuỗi để giải các bài thường gặp',
              'Biết khi nào dùng stack hoặc queue',
              'Viết hàm đệ quy có điều kiện dừng rõ ràng (điểm mà hàm dừng lại)',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Theo thứ tự này: mảng, chuỗi, stack và queue, đệ quy',
              'Với mỗi chủ đề, đọc hoặc xem một bài học ngắn, rồi giải 3–5 bài',
              'Bắt đầu với bài dễ, rồi mỗi tuần thử một bài vừa hoặc khó',
              WEEKLY_REVIEW,
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [PASS_TOPICS, PASS_REVIEW],
          },
        ],
      },
    },
    a2p3: {
      t: 'Bảng băm',
      s: '~2 tuần',
      d: {
        tag: 'A2 · Giai đoạn 3 · ~2 tuần',
        note: REC_REVIEW,
        text: 'Học bảng băm: hash map và hash set. Chúng tìm, thêm và xóa phần tử rất nhanh, nên nhiều lời giải chậm trở nên nhanh.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Dùng hash map để đếm phần tử hoặc nối một khóa với một giá trị',
              'Dùng hash set để kiểm tra một phần tử đã xuất hiện chưa',
              'Giải thích vì sao một lần tra cứu mất khoảng O(1)',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Tìm hiểu hash map và hash set của ngôn ngữ đội dùng',
              'Giải 3–5 bài mỗi tuần, như đếm từ hoặc tìm hai số có tổng bằng một giá trị cho trước',
              'Lấy một bài về mảng bạn đã giải và làm nó nhanh hơn bằng hash map',
              WEEKLY_REVIEW,
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Bạn đã giải bài ở chủ đề này', PASS_REVIEW],
          },
        ],
      },
    },
    a2p4: {
      t: 'Sắp xếp, tìm kiếm',
      s: '~2 tuần',
      d: {
        tag: 'A2 · Giai đoạn 4 · ~2 tuần',
        note: REC_REVIEW,
        title: 'Sắp xếp và tìm kiếm',
        sub: '~2 tuần',
        text: 'Học các phương pháp sắp xếp và tìm kiếm phổ biến, và cách đánh giá code có nhanh hay không.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Giải thích cách ít nhất hai phương pháp sắp xếp hoạt động',
              'Dùng tìm kiếm nhị phân trên dữ liệu đã sắp xếp',
              'Mô tả tốc độ bằng Big-O, ví dụ O(n) hoặc O(log n). Big-O cho thấy thời gian chạy tăng thế nào khi đầu vào tăng.',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Chạy tay một phương pháp sắp xếp trên một danh sách ngắn',
              'Tự viết tìm kiếm nhị phân trước khi dùng thư viện',
              'Với mỗi bài đã giải, ghi lại Big-O của nó',
              'Trong buổi review đội, so sánh các lời giải: cách nào nhanh hơn, và vì sao?',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [PASS_TOPICS, PASS_REVIEW],
          },
        ],
      },
    },
    a2p5: {
      t: 'Cây và đồ thị',
      s: '~3 tuần',
      d: {
        tag: 'A2 · Giai đoạn 5 · ~3 tuần',
        note: REC_REVIEW,
        text: 'Các chủ đề khó hơn. Học cây trước, rồi đồ thị. Cứ từ từ và vẽ ra trước khi viết code.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Duyệt mọi nút của một cây theo các thứ tự khác nhau',
              'Dùng tìm kiếm theo chiều rộng (BFS) và theo chiều sâu (DFS) trên đồ thị',
              'Chọn cấu trúc phù hợp cho một bài toán',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Vẽ cây và đồ thị trên giấy trước khi viết code',
              'Bắt đầu với cây nhị phân, rồi chuyển sang đồ thị',
              'Giải 3–5 bài mỗi tuần. Mất nhiều thời gian hơn cũng không sao.',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [PASS_TOPICS, PASS_REVIEW],
          },
        ],
      },
    },
    a2p6: {
      t: 'QHĐ cơ bản',
      s: '~2 tuần',
      d: {
        tag: 'A2 · Giai đoạn 6 · ~2 tuần',
        note: REC_REVIEW,
        title: 'Quy hoạch động cơ bản',
        sub: '~2 tuần',
        text: 'Học kiến thức cơ bản về quy hoạch động (DP). DP lưu lại đáp án của các bài toán nhỏ hơn và dùng lại, để không làm cùng một việc hai lần. Giai đoạn này chỉ học các bài đơn giản.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Tìm các bài toán nhỏ hơn bên trong một bài toán',
              'Biến lời giải đệ quy chậm thành lời giải nhanh bằng cách lưu đáp án',
              'Giải các bài DP 1 chiều đơn giản, như leo cầu thang hoặc bài tên trộm nhà (house robber)',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Bắt đầu từ đệ quy: viết lời giải đệ quy chậm trước',
              'Rồi lưu các đáp án đã tìm được (memoization)',
              'Rồi xây các đáp án trong một bảng, từ nhỏ đến lớn',
              'Giải 3–5 bài dễ và vừa mỗi tuần',
              WEEKLY_REVIEW,
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Bạn đã giải bài ở chủ đề này', PASS_REVIEW],
          },
        ],
      },
    },
    a2p7: {
      t: 'Ôn tập và chuẩn bị',
      s: '~1 tuần',
      d: {
        tag: 'A2 · Giai đoạn 7 · ~1 tuần',
        text: 'Lấp các lỗ hổng kiến thức và chuẩn bị phần giải thích cho demo day.',
        groups: [
          {
            h: 'Mục tiêu',
            items: ['Giỏi hơn ở các chủ đề còn yếu', 'Cả đội chọn một bài khó', ARTICLES],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Liệt kê các chủ đề bạn thấy khó nhất và giải thêm bài ở đó',
              'Chọn một bài khó mà đội đã giải tốt và mọi thành viên đều hiểu',
              'Chuẩn bị ba phần: ý tưởng, code, và vì sao đủ nhanh',
              'Lên kế hoạch bài nói của đội: ai giải thích phần nào',
              'Đảm bảo mọi thành viên giải thích được cả lời giải, không chỉ phần của mình',
              'Cả đội tập bài nói đầy đủ cùng nhau',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Phần giải thích của đội đã sẵn sàng', 'Đội đã tập bài nói đầy đủ'],
          },
        ],
      },
    },
    a2p8: {
      t: 'Demo day',
      s: '~2 tuần',
      d: {
        tag: 'A2 · Giai đoạn 8 · ~2 tuần',
        text: 'Cả đội trình bày trước CLB. Đội cùng giải thích một bài khó. Alumni chấm.',
        groups: [
          {
            h: 'Mục tiêu',
            items: ['Giải thích lời giải của đội rõ ràng', 'Trả lời câu hỏi về tốc độ', 'Nhận phản hồi'],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Mô tả bài toán bằng lời đơn giản',
              'Trình bày ý tưởng trước, rồi đến code',
              'Giải thích vì sao đủ nhanh',
              'Mỗi thành viên giải thích phần của mình trong bài nói',
              'Trả lời câu hỏi của alumni và các thành viên',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: [BUILD_PASS, 'Mọi thành viên đạt điều kiện của A2'],
          },
        ],
      },
    },
    's-time': {
      t: 'Lộ trình B1',
      s: '5 giai đoạn',
      d: {
        tag: 'Lịch B1',
        sub: 'Cho nhóm B1',
        text: 'Một đội 3–5 người cùng xây một ứng dụng web. Trước hết, mỗi thành viên học kỹ năng cho vai trò của mình: backend, frontend hoặc mobile. Sau đó cả đội xây ứng dụng. Giai đoạn xây dựng dài nhất, vì frontend và backend phải chạy cùng nhau và ứng dụng phải lên mạng. Những tuần cuối dành cho hoàn thiện và demo của đội.',
      },
    },
    p1: {
      t: 'Khởi động',
      s: '~1 tuần',
      d: {
        tag: 'B1 · Giai đoạn 1 · ~1 tuần',
        text: 'Lập đội và chọn sẽ xây gì.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Lập đội 3–5 người',
              'Chọn một ý tưởng ứng dụng',
              'Giao cho mỗi thành viên một vai trò: backend, frontend hoặc mobile',
            ],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Gặp đội và mentor',
              'Chọn ý tưởng: website CLB, tìm nhóm học, ứng dụng chia chi phí, hoặc ý tưởng của riêng bạn',
              'Liệt kê chức năng đăng nhập và 2 chức năng chính',
              'Tạo repository code chung và nhóm chat của đội',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Ý tưởng, chức năng và vai trò của bạn được đăng trong nhóm chat của nhóm'],
          },
        ],
      },
    },
    p2: {
      t: 'Học kỹ năng cốt lõi',
      s: '~4 tuần',
      d: {
        tag: 'B1 · Giai đoạn 2 · ~4 tuần',
        title: 'Học các kỹ năng cốt lõi',
        sub: '~4 tuần',
        text: 'Tự học các kỹ năng cho vai trò của bạn. Mentor chia sẻ các khóa học trực tuyến miễn phí thay vì dạy mọi thứ từ đầu.',
        groups: [
          {
            h: 'Mục tiêu',
            items: [
              'Backend: xây một API đơn giản trả về dữ liệu',
              'Frontend: xây các trang và biểu mẫu dùng API. API là tập quy tắc để frontend xin dữ liệu từ backend.',
            ],
          },
          {
            h: 'Việc cần làm',
            items: ['Theo các khóa học trong danh sách tài nguyên', 'Xây một dự án thực hành nhỏ cho vai trò của bạn'],
          },
          { h: 'Hoàn thành khi', items: ['Bạn đã hoàn thành một dự án thực hành nhỏ cho vai trò của mình'] },
        ],
      },
    },
    p3: {
      t: 'Xây dự án',
      s: '~7 tuần',
      d: {
        tag: 'B1 · Giai đoạn 3 · ~7 tuần',
        text: 'Cùng xây ứng dụng. Chức năng cốt lõi trước, chức năng bổ sung sau.',
        groups: [
          {
            h: 'Mục tiêu',
            items: ['Đăng nhập chạy được', 'Từ 2 chức năng chính trở lên chạy được', 'Frontend và backend đã kết nối'],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Cùng chọn công cụ: framework, cơ sở dữ liệu và hosting',
              'Cả đội thống nhất về API: ghi ra mọi lệnh gọi API mà ứng dụng cần',
              'Xây đăng nhập trước, rồi đến các chức năng chính',
              'Chia công việc thành các task nhỏ và đặt mục tiêu tuần cho đội',
              'Review code của nhau trước khi merge',
              'Đưa ứng dụng lên mạng sớm, rồi tiếp tục cập nhật',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Các chức năng cốt lõi chạy được từ đầu đến cuối', 'Ứng dụng đã lên mạng để người khác dùng thử'],
          },
        ],
      },
    },
    p4: {
      t: 'Hoàn thiện',
      s: '~2 tuần',
      d: {
        tag: 'B1 · Giai đoạn 4 · ~2 tuần',
        text: 'Làm cho ứng dụng ổn định, gọn gàng và sẵn sàng để trình bày.',
        groups: [
          {
            h: 'Mục tiêu',
            items: ['Sửa các lỗi chính', 'Cải thiện giao diện của ứng dụng', 'Viết README'],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Nhờ bạn bè dùng thử ứng dụng và báo vấn đề',
              'Sửa lỗi, bắt đầu từ những lỗi nghiêm trọng nhất',
              'Viết README: ứng dụng làm gì, chạy thế nào, và ai làm gì',
              'Lên kế hoạch demo: ai trình bày phần nào',
            ],
          },
          {
            h: 'Hoàn thành khi',
            items: ['Ứng dụng đạt mọi điều kiện', 'Đội đã tập demo'],
          },
        ],
      },
    },
    p5: {
      t: 'Demo day',
      s: '~2 tuần',
      d: {
        tag: 'B1 · Giai đoạn 5 · ~2 tuần',
        text: 'Cả đội trình bày ứng dụng trước CLB. Các alumni chấm dự án.',
        groups: [
          {
            h: 'Mục tiêu',
            items: ['Cho thấy ứng dụng chạy được', 'Giải thích các phần kết nối với nhau thế nào', 'Thu thập phản hồi'],
          },
          {
            h: 'Việc cần làm',
            items: [
              'Trình diễn trực tiếp đăng nhập và các chức năng chính',
              'Mỗi thành viên giải thích phần của mình',
              'Trả lời câu hỏi của alumni và các thành viên',
              'Ghi lại phản hồi và ý tưởng cho phiên bản tiếp theo',
            ],
          },
          { h: 'Hoàn thành khi', items: [BUILD_PASS] },
        ],
      },
    },
    w1: {
      t: 'Thứ Hai',
      s: 'Đội đặt mục tiêu',
      d: { tag: 'Nhịp tuần', text: 'Mỗi đội tự quyết định một mục tiêu nhỏ, rõ ràng cho tuần.' },
    },
    w2: {
      t: 'Giữa tuần',
      s: 'Hỏi đáp',
      d: {
        tag: 'Nhịp tuần',
        text: 'Thành viên đặt câu hỏi trong nhóm chat của đội. Đồng đội cố gắng trả lời nhau trước. Mentor giúp khi đội bị kẹt.',
      },
    },
    w3: {
      t: 'Chủ nhật',
      s: 'Cập nhật của đội',
      d: {
        tag: 'Nhịp tuần',
        text: 'Mỗi đội gửi mentor một bản cập nhật ngắn. Các thành viên lần lượt viết thay cho đội.',
        pre: 'Xong:    Lớp Book và Member, bảng books\nTiếp:    Thao tác mượn và trả\nVướng:   Chưa biết cách lưu ngày trong SQL',
      },
    },
    w4: {
      t: 'Mentor',
      s: 'Đọc cập nhật',
      d: {
        tag: 'Nhịp tuần',
        title: 'Mentor đọc cập nhật',
        text: 'Mentor đọc bản cập nhật của từng đội và biết đội nào đang bị kẹt.',
      },
    },
  },
};
