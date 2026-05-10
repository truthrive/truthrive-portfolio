# Website Context Pack: TruThrive Portfolio

## 1. Project Overview
- **What this website is about:** A professional portfolio website for Bùi Trường Thịnh, an SEO Specialist. It serves as a central hub to showcase his expertise, case studies, and services.
- **Target Audience:** Business owners, marketing managers, and agency partners looking for high-level SEO services, specifically focusing on Technical SEO, Content Strategy, and SEO Automation.
- **Current Positioning/Personality:** Professional, data-driven, authoritative, and results-oriented. The tagline "True SEO. Sustainable Growth." reinforces a focus on long-term, white-hat SEO success rather than quick hacks.
- **Main Conversion Goal:** Lead generation. Specifically, driving users to the "Request SEO Audit" form or the "Contact" page for collaboration.

## 2. Tech Stack
- **Framework:** Astro (v6.3.1). The project uses Astro as a static site generator for maximum performance and zero-JS-by-default architecture.
- **Styling Approach:** Vanilla CSS with custom CSS variables (Design Tokens) stored in `src/styles/global.css`. No external CSS frameworks (like Tailwind or Bootstrap) are used.
- **Routing Structure:** File-based routing via Astro's `src/pages/` directory.
- **Package/Dependency Overview:** Minimal dependencies. The project relies purely on `astro` and its built-in features, keeping the node_modules extremely light. Node >= 22.12.0 is required.
- **Build/Dev Commands:**
  - `npm run dev` (starts the local development server)
  - `npm run build` (generates the static production bundle)
  - `npm run preview` (previews the production build locally)

## 3. Project Structure
- **Important Folders and Files:**
  - `astro.config.mjs`: Main configuration file for Astro.
  - `src/pages/`: Contains the routes of the website (e.g., `index.astro`).
  - `src/components/`: Reusable UI components (Header, Footer, SEOHead).
  - `src/layouts/`: Base HTML wrappers (BaseLayout).
  - `src/styles/`: Global stylesheets and CSS variables.
  - `src/assets/`: Directory for static assets.
- **Main Entry Files:** `src/pages/index.astro` is the homepage.
- **Layouts:** `BaseLayout.astro` defines the HTML skeleton, injecting `<SEOHead />`, `<Header />`, `<main>`, and `<Footer />`.

## 4. Website Structure (Homepage - `index.astro`)
- **Hero Section:**
  - **Purpose:** Above-the-fold introduction and value proposition.
  - **Current Content:** Introduces Bùi Trường Thịnh, focusing on Technical SEO, Content Strategy, and Automation. Includes a "Profile Snapshot" card with key stats (4+ years experience, 10+ projects).
  - **Components Used:** Built inline using custom HTML/CSS and base design tokens.
- **Trust Metrics Section:**
  - **Purpose:** Build immediate credibility using data.
  - **Current Content:** 4 data points (e.g., 66k+ traffic for DOL Grammar, 125k+ for GTVSEO).
  - **Key UI Elements:** Vanilla JS animated number counters triggered via `IntersectionObserver`.
- **Featured Case Study:**
  - **Purpose:** Highlight the most successful or representative project.
  - **Current Content:** "Suối Tiên SEO Case Study" (Domain Migration & Tourism SEO). Displays impact metrics (e.g., +236% KPI Top 3).
- **Core Expertise:**
  - **Purpose:** Detail the specific services offered.
  - **Current Content:** 8 cards covering topics like Technical SEO Audit, Content Audit, Entity SEO, and SEO Automation.
- **Working Approach:**
  - **Purpose:** Explain the methodology to prospective clients.
  - **Current Content:** 4-step process (Audit & Diagnosis → Strategy & Prioritization → Execution → Measurement & Iteration).
- **About Preview:**
  - **Purpose:** A brief personal introduction linking to the full About page.
  - **Key UI Elements:** "Profile Snapshot" card with skill chips and location data.
- **Final CTA:**
  - **Purpose:** Bottom-of-page conversion point.
  - **Current Content:** "Sẵn sàng tăng trưởng organic traffic?" with buttons to contact or request an audit.

## 5. Design System
- **Color Palette:**
  - Background: Warm light beige (`#FFF8F0`)
  - Text: Dark slate (`#111827`) for high contrast.
  - Accents: Deep red (`#C1121F`) and dark red (`#991B1B`).
  - Surface/Card: Pure white (`#FFFFFF`)
  - Muted Sections: Slightly darker beige (`#F3E9DD`)
  - Footer: Dark mode aesthetic (`#111827` bg, `#FFF8F0` text).
- **Typography:** Uses `Inter` (Google Fonts) with system fallbacks. Fluid typography using `clamp()` for responsive headings.
- **Spacing/Layout Patterns:** 
  - Standard section padding: `88px` desktop, `64px` mobile.
  - CSS Grid with a `24px` standard gap.
