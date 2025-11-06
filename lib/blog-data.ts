export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category:
    | "financial-strategy"
    | "risk-management"
    | "market-analysis"
    | "corporate-finance"
    | "compliance";
  featured: boolean;
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  coverImage: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  relatedPosts: string[];
}

export const blogCategories = [
  { value: "all", label: "All Posts" },
  { value: "financial-strategy", label: "Financial Strategy" },
  { value: "risk-management", label: "Risk Management" },
  { value: "market-analysis", label: "Market Analysis" },
  { value: "corporate-finance", label: "Corporate Finance" },
  { value: "compliance", label: "Compliance" },
];

const blogPosts: BlogPost[] = [
  {
    slug: "institutional-portfolio-governance-2025",
    title: "Institutional Portfolio Governance: Recalibrating Allocation Models for 2025",
    excerpt:
      "With volatility persisting across public and private markets, investment committees are redesigning governance, allocation, and reporting frameworks to protect funded status and unlock durable alpha.",
    content: `
# Institutional Portfolio Governance: Recalibrating Allocation Models for 2025

Institutional investors enter 2025 navigating persistent rate volatility, divergent growth outlooks, and changing liquidity dynamics. Asset allocation committees are reassessing governance models to capture opportunity while protecting funded status and liquidity.

## The Macro Backdrop Demands Faster Calibration

Capital markets are recalibrating around structurally higher funding costs, energy transition capex, and evolving geopolitical risk premia. Long-duration government bonds have regained relevance as a portfolio ballast, yet forward real yields remain elevated relative to pre-2020 norms. Meanwhile, private market valuations continue to adjust with longer exit timelines and lower leverage availability.

This environment rewards governance structures that support rapid scenario testing, documented risk appetite statements, and clear delegation to execution teams. Quarterly allocation reviews are giving way to rolling 60-day governance cycles anchored in quantitative guardrails.

## Building a Dynamic Allocation Playbook

Institutions are deploying “core versus opportunistic” frameworks to segment long-term allocation anchors from tactical sleeves. Core exposures remain benchmark oriented with strict tracking-error budgets, while opportunistic sleeves flex within pre-approved ranges to exploit dislocations in credit, infrastructure, or thematic equity.

Key design elements include:

- **Real-time funding ratio analytics** integrating liability hedging impact and solvency buffers.
- **Liquidity waterfalls** that monitor stress-case redemption and capital call scenarios.
- **Trigger-based governance** that codifies when rebalancing or hedging actions must be escalated.

## Enhancing Board Reporting and Accountabilities

Trustees expect more transparent, decision-useful reporting. Leading institutions are implementing tiered dashboards that distinguish diagnostic metrics from action-oriented indicators. Reporting packs now highlight scenario analysis, counterparty exposures, ESG stewardship milestones, and operational risk alerts in addition to performance.

Clear role definitions across boards, investment committees, and delegated management teams are critical. Charters should articulate which decisions are delegated, timelines for escalation, and documentation standards to satisfy fiduciary obligations.

## Embedding Operational Resilience

Portfolio governance increasingly intersects with operational resilience mandates. Institutions are conducting supplier risk assessments covering administrators, risk systems, and valuation agents. Cyber resilience metrics are being embedded into board dashboards alongside market risk indicators.

Finally, investment teams are running governance “tabletop exercises” twice annually to rehearse responses to market shocks, liquidity squeezes, or outsourced provider failures. These drills strengthen institutional memory and shorten reaction time when stress scenarios become reality.
`,
    publishDate: "2025-01-08",
    readTime: "9 min",
    category: "financial-strategy",
    featured: true,
    author: {
      name: "廖治华 (Zhihua Liao)",
      title: "Chief Investment Strategist",
      avatar: "/avatars/liao-zhihua.svg",
      bio: "Institutional portfolio strategist with two decades of experience advising pension, insurance, and sovereign clients on asset allocation and governance.",
    },
    tags: [
      "Asset Allocation",
      "Institutional Investing",
      "Governance",
      "Portfolio Strategy",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=1600&h=900&fit=crop&auto=format",
    seo: {
      metaTitle:
        "Institutional Portfolio Governance: Allocation Models for 2025",
      metaDescription:
        "Explore how investment committees are redesigning asset allocation, liquidity, and governance frameworks to navigate 2025 market volatility.",
      keywords: [
        "institutional investing",
        "asset allocation",
        "portfolio governance",
        "investment committee best practices",
      ],
    },
    relatedPosts: [
      "enterprise-liquidity-risk-playbook",
      "capital-raise-readiness-blueprint",
    ],
  },
  {
    slug: "enterprise-liquidity-risk-playbook",
    title: "Enterprise Liquidity Risk Playbook: Stress Testing for a Higher-Rate Cycle",
    excerpt:
      "Corporate treasurers and CFOs are revamping liquidity frameworks, stress testing protocols, and counterparty governance to stay resilient as the higher-for-longer rate narrative takes hold.",
    content: `
# Enterprise Liquidity Risk Playbook: Stress Testing for a Higher-Rate Cycle

The liquidity environment has shifted materially. Policy rates are expected to remain elevated, commercial bank appetite for balance sheet commitments is selective, and capital markets windows open and close quickly. Finance leaders must treat liquidity risk governance with the same rigor they apply to capital allocation.

## Elevating Treasury as a Strategic Function

Best-in-class treasury teams now operate as enterprise control towers. They maintain daily visibility into global cash positions, covenant headroom, and hedging effectiveness. Treasurers partner with FP&A to align liquidity planning with scenario-based earnings forecasts and board-approved risk appetite statements.

## Designing Multi-Layered Stress Tests

Robust stress testing frameworks typically assess three dimensions:

1. **Operating cash flow shocks** — revenue contractions, working capital drawdowns, or supply chain disruptions.
2. **Financing market stress** — refinancing delays, covenant breaches, widening spreads, or rating downgrades.
3. **Counterparty failures** — bank insolvency, trade credit withdrawal, or vendor distress.

For each scenario, leadership should map mitigation levers, decision thresholds, and stakeholder communication plans. Modern treasury workbenches enable automated recalculation of cash runway and covenant compliance under each stress lens.

## Strengthening Funding Diversification

Organisations are diversifying away from single-bank dependence by building syndicated credit facilities, accessing private placement markets, and pre-positioning assets for structured financing. A disciplined funding diversification plan quantifies concentration risk, sets counterparty exposure limits, and introduces early-warning indicators for bank credit deterioration.

## Embedding Governance and Reporting

Liquidity councils, chaired by the CFO or Treasurer, meet monthly to review stress results, confirm action plans, and report to the audit or risk committee. Dashboards integrate liquidity coverage, net stable funding metrics, covenant headroom, and collateral availability. This governance cadence ensures management and directors remain aligned on trigger points for cost actions, refinancing, or portfolio rebalancing.
`,
    publishDate: "2024-12-12",
    readTime: "8 min",
    category: "risk-management",
    featured: true,
    author: {
      name: "林志华 (Lin Zhihua)",
      title: "CFO Advisory Partner",
      avatar: "/avatars/lin-zhihua.svg",
      bio: "Finance transformation leader advising treasurers and CFOs on liquidity, capital structure, and risk governance across global enterprises.",
    },
    tags: [
      "Liquidity",
      "Treasury",
      "Risk Management",
      "Scenario Planning",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&h=900&fit=crop&auto=format",
    seo: {
      metaTitle:
        "Enterprise Liquidity Risk Playbook for the Higher-Rate Environment",
      metaDescription:
        "Discover practical steps corporate treasurers can take to stress test liquidity, diversify funding, and build resilient governance structures.",
      keywords: [
        "liquidity risk",
        "treasury strategy",
        "stress testing",
        "corporate finance governance",
      ],
    },
    relatedPosts: [
      "institutional-portfolio-governance-2025",
      "capital-raise-readiness-blueprint",
    ],
  },
  {
    slug: "capital-raise-readiness-blueprint",
    title: "Capital Raise Readiness: Building an Investor-Grade Finance Function",
    excerpt:
      "Growth-stage companies pursuing debt or equity capital in 2025 must demonstrate institutional-quality forecasting, KPIs, and governance to earn investor confidence and favourable terms.",
    content: `
# Capital Raise Readiness: Building an Investor-Grade Finance Function

Capital markets remain open for well-prepared issuers, but investors are raising the bar on diligence requirements. Finance leaders planning a capital raise—whether private credit, growth equity, or public markets—should anchor preparation around three dimensions: insight quality, operating discipline, and governance credibility.

## Elevating the Operating Model

Investor-grade finance teams deliver a unified financial narrative. This starts with integrated planning models that reconcile GAAP financials, cash flow drivers, and operational KPIs. Rolling 18-month forecasts, scenario overlays, and sensitivity analytics give stakeholders confidence that management understands the levers that drive value.

## Curating Decision-Ready Metrics

Boards and investors expect forward-looking indicators. Best practice dashboards blend financial metrics (ARR growth, gross margin progression, free cash flow conversion) with operational signals (sales efficiency, retention cohorts, unit economics). Each metric should cascade from the value creation plan and feature clear owners.

## Governance and Control Readiness

Before launching a capital raise process, organisations should benchmark internal controls, policy documentation, and cyber resilience against investor expectations. Audit readiness, revenue recognition policies, and data privacy compliance are frequent diligence focus areas. Establishing a disclosure committee and documentation protocol early reduces friction when diligence accelerates.

## Communicating the Equity Story

Finally, management must articulate a coherent equity narrative. This includes the problem statement, customer value proposition, scalability proof points, and capital deployment roadmap. Investor presentations should link strategic milestones to the associated financial impact and highlight risk mitigants anchored in credible data.
`,
    publishDate: "2024-11-04",
    readTime: "7 min",
    category: "corporate-finance",
    featured: false,
    author: {
      name: "陈嘉音 (Jiayin Chen)",
      title: "Capital Markets Director",
      avatar: "/avatars/chen-jiayin.svg",
      bio: "Capital markets practitioner helping growth companies institutionalise finance functions and secure strategic financing.",
    },
    tags: [
      "Capital Raising",
      "Investor Relations",
      "Financial Planning",
      "Governance",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop&auto=format",
    seo: {
      metaTitle:
        "Capital Raise Readiness Blueprint for Growth-Stage Companies",
      metaDescription:
        "Learn how to build investor-grade forecasting, KPIs, and governance ahead of a 2025 capital raise.",
      keywords: [
        "capital raise readiness",
        "financial planning",
        "investor relations",
        "growth equity preparation",
      ],
    },
    relatedPosts: [
      "institutional-portfolio-governance-2025",
      "enterprise-liquidity-risk-playbook",
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts.filter((post) =>
    currentPost.relatedPosts.includes(post.slug)
  );
}
