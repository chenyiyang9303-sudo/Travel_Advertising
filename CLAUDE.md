# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate finance consulting company website providing M&A advisory, financial restructuring, risk management, and compliance services. Built with Next.js 14 App Router, featuring Cal.com booking integration and professional gradient backgrounds. Core business model: B2B financial advisory for mid-market companies seeking expert guidance on complex financial decisions.

## Architecture & Tech Stack

**Core Framework**:
- Next.js 14 with App Router (TypeScript)
- React 18 with concurrent features
- Tailwind CSS + Framer Motion v11.3.29
- **Build Mode**: Static Export (`output: 'export'`)

**Key Dependencies**:
- `@calcom/embed-react` ^1.5.0 - Booking system integration
- `@tabler/icons-react` ^3.12.0 - Icon library
- `lucide-react` ^0.429.0 - Additional icon set
- `ogl` ^1.0.11 - WebGL library for 3D Prism effects
- `next-themes` ^0.3.0 - Dark/light mode theming (defaults to dark)
- `next-view-transitions` ^0.3.0 - Page transitions
- `marked` ^16.2.1 - Markdown parsing
- `date-fns` ^4.1.0 - Date utilities
- `react-fast-marquee` ^1.6.5 - Marquee animations
- `react-wrap-balancer` ^1.1.1 - Text balancing
- **Legacy (not actively used)**: `cobe`, `dotted-map`

## Essential Commands

```bash
# Development workflow
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build with type checking + static export to /out
npm run start        # Production server (for testing build)
npm run lint         # ESLint + Next.js linting

# Missing but recommended:
# npm run type-check  # TypeScript validation only
# npm test           # No testing framework configured
```

## Critical Architecture Patterns

**Build Configuration** (`next.config.mjs`):
- Static export enabled (`output: 'export'`)
- Trailing slashes enforced for static hosting
- Image optimization disabled (static export requirement)
- Remote image patterns: `assets.aceternity.com`, `images.unsplash.com`

**Theme System**:
- [app/layout.tsx](app/layout.tsx) - ThemeProvider configuration with `defaultTheme="dark"`
- Dark mode optimized for WebGL 3D effects visibility
- User can toggle via [components/mode-toggle.tsx](components/mode-toggle.tsx)

**Component Organization**:
- Page components in `app/` (App Router)
- Reusable UI in `components/ui/`
- Business components in `components/`
- WebGL components in [components/Prism/](components/Prism/)
- Utilities in [lib/utils.ts](lib/utils.ts)
- Constants in [constants/links.ts](constants/links.ts)

**State Management**:
- React Context for Cal.com integration via [app/hooks/useCalEmbed.ts](app/hooks/useCalEmbed.ts)
- No global state management (no Redux/Zustand)

## Cal.com Integration Architecture

**⚠️ WARNING: DEMO CONFIGURATION DETECTED**

**Current Configuration** (in [constants/links.ts](constants/links.ts)):
- Namespace: `"chat-with-manu-demo"` ⚠️ **STILL USING DEMO ACCOUNT**
- Link: `"manu-arora-vesr9s/chat-with-manu-demo"` ⚠️
- Brand color: `#3b82f6` (blue-500)
- Layout: `"month_view"`

**Hook Implementation**:
- [app/hooks/useCalEmbed.ts](app/hooks/useCalEmbed.ts) - Manages Cal.com embed initialization
- Global flag prevents duplicate initialization
- Async loading with error handling
- Console logging for debugging

**Integration Points**:
- Hero CTA button uses data attributes for Cal.com embed
- Script loaded in [app/layout.tsx](app/layout.tsx) head section

**TODO**: Replace demo Cal.com credentials with production account before launch

## 3D Effects System

**Prism Component** ([components/Prism/Prism.tsx](components/Prism/Prism.tsx)):
- WebGL-based 3D pyramidal prism effect using OGL library
- Animation types: `"rotate"`, `"hover"`, `"3drotate"`
- Configurable parameters: scale, height, baseWidth, glow, hueShift, etc.
- Performance optimized with `suspendWhenOffscreen`

**Current Hero Configuration**:
- Animation: `"3drotate"` (continuous 3D rotation)
- Scale: `2.9`, Height: `3.5`, Base Width: `4.8`
- Color effects: `hueShift={0.16}`, `colorFrequency={1.7}`
- Performance: `suspendWhenOffscreen={true}`

## Content Architecture

**Dynamic Content Data**:
- Blog posts: [lib/blog-data.ts](lib/blog-data.ts) - Article content and metadata
- Case studies: [lib/case-studies-data.ts](lib/case-studies-data.ts) - Client success stories
- Reports: [lib/reports-data.ts](lib/reports-data.ts) - Industry reports

