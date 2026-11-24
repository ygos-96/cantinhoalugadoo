import cfg from '../../site.config.mjs';
import { areas, guides } from '../data/guides.mjs';
import { esc, url, icon, logoMark, pinterestIcon, ldScript } from './components.mjs';

// Categorias do menu (ordem do cabeçalho). Iluminação aponta para o guia de luminárias.
export const categorias = [
  ['Cozinha', `/${areas.cozinha.slug}/`],
  ['Decoração', `/${areas.decoracao.slug}/`],
  ['Iluminação', '/guias/iluminacao-apartamento-alugado-luminarias-sem-obra/'],
  ['Tapetes', '/tapetes-sala-pequena/'],
  ['Cortinas', '/cortinas-apartamento-alugado/'],
  ['Paredes', '/paredes-sem-obra/'],
  ['Achadinhos', '/achadinhos/'],
];
const nav = [...categorias, ['Contato', '/contato/']];

const pinLink = (cls, label = '') => (cfg.pinterestUrl
  ? `<a href="${esc(cfg.pinterestUrl)}" target="_blank" rel="noopener" class="${cls}" aria-label="Pinterest do ${esc(cfg.name)}">${pinterestIcon('h-5 w-5')}${label}</a>`
  : '');

export function layout({ title, description, path, body, progress = false, ogType = 'website', jsonLd = [] }) {
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
  <meta property="og:type" content="${ogType}">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${esc(cfg.name)}">
  <meta property="og:title" content="${esc(full)}">
  <meta property="og:description" content="${esc(description)}">
  ${canon ? `<meta property="og:url" content="${esc(canon)}">` : ''}
  <meta property="og:image" content="${esc(url('/og-image.jpg') || '/og-image.jpg')}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  ${cfg.pinterestVerify
    ? `<meta name="p:domain_verify" content="${esc(cfg.pinterestVerify)}">`
    : '<!-- Pinterest: quando receber o código, preencha pinterestVerify em site.config.mjs. Ele vira: meta name="p:domain_verify" content="CODIGO_AQUI" -->'}
  <meta name="theme-color" content="#FCEFDC">
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  ${jsonLd.map(ldScript).join('\n  ')}
  <script>document.documentElement.classList.add('js')</script>
  <link rel="stylesheet" href="/style.css">
  <script type="module" src="/main.js"></script>
</head>
<body>
  <a href="#conteudo" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Pular para o conteúdo</a>
  <div class="bg-olive-900 px-4 py-2 text-center text-xs leading-snug text-olive-100">Curadoria de achadinhos selecionados por avaliações · Links de afiliado do Mercado Livre · Publicidade: link de afiliado.</div>
  <header data-header class="sticky top-0 z-40 border-b border-line bg-paper transition-shadow duration-300">
    <div class="wrap flex h-16 items-center justify-between gap-6">
      <a href="/" class="flex items-center gap-2.5 no-underline">${logoMark('h-10 w-10')}<span class="font-display text-xl font-semibold tracking-tight">${esc(cfg.name)}</span></a>
      <nav aria-label="Principal" class="hidden items-center gap-6 text-sm font-medium xl:flex">
        ${nav.map(([t, h]) => `<a href="${h}" class="text-ink/80 no-underline transition hover:text-olive-700">${t}</a>`).join('\n        ')}
      </nav>
      <div class="flex items-center gap-2">
        ${pinLink('grid h-10 w-10 place-items-center rounded-md border border-line bg-white text-olive-700 no-underline transition hover:border-ink/40')}
        <button type="button" data-menu-btn aria-expanded="false" aria-controls="menu" class="grid h-10 w-10 place-items-center rounded-md border border-line bg-white xl:hidden"><span class="sr-only">Abrir menu</span>${icon.menu('h-5 w-5')}</button>
      </div>
    </div>
    <nav aria-label="Categorias" class="border-t border-line xl:hidden">
      <div class="wrap flex gap-2 overflow-x-auto py-2 [scrollbar-width:none]">
        ${categorias.map(([t, h]) => `<a href="${h}" class="shrink-0 rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink no-underline">${t}</a>`).join('\n        ')}
      </div>
    </nav>
    ${progress ? '<div class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent"><div data-progress class="h-full origin-left scale-x-0 bg-olive-600"></div></div>' : ''}
  </header>
  <div id="menu" data-menu class="fixed inset-x-0 bottom-0 top-28 z-30 hidden overflow-y-auto bg-paper xl:hidden">
    <nav aria-label="Menu" class="wrap flex flex-col py-4">
      ${nav.map(([t, h]) => `<a href="${h}" class="border-b border-line py-3.5 font-display text-xl no-underline">${t}</a>`).join('\n      ')}
      <a href="/sobre/" class="border-b border-line py-3.5 font-display text-xl no-underline">Sobre</a>
    </nav>
  </div>
  <main id="conteudo">
${body}
  </main>
  <footer class="mt-24 bg-olive-900 text-olive-100">
    <div class="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
      <div>
        <a href="/" class="flex items-center gap-2.5 no-underline">${logoMark('h-10 w-10')}<span class="font-display text-xl font-semibold text-white">${esc(cfg.name)}</span></a>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-olive-200">${esc(cfg.tagline)}</p>
        ${pinLink('mt-4 inline-flex items-center gap-2 text-sm font-medium text-white no-underline hover:underline', '<span>Pinterest</span>')}
      </div>
      <div>
        <p class="text-xs font-semibold uppercase tracking-[.14em] text-olive-200">Categorias</p>
        <ul class="mt-4 space-y-2.5 text-sm">
          ${categorias.map(([t, h]) => `<li><a class="text-white/90 no-underline hover:underline" href="${h}">${t}</a></li>`).join('\n          ')}
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
          <li><a class="text-white/90 no-underline hover:underline" href="/sobre/">Sobre</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/contato/">Contato</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/como-funciona/">Como funciona</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/transparencia-afiliados/">Transparência</a></li>
          <li><a class="text-white/90 no-underline hover:underline" href="/privacidade/">Privacidade</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10">
      <div class="wrap space-y-2 py-6 text-xs leading-relaxed text-olive-200">
        <p>${esc(cfg.name)} é um portal de recomendações, não uma loja. A compra é feita no Mercado Livre. Participamos do programa de afiliados do Mercado Livre e podemos receber comissão, sem custo extra para você.</p>
        <p>Mercado Livre é marca de seus respectivos titulares. Este site não é operado pelo Mercado Livre. Preços conferidos em ${esc(cfg.dataConsultada)}.</p>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}
