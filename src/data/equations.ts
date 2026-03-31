// src/data/equations.ts
// All LaTeX equation strings for the octonionic trie thesis.
// Each constant maps to a numbered equation in oct-trie.pdf.
// Imported by section components and passed to Equation/InlineMath.

/** Eq 1: Associator definition (thesis p.4) */
export const ASSOCIATOR = '[a,b,c] = (ab)c - a(bc)';

/** Eq 2: Composition error bound (thesis p.8, Section 4.1) */
export const COMPOSITION_ERROR = '\\varepsilon(d) = \\frac{|x^{-1} \\cdot (o \\cdot x) - o|}{|o|}';

/** Eq 3: Compression efficiency (thesis p.9, Section 4.2) */
export const COMPRESSION_EFFICIENCY = '\\rho = \\frac{\\text{number of nodes}}{\\text{effective prediction capacity}}';

/** Eq 4: Subalgebra decomposition cleanliness (thesis p.9, Section 4.3) */
export const SUBALGEBRA_CLEANLINESS = '\\text{cleanliness}(n) = \\min_{i \\neq j} |[c_i, c_j, n]|';

/** Eq 5: Prediction consistency (thesis p.9, Section 4.4) */
export const PREDICTION_CONSISTENCY = '\\delta(n) = \\max_{y \\in \\text{buffer}(n)} |\\text{counterfactual}(y, o\\prime) - \\text{original}(y)|';

/** Eq 6: Associator health (thesis p.9, Section 4.5) */
export const ASSOCIATOR_HEALTH = '\\alpha(n) = \\frac{1}{K} \\sum_{k=1}^{K} |[x_k, c_k^*, n]|';

/** Eq 8: Expected associator norm on S^7 (thesis p.14, Theorem 9.2) */
export const ASSOCIATOR_NORM_S7 = '\\mathbb{E}[\\phi(a,b,c)] = \\frac{147456}{42875\\pi} \\approx 1.0947';
