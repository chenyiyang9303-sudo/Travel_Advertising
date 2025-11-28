export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: "travel-marketing" | "ai-tools" | "creator-economy" | "destination-strategy";
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
  { value: "all", label: "All Content" },
  { value: "travel-marketing", label: "Travel Marketing" },
  { value: "ai-tools", label: "AI Tools" },
  { value: "creator-economy", label: "Creator Economy" },
  { value: "destination-strategy", label: "Destination Strategy" },
];

const blogPosts: BlogPost[] = [
  {
    slug: "destination-marketing-playbook-2025",
    title: "2025 Destination Marketing Playbook: Three-Layer Experience, Dual Narratives, One Data Hub",
    excerpt:
      "Redesigning content, creator, and media strategies with an 'experience stack' to help travel brands rise to the top in 2025. This article breaks down the 6 key actions One World Global Travel uses to serve destinations, hotels, and tourism boards.",
    content: `
# 2025 Destination Marketing Playbook

"Fun destination" is no longer enough to occupy travelers' minds. We see successful destinations breaking down experiences into three layers:

1. **Immersion**: Can it put people right in the moment? Think night tours, pop-up installations, interactive technology.
2. **Shareability**: Is it easy to photograph and share? Structured photo spots and scripts are key.
3. **Replicable Activities**: After the event ends, does it leave behind an SOP for easy replication next season?

## Dual Narratives: Brand Line + Real-time Line

The brand line carries the long-term story. For example, "Golden Hour at Sunrise Bay." The real-time line quickly generates content around live trends, weather, flights, holidays, etc. We recommend:

- Use magazine-style content to carry the brand line;
- Use livestreams, short vlogs, and travel updates to carry the real-time line;
- Connect both narratives to the same content asset library and AI tools.

## One Data Hub

Destinations need to consolidate the following data:

- Content performance (asset scoring, UGC hotspots)
- Media and advertising (budget, ROI, audience profiles)
- Transaction leads (OTA, private domain, membership)

Once this data is integrated into dashboards, you can complete the "content-advertising-product" feedback loop within a day.

## Action Checklist

- Build a destination experience map: content, installations, creator task points
- Design creator guidebook: storylines, shooting suggestions, usable music
- Deploy AI Studio: copywriting, multilingual subtitles, asset scoring, advertising recommendations
- Run quarterly campaigns: each season includes 1 flagship event + 2 real-time initiatives

> "Destination marketing is orchestration. Content, creators, and commerce must happen in the same rhythm."`,
    publishDate: "2025-02-10",
    readTime: "8 min",
    category: "destination-strategy",
    featured: true,
    author: {
      name: "Sophie Wang",
      title: "Head of Destination Strategy",
      avatar: "/avatars/liao-zhihua.svg",
      bio: "Leads One World Global Travel destination strategy and experience innovation, with extensive experience across Southeast Asia and Pacific regions.",
    },
    tags: ["Destination", "Experience Design", "Campaign"],
    coverImage:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=900&fit=crop&auto=format",
    seo: {
      metaTitle: "2025 Destination Marketing Playbook | One World Global Travel",
      metaDescription:
        "Learn how One World Global Travel uses experience stacks, dual narratives, and data hubs to help destinations create breakthrough campaigns in 2025.",
      keywords: ["destination marketing", "travel brands", "One World Global Travel", "experience design"],
    },
    relatedPosts: [
      "ai-powered-travel-content-factory",
      "creator-livestream-blueprint",
    ],
  },
  {
    slug: "ai-powered-travel-content-factory",
    title: "AI Travel Content Factory: 9 Nodes from Inspiration to Multilingual Deployment",
    excerpt:
      "From serving 200+ destinations and hotels, we've developed an AI-driven content pipeline that enables teams to complete travel content, copywriting, and deployment versions within 48 hours.",
    content: `
# AI Travel Content Factory

We break content production into 9 nodes:

1. **Traveler Inspiration Input**: Scrape social keywords, FAQs, OTA reviews.
2. **Experience Element Breakdown**: Extract "visual-interactive-service" keyword groups.
3. **Script Generation**: AI auto-outputs Vlog/livestream/short drama scripts with shot lists.
4. **Shot Planning**: Give photographers and creators a shot sequence (wide angle → close-up).
5. **Asset Upload**: Upload footage to cloud library; AI auto-tags and scores.
6. **Multilingual Versions**: Generate Chinese, English, Japanese, Spanish subtitles and covers.
7. **Copy/Hashtags**: Generate titles and tags tailored to platform tone.
8. **Deployment Adaptation**: Auto-output 9:16 / 1:1 / 16:9 versions with CTAs.
9. **Heat Monitoring**: AI pushes top-performing assets to ops team to guide budget scaling.

## Three Practical Tips

- **Templatize**: Design a "content module" for each experience, e.g., "sunset picnic" module includes 5 shots and 3 copy versions.
- **Co-create**: Share these modules with creators, share performance data, improve collaboration efficiency.
- **SaaSify**: Embed tools into WeChat Work or Slack to truly integrate into daily workflow.

After deployment, Sunrise Bay Resort reduced asset delivery time from 72 hours to 18 hours while maintaining consistent brand voice.`,
    publishDate: "2025-01-24",
    readTime: "7 min",
    category: "ai-tools",
    featured: true,
    author: {
      name: "Alex Chen",
      title: "AI Product Lead",
      avatar: "/avatars/lin-zhihua.svg",
      bio: "Leads the One World Global Travel AI Studio team, responsible for copywriting, asset scoring, and advertising recommendation modules.",
    },
    tags: ["AI Studio", "Content Ops", "Automation"],
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop&auto=format",
    seo: {
      metaTitle: "AI Travel Content Factory | One World Global Travel",
      metaDescription:
        "Learn how to build an AI content pipeline covering inspiration, scripts, travel shoots, and deployment.",
      keywords: ["AI content", "travel marketing automation", "travel scripts"],
    },
    relatedPosts: [
      "destination-marketing-playbook-2025",
      "creator-livestream-blueprint",
    ],
  },
  {
    slug: "creator-livestream-blueprint",
    title: "Creator + Livestream + OTA: 12 Details for a High-Converting Travel Livestream",
    excerpt:
      "Livestreaming isn't just about selling—it's real-time experience. We break down the SkyRail Adventure case to see how to achieve 9.6M views and 87% occupancy rate in a mountain region.",
    content: `
# 12 Details for Travel Livestreams

1. **Journey Script**: Includes departure—highlights—interaction—arrival, controlling emotional rhythm.
2. **Camera Setup**: Five combinations: inside car, outside car, drone, host, fill light.
3. **Signal Assurance**: Test base stations along route, set up 5G relay if necessary.
4. **Task Design**: Audience participates in "check-ins" and "voting" to decide next stop, increasing engagement.
5. **Real-time Editing**: AI auto-generates Reels/TikTok clips, published immediately after livestream ends.
6. **Creator Coordination**: Different creators board at different stops, ensuring content diversity.
7. **Benefits Bundle**: Livestream distributes premium cabin upgrades, merch, night tour packages.
8. **Dynamic Reminders**: AI monitors comments and orders, reminds host to answer questions or push sales.
9. **OTA Integration**: Inventory and offers update in real-time to avoid stockouts.
10. **Offline Experience**: Launch pop-ups or night tours during livestream.
11. **Data Dashboard**: Monitor views, orders, source locations; adjust content and offers.
12. **Review Template**: Record best-performing scripts, shots, and offers for easy replication.

Livestreaming is "dynamic content asset." A good livestream continues producing short videos and ad materials for 30 days after, pre-warming the next event.`,
    publishDate: "2024-12-30",
    readTime: "6 min",
    category: "creator-economy",
    featured: false,
    author: {
      name: "Yuki Yamada",
      title: "Creator Partnership Director",
      avatar: "/avatars/chen-jiayin.svg",
      bio: "Manages One World Global Travel' global creator network, specializing in cross-border livestreams and creator collaborations.",
    },
    tags: ["Livestream", "Creators", "Commerce"],
    coverImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1600&h=900&fit=crop&auto=format",
    seo: {
      metaTitle: "High-Converting Travel Livestream Guide | One World Global Travel",
      metaDescription:
        "Analyze the 12 key details needed for a high-converting travel livestream, helping destinations and brands master content rhythm.",
      keywords: ["travel livestream", "creator marketing", "OTA integration"],
    },
    relatedPosts: [
      "ai-powered-travel-content-factory",
      "destination-marketing-playbook-2025",
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);

  if (!currentPost) return [];

  return blogPosts.filter(
    (post) =>
      post.slug !== slug &&
      currentPost.relatedPosts.includes(post.slug)
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}
