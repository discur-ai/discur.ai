# Phase 1: Foundation - Context

**Gathered:** 2026-03-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver a working Astro project with build-time KaTeX math rendering, a dark esoteric color palette that avoids halation, preloaded typography, responsive equation containers, and the base page layout. This is infrastructure — no content sections, no animations, no copy. Just the scaffold that every subsequent phase builds on.

</domain>

<decisions>
## Implementation Decisions

### Color Palette
- **D-01:** Deep dark background (#0A0A0F or similar near-black blue-gray), never pure black (#000)
- **D-02:** Body text in warm off-white (#E0DCD4 or similar parchment tone), never pure white (#FFF) — prevents halation for users with astigmatism
- **D-03:** Accent color: warm gold (#C4A35A or similar) — evokes esoteric/alchemical feel, provides contrast against dark backgrounds
- **D-04:** Secondary accent: muted violet or deep purple for mathematical notation highlighting
- **D-05:** The palette should feel like an illuminated manuscript or alchemical text — warm, dark, deliberate

### Typography
- **D-06:** Display headings: Cinzel — classical Roman authority, pairs naturally with mathematical and esoteric content
- **D-07:** Body text: Cormorant Garamond — elegant Garamond revival, highly readable at body sizes, scholarly feel
- **D-08:** Code/math notation: JetBrains Mono — clear technical monospace, good for inline code alongside equations
- **D-09:** All three fonts available on Google Fonts — use font preloading to prevent CLS

### Math Rendering
- **D-10:** KaTeX via rehype-katex for build-time rendering — equations become static HTML, zero client-side JS
- **D-11:** Create `Equation.astro` wrapper component with overflow-x: auto, overflow-y: hidden for mobile safety
- **D-12:** Create `InlineMath.astro` for inline equation fragments
- **D-13:** Prepare for these key thesis equations (the content phase will fill them in):
  - Associator definition: [a,b,c] = (ab)c - a(bc)
  - Composition error bound: epsilon(d)
  - Compression efficiency: rho
  - Subalgebra cleanliness: cleanliness(n)
  - Prediction consistency: delta(n)
  - Associator health: alpha(n)
  - Associator norm on S^7: E[phi(a,b,c)] = 147456/42875pi

### Page Structure
- **D-14:** Minimal fixed header — logo/wordmark only, no navigation links (single continuous scroll, research paper feel)
- **D-15:** Single-page layout with vertical scroll — sections flow like a technical narrative
- **D-16:** Base section component with consistent spacing, max-width, and responsive padding
- **D-17:** Footer with minimal contact info and paper link

### Claude's Discretion
- Specific Tailwind v4 @theme token structure and naming conventions
- Astro project structure (src/components, src/layouts, src/data)
- Build pipeline configuration details
- Font loading strategy implementation (preload vs font-display swap)
- Specific breakpoint values for responsive design

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — Project vision, core value, constraints, design direction
- `.planning/REQUIREMENTS.md` — Full v1 requirements with FOUN-01 through FOUN-06

### Research
- `.planning/research/STACK.md` — Technology recommendations with versions (Astro 6.1, Tailwind 4.2, KaTeX 0.16)
- `.planning/research/ARCHITECTURE.md` — Component structure, build pipeline, CSS architecture
- `.planning/research/PITFALLS.md` — Critical pitfalls: math overflow, halation, font CLS, performance budgets
- `.planning/research/SUMMARY.md` — Executive summary with phase implications

### Source Material
- `oct-trie.pdf` — The thesis document; source of all mathematical equations and diagrams

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None — greenfield project, no existing code

### Established Patterns
- None — patterns will be established by this phase

### Integration Points
- None — this is the foundation phase; it creates the integration points for subsequent phases

</code_context>

<specifics>
## Specific Ideas

- The esoteric aesthetic comes FROM the mathematics, not from decorative elements layered on top. The equations themselves, rendered beautifully in gold on dark backgrounds, ARE the visual identity.
- The Fano plane diagram is the visual centerpiece — this phase establishes the SVG rendering capability but the actual diagram is built in Phase 2.
- Copy direction: understated, confident. Think academic paper meets Anthropic's research page. No hype words, no manufactured excitement.
- The color palette should evoke illuminated manuscripts, alchemical texts, or Hermetic diagrams — not a generic dark mode tech site.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-03-30*
