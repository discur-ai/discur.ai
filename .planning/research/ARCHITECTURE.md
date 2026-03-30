# Architecture Research

**Domain:** High-design, math-heavy single-page technical landing site (esoteric/occult aesthetic)
**Researched:** 2026-03-30
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     Build Layer (Astro 6)                        │
│  Compiles .astro components to static HTML/CSS at build time    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Pages/Layout │  │ KaTeX (build)│  │ Asset Pipeline│          │
│  │ .astro files │  │ remark-math  │  │ Tailwind v4   │          │
│  │ section comp.│  │ rehype-katex │  │ sharp (images)│          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                 │                  │                   │
│         └────────┬────────┴──────────────────┘                  │
│                  ▼                                                │
│         ┌──────────────────────────────────┐                    │
│         │  Vite (bundle, tree-shake, min.) │                    │
│         └──────────────┬───────────────────┘                    │
│                        ▼                                         │
├─────────────────────────────────────────────────────────────────┤
│                   Static Output (dist/)                          │
│  ┌───────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ index.html│ │  *.css   │ │  *.svg   │ │  fonts/  │         │
│  │ (zero JS) │ │(Tailwind)│ │(diagrams)│ │ (woff2)  │         │
│  └───────────┘ └──────────┘ └──────────┘ └──────────┘         │
├─────────────────────────────────────────────────────────────────┤
│                   Client-Side (Optional, Progressive)            │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  GSAP + ScrollTrigger (loaded when content enters view)  │   │
│  │  Section reveals, Fano plane SVG path animation          │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                   Deployment                                     │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Cloudflare Pages (CDN, DNS, SSL, Analytics)             │   │
│  │  330+ edge locations, unlimited bandwidth (free tier)    │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Page (`index.astro`) | Single entry point. Composes all sections in narrative order. | One file, sequential section composition. |
| Layout (`BaseLayout.astro`) | HTML shell: `<head>` (fonts, KaTeX CSS, meta tags, OG, JSON-LD), `<body>` wrapper. | Shared across any future pages. |
| Section components | Self-contained content blocks: Hero, WhatIsIt, Mechanisms, FanoPlane, Results, Comparison, Contact. | Each `.astro` component owns its content, styles, and structure. |
| Math components | Wrapper around KaTeX `renderToString()` for consistent equation presentation. | `Equation.astro` (display mode) and `InlineMath.astro` (inline mode). |
| SVG diagrams | Fano plane, trie tree, sacred geometry dividers. Inlined for CSS/GSAP control. | Hand-crafted SVG in `.astro` components. |
| Animation scripts | GSAP initialization, ScrollTrigger setup, SVG path drawing. | `<script>` tags or separate `.ts` modules loaded via `type="module"`. |
| Data files | All variable content (equations, results, comparisons) as typed TypeScript. | `src/data/*.ts` files imported at build time. |
| Design system | Color palette, typography scale, spacing -- all as CSS custom properties via Tailwind v4 `@theme`. | `global.css` with `@theme` block. |

## Recommended Project Structure

