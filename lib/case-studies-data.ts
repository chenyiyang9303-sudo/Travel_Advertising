export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  image: string;
  // Detail page additional fields
  overview: string;
  clientBackground: string;
  detailedChallenge: string;
  approach: string[];
  implementation: {
    phase: string;
    duration: string;
    activities: string[];
  }[];
  outcomes: {
    category: string;
    description: string;
    metrics: { metric: string; before: string; after: string; improvement: string }[];
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  technologies: string[];
  services: string[];
  nextSteps?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tech-manufacturing-ma",
    company: "TechManu Corp",
    industry: "Manufacturing & Technology",
    challenge: "A mid-sized manufacturing company needed strategic M&A advisory to acquire a complementary technology firm, but lacked experience in deal structuring and valuation.",
    solution: "We provided comprehensive M&A advisory including target identification, financial due diligence, valuation analysis, and deal structuring guidance.",
    results: [
      { metric: "Deal Completion", value: "Successfully closed in 8 months" },
      { metric: "Cost Synergies Identified", value: "$3.2M annually" },
      { metric: "Post-Merger Integration", value: "Completed within timeline" }
    ],
    timeline: "8 months",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&auto=format",
    overview: "TechManu Corp is a mid-market manufacturing company seeking to expand capabilities through strategic acquisition of a technology provider.",
    clientBackground: "Founded in 2010, TechManu Corp is an established manufacturer with $120M annual revenue. The company identified acquisition as key growth strategy but lacked internal M&A expertise and needed independent advisory to navigate the complex transaction process.",
    detailedChallenge: "The main challenges included: identifying suitable acquisition targets that aligned with strategic objectives, conducting comprehensive financial and operational due diligence, developing accurate valuation models considering synergies, structuring the deal to optimize tax efficiency and financing, and planning post-merger integration to capture identified synergies.",
    approach: [
      "Strategic target identification and screening",
      "Comprehensive financial due diligence",
      "Valuation analysis with multiple methodologies",
      "Deal structure optimization and negotiation support",
      "Post-merger integration planning"
    ],
    implementation: [
      {
        phase: "Target Identification & Screening",
        duration: "2 months",
        activities: [
          "Defined strategic acquisition criteria",
          "Identified and screened 15 potential targets",
          "Conducted preliminary valuation assessments",
          "Facilitated management meetings with shortlisted candidates",
          "Recommended top 3 targets for detailed evaluation"
        ]
      },
      {
        phase: "Due Diligence & Valuation",
        duration: "3 months",
        activities: [
          "Conducted financial due diligence on selected target",
          "Performed quality of earnings analysis",
          "Developed detailed financial models (DCF, comparable transactions)",
          "Identified and quantified potential synergies",
          "Assessed key risks and mitigation strategies"
        ]
      },
      {
        phase: "Deal Structuring & Negotiation",
        duration: "2 months",
        activities: [
          "Designed optimal deal structure (asset vs. stock purchase)",
          "Analyzed tax implications and optimization strategies",
          "Evaluated financing alternatives and capital structure",
          "Supported negotiation of purchase agreement terms",
          "Coordinated with legal and tax advisors"
        ]
      },
      {
        phase: "Integration Planning",
        duration: "1 month",
        activities: [
          "Developed 100-day integration roadmap",
          "Identified quick-win synergy opportunities",
          "Designed governance and reporting structures",
          "Established KPIs for tracking integration progress",
          "Created communication plan for stakeholders"
        ]
      }
    ],
    outcomes: [
      {
        category: "Transaction Execution",
        description: "Successfully completed strategic acquisition within target timeline and budget, capturing identified synergies.",
        metrics: [
          { metric: "Deal Value", before: "$45M target", after: "$42M negotiated", improvement: "7% cost savings" },
          { metric: "Time to Close", before: "12 months estimated", after: "8 months actual", improvement: "33% faster" },
          { metric: "Due Diligence Issues", before: "Unknown risks", after: "15 issues identified & addressed", improvement: "Risk mitigation" }
        ]
      },
      {
        category: "Financial Performance",
        description: "Achieved target synergies and improved combined entity financial performance ahead of projections.",
        metrics: [
          { metric: "Cost Synergies", before: "$0", after: "$3.2M annually", improvement: "New value creation" },
          { metric: "Revenue Synergies", before: "$0", after: "$1.8M Year 1", improvement: "Cross-selling success" },
          { metric: "EBITDA Margin", before: "12%", after: "15.5%", improvement: "3.5 points expansion" }
        ]
      },
      {
        category: "Strategic Positioning",
        description: "Enhanced market position and competitive capabilities through complementary technology acquisition.",
        metrics: [
          { metric: "Product Portfolio", before: "Limited offerings", after: "3 new product lines", improvement: "Market expansion" },
          { metric: "Customer Base", before: "150 clients", after: "280 clients", improvement: "87% growth" },
          { metric: "Market Share", before: "8%", after: "14%", improvement: "75% increase" }
        ]
      }
    ],
    testimonial: {
      quote: "The M&A advisory team provided invaluable guidance throughout our first acquisition. Their expertise in valuation, deal structuring, and integration planning was instrumental in achieving a successful outcome. The synergies we've captured exceed our initial expectations.",
      author: "David Chen",
      position: "CEO, TechManu Corp"
    },
    technologies: ["Financial Modeling Software", "Due Diligence Platforms", "Valuation Tools", "Project Management Systems"],
    services: ["M&A Advisory", "Financial Due Diligence", "Valuation Analysis", "Deal Structuring", "Integration Planning"],
    nextSteps: "Continuing engagement for post-merger integration monitoring and evaluation of additional bolt-on acquisition opportunities to further strengthen market position."
  },
  {
    slug: "retail-chain-restructuring",
    company: "RetailMax Inc",
    industry: "Retail & Consumer Goods",
    challenge: "A regional retail chain faced declining profitability and needed comprehensive financial restructuring and capital structure optimization to restore financial health.",
    solution: "We conducted detailed financial analysis, developed turnaround strategy, restructured debt, and implemented working capital optimization initiatives.",
    results: [
      { metric: "EBITDA Improvement", value: "-$2.1M → +$4.3M" },
      { metric: "Debt Reduction", value: "$18M → $8M" },
      { metric: "Working Capital", value: "Improved by $5.2M" }
    ],
    timeline: "12 months",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop&auto=format",
    overview: "RetailMax Inc is a multi-location retail chain requiring urgent financial restructuring to address deteriorating profitability and overleveraged balance sheet.",
    clientBackground: "RetailMax operates 25 retail locations across three states with $85M annual revenue. Following aggressive expansion funded by debt, the company faced declining same-store sales, rising operating costs, and mounting debt service burden threatening business viability.",
    detailedChallenge: "Critical challenges included: negative EBITDA and unsustainable debt levels requiring immediate action, working capital constraints limiting operational flexibility, underperforming locations draining corporate resources, lack of financial visibility and management reporting, and strained banking relationships requiring debt restructuring negotiations.",
    approach: [
      "Comprehensive financial and operational assessment",
      "Cash flow analysis and 13-week cash flow forecasting",
      "Working capital optimization program",
      "Debt restructuring and refinancing strategy",
      "Profitability improvement initiatives"
    ],
    implementation: [
      {
        phase: "Financial Assessment & Stabilization",
        duration: "2 months",
        activities: [
          "Conducted rapid financial health assessment",
          "Implemented 13-week rolling cash flow forecasting",
          "Identified immediate cost reduction opportunities ($1.5M)",
          "Established daily cash management protocols",
          "Negotiated temporary covenant relief with lenders"
        ]
      },
      {
        phase: "Operational Analysis & Strategy",
        duration: "3 months",
        activities: [
          "Performed location-by-location profitability analysis",
          "Assessed supply chain and inventory management",
          "Evaluated organizational structure and overhead costs",
          "Developed turnaround strategy and financial projections",
          "Prioritized initiatives by impact and feasibility"
        ]
      },
      {
        phase: "Debt Restructuring",
        duration: "4 months",
        activities: [
          "Analyzed capital structure and refinancing alternatives",
          "Prepared detailed lender presentation materials",
          "Negotiated debt restructuring with existing lenders",
          "Secured new working capital facility with improved terms",
          "Closed refinancing transaction and reduced total debt"
        ]
      },
      {
        phase: "Performance Improvement",
        duration: "3 months (ongoing)",
        activities: [
          "Closed 4 underperforming locations",
          "Renegotiated vendor contracts ($800K savings)",
          "Implemented inventory optimization system",
          "Upgraded financial reporting and KPI dashboards",
          "Established monthly financial review cadence"
        ]
      }
    ],
    outcomes: [
      {
        category: "Financial Performance",
        description: "Restored profitability and improved cash generation through comprehensive restructuring and operational improvements.",
        metrics: [
          { metric: "EBITDA", before: "-$2.1M loss", after: "$4.3M profit", improvement: "$6.4M swing" },
          { metric: "Operating Cash Flow", before: "-$1.5M", after: "$3.8M", improvement: "$5.3M improvement" },
          { metric: "Gross Margin", before: "28%", after: "34%", improvement: "6 points expansion" }
        ]
      },
      {
        category: "Balance Sheet Strength",
        description: "Significantly deleveraged balance sheet and improved liquidity position through debt restructuring and working capital optimization.",
        metrics: [
          { metric: "Total Debt", before: "$18M", after: "$8M", improvement: "56% reduction" },
          { metric: "Debt/EBITDA", before: "Negative", after: "1.9x", improvement: "Sustainable level" },
          { metric: "Working Capital", before: "$2.1M", after: "$7.3M", improvement: "$5.2M increase" }
        ]
      },
      {
        category: "Operational Efficiency",
        description: "Streamlined operations and improved unit economics through strategic location optimization and cost management.",
        metrics: [
          { metric: "Store Count", before: "25 locations", after: "21 locations", improvement: "Focus on profitable units" },
          { metric: "Same-Store Sales", before: "-8% decline", after: "+3% growth", improvement: "11 point improvement" },
          { metric: "Operating Expenses", before: "42% of revenue", after: "36% of revenue", improvement: "6 point reduction" }
        ]
      }
    ],
    testimonial: {
      quote: "Facing a financial crisis, we brought in this advisory team to help navigate our restructuring. Their expertise in cash management, debt negotiations, and operational improvements literally saved our business. We're now profitable and positioned for sustainable growth.",
      author: "Sarah Martinez",
      position: "CFO, RetailMax Inc"
    },
    technologies: ["Financial Planning Software", "Cash Flow Management Tools", "Business Intelligence Platforms", "Inventory Management Systems"],
    services: ["Financial Restructuring", "Debt Advisory", "Working Capital Management", "Turnaround Strategy", "Performance Improvement"],
    nextSteps: "Ongoing monthly financial advisory retainer to monitor performance, optimize capital allocation, and support evaluation of strategic growth opportunities including potential acquisition targets."
  },
  {
    slug: "fintech-startup-fundraising",
    company: "FinFlow Technologies",
    industry: "Financial Technology",
    challenge: "An early-stage fintech startup needed to raise Series A funding but lacked investor-ready financial projections and fundraising strategy to attract institutional investors.",
    solution: "We developed comprehensive financial models, prepared investor materials, refined valuation approach, and provided fundraising strategy guidance throughout the capital raise process.",
    results: [
      { metric: "Funding Raised", value: "$12M Series A" },
      { metric: "Valuation", value: "$45M post-money" },
      { metric: "Investor Interest", value: "8 term sheets received" }
    ],
    timeline: "5 months",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
    overview: "FinFlow Technologies is a high-growth fintech startup requiring strategic advisory for Series A fundraising to scale operations and expand market presence.",
    clientBackground: "FinFlow developed an innovative payment processing platform with strong early traction (2,500 clients, $8M revenue run-rate). To capitalize on market opportunity and competitive positioning, the company needed significant capital injection but lacked experience in institutional fundraising.",
    detailedChallenge: "Key challenges included: building credible financial projections that balanced growth ambitions with investor expectations, developing compelling unit economics and cohort analysis to demonstrate business model scalability, establishing appropriate valuation methodology and benchmarking, preparing professional-grade investor presentations and data room materials, and navigating term sheet negotiations and due diligence processes with limited in-house finance expertise.",
    approach: [
      "Financial model development and scenario analysis",
      "Business plan and investor deck creation",
      "Valuation analysis and benchmarking",
      "Investor targeting and outreach strategy",
      "Due diligence preparation and management"
    ],
    implementation: [
      {
        phase: "Financial Planning & Modeling",
        duration: "6 weeks",
        activities: [
          "Built comprehensive 5-year financial model",
          "Developed detailed revenue buildups by product and segment",
          "Created cohort analysis and customer lifetime value models",
          "Established key operating metrics and KPI framework",
          "Prepared multiple scenarios (base, upside, downside cases)"
        ]
      },
      {
        phase: "Valuation & Positioning",
        duration: "3 weeks",
        activities: [
          "Analyzed comparable fintech companies and transactions",
          "Developed valuation framework using multiple methodologies",
          "Established target valuation range with supporting rationale",
          "Identified key value drivers and investment highlights",
          "Prepared responses to common investor objections"
        ]
      },
      {
        phase: "Materials Preparation",
        duration: "4 weeks",
        activities: [
          "Created investor pitch deck (25 slides)",
          "Developed executive summary and business plan",
          "Compiled virtual data room with supporting documents",
          "Prepared detailed financial appendix and supporting schedules",
          "Created management presentation materials"
        ]
      },
      {
        phase: "Fundraising Execution",
        duration: "10 weeks",
        activities: [
          "Identified and prioritized 45 target investors",
          "Managed investor outreach and meeting coordination",
          "Supported management in investor presentations",
          "Facilitated due diligence requests and Q&A",
          "Assisted in term sheet review and negotiation"
        ]
      }
    ],
    outcomes: [
      {
        category: "Fundraising Success",
        description: "Successfully raised Series A funding exceeding target amount with favorable terms from top-tier institutional investors.",
        metrics: [
          { metric: "Capital Raised", before: "$0 target", after: "$12M raised", improvement: "Exceeded $10M goal" },
          { metric: "Valuation", before: "$35M target", after: "$45M post-money", improvement: "29% premium" },
          { metric: "Term Sheets", before: "0", after: "8 received", improvement: "Strong investor interest" }
        ]
      },
      {
        category: "Investor Quality",
        description: "Attracted high-quality institutional investors with relevant sector expertise and value-add capabilities beyond capital.",
        metrics: [
          { metric: "Lead Investor", before: "Unknown", after: "Tier 1 VC firm", improvement: "Brand validation" },
          { metric: "Investor Network", before: "Limited", after: "3 strategic investors", improvement: "Industry connections" },
          { metric: "Board Composition", before: "2 founders", after: "Added 2 experienced operators", improvement: "Enhanced governance" }
        ]
      },
      {
        category: "Business Acceleration",
        description: "Funding enabled accelerated growth plans including team expansion, product development, and market expansion.",
        metrics: [
          { metric: "Runway", before: "6 months", after: "24 months", improvement: "Extended operating horizon" },
          { metric: "Hiring Capacity", before: "25 employees", after: "60 planned (18 months)", improvement: "140% team growth" },
          { metric: "Market Expansion", before: "1 region", after: "3 regions planned", improvement: "Geographic growth" }
        ]
      }
    ],
    testimonial: {
      quote: "As first-time founders, we had no experience raising institutional capital. This team guided us through every step of the process—from building our financial model to negotiating term sheets. We raised more than we expected at a better valuation with ideal investors. Worth every penny.",
      author: "Michael Zhang",
      position: "Co-Founder & CEO, FinFlow Technologies"
    },
    technologies: ["Financial Modeling Tools", "Pitch Deck Software", "Virtual Data Rooms", "Cap Table Management", "Investor CRM"],
    services: ["Fundraising Advisory", "Financial Modeling", "Valuation Analysis", "Investor Relations", "Due Diligence Support"],
    nextSteps: "Engaged for ongoing CFO advisory services to support post-fundraising growth phase including hiring finance team, implementing financial systems, and preparing for Series B fundraising in 18-24 months."
  },
  {
    slug: "healthcare-compliance-risk",
    company: "MedCare Systems",
    industry: "Healthcare Services",
    challenge: "A healthcare services provider faced regulatory compliance gaps and needed comprehensive risk assessment and internal controls framework to meet evolving regulatory requirements.",
    solution: "We conducted enterprise-wide risk assessment, designed compliance framework, implemented internal controls, and established ongoing monitoring processes.",
    results: [
      { metric: "Compliance Gaps Remediated", value: "23 of 23 identified" },
      { metric: "Audit Findings", value: "Zero material weaknesses" },
      { metric: "Risk Score", value: "High → Low risk rating" }
    ],
    timeline: "9 months",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&auto=format",
    overview: "MedCare Systems is a regional healthcare provider requiring comprehensive compliance and risk management framework to address regulatory requirements and operational risks.",
    clientBackground: "MedCare operates 12 healthcare facilities with $150M annual revenue and 800 employees. Following rapid growth and regulatory changes, the organization identified significant compliance gaps and internal control deficiencies requiring immediate remediation to avoid potential penalties and reputational damage.",
    detailedChallenge: "Critical challenges included: fragmented compliance processes across facilities with inconsistent application of policies, inadequate documentation of internal controls and compliance activities, limited risk assessment capabilities and enterprise risk visibility, outdated policies and procedures not reflecting current regulations, and insufficient training and awareness of compliance requirements among staff.",
    approach: [
      "Enterprise risk assessment and gap analysis",
      "Compliance framework design and implementation",
      "Internal controls documentation and testing",
      "Policy and procedure development",
      "Training program and change management"
    ],
    implementation: [
      {
        phase: "Risk Assessment & Gap Analysis",
        duration: "2 months",
        activities: [
          "Conducted enterprise-wide risk assessment across all facilities",
          "Identified 23 compliance gaps and control deficiencies",
          "Assessed current state of policies and procedures",
          "Interviewed key stakeholders and reviewed documentation",
          "Prioritized remediation activities by risk level"
        ]
      },
      {
        phase: "Framework Design",
        duration: "2 months",
        activities: [
          "Designed comprehensive compliance management framework",
          "Developed risk assessment methodology and tools",
          "Created internal controls documentation standards",
          "Established governance structure and reporting protocols",
          "Defined roles and responsibilities across organization"
        ]
      },
      {
        phase: "Implementation & Remediation",
        duration: "4 months",
        activities: [
          "Remediated all 23 identified compliance gaps",
          "Implemented new internal controls across key processes",
          "Updated 45+ policies and procedures",
          "Deployed compliance management software",
          "Established monitoring and testing protocols"
        ]
      },
      {
        phase: "Training & Sustainability",
        duration: "1 month (ongoing)",
        activities: [
          "Developed comprehensive training curriculum",
          "Conducted training sessions for 800+ employees",
          "Created ongoing compliance education program",
          "Established annual risk assessment cycle",
          "Implemented continuous improvement process"
        ]
      }
    ],
    outcomes: [
      {
        category: "Compliance & Risk",
        description: "Achieved comprehensive compliance with regulatory requirements and significantly reduced enterprise risk profile.",
        metrics: [
          { metric: "Compliance Gaps", before: "23 identified", after: "0 remaining", improvement: "100% remediation" },
          { metric: "Risk Rating", before: "High risk", after: "Low risk", improvement: "Two-level reduction" },
          { metric: "Control Testing", before: "Not performed", after: "100% tested annually", improvement: "Ongoing assurance" }
        ]
      },
      {
        category: "Operational Excellence",
        description: "Improved operational efficiency and standardization through implementation of consistent policies and procedures.",
        metrics: [
          { metric: "Policies & Procedures", before: "Outdated/incomplete", after: "45+ updated documents", improvement: "Current & comprehensive" },
          { metric: "Process Standardization", before: "Varies by facility", after: "Standardized across 12 sites", improvement: "Consistency achieved" },
          { metric: "Documentation Quality", before: "Inadequate", after: "Meets audit standards", improvement: "Professional-grade" }
        ]
      },
      {
        category: "Regulatory Outcomes",
        description: "Successfully passed external audits with no material findings and strengthened regulatory relationships.",
        metrics: [
          { metric: "External Audit Results", before: "3 material weaknesses", after: "0 material weaknesses", improvement: "Clean audit opinion" },
          { metric: "Regulatory Inquiries", before: "2 pending", after: "Successfully resolved", improvement: "Closed all matters" },
          { metric: "Staff Compliance Training", before: "45% completion", after: "98% completion", improvement: "53 point increase" }
        ]
      }
    ],
    testimonial: {
      quote: "The compliance and risk advisory services we received were transformative for our organization. The team not only identified our gaps but worked alongside us to build sustainable solutions. We now have confidence in our compliance posture and strong controls that protect our patients and our business.",
      author: "Dr. Jennifer Wu",
      position: "Chief Compliance Officer, MedCare Systems"
    },
    technologies: ["Compliance Management Software", "Risk Assessment Tools", "Policy Management Systems", "Training Platforms", "Audit Management"],
    services: ["Compliance Advisory", "Enterprise Risk Management", "Internal Controls", "Regulatory Compliance", "Training & Education"],
    nextSteps: "Continuing annual risk assessment engagement and ongoing compliance advisory retainer to maintain compliance framework, monitor regulatory changes, and support expansion into new service lines and geographic markets."
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.slice(0, 3);
}
