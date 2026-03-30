<!-- GSD:project-start source:PROJECT.md -->
## Project

**Discur**

A landing page for Discur (discur.ai), an ASI startup building self-organizing memory systems based on octonionic algebra. The site explains the core technology — the octonionic trie — to a technical audience. Full esoteric/gnostic/occult visual styling with heavy use of mathematical symbols and equations. Understated, confident editorial feel. No hype.

**Core Value:** Clearly communicate what the octonionic trie is and why it matters, through the work itself — the math, the results, the architecture — without rhetorical embellishment.

### Constraints

- **Tech stack**: Static site / landing page — no backend needed
- **Content**: Single page, no CMS
- **Copy quality**: Must avoid AI slop patterns — research quality writing only
- **Design**: Esoteric/occult aesthetic with mathematical rigor, not generic tech startup
- **Scope**: Landing page only — no product docs, no API reference
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core Technologies
| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Astro | ^6.1 | Static site framework | Ships zero JS by default. A single-page static landing is Astro's sweet spot. No React runtime overhead, no hydration cost. Built-in image optimization, View Transitions API, native Tailwind v4 support via Vite plugin. Renders everything to static HTML at build time. |
| Tailwind CSS | ^4.2 | Styling and design system | CSS-first config (no JS config file), native CSS variables for theming, cascade layers. v4's `@property` support enables type-safe custom properties for the dark/esoteric color palette. 5x faster builds via Rust engine. |
| KaTeX | ^0.16 | LaTeX math rendering | Renders math at build time via rehype-katex -- zero client-side JS for equations. Faster and smaller than MathJax. Sufficient LaTeX coverage for the equations in the thesis (octonion algebra, associators, norms). Build-time rendering means no layout shift. |
| TypeScript | ^5.7 | Type safety | Astro components support TypeScript natively in the frontmatter script block. Catches errors in data transformations, props, and build-time logic. |
### Supporting Libraries
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| remark-math | ^6.0 | Parse LaTeX in Markdown/MDX | Integrates with Astro's markdown pipeline to recognize `$...$` and `$$...$$` math delimiters |
| rehype-katex | ^7.0 | Render parsed math to HTML | Companion to remark-math; renders KaTeX at build time so no client JS needed for equations |
| GSAP | ^3.12 | Scroll-triggered animations, SVG animation | Sacred geometry reveals, Fano plane diagram animation, parallax sections. Now fully free (acquired by Webflow). Timeline system for orchestrating complex multi-step sequences. |
| @gsap/react | ^2.1 | GSAP React hooks (optional) | Only if using React islands for interactive components. For vanilla Astro components, use GSAP directly. |
| sharp | built-in | Image optimization | Ships with Astro. Handles WebP/AVIF conversion, responsive images, lazy loading automatically via `<Image />` component. |
### Typography (Google Fonts)
| Font | Role | Why This Font |
|------|------|---------------|
| Cinzel | Display headings | Roman-inscribed capitals with classical proportions. Evokes ancient, ceremonial authority. Perfect for section titles in an esoteric context. Variable font, 3 weights. |
| Cormorant Garamond | Body text, equations context | Elegant high-contrast Garamond revival by Christian Thalmann. Light, refined strokes pair well with mathematical notation. 5 weights + italics. |
| JetBrains Mono | Code snippets, monospaced math | Programming font with ligatures. Available on Google Fonts. Clear at small sizes, 8 weights. Use for any inline code or algorithmic notation. |
### Development Tools
| Tool | Purpose | Notes |
|------|---------|-------|
| Vite | Dev server and bundler | Ships with Astro. HMR, fast builds. No separate config needed. |
| @tailwindcss/vite | Tailwind v4 integration | Replaces deprecated `@astrojs/tailwind`. Add to Astro's vite plugins config. |
| Prettier | Code formatting | Use with `prettier-plugin-astro` and `prettier-plugin-tailwindcss` for consistent formatting. |
| astro check | Type checking | Built-in TypeScript checking for `.astro` files. Run in CI. |
## Installation
# Create project
# Core dependencies
# Markdown/math pipeline
# Animation
# Tailwind v4 (via Vite plugin)
# Dev dependencies
### Astro Config
### Global CSS Setup
## Alternatives Considered
| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Astro | Next.js | If you need server-side rendering, API routes, or heavy React interactivity. Overkill for a static landing page -- ships 87KB JS minimum on a blank page. |
| Astro | 11ty (Eleventy) | If you want zero framework abstraction and pure HTML templating. Viable but lacks Astro's component model, image optimization, and View Transitions. |
| KaTeX (build-time) | MathJax 3 | If you need broader LaTeX coverage (e.g., `\newcommand` macros, unusual symbols). MathJax 3 closed the performance gap but is still larger (128KB vs 28KB min+gzip). The thesis equations are well within KaTeX's support. |
| KaTeX (build-time) | KaTeX (client-side) | Never for this project. Build-time rendering via rehype-katex eliminates client JS entirely. Client-side KaTeX causes layout shift and slower FCP. |
| GSAP | Motion (ex-Framer Motion) | If the project were React-heavy. Motion (v12) has excellent declarative React animations but requires React runtime. Since we use Astro without React, GSAP's imperative API works directly with DOM elements. |
| GSAP | CSS Animations/Transitions | For simple hover effects and micro-interactions, use CSS. GSAP is for coordinated scroll sequences, SVG path animations (Fano plane), and timeline-based reveals that CSS cannot orchestrate. |
| Tailwind CSS v4 | Vanilla CSS / CSS Modules | If the team has strong CSS skills and the site has few design variations. Tailwind accelerates iteration on a design-heavy site with many one-off visual treatments. |
| Cloudflare Pages | Vercel | If you were using Next.js. For static Astro, Cloudflare Pages offers unlimited bandwidth on free tier vs Vercel's 100GB cap. Both have excellent global CDN. |
## What NOT to Use
| Avoid | Why | Use Instead |
|-------|-----|-------------|
| React / Vue / Svelte as primary framework | Adds JS runtime to what should be a zero-JS static page. These frameworks solve state management and interactivity problems this project doesn't have. | Astro components (`.astro` files). Use framework islands only if a specific interactive widget demands it. |
| `@astrojs/tailwind` integration | Deprecated for Tailwind v4. Will install Tailwind v3. | `@tailwindcss/vite` plugin added directly to Astro's Vite config. |
| MathJax | Larger bundle (128KB), slower initial render, broader feature set you won't use. | KaTeX via rehype-katex (build-time). |
| Framer Motion / `motion` npm package | Requires React runtime. Would add ~100KB+ of JS to a page that should ship zero JS. | GSAP for scroll animations, CSS transitions for hover states. |
| D3.js for Fano plane diagram | Massive library (95KB min+gzip) designed for data-driven charts. The Fano plane is a fixed geometric diagram, not data-driven. | Hand-crafted SVG with GSAP animation. The Fano plane has exactly 7 points and 7 lines -- small enough to author directly. |
| WordPress / Webflow / any CMS | Single page, single author, content changes rarely. CMS adds complexity, dependencies, and potential security surface. | Static Astro site. Edit content directly in `.astro` or `.mdx` files. |
| Google Analytics / tracking scripts | Adds JS overhead, cookie consent requirements, slows page load. | Cloudflare Web Analytics (free, privacy-friendly, no JS tag needed on Cloudflare Pages) or Plausible if analytics are truly needed. |
## Stack Patterns by Variant
- Use an Astro island with `client:visible` directive wrapping a small vanilla JS or Preact component
- GSAP animates the SVG, a tiny script handles hover/click state
- Keep it contained -- the rest of the page stays zero-JS
- Use Astro's Content Layer or direct `import` of JSON data
- Render KaTeX in the Astro component frontmatter using `katex.renderToString()`
- No markdown pipeline needed; direct API call at build time
- Use Astro Content Collections with MDX
- remark-math + rehype-katex pipeline handles math in markdown files automatically
- Same stack scales without changes
## Version Compatibility
| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| astro@^6.1 | tailwindcss@^4.2 | Use `@tailwindcss/vite` plugin, not `@astrojs/tailwind` |
| astro@^6.1 | remark-math@^6.0 + rehype-katex@^7.0 | Both are ESM-only. Astro 6 handles ESM natively. |
| rehype-katex@^7.0 | katex@^0.16 | rehype-katex uses KaTeX as a peer dependency |
| gsap@^3.12 | astro@^6.1 | Import GSAP in `<script>` tags within `.astro` files. Use `client:load` or `client:visible` if wrapping in a framework island. |
| tailwindcss@^4.2 | No `tailwind.config.js` | v4 uses CSS-first configuration via `@theme` blocks. Do not create a JS config file. |
## Deployment
| Platform | Why | Notes |
|----------|-----|-------|
| Cloudflare Pages | Unlimited bandwidth on free tier, global CDN (300+ PoPs), Git-based deploys, built-in analytics | Primary recommendation. Connect GitHub repo, set build command to `npm run build`, output dir to `dist/`. |
| Vercel | Alternative if team prefers | 100GB bandwidth cap on free tier. Excellent DX but unnecessary features for static site. |
| GitHub Pages | Simplest option | Free, reliable, but no edge functions or analytics. Good fallback. |
## Sources
- Astro official releases (GitHub) -- verified Astro 6.1.1 as latest (HIGH confidence)
- Tailwind CSS v4.0 release blog (tailwindcss.com) -- verified v4.2.2 as latest, CSS-first config (HIGH confidence)
- KaTeX npm registry -- verified 0.16.44 as latest (HIGH confidence)
- GSAP npm registry -- verified 3.14.2 as latest, confirmed free license post-Webflow acquisition (HIGH confidence)
- Astro + Tailwind v4 setup guide (tailkits.com, Astro docs) -- verified `@astrojs/tailwind` deprecated for v4 (HIGH confidence)
- remark-math GitHub (remarkjs/remark-math) -- verified ESM-only, unified ecosystem integration (MEDIUM confidence)
- Cloudflare Pages vs Vercel comparison (freetiers.com, digitalapplied.com) -- verified unlimited bandwidth on CF free tier (MEDIUM confidence)
- Google Fonts specimens (fonts.google.com) -- verified Cinzel, Cormorant Garamond, JetBrains Mono availability (HIGH confidence)
- Motion.dev rebrand from Framer Motion -- verified v12.37.0, React-only limitation (MEDIUM confidence)
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
