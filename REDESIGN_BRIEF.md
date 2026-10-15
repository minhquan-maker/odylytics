# Odylytics — Redesign Brief (v4 draft)

> **Trạng thái:** DRAFT 0.1 — để thảo luận định hướng, chưa chốt.
> **Ngôn ngữ:** phần giải thích bằng tiếng Việt; copy hiển thị trên web bằng tiếng Anh (đặt trong khối `Copy`).
> **Quan hệ với tài liệu cũ:** khi brief này được duyệt, nó thay thế `CONTENT_OUTLINE.md` (what) và `DESIGN_GUIDELINES.md` (how) của v3. Đến lúc đó mới đụng vào code.
> Mục `TODO(content)` / `[TBD]` = chờ dữ liệu thật hoặc quyết định.

---

## 1. Mục tiêu & định vị

**Từ:** landing page một trang giới thiệu 6 giải pháp.
**Thành:** website của một **AI firm** — có chiều sâu về sản phẩm, nghiên cứu, con người và độ tin cậy (trust), theo tinh thần của anthropic.com và mistral.ai.

| | Hiện tại (v3) | Mới (v4) |
|---|---|---|
| Cấu trúc | 1 trang cuộn dài + vài trang phụ | Site nhiều trang, mỗi mục nav là một "cửa vào" |
| Câu chuyện | "6 solutions" | "Một AI firm: sản phẩm ↔ nghiên cứu ↔ tác động" |
| Niềm tin | Giải thưởng, partner | + Research output, Trust Center, legal đầy đủ |
| Footer | Gọn | **Chi tiết**: legal, privacy, cookies, AI, security, accessibility |

**Một câu định vị (nháp):** *Odylytics is an AI firm building research-grounded technology for climate resilience and accessibility.*

**Đối tượng đọc chính:** (1) đối tác học thuật / doanh nghiệp, (2) cơ quan, NGO, nhà tài trợ, (3) ứng viên & cộng tác viên, (4) báo chí, (5) người dùng cuối của từng sản phẩm.

**Điều rút ra từ hai site tham chiếu (quan sát chung, không sao chép):**
- Nav ngắn, 4–5 mục, mỗi mục có dropdown giải thích bằng một dòng mô tả.
- Trang chủ nói rõ *công ty là gì* trước, sản phẩm sau; nghiên cứu và tin tức nằm ngay trên trang chủ như bằng chứng.
- Giọng văn trầm, ít tính từ, nhiều số liệu và ấn phẩm thật.
- Footer lớn, nhiều cột, là nơi chứa toàn bộ chính sách và tài nguyên.
- Typography là nhân vật chính; ảnh/minh hoạ dùng tiết chế.

---

## 2. Sitemap & Information Architecture

```
Odylytics
├─ Product ▾
│  ├─ Climate-tech      /product/climate-tech
│  ├─ Accessibility     /product/accessibility
│  └─ Incoming          /product/incoming
├─ Research ▾
│  ├─ Overview          /research
│  ├─ Ongoing           /research/ongoing
│  └─ Accomplished      /research/accomplished
├─ Team ▾
│  ├─ Co-founders       /team/co-founders
│  ├─ Partners          /team/partners
│  └─ Resources         /team/resources
├─ Blog                 /blog
│
├─ [Get in touch]       /contact          (CTA, nút primary bên phải)
└─ [Login]              /login            (nút phụ bên phải; → /admin sau khi đăng nhập)

Footer-only pages: xem §5
```

### Ánh xạ từ nội dung hiện có

| Nội dung v3 | Chuyển sang v4 |
|---|---|
| AquaGuard, AirGuard (+ môi trường/thiên tai) | **Product → Climate-tech** |
| EnableCode, HearWork, Includio, Roomie (accessibility / inclusion) | **Product → Accessibility** |
| Dự án chưa ra mắt | **Product → Incoming** |
| Mission, Impact | Trang chủ + Research Overview |
| Recognition (giải thưởng) | Trang chủ (dải bằng chứng) + Research → Accomplished |
| Partners (ASU, RMIT, Sorbonne, UTS, Laval, Dow, HCMUT) | **Team → Partners** + dải logo ở trang chủ |
| Team (core) | **Team → Co-founders** (+ Advisors/Members trong cùng trang) |
| Testimonials | Trang chủ + trang sản phẩm liên quan |
| News (`#/blog`) | **Blog** |
| Privacy / Terms / Cookies | Footer → Legal hub (mở rộng, §5) |