- **Button Styles:** 
  - Primary (`.btn-primary`): Solid deep red with white text.
  - Secondary (`.btn-secondary`): Transparent with deep red border and text.
  - Interactions: Buttons lift slightly (`translateY(-2px)`) on hover.
- **Card Styles:** White background, `16px` border radius (`var(--radius-lg)`), `1px` subtle border, and soft drop shadows that become more prominent on hover.
- **Animation/Micro-interaction Patterns:**
  - Smooth number counting animations on scroll.
  - Cards lift slightly on hover.
  - Hover states on navigation links and buttons.

## 6. Responsive Behavior
- **Desktop:** Multi-column layouts using CSS Grid (typically 4 columns for features, or a split 1.1fr / 0.9fr grid for the hero section). Max-width container is clamped at `1120px`.
- **Tablet (≤1024px):** 4-column grids collapse into 2 columns. The hero section stacks vertically.
- **Mobile (≤768px):** 
  - Padding and margins are tightened.
  - All grids collapse into a single-column layout.
  - The desktop horizontal navigation hides, replaced by a hamburger menu toggle that opens an absolute-positioned dropdown card.
  - Buttons stretch to 100% width.
- **Risks/Issues:** The implementation handles breakpoints smoothly and cleanly.

## 7. SEO and Metadata
- **Current Title:** `TruThrive | True SEO. Sustainable Growth.`
- **Meta Description:** `Bùi Trường Thịnh - SEO Specialist & Automation Builder. Providing data-driven SEO solutions for sustainable growth.`
- **Heading Structure:** Excellent. Contains a single `<h1>` on the homepage, section headers use `<h2>`, and card headers use `<h3>`.
- **Open Graph/Twitter tags:** **Missing.** The `<SEOHead>` component does not currently output `og:title`, `og:image`, or twitter card metadata.
- **Schema/Structured Data:** **Missing.** No JSON-LD is present (e.g., `Person` or `LocalBusiness` schema).
- **Internal Links:** Functional and clean standard anchor tags (`/about/`, `/case-studies/`).

## 8. Performance and Accessibility
- **Performance:** Phenomenal. Astro outputs static HTML. There is zero heavy JavaScript payload, only a few lines of vanilla JS for the menu and counters. CSS is minimal and lightweight.
- **Image Optimization:** Currently, the homepage relies entirely on typography and CSS styling. There are no images present.
- **Accessibility:**
  - Contrast ratios are high (e.g., Deep Red `#C1121F` on Beige `#FFF8F0` easily passes WCAG AA).
  - Respects `prefers-reduced-motion` to disable animations for users who request it.
  - The mobile menu toggle has proper `aria-label` and `aria-expanded` attributes.
  - **Missing:** Explicit `:focus-visible` styles for keyboard navigation and a "Skip to main content" link.

## 9. Current Known Issues
- **Missing Social Metadata:** Lacks Open Graph tags, which will result in poor link previews on platforms like LinkedIn, Facebook, or Twitter.
- **Lack of Visual Assets:** The homepage contains no photos, headshots, or client logos. Adding these would significantly improve trust and humanize the portfolio.
- **Missing SEO Essentials:** Although an SEO portfolio, there's no visible sitemap generation or robots.txt configuration (can be solved via Astro integrations).
- **Accessibility Improvements Needed:** Keyboard focus states should be explicitly defined in `global.css`.

## 10. Screenshots / Visual Artifacts
*(Note: As this is a textual report, physical screenshots cannot be embedded directly here without hosting the images. However, based on the browser subagent's rendering, the visual appearance closely matches the CSS Design System described in Section 5).*
- **Desktop View:** Features a clean left-aligned hero text block with a right-aligned "Profile Snapshot" card.
- **Mobile View:** Features a hamburger menu button (top right). All cards stack elegantly with appropriate padding.

## 11. Recommendations From Your Side
- **What should be improved first:** 
  1. Add comprehensive Open Graph and Twitter meta tags to `SEOHead.astro`.
  2. Implement `JSON-LD` schema for `Person`.
  3. Add a high-quality personal headshot to the Hero/About section and client logos to the Trust Metrics section to build authority.
  4. Explicitly add keyboard `:focus` styles for all interactive elements in `global.css`.
- **What should not be changed:** 
  - The Vanilla CSS and Vanilla JS approach. It keeps the site blazing fast and perfectly aligns with a Technical SEO specialist's brand of efficiency.
  - The color scheme and typography. They feel very premium and cohesive.
- **Risks before further vibe coding:** 
  - Ensure that adding images in the future doesn't break the excellent layout. Proper `<picture>` tags or Astro's `<Image>` component should be used to maintain performance.
