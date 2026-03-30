# Project Research Summary

**Project:** Discur.ai Landing Page
**Domain:** Technical AI research landing page (single-page, math-heavy, esoteric/occult aesthetic)
**Researched:** 2026-03-30
**Confidence:** HIGH

## Executive Summary

Discur.ai needs a single-page static landing site that explains the octonionic trie -- a self-organizing memory architecture using non-associative algebra -- to a technical audience. The site must render mathematical equations beautifully, present experimental results with rigor, and wrap everything in an esoteric/occult visual design language that reflects the liminal nature of octonion mathematics. No backend, no CMS, no interactivity beyond a few animated diagrams.

The standard stack for this domain is well-established: Astro 6 for zero-JS static site generation, KaTeX for build-time math rendering (equations become static HTML with no client-side processing), Tailwind CSS v4 for rapid design iteration with CSS-first theming, and GSAP for the limited animation needs (scroll-triggered section reveals and the animated Fano plane diagram). Deployment to Cloudflare Pages provides unlimited bandwidth on the free tier with global CDN. This is a proven combination -- Astro is the consensus framework for content-driven static sites, KaTeX is the fastest math rendering library, and GSAP is now fully free after the Webflow acquisition.

The primary risks are not technical but design and editorial: the esoteric aesthetic must enhance rather than undermine technical credibility (the math itself provides the esoteric visual language -- decorative occult elements should be minimal), the copy must avoid AI-generated writing patterns that the target audience will immediately detect, and the dark color palette must avoid the halation effect (off-white on dark gray, never pure white on pure black). The Fano plane diagram -- the visual centerpiece -- requires careful SVG authoring to represent the projective geometry correctly. These are execution risks that can be mitigated through explicit constraints established in the foundation phase.

## Key Findings

### Recommended Stack

Astro 6.1 + Tailwind CSS 4.2 + KaTeX 0.16 + GSAP 3.14. All build-time processing, zero client JS for content rendering. GSAP is the only client-side JS, loaded for scroll animations and the Fano plane diagram.

**Core technologies:**
- **Astro 6.1:** Static site framework that ships zero JS by default. Renders everything to HTML at build time. Native Tailwind v4 support via Vite plugin. Built-in image optimization.
- **KaTeX 0.16 (via rehype-katex):** Build-time LaTeX rendering. Equations become static HTML -- no client JS, no layout shift, instant display. Sufficient coverage for all thesis equations.
- **Tailwind CSS 4.2:** CSS-first configuration with `@theme` blocks for design tokens. Native CSS variables for the esoteric color palette. 5x faster builds via Rust engine.
- **GSAP 3.14:** Scroll-triggered animations and SVG path animation. Now fully free (Webflow acquisition). Timeline system for orchestrating Fano plane draw-on effects.
- **Typography:** Cinzel (display headings -- classical authority), Cormorant Garamond (body -- elegant Garamond revival), JetBrains Mono (code/math notation). All available on Google Fonts.
- **Deployment:** Cloudflare Pages. Unlimited bandwidth, global CDN, Git-based deploys, built-in analytics.

### Expected Features

**Must have (table stakes):**
- Clear identity statement above the fold
- Core technology explanation with rendered equations
- Five mechanisms from one algebraic substrate
- Fano plane diagram (static SVG minimum)
- Experimental results with specific numbers and context
- Comparison table vs NTM, DNC, SDM, HTM
- Research paper link
- Responsive design with math overflow handling
- Contact point

**Should have (differentiators):**
- Esoteric/occult visual design (dark palette, Cinzel typography, sacred geometry)
- Interactive Fano plane with subalgebra highlighting
- Scroll-triggered section reveals
- Copy quality that passes the anti-slop checklist

**Defer (v2+):**
- Blog, interactive demo, team page, API docs, newsletter

### Architecture Approach

Pure static site built with Astro components. Single `index.astro` page composes section components in narrative order. All math rendered at build time via `katex.renderToString()` in component frontmatter. Content data (equations, results, comparisons) centralized in typed TypeScript files under `src/data/`. SVG diagrams inlined in components for CSS/GSAP animation control. Progressive enhancement: page works fully without JS; GSAP adds animation as a layer. Deployed as static files to Cloudflare Pages CDN.