> ⚠️ **Cần chốt phân loại 6 sản phẩm** vào Climate-tech vs Accessibility (gợi ý: AquaGuard + AirGuard → Climate-tech; EnableCode + HearWork + Includio + Roomie → Accessibility). Nếu có sản phẩm không khớp, Incoming là nơi tạm.

---

## 3. Navigation

### 3.1 Cấu trúc

```
[Wordmark]   Product ▾   Research ▾   Team ▾   Blog                [Get in touch]  [Login]
```

- Trái: wordmark Odylytics → `/`.
- Giữa: 4 mục. 3 mục đầu là dropdown (mở khi hover/focus/click; bàn phím: `Enter`/`Space` mở, `Esc` đóng, `←/→` chuyển nhóm).
- Phải: **Get in touch** (primary) và **Login** (text/outline). Settings (theme + language) giữ nguyên, gom vào icon nhỏ hoặc đặt trong footer — *câu hỏi mở #4*.
- Mobile: hamburger → drawer toàn màn hình, các nhóm là accordion; Get in touch dính đáy.
- Nav cao 52px như v3, đổi sang trong suốt → nền mờ khi cuộn.

### 3.2 Dropdown (mega-menu nhẹ, mỗi mục = tiêu đề + 1 dòng mô tả)

**Product**
| Item | Mô tả (Copy) |
|---|---|
| Climate-tech | AI for flood response, air quality and early warning. |
| Accessibility | Tools that make education and work open to everyone. |
| Incoming | What we are building next. |

**Research**
| Item | Mô tả |
|---|---|
| Overview | How we do research, and what we are asking. |
| Ongoing | Active projects and open questions. |
| Accomplished | Papers, pilots and results so far. |

**Team**
| Item | Mô tả |
|---|---|
| Co-founders | The people who started Odylytics. |
| Partners | Universities and companies we build with. |
| Resources | Press kit, brand assets, reports and data. |

Mỗi dropdown có thể có 1 "featured card" bên phải (bài blog mới nhất / ấn phẩm mới nhất) — *tuỳ chọn, bàn ở bước design*.

---

## 4. Nội dung từng trang (draft)

### 4.1 Home `/`
Thứ tự section:

1. **Hero** — headline lớn, 1 câu định vị, 2 CTA (`Explore products` · `Read our research`).
   *Copy nháp:* "Research-grounded AI for a more resilient, more inclusive world." / "Odylytics is an AI firm. We turn research into products that work when it matters most."
2. **What we do** — 3 trụ: Product · Research · Impact, mỗi trụ một câu + link.
3. **Products** — 2 nhóm (Climate-tech, Accessibility) + thẻ Incoming; mỗi nhóm hiển thị logo sản phẩm.
4. **Research highlights** — 3 thẻ (1 ongoing, 2 accomplished) có tag, ngày, đồng tác giả.
5. **Impact in numbers** — dải số liệu thật `[TBD]`; không số thì bỏ, không bịa.
6. **Recognition** — giải thưởng/chứng nhận (dải gọn).
7. **Partners** — logo loop (giữ `LogoLoop`).
8. **From the blog** — 3 bài mới nhất.
9. **Closing CTA** — "Work with us" → `/contact`.

### 4.2 Product
**Landing chung `/product`** (nếu cần): giới thiệu cách chia nhóm.
**Mỗi trang nhóm** (Climate-tech / Accessibility) theo một template:
- Intro: vấn đề → cách tiếp cận (2–3 câu).
- Lưới sản phẩm: logo, tên, 1 dòng, trạng thái (`Live` · `Pilot` · `Research`), link.
- Chi tiết từng sản phẩm (accordion hoặc trang con `/product/<slug>`): problem, how it works, evidence/pilot, partners, CTA `Request a pilot`.
- Dải research liên quan + testimonial liên quan.

