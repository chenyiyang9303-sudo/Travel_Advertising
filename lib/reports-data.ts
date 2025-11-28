export interface Report {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: "destination-insight" | "creator-strategy" | "ai-innovation";
  featured: boolean;
  downloadUrl?: string;
  previewPages: number;
  fileSize: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  tags: string[];
  coverImage: string;
  excerpt: string;
  keyFindings: string[];
  tableOfContents: {
    section: string;
    page: number;
  }[];
  methodology: string;
  dataSource: string;
  relatedReports: string[];
}

export const reportCategories = [
  { value: "all", label: "All Reports" },
  { value: "destination-insight", label: "Destination Insights" },
  { value: "creator-strategy", label: "Creator/Content Strategy" },
  { value: "ai-innovation", label: "AI & Digital Innovation" },
];

const reports: Report[] = [
  {
    id: "apac-travel-content-radar-2025",
    title: "APAC Travel Content Radar 2025",
    subtitle: "Asian Traveler Content Preferences & Channel Conversion Research",
    description:
      "Analyzing content consumption behavior of 12,000 travelers across China, Southeast Asia, Japan, and Korea, dissecting narrative approaches and conversion strategies for travel brands across different channels in 2025.",
    publishDate: "2025-01-15",
    readTime: "32 min",
    category: "destination-insight",
    featured: true,
    downloadUrl: "/reports/apac-travel-content-radar-2025.pdf",
    previewPages: 14,
    fileSize: "4.1 MB",
    author: {
      name: "Jing Wang",
      title: "Head of Destination Strategy",
      avatar: "/avatars/liao-zhihua.svg",
    },
    tags: ["Destination", "Content", "APAC", "Traveler Insight"],
    coverImage:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=1600&h=900&fit=crop&auto=format",
    excerpt:
      "87% of respondents stated that 'experiential feel' is key to whether they search for more information about a destination, while multilingual short videos have 2.7x the click-through rate of pure text.",
    keyFindings: [
      "Chinese and Southeast Asian travelers differ in social media inspiration sources: the former prefer creator perspectives, the latter favor official brand content.",
      "Adding interactive nodes (polls, route choices) to travel content increases sharing rates by 38%.",
      "Night experiences and nature healing content are growing fastest in 2025, with average saves 1.9x higher than traditional attractions.",
      "Multilingual subtitles and AI-generated covers increase overseas viewer watch time by 42%.",
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 4 },
      { section: "Traveler Sample & Methodology", page: 8 },
      { section: "Top Performing Narratives", page: 14 },
      { section: "Channel Deep Dive", page: 22 },
      { section: "Conversion Benchmarks", page: 30 },
      { section: "Action Playbooks", page: 40 },
    ],
    methodology:
      "Combining 12,000 consumer surveys, 45 destination project datasets, social media and OTA interaction logs, and One World Global Travel internal experiments.",
    dataSource:
      "One World Global Travel Destination Lab, TikTok, Instagram, TikTok, YouTube, Ctrip, Klook, Trip.com user research.",
    relatedReports: [
      "creator-commerce-benchmark-2024",
      "ai-media-orchestration-guide",
    ],
  },
  {
    id: "creator-commerce-benchmark-2024",
    title: "Creator Commerce Benchmark 2024",
    subtitle: "50 Key Metrics for Creator Networks & Livestream Conversion",
    description:
      "Analyzing 210 travel livestreams and 680+ creator partnership projects, revealing how content structure, promotional strategy, and product mix design impact conversion.",
    publishDate: "2024-12-05",
    readTime: "28 min",
    category: "creator-strategy",
    featured: true,
    downloadUrl: "/reports/creator-commerce-benchmark-2024.pdf",
    previewPages: 12,
    fileSize: "3.2 MB",
    author: {
      name: "Yuki Yamada",
      title: "Creator Partnership Director",
      avatar: "/avatars/chen-jiayin.svg",
    },
    tags: ["Creators", "Livestream", "Commerce"],
    coverImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop&auto=format",
    excerpt:
      "In travel livestreams, sessions with 'journey milestone interactions' achieve 6.4% average conversion, 1.7x higher than standard streams; dual-creator relay formats reach 78% completion rates.",
    keyFindings: [
      "Scripts with warm-up + climax + full CTA increase watch time by 22%",
      "Bundle offers (tickets + hotel + night tour) generate 3.4x higher GMV than single-item deals",
      "Short videos published during livestreams contribute 18% of secondary conversions",
      "Creator CRM data accumulation improves repeat campaign efficiency by 46%",
    ],
    tableOfContents: [
      { section: "Creator Landscape", page: 5 },
      { section: "Livestream Script Patterns", page: 12 },
      { section: "Offer & Bundle Playbooks", page: 20 },
      { section: "Creator CRM Metrics", page: 30 },
      { section: "Case Studies", page: 38 },
      { section: "Implementation Checklist", page: 48 },
    ],
    methodology:
      "Sampled from One World Global Travel 2023-2024 livestream and creator projects, combined with platform API data and survey interviews.",
    dataSource:
      "One World Global Travel Creator CRM, TikTok/YouTube livestream backends, TikTok Shop, OTA partnership data.",
    relatedReports: [
      "apac-travel-content-radar-2025",
      "ai-media-orchestration-guide",
    ],
  },
  {
    id: "ai-media-orchestration-guide",
    title: "AI Media Orchestration Guide",
    subtitle: "Budget Allocation, Asset Scoring & Automated Recommendations for Travel Brands",
    description:
      "Detailed guide on how One World Global Travel AI Studio helps destinations, hotels, and airlines allocate budgets in real-time, evaluate creative performance, and auto-generate optimization recommendations across multi-channel campaigns.",
    publishDate: "2024-10-22",
    readTime: "26 min",
    category: "ai-innovation",
    featured: false,
    downloadUrl: "/reports/ai-media-orchestration-guide.pdf",
    previewPages: 10,
    fileSize: "2.7 MB",
    author: {
      name: "Marco Chen",
      title: "AI Product Lead",
      avatar: "/avatars/lin-zhihua.svg",
    },
    tags: ["AI Studio", "Media", "Automation"],
    coverImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=900&fit=crop&auto=format",
    excerpt:
      "After deploying AI Studio, brands save 37% of creative testing time on average, increase ROI by 42%, and achieve cross-channel budget reallocation within 6 hours.",
    keyFindings: [
      "Asset scoring models predict final performance after 200 impressions, providing adjustment recommendations 12 hours in advance",
      "Budget reallocation following 'experience stage' priority (inspiration → planning → booking) yields best results",
      "Destination brands using AI Studio improve cross-market coordination efficiency by 63%",
      "Integrating with OTA data reduces remarketing costs by 28%",
    ],
    tableOfContents: [
      { section: "Why Orchestration Matters", page: 4 },
      { section: "AI Studio Architecture", page: 10 },
      { section: "Creative Intelligence", page: 18 },
      { section: "Budget Automation", page: 26 },
      { section: "Case Playbooks", page: 34 },
      { section: "Governance & Training", page: 40 },
    ],
    methodology:
      "Based on AI Studio usage data from 60 travel brands, 40 in-person interviews, and 15 online workshops.",
    dataSource:
      "One World Global Travel AI Studio, Meta/TikTok/Bytedance API, OTA transaction data, client interviews.",
    relatedReports: [
      "apac-travel-content-radar-2025",
      "creator-commerce-benchmark-2024",
    ],
  },
];

export function getAllReports(): Report[] {
  return reports;
}

export function getReportById(id: string): Report | undefined {
  return reports.find((report) => report.id === id);
}

export function getFeaturedReports(): Report[] {
  return reports.filter((report) => report.featured);
}

export function getRelatedReports(id: string): Report[] {
  const currentReport = getReportById(id);
  if (!currentReport) return [];
  return reports.filter((report) =>
    report.id !== id && currentReport.relatedReports.includes(report.id)
  );
}