```
src/
├── pages/
│   └── index.astro              # Single page entry point
├── layouts/
│   └── BaseLayout.astro         # <html>, <head>, fonts, meta, JSON-LD, body wrapper
├── components/
│   ├── sections/                # Page sections in scroll/narrative order
│   │   ├── Hero.astro           # Title, tagline, signature equation, Fano plane visual
│   │   ├── WhatIsIt.astro       # Core explanation of octonionic trie
│   │   ├── Mechanisms.astro     # The 5 algebraic mechanisms
│   │   ├── Architecture.astro   # Trie structure + tree diagram
│   │   ├── Results.astro        # Experimental findings (95.2%, 0%, 97.7%)
│   │   ├── Comparison.astro     # Table vs NTM, DNC, SDM, HTM
│   │   └── Contact.astro        # Minimal CTA + footer
│   ├── diagrams/                # Complex SVG visualizations
│   │   ├── FanoPlaneSVG.astro   # The Fano plane (7 points, 7 lines, inscribed circle)
│   │   ├── TrieTreeSVG.astro    # Octonionic trie tree visualization
│   │   └── SectionDivider.astro # Sacred geometry divider pattern
│   ├── math/                    # KaTeX rendering wrappers
│   │   ├── Equation.astro       # Display-mode equation (block, centered, optional label)
│   │   └── InlineMath.astro     # Inline equation within text
│   └── ui/                      # Reusable UI primitives
│       ├── MetricCard.astro     # Single result statistic (e.g., "95.2%")
│       ├── ComparisonTable.astro # Styled data table
│       └── SectionWrapper.astro # Consistent section padding, scroll anchor id
├── data/
│   ├── equations.ts             # All LaTeX strings as named constants
│   ├── results.ts               # Experimental results with context
│   └── comparisons.ts           # Comparison table data (vs NTM, DNC, etc.)
├── styles/
│   ├── global.css               # @import "tailwindcss", @theme block, base styles
│   ├── katex-overrides.css      # KaTeX typography adjustments for dark theme
│   └── textures.css             # Grain overlays, subtle background effects
├── scripts/
│   ├── animations.ts            # GSAP ScrollTrigger initialization
│   └── fano-plane.ts            # Fano plane hover/interaction logic
└── env.d.ts                     # Astro environment types
public/
├── favicon.svg                  # SVG favicon (geometric mark)
├── og-image.png                 # Open Graph social preview (Fano plane)
└── robots.txt
```

### Structure Rationale

- **`components/sections/`:** Mirrors the vertical scroll structure. Sections are ordered by narrative flow (problem, mechanism, evidence), matching the thesis argument. Each section can be developed and reviewed independently.
- **`components/math/`:** Isolates KaTeX rendering concerns. The `Equation.astro` wrapper handles: build-time rendering via `katex.renderToString()`, `overflow-x: auto` containers for mobile, `aria-label` slots for accessibility, optional equation numbering/labeling.
- **`components/diagrams/`:** SVG-based visualizations are the highest-complexity components. The Fano plane alone requires precise coordinate geometry, 7 distinct colors for subalgebras, and animation hooks. Isolating diagrams allows parallel development.
- **`data/`:** Content separated from presentation. All LaTeX strings, result numbers, and comparison data live in typed TypeScript files. Benefits: single source of truth, build-time type checking, easy to update without touching component markup, facilitates review against the thesis.
- **`styles/`:** Global styles use Tailwind v4's CSS-first configuration with `@theme` for design tokens. KaTeX overrides are isolated because KaTeX generates its own class names and styles that need surgical overrides (font sizes, colors, spacing) for the dark theme.
- **`scripts/`:** Client-side JS is minimal -- only GSAP animations and Fano plane interactivity. These are the only reason any JS ships. Everything else is static HTML.

## Architectural Patterns

### Pattern 1: Build-Time Math Rendering

**What:** All LaTeX equations are rendered to static HTML during Astro's build process using KaTeX via `katex.renderToString()` in component frontmatter, or via remark-math + rehype-katex in MDX content. No client-side JavaScript is needed for math.
**When to use:** Every equation on the page. No exceptions.
**Trade-offs:** Zero JS for math, no layout shift, instant display. Cannot do user-generated math or dynamic equations (not needed).

**Example:**
```astro
---
// src/components/math/Equation.astro
import katex from 'katex';

interface Props {
  latex: string;
  label?: string;
  ariaLabel?: string;
}

const { latex, label, ariaLabel } = Astro.props;
const html = katex.renderToString(latex, {
  displayMode: true,
  throwOnError: false,
});
---

<figure
  class="equation-container"
  role="math"
  aria-label={ariaLabel}
>
  <div class="equation-scroll">
    <Fragment set:html={html} />
  </div>
  {label && <figcaption class="equation-label">({label})</figcaption>}
</figure>

<style>
  .equation-container {
    @apply my-8 flex items-center justify-between;
  }
  .equation-scroll {
    @apply overflow-x-auto overflow-y-hidden py-2;
    max-width: 100%;
  }
  .equation-label {
    @apply ml-4 shrink-0 font-mono text-sm text-sigil;
  }
</style>
```

