// src/data/comparisons.ts
// Comparison table data from oct-trie.pdf Table 1, Section 6.
// Simplified to 3 rows per user decision D-10.

export interface ComparisonRow {
  property: string;
  ntmDnc: string;
  sdm: string;
  htm: string;
  octTrie: string;
}

/** Comparison table: 3 most differentiating properties (D-10) */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    property: 'Training',
    ntmDnc: 'Backpropagation',
    sdm: 'None',
    htm: 'Hebbian',
    octTrie: 'None (algebraic)',
  },
  {
    property: 'Routing',
    ntmDnc: 'Learned attention',
    sdm: 'Hamming distance',
    htm: 'Spatial pooling',
    octTrie: 'Subalgebra decomposition',
  },
  {
    property: 'Consistency check',
    ntmDnc: 'None',
    sdm: 'None',
    htm: 'None',
    octTrie: 'Algebraic inversion',
  },
];

/** Column headers for the 4 architectures */
export const ARCHITECTURE_NAMES = ['NTM/DNC', 'SDM', 'HTM', 'Oct-Trie'] as const;
