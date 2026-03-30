# Phase 1: Foundation - Research

**Researched:** 2026-03-30
**Domain:** Static site scaffolding -- Astro 6, Tailwind CSS v4, KaTeX build-time math, dark theme, font loading, responsive layout
**Confidence:** HIGH

## Summary

Phase 1 establishes the technical foundation that every subsequent phase builds on: a working Astro 6 project that renders LaTeX equations to static HTML at build time, loads three Google Fonts without layout shift, applies a dark color palette that avoids halation, and handles equation overflow on mobile viewports. This phase produces zero visible content sections -- it creates the scaffold (layout, components, design tokens, build pipeline) so that Phases 2-4 can focus on content and polish without revisiting infrastructure.

The stack is well-established and thoroughly documented: Astro 6.1 for zero-JS static site generation, Tailwind CSS 4.2 for CSS-first design tokens via `@theme`, KaTeX 0.16 for build-time math rendering via `katex.renderToString()`, and three Google Fonts (Cinzel, Cormorant Garamond, JetBrains Mono) loaded through Astro 6's new built-in Font API. The primary technical risks are KaTeX CSS/font integration with Vite (a historically problematic area, now resolved in current Astro/Vite versions but requiring verification), and the dark palette halation problem (solved by enforcing off-white on dark gray, never pure values).

