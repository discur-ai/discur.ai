# Phase 3: Visual Polish & Animation - Research

**Researched:** 2026-03-31
**Domain:** GSAP animation, SVG stroke animation, scroll-triggered reveals, progressive enhancement
**Confidence:** HIGH

## Summary

Phase 3 adds GSAP-driven scroll animations, animated SVG diagrams (Fano plane draw-on, trie glow sequence), two decorative elements (triple-dot section dividers and constellation background), and full progressive enhancement to an existing static Astro site. The site currently ships zero client-side JavaScript. GSAP will be the first and only client-side JS.

The technical approach is well-established: GSAP 3.14.2 with ScrollTrigger plugin, loaded via an Astro `<script>` tag (bundled by Vite), targeting server-rendered Astro components by data attributes. As of April 30, 2025, all GSAP plugins -- including DrawSVGPlugin -- are free following the Webflow acquisition, which simplifies the Fano plane draw-on implementation. The `pathLength` attribute trick eliminates the need for manual length calculations on SVG line elements.

The progressive enhancement contract is the most important architectural decision: content starts visible in HTML, a small inline head script adds a `.js-animate` class to `<html>` that CSS uses to hide animated elements, and GSAP then reveals them. If JS never runs, content remains visible. `gsap.matchMedia()` handles `prefers-reduced-motion` natively.

**Primary recommendation:** Use GSAP 3.14.2 with DrawSVGPlugin + ScrollTrigger, loaded in a single dedicated `AnimationScript.astro` component via a standard Astro `<script>` tag. Use `pathLength="1"` on all animated SVG stroke elements to normalize dash calculations. Use `gsap.matchMedia()` for reduced-motion handling.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Sections reveal with fade-up (opacity 0 > 1 + translateY 30px > 0). Quick timing: 0.4-0.6s duration.
- **D-02:** ScrollTrigger start position: top 70% of viewport (standard trigger).
- **D-03:** Equations within sections fade in with 0.2-0.3s delay after their parent section. Draws attention to the math.
- **D-04:** Table rows (results table + comparison table) stagger in with 0.1s delay between rows.
- **D-05:** Hero section animates on page load (not scroll-triggered): headline fades in first, then paragraph, then Fano plane draws on.
- **D-06:** Trie structure diagram also animates: nodes glow in sequence (root > children > grandchildren), ~2s total, matching Fano timing.
- **D-07:** Animations play once. No replay on scroll back. ScrollTrigger with once: true.
- **D-08:** Combined draw-on + glow effect. Lines draw themselves first (stroke-dashoffset), then each subalgebra illuminates in sequence.
- **D-09:** Triggers after hero text appears (headline + paragraph visible first, ~0.5s delay, then Fano begins).
- **D-10:** Total duration: 1.5-2s. Lines draw fast, glow sequence follows quickly.
- **D-11:** No replay. Animates once on first page load.
- **D-12:** Nodes glow in hierarchical sequence: root first, then children, then grandchildren. ~2s total.
- **D-13:** Triggered by ScrollTrigger when Architecture section enters viewport.
- **D-14:** Element 1: Section dividers. Triple dot motif (three gold dots in a row, like a typographic ornament) centered between sections.
- **D-15:** Element 2: Constellation background. ~50-80 sparse points connected by thin lines at 3-5% opacity across the page background.
- **D-16:** No-JS fallback: all content visible, all equations rendered, all diagrams static. Zero functionality loss.
- **D-17:** No "enable JavaScript" note. The page just works.
- **D-18:** GSAP loaded via Astro client:idle directive. Content renders first, animations enhance after page idle.

