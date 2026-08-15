import { defineConfig } from 'vite';

// This project is a self-contained static HTML portfolio.
// React, ReactDOM, Tailwind CSS, and Babel are loaded via CDN in index.html.
// Vite acts as a static site bundler — it serves/builds index.html and
// copies the public/ folder (photo, resume.html) to the output dist/.

export default defineConfig({
  // Treat the project root as-is (index.html at root)
  root: '.',

  build: {
    // Output directory for deployment
    outDir: 'dist',
    // Do not clean external assets
    emptyOutDir: true,
  },

  // Serve public/ assets at root level during dev (default Vite behaviour)
  publicDir: 'public',
});
