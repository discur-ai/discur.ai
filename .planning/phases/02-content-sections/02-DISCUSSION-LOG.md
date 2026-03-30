# Phase 2: Content Sections - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md -- this log preserves the alternatives considered.

**Date:** 2026-03-30
**Phase:** 2-Content Sections
**Areas discussed:** Section flow & narrative, Copy voice & depth, Fano plane SVG, Results presentation

---

## Section Flow & Narrative

| Option | Description | Selected |
|--------|-------------|----------|
| Lead with the result | Open with what the trie achieves, then explain how | ✓ |
| Mirror the thesis | Problem > mechanism > architecture > results | |
| Let me explain | Custom narrative arc | |

**User's choice:** Lead with the result
**Notes:** Hooks technically-curious visitors

| Option | Description | Selected |
|--------|-------------|----------|
| Key equations only | Associator + 1-2 results | |
| Full equation set | All 7 thesis equations | ✓ |
| Layered reveal | Key inline, expandable details | |

**User's choice:** Full equation set

| Option | Description | Selected |
|--------|-------------|----------|
| Proposed order works | Hero > What It Does > How > Results > Comparison > Contact | ✓ |
| Swap How/What | Math first, then mechanisms | |
| Custom reorder | | |

**User's choice:** Proposed order works

| Option | Description | Selected |
|--------|-------------|----------|
| Architecture-first hero | "A self-organizing memory that replaces gradient descent..." | ✓ |
| Result-first hero | "95.2% accuracy..." | |
| Both stacked | Identity + number | |
| Custom | | |

**User's choice:** Architecture-first

| Option | Description | Selected |
|--------|-------------|----------|
| Key equation below hero | Associator in gold | |
| Brief paragraph | 2-3 sentences expanding | ✓ |
| Nothing | Let headline breathe | |

**User's choice:** Brief paragraph

| Option | Description | Selected |
|--------|-------------|----------|
| Equation + one-liner per mechanism | | |
| Paragraph per mechanism | 3-4 sentences each | ✓ |
| Visual grid | Dense, glanceable | |

**User's choice:** Paragraph per mechanism

| Option | Description | Selected |
|--------|-------------|----------|
| Full-width hero diagram (trie) | Large SVG, visual centerpiece | ✓ |
| Inline with text | Medium, within flow | |
| Skip for v1 | Fano enough | |

**User's choice:** Full-width hero diagram

| Option | Description | Selected |
|--------|-------------|----------|
| Both in sequence (How It Works) | Intuition > formal definition > interpretation | ✓ |
| Definition-first | Lead with math | |
| Intuition-first | Lead with question | |

**User's choice:** Both in sequence (three beats)

| Option | Description | Selected |
|--------|-------------|----------|
| Training method | Backprop vs None | ✓ |
| Routing mechanism | Attention vs Subalgebra | ✓ |
| Memory structure | Flat vs Tree | |
| Consistency check | None vs Algebraic inversion | ✓ |

**User's choice:** Training, Routing, Consistency (3 rows)
**Notes:** Simplified comparison table

**Paper link:** External link to GitHub under discur-ai organization
**Contact:** research@discur.ai + github.com/discur-ai
**Companion paper:** Skip
**Author visibility:** Skip
**Equations placement:** Distributed where relevant
**Invariants:** Dedicated section with all 5 equations

---

## Copy Voice & Depth

| Option | Description | Selected |
|--------|-------------|----------|
| Direct technical | Active voice, no hedging, Anthropic style | ✓ |
| Academic paper | Third person, passive | |
| Founder voice | First person plural | |

**User's choice:** Direct technical

**Anti-slop hard rules (all 4 selected):**
- No "not X, it's Y" constructions
- No staccato fragment lists
- No unearned superlatives
- No hedge phrases
- No em dashes (zero on the entire page) -- added during follow-up

**Additional:** User provided 6 anti-slop research URLs and mandated heavy research before writing. See canonical refs.

| Option | Description | Selected |
|--------|-------------|----------|
| As much as needed | No word count limit, quality over brevity | ✓ |
| One paragraph per section | | |
| Two paragraphs per section | | |

**User's choice:** No target word count

| Option | Description | Selected |
|--------|-------------|----------|
| Both, layered (audience) | Technical generalist surface, ML specialist depth | ✓ |
| ML researchers | | |
| Technical generalists | | |

