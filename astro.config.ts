import tailwindcss from "@tailwindcss/vite";

// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {   
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  site: "https://avanishd-3.github.io/shopping-website/",
  base: "/shopping-website",
});