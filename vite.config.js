import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { readdirSync, statSync } from 'node:fs';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const here = import.meta.dirname;
const root = resolve(here, 'site-src');

// Cada pasta com index.html em site-src/ vira uma entrada do build.
function collectPages(dir) {
  const out = {};
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const p = resolve(d, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name === 'index.html') {
        const rel = p.slice(root.length + 1).replace(/[\\/]index\.html$/, '') || 'home';
        out[rel.replace(/[\\/]/g, '-')] = p;
      }
    }
  };
  walk(dir);
  return out;
}

export default defineConfig({
  root,
  publicDir: resolve(here, 'public'),
  server: { fs: { allow: [here] } },
  build: {
    outDir: resolve(here, 'dist'),
    emptyOutDir: true,
    rollupOptions: { input: collectPages(root) },
  },
  css: {
    postcss: { plugins: [tailwindcss(resolve(here, 'tailwind.config.js')), autoprefixer()] },
  },
});
