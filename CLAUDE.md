# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clean energy consulting company website targeting solar, wind, storage, and hydrogen companies. Built with Next.js 14 App Router, featuring Cal.com booking integration and WebGL 3D effects. Core business model: B2B consulting for technology breakthroughs, market expansion, and sustainable growth.

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
  - **ComplianceDisclaimer** (new, legal required) ⚠️ Currently untracked
  - Services, Process, Case Studies
  - Featured Content, Testimonials, CTA

## Key Components

**New Components**:
- [components/compliance-disclaimer.tsx](components/compliance-disclaimer.tsx) ⚠️ **UNTRACKED FILE**
  - Legal disclaimer for advisory services
  - Clarifies no investment management/fund handling
  - Uses `lucide-react` AlertTriangle icon
  - **MUST BE COMMITTED** - Critical for legal compliance

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

**⚠️ CRITICAL ISSUES**:

1. **Uncommitted Changes (13 files modified)**:
   - Multiple core files modified but not committed
   - Risk of data loss if not committed soon
   - Files affected: `app/cookies/page.tsx`, `app/layout.tsx`, `app/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, and 8 component files
   - **ACTION REQUIRED**: Commit changes ASAP

2. **Untracked Legal Compliance Component**:
   - [components/compliance-disclaimer.tsx](components/compliance-disclaimer.tsx) is critical for legal compliance
   - Currently untracked and not in version control
   - **ACTION REQUIRED**: Git add and commit immediately

3. **File Naming Consistency** ✅ RESOLVED:
   - Previously `contact sections.tsx` had a space in filename
   - Now renamed to `contact-sections.tsx` following kebab-case convention
   - Consistent with other component naming patterns

4. **Demo Credentials Still Active**:
   - Cal.com still using demo account `"chat-with-manu-demo"`
   - **MUST UPDATE** before production deployment
   - Update [constants/links.ts](constants/links.ts) with real credentials

**WebGL Performance**:
- Prism component is GPU-intensive
- Dark mode default ensures better visibility of 3D effects
- Use `suspendWhenOffscreen` for performance optimization
- May cause performance issues on low-end devices

**Build Process**:
- Static export configured (generates `/out` directory)
- Cal.com embed requires client-side JavaScript (no SSR)
- Images must be unoptimized for static export
- TypeScript strict mode enabled

## Tailwind Configuration

**Custom Extensions**:
- Custom box shadows: `derek`, `input`
- Color variables plugin generates CSS custom properties
- Dark mode class-based strategy (`class` strategy)
- Custom gradient backgrounds

**Important Classes**:
- Use `dark:` prefixes extensively due to dark mode default
- Custom shadow utilities for consistent design system

## Recent Changes (Last 5 Commits)

1. `03b3157` - 🔧 修复Next.js Image组件弃用属性警告
2. `47b0c81` - 🔧 更新域名和业务规模调整
3. `2ced35d` - 🎨 全面优化网站内容与用户体验
4. `510c491` - 🔧 更新Logo组件和图片
5. `3fc7e5c` - 🎨 统一CTA按钮样式设计

## Action Items for Production Readiness

- [x] ~~**URGENT**: Commit all 13 modified files~~ ✅ DONE
- [x] ~~**URGENT**: Add and commit `compliance-disclaimer.tsx`~~ ✅ DONE
- [x] ~~**RECOMMENDED**: Rename `contact sections.tsx` to remove space~~ ✅ DONE
- [ ] **CRITICAL**: Replace Cal.com demo credentials with production account
- [ ] **RECOMMENDED**: Add TypeScript type checking script
- [ ] **RECOMMENDED**: Consider adding testing framework (Jest/Vitest)
- [ ] **RECOMMENDED**: Add environment variable validation for Cal.com config
