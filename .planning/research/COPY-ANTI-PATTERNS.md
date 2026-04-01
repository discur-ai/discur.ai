# Copy Anti-Patterns: A Compendium of AI Slop, Bad Writing Habits, and Poor Technical Communication

**Purpose:** Reference material for a copy review checklist. Every pattern below has been documented by editors, linguists, technical readers, or writing coaches as a tell that damages credibility.

**Compiled from:** 20+ sources including editorial guides, academic linguistic studies, Wikipedia's AI detection policy, Reddit/HN community criticism, and professional copywriters' blacklists.

**Date:** 2026-03-31

---

## Table of Contents

1. [Structural Patterns](#1-structural-patterns)
2. [Rhetorical Patterns](#2-rhetorical-patterns)
3. [Vocabulary Tells](#3-vocabulary-tells)
4. [Formatting Tells](#4-formatting-tells)
5. [Tone Tells](#5-tone-tells)
6. [Technical Copy Failures](#6-technical-copy-failures)
7. [Reader Detection Signals](#7-reader-detection-signals)
8. [Composition-Level Anti-Patterns](#8-composition-level-anti-patterns)
9. [The Master Blacklist](#9-the-master-blacklist)
10. [Sources](#10-sources)

---

## 1. Structural Patterns

Sentence and paragraph structures that signal LLM authorship regardless of vocabulary.

---

### Pattern: Uniform Paragraph Length

**Bad example:**
> The octonionic trie organizes memory through algebraic structure. Each node in the trie corresponds to a basis element. The relationships between nodes preserve the multiplication table. This creates a natural hierarchy for information retrieval.
>
> Traditional approaches to memory organization rely on flat key-value stores. These systems lack the mathematical structure needed for compositional reasoning. The result is brittle retrieval that breaks under novel queries. Scaling these systems requires exponential storage growth.
>
> Our approach addresses these limitations through algebraic invariance. The trie structure preserves associator relationships between elements. Queries decompose naturally along the algebraic structure. This enables sublinear scaling with bounded error guarantees.

**Why it fails:** Every paragraph is exactly 4 sentences, follows the same rhythm (claim, elaboration, consequence, implication), and maintains identical cadence. Human writing has varied paragraph lengths -- some paragraphs are a single sentence for emphasis, others run long when developing an argument. Uniform blocks create a visual "wall" rather than a readable "landscape." Academic studies confirm LLMs produce remarkably consistent sentence lengths (typically 15-25 words per sentence) compared to human variation.

**Instead:** Vary paragraph length deliberately. A one-sentence paragraph after a long one creates emphasis. Let some ideas breathe in 6 sentences; compress others into 2. The shape of the text on the page should reflect the shape of the argument.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns), [Hastewire](https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells), [Cherryleaf](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/)

---

### Pattern: Listicle in a Trench Coat

**Bad example:**
> The first advantage of octonionic tries is their algebraic closure. The second advantage is compositional retrieval. The third advantage is that the structure naturally encodes associativity constraints. Finally, the fourth advantage is sublinear scaling.

**Why it fails:** This is a bullet list pretending to be prose. The ordinal numbering ("The first... The second... The third...") reveals the underlying list structure. Prose should develop ideas with logical connectives and argumentative flow, not simply enumerate.

**Instead:** If you have a list, use a list. If you're writing prose, develop the argument: "Octonionic tries close under algebraic operations, which means compositional retrieval comes free -- you don't bolt it on. The same algebraic structure that gives you closure also encodes associativity constraints, and both properties together produce sublinear scaling."

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Parallel Kickers

**Bad example:**
> The mathematics is exact. [3 sentences of elaboration]
>
> The implementation is elegant. [3 sentences of elaboration]
>
> The results are undeniable. [3 sentences of elaboration]

**Why it fails:** Every section ends (or begins) with the same punchy declarative structure. If a reader can predict the shape of your next sentence ending, you've fallen into autopilot. The regularity signals generation, not thought.

**Instead:** Let conclusions emerge from evidence rather than announcing them with identical grammatical structures. Some sections can end with a question. Some with a concrete number. Some mid-thought, letting the next section pick up.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns)

---

### Pattern: Formulaic Sentence Structures (Excessive Rule of Three)

**Bad example:**
> Fast, efficient, and reliable.

> Think bigger. Act bolder. Move faster.

> Products impress people; platforms empower them. Products solve problems; platforms create worlds. Products scale linearly; platforms scale exponentially.

**Why it fails:** The tricolon (three-element list) is a legitimate rhetorical device -- "veni, vidi, vici" works. But when every sentence falls into triplets, the third item exists to complete the pattern rather than add information. LLMs abuse tricolons because RLHF training rewards the satisfying cadence. The test: does the third item surprise, or does it just complete?

**Instead:** Use tricolons sparingly and only when the third element genuinely escalates or subverts. Most lists are naturally two items or four. Let them be.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns), [tropes.fyi](https://tropes.fyi/directory), [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)

---

### Pattern: Inanimate Agency

**Bad example:**
> The framework reveals key insights. The data demonstrates a clear pattern. The algorithm navigates complex trade-offs. The architecture enables seamless integration.

**Why it fails:** Four consecutive sentences where non-human subjects perform active verbs erases human presence from the writing. Frameworks don't reveal, people discover. Data doesn't demonstrate, researchers observe. This pattern creates a world where tools act and humans are absent -- the opposite of what technical readers want, which is to understand the humans behind the work and the decisions they made.

**Instead:** Put people back in: "We found that..." or simply state the finding directly without attributing agency to inanimate objects. "The error rate drops 40% under compositional queries" is better than "The system demonstrates a 40% improvement."

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns)

---

### Pattern: Wh- Openers That Delay the Subject

**Bad example:**
> What makes octonionic algebra particularly suited for memory organization is its non-associative structure.

**Why it fails:** The pre-colon material ("What makes X particularly suited") adds no information. Delete it and the sentence improves: "Octonionic algebra's non-associative structure naturally organizes memory." The Wh- construction is a stalling tactic -- it delays the actual subject to create a feeling of buildup that rarely pays off.

**Instead:** Lead with the subject. Delete the "What makes..." construction and check if meaning is lost. It almost never is.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns)

---

### Pattern: Colon Reveals (False Suspense)

**Bad example:**
> Here's what nobody talks about: consistency matters.

> Here's the thing: non-associativity isn't a bug.

> Here's where it gets interesting: the trie converges.

**Why it fails:** The pre-colon phrase ("Here's the thing:") does zero work. It promises revelation but delivers observations that don't require theatrical framing. This construction appears so consistently in LLM output that it has become a primary detection signal. Variants include "Here's the kicker," "Here's the deal," "Here's what most people miss."

**Instead:** Delete the preamble. State the point directly. If the observation is genuinely surprising, the surprise should come from the content, not from being told you should be surprised.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns), [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Anaphora Abuse

**Bad example:**
> They assume that users will pay for the premium tier. They assume that developers will build on the API. They assume that the market will support three competitors. They assume wrong.

**Why it fails:** Repeating the same sentence opening creates a rhythmic hammer that feels manufactured. Real anaphora (Churchill's "We shall fight...") works because the repetition builds genuine emotional momentum toward a specific rhetorical purpose. LLM anaphora repeats because it's a pattern that scores well in training, not because the argument demands it.

**Instead:** Reserve anaphora for moments of genuine rhetorical weight. If you're making three related points, vary the sentence openings and let the logical connection carry the weight.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Self-Posed Questions Answered Immediately

**Bad example:**
> The result? Devastating. The implication? A complete rethinking of memory architecture. The solution? Octonionic algebra.

**Why it fails:** This "The X? A Y." pattern creates faux-dramatic tension by posing a question and answering it in the same breath. The reader never had time to wonder -- the question is staged for cadence, not inquiry. It feels like a TED talk transcript, which is exactly the register LLMs default to.

**Instead:** If the answer follows immediately, you don't need the question. "The result was devastating" or just state the result without the dramatic frame.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Short Punchy Fragments as Separate Paragraphs

**Bad example:**
> He published this.
>
> Openly.
>
> In a book.
>
> As a priest.

**Why it fails:** RLHF training pushes models toward lowest-common-denominator readability. Single-word or two-word paragraphs manufacture emphasis for things that don't warrant it. This style reads like a Twitter thread or a motivational Instagram post, not technical communication. It's the written equivalent of clapping between every word.

**Instead:** Combine related thoughts into actual paragraphs. Use short sentences within paragraphs for rhythm variation, not as standalone visual events.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)

---

## 2. Rhetorical Patterns

Persuasive moves that feel manufactured rather than earned.

---

### Pattern: "It's Not X, It's Y" (Negative Parallelism)

**Bad example:**
> It's not a database. It's a memory system.

> This isn't about faster search. It's about fundamentally different retrieval.

> The question isn't whether AI needs better memory. The question is what kind of memory.

**Why it fails:** This construction creates a false binary by dismissing a position the reader may not hold, then presenting the alternative as profound. The pattern is so overused by LLMs that it has become the canonical example of AI slop rhetoric. The diagnostic: does X reflect what readers actually believe? If not, you're attacking a strawman for theatrical effect.

Variants: "Not X, but Y." / "It's not about X. It's about Y." / "The question isn't X. The question is Y." / "Not because X, but because Y."

**Instead:** If there's a genuine misconception to correct, name who holds it and why. Otherwise, state your position directly without the theatrical negation. "This is a memory system" is stronger than "This is not a database, it's a memory system" -- the latter makes the reader think about databases when you want them thinking about memory.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [tropes.fyi](https://tropes.fyi/directory), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

### Pattern: Dramatic Countdown ("Not X. Not Y. Just Z.")

**Bad example:**
> Not a tutorial. Not a listicle. Not a roundup. A fundamental rethinking of memory.

> Not a bug. Not a feature. A fundamental design flaw.

**Why it fails:** The countdown builds false tension by negating things the reader wasn't considering. Were readers expecting a tutorial? A listicle? The negations exist for dramatic rhythm, not to clear genuine misconceptions. The final reveal ("just Z") is positioned as the payoff of the suspense, but the suspense was manufactured.

**Instead:** State what the thing is. "This is a rethinking of memory architecture" needs no runway of negations.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Negative Listing (Defining by Negation)

**Bad example:**
> Not a tutorial. Not a listicle. Not a roundup.

**Why it fails:** Defining something by what it isn't is a dodge. The writer hasn't committed to what the thing IS. Negation patterns often conceal vagueness -- it's easier to say what something isn't than to make a specific positive claim. The diagnostic: were readers actually assuming the negated thing?

**Instead:** Define positively. Say what it is, specifically.

**Source:** [Robots Ate My Homework](https://robotsatemyhomework.substack.com/p/ai-writing-patterns)

---

### Pattern: False Exclusivity Claims

**Bad example:**
> Nobody talks about the role of non-associativity in memory systems.

> What most people miss about octonionic algebra is...

> This doesn't get enough attention: the trie structure has algebraic symmetry.

**Why it fails:** "Nobody talks about" is almost always false and functions as clickbait. The claim exists to position the writer as uniquely insightful, which is a form of unearned authority. Technical audiences check -- if many people have talked about it, you've lost credibility on the first sentence.

**Instead:** If the point is genuinely underappreciated, cite evidence of the gap. "Published surveys on memory architectures don't address algebraic structure (Smith 2023, Jones 2024)" is a verifiable claim. "Nobody talks about" is not.

**Source:** [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [tropes.fyi](https://tropes.fyi/directory)

---

### Pattern: Patronizing Analogies

**Bad example:**
> Think of it like a highway system for data.

> Imagine the octonionic trie as a library where every book knows where every other book is.

**Why it fails:** "Think of it as..." assumes the reader needs a metaphor to understand. For a technical audience, this is condescending. The analogy also tends to be reductive -- highways and libraries are simpler than the thing being explained, and the analogy introduces false intuitions. LLMs generate analogies because they're pattern-matching from training data, not because the analogy illuminates.

**Instead:** For technical audiences, use precise language. If an analogy genuinely helps (rare for specialists), make it non-obvious and acknowledge its limits. Better: show the math, show the behavior, let the reader build their own intuition.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: "Imagine a World Where..."

**Bad example:**
> Imagine a world where every AI system has self-organizing memory -- where information structures itself algebraically, retrieval is compositional, and scaling is sublinear.

**Why it fails:** This is the "futurism opener" -- an invitation to imagine a utopia followed by a list of wonderful outcomes. It signals speculation rather than results. Technical readers want evidence that the thing works, not an invitation to daydream about what might happen if it did. The construction is also deeply associated with TED talks and product launches, both of which prime skepticism.

**Instead:** Show results. "In benchmarks, the octonionic trie retrieves compositional queries in O(log n) time where flat key-value stores require O(n)" tells the reader what actually happens rather than asking them to imagine what might.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: "Despite Its Challenges..." (Challenge Dismissal Formula)

**Bad example:**
> Despite its challenges, the octonionic approach continues to show promise in large-scale memory systems.

> While there are limitations to non-associative algebra, the potential benefits far outweigh the drawbacks.

**Why it fails:** This is a rigid formula: acknowledge problem, immediately dismiss it with optimism. The "challenges" are never specified, never quantified, never engaged with. It's the written equivalent of a politician saying "look, it's complicated, but we're making progress." Technical readers want the challenges named, measured, and honestly assessed.

**Instead:** Name the specific challenges and address them directly. "Non-associative multiplication makes parallelization harder -- the Moufang loop structure constrains how you can partition operations across cores. We address this by..."

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

---

### Pattern: Historical Analogy Stacking

**Bad example:**
> Apple didn't build Uber. Facebook didn't build Spotify. Stripe didn't build Shopify. AWS didn't build Airbnb. The platform is not the product.

**Why it fails:** Rapid-fire listing of famous companies creates false authority through association. Each analogy is doing zero analytical work -- the reader is being overwhelmed by brand names rather than convinced by argument. The conclusion ("The platform is not the product") doesn't follow from the examples without substantial analysis that's been skipped.

**Instead:** Use one analogy that you develop in depth, or skip analogies entirely and make the argument on its own merits.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

## 3. Vocabulary Tells

Specific words and phrases whose frequency in LLM output has been measured and documented.

---

### Pattern: The Canonical AI Words

These words have been empirically documented as appearing at dramatically higher frequencies in LLM-generated text versus human text. A 2024 study in *Nature Human Behaviour* analyzed 1 million+ scientific papers and found that certain words' frequency rose from 47.1 to 224.2 per 10,000 papers post-ChatGPT.

**The primary offenders (with documented frequency spikes):**

| Word | Context of Overuse | Notes |
|------|-------------------|-------|
| delve | "Let's delve into..." | 654% increase in PubMed post-ChatGPT. The canonical AI word -- so famous it became a meme. Usage peaked 2023-2024, declined 2025+ as models were retrained to avoid it. |
| crucial | "This is crucial for..." | Replaces "important" at superhuman frequency. |
| pivotal | "A pivotal moment in..." | Used for events that are not pivotal. |
| robust | "A robust framework..." | Technical word used non-technically. |
| tapestry | "The rich tapestry of..." | Ornate metaphor for anything interconnected. |
| landscape | "The evolving landscape of..." | Applied to any field or domain. |
| paradigm | "A new paradigm..." | Used without Kuhnian precision. |
| leverage | "Leverage this approach..." | Verb form of a noun, used for everything. |
| foster | "Foster collaboration..." | LLMs love nurturing verbs. |
| underscore | "This underscores the..." | Superficial analysis marker. |
| multifaceted | "A multifaceted approach..." | Says "complex" with more syllables. |
| intricate | "The intricate details..." | Vague intensifier. |
| meticulous | "Meticulously crafted..." | Unverifiable adverbial praise. |
| commendable | "A commendable effort..." | LLM praise register. |
| innovative | "An innovative approach..." | Meaningless without specifics. |
| seamless | "Seamless integration..." | Nothing integrates seamlessly. |
| comprehensive | "A comprehensive overview..." | Self-praise for thoroughness. |
| transformative | "A transformative technology..." | Claims transformation without evidence. |
| groundbreaking | "Groundbreaking research..." | Reserve for actual paradigm shifts. |
| testament | "A testament to..." | Promotional language. |
| vibrant | "A vibrant community..." | Travel-guide register. |

**Source:** [Nature Human Behaviour study](https://www.science.org/content/article/one-fifth-computer-science-papers-may-include-ai-content), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

### Pattern: Pompous Copula Substitution

**Bad example:**
> The octonionic trie serves as a foundation for self-organizing memory.

> This result stands as a demonstration of algebraic closure.

> The architecture represents a departure from conventional approaches.

**Why it fails:** Substituting "is" with "serves as," "stands as," "marks," or "represents" is an LLM habit documented by multiple sources. The model rotates through synonyms for "is/are" to avoid repetition, but the result is pompous and wordy. Wikipedia editors flag this as a primary AI indicator.

**Instead:** Use "is." The octonionic trie is a foundation for self-organizing memory. Simple copulas are not repetitive -- they're invisible, which is what you want.

**Source:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Filler Transitions

**Bad example:**
> It's worth noting that the trie preserves algebraic structure.

> It bears mentioning that non-associativity is a feature, not a bug.

> Importantly, this approach differs from standard tries.

> Notably, the error bounds are provable.

> Interestingly, the convergence rate is sublinear.

**Why it fails:** These transitions add zero information. They signal that what follows is an aside rather than the main argument -- yet the content that follows is usually a central point. "It's worth noting" is the written equivalent of clearing your throat. If something is worth noting, note it. The word "importantly" applied to your own point is self-congratulatory.

**Instead:** Delete the transition. Start with the content. "The trie preserves algebraic structure" is stronger without the preamble.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/), [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

---

### Pattern: Superficial Analysis Phrases (Present Participle Tacking)

**Bad example:**
> The octonionic trie organizes memory hierarchically, highlighting its importance in AI systems.

> This approach reduces retrieval time, reflecting broader trends in algebraic computing.

> The associator constraints propagate through the structure, contributing to the system's robustness.

> Non-associative algebra provides unique properties, underscoring its role in memory architecture.

**Why it fails:** The "-ing" phrase tacked onto the end ("highlighting," "reflecting," "contributing," "underscoring") injects pseudo-analysis without doing actual analytical work. These phrases gesture at significance without explaining it. Wikipedia editors call these "superficial analyses" and flag them as primary AI indicators. The pattern: [factual statement], [present participle] + [vague importance claim].

**Instead:** Either make the analytical claim concrete ("This matters because...") or delete the tacked-on phrase entirely. If the fact is important, explain why in a full sentence with specific reasoning.

**Source:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [tropes.fyi](https://tropes.fyi/directory)

---

### Pattern: Magic Adverbs

**Bad example:**
> The trie quietly organizes information across the algebraic structure.

> This fundamentally changes how we think about memory.

> The results are remarkably consistent across benchmarks.

> The approach is arguably the most significant advance in memory systems.

**Why it fails:** "Quietly" suggests subtle importance without justification. "Fundamentally" claims profundity without evidence. "Remarkably" tells the reader what to think instead of presenting remarkable evidence. "Arguably" is a hedge that pretends to be a boost. These adverbs do the emotional labor that evidence should do.

**Instead:** Show, don't tell. Replace "remarkably consistent" with the actual consistency numbers. Replace "fundamentally changes" with what specifically changes. Delete "quietly" entirely -- if something is important, say why.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Grandiose Stakes Inflation

**Bad example:**
> This will fundamentally reshape how we think about artificial intelligence.

> The octonionic trie defines the next era of memory architecture.

> Something entirely new has emerged.

**Why it fails:** Framing a technical contribution as world-historically significant without evidence. API pricing becomes a civilization meditation. A data structure becomes the defining technology of an era. Technical readers calibrate their trust against the gap between claim and evidence -- grandiose claims with modest evidence destroy credibility instantly.

**Instead:** Let the work speak. "The octonionic trie reduces compositional retrieval from O(n) to O(log n)" is a concrete claim that readers can evaluate. Let them decide if it's era-defining.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)

---

### Pattern: Vague Attribution

**Bad example:**
> Experts argue that current memory architectures are insufficient.

> Industry reports suggest a growing need for algebraic approaches.

> Observers have cited the limitations of key-value stores.

> Several publications have noted the potential of non-associative algebra.

**Why it fails:** Which experts? Which reports? Which observers? Which publications? Unnamed authorities are a dodge -- they create the impression of consensus without providing verifiable evidence. Technical readers immediately ask "who?" and when the answer is "nobody specific," trust collapses.

**Instead:** Name the source. "Graves et al. (2024) showed that key-value retrieval scales linearly under compositional queries." If you can't name a source, the claim may not be supportable.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Elegant Variation (Excessive Synonym Rotation)

**Bad example:**
> The octonionic trie organizes information. This algebraic structure provides hierarchical retrieval. The mathematical framework enables compositional queries. Our non-associative system demonstrates sublinear scaling.

**Why it fails:** Each sentence uses a different synonym for the same thing (octonionic trie / algebraic structure / mathematical framework / non-associative system). LLMs rotate synonyms to avoid word repetition, but the result is confusion -- is the writer talking about four different things or one? Wikipedia editors document this as "elegant variation" and flag it as an AI indicator. Consistent terminology is a feature of good technical writing, not a flaw.

**Instead:** Pick one term and use it consistently. In technical writing, repetition of the correct term is clarity, not weakness.

**Source:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

---

### Pattern: Nominalization (Verb-to-Noun Bloat)

**Bad example:**
> The implementation of the trie enables the facilitation of retrieval through the organization of algebraic relationships.

**Why it fails:** Academic studies show instruction-tuned LLMs use nominalizations at 1.5-2x the rate of humans. "Implementation" instead of "implement," "facilitation" instead of "facilitate," "organization" instead of "organize." This creates informationally dense but hard-to-parse prose. The PNAS study (2025) identified nominalization as a primary statistical marker distinguishing LLM from human text.

**Instead:** Use verbs. "The trie organizes algebraic relationships so you can retrieve compositionally." Active verbs are shorter, clearer, and more human.

**Source:** [PNAS study on LLM writing styles](https://pmc.ncbi.nlm.nih.gov/articles/PMC11874169/), [refsmmat.com LLM style analysis](https://www.refsmmat.com/notebooks/llm-style.html)

---

## 4. Formatting Tells

Visual patterns in text that signal algorithmic generation.

---

### Pattern: Em-Dash Addiction

**Bad example:**
> The problem -- and this is the part nobody talks about -- is systemic. The trie -- unlike conventional data structures -- preserves algebraic invariants. This means -- and I cannot stress this enough -- that retrieval is compositional.

**Why it fails:** Em dash usage in tech/startup subreddits tripled from 4% to 18% between May and December 2024. AI uses 20+ em dashes per piece where humans use 2-3. Each em dash creates a parenthetical aside that breaks sentence flow. Multiple em dashes per paragraph create a lurching, stop-start rhythm that reads as self-interrupting rather than considered.

**Instead:** Use commas or parentheses for genuine asides. Use periods to break long sentences. Reserve em dashes for one or two moments of genuine dramatic pause per piece, if any.

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop), [tropes.fyi](https://tropes.fyi/directory), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/), [Hunting the Muse](https://huntingthemuse.net/library/how-to-tell-if-writing-is-ai)

---

### Pattern: Bold-First Bullets

**Bad example:**
> - **Algebraic closure**: The trie preserves multiplication structure
> - **Compositional retrieval**: Queries decompose along algebraic axes
> - **Sublinear scaling**: Storage grows logarithmically with data size
> - **Provable bounds**: Error guarantees follow from algebraic invariants

**Why it fails:** Every bullet opens with a bolded phrase followed by a colon. This is the default formatting pattern for LLM markdown output -- it appears in ChatGPT responses, Claude responses, and every AI-generated README file. Humans writing bullet lists typically don't bold the first phrase of every item.

**Instead:** If you're using bullets, vary the format. Some items can be full sentences without bolded leads. Some can be short. The list doesn't need internal headers when context makes the content clear.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Emoji Bullets in Professional Context

**Bad example:**
> Key benefits:
> :white_check_mark: Algebraic closure under composition
> :chart_with_upwards_trend: Sublinear scaling to billions of entries
> :bulb: Self-organizing without external indexing
> :rocket: 10x faster retrieval than vector databases

**Why it fails:** Emoji-led lists in professional or technical contexts are a direct tell of LLM generation. Humans rarely format work communications with emoji bullet points. The emojis add visual noise without information and signal a casual register inappropriate for technical communication.

**Instead:** Use standard bullet points or numbered lists. Let the content convey importance, not the emoji.

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)

---

### Pattern: Unicode Decoration

**Bad example:**
> Traditional approach --> octonionic trie

> Key insight: non-associativity x compositional retrieval = sublinear scaling

**Why it fails:** LLMs (Claude in particular) favor Unicode arrows, multiplication signs, and other special characters that humans wouldn't easily type. These are formatting artifacts from markdown rendering and model training data. They signal automated generation.

**Instead:** Use words. "Traditional approaches lead to the octonionic trie" or "non-associativity combined with compositional retrieval produces sublinear scaling."

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop), [tropes.fyi](https://tropes.fyi/directory)

---

### Pattern: Random Bolding for Emphasis

**Bad example:**
> The octonionic trie is **not** a conventional data structure. It preserves **algebraic invariants** that enable **compositional** retrieval with **provable** error bounds.

**Why it fails:** Bolding words or phrases without a consistent emphasis strategy. The bold doesn't follow a pattern (key terms? important claims? contrast words?) and appears to be sprinkled for visual variety. More common in GPT-4o output than earlier models.

**Instead:** Bold sparingly and consistently. In technical writing, bold usually marks terms being defined or key results being highlighted. If everything is emphasized, nothing is.

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop), [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

---

### Pattern: Repetitive Subheadings

**Bad example:**
> ## Understanding Octonionic Algebra
> ## The Importance of Non-Associativity
> ## The Role of the Trie Structure
> ## The Future of Memory Systems

**Why it fails:** Subheadings following "Understanding X," "The Importance of Y," "The Role of Z," "The Future of W" is the five-paragraph essay template of LLM output. Each heading follows an identical grammatical pattern and sounds like a textbook table of contents. Technical readers recognize this as generic structure that wasn't designed for the specific content.

**Instead:** Use subheadings that reflect the specific content and argument of each section. "Why non-associativity matters for composition" tells the reader something. "The Importance of Non-Associativity" tells them nothing.

**Source:** [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

## 5. Tone Tells

Register, affect, and voice patterns that betray algorithmic generation.

---

### Pattern: Hedge-Then-Assert

**Bad example:**
> While there are certainly many valid approaches to memory organization, it's clear that algebraic methods offer significant advantages.

> Although the field is still evolving, the evidence strongly suggests that octonionic structures will play a central role.

**Why it fails:** The pattern is: [hedging qualifier] + [confident assertion]. The hedge ("while there are certainly many valid approaches") exists to sound balanced and nuanced, but it's immediately abandoned for an unqualified assertion. This creates a rhythm of faux-nuance -- the writer appears to consider alternatives but never genuinely engages with them. LLMs produce this because RLHF rewards the appearance of balanced analysis.

**Instead:** Either genuinely engage with alternatives (name them, compare them, explain why yours is better on specific metrics) or commit to your position without the performative hedge. "Algebraic methods outperform key-value stores on compositional retrieval by 3 orders of magnitude (Table 2)" is an honest assertion.

**Source:** [Cherryleaf](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/), [refsmmat.com](https://www.refsmmat.com/notebooks/llm-style.html)

---

### Pattern: Uniform Register (No Code-Switching)

**Bad example:**
A piece that maintains exactly the same level of formality, the same sentence complexity, and the same emotional temperature from start to finish -- whether discussing fundamental mathematics or implementation details.

**Why it fails:** Human writers naturally shift register. They get more casual when making asides, more precise when presenting equations, more emphatic when they're excited about a result, more cautious when discussing limitations. LLMs maintain a "professional-casual" middle register throughout, never truly informal and never truly technical. The Cherryleaf analysis describes this as "frictionless mediocrity" -- technically correct but "spiritually empty."

**Instead:** Let your voice vary with the content. It's fine to be terse in a technical section and expansive in a motivation section. The variation signals that a thinking person is modulating their communication for different purposes.

**Source:** [Cherryleaf](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/)

---

### Pattern: False Authority (Unearned Confidence)

**Bad example:**
> Something shifted. Everything changed. The implications are profound.

> This represents a watershed moment in the field.

**Why it fails:** These phrases claim significance without earning it. "Something shifted" is vague and dramatic. "Everything changed" is almost certainly false. "Watershed moment" is unverifiable. Technical readers calibrate trust by comparing claim magnitude to evidence density. When the claims are large and the evidence is thin, credibility collapses. This is distinct from the hedge-then-assert pattern -- here, the writer abandons hedging entirely for unqualified pronouncement.

**Instead:** Ground claims in specifics. What shifted? What changed? Compared to what? Show the before and after with measurements.

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Unearned Enthusiasm / Enthusiasm Gap

**Bad example (excessive):**
> This is a genuinely exciting development in memory architecture!

> The results are nothing short of extraordinary.

**Bad example (flat/equal):**
A piece that treats every subsection with identical investment -- quantum physics and sandwich recipes receive the same measured, competent enthusiasm. No section feels like the writer cared more about it than any other.

**Why it fails:** Two failure modes: (1) Exclamation-point enthusiasm that hasn't been earned through evidence, and (2) flat uniform enthusiasm that reveals no genuine passion or "nerd-out moments." Real writers have opinions. They spend more words on the parts they find interesting. They compress parts they find routine. LLMs treat all sections democratically because they have no preferences.

**Instead:** Let your investment vary. If the convergence proof is the exciting part, spend words there and compress the boilerplate setup. If you're genuinely enthusiastic, show it through depth of engagement, not exclamation marks.

**Source:** [Cherryleaf](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/), [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)

---

### Pattern: Performative Nuance / False Vulnerability

**Bad example:**
> I'll be honest: this approach isn't perfect.

> And yes, I'm openly excited about the algebraic approach.

> To be fair, there are legitimate criticisms.

**Why it fails:** These phrases perform vulnerability and self-awareness without actually being vulnerable or self-aware. "I'll be honest" implies previous dishonesty. "And yes" stages an imagined objection. "To be fair" performs balance without engaging alternatives. The vulnerability is polished rather than genuinely uncomfortable. Real vulnerability names specific mistakes, acknowledges specific criticisms, and concedes specific ground.

**Instead:** If you're acknowledging a limitation, name it specifically. "The trie requires O(n) memory for the index structure, which is worse than hash maps for non-compositional queries" is genuine self-criticism. "I'll be honest: this approach isn't perfect" is theater.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Pedagogical Voice (Unsolicited Teaching)

**Bad example:**
> Let's break this down step by step.

> Let's unpack what this means.

> Let's explore why this matters.

> Let's dive in.

**Why it fails:** "Let's" constructions assume the reader needs hand-holding and positions the writer as a teacher. For expert audiences, this is condescending. For any audience, it's a stalling tactic -- "Let's unpack this" delays the unpacking by exactly one sentence. LLMs default to pedagogical voice because their training data is heavily weighted toward explanatory content (tutorials, documentation, Q&A).

**Instead:** Just explain the thing. Skip the invitation to learn together. "The convergence rate depends on three properties..." is better than "Let's break down the convergence rate. There are three key properties to consider..."

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

### Pattern: Collaborative Language in Non-Collaborative Contexts

**Bad example:**
> As we explore the implications of non-associativity...

> Let us consider the algebraic properties of the trie...

> Together, we'll examine the convergence proof.

**Why it fails:** "We" and "us" in a landing page or research summary creates a false sense of shared exploration. The reader isn't exploring with you -- they're reading your finished work. Wikipedia flags this as a specific AI tell: collaborative language in contexts where collaboration isn't happening.

**Instead:** Use "we" only in genuinely collaborative contexts (research papers with multiple authors where "we" = the research team). In landing page copy, use direct statements or second person ("you") sparingly.

**Source:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

### Pattern: Excessive Hedging

**Bad example:**
> The octonionic trie may potentially offer some advantages in certain retrieval scenarios, though results can vary depending on the specific application context.

**Why it fails:** Every noun has a qualifier. "May potentially" (double hedge), "some advantages" (vague), "certain scenarios" (unspecified), "can vary" (meaningless), "specific application context" (bureaucratic). LLMs hedge because their training objective penalizes confident wrong statements. But hedging everything makes the writer sound uncertain about their own work. Technical readers trust writers who commit to specific, falsifiable claims.

**Instead:** Commit to specific claims with specific conditions. "The octonionic trie outperforms hash maps on compositional queries (Table 3) but underperforms on point lookups by 2.3x (Table 4)."

**Source:** [Cherryleaf](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/), [refsmmat.com](https://www.refsmmat.com/notebooks/llm-style.html)

---

### Pattern: Avoidance of Contractions

**Bad example:**
> It is important to note that this is not a conventional data structure. It does not rely on hashing. We do not make assumptions about query distribution.

**Why it fails:** Consistently using "it is" instead of "it's," "do not" instead of "don't," "does not" instead of "doesn't" creates an unnecessarily formal register. While not definitive on its own (ESL writers and some professional contexts avoid contractions), combined with other patterns, it signals automated generation. Natural English prose uses contractions freely.

**Instead:** Use contractions where natural. Technical rigor doesn't require formal register in every sentence.

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)

---

## 6. Technical Copy Failures

Patterns specific to how AI-written technical marketing fails with informed audiences.

---

### Pattern: Circular Definition

**Bad example:**
> Discur builds self-organizing memory systems. Our memory technology organizes itself through intelligent self-organization, enabling systems to organize their own memory autonomously.

**Why it fails:** The definition restates the term being defined in different words. "Self-organizing memory" is defined as "memory that organizes itself" -- the reader learns nothing. LLMs generate circular definitions because they're pattern-matching on co-occurring tokens, not understanding the concept. Technical readers immediately ask "but what does it ACTUALLY do?" and the circular definition gives them no answer.

**Instead:** Define by mechanism, not by restating. "The octonionic trie uses the algebra's multiplication table as an index: every query decomposes into a sequence of basis-element lookups, so retrieval time is bounded by the algebra's dimension (8), not the dataset size."

**Source:** Community criticism (HN, Reddit), editorial practice

---

### Pattern: "Revolutionary" Without Evidence

**Bad example:**
> Our revolutionary approach to memory architecture transforms how AI systems store and retrieve information.

> A groundbreaking new framework that reimagines the foundations of machine memory.

**Why it fails:** "Revolutionary," "groundbreaking," "transforms," "reimagines" are superlatives that require extraordinary evidence. Technical readers read these as marketing hype by default. Zachary Lipton's ML writing heuristics specifically warn that intensifiers ("extremely, very, incredibly") undermine confidence. The SEC has enforced against "AI-washing" -- companies making exaggerated claims about AI capabilities that aren't substantiated.

**Instead:** State what the approach does in concrete terms and let the reader judge its significance. "Reduces compositional retrieval from O(n) to O(log n)" is a concrete claim. "Revolutionary" is an opinion.

**Source:** [Heuristics for Scientific Writing (Lipton)](https://www.approximatelycorrect.com/2018/01/29/heuristics-technical-scientific-writing-machine-learning-perspective/), [SEC AI-washing enforcement](https://www.hklaw.com/en/insights/publications/2025/07/sec-and-doj-warm-up-to-enforcement-over-ai-washing)

---

### Pattern: Feature-Forward Framing (Missing the "So What?")

**Bad example:**
> Introducing our octonionic trie data structure with 8-dimensional algebraic indexing, Moufang loop traversal, and associator-based error correction.

**Why it fails:** Listing features without connecting them to outcomes. The reader knows what the trie has but not what it does for them. Technical readers evaluate technologies by what problems they solve, not by what components they contain. Feature lists without context are spec sheets, not communication.

**Instead:** Lead with the problem or result, follow with the mechanism. "Compositional queries that take O(n) in vector databases take O(log n) in the octonionic trie. The algebra's multiplication table serves as a natural index."

**Source:** [COPY-PATTERNS.md (existing research)](/home/aescalera/code/github.com/discur-ai/discur.ai/.planning/research/COPY-PATTERNS.md), editorial practice

---

### Pattern: Generic Examples That Fit Any Article

**Bad example:**
> Businesses can use algebraic memory to streamline workflows and drive innovation.

> Organizations across industries are discovering the power of self-organizing systems.

**Why it fails:** These sentences could appear in any article about any technology. Replace "algebraic memory" with any technology and "streamline workflows and drive innovation" remains equally vague and equally applicable. The sentence contains no information specific to the actual product. This is the hallmark of AI-generated marketing copy: plausible-sounding generalities that apply to everything and therefore describe nothing.

**Instead:** Use examples specific to YOUR technology. "A search engine using the octonionic trie could answer 'papers by X about Y that cite Z' as a single algebraic traversal instead of three separate index lookups."

**Source:** [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/), [Demand Gen Report](https://www.demandgenreport.com/demanding-views/spotting-weak-ai-content-in-proposals-a-practical-guide/50994/)

---

### Pattern: Promotional Language Masquerading as Description

**Bad example:**
> The octonionic trie boasts exceptional retrieval performance, showcasing our commitment to mathematical rigor and engineering excellence.

**Why it fails:** "Boasts," "showcasing," "commitment to," "excellence" are promotional vocabulary. Wikipedia editors specifically flag "boasts a," "showcasing," "exemplifies," "commitment to" as AI-generated promotional language. Technical audiences parse "commitment to excellence" as "has no specific achievement to cite."

**Instead:** Replace promotional language with measurements. "Retrieval in 3.2ms p99 on 10M entries" says more than "exceptional retrieval performance."

**Source:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

---

### Pattern: The "Challenges and Future Outlook" Section

**Bad example:**
> ## Challenges and Future Outlook
> While the octonionic trie faces challenges in implementation complexity, the future holds exciting possibilities for algebraic memory systems across industries.

**Why it fails:** This section pattern (acknowledge challenges vaguely, then project an optimistic future) is a rigid formula Wikipedia editors flag as a primary AI indicator. The "challenges" are never specific. The "future" is always exciting. The section exists because the LLM's training data contains thousands of articles that end this way, not because the specific challenges and future of this technology have been analyzed.

**Instead:** If discussing limitations, be specific about what they are and what you're doing about them. If discussing future work, name the concrete next steps. Or -- and this is often the best option -- don't include this section at all. A landing page doesn't need a "challenges and future outlook."

**Source:** [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)

---

### Pattern: Invented Concept Labels

**Bad example:**
> The supervision paradox. The acceleration trap. The compositional ceiling.

**Why it fails:** These compound labels sound like rigorously defined technical concepts, but they're coined on the spot. LLMs generate these because training data contains genuine concept labels (the halting problem, the cold start problem) and the model pattern-matches the form without grounding it in established literature. Technical readers search for these terms, find nothing, and lose trust.

**Instead:** Use established terminology from the field. If you're genuinely coining a new term, define it rigorously and be explicit that it's your term: "We call this the compositional ceiling -- the point at which flat retrieval structures can no longer answer queries that combine multiple attributes."

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Vague Claims Dressed as Specifics

**Bad example:**
> Integrates seamlessly with leading AI platforms.

> Optimized for enterprise-scale deployments.

> Built on proprietary neural engine technology.

**Why it fails:** These sound specific but contain no verifiable information. Which platforms? What scale? What neural engine? Real expertise shows up in specifics -- naming the system being replaced, quoting a deployment metric, identifying the exact integration. As one editorial source notes: "Vague examples feel soulless and untrustworthy."

**Instead:** "Tested with PyTorch 2.4 and JAX 0.4, supports ONNX export. 12ms p99 latency at 50M entries on a single A100."

**Source:** [Demand Gen Report](https://www.demandgenreport.com/demanding-views/spotting-weak-ai-content-in-proposals-a-practical-guide/50994/), community criticism

---

### Pattern: Missing Trade-Offs

**Bad example:**
> The octonionic trie provides fast retrieval, low memory usage, simple implementation, and provable correctness guarantees.

**Why it fails:** No technology is good at everything. Claiming excellence across every dimension signals either dishonesty or ignorance. Technical readers know that engineering involves trade-offs: speed vs. memory, simplicity vs. flexibility, guaranteed bounds vs. average-case performance. A product that claims all benefits and no costs is not credible.

**Instead:** Name the trade-offs honestly. "The octonionic trie achieves O(log n) compositional retrieval at the cost of O(n) memory overhead and O(n log n) construction time. Point lookups are 2.3x slower than hash maps." Honest trade-offs build credibility.

**Source:** Editorial practice, technical reader expectations

---

## 7. Reader Detection Signals

What technical readers (ML researchers, engineers) specifically notice and distrust.

---

### Pattern: The "Does This Sound Like ChatGPT?" Gut Reaction

Technical readers have developed heuristics for detecting AI-generated content. Based on community feedback and editorial analysis, here's what triggers the gut reaction:

**Immediate tells (one instance is suspicious):**
- "Delve" appearing anywhere
- "It's not X, it's Y" as an opening rhetorical move
- "In today's fast-paced world" or "As technology continues to evolve"
- Em dash counts > 5 per page
- Every bullet starting with a bolded phrase
- "Here's the thing:" or "Here's what nobody talks about:"
- Emoji in professional/technical context
- "Tapestry," "landscape," "paradigm" used non-technically

**Cumulative tells (pattern of 3+ triggers suspicion):**
- Uniform paragraph length
- Perfect grammar with no contractions
- No first-person experience or anecdotes
- Generic examples that fit any product
- Present-participle analytical phrases ("highlighting its importance")
- Pompous copula substitution ("serves as" for "is")
- Tricolons in every other paragraph
- Transitions like "Moreover," "Furthermore," "Additionally"

**Source:** Synthesized from all sources in this document

---

### Pattern: The Missing Fingerprint of Real Expertise

**What readers notice is missing:**
- Specific failure stories (what went wrong during development)
- Unexpected phrasing or turns of thought
- Direct admission of trade-offs
- Opinions stated without hedging
- Cultural or contextual references that only a domain expert would make
- Inconsistency in depth (spending more words on what the writer finds interesting)
- Genuine uncertainty expressed about open questions

**Why it matters:** TREW Marketing's 2025 survey found engineers' trust in AI-generated content dropped from 6.5 to 4.4 on a 10-point scale in one year. 70% of engineers rarely or never use AI to evaluate vendors. The "fingerprint of real expertise" -- unexpected turns of phrase, subtle asides, direct admission of trade-offs -- is what AI-generated content strips away.

**Source:** [TREW Marketing 2025 State of Marketing to Engineers](https://www.trewmarketing.com/blog/2025-state-of-marketing-to-engineers-research)

---

### Pattern: The Confidence-Evidence Gap

Technical readers subconsciously calibrate two variables:
1. **Confidence of claims** (how certain is the writing?)
2. **Density of evidence** (how much supporting data is provided?)

When confidence is high and evidence is thin, readers disengage. This is why "revolutionary approach" with no benchmarks is worse than "modest improvement" with detailed comparisons. AI-generated technical copy almost always has high confidence and thin evidence because the model generates confident-sounding prose regardless of whether evidence exists.

**The trust formula:** Credibility = Evidence / Claim_Magnitude. As claims get bigger, evidence must grow proportionally or trust collapses.

**Source:** Editorial practice, synthesized from community feedback

---

## 8. Composition-Level Anti-Patterns

Problems with overall piece structure and organization.

---

### Pattern: Fractal Summaries

**Bad example:**
> In this section, we'll explore the algebraic foundations of the octonionic trie.
> [2000 words]
> As we've seen in this section, the algebraic foundations of the octonionic trie provide a basis for compositional retrieval.
>
> In the next section, we'll examine how these foundations enable practical memory systems.

**Why it fails:** "What I'm going to tell you; what I'm telling you; what I just told you" applied at every level of the document. This is a teaching pattern appropriate for lectures but deadening in written prose. Each summary and preview adds words without information. The reader is told about the content three times instead of encountering it once.

**Instead:** Trust the reader. Delete previews and summaries. If your section headings and transitions are clear, readers can navigate without being told where they are.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

### Pattern: One-Point Dilution

**Bad example:**
A 4,000-word piece that makes a single argument ("the octonionic trie is better than hash maps for compositional retrieval") restated 10 different ways with metaphors, analogies, reformulations, and examples that all say the same thing.

**Why it fails:** The piece has one point and insufficient material to fill its length. LLMs generate volume by restating the argument in different formulations rather than developing it with new evidence. The reader recognizes the repetition and either skims or leaves.

**Instead:** If you have one point, make it in 500 words with evidence. If you need 4,000 words, develop multiple related points that build on each other. Every paragraph should add new information.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: The Dead Metaphor

**Bad example:**
> The octonionic trie is an ecosystem. Unlike other ecosystems, this ecosystem... The ecosystem of algebraic memory requires ecosystem-level thinking. Building an ecosystem of this kind means ecosystem value...

**Why it fails:** A single metaphor introduced once and repeated 5-10 times throughout the piece, long past the point where it illuminates. The metaphor becomes a verbal tic, replacing the actual subject with the metaphor term. By the third use, the reader is exhausted.

**Instead:** Use a metaphor once to establish an intuition, then drop it and return to precise language. If the metaphor is doing genuine work, vary its application -- don't repeat the same formulation.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Content Duplication

**Bad example:**
Two paragraphs in different sections of the same piece that say essentially the same thing, sometimes nearly verbatim.

**Why it fails:** LLMs lose track of what they've already written and regenerate similar content. In longer pieces, the model may reproduce a paragraph from the introduction in the conclusion with minor word changes. Human writers occasionally repeat themselves, but AI duplication is more systematic and harder to catch.

**Instead:** Read the full piece looking specifically for redundancy. If two sections make the same point, merge them or cut one.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: The Signposted Conclusion

**Bad example:**
> In conclusion, the octonionic trie represents a significant advance in memory architecture.

> To sum up, algebraic methods offer clear advantages over conventional approaches.

> In summary, self-organizing memory systems based on octonionic algebra provide a path forward.

**Why it fails:** "In conclusion," "To sum up," and "In summary" are signposts from school essays. They tell the reader they're at the end instead of letting the ending speak for itself. In landing page copy, the final section should drive to action (read the paper, try the demo, contact us) rather than restating the introduction.

**Instead:** End with the strongest specific claim, a concrete next step, or a forward-looking statement that adds new information rather than summarizing.

**Source:** [tropes.fyi](https://tropes.fyi/directory), [ossa-ma gist](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)

---

### Pattern: Vapid Openers

**Bad example:**
> In today's fast-paced world of artificial intelligence...

> As technology continues to evolve...

> In the ever-changing landscape of machine learning...

> As we navigate the complexities of modern AI systems...

**Why it fails:** These openers contain zero information and could introduce any article about any technology. They are the written equivalent of throat-clearing -- the writer hasn't figured out what to say yet and is stalling. Every word in an opener should earn its place.

**Instead:** Start with the specific claim, finding, or problem. "Current memory architectures fail on compositional queries" is a concrete opening. "In today's fast-paced world" is not.

**Source:** [Ignorance.ai](https://www.ignorance.ai/p/the-field-guide-to-ai-slop), [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/), [Hunting the Muse](https://huntingthemuse.net/library/how-to-tell-if-writing-is-ai)

---

### Pattern: Excessive Signposting / Self-Referential Writing

**Bad example:**
> In this section, we'll look at the algebraic foundations.

> Now that we've explored the theory, let's examine the implementation.

> As mentioned earlier, non-associativity is key.

**Why it fails:** Meta-commentary about the document's structure ("In this section we'll look at...") is content about the content rather than content itself. It breaks the reader's engagement with the subject to remind them they're reading a document. LLMs generate signposting because their training data includes textbooks, which use it pedagogically. A landing page is not a textbook.

**Instead:** Delete signposting and let the heading and content do the work. If the transition between sections isn't clear without signposting, the sections may need reordering.

**Source:** [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

### Pattern: The Five-Paragraph Essay Template

**Bad example:**
1. Introduction announcing what you'll discuss
2. Section 1: Understanding X
3. Section 2: The Importance of Y
4. Section 3: How Z Works
5. Conclusion restating the introduction

**Why it fails:** This is the structure taught in middle school English classes and heavily represented in LLM training data. Each section mirrors the others in length and depth. The introduction announces, the body elaborates, the conclusion restates. There's no surprise, no argumentative development, no structural creativity.

**Instead:** Structure the piece around the argument's logic, not a template. Some points need 3 paragraphs; some need 1 sentence. The conclusion should go somewhere new, not circle back.

**Source:** [louisbouchard.ai](https://www.louisbouchard.ai/ai-editing/)

---

## 9. The Master Blacklist

A consolidated, categorized reference of words and phrases to flag during copy review. The presence of 1-2 items is not diagnostic; clustering of 3+ items from multiple categories signals AI generation or lazy human writing.

---

### Verbs to Flag

| Word | Problem | Use Instead |
|------|---------|-------------|
| delve | Canonical AI word (654% increase post-ChatGPT) | examine, study, analyze, or just state the finding |
| leverage (verb) | Corporatese verb form of a noun | use, apply, build on |
| harness | Vague action verb | use, apply |
| navigate (metaphorical) | Overused metaphor | address, work through, handle |
| unlock | Used for anything AI-related | enable, allow |
| empower | AI-HR crossover word | help, enable |
| foster | LLM nurturing verb | support, encourage, create conditions for |
| streamline | Vague efficiency claim | reduce steps, simplify |
| underscore | Superficial analysis marker | (delete -- just state the point) |
| embark | Unnecessarily dramatic | start, begin |
| endeavor | Archaic formality | try, work toward |
| tackle | False casual register | address, solve |
| showcase | Promotional verb | show, demonstrate (with evidence) |
| elevate | Vague improvement claim | improve (with specifics) |

### Adjectives to Flag

| Word | Problem | Use Instead |
|------|---------|-------------|
| robust | Technical word used non-technically | strong, reliable (with metrics) |
| seamless | Nothing integrates seamlessly | smooth, low-friction (with evidence) |
| comprehensive | Self-congratulatory thoroughness claim | complete, thorough, or just be thorough |
| innovative | Meaningless without specifics | novel (with specifics of what's new) |
| groundbreaking | Reserve for actual paradigm shifts | new, significant |
| transformative | Claims transformation without evidence | (state the specific change) |
| pivotal | Used for non-pivotal things | important, critical |
| crucial | LLM synonym for "important" | important, essential (sparingly) |
| cutting-edge | Marketing cliche | recent, current, state-of-the-art (if true) |
| unprecedented | Rarely literally true | new, first (if verifiable) |
| meticulous | Unverifiable process claim | careful, precise |
| intricate | Vague complexity claim | complex, detailed |
| multifaceted | Says "complex" with more syllables | complex, varied |
| vibrant | Travel-guide register | active, growing |
| dynamic | Empty modifier | (delete or be specific) |
| scalable | Often unsubstantiated | (state the scaling properties) |
| next-generation | Marketing term | (state what's different) |

### Nouns to Flag

| Word | Problem | Use Instead |
|------|---------|-------------|
| landscape | Applied to any field | field, area, domain |
| tapestry | Ornate metaphor for anything connected | system, network |
| paradigm | Used without Kuhnian precision | approach, model, framework |
| synergy | Business jargon | combination, interaction |
| ecosystem | Overextended metaphor | system, community, market |
| realm | Fantasy-register formality | area, domain, field |
| testament | Promotional language | evidence, sign, indicator |
| underpinnings | Unnecessarily formal | foundation, basis |

### Transitions to Flag

| Phrase | Problem | Use Instead |
|--------|---------|-------------|
| Moreover | Formal additive connector | Also, And, (restructure sentence) |
| Furthermore | Same | Also, And, Beyond that |
| Additionally | Same | Also, And |
| It's worth noting that | Throat-clearing | (delete -- just state the point) |
| It bears mentioning | Same | (delete) |
| Importantly | Self-congratulatory emphasis | (delete -- the content should convey importance) |
| Notably | Same | (delete) |
| Interestingly | Tells reader what to think | (delete -- let them find it interesting) |
| Consequently | Overly formal | So, As a result |
| Indeed | Empty emphasis | (delete) |

### Phrases to Flag

| Phrase | Problem |
|--------|---------|
| "In today's fast-paced world" | Vapid opener |
| "As technology continues to evolve" | Same |
| "In the ever-evolving landscape" | Same |
| "As we navigate the complexities" | Same |
| "Here's the thing:" | False suspense |
| "Here's what nobody talks about:" | Same + false exclusivity |
| "Here's where it gets interesting:" | Same |
| "Let's break this down" | Unsolicited pedagogy |
| "Let's unpack this" | Same |
| "Let's dive in" | Same |
| "Think of it as..." | Patronizing analogy |
| "It's not X, it's Y" | Manufactured binary |
| "Not X. Not Y. Just Z." | Dramatic countdown |
| "The question isn't X. The question is Y." | Reframing cliche |
| "Something shifted" | False authority / vague drama |
| "Everything changed" | Same |
| "The real story is..." | False obviousness |
| "The truth is simple" | Same |
| "Despite its challenges, [optimism]" | Challenge dismissal |
| "In conclusion," | School essay signpost |
| "To sum up," | Same |
| "serves as a" | Pompous copula substitution |
| "stands as" | Same |
| "At the end of the day" | Cliche filler |
| "Game changer" | Hype without evidence |
| "Move the needle" | Corporate cliche |
| "Perfect storm" | Overused idiom |
| "Double-edged sword" | Same |
| "Tip of the iceberg" | Same |

---

## 10. Sources

### Primary Sources (directly fetched and analyzed)

1. **[The Field Guide to AI Slop](https://www.ignorance.ai/p/the-field-guide-to-ai-slop)** -- Ignorance.ai. Comprehensive guide to stylistic tics, structural patterns, and content indicators of AI-generated text. Covers em dashes, parallelism, lists, monotony, analogies, filler.

2. **[AI Writing Patterns](https://robotsatemyhomework.substack.com/p/ai-writing-patterns)** -- Robots Ate My Homework (Substack). Identifies 8 core patterns with diagnostic tests: inanimate agency, binary contrasts, Wh- openers, colon reveals, negative listing, rule of three, uniform paragraph lengths, parallel kickers.

3. **[AI Writing Tropes to Avoid](https://gist.github.com/ossa-ma/f3baa9d25154c33095e22272c631f5a1)** -- ossa-ma (GitHub Gist). Exhaustive categorized list covering word choice, sentence structure, paragraph structure, tone, formatting, and composition patterns. 33+ specific tropes.

4. **[tropes.fyi Directory](https://tropes.fyi/directory)** -- Comprehensive directory of 33 named AI writing tropes with examples, organized by category (word choice, sentence structure, paragraph structure, tone, formatting, composition).

5. **[Linguistic Patterns of AI Writing: Key Tells](https://hastewire.com/blog/uncover-linguistic-patterns-of-ai-writing-key-tells)** -- Hastewire. Covers repetitive phrasing, uniform sentence structure, lack of personal anecdotes, emotional flatness, context-specific failures, computational markers.

6. **[How to Clean Up AI-Generated Drafts](https://www.louisbouchard.ai/ai-editing/)** -- Louis Bouchard. Practical editing rules: word blacklists, structural pattern fixes, vocabulary guidelines, accuracy checking workflow.

### Academic and Empirical Sources

7. **[Do LLMs Write Like Humans? (PNAS 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11874169/)** -- Academic study using Biber's features to identify systematic grammatical and rhetorical differences. Documents nominalization rates, noun-heavy style, reduced metadiscourse.

8. **[LLM Writing Styles Analysis](https://www.refsmmat.com/notebooks/llm-style.html)** -- refsmmat.com. Statistical analysis of LLM linguistic markers including information density, syntactic complexity, nominalization patterns, metadiscourse frequency.

9. **[One-Fifth of Computer Science Papers May Include AI Content (Science/AAAS)](https://www.science.org/content/article/one-fifth-computer-science-papers-may-include-ai-content)** -- Coverage of Nature Human Behaviour study analyzing 1M+ papers for AI vocabulary frequency spikes.

10. **[Why Does ChatGPT "Delve" So Much? (COLING 2025)](https://aclanthology.org/2025.coling-main.426.pdf)** -- Academic paper exploring the origins of ChatGPT's vocabulary preferences.

### Wikipedia and Community Sources

11. **[Wikipedia: Signs of AI Writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)** -- Wikipedia's comprehensive guide for editors detecting AI-generated content. Covers content indicators, language patterns, style/formatting, citation issues. Regularly updated by active editorial community.

12. **[Wikipedia AI Slop Speedy Deletion Policy (G15)](https://www.pcworld.com/article/2870079/wikipedia-goes-to-war-against-ai-slop-articles-with-new-deletion-policy.html)** -- PCWorld coverage of Wikipedia's August 2025 policy enabling speedy deletion of AI-generated articles.

### Editorial and Professional Sources

13. **[Indicators That Suggest Something Was Written by AI](https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/)** -- Cherryleaf (technical writing consultancy). Detailed analysis of tonal tells: relentless balance, missing messiness, generic specificity, uniform register, risk aversion, enthusiasm gap.

14. **[How to Spot AI Writing: 6 Elements](https://huntingthemuse.net/library/how-to-tell-if-writing-is-ai)** -- Hunting the Muse. Practical guide covering em dashes, forced sass, buzzwords, cliched phrases, formulaic structures, self-referential language.

15. **[Don't Write Like AI: Red Flag Words](https://www.blakestockton.com/red-flag-words/)** -- Blake Stockton. Categorized red flag word list by domain (innovation, business, persuasion, conversation).

16. **[2025 State of Marketing to Engineers](https://www.trewmarketing.com/blog/2025-state-of-marketing-to-engineers-research)** -- TREW Marketing. Survey data: engineer trust in AI content dropped from 6.5 to 4.4/10 in one year.

17. **[Spotting Weak AI Content in Proposals](https://www.demandgenreport.com/demanding-views/spotting-weak-ai-content-in-proposals-a-practical-guide/50994/)** -- Demand Gen Report. Analysis of vague claims pattern in B2B technical proposals.

18. **[SEC/DOJ AI-Washing Enforcement](https://www.hklaw.com/en/insights/publications/2025/07/sec-and-doj-warm-up-to-enforcement-over-ai-washing)** -- Holland & Knight. Legal analysis of enforcement against exaggerated AI claims in marketing.

### Cultural Context

19. **"Slop" -- Merriam-Webster Word of the Year 2025.** Defined as "digital content of low quality produced in quantity by generative AI."

20. **"AI slop" -- Macquarie Dictionary Word of the Year 2025.** Australian dictionary independently selected the same concept.

---

## Appendix: Quick-Reference Copy Review Checklist

Use this during copy review. Check each item. 3+ flags = rewrite the section.

### Vocabulary (scan for presence)
- [ ] Any word from the canonical AI words table (delve, tapestry, landscape, paradigm, robust, etc.)
- [ ] Pompous copula substitution (serves as, stands as, represents)
- [ ] Magic adverbs (quietly, fundamentally, remarkably, arguably)
- [ ] Vague superlatives (revolutionary, groundbreaking, transformative, unprecedented)

### Structure (check paragraph shapes)
- [ ] Uniform paragraph length (all 3-4 sentences)
- [ ] Listicle in trench coat (First... Second... Third...)
- [ ] Parallel kickers (identical sentence endings across sections)
- [ ] Tricolons in more than one paragraph
- [ ] Short punchy fragments as separate paragraphs

### Rhetoric (check argumentative moves)
- [ ] "It's not X, it's Y" construction
- [ ] "Not X. Not Y. Just Z." countdown
- [ ] "Here's the thing:" false suspense
- [ ] "Nobody talks about" false exclusivity
- [ ] "Think of it as" patronizing analogy
- [ ] "Imagine a world where" futurism opener
- [ ] "Despite its challenges" + optimism
- [ ] "Let's break this down" pedagogy

### Formatting (visual scan)
- [ ] Em dash count > 3 per page
- [ ] Every bullet starts with bolded phrase
- [ ] Emoji in professional context
- [ ] Random bolding without system
- [ ] Repetitive subheading pattern

### Tone (read aloud)
- [ ] Hedge-then-assert rhythm
- [ ] Uniform register throughout (no code-switching)
- [ ] Unearned enthusiasm or flat equal enthusiasm
- [ ] Performative vulnerability ("I'll be honest")
- [ ] Avoidance of contractions throughout

### Technical copy specific
- [ ] Circular definitions (term defined by restating term)
- [ ] Feature-forward without outcome (what vs. so-what)
- [ ] Generic examples that fit any product
- [ ] Missing trade-offs (all benefit, no cost)
- [ ] Promotional language (boasts, showcases, commitment to)
- [ ] Vague claims dressed as specifics ("leading platforms")
- [ ] Invented concept labels not defined in literature
- [ ] Signposted conclusion ("In conclusion,")

### The Human Test
- [ ] Does any sentence contain a specific detail only the writer would know?
- [ ] Does the piece spend more words on some sections than others (genuine interest)?
- [ ] Are there any opinions stated without hedging?
- [ ] Is there a genuine trade-off or limitation acknowledged with specifics?
- [ ] Would a competitor's landing page read differently, or could you swap the product name?