### Pattern 2: Data-Driven Content

**What:** All variable content (LaTeX strings, results numbers, comparison data) lives in typed TypeScript data files. Components import and render data. No hardcoded content in markup.
**When to use:** For any content derived from the thesis that might be updated, corrected, or reviewed.
**Trade-offs:** Slight indirection. But: single source of truth, type safety, easy review against thesis, impossible to have inconsistent numbers between sections.

**Example:**
```typescript
// src/data/results.ts
export interface ExperimentResult {
  metric: string;
  value: string;
  context: string;
  significance: string;
}

export const results: ExperimentResult[] = [
  {
    metric: "MNIST accuracy",
    value: "95.2%",
    context: "Zero gradient descent in classifier",
    significance: "Within 3.0 pp of k-nearest neighbors at O(log n) vs O(n) query time",
  },
  {
    metric: "Catastrophic forgetting",
    value: "0%",
    context: "Stability-plasticity test",
    significance: "Complete stability with continued plasticity",
  },
  // ...
];
```

### Pattern 3: Progressive Enhancement for Animation

**What:** The page is fully readable and functional without JavaScript. GSAP animations are a progressive enhancement layer. Content is never hidden by default -- GSAP sets initial states via JS, then animates.
**When to use:** All scroll-triggered animations and diagram interactions.
**Trade-offs:** Must design two states: the static (no-JS) state and the animated state. Both must look good.

**Implementation rule:** Never set `opacity: 0` or `visibility: hidden` in CSS for content that will be animated. Let GSAP set initial states programmatically. If JS fails, content is visible.

**Example:**
```typescript
// src/scripts/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Only animate if user hasn't requested reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // GSAP sets initial state (opacity 0), then animates to visible
  // If JS doesn't load, elements remain at their CSS default (visible)
  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      }
    );
  });
}
```

### Pattern 4: Inline SVG with Animation Hooks

**What:** SVG diagrams (Fano plane, trie tree) are inlined directly in Astro components, with `data-*` attributes or class names on individual SVG elements for GSAP targeting.
**When to use:** Any SVG that needs animation, hover effects, or dynamic color changes.
**Trade-offs:** SVG markup lives in component files (can be verbose for complex diagrams). But: full CSS/JS control, no external requests, scales perfectly, accessible to screen readers.

**Critical for the Fano plane:** The diagram has exactly 7 points and 7 lines (including the inscribed circle). Each line represents a quaternionic subalgebra. Color-code each subalgebra. Add `id` attributes to each point and line group so GSAP can animate them individually (e.g., draw-on effect for lines, pulse effect for active subalgebras).

### Pattern 5: Tailwind v4 as Design Token System

**What:** Tailwind v4's `@theme` block defines all design tokens (colors, fonts, spacing) as CSS custom properties. Components use Tailwind utility classes for layout and spacing, and reference `@theme` variables for brand-specific values.
**When to use:** All components. The `@theme` block in `global.css` is the single source of truth for the visual system.
**Trade-offs:** Tailwind adds a build step and a learning curve. But for a design-heavy page with many one-off treatments, the utility-first approach accelerates iteration. The `@theme` block replaces the old `tailwind.config.js` with native CSS.

**Example:**
```css
/* src/styles/global.css */
@import "tailwindcss";
@import "./katex-overrides.css";

@theme {
  /* Palette: deep darks, aged golds, warm off-whites */
  --color-void: #0a0a0f;
  --color-obsidian: #111116;
  --color-onyx: #1a1a22;
  --color-sigil: #c4a35a;
  --color-sigil-dim: #7a6830;
  --color-glyph: #e8d5a3;
  --color-chalk: #e0dcd4;
  --color-chalk-muted: #8a8680;

  /* Typography */
  --font-display: "Cinzel", serif;
  --font-body: "Cormorant Garamond", serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Spacing (section rhythm) */
  --spacing-section: clamp(4rem, 10vw, 10rem);
}
```

## Data Flow

### Build Flow (Primary)

