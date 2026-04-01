# Copy Patterns for Deep Tech Marketing

A compendium of copywriting best practices for communicating complex mathematical and scientific ideas to technical audiences. Compiled from 20+ sources spanning professional copywriters, AI research labs, quantitative finance firms, and academic writing guides.

---

## Table of Contents

1. [Headlines for Technical Products](#1-headlines-for-technical-products)
2. [Balancing Mathematical Rigor with Accessibility](#2-balancing-mathematical-rigor-with-accessibility)
3. [Presenting Results Without Hype](#3-presenting-results-without-hype)
4. [Sentence Structure and Rhythm](#4-sentence-structure-and-rhythm)
5. [Handling Jargon](#5-handling-jargon)
6. [Visual and Typographic Patterns](#6-visual-and-typographic-patterns)
7. [CTA Patterns for Research Companies](#7-cta-patterns-for-research-companies)
8. [How Leading Companies Structure Research Pages](#8-how-leading-companies-structure-research-pages)
9. [Writing for Dual Audiences](#9-writing-for-dual-audiences-researchers--technical-generalists)
10. [Integrating Mathematics with Prose](#10-integrating-mathematics-with-prose)
11. [Anti-Patterns to Avoid](#11-anti-patterns-to-avoid)
12. [Sources](#12-sources)

---

## 1. Headlines for Technical Products

### Core Principle: Lead with the Finding, Not the Method

Technical audiences care about *what you discovered* or *what it does*, not how you got there. The method belongs in the body. The headline earns the click.

### Patterns That Work

**Pattern A: Phenomenon-First Statement**
State the discovery or capability directly. No setup, no throat-clearing.

| Example | Company |
|---------|---------|
| "Signs of introspection in large language models" | Anthropic |
| "Alignment faking in large language models" | Anthropic |
| "Simple Programs May Not Do Simple Things" | Wolfram |

Why it works: Technical readers already have the context. Naming the phenomenon directly tells them whether this is relevant to their work. No wasted cognitive effort.

**Pattern B: Solution-Colon-Problem**
Name your approach, then the problem it addresses.

| Example | Company |
|---------|---------|
| "Constitutional Classifiers: Defending against universal jailbreaks" | Anthropic |
| "Gemini 3.1 Flash Live: Making audio AI more natural and reliable" | DeepMind |

Why it works: Gives readers two entry points -- those who recognize the solution name and those searching for the problem space.

**Pattern C: Operational Imperative**
Short, action-oriented. What it *does*, not what it *is*.

| Example | Company |
|---------|---------|
| "Get AI Into Operations" | Palantir |
| "Financial infrastructure to grow your revenue" | Stripe |
| "Make an impact" | Jane Street |

Why it works: For product-oriented pages, this creates immediate relevance. The reader sees themselves in the verb.

**Pattern D: Expectation Inversion**
Challenge what the reader assumes to be true.

| Example | Company |
|---------|---------|
| "Programs We Can't Understand" | Wolfram |
| "Mining for Algorithms" | Wolfram |
| "Automating Creativity" | Wolfram |

Why it works: Technical readers are drawn to paradox and counterintuitive results. This creates intellectual tension that demands resolution.

### Headlines to Avoid

- **Generic superlatives**: "Revolutionary new approach to X" -- immediately signals marketing, not research
- **Clickbait questions**: "Could this algorithm change everything?" -- technical audiences see through rhetorical manipulation
- **Feature-forward framing**: "Introducing our new distributed compute framework" -- no one cares about features in isolation; lead with the problem or finding
- **Intensifier-laden claims**: "Extremely powerful new method" -- Zachary Lipton's ML writing heuristics warn that words like "extremely, very, incredibly" undermine confidence and express unsupported opinions

> **Rule of thumb**: If you could remove the headline and replace it with any other in your field without changing meaning, it's too generic. The best headlines are falsifiable -- they make a specific claim.

Source: [Anthropic Research](https://www.anthropic.com/research), [Wolfram Science](https://www.wolfram.com/wolfram-science/), [Heuristics for Scientific Writing](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)

---

## 2. Balancing Mathematical Rigor with Accessibility

### The Gradient Approach

The best technical pages don't choose between rigor and accessibility -- they layer them. Anthropic's research page demonstrates this clearly:

1. **Hero section**: Plain language mission statement ("investigate the safety, inner workings...")
2. **Research summaries**: Mix accessible framing with specific outcomes ("3,000 hours of red teaming")
3. **Full papers**: Complete technical detail for those who click through

This mirrors Shneiderman's information visualization mantra: *"Overview first, zoom and filter, then details-on-demand."*

Source: [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)

### Progressive Disclosure of Complexity

Wolfram uses this extensively. Their pattern:

1. **Bold concept statement** (the "what")
2. **Concrete example** (the "how") -- often grounding abstract computation in tangible scale
3. **Real-world application** (the "why")

Example: "Even extremely short programs -- say less than a line of Wolfram Language code -- can behave in irreducibly rich and complex ways."

This grounds abstract computation in concrete scale. The reader can picture "less than a line of code" even if they don't understand computational irreducibility.

Source: [Wolfram Science](https://www.wolfram.com/wolfram-science/)

### Analogical Reasoning

Wolfram compares computation exploration to astronomy: "Like the telescope enabled modern astronomy... the Wolfram Language... enabled exploration of the computational universe."

This technique:
- Uses a framework the reader already understands (telescope -> astronomy)
- Maps it to the unfamiliar domain (Wolfram Language -> computational universe)
- Preserves the *scale* of the claim without inflating it

### Segmentation Theory

Research from the multimedia learning community shows that learners perform better when complex information is presented in bite-sized pieces rather than all at once. Break complex lessons into smaller cognitive units.

For a landing page, this means: don't try to explain the entire system in one section. Each section should convey exactly one idea, thoroughly.

Source: [Distill](https://distill.pub/2020/communicating-with-interactive-articles/), [Ten Rules for Structuring Papers](https://pmc.ncbi.nlm.nih.gov/articles/PMC5619685/)

### Multiple Representations

Present the same concept in different forms -- algebraic and geometric, visual and textual, formal and intuitive. The "Multimedia Principle" from educational research shows people learn better from words and pictures together, processing information through both visual and auditory channels simultaneously.

For Discur specifically: the octonionic trie can be described via:
- Mathematical notation (the algebra)
- Visual diagram (the Fano plane, the trie structure)
- Operational description (what it *does* to data)
- Comparative framing (how it differs from existing approaches)

Source: [Distill](https://distill.pub/2020/communicating-with-interactive-articles/)

---

## 3. Presenting Results Without Hype

### The Anti-Hype Toolkit

**Technique 1: Specificity as Credibility**

Replace vague claims with precise measurements.

| Hype | Anti-hype |
|------|-----------|
| "Massive improvements in performance" | "3.2x throughput on standard benchmarks" |
| "The largest study of its kind" | "Nearly 81,000 people participated" (Anthropic) |
| "Withstood extensive testing" | "Withstood over 3,000 hours of red teaming with no universal jailbreak discovered" (Anthropic) |

Numbers are not hype. Numbers are evidence. The difference is precision.

**Technique 2: Acknowledge Limitations Transparently**

Anthropic's description of Claude's introspection capabilities uses the phrase "limited but functional ability" -- directly acknowledging the boundary of the finding while still asserting its significance.

From the ML writing heuristics: "Sin of omission is less dangerous than sin of commission. It's hard to imagine reviewers rejecting a paper because you omitted a one-line boast. It's easy to imagine one line inspiring a rejection."

Source: [Heuristics for Scientific Writing](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)

**Technique 3: Let the Data Structure the Narrative**

From the "Effective Communication of Scientific Results" paper:

- Use geometric mean for comparing individual benchmark latencies
- Be transparent about which metric you're presenting and why
- Report variation ranges between repeated measurements
- Document system specifications, software versions, compilation flags

The honest presentation of *how* you measured something is itself a credibility signal to technical readers.

Source: [Effective Communication of Scientific Results](https://arxiv.org/html/2401.10205v1)

**Technique 4: Avoid Intensifiers Entirely**

From Lipton's heuristics: Words like "extremely, very, incredibly, completely, truly, really" undermine confidence. They are "hostages to fortune" -- they invite the reader to question whether the claim deserves the modifier.

Also avoid vague qualifiers: "rich," "complex," "real" prevent you from explaining what's actually interesting.

| Weak | Strong |
|------|--------|
| "Our method is extremely efficient" | "Our method reduces latency by 47%" |
| "This produces truly remarkable results" | "This matches state-of-the-art on 8 of 9 benchmarks" |
| "A rich representation" | "A 7-dimensional representation preserving both norm and associator" |

Source: [Heuristics for Scientific Writing](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)

**Technique 5: The Pratfall Effect**

Acknowledging minor weaknesses increases trustworthiness. The classic example is Buckley's cough syrup: "It tastes awful. And it works."

For deep tech: acknowledging that your approach has constraints or trade-offs signals intellectual honesty. Technical readers are immediately suspicious of anything that claims to have no downsides.

Source: [The Honest Marketing Method](https://www.campaigndelmar.com/blog/from-hype-to-honesty-the-honest-marketing-method)

**Technique 6: Label Opinions as Opinions**

From Lipton: When expressing subjective views, label them explicitly: "*In our view*, GANs represent..." rather than stating opinions as facts. Technical audiences respect the distinction between finding and interpretation.

---

## 4. Sentence Structure and Rhythm

### The Gary Provost Principle

The single most quoted passage on sentence rhythm in the English language:

> "This sentence has five words. Here are five more words. Five-word sentences are fine. But several together become monotonous. Listen to what is happening. The writing is getting boring. The sound of it drones. It's like a stuck record. The ear demands some variety. Now listen. I vary the sentence length, and I create music. Music. The writing sings. It has a pleasant rhythm, a lilt, a harmony. I use short sentences. And I use sentences of medium length. And sometimes, when I am certain the reader is rested, I will engage him with a sentence of considerable length, a sentence that burns with energy and builds with all the impetus of a crescendo, the roll of the drums, the crash of the cymbals -- sounds that say listen to this, it is important."
>
> -- Gary Provost, *100 Ways to Improve Your Writing*

Source: [Goodreads](https://www.goodreads.com/quotes/373814-this-sentence-has-five-words-here-are-five-more-words)

### Specific Patterns for Technical Copy

**Short -> Long (Punch then Expand)**
Begin with a punchy statement to jar or refocus the reader, then follow with a longer sentence providing context and detail.

> "Memory is structure. The octonionic trie encodes relationships between concepts as algebraic operations over a normed division algebra, preserving both local adjacency and global topology in a single traversal."

**Long -> Short (Build then Land)**
Build complexity, then punctuate with a short declarative that drives the point home.

> "While conventional vector databases flatten semantic relationships into high-dimensional point clouds, losing the structural information that makes retrieval meaningful, the octonionic trie preserves these relationships natively. The geometry does the work."

**The Rule of Threes**
Repeating similar-length sentences (typically short ones) three times, then following with a longer sentence. Our minds expect to reach a conclusion after the third beat.

> "Seven points. Seven lines. One algebraic structure. The Fano plane isn't just a diagram -- it's the multiplication table of the octonions, encoding every product and every associator in a single geometric figure."

Source: [Sentence Variety](https://wordsbyevanporter.com/how-to-use-varied-sentence-lengths-for-better-writing/)

### Sentence Patterns for Technical Writing

From academic writing research, eight core patterns serve nearly all technical prose:

1. **Simple S-V-O**: "The trie encodes relationships."
2. **Introductory phrase + S-V-O**: "Unlike vector databases, the trie preserves structure."
3. **Compound**: "The trie encodes relationships, and the algebra preserves norms."
4. **Compound with description**: "In seven dimensions, the trie encodes relationships and the algebra preserves norms."
5. **Compound predicate**: "The trie encodes relationships and preserves norms."
6. **Compound object**: "The trie preserves both local adjacency and global topology."
7. **Mid-sentence description**: "The trie, built on octonionic algebra, preserves structure."
8. **Trailing description**: "The trie preserves structure, which enables constant-time retrieval."

Avoid repeating the same pattern consecutively. Vary across these eight to create rhythm.

Source: [8 Sentence Patterns for Academic Writing](https://preciseedit.wordpress.com/2012/03/28/8-sentence-patterns-for-academic-and-technical-writing/)

### Additional Rhythm Rules

- **Minimum paragraph length**: 3 sentences minimum. Single-sentence paragraphs should be rare and used for emphasis.
- **Break long sentences**: "If you find yourself struggling to pack an idea in one sentence, it probably requires more than one." Short sentences convey sophistication better than complex structures.
- **Active voice dominance**: Active sentences are direct and crisp. Use passive voice only when the actor is genuinely irrelevant.
- **Read aloud**: The best test for rhythm. If anything sounds "off" when spoken, revise it.

Source: [Heuristics for Scientific Writing](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)

---

## 5. Handling Jargon

### The Two-Question Decision Framework

From the Nielsen Norman Group, every jargon decision starts with two questions:

1. **How many readers will know this term?**
2. **How important is the term in your context?**

This yields a clear decision matrix:

| Reader Familiarity | Term Importance | Action |
|-------------------|-----------------|--------|
| Most/all readers know it | Any | Use without explanation |
| Some readers know it | High | Use with inline explanation |
| Few readers know it | High | Explain first, then introduce term |
| Few readers know it | Low | Use plain-language alternative |

Source: [NN/g Technical Jargon](https://www.nngroup.com/articles/technical-jargon/)

### Critical Warning: Don't Over-Explain to Experts

Explaining a term that should be well-known in the field *might make your audience believe that your content wasn't written for them*. For a technical audience, over-explanation is as damaging as under-explanation.

If your audience is ML researchers, you don't need to explain what a "neural network" is. If they're mathematicians, you don't explain "normed division algebra." The jargon *is* the shorthand that signals you're speaking their language.

Source: [NN/g Technical Jargon](https://www.nngroup.com/articles/technical-jargon/)

### The Bob Bly Ratio

Copywriter Bob Bly advises: **no more than one technical term for every ten words** in a sentence. Overcrowding with jargon "seems cold, inhuman, and almost unreadable."

| Too dense | Better |
|-----------|--------|
| "The ORAM-based DAG traversal leverages FFT-accelerated GRP convolutions over the octonionic fiber bundle" | "The trie traversal uses octonionic algebra to preserve structure -- specifically, FFT-accelerated convolutions over the fiber bundle that connects each node to its neighbors" |

Source: [When to Use Jargon: A Copywriter's Guide](https://www.copywritematters.com/copywriting-jargon/)

### Jargon as Exclusivity Signal

When selling a technical product to a technical audience, jargon can *create exclusivity* -- making readers feel part of an in-crowd who "get it." This is powerful for a product like the octonionic trie, which specifically targets people who understand the mathematical foundations.

Use domain terminology confidently when your audience shares it. Don't apologize for it. Don't hedge. The confidence of using precise mathematical language *is itself* a credibility signal.

Source: [When to Use Jargon: A Copywriter's Guide](https://www.copywritematters.com/copywriting-jargon/)

### The Introduction-Definition Pattern

When you must introduce an unfamiliar term:

- **For mostly-unfamiliar audiences**: "[plain alternative] ([technical term])" -- e.g., "muscle jerking (myoclonus)"
- **For mostly-familiar audiences**: "[technical term] ([plain alternative])" -- e.g., "the associator (a measure of non-associativity)"

For Discur, where the audience is a mix: lead with the technical term, follow with a concise gloss, then never explain it again. Trust the reader.

Source: [NN/g Technical Jargon](https://www.nngroup.com/articles/technical-jargon/)

---

## 6. Visual and Typographic Patterns

### Typography as Hierarchy

For technical content with mathematical notation, typography must work harder than on a typical marketing page. Key principles:

**Three-Size System**: Use no more than 3 type sizes -- small (body/captions), medium (subheads), large (section headers). This provides variety while keeping hierarchical relationships clear. Specific ranges for web: 14-16px body, 18-22px subhead, up to 32px header.

**Serif for Authority**: Serif fonts (like Cormorant Garamond in Discur's stack) evoke classical authority and pair naturally with mathematical notation. The high-contrast strokes of a Garamond revival complement the precise forms of KaTeX-rendered equations.

**Monospace for Precision**: JetBrains Mono or similar for code, algorithmic notation, and any content that needs exact alignment. The regularity of monospace signals "this is precise" to technical readers.

**Display Type for Drama**: Cinzel's Roman-inscribed capitals create ceremonial weight for section titles. Use sparingly -- its power comes from contrast with the lighter body text.

Source: [Visual Hierarchy in Web Design](https://clay.global/blog/web-design-guide/visual-hierarchy-web-design), [Figma Typography Guide](https://www.figma.com/resource-library/typography-in-design/)

### Dark Theme Patterns

For dark-background technical content:

- **Avoid pure black**: Use #121212 or similar dark grays. Pure black creates excessive contrast that causes eye strain during extended reading.
- **Maintain WCAG contrast ratios**: 4.5:1 minimum for body text, 3:1 for large text.
- **Adjust color saturation**: Colors that work on light backgrounds often need desaturation on dark backgrounds to avoid visual vibration.
- **Deep black as canvas**: Dark backgrounds are "the perfect canvas for subtle, glowing geometric animations and crisp, white typography" -- ideal for the Fano plane visualization and sacred geometry elements.

Source: [Dark Mode Website Examples](https://lovable.dev/guides/dark-mode-website-examples-guide)

### Mathematical Layout Integration

- **Inline math flows with prose**: Use $...$ for equations that are part of a sentence. Don't break reading flow.
- **Display math gets its own line**: Use $$...$$ for equations that deserve focused attention. These should be preceded by setup and followed by explanation.
- **Don't over-inline**: Too much inline math makes text hard to read. If an equation is important enough to discuss, give it display space.
- **Auto line-breaking**: KaTeX 0.10.0+ inserts automatic line breaks in inline math after relations or binary operators (=, +), which helps on mobile.
- **Copy-paste support**: KaTeX's copy-tex extension allows readers to copy rendered equations and paste LaTeX source -- a meaningful UX detail for technical audiences.

Source: [KaTeX Documentation](https://katex.org/)

### Whitespace as Communication

For technical content, whitespace isn't empty space -- it's a signal. Generous margins around equations and diagrams:

1. Indicate that these elements deserve focused attention
2. Reduce cognitive load during complex passages
3. Create natural reading "rest points" between dense sections
4. Signal editorial confidence (only insecure writing fills every pixel)

### The F-Pattern and Z-Pattern

Eye-tracking research shows people scan pages in F or Z patterns. For a technical landing page:

- **Hero headline**: Top-left, largest text (first fixation)
- **Key equation or diagram**: Centered, with whitespace above and below (breaks the scanning pattern, demands attention)
- **Supporting sections**: Left-aligned headings that catch the F-pattern downward scan

Source: [Visual Hierarchy in Web Design](https://attentioninsight.com/key-principles-of-visual-hierarchy-in-web-design/)

---

## 7. CTA Patterns for Research Companies

### The Research Company CTA Spectrum

Research-oriented companies use fundamentally different CTAs than SaaS companies. The spectrum runs from exploratory to transactional:

**Exploratory CTAs** (most common for research companies):
- "Read the paper" (Anthropic, DeepMind)
- "Read more" / "Read announcement" (Anthropic)
- "Explore [Product Name]" (Palantir)
- "Learn more" (everywhere, but effective when combined with specificity)
- "See more" (pagination for research lists)

**Engagement CTAs** (mid-spectrum):
- "Try Claude" (Anthropic -- notable for product-focused pages)
- "Schedule an AIP Bootcamp" (Palantir -- hands-on, not passive)
- "Get started" (Stripe -- action-forward, lowercase)

**Recruitment CTAs** (converting research interest to hiring):
- "See open roles" (Anthropic -- positioned after research content)

### Key Insight: Exploration Over Conversion

For a research company, the primary conversion event is not a purchase -- it's **intellectual engagement**. The reader should feel invited to go deeper, not pressured to buy.

CTAs for Discur should favor:
- "Read the paper"
- "Explore the algebra"
- "See the proof"
- "View the architecture"

These respect the reader's intelligence and signal that there is substance behind the headline.

### What NOT to Do

- "Sign up now!" (urgency is inappropriate for research)
- "Don't miss out!" (scarcity tactics alienate technical audiences)
- "Learn how we can help you" (vague, condescending)
- "Get a demo" (premature for a research-stage company)

Source: [Anthropic](https://www.anthropic.com/), [Palantir](https://www.palantir.com/), [Stripe](https://stripe.com/)

---

## 8. How Leading Companies Structure Research Pages

### Anthropic

**Hero**: Plain-language mission statement setting the stakes
**Research summaries**: Three-part structure:
1. Hook with a core discovery (often a question: "Can Claude access and report on its own internal states?")
2. Evidence and scope ("This research finds evidence for a limited but functional ability...")
3. Significance framing ("...a step toward understanding what's actually happening inside these models")

**Notable pattern**: Specificity as credibility -- "Nearly 81,000 people participated -- the largest and most multilingual qualitative study of its kind" grounds claims in measurable scope.

**Narrative framing**: "Project Vend" creates a recurring storyline across multiple posts, building reader investment in ongoing research.

Source: [Anthropic Research](https://www.anthropic.com/research)

### DeepMind

**Headlines**: Action-oriented, benefit-focused. Colon-separated structure: product/project name followed by benefit statement.

**Framing**: Discoveries presented as *solutions to problems* rather than abstract advances. "Decode genetics to pinpoint diseases" -- application first, method implied.

**Subheadings**: Typically under 15 words, using active verbs ("Create," "Talk," "Generate") to emphasize agency.

**Tone**: Accessible optimism without hyperbole. Phrases like "Accelerating discovery" signal ambition while remaining grounded.

Source: [DeepMind Blog](https://deepmind.google/discover/blog/)

### Stripe

**Hero**: "Financial infrastructure to grow your revenue." -- Outcome-focused, no jargon.

**Technique**: Capability stacking -- listing what's possible rather than how it works. "Accept payments, offer financial services, and implement custom revenue models -- from your first transaction to your billionth."

**Scaling narrative**: The em-dash phrase "from your first transaction to your billionth" communicates both accessibility and ambition in one clause.

**Credibility through precision**: 135+ currencies, $1.9T processed, 99.999% uptime. No adjectives needed when you have numbers.

**Writing culture**: CEO Patrick Collison structures emails "like research papers with footnotes." This trickles down. Stripe engineers recognize that "investing extra time to communicate an idea through clear, precise writing delivers outsized results because vastly more people consume the writing than produce it."

Source: [Stripe](https://stripe.com/), [How Stripe Built a Writing Culture](https://slab.com/blog/stripe-writing-culture/)

### Jane Street

**Headline style**: Accessible action verbs ("Make an impact," "Level up," "One big team") with zero jargon at the headline level.

**Technical jargon handling**: Acknowledges depth while scaffolding comprehension. Introduces OCaml by explaining *why* it matters ("maximize productivity") before discussing *what* it is. No assumption of prior knowledge.

**Em-dash as signature**: Used frequently to add emphasis and personality. "You're encouraged to ask questions -- and people really go out of their way to answer them."

**Writer-in-residence model**: James Somers (writer-in-residence) splits time between English and OCaml. His advice: be "the dumbest person who can understand what I'm writing about" to counter the curse of knowledge.

Source: [Jane Street Technology](https://www.janestreet.com/technology/), [Writing, Technically](https://signalsandthreads.com/writing-technically/)

### Palantir

**Hero**: "Get AI Into Operations" -- imperative voice, operational framing.

**Tagline**: "Foundational Software of Tomorrow. Delivered Today." -- Trademarked. Uses period for emphasis. Contrasts future-forward vision with present-tense delivery.

**Product descriptions as operating systems**: "Operating System for the Modern Enterprise" (Foundry), "Operating System for Global Decision Making" (Gotham). This framing claims a category rather than describing a feature set.

**Restraint**: Substantiates claims through third-party research citations rather than internal assertions. "Ranked No. 1" with source link, not "We're the best."

Source: [Palantir](https://www.palantir.com/)

### Wolfram

**Headline pattern**: Discovery-focused, expectation-inverting. "Simple Programs May Not Do Simple Things" -- challenges assumptions.

**Analogical reasoning**: "Like the telescope enabled modern astronomy... the Wolfram Language... enabled exploration of the computational universe." Maps unknown to known.

**Personal voice**: "We built Wolfram Language so we could use it ourselves. But I never imagined how much science we'd be able to discover." Stephen Wolfram's first-person narrative creates authenticity.

**Rhetorical questions**: "What does it take to make a universal computer?" -- poses problems as invitations to discovery.

Source: [Wolfram Science](https://www.wolfram.com/wolfram-science/)

### Two Sigma

**Scientific framing**: "Bringing science to finance" -- positions quantitative finance as scientific endeavor, not Wall Street speculation.

**Credential density**: "~1,700 employees include 250+ PhDs amongst more than 1,000+ data scientists, engineers and other technical professionals." The numbers establish credibility without adjectives.

**Toolkit language**: "a toolkit of quantitative techniques -- from simple ridge regressions to natural language processing -- to extract signal from the noise." This signals breadth while naming specific techniques that prove expertise.

Source: [Two Sigma](https://www.twosigma.com/)

---

## 9. Writing for Dual Audiences (Researchers + Technical Generalists)

### The Layered Information Approach

Ron Minsky (Jane Street): "You can't serve all those people all at once in a single document."

The solution: structure documents so readers "drop off at various points."

1. **Title**: Must work for both audiences -- specific enough for experts, comprehensible to generalists
2. **Opening paragraph**: Plain language, stakes-setting, no jargon
3. **Middle sections**: Progressively more technical, with precise terminology
4. **Deep sections**: Full mathematical/technical detail for specialists

Each layer is self-contained. A reader who stops after the opening paragraph still understands the key message.

Source: [Writing, Technically](https://signalsandthreads.com/writing-technically/)

### The Context-Content-Conclusion (C-C-C) Framework

From the "Ten Rules for Structuring Papers":

Every section follows this arc:
- **Context**: Establish the background (broad)
- **Content**: Present the novel material (narrow)
- **Conclusion**: Deliver takeaways (broad again)

This "broad-narrow-broad" approach maintains credibility with experts while remaining accessible to generalists.

Source: [Ten Rules for Structuring Papers](https://pmc.ncbi.nlm.nih.gov/articles/PMC5619685/)

### Minimize Jargon at Entry Points

In introductions, executive summaries, and hero sections: minimize jargon to maximize reach. Reserve in-depth technical language for sections where it's essential.

From scientific communication research: "Unlike in research papers, avoid acronyms, jargon, or other specialized technical terms in blogs that policymakers -- or someone from the general public -- will not understand." But: "An audience of expert scientists will benefit from the use of technical terms and jargon, which function as shorthand within the field."

The key is *where* you use which register. Entry points are broad. Deep sections are precise.

Source: [Notes on How to Write a Blog](https://www.cgdev.org/publication/notes-how-write-blog), [Tailoring Scientific Communications](https://pmc.ncbi.nlm.nih.gov/articles/PMC7566313/)

### Feedback from Both Audiences

Blog writing is improved by receiving feedback from generalists. Share your draft with someone who knows little about your topic, to see what makes sense to them and what does not. Then share it with a domain expert to verify accuracy. Both perspectives are needed.

Source: [Notes on How to Write a Blog](https://www.cgdev.org/publication/notes-how-write-blog)

---

## 10. Integrating Mathematics with Prose

### Knuth and Halmos's Core Rules

From Donald Knuth's Stanford class on mathematical writing (with guest lectures by Paul Halmos):

1. **Never start a sentence with a symbol**: Write "The polynomial x^n - a has n distinct zeroes" not "x^n - a has n distinct zeroes."

2. **Separate adjacent formulas with words**: Write "Consider S_q, where q < p" not "Consider S_q, q < p."

3. **Don't display false equations**: The reader's eye will alight upon displayed equations and treat them as gospel. Only display equations you stand behind.

4. **Replace symbols with words when possible**: Don't use "...", "=>", "for all", "there exists" symbols in prose. Write the corresponding words.

5. **Halmos's revision standard**: Never publish a word before reading it six times.

Source: [Mathematical Writing by Knuth, Larrabee, Roberts](https://jmlr.csail.mit.edu/reviewing-papers/knuth_mathematical_writing.pdf)

### Keith Conrad's Additional Guidelines

From the UConn mathematical writing guide:

- **Notation should aid comprehension, not hinder it**: If a symbol doesn't clarify, remove it
- **Put words between adjacent formulas**: This prevents visual collision and aids parsing
- **Remember that mathematical writing is still writing**: Grammar, transitions, and paragraph structure apply even when equations are present

Source: [Advice on Mathematical Writing](https://kconrad.math.uconn.edu/blurbs/proofs/writingtips.pdf)

### Equations as Punctuation

In effective technical prose, equations function like sentences within the paragraph structure:

- **Introduce the equation**: "The norm of the product equals the product of the norms:"
- **Display the equation**: $$|xy| = |x||y|$$
- **Explain the equation**: "This multiplicative property -- unique among the normed division algebras -- is what makes octonionic encoding lossless."

The three-step pattern (setup -> equation -> consequence) gives each equation a narrative purpose. An equation without a setup is an equation readers skip.

### When to Use Inline vs Display

- **Inline** ($...$): For equations that are part of the grammatical sentence. Keep these short. Example: "where $q \in \mathbb{O}$"
- **Display** ($$...$$): For equations that deserve focused attention, are central to the argument, or are too long for inline. These should have whitespace above and below.
- **Rule of thumb**: If you'd pause when reading the sentence aloud to "look at the equation," it should be display. If it flows naturally in speech, keep it inline.

Source: [KaTeX Documentation](https://katex.org/), [Mathematical Writing](https://jmlr.csail.mit.edu/reviewing-papers/knuth_mathematical_writing.pdf)

### Francis Su on Mathematical Communication

"Communicating mathematics well is an important part of doing mathematics. Learning to communicate effectively is not just a service to your audience; it is also an exercise in clarifying and structuring your own thinking."

Source: [Guidelines for Good Mathematical Writing](https://www.math.clemson.edu/~macaule/classes/m20_math4120/docs/good-math-writing.pdf)

---

## 11. Anti-Patterns to Avoid

### The AI Slop Checklist

These patterns immediately signal that copy was not written with care:

1. **"Revolutionary" / "Groundbreaking" / "Game-changing"**: No one believes these anymore. Technical audiences especially.

2. **"Leverage" as a verb**: Use "use." Or better: name the specific action.

3. **"Cutting-edge" / "State-of-the-art"**: Describe what makes it advanced instead of asserting that it is.

4. **"Seamlessly" / "Effortlessly"**: Nothing is seamless. Claiming so undermines trust.

5. **"Harness the power of"**: Replace with what the power actually does.

6. **"Supercharge" / "Skyrocket" / "Elevate"**: From the Honest Marketing Method: "If your copy uses words like 'elevate', 'supercharge', and 'skyrocket', you need to go back to the drawing board."

7. **Passive constructions hiding the actor**: "Patterns are discovered" -- by whom? By what? Attribution matters.

8. **Rhetorical questions as filler**: "What if there were a better way?" -- technical audiences find this patronizing.

9. **"In today's fast-paced world"**: Immediate credibility death. Delete any sentence that could precede any product in any field.

10. **Unqualified superlatives**: "The most powerful" / "The fastest" / "The best" -- unless you can cite a benchmark, these are empty calories.

Source: [Honest Marketing Method](https://www.campaigndelmar.com/blog/from-hype-to-honesty-the-honest-marketing-method), [Heuristics for Scientific Writing](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)

### Deep Tech-Specific Anti-Patterns

1. **Over-simplifying years of research**: "The wrong partner can oversimplify years of research or bury it under generic marketing language." Respect the complexity.

2. **Broad positioning**: "Promising speed, simplicity, and growth without clearly explaining who the offer is for, what changes after adoption, or why it's more credible than alternatives." Be specific about what your technology does and doesn't do.

3. **Feature-forward without problem context**: From Lipton: "It's difficult to get excited about a solution if you don't believe there is a problem." Establish the problem first.

4. **Generic openings**: "Delete sentences that could precede any ML paper. First sentences are the most precious real estate in your introduction." The first sentence should be unique to *your* work.

5. **Withholding key results**: "If your paper yields a single equation... stick it right in the introduction." Don't tease. Don't build suspense. Technical readers want the result upfront.

Source: [B2B Deep Tech Marketing](https://www.progrowth.services/blog/b2b-tech-marketing-agency-deep-tech-analysis/), [Heuristics for Scientific Writing](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)

### The Confirmation Bias Trap

From experimental methodology: "Apply equal scrutiny to results that both support and contradict your hypothesis." On a landing page, this means: don't cherry-pick only the results that look good. Present the full picture. Technical audiences will find the omissions, and they'll trust you less for making them.

Source: [Effective Communication of Scientific Results](https://arxiv.org/html/2401.10205v1)

---

## 12. Sources

### Professional Copywriting and Marketing
- [Jeremy Mac: Ultimate Guide to Tech Copywriting](https://www.jeremymac.com/blogs/news/your-ultimate-guide-to-tech-copywriting-in-2025-free-course-for-tech-copywriters)
- [SciencePod: Technical Copywriting Essentials](https://sciencepod.net/technical-copywriting/)
- [CopywriteMatters: When to Use Jargon](https://www.copywritematters.com/copywriting-jargon/)
- [Campaign del Mar: Honest Marketing Method](https://www.campaigndelmar.com/blog/from-hype-to-honesty-the-honest-marketing-method)
- [Command.ai: B2B SaaS Landing Page Copywriting](https://www.command.ai/blog/b2b-saas-landing-page-copywriting/)
- [ProGrowth: B2B Tech Marketing for Deep Tech](https://www.progrowth.services/blog/b2b-tech-marketing-agency-deep-tech-analysis/)

### Company Research Pages and Blogs
- [Anthropic Research](https://www.anthropic.com/research)
- [Anthropic Homepage](https://www.anthropic.com/)
- [DeepMind Blog](https://deepmind.google/discover/blog/)
- [Stripe Homepage](https://stripe.com/)
- [Stripe Engineering Blog](https://stripe.com/blog/engineering)
- [Jane Street Technology](https://www.janestreet.com/technology/)
- [Jane Street: Writing, Technically](https://signalsandthreads.com/writing-technically/)
- [Wolfram Science](https://www.wolfram.com/wolfram-science/)
- [Palantir Homepage](https://www.palantir.com/)
- [Two Sigma](https://www.twosigma.com/)
- [OpenAI Research](https://openai.com/news/research/)

### Scientific and Academic Writing Guides
- [Zachary Lipton: Heuristics for Scientific Writing (ML Perspective)](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/)
- [Effective Communication of Scientific Results (arXiv)](https://arxiv.org/html/2401.10205v1)
- [Ten Simple Rules for Structuring Papers (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5619685/)
- [Tailoring Scientific Communications for Audience (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7566313/)
- [Mathematical Writing by Knuth, Larrabee, Roberts](https://jmlr.csail.mit.edu/reviewing-papers/knuth_mathematical_writing.pdf)
- [Keith Conrad: Advice on Mathematical Writing](https://kconrad.math.uconn.edu/blurbs/proofs/writingtips.pdf)
- [Francis Su: Guidelines for Good Mathematical Writing](https://www.math.clemson.edu/~macaule/classes/m20_math4120/docs/good-math-writing.pdf)

### Writing Craft and Sentence Structure
- [Gary Provost on Sentence Variation (Goodreads)](https://www.goodreads.com/quotes/373814-this-sentence-has-five-words-here-are-five-more-words)
- [Evan S. Porter: Sentence Variety](https://wordsbyevanporter.com/how-to-use-varied-sentence-lengths-for-better-writing/)
- [8 Sentence Patterns for Academic Writing](https://preciseedit.wordpress.com/2012/03/28/8-sentence-patterns-for-academic-and-technical-writing/)
- [How Stripe Built a Writing Culture](https://slab.com/blog/stripe-writing-culture/)

### UX and Design
- [NN/g: Technical Jargon](https://www.nngroup.com/articles/technical-jargon/)
- [Distill: Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/)
- [Visual Hierarchy in Web Design (Clay)](https://clay.global/blog/web-design-guide/visual-hierarchy-web-design)
- [Dark Mode Website Examples (Lovable)](https://lovable.dev/guides/dark-mode-website-examples-guide)
- [KaTeX Documentation](https://katex.org/)

### Deep Tech Positioning
- [First Round Review: Building a Deep Tech Company](https://review.firstround.com/building-a-deep-tech-company-most-startup-advice-doesnt-apply-read-this-instead/)
- [Beyond the Science: Deep Tech Value (Medium)](https://medium.com/nerd-for-tech/beyond-the-science-capturing-value-in-b2b-deep-tech-sector-11b1f8536658)
- [Notes on How to Write a Blog (CGDev)](https://www.cgdev.org/publication/notes-how-write-blog)

---

## Quick Reference: Patterns for Discur

### Headline Candidates (applying the patterns above)

| Pattern | Example |
|---------|---------|
| Phenomenon-first | "Self-organizing memory through octonionic algebra" |
| Solution-colon-problem | "The octonionic trie: associative memory without the retrieval problem" |
| Expectation inversion | "Seven dimensions. One data structure." |
| Operational imperative | "Structure that remembers" |

### Tone Calibration

Discur's voice should be:
- **Confident without being loud**: Let the mathematics speak. Numbers, not adjectives.
- **Precise without being dense**: One concept per section. Progressive disclosure.
- **Understated without being passive**: Active voice. Short declarative statements. Then the longer sentence that earns its length.
- **Editorial without being academic**: This is a landing page, not a paper. But the rigor of the paper stands behind every sentence.

### The Discur Test

Before publishing any copy, ask:
1. Could this sentence appear on any AI startup's landing page? If yes, delete it.
2. Does this sentence contain a claim? If yes, is there a number or proof behind it?
3. Would a mathematician reading this feel respected? Would a technical generalist feel included?
4. Does the math have a narrative purpose, or is it decorative?
5. If you removed every adjective, would the meaning change? If not, the adjectives are filler.