### Claude's Discretion
- Easing curve selection for fade-up animations
- SVG hover interactions on diagrams (subtle glow or none)
- Exact constellation point positions and line connections
- GSAP timeline orchestration details
- Specific ScrollTrigger configuration (scrub, markers, etc.)
- Triple dot divider exact sizing and spacing

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| VISL-01 | Esoteric/occult aesthetic expressed through mathematical content itself, not excessive decoration | Fano plane draw-on animation, trie glow sequence, triple-dot dividers, constellation background -- all mathematically themed. Research covers GSAP SVG animation techniques and decorative element patterns. |
| VISL-02 | Section transitions use scroll-triggered reveals (GSAP) | Research covers GSAP ScrollTrigger integration with Astro, `once: true` configuration, `top 70%` start position, fade-up pattern. |
| VISL-03 | Fano plane diagram animates on scroll (draw-on effect or subalgebra highlighting) | Research covers DrawSVGPlugin (now free), stroke-dashoffset technique, `pathLength` normalization, staggered line draw with node reveal and glow sequence. |
| VISL-04 | Sacred geometry or mathematical dividers between sections (max 2 decorative non-mathematical elements) | Research covers SectionDivider component (triple-dot ornament) and ConstellationBackground component (fixed SVG overlay). Pure server-rendered, no JS. |
| VISL-05 | Page functions fully without JavaScript (progressive enhancement) | Research covers `.js-animate` class pattern, inline head script, `gsap.matchMedia()` for reduced-motion, content-visible-by-default architecture. |
</phase_requirements>

## Project Constraints (from CLAUDE.md)

- **Tech stack**: Static site (Astro 6.1), no backend
- **Design**: Esoteric/occult aesthetic with mathematical rigor
- **Scope**: Landing page only
- **Copy quality**: No changes to copy in this phase (Phase 3 is visual polish only)
- **GSD workflow**: Use GSD entry points for all work

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| gsap | 3.14.2 | Animation engine: timelines, tweens, ScrollTrigger | Industry standard for web animation. Now fully free (Webflow acquisition April 2025). Framework-agnostic, works directly with DOM. ~23KB gzipped core. |
| gsap/ScrollTrigger | (bundled) | Scroll-triggered animation triggers | Bundled with gsap. Provides `once: true`, viewport-relative start positions, automatic cleanup. |
| gsap/DrawSVGPlugin | (bundled) | SVG stroke draw-on animation | Now free. Handles `stroke-dasharray`/`stroke-dashoffset` calculations automatically for `<line>`, `<circle>`, `<path>`, `<rect>`, `<ellipse>`, `<polygon>`, `<polyline>`. Eliminates manual path length math. |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Astro | ^6.1 | Static site framework (already installed) | Already the project's framework. Script tags in `.astro` files are bundled by Vite as ES modules. |
| Tailwind CSS | ^4.2 | Styling (already installed) | Already the project's styling system. Use for `.js-animate` utility class, constellation/divider styling. |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| DrawSVGPlugin | Manual stroke-dashoffset + `pathLength="1"` | Manual approach works fine but DrawSVGPlugin is now free and handles edge cases (circle circumference, varying line lengths). Use DrawSVGPlugin. |
| gsap.matchMedia() for reduced motion | Raw `window.matchMedia()` check | gsap.matchMedia() auto-reverts animations and ScrollTriggers. Simpler and more robust. Use gsap.matchMedia(). |
| GSAP ScrollTrigger | Intersection Observer API | ScrollTrigger provides `once: true`, viewport percentage starts, stagger integration, and automatic cleanup. Standard choice for GSAP projects. |

**Installation:**
```bash
npm install gsap
```

**Version verification:** GSAP 3.14.2 confirmed as latest via npm registry (2026-03-31). All plugins free since 3.13+ (April 30, 2025 Webflow announcement).

## Architecture Patterns

### Recommended Project Structure (new files)
```
src/
  components/
    ui/
      Section.astro              # MODIFY: add data-animate, .js-animate class
      SectionDivider.astro       # NEW: triple-dot ornament
      ConstellationBackground.astro  # NEW: fixed SVG background
    sections/
      Hero.astro                 # MODIFY: add data attributes for animation targets
      Architecture.astro         # MODIFY: add data-animate for trie trigger
      Results.astro              # MODIFY: add data-result-row to <tr>
      Comparison.astro           # MODIFY: add data-comparison-row to <tr>
    diagrams/
      FanoPlane.astro            # MODIFY: add data attributes, pathLength, initial opacity
      TrieStructure.astro        # MODIFY: add data attributes, initial opacity
    AnimationScript.astro        # NEW: all GSAP orchestration in one file
  pages/
    index.astro                  # MODIFY: add SectionDivider between sections, ConstellationBackground
  layouts/
    BaseLayout.astro             # MODIFY: add inline head script for .js-animate
  styles/
    global.css                   # MODIFY: add .js-animate CSS rules
```