```
Source (.astro, .ts, .css)
    │
    ├── data/*.ts (equations, results, comparisons)
    │       │
    │       ▼
    ├── components/math/*.astro ── katex.renderToString() ──► static HTML
    │
    ├── components/sections/*.astro (compose content)
    │
    ├── styles/global.css ── @tailwindcss/vite ──► optimized CSS
    │
    └── Vite (bundle, tree-shake, minify, hash assets)
            │
            ▼
        dist/ (index.html + CSS + fonts + SVGs)
            │
            ▼
        Cloudflare Pages CDN (global edge)
```

### Client-Side Flow (Progressive Enhancement)

```
Browser loads static HTML (content visible immediately)
    │
    ▼
GSAP module loaded (deferred, ~23KB gzipped)
    │
    ▼
ScrollTrigger registers intersection observers
    │
    ▼
User scrolls → triggers enter/leave callbacks
    │
    ▼
GSAP animates elements (opacity, transform, SVG stroke-dashoffset)
```

### Content Update Flow

```
Developer edits src/data/*.ts or src/components/sections/*.astro
    │
    ▼
Git push to main
    │
    ▼
Cloudflare Pages auto-build (npm run build)
    │
    ▼
Static files deployed to CDN edge (cache invalidated)
    │
    ▼
Visitors see updated content
```

### Key Data Flows

1. **Thesis content to page:** Mathematical content lives in `src/data/equations.ts` as named LaTeX strings. Components import these strings and pass them to `Equation.astro` for build-time KaTeX rendering. No CMS, no API, no database. Content changes require editing source files and pushing to Git.

2. **Design tokens to components:** All visual decisions flow from the `@theme` block in `global.css` through Tailwind utilities and CSS custom properties. Changing the entire color palette means editing one block.

3. **Font loading to rendering:** WOFF2 fonts preloaded in `<head>` with `font-display: swap`. KaTeX fonts (KaTeX_Main, KaTeX_Math) also preloaded. Text visible immediately with system fallback, custom fonts swap in without layout shift.

## Page Section Architecture

The single page is structured as a vertical scroll through sections, each mapping to a thesis concept:

| # | Section | Content | Visual Treatment | Thesis Reference |
|---|---------|---------|------------------|------------------|
| 1 | **Hero** | Company name, one-sentence thesis, signature equation | Full viewport, dark, Fano plane as visual anchor | Abstract |
| 2 | **What Is It** | Core explanation of the octonionic trie | Prose with inline math, understated | Introduction |
| 3 | **Mechanisms** | The 5 algebraic mechanisms | Equation-forward, each mechanism as a unit | Sections 2-3 |
| 4 | **Architecture** | Trie structure, dynamic growth | Trie tree SVG diagram | Section 3 |
| 5 | **Results** | 95.2% MNIST, 0% forgetting, etc. | Large numerals, metric cards | Sections 7, 10 |
| 6 | **Comparison** | Table vs NTM, DNC, SDM, HTM | Styled data table, column highlighting | Section 6 |
| 7 | **Contact** | Paper link, email, minimal CTA | Sparse, confident | -- |

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Single landing page (current) | Static HTML from Astro, Cloudflare Pages CDN. Zero scaling concerns. Unlimited bandwidth. |
| Adding blog/papers later | Add Astro Content Collections with MDX. remark-math + rehype-katex handles math in posts. Same architecture. |
| Adding interactive demos later | New Astro page with heavier client-side islands. Keep landing page lean. |
| Multi-language later | Astro i18n routing. Same component structure, different content. |

### Scaling Priorities

1. **First bottleneck:** Page weight from fonts (KaTeX fonts + body fonts) + GSAP. Mitigate by subsetting fonts, preloading critical files, and lazy-loading GSAP via deferred `<script>`.
2. **Second bottleneck:** Complex SVG diagrams on mobile. Mitigate by simplifying SVG paths (SVGO), potentially serving simplified versions on mobile viewports.

## Anti-Patterns

### Anti-Pattern 1: Client-Side Math Rendering

