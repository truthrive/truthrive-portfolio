// src/data/seoSystems.ts

export interface SeoSystem {
  id: string;
  name: string;
  category: string;
  problemSolved: string;
  usedFor: string;
  output: string;
  methodStack: string;
  status: 'Internal tool' | 'Framework' | 'Internal workflow' | 'In progress';
}

export const seoSystems: SeoSystem[] = [
  {
    id: 'textlink-filtering-system',
    name: 'Textlink Filtering System',
    category: 'Link Operations',
    problemSolved: 'Quy trình lọc danh sách URL thủ công cho các đơn hàng textlink diễn ra rất chậm, lặp đi lặp lại và dễ phát sinh sai sót.',
    usedFor: 'Tự động phân loại loại hình website, lọc danh mục URL thô, chuẩn bị bảng dữ liệu kiểm duyệt và tối ưu hóa thời gian thiết lập chiến dịch.',
    output: 'Bảng kiểm duyệt (review sheet) chuẩn chỉnh, gắn nhãn phân loại website tự động, cấu trúc danh mục link sẵn sàng triển khai.',
    methodStack: 'Google Sheets, Apps Script, Rule-based Filtering, AI-assisted Workflow Design',
    status: 'Internal tool'
  },
  {
    id: 'content-audit-workflow',
    name: 'Content Audit Workflow',
    category: 'Content Strategy',
    problemSolved: 'Các đánh giá chất lượng nội dung thường mang tính cảm quan, thiếu nhất quán và thiếu định lượng cụ thể để sắp xếp thứ tự ưu tiên.',
    usedFor: 'Đánh giá chuyên sâu chất lượng bài viết hiện tại, mức độ bao phủ Search Intent, Topical Authority, cấu trúc on-page và mức độ sẵn sàng cho AI/GEO.',
    output: 'Báo cáo khoảng trống nội dung (content gap), sơ đồ ưu tiên làm mới (refresh priorities), checklist tối ưu và đề xuất cấu trúc heading.',
    methodStack: 'SEO Audit Checklist, Topical Authority Framework, Structured Content Review Process',
    status: 'Framework'
  },
  {
    id: 'technical-seo-audit-workflow',
    name: 'Technical SEO Audit Workflow',
    category: 'Technical SEO',
    problemSolved: 'Các vấn đề kỹ thuật (crawl, indexing, schema, canonical, sitemap) thường bị đánh giá riêng rẽ, gây khó khăn khi cần phân loại mức độ nghiêm trọng và thứ tự ưu tiên xử lý.',
    usedFor: 'Chẩn đoán sức khỏe thu thập dữ liệu (crawlability), lập chỉ mục (indexation), rà soát kỹ thuật trước/sau migration và chuẩn hóa cấu trúc thực thể.',
    output: 'Tài liệu chẩn đoán kỹ thuật, danh sách lỗi phân nhóm theo mức độ nghiêm trọng (Critical/High/Muted) và giải pháp khắc phục chi tiết.',
    methodStack: 'Crawl Data Analysis, GSC API, Technical SEO Best Practices, Structured QA Workflow',
    status: 'Internal workflow'
  },
  {
    id: 'logfile-audit-workflow',
    name: 'Logfile Audit Workflow',
    category: 'Crawl Optimization',
    problemSolved: 'Khó khăn trong việc phát hiện hành vi cào dữ liệu thực tế của Googlebot nếu chỉ phụ thuộc hoàn toàn vào các công cụ crawl giả lập thông thường.',
    usedFor: 'Phân tích tần suất cào dữ liệu, phát hiện lãng phí ngân sách cào (crawl waste), chẩn đoán các lỗi phản hồi (status codes) và nhận diện các tài nguyên bị bot bỏ qua.',
    output: 'Biểu đồ hành vi cào dữ liệu của Googlebot, danh sách URL lãng phí ngân sách cào và kế hoạch tối ưu hóa cấu trúc dẫn đường.',
    methodStack: 'Logfile Analysis, Spreadsheet Processing, Diagnostic Crawl Comparison',
    status: 'Internal workflow'
  },
  {
    id: 'ai-assisted-seo-operations',
    name: 'AI-assisted SEO Operations',
    category: 'SEO Operations',
    problemSolved: 'Đội ngũ SEO mất nhiều thời gian cho các công việc lặp lại như định dạng dữ liệu, tóm tắt ý định tìm kiếm, kiểm tra QA thủ công và viết báo cáo thô.',
    usedFor: 'Thiết kế hệ thống câu lệnh (prompt engineering) có cấu trúc, tự động hóa quy trình phân tích và nâng cao năng suất hoạt động hàng ngày.',
    output: 'Thư viện prompt tối ưu, biểu mẫu kiểm duyệt bài viết tự động hóa, quy trình kiểm soát chất lượng (QA flows) tích hợp AI.',
    methodStack: 'Generative AI Prompting, Apps Script Integration, Structured System Instructions',
    status: 'Framework'
  }
];