### Pattern 1: Progressive Enhancement (.js-animate)

**What:** Content starts visible. A tiny inline script in `<head>` adds `.js-animate` to `<html>`. CSS rules keyed on `.js-animate` hide animated elements. GSAP reveals them. If JS never loads, content stays visible.

**When to use:** Always -- this is the foundational pattern for the entire phase.

**Example:**
```html
<!-- In BaseLayout.astro <head>, BEFORE any CSS that references .js-animate -->
<script is:inline>
  // Runs synchronously before first paint
  // Only add class if motion is not reduced
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-animate');
  }
</script>
```

```css
/* In global.css */
.js-animate [data-animate="section-reveal"] {
  opacity: 0;
  transform: translateY(30px);
}

.js-animate [data-hero-headline],
.js-animate [data-hero-paragraph] {
  opacity: 0;
  transform: translateY(20px);
}

.js-animate [data-fano-node] {
  opacity: 0;
}

.js-animate [data-trie-node] {
  opacity: 0;
}
```

**Why inline `is:inline`:** Must execute synchronously before first paint to prevent FOUC (flash of visible content that then hides). A Vite-bundled `<script>` module is deferred and would cause a visible flicker.

### Pattern 2: GSAP in Astro Script Tags

**What:** GSAP imports go inside a standard `<script>` tag in an Astro component. Astro/Vite bundles and tree-shakes it as an ES module. It executes after DOM is ready.

**When to use:** For the AnimationScript.astro component.

**Example:**
```astro
<!-- AnimationScript.astro -->
<script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  // All animation code here...
</script>
```

**Critical note:** Astro `<script>` tags without `is:inline` are processed by Vite -- they support npm imports, get bundled, minified, and tree-shaken. They execute as deferred modules (after DOM parse). This is the correct pattern for GSAP.

**Note on D-18 (client:idle):** The CONTEXT.md mentions `client:idle` but that directive is for framework component hydration (React, Svelte, etc.), not for plain `<script>` tags. For a vanilla script in an Astro component, the standard `<script>` tag is the correct approach. Vite-bundled scripts are deferred by default, which achieves the same non-blocking behavior as `client:idle`. If precise idle-time loading is required, use `requestIdleCallback` inside the script.

### Pattern 3: ScrollTrigger with once: true

**What:** Each section gets a ScrollTrigger that fires once when the section enters the viewport, then self-destructs.

**When to use:** All section reveals, equation staggers, table row staggers, trie animation.

**Example:**
```javascript
gsap.utils.toArray('[data-animate="section-reveal"]').forEach((section) => {
  gsap.to(section, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      once: true,
    },
  });
});
```

### Pattern 4: DrawSVGPlugin for Fano Plane Lines

**What:** DrawSVGPlugin animates stroke-dashoffset/stroke-dasharray automatically for `<line>` and `<circle>` elements.

**When to use:** Fano plane line draw-on.

**Example:**
```javascript
// DrawSVGPlugin handles length calculation for <line> elements
const fanoLines = gsap.utils.toArray("[data-fano-line]");
gsap.set(fanoLines, { drawSVG: "0%" });

const heroTimeline = gsap.timeline();
heroTimeline
  .to("[data-hero-headline]", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
  .to("[data-hero-paragraph]", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
  .to(fanoLines, { drawSVG: "100%", duration: 1.2, ease: "power1.inOut", stagger: 0.1 }, "+=0.3")
  .to("[data-fano-node]", { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)", stagger: 0.08 })
  .to("[data-fano-line]", {
    filter: "brightness(1.5)",
    duration: 0.3,
    stagger: 0.15,
    ease: "power1.inOut",
    yoyo: true,
    repeat: 1,
  });
```

### Pattern 5: gsap.matchMedia() for Reduced Motion