**User's choice:** Both, layered

| Option | Description | Selected |
|--------|-------------|----------|
| Brief primer (octonions) | Short paragraph on what they are | ✓ |
| Assume knowledge | | |
| One-sentence intro | | |

**User's choice:** Brief primer

| Option | Description | Selected |
|--------|-------------|----------|
| Understated (economy of mechanism) | Show through structure, don't state | ✓ |
| Central thesis | Organizing principle | |
| One of many points | | |

**User's choice:** Understated

| Option | Description | Selected |
|--------|-------------|----------|
| Minimal (section headings) | Single words | ✓ |
| Descriptive | Full phrases | |
| Question-based | Reader's perspective | |

**User's choice:** Minimal

| Option | Description | Selected |
|--------|-------------|----------|
| Post-phase audit (copy review) | Build first, review after | ✓ |
| Trust the pipeline | | |
| Checkpoint on copy | | |

**User's choice:** Post-phase audit

---

## Fano Plane SVG

| Option | Description | Selected |
|--------|-------------|----------|
| Esoteric symbol | Sigil/glyph, gold on dark, no labels | ✓ |
| Geometric + labeled | Standard with basis unit labels | |
| Both versions | Different contexts | |

**User's choice:** Esoteric symbol

| Option | Description | Selected |
|--------|-------------|----------|
| Gold palette | 7 shades gold to amber to bronze | ✓ |
| Distinct hues | 7 different colors | |
| You decide | | |

**User's choice:** Gold palette

| Option | Description | Selected |
|--------|-------------|----------|
| Hero element | Large, in hero section | ✓ |
| Full-width section | | |
| Medium, inline | | |

**User's choice:** Hero element, side by side with text (text left, Fano right)

| Option | Description | Selected |
|--------|-------------|----------|
| SVG with filters (trie nodes) | Gaussian blur glow effects | ✓ |
| Simple circles | | |
| You decide | | |

**User's choice:** SVG with filters

| Option | Description | Selected |
|--------|-------------|----------|
| Hand-coded SVG | Exact coordinates, full control | ✓ |
| Generated from data | | |
| You decide | | |

**User's choice:** Hand-coded

| Option | Description | Selected |
|--------|-------------|----------|
| Keep the circle | Standard recognizable Fano plane | ✓ |
| All straight lines | | |
| Circle with note | | |

**User's choice:** Keep the circle

---

## Results Presentation

| Option | Description | Selected |
|--------|-------------|----------|
| Summary table | Single table with key metrics | ✓ |
| Headline numbers | Large prominent numbers | |
| Both | | |

**User's choice:** Summary table

| Option | Description | Selected |
|--------|-------------|----------|
| With full context (MNIST) | Encoder effect, training size, 3.0 pp gap | ✓ |
| With kNN comparison | | |
| Standalone | | |

**User's choice:** Full context, but CNN result only as headline (95.2%)

| Option | Description | Selected |
|--------|-------------|----------|
| Equal to MNIST (stability) | Both results co-equal | ✓ |
| More prominent | | |
| Less prominent | | |

**User's choice:** Equal prominence

| Option | Description | Selected |
|--------|-------------|----------|
| Skip (prerequisites) | Not landing page material | ✓ |
| Brief mention | | |
| Include in table | | |

**User's choice:** Skip prerequisite experiments

| Option | Description | Selected |
|--------|-------------|----------|
| Dark themed HTML (table) | Custom-styled, gold accent on Oct-Trie | ✓ |
| Minimal markdown | | |
| You decide | | |

**User's choice:** Dark themed HTML with gold Oct-Trie column

| Option | Description | Selected |
|--------|-------------|----------|
| CNN result only (encoder) | 95.2% headline | ✓ |
| Both encoder results | | |
| Mention briefly | | |

**User's choice:** CNN result only

| Option | Description | Selected |
|--------|-------------|----------|
| Highlighted (Oct-Trie column) | Gold accent border/background | ✓ |
| Equal treatment | | |
| You decide | | |

**User's choice:** Highlighted

---

## Claude's Discretion

- Specific copy text (within voice/anti-slop constraints)
- SVG coordinates for diagrams
- Layout details within existing components
- Mobile responsive SVG behavior
- Gold shade selections for 7 subalgebras
- Table HTML/CSS implementation

## Deferred Ideas

None -- discussion stayed within phase scope