**Incoming `/product/incoming`**: roadmap dạng danh sách "Exploring → Prototyping → Piloting", form `Get notified` / `Suggest a problem`. Không hứa ngày cụ thể.

### 4.3 Research
- **Overview `/research`**: triết lý nghiên cứu (3–4 nguyên tắc: reproducible, open where possible, human-centred, safety-first), lĩnh vực (AI for flood/air, assistive tech, voice & code accessibility…), cách hợp tác với đại học, link sang Ongoing/Accomplished.
- **Ongoing `/research/ongoing`**: danh sách dự án đang chạy — tiêu đề, lĩnh vực, giai đoạn, đối tác, người phụ trách, nhu cầu (tài trợ, dữ liệu, cộng tác).
- **Accomplished `/research/accomplished`**: bảng/timeline ấn phẩm, pilot, giải thưởng — năm, tiêu đề, venue/đối tác, link PDF/DOI/blog. Có lọc theo năm + lĩnh vực.
- Mẫu **trang chi tiết research** `/research/<slug>`: abstract, phương pháp, kết quả, dữ liệu/code (nếu mở), trích dẫn (BibTeX), liên hệ.

### 4.4 Team
- **Co-founders `/team/co-founders`**: ảnh, vai trò, bio ngắn, link; trang hồ sơ `/team/<slug>` (giữ `TeamProfile`). Advisors & Members có thể là tab trong cùng trang.
- **Partners `/team/partners`**: lưới partner (logo, loại: Academic / Industry / Community, mô tả hợp tác, link). CTA `Become a partner`.
- **Resources `/team/resources`**: Press kit (logo, ảnh, boilerplate), Brand guidelines, báo cáo/impact report, dataset công khai, FAQ báo chí, liên hệ báo chí.

### 4.5 Blog `/blog`
- Danh sách bài (thẻ: ảnh, tag, ngày, tác giả, thời gian đọc), lọc theo tag: `Product` · `Research` · `Company` · `Press`.
- Trang bài `/blog/<slug>`: layout đọc dài, mục lục, bài liên quan, chia sẻ, RSS (`/blog/rss.xml`).
- Nguồn dữ liệu: giữ cơ chế `posts` (Supabase + seed) hiện có.

### 4.6 Get in touch `/contact`
- Form chọn mục đích: `Partnership` · `Pilot / product enquiry` · `Research collaboration` · `Press` · `Careers` · `Other`.
- Trường: tên, email, tổ chức, nội dung, **checkbox đồng ý xử lý dữ liệu (link Privacy)**; chống spam; thông báo thành công rõ ràng.
- Cạnh form: email theo mục đích (`partners@`, `press@`, `privacy@`, `security@`) `[TBD]`, địa chỉ, giờ phản hồi dự kiến.

### 4.7 Login `/login`
- Dành cho **members** (đăng nhập Supabase; demo mode ở dev). Sau đăng nhập → `/admin` (quản lý bài blog, testimonial…).
- Có: quên mật khẩu, link Privacy & Terms, thông báo "Members only".
- *Câu hỏi mở #5:* login chỉ cho nội bộ, hay mở rộng cho đối tác (portal tài liệu/pilot)?

### 4.8 404
Giữ trang NotFound hiện có, restyle theo hệ mới.

---

## 5. Footer & Legal (ưu tiên cao)

Footer là nơi thể hiện độ tin cậy: **nhiều cột, đầy đủ, dễ tìm**, luôn nền tối. Mỗi link legal có trang riêng, có ngày hiệu lực, phiên bản và lịch sử thay đổi.

### 5.1 Bố cục footer