**What:** Wrap all animations in `gsap.matchMedia()`. Animations only run when `prefers-reduced-motion: no-preference`. Auto-reverts when condition changes.

**When to use:** Wrap the entire animation initialization.

**Example:**
```javascript
const mm = gsap.matchMedia();

mm.add("(prefers-reduced-motion: no-preference)", () => {
  // ALL animation code goes here
  // ScrollTriggers, timelines, tweens

  // gsap.matchMedia auto-reverts everything when condition stops matching
  // No manual cleanup needed
});
```

### Anti-Patterns to Avoid

- **Animating layout properties:** Never animate `width`, `height`, `margin`, `padding`, `top`, `left`. Only `opacity` and `transform` (plus `stroke-dashoffset` for SVG). These are compositor-friendly and do not trigger layout or paint.
- **Using `is:inline` for GSAP imports:** `is:inline` bypasses Vite bundling. GSAP must be bundled by Vite for tree-shaking and proper module resolution. Only the tiny `.js-animate` head script should be `is:inline`.
- **Using `client:idle` on non-framework components:** `client:idle` is an Astro hydration directive for framework components (React, Svelte). For vanilla JS, use a standard `<script>` tag.
- **Forgetting `gsap.registerPlugin()`:** Without explicit registration, build tools may tree-shake ScrollTrigger and DrawSVGPlugin away in production.
- **Animating SVG `filter` attribute directly:** SVG filter manipulation can be expensive. For the subalgebra glow pulse, prefer animating `opacity` on the lines (e.g., from 0.85 to 1 and back) rather than applying new filter effects. The existing `feGaussianBlur` glow is on the node circles, not the lines.
- **Multiple animation scripts:** All GSAP code should live in one `AnimationScript.astro` component. Splitting across multiple script tags causes duplicate GSAP imports and potential registration order issues.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| SVG line draw-on | Manual `stroke-dasharray`/`stroke-dashoffset` calculation per element | `DrawSVGPlugin` | DrawSVGPlugin auto-calculates path lengths for `<line>`, `<circle>`, and all SVG shapes. Handles edge cases like `<circle>` circumference. Free since April 2025. |
| Scroll-triggered animation | Intersection Observer + manual animation timing | `ScrollTrigger` plugin | ScrollTrigger handles viewport-relative triggers, once-only firing, start/end positions, and auto-cleanup. IO requires manual state management. |
| Reduced motion handling | Manual `matchMedia` + animation teardown | `gsap.matchMedia()` | Auto-reverts all animations and ScrollTriggers created within the handler when the media query stops matching. Handles dynamic preference changes. |
| Animation sequencing | setTimeout chains | GSAP Timeline | Timelines handle sequencing, overlap (`-=0.2`), labels, and precise timing. setTimeout is fragile and uncontrollable. |

**Key insight:** GSAP's plugin ecosystem (now entirely free) solves every animation problem in this phase. The only custom code needed is the animation orchestration logic itself.

## Common Pitfalls

### Pitfall 1: Flash of Unstyled Content (FOUC)
**What goes wrong:** Animated elements briefly appear, then hide, then animate in.
**Why it happens:** If the hiding CSS is applied by a deferred script (the GSAP module), there is a frame gap between first paint and script execution.
**How to avoid:** Use a tiny `<script is:inline>` in `<head>` that adds `.js-animate` to `<html>` synchronously before first paint. CSS rules targeting `.js-animate [data-animate]` hide elements. The GSAP script (deferred module) then animates them visible.
**Warning signs:** Content flickers on page load, especially on slow connections.

### Pitfall 2: GSAP Tree-Shaking in Production
**What goes wrong:** Animations work in dev but ScrollTrigger/DrawSVGPlugin fail in production build.
**Why it happens:** Vite tree-shakes unused imports. If plugins are imported but only used dynamically, the bundler may remove them.
**How to avoid:** Always call `gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin)` at the top of the script. This creates a side effect that prevents tree-shaking.
**Warning signs:** "ScrollTrigger is not defined" or animations not triggering in production.

