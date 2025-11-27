export interface CaseStudy {
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  image: string;
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
    slug: "sunrise-bay-resort-relaunch",
    company: "Sunrise Bay Resort",
    industry: "Luxury Coastal Resort",
    challenge:
      "After completing an 18-month renovation, Sunrise Bay Resort in Seminyak, Bali needed to reignite high-net-worth travelers' and international creators' attention within 6 weeks while driving premium summer bookings.",
    solution:
      "Launched the 'Every Hour is Golden' campaign, combining magazine-quality travel photography, creator residency programs, AI-driven full-funnel advertising, and immersive on-ground experiences—creating a closed loop of content, creators, and advertising.",
    results: [
      { metric: "Campaign Reach", value: "120M+ cross-platform impressions" },
      { metric: "Booking Growth", value: "+210% MoM" },
      { metric: "Average Daily Rate (ADR)", value: "+18%" },
    ],
    timeline: "6 weeks",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop&auto=format",
    overview:
      "Sunrise Bay Resort is a 220-room beachfront luxury resort featuring French-inspired design, targeting affluent travelers aged 28–45 and global content creators.",
    clientBackground:
      "The brand historically relied on traditional travel agencies and OTAs, with fragmented digital channels. Post-renovation, the resort added 32 beachfront pool villas and art installations, requiring a relaunch campaign that balanced brand elevation with conversion.",
    detailedChallenge:
      "How to attract high-net-worth travelers, increase brand premium, and activate international creators in a short timeframe was the core challenge.\n- Brand tone upgrade required more magazine-quality content expression\n- International traveler return necessitated bilingual narratives and multilingual subtitles\n- Needed to prove new experiences could drive higher room rates and longer stays\n- Budget concentrated in 6 weeks demanded rapid iteration and real-time monitoring\n- Internal team needed to master replicable methods to support year-round campaigns",
    approach: [
      "Designed 4 storylines around 'golden moments' covering sunrise, afternoon tea, sunset, and midnight party scenes",
      "Established creator residency program, inviting 16 travel photographers and lifestyle bloggers for co-creation",
      "Leveraged WanderAds AI Studio to generate multilingual copy, asset scoring, and intelligent ad recommendations",
      "Synchronized launch across Douyin, Xiaohongshu, Instagram, YouTube, and OTA spotlight placements",
      "Deployed immersive experience routes and photo-ready installations within the resort to extend dwell time",
    ],
    implementation: [
      {
        phase: "Brand Story Lab",
        duration: "1 week",
        activities: [
          "Workshop with management and designers to co-create theme keywords",
          "Competitive & behavioral research, output traveler personas",
          "Finalized 4 hero storylines and content pillars",
          "Developed shooting scripts, scene guides, lighting, and styling handbook",
        ],
      },
      {
        phase: "Immersive Photography",
        duration: "2 weeks",
        activities: [
          "Tri-camera sync shooting + FPV drone + underwater footage",
          "AI asset management: real-time upload, auto-tagging, and scoring",
          "Multilingual subtitles, vertical/horizontal adaptation, output 120+ assets",
          "Built pop-up sets on villas and beach for guest photography",
        ],
      },
      {
        phase: "Creator Residency Program",
        duration: "2 weeks",
        activities: [
          "Invited 16 creators to 4-day co-creation camp with scripts and storylines",
          "Organized livestreams, salons, and night tours with synchronized ad warm-up",
          "Partnered with local tourism board for media FAM trip",
          "Built content co-creation studio, output 48 articles and 32 vlogs",
        ],
      },
      {
        phase: "Media & Data Operations",
        duration: "3 weeks",
        activities: [
          "Synchronized launch across Douyin, Xiaohongshu, Instagram, YouTube, OTA spotlight",
          "AI ad recommendations dynamically adjusted budget and targeting",
          "Integrated CRM & membership system to track booking behavior",
          "Daily briefs + weekly reviews to guide secondary distribution",
        ],
      },
    ],
    outcomes: [
      {
        category: "Content & Reach",
        description: "Magazine-quality photography + creator content built breakout assets.",
        metrics: [
          { metric: "Cross-platform impressions", before: "18M", after: "120M", improvement: "6.6x" },
          { metric: "UGC topic volume", before: "3.2K", after: "29K", improvement: "9x" },
          { metric: "Creator participation", before: "6/quarter", after: "32/quarter", improvement: "5.3x" },
        ],
      },
      {
        category: "Commercial Conversion",
        description: "Premium suites and extended-stay products showed significant performance.",
        metrics: [
          { metric: "ADR", before: "$355", after: "$420", improvement: "+18%" },
          { metric: "Average stay duration", before: "2.1 days", after: "3.4 days", improvement: "+62%" },
          { metric: "Direct booking share", before: "28%", after: "46%", improvement: "+18pt" },
        ],
      },
      {
        category: "Brand Sentiment",
        description: "Social listening and NPS scores showed significant improvement.",
        metrics: [
          { metric: "Brand favorability", before: "68%", after: "91%", improvement: "+23pt" },
          { metric: "NPS", before: "34", after: "56", improvement: "+22" },
          { metric: "Media coverage", before: "4 articles", after: "19 articles", improvement: "4.7x" },
        ],
      },
    ],
    testimonial: {
      quote:
        "WanderAds seamlessly integrated photography, creators, and advertising. For the first time, we saw hotel content that looked like a fashion editorial while driving real booking data.",
      author: "Lina Ortega",
      position: "General Manager, Sunrise Bay Resort",
    },
    technologies: [
      "WanderAds AI Studio",
      "Creator CRM",
      "Content Asset Cloud",
      "Real-time Marketing Dashboard",
    ],
    services: [
      "Travel Content Studio",
      "Creator/KOL Co-creation",
      "Full-Funnel Advertising",
      "AI Copywriting & Asset Scoring",
    ],
    nextSteps:
      "Planning to extend 'Golden Hour' campaign to Tokyo, Phuket, and Maldives in 2025, continuously building membership assets.",
  },
  {
    slug: "heritage-night-festival",
    company: "Prague Old Town Tourism Board",
    industry: "City Tourism Board",
    challenge:
      "A historic European city wanted to activate younger demographics through a night festival while preserving cultural heritage, trending on social video platforms, and boosting revenue for old town merchants.",
    solution:
      "Created 'Prague Starlit Nights' themed festival, combining immersive light projections, river cruises, AR navigation, and creator check-in routes, with AI-powered data optimization for on-site operations and advertising.",
    results: [
      { metric: "Weekend Visitors", value: "284K attendees" },
      { metric: "Night Economy", value: "+3.2x YoY" },
      { metric: "Online Leads", value: "12,000+ city break inquiries" },
    ],
    timeline: "8 weeks",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&h=900&fit=crop&auto=format",
    overview:
      "Prague Old Town is famous for its cobblestone squares and riverside heritage, home to 1,400+ independent merchants. The tourism board aimed to boost off-season visits and spending through night tourism.",
    clientBackground:
      "Traditional marketing approaches were static with insufficient social media presence. The city wanted to experiment with creator collaborations and technology to attract Gen Z and family audiences.",
    detailedChallenge:
      "Needed to transform old town heritage into modern experiences within a limited budget while ensuring crowd flow and safety.\n- Content must balance historical authenticity with contemporary appeal\n- Activity routes need to accommodate families and photography enthusiasts\n- Required real-time monitoring of foot traffic and spending for quick adjustments\n- Multi-department coordination needed clear scripts and rehearsals\n- Post-event needed to establish replicable methodology",
    approach: [
      "Conducted sound, lighting, and storytelling surveys of old town districts, forming 5 night tour routes",
      "Used projections and interactive installations to recreate heritage memories, creating photo-worthy spots",
      "Invited 40 creators to form 'Night Hunters' alliance, pre-scouting for co-creation",
      "AI control center connected cameras and payment data for real-time insights on foot traffic, spending, and sentiment",
      "Co-created night market menus and co-branded merchandise with local merchants to extend dwell time",
    ],
    implementation: [
      {
        phase: "Insights & Route Design",
        duration: "2 weeks",
        activities: [
          "Surveyed 100 visitors for night tour needs and pain points",
          "Proposed 5 themed routes: Starlight, Fireworks, Old Lanes, Family, Music",
          "Mapped immersive installation distribution and visitor flow",
          "Developed creator scripts and photo spot locations",
        ],
      },
      {
        phase: "Content Production & Installation Setup",
        duration: "3 weeks",
        activities: [
          "Built waterfront light theater and interactive floating lanterns",
          "Created AR navigation mini-app and task cards",
          "Shot night tour themed videos and photo content",
          "Trained volunteers and merchants on storylines",
        ],
      },
      {
        phase: "Creator Co-creation & Launch",
        duration: "2 weeks",
        activities: [
          "Invited creators in batches for experiences with lighting and camera setups",
          "Livestream rooms featured interactive games and offers",
          "AI copywriting tools helped creators publish in multiple languages",
          "Synchronized deployment with OTAs, video platforms, Douyin, Xiaohongshu",
        ],
      },
      {
        phase: "Real-time Optimization & Review",
        duration: "1 week",
        activities: [
          "Monitored foot traffic, sales, and social heat through data platform",
          "Dynamically adjusted lighting, routes, and performance times",
          "Output merchant operation suggestions and co-branded packages",
          "Created review report and next season planning",
        ],
      },
    ],
    outcomes: [
      {
        category: "Cultural Impact",
        description: "Night tour stories trended across platforms, driving old town brand renewal.",
        metrics: [
          { metric: "Social heat", before: "1.2M topic views", after: "58M", improvement: "48x" },
          { metric: "Media coverage", before: "2 outlets", after: "17 outlets", improvement: "8.5x" },
          { metric: "Travel posts", before: "14/day", after: "188/day", improvement: "13x" },
        ],
      },
      {
        category: "Economic Impact",
        description: "Night foot traffic and average spend increased significantly, high merchant satisfaction.",
        metrics: [
          { metric: "Night visitors", before: "95K", after: "284K", improvement: "+199%" },
          { metric: "Per capita spend", before: "$12", after: "$23", improvement: "+85%" },
          { metric: "Merchant participation", before: "230", after: "612", improvement: "+166%" },
        ],
      },
      {
        category: "Data Capabilities",
        description: "Government and merchants gained real-time dashboards, improving decision efficiency.",
        metrics: [
          { metric: "Incident response time", before: "30 min", after: "8 min", improvement: "-73%" },
          { metric: "Data sources integrated", before: "4", after: "17", improvement: "4.25x" },
          { metric: "Scenario replication", before: "Single event", after: "4 cities", improvement: "New template}" },
        ],
      },
    ],
    testimonial: {
      quote:
        "Creativity, culture, and data were seamlessly integrated here. We saw young people return to the old town, and local merchants learned to operate night economy digitally.",
      author: "Viktor Novak",
      position: "Brand Director, Prague Old Town Tourism Board",
    },
    technologies: [
      "WanderAds Live Monitor",
      "AR Navigation App",
      "AI Copywriting Assistant",
      "Scenario Data Platform",
    ],
    services: [
      "City Integration Strategy",
      "Content & Installation Design",
      "Creator Alliance",
      "AI Data Monitoring",
    ],
    nextSteps: "Night tour template will expand to winter 'Fireworks & Hot Springs Festival' and international tours.",
  },
  {
    slug: "skyrail-adventure-livestream",
    company: "SkyRail Adventure",
    industry: "Mountain Scenic Railway",
    challenge:
      "A mountain scenic railway launching new panoramic glass carriages and travel photography services needed livestreaming and creator partnerships to attract young backpackers and improve weekday occupancy rates.",
    solution:
      "Launched 'Alpine Trails' livestream season, combining FPV perspectives, creator co-creation, AI asset scoring, and OTA integration to make the train journey a social media phenomenon.",
    results: [
      { metric: "Livestream Views", value: "9.6M+" },
      { metric: "Weekday Occupancy", value: "45% → 87%" },
      { metric: "Merchandise Sales", value: "+310%" },
    ],
    timeline: "5 weeks",
    image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?w=1600&h=900&fit=crop&auto=format",
    overview:
      "SkyRail Adventure is a 54km mountain scenic railway traversing cloud seas, valleys, and alpine villages, offering a 'slow travel' experience through the Swiss Alps.",
    clientBackground:
      "After launching premium carriages with 30% price increase, market awareness was insufficient. Team lacked livestreaming and content experience, requiring external support.",
    detailedChallenge:
      "Moving train had unstable signals and filming challenges requiring safety considerations; needed to prove content could directly drive ticket sales.\n- Required portable livestreaming system\n- Travel content must be delivered to channels within 24 hours\n- Partner creators must align with brand tone\n- OTA listing needed to coordinate with early bird/journey products\n- Data needed to feedback to scheduling and customer service",
    approach: [
      "Built mobile 5G outdoor livestreaming system, combining on-board and route-side camera positions",
      "Co-created with 12 outdoor and tech creators, providing exclusive routes and scripts",
      "AI asset scoring system real-time identifies best shots to guide secondary editing",
      "OTA, video platforms, and Douyin synchronized sales, bundling new packages with commemorative merchandise",
      "Used journey data to monitor ticket buyer demographics and dynamic pricing",
    ],
    implementation: [
      {
        phase: "Script & Technical Rehearsal",
        duration: "1 week",
        activities: [
          "On-site route survey, recording key scenic timepoints",
          "Deployed 5G relay and drone no-fly zone plans",
          "Wrote livestream and creator scripts, clarified CTAs",
          "Coordinated with OTAs on inventory and promotional strategies",
        ],
      },
      {
        phase: "Travel Photography Production",
        duration: "1 week",
        activities: [
          "Shot multi-angle footage of interiors, route, camps, and stops",
          "Used AI tools to auto-generate covers, subtitles, titles",
          "Built asset library for brands and creators to use quickly",
        ],
      },
      {
        phase: "Livestream Season & Creator Co-creation",
        duration: "2 weeks",
        activities: [
          "Arranged 6 cross-platform livestreams combining aerial + window perspectives",
          "Creators relayed at different stops, showcasing camping, coffee, craft experiences",
          "AI monitored comments and conversions, timely guided ticket and merchandise purchases",
        ],
      },
      {
        phase: "Review & Product Optimization",
        duration: "1 week",
        activities: [
          "Output audience personas, popular routes, dwell preferences",
          "Launched weekday-exclusive carriages and family-specific trains",
          "Trained internal team to use AI tools and livestream SOPs",
        ],
      },
    ],
    outcomes: [
      {
        category: "Exposure & Reach",
        description: "Train journey became popular content theme, continuously attracting user-generated content.",
        metrics: [
          { metric: "Livestream views", before: "0", after: "9.6M", improvement: "New channel" },
          { metric: "UGC volume", before: "18/day", after: "240/day", improvement: "13x" },
          { metric: "Follower growth", before: "3K/month", after: "48K/month", improvement: "16x" },
        ],
      },
      {
        category: "Revenue Performance",
        description: "Weekday trains and merchandise sales significantly improved.",
        metrics: [
          { metric: "Weekday occupancy", before: "45%", after: "87%", improvement: "+42pt" },
          { metric: "Premium carriage share", before: "12%", after: "34%", improvement: "+22pt" },
          { metric: "Merchandise sales", before: "$26K", after: "$105K", improvement: "+310%" },
        ],
      },
      {
        category: "Operational Capabilities",
        description: "Team mastered livestreaming and AI tools, capable of independent replication.",
        metrics: [
          { metric: "Asset delivery time", before: "72 hours", after: "18 hours", improvement: "-75%" },
          { metric: "Internal livestream events", before: "0", after: "4/quarter", improvement: "New norm" },
          { metric: "OTA conversion rate", before: "1.8%", after: "4.6%", improvement: "+2.8pt" },
        ],
      },
    ],
    testimonial: {
      quote:
        "They made complex mountain livestreaming as controllable as building blocks. AI tools let us use data to guide routes, pricing, and content for the first time.",
      author: "Marco Schmidt",
      position: "Marketing Director · SkyRail Adventure",
    },
    technologies: [
      "Mobile 5G Livestream Pod",
      "WanderAds AI Studio",
      "OTA Data API",
      "Creator Collaboration Kit",
    ],
    services: [
      "Content & Livestream Production",
      "Creator Network Management",
      "Full-Funnel Deployment Strategy",
      "AI Data Insights",
    ],
    nextSteps: "Planning to launch ski-themed trains in winter, extending more experience products.",
  },
  {
    slug: "island-tourism-board-ai-hub",
    company: "Coral Isles Tourism Board",
    industry: "National Tourism Organization",
    challenge:
      "Coral Isles wanted to build an AI marketing hub covering Southeast Asia and key international markets, unifying content, creators, and media resources while training internal teams to enable year-round campaign coordination.",
    solution:
      "Built WanderAds Destination Lab, including data platform, AI copywriting and asset scoring, creator CRM, and multilingual content production line, supported by quarterly co-creation workshops and on-ground events.",
    results: [
      { metric: "Market Coordination", value: "6 markets unified launch" },
      { metric: "Potential Leads", value: "34K+ brand inquiries" },
      { metric: "Media Efficiency", value: "+42% ROI" },
    ],
    timeline: "12 weeks",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1600&h=900&fit=crop&auto=format",
    overview:
      "Coral Isles is an emerging island destination with 8 major islands and 120 luxury hotels, needing to rapidly build international recognition in the post-pandemic phase.",
    clientBackground:
      "Team spread across Jakarta, Singapore, Shanghai, and Sydney, using different agencies and tools with inconsistent content and no data sharing, affecting efficiency and brand consistency.",
    detailedChallenge:
      "Needed to build a unified marketing operating system in a short time, serving both brand teams and hotel/attraction partners.\n- Lacked unified content guidelines and asset center\n- Creator collaborations were fragmented without performance data\n- Media budgets dispersed, unable to adjust in real-time\n- Needed to deliver visualization reports to government level\n- Simultaneously needed to train internal team to master new tools",
    approach: [
      "Built Destination Lab data platform, integrating OTA, social, CRM, and media data",
      "Deployed AI copywriting, asset scoring, ad recommendations and other tools, supporting multilingual output",
      "Established global creator library and collaboration workflow, providing content templates and benefits system",
      "Ran quarterly campaigns: island residency photography, diving season, New Year island-hopping carnival, etc.",
      "Designed capability training program to ensure internal team can operate independently",
    ],
    implementation: [
      {
        phase: "Baseline Assessment",
        duration: "2 weeks",
        activities: [
          "Surveyed content, media, and data assets across 4 markets",
          "Defined KPIs, data metric standards, and security requirements",
          "Mapped partner hotel/attraction assets and benefits",
        ],
      },
      {
        phase: "Destination Lab Setup",
        duration: "4 weeks",
        activities: [
          "Deployed data platform and AI Studio, integrated 12 data sources",
          "Built asset library and multilingual templates",
          "Developed creator CRM to track performance and rights",
        ],
      },
      {
        phase: "First Campaign Launch",
        duration: "4 weeks",
        activities: [
          "Ran '72-Hour Island Stay' theme, inviting 24 creators",
          "Multilingual media mix: Douyin, Xiaohongshu, TikTok, YouTube, Meta",
          "AI deployment console real-time optimized budget and targeting",
        ],
      },
      {
        phase: "Training & Handover",
        duration: "2 weeks",
        activities: [
          "Designed 6 training sessions covering AI tools, content SOPs, data interpretation",
          "Co-created annual event calendar with hotel partners",
          "Output governance handbook and KPI dashboard templates",
        ],
      },
    ],
    outcomes: [
      {
        category: "Coordination Efficiency",
        description: "Cross-market content and media launched in same week, saving significant communication costs.",
        metrics: [
          { metric: "Asset reuse rate", before: "18%", after: "71%", improvement: "+53pt" },
          { metric: "Approval cycle", before: "10 days", after: "3 days", improvement: "-70%" },
          { metric: "Creator response", before: "7 days", after: "36 hours", improvement: "-78%" },
        ],
      },
      {
        category: "Conversion Performance",
        description: "AI-driven media strategy delivered higher ROI and leads.",
        metrics: [
          { metric: "Overall ROI", before: "1.8", after: "2.56", improvement: "+42%" },
          { metric: "Brand inquiries", before: "8.4K", after: "34K", improvement: "4x" },
          { metric: "Hotel package sales", before: "$1.7M", after: "$2.8M", improvement: "+62%" },
        ],
      },
      {
        category: "Organizational Capability",
        description: "Team mastered tools and SOPs, capable of running next season independently.",
        metrics: [
          { metric: "Internal active users", before: "0", after: "68", improvement: "Full adoption" },
          { metric: "Training satisfaction", before: "-", after: "4.8/5", improvement: "New metric" },
          { metric: "Partner hotel participation", before: "25%", after: "64%", improvement: "+39pt" },
        ],
      },
    ],
    testimonial: {
      quote:
        "Destination Lab gave us our own marketing operating system. AI tools and creator network brought our global team into the same rhythm.",
      author: "Patricia Gomez",
      position: "VP Marketing · Coral Isles Tourism Board",
    },
    technologies: [
      "Destination Lab Data Platform",
      "WanderAds AI Studio",
      "Creator CRM",
      "Media Intelligence Dashboard",
    ],
    services: [
      "Integration Strategy Consulting",
      "AI Tool Deployment",
      "Content & Creator Management",
      "Full-Funnel Campaign Operations",
    ],
    nextSteps:
      "Planning to extend Destination Lab to local hotels and experience providers, forming island business alliance.",
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