```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Wordmark]  One-line mission                       [Newsletter: email →]  │
│                                                                           │
│ PRODUCT        RESEARCH        TEAM          COMPANY        TRUST & LEGAL │
│ Climate-tech   Overview        Co-founders   Get in touch   Terms of Use  │
│ Accessibility  Ongoing         Partners      Careers [TBD]  Privacy      │
│ Incoming       Accomplished    Resources     Blog           Cookies       │
│                Publications*                 Press kit      …(xem 5.2)    │
│                                                                           │
│ [Social: LinkedIn · GitHub · YouTube …]        [Language ▾] [Theme ▾]     │
│                                                                           │
│ © 2026 Odylytics [legal entity TBD]. All rights reserved.                 │
│ Registered in [country/number TBD] · [address TBD]                        │
│ Privacy · Terms · Cookies · [Cookie settings]            Status · Sitemap │
└───────────────────────────────────────────────────────────────────────────┘
```
Mono-label bracket style của v3 (`[ PRODUCT ]`) có thể giữ hoặc bỏ — thuộc phần design direction.

### 5.2 Danh mục tài liệu pháp lý & tin cậy

**Nhóm A — Pháp lý cốt lõi**
| Trang | Slug | Ghi chú | Trạng thái |
|---|---|---|---|
| Terms of Use | `/legal/terms` | Điều khoản dùng website & dịch vụ | ✅ có (`legal.ts`), cần rà lại |
| Privacy Policy | `/legal/privacy` | Chính sách dữ liệu cá nhân | ✅ có, cần mở rộng theo 5.3 |
| Cookie Policy | `/legal/cookies` | Danh mục cookie/localStorage chi tiết, thời hạn, mục đích | ✅ có, cần bảng chi tiết |
| Cookie settings | modal/`/legal/cookie-settings` | Quản lý đồng ý theo nhóm, đổi ý bất cứ lúc nào | ❌ mới |
| Acceptable Use Policy | `/legal/acceptable-use` | Hành vi cấm khi dùng site & sản phẩm | ❌ mới (đang nằm trong Terms) |
| Legal notice / Imprint | `/legal/notice` | Pháp nhân, địa chỉ, đăng ký, người đại diện | ❌ mới |

**Nhóm B — Quyền dữ liệu**
| Trang | Slug | Ghi chú |
|---|---|---|
| Data Subject Requests | `/privacy/requests` | Form yêu cầu: truy cập, sửa, xoá, hạn chế, phản đối, di chuyển, rút đồng ý |
| Data Retention schedule | `/privacy/retention` | Bảng loại dữ liệu → thời gian lưu |
| Sub-processors | `/privacy/subprocessors` | Danh sách bên xử lý (hosting, Supabase, analytics, email…), vị trí, mục đích; có đăng ký nhận thông báo thay đổi |
| International transfers | `/privacy/transfers` | Cơ chế chuyển dữ liệu xuyên biên giới (SCC…) |
| Data Processing Addendum | `/legal/dpa` | Cho khách hàng/đối tác pilot xử lý dữ liệu thay mặt họ |
| Children's privacy | mục trong Privacy | Độ tuổi, cách xử lý (đã có mục "Children") |
| Privacy contact / DPO | `privacy@…` `[TBD]` | Người phụ trách + cách khiếu nại cơ quan quản lý |

**Nhóm C — AI & trách nhiệm** *(rất quan trọng với một AI firm)*
| Trang | Slug | Nội dung |
|---|---|---|
| Responsible AI | `/trust/responsible-ai` | Nguyên tắc: minh bạch, công bằng, an toàn, con người giám sát, giới hạn sử dụng |
| AI transparency | `/trust/ai-transparency` | Hệ thống nào dùng AI, dữ liệu huấn luyện/đánh giá ở mức công khai được, giới hạn đã biết, cách báo lỗi |
| Safety-critical disclaimer | trong Responsible AI + trang sản phẩm | Giải pháp cảnh báo lũ/không khí là hỗ trợ quyết định, không thay thế cơ quan chính thức |
| Research ethics | `/trust/research-ethics` | Đồng thuận người tham gia, IRB/đạo đức nghiên cứu cùng đối tác đại học |
| Open data & licensing | `/trust/open-data` | Giấy phép dataset/code công khai |