### Pitfall 3: SVG Line Elements and stroke-dasharray
**What goes wrong:** Manual stroke-dashoffset animation on `<line>` elements fails or shows incorrect lengths.
**Why it happens:** `getTotalLength()` is only guaranteed on `<path>` elements in older browsers. `<line>` elements may not support it.
**How to avoid:** Use DrawSVGPlugin which handles element type detection internally. Alternatively, use `pathLength="1"` attribute on SVG elements to normalize lengths.
**Warning signs:** Lines draw partially or not at all.

### Pitfall 4: Section Border Removal Incomplete
**What goes wrong:** Triple-dot dividers appear alongside the old `border-t border-sigil-dim/20` borders.
**Why it happens:** Forgetting to remove the `border-t` class from section components when adding dividers.
**How to avoid:** Every section except Hero currently has `class="border-t border-sigil-dim/20"` on its `<Section>` wrapper. These must all be removed when SectionDivider is added between sections in `index.astro`.
**Warning signs:** Double dividers (border + dots) between sections.

### Pitfall 5: Constellation Background Z-Index Conflict
**What goes wrong:** Constellation SVG covers content or blocks interaction.
**Why it happens:** Fixed-position overlay without proper z-indexing or pointer-events.
**How to avoid:** Constellation: `position: fixed; z-index: 0; pointer-events: none`. Main content: `position: relative; z-index: 1`. Verify `pointer-events: none` is set so the SVG does not intercept clicks/taps.
**Warning signs:** Links or interactive elements stop working, especially on mobile.

### Pitfall 6: SVG Nodes Initially Visible Then Hidden
**What goes wrong:** Fano plane nodes and trie nodes are visible for a frame before GSAP sets their initial state.
**Why it happens:** SVG elements render at build time with full opacity. GSAP `gsap.set()` runs after module loads (deferred).
**How to avoid:** Use the `.js-animate` CSS pattern to set initial opacity on data-attributed SVG elements: `.js-animate [data-fano-node] { opacity: 0 }`. The CSS applies before GSAP loads.
**Warning signs:** Nodes flash visible then disappear then animate in.

## Code Examples

### Hero Load Timeline (complete orchestration)
```javascript
// Source: UI-SPEC animation contracts + CONTEXT.md D-05, D-08, D-09, D-10
const heroTl = gsap.timeline({ delay: 0.1 });

// Step 1: Headline fade up
heroTl.to("[data-hero-headline]", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out",
});

// Step 2: Paragraph fade up (overlapping slightly)
heroTl.to("[data-hero-paragraph]", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out",
}, "-=0.2");

// Step 3: Fano plane lines draw on
heroTl.to("[data-fano-line]", {
  drawSVG: "100%",
  duration: 1.2,
  ease: "power1.inOut",
  stagger: 0.1,
}, "+=0.3");

// Step 4: Fano nodes scale in
heroTl.to("[data-fano-node]", {
  opacity: 1,
  scale: 1,
  duration: 0.4,
  ease: "back.out(1.4)",
  stagger: 0.08,
});

// Step 5: Subalgebra glow pulse (opacity pulse on lines)
heroTl.to("[data-fano-line]", {
  opacity: 1,
  duration: 0.15,
  stagger: 0.15,
  ease: "power1.inOut",
});
```

### Section Scroll Reveal (batch pattern)
```javascript
// Source: UI-SPEC Section Scroll Reveal contract
gsap.utils.toArray('[data-animate="section-reveal"]').forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 70%",
      once: true,
    },
  });
});
```

### Table Row Stagger
```javascript
// Source: UI-SPEC Table Row Stagger contract, D-04
["[data-result-row]", "[data-comparison-row]"].forEach((selector) => {
  const rows = gsap.utils.toArray(selector);
  if (!rows.length) return;

  const parent = rows[0].closest("[data-animate]");
  gsap.to(rows, {
    opacity: 1,
    y: 0,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: parent,
      start: "top 70%",
      once: true,
    },
    delay: 0.2,
  });
});
```

