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
        paper: '#FCEFDC',
        linen: '#F6F1EA',
        ink: '#3B2A22',
        muted: '#7A685C',
        line: '#E4D9CB',
        olive: { 50: '#FCEFE2', 100: '#F8DFC8', 200: '#EDBE9F', 600: '#B4502F', 700: '#963F25', 900: '#4B2D20' },
        sand: { 50: '#FBF1D8', 100: '#F3E2B4', 800: '#6B4E16' },
      },
      boxShadow: {
        card: '0 1px 2px rgba(59,42,34,.06), 0 6px 16px -10px rgba(59,42,34,.18)',
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
