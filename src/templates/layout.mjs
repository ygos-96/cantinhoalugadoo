import cfg from '../../site.config.mjs';
import { areas, guides } from '../data/guides.mjs';
import { esc, url, icon, logoMark, pinterestIcon } from './components.mjs';
import { topics } from '../data/topics.mjs';

const nav = [
  [`/${areas.cozinha.slug}/`, 'Cozinha pequena'],
  [`/${areas.decoracao.slug}/`, 'Decoração de alugado'],
  ['/#guias', 'Guias'],
  ['/achadinhos/', 'Achadinhos'],
  ['/como-funciona/', 'Como funciona'],
];
const pinLink = (cls) => (cfg.pinterestUrl ? `<a href="${esc(cfg.pinterestUrl)}" target="_blank" rel="noopener" class="${cls}" aria-label="Pinterest do ${esc(cfg.name)}">${pinterestIcon('h-5 w-5')}</a>` : '');

export function layout({ title, description, path, body, progress = false }) {
  const full = title === cfg.name ? `${cfg.name}: ${cfg.tagline}` : `${title} | ${cfg.name}`;
  const canon = url(path);
  return `<!doctype html>
<html lang="${cfg.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(full)}</title>
  <meta name="description" content="${esc(description)}">
  ${canon ? `<link rel="canonical" href="${esc(canon)}">` : ''}
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${esc(cfg.name)}">
  <meta property="og:title" content="${esc(full)}">
  <meta property="og:description" content="${esc(description)}">
  ${canon ? `<meta property="og:url" content="${esc(canon)}">` : ''}
  <meta name="theme-color" content="#FDF6E9">
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <meta property="og:image" content="${esc(url('/og-image.jpg') || '/og-image.jpg')}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <script>document.documentElement.classList.add('js')</script>
  <link rel="stylesheet" href="/style.css">
  <script type="module" src="/main.js"></script>
</head>
<body>
  <a href="#conteudo" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Pular para o conteúdo</a>
  <header data-header class="sticky top-0 z-40 border-b border-transparent bg-paper/85 backdrop-blur-md transition-[border-color,box-shadow] duration-300">
    <div class="wrap flex h-16 items-center justify-between gap-6">
      <a href="/" class="flex items-center gap-2.5 no-underline">${logoMark()}<span class="font-display text-xl font-semibold tracking-tight">${esc(cfg.name)}</span></a>
      <nav aria-label="Principal" class="hidden items-center gap-7 text-sm font-medium md:flex">
        ${nav.map(([h, t]) => `<a href="${h}" class="text-ink/75 no-underline transition hover:text-ink">${t}</a>`).join('\n        ')}
      </nav>
      <div class="hidden items-center gap-3 md:flex">${pinLink('grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-olive-700 no-underline transition hover:border-ink/40')}<a href="/#guias" class="btn btn-sm">Ver os guias</a></div>
      <button type="button" data-menu-btn aria-expanded="false" aria-controls="menu" class="grid h-10 w-10 place-items-center rounded-full border border-line bg-white md:hidden"><span class="sr-only">Abrir menu</span>${icon.menu('h-5 w-5')}</button>
    </div>
    ${progress ? '<div class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"><div data-progress class="h-full origin-left scale-x-0 bg-olive-600"></div></div>' : ''}
  </header>
  <div id="menu" data-menu class="fixed inset-x-0 bottom-0 top-16 z-30 hidden bg-paper md:hidden">
    <nav aria-label="Menu" class="wrap flex flex-col gap-1 py-6">
      ${nav.map(([h, t]) => `<a href="${h}" class="border-b border-line py-4 font-display text-2xl no-underline">${t}</a>`).join('\n      ')}
    </nav>
  </div>
  <main id="conteudo">
${body}
  </main>
  <footer class="mt-24 bg-olive-900 text-olive-100">
    <div class="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <a href="/" class="flex items-center gap-2.5 no-underline">${logoMark('h-8 w-8')}<span class="font-display text-xl font-semibold text-white">${esc(cfg.name)}</span></a>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-olive-200">${esc(cfg.tagline)}</p>
        ${cfg.pinterestUrl ? `<p class="mt-4">${pinLink('inline-flex items-center gap-2 text-sm font-medium text-white no-underline hover:underline')}</p>` : ''}
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[.14em] text-olive-200">Ambientes</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><a class="text-white/90 no-underline hover:underline" href="/${areas.cozinha.slug}/">Cozinha pequena</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/${areas.decoracao.slug}/">Decoração de alugado</a></li>
          ${topics.map((t) => `<li><a class="text-white/90 no-underline hover:underline" href="/${t.slug}/">${esc(t.titulo)}</a></li>`).join('\n')}
        </ul>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[.14em] text-olive-200">Guias</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          ${guides.map((g) => `<li><a class="text-white/90 no-underline hover:underline" href="/guias/${g.slug}/">${esc(g.titulo.split(':')[0])}</a></li>`).join('\n          ')}
        </ul>
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[.14em] text-olive-200">Sobre</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          <li><a class="text-white/90 no-underline hover:underline" href="/sobre/">Sobre e contato</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/como-funciona/">Como funciona</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/transparencia-afiliados/">Transparência</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/privacidade/">Privacidade</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="wrap space-y-2 py-6 text-xs leading-relaxed text-olive-200">
        <p>${esc(cfg.name)} é um portal de recomendações, não uma loja. A compra é feita no Mercado Livre. Participamos do programa de afiliados do Mercado Livre e podemos receber comissão, sem custo extra para você.</p>
        <p>Mercado Livre é marca de seus respectivos titulares. Este site não é operado pelo Mercado Livre. Dados dos produtos conferidos em ${esc(cfg.dataConsultada)}.</p>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}
