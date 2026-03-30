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
