// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  build: {
    assets: 'static'
  },

  //Localhost
  //Deploy normal project
  // base: '/project-1020/',
  // site: 'https://20essentials.github.io/project-1020/'
  site: 'http://localhost:4321/',

  adapter: vercel()
});