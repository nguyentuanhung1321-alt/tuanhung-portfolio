export const profile = {
  name: 'Nguyễn Tuấn Hưng',
  role: 'Cyber Security Fresher',
  email: 'nguyentuan.hung1321@gmail.com',
  phone: '0914956307',
  phoneDisplay: '0914 956 307',
  location: 'TP. Hồ Chí Minh',
  cvUrl: '/Nguyen-Tuan-Hung-CV.pdf',
  summary:
    'Cử nhân An ninh mạng với nền tảng vững về mạng máy tính, phân tích log hệ thống và kiểm thử phần mềm. Có kinh nghiệm phát hiện bất thường bằng Machine Learning và tìm lỗi hệ thống qua kỳ thực tập QA. Đang tìm kiếm vị trí Cyber Security Fresher hoặc SOC Analyst để học hỏi và đóng góp vào bảo mật hệ thống.',
}

export const stats = [
  { value: '97.21%', label: 'Độ chính xác mô hình phát hiện URL độc hại' },
  { value: '700K+', label: 'Mẫu URL được dùng để huấn luyện' },
  { value: 'A', label: 'Xếp loại thực tập QA / Tester' },
]

export const experience = [
  {
    period: 'Tháng 2/2026 — Tháng 5/2026',
    role: 'QA / Tester Intern',
    company: 'Công ty TNHH Công nghệ Hoa Sáng',
    points: [
      'Phân tích yêu cầu dự án và đặc tả chức năng để thiết kế test case, test scenario chi tiết cho các tính năng web/phần mềm.',
      'Thực hiện kiểm thử thủ công chức năng, UI/UX và boundary/edge-case nhằm phát hiện lỗ hổng, lỗi logic và hành vi bất thường.',
      'Ghi nhận, theo dõi lỗi bằng công cụ bug-tracking; phối hợp với developer xác minh bản vá và thực hiện regression testing.',
      'Đạt đánh giá thực tập xuất sắc (Loại A) từ người hướng dẫn tại công ty và giảng viên nhờ độ chính xác cao trong phát hiện lỗi.',
    ],
    tags: ['Manual Testing', 'Test Case Design', 'Regression', 'Bug Tracking'],
  },
]

