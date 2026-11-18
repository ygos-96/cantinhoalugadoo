import { initMenu } from './modules/menu.js';
import { initReveal } from './modules/reveal.js';
import { initHeader } from './modules/header.js';
import { initProgress } from './modules/progress.js';
import { initToc } from './modules/toc.js';
import { initFilter } from './modules/filter.js';

const run = () => {
  initMenu();
  initHeader();
  initReveal();
  initProgress();
  initToc();
  initFilter();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
else run();
