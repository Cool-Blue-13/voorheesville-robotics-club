// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourusername.github.io',
  // Uncomment if deploying to a subdirectory:
  // base: '/robotics-club',
  vite: {
    plugins: [tailwindcss()]
  }
});