### Trie Hierarchical Glow
```javascript
// Source: UI-SPEC Trie Structure Animation contract, D-06, D-12, D-13
const trieTl = gsap.timeline({
  scrollTrigger: {
    trigger: '[data-animate="architecture"]',
    start: "top 70%",
    once: true,
  },
});

trieTl.to("[data-trie-edge]", { opacity: 1, duration: 0.4, ease: "power2.out" });
trieTl.to('[data-trie-node="level-0"]', { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)" }, "+=0.2");
trieTl.to('[data-trie-node="level-1"]', { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)", stagger: 0.1 }, "+=0.1");
trieTl.to('[data-trie-node="level-2"]', { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)", stagger: 0.1 }, "+=0.1");
trieTl.to("[data-trie-label]", { opacity: 1, duration: 0.3, ease: "power2.out" }, "-=0.3");
```

### Inline Head Script (progressive enhancement)
```html
<!-- In BaseLayout.astro, inside <head>, before CSS loads -->
<script is:inline>
  (function() {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('js-animate');
    }
  })();
</script>
```

### Constellation Background SVG (static, server-rendered)
```html
<!-- ConstellationBackground.astro -- no JS, pure SVG -->
<div class="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
  <svg
    viewBox="0 0 1440 900"
    xmlns="http://www.w3.org/2000/svg"
    class="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <!-- ~60 points at 4% opacity, ~25 connecting lines at 3% opacity -->
    <circle cx="120" cy="80" r="1.5" fill="#8A8680" opacity="0.04" />
    <!-- ... more circles and lines ... -->
    <line x1="120" y1="80" x2="340" y2="150" stroke="#8A8680" stroke-width="0.5" opacity="0.03" />
    <!-- ... more lines ... -->
  </svg>
</div>
```

### SectionDivider Component
```html
<!-- SectionDivider.astro -- no JS, pure HTML -->
<div class="flex justify-center items-center gap-3 py-2" aria-hidden="true">
  <span class="w-1 h-1 rounded-full bg-sigil/60"></span>
  <span class="w-1 h-1 rounded-full bg-sigil/60"></span>
  <span class="w-1 h-1 rounded-full bg-sigil/60"></span>
</div>
```

## Existing Code Inventory

### SVG Elements to Modify

**FanoPlane.astro** (7 lines + 7 nodes):
| Element | Current | Needs |
|---------|---------|-------|
| 6 `<line>` elements | No data attrs, opacity 0.85 | Add `data-fano-line`, DrawSVGPlugin will handle dasharray |
| 1 `<circle>` (inscribed, r=80) | No data attr, opacity 0.85, fill="none" | Add `data-fano-line` (it draws like a line) |
| 7 `<circle>` nodes (r=8) | Full opacity, filter | Add `data-fano-node`, CSS handles initial opacity |

Computed line lengths (for reference, DrawSVGPlugin handles automatically):
- Lines 1, 3: 276.8px
- Line 2: 276.0px
- Lines 4, 5, 6: ~240px
- Inscribed circle: 502.7px (circumference)

**TrieStructure.astro** (6 edges + 7 nodes + 6 labels):
| Element | Current | Needs |
|---------|---------|-------|
| 6 `<line>` edges | No data attrs | Add `data-trie-edge` |
| 1 `<circle>` (level 0, r=12) | Full opacity | Add `data-trie-node="level-0"` |
| 3 `<circle>` (level 1, r=10) | Full opacity | Add `data-trie-node="level-1"` |
| 3 `<circle>` (level 2, r=8) | Full opacity | Add `data-trie-node="level-2"` |
| 6 `<text>` labels | Full opacity | Add `data-trie-label` |

### Sections to Modify

