export interface CaseStudyMetric {
  value: string;
  label: string;
  countTo: string;
  format?: 'vi-dot' | 'decimal' | 'decimal-comma';
  decimals?: string;
  prefix?: string;
  suffix?: string;
}

export interface CaseStudyShowcaseItem {
  seq: string;
  title: string;
  badge: string;
  logoSrc: string;
  logoAlt: string;
  watermarkSrc: string;
  watermarkModifierClass?: string;
  monogram: string;
  status: 'available' | 'coming-soon';
  href: string;
  compactRole: string;
  headline?: string;
  summary: string;
  migration?: {
    from: string;
    to: string;
  };
  highlightsLabel?: string;
  challenge: string[];
  role: string[];
  actions: string[];
  ctaText?: string;
  metrics: CaseStudyMetric[];
  cardModifierClass?: string;
}

export const caseStudies: CaseStudyShowcaseItem[] = [
  {
    seq: '01',
    title: 'Hoàng Long Computer',
    badge: 'SEO E-commerce · GEO/AIO',
    logoSrc: '/images/logos/hoang-long-logo.png',
    logoAlt: 'Hoàng Long Computer logo',
    watermarkSrc: '/images/logos/hoang-long-logo.png',
    monogram: 'HLC',
    status: 'available',
    href: '/case-studies/hoang-long-computer-seo',
    compactRole: 'SEO Project Owner · Senior SEO Specialist',
    summary: 'Xây dựng chiến lược SEO và GEO Operating System cho website thương mại điện tử ngành máy tính, tập trung vào ranking, mở rộng Organic Visibility và đo lường AI Referral.',
    highlightsLabel: 'ĐIỂM NỔI BẬT',
    challenge: [
      'Ranking & Organic Visibility',
      'GEO Operating System V2',
      'Đo lường AI Referral'
    ],
    role: [],
    actions: [],
    ctaText: 'Xem case study',
    metrics: [
      { value: '70%', label: 'Top 3 Ranking', countTo: '70', suffix: '%' },
      { value: '+8.8%', label: 'Organic Traffic', countTo: '8.8', format: 'decimal', decimals: '1', prefix: '+', suffix: '%' },
      { value: '307 / tuần', label: 'AI Referral', countTo: '307', suffix: ' / tuần' }
    ],
    cardModifierClass: 'case-story-card--hoang-long'
  },
  {
    seq: '02',
    title: 'Suối Tiên',
    badge: 'Domain Migration · Technical SEO',
    logoSrc: '/images/logos/suoi-tien-logo.png',
    logoAlt: 'Suối Tiên logo',
    watermarkSrc: '/images/logos/suoi-tien-logo.png',
    monogram: 'ST',
    status: 'available',
    href: '/case-studies/suoi-tien-seo/',
    compactRole: 'SEO Project Lead · Technical SEO',
    headline: 'Chuyển đổi domain, bảo toàn hiệu suất SEO',
    summary: 'Lập kế hoạch và kiểm soát quá trình chuyển đổi từ suoitien.com sang suoitien.vn, tập trung bảo toàn tín hiệu SEO, quản trị redirect và indexation, đồng thời duy trì tăng trưởng Organic Search sau migration.',
    highlightsLabel: 'ĐIỂM NỔI BẬT',
    migration: {
      from: 'suoitien.com',
      to: 'suoitien.vn'
    },
    challenge: [
      'Domain Migration & Redirect Control',
      'Indexation & Technical Validation',
      'Organic Search Growth'
    ],
    role: [
      'Project Lead & Hands-on SEO Executive',
      'Technical Audit',
      'Migration Roadmap',
      'On-page Structure',
      'Measurement Setup'
    ],
    actions: [
      'Xây dựng bản đồ redirect 1:1 chi tiết',
      'Cấu hình tín hiệu thực thể và kỹ thuật di chuyển',
      'Tối ưu topical map và hệ thống GSC/GA4'
    ],
    metrics: [
      { value: '43%', label: 'Top 5 Coverage', countTo: '43', suffix: '%' },
      { value: '+28,23%', label: 'AI Search Keywords', countTo: '28.23', format: 'decimal-comma', decimals: '2', prefix: '+', suffix: '%' },
      { value: '32.198', label: 'Organic Sessions', countTo: '32198', format: 'vi-dot' }
    ],
    ctaText: 'Xem case study',
    cardModifierClass: 'case-story-card--suoi-tien'
  },
  {
    seq: '03',
    title: 'DOL Grammar',
    badge: 'New Website SEO · Topical Authority',
    logoSrc: '/images/logos/dol-grammar-logo-logo.png',
    logoAlt: 'DOL Grammar logo',
    watermarkSrc: '/images/logos/dol-grammar-logo-logo.png',
    watermarkModifierClass: 'case-card__watermark--wordmark',
    monogram: 'DOL',
    status: 'available',
    href: '/case-studies/dol-grammar-seo/',
    compactRole: 'SEO Strategy & Project Lead',
    summary: 'Xây nền tảng SEO cho website mới từ giai đoạn launch, tập trung topical authority, cấu trúc nội dung và workflow có thể mở rộng.',
    challenge: [
      'Xây topical authority cho một website hoàn toàn mới.',
      'Chuẩn hóa cấu trúc nội dung và workflow có thể mở rộng.'
    ],
    role: [
      'Middle SEO / SEO Project Leader',
      'SEO Strategy',
      'KPI/OKR Planning',
      'Topical Map & Site Structure',
      'Content Optimization Workflow'
    ],
    actions: [
      'Xây topical map và cấu trúc website theo cụm chủ đề Grammar',
      'Chuẩn hóa tiêu chuẩn content, on-page và internal linking',
      'Triển khai schema, author, PR/entity và kế hoạch live web'
    ],
    metrics: [
      { value: '66.000', label: 'Organic Traffic', countTo: '66000', format: 'vi-dot' },
      { value: '252', label: 'Ranking Keywords', countTo: '252' },
      { value: '16%', label: 'Keywords Top 1–3', countTo: '16', suffix: '%' }
    ]
  },
  {
    seq: '04',
    title: 'Hikid',
    badge: 'Coming soon',
    logoSrc: '/images/logos/hikid-logo.png',
    logoAlt: 'Hikid logo',
    watermarkSrc: '/images/logos/hikid-logo.png',
    monogram: 'HKD',
    status: 'coming-soon',
    href: '',
    compactRole: 'Case study đang biên soạn',
    summary: 'Dự án SEO cho thương hiệu dinh dưỡng cao cấp; case study đang được chuẩn hóa dữ liệu và hoàn thiện nội dung.',
    challenge: [
      'Xây nền tảng SEO cho thương hiệu dinh dưỡng cao cấp.',
      'Dữ liệu kết quả đang được chuẩn hóa để hoàn thiện case study.'
    ],
    role: [
      'SEO Project Leader',
      'SEO Strategy & Execution',
      'Technical & Content Audit',
      'Performance Tracking'
    ],
    actions: [
      'Nghiên cứu thị trường và hành vi tìm kiếm ngành hàng dinh dưỡng',
      'Xây dựng topical map và kiến trúc thông tin website',
      'Chuẩn hóa quy trình tối ưu Technical & Content'
    ],
    metrics: [
      { value: '••.•••', label: 'Organic Sessions', countTo: '0' },
      { value: '••%', label: 'Top 3 Keywords', countTo: '0' },
      { value: '•••+', label: 'Conversion Intent', countTo: '0' }
    ]
  }
];