**Primary recommendation:** Use Astro 6's built-in Font API (`fontProviders.google()`) for body fonts instead of manual `<link>` tags -- it handles preloading, fallback generation, and self-hosting automatically. Import KaTeX CSS from npm (`katex/dist/katex.min.css`) in the global stylesheet alongside Tailwind. Render all equations via `katex.renderToString()` in Astro component frontmatter -- never ship KaTeX JS to the client.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Deep dark background (#0A0A0F or similar near-black blue-gray), never pure black (#000)
- **D-02:** Body text in warm off-white (#E0DCD4 or similar parchment tone), never pure white (#FFF) -- prevents halation for users with astigmatism
- **D-03:** Accent color: warm gold (#C4A35A or similar) -- evokes esoteric/alchemical feel, provides contrast against dark backgrounds
- **D-04:** Secondary accent: muted violet or deep purple for mathematical notation highlighting
- **D-05:** The palette should feel like an illuminated manuscript or alchemical text -- warm, dark, deliberate
- **D-06:** Display headings: Cinzel -- classical Roman authority, pairs naturally with mathematical and esoteric content
- **D-07:** Body text: Cormorant Garamond -- elegant Garamond revival, highly readable at body sizes, scholarly feel
- **D-08:** Code/math notation: JetBrains Mono -- clear technical monospace, good for inline code alongside equations
- **D-09:** All three fonts available on Google Fonts -- use font preloading to prevent CLS
- **D-10:** KaTeX via rehype-katex for build-time rendering -- equations become static HTML, zero client-side JS
- **D-11:** Create `Equation.astro` wrapper component with overflow-x: auto, overflow-y: hidden for mobile safety
- **D-12:** Create `InlineMath.astro` for inline equation fragments
- **D-13:** Prepare for key thesis equations (content phase fills them in)
- **D-14:** Minimal fixed header -- logo/wordmark only, no navigation links (single continuous scroll, research paper feel)
- **D-15:** Single-page layout with vertical scroll -- sections flow like a technical narrative
- **D-16:** Base section component with consistent spacing, max-width, and responsive padding
- **D-17:** Footer with minimal contact info and paper link

### Claude's Discretion
- Specific Tailwind v4 @theme token structure and naming conventions
- Astro project structure (src/components, src/layouts, src/data)
- Build pipeline configuration details
- Font loading strategy implementation (preload vs font-display swap)
- Specific breakpoint values for responsive design

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| FOUN-01 | Site builds as static HTML with zero client-side JS for content rendering | Astro 6 ships zero JS by default. KaTeX renders at build time via `renderToString()`. No framework runtime needed. |
| FOUN-02 | Mathematical equations render at build time via KaTeX (no client-side math processing) | `katex.renderToString()` in Astro frontmatter produces static HTML. KaTeX CSS + fonts loaded for styling only. remark-math + rehype-katex available for MDX pipeline. |
| FOUN-03 | Equation containers handle mobile overflow without layout breakage (overflow-x: auto, overflow-y: hidden) | `Equation.astro` wrapper with `overflow-x: auto; overflow-y: hidden; max-width: 100%`. Both overflow properties required -- KaTeX's vertical alignment hack causes spurious vertical overflow with `overflow-x: auto` alone. |
| FOUN-04 | Dark color palette avoids halation (off-white on dark gray, no pure white on pure black) | Background #0A0A0F (dark blue-gray), body text #E0DCD4 (warm off-white). Contrast ratio exceeds 7:1 (WCAG AAA). Gold accent #C4A35A desaturated enough to avoid vibration. |
| FOUN-05 | Typography system loaded with font preloading (display, body, monospace) | Astro 6's built-in Font API handles preloading, optimized fallbacks, and self-hosting automatically via `fontProviders.google()`. Three fonts: Cinzel, Cormorant Garamond, JetBrains Mono. |
| FOUN-06 | Responsive layout works on mobile (375px) through desktop (1440px+) | Tailwind v4 default breakpoints (sm: 40rem, md: 48rem, lg: 64rem, xl: 80rem, 2xl: 96rem). Section max-width with responsive padding. Equation containers scroll horizontally on narrow viewports. |
</phase_requirements>

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| astro | 6.1.1 | Static site framework | Ships zero JS by default. Build-time rendering. Native Tailwind v4 + Font API. Verified current on npm. |
| tailwindcss | 4.2.2 | CSS design system | CSS-first config via `@theme`. Native CSS variables. No JS config file. Verified current on npm. |
| @tailwindcss/vite | 4.2.2 | Tailwind v4 Astro integration | Replaces deprecated `@astrojs/tailwind`. Add to Astro's Vite plugins. Verified current on npm. |
| katex | 0.16.44 | Build-time LaTeX rendering | `renderToString()` in frontmatter. Zero client JS. Verified current on npm. |
| typescript | 6.0.2 | Type safety | Astro frontmatter supports TS natively. Verified current on npm. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| remark-math | 6.0.0 | Parse LaTeX delimiters in MDX | If/when MDX content files are added. Not needed for direct `renderToString()` calls in `.astro` components. |
| rehype-katex | 7.0.1 | Render parsed math to HTML in MDX | Companion to remark-math for MDX pipeline. Not needed for direct API usage. |

### Dev Tooling

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| prettier | 3.8.1 | Code formatting | All source files |
| prettier-plugin-astro | 0.14.1 | Astro file formatting | Format `.astro` files |
| prettier-plugin-tailwindcss | 0.7.2 | Tailwind class sorting | Consistent utility class ordering |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Astro 6 Font API | Manual `<link>` tags to Google Fonts CDN | Manual approach requires explicit preload tags, no optimized fallbacks, sends user data to Google. Font API is strictly better. |
| `katex.renderToString()` in frontmatter | remark-math + rehype-katex pipeline | Pipeline is for MDX/Markdown content. For `.astro` components with typed data, direct API is simpler and gives more control over the wrapper HTML. |
| Tailwind v4 @theme | CSS custom properties in `:root` | `:root` variables work but don't auto-generate Tailwind utility classes. @theme does both. |

**Installation:**
```bash
# Create project
npm create astro@latest discur-ai -- --template minimal

# Core dependencies
npm install katex tailwindcss @tailwindcss/vite

# Markdown/math pipeline (for future MDX use)
npm install remark-math rehype-katex

# Dev dependencies
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss typescript
```

**Version verification:** All versions verified against npm registry on 2026-03-30. Astro 6.1.1, Tailwind CSS 4.2.2, KaTeX 0.16.44, TypeScript 6.0.2.

## Architecture Patterns

### Recommended Project Structure
```
src/
├── pages/
│   └── index.astro              # Single page entry point
├── layouts/
│   └── BaseLayout.astro         # <html>, <head>, Font component, meta, body wrapper
├── components/
│   ├── math/                    # KaTeX rendering wrappers
│   │   ├── Equation.astro       # Display-mode equation (block, centered, scrollable)
│   │   └── InlineMath.astro     # Inline equation within text
│   ├── ui/                      # Reusable UI primitives
│   │   └── Section.astro        # Consistent section padding, max-width, scroll anchor
│   └── Header.astro             # Minimal fixed header with logo/wordmark
│   └── Footer.astro             # Minimal footer with contact/paper link
├── data/
│   └── equations.ts             # All LaTeX strings as named constants (placeholder for Phase 2)
├── styles/
│   ├── global.css               # @import "tailwindcss", @theme block, base styles
│   └── katex-overrides.css      # KaTeX color/size adjustments for dark theme
└── env.d.ts                     # Astro environment types
public/
├── favicon.svg                  # Placeholder
└── robots.txt
```

### Pattern 1: Build-Time Math Rendering via Direct API

**What:** Call `katex.renderToString()` in the Astro component frontmatter (server-side only). The HTML output is injected into the template via `set:html`. KaTeX JS is never shipped to the client.

**When to use:** Every equation on the page. No exceptions.

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
  output: 'htmlAndMathml',
});
---