| Section | Current border | Data attribute to add | Other changes |
|---------|---------------|----------------------|---------------|
| Hero | None (uses `pt-32`) | `data-animate="hero"` on wrapper | Add `data-hero-headline`, `data-hero-paragraph`, `data-hero-fano` |
| Mechanism | `border-t border-sigil-dim/20` | `data-animate="section-reveal"` on Section | Remove border-t |
| Architecture | `border-t border-sigil-dim/20` | `data-animate="architecture"` on Section | Remove border-t |
| Invariants | `border-t border-sigil-dim/20` | `data-animate="section-reveal"` on Section | Remove border-t |
| Results | `border-t border-sigil-dim/20` | `data-animate="results"` on Section | Remove border-t, add `data-result-row` to `<tr>` |
| Comparison | `border-t border-sigil-dim/20` | `data-animate="comparison"` on Section | Remove border-t, add `data-comparison-row` to `<tr>` |
| Contact | `border-t border-sigil-dim/20` | `data-animate="section-reveal"` on Section | Remove border-t |

### Files to Modify (summary)

1. `src/layouts/BaseLayout.astro` -- add inline head script, add `position: relative; z-index: 1` to `<main>`
2. `src/styles/global.css` -- add `.js-animate` CSS rules
3. `src/components/ui/Section.astro` -- no structural change needed (data attrs added by parent sections)
4. `src/components/sections/Hero.astro` -- add data attributes
5. `src/components/sections/Architecture.astro` -- add data attribute, remove border
6. `src/components/sections/Results.astro` -- add data attributes, remove border
7. `src/components/sections/Comparison.astro` -- add data attributes, remove border
8. `src/components/sections/Mechanism.astro` -- add data attribute, remove border
9. `src/components/sections/Invariants.astro` -- add data attribute, remove border
10. `src/components/sections/Contact.astro` -- add data attribute, remove border
11. `src/components/diagrams/FanoPlane.astro` -- add data attributes for GSAP targeting
12. `src/components/diagrams/TrieStructure.astro` -- add data attributes for GSAP targeting
13. `src/pages/index.astro` -- add SectionDivider, ConstellationBackground, AnimationScript

### Files to Create

1. `src/components/ui/SectionDivider.astro` -- triple-dot ornament
2. `src/components/ui/ConstellationBackground.astro` -- fixed SVG background
3. `src/components/AnimationScript.astro` -- all GSAP code

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| GSAP bonus plugins required paid Club membership | All GSAP plugins free via npm | April 30, 2025 (Webflow acquisition) | DrawSVGPlugin available for free, simplifies SVG draw-on significantly |
| Manual stroke-dasharray calculation | DrawSVGPlugin with percentage-based `drawSVG` property | Always available, now free | `drawSVG: "0%"` to `drawSVG: "100%"` -- no length math needed |
| `ScrollTrigger.matchMedia()` | `gsap.matchMedia()` (promoted to core) | GSAP 3.11+ | More powerful, auto-reverts all GSAP/ST instances, handles conditions objects |
| Separate `gsap-trial` npm package for bonus plugins | Single `gsap` npm package includes everything | April 2025 | `import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"` works from the standard package |

**Deprecated/outdated:**
- `gsap-trial` npm package: Deprecated. All plugins now in the standard `gsap` package.
- `ScrollTrigger.matchMedia()`: Still works but `gsap.matchMedia()` is the modern replacement (more features, auto-revert).

## Open Questions

1. **Astro `client:idle` vs standard `<script>` for GSAP**
   - What we know: D-18 specifies `client:idle`. But `client:idle` is an Astro hydration directive for framework components (React, Svelte, etc.), not for vanilla `<script>` tags in `.astro` files.
   - What's unclear: Whether the user specifically wants idle-time loading behavior or just non-blocking loading.
   - Recommendation: Use a standard `<script>` tag (Vite-bundled, deferred by default = non-blocking). If true idle-time behavior is needed, wrap the script body in `requestIdleCallback()`. This achieves the intent of D-18 with the correct Astro mechanism.

2. **Subalgebra glow pulse technique**
   - What we know: D-08 specifies subalgebra illumination after line draw-on. UI-SPEC says brightness filter pulse.
   - What's unclear: SVG `filter: brightness()` may not be GPU-composited on all browsers. Could cause jank.
   - Recommendation: Use `opacity` animation (0.85 to 1 to 0.85) instead of brightness filter. Visually similar (lines brighten), fully composited, no performance risk. If opacity pulse is too subtle, use CSS `filter: brightness()` which GSAP can animate and is widely supported.

