// src/data/caseStudies.ts

export interface FeaturedCaseStudy {
  id: string;
  title: string;
  industry: string;
  role: string;
  projectType: string;
  challenge: string;
  results: string[];
  tags: string[];
  ctaText: string;
  detailUrl: string;
}

export interface ProjectHighlight {
  id: string;
  projectLabel: string;
  industry: string;
  role: string;
  scope: string;
  evidence: string;
  tags: string[];
  statusBadge: string;
}

export const featuredCaseStudies: FeaturedCaseStudy[] = [
  {
    id: 'suoi-tien-seo',
    title: 'Suối Tiên — Tourism SEO Growth',
    industry: 'Tourism / Entertainment',
    role: 'SEO Project Leader & Hands-on SEO Executive',
    projectType: 'Organic Growth / KPI Delivery / Tourism SEO',
    challenge: 'Grow organic visibility and meet committed traffic/ranking targets for a tourism brand.',
    results: [
      '32.198 organic sessions (100.8% KPI achievement)',
      '+241 sessions above target',
      '219 ranking keywords (77 Top 3, 94 Top 5)'
    ],
    tags: ['Organic Growth', 'Technical SEO', 'Website Migration'],
    ctaText: 'View case study',
    detailUrl: '/case-studies/suoi-tien-seo/'
  },
  {
    id: 'dol-grammar-seo',
    title: 'DOL Grammar — Topical Authority from Launch',
    industry: 'Education / English Learning',
    role: 'SEO Project Leader',
    projectType: 'Topical Authority / New Website SEO / Content Strategy',
    challenge: 'Build SEO growth for a new grammar-focused sub-domain while managing sandbox risk, academic content quality, cannibalization risk, and Custom CMS limitations.',
    results: [
      'Website live date: 13/03/2024',
      'Estimated Traffic (Semrush): 0 → 66.800 by 07/2024',
      '252 ranking keywords in Phase 1 (Top 1–3: 16%, Top 4–5: 8%, Top 6–10: 21%)'
    ],
    tags: ['Topical Authority', 'New Website SEO', 'Content Strategy'],
    ctaText: 'View case study',
    detailUrl: '/case-studies/dol-grammar-seo/'
  },
  {
    id: 'hoang-long-computer-seo',
    title: 'Hoàng Long Computer — E-commerce SEO Recovery & Scaling Partnership',
    industry: 'E-commerce Technology / Computer Hardware',
    role: 'SEO Project Leader',
    projectType: 'E-commerce SEO / Technical Recovery / KPI Planning',
    challenge: 'Phục hồi nền SEO cho website e-commerce công nghệ và mở rộng sang hợp đồng 12 tháng với KPI ranking, traffic tích lũy, AI/GEO traffic và conversion tracking.',
    results: [
      '57% Top 3 on 113 maintenance keywords at Month 6',
      '22% Top 3 on 153 growth keywords at Month 6',
      '980.965 Organic Search sessions tích lũy',
      '15.302 AI Chats sessions',
      '15,3K hành động thể hiện ý định thương mại'
    ],
    tags: ['E-commerce SEO', 'Technical Recovery', 'KPI Planning', 'GEO / AI Tracking'],
    ctaText: 'View case study',
    detailUrl: '/case-studies/hoang-long-computer-seo/'
  }
];

export const projectHighlights: ProjectHighlight[] = [
  {
    id: 'viet-hoa-packaging',
    projectLabel: 'Việt Hoa Packaging',
    industry: 'B2B / Manufacturing / Plastic Packaging',
    role: 'SEO Freelancer / SEO Project Leader',
    scope: 'Website migration direction, technical recovery, content audit, backlink cleanup, WordPress structure.',
    evidence: '334 committed keywords improved; 22% Top 5; 42% Top 10; clicks +22%; CTR +52%.',
    tags: ['Migration', 'Technical SEO', 'B2B SEO'],
    statusBadge: 'Summary only'
  },
  {
    id: 'gtv-seo',
    projectLabel: 'GTVSEO',
    industry: 'SEO / Agency Website',
    role: 'Main SEO executor',
    // TODO: Verify exact dates and resolve timeline inconsistencies before considering a full detail page.
    scope: 'Content audit, keyword research, outline review, on-page optimization, internal linking, entity offsite, backlink execution.',
    evidence: '125.000 organic traffic; 183 ranking keywords; 70% Top 3.',
    tags: ['Agency SEO', 'Content Audit', 'Off-page'],
    statusBadge: 'Summary only'
  },
  {
    id: 'ahc-vietnam',
    projectLabel: 'AHC Vietnam',
    industry: 'Beauty / Cosmetics / YMYL',
    role: 'Main SEO executor',
    scope: 'Wireframe review, UX/UI review, website structure, topical map, entity pages, on-page, GMB optimization.',
    evidence: '3.800 organic traffic by 09/2023.',
    tags: ['YMYL', 'UX/UI SEO', 'Topical Map'],
    statusBadge: 'Summary only'
  },
  {
    id: 'content-seo-execution',
    projectLabel: 'Multi-industry Content SEO',
    industry: 'Multiple industries',
    role: 'Content SEO Specialist',
    scope: 'Keyword research, content planning, content review, search intent checks, client reporting.',
    evidence: 'Participated in 10+ SEO projects across multiple industries.',
    tags: ['Content SEO', 'Search Intent', 'Content Review'],
    statusBadge: 'Summary only'
  }
];