**What people do:** Load KaTeX or MathJax as client-side JavaScript and render equations in the browser.
**Why it's wrong:** Adds 90-300KB of JS, causes layout shift as equations pop in, makes core content dependent on JS execution, destroys mobile performance.
**Do this instead:** Render all math at build time with `katex.renderToString()` in Astro frontmatter or via remark-math + rehype-katex pipeline. Equations become static HTML.

### Anti-Pattern 2: Framework-Heavy SPA

**What people do:** Build a single landing page as a React/Next.js SPA with client-side routing, state management, and full hydration.
**Why it's wrong:** A landing page has no state to manage, no routes to navigate, no dynamic data. Ships 87-150KB of framework JS for zero benefit.
**Do this instead:** Astro static output. Zero JS by default. Islands only for genuine interactivity.

### Anti-Pattern 3: D3.js for Fixed Diagrams

**What people do:** Pull in D3.js (95KB min+gzip) to render the Fano plane or trie tree.
**Why it's wrong:** D3 is a data-driven visualization library. The Fano plane has exactly 7 points and 7 lines -- it is not data-driven, it is a fixed geometric structure. D3 adds massive overhead for a diagram that can be authored as static SVG.
**Do this instead:** Hand-craft the SVG. Use GSAP only for animation. The Fano plane coordinates are well-known and fixed.

### Anti-Pattern 4: Animation as Content Gate

**What people do:** Set elements to `opacity: 0` in CSS, relying on GSAP to reveal them.
**Why it's wrong:** If JavaScript fails (network error, ad blocker, `prefers-reduced-motion`), content is permanently invisible.
**Do this instead:** Content visible by default in CSS. GSAP sets initial state (`opacity: 0`) programmatically, then animates. No JS = content visible.

### Anti-Pattern 5: Embedding the Thesis PDF

**What people do:** Use a PDF viewer component or `<iframe>` to embed the full thesis.
**Why it's wrong:** PDFs are not web-native. Cannot be styled, not responsive, not accessible, terrible on mobile.
**Do this instead:** Extract key content and present as native HTML with KaTeX math rendering. Link to the PDF for readers who want the full paper.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Cloudflare Pages | Git-triggered deploy from `main` branch | Free tier. Build command: `npm run build`. Output: `dist/`. Custom domain: `discur.ai`. |
| Google Fonts | `<link>` tags in `<head>` with `display=swap` | Cinzel, Cormorant Garamond, JetBrains Mono. Consider self-hosting for performance. |
| Cloudflare Analytics | Automatic on CF Pages | No JS tag needed. Privacy-friendly. Server-side from CDN logs. |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Data files to Components | TypeScript `import` at build time | Type-safe, validated at build. |
| Components to Layout | Astro `<slot />` composition | Standard Astro pattern. |
| Components to Animation | `data-animate` attributes | Loose coupling. GSAP discovers elements via selectors. Page works without JS. |
| KaTeX to Custom Styles | CSS class overrides | KaTeX generates `.katex`, `.katex-display` classes. Override in `katex-overrides.css`. |
| Tailwind @theme to Components | CSS custom properties | Components use Tailwind utilities which reference `@theme` variables. |

## Sources

- [Astro Project Structure (official docs)](https://docs.astro.build/en/basics/project-structure/) -- HIGH confidence
- [Astro 6.1.1 release (GitHub)](https://github.com/withastro/astro/releases) -- HIGH confidence
- [Tailwind CSS v4 installation with Astro (official)](https://tailwindcss.com/docs/installation/framework-guides/astro) -- HIGH confidence
- [KaTeX Node.js API (official)](https://katex.org/docs/node) -- HIGH confidence
- [remark-math + rehype-katex integration (GitHub)](https://github.com/remarkjs/remark-math) -- HIGH confidence
- [GSAP ScrollTrigger (official)](https://gsap.com/scroll/) -- HIGH confidence
- [Cloudflare Pages Astro deploy guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/) -- HIGH confidence
- [Fano plane SVG (Wikimedia)](https://commons.wikimedia.org/wiki/File:Fano_plane.svg) -- reference for diagram geometry

---
*Architecture research for: Discur.ai technical landing page*
*Researched: 2026-03-30*