export type Project = {
  slug: string
  title: string
  context: string
  period: string
  image?: string
  imageAlt?: string
  problem: string
  scope: string
  keyFinding: string
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'log-anomaly',
    title: 'System Log Anomaly Detection',
    context: 'Khoá luận tốt nghiệp',
    period: '03/2026 — 06/2026',
    image: '/images/case1.jpg',
    imageAlt: 'Minh họa giải pháp phát hiện hành vi bất thường trong Log hệ thống bằng Isolation Forest và Autoencoder',
    problem:
      'Log hệ thống phát sinh với khối lượng lớn, việc rà soát thủ công chậm và dễ bỏ sót các hành vi bất thường có thể là dấu hiệu của mối đe dọa bảo mật.',
    scope:
      'Tiền xử lý và phân tích dữ liệu log thô; xây dựng giải pháp phát hiện bất thường dựa trên Isolation Forest và kiến trúc Autoencoder.',
    keyFinding:
      'Kết hợp Isolation Forest và Autoencoder giúp nhận diện hành vi bất thường trong log mà không cần gán nhãn trước — phù hợp với bối cảnh SOC nơi dữ liệu tấn công hiếm.',
    tags: ['Python', 'Isolation Forest', 'Autoencoder', 'Log Analysis'],
  },
  {
    slug: 'url-scanner',
    title: 'Evaluate the Danger Level of URL',
    context: 'Information Security for Web Applications · Nhóm 4',
    period: '01/2026',
    image: '/projects/url-scanner-real.png',
    imageAlt: 'Ảnh chụp màn hình Hệ thống phát hiện URL độc hại chạy trên CUDA, hiển thị kết quả quét URL trong console',
    problem:
      'URL là vector đầu vào chính cho tấn công web. Kiểm thử thủ công chi tiết nhưng tốn thời gian, khó mở rộng trước các mối đe dọa ngày càng nhanh.',
    scope:
      'Khai thác thủ công 4 lỗ hổng trên PortSwigger bằng Burp Suite (OS Command Injection, Reflected XSS, Blind SSRF, Open Redirect); xây dựng "AI Cyber Security Scanner" kết hợp rule-based engine và Transformer cấp ký tự với GUI, huấn luyện trên ~700.000 URL.',
    keyFinding:
      'Mô hình Transformer tối ưu GPU (CUDA) đạt độ chính xác validation 97.21%, phát hiện và chặn được payload "|whoami" cùng các vector XSS, đồng thời hạn chế false positive với URL hợp lệ.',
    tags: ['Burp Suite', 'PyTorch', 'Transformer', 'OWASP Top 10'],
  },
  {
    slug: 'site-to-site-vpn',
    title: 'Site-to-Site VPN với PKI & High Availability',
    context: 'Computer Network Security · Nhóm 4',
    period: '01/2026',
    image: '/projects/vpn-topology-real.png',
    imageAlt: 'Sơ đồ topology mạng trong báo cáo: router HANOI và SAIGON kết nối qua ISP bằng hai đường hầm IPSec, chạy OSPF',
    problem:
      'Mô hình VPN dùng Pre-shared Key khó mở rộng và quản lý khoá; phụ thuộc một đường truyền tạo ra single point of failure khiến dịch vụ dễ gián đoạn.',
    scope:
      'Triển khai IPSec VPN dùng VTI trên Cisco IOS (EVE-NG); dựng IOS-Based Certificate Authority thay thế PSK; cấu hình OSPF qua 2 tunnel song song, đồng bộ NTP và NAT Exemption (ACL 113).',
    keyFinding:
      'Wireshark xác nhận toàn bộ lưu lượng WAN được đóng gói ESP mã hoá. Khi ngắt link chính, OSPF tự động chuyển sang Tunnel 1 và quay về Tunnel 0 ngay khi khôi phục.',
    tags: ['Cisco IOS', 'IPSec', 'PKI', 'OSPF', 'Wireshark'],
  },
  {
    slug: 'fraud-detection',
    title: 'Credit Card Fraud Detection System',
    context: 'Dự án học thuật',
    period: '08/2025 — 12/2025',
    image: '/images/case4.jpg',
    imageAlt: 'Minh họa hệ thống phát hiện gian lận thẻ tín dụng và trực quan hóa dữ liệu',
    problem:
      'Giao dịch gian lận chiếm tỷ lệ rất nhỏ khiến dữ liệu mất cân bằng nghiêm trọng; mô hình dễ báo động giả, gây ảnh hưởng tới trải nghiệm khách hàng.',
    scope:
      'Phân tích rủi ro tài chính, xử lý tập dữ liệu giao dịch mất cân bằng và tối ưu các thuật toán Machine Learning phân loại giao dịch.',
    keyFinding:
      'Tối ưu thuật toán giúp giảm tỷ lệ false positive, đồng thời trực quan hoá kết quả thành các đề xuất kinh doanh có tính ứng dụng.',
    tags: ['Python', 'Machine Learning', 'Imbalanced Data', 'Visualization'],
  },
]

export const skillGroups = [
  {
    title: 'Security & Networking',
    items: ['TCP/IP', 'HTTP', 'Log Analysis', 'Vulnerability Assessment', 'IPSec / VPN', 'PKI'],
  },
  {
    title: 'Tools',
    items: ['Wireshark', 'Nmap', 'Burp Suite', 'Linux', 'Git'],
  },
  {
    title: 'Programming & Data',
    items: ['Python', 'SQL', 'Machine Learning', 'Anomaly Detection'],
  },
  {
    title: 'Testing & QA',
    items: ['Manual Testing', 'Test Case Design', 'Bug Reporting'],
  },
]

export const education = {
  degree: 'Cử nhân Công nghệ Thông tin',
  major: 'Chuyên ngành An ninh mạng',
  school: 'Trường Đại học Kinh tế – Tài chính TP.HCM (UEF)',
  period: '2022 — 2026',
}

export const certifications = [
  { name: 'English Communication Certificate', issuer: 'Chứng chỉ giao tiếp tiếng Anh' },
  { name: 'Office Informatics Certificate', issuer: 'MOS / IC3' },
]
