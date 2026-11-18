import { resolve } from 'node:path';

const root = import.meta.dirname;

/** @type {import('tailwindcss').Config} */
export default {
  content: [resolve(root, 'site-src/**/*.{html,js}')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Fraunces Variable"', 'Georgia', 'Cambria', 'serif'],
      },
      colors: {
        paper: '#FBFAF7',
        linen: '#F3EFE6',
        ink: '#1B1A17',
        muted: '#6B675F',
        line: '#E6E1D6',
        olive: { 50: '#EEF2E8', 100: '#DDE6D2', 200: '#C3D3B2', 600: '#3F5F43', 700: '#2F4A34', 900: '#1F3324' },
        sand: { 50: '#FAF3E2', 100: '#F3E6C4', 800: '#6B4E16' },
      },
      boxShadow: {
        card: '0 1px 2px rgba(27,26,23,.04), 0 14px 32px -14px rgba(27,26,23,.20)',
        soft: '0 1px 2px rgba(27,26,23,.05), 0 6px 18px -8px rgba(27,26,23,.12)',
      },
      maxWidth: { page: '72rem' },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: { floaty: 'floaty 7s ease-in-out infinite' },
    },
  },
};