**Nhóm D — Bảo mật**
| Trang | Slug | Nội dung |
|---|---|---|
| Security overview | `/trust/security` | Biện pháp kỹ thuật & tổ chức, mã hoá, kiểm soát truy cập |
| Responsible disclosure | `/trust/disclosure` + `/.well-known/security.txt` | Cách báo lỗ hổng, phạm vi, safe harbor |
| Incident & breach notification | trong Security | Quy trình, thời hạn thông báo |
| Status | `status.…` `[TBD]` | Nếu có dịch vụ cần theo dõi uptime |

**Nhóm E — Khả năng tiếp cận & thương hiệu**
| Trang | Slug | Nội dung |
|---|---|---|
| Accessibility statement | `/legal/accessibility` | Mục tiêu WCAG 2.2 AA, giới hạn đã biết, kênh phản hồi — *công ty làm accessibility mà site không đạt thì mất uy tín* |
| Brand & trademark guidelines | `/team/resources/brand` | Cách dùng tên/logo (đã có trong Terms) |
| Copyright / takedown | mục trong Terms | Quy trình báo vi phạm |
| Sitemap | `/sitemap` | HTML sitemap + `sitemap.xml` |

> Gợi ý gom: một **Trust Center** `/trust` làm cửa vào cho Nhóm B–D (Privacy, AI, Security, Sub-processors, Disclosure), footer chỉ liệt kê các link chính. Quyết định ở §8, câu hỏi #6.

### 5.3 Mở rộng Privacy Policy cần có

Đã có trong `legal.ts` (mục 1–17). Bổ sung/kiểm tra:
- **Pháp luật áp dụng:** Việt Nam (Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân — *xác nhận hiệu lực/điều khoản cụ thể với luật sư*), GDPR/UK GDPR (đối tác ở EU/UK như Sorbonne), Québec Law 25 / PIPEDA (Laval), CCPA/CPRA (nếu có người dùng Mỹ), Úc (RMIT/UTS).
- Bảng **dữ liệu → mục đích → cơ sở pháp lý → thời gian lưu → bên nhận**.
- Quyền theo vùng (EU, California, Việt Nam…) và cách thực hiện.
- Dữ liệu của sản phẩm (pilot AquaGuard/AirGuard, người dùng EnableCode…) có thể cần **privacy notice riêng theo sản phẩm**.
- Quyết định tự động & AI profiling (đã có, rà lại).
- Dữ liệu nhạy cảm (giọng nói trong HearWork, dữ liệu người khuyết tật: cần đồng thuận rõ ràng).
- Đăng ký nhận tin: double opt-in, huỷ đăng ký một chạm.

### 5.4 Cookie & consent

- **Banner đồng ý** (lần đầu, chỉ khi có cookie không thiết yếu): `Accept all` · `Reject non-essential` · `Customise` — ba nút ngang hàng, không dark pattern.
- **Nhóm:** Strictly necessary · Preferences (theme, language) · Analytics · Marketing (hiện chưa dùng → để trống, nói rõ).
- **Cookie settings** luôn truy cập được từ footer; lưu bằng chứng đồng ý (thời điểm, phiên bản chính sách).
- **Bảng cookie** trong Cookie Policy: tên, nhà cung cấp, mục đích, thời hạn, loại (first/third-party).
- Hỗ trợ tín hiệu Global Privacy Control / Do Not Track nếu khả thi.

### 5.5 Quy ước cho mọi trang legal
- Mẫu chung: tiêu đề, **Effective date / Last updated / Version**, mục lục sticky, "Short version" tóm tắt, anchor từng mục, nút In / Tải PDF, link "Previous versions".
- Ngôn ngữ: bản gốc tiếng Anh có giá trị pháp lý; bản tiếng Việt `[TBD — quyết định có dịch hay không]`.
- Mọi thay đổi trọng yếu: thông báo trên site + email cho members.
- **Disclaimer:** văn bản mẫu trong repo là nháp kỹ thuật, **cần luật sư rà soát** trước khi công bố.

---

## 6. Hệ thống nội dung & template (tóm tắt)