3. **Constellation point positions**
   - What we know: 60 points, 25 lines, hard-coded, server-rendered.
   - What's unclear: Exact positions are at Claude's discretion.
   - Recommendation: Generate positions programmatically in the Astro component frontmatter (build-time), seeded for determinism. Roughly evenly distributed with slight Poisson-disk-like spacing. Connect lines between points within a distance threshold. Output static SVG.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Build | Available (v20, .node-version says 22) | v20.20.1 | Not blocking -- npm install works |
| npm | Package install | Available | (with Node) | -- |
| gsap | Animation | Not yet installed | 3.14.2 (latest) | Must be installed (`npm install gsap`) |

**Missing dependencies with no fallback:**
- `gsap` must be installed before implementation begins.

**Missing dependencies with fallback:**
- None.

## Performance Considerations

| Concern | Mitigation |
|---------|-----------|
| GSAP core + ScrollTrigger + DrawSVGPlugin bundle size | ~23KB gzipped (core + ScrollTrigger). DrawSVGPlugin adds minimal overhead. Well within the 35KB JS budget. |
| Animation frame cost | Only `opacity` and `transform` animated (compositor-friendly). SVG `stroke-dashoffset` does not trigger layout. |
| Mobile performance | No `will-change` needed for opacity/transform (browsers auto-optimize). ScrollTrigger `once: true` destroys triggers after firing. No persistent scroll listeners. |
| Cumulative Layout Shift | Zero. All animated properties (`opacity`, `transform`, `stroke-dashoffset`) do not affect layout. |
| Constellation SVG render cost | ~60 circles + ~25 lines, no filters, no glow. Trivial for any GPU. |
| First paint latency | GSAP loads as deferred module (after DOM parse). No blocking. Content visible immediately via server-rendered HTML. |

## Sources

### Primary (HIGH confidence)
- [GSAP npm registry](https://www.npmjs.com/package/gsap) -- confirmed version 3.14.2, all plugins free
- [GSAP Installation docs](https://gsap.com/docs/v3/Installation/) -- import paths: `gsap/ScrollTrigger`, `gsap/DrawSVGPlugin`, registration pattern
- [GSAP DrawSVGPlugin docs](https://gsap.com/docs/v3/Plugins/DrawSVGPlugin/) -- supports `<line>`, `<circle>`, `<path>`, `<rect>`, `<ellipse>`, `<polygon>`, `<polyline>`
- [gsap.matchMedia() docs](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) -- conditions object, auto-revert, prefers-reduced-motion pattern
- [Webflow GSAP free announcement](https://webflow.com/blog/gsap-becomes-free) -- confirmed April 30, 2025, all bonus plugins free
- Existing codebase analysis -- all section components, SVG diagrams, layout structure verified from source files

### Secondary (MEDIUM confidence)
- [GSAP + Astro forum](https://gsap.com/community/forums/topic/39684-gsap-astro/) -- confirmed standard `<script>` tag pattern for Astro
- [LaunchFast GSAP Astro guide](https://www.launchfa.st/blog/gsap-astro/) -- confirmed import pattern within Astro `<script>` tags
- [CSS-Tricks SVG pathLength trick](https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/) -- `pathLength="1"` normalization technique
- [GSAP ScrollTrigger + prefers-reduced-motion forum](https://gsap.com/community/forums/topic/27141-scrolltriggermatchmedia-and-prefers-reduced-motion/) -- gsap.matchMedia() pattern for accessibility

### Tertiary (LOW confidence)
- None. All findings verified through official documentation or npm registry.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- GSAP 3.14.2 verified on npm, all plugins confirmed free, import paths verified in official docs
- Architecture: HIGH -- Astro `<script>` pattern verified in forums and guides, progressive enhancement pattern well-established
- Pitfalls: HIGH -- FOUC, tree-shaking, and SVG element support issues documented across multiple official sources
- SVG animation: HIGH -- DrawSVGPlugin confirmed to support `<line>` and `<circle>` elements, tested approach

**Research date:** 2026-03-31
**Valid until:** 2026-04-30 (GSAP ecosystem is stable, 30-day validity)