**Page Structure**:
- **Dynamic routes**: `app/blog/[slug]/`, `app/case-studies/[slug]/`, `app/reports/[id]/`
- **Static pages**: about, contact, privacy, terms, cookies, login
- **Home page** ([app/page.tsx](app/page.tsx)):
  - Hero with 3D Prism effect
  - ComplianceDisclaimer (legal required)
  - Services, Process, Case Studies
  - Featured Content, Testimonials, CTA

## Key Components

**Legal & Compliance**:
- [components/compliance-disclaimer.tsx](components/compliance-disclaimer.tsx)
  - Legal disclaimer for advisory services
  - Clarifies no investment management/fund handling
  - Uses `lucide-react` AlertTriangle icon

**Core Components**:
- [components/hero.tsx](components/hero.tsx) - Landing hero with 3D Prism
- [components/services.tsx](components/services.tsx) - Service offerings grid
- [components/navbar.tsx](components/navbar.tsx) - Navigation with theme toggle
- [components/footer.tsx](components/footer.tsx) - Footer with links
- [components/logo.tsx](components/logo.tsx) - Company logo component
- [components/cta.tsx](components/cta.tsx) - Call-to-action sections
- [components/testimonials.tsx](components/testimonials.tsx) - Client testimonials
- [components/features.tsx](components/features.tsx) - Feature highlights
- [components/case-studies.tsx](components/case-studies.tsx) - Case study cards

## Development Gotchas

**⚠️ Cal.com Demo Configuration**:
- Still using demo account `"chat-with-manu-demo"` in [constants/links.ts](constants/links.ts)
- **MUST UPDATE** before production deployment with actual Cal.com credentials
- Update `CALCOM_NAMESPACE` and `CALCOM_LINK` constants

**WebGL Performance**:
- Prism component is GPU-intensive, uses OGL for 3D rendering
- Dark mode default ensures better visibility of 3D effects
- Use `suspendWhenOffscreen` for performance optimization
- May cause performance issues on low-end devices
- Consider fallback for devices without WebGL support

**Build Process**:
- Static export configured (generates `/out` directory)
- Cal.com embed requires client-side JavaScript (no SSR)
- Images must be unoptimized for static export
- TypeScript strict mode enabled
- No trailing slash redirects (static hosting optimization)

## Tailwind Configuration

**Custom Color Palette** ([tailwind.config.ts](tailwind.config.ts)):
- `primary`: Sky blue scale (50-900) - main brand color
- `accent`: Zinc/gray scale (50-900) - neutral colors
- `success`: `#10b981` (emerald)
- `warning`: `#f59e0b` (amber)
- `error`: `#ef4444` (red)

**Custom Typography**:
- Font family: Inter (display + body)
- Display sizes: `display-2xl` (4.5rem) through `display-sm` (1.875rem)
- Tight letter-spacing for display headings (-0.02em to -0.01em)

**Custom Shadows**:
- Standard shadows: `sm`, `md`, `lg`, `xl`
- Special: `soft` (subtle blur), `border` (1px outline effect)

**Custom Animations**:
- `fade-in`: 0.5s opacity transition
- `slide-up`: 0.6s upward slide with opacity
- `scale-in`: 0.4s scale with opacity

**Plugin**: `addVariablesForColors` - Exposes all Tailwind colors as CSS variables (e.g., `var(--primary-500)`)

**Important Classes**:
- Use `dark:` prefixes extensively due to dark mode default
- Custom display font sizes for hero/heading typography

## Recent Changes (Last 5 Commits)

1. `7c07b5f` - 🌐 更新域名：obamconsulting.com → orientblackstone.net
2. `502218b` - 🖼️ 更新团队成员头像SVG文件
3. `246c4ae` - 🖼️ About页面团队头像使用本地SVG文件
4. `33726cd` - 🔄 修正About页面照片：交换廖治华和王雅琪的团队照片
5. `6431e6a` - 🔄 修正SVG头像路径：交换廖治华和王雅琪的头像文件

## Domain Information

**Current Domain**: orientblackstone.net (updated from obamconsulting.com)

## Action Items for Production Readiness

- [ ] **CRITICAL**: Replace Cal.com demo credentials with production account
- [ ] **RECOMMENDED**: Add TypeScript type checking script (`npm run type-check`)
- [ ] **RECOMMENDED**: Consider adding testing framework (Jest/Vitest)
- [ ] **RECOMMENDED**: Add environment variable validation for Cal.com config