| Template | Dùng cho | Thành phần chính |
|---|---|---|
| Landing | Home | Hero, section band, stats, logo loop |
| Hub | Product / Research / Team overview | Intro + lưới thẻ + CTA |
| Entity | Sản phẩm, research, người | Header, meta, nội dung dài, liên quan |
| Index | Blog, Publications | Lọc + lưới/list + phân trang |
| Article | Bài blog, research chi tiết | Cột đọc ~680px, mục lục, bài liên quan |
| Legal | Mọi trang pháp lý | Xem §5.5 |
| Form | Contact, DSAR, Newsletter | Validation, trạng thái, consent |

Cần model dữ liệu: `Product`, `ResearchProject`, `Publication`, `Person`, `Partner`, `Post`, `Resource`, `LegalDoc` (version, effectiveDate). Dùng chung cơ chế content store hiện có (seed + Supabase).

---

## 7. Yêu cầu phi chức năng

- **Accessibility:** WCAG 2.2 AA, điều hướng bàn phím đầy đủ (đặc biệt dropdown), `prefers-reduced-motion`, tương phản cả hai theme.
- **Hiệu năng:** LCP < 2.5s, WebGL (nếu giữ) lazy + fallback; ảnh responsive.
- **SEO/Chia sẻ:** metadata & OG riêng từng trang, `sitemap.xml`, `robots.txt`, JSON-LD (`Organization`, `Article`, `ScholarlyArticle`).
- **Routing:** hiện là hash router (`#/...`). Với site nhiều trang nên chuyển sang **path-based routing** (cần SPA fallback hoặc prerender/SSG để SEO và 404 thật). *Câu hỏi #7.*
- **i18n:** giữ EN + VI; trang legal giữ EN (hoặc dịch, câu hỏi #8).
- **Analytics:** chỉ khi có consent; ưu tiên công cụ thân thiện riêng tư.
- **Bảo mật:** headers (CSP, HSTS…), `security.txt`.

---

## 8. Câu hỏi mở (cần bạn quyết)

1. **Phân loại sản phẩm:** mapping 6 sản phẩm → Climate-tech / Accessibility / Incoming có đúng như §2 không? Incoming gồm những gì?
2. **Research:** hiện có những dự án/ấn phẩm thật nào để điền Ongoing/Accomplished? Nếu ít, Overview nên nhẹ và tránh trang trống.
3. **Team → Partners vs Co-founders:** Advisors/Members để chung trang Co-founders hay thêm mục?
4. **Settings (theme, ngôn ngữ):** để trong nav hay chuyển xuống footer?
5. **Login:** chỉ nội bộ hay có portal cho đối tác?
6. **Trust Center:** gom Nhóm B–D thành `/trust` hay liệt kê phẳng trong footer?
7. **Routing:** chuyển sang path-based + prerender (đề xuất) hay giữ hash?
8. **Legal đa ngôn ngữ:** bản VI có cần không? Pháp nhân và khu vực pháp lý chính là gì (ảnh hưởng Terms/Privacy)?
9. **Careers:** có tuyển dụng không? (quyết định có mục Careers trong footer/Company.)
10. **Số liệu Impact:** có số thật nào để hiển thị không?

---

## 9. Bước tiếp theo

1. Bạn review brief này, trả lời §8 (có thể từng phần).
2. **Thảo luận định hướng design** (bước tiếp theo bạn đã nói): tone, typography, màu, ảnh/minh hoạ, motion, dark/light; so sánh 2–3 moodboard hướng (ví dụ: "editorial/sách" như Anthropic vs "kỹ thuật/sắc nét" như Mistral vs giữ DNA hiện tại Geist + tím/cam).
3. Viết `DESIGN_GUIDELINES.md` v4 + `CONTENT_OUTLINE.md` v4 từ brief đã duyệt.
4. Dựng wireframe (Figma/Canva nếu muốn) cho Home, Hub, Entity, Legal.
5. Triển khai theo thứ tự: nav + footer + legal shell → Home → Product → Research → Team → Blog → Contact/Login.