<figure
  class="equation-container my-8 flex items-center justify-between"
  role="math"
  aria-label={ariaLabel}
>
  <div class="equation-scroll overflow-x-auto overflow-y-hidden py-2 max-w-full">
    <Fragment set:html={html} />
  </div>
  {label && <figcaption class="equation-label ml-4 shrink-0 font-mono text-sm text-sigil">({label})</figcaption>}
</figure>
```

**Source:** KaTeX Node.js API docs (https://katex.org/docs/node), KaTeX options docs (https://katex.org/docs/options)

### Pattern 2: Astro 6 Font API for Google Fonts

**What:** Use Astro 6's built-in Font API with `fontProviders.google()` to load all three fonts. Astro downloads, caches, self-hosts the fonts and generates optimized fallback fonts and preload links automatically.

**When to use:** All body/display/mono fonts. NOT for KaTeX fonts (those come with KaTeX CSS).

**Example:**
```typescript
// astro.config.ts
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cinzel',
      cssVariable: '--font-display',
      weights: [400, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

```astro
---
// src/layouts/BaseLayout.astro
import { Font } from 'astro:assets';
import '../styles/global.css';
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Font cssVariable="--font-display" preload />
    <Font cssVariable="--font-body" preload />
    <Font cssVariable="--font-mono" />
    <slot name="head" />
  </head>
  <body class="bg-void text-chalk font-body">
    <slot />
  </body>
</html>
```

**Source:** Astro 6 Fonts documentation (https://docs.astro.build/en/guides/fonts/), Astro 6 release blog (https://astro.build/blog/astro-6/)

### Pattern 3: Tailwind v4 @theme as Design Token System

**What:** Define all design tokens (colors, fonts, spacing) in the `@theme` block of `global.css`. Tailwind auto-generates utility classes from these variables. Use `@theme inline` to reference Astro Font API CSS variables.

**When to use:** All design tokens. The `@theme` block is the single source of truth.

**Example:**
```css
/* src/styles/global.css */
@import "tailwindcss";
@import "./katex-overrides.css";

@theme inline {
  /* Font families from Astro Font API */
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}

@theme {
  /* Dark palette -- illuminated manuscript / alchemical text */
  --color-void: #0a0a0f;          /* Page background -- deep dark blue-gray */
  --color-obsidian: #111116;       /* Card/section background -- slightly lighter */
  --color-onyx: #1a1a22;           /* Elevated surface */
  --color-sigil: #c4a35a;          /* Primary accent -- warm gold */
  --color-sigil-dim: #7a6830;      /* Muted gold for borders/subtle elements */
  --color-arcanum: #6b4c9a;        /* Secondary accent -- muted violet */
  --color-arcanum-dim: #4a3570;    /* Muted violet for subtle use */
  --color-chalk: #e0dcd4;          /* Body text -- warm off-white parchment */
  --color-chalk-muted: #8a8680;    /* Secondary text */
  --color-glyph: #e8d5a3;         /* Highlighted text -- warm gold-white */

  /* Section spacing rhythm */
  --spacing-section: clamp(4rem, 10vw, 10rem);
}
```

**Source:** Tailwind CSS v4 @theme docs (https://tailwindcss.com/docs/theme)

### Pattern 4: KaTeX CSS Integration

**What:** Import KaTeX CSS from npm in the global stylesheet. Vite handles the font path resolution (the historical CSS url() asset issue is resolved in current Astro/Vite). Override KaTeX colors for the dark theme in a separate file.

**When to use:** Global -- loaded once in the layout.

**Example:**
```css
/* src/styles/global.css -- add this import */
@import "katex/dist/katex.min.css";
```

```css
/* src/styles/katex-overrides.css */
/* Override KaTeX defaults for dark theme */
.katex {
  color: var(--color-chalk);
  font-size: 1.1em;
}

.katex-display {
  color: var(--color-glyph);
}

/* Ensure KaTeX math elements inherit dark theme colors */
.katex .mord,
.katex .mrel,
.katex .mbin,
.katex .mopen,
.katex .mclose {
  color: inherit;
}
```

**Source:** KaTeX font docs (https://katex.org/docs/font), Astro CSS import docs (https://docs.astro.build/en/guides/styling/)

### Pattern 5: Responsive Section Component

**What:** A reusable section wrapper that provides consistent max-width, padding, and scroll anchor IDs.

**When to use:** Every content section on the page.

**Example:**
```astro
---
// src/components/ui/Section.astro
interface Props {
  id?: string;
  class?: string;
  fullWidth?: boolean;
}

const { id, class: className, fullWidth = false } = Astro.props;
---

<section
  id={id}
  class:list={[
    'py-section px-4 sm:px-6 lg:px-8',
    !fullWidth && 'mx-auto max-w-4xl',
    className,
  ]}
>
  <slot />
</section>
```

### Anti-Patterns to Avoid

- **Client-side KaTeX loading:** Never import KaTeX in a `<script>` tag or ship it to the browser. All rendering happens in Astro frontmatter (server/build time).
- **@astrojs/tailwind integration:** Deprecated. It installs Tailwind v3. Use `@tailwindcss/vite` directly.
- **tailwind.config.js:** Tailwind v4 uses CSS-first config via `@theme`. Do not create a JS config file.
- **Pure black/white in the palette:** Never use #000000 or #FFFFFF. Enforced through the `@theme` token values.
- **Manual font `<link>` tags:** Use Astro 6's Font API instead. It handles preloading, fallbacks, and self-hosting.
- **Setting opacity: 0 in CSS for animatable content:** Content must be visible by default. GSAP (Phase 3) sets initial states programmatically.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font preloading + fallbacks | Custom preload link tags + font-display CSS | Astro 6 Font API (`fontProviders.google()`) | Handles subsetting, optimized fallback generation, preload hints, and self-hosting automatically |
| LaTeX to HTML | Custom parser or MathJax | `katex.renderToString()` | 28KB vs 128KB, faster, build-time only, well-tested LaTeX coverage |
| Design token system | CSS :root variables + manual utility classes | Tailwind v4 `@theme` block | Auto-generates utility classes, cascade layers, type-safe |
| Responsive container queries | Custom media query mixins | Tailwind responsive prefixes (sm:, md:, lg:) | Standard breakpoints, battle-tested |
| Dark theme color management | Manual CSS variables | Tailwind v4 `@theme` with semantic color names | Single source of truth, utility classes auto-generated |

**Key insight:** This phase has zero novel technical challenges. Every piece (static site gen, build-time math, CSS design tokens, font loading) has a mature, well-documented solution. The value is in wiring them together correctly and establishing patterns that prevent the pitfalls documented below.

## Common Pitfalls

### Pitfall 1: KaTeX Equation Overflow on Mobile
**What goes wrong:** Display-mode KaTeX equations overflow their containers on 375px screens, producing horizontal scrollbars on the entire page.
**Why it happens:** KaTeX generates fixed-width elements that don't reflow. The associator definition `[a,b,c] = (ab)c - a(bc)` and longer equations exceed 375px.
**How to avoid:** `Equation.astro` wrapper MUST set `overflow-x: auto; overflow-y: hidden` on the scroll container. Both properties are required -- KaTeX's vertical alignment hack causes spurious vertical overflow when `overflow-x: auto` is set alone. Also set `max-width: 100%`.
**Warning signs:** Any LaTeX source > 40 characters is a mobile overflow candidate. Test every display equation on 375px during development.

### Pitfall 2: Dark Theme Halation
**What goes wrong:** Pure white text (#FFF) on pure black (#000) causes light bleed for ~47% of people with astigmatism. Mathematical notation requiring fine legibility (summation vs sigma, multiplication dot vs period) becomes ambiguous.
**Why it happens:** Dark backgrounds cause the iris to open wider, worsening astigmatism effects.
**How to avoid:** Background: dark blue-gray (#0A0A0F), body text: warm off-white (#E0DCD4). Never pure values. Target 7:1+ contrast ratio (exceeds WCAG AAA 7:1 threshold). Gold accents desaturated to avoid vibration on dark backgrounds.
**Warning signs:** Any hex value of #000000 or #FFFFFF in the codebase.

### Pitfall 3: KaTeX CSS Font Path Issues with Vite
**What goes wrong:** KaTeX CSS references fonts via relative `url()` paths. Historically, Vite replaced these with `__VITE_ASSET__` placeholders that broke font loading.
**Why it happens:** Vite's CSS asset handling needed special treatment for npm package CSS with relative font references.
**How to avoid:** This was fixed in Vite (upstream fix vitejs/vite#5729, Astro issue #2146 closed). Current Astro 6 / Vite handles this correctly. BUT: verify during setup that KaTeX fonts actually load by checking that math symbols render with correct glyphs (not rectangles or system fallbacks). Import KaTeX CSS via `@import "katex/dist/katex.min.css"` in the global stylesheet -- Vite resolves the font paths.
**Warning signs:** Math symbols rendering as rectangles or in wrong fonts. Network tab showing 404s for `.woff2` files.

### Pitfall 4: Font Loading Layout Shift (CLS)
**What goes wrong:** Custom fonts (body, headings, KaTeX fonts ~15 files) load asynchronously. Without preloading, every equation and heading shifts position when fonts swap in.
**Why it happens:** Multiple font families loading at different times cause cascading layout recalculations.
**How to avoid:** Use Astro 6 Font API with `preload` attribute on the `<Font />` component for display and body fonts. KaTeX fonts are handled by the KaTeX CSS (loaded early as a stylesheet import). Target CLS < 0.1.
**Warning signs:** Visible text "flash" on initial load. CLS > 0.1 in Lighthouse.

### Pitfall 5: Tailwind v4 Configuration Confusion
**What goes wrong:** Developer creates a `tailwind.config.js` file or uses `@astrojs/tailwind` integration, both of which install/configure Tailwind v3.
**Why it happens:** Most online tutorials predate Tailwind v4. The official Astro integration (`@astrojs/tailwind`) is deprecated for v4.
**How to avoid:** Use `@tailwindcss/vite` plugin only. Define all tokens in `@theme` blocks in CSS. No JS config file.
**Warning signs:** A `tailwind.config.js` or `tailwind.config.ts` file in the project root.

### Pitfall 6: KaTeX JS Shipped to Client
**What goes wrong:** KaTeX JavaScript (90KB) gets bundled into client-side JS even though equations are already rendered to static HTML.
**Why it happens:** Importing KaTeX in a `<script>` tag or in code that runs on the client. Astro's tree-shaking only works if KaTeX is imported exclusively in frontmatter.
**How to avoid:** ONLY import KaTeX in Astro component frontmatter (the `---` block). Never import it in `<script>` tags or client-side code. Verify with browser DevTools Network tab that no `katex.js` bundle is loaded.
**Warning signs:** A JS bundle > 10KB loading on the page. KaTeX appearing in the Vite build output.

## Code Examples

### Complete Astro Config
```typescript
// astro.config.ts
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://discur.ai',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cinzel',
      cssVariable: '--font-display',
      weights: [400, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
    },
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
```
**Source:** Astro 6 docs, Tailwind CSS Astro guide (https://tailwindcss.com/docs/installation/framework-guides/astro)

### Complete Global CSS
```css
/* src/styles/global.css */
@import "tailwindcss";
@import "katex/dist/katex.min.css";
@import "./katex-overrides.css";

@theme inline {
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}

@theme {
  --color-void: #0a0a0f;
  --color-obsidian: #111116;
  --color-onyx: #1a1a22;
  --color-sigil: #c4a35a;
  --color-sigil-dim: #7a6830;
  --color-arcanum: #6b4c9a;
  --color-arcanum-dim: #4a3570;
  --color-chalk: #e0dcd4;
  --color-chalk-muted: #8a8680;
  --color-glyph: #e8d5a3;
  --spacing-section: clamp(4rem, 10vw, 10rem);
}

/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-void);
  color: var(--color-chalk);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Selection styling */
::selection {
  background-color: var(--color-sigil);
  color: var(--color-void);
}
```

### InlineMath Component
```astro
---
// src/components/math/InlineMath.astro
import katex from 'katex';

interface Props {
  latex: string;
  ariaLabel?: string;
}

const { latex, ariaLabel } = Astro.props;
const html = katex.renderToString(latex, {
  displayMode: false,
  throwOnError: false,
  output: 'htmlAndMathml',
});
---

<span
  class="inline-math"
  role="math"
  aria-label={ariaLabel}
  set:html={html}
/>
```

### BaseLayout Component
```astro
---
// src/layouts/BaseLayout.astro
import { Font } from 'astro:assets';
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'Discur -- Self-organizing memory from octonionic algebra',
  description = 'Discur builds self-organizing memory systems using octonionic algebra. The octonionic trie routes, stores, and self-monitors using the non-associative structure of the octonions.',
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <Font cssVariable="--font-display" preload />
    <Font cssVariable="--font-body" preload />
    <Font cssVariable="--font-mono" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <slot name="head" />
  </head>
  <body class="min-h-screen bg-void text-chalk antialiased">
    <slot />
  </body>
</html>
```

### Contrast Ratio Verification

The locked color decisions need verification:

| Pair | Foreground | Background | Expected Ratio | Meets WCAG |
|------|-----------|------------|----------------|------------|
| Body text on background | #E0DCD4 | #0A0A0F | ~14.5:1 | AAA (7:1+) |
| Gold accent on background | #C4A35A | #0A0A0F | ~7.5:1 | AAA (7:1+) |
| Muted text on background | #8A8680 | #0A0A0F | ~5.2:1 | AA (4.5:1+) |
| Violet accent on background | #6B4C9A | #0A0A0F | ~3.5:1 | Fails for text, OK for large text/decorative |

**Action needed:** The muted violet (#6B4C9A) may not meet WCAG AA for body text against #0A0A0F. Use it only for decorative/large elements or lighten to ~#8B6CBA for text use. Verify during implementation with a contrast checker tool.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `@astrojs/tailwind` integration | `@tailwindcss/vite` plugin | Tailwind v4 (Jan 2025) | Must use Vite plugin, not Astro integration |
| `tailwind.config.js` | CSS `@theme` block | Tailwind v4 (Jan 2025) | No JS config file; all tokens in CSS |
| Manual `<link>` preload for fonts | Astro 6 Font API | Astro 6.0 (Mar 2026) | Automatic preloading, fallbacks, self-hosting |
| KaTeX CSS from CDN | `@import "katex/dist/katex.min.css"` from npm | Vite fix (2022) | Self-hosted, no CDN dependency, works with Vite |

**Deprecated/outdated:**
- `@astrojs/tailwind`: Installs Tailwind v3. Removed in favor of direct Vite plugin.
- `tailwind.config.js` / `tailwind.config.ts`: Tailwind v4 uses CSS-first `@theme` blocks.
- `astro-google-fonts-optimizer`: Superseded by Astro 6's built-in Font API.

## Open Questions

1. **Astro Font API CSS variable naming and Tailwind @theme inline**
   - What we know: Astro Font API creates CSS variables from `cssVariable` config. Tailwind v4 `@theme inline` can reference these variables to create utility classes (e.g., `font-display`, `font-body`).
   - What's unclear: Whether the Font API variable names and Tailwind's expected `--font-*` namespace collide or compose cleanly. The variable `--font-display` is also a valid CSS property name which could cause confusion.
   - Recommendation: Test during initial setup. If naming collision occurs, use prefixed names like `--font-heading` instead of `--font-display`.

2. **KaTeX font loading priority vs body font loading**
   - What we know: KaTeX includes ~15 font files. Astro Font API preloads body fonts. Both load concurrently.
   - What's unclear: Whether KaTeX fonts loaded via CSS `@import` get preloaded automatically, or if manual `<link rel="preload">` tags are needed for critical KaTeX fonts (KaTeX_Main-Regular.woff2, KaTeX_Math-Italic.woff2).
   - Recommendation: Verify during setup. If math renders with wrong glyphs initially, add manual preload links for the 2-3 most critical KaTeX font files.

3. **Tailwind @theme variable naming for `@theme inline` referencing Astro Font API**
   - What we know: Astro Font API docs show `@theme inline { --font-sans: var(--font-roboto); }` as the integration pattern.
   - What's unclear: Whether Tailwind's `@theme inline` properly resolves Astro Font API CSS variables at build time, or if there's a CSS variable resolution ordering issue.
   - Recommendation: Verify early. Fallback: define fonts directly in `@theme` using the font-family string values and preload manually.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Astro build, npm | Yes | 20.20.1 | -- |
| npm | Package management | Yes | 10.8.2 | -- |
| git | Version control | Yes | 2.53.0 | -- |

**Missing dependencies with no fallback:** None.

**Missing dependencies with fallback:** None.

All required tools are available. This phase has no external service dependencies -- it is entirely local build tooling.

## Sources

### Primary (HIGH confidence)
- Astro 6 Fonts API documentation (https://docs.astro.build/en/guides/fonts/) -- Font API configuration, Font component, provider API
- Astro 6 release blog (https://astro.build/blog/astro-6/) -- Confirmed Font API stable in Astro 6
- Tailwind CSS v4 @theme documentation (https://tailwindcss.com/docs/theme) -- CSS-first configuration, @theme blocks, inline mode
- Tailwind CSS Astro installation guide (https://tailwindcss.com/docs/installation/framework-guides/astro) -- @tailwindcss/vite plugin setup
- KaTeX Node.js API (https://katex.org/docs/node) -- renderToString usage
- KaTeX options (https://katex.org/docs/options) -- displayMode, throwOnError, output options
- KaTeX font documentation (https://katex.org/docs/font) -- Font handling, self-hosting, WOFF2 support
- npm registry -- Verified current versions: astro@6.1.1, tailwindcss@4.2.2, katex@0.16.44, remark-math@6.0.0, rehype-katex@7.0.1, gsap@3.14.2, typescript@6.0.2, prettier@3.8.1

### Secondary (MEDIUM confidence)
- Astro CSS import behavior (https://docs.astro.build/en/guides/styling/) -- npm package CSS imports via Vite
- Astro GitHub issue #2146 (https://github.com/withastro/astro/issues/2146) -- KaTeX CSS url() fix confirmed closed/resolved
- Community KaTeX + Astro guides (https://www.fzeba.com/posts/7_latex-in-astro/, https://astro-paper.pages.dev/posts/how-to-add-latex-equations-in-blog-posts/) -- Integration patterns
- KaTeX GitHub discussions #2942, #3120 -- Overflow and accessibility patterns

### Tertiary (LOW confidence)
- Astro Font API + Tailwind v4 `@theme inline` integration -- documented pattern but not verified on this exact stack combination. Test during setup.
- KaTeX font preloading strategy -- unclear whether Vite/Astro auto-preloads fonts referenced in CSS `@import` from npm packages. Test during setup.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- All versions verified on npm registry 2026-03-30. Astro 6, Tailwind v4, KaTeX well-documented.
- Architecture: HIGH -- Standard Astro project structure. Build-time KaTeX rendering documented in official docs. Tailwind v4 @theme documented.
- Pitfalls: HIGH -- Math overflow, halation, font loading CLS all documented with official sources. KaTeX CSS/Vite issue confirmed resolved.
- Font API integration: MEDIUM -- Astro 6 Font API is new (released Mar 2026). Integration with Tailwind v4 @theme inline is documented but combination is novel.

**Research date:** 2026-03-30
**Valid until:** 2026-04-30 (stable ecosystem, 30-day window)
