# Pitfalls Research

**Domain:** Technical AI research landing page with esoteric/occult aesthetic and heavy mathematical content
**Researched:** 2026-03-30
**Confidence:** HIGH (most pitfalls verified across multiple sources including official documentation)

## Critical Pitfalls

### Pitfall 1: Math Equations Breaking on Mobile

**What goes wrong:**
Display-mode KaTeX equations overflow their containers on mobile viewports, producing horizontal scrollbars on individual equation blocks or on the entire page. Long equations like the associator definition `[a,b,c] = (ab)c - a(bc)` or multi-line aligned derivations extend beyond 375px-width screens. Most users do not scroll horizontally on mobile, so the right side of equations becomes invisible.

**Why it happens:**
KaTeX's rendering model creates fixed-width elements that do not reflow. Display math is rendered as block elements with minimum widths determined by the equation content. Developers test on desktop where equations fit; mobile testing comes late.

**How to avoid:**
- The `Equation.astro` wrapper must include `overflow-x: auto; overflow-y: hidden` on the equation container. KaTeX's vertical alignment hack creates spurious vertical overflow when `overflow-x: auto` is added alone -- both properties must be set.
- Set `max-width: 100%` on the KaTeX container.
- Test every display equation explicitly on a 375px viewport during development.
- Consider breaking multi-step derivations into individual lines rather than `aligned` environments.

**Warning signs:**
- Any LaTeX source longer than ~40 characters is a mobile overflow candidate.
- Horizontal scrollbar appearing in Chrome DevTools mobile emulation.
- CLS spikes in Lighthouse mobile audit.

**Phase to address:**
Foundation phase -- establish the equation container pattern in `Equation.astro` once. Every equation added later inherits the fix.

---

### Pitfall 2: KaTeX Accessibility for Screen Readers

**What goes wrong:**
KaTeX's MathML output is not reliably parsed by screen readers (VoiceOver, NVDA, JAWS). The core technical content -- the equations that explain the product -- is invisible to assistive technology users. For a research-quality site, this is a credibility problem beyond compliance.

**Why it happens:**
KaTeX prioritizes rendering speed over accessibility. Its MathML output is included in the DOM but is effectively broken for assistive technology. Developers assume "MathML = accessible" without testing with actual screen readers.

**How to avoid:**
- Use KaTeX for visual rendering (it is faster and smaller than MathJax, critical for a math-heavy page).
- Add manual `aria-label` attributes to equation containers with plain-English descriptions for the ~10 most important equations. E.g., `aria-label="The associator of a, b, c equals a times b times c minus a times the product of b and c"`.
- For decorative or secondary equations, `aria-hidden="true"` is acceptable.
- The `Equation.astro` component should accept an optional `ariaLabel` prop.

**Warning signs:**
- No `aria-label` or `role="math"` attributes on `.katex` containers.
- Lighthouse accessibility audit flagging math content.
- VoiceOver produces silence when navigating through equations.

**Phase to address:**
Foundation phase (set up container pattern with aria-label slot) + Content phase (write aria-labels for top 10 equations once content is finalized).

---

### Pitfall 3: AI Slop Copy Destroying Credibility

**What goes wrong:**
The landing page copy reads like ChatGPT wrote it. Technical readers (ML researchers, systems engineers) have finely tuned slop detectors. One "It's not just a data structure -- it's a paradigm shift" sentence and the credibility of the entire page collapses. The PROJECT.md explicitly calls this out, but it remains the highest-risk pitfall.

**Why it happens:**
Every paragraph will likely start as an LLM draft. LLMs produce characteristic patterns: em-dash overuse, "It's not X, it's Y" constructions, snappy triads ("fast, efficient, reliable"), mid-sentence rhetorical questions, unearned profundity ("Something shifted."), and generic transitions ("In today's rapidly evolving landscape"). These patterns are individually subtle but collectively unmistakable.

**How to avoid:**
- Edit for voice, not grammar. The editing pass must target structural patterns, not word choice.
- The Anthropic/DeepMind test: Would this paragraph appear on anthropic.com/research or arxiv.org? If no, rewrite.
- Anti-slop checklist for every copy block:
  - No em dashes used for dramatic effect
  - No "It's not X, it's Y" constructions
  - No rhetorical questions
  - No three-beat lists used for rhythm rather than content
  - No paragraphs that could describe any AI project (specificity test)
  - Every claim followed by a specific number or citation
