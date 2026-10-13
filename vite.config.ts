import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Content-Security-Policy: the page may load only its own files.
 * data: images are allowed for small images that Vite inlines.
 * Added to the build only, because the dev server needs inline scripts and styles.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

const csp = (): Plugin => ({
  name: 'csp-meta',
  apply: 'build',
  transformIndexHtml: () => [
    { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
  ],
});

export default defineConfig({
  // Relative asset paths, so the site also works from a sub-path (such as a GitHub Pages project page).
  base: './',
  plugins: [react(), csp()],
});