**Major components:**
1. **Section components** (`Hero`, `WhatIsIt`, `Mechanisms`, `Results`, `Comparison`, `Contact`) -- self-contained content blocks composing the vertical scroll
2. **Math components** (`Equation.astro`, `InlineMath.astro`) -- KaTeX wrappers with overflow handling, aria-labels, mobile-safe containers
3. **Diagram components** (`FanoPlaneSVG.astro`, `TrieTreeSVG.astro`) -- hand-crafted SVG with GSAP animation hooks
4. **Data files** (`equations.ts`, `results.ts`, `comparisons.ts`) -- typed content separated from presentation

### Critical Pitfalls

1. **Math equations breaking on mobile:** KaTeX display equations overflow on 375px screens. Prevention: every equation wrapped in `overflow-x: auto; overflow-y: hidden` container. Establish pattern in `Equation.astro` during foundation phase.
2. **Dark theme halation:** Pure white on pure black causes text bleed for ~47% of people with astigmatism. Prevention: off-white (#E0DCD4) on dark gray (#0A0A0F), never pure values. Set in `@theme` block during foundation.
3. **AI slop copy destroying credibility:** Technical readers detect LLM-generated copy instantly. Prevention: explicit anti-slop checklist for every copy block. No em dashes for drama, no "It's not X, it's Y," no unearned superlatives.
4. **Esoteric aesthetic undermining credibility:** Occult decoration without restraint reads as "tarot card website." Prevention: esoteric through math, not decoration. Max 2 decorative non-mathematical elements. The "show a professor" test.
5. **Fano plane diagram misrepresenting geometry:** Standard 2D embedding creates visual artifacts. Prevention: label all points and lines, color-code subalgebras, explain the circle is a projective "line."

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation
**Rationale:** Everything else depends on the build pipeline, design system, and component primitives being established first. Design decisions made here propagate to every component. This phase prevents the most critical pitfalls (halation, math overflow, font loading shifts) by establishing correct patterns at the root.
**Delivers:** Working Astro project with Tailwind v4 theme, KaTeX pipeline, math component wrappers, font loading, base layout, dark color palette.
**Addresses:** KaTeX build pipeline, responsive equation containers, dark theme without halation, font preloading strategy.
**Avoids:** Math overflow on mobile (container pattern), font loading CLS (preload strategy), dark theme halation (palette constraints).

### Phase 2: Content Sections
**Rationale:** With primitives in place, content sections can be built in narrative order. Each section is self-contained and can be reviewed independently. This is where the anti-slop copy discipline is enforced.
**Delivers:** All 7 page sections with content, equations, and static Fano plane SVG.
**Addresses:** Hero identity statement, technology explanation, mechanisms, results, comparison table, contact CTA.
**Avoids:** AI slop copy (checklist enforcement), results without context (tradeoff framing), comparison table jargon (visual indicators).

### Phase 3: Visual Polish and Animation
**Rationale:** Animation and visual effects are progressive enhancement. The page must work fully without them. Adding them last ensures they never block content delivery and the animation budget is respected.
**Delivers:** GSAP scroll reveals, animated Fano plane, sacred geometry dividers, responsive polish, performance optimization.
**Addresses:** Scroll-triggered reveals, interactive Fano plane, sacred geometry patterns.
**Avoids:** Animation overload (budget established in Phase 1 design system), CSS effects killing mobile performance (test on mid-range devices).

### Phase 4: Deploy and Verify
**Rationale:** Final verification against the "Looks Done But Isn't" checklist. SEO, accessibility, performance audit, and production deployment.
**Delivers:** Live site at discur.ai with verified performance, accessibility, and SEO.
**Addresses:** SEO (JSON-LD, OG image, meta tags), accessibility (aria-labels, prefers-reduced-motion), performance (Lighthouse > 90 mobile).
**Avoids:** SEO invisibility (structured data), missing accessibility (equation aria-labels).

### Phase Ordering Rationale

- **Foundation before content:** The KaTeX pipeline and equation container pattern are hard dependencies. Content cannot be authored until math rendering works. The dark palette must be established before visual design of sections.
- **Content before animation:** Animations enhance content but must not gate it. If animation work takes longer than expected, the page ships without it and still communicates the research effectively.
- **Visual polish between content and deploy:** Sacred geometry patterns, refined animations, and responsive edge cases are polish that benefit from seeing the complete content in context.
- **Deploy last:** Performance verification and SEO require the complete page. Deploy is a verification phase, not a creation phase.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2 (Content):** The Fano plane SVG is a custom design challenge. Research the precise coordinates for the standard triangle-with-inscribed-circle embedding. Review existing Fano plane SVGs (Wikimedia has reference implementations). The 7 quaternionic subalgebras need correct color assignments from the thesis.
- **Phase 3 (Animation):** GSAP ScrollTrigger patterns for Astro are well-documented but require testing with Astro's View Transitions API if multi-page navigation is added later.

Phases with standard patterns (skip additional research):
- **Phase 1 (Foundation):** Astro + Tailwind + KaTeX setup is thoroughly documented with official guides. Standard patterns.
- **Phase 4 (Deploy):** Cloudflare Pages deployment of Astro sites has official documentation. Standard CI/CD.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Astro, Tailwind v4, KaTeX, GSAP -- all verified against official sources and npm registries. Versions current as of 2026-03-30. |
| Features | HIGH | Feature landscape mapped against 6+ competitor AI company landing pages. Anti-features well-justified by project constraints. |
| Architecture | HIGH | Standard Astro static site patterns. Build-time KaTeX rendering is well-documented. File structure follows Astro conventions. |
| Pitfalls | HIGH | Most pitfalls verified with official documentation (KaTeX GitHub issues, WCAG contrast, NNGroup dark mode research). Copy quality patterns verified against multiple AI writing analysis sources. |

**Overall confidence:** HIGH

### Gaps to Address

- **Fano plane SVG coordinates:** The exact geometry for the standard triangle-with-inscribed-circle embedding needs precise calculation. Wikipedia has reference SVGs but they may need adaptation for the 7-subalgebra color scheme. Address during Phase 2 content work.
- **KaTeX font subsetting:** The feasibility of subsetting KaTeX fonts to only used glyphs needs testing. KaTeX uses a complex font system. Address during Phase 1 optimization or defer to Phase 4 performance pass.
- **Specific LaTeX coverage:** Verify that all equations from the thesis render correctly in KaTeX. The thesis likely uses standard LaTeX math packages, but edge cases (custom macros, uncommon symbols) should be tested early. Address during Phase 1 KaTeX pipeline setup.
- **Font pairing validation:** Cinzel + Cormorant Garamond + JetBrains Mono needs visual testing together on actual page content. Address during Phase 1 typography setup.

## Sources

### Primary (HIGH confidence)
- [Astro 6.1.1 releases (GitHub)](https://github.com/withastro/astro/releases) -- verified latest version
- [Tailwind CSS v4.0 release blog](https://tailwindcss.com/blog/tailwindcss-v4) -- CSS-first config, @theme, Vite plugin
- [Tailwind CSS Astro installation guide](https://tailwindcss.com/docs/installation/framework-guides/astro) -- @tailwindcss/vite pattern
- [KaTeX npm registry](https://www.npmjs.com/package/katex) -- verified 0.16.44 latest
- [KaTeX Node.js API (official)](https://katex.org/docs/node) -- build-time rendering
- [remark-math + rehype-katex (GitHub)](https://github.com/remarkjs/remark-math) -- Astro integration
- [GSAP npm registry](https://www.npmjs.com/package/gsap) -- verified 3.14.2, free license
- [GSAP pricing page](https://gsap.com/pricing/) -- confirmed free post-Webflow
- [Cloudflare Pages vs Vercel (freetiers.com)](https://www.freetiers.com/blog/vercel-vs-cloudflare-pages-comparison) -- unlimited bandwidth
- [Google Fonts Cinzel](https://fonts.google.com/specimen/Cinzel), [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) -- font availability

### Secondary (MEDIUM confidence)
- [Astro + KaTeX integration guides](https://www.byteli.com/blog/2024/math_in_astro/) -- community integration patterns
- [Motion.dev (ex-Framer Motion)](https://motion.dev/) -- verified React-only, confirmed not suitable
- [KaTeX vs MathJax comparison](https://finance.biggo.com/news/202511040733_KaTeX_MathJax_Web_Rendering_Comparison) -- performance and feature tradeoffs
- [Astro vs Next.js comparison articles](https://pagepro.co/blog/astro-nextjs/) -- framework selection rationale
- [GSAP vs Motion comparison (motion.dev)](https://motion.dev/docs/gsap-vs-motion) -- animation library selection

### Tertiary (LOW confidence -- needs validation)
- Font pairing effectiveness (Cinzel + Cormorant Garamond) -- based on type design analysis, not tested on this specific content
- KaTeX font subsetting feasibility -- not verified with actual implementation

---
*Research completed: 2026-03-30*
*Ready for roadmap: yes*
