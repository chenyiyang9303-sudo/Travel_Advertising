export interface Report {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publishDate: string;
  readTime: string;
  category: "market-analysis" | "financial-strategy" | "risk-management" | "compliance";
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
  { value: "market-analysis", label: "Market Analysis" },
  { value: "financial-strategy", label: "Financial Strategy" },
  { value: "risk-management", label: "Risk Management" },
  { value: "compliance", label: "Compliance" },
];

const reports: Report[] = [
  {
    id: "institutional-asset-allocation-2025",
    title: "Institutional Asset Allocation Outlook 2025",
    subtitle: "Strategic Positioning Across Public and Private Markets",
    description:
      "A forward-looking assessment of how pensions, insurers, and endowments are recalibrating allocations, liquidity frameworks, and governance in a higher-rate regime.",
    publishDate: "2024-12-15",
    readTime: "30 min",
    category: "market-analysis",
    featured: true,
    downloadUrl: "/reports/institutional-asset-allocation-2025.pdf",
    previewPages: 12,
    fileSize: "3.6 MB",
    author: {
      name: "廖治华 (Zhihua Liao)",
      title: "Chief Investment Strategist",
      avatar: "/avatars/liao-zhihua.svg",
    },
    tags: [
      "Asset Allocation",
      "Institutional Investing",
      "Portfolio Strategy",
      "Market Outlook",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1600&h=900&fit=crop&auto=format",
    excerpt:
      "More than 70% of surveyed CIOs anticipate reallocating at least 5% of portfolio weight during 2025, with private credit, infrastructure, and short-duration fixed income seeing the largest net inflows.",
    keyFindings: [
      "Funding-ratio volatility is driving a 9% average increase in liability-aware fixed income allocations.",
      "Private credit commitments are poised to expand by $210B globally as institutions seek floating-rate income.",
      "Infrastructure equity remains a preferred inflation hedge, with 62% of CIOs targeting energy transition assets.",
      "Governance enhancements—faster decision rights, scenario analytics, and centralized risk dashboards—are cited as critical enablers of agility.",
    ],
    tableOfContents: [
      { section: "Executive Summary", page: 4 },
      { section: "Macroeconomic Baseline & Scenarios", page: 9 },
      { section: "Allocation Shifts by Investor Segment", page: 18 },
      { section: "Private Markets Outlook", page: 28 },
      { section: "Liquidity and Risk Governance", page: 36 },
      { section: "Implementation Playbooks", page: 46 },
      { section: "Implications & Action Checklist", page: 56 },
    ],
    methodology:
      "Findings draw on a proprietary survey of 160 global CIOs, analysis of custodial allocation data representing $2.4T in AUM, and scenario modelling using Orient Blackstone's macroeconomic toolkit.",
    dataSource:
      "Orient Blackstone Research, Bloomberg, MSCI, Preqin, public filings, interview transcripts.",
    relatedReports: [
      "global-liquidity-risk-benchmark-2025",
      "private-markets-operations-survey-2025",
    ],
  },
  {
    id: "global-liquidity-risk-benchmark-2025",
    title: "Global Liquidity Risk Benchmark 2025",
    subtitle: "Treasury Governance, Stress Testing, and Funding Diversification",
    description:
      "Benchmarking study covering 120 multinational treasuries, highlighting leading practices across stress testing, counterparty management, and funding architecture in a higher-for-longer rate cycle.",
    publishDate: "2024-11-22",
    readTime: "26 min",
    category: "risk-management",
    featured: true,
    downloadUrl: "/reports/global-liquidity-risk-benchmark-2025.pdf",
    previewPages: 10,
    fileSize: "2.9 MB",
    author: {
      name: "林志华 (Lin Zhihua)",
      title: "CFO Advisory Partner",
      avatar: "/avatars/lin-zhihua.svg",
    },
    tags: [
      "Liquidity Risk",
      "Treasury",
      "Stress Testing",
      "Funding Strategy",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1600&h=900&fit=crop&auto=format",
    excerpt:
      "Leading treasuries have doubled the frequency of liquidity scenario analysis since 2022, and 58% maintain pre-negotiated contingent facilities to bridge market dislocations.",
    keyFindings: [
      "Organisations with dedicated liquidity councils executed mitigation actions 35% faster during stress events.",
      "Top-quartile performers maintain at least five committed funding sources and actively monitor counterparty CDS spreads.",
      "Technology-enabled treasury workbenches reduce scenario modelling time by 45% on average.",
      "Formalised communication playbooks significantly enhance stakeholder confidence during liquidity events.",
    ],
    tableOfContents: [
      { section: "Executive Briefing", page: 5 },
      { section: "Methodology & Participant Profile", page: 11 },
      { section: "Stress Testing Architecture", page: 17 },
      { section: "Funding Diversification Benchmarks", page: 27 },
      { section: "Counterparty Risk Governance", page: 35 },
      { section: "Technology Enablement", page: 43 },
      { section: "Action Framework", page: 52 },
    ],
    methodology:
      "Survey responses from Fortune 1000 and FTSE 350 treasuries, supplemented with Orient Blackstone client benchmarks and liquidity incident post-mortems conducted between 2022-2024.",
    dataSource:
      "Orient Blackstone Treasury Pulse Survey, company filings, rating agency research, industry roundtables.",
    relatedReports: [
      "institutional-asset-allocation-2025",
      "private-markets-operations-survey-2025",
    ],
  },
  {
    id: "private-markets-operations-survey-2025",
    title: "Private Markets Operations Survey 2025",
    subtitle: "Control Readiness, Valuation Governance, and Regulatory Compliance",
    description:
      "Operational deep dive into how private equity and private credit managers are institutionalising middle- and back-office capabilities ahead of emerging regulatory requirements.",
    publishDate: "2024-10-18",
    readTime: "24 min",
    category: "compliance",
    featured: false,
    downloadUrl: "/reports/private-markets-operations-survey-2025.pdf",
    previewPages: 9,
    fileSize: "2.4 MB",
    author: {
      name: "李思怡 (Siyi Li)",
      title: "Head of Regulatory & Operations Advisory",
      avatar: "/avatars/li-siyi.svg",
    },
    tags: [
      "Private Equity",
      "Operational Excellence",
      "Compliance",
      "Valuation Governance",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&h=900&fit=crop&auto=format",
    excerpt:
      "88% of surveyed GPs initiated control enhancement programmes in the past 18 months, with valuation committees, data lineage mapping, and cyber resilience emerging as priority agenda items.",
    keyFindings: [
      "Managers with independent valuation committees report 40% fewer audit adjustments.",
      "Data lineage documentation is now a requirement for 63% of institutional LP due diligence processes.",
      "Cyber incident response tabletop exercises are conducted at least semi-annually by leading managers.",
      "Regulatory filings automation delivers a 32% reduction in cycle time for quarterly reporting obligations.",
    ],
    tableOfContents: [
      { section: "Survey Overview", page: 6 },
      { section: "Valuation Governance Trends", page: 14 },
      { section: "Operational Control Enhancements", page: 22 },
      { section: "Data & Technology Enablement", page: 30 },
      { section: "Regulatory Landscape Update", page: 38 },
      { section: "LP Transparency Expectations", page: 46 },
      { section: "Operational Uplift Roadmap", page: 54 },
    ],
    methodology:
      "Survey of 95 private equity and private credit COOs, complemented by 30 qualitative interviews with LP operational due diligence teams and analysis of regulatory guidance in North America, Europe, and APAC.",
    dataSource:
      "Orient Blackstone Private Markets Practice, ILPA publications, SEC & ESMA rulemaking, industry working groups.",
    relatedReports: [
      "institutional-asset-allocation-2025",
      "global-liquidity-risk-benchmark-2025",
    ],
  },
];

export function getAllReports(): Report[] {
  return reports;
}

export function getFeaturedReports(): Report[] {
  return reports.filter((report) => report.featured);
}

export function getReportById(id: string): Report | undefined {
  return reports.find((report) => report.id === id);
}

export function getRelatedReports(id: string): Report[] {
  const currentReport = getReportById(id);
  if (!currentReport) return [];

  return reports.filter((report) =>
    currentReport.relatedReports.includes(report.id)
  );
}
