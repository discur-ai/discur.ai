# Phase 3: Visual Polish & Animation - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.

**Date:** 2026-03-31
**Phase:** 3-Visual Polish & Animation
**Areas discussed:** Scroll animations, Fano plane animation, Decorative elements, Progressive enhancement

---

## Scroll Animations

| Option | Description | Selected |
|--------|-------------|----------|
| Fade up | Opacity + translateY 20-40px | ✓ |
| Fade only | Pure opacity | |
| Staggered children | Section then children stagger | |

| Option | Description | Selected |
|--------|-------------|----------|
| Quick (0.4-0.6s) | Snappy | ✓ |
| Medium (0.8-1.0s) | | |
| Slow (1.2-1.5s) | | |

| Option | Description | Selected |
|--------|-------------|----------|
| Standard (top: 70%) | 30% scrolled into view | ✓ |
| Early (top: 80%) | | |
| Late (top: 50%) | | |

| Option | Description | Selected |
|--------|-------------|----------|
| Slight delay (equations) | 0.2-0.3s after parent | ✓ |
| With parent | | |
| Glow entrance | | |

**Easing:** Claude's discretion
**Trie animation:** Also animate (nodes glow root > children > grandchildren, ~2s)
**SVG hover:** Claude's discretion
**Table rows:** Stagger 0.1s between rows
**Hero:** Animate on page load (headline > paragraph > Fano)

---

## Fano Plane Animation

| Option | Description | Selected |
|--------|-------------|----------|
| Both combined | Lines draw on + subalgebra glow sequence | ✓ |
| Draw-on only | | |
| Glow sequence only | | |

| Option | Description | Selected |
|--------|-------------|----------|
| After hero text | 0.5s after headline/paragraph | ✓ |
| On page load | | |
| On scroll only | | |

| Option | Description | Selected |
|--------|-------------|----------|
| Quick (1.5-2s) | Fast draw + quick glow | ✓ |
| Medium (3-4s) | | |
| Ceremonial (5-7s) | | |

**Replay:** No replay. Once only.
**Trie timing:** Match Fano (~2s)

---

## Decorative Elements

| Option | Description | Selected |
|--------|-------------|----------|
| Section dividers | Geometric motifs between sections | ✓ |
| Background pattern | Constellation at 3-5% opacity | ✓ |
| Gradient accents | | |
| None needed | | |

**Divider style:** Triple dot (three gold dots, typographic ornament)
**Background style:** Constellation (50-80 points + connecting lines, 3-5% opacity)

---

## Progressive Enhancement

| Option | Description | Selected |
|--------|-------------|----------|
| Full content, no animation | All sections visible, diagrams static | ✓ |
| Full content + note | | |
| You decide | | |

| Option | Description | Selected |
|--------|-------------|----------|
| client:idle | Load GSAP after page idle | ✓ |
| client:visible | | |
| You decide | | |

**No "enable JS" note.** Page just works.

---

## Claude's Discretion
- Easing curves
- SVG hover interactions
- Constellation geometry
- GSAP timeline details
- ScrollTrigger config
- Triple dot sizing

## Deferred Ideas
None