- Write short. "The associator detects novel inputs with 5x contrast over baseline" beats any three-sentence explanation.

**Warning signs:**
- Copy contains more than two em dashes per section.
- Any sentence transferable to a different AI startup without modification.
- Adjectives without measurements: "remarkable," "groundbreaking," "revolutionary."

**Phase to address:**
Content phase -- every copy block must go through the anti-slop checklist.

---

### Pitfall 4: Dark Theme Halation and Readability

**What goes wrong:**
Pure white text (#FFFFFF) on pure black (#000000) causes halation -- light text bleeds into the dark background. This affects ~47% of people with some degree of astigmatism. For mathematical notation requiring high legibility (distinguishing summation from sigma, multiplication dot from period), halation is catastrophic.

**Why it happens:**
Dark backgrounds cause the iris to open wider, worsening astigmatism. The occult aesthetic gravitates toward very dark backgrounds with stark contrast.

**How to avoid:**
- Background: dark gray (#0A0A0F to #111116), never pure black.
- Body text: off-white (#E0DCD4 to #E8E4DC), never pure white.
- Maintain minimum 7:1 contrast ratio (exceeds WCAG AA's 4.5:1 to account for dark theme perceptual issues).
- Accent colors (gold): desaturate by 15-20% from pure values. Saturated colors vibrate against dark backgrounds.
- Test with `prefers-contrast: more` media query.

**Warning signs:**
- Body text using #FFFFFF on #000000 anywhere in the palette.
- Saturated accent colors (HSL saturation > 80%) on dark backgrounds.
- Math symbols becoming ambiguous at mobile font sizes.

**Phase to address:**
Foundation phase -- establish the color palette with these constraints in the `@theme` block before any content is placed.

---

### Pitfall 5: Esoteric Aesthetic Undermining Technical Credibility

**What goes wrong:**
The occult/esoteric design crosses from "distinctive and memorable" to "this looks like a tarot card website, not a research company." Visitors from ML research labs see heavy occult imagery and categorize the company as unserious.

**Why it happens:**
The aesthetic is genuinely appropriate (octonions are mathematically liminal, the Fano plane is an esoteric structure). But without restraint, decoration accumulates: sigil logos, runic typography, heavy geometric borders, particle effects -- each defensible but collectively reading as "occult shop."

**How to avoid:**
- Esoteric through math, not through decoration. The Fano plane IS the occult symbol. Octonionic multiplication tables ARE the sigils. The math itself provides the esoteric visual language.
- Restraint rule: No more than 2 decorative (non-mathematical) esoteric elements on the entire page.
- Typography test: If the heading font would be at home on a metal album cover, it is wrong. Cinzel is classical-authoritative, not decorative-occult. This is the right boundary.
- The "show a professor" test: Would a mathematics professor take this site seriously enough to read the content?

**Warning signs:**
- More than 2 non-mathematical decorative elements (pentagrams, sigils, runes) anywhere on the page.
- Typography prioritizing atmosphere over legibility.
- Particle effects or continuous animations behind readable content.

**Phase to address:**
Design phase -- establish the visual system with explicit constraints on decorative elements.

---

### Pitfall 6: Fano Plane Diagram Misrepresenting the Mathematics

**What goes wrong:**
The standard 2D Fano plane visualization shows apparent line intersections where none exist in the actual projective geometry. Mathematically literate viewers notice visual artifacts and question the entire presentation's rigor.

**Why it happens:**
The Fano plane is a combinatorial structure, not a Euclidean one. Any 2D embedding creates artifacts. The "lines" appearing to intersect at the centroid are actually three separate lines. The inscribed circle is a "line" in the projective sense.

**How to avoid:**
- Use the standard triangle-with-circle embedding (readers expect it) but clearly label all 7 points and 7 lines.
- Color-code the 7 quaternionic subalgebras to disambiguate lines and show routing channels.
- If interactive, hover/click must highlight entire lines (all 3 points on a line), reinforcing the incidence structure.
- Include a brief caption explaining the circle is a "line" in the projective sense.
- SVG only (not canvas or raster). Must scale perfectly at all sizes.

**Warning signs:**
- No labels on points or lines.
- All lines the same color, making the 7-line structure ambiguous.
- Interactive hover highlighting individual segments instead of complete lines.

**Phase to address:**
Content/visual phase -- the Fano plane is a centerpiece. Design with the same care as the hero section.

---

## Moderate Pitfalls

### Pitfall 7: Font Loading Causing Layout Shifts

**What goes wrong:**
Custom fonts (body, headings, KaTeX fonts) load asynchronously. KaTeX includes ~15 font files. Combined with body/heading fonts, the page may need 20+ font files. Without preloading, every equation shifts position when fonts load, creating a cascade of layout shifts.

**How to avoid:**
- Preload the 3-4 most critical KaTeX font files: `KaTeX_Main-Regular.woff2`, `KaTeX_Math-Italic.woff2`, `KaTeX_Size1-Regular.woff2`.
- Use `font-display: swap` for body/heading fonts.
- Self-host all fonts (KaTeX + body) rather than loading from CDN.
- Subset body fonts to Latin characters (reduces file size by 60-80%).
- WOFF2 format exclusively.

**Phase to address:**
Foundation phase -- font loading strategy before content is added.

---

### Pitfall 8: CSS Effects Killing Mobile Performance

**What goes wrong:**
Esoteric aesthetic calls for layered effects: `backdrop-filter: blur()`, gradient overlays, glow effects. On mobile GPUs, stacking composited layers causes jank, battery drain, and crashes on older iOS devices.

**How to avoid:**
- Limit `backdrop-filter: blur()` to 1-2 elements per viewport, radius under 10px.
- Never blur elements larger than 50% of viewport area.
- Prefer `background-color: rgba()` over `backdrop-filter` for glassy effects.
- Use `@media (prefers-reduced-motion: reduce)` to disable all blur, particles, and continuous animations.
- Test on a mid-range Android phone, not just flagship iOS.

**Phase to address:**
Foundation phase -- visual effect budget established early.

---

### Pitfall 9: Comparison Table Becoming Unreadable Jargon

**What goes wrong:**
The comparison table (octonionic trie vs NTM, DNC, SDM, HTM) becomes a dense grid of acronyms that communicates nothing to anyone who does not already understand all five architectures.

**How to avoid:**
- Lead with 2-3 dimensions that matter: catastrophic forgetting (0% vs >0%), query complexity (O(log n) vs O(n)), gradient-free (yes/no).
- Visual indicators (checkmarks, color coding) rather than text in cells.
- One-line description of each compared architecture for readers unfamiliar with abbreviations.
- Mobile: table must stack vertically or scroll horizontally within its container. 6 columns on 375px is unreadable.

**Phase to address:**
Content phase -- design the table for landing page audience, not thesis audience.

---

### Pitfall 10: SEO Invisibility

**What goes wrong:**
KaTeX renders equations as complex HTML spans, not crawlable text. Single-page sites have one URL, one title, one meta description. The site ranks for nothing.

**How to avoid:**
- Include plain-text versions of key equations in `<meta>` tags or visually hidden `<span>` elements.
- `ScholarlyArticle` or `TechArticle` JSON-LD structured data with paper metadata.
- Descriptive `<title>` and `<meta description>` targeting primary search query.
- Semantic HTML sections with descriptive `id` attributes for linkable anchors.
- Open Graph image showing the Fano plane for social sharing.

**Phase to address:**
Foundation phase (structured data, meta tags) + Content phase (plain-text equation equivalents, OG image).

---

### Pitfall 11: Animation Overload

**What goes wrong:**
Every section has entrance animations, the Fano plane rotates continuously, particles float, equations fade in letter by letter. Attention scatters across motion rather than focusing on mathematical content.

**How to avoid:**
- Animation budget: maximum 2-3 animated elements visible at any one time.
- One hero animation (Fano plane drawing itself). Everything else uses subtle opacity transitions at most.
- Animations trigger once via Intersection Observer, not continuously.
- `prefers-reduced-motion`: disable ALL animations when set.

**Phase to address:**
Design phase -- establish animation budget before implementing sections.

---

## Minor Pitfalls

### Pitfall 12: Results Lacking Context

**What goes wrong:**
"95.2% MNIST accuracy" means nothing without context. Readers who know SOTA is 99.7% see it as a bad result. The value is not the absolute number -- it is the tradeoff (gradient-free, O(log n), zero catastrophic forgetting).

**Prevention:**
Always pair results with context: "95.2% on MNIST with zero gradient descent" AND "within 3.0 pp of k-nearest neighbors at O(log n) vs O(n) query time." Frame every result as a tradeoff.

---

### Pitfall 13: Unicode Math Symbols Rendering Inconsistently

**What goes wrong:**
Inline Unicode math symbols (subscripts, superscripts, bars, operators) render differently across devices. The octonion notation uses Mathematical Alphanumeric Symbols Unicode block, which has inconsistent font support.

**Prevention:**
Use KaTeX for ALL mathematical notation, even inline. Do not mix Unicode math characters in HTML with KaTeX-rendered equations. The `InlineMath.astro` component handles this.

---

### Pitfall 14: Page Weight Bloating

**What goes wrong:**
KaTeX CSS (~25KB) + KaTeX fonts (~250KB) + body fonts (~50-100KB) + GSAP (~23KB) pushes total weight past 500KB before content. Since KaTeX renders at build time, the JS runtime is NOT needed -- only the CSS and fonts. But font weight alone is substantial.

**Prevention:**
- KaTeX: since equations render at build time, do NOT ship KaTeX JS to the client. Only ship KaTeX CSS and fonts.
- Subset KaTeX fonts to only glyphs actually used.
- Subset body fonts to Latin characters.
- Target total page weight under 500KB (excluding images).
- Use `<link rel="preload">` for critical fonts.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| KaTeX fonts from CDN | Fast setup | Extra DNS lookup, no subsetting, CDN outage risk | Never for production -- self-host from day 1 |
| Skip aria-labels on equations | Faster content phase | Accessibility failure | Acceptable for first deploy if tracked with explicit timeline |
| Copy-paste thesis LaTeX verbatim | Saves rewriting | Thesis equations formatted for print, not screen (too long, too dense) | Only as starting point -- reformat every equation for web |
| Single CSS file for everything | Simple build | Specificity issues as complexity grows | Acceptable for MVP if CSS stays under 500 lines |
| Skip font subsetting | Faster setup | 60-80% unnecessary font weight | Acceptable for MVP, must fix before production |

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Multiple `backdrop-filter: blur()` | Jank on mobile, fan noise on laptop | Limit to 1-2 per viewport, radius under 10px | Immediately on mobile GPUs |
| Continuous particle/floating animation | Battery drain, scroll jank | Intersection Observer to pause offscreen | Within 30 seconds on mobile |
| Unoptimized SVG Fano plane | Slow initial render | Simplify paths, use SVGO, keep path count under 50 | At initial load with throttled CPU |
| Web font waterfall | Equations render after body text, CLS | Preload critical KaTeX fonts alongside body fonts | On every load without preloading |
| KaTeX JS shipped to client | 90KB of unused JS (equations already static) | Only import KaTeX in Astro frontmatter (server-side) | On every page load |

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Equations without visual hierarchy | Reader cannot distinguish key results from intermediate steps | Use size, spacing, and subtle background to distinguish key equations |
| No anchor links for sections | Researchers cannot link to specific sections when sharing | Add descriptive `id` to each `<section>`, consider minimal floating nav |
| Comparison table not scannable | Reader spends 30 seconds parsing, gives up | Visual indicators (checkmarks), highlight octonionic trie column, expand acronyms |
| No clear identity statement above the fold | Visitor sees esoteric visuals and math, has no idea what the company does | First sentence: "Discur builds self-organizing memory systems using octonionic algebra" |
| Copy inconsistent in audience level | Experts find vague parts condescending; novices are lost by technical parts | Choose one depth: assume linear algebra and basic ML, but not octonionic algebra |

## "Looks Done But Isn't" Checklist

- [ ] **Equations:** All display equations tested on 375px mobile -- no horizontal overflow
- [ ] **Equations:** Top 10 equations have `aria-label` with plain-English descriptions
- [ ] **Dark theme:** Body text is off-white on dark gray, NOT pure white on pure black
- [ ] **Dark theme:** All accent colors tested for contrast ratio > 4.5:1 against dark background
- [ ] **Fano plane:** SVG renders, scales to mobile, all 7 points and 7 lines labeled, subalgebras color-coded
- [ ] **Copy:** Every paragraph passes anti-slop checklist
- [ ] **Copy:** Every numerical claim has context (baseline comparison or tradeoff framing)
- [ ] **Performance:** Total page weight under 500KB excluding images
- [ ] **Performance:** Lighthouse Performance > 90 on mobile with CPU throttling
- [ ] **Performance:** KaTeX JS is NOT shipped to client (only CSS + fonts)
- [ ] **SEO:** JSON-LD structured data validates
- [ ] **SEO:** Open Graph tags with Fano plane preview image
- [ ] **Fonts:** All fonts self-hosted as WOFF2 (or loaded from Google Fonts with preconnect)
- [ ] **Accessibility:** `prefers-reduced-motion` disables ALL animations
- [ ] **Comparison table:** Readable on mobile

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Math overflow on mobile | LOW | Add `overflow-x: auto; overflow-y: hidden` to equation containers. 1-2 hour fix. |
| AI slop in copy | MEDIUM | Full copy rewrite with anti-slop checklist. 1-2 days. Cannot be patched -- must be rewritten. |
| Pure black/white halation | LOW | CSS variable change for background and text. 30 minutes but requires re-checking accents. |
| Esoteric design too heavy | HIGH | Design system rethink, removal of decorative elements. 2-3 days. Prevention far cheaper. |
| Performance from effects | MEDIUM | Audit CSS filters and JS animations, gate with Intersection Observer. 1 day. |
| Missing equation accessibility | MEDIUM | Write aria-labels for each equation. 4-8 hours. |
| SEO invisibility | LOW | Add JSON-LD, meta tags, plain-text alts. Half-day. But ranking recovery takes months. |

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Math overflow on mobile | Foundation | Every equation tested on 375px viewport |
| KaTeX accessibility | Foundation + Content | VoiceOver reads top 10 equations |
| AI slop copy | Content | Every block passes anti-slop checklist |
| Dark theme halation | Foundation | Contrast checker passes 7:1 for body text |
| Esoteric overreach | Design | "Show a professor" test; max 2 decorative elements |
| Fano plane accuracy | Content/Visual | Mathematician reviews diagram |
| Font loading shifts | Foundation | CLS < 0.1 in Lighthouse; fonts preloaded |
| CSS effects performance | Foundation | Lighthouse Performance > 90 on mobile |
| Comparison table jargon | Content | Non-expert identifies 3 key differentiators |
| SEO invisibility | Foundation + Content | JSON-LD validates; OG image works |
| Animation overload | Design | Max 2 animated elements per viewport |
| Results without context | Content | Every number paired with tradeoff framing |
| Unicode rendering | Foundation | All math via KaTeX, no raw Unicode |
| Page weight bloat | Foundation | < 500KB (ex. images) |

## Sources

- [KaTeX Common Issues (official)](https://katex.org/docs/issues) -- HIGH confidence
- [KaTeX Accessibility Discussion (GitHub #3120)](https://github.com/KaTeX/KaTeX/discussions/3120) -- HIGH confidence
- [KaTeX equation overflow on mobile (GitHub #2942)](https://github.com/KaTeX/KaTeX/discussions/2942) -- HIGH confidence
- [Dark Mode UX Issues (Nielsen Norman Group)](https://www.nngroup.com/articles/dark-mode-users-issues/) -- HIGH confidence
- [Inclusive Dark Mode Design (Smashing Magazine)](https://www.smashingmagazine.com/2025/04/inclusive-dark-mode-designing-accessible-dark-themes/) -- MEDIUM confidence
- [WCAG Contrast Requirements (WebAIM)](https://webaim.org/articles/contrast/) -- HIGH confidence
- [AI Slop Field Guide (ignorance.ai)](https://www.ignorance.ai/p/the-field-guide-to-ai-slop) -- MEDIUM confidence
- [CSS backdrop-filter performance (various sources)](https://blog.pixelfreestudio.com/best-practices-for-performance-optimization-in-web-animations/) -- MEDIUM confidence
- [Font Loading Strategies (web.dev)](https://web.dev/articles/font-best-practices) -- HIGH confidence

---
*Pitfalls research for: Discur.ai technical AI research landing page*
*Researched: 2026-03-30*
