export interface Report {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: 'market-analysis' | 'financial-strategy' | 'risk-management' | 'compliance';
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
  { value: 'all', label: 'All Reports' },
  { value: 'market-analysis', label: 'Market Analysis' },
  { value: 'financial-strategy', label: 'Financial Strategy' },
  { value: 'risk-management', label: 'Risk Management' },
  { value: 'compliance', label: 'Compliance' },
];

const reports: Report[] = [
  {
    id: "ma-market-outlook-2024",
    title: "M&A Market Outlook 2024-2025",
    subtitle: "Strategic Analysis of Corporate Transactions and Valuation Trends",
    description: "Comprehensive analysis of the global M&A landscape, examining deal activity, valuation multiples, sector dynamics, and strategic opportunities for mid-market transactions.",
    publishDate: "2024-06-15",
    readTime: "28 min",
    category: "market-analysis",
    featured: true,
    downloadUrl: "/reports/ma-market-outlook-2024.pdf",
    previewPages: 10,
    fileSize: "3.2 MB",
    author: {
      name: "廖治华 (Zhihua Liao)",
      title: "CEO & M&A Strategy Lead",
      avatar: "/avatars/wang-yaqi.svg"
    },
    tags: ["M&A", "Valuation", "Corporate Finance", "Strategic Transactions"],
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
    excerpt: "Global M&A activity projected to reach $3.8 trillion in 2024, driven by strategic consolidation, private equity dry powder deployment, and corporate portfolio optimization strategies across key sectors.",
    keyFindings: [
      "Mid-market deal activity rebounding with 22% YoY increase in transaction volume",
      "Technology and healthcare sectors commanding premium valuations at 12-15x EBITDA multiples",
      "Cross-border transactions accelerating as companies pursue geographic diversification",
      "Earnout structures increasingly common to bridge valuation gaps in uncertain markets"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Market Overview & Deal Activity", page: 9 },
      { section: "Valuation Multiples Analysis", page: 17 },
      { section: "Sector Deep Dives", page: 26 },
      { section: "Cross-Border Transactions", page: 38 },
      { section: "Deal Structuring Trends", page: 47 },
      { section: "Strategic Recommendations", page: 55 }
    ],
    methodology: "Analysis combines data from 2,400+ completed transactions, 180+ executive interviews with corporate development leaders, proprietary valuation modeling, and regression analysis of pricing determinants.",
    dataSource: "S&P Capital IQ, PitchBook, Refinitiv, Mergermarket, Primary Research",
    relatedReports: ["working-capital-optimization-2024", "corporate-debt-restructuring-2024"]
  },
  {
    id: "working-capital-optimization-2024",
    title: "Working Capital Optimization Report 2024",
    subtitle: "Cash Conversion Strategies for Mid-Market Companies",
    description: "In-depth examination of working capital management best practices, analyzing receivables, inventory, and payables optimization strategies to unlock hidden cash and improve liquidity.",
    publishDate: "2024-05-10",
    readTime: "22 min",
    category: "financial-strategy",
    featured: true,
    downloadUrl: "/reports/working-capital-optimization-2024.pdf",
    previewPages: 8,
    fileSize: "2.1 MB",
    author: {
      name: "林志华 (Lin Zhihua)",
      title: "CFO & Financial Planning Lead",
      avatar: "/avatars/lin-zhihua.svg"
    },
    tags: ["Working Capital", "Cash Flow", "Liquidity Management", "Financial Operations"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format",
    excerpt: "Mid-market companies can unlock $50-80K per $1M revenue through systematic working capital optimization, with average cash conversion cycle improvements of 18-25 days achievable within 12 months.",
    keyFindings: [
      "Companies with optimized working capital achieve 15-20% higher enterprise valuations",
      "Days Sales Outstanding (DSO) reduction of 10 days releases 2.8% of annual revenue as cash",
      "Inventory optimization through just-in-time practices reduces holding costs by 20-30%",
      "Strategic payment term negotiations can extend Days Payables Outstanding (DPO) by 12-15 days"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Working Capital Fundamentals", page: 7 },
      { section: "Accounts Receivable Management", page: 14 },
      { section: "Inventory Optimization", page: 22 },
      { section: "Accounts Payable Strategies", page: 30 },
      { section: "Cash Conversion Cycle Analysis", page: 38 },
      { section: "Implementation Roadmap", page: 45 }
    ],
    methodology: "Research draws from financial analysis of 340+ mid-market companies, working capital benchmarking across 12 industries, and case studies documenting $180M+ in cash released through optimization initiatives.",
    dataSource: "Bloomberg Terminal, Capital IQ, Industry Association Data, Client Case Studies",
    relatedReports: ["ma-market-outlook-2024", "financial-planning-best-practices-2024"]
  },
  {
    id: "corporate-debt-restructuring-2024",
    title: "Corporate Debt Restructuring Guide 2024",
    subtitle: "Strategic Approaches to Financial Distress and Balance Sheet Optimization",
    description: "Strategic framework for corporate debt restructuring, examining out-of-court workouts, formal reorganization processes, creditor negotiations, and capital structure optimization techniques.",
    publishDate: "2024-04-22",
    readTime: "26 min",
    category: "financial-strategy",
    featured: false,
    downloadUrl: "/reports/corporate-debt-restructuring-2024.pdf",
    previewPages: 9,
    fileSize: "2.8 MB",
    author: {
      name: "王雅琪 (Wang Yaqi)",
      title: "Risk Management Director",
      avatar: "/avatars/dai-rongrong.svg"
    },
    tags: ["Debt Restructuring", "Financial Distress", "Creditor Negotiations", "Balance Sheet Optimization"],
    coverImage: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop&auto=format",
    excerpt: "Companies successfully restructuring debt achieve average interest expense reductions of 35-45%, extend maturity profiles by 3-5 years, and improve debt-to-EBITDA ratios from 6.5x to 3.2x on average.",
    keyFindings: [
      "Out-of-court workouts resolve 68% faster and 40% cheaper than formal bankruptcy proceedings",
      "Early engagement with creditors increases restructuring success rates by 2.5x",
      "Debt-for-equity swaps reduce cash interest burden while preserving enterprise value",
      "Covenant amendments and maturity extensions buy critical time for operational turnarounds"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Financial Distress Indicators", page: 8 },
      { section: "Restructuring Alternatives", page: 15 },
      { section: "Out-of-Court Workouts", page: 23 },
      { section: "Chapter 11 Reorganization", page: 32 },
      { section: "Creditor Negotiation Tactics", page: 41 },
      { section: "Post-Restructuring Management", page: 50 }
    ],
    methodology: "Analysis based on 150+ corporate restructurings totaling $45B in debt, interviews with 60+ restructuring advisors, and quantitative analysis of recovery rates, timelines, and cost structures.",
    dataSource: "S&P LCD, Moody's Default Reports, Court Filings, Turnaround Management Association",
    relatedReports: ["working-capital-optimization-2024", "risk-management-framework-2024"]
  },
  {
    id: "risk-management-framework-2024",
    title: "Enterprise Risk Management Framework 2024",
    subtitle: "Integrated Approach to Financial, Operational, and Compliance Risk",
    description: "Comprehensive enterprise risk management framework covering risk identification, assessment, mitigation strategies, and governance structures for mid-market companies navigating complex regulatory environments.",
    publishDate: "2024-03-18",
    readTime: "24 min",
    category: "risk-management",
    featured: false,
    downloadUrl: "/reports/risk-management-framework-2024.pdf",
    previewPages: 8,
    fileSize: "2.5 MB",
    author: {
      name: "李思怡 (Li Siyi)",
      title: "Compliance & Risk Manager",
      avatar: "/avatars/li-siyi.svg"
    },
    tags: ["Risk Management", "Compliance", "Internal Controls", "Governance"],
    coverImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&auto=format",
    excerpt: "Companies with mature ERM frameworks experience 40% fewer compliance violations, 30% lower insurance premiums, and demonstrate 25% higher operational efficiency through systematic risk mitigation.",
    keyFindings: [
      "Integrated risk frameworks reduce total cost of risk by 22-28% through coordinated mitigation",
      "Board-level risk committees improve strategic decision quality and stakeholder confidence",
      "Automated compliance monitoring catches 95% of violations before they become material issues",
      "Risk-adjusted performance metrics drive better capital allocation and resource optimization"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "ERM Framework Overview", page: 7 },
      { section: "Risk Identification & Assessment", page: 14 },
      { section: "Financial Risk Management", page: 22 },
      { section: "Operational Risk Controls", page: 30 },
      { section: "Compliance Risk Programs", page: 38 },
      { section: "Risk Governance Structure", page: 46 }
    ],
    methodology: "Framework developed from best practice analysis across 200+ companies, regulatory guidance synthesis, risk maturity assessments, and validation through 50+ implementation engagements.",
    dataSource: "COSO ERM Framework, ISO 31000, SEC Filings, Industry Risk Surveys, Client Implementations",
    relatedReports: ["compliance-audit-readiness-2024", "corporate-debt-restructuring-2024"]
  },
  {
    id: "compliance-audit-readiness-2024",
    title: "Compliance & Audit Readiness Report 2024",
    subtitle: "SOX, Internal Controls, and Regulatory Compliance Frameworks",
    description: "Practical guide to achieving audit readiness and regulatory compliance, covering SOX 404 requirements, internal control design, documentation standards, and audit preparation best practices.",
    publishDate: "2024-02-28",
    readTime: "20 min",
    category: "compliance",
    featured: false,
    downloadUrl: "/reports/compliance-audit-readiness-2024.pdf",
    previewPages: 7,
    fileSize: "1.9 MB",
    author: {
      name: "陈佳音 (Chen Jiayin)",
      title: "Audit & Compliance Lead",
      avatar: "/avatars/chen-jiayin.svg"
    },
    tags: ["Compliance", "SOX", "Internal Controls", "Audit Preparation"],
    coverImage: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?w=800&h=600&fit=crop&auto=format",
    excerpt: "Companies achieving full audit readiness reduce external audit costs by 25-35%, accelerate audit completion by 40%, and demonstrate enhanced internal control effectiveness with 90%+ testing success rates.",
    keyFindings: [
      "Robust SOX documentation reduces material weakness findings by 85%",
      "Automated control testing improves efficiency by 60% while enhancing evidence quality",
      "Quarterly internal control self-assessments identify 78% of issues before external audits",
      "Cross-functional control ownership improves compliance culture and reduces remediation time by 50%"
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 3 },
      { section: "Regulatory Landscape", page: 6 },
      { section: "SOX 404 Compliance", page: 12 },
      { section: "Internal Control Design", page: 19 },
      { section: "Control Testing & Evidence", page: 27 },
      { section: "Audit Preparation Process", page: 34 },
      { section: "Remediation & Continuous Improvement", page: 41 }
    ],
    methodology: "Guide synthesizes requirements from SOX regulations, PCAOB standards, COSO Internal Control Framework, and learnings from 120+ SOX compliance implementations and 300+ internal control assessments.",
    dataSource: "PCAOB Standards, SEC Guidance, COSO Framework, Big Four Audit Methodologies, Client Projects",
    relatedReports: ["risk-management-framework-2024", "financial-planning-best-practices-2024"]
  }
];

export function getAllReports(): Report[] {
  return reports;
}

export function getReportById(id: string): Report | undefined {
  return reports.find(report => report.id === id);
}

export function getFeaturedReports(): Report[] {
  return reports.filter(report => report.featured);
}

export function getReportsByCategory(category: Report['category']): Report[] {
  return reports.filter(report => report.category === category);
}

export function getRelatedReports(currentReportId: string): Report[] {
  const currentReport = getReportById(currentReportId);
  if (!currentReport) return [];

  return currentReport.relatedReports
    .map(id => getReportById(id))
    .filter((report): report is Report => report !== undefined);
}
