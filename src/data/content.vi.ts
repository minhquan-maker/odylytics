import type { Content, DeepPartial } from '../hooks/useContent'

/** Vietnamese copy. Keys mirror content.ts; arrays are matched by position. Anything missing stays English. */
export const VI: DeepPartial<Content> = {
  NAV: [
    { label: 'Giải pháp', items: [{ label: 'Tất cả giải pháp', description: 'Sáu giải pháp số ứng dụng AI' }, { description: 'Điều phối cứu hộ lũ lụt' }, { description: 'Dạy lập trình rảnh tay' }] },
    {
      label: 'Công ty',
      items: [
        { label: 'Sứ mệnh', description: 'Vì sao chúng tôi tồn tại và hướng đi' },
        { label: 'Đối tác', description: 'Trường đại học và doanh nghiệp đồng hành' },
        { label: 'Đánh giá', description: 'Đối tác và người dùng nói gì' },
        { label: 'Liên hệ', description: 'Hợp tác, thí điểm và báo chí' },
      ],
    },
    { label: 'Giải thưởng' },
    { label: 'Tin tức' },
    { label: 'Đội ngũ' },
  ],

  HERO: {
    eyebrow: 'Công ty AI · giải pháp số',
    headlineTop: 'Giải pháp AI',
    headlineBottom: 'kiến tạo',
    rotatingWords: ['đổi mới', 'tác động', 'tiến bộ', 'tăng trưởng'],
    srHeadline: 'Giải pháp AI kiến tạo đổi mới, tác động, tiến bộ và tăng trưởng.',
    note: 'Một công ty AI. Sáu giải pháp.',
    subheadline:
      'Odylytics là công ty AI. Chúng tôi kiến tạo đổi mới bằng các giải pháp số, giúp tổ chức và cộng đồng chuyển đổi số cách vận hành, từ cứu hộ lũ lụt đến giáo dục bao trùm.',
    scrollCue: 'Cuộn để khám phá',
    marquee: ['Phân tích AI', 'Giám sát IoT', 'Cảnh báo sớm', 'Nền tảng dữ liệu', 'Hỗ trợ quyết định', 'Thiết kế bao trùm'],
  },

  MISSION: {
    eyebrow: 'Sứ mệnh',
    lead: 'Một công ty AI.',
    main: 'Nhiều giải pháp.',
    mission:
      'Odylytics là công ty AI thiết kế, xây dựng và đưa ra thị trường các giải pháp số. Chúng tôi kiến tạo đổi mới và thúc đẩy chuyển đổi số để cộng đồng và tổ chức làm việc thông minh, an toàn hơn.',
    vision:
      'Một thế giới nơi công nghệ được thiết kế vì con người, và mọi cộng đồng đều hưởng lợi từ đổi mới số.',
    pillarsHeading: 'Định hướng của chúng tôi',
    pillars: [
      { title: 'Giải quyết vấn đề thật', text: 'Chọn những vấn đề quan trọng, từ lũ lụt đến khả năng tiếp cận, và biến mỗi vấn đề thành giải pháp người ta dùng hằng ngày.' },
      { title: 'Thúc đẩy chuyển đổi số', text: 'Xây giải pháp số hóa cách công việc được thực hiện, từ điều phối đội cứu hộ đến dạy lập trình, để con người tập trung vào phán đoán và sự quan tâm.' },
      { title: 'Xây một nền tảng dùng chung', text: 'Giữ một nền tảng kỹ thuật duy nhất đằng sau mọi sản phẩm, để mỗi giải pháp mới ra mắt nhanh hơn và học được từ các giải pháp khác.' },
      { title: 'Lớn lên cùng đối tác', text: 'Hợp tác với trường đại học, cơ quan nhà nước và doanh nghiệp trong nước lẫn quốc tế để thử nghiệm, tài trợ và phân phối sản phẩm.' },
    ],
  },

  SOLUTIONS_HEADING: { eyebrow: 'Giải pháp', lead: 'Sáu giải pháp.', main: 'Một lõi AI.', intro: 'Từ cứu hộ lũ lụt đến giáo dục bao trùm, mỗi giải pháp đều xây trên cùng một nền tảng AI và được định hình từ vấn đề có thật.' },
  SOLUTIONS: [
    { oneLiner: 'Điều phối cứu hộ lũ lụt theo thời gian thực cho người dân, đội cứu hộ và điều phối viên.', description: 'Người dân gửi yêu cầu SOS, đội cứu hộ thấy ngay trên bản đồ ngập lụt trực tiếp, và điều phối viên cử lực lượng từ một màn hình chung. Có cả web và di động, đã thử nghiệm trong mùa lũ ở Việt Nam.', category: 'Ứng phó thiên tai' },
    {},
    { oneLiner: 'Lập trình kéo thả, rảnh tay cho người khuyết tật chi trên.', description: 'Webcam theo dõi đầu người học, cử chỉ đầu di chuyển và nhấp chuột. Chương trình được ghép từ các khối kéo thả, nên có thể lập trình mà không cần bàn phím hay chuột.', category: 'Giáo dục bao trùm' },
    {},
    { oneLiner: 'Luyện phỏng vấn bằng AI cho ứng viên tự kỷ.', description: 'Includio mô phỏng buổi phỏng vấn xin việc bằng AI. Hệ thống viết câu hỏi từ mô tả công việc và hồ sơ ứng viên, để ứng viên luyện tập bao nhiêu lần tùy ý mà không cần người phỏng vấn thật.', category: 'Tuyển dụng bao trùm' },
    {},
  ],

  RECOGNITION_HEADING: {
    eyebrow: 'Giải thưởng',
    lead: 'Được công nhận độc lập.',
    main: 'Ghi nhận vì tác động.',
    intro: 'Bốn giải thưởng từ các cuộc thi tại Việt Nam, đều của cùng một đội.',
  },
  RECOGNITION: [
    { items: [{ title: 'Giải Nhất' }, { title: 'Giải Nhất' }, { title: 'Giải Nhì' }] },
    { items: [{ title: 'Giải Nhất' }] },
  ],

  PARTNERS_HEADING: {
    eyebrow: 'Đối tác',
    lead: 'Được các tổ chức tin tưởng.',
    main: 'Xây cùng các trường đại học.',
    intro: 'Chúng tôi xây dựng cùng các trường đại học và doanh nghiệp ủng hộ đổi mới sáng tạo của sinh viên.',
  },
  PARTNERS: [
    { type: 'Học thuật' },
    { type: 'Học thuật' },
    { type: 'Học thuật' },
    { type: 'Học thuật' },
    { type: 'Học thuật' },
    { type: 'Học thuật' },
    { type: 'Doanh nghiệp' },
    { type: 'Doanh nghiệp' },
    { type: 'Vườn ươm' },
  ],
  IMPACT_HEADING: { eyebrow: 'Tác động đến nay' },
  IMPACT: [{ label: 'Lượt tiếp cận trên mạng xã hội' }, { label: 'Người dùng hoạt động trên các nền tảng' }, { label: 'Tổ chức ủng hộ' }],
  IMPACT_NOTE: 'Kết quả từ AquaGuard, nền tảng điều phối cứu hộ lũ lụt của chúng tôi.',

  TESTIMONIALS_HEADING: { eyebrow: 'Đánh giá', lead: 'Những người ngoài thực địa', main: 'đã tin vào AquaGuard.' },

  TEAM_HEADING: {
    eyebrow: 'Đội ngũ cốt lõi',
    lead: 'Năm nhà đồng sáng lập.',
    main: 'Những người đứng sau Odylytics.',
    intro: 'Năm sinh viên cùng xây dựng sản phẩm, kỹ thuật, thiết kế và marketing.',
  },
  TEAM: [
    { role: 'Giám đốc điều hành (CEO)', shortRole: 'CEO', bio: 'Dẫn dắt tầm nhìn và chiến lược của Odylytics, xây dựng quan hệ đối tác để đưa giải pháp đến những cộng đồng cần nhất.', responsibilities: ['Đặt tầm nhìn, chiến lược và lộ trình công ty', 'Dẫn dắt hợp tác với trường đại học, chính quyền và nhà tài trợ', 'Đại diện Odylytics tại các cuộc thi, sự kiện và trên báo chí'] },
    { role: 'Giám đốc công nghệ (CTO)', shortRole: 'CTO', bio: 'Dẫn dắt công nghệ và lõi AI dùng chung, thiết kế các mô hình biến dữ liệu cảm biến và cộng đồng thành dự báo kịp thời.', responsibilities: ['Phụ trách lõi AI dùng chung và kiến trúc hệ thống', 'Huấn luyện và đánh giá mô hình cho lũ lụt, không khí và khả năng tiếp cận', 'Rà soát code, bảo mật và tuyển dụng kỹ thuật'] },
    { role: 'Giám đốc sản phẩm (CPO)', shortRole: 'CPO', bio: 'Thiết kế trải nghiệm dễ tiếp cận, lấy con người làm trung tâm để mọi giải pháp vẫn đơn giản dù trong khủng hoảng.', responsibilities: ['Phụ trách lộ trình sản phẩm của mọi giải pháp Odylytics', 'Nghiên cứu người dùng với đội cứu hộ và người khuyết tật', 'Dẫn dắt thiết kế giao diện và hệ thống thiết kế của Odylytics'] },
    { role: 'Trưởng nhóm Marketing', shortRole: 'Marketing', bio: 'Định hình cách Odylytics tiếp cận chính quyền, đối tác và cộng đồng, và kể câu chuyện đằng sau tác động của chúng tôi.', responsibilities: ['Phụ trách thương hiệu, website và mạng xã hội', 'Đưa câu chuyện đến báo chí và quản lý trang tin tức', 'Chuẩn bị hồ sơ dự thi và tài liệu cho đối tác'] },
    { role: 'Kỹ sư phần mềm', shortRole: 'Kỹ sư', bio: 'Xây dựng các nền tảng đằng sau giải pháp, từ luồng dữ liệu thời gian thực đến bảng điều khiển cho đội cứu hộ.', responsibilities: ['Xây ứng dụng web và di động cho AquaGuard và EnableCode', 'Duy trì luồng dữ liệu và bản đồ trực tiếp', 'Phát hành phiên bản và theo dõi hệ thống'] },
  ],
  ADVISORS: [
    { role: 'Cố vấn chiến lược', affiliation: 'Giảng viên, Khoa Khoa học Máy tính, UTS' },
    { role: 'Cố vấn cộng đồng', affiliation: 'Giám đốc, Đất Lành Quebec Canada, Đại học Laval' },
    { role: 'Cố vấn nghiên cứu', affiliation: 'Giám đốc, Phòng thí nghiệm Drone Trí tuệ nhân tạo, UTS' },
    { role: 'Cố vấn sản phẩm', affiliation: 'Khoa Môi trường và Tài nguyên, ĐH Bách khoa TP.HCM' },
    { role: 'Cố vấn hệ thống', affiliation: 'Khoa Khoa học và Kỹ thuật Máy tính, ĐH Bách khoa TP.HCM' },
  ],
  TEAM_GROUPS: { cofounders: { heading: 'Đồng sáng lập', intro: 'Năm sinh viên đã sáng lập Odylytics.' }, advisors: { heading: 'Cố vấn', intro: 'Những người hướng dẫn và chuyên gia đồng hành cùng chúng tôi.' }, members: { heading: 'Thành viên', intro: 'Sinh viên và cộng sự cùng xây dựng với chúng tôi.' } },
  TEAM_TEASER: { eyebrow: 'Đội ngũ cốt lõi', lead: 'Năm nhà đồng sáng lập.', main: 'Một sứ mệnh.', intro: 'Gặp những người đứng sau Odylytics, vai trò của từng người và cách họ làm việc cùng nhau.' },

  NEWS_HEADING: { eyebrow: 'Tin tức', lead: 'Mới nhất từ Odylytics.', main: 'Giải thưởng, báo chí và cột mốc.', intro: 'Kết quả cuộc thi, tin báo chí và cập nhật từ đội ngũ.' },
  POSTS: [
    { title: 'Nhà sáng lập của chúng tôi nhận học bổng Quantum', excerpt: 'Học bổng hỗ trợ giai đoạn tiếp theo của Odylytics, từ nghiên cứu sản phẩm đến đưa giải pháp đến nhiều cộng đồng hơn.', category: 'Milestones' },
    { title: 'Odylytics lên báo Thanh Niên', excerpt: 'Nhật báo quốc gia kể câu chuyện về một nhóm sinh viên xây dựng AI cho lũ lụt và khả năng tiếp cận.', category: 'Press' },
    { title: 'AquaGuard đoạt giải Nhất cuộc thi thuyết trình OISP', excerpt: 'Nền tảng điều phối cứu hộ lũ lụt của chúng tôi giành giải nhất vòng thuyết trình năm 2025.', category: 'Awards' },
    { title: 'Từ vấn đề đến MVP: Includio tại RMIT ADC Hackathon', excerpt: 'Đội ngũ xây dựng Includio, nền tảng AI luyện phỏng vấn cho ứng viên tự kỷ, thành bản MVP hoạt động tại RMIT ADC Hackathon 2026.', category: 'Product' },
    { title: 'AquaGuard trên sân khấu TECH PLANTER Vietnam 2026 Demo Day', excerpt: 'Đội ngũ trình bày Lightning Talk về AquaGuard tại Demo Day do Leave a Nest Group tổ chức, đồng thời gặp gỡ các startup deep-tech, nhà nghiên cứu và chuyên gia trong ngành.', category: 'Milestones' },
    { title: 'AquaGuard đoạt giải Nhất cuộc thi EPICS lần thứ 8', excerpt: 'Ban giám khảo ghi nhận cách hệ thống kết nối nạn nhân, đội cứu hộ và điều phối viên theo thời gian thực.', category: 'Awards' },
    { title: 'AquaGuard giành giải Nhì Bách Khoa Innovation', excerpt: 'Về nhì trong các dự án đổi mới sáng tạo tại Trường Đại học Bách Khoa TP.HCM.', category: 'Awards' },
    { title: 'EnableCode vô địch Fessior DevCamp 2026 Prometheus', excerpt: 'Nền tảng lập trình rảnh tay cho người khuyết tật chi trên của chúng tôi giành giải nhất.', category: 'Awards' },
    { title: 'Đội ngũ mang về bốn giải thưởng trong một năm', excerpt: 'Nhìn lại các cuộc thi, những đêm thức khuya và người cố vấn đứng sau kết quả năm nay.', category: 'Milestones' },
  ],

  FAQ_HEADING: { eyebrow: 'Hỏi đáp', lead: 'Câu hỏi', main: 'thường gặp.' },
  FAQ: [
    { q: 'Odylytics là gì?', a: 'Odylytics là công ty AI thiết kế, xây dựng và đưa ra thị trường các giải pháp số. Chúng tôi kiến tạo đổi mới và thúc đẩy chuyển đổi số, từ cứu hộ lũ lụt đến giáo dục bao trùm.' },
    { q: 'Các bạn xây dựng những giải pháp nào?', a: 'Hiện có sáu: AquaGuard điều phối cứu hộ lũ lụt, EnableCode dạy lập trình rảnh tay, Includio luyện phỏng vấn bằng AI, cùng AirGuard, RooMie và HearWork sắp ra mắt.' },
    { q: 'AquaGuard là gì?', a: 'AquaGuard là nền tảng điều phối cứu hộ lũ lụt của chúng tôi. Người dân gửi yêu cầu SOS, đội cứu hộ thấy ngay trên bản đồ ngập lụt trực tiếp, và điều phối viên cử lực lượng từ một màn hình chung. AquaGuard đã giành giải Nhất cuộc thi thuyết trình OISP và cuộc thi EPICS lần thứ 8, giải Nhì Bách Khoa Innovation.' },
    { q: 'Ai đứng sau Odylytics?', a: 'Năm sinh viên đồng sáng lập, cùng các cố vấn và trường đại học đối tác. Bạn có thể gặp mọi người ở trang Đội ngũ.' },
    { q: 'Các bạn hợp tác với ai?', a: 'Các trường đại học và doanh nghiệp ủng hộ đổi mới sáng tạo, gồm UTS, HCMUT, ASU, RMIT, Sorbonne Université, Université Laval, Dow, Leave a Nest và TechPlanter.' },
    { q: 'Làm sao để hợp tác với các bạn?', a: 'Chúng tôi luôn chào đón hợp tác, thí điểm và liên hệ báo chí. Hãy gửi lời nhắn qua biểu mẫu liên hệ hoặc email odylytics@gmail.com.' },
  ],

  CONTACT: {
    eyebrow: 'Liên hệ',
    lead: 'Cùng xây điều có ý nghĩa.',
    main: 'Cùng nhau.',
    subcopy: 'Hợp tác, thí điểm hay báo chí, chúng tôi luôn muốn lắng nghe bạn.',
  },

  FOOTER_NOTE:
    'AquaGuard, EnableCode, AirGuard, Includio, RooMie và HearWork là sản phẩm của Odylytics. Giải thưởng và tin báo chí thuộc về đơn vị tổ chức và tòa soạn tương ứng. Một số sản phẩm đang trong giai đoạn thí điểm hoặc nguyên mẫu và tính năng có thể thay đổi.',
  FOOTER_GROUPS: [
    { heading: 'Giải pháp' },
    { heading: 'Công ty', links: [{ label: 'Sứ mệnh' }, { label: 'Đội ngũ cốt lõi' }, { label: 'Giải thưởng' }, { label: 'Đối tác' }] },
    { heading: 'Tin tức', links: [{ label: 'Tất cả tin tức' }, { label: 'Giải thưởng' }, { label: 'Báo chí' }, { label: 'Cột mốc' }] },
    { heading: 'Liên hệ', links: [{ label: 'Hợp tác' }, { label: 'Thí điểm' }, { label: 'Báo chí' }] },
  ],
  LEGAL_LINKS: [{ label: 'Chính sách bảo mật' }, { label: 'Điều khoản sử dụng' }, { label: 'Chính sách cookie' }, { label: 'Đăng nhập thành viên' }],
}
